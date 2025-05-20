import { z } from "zod";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
    name: z.string().min(1),
    email: z.string().email(),
    message: z.string().min(1),
})
export async function POST(req: Request) {
    try {
        const requestData = await req.json();
        const validatedFields = contactSchema.safeParse(requestData);
        if (!validatedFields.success) {
            return NextResponse.json({ error: "Invalid fields" }, { status: 400 });
        }
        const { name, email, message } = validatedFields.data;

        const { data, error } = await resend.emails.send({
            from: 'Contact Form <onboarding@resend.dev>',
            to: 'bruce.wang1540@gmail.com',
            subject: 'Contact Form Submission',
            html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
        })

        if (error) {
            return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
        }
        return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });

    } catch (error) {
        console.log('error',error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });

    }

}
