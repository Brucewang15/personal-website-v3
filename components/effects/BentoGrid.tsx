import { cn } from "@/lib/utils";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "mx-auto grid max-w-7xl grid-cols-6 gap-4",
                className,
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    header,
    icon,
    height = "md:h-[18rem]",
    width = "col-span-3", // Default is 1:1 (3 columns in a 6-column grid)
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
    height?: string;
    width?: "col-span-1" | "col-span-2" | "col-span-3" | "col-span-4" | "col-span-5" | "col-span-6";
}) => {
    return (
        <div
            className={cn(
                "group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl p-[1px] transition duration-200 hover:shadow-xl bg-gradient-to-b from-neutral-200 to-neutral-400 dark:from-white/[0.15] dark:to-white/[0.025]",
                height,
                width,
                className,
            )}
        >
            <div className="h-full w-full rounded-xl bg-white p-6 dark:bg-black">
                {header}
                <div className="">
                    <div className="flex items-center gap-2 mb-2">
                        {icon}
                        <div className="font-sans font-semibold ml-1 text-neutral-600 dark:text-neutral-200">
                            {title}
                        </div>
                    </div>
                    <div className="font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300">
                        {description}
                    </div>
                </div>
            </div>
        </div>
    );
};
