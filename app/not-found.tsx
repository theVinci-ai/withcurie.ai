import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='flex min-h-[80vh] flex-col items-center justify-center px-6 text-center'>
      <div className='mb-6 text-gray-400'>
        {/* Classic warning triangle icon */}
        <svg
          aria-hidden='true'
          width='72'
          height='72'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='mx-auto'
        >
          <path d='M10.29 3.86a2 2 0 0 1 3.42 0l7.14 12.28A2 2 0 0 1 19.14 20H4.86a2 2 0 0 1-1.71-3.86L10.29 3.86z' />
          <line x1='12' y1='9' x2='12' y2='13' />
          <line x1='12' y1='17' x2='12.01' y2='17' />
        </svg>
      </div>
      <p className='mb-1 text-sm tracking-wide text-gray-400'>404</p>
      <h1 className='mb-2 text-2xl font-semibold text-white'>
        We can’t find that page
      </h1>
      <p className='max-w-xl text-balance text-sm text-gray-400'>
        This page may have moved or no longer exists.
      </p>
      <div className='mt-6 flex items-center gap-3'>
        <Link
          href='/'
          className='inline-flex items-center gap-2 rounded-md border border-white/10 bg-white px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-white/90'
        >
          <svg
            aria-hidden='true'
            width='16'
            height='16'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <polyline points='15 18 9 12 15 6' />
          </svg>
          Back to home
        </Link>
      </div>
    </div>
  );
}
