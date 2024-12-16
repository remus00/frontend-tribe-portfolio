import heroImg from '@/assets/images/hero-image.jpg';
import Image from 'next/image';
import { Button } from '../custom/button';
import { ChevronDown } from '../icons/chevron-down';

export const Hero = () => {
    return (
        <section>
            <div className="grid items-stretch md:h-screen md:grid-cols-12">
                <div className="flex flex-col justify-center md:col-span-7">
                    <div className="container !max-w-full">
                        <h1 className="mt-40 text-5xl md:mt-0 md:text-6xl lg:text-7xl">
                            Crafting digital experiences through code and creative design
                        </h1>
                        <div className="mt-10 flex flex-col items-start gap-6 md:flex-row md:items-center">
                            <Button variant="secondary" iconAfter={<ChevronDown />}>
                                <span>View My Work</span>
                            </Button>
                            <Button variant="text">Let&apos; Talk</Button>
                        </div>
                    </div>
                </div>
                <div className="md:col-span-5">
                    <div className="mt-20 md:mt-0 md:h-full">
                        <Image
                            src={heroImg}
                            alt="My portrait"
                            className="size-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
