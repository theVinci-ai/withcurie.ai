'use client';

import Image from 'next/image';
import { Linkedin } from 'lucide-react';
export default function OpenAIAPIPage() {
  return (
    <div className='min-h-screen w-full relative text-white bg-[#07090D]'>
      {/* Full Background Image */}
      <Image
        src='/background.svg'
        alt='Background space view'
        fill
        priority
        className='object-cover '
      />
      {/* Overlay Content */}
      <div className='flex flex-col items-center justify-center min-h-screen relative z-10 text-center px-4'>
        {/* Heading */}
        <h1 className='text-3xl md:text-5xl font-bold mb-4'>
          OPEN API Of Practice AI
        </h1>
        {/* Subheading */}
        <p className='text-lg md:text-xl text-gray-300'>Coming Soon.</p>
      </div>

      {/* Social Media Icons at Bottom Center */}
      <div className='absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 flex space-x-6'>
        <a
          href='https://www.linkedin.com/company/practice-ai/'
          target='_blank'
          rel='noopener noreferrer'
          className='hover:text-gray-300 transition-colors'
        >
          <Linkedin size={21} />
        </a>
      </div>

      {/* Floating Animation */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
