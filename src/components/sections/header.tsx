import Link from 'next/link';
import { Bars } from '../icons/bars';

export const Header = () => {
    return (
        <header className="fixed inset-0 h-20 w-full backdrop-blur-md">
            <div className="container !max-w-full">
                <div className="flex h-20 items-center justify-between">
                    <div className="">
                        <Link href="/">
                            <span className="text-xl font-bold uppercase">
                                Remus&nbsp;&nbsp;Burlacu
                            </span>
                        </Link>
                    </div>
                    <div className="flex items-center gap-4">
                        <Bars />
                        <button className="hidden h-11 items-center rounded-xl border border-red-orange-500 bg-red-orange-500 px-6 uppercase text-white md:inline-flex">
                            Contact me
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};
