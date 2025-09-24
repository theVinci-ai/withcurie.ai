'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import { ownerDetail } from '@/utils/constants';

export default function Header() {
  const pathname = usePathname();
  const handleClick = () => {
    const link = document.createElement('a');
    link.href = ownerDetail.calendlyLink;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.click();
  };
  return (
    <header className='bg-[#07090D] border-b border-gray-800'>
      <div className='max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-13'>
        <div className='flex items-center justify-between h-[81px]'>
          {/* Logo */}
          <Link href='/' className='flex items-center space-x-2'>
            <Image
              src='/images/practice-ai-logos.svg'
              alt='Practice AI'
              width={32}
              height={32}
              className='w-8 h-8'
            />
            <span className='text-white text-xl font-semibold'>
              Practice AI
            </span>
          </Link>

          {/* Navigation */}
          <nav className='hidden md:flex items-center space-x-8'>
            <Link
              href='/'
              className={`text-sm font-medium transition-colors ${
                pathname === '/'
                  ? 'text-[#799B4B]'
                  : 'text-[#9096A2] hover:text-white'
              }`}
            >
              Home
            </Link>
            <Link
              href='/medical-practices'
              className={`text-sm font-medium transition-colors ${
                pathname === '/medical-practices'
                  ? 'text-[#799B4B]'
                  : 'text-[#9096A2] hover:text-white'
              }`}
            >
              Medical Practices
            </Link>
            <Link
              href='/enterprise-practices'
              className={`text-sm font-medium transition-colors ${
                pathname === '/enterprise-practices'
                  ? 'text-[#799B4B]'
                  : 'text-[#9096A2] hover:text-white'
              }`}
            >
              Enterprise Practices
            </Link>
            <Link
              href='/enterprises'
              className={`text-sm font-medium transition-colors ${
                pathname === '/enterprises'
                  ? 'text-[#799B4B]'
                  : 'text-[#9096A2] hover:text-white'
              }`}
            >
              Enterprises
            </Link>
            <Link
              href='/open-ai-api'
              className={`text-sm font-medium transition-colors ${
                pathname === '/open-ai-api'
                  ? 'text-[#799B4B]'
                  : 'text-[#9096A2] hover:text-white'
              }`}
            >
              Open AI API
            </Link>
            {/* <Link
              href='/open-ai-api'
              className={`flex items-center text-sm font-medium transition-colors ${
                pathname === '/open-ai-api'
                  ? 'text-[#799B4B]'
                  : 'text-[#9096A2] hover:text-white'
              }`}
            >
              <span>More</span>
              <ChevronDown className='w-4 h-4 ml-2' />
            </Link> */}
          </nav>

          {/* CTA Buttons */}
          <div
            className='flex items-center space-x-4 cursor-pointer'
            onClick={handleClick}
          >
            <div className='w-28 h-9 relative bg-zinc-950 rounded-[10px] outline-1 outline-offset-[-1px] outline-[#799B4B33]'>
              <div className="w-24 h-4 left-[13px] top-[9px] absolute text-center justify-center text-neutral-50 text-sm font-medium font-['Inter'] leading-tight">
                Feature Demo
              </div>
            </div>
            <Link
              href={ownerDetail.calendlyLink}
              target='_blank'
              rel='noopener noreferrer'
              className='bg-[#4A6F3E] cursor-pointer text-white px-4 py-2 rounded-[10px] text-sm font-medium hover:bg-[#3d5a33] transition-colors'
            >
              See Demo
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
