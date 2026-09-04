'use client'

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GradientText2Props {
    children: ReactNode;
    className?: string;
    bold?: boolean;
    variant?: "solid" | "sunset" | "soft";
}

const variantClasses = {
    solid: "text-amber-500",
    sunset: "bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-500 bg-clip-text text-transparent",
    soft: "bg-gradient-to-r from-yellow-300 to-amber-600 bg-clip-text text-transparent",
};

export function GradientText2({ children, className, bold = false, variant = "sunset" }: GradientText2Props) {
    const colorClasses = variantClasses[variant];

    if (!bold) {
        return <span className={cn(colorClasses, className)}>{children}</span>;
    }

    return (
        <span className={cn("relative inline-block", className)}>
            <span aria-hidden="true" className={cn(colorClasses, "absolute inset-0")} style={{ transform: "translateX(-0.4px)" }}>
                {children}
            </span>
            <span aria-hidden="true" className={cn(colorClasses, "absolute inset-0")} style={{ transform: "translateX(0.4px)" }}>
                {children}
            </span>
            <span className={cn(colorClasses, "relative")}>{children}</span>
        </span>
    );
}