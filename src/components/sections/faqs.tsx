import { faqs } from '@/constants';
import { SectionWrapper } from '../custom/section-wrapper';
import { Plus } from '../icons/plus';

export const FAQs = () => {
    return (
        <SectionWrapper>
            <div className="container">
                <h2 className="text-4xl md:text-7xl lg:text-8xl">FAQs</h2>
                <div className="mt-10 md:mt-16 lg:mt-20">
                    {faqs.map(({ question, answer }, idx) => (
                        <div
                            key={idx}
                            className="border-t border-dotted border-stone-400 py-6 last:border-b md:py-8 lg:py-10"
                        >
                            <div className="flex items-center justify-between gap-4">
                                <div className="text-2xl md:text-3xl lg:text-4xl">
                                    {question}
                                </div>
                                <Plus />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};
