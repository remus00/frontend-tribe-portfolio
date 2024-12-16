'use client';
import { testimonials } from '@/constants';
import Image from 'next/image';
import { useState } from 'react';
import { SectionWrapper } from '../custom/section-wrapper';
import { ArrowLeft } from '../icons/arrow-left';
import { ArrowRight } from '../icons/arrow-right';

export const Testimonials = () => {
    const [testimonialsIndex, setTestimonialsIndex] = useState<number>(0);

    return (
        <SectionWrapper>
            <h2 className="flex flex-col overflow-hidden text-4xl md:text-7xl lg:text-8xl">
                <span className="whitespace-nowrap">
                    Some nice words from my past clients
                </span>
                <span className="self-end whitespace-nowrap text-red-orange-500">
                    Some nice words from my past clients
                </span>
            </h2>
            <div className="container">
                <div className="mt-20">
                    {testimonials.map(
                        ({ name, company, role, quote, image, imagePositionY }, idx) =>
                            testimonialsIndex === idx && (
                                <div
                                    key={idx}
                                    className="grid md:grid-cols-5 md:items-center md:gap-8 lg:gap-16"
                                >
                                    <div className="aspect-square md:col-span-2 md:aspect-[9/16]">
                                        <Image
                                            src={image}
                                            alt={`${name} image`}
                                            className="size-full object-cover"
                                            style={{
                                                objectPosition: `50% ${imagePositionY * 100}%`,
                                            }}
                                        />
                                    </div>
                                    <blockquote className="md:col-span-3">
                                        <div className="mt-8 text-3xl md:mt-0 md:text-5xl lg:text-6xl">
                                            <span>&ldquo;</span>
                                            <span>{quote}</span>
                                            <span>&rdquo;</span>
                                        </div>
                                        <cite className="mt-4 block not-italic md:mt-8 md:text-lg lg:text-xl">
                                            {name}, {role} at {company}
                                        </cite>
                                    </blockquote>
                                </div>
                            )
                    )}
                </div>

                <div className="mt-6 flex items-center gap-4 lg:mt-10">
                    <button className="inline-flex size-11 items-center justify-center rounded-full border border-stone-400">
                        <ArrowLeft />
                    </button>
                    <button className="inline-flex size-11 items-center justify-center rounded-full border border-stone-400">
                        <ArrowRight />
                    </button>
                </div>
            </div>
        </SectionWrapper>
    );
};
