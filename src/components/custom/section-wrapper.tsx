import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
}

export const SectionWrapper = ({ children, className, ...rest }: Props) => {
    return (
        <section className={cn('py-24', className)} {...rest}>
            {children}
        </section>
    );
};
