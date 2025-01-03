import { foooterNavItems } from '@/constants';
import Link from 'next/link';
import { Button } from '../custom/button';
import { SectionWrapper } from '../custom/section-wrapper';
import { ArrowUpRight } from '../icons/arrow-up-right';

export const Footer = () => {
    return (
        <footer className="bg-stone-900 text-white">
            <div className="container">
                <SectionWrapper>
                    <div className="flex items-center gap-3">
                        <div className="size-3 rounded-full bg-green-400"></div>
                        <span className="uppercase">
                            One spot available for next month
                        </span>
                    </div>
                    <div className="grid md:grid-cols-3 md:items-center">
                        <div className="md:col-span-2">
                            <h2 className="mt-8 text-4xl font-extralight md:text-7xl lg:text-8xl">
                                Enough talk let&apos;s make something great together.
                            </h2>
                            <Button
                                variant="secondary"
                                iconAfter={<ArrowUpRight />}
                                className="mt-8"
                            >
                                info@remusburlacu.com
                            </Button>
                        </div>

                        <nav className="mt-16 flex flex-col gap-8 md:mt-0 md:items-end">
                            {foooterNavItems.map(({ href, label }, idx) => (
                                <Link key={idx} href={href}>
                                    <Button variant="text" className="text-lg">
                                        {label}
                                    </Button>
                                </Link>
                            ))}
                        </nav>
                    </div>
                </SectionWrapper>

                <p className="py-16 text-sm text-white/30">
                    Copyright &copy; Remus Burlacu &bull; All rights reserved
                </p>
            </div>
        </footer>
    );
};
