'use client';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useState } from 'react';
import { Clock, Users, TrendingUp, Quote } from 'lucide-react';
import { images } from '@/components/contants/path';

// Data for the component
const heroStats = [
  { value: '60%', label: 'Revenue Increase' },
  { value: '2 Min', label: 'Claim Submission' },
  { value: '90%+', label: 'Approval Rate' },
];

const benefits = [
  { icon: Clock, value: '40%', label: 'Admin Time Reduction' },
  { icon: Users, value: '25%', label: 'Patient Volume Increase' },
  { icon: TrendingUp, value: '30%', label: 'Revenue Growth' },
  { image: images.check, value: '95%', label: 'Approval Rate' },
];

const testimonials = [
  {
    initials: 'DV',
    name: 'Dr. Vajda',
    title: 'Desert Valley Associates',
    quote:
      'Curie AI has significantly streamlined our billing process, making everything faster and more efficient.',
    metric: '40% faster billing',
  },
  {
    initials: 'DK',
    name: 'Dr. Khwarg',
    title: 'PM&R',
    subtitle: 'Physical Medicine',
    quote:
      'The AI platform has revolutionized our billing and reduced errors significantly.',
    metric: '85% error reduction',
    improvement: 'Improvement',
  },
  {
    initials: 'DM',
    name: 'Dr. Mandava',
    title: 'Pediatrician',
    quote:
      'The efficiency gains are remarkable. We can now focus more on patient care instead of paperwork.',
    metric: '3x efficiency gain',
  },
  {
    initials: 'DJ',
    name: 'Dr. Jacobs',
    title: 'Columbia Medical Center',
    quote:
      'With Curie AI, I have more time for my patients, which has improved the quality of care we provide.',
    metric: '60% more patient time',
  },
];

export default function PracticeAIHome() {
  const [activeIndex, setActiveIndex] = useState(1); // Default to Dr. Khwarg

  const activeTestimonial = testimonials[activeIndex];

  return (
    <div className="text-gray-300 font-sans antialiased">
      <div className="relative isolate overflow-hidden">

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  py-6 sm:py-12">
          {/* Section 1: Hero Stats */}
          <section className="max-w-[830px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-8 bg-[#11131780] backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-[16px] sm:rounded-[24px] border border-[#21242C] shadow-lg">
                  <div className="text-center md:border-r-2 md:border-[#21242C] py-2 sm:py-0">
                    <p style={{background: 'linear-gradient(90deg, #81A348 0%, #ABCB38 100%);'}} className="text-2xl sm:text-4xl lg:text-5xl xl:text-[55px] font-bold text-[#81A348]">60%</p>
                    <p className="text-[#9096A2] mt-2 text-[12px] sm:text-[18px] lg:text-[21px]">Revenue Increase</p>
                  </div>
                  <div className="text-center md:border-r-2 md:border-[#21242C] py-2 sm:py-0">
                    <p style={{background: 'linear-gradient(90deg, #81A348 0%, #ABCB38 100%);'}} className="text-2xl sm:text-4xl lg:text-5xl xl:text-[55px] font-bold text-[#81A348]">2 Min</p>
                    <p className="text-[#9096A2] mt-2 text-[12px] sm:text-[18px] lg:text-[21px]">Claim Submission</p>
                  </div>
                  <div className="text-center py-2 sm:py-0">
                    <p style={{background: 'linear-gradient(90deg, #81A348 0%, #ABCB38 100%);'}} className="text-2xl sm:text-4xl lg:text-5xl xl:text-[55px] font-bold text-[#81A348]">90%+</p>
                    <p className="text-[#9096A2] mt-2 text-[12px] sm:text-[18px] lg:text-[21px]">Approval Rate</p>
                  </div>
                </div>
          </section>

          {/* Section 2: Value Proposition */}
          <section className=" pt-5 sm:py-16 lg:py-24 text-center px-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[42px] font-bold text-white tracking-tight leading-tight">
              Less Admin, <span className="text-[#6B9550]">More Patients</span>
            </h2>
            <p className="mt-4 text-[12px] sm:text-[18px] lg:text-[20px] text-[#ABB0BA] max-w-2xl mx-auto">
              Transform your practice efficiency with measurable outcomes
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mt-8 sm:mt-10 lg:mt-13 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="flex flex-col items-center px-2">
                    <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-[10px] flex items-center justify-center bg-[#0E3C23]">
                      {benefit.image ? (
                        <img  src={benefit.image} alt={benefit.label} className="w-5 h-5 sm:w-8 sm:h-8 text-[#A0BE41]" />
                      ) : Icon ? (
                        <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-[#A0BE41]" />
                      ) : null}
                    </div>
                    <p className="text-[24px] sm:text-[24px] lg:text-[32px] xl:text-[40px] font-bold text-[#526C42] mt-3 sm:mt-4">{benefit.value}</p>
                    <p className="text-[#94A6B8] text-[10px] sm:text-[14px] lg:text-[16px] mt-1 text-balance text-center">{benefit.label}</p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Section 3: Testimonials */}
          <section className="  sm:py-12 sm:px-4">
            <div className="text-center">
               <p className="text-[8px] sm:text-xs text-[#799B4B] border sm:min-w-[162px] min-h-[29px] border-[#799B4B33] w-fit mx-auto px-3 py-2 rounded-full font-semibold tracking-wider">Trusted by Practitioners</p>
              <h2 className="text-2xl sm:text-[45px]  font-bold text-white mt-4 tracking-tight leading-tight">
                The Healthcare Community's<br className="hidden sm:block" />
                <span className="sm:inline block"> </span><span style={{background: 'linear-gradient(90deg, #779B48 0%, #9BB942 100%)', backgroundClip: 'text', WebkitBackgroundClip: 'text'}} className="text-transparent">Response to Practice AI</span>
              </h2>
              <p className="mt-4 text-[14px] sm:text-[16px] lg:text-lg text-[#ABB0BA] max-w-3xl mx-auto px-4">
                Real practitioners sharing their experience with AI-powered healthcare <br></br> workflows
              </p>
            </div>

            <div className="mt-8 sm:mt-12 lg:mt-16  max-w-4xl mx-auto">
              {/* Main Testimonial Card */}
              <div style={{boxShadow: ' 0 0 40px 0 rgba(121, 155, 75, 0.20)'}} className="bg-[#11131780] backdrop-blur-sm py-8  sm:py-12 sm:px-12 lg:py-[65px] px-3 lg:px-[90px] rounded-xl sm:rounded-2xl border border-white/10 shadow-2xl relative max-w-[896px] flex flex-col items-center justify-center sm:mx-0">
                <div className="flex items-center justify-center flex-col  ">
                <Quote className="text-[#FAFAFA] w-6 h-6 sm:w-8 sm:h-8" />
                <p className="text-[12px] sm:text-[18px] leading-7 lg:text-2xl text-center text-[#FAFAFA] font-medium max-w-2xl mx-auto mt-6 sm:mt-8 lg:mt-12 ">
                  "{activeTestimonial.quote}"
                </p>
                </div>

                <div className="flex flex-col  lg:flex-row items-center justify-between pt-6 sm:pt-8 lg:pt-[35px] gap-4 sm:gap-6 lg:gap-6 ">
                  <div className="flex items-center gap-3 sm:gap-4 lg:gap-6 lg:border-r lg:border-[#21242C] lg:pr-12">
                    <div className="w-10 h-10 sm:w-15 sm:h-15 rounded-[10px] bg-[#799B4B] text-white flex items-center justify-center font-bold text-sm sm:text-lg flex-shrink-0">
                      {activeTestimonial.initials}
                    </div>
                    <div className="text-center lg:text-left leading-4 sm:leading-6">
                      <p className="font-bold text-white text-left sm:text-left text-[12px] sm:text-base">{activeTestimonial.name}</p>
                      <p className="text-[12px] text-left sm:text-left sm:text-[16px] text-[#9096A2]">{activeTestimonial.title}</p>
                       {activeTestimonial.subtitle && <p className="text-[10px] sm:text-xs text-[#E6E6E6]">{activeTestimonial.subtitle}</p>}
                    </div>
                  </div>
                  <div className="text-center lg:text-right ">
                      <p className="text-sm sm:text-xl font-bold leading-5 sm:leading-7 text-[#799B4B]">{activeTestimonial.metric}</p>
                      {activeTestimonial.improvement && <p className="text-xs sm:text-sm text-center  text-[#9096A2]">{activeTestimonial.improvement}</p>}
                  </div>
                </div>
              </div>

              {/* Carousel Dots */}
              <div className="flex justify-center gap-2 sm:gap-3 mt-6 sm:mt-8">
                  {testimonials.map((_, index) => (
                      <button
                          key={index}
                          onClick={() => setActiveIndex(index)}
                          className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-colors duration-300 ${
                              activeIndex === index ? 'bg-[#9EFF00]' : 'bg-gray-600 hover:bg-gray-500'
                          }`}
                          aria-label={`View testimonial from ${testimonials[index].name}`}
                      />
                  ))}
              </div>

              {/* Thumbnail Selectors */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-8 sm:mt-10 lg:mt-12  sm:px-4">
                  {testimonials.map((testimonial, index) => (
                      <div
                          key={index}
                          onClick={() => setActiveIndex(index)}
                          className={`p-3 sm:p-4 rounded-lg sm:rounded-xl cursor-pointer transition-all duration-300 border text-center ${
                              activeIndex === index
                                  ? 'border-[#799B4B] bg-[#799B4B1A]  shadow-[0_0_30px_rgba(74,111,62,0.6)] transition-all duration-300  scale-105'
                                  : 'bg-[#111317] border-[#21242C] hover:bg-gray-800/80'
                          }`}
                          role="button"
                          tabIndex={0}
                          onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setActiveIndex(index)}
                          aria-pressed={activeIndex === index}
                      >
                          <div className="flex flex-col items-center">
                             <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-[10px] bg-[linear-gradient(135deg,#799B4B_0%,#4A6F3E_100%)] text-white flex items-center justify-center font-bold text-xs sm:text-sm mb-1 sm:mb-3">
                                  {testimonial.initials}
                             </div>
                             <p className="font-semibold text-white text-xs sm:text-sm mb-1">{testimonial.name}</p>
                             <p className="text-[10px] sm:text-xs text-gray-400 mb-1 sm:mb-4">{testimonial.title}</p>
                             <p className="text-xs sm:text-sm font-bold text-[#799B4B]">{testimonial.metric}</p>
                          </div>
                      </div>
                  ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
