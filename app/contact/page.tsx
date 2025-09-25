'use client';
import Image from 'next/image';
import Link from 'next/link';
import { ownerDetail } from '../../utils/constants';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/components/common/Button';
import { InputType } from '@/utils/commonTypes';
import { ButtonType } from '@/utils/commonTypes';
import { Input } from '@/components/common/Input';


export default function ContactPage() {
  const contactRef = useRef(null);
    const isInView = useInView(contactRef, { once: true });
  return (
    <div className="min-h-screen bg-white">
     
            {/* Main Content */}
            <section
                ref={contactRef}
                className="flex items-center overflow-hidden relative min-h-screen"
            >
                <div className="bg-[#F7F7F7] dark:bg-dark-100 h-full w-full absolute left-1/2 hidden md:block"></div>
                <motion.div
                    className="absolute top-32 right-0 z-10"
                    initial={{ opacity: 0, x: 80 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                        duration: 1,
                        ease: 'easeOut',
                        delay: 1,
                    }}
                >
                    <Image
                        className="hidden md:block"
                        width={300}
                        height={280}
                        src="/contact.svg"
                        alt="Contact Us Icon"
                    />
                </motion.div>
                <div className="max-w-screen-xl mx-auto px-4">
                    <div className="grid md:grid-cols-2 items-center md:gap-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{
                                duration: 1,
                                delay: 0.5,
                            }}
                            className="order-2 md:order-1 py-10 md:px-5 lg:px-12"
                        >
                            <form>
                                <h3 className="text-2xl md:text-3xl font-gilroy-semibold mb-5">
                                    Contact Us
                                </h3>
                                <Input
                                    type={InputType.Text}
                                    placeholder="Your Full Name"
                                />
                                <Input
                                    type={InputType.Text}
                                    placeholder="Your Email"
                                />

                                <textarea
                                    id="message"
                                    rows={6}
                                    className="block text-base p-4 w-full bg-[#F2F2F2] dark:bg-dark-700 dark:text-white rounded-lg border border-[#F2F2F2] dark:border-dark-700 placeholder-gray placeholder:font-medium resize-none text-black focus:border-success focus:ring-success focus:outline-none mb-5"
                                    placeholder="Share your thoughts"
                                ></textarea>

                                <Button
                                    className="w-full"
                                    type={ButtonType.Submit}
                                    onClick={() => {}}
                                >
                                    Send Message
                                </Button>
                            </form>
                        </motion.div>
                        <div className="md:bg-[#F7F7F7] dark:bg-dark-100 h-full relative flex flex-col justify-center order-1 md:order-2 md:px-5 lg:px-16 pt-2 md:py-10">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.7,
                                }}
                                className="text-2xl md:text-3xl text-light-400 dark:text-white font-gilroy-semibold mb-5"
                            >
                                We are here to help you eliminate the
                                administrative burden on your practice with AI
                                allowing you to focus on your patients.
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{
                                    duration: 1,
                                    delay: 1,
                                }}
                            >
                                Our promise is to respond back to you within 48
                                hours to discuss your business needs.
                            </motion.p>
                        </div>
                    </div>
                </div>
            </section>
    </div>
  );
}
