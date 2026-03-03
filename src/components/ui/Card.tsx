import * as React from "react"
import { cn } from "@/lib/utils"

const Card = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(
            "rounded-2xl border border-slate-200 bg-white text-slate-950 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl",
            className
        )}
        {...props}
    />
))
Card.displayName = "Card"

const GlassCard = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(
            "rounded-[20px] bg-white/5 border border-white/10 backdrop-blur-md p-[28px] transition-all duration-300",
            className
        )}
        {...props}
    />
))
GlassCard.displayName = "GlassCard"

export { Card, GlassCard }
