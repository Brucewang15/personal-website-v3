"use client";

import { useEffect, useState } from "react";

export default function ResumePage() {
    const [viewportHeight, setViewportHeight] = useState("100vh");

    // Adjust height on client side to handle mobile viewport issues
    useEffect(() => {
        // Set initial height
        setViewportHeight(`${window.innerHeight}px`);

        // Update height when window is resized
        const handleResize = () => {
            setViewportHeight(`${window.innerHeight}px`);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Prevent scrolling on the main body
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    return (
        <div
            className="fixed top-0 left-0 w-screen bg-background"
            style={{ height: viewportHeight, zIndex: 9999 }}
        >
            <object
                data="/resume.pdf"
                type="application/pdf"
                className="w-full h-full"
            >
                <div className="flex flex-col items-center justify-center w-full h-full bg-background">
                    <p className="mb-4">Unable to display PDF file.</p>
                    <a
                        href="/resume.pdf"
                        download
                        className="px-4 py-2 text-white rounded-md bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500"
                    >
                        Download Resume
                    </a>
                </div>
            </object>
        </div>
    );
}
