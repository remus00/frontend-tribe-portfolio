import Link from 'next/link';
import { Button } from '../custom/button';
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
                        <Button variant="primary" className="hidden md:inline-flex">
                            Contact me
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
};
