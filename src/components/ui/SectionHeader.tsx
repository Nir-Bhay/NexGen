import * as React from "react"
import { cn } from "@/lib/utils"

export interface SectionHeaderProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
    title: React.ReactNode
    subtitle?: string
    align?: "left" | "center" | "right"
    badge?: string
    badgeColor?: string // text color for the badge
}

export function SectionHeader({
    title,
    subtitle,
    align = "center",
    badge,
    badgeColor = "text-[#FF6B2C]", // default NexGen orange
    className,
    ...props
}: SectionHeaderProps) {
    return (
        <div
            className={cn(
                "flex flex-col gap-3 mb-12",
                {
                    "items-start text-left": align === "left",
                    "items-center text-center mx-auto": align === "center",
                    "items-end text-right ml-auto": align === "right",
                },
                className
            )}
            {...props}
        >
            {badge && (
                <span className={cn(
                    "uppercase text-[13px] font-semibold tracking-[3px] font-inter mb-1",
                    badgeColor
                )}>
                    {badge}
                </span>
            )}
            <h2 className="text-[32px] md:text-[40px] leading-[1.2] font-bold font-inter text-[#0F172A]">
                {title}
            </h2>
            {subtitle && (
                <p className="text-[16px] leading-[1.6] text-[#475569] max-w-[640px] font-dm-sans">
                    {subtitle}
                </p>
            )}
        </div>
    )
}
