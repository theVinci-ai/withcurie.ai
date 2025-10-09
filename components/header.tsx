'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { ChevronDown, Menu, X } from 'lucide-react';
import { ownerDetail } from '@/utils/constants';

export default function Header() {
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    const link = document.createElement('a');
    link.href = ownerDetail.calendlyLink;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.click();
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <header className='bg-[#07090D] border-b border-gray-800 sticky top-0 z-50'>
      <div className='max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-[81px]'>
          {/* Logo */}
          <Link href='/' className='flex items-center space-x-2'>
            <Image
              src='/images/practice-ai-logos.svg'
              alt='Curie AI'
              width={32}
              height={32}
              className='w-8 h-8'
            />
            <span className='text-white text-xl font-semibold'>Curie AI</span>
          </Link>

          {/* Navigation */}
          <nav className='hidden xl:flex items-center space-x-8'>
            <div className='relative' ref={dropdownRef}>
              <div className='flex items-center'>
                <Link
                  href='/'
                  // onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className={`flex items-center text-sm font-medium transition-colors ${
                    pathname === '/' || isDropdownOpen
                      ? 'text-[#799B4B]'
                      : 'text-[#9096A2] hover:text-white'
                  }`}
                >
                  <span>Home</span>
                </Link>
                <ChevronDown
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className={`w-4 h-4 ml-1 transition-transform cursor-pointer duration-200  ${
                    pathname === '/'
                      ? isDropdownOpen
                        ? 'text-[#799B4B] rotate-180'
                        : 'text-[#799B4B] hover:text-'
                      : ''
                  }`}
                />
              </div>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className='absolute top-full left-0 mt-2 w-41 bg-[#07090D] border border-[#21242C] rounded-xl shadow-lg backdrop-blur-sm z-50'>
                  <div className='py-3'>
                    <Link
                      href='#'
                      className='block px-6 py-2 text-sm text-[#FFFFFF] hover:text-white hover:rounded-sm hover:bg-[#799B4B20] transition-colors'
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      What We Do
                    </Link>

                    <Link
                      href='#'
                      className='block px-6 py-2 text-sm text-[#FFFFFF] hover:rounded-sm hover:text-white hover:bg-[#799B4B20] transition-colors'
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      FAQ
                    </Link>
                    <Link
                      href='/contact'
                      className='block px-6 py-2 text-sm text-[#FFFFFF] hover:rounded-sm hover:text-white hover:bg-[#799B4B20] transition-colors'
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              )}
            </div>
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
              API
            </Link>
          </nav>
          {/* CTA Buttons - Desktop */}
          <div
            className='hidden xl:flex items-center space-x-4 cursor-pointer'
            onClick={handleClick}
          >
            <div className=' h-9 bg-zinc-950 hover:bg-[#3d5a33] px-3 py-2 rounded-[10px] border border-[#799B4B33] flex items-center justify-center'>
              <span className='text-neutral-50 transition-colors duration-500 bg-transparent text-sm font-medium leading-tight'>
                Feature Demo
              </span>
            </div>
            <Link
              href={ownerDetail.calendlyLink}
              target='_blank'
              rel='noopener noreferrer'
              className='bg-[#4A6F3E]  duration-500  cursor-pointer text-white px-4 py-2 rounded-[10px] text-sm font-medium hover:bg-[#3d5a33] transition-colors'
            >
              See Demo
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className='xl:hidden text-white p-2 hover:text-[#799B4B] cursor-pointer transition-colors border border-gray-600 rounded-md flex items-center justify-center'
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label='Toggle mobile menu'
          >
            {isMobileMenuOpen ? (
              // Close icon
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            ) : (
              // Hamburger icon
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className='xl:hidden bg-[#07090D] border-t border-gray-800'>
          <div className='max-w-[1440px] mx-auto px-4 py-4'>
            <nav className='space-y-4'>
              {/* Home with Dropdown */}
              <div>
                <div className='flex items-center justify-between'>
                  <Link
                    href='/'
                    className={`text-sm font-medium transition-colors ${
                      pathname === '/' ? 'text-[#799B4B]' : 'text-[#9096A2]'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <button
                    onClick={() =>
                      setIsMobileDropdownOpen(!isMobileDropdownOpen)
                    }
                    className='p-1'
                  >
                    <ChevronDown
                      className={`w-4 h-4 text-[#] cursor-pointer transition-transform duration-200 ${
                        pathname === '/'
                          ? isMobileDropdownOpen
                            ? 'text-[#799B4B] rotate-180'
                            : 'text-[#799B4B] hover:text-'
                          : ''
                      }`}
                    />
                  </button>
                </div>
                {/* Mobile Home Dropdown */}
                {isMobileDropdownOpen && (
                  <div className='mt-2 ml-4 space-y-2'>
                    <Link
                      href='#'
                      className='block text-sm text-[#9096A2] hover:text-white transition-colors'
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setIsMobileDropdownOpen(false);
                      }}
                    >
                      What We Do
                    </Link>
                    <Link
                      href='#'
                      className='block text-sm text-[#9096A2] hover:text-white transition-colors'
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setIsMobileDropdownOpen(false);
                      }}
                    >
                      FAQ
                    </Link>
                    <Link
                      href='/contact'
                      className='block text-sm text-[#9096A2] hover:text-white transition-colors'
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setIsMobileDropdownOpen(false);
                      }}
                    >
                      Contact Us
                    </Link>
                  </div>
                )}
              </div>

              {/* Other Navigation Links */}
              <Link
                href='/medical-practices'
                className={`block text-sm font-medium transition-colors ${
                  pathname === '/medical-practices'
                    ? 'text-[#799B4B]'
                    : 'text-[#9096A2]'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Medical Practices
              </Link>
              <Link
                href='/enterprise-practices'
                className={`block text-sm font-medium transition-colors ${
                  pathname === '/enterprise-practices'
                    ? 'text-[#799B4B]'
                    : 'text-[#9096A2]'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Enterprise Practices
              </Link>
              <Link
                href='/enterprises'
                className={`block text-sm font-medium transition-colors ${
                  pathname === '/enterprises'
                    ? 'text-[#799B4B]'
                    : 'text-[#9096A2]'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Enterprises
              </Link>
              <Link
                href='/open-ai-api'
                className={`block text-sm font-medium transition-colors ${
                  pathname === '/open-ai-api'
                    ? 'text-[#799B4B]'
                    : 'text-[#9096A2]'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Open AI API
              </Link>

              {/* Mobile CTA Buttons */}
              <div className='flex flex-col sm:flex-row pt-4 gap-5 border-t border-gray-800'>
                <button
                  onClick={() => {
                    handleClick();
                    setIsMobileMenuOpen(false);
                  }}
                  className='w-full h-9 bg-zinc-950  duration-500  hover:bg-[#3d5a33] px-3 py-2 rounded-[10px] border border-[#799B4B33] flex items-center justify-center transition-colors'
                >
                  <span className='text-neutral-50 text-sm font-medium leading-tight'>
                    Feature Demo
                  </span>
                </button>
                <Link
                  href={ownerDetail.calendlyLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='block w-full bg-[#4A6F3E] duration-500  text-white px-4 py-2 rounded-[10px] text-sm font-medium hover:bg-[#3d5a33] transition-colors text-center'
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  See Demo
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
