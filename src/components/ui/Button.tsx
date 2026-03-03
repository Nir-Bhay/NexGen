import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-[15px] font-semibold font-inter transition-all duration-300 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                default: "bg-[#6C3AED] text-white hover:bg-[#5b2bd1] hover:shadow-[0_0_20px_rgba(108,58,237,0.4)]",
                gradient: "bg-gradient-to-br from-[#FF6B2C] to-[#6C3AED] text-white hover:shadow-[0_0_20px_rgba(108,58,237,0.4)] hover:opacity-90",
                ghost: "hover:bg-white/10 text-white border border-transparent",
                outline: "border border-white/30 text-white hover:bg-white/5 hover:border-white",
                link: "text-[#CBD5E1] hover:text-white underline-offset-4 hover:underline",
            },
            size: {
                default: "h-11 px-[24px]",
                sm: "h-9 rounded-lg px-4 text-sm",
                lg: "h-14 rounded-xl px-[32px] text-base",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        // Basic implementation since we didn't install radix slot
        const Comp = asChild ? "span" : "button"
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button, buttonVariants }
