import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GradientTextProps {
    children: ReactNode;
    className?: string;
}

export function GradientText({ children, className }: GradientTextProps) {
    return (
        <span
            className={cn(
                "bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 bg-clip-text text-transparent",
                className
            )}
        >
            {children}
        </span>
    );
}