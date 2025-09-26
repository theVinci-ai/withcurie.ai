import {
  ArrowRight,
  Shield,
  CheckCircle,
  Clock,
  Users,
  TrendingUp,
  Calculator,
  Building,
  Globe,
  Zap,
} from 'lucide-react';
import { CustomButton } from '@/components/ui/custom-button';

export default function EnterprisesPage() {
  return (
    <div className='min-h-screen bg-[#07090D] text-white overflow-x-hidden'>
      {/* Hero Section */}
      <section className='relative py-12 md:py-20 px-4 md:px-6 overflow-hidden bg-black'>
        {/* Background image */}
        <div
          className='absolute inset-0 bg-cover bg-center bg-no-repeat'
          style={{
            backgroundImage: "url('/images/enterprise-bg.svg')",
            opacity: 0.6,
          }}
        ></div>
        {/* Radial gradient overlay */}
        <div
          className='absolute inset-0'
          style={{
            background:
              'radial-gradient(circle, #16A2491A 0%, transparent 70%)',
            opacity: 0.2,
          }}
        ></div>
        {/* Linear gradient overlay */}
        <div className='absolute inset-0 bg-gradient-to-b from-[#4A6F3E]/5 to-transparent'></div>

        {/* Animated dots background - positioned only in background, not on UI elements */}
        <div className='absolute inset-0 overflow-hidden pointer-events-none'>
          <div className='absolute top-20 left-20 w-2 h-2 bg-[#799B4B] rounded-full animate-pulse'></div>
          <div
            className='absolute top-32 right-32 w-1 h-1 bg-[#799B4B] rounded-full animate-pulse'
            style={{ animationDelay: '0.5s' }}
          ></div>
          <div
            className='absolute top-40 left-1/3 w-1.5 h-1.5 bg-[#799B4B] rounded-full animate-pulse'
            style={{ animationDelay: '1s' }}
          ></div>
          <div
            className='absolute bottom-40 right-20 w-2 h-2 bg-[#799B4B] rounded-full animate-pulse'
            style={{ animationDelay: '1.5s' }}
          ></div>
          <div
            className='absolute bottom-32 left-16 w-1 h-1 bg-[#799B4B] rounded-full animate-pulse'
            style={{ animationDelay: '2s' }}
          ></div>
          <div
            className='absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-[#799B4B] rounded-full animate-pulse'
            style={{ animationDelay: '2.5s' }}
          ></div>
          <div
            className='absolute top-16 left-1/2 w-1 h-1 bg-[#799B4B] rounded-full animate-pulse'
            style={{ animationDelay: '3s' }}
          ></div>
          <div
            className='absolute bottom-20 right-1/3 w-2 h-2 bg-[#799B4B] rounded-full animate-pulse'
            style={{ animationDelay: '3.5s' }}
          ></div>
          <div
            className='absolute top-1/3 left-1/4 w-1.5 h-1.5 bg-[#799B4B] rounded-full animate-pulse'
            style={{ animationDelay: '4s' }}
          ></div>
          <div
            className='absolute bottom-1/3 left-1/2 w-1 h-1 bg-[#799B4B] rounded-full animate-pulse'
            style={{ animationDelay: '4.5s' }}
          ></div>
        </div>

        <div className='max-w-6xl mx-auto relative z-10'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            {/* Left side - Main content */}
            <div>
              <div className='mb-6'>
                <span className='inline-block bg-[#799B4B]/10 border border-[#799B4B]/20 rounded-full px-4 py-2 text-[#799B4B] text-sm font-medium'>
                  Enterprise AI Workforce Platform
                </span>
              </div>

              <h1 className='text-5xl md:text-6xl font-bold mb-6 leading-tight text-white'>
                Replace
                <br />
                Headcount <span className='text-[#799B4B]'>with</span>
                <br />
                <span className='text-[#799B4B]'>Intelligence</span> at
                <br />
                Enterprise <span className='text-[#799B4B]'>Scale</span>
              </h1>

              <p className='text-xl text-gray-300 mb-8 leading-relaxed'>
                Deploy intelligent AI agents to transform 10,000+ employee
                operations. Enterprise-grade orchestration for Fortune 500
                healthcare at unprecedented scale.
              </p>

              <div className='flex flex-col sm:flex-row items-start gap-4 mb-8'>
                <CustomButton
                  backgroundColor='#799B4B'
                  hoverBackgroundColor='#799B4B90'
                  width='auto'
                  className='px-4 md:px-8'
                  iconPosition='right'
                  icon={
                    <svg
                      className='w-4 h-4'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M9 5l7 7-7 7'
                      />
                    </svg>
                  }
                >
                  Schedule Executive Briefing
                </CustomButton>
                <CustomButton
                  backgroundColor='transparent'
                  textColor='#FFFFFF'
                  hoverBackgroundColor='rgba(255, 255, 255, 0.1)'
                  width='auto'
                  className='px-4 md:px-8 border border-gray-600 hover:border-gray-400'
                >
                  Calculate $100M+ ROI
                </CustomButton>
              </div>

              {/* Compliance badges */}
              <div className='flex items-center gap-6 text-sm text-white'>
                <div className='flex items-center gap-2'>
                  <svg
                    className='w-4 h-4 text-[#A3D977]'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
                    />
                  </svg>
                  <span>SOC 2 Compliant</span>
                </div>
                <div className='flex items-center gap-2'>
                  <svg
                    className='w-4 h-4 text-[#A3D977]'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M13 10V3L4 14h7v7l9-11h-7z'
                    />
                  </svg>
                  <span>HIPAA Ready</span>
                </div>
                <div className='flex items-center gap-2'>
                  <img
                    src='/images/enterprise-scale.svg'
                    alt='Enterprise Scale'
                    className='w-4 h-4'
                  />
                  <span>Enterprise Scale</span>
                </div>
              </div>
            </div>

            {/* Right side - Enterprise Impact card */}
            <div
              className='rounded-xl p-8'
              style={{
                backgroundColor: 'rgba(7, 9, 13, 0.2)',
                border: '1px solid rgba(162, 192, 67, 0.2)',
                borderRadius: '12px',
                backdropFilter: 'blur(16px)',
              }}
            >
              <div className='mb-6 text-center'>
                <h3
                  className='text-lg font-medium mb-2'
                  style={{ color: '#A2C043' }}
                >
                  Enterprise Impact
                </h3>
                <p className='text-gray-400 text-sm'>
                  Live metrics from our platform
                </p>
              </div>

              <div className='grid grid-cols-2 gap-6 mb-6'>
                <div>
                  <div
                    className='text-3xl font-bold mb-1'
                    style={{ color: '#A2C043' }}
                  >
                    99.9%
                  </div>
                  <div className='text-gray-400 text-sm'>Uptime SLA</div>
                </div>
                <div>
                  <div
                    className='text-3xl font-bold mb-1'
                    style={{ color: '#A2C043' }}
                  >
                    340%
                  </div>
                  <div className='text-gray-400 text-sm'>ROI Average</div>
                </div>
              </div>

              <div className='space-y-4 mb-6'>
                <div className='flex justify-between items-center'>
                  <span className='text-gray-400 text-sm'>
                    Claims Processed Today
                  </span>
                  <span className='font-bold' style={{ color: '#A2C043' }}>
                    7,615
                  </span>
                </div>
                <div className='flex justify-between items-center'>
                  <span className='text-gray-400 text-sm'>
                    Active AI Agents
                  </span>
                  <span className='font-bold' style={{ color: '#A2C043' }}>
                    7,615
                  </span>
                </div>
                <div className='flex justify-between items-center'>
                  <span className='text-gray-400 text-sm'>
                    Cost Savings (Monthly)
                  </span>
                  <span className='font-bold' style={{ color: '#A2C043' }}>
                    $9,138
                  </span>
                </div>
              </div>

              <div className='border-t border-gray-800 pt-4'>
                <div className='text-center'>
                  <span className='text-gray-400 text-sm'>
                    Processing Speed
                  </span>
                  <div className='flex items-center justify-center gap-2 mt-1'>
                    <div className='w-2 h-2 bg-[#799B4B] rounded-full animate-pulse'></div>
                    <span
                      className='text-sm font-medium'
                      style={{ color: '#A2C043' }}
                    >
                      Real-time
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The $940B Enterprise Opportunity */}
      {/* The $940B Enterprise Opportunity */}
      <section className='px-4 md:px-6 py-12 md:py-20 bg-black'>
        <div className='max-w-6xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold mb-6'>
              The <span className='text-[#799B4B]'>$940B Enterprise</span>{' '}
              Opportunity
            </h2>
            <p className='text-xl text-gray-400 mb-12 max-w-3xl mx-auto'>
              Six proven enterprise verticals where AI workforce transformation
              delivers immediate ROI and sustainable competitive advantage at
              Fortune 500 scale.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {/* Smart Coding & Billing */}
            <div className='bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700 rounded-xl p-6 hover:border-[#799B4B]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#799B4B]/10 flex flex-col'>
              <div className='w-12 h-12 rounded-xl flex items-center justify-center mb-6'>
                <img
                  src='/images/smart-coding.svg'
                  alt='Smart Coding & Billing'
                  className='w-12 h-12'
                />
              </div>
              <h3 className='text-xl font-semibold text-white mb-4'>
                Smart Coding & Billing
              </h3>
              <div className='bg-gray-800/50 rounded-lg p-4 mb-4 font-mono text-sm text-gray-300'>
                <div>patientId: "P-12345",</div>
                <div>chiefComplaint: "chest pain",</div>
                <div>includeHistory: true</div>
                <div className='mt-2'>
                  <div>icd10: "R-21345",</div>
                  <div>chiefComplaint: "chest pain",</div>
                  <div>includeHistory: true</div>
                </div>
              </div>
              <div className='space-y-2 mb-6 flex-grow'>
                <div className='flex items-center space-x-2 text-sm'>
                  <div className='w-2 h-2 bg-[#799B4B] rounded-full'></div>
                  <span className='text-[#799B4B]'>90% faster processing</span>
                </div>
                <div className='flex items-center space-x-2 text-sm'>
                  <div className='w-2 h-2 bg-[#799B4B] rounded-full'></div>
                  <span className='text-[#799B4B]'>$500K+ annual savings</span>
                </div>
              </div>
              <button
                className='text-white hover:bg-gray-700/50 transition-colors mt-auto'
                style={{
                  width: '323.33px',
                  height: '40px',
                  borderRadius: '10px',
                  border: '1px solid #1E293B',
                  backgroundColor: 'transparent',
                }}
              >
                View Case Study
              </button>
            </div>

            {/* Multi-State Hospital Systems */}
            <div className='bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-[#799B4B]/30 transition-all duration-300 flex flex-col'>
              <div className='w-12 h-12 rounded-xl flex items-center justify-center mb-6'>
                <img
                  src='/images/multi-scale-hospital-system.svg'
                  alt='Multi-State Hospital Systems'
                  className='w-12 h-12'
                />
              </div>
              <h3 className='text-xl font-semibold text-white mb-4'>
                Multi-State Hospital Systems
              </h3>
              <p className='text-gray-400 text-sm mb-4 leading-relaxed'>
                Unified AI orchestration across all facilities. Automated
                compliance monitoring, resource optimization, and cross-facility
                coordination.
              </p>
              <div className='space-y-2 mb-6 flex-grow'>
                <div className='flex items-center space-x-2 text-sm'>
                  <div className='w-2 h-2 bg-[#799B4B] rounded-full'></div>
                  <span className='text-[#799B4B]'>
                    500+ hospitals automated
                  </span>
                </div>
                <div className='flex items-center space-x-2 text-sm'>
                  <div className='w-2 h-2 bg-[#799B4B] rounded-full'></div>
                  <span className='text-[#799B4B]'>100% compliance rate</span>
                </div>
                <div className='flex items-center space-x-2 text-sm'>
                  <div className='w-2 h-2 bg-[#799B4B] rounded-full'></div>
                  <span className='text-[#799B4B]'>$25M cost reduction</span>
                </div>
              </div>
              <button
                className='text-white hover:bg-gray-700/50 transition-colors mt-auto'
                style={{
                  width: '323.33px',
                  height: '40px',
                  borderRadius: '10px',
                  border: '1px solid #1E293B',
                  backgroundColor: 'transparent',
                }}
              >
                View Case Study
              </button>
            </div>

            {/* National Insurance Payers */}
            <div className='bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-[#799B4B]/30 transition-all duration-300 flex flex-col'>
              <div className='w-12 h-12 rounded-xl flex items-center justify-center mb-6'>
                <img
                  src='/images/national-insurance-payers.svg'
                  alt='National Insurance Payers'
                  className='w-12 h-12'
                />
              </div>
              <h3 className='text-xl font-semibold text-white mb-4'>
                National Insurance Payers
              </h3>
              <p className='text-gray-400 text-sm mb-4 leading-relaxed'>
                AI agents handle millions of claims with advanced fraud
                detection. Real-time adjudication and regulatory compliance
                automation.
              </p>
              <div className='space-y-2 mb-6 flex-grow'>
                <div className='flex items-center space-x-2 text-sm'>
                  <div className='w-2 h-2 bg-[#799B4B] rounded-full'></div>
                  <span className='text-[#799B4B]'>10M+ claims/month</span>
                </div>
                <div className='flex items-center space-x-2 text-sm'>
                  <div className='w-2 h-2 bg-[#799B4B] rounded-full'></div>
                  <span className='text-[#799B4B]'>95% fraud detection</span>
                </div>
                <div className='flex items-center space-x-2 text-sm'>
                  <div className='w-2 h-2 bg-[#799B4B] rounded-full'></div>
                  <span className='text-[#799B4B]'>3-day processing</span>
                </div>
              </div>
              <button
                className='text-white hover:bg-gray-700/50 transition-colors mt-auto'
                style={{
                  width: '323.33px',
                  height: '40px',
                  borderRadius: '10px',
                  border: '1px solid #1E293B',
                  backgroundColor: 'transparent',
                }}
              >
                View Case Study
              </button>
            </div>

            {/* Integrated Delivery Networks */}
            <div className='bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-[#799B4B]/30 transition-all duration-300 flex flex-col'>
              <div className='w-12 h-12 rounded-xl flex items-center justify-center mb-6'>
                <img
                  src='/images/integrated-delivery-networks.svg'
                  alt='Integrated Delivery Networks'
                  className='w-12 h-12'
                />
              </div>
              <h3 className='text-xl font-semibold text-white mb-4'>
                Integrated Delivery Networks (IDNs)
              </h3>
              <p className='text-gray-400 text-sm mb-4 leading-relaxed'>
                End-to-end healthcare ecosystem optimization. AI workforce
                manages patient flow, resource allocation, and care
                coordination.
              </p>
              <div className='space-y-2 mb-6 flex-grow'>
                <div className='flex items-center space-x-2 text-sm'>
                  <div className='w-2 h-2 bg-[#799B4B] rounded-full'></div>
                  <span className='text-[#799B4B]'>
                    50+ facilities integrated
                  </span>
                </div>
                <div className='flex items-center space-x-2 text-sm'>
                  <div className='w-2 h-2 bg-[#799B4B] rounded-full'></div>
                  <span className='text-[#799B4B]'>30% efficiency gain</span>
                </div>
                <div className='flex items-center space-x-2 text-sm'>
                  <div className='w-2 h-2 bg-[#799B4B] rounded-full'></div>
                  <span className='text-[#799B4B]'>Real-time optimization</span>
                </div>
              </div>
              <button
                className='text-white hover:bg-gray-700/50 transition-colors mt-auto'
                style={{
                  width: '323.33px',
                  height: '40px',
                  borderRadius: '10px',
                  border: '1px solid #1E293B',
                  backgroundColor: 'transparent',
                }}
              >
                View Case Study
              </button>
            </div>

            {/* Healthcare Tech Companies */}
            <div className='bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-[#799B4B]/30 transition-all duration-300 flex flex-col'>
              <div className='w-12 h-12 rounded-xl flex items-center justify-center mb-6'>
                <img
                  src='/images/healthcare-tech-companies.svg'
                  alt='Healthcare Tech Companies'
                  className='w-12 h-12'
                />
              </div>
              <h3 className='text-xl font-semibold text-white mb-4'>
                Healthcare Tech Companies
              </h3>
              <p className='text-gray-400 text-sm mb-4 leading-relaxed'>
                AI-powered customer success and technical support. Automated
                implementation services and 24/7 customer assistance.
              </p>
              <div className='space-y-2 mb-6 flex-grow'>
                <div className='flex items-center space-x-2 text-sm'>
                  <div className='w-2 h-2 bg-[#799B4B] rounded-full'></div>
                  <span className='text-[#799B4B]'>99.9% uptime support</span>
                </div>
                <div className='flex items-center space-x-2 text-sm'>
                  <div className='w-2 h-2 bg-[#799B4B] rounded-full'></div>
                  <span className='text-[#799B4B]'>
                    80% faster implementations
                  </span>
                </div>
                <div className='flex items-center space-x-2 text-sm'>
                  <div className='w-2 h-2 bg-[#799B4B] rounded-full'></div>
                  <span className='text-[#799B4B]'>95% satisfaction</span>
                </div>
              </div>
              <button
                className='text-white hover:bg-gray-700/50 transition-colors mt-auto'
                style={{
                  width: '323.33px',
                  height: '40px',
                  borderRadius: '10px',
                  border: '1px solid #1E293B',
                  backgroundColor: 'transparent',
                }}
              >
                View Case Study
              </button>
            </div>

            {/* Government Healthcare Programs */}
            <div className='bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-[#799B4B]/30 transition-all duration-300 flex flex-col'>
              <div className='w-12 h-12 rounded-xl flex items-center justify-center mb-6'>
                <img
                  src='/images/govt-healthcare-programs.svg'
                  alt='Government Healthcare Programs'
                  className='w-12 h-12'
                />
              </div>
              <h3 className='text-xl font-semibold text-white mb-4'>
                Government Healthcare Programs
              </h3>
              <p className='text-gray-400 text-sm mb-4 leading-relaxed'>
                Large-scale fraud detection and policy enforcement. Automated
                auditing and compliance monitoring for Medicare/Medicaid
                programs.
              </p>
              <div className='space-y-2 mb-6 flex-grow'>
                <div className='flex items-center space-x-2 text-sm'>
                  <div className='w-2 h-2 bg-[#799B4B] rounded-full'></div>
                  <span className='text-[#799B4B]'>$2B+ fraud prevented</span>
                </div>
                <div className='flex items-center space-x-2 text-sm'>
                  <div className='w-2 h-2 bg-[#799B4B] rounded-full'></div>
                  <span className='text-[#799B4B]'>1M+ cases processed</span>
                </div>
                <div className='flex items-center space-x-2 text-sm'>
                  <div className='w-2 h-2 bg-[#799B4B] rounded-full'></div>
                  <span className='text-[#799B4B]'>100% audit compliance</span>
                </div>
              </div>
              <button
                className='text-white hover:bg-gray-700/50 transition-colors mt-auto'
                style={{
                  width: '323.33px',
                  height: '40px',
                  borderRadius: '10px',
                  border: '1px solid #1E293B',
                  backgroundColor: 'transparent',
                }}
              >
                View Case Study
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Before AI vs After AI: Organisational Impact */}
      <section className='px-4 md:px-6 py-12 md:py-20 bg-black'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold mb-6'>
              Before AI vs After AI:{' '}
              <span className='text-[#799B4B]'>Organisational Impact</span>
            </h2>
            <p className='text-xl text-gray-400 mb-12 max-w-4xl mx-auto'>
              See the dramatic transformation when Fortune 500 healthcare
              organizations replace traditional workforce with our AI
              orchestration platform.
            </p>
          </div>

          <div className='relative mb-16 mt-8 md:mt-20 ml-0 md:ml-24'>
            <div className='flex flex-col lg:flex-row items-center justify-center gap-4'>
              {/* Before AI */}
              <div className='space-y-2'>
                <div className='text-center mb-2'>
                  <h3 className='text-2xl font-bold text-red-400 mb-2'>
                    Before AI
                  </h3>
                  <p className='text-gray-400'>Traditional Workforce Model</p>
                </div>

                <div
                  className='p-4 md:p-6 w-full max-w-sm md:w-[378.66px] md:h-[330px] rounded-xl'
                  style={{
                    backgroundColor: 'rgba(69, 10, 10, 0.2)',
                    border: '1px solid rgba(248, 113, 113, 0.2)',
                    backdropFilter: 'blur(2px)',
                    boxShadow: '0 1px 0 rgba(0, 0, 0, 0.05)',
                  }}
                >
                  <div className='space-y-4'>
                    <div className='flex items-center gap-3'>
                      <div className='w-10 h-10 rounded-lg flex items-center justify-center'>
                        <img
                          src='/images/high-overhead.svg'
                          alt='High Overhead'
                          className='w-10 h-10'
                        />
                      </div>
                      <div>
                        <div className='text-sm text-gray-400'>
                          15,000 employees
                        </div>
                        <div className='text-red-400 font-semibold'>
                          High overhead
                        </div>
                      </div>
                    </div>

                    <div className='flex items-center gap-3'>
                      <div className='w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center'>
                        <svg
                          className='w-6 h-6 text-red-400'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                          />
                        </svg>
                      </div>
                      <div>
                        <div className='text-sm text-gray-400'>
                          Processing time
                        </div>
                        <div className='text-red-400 font-semibold'>
                          8-12 hours
                        </div>
                      </div>
                    </div>

                    <div className='flex items-center gap-3'>
                      <div className='w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center'>
                        <svg
                          className='w-6 h-6 text-red-400'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1'
                          />
                        </svg>
                      </div>
                      <div>
                        <div className='text-sm text-gray-400'>
                          Monthly costs
                        </div>
                        <div className='text-red-400 font-semibold'>$12M+</div>
                      </div>
                    </div>

                    <div className='flex items-center gap-3'>
                      <div className='w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center'>
                        <svg
                          className='w-6 h-6 text-red-400'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M13 17h8m0 0V9m0 8l-8-8-4 4-6-6'
                          />
                        </svg>
                      </div>
                      <div>
                        <div className='text-sm text-gray-400'>
                          Efficiency rate
                        </div>
                        <div className='text-red-400 font-semibold'>65%</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='flex justify-between text-center'>
                  <div>
                    <div className='text-red-400 font-bold text-lg'>Manual</div>
                    <div className='text-gray-400 text-sm'>Processing</div>
                  </div>
                  <div>
                    <div className='text-red-400 font-bold text-lg'>
                      Limited
                    </div>
                    <div className='text-gray-400 text-sm'>Scalability</div>
                  </div>
                </div>
              </div>

              {/* Central Arrow */}
              <div className='flex justify-center items-center'>
                <div className='w-16 h-16 bg-[#799B4B] rounded-full flex items-center justify-center'>
                  <svg
                    className='w-8 h-8 text-white'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M8 12h8m-4-4l4 4-4 4'
                    />
                  </svg>
                </div>
              </div>

              {/* After AI */}
              <div className='space-y-2'>
                <div className='text-center mb-2'>
                  <h3 className='text-2xl font-bold text-[#799B4B] mb-2'>
                    After AI
                  </h3>
                  <p className='text-gray-400'>AI Workforce Platform</p>
                </div>

                <div
                  className='p-4 md:p-6 w-full max-w-sm md:w-[378.66px] md:h-[330px] rounded-xl'
                  style={{
                    backgroundColor: 'rgba(22, 162, 73, 0.05)',
                    border: '1px solid rgba(22, 162, 73, 0.2)',
                    backdropFilter: 'blur(4px)',
                    boxShadow: '0 1px 0 rgba(0, 0, 0, 0.05)',
                  }}
                >
                  <div className='space-y-4'>
                    <div className='flex items-center gap-3'>
                      <div className='w-10 h-10 rounded-lg flex items-center justify-center'>
                        <img
                          src='/images/ai-agentss.svg'
                          alt='AI Agents'
                          className='w-10 h-10'
                        />
                      </div>
                      <div>
                        <div className='text-sm text-gray-400'>AI agents</div>
                        <div className='text-[#799B4B] font-semibold'>
                          2,000 active
                        </div>
                      </div>
                    </div>

                    <div className='flex items-center gap-3'>
                      <div className='w-10 h-10 bg-[#799B4B]/20 rounded-lg flex items-center justify-center'>
                        <svg
                          className='w-6 h-6 text-[#799B4B]'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M13 10V3L4 14h7v7l9-11h-7z'
                          />
                        </svg>
                      </div>
                      <div>
                        <div className='text-sm text-gray-400'>
                          Processing time
                        </div>
                        <div className='text-[#799B4B] font-semibold'>
                          45 minutes
                        </div>
                      </div>
                    </div>

                    <div className='flex items-center gap-3'>
                      <div className='w-10 h-10 bg-[#799B4B]/20 rounded-lg flex items-center justify-center'>
                        <svg
                          className='w-6 h-6 text-[#799B4B]'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1'
                          />
                        </svg>
                      </div>
                      <div>
                        <div className='text-sm text-gray-400'>
                          Monthly costs
                        </div>
                        <div className='text-[#799B4B] font-semibold'>
                          $1.2M
                        </div>
                      </div>
                    </div>

                    <div className='flex items-center gap-3'>
                      <div className='w-10 h-10 bg-[#799B4B]/20 rounded-lg flex items-center justify-center'>
                        <svg
                          className='w-6 h-6 text-[#799B4B]'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M13 7h8m0 0v8m0-8l-8 8-4-4-6 6'
                          />
                        </svg>
                      </div>
                      <div>
                        <div className='text-sm text-gray-400'>
                          Efficiency rate
                        </div>
                        <div className='text-[#799B4B] font-semibold'>97%</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='flex justify-between text-center'>
                  <div>
                    <div className='text-[#799B4B] font-bold text-lg'>24/7</div>
                    <div className='text-gray-400 text-sm'>Operations</div>
                  </div>
                  <div>
                    <div className='text-[#799B4B] font-bold text-lg'>
                      Infinite
                    </div>
                    <div className='text-gray-400 text-sm'>Scale</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Central Arrow with proper spacing */}
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden lg:block z-10'>
              <div className='w-16 h-16 bg-[#799B4B] rounded-full flex items-center justify-center shadow-lg'>
                <svg
                  className='w-8 h-8 text-white'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9 5l7 7-7 7'
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Bottom Impact Metrics */}
          <div
            className='p-6 md:p-8 mx-auto w-full max-w-2xl md:w-[615.88px] md:h-[134px]'
            style={{
              background:
                'linear-gradient(135deg, rgba(22, 162, 73, 0.1) 0%, rgba(22, 162, 73, 0.05) 100%)',
              border: '1px solid rgba(22, 162, 73, 0.2)',
              borderRadius: '16px',
              width: '615.88px',
              height: '134px',
            }}
          >
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center'>
              <div className='relative'>
                <div className='text-3xl md:text-4xl font-bold text-[#799B4B] mb-2'>
                  90%
                </div>
                <div className='text-[#799B4B] font-medium text-sm md:text-base'>
                  Cost Reduction
                </div>
                <div className='absolute right-0 top-0 bottom-0 w-px bg-[#799B4B]/30 hidden md:block'></div>
              </div>
              <div className='relative'>
                <div className='text-3xl md:text-4xl font-bold text-[#799B4B] mb-2'>
                  1200%
                </div>
                <div className='text-[#799B4B] font-medium text-sm md:text-base'>
                  Speed Improvement
                </div>
                <div className='absolute right-0 top-0 bottom-0 w-px bg-[#799B4B]/30 hidden md:block'></div>
              </div>
              <div>
                <div className='text-3xl md:text-4xl font-bold text-[#799B4B] mb-2'>
                  97%
                </div>
                <div className='text-[#799B4B] font-medium text-sm md:text-base'>
                  Accuracy Rate
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className='px-6 py-12 md:py-20 bg-black'>
        <div className='max-w-6xl mx-auto'>
          <div className='text-center mb-8 md:mb-12'>
            <div className='w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mx-auto mb-4 md:mb-6'>
              <img
                src='/images/calculate-roi.svg'
                alt='Calculate ROI'
                className='w-12 h-12 md:w-16 md:h-16'
              />
            </div>
            <h2 className='text-2xl md:text-4xl font-bold mb-4 text-white'>
              Calculate Your ROI
            </h2>
            <p className='text-lg md:text-xl' style={{ color: '#ABB0BA' }}>
              See how much Curie AI could save your organization
            </p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            {/* Input Form */}
            <div
              className='rounded-2xl p-8'
              style={{
                backgroundColor: '#121417',
                border: '1.2px solid #393E46',
                boxShadow: '0 1.2px 2.4px rgba(0, 0, 0, 0.05)',
              }}
            >
              <h3 className='text-xl font-bold mb-6 text-white'>
                Your Practice Details
              </h3>

              <div className='space-y-6'>
                <div>
                  <label className='block text-sm font-medium mb-2 text-gray-300'>
                    Number of Providers
                  </label>
                  <input
                    type='number'
                    defaultValue='5'
                    className='w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#799B4B] focus:outline-none'
                  />
                </div>

                <div>
                  <label className='block text-sm font-medium mb-2 text-gray-300'>
                    Patients Per Provider Per Day
                  </label>
                  <input
                    type='number'
                    defaultValue='20'
                    className='w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#799B4B] focus:outline-none'
                  />
                </div>

                <div>
                  <label className='block text-sm font-medium mb-2 text-gray-300'>
                    Current Time Per Claim (minutes)
                  </label>
                  <input
                    type='number'
                    defaultValue='45'
                    className='w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#799B4B] focus:outline-none'
                  />
                </div>
              </div>
            </div>

            {/* Results */}
            <div
              className='rounded-2xl p-8'
              style={{
                background:
                  'linear-gradient(135deg, rgba(34, 195, 93, 0.2) 0%, rgba(34, 195, 93, 0.05) 100%)',
                border: '1px solid rgba(34, 195, 93, 0.3)',
              }}
            >
              <h3 className='text-2xl font-bold mb-6 text-white'>
                Your Projected Savings
              </h3>

              <div className='space-y-6'>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-3'>
                    <svg
                      className='w-6 h-6 text-white'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                      />
                    </svg>
                    <span className='text-white'>Time Saved Monthly</span>
                  </div>
                  <span className='font-bold text-white'>1577 hrs</span>
                </div>

                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-3'>
                    <img
                      src='/images/monthly-cost-saving.svg'
                      alt='Monthly Cost Savings'
                      className='w-6 h-6'
                    />
                    <span className='text-white'>Monthly Cost Savings</span>
                  </div>
                  <span className='font-bold text-white'>$55,183.333</span>
                </div>

                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-3'>
                    <svg
                      className='w-6 h-6 text-white'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M13 7h8m0 0v8m0-8l-8 8-4-4-6 6'
                      />
                    </svg>
                    <span className='text-white'>Revenue Increase</span>
                  </div>
                  <span className='font-bold text-white'>$132,000</span>
                </div>

                <div className='border-t border-gray-700 pt-6 mt-6'>
                  <div className='flex items-center justify-between text-lg mb-2'>
                    <span className='font-bold text-white'>
                      Total Monthly Benefit
                    </span>
                    <span className='font-bold text-white text-2xl'>
                      $187,183.333
                    </span>
                  </div>
                  <div className='text-right'>
                    <div className='text-sm text-gray-400'>
                      $662,200 annually
                    </div>
                  </div>
                </div>
              </div>

              <button className='w-full cursor-pointer bg-[#799B4B] text-white py-4 rounded-lg hover:bg-[#799B4B]/90 transition-colors mt-6 font-medium'>
                Get Detailed ROI Report
              </button>
            </div>
          </div>

          <p className='text-center text-sm text-gray-400 mt-8'>
            * Calculations based on industry averages and actual customer
            results
          </p>
        </div>
      </section>

      {/* Enterprise Implementation Models */}
      {/* Enterprise Implementation Models */}
      <section className='px-4 md:px-6 py-12 md:py-20 bg-black'>
        <div className='max-w-6xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold mb-6'>
              Enterprise{' '}
              <span className='text-[#799B4B]'>Implementation Models</span>
            </h2>
            <p className='text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed'>
              Flexible deployment options designed for Fortune 500 healthcare
              organizations. Choose the model that best fits your enterprise
              architecture and business objectives.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-24 mt-8 md:mt-10 ml-0 md:ml-6'>
            {/* Revenue Partnership */}
            <div
              className='bg-gray-900/50 p-6 md:p-8 border border-gray-800 text-center w-full max-w-sm md:w-[389.33px] md:h-[398px] rounded-xl mx-auto'
              style={{
                border: '1px solid #374151',
              }}
            >
              <div className='w-12 h-12 rounded-xl flex items-center justify-center mb-6 mx-auto'>
                <img
                  src='/images/revenue-partnershipss.svg'
                  alt='Revenue Partnership'
                  className='w-12 h-12'
                />
              </div>
              <h3 className='text-xl font-bold mb-4 text-white'>
                Revenue Partnership
              </h3>
              <p className='text-gray-400 mb-6 text-sm leading-relaxed'>
                Share in cost savings with zero upfront investment. We deploy,
                you benefit. Perfect for organizations seeking immediate ROI
                without capital expenditure.
              </p>

              <div className='space-y-3 mb-8'>
                <div className='flex justify-between'>
                  <span className='text-gray-400 text-sm'>
                    Implementation Cost:
                  </span>
                  <span className='text-[#799B4B] font-semibold'>$0</span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-gray-400 text-sm'>Revenue Share:</span>
                  <span className='text-[#799B4B] font-semibold'>30-40%</span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-gray-400 text-sm'>Time to Value:</span>
                  <span className='text-[#799B4B] font-semibold'>30 days</span>
                </div>
              </div>
            </div>

            {/* Platform License */}
            <div
              className='bg-gray-900/50 p-6 md:p-8 border border-gray-800 text-center w-full max-w-sm md:w-[389.33px] md:h-[398px] rounded-xl mx-auto'
              style={{
                border: '1px solid #374151',
              }}
            >
              <div className='w-12 h-12 rounded-xl flex items-center justify-center mb-6 mx-auto'>
                <img
                  src='/images/platform-licence.svg'
                  alt='Platform License'
                  className='w-12 h-12'
                />
              </div>
              <h3 className='text-xl font-bold mb-4 text-white'>
                Platform License
              </h3>
              <p className='text-gray-400 mb-6 text-sm leading-relaxed'>
                Full ownership of AI workforce technology with enterprise-grade
                security, compliance, and unlimited scalability across your
                entire organization.
              </p>

              <div className='space-y-3 mb-8'>
                <div className='flex justify-between'>
                  <span className='text-gray-400 text-sm'>License Fee:</span>
                  <span className='text-[#799B4B] font-semibold'>
                    $1K per employee
                  </span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-gray-400 text-sm'>Annual Savings:</span>
                  <span className='text-[#799B4B] font-semibold'>
                    $50K+ per employee
                  </span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-gray-400 text-sm'>ROI Timeline:</span>
                  <span className='text-[#799B4B] font-semibold'>
                    6-12 months
                  </span>
                </div>
              </div>
            </div>

            {/* Joint Venture */}
            <div
              className='bg-gray-900/50 p-6 md:p-8 border border-gray-800 text-center w-full max-w-sm md:w-[389.33px] md:h-[398px] rounded-xl mx-auto'
              style={{
                border: '1px solid #374151',
              }}
            >
              <div className='w-12 h-12 rounded-xl flex items-center justify-center mb-6 mx-auto'>
                <img
                  src='/images/joint-venture.svg'
                  alt='Joint Venture'
                  className='w-12 h-12'
                />
              </div>
              <h3 className='text-xl font-bold mb-4 text-white'>
                Joint Venture
              </h3>
              <p className='text-gray-400 mb-6 text-sm leading-relaxed'>
                Strategic partnership for market expansion. Co-develop
                industry-specific solutions while sharing technology, risk, and
                massive market opportunities.
              </p>

              <div className='space-y-3 mb-8'>
                <div className='flex justify-between'>
                  <span className='text-gray-400 text-sm'>
                    Investment Required:
                  </span>
                  <span className='text-[#799B4B] font-semibold'>$10M+</span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-gray-400 text-sm'>
                    Market Potential:
                  </span>
                  <span className='text-[#799B4B] font-semibold'>$500M+</span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-gray-400 text-sm'>
                    Partnership Duration:
                  </span>
                  <span className='text-[#799B4B] font-semibold'>
                    5-10 years
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by Fortune 500 */}
      {/* Trusted by Fortune 500 */}
      <section className='px-4 md:px-6 py-12 md:py-20 bg-black'>
        <div className='max-w-6xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold mb-6'>
              Trusted by <span className='text-[#799B4B]'>Fortune 500</span>{' '}
              Healthcare Leaders
            </h2>
            <p className='text-xl text-gray-400'>
              Enterprise-grade security, compliance, and financial validation
              you can trust.
            </p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            {/* Enterprise Security */}
            <div className='bg-gray-900/50 rounded-2xl p-8 border border-gray-800'>
              <div className='flex items-center gap-3 mb-6'>
                <div className='w-8 h-8 rounded-lg flex items-center justify-center'>
                  <img
                    src='/images/enterprise-security.svg'
                    alt='Enterprise Security'
                    className='w-8 h-8'
                  />
                </div>
                <h3 className='text-xl font-bold text-white'>
                  Enterprise Security
                </h3>
              </div>
              <p className='text-gray-400 mb-6 text-sm'>
                Bank-level security infrastructure
              </p>

              <div className='grid grid-cols-2 gap-4'>
                <div className='flex items-center gap-2'>
                  <svg
                    className='w-4 h-4 text-[#799B4B]'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                  <span className='text-sm text-gray-300'>SOC 2 Type II</span>
                </div>
                <div className='flex items-center gap-2'>
                  <svg
                    className='w-4 h-4 text-[#799B4B]'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                  <span className='text-sm text-gray-300'>HIPAA Compliant</span>
                </div>
                <div className='flex items-center gap-2'>
                  <svg
                    className='w-4 h-4 text-[#799B4B]'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                  <span className='text-sm text-gray-300'>
                    End-to-End Encryption
                  </span>
                </div>
                <div className='flex items-center gap-2'>
                  <svg
                    className='w-4 h-4 text-[#799B4B]'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                  <span className='text-sm text-gray-300'>
                    Zero Trust Architecture
                  </span>
                </div>
              </div>
            </div>

            {/* What CFOs Are Saying */}
            <div className='bg-gray-900/50 rounded-2xl p-8 border border-gray-800'>
              <h3 className='text-xl font-bold text-white mb-6'>
                What CFOs Are Saying
              </h3>

              <blockquote className='text-gray-300 mb-6 text-sm leading-relaxed italic'>
                "The ROI was immediate and measurable. We eliminated $47M in
                annual operating costs while improving quality and speed. This
                is the future of healthcare operations."
              </blockquote>

              <div className='flex items-center gap-3'>
                <div className='w-10 h-10 bg-[#799B4B] rounded-full flex items-center justify-center'>
                  <svg
                    className='w-5 h-5 text-white'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                    />
                  </svg>
                </div>
                <div>
                  <div className='font-semibold text-white text-sm'>
                    Sarah Chen, CFO
                  </div>
                  <div className='text-gray-400 text-xs'>
                    Multi-State Hospital System
                  </div>
                </div>
              </div>
            </div>

            {/* Financial Validation */}
            <div className='bg-gray-900/50 rounded-2xl p-8 border border-gray-800'>
              <div className='flex items-center gap-3 mb-6'>
                <div className='w-8 h-8 rounded-lg flex items-center justify-center'>
                  <img
                    src='/images/financial-validation.svg'
                    alt='Financial Validation'
                    className='w-8 h-8'
                  />
                </div>
                <h3 className='text-xl font-bold text-white'>
                  Financial Validation
                </h3>
              </div>
              <p className='text-gray-400 mb-6 text-sm'>
                Audited results and CFO testimonials
              </p>

              <div className='space-y-4'>
                <div className='flex justify-between items-center'>
                  <span className='text-gray-400 text-sm'>Average ROI:</span>
                  <span className='text-[#799B4B] font-bold text-xl'>
                    1,247%
                  </span>
                </div>
                <div className='flex justify-between items-center'>
                  <span className='text-gray-400 text-sm'>Payback Period:</span>
                  <span className='text-[#799B4B] font-bold text-xl'>
                    4.2 months
                  </span>
                </div>
                <div className='flex justify-between items-center'>
                  <span className='text-gray-400 text-sm'>
                    Client Retention:
                  </span>
                  <span className='text-[#799B4B] font-bold text-xl'>98%</span>
                </div>
              </div>
            </div>

            {/* Scale & Performance */}
            <div className='bg-gray-900/50 rounded-2xl p-8 border border-gray-800'>
              <h3 className='text-xl font-bold text-white mb-6'>
                Scale & Performance
              </h3>

              <div className='grid grid-cols-2 gap-6'>
                <div className='text-center'>
                  <div className='text-2xl font-bold text-[#799B4B] mb-1'>
                    99.97%
                  </div>
                  <div className='text-gray-400 text-xs'>Uptime SLA</div>
                </div>
                <div className='text-center'>
                  <div className='text-2xl font-bold text-[#799B4B] mb-1'>
                    10M+
                  </div>
                  <div className='text-gray-400 text-xs'>
                    Daily Transactions
                  </div>
                </div>
                <div className='text-center'>
                  <div className='text-2xl font-bold text-[#799B4B] mb-1'>
                    &lt;50ms
                  </div>
                  <div className='text-gray-400 text-xs'>Response Time</div>
                </div>
                <div className='text-center'>
                  <div className='text-2xl font-bold text-[#799B4B] mb-1'>
                    Infinite
                  </div>
                  <div className='text-gray-400 text-xs'>Scalability</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className='px-4 md:px-6 py-12 md:py-20 bg-black'>
        <div className='max-w-4xl mx-auto text-center'>
          <h2 className='text-4xl md:text-5xl font-bold mb-6'>
            Ready to <span className='text-[#799B4B]'>Enterprise AI</span>?
          </h2>
          <p className='text-xl text-gray-400 mb-12 max-w-2xl mx-auto'>
            Join the world's leading healthcare enterprises that have
            transformed their operations with our AI workforce platform.
            Schedule your C-Suite executive briefing today.
          </p>

          <CustomButton
            backgroundColor='#799B4B'
            hoverBackgroundColor='#799B4B90'
            width='303px'
            className='mx-auto mb-12'
            iconPosition='right'
            icon={
              <svg
                className='w-5 h-5'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 5l7 7-7 7'
                />
              </svg>
            }
          >
            Schedule Executive Briefing
          </CustomButton>

          {/* Compliance Badges */}
          <div className='flex items-center justify-center gap-8 text-sm text-gray-400'>
            <div className='flex items-center gap-2'>
              <svg
                className='w-4 h-4'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
                />
              </svg>
              HIPAA Compliant
            </div>
            <div className='flex items-center gap-2'>
              <svg
                className='w-4 h-4'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
                />
              </svg>
              SOC2 Type II
            </div>
            {/* <div className='flex items-center gap-2'>
              <svg
                className='w-4 h-4'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
                />
              </svg>
              ISO 27001
            </div> */}
            <div className='flex items-center gap-2'>
              <svg
                className='w-4 h-4'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9 3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9'
                />
              </svg>
              Google Partner
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
