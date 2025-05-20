'use client'

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface GradientBorderProps {
    children: ReactNode;
    className?: string;
    borderWidth?: string;
    borderRadius?: string;
    startColor?: string;
    middleColor?: string;
    endColor?: string;
    padding?: string;
}

export function GradientBorder({
    children,
    className,
    borderWidth = "1px",
    borderRadius = "0.5rem",
    startColor = "#a855f7", // purple-500
    middleColor = "#fbbf24",
    endColor = "#ec4899",   // pink-500
}: GradientBorderProps) {
    return (
        <div
            className={cn(
                "relative inline-block",
                className
            )}
        >
            <div
                className="absolute inset-0 rounded-[inherit] z-0"
                style={{
                    background: `linear-gradient(to right, ${startColor}, ${middleColor}, ${endColor})`,
                    borderRadius,
                    padding: borderWidth,
                    margin: `-${borderWidth}`,
                }}
            />
            <div
                className="relative z-5 rounded-[inherit] bg-background"
                style={{
                    borderRadius,
                }}
            >
                {children}
            </div>
        </div>
    );
}
