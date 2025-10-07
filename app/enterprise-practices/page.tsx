"use client";

import { CustomButton } from "@/components/ui/custom-button";
import { useState } from "react";

export default function EnterprisePracticesPage() {
  const [activeTab, setActiveTab] = useState("All Agents");

  const getTabStyles = (tabName: string) => {
    const isActive = activeTab === tabName;
    return {
      className: `cursor-pointer px-6 py-2 rounded-lg font-normal transition-colors flex items-center gap-2 text-xs  ${
        isActive
          ? "text-white  bg-gradient-to-b from-[#799B4B] to-[#4A6F3E] "
          : "bg-[#121417] hover:bg-gray-800 hover:text-white text-[#94A3B8] border-[1px] border-[#22262A]"
      }`,
      onClick: () => setActiveTab(tabName),
    };
  };

  const getBadgeStyles = (tabName: string) => {
    const isActive = activeTab === tabName;
    return isActive
      ? "bg-white text-[#799B4B] text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center"
      : "bg-[#94A3B8] text-gray-800 text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center";
  };
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      {/* Hero Section */}
      <section className="relative  flex items-center justify-center px-6 pt-24 min-h-[100vh] overflow-hidden">
  {/* Dark background with subtle patterns */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(7, 9, 13, 0.2)" }}
        >
          {/* Background image with 30% opacity */}
    <div
      className="absolute inset-0 opacity-30"
      style={{
        backgroundImage: `url('/images/ai-healthcare-bg.svg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    ></div>
          {/* Subtle grid pattern */}
    <div
      className="absolute inset-0 opacity-[0.02]"
      style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
        backgroundSize: "50px 50px",
      }}
    ></div>
  </div>

        {/* Green glow effects */}
  <div className="absolute inset-0 overflow-hidden">
          {/* Main central glow */}
    <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full blur-3xl"
      style={{
        background:
          "radial-gradient(circle, rgba(34,197,94,0.1) 0%, rgba(34,197,94,0.05) 40%, transparent 70%)",
      }}
    ></div>

          {/* Top right accent */}
    <div
            className="absolute top-20 right-20 w-80 h-80 rounded-full blur-2xl"
      style={{
        background:
          "radial-gradient(circle, rgba(74,222,128,0.08) 0%, transparent 70%)",
      }}
    ></div>

          {/* Bottom left accent */}
    <div
      className="absolute bottom-20 sm:bottom-32 left-10 sm:left-20 w-32 h-32 sm:w-48 sm:h-48 lg:w-60 lg:h-60 rounded-full blur-xl"
      style={{
        background:
          "radial-gradient(circle, rgba(22,163,74,0.06) 0%, transparent 70%)",
      }}
    ></div>
  </div>

  <div className="max-w-6xl mx-auto relative z-10 text-center px-2 sm:px-4">
    {/* Badge */}
    <div className="flex justify-center mb-6 sm:mb-8">
      <div className="inline-flex items-center gap-2 bg-[#799B4B]/10 border border-[#799B4B]/20 rounded-full px-3 sm:px-4 py-1.5 sm:py-[9px] backdrop-blur-sm">
        <svg
          className="w-3 h-3 sm:w-4 sm:h-4 text-[#799B4B]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
        <span className="text-[#799B4B] text-[10px] sm:text-[12px] md:text-[13px] font-medium">
          Enterprise AI Orchestration Platform
        </span>
      </div>
    </div>

    {/* Heading */}
    <h1 className="text-base sm:text-2xl md:text-4xl lg:text-[60px] xl:text-[70px] font-bold mb-6 sm:mb-8 leading-snug sm:leading-tight tracking-tight">
      <span className="text-white">Deploy AI Agents. Deliver</span>
      <br />
      <span className="text-white">Results. </span>
      <span className="text-[#799B4B]">Replace Overhead.</span>
    </h1>

    {/* Subtitle */}
    <p className="text-[10px] sm:text-sm md:text-base lg:text-lg xl:text-[19px] text-[#94A3B8] mb-10 sm:mb-12 max-w-2xl sm:max-w-3xl md:max-w-4xl mx-auto leading-relaxed font-light">
      Connect AI-powered building blocks to create custom workflows that scale
      with your enterprise practice operations and deliver measurable results.
    </p>

    {/* Buttons */}
    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-14 sm:mb-20">
      <CustomButton
        backgroundColor="#799B4B"
        hoverBackgroundColor="#799B4B90"
        className="shadow-[0_0_30px_rgba(121,155,75,0.3)] hover:shadow-[0_0_40px_rgba(121,155,75,0.4)]"
        iconPosition="right"
        icon={
          <img
            src="/images/arrow-icon.svg"
            alt="Arrow"
            className="filter brightness-0 invert w-4 h-4"
          />
        }
      >
        Deploy Your AI Workforce
      </CustomButton>
      <CustomButton
        backgroundColor="rgba(255, 255, 255, 0.05)"
        textColor="#FFFFFF"
        hoverBackgroundColor="rgba(255, 255, 255, 0.1)"
        className="border border-gray-600 hover:border-gray-400 backdrop-blur-sm"
        iconPosition="left"
        icon={<img src="/images/play-button.svg" alt="Play" className="w-4 h-4 sm:w-5 sm:h-5" />}
      >
        View Enterprise Demo
      </CustomButton>
    </div>

    {/* Stats Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 mx-auto w-full max-w-[700px]">
      {/* 1 */}
      <div className="text-center group">
        <div className="mb-4 sm:mb-6 flex justify-center">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#799B4B]/10 border border-[#799B4B]/10 rounded-2xl flex items-center justify-center backdrop-blur-sm group-hover:bg-[#799B4B]/15 group-hover:border-[#799B4B]/20 transition-all duration-300">
            <img src="/images/healthcare-facilities-new.svg" alt="Healthcare Facilities" className="w-6 h-6 sm:w-8 sm:h-8" />
          </div>
        </div>
        <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#799B4B] mb-2 sm:mb-3 tracking-tight">
          500+
        </div>
        <div className="text-[#94A3B8] text-xs sm:text-sm md:text-base font-medium">
          Healthcare Facilities
        </div>
      </div>

      {/* 2 */}
      <div className="text-center group">
        <div className="mb-4 sm:mb-6 flex justify-center">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#799B4B]/10 border border-[#799B4B]/10 rounded-2xl flex items-center justify-center backdrop-blur-sm group-hover:bg-[#799B4B]/15 group-hover:border-[#799B4B]/20 transition-all duration-300">
            <svg className="w-6 h-6 sm:w-8 sm:h-8 text-[#799B4B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
        </div>
        <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#799B4B] mb-2 sm:mb-3 tracking-tight">
          $3B+
        </div>
        <div className="text-[#94A3B8] text-xs sm:text-sm md:text-base font-medium">
          Claims Processed
        </div>
      </div>

      {/* 3 */}
      <div className="text-center group">
        <div className="mb-4 sm:mb-6 flex justify-center">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#799B4B]/10 border border-[#799B4B]/10 rounded-2xl flex items-center justify-center backdrop-blur-sm group-hover:bg-[#799B4B]/15 group-hover:border-[#799B4B]/20 transition-all duration-300">
            <svg className="w-6 h-6 sm:w-8 sm:h-8 text-[#799B4B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
        </div>
        <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#799B4B] mb-2 sm:mb-3 tracking-tight">
          21X
        </div>
        <div className="text-[#94A3B8] text-xs sm:text-sm md:text-base font-medium">
          Average ROI
        </div>
      </div>
    </div>
  </div>
</section>


      {/* AI Workforce for 5 Healthcare Verticals */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            <span className="text-[#799B4B]">AI Workforce</span> for
            <br />
            All Healthcare Outcomes
          </h2>
          <p className="text-[#94A3B8] text-lg max-w-3xl mx-auto leading-relaxed">
            Specialized AI agents designed for specific healthcare practice
            types, delivering measurable outcomes and ROI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-16 items-stretch">
          {/* Skilled Nursing Facilities */}
          <div
            className="border border-gray-700/50 rounded-2xl px-8 pt-8 pb-16 backdrop-blur-sm relative overflow-hidden group transition-all duration-300 flex flex-col h-full"
            style={{ backgroundColor: "#0C0E12" }}
          >
            <div className="relative z-10 flex flex-col h-full">
              {/* Content area with gradient background */}
              <div className="relative mb-6">
                {/* Background image behind gradient */}
                <div
                  className="absolute inset-0 -inset-x-2 -inset-y-2"
                  style={{
                    backgroundImage: `url('/images/inner-skilled-nursing.svg')`,
                    backgroundSize: "128px 128px",
                    backgroundPosition: "right 16%",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
                {/* Subtle gradient behind icon/title/description only - Green theme for SNF */}
                <div
                  className="absolute inset-0 -inset-x-2 -inset-y-2 opacity-10 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(162,192,67,0.8) 0%, rgba(162,192,67,0.5) 40%, rgba(162,192,67,0.1) 80%)",
                  }}
                ></div>
                {/* Text positioned above center of background image */}
                <div className="absolute inset-0 flex items-start justify-end pr-8 pt-12 pointer-events-none">
                  <div
                    className="font-bold text-[#F8FAFC] tracking-wider opacity-60"
                    style={{ fontSize: "14px", lineHeight: "1.2" }}
                  >
                    SNF
                  </div>
                </div>

                <div className="relative z-10">
                  <div className="mb-6 mt-2 ml-2 w-14 h-14 flex items-center justify-center overflow-hidden rounded-xl">
                    <img
                      src="/images/skilled-nursing.svg"
                      alt="Skilled Nursing Facilities"
                      className="w-20 h-20 object-cover"
                      style={{ objectPosition: "center" }}
                    />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">
                    Skilled Nursing Facilities
                  </h3>
                  <p className="text-[#94A3B8] text-sm mb-0 leading-relaxed">
                    PDPM optimization, compliance automation, and quality
                    reporting for skilled nursing operations.
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <img
                    src="/images/ai-agents-new.svg"
                    alt="AI Agents"
                    className="w-4 h-4"
                  />
                  <span className="text-sm font-medium text-white">
                    AI Agents
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span
                    className="text-xs px-3 py-1.5 rounded-full border"
                    style={{
                      backgroundColor: "#A2C0431A",
                      color: "#A2C043",
                      borderColor: "#A2C043",
                    }}
                  >
                    PDPM Optimizer
                  </span>
                  <span
                    className="text-xs px-3 py-1.5 rounded-full border"
                    style={{
                      backgroundColor: "#A2C0431A",
                      color: "#A2C043",
                      borderColor: "#A2C043",
                    }}
                  >
                    Compliance Monitor
                  </span>
                  <span
                    className="text-xs px-3 py-1.5 rounded-full border"
                    style={{
                      backgroundColor: "#A2C0431A",
                      color: "#A2C043",
                      borderColor: "#A2C043",
                    }}
                  >
                    Quality Reporter
                  </span>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <svg
                    className="w-4 h-4 text-[#799B4B]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                  <span className="text-sm font-medium text-white">
                    Key Outcomes
                  </span>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-[#94A3B8]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#799B4B]"></div>
                    35% PDPM Revenue Increase
                  </li>
                  <li className="flex items-center gap-2 text-sm text-[#94A3B8]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#799B4B]"></div>
                    90% Compliance Accuracy
                  </li>
                  <li className="flex items-center gap-2 text-sm text-[#94A3B8]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#799B4B]"></div>
                    60% Admin Time Reduction
                  </li>
                </ul>
              </div>

              <div className="mt-auto">
                <button className="text-[#799B4B] text-sm font-medium hover:text-[#799B4B]/80 transition-colors flex items-center justify-center gap-2 group w-full">
                  Schedule Demo
                  <img
                    src="/images/arrow-icon.svg"
                    alt="Arrow"
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Psychiatry & Rehabilitation */}
          <div
            className="border border-gray-700/50 rounded-2xl px-8 pt-8 pb-16 backdrop-blur-sm relative overflow-hidden group transition-all duration-300 flex flex-col h-full"
            style={{ backgroundColor: "#0C0E12" }}
          >
            {/* Background gradient section under icon/title/description */}
            <div
              className="absolute inset-x-0 top-0 h-48 rounded-t-2xl opacity-30"
              style={{
                background:
                  "linear-gradient(135deg, rgba(59,130,246,0.2) 0%, transparent 100%)",
              }}
            ></div>

            <div className="relative z-10 flex flex-col h-full">
              {/* Content area with gradient background */}
              <div className="relative mb-6">
                {/* Background image behind gradient */}
                <div
                  className="absolute inset-0 -inset-x-2 -inset-y-2"
                  style={{
                    backgroundImage: `url('/images/inner-rehabilitation-new.svg')`,
                    backgroundSize: "128px 128px",
                    backgroundPosition: "right 16%",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
                {/* Subtle gradient behind icon/title/description only - Blue theme for Rehab */}
                <div
                  className="absolute inset-0 -inset-x-2 -inset-y-2 opacity-10 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(59,130,246,0.8) 0%, rgba(59,130,246,0.5) 40%, rgba(59,130,246,0.1) 80%)",
                  }}
                ></div>
                {/* Text positioned above center of background image */}
                <div className="absolute inset-0 flex items-start justify-end pr-8 pt-12 pointer-events-none">
                  <div
                    className="font-bold text-[#F8FAFC] tracking-wider opacity-60"
                    style={{ fontSize: "14px", lineHeight: "1.2" }}
                  >
                    REHAB
                  </div>
                </div>

                <div className="relative z-10">
                  <div className="mb-6 mt-2 ml-2">
                    <img
                      src="/images/rehabilitation.svg"
                      alt="Physiatry & Rehabilitation"
                      className="w-14 h-14 rounded-xl"
                    />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">
                    Physiatry & Rehabilitation
                  </h3>
                  <p className="text-[#94A3B8] text-sm mb-0 leading-relaxed">
                    Workflow optimization and analytics ROI for rehabilitation
                    networks and specialty practices.
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <img
                    src="/images/ai-agents-new.svg"
                    alt="AI Agents"
                    className="w-4 h-4"
                  />
                  <span className="text-sm font-medium text-white">
                    AI Agents
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span
                    className="text-xs px-3 py-1.5 rounded-full border"
                    style={{
                      backgroundColor: "#A2C0431A",
                      color: "#A2C043",
                      borderColor: "#A2C043",
                    }}
                  >
                    Therapy Scheduler
                  </span>
                  <span
                    className="text-xs px-3 py-1.5 rounded-full border"
                    style={{
                      backgroundColor: "#A2C0431A",
                      color: "#A2C043",
                      borderColor: "#A2C043",
                    }}
                  >
                    Outcome Tracker
                  </span>
                  <span
                    className="text-xs px-3 py-1.5 rounded-full border"
                    style={{
                      backgroundColor: "#A2C0431A",
                      color: "#A2C043",
                      borderColor: "#A2C043",
                    }}
                  >
                    ROI Analyzer
                  </span>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <svg
                    className="w-4 h-4 text-[#799B4B]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                  <span className="text-sm font-medium text-white">
                    Key Outcomes
                  </span>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-[#94A3B8]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#799B4B]"></div>
                    45% Workflow Efficiency
                  </li>
                  <li className="flex items-center gap-2 text-sm text-[#94A3B8]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#799B4B]"></div>
                    35% Patient Throughput
                  </li>
                  <li className="flex items-center gap-2 text-sm text-[#94A3B8]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#799B4B]"></div>
                    $2.1M Annual Savings
                  </li>
                </ul>
              </div>

              <div className="mt-auto">
                <button className="text-[#799B4B] text-sm font-medium hover:text-[#799B4B]/80 transition-colors flex items-center justify-center gap-2 group w-full">
                  Schedule Demo
                  <img
                    src="/images/arrow-icon.svg"
                    alt="Arrow"
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Multi-Specialty Practice Groups */}
          <div
            className="border border-gray-700/50 rounded-2xl px-8 pt-8 pb-16 backdrop-blur-sm relative overflow-hidden group transition-all duration-300 flex flex-col h-full"
            style={{ backgroundColor: "#0C0E12" }}
          >
            {/* Background gradient section under icon/title/description */}
            <div
              className="absolute inset-x-0 top-0 h-48 rounded-t-2xl opacity-30"
              style={{
                background:
                  "linear-gradient(135deg, rgba(147,51,234,0.2) 0%, transparent 100%)",
              }}
            ></div>

            <div className="relative z-10 flex flex-col h-full">
              {/* Content area with gradient background */}
              <div className="relative mb-6">
                {/* Background image behind gradient */}
                <div
                  className="absolute inset-0 -inset-x-2 -inset-y-2"
                  style={{
                    backgroundImage: `url('/images/inner-multi-speciality.svg')`,
                    backgroundSize: "128px 128px",
                    backgroundPosition: "right 16%",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
                {/* Subtle gradient behind icon/title/description only - Purple theme for Multi-Specialty */}
                <div
                  className="absolute inset-0 -inset-x-2 -inset-y-2 opacity-10 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(147,51,234,0.8) 0%, rgba(147,51,234,0.5) 40%, rgba(147,51,234,0.1) 80%)",
                  }}
                ></div>
                {/* Text positioned above center of background image */}
                <div className="absolute inset-0 flex items-start justify-end pr-8 pt-12 pointer-events-none">
                  <div
                    className="font-bold text-[#F8FAFC] tracking-wider opacity-60"
                    style={{ fontSize: "14px", lineHeight: "1.2" }}
                  >
                    MSP
                  </div>
                </div>

                <div className="relative z-10">
                  <div className="mb-6 mt-2 ml-2">
                    <img
                      src="/images/multi-speciality-groups.svg"
                      alt="Multi-Specialty Practice Groups"
                      className="w-14 h-14 rounded-xl"
                    />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">
                    Multi-Specialty Practice Groups
                  </h3>
                  <p className="text-[#94A3B8] text-sm mb-0 leading-relaxed">
                    Prior authorization, claims processing, and patient intake
                    automation for practice groups.
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <img
                    src="/images/ai-agents-new.svg"
                    alt="AI Agents"
                    className="w-4 h-4"
                  />
                  <span className="text-sm font-medium text-white">
                    AI Agents
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span
                    className="text-xs px-3 py-1.5 rounded-full border"
                    style={{
                      backgroundColor: "#A2C0431A",
                      color: "#A2C043",
                      borderColor: "#A2C043",
                    }}
                  >
                    Prior Auth AI
                  </span>
                  <span
                    className="text-xs px-3 py-1.5 rounded-full border"
                    style={{
                      backgroundColor: "#A2C0431A",
                      color: "#A2C043",
                      borderColor: "#A2C043",
                    }}
                  >
                    Claims Processor
                  </span>
                  <span
                    className="text-xs px-3 py-1.5 rounded-full border"
                    style={{
                      backgroundColor: "#A2C0431A",
                      color: "#A2C043",
                      borderColor: "#A2C043",
                    }}
                  >
                    Intake Optimizer
                  </span>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <svg
                    className="w-4 h-4 text-[#799B4B]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                  <span className="text-sm font-medium text-white">
                    Key Outcomes
                  </span>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-[#94A3B8]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#799B4B]"></div>
                    80% Prior Auth Approval
                  </li>
                  <li className="flex items-center gap-2 text-sm text-[#94A3B8]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#799B4B]"></div>
                    90% Claims Processing Speed
                  </li>
                  <li className="flex items-center gap-2 text-sm text-[#94A3B8]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#799B4B]"></div>
                    65% Intake Efficiency
                  </li>
                </ul>
              </div>

              <div className="mt-auto">
                <button className="text-[#799B4B] text-sm font-medium hover:text-[#799B4B]/80 transition-colors flex items-center justify-center gap-2 group w-full">
                  Schedule Demo
                  <img
                    src="/images/arrow-icon.svg"
                    alt="Arrow"
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Ambulatory Surgery Centers */}
          <div
            className="border border-gray-700/50 rounded-2xl px-8 pt-8 pb-16 backdrop-blur-sm relative overflow-hidden group transition-all duration-300 flex flex-col h-full"
            style={{ backgroundColor: "#0C0E12" }}
          >
            {/* Background gradient section under icon/title/description */}
            <div
              className="absolute inset-x-0 top-0 h-48 rounded-t-2xl opacity-30"
              style={{
                background:
                  "linear-gradient(135deg, rgba(249,115,22,0.2) 0%, transparent 100%)",
              }}
            ></div>

            <div className="relative z-10 flex flex-col h-full">
              {/* Content area with gradient background */}
              <div className="relative mb-6">
                {/* Background image behind gradient */}
                <div
                  className="absolute inset-0 -inset-x-2 -inset-y-2"
                  style={{
                    backgroundImage: `url('/images/inner-ambulatory-surgery.svg')`,
                    backgroundSize: "128px 128px",
                    backgroundPosition: "right 16%",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
                {/* Subtle gradient behind icon/title/description only - Orange theme for Surgery Centers */}
                <div
                  className="absolute inset-0 -inset-x-2 -inset-y-2 opacity-10 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(249,115,22,0.8) 0%, rgba(249,115,22,0.5) 40%, rgba(249,115,22,0.1) 80%)",
                  }}
                ></div>
                {/* Text positioned above center of background image */}
                <div className="absolute inset-0 flex items-start justify-end pr-8 pt-12 pointer-events-none">
                  <div
                    className="font-bold text-[#F8FAFC] tracking-wider opacity-60"
                    style={{ fontSize: "14px", lineHeight: "1.2" }}
                  >
                    ASC
                  </div>
                </div>

                <div className="relative z-10">
                  <div className="mb-6 mt-2 ml-2">
                    <img
                      src="/images/ambulatory-surgery-center.svg"
                      alt="Ambulatory Surgery Centers"
                      className="w-14 h-14 rounded-xl"
                    />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">
                    Ambulatory Surgery Centers
                  </h3>
                  <p className="text-[#94A3B8] text-sm mb-0 leading-relaxed">
                    Scheduling optimization, supply chain management, and
                    insurance verification for surgery centers.
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <img
                    src="/images/ai-agents-new.svg"
                    alt="AI Agents"
                    className="w-4 h-4"
                  />
                  <span className="text-sm font-medium text-white">
                    AI Agents
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span
                    className="text-xs px-3 py-1.5 rounded-full border"
                    style={{
                      backgroundColor: "#A2C0431A",
                      color: "#A2C043",
                      borderColor: "#A2C043",
                    }}
                  >
                    Surgery Scheduler
                  </span>
                  <span
                    className="text-xs px-3 py-1.5 rounded-full border"
                    style={{
                      backgroundColor: "#A2C0431A",
                      color: "#A2C043",
                      borderColor: "#A2C043",
                    }}
                  >
                    Supply Chain AI
                  </span>
                  <span
                    className="text-xs px-3 py-1.5 rounded-full border"
                    style={{
                      backgroundColor: "#A2C0431A",
                      color: "#A2C043",
                      borderColor: "#A2C043",
                    }}
                  >
                    Insurance Verifier
                  </span>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <svg
                    className="w-4 h-4 text-[#799B4B]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                  <span className="text-sm font-medium text-white">
                    Key Outcomes
                  </span>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-[#94A3B8]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#799B4B]"></div>
                    95% OR Utilization
                  </li>
                  <li className="flex items-center gap-2 text-sm text-[#94A3B8]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#799B4B]"></div>
                    30% Supply Cost Reduction
                  </li>
                  <li className="flex items-center gap-2 text-sm text-[#94A3B8]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#799B4B]"></div>
                    99% Insurance Verification
                  </li>
                </ul>
              </div>

              <div className="mt-auto">
                <button className="text-[#799B4B] text-sm font-medium hover:text-[#799B4B]/80 transition-colors flex items-center justify-center gap-2 group w-full">
                  Schedule Demo
                  <img
                    src="/images/arrow-icon.svg"
                    alt="Arrow"
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Home Health & Hospice */}
          <div
            className="border border-gray-700/50 rounded-2xl px-8 pt-8 pb-16 backdrop-blur-sm relative overflow-hidden group transition-all duration-300 flex flex-col h-full"
            style={{ backgroundColor: "#0C0E12" }}
          >
            <div className="relative z-10 flex flex-col h-full">
              {/* Content area with gradient background */}
              <div className="relative mb-6">
                {/* Background image behind gradient */}
                <div
                  className="absolute inset-0 -inset-x-2 -inset-y-2"
                  style={{
                    backgroundImage: `url('/images/inner-healthcare-hospice-new.svg')`,
                    backgroundSize: "128px 128px",
                    backgroundPosition: "right 16%",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
                {/* Subtle gradient behind icon/title/description only - Teal theme for Home Health */}
                <div
                  className="absolute inset-0 -inset-x-2 -inset-y-2 opacity-10 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(20,184,166,0.8) 0%, rgba(20,184,166,0.5) 40%, rgba(20,184,166,0.1) 80%)",
                  }}
                ></div>
                {/* Text positioned above center of background image */}
                <div className="absolute inset-0 flex items-start justify-end pr-8 pt-12 pointer-events-none">
                  <div
                    className="font-bold text-[#F8FAFC] tracking-wider opacity-60"
                    style={{ fontSize: "14px", lineHeight: "1.2" }}
                  >
                    HHH
                  </div>
                </div>

                <div className="relative z-10">
                  <div className="mb-6 mt-2 ml-2 w-14 h-14 flex items-center justify-center overflow-hidden rounded-xl">
                    <img
                      src="/images/health-hospice.svg"
                      alt="Home Health & Hospice"
                      className="w-20 h-20 object-cover"
                      style={{ objectPosition: "center" }}
                    />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">
                    Home Health & Hospice
                  </h3>
                  <p className="text-[#94A3B8] text-sm mb-0 leading-relaxed">
                    Care plan optimization, OASIS management, medication
                    tracking, and quality reporting.
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <img
                    src="/images/ai-agents-new.svg"
                    alt="AI Agents"
                    className="w-4 h-4"
                  />
                  <span className="text-sm font-medium text-white">
                    AI Agents
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span
                    className="text-xs px-3 py-1.5 rounded-full border"
                    style={{
                      backgroundColor: "#A2C0431A",
                      color: "#A2C043",
                      borderColor: "#A2C043",
                    }}
                  >
                    Care Plan AI
                  </span>
                  <span
                    className="text-xs px-3 py-1.5 rounded-full border"
                    style={{
                      backgroundColor: "#A2C0431A",
                      color: "#A2C043",
                      borderColor: "#A2C043",
                    }}
                  >
                    OASIS Manager
                  </span>
                  <span
                    className="text-xs px-3 py-1.5 rounded-full border"
                    style={{
                      backgroundColor: "#A2C0431A",
                      color: "#A2C043",
                      borderColor: "#A2C043",
                    }}
                  >
                    Med Tracker
                  </span>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <svg
                    className="w-4 h-4 text-[#799B4B]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                  <span className="text-sm font-medium text-white">
                    Key Outcomes
                  </span>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-[#94A3B8]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#799B4B]"></div>
                    40% Care Plan Efficiency
                  </li>
                  <li className="flex items-center gap-2 text-sm text-[#94A3B8]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#799B4B]"></div>
                    95% OASIS Accuracy
                  </li>
                  <li className="flex items-center gap-2 text-sm text-[#94A3B8]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#799B4B]"></div>
                    70% Medication Adherence
                  </li>
                </ul>
              </div>

              <div className="mt-auto">
                <button className="text-[#799B4B] text-sm font-medium hover:text-[#799B4B]/80 transition-colors flex items-center justify-center gap-2 group w-full">
                  Schedule Demo
                  <img
                    src="/images/arrow-icon.svg"
                    alt="Arrow"
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-20">
          <CustomButton
            backgroundColor="#799B4B"
            hoverBackgroundColor="#799B4B90"
            className="
    bg-[#4A6F3E] cursor-pointer hover:bg-[#3d5a33] text-white
    px-3 py-2 sm:px-5 sm:py-2.5 md:px-8 md:py-3
    rounded-xl flex items-center justify-center md:justify-start
    text-xs sm:text-sm md:text-[13px] lg:text-[14px]
    h-9 sm:h-10 md:h-11 "
            iconPosition="right"
            width="auto"
            icon={
              <img
                src="/images/arrow-icon.svg"
                alt="Arrow"
                className="filter brightness-0 invert 
                 w-3 h-3 sm:w-4 sm:h-4 ml-2 shrink-0"
                style={{
                  minWidth: "16px",
                  minHeight: "16px",
                }}
              />
            }
          >
            <span
              className="
      block truncate overflow-hidden whitespace-nowrap
      max-w-[120px] sm:max-w-[160px] md:max-w-[220px] lg:max-w-[340px]
    "
            >
              Explore All Healthcare Solutions
            </span>
          </CustomButton>
        </div>
      </section>
      {/* The Problem We Solve */}
      {/* The Problem We Solve - Overlay Card spanning black to gray background */}
      <section className="relative px-6 bg-black pb-20">
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-20 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className="text-center mx-auto"
            style={{
              background: "#E7E9E3CC",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)", // Safari support
              borderRadius: "40.08px",
              border: "0.84px solid #C8CBC2",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="p-6 sm:p-8 md:p-12 lg:p-16 ">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4 sm:mb-6">
                The Problem We Solve
              </h2>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed max-w-4xl">
                Healthcare practices are drowning in administrative work.
                Doctors spend more time on paperwork than with patients. Revenue
                cycles are slow and error-prone. Staff burnout is at an all-time
                high. We built Curie AI to
                <br /> change this reality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Building Your AI Workforce */}
      <section
        className="pt-32 pb-20 px-6 relative"
        style={{ backgroundColor: "#E7E9E3" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 mt-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Building Your AI Workforce
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-base">
              Our proven methodology for implementing AI building blocks across
              enterprise practices
            </p>
          </div>

          <div className="space-y-6">
            {/* Step 1 - Assessment */}
            <div className="rounded-xl p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-[#62884A] rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <div className="text-xs text-[#62884A] mb-1 font-medium">
                      Assessment
                    </div>
                    <div className="text-xs text-gray-500 mb-3">Week 1-2</div>
                    <h3
                      className="font-bold text-black mb-2"
                      style={{
                        fontSize: "24px",
                        lineHeight: "32px",
                        letterSpacing: "0%",
                      }}
                    >
                      Practice Analysis
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      We analyze your current workflows, pain points, and
                      integration requirements.
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="text-sm font-semibold text-black mb-4">
                    Key Outcomes
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <img
                        src="/images/tick-icon.svg"
                        alt="Tick"
                        className="w-4 h-4 flex-shrink-0"
                      />
                      <span className="text-sm text-gray-700">
                        Workflow mapping
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <img
                        src="/images/tick-icon.svg"
                        alt="Tick"
                        className="w-4 h-4 flex-shrink-0"
                      />
                      <span className="text-sm text-gray-700">
                        Integration assessment
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <img
                        src="/images/tick-icon.svg"
                        alt="Tick"
                        className="w-4 h-4 flex-shrink-0"
                      />
                      <span className="text-sm text-gray-700">
                        ROI projections
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 - Design */}
            <div className="rounded-xl p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-[#62884A] rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <div className="text-xs text-[#62884A] mb-1 font-medium">
                      Design
                    </div>
                    <div className="text-xs text-gray-500 mb-3">Week 3-4</div>
                    <h3
                      className="font-bold text-black mb-2"
                      style={{
                        fontSize: "24px",
                        lineHeight: "32px",
                        letterSpacing: "0%",
                      }}
                    >
                      Custom Configuration
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Configure AI blocks to match your specific practice needs
                      and existing systems.
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="text-sm font-semibold text-black mb-4">
                    Key Outcomes
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <img
                        src="/images/tick-icon.svg"
                        alt="Tick"
                        className="w-4 h-4 flex-shrink-0"
                      />
                      <span className="text-sm text-gray-700">
                        Custom AI models
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <img
                        src="/images/tick-icon.svg"
                        alt="Tick"
                        className="w-4 h-4 flex-shrink-0"
                      />
                      <span className="text-sm text-gray-700">
                        Integration planning
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <img
                        src="/images/tick-icon.svg"
                        alt="Tick"
                        className="w-4 h-4 flex-shrink-0"
                      />
                      <span className="text-sm text-gray-700">
                        Staff training plan
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 - Build */}
            <div className="rounded-xl p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-[#62884A] rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <div className="text-xs text-[#62884A] mb-1 font-medium">
                      Build
                    </div>
                    <div className="text-xs text-gray-500 mb-3">Week 5-8</div>
                    <h3
                      className="font-bold text-black mb-2"
                      style={{
                        fontSize: "24px",
                        lineHeight: "32px",
                        letterSpacing: "0%",
                      }}
                    >
                      Implementation
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Gradual deployment with continuous monitoring and
                      optimization.
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="text-sm font-semibold text-black mb-4">
                    Key Outcomes
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <img
                        src="/images/tick-icon.svg"
                        alt="Tick"
                        className="w-4 h-4 flex-shrink-0"
                      />
                      <span className="text-sm text-gray-700">
                        Live deployment
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <img
                        src="/images/tick-icon.svg"
                        alt="Tick"
                        className="w-4 h-4 flex-shrink-0"
                      />
                      <span className="text-sm text-gray-700">
                        Staff onboarding
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <img
                        src="/images/tick-icon.svg"
                        alt="Tick"
                        className="w-4 h-4 flex-shrink-0"
                      />
                      <span className="text-sm text-gray-700">
                        Performance monitoring
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4 - Optimize */}
            <div className="rounded-xl p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-[#62884A] rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">4</span>
                  </div>
                  <div>
                    <div className="text-xs text-[#62884A] mb-1 font-medium">
                      Optimize
                    </div>
                    <div className="text-xs text-gray-500 mb-3">Ongoing</div>
                    <h3
                      className="font-bold text-black mb-2"
                      style={{
                        fontSize: "24px",
                        lineHeight: "32px",
                        letterSpacing: "0%",
                      }}
                    >
                      Continuous Improvement
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Ongoing optimization based on real-world performance data.
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="text-sm font-semibold text-black mb-4">
                    Key Outcomes
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <img
                        src="/images/tick-icon.svg"
                        alt="Tick"
                        className="w-4 h-4 flex-shrink-0"
                      />
                      <span className="text-sm text-gray-700">
                        Performance optimization
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <img
                        src="/images/tick-icon.svg"
                        alt="Tick"
                        className="w-4 h-4 flex-shrink-0"
                      />
                      <span className="text-sm text-gray-700">
                        Feature updates
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <img
                        src="/images/tick-icon.svg"
                        alt="Tick"
                        className="w-4 h-4 flex-shrink-0"
                      />
                      <span className="text-sm text-gray-700">
                        Scaling support
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Workforce vs Traditional Software */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-[#799B4B]">AI Workforce</span>{" "}
              <span className="text-white">vs</span>{" "}
              <span className="text-[#94A3B8]">Traditional Software</span>
            </h2>
            <p className="text-[#94A3B8] max-w-2xl mx-auto text-lg">
              Move beyond tools to outcomes. Deploy AI agents that deliver
              measurable results, not just features.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* AI Workforce */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 flex flex-col h-full hover:bg-gradient-to-br hover:from-[#85A647]/5 hover:to-transparent transition-all duration-300">
              <div className="flex items-center justify-center mb-6">
                <img
                  src="/images/ai-workforce.svg"
                  alt="AI Workforce"
                  className="w-16 h-16"
                />
              </div>

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  AI Workforce
                </h3>
                <p className="text-[#799B4B] text-sm font-medium mb-0">
                  Outcomes-Driven Platform
                </p>
              </div>

              <div className="space-y-6 mb-8 flex-grow">
                <div className="flex items-start space-x-4">
                  {/* <CHANGE> Updated to lightning bolt icon */}
                  <div className="w-6 h-6 flex items-center justify-center mt-1 flex-shrink-0">
                    <img
                      src="/images/implementation-wf.svg"
                      alt="Implementation"
                      className="w-6 h-6"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">
                      Implementation
                    </p>
                    <p className="text-sm text-[#94A3B8]">
                      AI agents deploy in days
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  {/* <CHANGE> Updated to trending up chart icon */}
                  <div className="w-6 h-6 flex items-center justify-center mt-1 flex-shrink-0">
                    <img
                      src="/images/outcomes-wf.svg"
                      alt="Outcomes Focus"
                      className="w-6 h-6"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">
                      Outcomes Focus
                    </p>
                    <p className="text-sm text-[#94A3B8]">
                      Results-driven with measurable ROI
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  {/* <CHANGE> Updated to circular arrows/refresh icon */}
                  <div className="w-6 h-6 flex items-center justify-center mt-1 flex-shrink-0">
                    <img
                      src="/images/overhead-wf.svg"
                      alt="Overhead"
                      className="w-6 h-6"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">Overhead</p>
                    <p className="text-sm text-[#94A3B8]">
                      Replaces manual processes entirely
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  {/* <CHANGE> Updated to checkmark icon */}
                  <div className="w-6 h-6 flex items-center justify-center mt-1 flex-shrink-0">
                    <img
                      src="/images/cost-structure-wf.svg"
                      alt="Cost Structure"
                      className="w-6 h-6"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">
                      Cost Structure
                    </p>
                    <p className="text-sm text-[#94A3B8]">
                      Revenue-based partnership model
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-700 pt-6">
                <p
                  className="text-white mb-4 font-bold"
                  style={{
                    fontSize: "15.5px",
                    lineHeight: "24px",
                    letterSpacing: "0%",
                  }}
                >
                  AI Workforce Benefits
                </p>
                <ul className="text-sm text-[#799B4B] space-y-2">
                  <li className="flex items-center gap-2">
                    <img
                      src="/images/cost-structure-wf.svg"
                      alt="Check"
                      className="w-4 h-4 flex-shrink-0"
                    />
                    Deploy in days, not months
                  </li>
                  <li className="flex items-center gap-2">
                    <img
                      src="/images/cost-structure-wf.svg"
                      alt="Check"
                      className="w-4 h-4 flex-shrink-0"
                    />
                    Guaranteed ROI outcomes
                  </li>
                  <li className="flex items-center gap-2">
                    <img
                      src="/images/cost-structure-wf.svg"
                      alt="Check"
                      className="w-4 h-4 flex-shrink-0"
                    />
                    Zero additional overhead
                  </li>
                  <li className="flex items-center gap-2">
                    <img
                      src="/images/cost-structure-wf.svg"
                      alt="Check"
                      className="w-4 h-4 flex-shrink-0"
                    />
                    Revenue-sharing model
                  </li>
                  <li className="flex items-center gap-2">
                    <img
                      src="/images/cost-structure-wf.svg"
                      alt="Check"
                      className="w-4 h-4 flex-shrink-0"
                    />
                    Continuous AI optimization
                  </li>
                  <li className="flex items-center gap-2">
                    <img
                      src="/images/cost-structure-wf.svg"
                      alt="Check"
                      className="w-4 h-4 flex-shrink-0"
                    />
                    Healthcare compliance built-in
                  </li>
                </ul>
              </div>
            </div>

            {/* Traditional Software */}
            <div className="bg-gray-800/30 border border-gray-700 rounded-xl p-8 flex flex-col h-full hover:bg-gradient-to-br hover:from-[#85A647]/5 hover:to-transparent transition-all duration-300">
              <div className="flex items-center justify-center mb-6">
                <img
                  src="/images/traditional-software.svg"
                  alt="Traditional Software"
                  className="w-16 h-16 rounded-full"
                  style={{
                    width: "64px",
                    height: "64px",
                    borderRadius: "9999px",
                  }}
                />
              </div>

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Traditional Software
                </h3>
                <p className="text-[#94A3B8] text-sm font-medium">
                  Tool-Focused Solutions
                </p>
              </div>

              <div className="space-y-6 mb-8 flex-grow">
                <div className="flex items-start space-x-4">
                  {/* <CHANGE> Updated to clock icon */}
                  <div className="w-6 h-6 flex items-center justify-center mt-1 flex-shrink-0">
                    <img
                      src="/images/implementation-ts.svg"
                      alt="Implementation"
                      className="w-6 h-6"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">
                      Implementation
                    </p>
                    <p className="text-sm text-[#94A3B8]">
                      Software takes months to implement
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  {/* <CHANGE> Updated to gear/settings icon */}
                  <div className="w-6 h-6 flex items-center justify-center mt-1 flex-shrink-0">
                    <img
                      src="/images/outcomes-focus-ts.svg"
                      alt="Outcomes Focus"
                      className="w-6 h-6"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">
                      Outcomes Focus
                    </p>
                    <p className="text-sm text-[#94A3B8]">
                      Feature-focused with unclear value
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  {/* <CHANGE> Updated to people/users icon */}
                  <div className="w-6 h-6 flex items-center justify-center mt-1 flex-shrink-0">
                    <img
                      src="/images/overhead-ts.svg"
                      alt="Overhead"
                      className="w-6 h-6"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">Overhead</p>
                    <p className="text-sm text-[#94A3B8]">
                      Adds more tools to manage
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  {/* <CHANGE> Updated to dollar sign icon */}
                  <div className="w-6 h-6 flex items-center justify-center mt-1 flex-shrink-0">
                    <img
                      src="/images/cost-structure-ts.svg"
                      alt="Cost Structure"
                      className="w-6 h-6"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">
                      Cost Structure
                    </p>
                    <p className="text-sm text-[#94A3B8]">
                      Fixed licensing with hidden costs
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-700 pt-6">
                <p
                  className="text-white mb-4 font-bold"
                  style={{
                    fontSize: "15.5px",
                    lineHeight: "24px",
                    letterSpacing: "0%",
                  }}
                >
                  Traditional Limitations
                </p>
                <ul className="text-sm text-[#94A3B8] space-y-2">
                  <li className="flex items-center gap-2">
                    <img
                      src="/images/cross-icon.svg"
                      alt="Cross"
                      className="w-4 h-4 flex-shrink-0"
                    />
                    Months of implementation delays
                  </li>
                  <li className="flex items-center gap-2">
                    <img
                      src="/images/cross-icon.svg"
                      alt="Cross"
                      className="w-4 h-4 flex-shrink-0"
                    />
                    Unclear ROI and value measurement
                  </li>
                  <li className="flex items-center gap-2">
                    <img
                      src="/images/cross-icon.svg"
                      alt="Cross"
                      className="w-4 h-4 flex-shrink-0"
                    />
                    Increases operational overhead
                  </li>
                  <li className="flex items-center gap-2">
                    <img
                      src="/images/cross-icon.svg"
                      alt="Cross"
                      className="w-4 h-4 flex-shrink-0"
                    />
                    Fixed costs regardless of outcomes
                  </li>
                  <li className="flex items-center gap-2">
                    <img
                      src="/images/cross-icon.svg"
                      alt="Cross"
                      className="w-4 h-4 flex-shrink-0"
                    />
                    Manual configuration required
                  </li>
                  <li className="flex items-center gap-2">
                    <img
                      src="/images/cross-icon.svg"
                      alt="Cross"
                      className="w-4 h-4 flex-shrink-0"
                    />
                    Generic compliance approach
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Comparison Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-12">
            <div>
              <div className="text-5xl font-bold text-[#799B4B] mb-2">85%</div>
              <div className="text-white font-medium mb-1">
                Faster Implementation
              </div>
            </div>
            <div>
              <div className="text-5xl font-bold text-[#799B4B] mb-2">300%</div>
              <div className="text-white font-medium mb-1">
                Better ROI vs Traditional
              </div>
            </div>
            <div>
              <div className="text-5xl font-bold text-[#799B4B] mb-2">0</div>
              <div className="text-white font-medium mb-1">
                Additional Overhead
              </div>
            </div>
          </div>

          <div className="text-center">
            <CustomButton
              backgroundColor="#799B4B"
              hoverBackgroundColor="#799B4B80"
              className="mx-auto"
              iconPosition="right"
              width="auto"
              icon={
                <img
                  src="/images/arrow-icon.svg"
                  alt="Arrow"
                  className="filter brightness-0 invert"
                  style={{
                    width: "16px",
                    height: "16px",
                    minWidth: "16px",
                    minHeight: "16px",
                  }}
                />
              }
            >
              Calculate Your AI ROI
            </CustomButton>
          </div>
        </div>
      </section>

      {/* Enterprise AI Agent Library */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Enterprise
            </h2>
            <h2 className="text-4xl md:text-5xl font-bold text-[#799B4B] mb-6">
              AI Agent Library
            </h2>
            <p className="text-xl text-[#94A3B8] max-w-3xl mx-auto">
              Deploy specialized AI agents designed for healthcare workflows.
              Each agent is trained on healthcare-specific data and integrated
              with your existing systems.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button {...getTabStyles("All Agents")}>
              All Agents
              <span className={getBadgeStyles("All Agents")}>20</span>
            </button>
            <button {...getTabStyles("Clinical Operations")}>
              Clinical Operations
              <span className={getBadgeStyles("Clinical Operations")}>8</span>
            </button>
            <button {...getTabStyles("Administrative")}>
              Administrative
              <span className={getBadgeStyles("Administrative")}>6</span>
            </button>
            <button {...getTabStyles("Financial")}>
              Financial
              <span className={getBadgeStyles("Financial")}>4</span>
            </button>
            <button {...getTabStyles("Compliance")}>
              Compliance
              <span className={getBadgeStyles("Compliance")}>2</span>
            </button>
          </div>

          {/* Agent Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 px-4 sm:px-6 lg:px-8">
            {/* Prior Authorization AI */}
            <div
              className="bg-gray-900 rounded-xl overflow-hidden w-full max-w-[316px] h-[320px] sm:h-[350px] lg:h-[382px] mx-auto border border-gray-700/50"
              style={{ borderRadius: "12px" }}
            >
              {/* Top Image Section */}
              <div className="relative h-32">
                <img
                  src="/images/agents/Prior Authorization AI.svg"
                  alt=""
                  className="w-full h-full object-cover"
                />
                {/* Days badge - top right */}
                <div className="absolute top-3 right-3">
                  <span className="bg-black/70 text-white text-xs px-3 py-1 rounded-full font-medium">
                    3 days
                  </span>
                </div>
                {/* Bottom left icon */}
                <div className="absolute bottom-3 left-3 z-20">
                  <div className="w-16 h-16">
                    <img
                      src="/images/prior-authorization-ai.svg?v=1"
                      alt="Prior Authorization AI"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Bottom Content Section */}
              <div className="px-6 pt-6 pb-3">
                {/* Title and description */}
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-white mb-2">
                    Prior Authorization AI
                  </h3>
                  <p className="text-[#94A3B8] text-sm leading-relaxed">
                    Automates prior authorization requests with 95% approval
                    rate
                  </p>
                </div>

                {/* Metrics */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm text-[#94A3B8]">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>95% Approval Rate</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#94A3B8]">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>3-Day Average Processing</span>
                  </div>
                </div>

                {/* Deploy button */}
                <button className="text-lime-500 hover:text-lime-400 text-sm font-medium transition-colors flex items-center gap-2 justify-center w-full">
                  Deploy Agent
                  <img
                    src="/images/arrow-icon.svg"
                    alt="Arrow"
                    className="w-4 h-4"
                    style={{
                      filter:
                        "brightness(0) saturate(100%) invert(73%) sepia(56%) saturate(3217%) hue-rotate(63deg) brightness(101%) contrast(101%)",
                    }}
                  />
                </button>
              </div>
            </div>

            {/* Claims Processing Agent */}
            <div
              className="bg-gray-900 rounded-xl overflow-hidden w-full max-w-[316px] h-[320px] sm:h-[350px] lg:h-[382px] mx-auto border border-gray-700/50"
              style={{ borderRadius: "12px" }}
            >
              {/* Top Image Section */}
              <div className="relative h-32">
                <img
                  src="/images/agents/Claims Processing Agent.svg"
                  alt=""
                  className="w-full h-full object-cover"
                />
                {/* Days badge - top right */}
                <div className="absolute top-3 right-3">
                  <span className="bg-black/70 text-white text-xs px-3 py-1 rounded-full font-medium">
                    2 days
                  </span>
                </div>
                {/* Bottom left icon */}
                <div className="absolute bottom-3 left-3 z-20">
                  <div className="w-16 h-16">
                    <img
                      src="/images/claims-processing-agent.svg?v=1"
                      alt="Claims Processing Agent"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Bottom Content Section */}
              <div className="px-6 pt-6 pb-3">
                {/* Title and description */}
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-white mb-2">
                    Claims Processing Agent
                  </h3>
                  <p className="text-[#94A3B8] text-sm leading-relaxed">
                    AI-powered claims review and submission optimization
                  </p>
                </div>

                {/* Metrics */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm text-[#94A3B8]">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>99.2% Clean Claims</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#94A3B8]">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>40% Faster Processing</span>
                  </div>
                </div>

                {/* Deploy button */}
                <button className="text-lime-500 hover:text-lime-400 text-sm font-medium transition-colors flex items-center gap-2 justify-center w-full">
                  Deploy Agent
                  <img
                    src="/images/arrow-icon.svg"
                    alt="Arrow"
                    className="w-4 h-4"
                    style={{
                      filter:
                        "brightness(0) saturate(100%) invert(73%) sepia(56%) saturate(3217%) hue-rotate(63deg) brightness(101%) contrast(101%)",
                    }}
                  />
                </button>
              </div>
            </div>

            {/* PDPM Optimizer */}
            <div
              className="bg-gray-900 rounded-xl overflow-hidden w-full max-w-[316px] h-[320px] sm:h-[350px] lg:h-[382px] mx-auto border border-gray-700/50"
              style={{ borderRadius: "12px" }}
            >
              {/* Top Image Section */}
              <div className="relative h-32">
                <img
                  src="/images/agents/PDPM Optimizer.svg"
                  alt=""
                  className="w-full h-full object-cover"
                />
                {/* Days badge - top right */}
                <div className="absolute top-3 right-3">
                  <span className="bg-black/70 text-white text-xs px-3 py-1 rounded-full font-medium">
                    5 days
                  </span>
                </div>
                {/* Bottom left icon */}
                <div className="absolute bottom-3 left-3 z-20">
                  <div className="w-16 h-16">
                    <img
                      src="/images/pdpm-optimizer.svg?v=1"
                      alt="PDPM Optimizer"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Bottom Content Section */}
              <div className="px-6 pt-6 pb-3">
                {/* Title and description */}
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-white mb-2">
                    PDPM Optimizer
                  </h3>
                  <p className="text-[#94A3B8] text-sm leading-relaxed">
                    Maximizes PDPM reimbursement through intelligent case-mix
                    optimization
                  </p>
                </div>

                {/* Metrics */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm text-[#94A3B8]">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>35% Revenue Increase</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#94A3B8]">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>PDPM Optimization</span>
                  </div>
                </div>

                {/* Deploy button */}
                <button className="text-lime-500 hover:text-lime-400 text-sm font-medium transition-colors flex items-center gap-2 justify-center w-full">
                  Deploy Agent
                  <img
                    src="/images/arrow-icon.svg"
                    alt="Arrow"
                    className="w-4 h-4"
                    style={{
                      filter:
                        "brightness(0) saturate(100%) invert(73%) sepia(56%) saturate(3217%) hue-rotate(63deg) brightness(101%) contrast(101%)",
                    }}
                  />
                </button>
              </div>
            </div>

            {/* Compliance Monitor */}
            <div
              className="bg-gray-900 rounded-xl overflow-hidden w-full max-w-[316px] h-[320px] sm:h-[350px] lg:h-[382px] mx-auto border border-gray-700/50"
              style={{ borderRadius: "12px" }}
            >
              {/* Top Image Section */}
              <div className="relative h-32">
                <img
                  src="/images/agents/Compliance Monitor.svg"
                  alt=""
                  className="w-full h-full object-cover"
                />
                {/* Days badge - top right */}
                <div className="absolute top-3 right-3">
                  <span className="bg-black/70 text-white text-xs px-3 py-1 rounded-full font-medium">
                    4 days
                  </span>
                </div>
                {/* Bottom left icon */}
                <div className="absolute bottom-3 left-3 z-20">
                  <div className="w-16 h-16">
                    <img
                      src="/images/compliance-monitor.svg?v=1"
                      alt="Compliance Monitor"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Bottom Content Section */}
              <div className="px-6 pt-6 pb-3">
                {/* Title and description */}
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-white mb-2">
                    Compliance Monitor
                  </h3>
                  <p className="text-[#94A3B8] text-sm leading-relaxed">
                    Real-time healthcare compliance monitoring and risk
                    assessment
                  </p>
                </div>

                {/* Metrics */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm text-[#94A3B8]">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>99.8% Compliance Score</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#94A3B8]">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Real-time Alerts</span>
                  </div>
                </div>

                {/* Deploy button */}
                <button className="text-lime-500 hover:text-lime-400 text-sm font-medium transition-colors flex items-center gap-2 justify-center w-full">
                  Deploy Agent
                  <img
                    src="/images/arrow-icon.svg"
                    alt="Arrow"
                    className="w-4 h-4"
                    style={{
                      filter:
                        "brightness(0) saturate(100%) invert(73%) sepia(56%) saturate(3217%) hue-rotate(63deg) brightness(101%) contrast(101%)",
                    }}
                  />
                </button>
              </div>
            </div>

            {/* Patient Intake Optimizer */}
            <div
              className="bg-gray-900 rounded-xl overflow-hidden w-full max-w-[316px] h-[320px] sm:h-[350px] lg:h-[382px] mx-auto border border-gray-700/50"
              style={{ borderRadius: "12px" }}
            >
              {/* Top Image Section */}
              <div className="relative h-32">
                <img
                  src="/images/agents/Patient Intake Optimizer.svg"
                  alt=""
                  className="w-full h-full object-cover"
                />
                {/* Days badge - top right */}
                <div className="absolute top-3 right-3">
                  <span className="bg-black/70 text-white text-xs px-3 py-1 rounded-full font-medium">
                    1 day
                  </span>
                </div>
                {/* Bottom left icon */}
                <div className="absolute bottom-3 left-3 z-20">
                  <div className="w-16 h-16">
                    <img
                      src="/images/patient-intake-optimizer.svg?v=1"
                      alt="Patient Intake Optimizer"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Bottom Content Section */}
              <div className="px-6 pt-6 pb-3">
                {/* Title and description */}
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-white mb-2">
                    Patient Intake Optimizer
                  </h3>
                  <p className="text-[#94A3B8] text-sm leading-relaxed">
                    Streamlines patient registration and intake processes
                  </p>
                </div>

                {/* Metrics */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm text-[#94A3B8]">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>60% Time Reduction</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#94A3B8]">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Auto Form Completion</span>
                  </div>
                </div>

                {/* Deploy button */}
                <button className="text-lime-500 hover:text-lime-400 text-sm font-medium transition-colors flex items-center gap-2 justify-center w-full">
                  Deploy Agent
                  <img
                    src="/images/arrow-icon.svg"
                    alt="Arrow"
                    className="w-4 h-4"
                    style={{
                      filter:
                        "brightness(0) saturate(100%) invert(73%) sepia(56%) saturate(3217%) hue-rotate(63deg) brightness(101%) contrast(101%)",
                    }}
                  />
                </button>
              </div>
            </div>

            {/* Surgery Scheduler AI */}
            <div
              className="bg-gray-900 rounded-xl overflow-hidden w-full max-w-[316px] h-[320px] sm:h-[350px] lg:h-[382px] mx-auto border border-gray-700/50"
              style={{ borderRadius: "12px" }}
            >
              {/* Top Image Section */}
              <div className="relative h-32">
                <img
                  src="/images/agents/Surgery Scheduler AI.svg"
                  alt=""
                  className="w-full h-full object-cover"
                />
                {/* Days badge - top right */}
                <div className="absolute top-3 right-3">
                  <span className="bg-black/70 text-white text-xs px-3 py-1 rounded-full font-medium">
                    7 days
                  </span>
                </div>
                {/* Bottom left icon */}
                <div className="absolute bottom-3 left-3 z-20">
                  <div className="w-16 h-16">
                    <img
                      src="/images/surgery-scheduler.svg?v=1"
                      alt="Surgery Scheduler AI"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Bottom Content Section */}
              <div className="px-6 pt-6 pb-3">
                {/* Title and description */}
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-white mb-2">
                    Surgery Scheduler AI
                  </h3>
                  <p className="text-[#94A3B8] text-sm leading-relaxed">
                    Optimizes surgical scheduling and resource allocation
                  </p>
                </div>

                {/* Metrics */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm text-[#94A3B8]">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>30% Efficiency Gain</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#94A3B8]">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Resource Optimization</span>
                  </div>
                </div>

                {/* Deploy button */}
                <button className="text-lime-500 hover:text-lime-400 text-sm font-medium transition-colors flex items-center gap-2 justify-center w-full">
                  Deploy Agent
                  <img
                    src="/images/arrow-icon.svg"
                    alt="Arrow"
                    className="w-4 h-4"
                    style={{
                      filter:
                        "brightness(0) saturate(100%) invert(73%) sepia(56%) saturate(3217%) hue-rotate(63deg) brightness(101%) contrast(101%)",
                    }}
                  />
                </button>
              </div>
            </div>

            {/* Quality Reporter */}
            <div
              className="bg-gray-900 rounded-xl overflow-hidden w-full max-w-[316px] h-[320px] sm:h-[350px] lg:h-[382px] mx-auto border border-gray-700/50"
              style={{ borderRadius: "12px" }}
            >
              {/* Top Image Section */}
              <div className="relative h-32">
                <img
                  src="/images/agents/Quality Reporter.svg"
                  alt=""
                  className="w-full h-full object-cover"
                />
                {/* Days badge - top right */}
                <div className="absolute top-3 right-3">
                  <span className="bg-black/70 text-white text-xs px-3 py-1 rounded-full font-medium">
                    6 days
                  </span>
                </div>
                {/* Bottom left icon */}
                <div className="absolute bottom-3 left-3 z-20">
                  <div className="w-16 h-16">
                    <img
                      src="/images/ai-reporter.svg?v=1"
                      alt="Quality Reporter"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Bottom Content Section */}
              <div className="px-6 pt-6 pb-3">
                {/* Title and description */}
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-white mb-2">
                    Quality Reporter
                  </h3>
                  <p className="text-[#94A3B8] text-sm leading-relaxed">
                    Automated quality reporting and performance analytics
                  </p>
                </div>

                {/* Metrics */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm text-[#94A3B8]">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>95% Accuracy Rate</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#94A3B8]">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Real-time Insights</span>
                  </div>
                </div>

                {/* Deploy button */}
                <button className="text-lime-500 hover:text-lime-400 text-sm font-medium transition-colors flex items-center gap-2 justify-center w-full">
                  Deploy Agent
                  <img
                    src="/images/arrow-icon.svg"
                    alt="Arrow"
                    className="w-4 h-4"
                    style={{
                      filter:
                        "brightness(0) saturate(100%) invert(73%) sepia(56%) saturate(3217%) hue-rotate(63deg) brightness(101%) contrast(101%)",
                    }}
                  />
                </button>
              </div>
            </div>

            {/* Medication Tracker */}
            <div
              className="bg-gray-900 rounded-xl overflow-hidden w-full max-w-[316px] h-[320px] sm:h-[350px] lg:h-[382px] mx-auto border border-gray-700/50"
              style={{ borderRadius: "12px" }}
            >
              {/* Top Image Section */}
              <div className="relative h-32">
                <img
                  src="/images/agents/Medication Tracker.svg"
                  alt=""
                  className="w-full h-full object-cover"
                />
                {/* Days badge - top right */}
                <div className="absolute top-3 right-3">
                  <span className="bg-black/70 text-white text-xs px-3 py-1 rounded-full font-medium">
                    3 days
                  </span>
                </div>
                {/* Bottom left icon */}
                <div className="absolute bottom-3 left-3 z-20">
                  <div className="w-16 h-16">
                    <img
                      src="/images/medication-tracker.svg?v=1"
                      alt="Medication Tracker"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Bottom Content Section */}
              <div className="px-6 pt-6 pb-3">
                {/* Title and description */}
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-white mb-2">
                    Medication Tracker
                  </h3>
                  <p className="text-[#94A3B8] text-sm leading-relaxed">
                    AI-powered medication management and adherence monitoring
                    system
                  </p>
                </div>

                {/* Metrics */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm text-[#94A3B8]">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>85% Adherence Improvement</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#94A3B8]">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Drug Interaction Detection</span>
                  </div>
                </div>

                {/* Deploy button */}
                <button className="text-lime-500 hover:text-lime-400 text-sm font-medium transition-colors flex items-center gap-2 justify-center w-full">
                  Deploy Agent
                  <img
                    src="/images/arrow-icon.svg"
                    alt="Arrow"
                    className="w-4 h-4"
                    style={{
                      filter:
                        "brightness(0) saturate(100%) invert(73%) sepia(56%) saturate(3217%) hue-rotate(63deg) brightness(101%) contrast(101%)",
                    }}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-12">
            <div>
              <div className="text-3xl font-bold text-[#799B4B] mb-2">20+</div>
              <div className="text-[#94A3B8] text-sm">AI Agents</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#799B4B] mb-2">50+</div>
              <div className="text-[#94A3B8] text-sm">EHR Integrations</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#799B4B] mb-2">
                99.9%
              </div>
              <div className="text-[#94A3B8] text-sm">Uptime SLA</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#799B4B] mb-2">24/7</div>
              <div className="text-[#94A3B8] text-sm">Support</div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <CustomButton
              backgroundColor="#799B4B"
              hoverBackgroundColor="#6B8A42"
              className="px-8 py-4 rounded-xl text-lg font-semibold"
              iconPosition="right"
              width="auto"
              icon={
                <img
                  src="/images/arrow-icon.svg"
                  alt="Arrow"
                  className="filter brightness-0 invert"
                  style={{
                    width: "16px",
                    height: "16px",
                    minWidth: "16px",
                    minHeight: "16px",
                  }}
                />
              }
            >
              View Full AI Agent Library
            </CustomButton>
          </div>
        </div>
      </section>

      {/* Proven Results Section */}
      <section className="py-20 px-6 bg-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-white">Proven Results</span>
              <br />
              <span className="text-[#A2C043]">Across Healthcare</span>
            </h2>
            <p className="text-[#94A3B8] max-w-2xl mx-auto">
              Real outcomes from healthcare organizations that transformed their
              operations with AI workforce deployment.
            </p>
          </div>

          {/* Interactive ROI Calculator */}
          <div
            className="mx-auto p-8 mb-12"
            style={{
              backgroundColor: "rgba(162, 192, 67, 0.05)",
              width: "1400px",
              height: "380px",
              borderRadius: "12px",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              maxWidth: "100%",
              overflow: "hidden",
            }}
          >
            {/* Header */}
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="flex items-center justify-center">
                  <img
                    src="/images/interactive-roi-calculator.svg"
                    alt="Calculator"
                    className="w-8 h-8"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Interactive ROI Calculator
                </h3>
              </div>
              <p className="text-[#94A3B8]">
                Calculate your potential returns with AI workforce deployment
              </p>
            </div>

            {/* Calculator Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Input Sliders */}
              <div className="space-y-6">
                <div>
                  <label className="block text-white font-medium mb-3">
                    Facility Size (Providers/Beds): 100
                  </label>
                  <div className="relative">
                    <div className="w-full h-2 bg-gray-700 rounded-full">
                      <div
                        className="h-2 rounded-full"
                        style={{ width: "30%", backgroundColor: "#A2C043" }}
                      ></div>
                    </div>
                    <div
                      className="absolute top-0 left-0 w-6 h-6 bg-gray-300 border-2 border-gray-600 rounded-full transform -translate-y-2"
                      style={{ left: "30%" }}
                    ></div>
                  </div>
                </div>

                <div>
                  <label className="block text-white font-medium mb-3">
                    Monthly Admin Costs: $50,000
                  </label>
                  <div className="relative">
                    <div className="w-full h-2 bg-gray-700 rounded-full">
                      <div
                        className="h-2 rounded-full"
                        style={{ width: "50%", backgroundColor: "#A2C043" }}
                      ></div>
                    </div>
                    <div
                      className="absolute top-0 left-0 w-6 h-6 bg-gray-300 border-2 border-gray-600 rounded-full transform -translate-y-2"
                      style={{ left: "50%" }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Output Boxes */}
              <div className="space-y-6">
                <div className="flex gap-6 justify-center">
                  <div
                    className="text-center"
                    style={{
                      width: "305.5px",
                      height: "78px",
                      borderRadius: "12px",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div
                      className="text-2xl font-bold mb-1"
                      style={{ color: "#A2C043" }}
                    >
                      $17,500
                    </div>
                    <div className="text-sm text-[#94A3B8]">
                      Monthly Savings
                    </div>
                  </div>
                  <div
                    className="text-center"
                    style={{
                      width: "305.5px",
                      height: "78px",
                      borderRadius: "12px",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div
                      className="text-2xl font-bold mb-1"
                      style={{ color: "#0284C5" }}
                    >
                      $12,500
                    </div>
                    <div className="text-sm text-[#94A3B8]">
                      Revenue Increase
                    </div>
                  </div>
                </div>
                <div
                  className="text-center"
                  style={{
                    backgroundColor: "rgba(162, 192, 67, 0.05)",
                    width: "550px",
                    height: "110px",
                    borderRadius: "12px",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "0 auto",
                  }}
                >
                  <div
                    className="text-4xl font-bold mb-2"
                    style={{ color: "#A2C043" }}
                  >
                    6X ROI
                  </div>
                  <div className="text-sm text-[#94A3B8]">
                    Annual return on investment
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Results Grid */}
          <div
            className="flex flex-nowrap justify-center gap-4 mb-12 overflow-x-auto"
            style={{ minWidth: "100%", maxWidth: "1400px", margin: "0 auto" }}
          >
            <div
              className="text-center"
              style={{
                backgroundColor: "#171A1C",
                width: "316px",
                height: "278px",
                border: "1px solid #2D3339",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
                filter: "blur(0px) drop-shadow(0 2px 8px rgba(0, 0, 0, 0.05))",
                borderRadius: "12px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "16px",
              }}
            >
              <div className="flex justify-center mb-4">
                <img
                  src="/images/revenue-growth.svg"
                  alt="Revenue Growth"
                  className="w-8 h-8"
                />
              </div>
              <div className="text-3xl font-bold text-green-400 mb-2">+45%</div>
              <div className="text-white font-medium mb-2">Revenue Growth</div>
              <div className="text-sm text-[#94A3B8]">
                Average revenue increase across all clients
              </div>
            </div>

            <div
              className="text-center"
              style={{
                backgroundColor: "#171A1C",
                width: "316px",
                height: "278px",
                border: "1px solid #2D3339",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
                filter: "blur(0px) drop-shadow(0 2px 8px rgba(0, 0, 0, 0.05))",
                borderRadius: "12px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "16px",
              }}
            >
              <div className="flex justify-center mb-4">
                <img
                  src="/images/time-saving.svg"
                  alt="Time Saving"
                  className="w-8 h-8"
                />
              </div>
              <div className="text-3xl font-bold text-blue-400 mb-2">75%</div>
              <div className="text-white font-medium mb-2">Time Savings</div>
              <div className="text-sm text-[#94A3B8]">
                Reduction in administrative processing time
              </div>
            </div>

            <div
              className="text-center"
              style={{
                backgroundColor: "#171A1C",
                width: "316px",
                height: "278px",
                border: "1px solid #2D3339",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
                filter: "blur(0px) drop-shadow(0 2px 8px rgba(0, 0, 0, 0.05))",
                borderRadius: "12px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "16px",
              }}
            >
              <div className="flex justify-center mb-4">
                <img
                  src="/images/staff-productivity.svg"
                  alt="Staff Productivity"
                  className="w-8 h-8"
                />
              </div>
              <div className="text-3xl font-bold text-purple-400 mb-2">3X</div>
              <div className="text-white font-medium mb-2">
                Staff Productivity
              </div>
              <div className="text-sm text-[#94A3B8]">
                Improvement in staff productivity metrics
              </div>
            </div>

            <div
              className="text-center"
              style={{
                backgroundColor: "#171A1C",
                width: "316px",
                height: "278px",
                border: "1px solid #2D3339",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
                filter: "blur(0px) drop-shadow(0 2px 8px rgba(0, 0, 0, 0.05))",
                borderRadius: "12px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "16px",
              }}
            >
              <div className="flex justify-center mb-4">
                <img
                  src="/images/cost-reduction.svg"
                  alt="Cost Reduction"
                  className="w-8 h-8"
                />
              </div>
              <div className="text-3xl font-bold text-green-400 mb-2">65%</div>
              <div className="text-white font-medium mb-2">Cost Reduction</div>
              <div className="text-sm text-[#94A3B8]">
                Average operational cost savings
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Enterprise Transformation Stories */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-white">Real Enterprise </span>
              <span style={{ color: "#78933F" }}>Transformation Stories</span>
            </h2>
          </div>

          <div
            className="flex flex-nowrap justify-center gap-3 mb-12 overflow-x-auto"
            style={{ minWidth: "100%", maxWidth: "1300px", margin: "0 auto" }}
          >
            {/* Multi-Location Practice Group */}
            <div
              className="relative mx-auto"
              style={{
                backgroundColor: "#171A1C",
                width: "400px",
                height: "572px",
                borderRadius: "12px",
                border: "1px solid #2D3339",
                padding: "24px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Integration Badge */}
              <div className="absolute top-4 right-4">
                <div className="bg-gray-800 text-white text-xs px-3 py-1 rounded-full text-center">
                  <div>Epic</div>
                  <div>Integration</div>
                </div>
              </div>

              <div className="mb-4">
                <h3 className="font-semibold text-white text-lg mb-1">
                  Multi-Location Practice
                  <br />
                  Group
                </h3>
                <p className="text-sm text-[#94A3B8]">Texas • 150+ Providers</p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-3 mb-3">
                  <div
                    className="text-4xl font-bold"
                    style={{ color: "#95B445" }}
                  >
                    24X
                  </div>
                  <div className="text-sm text-[#94A3B8]">ROI</div>
                </div>
                <div className="flex items-baseline gap-3">
                  <div className="text-xl font-bold text-white">12 months</div>
                  <div className="text-sm text-[#94A3B8]">Implementation</div>
                </div>
              </div>

              <div className="space-y-4">
                {/* Challenge */}
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                    <img
                      src="/images/challenge-ai.svg"
                      alt="Challenge"
                      className="w-5 h-5"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white mb-1">
                      Challenge
                    </p>
                    <p className="text-sm text-[#94A3B8]">
                      Prior authorization bottlenecks causing $2M annual revenue
                      loss.
                    </p>
                  </div>
                </div>

                {/* AI Solution */}
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                    <img
                      src="/images/ai-solutions.svg"
                      alt="AI Solution"
                      className="w-5 h-5"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white mb-1">
                      AI Solution
                    </p>
                    <p className="text-sm text-[#94A3B8]">
                      Deployed Prior Auth AI + Claims Processing agents.
                    </p>
                  </div>
                </div>

                {/* Results */}
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                    <img
                      src="/images/results-ai.svg"
                      alt="Results"
                      className="w-5 h-5"
                    />
                  </div>
                  <div>
                    <p className="text-xs md:text-sm font-bold text-white mb-1">
                      Results
                    </p>
                    <ul className="text-xs md:text-sm text-[#94A3B8] space-y-1">
                      <li className="flex items-center gap-2">
                        <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-[#4A6F3E] rounded-full flex-shrink-0"></div>
                        <span className="leading-relaxed">
                          95% prior auth approval rate (up from 65%)
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-[#4A6F3E] rounded-full flex-shrink-0"></div>
                        <span className="leading-relaxed">
                          $2.4M additional revenue in 12 months
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-[#4A6F3E] rounded-full flex-shrink-0"></div>
                        <span className="leading-relaxed">
                          80% reduction in administrative overhead
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-[#4A6F3E] rounded-full flex-shrink-0"></div>
                        <span className="leading-relaxed">
                          3-day average processing (down from 14 days)
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Regional Hospital Network */}
            <div
              className="relative mx-auto"
              style={{
                backgroundColor: "#171A1C",
                width: "400px",
                height: "572px",
                borderRadius: "12px",
                border: "1px solid #2D3339",
                padding: "24px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Integration Badge */}
              <div className="absolute top-4 right-4">
                <div className="bg-gray-800 text-white text-xs px-3 py-1 rounded-full text-center">
                  <div>Cerner</div>
                  <div>Integration</div>
                </div>
              </div>

              <div className="mb-4">
                <h3 className="font-semibold text-white text-lg mb-1">
                  Regional Hospital
                  <br />
                  Network
                </h3>
                <p className="text-sm text-[#94A3B8]">California • 500+ Beds</p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-3 mb-3">
                  <div
                    className="text-4xl font-bold"
                    style={{ color: "#95B445" }}
                  >
                    18X
                  </div>
                  <div className="text-sm text-[#94A3B8]">ROI</div>
                </div>
                <div className="flex items-baseline gap-3">
                  <div className="text-xl font-bold text-white">8 months</div>
                  <div className="text-sm text-[#94A3B8]">Implementation</div>
                </div>
              </div>

              <div className="space-y-4">
                {/* Challenge */}
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                    <img
                      src="/images/challenge-ai.svg"
                      alt="Challenge"
                      className="w-5 h-5"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white mb-1">
                      Challenge
                    </p>
                    <p className="text-sm text-[#94A3B8]">
                      PDPM compliance and revenue optimization across 8
                      facilities.
                    </p>
                  </div>
                </div>

                {/* AI Solution */}
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                    <img
                      src="/images/ai-solutions.svg"
                      alt="AI Solution"
                      className="w-5 h-5"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white mb-1">
                      AI Solution
                    </p>
                    <p className="text-sm text-[#94A3B8]">
                      PDPM Optimizer + Compliance Monitor + Quality Reporter.
                    </p>
                  </div>
                </div>

                {/* Results */}
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                    <img
                      src="/images/results-ai.svg"
                      alt="Results"
                      className="w-5 h-5"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white mb-1">Results</p>
                    <ul className="text-sm text-[#94A3B8] space-y-1">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#4A6F3E] rounded-full"></div>
                        35% PDPM revenue increase across network
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#4A6F3E] rounded-full"></div>
                        99.8% compliance score maintained
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#4A6F3E] rounded-full"></div>
                        60% reduction in audit findings
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#4A6F3E] rounded-full"></div>
                        $4.2M additional reimbursement annually
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Ambulatory Surgery Centers */}
            <div
              className="relative mx-auto"
              style={{
                backgroundColor: "#171A1C",
                width: "400px",
                height: "572px",
                borderRadius: "12px",
                border: "1px solid #2D3339",
                padding: "24px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Integration Badge */}
              <div className="absolute top-4 right-4">
                <div className="bg-gray-800 text-white text-xs px-3 py-1 rounded-full text-center">
                  <div>MEDITECH</div>
                  <div>Integration</div>
                </div>
              </div>

              <div className="mb-4">
                <h3 className="font-semibold text-white text-lg mb-1">
                  Ambulatory Surgery
                  <br />
                  Centers
                </h3>
                <p className="text-sm text-[#94A3B8]">Florida • 12 Centers</p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-3 mb-3">
                  <div
                    className="text-4xl font-bold"
                    style={{ color: "#95B445" }}
                  >
                    16X
                  </div>
                  <div className="text-sm text-[#94A3B8]">ROI</div>
                </div>
                <div className="flex items-baseline gap-3">
                  <div className="text-xl font-bold text-white">6 months</div>
                  <div className="text-sm text-[#94A3B8]">Implementation</div>
                </div>
              </div>

              <div className="space-y-4">
                {/* Challenge */}
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                    <img
                      src="/images/challenge-ai.svg"
                      alt="Challenge"
                      className="w-5 h-5"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white mb-1">
                      Challenge
                    </p>
                    <p className="text-sm text-[#94A3B8]">
                      OR utilization at 70%, supply chain inefficiencies.
                    </p>
                  </div>
                </div>

                {/* AI Solution */}
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                    <img
                      src="/images/ai-solutions.svg"
                      alt="AI Solution"
                      className="w-5 h-5"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white mb-1">
                      AI Solution
                    </p>
                    <p className="text-sm text-[#94A3B8]">
                      Surgery Scheduler AI + Supply Chain optimizer.
                    </p>
                  </div>
                </div>

                {/* Results */}
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                    <img
                      src="/images/results-ai.svg"
                      alt="Results"
                      className="w-5 h-5"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white mb-1">Results</p>
                    <ul className="text-sm text-[#94A3B8] space-y-1">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#4A6F3E] rounded-full"></div>
                        95% OR utilization (up from 70%)
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#4A6F3E] rounded-full"></div>
                        30% increase in daily procedures
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#4A6F3E] rounded-full"></div>
                        25% supply cost reduction
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#4A6F3E] rounded-full"></div>
                        $1.8M additional revenue annually
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-20">
            <CustomButton
              backgroundColor="#4A6F3E"
              hoverBackgroundColor="#3d5a33"
              iconPosition="right"
              width="auto"
              icon={
                <img
                  src="/images/arrow-icon.svg"
                  alt="Arrow"
                  className="filter brightness-0 invert"
                  style={{
                    width: "16px",
                    height: "16px",
                    minWidth: "16px",
                    minHeight: "16px",
                  }}
                />
              }
            >
              Download Full Case Studies
            </CustomButton>
            <CustomButton
              backgroundColor="#121417"
              hoverBackgroundColor="#1F2937"
              width="auto"
            >
              Schedule ROI Review
            </CustomButton>
          </div>
        </div>
      </section>

      {/* Implementation Models & Pricing */}
      <section className="py-20 px-6 bg-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-white">Implementation</span>
              <br />
              <span className="text-[#799B4B]">Models & Pricing</span>
            </h2>
            <p className="text-[#94A3B8] max-w-2xl mx-auto">
              Flexible engagement models designed to align with your
              organization's goals, risk tolerance, and budget requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Revenue Partnership */}
            <div
              className="border border-gray-800 p-4 md:p-8 w-full max-w-[424px] mx-auto transition-all duration-300 hover:bg-[#85A64719]"
              style={{
                minHeight: "400px",
                height: "auto",
                borderRadius: "12px",
                backgroundColor: "#0C0E12B2",
              }}
            >
              <div className="flex justify-center mb-6">
                <div className="w-12 h-12 bg-[#4A6F3E] rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-white mb-2 text-center">
                Revenue Partnership
              </h3>
              <p className="text-[#94A3B8] text-sm mb-6 text-center">
                Performance-Based Model
              </p>

              <div className="text-center mb-6">
                <div
                  className="text-2xl md:text-3xl font-bold mb-2"
                  style={{ color: "#95B445" }}
                >
                  Revenue Share
                </div>
                <p className="text-xs md:text-sm text-[#94A3B8]">
                  We share in your success. Pay based on measurable outcomes and
                  ROI generated.
                </p>
              </div>

              <div className="mb-6">
                <p className="text-xs md:text-sm font-bold text-white mb-3">
                  What's Included
                </p>
                <ul className="text-xs md:text-sm text-[#94A3B8] space-y-2">
                  <li className="flex items-center gap-2">
                    <svg
                      className="w-3 h-3 md:w-4 md:h-4 text-[#4A6F3E] flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="leading-relaxed">
                      Zero upfront investment
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="w-3 h-3 md:w-4 md:h-4 text-[#4A6F3E] flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="leading-relaxed">
                      Guaranteed ROI or we don't get paid
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="w-3 h-3 md:w-4 md:h-4 text-[#4A6F3E] flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="leading-relaxed">
                      Shared risk and reward model
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="w-3 h-3 md:w-4 md:h-4 text-[#4A6F3E] flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="leading-relaxed">
                      Performance-based compensation
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="w-3 h-3 md:w-4 md:h-4 text-[#4A6F3E] flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="leading-relaxed">
                      Continuous optimization included
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="w-3 h-3 md:w-4 md:h-4 text-[#4A6F3E] flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="leading-relaxed">
                      Full implementation support
                    </span>
                  </li>
                </ul>
              </div>

              <div className="mb-6">
                <p className="text-xs md:text-sm font-bold text-white mb-3">
                  Key Benefits
                </p>
                <ul className="text-xs md:text-sm text-[#94A3B8] space-y-2">
                  <li className="flex items-center gap-2">
                    <svg
                      className="w-3 h-3 md:w-4 md:h-4 text-[#4A6F3E] flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                    <span className="leading-relaxed">
                      Aligned incentives for success
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="w-3 h-3 md:w-4 md:h-4 text-[#4A6F3E] flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                    <span className="leading-relaxed">
                      No financial risk to your organization
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="w-3 h-3 md:w-4 md:h-4 text-[#4A6F3E] flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                    <span className="leading-relaxed">
                      Proven results before payment
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="w-3 h-3 md:w-4 md:h-4 text-[#4A6F3E] flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                    <span className="leading-relaxed">
                      Ongoing partnership approach
                    </span>
                  </li>
                </ul>
              </div>

              <div className="mb-6">
                <p className="text-xs md:text-sm font-bold text-white mb-2">
                  Best For
                </p>
                <p className="text-xs md:text-sm text-[#94A3B8]">
                  Large healthcare organizations seeking guaranteed ROI
                </p>
              </div>

              <CustomButton
                backgroundColor="#4A6F3E"
                hoverBackgroundColor="#3d5a33"
                iconPosition="right"
                className="w-full"
                icon={
                  <img
                    src="/images/arrow-icon.svg"
                    alt="Arrow"
                    className="filter brightness-0 invert"
                    style={{
                      width: "16px",
                      height: "16px",
                      minWidth: "16px",
                      minHeight: "16px",
                    }}
                  />
                }
              >
                Get Started
              </CustomButton>
            </div>

            {/* Subscription Model */}
            <div
              className="border border-gray-800 p-8 w-full max-w-[424px] mx-auto transition-all duration-300 hover:bg-[#85A64719]"
              style={{
                height: "903px",
                borderRadius: "12px",
                backgroundColor: "#0C0E12B2",
              }}
            >
              <div className="flex justify-center mb-6">
                <img
                  src="/images/subscription-model.svg"
                  alt="Subscription Model"
                  className="w-12 h-12"
                />
              </div>

              <h3 className="text-xl font-semibold text-white mb-2 text-center">
                Subscription Model
              </h3>
              <p className="text-[#94A3B8] text-sm mb-6 text-center">
                Predictable Monthly Investment
              </p>

              <div className="text-center mb-6">
                <div
                  className="text-3xl font-bold mb-2"
                  style={{ color: "#95B445" }}
                >
                  Monthly SaaS
                </div>
                <p className="text-sm text-[#94A3B8]">
                  Fixed monthly pricing with full access to AI workforce
                  platform and support.
                </p>
              </div>

              <div className="mb-6">
                <p className="text-sm font-bold text-white mb-3">
                  What's Included
                </p>
                <ul className="text-sm text-[#94A3B8] space-y-2">
                  <li className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-[#4A6F3E]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Predictable monthly costs
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-[#4A6F3E]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Full platform access
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-[#4A6F3E]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    All AI agents included
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-[#4A6F3E]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    24/7 support included
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-[#4A6F3E]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Regular updates and new agents
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-[#4A6F3E]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    EHR integration support
                  </li>
                </ul>
              </div>

              <div className="mb-6">
                <p className="text-sm font-bold text-white mb-3">
                  Key Benefits
                </p>
                <ul className="text-sm text-[#94A3B8] space-y-2">
                  <li className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-[#4A6F3E]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                    Budget-friendly and predictable
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-[#4A6F3E]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                    Quick implementation process
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-[#4A6F3E]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                    Immediate access to all features
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-[#4A6F3E]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                    Transparent pricing model
                  </li>
                </ul>
              </div>

              <div className="mb-6">
                <p className="text-sm font-bold text-white mb-2">Best For</p>
                <p className="text-sm text-[#94A3B8]">
                  Mid-size practices wanting predictable costs
                </p>
              </div>

              <CustomButton
                backgroundColor="#4A6F3E"
                hoverBackgroundColor="#3d5a33"
                iconPosition="right"
                className="w-full"
                icon={
                  <img
                    src="/images/arrow-icon.svg"
                    alt="Arrow"
                    className="filter brightness-0 invert"
                    style={{
                      width: "16px",
                      height: "16px",
                      minWidth: "16px",
                      minHeight: "16px",
                    }}
                  />
                }
              >
                Learn More
              </CustomButton>
            </div>

            {/* Hybrid Model */}
            <div
              className="border border-gray-800 p-8 w-full max-w-[424px] mx-auto transition-all duration-300 hover:bg-[#85A64719]"
              style={{
                height: "903px",
                borderRadius: "12px",
                backgroundColor: "#0C0E12B2",
              }}
            >
              <div className="flex justify-center mb-6">
                <div className="w-12 h-12 bg-[#4A6F3E] rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-white mb-2 text-center">
                Hybrid Model
              </h3>
              <p className="text-[#94A3B8] text-sm mb-6 text-center">
                Custom Enterprise Solution
              </p>

              <div className="text-center mb-6">
                <div
                  className="text-3xl font-bold mb-2"
                  style={{ color: "#95B445" }}
                >
                  Base + Performance
                </div>
                <p className="text-sm text-[#94A3B8]">
                  Combines subscription base with performance bonuses for
                  maximum flexibility.
                </p>
              </div>

              <div className="mb-6">
                <p className="text-sm font-bold text-white mb-3">
                  What's Included
                </p>
                <ul className="text-sm text-[#94A3B8] space-y-2">
                  <li className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-[#4A6F3E]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Lower base subscription rate
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-[#4A6F3E]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Performance bonus structure
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-[#4A6F3E]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Custom deployment timeline
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-[#4A6F3E]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Dedicated account management
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-[#4A6F3E]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Custom AI agent development
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-[#4A6F3E]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Enterprise SLA guarantees
                  </li>
                </ul>
              </div>

              <div className="mb-6">
                <p className="text-sm font-bold text-white mb-3">
                  Key Benefits
                </p>
                <ul className="text-sm text-[#94A3B8] space-y-2">
                  <li className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-[#4A6F3E]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                    Balanced risk and reward
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-[#4A6F3E]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                    Customized to your needs
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-[#4A6F3E]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                    Enterprise-level support
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-[#4A6F3E]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                    Scalable pricing model
                  </li>
                </ul>
              </div>

              <div className="mb-6">
                <p className="text-sm font-bold text-white mb-2">Best For</p>
                <p className="text-sm text-[#94A3B8]">
                  Enterprise healthcare systems needing custom solutions
                </p>
              </div>

              <CustomButton
                backgroundColor="#4A6F3E"
                hoverBackgroundColor="#3d5a33"
                iconPosition="right"
                className="w-full"
                icon={
                  <img
                    src="/images/arrow-icon.svg"
                    alt="Arrow"
                    className="filter brightness-0 invert"
                    style={{
                      width: "16px",
                      height: "16px",
                      minWidth: "16px",
                      minHeight: "16px",
                    }}
                  />
                }
              >
                Learn More
              </CustomButton>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 px-6 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-white">
              Implementation <span style={{ color: "#8EAE47" }}>Process</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Discovery & Assessment */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#4A6F3E] rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Discovery & Assessment</h3>
              <p className="text-[#94A3B8] text-sm mb-4">
                Comprehensive analysis of your current workflows and systems.
              </p>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-[#4A6F3E] rounded-full"></div>
                <span className="text-xs text-[#627084]">1-2 weeks</span>
              </div>
            </div>

            {/* Custom AI Configuration */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#4A6F3E] rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Custom AI Configuration</h3>
              <p className="text-[#94A3B8] text-sm mb-4">
                Tailored AI agent setup based on your specific requirements.
              </p>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-[#4A6F3E] rounded-full"></div>
                <span className="text-xs text-[#627084]">2-3 weeks</span>
              </div>
            </div>

            {/* Integration & Testing */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#4A6F3E] rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Integration & Testing</h3>
              <p className="text-[#94A3B8] text-sm mb-4">
                Seamless integration with your existing EHR and systems.
              </p>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-[#4A6F3E] rounded-full"></div>
                <span className="text-xs text-[#627084]">1-2 weeks</span>
              </div>
            </div>

            {/* Go-Live & Optimization */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#4A6F3E] rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Go-Live & Optimization</h3>
              <p className="text-[#94A3B8] text-sm mb-4">
                Launch with continuous monitoring and optimization.
              </p>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-[#4A6F3E] rounded-full"></div>
                <span className="text-xs text-[#627084]">Ongoing</span>
              </div>
            </div>
          </div>

          {/* Implementation Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-12">
            <div>
              <div
                className="text-3xl font-bold mb-2"
                style={{ color: "#8EAE47" }}
              >
                4-6 weeks
              </div>
              <div className="text-[#94A3B8] text-sm">
                Average Implementation
              </div>
            </div>
            <div>
              <div
                className="text-3xl font-bold mb-2"
                style={{ color: "#8EAE47" }}
              >
                99.9%
              </div>
              <div className="text-[#94A3B8] text-sm">Success Rate</div>
            </div>
            <div>
              <div
                className="text-3xl font-bold mb-2"
                style={{ color: "#8EAE47" }}
              >
                24/7
              </div>
              <div className="text-[#94A3B8] text-sm">Support</div>
            </div>
            <div>
              <div
                className="text-3xl font-bold mb-2"
                style={{ color: "#8EAE47" }}
              >
                SOC 2
              </div>
              <div className="text-[#94A3B8] text-sm">Compliant</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CustomButton
              backgroundColor="#4A6F3E"
              hoverBackgroundColor="#3d5a33"
              iconPosition="left"
              width="auto"
              className="px-6"
              icon={
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              }
            >
              Calculate Your ROI
            </CustomButton>
            <CustomButton
              backgroundColor="#111827"
              hoverBackgroundColor="#374151"
              textColor="#FFFFFF"
              width="auto"
              className="px-6 border border-white"
            >
              Schedule Implementation Call
            </CustomButton>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-gray-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Deploy Your <span style={{ color: "#8EAE47" }}>AI Workforce</span>
          </h2>
          <p className="text-[#94A3B8] mb-8 max-w-2xl mx-auto text-lg">
            Join leading healthcare practices already seeing measurable results
            with AI workforce automation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <CustomButton
              backgroundColor="#4A6F3E"
              hoverBackgroundColor="#3d5a33"
              iconPosition="right"
              width="auto"
              className="px-8"
              icon={
                <img
                  src="/images/arrow-icon.svg"
                  alt="Arrow"
                  className="filter brightness-0 invert"
                  style={{
                    width: "16px",
                    height: "16px",
                    minWidth: "16px",
                    minHeight: "16px",
                  }}
                />
              }
            >
              Get Started Today
            </CustomButton>
            <CustomButton
              backgroundColor="transparent"
              textColor="#FFFFFF"
              hoverBackgroundColor="#FFFFFF"
              hoverTextColor="#111827"
              width="auto"
              className="px-8 border border-[#799B4B33]"
            >
              Schedule Demo
            </CustomButton>
          </div>

          {/* Certification badges */}
          <div className="flex flex-wrap gap-5 items-center justify-center space-x-8 text-sm text-[#94A3B8]">
            <div className="flex items-center space-x-2">
              <svg
                className="w-4 h-4 text-[#94A3B8]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
              </svg>
              <span>HIPAA Compliant</span>
            </div>
            <div className="flex items-center space-x-2">
              <img
                src="/images/google-partner.svg"
                alt="SOC2 Type II"
                className="w-4 h-4 filter brightness-0 invert opacity-70"
              />
              <span>SOC2 Type II</span>
            </div>
            <div className="flex items-center space-x-2">
              <img
                src="/images/google-partner.svg"
                alt="Google Partner"
                className="w-4 h-4 filter brightness-0 invert opacity-70"
              />
              <span>Google Partner</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
