'use client';
import { headerNavItems } from '@/constants';
import { motion, useAnimate } from 'motion/react';
import Link from 'next/link';
import { MouseEvent, useEffect, useState } from 'react';
import { Button } from '../custom/button';
import { ArrowUpRight } from '../icons/arrow-up-right';
import { Bars } from '../icons/bars';

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [navScope, navAnimate] = useAnimate();

    const handleClickMobileNavItem = (e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        setIsOpen(false);

        const url = new URL(e.currentTarget.href);
        const hash = url.hash;

        const target = document.querySelector(hash);

        if (!target) return;

        target.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        if (isOpen) {
            navAnimate([[navScope.current, { height: '100%' }, { duration: 0.7 }]]);
        } else {
            navAnimate([[navScope.current, { height: 0 }]]);
        }
    }, [isOpen, navAnimate, navScope]);

    return (
        <header>
            {/* MOBILE NAV */}
            <motion.div
                ref={navScope}
                className="fixed left-0 top-0 h-0 w-full overflow-hidden bg-stone-900"
            >
                <nav className="mt-20 flex flex-col">
                    {headerNavItems.map(({ label, href }, idx) => (
                        <Link
                            key={idx}
                            href={href}
                            className="group/nav-item relative isolate border-t border-stone-800 py-8 text-stone-200 last:border-b"
                            onClick={handleClickMobileNavItem}
                        >
                            <div className="container flex !max-w-full items-center justify-between">
                                <span className="text-3xl transition-all duration-500 group-hover/nav-item:pl-4">
                                    {label}
                                </span>{' '}
                                <ArrowUpRight />
                            </div>

                            <div className="absolute bottom-0 -z-10 h-0 w-full bg-stone-800 transition-all duration-500 group-hover/nav-item:h-full"></div>
                        </Link>
                    ))}
                </nav>
            </motion.div>

            <div className="fixed left-0 top-0 w-full mix-blend-difference backdrop-blur-md">
                <div className="container !max-w-full">
                    <div className="flex h-20 items-center justify-between">
                        <div className="">
                            <Link href="/">
                                <span className="text-xl font-bold uppercase text-white">
                                    Remus&nbsp;&nbsp;Burlacu
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fixed left-0 top-0 w-full">
                <div className="container !max-w-full">
                    <div className="flex h-20 items-center justify-end">
                        <div className="flex items-center gap-4">
                            <Bars open={isOpen} setOpen={setIsOpen} />
                            <Button variant="primary" className="hidden md:inline-flex">
                                Contact me
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};
