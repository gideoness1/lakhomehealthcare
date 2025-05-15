import React, { forwardRef } from 'react';
import {cn} from "../../utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?:
        | 'default'
        | 'primary'
    size?: 'default' | 'sm' | 'lg' | 'icon';
    asChild?: boolean;
}

const buttonStyles = {
    base: 'inline-flex !h-[56px] border gelasio-bold w-full items-center justify-center whitespace-nowrap rounded-[8px] text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:btn-disabled',
    variants: {
        default: 'btn-default',
        primary: 'btn-custom'
    },
    sizes: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
    },
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            className,
            variant = 'default',
            size = 'default',
            ...props
        },
        ref
    ) => {
        return (
            <button
                className={cn(
                    buttonStyles.base,
                    buttonStyles.variants[variant],
                    buttonStyles.sizes[size],
                    className
                )}
                ref={ref}
                {...props}
            />
        );
    }
);

Button.displayName = 'Button';

export default Button;
