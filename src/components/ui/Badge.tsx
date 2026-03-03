import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
    "inline-flexitems-center rounded-full px-2.5 py-0.5 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2",
    {
        variants: {
            variant: {
                default:
                    "border-transparent bg-slate-900 text-slate-50 hover:bg-slate-900/80",
                secondary:
                    "border-transparent bg-slate-100 text-slate-900 hover:bg-slate-100/80",
                glass:
                    "border border-white/12 bg-white/8 text-slate-300 backdrop-blur-md font-sans text-[13px] px-4 py-1.5",
                tech:
                    "bg-[#EEF2FF] text-[#6C3AED] font-sans font-medium text-[13px] px-3.5 py-1",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
)

export interface BadgeProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> { }

function Badge({ className, variant, ...props }: BadgeProps) {
    return (
        <div className={cn(badgeVariants({ variant }), className)} {...props} />
    )
}

export { Badge, badgeVariants }
