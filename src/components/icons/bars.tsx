import { motion, useAnimate } from 'motion/react';
import { SetStateAction, useEffect } from 'react';

export const Bars = ({
    open,
    setOpen,
}: {
    open: boolean;
    setOpen: React.Dispatch<SetStateAction<boolean>>;
}) => {
    const [topScope, topAnimate] = useAnimate();
    const [bottomScope, bottomAnimate] = useAnimate();

    useEffect(() => {
        if (open) {
            topAnimate([
                [topScope.current, { translateY: 4 }],
                [topScope.current, { rotate: 45 }],
            ]);
            bottomAnimate([
                [bottomScope.current, { translateY: -4 }],
                [bottomScope.current, { rotate: -45 }],
            ]);
        } else {
            topAnimate([
                [topScope.current, { rotate: 0 }],
                [topScope.current, { translateY: 0 }],
            ]);
            bottomAnimate([
                [bottomScope.current, { rotate: 0 }],
                [bottomScope.current, { translateY: 0 }],
            ]);
        }
    }, [open, topAnimate, topScope, bottomAnimate, bottomScope]);

    return (
        <div
            className="inline-flex size-11 items-center justify-center rounded-full border border-stone-400 bg-stone-200"
            onClick={() => setOpen(!open)}
        >
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <motion.rect
                    ref={topScope}
                    x="3"
                    y="7"
                    width="18"
                    height="2"
                    fill="currentColor"
                    style={{
                        transformOrigin: '12px 8px',
                    }}
                />
                <motion.rect
                    ref={bottomScope}
                    x="3"
                    y="15"
                    width="18"
                    height="2"
                    fill="currentColor"
                    style={{
                        transformOrigin: '12px 16px',
                    }}
                />
            </svg>
        </div>
    );
};
