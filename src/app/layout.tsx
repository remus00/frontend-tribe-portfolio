import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Archivo } from 'next/font/google';
import './globals.css';

export const metadata: Metadata = {
    title: 'Minimal Single Page Portfolio',
    description: 'Created with Frontend Tribe',
    authors: [{ name: 'Marian Remus Burlacu' }],
};

const archivo = Archivo({
    display: 'swap',
    subsets: ['latin'],
    variable: '--font-archivo',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={cn(
                    'bg-stone-200 font-sans text-stone-900 antialiased',
                    archivo.variable
                )}
            >
                {children}
            </body>
        </html>
    );
}
