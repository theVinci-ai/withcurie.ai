'use client';
import Image from 'next/image';
import { Button } from '../Button';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { imagesPath } from '@/utils/constants';

interface ITabContent {
    subtitle: React.ReactNode;
    imageSrc: string;
    altText?: string;
    paragraph: string;
    btnText: string;
    showArrow?: boolean;
    onButtonClick: () => void;
}

export const TabContent: React.FC<ITabContent> = ({
    subtitle,
    imageSrc,
    altText = 'notes',
    paragraph,
    btnText,
    onButtonClick,
    showArrow = false,
}) => {
    const tabRef = useRef(null);
    const isInView = useInView(tabRef, { once: true });

    return (
        <div className="grid lg:grid-cols-2 lg:gap-16" ref={tabRef}>
            <div className="mt-4 lg:mt-8">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                        duration: 0.7,
                        delay: 0.5,
                    }}
                    className="max-w-[592px] text-3xl md:text-[42px] lg:text-[58px] text-light-400 dark:text-white font-gilroy-semibold md:leading-[50px] xl:leading-[81px] mb-4 lg:mb-6"
                >
                    {subtitle}
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                        duration: 1,
                        delay: 1,
                    }}
                    className="text-lg md:text-base mb-6 lg:mb-10 font-gilroy-medium"
                >
                    {paragraph}
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                        duration: 1,
                        delay: 1.5,
                    }}
                >
                    <>
                        {showArrow && (
                            <div className="absolute top-90 left-[104px] md:left-32 rotate-180 brightness-0">
                                <Image
                                    src={imagesPath.tiltedArrow}
                                    alt="Black Arrow pointing at a button"
                                    width={100}
                                    height={100}
                                />
                            </div>
                        )}
                        <Button
                            className="font-gilroy-semibold text-base !py-[10px]"
                            onClick={onButtonClick}
                        >
                            {btnText}
                        </Button>
                    </>
                </motion.div>
            </div>
            <div className="lg:bg-white dark:bg-dark-200 notes-block relative mt-6 lg:mt-0">
                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                        duration: 1.5,
                        delay: 1,
                    }}
                    className="relative lg:mt-[-70px]"
                >
                    <Image
                        className="w-full lg:h-[550px] object-contain"
                        width={750}
                        height={545}
                        src={imageSrc}
                        alt={altText}
                    />
                </motion.div>
            </div>
        </div>
    );
};
