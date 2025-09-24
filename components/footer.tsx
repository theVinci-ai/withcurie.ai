import Link from 'next/link';
import Image from 'next/image';
export default function Footer() {
  return (
    <footer className='bg-[#D2D3CE] pt-16  relative overflow-hidden'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 sm:grid-2 md:grid-cols-5 gap-8'>
          {/* Company Info */}
          <div className='md:col-span-1'>
            <Link href='/' className='flex items-center mb-6'>
              <Image
                src='/logo.svg'
                alt='Practice AI'
                width={38}
                height={37}
                className='w-8 h-8'
              />
              <span className='text-[#0A0C10] text-xl font-bold'>
                Practice AI
              </span>
            </Link>
            <p className='text-[#0A0C10] text-sm mb-6 max-w-sm leading-relaxed'>
              Transforming healthcare with AI-powered workforce solutions that
              deliver measurable outcomes for practices of all sizes.
            </p>
            <div className='inline-flex items-center px-3 py-1 rounded-full border border-black text-xs text-[#0A0C10]'>
              Backed by Google for Startups
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className='text-[#0A0C10] font-bold mb-6'>Solutions</h3>
            <ul className='space-y-4'>
              <li>
                <Link
                  href='/medical-practices'
                  className='text-[#0A0C10] hover:text-black text-sm transition-colors'
                >
                  Medical Practices
                </Link>
              </li>
              <li>
                <Link
                  href='/enterprise-practices'
                  className='text-[#0A0C10] hover:text-black text-sm transition-colors'
                >
                  Enterprise Practices
                </Link>
              </li>
              <li>
                <Link
                  href='/enterprises'
                  className='text-[#0A0C10] hover:text-black text-sm transition-colors'
                >
                  Enterprises
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='text-[#0A0C10] hover:text-black text-sm transition-colors'
                >
                  Case Studies
                </Link>
              </li>
            </ul>
          </div>
          {/* AI Products */}
          <div>
            <h3 className='text-[#0A0C10] font-bold mb-6'>AI Products</h3>
            <ul className='space-y-4'>
              <li>
                <Link
                  href='#'
                  className='text-[#0A0C10] hover:text-black text-sm transition-colors'
                >
                  VISIT AI
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='text-[#0A0C10] hover:text-black text-sm transition-colors'
                >
                  SCRIBE AI
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='text-[#0A0C10] hover:text-black text-sm transition-colors'
                >
                  CODING AI
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='text-[#0A0C10] hover:text-black text-sm transition-colors'
                >
                  BILLING AI
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='text-[#0A0C10] hover:text-black text-sm transition-colors'
                >
                  PAYMENTS
                </Link>
              </li>
            </ul>
          </div>
          {/* Company */}
          <div>
            <h3 className='text-[#0A0C10] font-bold mb-6'>Company</h3>
            <ul className='space-y-4'>
              <li>
                <Link
                  href='#'
                  className='text-[#0A0C10] hover:text-black text-sm transition-colors'
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='text-[#0A0C10] hover:text-black text-sm transition-colors'
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='text-[#0A0C10] hover:text-black text-sm transition-colors'
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='text-[#0A0C10] hover:text-black text-sm transition-colors'
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='text-[#0A0C10] hover:text-black text-sm transition-colors'
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className='text-[#0A0C10] font-bold mb-6'>Resources</h3>
            <ul className='space-y-4'>
              <li>
                <Link
                  href='#'
                  className='text-[#0A0C10] hover:text-black text-sm transition-colors'
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='text-[#0A0C10] hover:text-black text-sm transition-colors'
                >
                  API Reference
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='text-[#0A0C10] hover:text-black text-sm transition-colors'
                >
                  Support
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='text-[#0A0C10] hover:text-black text-sm transition-colors'
                >
                  Feature Demo
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className=''>
        {/* Bottom Section */}
        <div className='absolute bottom-0 w-full'>
          <div className='backdrop-blur-[30px] hidden lg:flex bg-white/30 justify-between flex-row items-start md:items-center gap-4  absolute bottom-0 left-0 right-0 py-4 md:px-16 lg:px-32'>
            <span className='mb-2 md:mb-0 '>
              © 2025 Practice AI. All rights reserved.
            </span>
            <span>Made with AI for Healthcare</span>
          </div>
        </div>
        <div className='overflow-hidden pt-3 lg:pt-8 '>
          <div className='items-center w-full'>
            <Image
              src='/images/footer-logo.svg'
              alt='Practice AI'
              width={450}
              height={360}
              className='w-full -mb-6 lg:mb-0'
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
