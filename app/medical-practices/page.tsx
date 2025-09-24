'use client';
import { Button } from '@/components/ui/button';
import {
  Shield,
  CheckCircle,
  Award,
  Stethoscope,
  Clock,
  Users,
  TrendingUp,
  FileText,
  CreditCard,
  ArrowRight,
  Timer,
  DollarSign,
  Target,
  BarChart3,
  Database,
} from 'lucide-react';
import PracticeAIHome from '@/components/practice-ai-home';
import Link from 'next/link';
import { images } from '@/components/contants/path';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ownerDetail } from '@/utils/constants';
import { GenerateNotes } from '@/components/GenerateNotes';

export default function MedicalPracticesPage() {
  return (
    <div className='min-h-screen bg-[#07090D] text-white'>
      {/* Hero Section */}
      <section className='relative pt-[73px] px-6 overflow-hidden'>
        <div className='max-w-6xl mx-auto relative z-10'>
          <div className='text-center mb-11'>
            <div className='inline-flex items-center space-x-2 bg-[#22C35D1A] rounded-full px-4 py-2 mb-5'>
              <span className='text-[#95B543] text-sm font-medium'>
                For Medical Practices
              </span>
            </div>

            <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold mb-5 text-balance leading-tight'>
              <span
                className='text-transparent'
                style={{
                  background:
                    'linear-gradient(90deg, #5C834B 0%, #BAD53E 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                }}
              >
                AI Workforce
              </span>
              <br />
              <span className='text-white'>for Medical Practices</span>
            </h1>

            <p className='text-xl text-[#ABB0BA] max-w-4xl mx-auto text- leading-relaxed'>
              Increase practice revenue and profits, submit claims in under
              <div>
                two minutes, supercharge your back office, and fill gaps in
                workforce in minutes, not months.
              </div>
            </p>

            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center my-7'>
              <Button
                style={{
                  background:
                    'linear-gradient(111deg, #799B4B 0%, #4A6F3E 100%)',
                }}
                className='hover:bg-[#5A7F4E] text-white text-[14px] !px-7 !py-3 rounded-[10px] flex items-center shadow-[0_0_30px_rgba(74,111,62,0.6)] hover:shadow-[0_0_40px_rgba(74,111,62,0.8)] transition-all duration-300'
              >
                Get a Demo
                <ArrowRight className='w-5 h-5' />
              </Button>
            </div>

            {/* Quick Stats */}
            <div className='flex flex-wrap justify-center items-center gap-8 text-sm text-[#ABB0BA] mb-13'>
              <div className='flex items-center space-x-2'>
                <Clock className='w-4 h-4' />
                <span>2-minute setup</span>
              </div>
              <div className='flex items-center space-x-2'>
                <Shield className='w-4 h-4' />
                <span>HIPAA Compliant</span>
              </div>
            </div>

            {/* EHR Integration Visual */}
            {/* AI Tools Grid */}
            <div className='grid grid-cols-2 md:grid-cols-3 gap-[26px] mt-8 px-[150px] '>
              {/* VISIT AI */}
              <div className='max-h-[180px]'>
                <img className='w-full h-full' src='/folded-div.svg' alt='' />
              </div>

              {/* VISIT AI */}
              <div className='bg-[#22C35D1A] max-h-[180px] rounded-[14px] p-5 text-start border border-[#22C35D33]'>
                <div className='bg-[#22C35D33] rounded-[10px] p-3 w-fit  mb-3'>
                  <Stethoscope className='w-6 h-6 text-[#22C35D]' />
                </div>
                <div className='text-[#FFFFFF] font-semibold text-sm mb-2'>
                  VISIT AI
                </div>
                <div className='text-[#ABB0BA] text-xs leading-relaxed'>
                  Creates a first-of-its-kind Patient 360, indexed on the
                  patient's chief complaint.
                </div>
              </div>

              {/* SCRIBE AI */}
              <div className='bg-[#FFDD571A] max-h-[180px] rounded-[14px] p-5 text-start border border-[#FFDD5733]'>
                <div className='bg-[#FFDD5733] rounded-[10px] p-3 w-fit  mb-3'>
                  <FileText className='w-6 h-6 text-black' />
                </div>
                <div className='text-[#FFFFFF] font-semibold text-sm mb-2'>
                  SCRIBE AI
                </div>
                <div className='text-[#ABB0BA] text-xs leading-relaxed'>
                  Transcribes consultations and generates EHR-ready notes in
                  under one minute efficiently.
                </div>
              </div>

              {/* CODING AI */}
              <div className='bg-[#22C35D1A] max-h-[180px] rounded-[14px] p-5 text-start border border-[#22C35D33]'>
                <div className='bg-[#22C35D33] rounded-[10px] p-3 w-fit  mb-3'>
                  <CreditCard className='w-6 h-6 text-[#A0BE41]' />
                </div>
                <div className='text-[#FFFFFF] font-semibold text-sm mb-2'>
                  CODING AI
                </div>
                <div className='text-[#ABB0BA] text-xs leading-relaxed'>
                  Automatically generates all medical codes for compliant and
                  accurate documentation.
                </div>
              </div>

              {/* PAYMENTS */}
              <div className='bg-[#22C35D1A] max-h-[180px] rounded-[14px] p-5 text-start border border-[#22C35D33]'>
                <div className='bg-[#22C35D33] rounded-[10px] p-3 w-fit  mb-3'>
                  <Shield className='w-6 h-6 text-[#A0BE41]' />
                </div>
                <div className='text-[#FFFFFF] font-semibold text-sm mb-2'>
                  PAYMENTS
                </div>
                <div className='text-[#ABB0BA] text-xs leading-relaxed'>
                  Automates patient payments with Stripe integration for
                  streamlined revenue collection.
                </div>
              </div>

              {/* BILLING AI */}
              <div className='bg-[#FFDD571A] max-h-[180px] rounded-[14px] p-5 text-start border  border-[#FFDD5733]'>
                <div className='bg-[#FFDD5733] rounded-[10px] p-3 w-fit  mb-3'>
                  <BarChart3 className='w-6 h-6 text-black' />
                </div>
                <div className='text-[#FFFFFF] font-semibold text-sm mb-2'>
                  BILLING AI
                </div>
                <div className='text-[#ABB0BA] text-xs leading-relaxed'>
                  Generates claims suggests fixes to ensure 90%+ approval.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits & Prior Auth AI Section */}
      <section className='pt-20 px-6'>
        <div className='max-w-6xl mx-auto'>
          <div className='text-center mb-14'>
            <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
              Benefits & Prior{' '}
              <span
                className='text-transparent'
                style={{
                  background:
                    'linear-gradient(90deg, #799B4B 0%, #B3D336 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                }}
              >
                Auth AI
              </span>
            </h2>
            <p className='text-xl text-[#9096A2] max-w-3xl mx-auto'>
              Run real-time eligibility and authorization checks in seconds — no
              delays, no manual back-and-forth.
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-8 mb-[154px]'>
            {/* Speed Up Authorizations */}
            <div className='text-center'>
              <div className='w-16 h-16 flex items-center justify-center mx-auto mb-6'>
                <img src='/clock.svg' alt='' />
              </div>
              <h3 className='text-xl font-bold text-[#F8FAFC] mb-2'>
                Speed Up Authorizations
              </h3>
              <p className='text-[#ABB0BA]'>90% faster prior-auth turnaround</p>
            </div>

            {/* Cut Denials Dramatically */}
            <div className='text-center'>
              <div className='w-16 h-16 flex items-center justify-center mx-auto mb-6'>
                <img src='/check.svg' alt='' />
              </div>
              <h3 className='text-xl font-bold text-[#F8FAFC] mb-2'>
                Cut Denials Dramatically
              </h3>
              <p className='text-[#ABB0BA]'>
                Independently audited security controls
              </p>
            </div>

            {/* Get Paid Sooner */}
            <div className='text-center'>
              <div className='w-16 h-16 flex items-center justify-center mx-auto mb-6'>
                <img src='/dollar.svg' alt='' />
              </div>
              <h3 className='text-xl font-bold text-[#F8FAFC] mb-2'>
                Get Paid Sooner
              </h3>
              <p className='text-[#ABB0BA]'>Accelerate reimbursements</p>
            </div>
          </div>

          {/* Proven Results Header */}
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold mb-[30px]'>
              <span className='text-white'>
                Proven Results Across Healthcare
              </span>
            </h2>
            <p className='text-xl text-[#9096A2] max-w-5xl mx-auto'>
              Real outcomes from healthcare organizations that transformed their
              operations with Practice AI
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}

      {/* Case Studies Section */}
      <section className='pb-20 px-20'>
        <div className='max-w-[1440px] mx-auto'>
          <div className='grid md:grid-cols-3 gap-8'>
            {/* Case Study 1 */}
            <div className='bg-[#121417] rounded-2xl overflow-hidden flex flex-col'>
              <div
                style={{
                  background:
                    'linear-gradient(135deg, rgba(34, 195, 93, 0.20) 0%, rgba(34, 195, 93, 0.05) 100%)',
                }}
                className='px-6 pt-11 pb-6'
              >
                <div className='inline-block text-[#22C35D] bg-[#22C35D33] px-3 py-1 rounded-full text-sm'>
                  Medical Practice
                </div>
                <h3 className='text-white font-bold text-lg mt-2'>
                  Riverside Family Clinic
                </h3>
              </div>

              <div className='px-6 py-7 flex flex-col flex-grow'>
                <h4 className='text-white font-bold text-xl mb-4'>
                  50% Reduction in Administrative Time
                </h4>
                <p className='text-[#9096A2] text-[13px] mb-6 leading-relaxed'>
                  How a 15-physician practice automated their entire billing
                  workflow and increased revenue by 40% in 6 months.
                </p>

                <div className='grid grid-cols-3 gap-4 mb-6'>
                  <div className='text-center'>
                    <div className='w-10 h-10 bg-[#22C35D1A] rounded-[12px] flex items-center justify-center mx-auto mb-2'>
                      <Clock className='w-5 h-5 text-[#22C35D]' />
                    </div>
                    <div className='text-white font-bold'>25 hrs/week</div>
                    <div className='text-[#9096A2] text-xs'>Time Saved</div>
                  </div>
                  <div className='text-center'>
                    <div className='w-10 h-10 bg-[#22C35D1A] rounded-[12px] flex items-center justify-center mx-auto mb-2'>
                      <DollarSign className='w-5 h-5 text-[#22C35D]' />
                    </div>
                    <div className='text-white font-bold'>40%</div>
                    <div className='text-[#9096A2] text-xs'>
                      Revenue Increase
                    </div>
                  </div>
                  <div className='text-center'>
                    <div className='w-10 h-10 bg-[#22C35D1A] rounded-[12px] flex items-center justify-center mx-auto mb-2'>
                      <TrendingUp className='w-5 h-5 text-[#22C35D]' />
                    </div>
                    <div className='text-white font-bold'>95%</div>
                    <div className='text-[#9096A2] text-xs'>Claim Approval</div>
                  </div>
                </div>

                <Button className='w-full hover:bg-[#4A6F3E] hover:text-white bg-transparent mt-auto'>
                  Read Full Case Study
                  <ArrowRight className='w-4 h-4 ml-2' />
                </Button>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className='bg-[#121417] rounded-2xl overflow-hidden flex flex-col'>
              <div
                style={{
                  background:
                    'linear-gradient(135deg, rgba(255, 221, 87, 0.20) 0%, rgba(255, 221, 87, 0.05) 100%)',
                }}
                className='px-6 pt-11 pb-6'
              >
                <div className='inline-block text-[#CCCCCC] bg-[#FFDD5733] px-3 py-1 rounded-full text-sm'>
                  Medical Practice
                </div>
                <h3 className='text-white font-bold text-lg mt-2'>
                  Metro Health Partners
                </h3>
              </div>

              <div className='px-6 py-7 flex flex-col flex-grow'>
                <h4 className='text-white font-bold text-xl mb-4'>
                  Modular AI Implementation Across 200+ Locations
                </h4>
                <p className='text-[#9096A2] text-[13px] mb-6 leading-relaxed'>
                  Enterprise-scale deployment of logic-block AI tools across
                  multiple locations with measurable ROI.
                </p>

                <div className='grid grid-cols-3 gap-4 mb-6'>
                  <div className='text-center'>
                    <div className='w-10 h-10 bg-[#FFDD571A] rounded-[12px] flex items-center justify-center mx-auto mb-2'>
                      <TrendingUp className='w-5 h-5 text-[#877F57]' />
                    </div>
                    <div className='text-white font-bold'>60%</div>
                    <div className='text-[#ABB0BA] text-xs'>
                      Efficiency Gain
                    </div>
                  </div>
                  <div className='text-center'>
                    <div className='w-10 h-10 bg-[#FFDD571A] rounded-[12px] flex items-center justify-center mx-auto mb-2'>
                      <DollarSign className='w-5 h-5 text-[#877F57]' />
                    </div>
                    <div className='text-white font-bold'>$2.4M</div>
                    <div className='text-[#ABB0BA] text-xs'>Cost Savings</div>
                  </div>
                  <div className='text-center'>
                    <div className='w-10 h-10 bg-[#FFDD571A] rounded-[12px] flex items-center justify-center mx-auto mb-2'>
                      <Clock className='w-5 h-5 text-[#877F57]' />
                    </div>
                    <div className='text-white font-bold'>3 months</div>
                    <div className='text-[#ABB0BA] text-xs'>Implementation</div>
                  </div>
                </div>

                <Button className='w-full hover:bg-yellow-600 hover:text-white bg-transparent mt-auto'>
                  Read Full Case Study
                  <ArrowRight className='w-4 h-4 ml-2' />
                </Button>
              </div>
            </div>

            {/* Case Study 3 */}
            <div className='bg-[#121417] rounded-2xl overflow-hidden flex flex-col'>
              <div
                style={{
                  background:
                    'linear-gradient(135deg, rgba(167, 60, 221, 0.20) 0%, rgba(167, 60, 221, 0.05) 100%)',
                }}
                className='px-6 pt-11 pb-6'
              >
                <div className='inline-block bg-[#A73CDD33] text-white px-3 py-1 rounded-full text-[12px]'>
                  Medical Practice
                </div>
                <h3 className='text-white font-bold text-lg mt-2'>
                  Summit Healthcare Group
                </h3>
              </div>

              <div className='px-6 py-7 flex flex-col flex-grow'>
                <h4 className='text-white font-bold text-xl mb-4'>
                  AI Workforce at Scale - 1000+ Providers
                </h4>
                <p className='text-[#9096A2] text-[13px] mb-6 leading-relaxed'>
                  Large-scale AI workforce implementation across multiple health
                  systems with enterprise-grade security.
                </p>

                <div className='grid grid-cols-3 gap-4 mb-6'>
                  <div className='text-center'>
                    <div className='w-10 h-10 bg-[#A73CDD1A] rounded-[12px] flex items-center justify-center mx-auto mb-2'>
                      <TrendingUp className='w-5 h-5 text-white' />
                    </div>
                    <div className='text-white font-bold'>98%</div>
                    <div className='text-[#9096A2] text-xs'>
                      Staff Satisfaction
                    </div>
                  </div>
                  <div className='text-center'>
                    <div className='w-10 h-10 bg-[#A73CDD1A] rounded-[12px] flex items-center justify-center mx-auto mb-2'>
                      <DollarSign className='w-5 h-5 text-white' />
                    </div>
                    <div className='text-white font-bold'>$15M</div>
                    <div className='text-[#9096A2] text-xs'>Annual Savings</div>
                  </div>
                  <div className='text-center'>
                    <div className='w-10 h-10 bg-[#A73CDD1A] rounded-[12px] flex items-center justify-center mx-auto mb-2'>
                      <BarChart3 className='w-5 h-5 text-white' />
                    </div>
                    <div className='text-white font-bold'>-75%</div>
                    <div className='text-[#9096A2] text-xs'>Process Time</div>
                  </div>
                </div>

                <Button className='w-full hover:bg-purple-600 hover:text-white bg-transparent mt-auto'>
                  Read Full Case Study
                  <ArrowRight className='w-4 h-4 ml-2' />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className='relative overflow-hidden bg-[#07090D]'>
        <div className='text-center relative pt-20 pb-32 md:pb-40 lg:pb-70 '>
          <div className='flex flex-col mx-auto justify-between items-center gap-4 md:gap-6 mt-1 md:mt-20'>
            <div className="text-center text-[#919191] md:text-white text-sm md:text-[22px] font-gilroy-medium md:font-['DM Mono'] text-normal">
              Backed By
            </div>
            <div className='flex flex-row w-[90%] xl:w-2/5 justify-between items-center gap-4 mt-4 xl:mt-2'>
              <div className='w-32 h-auto md:w-[192px]'>
                <Link href={'#'} className='contents'>
                  <img
                    className='m-auto'
                    src={images.googleForStartups}
                    alt='Google for Startups logo'
                  />
                </Link>
              </div>
              <div className='w-32 h-auto md:w-[192px]'>
                <Link href={'#'} className='contents'>
                  <img
                    className='m-auto'
                    src={images.hippaComplaint}
                    alt='Hippa Compliant Logo'
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className='hidden md:flex flex-col w-full md:max-w-7xl mx-auto justify-between items-center gap-6 mt-[100px] mb-16'>
            <div className='text-center text-white text-5xl font-medium leading-[67px]'>
              Supercharge your back office with state of the art AI, built for
              your practice.
            </div>
            <div className='max-w-[969px] text-center text-white text-[22px] font-light font-dm-sans leading-[50px]'>
              Practice AI leverages integrated AI features to streamline
              operations—from EHR sync, Scribe, Medical Coding, Billing to
              Payment Processing
            </div>
          </div>
        </div>

        {/* Timeline Section with proper containment */}
        <div className='relative w-full bg-[#e7e9e3] py-8 md:py-16 lg:py-24 overflow-'>
          <div className='mt-[-320px] md:mt-[-250px] lg:mt-[-380px] max-w-[1440px] mx-auto px-4 md:px-8'>
            <div className='flex flex-col md:flex-row justify-center items-center w-full gap-6 md:gap-8'>
              <div className='block md:hidden backdrop-blur-[30px] rounded-[48px] max-w-full'>
                <Image
                  src={images.timelineLightDivMb}
                  alt='Timeline to show time taken by manual processing from Visiting EHR to getting payment. Can takes months.'
                  width={732}
                  height={560}
                  className='w-full h-auto'
                />
              </div>
              <div className='hidden md:block backdrop-blur-[30px] rounded-[48px] max-w-full'>
                <Image
                  src={images.timelineLightDiv}
                  alt='Timeline to show time taken by Practice AI from Visiting EHR to getting payment. Will be done in days'
                  width={812}
                  height={590}
                  className='w-full h-auto'
                />
              </div>
              <div className='block md:hidden backdrop-blur-[15px] rounded-[48px] max-w-full'>
                <Image
                  src={images.timelineDarkDivMb}
                  alt='Timeline to show time taken by manual processing from Visiting EHR to getting payment. Can takes months.'
                  width={732}
                  height={560}
                  className='w-full h-auto'
                />
              </div>
              <div className='hidden md:block backdrop-blur-[15px] rounded-[48px] max-w-full'>
                <Image
                  src={images.timelineDarkDiv}
                  alt='Timeline to show time taken by Practice AI from Visiting EHR to getting payment. Will be done in days'
                  width={812}
                  height={590}
                  className='w-full h-auto'
                />
              </div>
            </div>
          </div>
          {/* Integrate now from folder to this section */}
        </div>
      </section>
      <section className='py-0'>
        <GenerateNotes />
      </section>

      {/* Imported Practice AI Home Component */}
      <section className='py-0'>
        <PracticeAIHome />
      </section>

      {/* Final CTA Section */}
      <section className='py-20 px-6'>
        <div className='max-w-4xl mx-auto text-center'>
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-7 text-balance'>
            Ready to{' '}
            <span
              className='text-transparent'
              style={{
                background: 'linear-gradient(90deg, #799B4B 0%, #B3D336 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
              }}
            >
              Transform Your Practice?
            </span>
          </h2>
          <p className='text-[#9096A2] text-xl max-w-2xl mx-auto mb-11'>
            Join leading healthcare practices already seeing measurable results
            with AI workforce automation.
          </p>

          <div className='flex flex-col sm:flex-row gap-4 justify-center items-center mb-16'>
            <Button
              style={{
                background: 'linear-gradient(90deg, #799B4B 0%, #4A6F3E 100%)',
              }}
              className='hover:bg-[#5A7F4E] text-white !px-8 py-3 text-lg rounded-lg flex items-center shadow-[0_0_30px_rgba(74,111,62,0.6)] hover:shadow-[0_0_40px_rgba(74,111,62,0.8)] transition-all duration-300'
            >
              Get Started Today
              <ArrowRight className='w-5 h-5 ml-2' />
            </Button>
            <Button
              variant='outline'
              className='border-[#799B4B33] text-white hover:bg-white hover:text-black px-8 py-3 text-lg rounded-lg transition-all duration-300 bg-transparent'
              onClick={() => {
                // create a link and navigate to that
                const link = document.createElement('a');
                link.href = ownerDetail.calendlyLink;
                link.target = '_blank';
                link.rel = 'noopener noreferrer';
                link.click();
              }}
            >
              Schedule Demo
            </Button>
          </div>

          {/* Certification Badges */}
          <div className='flex flex-wrap justify-center items-center gap-8 text-sm text-[#9096A2]'>
            <div className='flex items-center space-x-2'>
              <Shield className='w-5 h-5' />
              <span>HIPAA Compliant</span>
            </div>
            <div className='flex items-center space-x-2'>
              <CheckCircle className='w-5 h-5' />
              <span>SOC2 Type II</span>
            </div>
            <div className='flex items-center space-x-2'>
              <Award className='w-5 h-5' />
              <span>ISO 27001</span>
            </div>
            <div className='flex items-center space-x-2'>
              <div className='w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center'>
                <span className='text-black font-bold text-xs'>G</span>
              </div>
              <span>Google Partner</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
