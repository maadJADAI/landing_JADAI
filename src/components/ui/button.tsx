import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/* Botones del sistema (docs/01-SISTEMA §6): rectos (3px), sin pills.
   primary = tinta · accent = cian con tinta encima · ghost = hairline. */
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[3px] font-medium transition-colors duration-200 active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-accent-ink disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-40",
  {
    variants: {
      variant: {
        primary: "bg-ink text-bg hover:bg-accent-ink hover:text-white",
        accent: "bg-accent text-on-accent hover:bg-accent-ink hover:text-white",
        ghost:
          "border border-rule-strong bg-transparent text-ink hover:bg-ink hover:text-bg",
      },
      size: {
        default: "px-6 py-3 text-sm",
        sm: "px-4 py-2 text-sm",
        lg: "px-8 py-3.5 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "default" },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
