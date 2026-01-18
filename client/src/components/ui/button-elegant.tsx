import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:shadow-lg hover:scale-105 active:scale-95",
        secondary: "bg-secondary text-secondary-foreground hover:shadow-lg hover:scale-105 active:scale-95",
        destructive: "bg-destructive text-destructive-foreground hover:shadow-lg hover:scale-105 active:scale-95",
        outline: "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground active:scale-95",
        ghost: "text-foreground hover:bg-muted active:scale-95",
        link: "text-primary underline-offset-4 hover:underline",
        elegant: "bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-elegant hover:shadow-lg hover:scale-105 active:scale-95",
      },
      size: {
        default: "h-10 px-6 py-2",
        sm: "h-9 rounded-md px-4 text-sm",
        lg: "h-12 rounded-lg px-8 text-lg",
        icon: "h-10 w-10",
        "icon-sm": "h-8 w-8",
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
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  )
)
Button.displayName = "Button"

export { Button, buttonVariants }
