import { GradientText } from "./effects/GradientText";

export default function Experience() {
  return (
    <section id="experience" className="py-8">
      <h2 className="text-3xl lg:text-4xl font-bold mb-6">
        <GradientText>Experience</GradientText>
      </h2>
      <div className="rounded-lg border p-6">
        <p className="text-muted-foreground">
          [Placeholder] List your professional experience, education, and relevant skills here. Include your job
          history, roles, responsibilities, and achievements.
        </p>
      </div>
    </section>
  )
}
