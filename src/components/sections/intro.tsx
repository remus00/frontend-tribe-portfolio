import { SectionWrapper } from '../custom/section-wrapper';

export const Intro = () => {
    return (
        <SectionWrapper className="mt-12 md:mt-16 md:py-32 lg:mt-20 lg:py-40">
            <div className="container">
                <h2 className="text-4xl md:text-7xl lg:w-[80%] lg:text-8xl">
                    Building beautiful websites with clean code and thoughtful design to
                    help your business grow and stand out online
                </h2>
            </div>
        </SectionWrapper>
    );
};
