import { cn } from '@/lib/utils';
import { ButtonHTMLAttributes, ReactNode } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant: 'primary' | 'secondary' | 'text';
    iconAfter?: ReactNode;
}

export const Button = ({ variant, className, children, iconAfter, ...rest }: Props) => {
    return (
        <button
            className={cn(
                'inline-flex h-11 items-center gap-2 rounded-xl border border-red-orange-500 px-6 uppercase',
                variant === 'primary' && 'bg-red-orange-500 text-white',
                variant === 'secondary' && '',
                variant === 'text' && 'h-auto border-transparent px-0',
                className
            )}
            {...rest}
        >
            <span>{children}</span>
            {iconAfter && <span>{iconAfter}</span>}
        </button>
    );
};
