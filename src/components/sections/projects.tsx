import { projects } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import { SectionWrapper } from '../custom/section-wrapper';
import { ArrowUpRight } from '../icons/arrow-up-right';

export const Projects = () => {
    return (
        <SectionWrapper>
            <div className="container">
                <h2 className="text-4xl md:text-7xl lg:text-8xl">Selected works</h2>
                <div className="mt-10 md:mt-16 lg:mt-20">
                    {projects.map(({ name, image }) => (
                        <Link
                            key={name}
                            href={''}
                            className="flex flex-col border-t border-dotted border-stone-400 py-6 last:border-b md:py-8 lg:py-10"
                        >
                            <div className="">
                                <div className="aspect-video md:hidden">
                                    <Image
                                        src={image}
                                        alt={`${name} image`}
                                        className="size-full object-cover"
                                    />
                                </div>
                                <div className="mt-8 flex items-center justify-between md:mt-0">
                                    <h3 className="text-2xl md:text-3xl lg:text-4xl">
                                        {name}
                                    </h3>
                                    <ArrowUpRight />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};
