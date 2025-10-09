"use client";
import { CustomButton } from "@/components/ui/custom-button";
import Image from "next/image";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import {
  agentsData,
  cardData,
  ownerDetail,
  pricingModels,
  stories,
} from "@/utils/constants";
import { Button } from "@/components/ui/button";
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
  const [facilitySize, setFacilitySize] = useState<number>(100);
  const [adminCost, setAdminCost] = useState<number>(50000);

  const monthlySavings = (facilitySize * 175).toFixed(0);
  const revenueIncrease = (adminCost * 0.25).toFixed(0);
  const roi = ((revenueIncrease as unknown as number) / 10000 + 2).toFixed(1);
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center px-4 sm:px-6 pt-10 sm:pt-24 min-h-screen overflow-hidden">
        {/* Dark background with subtle patterns */}
        <div className="absolute inset-0 bg-[rgba(7,9,13,0.2)]">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `url('/images/ai-healthcare-bg.svg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>

        {/* Glow effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] sm:w-[600px] sm:h-[500px] lg:w-[800px] lg:h-[600px] rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(34,197,94,0.1) 0%, rgba(34,197,94,0.05) 40%, transparent 70%)",
            }}
          ></div>

          <div
            className="absolute top-10 right-10 sm:top-20 sm:right-20 w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 rounded-full blur-2xl"
            style={{
              background:
                "radial-gradient(circle, rgba(74,222,128,0.08) 0%, transparent 70%)",
            }}
          ></div>

          <div
            className="absolute bottom-20 left-10 sm:bottom-32 sm:left-20 w-32 h-32 sm:w-48 sm:h-48 lg:w-60 lg:h-60 rounded-full blur-xl"
            style={{
              background:
                "radial-gradient(circle, rgba(22,163,74,0.06) 0%, transparent 70%)",
            }}
          ></div>

          {/* Floating orbs */}
          <div className="absolute top-1/4 right-1/4 w-3 h-3 sm:w-4 sm:h-4 bg-green-400/30 rounded-full blur-sm animate-pulse"></div>
          <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-green-300/40 rounded-full blur-sm animate-pulse delay-1000"></div>
          <div className="absolute top-2/3 right-1/3 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500/25 rounded-full blur-sm animate-pulse delay-2000"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10 text-center px-2 sm:px-4">
          {/* Top badge */}
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="inline-flex items-center w-auto sm:min-w-[281px] sm:min-h-[38px] gap-2 bg-[#799B4B]/10 border border-[#799B4B]/20 rounded-full px-3 sm:px-6 py-2 sm:py-3">
              <svg
                className="w-4 h-4 text-[#799B4B] shrink-0"
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

              {/* Text with ellipsis only on mobile */}
              <span
                className="text-[#799B4B] text-xs font-medium 
                 max-w-[150px] truncate sm:max-w-none"
              >
                Enterprise AI Orchestration Platform
              </span>
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-8 leading-tight tracking-tight">
            <span className="text-white">Deploy AI Agents. Deliver</span>
            <br />
            <span className="text-white">Results. </span>
            <span className="text-[#799B4B]">Replace Overhead.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm md:text-xl text-[#94A3B8] mb-5 sm:mb-12 max-w-3xl mx-auto leading-relaxed font-light px-2">
            Connect AI-powered building blocks to create custom workflows that
            scale with your enterprise practice operations and deliver
            measurable results.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 sm:mb-20">
            <CustomButton
              backgroundColor="#799B4B"
              hoverBackgroundColor="#799B4B90"
              className="shadow-[0_0_20px_rgba(121,155,75,0.3)] hover:shadow-[0_0_30px_rgba(121,155,75,0.4)] w-full sm:w-auto "
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
              backgroundColor="rgba(255,255,255,0.05)"
              textColor="#FFFFFF"
              hoverBackgroundColor="rgba(255,255,255,0.1)"
              className="border border-gray-600 hover:border-gray-400 backdrop-blur-sm w-full sm:w-auto"
              iconPosition="left"
              icon={
                <img
                  src="/images/play-button.svg"
                  alt="Play"
                  className="w-5 h-5"
                />
              }
            >
              View Enterprise Demo
            </CustomButton>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-12 max-w-lg sm:max-w-3xl lg:max-w-4xl mx-auto">
            {/* Healthcare Facilities */}
            <div className="text-center group">
              <div className="mb-4 sm:mb-6 flex justify-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#799B4B]/10 border border-[#799B4B]/10 rounded-2xl flex items-center justify-center backdrop-blur-sm group-hover:bg-[#799B4B]/15 group-hover:border-[#799B4B]/20 transition-all duration-300">
                  <img
                    src="/images/healthcare-facilities-new.svg"
                    alt="Healthcare Facilities"
                    className="w-6 h-6 sm:w-8 sm:h-8"
                  />
                </div>
              </div>
              <div className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#799B4B]  sm:mb-3 tracking-tight">
                500+
              </div>
              <div className="text-[#94A3B8] text-xs sm:text-base font-medium">
                Healthcare Facilities
              </div>
            </div>

            {/* Claims Processed */}
            <div className="text-center group">
              <div className="mb-4 sm:mb-6 flex justify-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#799B4B]/10 border border-[#799B4B]/10 rounded-2xl flex items-center justify-center backdrop-blur-sm group-hover:bg-[#799B4B]/15 group-hover:border-[#799B4B]/20 transition-all duration-300">
                  <svg
                    className="w-6 h-6 sm:w-8 sm:h-8 text-[#799B4B]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
              </div>
              <div className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#799B4B]  sm:mb-3 tracking-tight">
                $3B+
              </div>
              <div className="text-[#94A3B8] text-xs sm:text-base font-medium">
                Claims Processed
              </div>
            </div>

            {/* Average ROI */}
            <div className="text-center group">
              <div className="mb-3 sm:mb-6 flex justify-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#799B4B]/10 border border-[#799B4B]/10 rounded-2xl flex items-center justify-center backdrop-blur-sm group-hover:bg-[#799B4B]/15 group-hover:border-[#799B4B]/20 transition-all duration-300">
                  <svg
                    className="w-6 h-6 sm:w-8 sm:h-8 text-[#799B4B]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
              </div>
              <div className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#799B4B]  sm:mb-3 tracking-tight">
                21X
              </div>
              <div className="text-[#94A3B8] text-xs sm:text-base font-medium">
                Average ROI
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Workforce for 5 Healthcare Verticals */}
      <section className="sm:py-20 py-15 px-4 sm:px-6 bg-black">
        <div className="max-w-7xl mx-auto text-center mb-8 sm:mb-16">
          <h2 className="text-3xl md:text-[45px] font-bold mb-3 sm:mb-6 text-white">
            <span className="text-[#799B4B]">AI Workforce</span> for
            <br />
            All Healthcare Outcomes
          </h2>
          <p className="text-[#94A3B8] text-xs sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Specialized AI agents designed for specific healthcare practice
            types, delivering measurable outcomes and ROI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-7 sm:mb-16 items-stretch">
          {/* Skilled Nursing Facilities */}
          <div
            className="border border-gray-700/50 rounded-2xl px-6 sm:px-8 pt-7 pb-7 sm:pb-16 backdrop-blur-sm relative overflow-hidden group transition-all duration-300 flex flex-col h-full"
            style={{ backgroundColor: "#0C0E12" }}
          >
            <div className="relative z-10 flex flex-col h-full">
              {/* Content area with gradient background */}
              <div className="relative mb-6">
                {/* Background image behind gradient */}
                <div
                  className="absolute inset-0  -inset-x-2 -inset-y-2"
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

                  <h3 className="sm:text-xl text-sm font-bold text-white mb-3">
                    Skilled Nursing Facilities
                  </h3>
                  <p className="text-[#94A3B8] text-xs sm:text-sm mb-0 leading-relaxed">
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
                  <span className="sm:text-sm text-xs font-medium text-white">
                    AI Agents
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span
                    className=" text-[10px] sm:text-xs px-3 py-[3px] sm:py-[6px] rounded-full border"
                    style={{
                      backgroundColor: "#A2C0431A",
                      color: "#A2C043",
                      borderColor: "#A2C043",
                    }}
                  >
                    PDPM Optimizer
                  </span>
                  <span
                    className="text-[10px] sm:text-xs px-3 py-[3px] sm:py-[6px] rounded-full border"
                    style={{
                      backgroundColor: "#A2C0431A",
                      color: "#A2C043",
                      borderColor: "#A2C043",
                    }}
                  >
                    Compliance Monitor
                  </span>
                  <span
                    className="text-[10px] sm:text-xs px-3 py-[3px] sm:py-[6px] rounded-full border"
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
                  <span className="sm:text-sm text-xs font-medium text-white">
                    Key Outcomes
                  </span>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 sm:text-sm text-xs text-[#94A3B8]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#799B4B]"></div>
                    35% PDPM Revenue Increase
                  </li>
                  <li className="flex items-center gap-2 sm:text-sm text-xs text-[#94A3B8]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#799B4B]"></div>
                    90% Compliance Accuracy
                  </li>
                  <li className="flex items-center gap-2 sm:text-sm text-xs text-[#94A3B8]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#799B4B]"></div>
                    60% Admin Time Reduction
                  </li>
                </ul>
              </div>

              <div className="mt-auto">
                <button className="text-[#799B4B] text-xs sm:text-sm font-medium hover:text-[#799B4B]/80 transition-colors flex items-center justify-center gap-2 group w-full">
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
            className="border border-gray-700/50 rounded-2xl px-6 sm:px-8 pt-7 pb-7 sm:pb-16 backdrop-blur-sm relative overflow-hidden group transition-all duration-300 flex flex-col h-full"
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

                  <h3 className=" text-sm sm:text-xl font-bold text-white mb-3">
                    Physiatry & Rehabilitation
                  </h3>
                  <p className="text-[#94A3B8] text-xs sm:text-sm mb-0 leading-relaxed">
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
                  <span className="text-xs sm:text-sm font-medium text-white">
                    AI Agents
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span
                    className=" text-[10px] sm:text-xs px-3 py-[3px] sm:py-[6px] rounded-full border"
                    style={{
                      backgroundColor: "#A2C0431A",
                      color: "#A2C043",
                      borderColor: "#A2C043",
                    }}
                  >
                    Therapy Scheduler
                  </span>
                  <span
                    className="text-[10px] sm:text-xs px-3 py-[3px] sm:py-[6px] rounded-full border"
                    style={{
                      backgroundColor: "#A2C0431A",
                      color: "#A2C043",
                      borderColor: "#A2C043",
                    }}
                  >
                    Outcome Tracker
                  </span>
                  <span
                    className="text-[10px] sm:text-xs px-3 py-[3px] sm:py-[6px] rounded-full border"
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
                  <span className="text-xs sm:text-sm font-medium text-white">
                    Key Outcomes
                  </span>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-xs sm:text-sm text-[#94A3B8]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#799B4B]"></div>
                    45% Workflow Efficiency
                  </li>
                  <li className="flex items-center gap-2 text-xs sm:text-sm text-[#94A3B8]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#799B4B]"></div>
                    35% Patient Throughput
                  </li>
                  <li className="flex items-center gap-2 text-xs sm:text-sm text-[#94A3B8]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#799B4B]"></div>
                    $2.1M Annual Savings
                  </li>
                </ul>
              </div>

              <div className="mt-auto">
                <button className="text-[#799B4B] text-xs sm:text-sm font-medium hover:text-[#799B4B]/80 transition-colors flex items-center justify-center gap-2 group w-full">
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
            className="border border-gray-700/50 rounded-2xl  px-6 sm:px-8 pt-7 pb-7 sm:pb-16 backdrop-blur-sm relative overflow-hidden group transition-all duration-300 flex flex-col h-full"
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

                  <h3 className="text-sm sm:text-xl font-bold text-white mb-3">
                    Multi-Specialty Practice Groups
                  </h3>
                  <p className="text-[#94A3B8] text-xs sm:text-sm mb-0 leading-relaxed">
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
                  <span className=" text-xs sm:text-sm font-medium text-white">
                    AI Agents
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span
                    className="text-[10px] sm:text-xs px-3 py-[3px] sm:py-[6px] rounded-full border"
                    style={{
                      backgroundColor: "#A2C0431A",
                      color: "#A2C043",
                      borderColor: "#A2C043",
                    }}
                  >
                    Prior Auth AI
                  </span>
                  <span
                    className="text-[10px] sm:text-xs px-3 py-[3px] sm:py-[6px] rounded-full border"
                    style={{
                      backgroundColor: "#A2C0431A",
                      color: "#A2C043",
                      borderColor: "#A2C043",
                    }}
                  >
                    Claims Processor
                  </span>
                  <span
                    className="text-[10px] sm:text-xs px-3 py-[3px] sm:py-[6px] rounded-full border"
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
                  <span className="text-xs sm:text-sm font-medium text-white">
                    Key Outcomes
                  </span>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-xs sm:text-sm text-[#94A3B8]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#799B4B]"></div>
                    80% Prior Auth Approval
                  </li>
                  <li className="flex items-center gap-2 text-xs sm:text-sm text-[#94A3B8]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#799B4B]"></div>
                    90% Claims Processing Speed
                  </li>
                  <li className="flex items-center gap-2 text-xs sm:text-sm text-[#94A3B8]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#799B4B]"></div>
                    65% Intake Efficiency
                  </li>
                </ul>
              </div>

              <div className="mt-auto">
                <button className="text-[#799B4B] text-xs sm:text-sm font-medium hover:text-[#799B4B]/80 transition-colors flex items-center justify-center gap-2 group w-full">
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
            className="border border-gray-700/50 rounded-2xl  px-6 sm:px-8 pt-7 pb-7 sm:pb-16 backdrop-blur-sm relative overflow-hidden group transition-all duration-300 flex flex-col h-full"
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
                  <div className=" mb-2 sm:mb-6 mt-2 ml-2">
                    <img
                      src="/images/ambulatory-surgery-center.svg"
                      alt="Ambulatory Surgery Centers"
                      className="w-14 h-14 rounded-xl"
                    />
                  </div>

                  <h3 className="text-sm sm:text-xl font-bold text-white mb-1 sm:mb-3">
                    Ambulatory Surgery Centers
                  </h3>
                  <p className="text-[#94A3B8] text-xs sm:text-sm mb-0 leading-relaxed">
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
                    className="text-[10px] sm:text-xs px-3 py-[3px] sm:py-[6px] rounded-full border"
                    style={{
                      backgroundColor: "#A2C0431A",
                      color: "#A2C043",
                      borderColor: "#A2C043",
                    }}
                  >
                    Surgery Scheduler
                  </span>
                  <span
                    className="text-[10px] sm:text-xs px-3 py-[3px] sm:py-[6px] rounded-full border"
                    style={{
                      backgroundColor: "#A2C0431A",
                      color: "#A2C043",
                      borderColor: "#A2C043",
                    }}
                  >
                    Supply Chain AI
                  </span>
                  <span
                    className="text-[10px] sm:text-xs px-3 py-[3px] sm:py-[6px] rounded-full border"
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
                  <span className="text-xs sm:text-sm font-medium text-white">
                    Key Outcomes
                  </span>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-xs sm:text-sm text-[#94A3B8]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#799B4B]"></div>
                    95% OR Utilization
                  </li>
                  <li className="flex items-center gap-2 text-xs sm:text-sm text-[#94A3B8]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#799B4B]"></div>
                    30% Supply Cost Reduction
                  </li>
                  <li className="flex items-center gap-2 text-xs sm:text-sm text-[#94A3B8]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#799B4B]"></div>
                    99% Insurance Verification
                  </li>
                </ul>
              </div>

              <div className="mt-auto">
                <button className="text-[#799B4B] text-xs sm:text-sm font-medium hover:text-[#799B4B]/80 transition-colors flex items-center justify-center gap-2 group w-full">
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
            className="border border-gray-700/50 rounded-2xl  px-6 sm:px-8 pt-7 pb-7 sm:pb-16 backdrop-blur-sm relative overflow-hidden group transition-all duration-300 flex flex-col h-full"
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

                  <h3 className="text-sm sm:text-xl font-bold text-white mb-3">
                    Home Health & Hospice
                  </h3>
                  <p className="text-[#94A3B8] text-xs sm:text-sm mb-0 leading-relaxed">
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
                  <span className="text-xs sm:text-sm font-medium text-white">
                    AI Agents
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span
                    className="text-[10px] sm:text-xs px-3 py-[3px] sm:py-[6px] rounded-full border"
                    style={{
                      backgroundColor: "#A2C0431A",
                      color: "#A2C043",
                      borderColor: "#A2C043",
                    }}
                  >
                    Care Plan AI
                  </span>
                  <span
                    className="text-[10px] sm:text-xs px-3 py-[3px] sm:py-[6px] rounded-full border"
                    style={{
                      backgroundColor: "#A2C0431A",
                      color: "#A2C043",
                      borderColor: "#A2C043",
                    }}
                  >
                    OASIS Manager
                  </span>
                  <span
                    className="text-[10px] sm:text-xs px-3 py-[3px] sm:py-[6px] rounded-full border"
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
                  <span className="text-xs sm:text-sm font-medium text-white">
                    Key Outcomes
                  </span>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-xs sm:text-sm text-[#94A3B8]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#799B4B]"></div>
                    40% Care Plan Efficiency
                  </li>
                  <li className="flex items-center gap-2 text-xs sm:text-sm text-[#94A3B8]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#799B4B]"></div>
                    95% OASIS Accuracy
                  </li>
                  <li className="flex items-center gap-2 text-xs sm:text-sm text-[#94A3B8]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#799B4B]"></div>
                    70% Medication Adherence
                  </li>
                </ul>
              </div>

              <div className="mt-auto">
                <button className="text-[#799B4B] text-xs sm:text-sm font-medium hover:text-[#799B4B]/80 transition-colors flex items-center justify-center gap-2 group w-full">
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

        <div className="text-center mb-7 sm:mb-20">
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
      <section className="relative px-6 bg-black py-7 sm:py-20">
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
            <div className="p-4 sm:p-8 md:p-12 lg:p-16 ">
              <h2 className="text-[18px] sm:text-3xl  font-bold text-black mb-2 sm:mb-6">
                The Problem We Solve
              </h2>
              <p className="text-gray-700 text-xs sm:text-sm  leading-relaxed max-w-4xl">
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
        className="pt-32 py-7 sm:py-20 px-4 sm:px-6 relative"
        style={{ backgroundColor: "#E7E9E3" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-16 mt-16">
            <h2 className="text-[22px] md:text-[45px] font-bold text-black mb-4">
              Building Your AI Workforce
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-xs sm:text-[20px]">
              Our proven methodology for implementing AI building blocks across
              enterprise practices
            </p>
          </div>
          <div className="space-y-6">
            {/* Step 1 - Assessment */}
            <div className="rounded-xl sm:p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                {/* LEFT SIDE */}
                <div className="flex flex-col sm:p-5 sm:flex-row sm:items-start sm:space-x-4 text-center sm:text-left">
                  {/* Number Box */}
                  <div className="flex justify-center sm:justify-start">
                    <div className="w-10 h-10 bg-[#62884A] rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">1</span>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="mt-4 sm:mt-0 w-full">
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
                    <p className="text-gray-600 text-sm leading-relaxed max-w-md mx-auto sm:mx-0">
                      We analyze your current workflows, pain points, and
                      integration requirements.
                    </p>
                  </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="bg-gray-50 rounded-lg p-5 sm:p-6 text-center sm:text-left">
                  <h4 className="text-sm font-semibold text-black mb-4">
                    Key Outcomes
                  </h4>
                  <div className="space-y-3">
                    <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-3">
                      <img
                        src="/images/tick-icon.svg"
                        alt="Tick"
                        className="w-4 h-4 flex-shrink-0 mb-1 sm:mb-0"
                      />
                      <span className="sm:text-sm text-gray-700">
                        Workflow mapping
                      </span>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-3">
                      <img
                        src="/images/tick-icon.svg"
                        alt="Tick"
                        className="w-4 h-4 flex-shrink-0 mb-1 sm:mb-0"
                      />
                      <span className="text-sm text-gray-700">
                        Integration assessment
                      </span>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-3">
                      <img
                        src="/images/tick-icon.svg"
                        alt="Tick"
                        className="w-4 h-4 flex-shrink-0 mb-1 sm:mb-0"
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
            <div className="rounded-xl sm:p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                {/* LEFT SIDE */}
                <div className="flex flex-col sm:p-5 sm:flex-row sm:items-start sm:space-x-4 text-center sm:text-left">
                  {/* Number Box */}
                  <div className="flex justify-center sm:justify-start">
                    <div className="w-10 h-10 bg-[#62884A] rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">2</span>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="mt-4 sm:mt-0 w-full">
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
                    <p className="text-gray-600 text-sm leading-relaxed max-w-md mx-auto sm:mx-0">
                      Configure AI blocks to match your specific practice needs
                      and existing systems.
                    </p>
                  </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="bg-gray-50 rounded-lg p-4 sm:p-6 text-center sm:text-left">
                  <h4 className="text-sm font-semibold text-black mb-4">
                    Key Outcomes
                  </h4>
                  <div className="space-y-3">
                    <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-3">
                      <img
                        src="/images/tick-icon.svg"
                        alt="Tick"
                        className="w-4 h-4 flex-shrink-0 mb-1 sm:mb-0"
                      />
                      <span className="text-sm text-gray-700">
                        Custom AI models
                      </span>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-3">
                      <img
                        src="/images/tick-icon.svg"
                        alt="Tick"
                        className="w-4 h-4 flex-shrink-0 mb-1 sm:mb-0"
                      />
                      <span className="text-sm text-gray-700">
                        Integration planning
                      </span>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-3">
                      <img
                        src="/images/tick-icon.svg"
                        alt="Tick"
                        className="w-4 h-4 flex-shrink-0 mb-1 sm:mb-0"
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
            <div className="rounded-xl sm:p-6">
              <div className="grid grid-cols-1 sm:p-5 lg:grid-cols-2 gap-8 items-start">
                {/* LEFT SIDE */}
                <div className="flex flex-col sm:p-5 sm:flex-row sm:items-start sm:space-x-4 text-center sm:text-left">
                  {/* Number Box */}
                  <div className="flex justify-center sm:justify-start">
                    <div className="w-10 h-10 bg-[#62884A] rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">3</span>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="mt-4 sm:mt-0 w-full">
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
                    <p className="text-gray-600 text-sm leading-relaxed max-w-md mx-auto sm:mx-0">
                      Gradual deployment with continuous monitoring and
                      optimization.
                    </p>
                  </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="bg-gray-50 rounded-lg p-4 sm:p-6 text-center sm:text-left">
                  <h4 className="text-sm font-semibold text-black mb-4">
                    Key Outcomes
                  </h4>
                  <div className="space-y-3">
                    <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-3">
                      <img
                        src="/images/tick-icon.svg"
                        alt="Tick"
                        className="w-4 h-4 flex-shrink-0 mb-1 sm:mb-0"
                      />
                      <span className="text-sm text-gray-700">
                        Live deployment
                      </span>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-3">
                      <img
                        src="/images/tick-icon.svg"
                        alt="Tick"
                        className="w-4 h-4 flex-shrink-0 mb-1 sm:mb-0"
                      />
                      <span className="text-sm text-gray-700">
                        Staff onboarding
                      </span>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-3">
                      <img
                        src="/images/tick-icon.svg"
                        alt="Tick"
                        className="w-4 h-4 flex-shrink-0 mb-1 sm:mb-0"
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
            <div className="rounded-xl sm:p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                {/* LEFT SIDE */}
                <div className="flex flex-col sm:p-5 sm:flex-row sm:items-start sm:space-x-4 text-center sm:text-left">
                  {/* Number Box */}
                  <div className="flex justify-center sm:justify-start">
                    <div className="w-10 h-10 bg-[#62884A] rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">4</span>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="mt-4 sm:mt-0 w-full">
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
                    <p className="text-gray-600 text-sm leading-relaxed max-w-md mx-auto sm:mx-0">
                      Ongoing optimization based on real-world performance data.
                    </p>
                  </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="bg-gray-50 rounded-lg p-4 sm:p-6 text-center sm:text-left">
                  <h4 className="text-sm font-semibold text-black mb-4">
                    Key Outcomes
                  </h4>
                  <div className="space-y-3">
                    <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-3">
                      <img
                        src="/images/tick-icon.svg"
                        alt="Tick"
                        className="w-4 h-4 flex-shrink-0 mb-1 sm:mb-0"
                      />
                      <span className="text-sm text-gray-700">
                        Performance optimization
                      </span>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-3">
                      <img
                        src="/images/tick-icon.svg"
                        alt="Tick"
                        className="w-4 h-4 flex-shrink-0 mb-1 sm:mb-0"
                      />
                      <span className="text-sm text-gray-700">
                        Feature updates
                      </span>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-3">
                      <img
                        src="/images/tick-icon.svg"
                        alt="Tick"
                        className="w-4 h-4 flex-shrink-0 mb-1 sm:mb-0"
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
      <section className="sm:py-20 py-7 px-4 sm:px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-[45px] font-bold mb-4">
              <span className="text-[#799B4B]">AI Workforce</span>{" "}
              <span className="text-white">vs</span>{" "}
              <span className="text-[#94A3B8]">Traditional Software</span>
            </h2>
            <p className="text-[#94A3B8] max-w-2xl mx-auto text-xs sm:text-lg">
              Move beyond tools to outcomes. Deploy AI agents that deliver
              measurable results, not just features.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* AI Workforce */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-5 sm:p-8 flex flex-col h-full hover:border-[#A2C04333] hover:drop-shadow-[#0000000D] hover:bg-gradient-to-br hover:from-[#85A647]/5 hover:to-transparent transition-all duration-300">
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
                  <div className="flex items-center justify-center mt-1 flex-shrink-0">
                    <img
                      src="/images/implementation-wf2.svg"
                      alt="Implementation"
                      className="w-8 h-8"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-xs sm:text-[13px] text-white mb-1">
                      Implementation
                    </p>
                    <p className="text-xs sm:text-[13px] text-[#94A3B8]">
                      AI agents deploy in days
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  {/* <CHANGE> Updated to trending up chart icon */}
                  <div className="flex items-center justify-center mt-1 flex-shrink-0">
                    <img
                      src="/images/outcomes-wf2.svg"
                      alt="Outcomes Focus"
                      className="w-8 h-8"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-xs sm:text-[13px] text-white mb-1">
                      Outcomes Focus
                    </p>
                    <p className="text-xs sm:text-[13px] text-[#94A3B8]">
                      Results-driven with measurable ROI
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  {/* <CHANGE> Updated to circular arrows/refresh icon */}
                  <div className="flex items-center justify-center mt-1 flex-shrink-0">
                    <img
                      src="/images/overhead-wf2.svg"
                      alt="Overhead"
                      className="w-8 h-8"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-xs sm:text-[13px] text-white mb-1">
                      Overhead
                    </p>
                    <p className="text-xs sm:text-[13px] text-[#94A3B8]">
                      Replaces manual processes entirely
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  {/* <CHANGE> Updated to checkmark icon */}
                  <div className="flex items-center justify-center mt-1 flex-shrink-0">
                    <img
                      src="/images/cost-structure-wf2.svg"
                      alt="Cost Structure"
                      className="w-8 h-8"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-xs sm:text-[13px]  text-white mb-1">
                      Cost Structure
                    </p>
                    <p className="text-xs sm:text-[13px] text-[#94A3B8]">
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
                <ul className="text-xs sm:text-[13px] text-[#799B4B] space-y-2">
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
            <div className="bg-gray-800/30 border border-gray-700 rounded-xl p-5 sm:p-8 flex flex-col h-full hover:border-[#A2C04333] hover:drop-shadow-[#0000000D] hover:bg-gradient-to-br hover:from-[#85A647]/5 hover:to-transparent transition-all duration-300">
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

              <div className="text-center mb-4 sm:mb-8">
                <h3 className="sm:text-2xl font-bold text-white sm:mb-2">
                  Traditional Software
                </h3>
                <p className="text-[#94A3B8] text-xs sm:text-sm font-medium">
                  Tool-Focused Solutions
                </p>
              </div>

              <div className="space-y-6 mb-8 flex-grow">
                <div className="flex items-start space-x-2 sm:space-x-4">
                  {/* <CHANGE> Updated to clock icon */}
                  <div className=" flex items-center justify-center mt-1 flex-shrink-0">
                    <img
                      src="/images/implementation-ts2.svg"
                      alt="Implementation"
                      className="w-8 h-8"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-xs sm:text-[13px] text-white mb-1">
                      Implementation
                    </p>
                    <p className=" text-xs sm:text-[13px] text-[#94A3B8]">
                      Software takes months to implement
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-2 sm:space-x-4">
                  {/* <CHANGE> Updated to gear/settings icon */}
                  <div className="flex items-center justify-center mt-1 flex-shrink-0">
                    <img
                      src="/images/traditional-software.svg"
                      alt="Outcomes Focus"
                      className="w-8 h-8"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-xs sm:text-[13px] text-white mb-1">
                      Outcomes Focus
                    </p>
                    <p className="text-xs sm:text-[13px] text-[#94A3B8]">
                      Feature-focused with unclear value
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-2 sm:space-x-4">
                  {/* <CHANGE> Updated to people/users icon */}
                  <div className="flex items-center justify-center mt-1 flex-shrink-0">
                    <img
                      src="/images/overhead-ts2.svg"
                      alt="Overhead"
                      className="w-8 h-8"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-white text-xs sm:text-[13px] mb-1">
                      Overhead
                    </p>
                    <p className="text-xs sm:text-[13px] text-[#94A3B8]">
                      Adds more tools to manage
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-2 sm:space-x-4">
                  {/* <CHANGE> Updated to dollar sign icon */}
                  <div className="flex items-center justify-center mt-1 flex-shrink-0">
                    <img
                      src="/images/cost-structure-ts2.svg"
                      alt="Cost Structure"
                      className="w-8 h-8"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-xs sm:text-[13px] text-white mb-1">
                      Cost Structure
                    </p>
                    <p className="text-xs sm:text-[13px] text-[#94A3B8]">
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
                <ul className="text-xs sm:text-[13px] text-[#94A3B8] space-y-2">
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
              <div className="text-2xl sm:text-5xl font-bold text-[#799B4B] mb-2">
                85%
              </div>
              <div className="text-white text-sm sm-text-lg font-medium mb-1">
                Faster Implementation
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-5xl font-bold text-[#799B4B] mb-2">
                300%
              </div>
              <div className="text-white text-sm sm-text-lg font-medium mb-1">
                Better ROI vs Traditional
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-5xl font-bold text-[#799B4B] mb-2">
                0
              </div>
              <div className="text-white text-sm sm-text-lg font-medium mb-1">
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
      <section className="py-7 sm:py-20 px-4 sm:px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-6 sm:mb-12 ">
            <h2 className="text-2xl md:text-5xl font-bold text-white sm:mb-4">
              Enterprise
            </h2>
            <h2 className="text-2xl md:text-5xl font-bold text-[#799B4B] mb-3 sm:mb-6">
              AI Agent Library
            </h2>
            <p className=" text-sm sm:text-xl text-[#94A3B8] max-w-3xl mx-auto">
              Deploy specialized AI agents designed for healthcare workflows.
              Each agent is trained on healthcare-specific data and integrated
              with your existing systems.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-8 sm:mb-12">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12">
  {agentsData.map((agent) => (
    <div
      key={agent.id}
      className="bg-gray-900 rounded-xl overflow-hidden w-full max-w-[316px] sm:h-[350px] lg:h-[382px] mx-auto border border-gray-700/50 flex flex-col"
      style={{ borderRadius: "12px" }}
    >
      {/* Top Image Section */}
      <div className="relative sm:min-w-[266px] sm:h-[128px] pt-4 sm:pt-6 px-4 sm:px-6">
        <img
          src={agent.image}
          alt={agent.title}
          className="w-full h-full object-cover"
        />

        {/* Days badge */}
        <div className="absolute sm:top-9 top-6 right-6 sm:right-8">
          <span className="bg-black/70 text-white text-[11px] sm:text-xs px-2 py-[2px] sm:px-3 sm:py-1 rounded-full font-medium">
            {agent.days}
          </span>
        </div>

        {/* Icon bottom-left */}
        <div className="absolute bottom-3 left-8 z-20">
          <Image
            height={100}
            width={100}
            src={agent.icon}
            alt={agent.title}
            className="sm:w-[32px] sm:h-[32px] w-[22px] h-[22px]"
          />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="px-4 sm:px-6 pt-4 sm:pt-6 pb-6 sm:pb-10  flex flex-col justify-between h-full">
  <div>
    <h3 className="text-[13px] sm:text-[15px] font-bold text-white mb-2">
      {agent.title}
    </h3>
    <p className="text-[#94A3B8] text-xs sm:text-[13px] leading-relaxed line-clamp-2">
      {agent.description}
    </p>

    {/* Metrics */}
    <div className="space-y-2 mt-3 sm:mt-4">
      {agent.metrics.map((metric, i) => (
        <div
          key={i}
          className="flex items-center gap-2 text-[9px] sm:text-[11px] text-[#94A3B8]"
        >
          <div className="w-2 h-2 bg-[#A2C043] rounded-full"></div>
          <span>{metric}</span>
        </div>
      ))}
    </div>
  </div>

  {/* Button at bottom (with gap for small screens) */}
  <button className="text-[#A2C043] text-xs sm:text-sm font-medium transition-colors flex items-center gap-3 justify-center w-full mt-4 sm:mt-auto mb-2">
    Deploy Agent
    <ArrowRight className="w-4 h-4 text-[#A2C043]" />
  </button>
</div>

    </div>
  ))}
</div>


          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-6 sm:mb-12">
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
      <section className="py-7 sm:py-20 px-4 sm:px-6 bg-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className=" text-2x1 sm:text-[45px] font-bold mb-4 leading-[48px]">
              <span className="text-white">Proven Results</span>
              <br />
              <span className="text-[#A2C043]">Across Healthcare</span>
            </h2>
            <p className="text-[#94A3B8] text-xs sm:text-sm max-w-2xl mx-auto">
              Real outcomes from healthcare organizations that transformed their
              operations with AI workforce deployment.
            </p>
          </div>

          {/* Interactive ROI Calculator */}
          <div
            className="mx-auto p-4 sm:p-8 mb-12"
            style={{
              backgroundColor: "rgba(162, 192, 67, 0.05)",
              width: "1400px",
              minHeight: "380px",
              borderRadius: "12px",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              maxWidth: "100%",
              overflow: "visible",
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
                <h3 className="text-sm sm:text-2xl font-bold text-white">
                  Interactive ROI Calculator
                </h3>
              </div>
              <p className="text-[#94A3B8] text-xs sm:text-sm">
                Calculate your potential returns with AI workforce deployment
              </p>
            </div>

            {/* Calculator Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {/* Input Sliders */}
              <div className="space-y-6">
                <div>
                  <label className="block text-[10px] sm:text-[13px] text-white font-medium ">
                    Facility Size (Providers/Beds): {facilitySize}
                  </label>
                  <input
                    type="range"
                    min="50"
                    max="500"
                    value={facilitySize}
                    onChange={(e) => setFacilitySize(Number(e.target.value))}
                    className="w-full h-2 bg-[#2C3137] rounded-lg appearance-none cursor-pointer accent-[#85A647]"
                    style={{
                      background: `linear-gradient(to right, #A2C043 ${
                        ((facilitySize - 50) / (500 - 50)) * 100
                      }%, #374151 ${
                        ((facilitySize - 50) / (500 - 50)) * 100
                      }%)`,
                    }}
                  />
                </div>

                <div>
                  <label className="block text-white text-[10px] sm:text-[13px] font-medium ">
                    Monthly Admin Costs: ${adminCost.toLocaleString()}
                  </label>
                  <input
                    type="range"
                    min="10000"
                    max="100000"
                    step="1000"
                    value={adminCost}
                    onChange={(e) => setAdminCost(Number(e.target.value))}
                    className="w-full h-2 bg-[#2C3137] rounded-lg appearance-none cursor-pointer accent-[#85A647]"
                    style={{
                      background: `linear-gradient(to right, #A2C043 ${
                        ((adminCost - 10000) / (100000 - 10000)) * 100
                      }%, #374151 ${
                        ((adminCost - 10000) / (100000 - 10000)) * 100
                      }%)`,
                    }}
                  />
                </div>
              </div>

              {/* Output Boxes */}
              <div className="space-y-6">
                <div className="flex flex-col  sm:flex-row gap-6 justify-center">
                  {/* Monthly Savings */}
                  <div
                    className="text-center bg-[#121417]"
                    style={{
                      width: "100%",
                      maxWidth: "305px",
                      minHeight: "78px",
                      borderRadius: "12px",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div
                      className="text-[17px] font-bold mb-1"
                      style={{ color: "#A2C043" }}
                    >
                      ${Number(monthlySavings).toLocaleString()}
                    </div>
                    <div className="text-xs text-[#94A3B8]">
                      Monthly Savings
                    </div>
                  </div>

                  {/* Revenue Increase */}
                  <div
                    className="text-center bg-[#121417]"
                    style={{
                      width: "100%",
                      maxWidth: "305px",
                      minHeight: "78px",
                      borderRadius: "12px",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div
                      className="text-[17px] font-bold mb-1"
                      style={{ color: "#0284C5" }}
                    >
                      ${Number(revenueIncrease).toLocaleString()}
                    </div>
                    <div className="text-xs text-[#94A3B8]">
                      Revenue Increase
                    </div>
                  </div>
                </div>

                {/* ROI */}
                <div
                  className="text-center mx-auto"
                  style={{
                    backgroundColor: "rgba(162, 192, 67, 0.05)",
                    width: "100%",
                    maxWidth: "550px",
                    minHeight: "110px",
                    borderRadius: "12px",
                    border: "1px solid #A2C04333",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div
                    className="text-[20px] sm:text-[30px] font-bold "
                    style={{ color: "#96B546" }}
                  >
                    {roi}X ROI
                  </div>
                  <div className=" text-xs sm:text-[13px] text-[#94A3B8]">
                    Annual return on investment
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Results Grid */}
          <div className="w-full sm:mb-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center max-w-[1400px] mx-auto">
              {cardData.map((card) => (
                <div
                  key={card.id}
                  className="text-center w-full max-w-[316px] sm:max-w-[300px] md:max-w-[320px] flex flex-col justify-center items-center p-4 rounded-xl border border-[#2D3339]"
                  style={{
                    backgroundColor: "#171A1C",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
                    filter:
                      "blur(0px) drop-shadow(0 2px 8px rgba(0, 0, 0, 0.05))",
                    height: "278px",
                  }}
                >
                  <div className="flex justify-center mb-4">
                    <img
                      src={card.img}
                      alt={card.title}
                      className="sm:w-12 w-8 h-8 sm:h-12"
                    />
                  </div>
                  <div
                    className="text-lg sm:text-[27px] font-bold mb-2"
                    style={{ color: card.color }}
                  >
                    {card.value}
                  </div>
                  <div className="text-white font-medium text-sm sm:text-[16px] mb-2">
                    {card.title}
                  </div>
                  <div className="text-sm text-[#94A3B8] text-center">
                    {card.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Real Enterprise Transformation Stories */}
      <section className=" py-7 sm:py-20 px-4  sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6 sm:mb-12">
            <h2 className="text-[20px] sm:text-[30px] font-bold mb-4">
              <span className="text-white">Real Enterprise </span>
              <span style={{ color: "#78933F" }}>Transformation Stories</span>
            </h2>
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 sm:px-4"
            style={{
              maxWidth: "1400px",
              margin: "0 auto",
            }}
          >
            {stories.map((story, index) => (
              <div
                key={index}
                className="relative mx-auto w-full max-w-[400px] p-5 sm:p-8 border border-[#2D3339] rounded-xl flex flex-col "
                style={{
                  backgroundColor: "#171A1C",
                }}
              >
                {/* Header Section */}
                <div className="flex justify-between">
                  <div className="mb-2 sm:mb-4">
                    <h3 className="font-semibold text-start text-white text-sm sm:text-lg mb-1 leading-snug">
                      {story.title}
                    </h3>
                    <p className="text-[10px] sm:text-[13px] text-[#94A3B8]">
                      {story.location}
                    </p>
                  </div>
                  <div className="w-fit">
                    <div className="inline-flex items-center justify-center bg-[] border border-[#2D3339] text-white text-[7px] sm:text-[12px] px-[8px] sm:px-3 py-1 rounded-full  whitespace-nowrap font-medium">
                      {story.integration}
                    </div>
                  </div>
                </div>

                {/* ROI Section */}
                <div className="flex gap-3 mb-3">
                  <div className="text-center items-baseline gap-3">
                    <div
                      className="text-sm sm:text-[22px] font-bold"
                      style={{ color: "#95B445" }}
                    >
                      {story.roi}
                    </div>
                    <div className="text-xs text-[#94A3B8]">ROI</div>
                  </div>
                  <div className="text-center items-baseline gap-3">
                    <div className="text-sm sm:text-lg font-bold text-white">
                      {story.implementation}
                    </div>
                    <div className="text-xs text-[#94A3B8]">Implementation</div>
                  </div>
                </div>

                {/* Challenge */}
                <div className="space-y-4">
                  <div className="items-start">
                    <div className="flex items-center gap-3 mb-1 sm:my-2">
                      <div className="w-4 h-4 flex-shrink-0">
                        <img
                          src="/images/challenge-ai.svg"
                          alt="Challenge"
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <p className="text-xs sm:text-sm font-bold text-white">
                        Challenge
                      </p>
                    </div>
                    <p className="text-xs sm:text-sm text-[#94A3B8]">
                      {story.challenge}
                    </p>
                  </div>

                  {/* AI Solution */}
                  <div className="items-start gap-3">
                    <div className="flex gap-3 my-2">
                      <div className="w-4 h-4 flex-shrink-0">
                        <img
                          src="/images/ai-solutions.svg"
                          alt="AI Solution"
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <p className="text-xs sm:text-sm font-bold text-white mb-1">
                        AI Solution
                      </p>
                    </div>
                    <p className="text-xs sm:text-sm text-[#94A3B8]">
                      {story.solution}
                    </p>
                  </div>

                  {/* Results */}
                  <div className="items-start gap-3">
                    <div className="flex gap-3 my-3">
                      <div className="w-4 h-4 flex-shrink-0">
                        <img
                          src="/images/results-ai.svg"
                          alt="Results"
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <p className="text-xs sm:text-sm font-bold text-white mb-1">
                        Results
                      </p>
                    </div>
                    <ul className="text-xs sm:text-sm text-[#94A3B8] space-y-1">
                      {story.results.map((item, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 bg-[#95B445] rounded-full flex-shrink-0"></div>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
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
      <section className="py-7 sm:py-20 px-4 sm:px-6 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6 sm:mb-12">
            <h2 className="text-[24px] sm:text-4xl font-bold mb-2 sm:mb-4">
              <span className="text-white">Implementation</span>
              <br />
              <span className="text-[#799B4B]">Models & Pricing</span>
            </h2>
            <p className="text-[#94A3B8] max-w-2xl text-sm sm:text-[18px] mx-auto">
              Flexible engagement models designed to align with your
              organization's goals, risk tolerance, and budget requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {pricingModels.map((model) => (
    <div
      key={model.id}
      className="border border-gray-800 p-4 md:p-8 w-full max-w-[424px] mx-auto transition-all duration-300 hover:bg-[#85A64719] flex flex-col justify-between"
      style={{
        minHeight: "400px",
        borderRadius: "12px",
        backgroundColor: "#0C0E12B2",
      }}
    >
      {/* Icon */}
      <div className="flex justify-center mb-2 sm:mb-6">
        <div
          className={`sm:w-16 w-10 h-10 sm:h-16 rounded-lg flex items-center justify-center ${
            model.iconBg || ""
          }`}
        >
          {model.iconType === "svg" ? (
            model.iconSvg
          ) : (
            <Image
              src={model.iconSrc || "/images/default-icon.svg"}
              alt={model.title}
              width={64}
              height={64}
            />
          )}
        </div>
      </div>

      {/* Title & Subtitle */}
      <h3 className="text-lg sm:text-[24px] font-semibold text-white sm:mb-2 text-center">
        {model.title}
      </h3>
      <p className="text-[#94A3B8] text-xs sm:text-sm mb-3 sm:mb-6 text-center">
        {model.subtitle}
      </p>

      {/* Highlight */}
      <div className="text-center mb-3 sm:mb-6">
        <div
          className="text-2xl md:text-3xl font-bold sm:mb-2"
          style={{ color: "#95B445" }}
        >
          {model.highlight}
        </div>
        <p className="text-xs md:text-sm text-[#94A3B8]">{model.description}</p>
      </div>

      {/* What's Included */}
      <div className="mb-6">
        <p className="text-xs md:text-[16px] font-bold text-white mb-3">
          What's Included
        </p>
        <ul className="text-xs md:text-sm text-[#94A3B8] space-y-2">
          {model.included.map((item, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <Image
                height={20}
                width={20}
                src="/images/tick-icon-small.svg"
                alt="tick"
                className="w-5 h-5"
              />
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Key Benefits */}
      <div className="mb-6">
        <p className="text-xs md:text-sm font-bold text-white mb-3">
          Key Benefits
        </p>
        <ul className="text-xs md:text-sm text-[#94A3B8] space-y-2">
          {model.benefits.map((item, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <Image
                height={20}
                width={20}
                src="/images/star-icon-small.svg"
                alt="star"
                className="w-5 h-5"
              />
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Best For */}
      <div className="mb-6">
        <p className="text-xs md:text-sm font-bold text-white mb-2">Best For</p>
        <p className="text-xs md:text-sm text-[#94A3B8]">{model.bestFor}</p>
      </div>

      {/* Button */}
      <div className="w-full flex justify-center mt-auto">
        <CustomButton
          backgroundColor="#4A6F3E"
          hoverBackgroundColor="#3d5a33"
          iconPosition="right"
          className="w-full mt-auto py-2 px-6 font-medium rounded-lg"
          icon={
            <img
              src="/images/arrow-icon.svg"
              alt="Arrow"
              className="filter brightness-0 invert"
            />
          }
        >
          Learn More
        </CustomButton>
      </div>
    </div>
  ))}
</div>

        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-7 sm:py-20 px-6 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6 sm:mb-12">
            <h2 className=" text-lg sm:text-[29px] font-bold mb-4 text-white">
              Implementation <span style={{ color: "#8EAE47" }}>Process</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Discovery & Assessment */}
            <div className="text-center">
              <div className="sm:w-16 w-14 h-14 sm:h-16 bg-gradient-to-r from-[#799B4B] to-[#4A6F3E] rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg
                  className="sm:w-8 w-6 h-6 sm:h-8 text-white"
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
              <h3 className="font-semibold  mb-1 sm:mb-2 text-sm sm:text-[16px]">
                Discovery & Assessment
              </h3>
              <p className="text-[#94A3B8] text-xs  sm:text-[13px] mb-4">
                Comprehensive analysis of your current workflows and systems.
              </p>
              <div className="flex items-center justify-center mx-auto rounded-full w-[94px] h-[22px]  border border-[#2D3339] space-x-2">
                <Image
                  height={100}
                  width={100}
                  src="/images/time-icon.svg"
                  alt="Prior Authorization AI"
                  className=" w-3 h-3"
                />
                <span className="text-xs text-[#627084]">1-2 weeks</span>
              </div>
            </div>

            {/* Custom AI Configuration */}
            <div className="text-center">
              <div className="sm:w-16 w-14 h-14 sm:h-16 bg-gradient-to-r from-[#799B4B] to-[#4A6F3E] rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg
                  className="sm:w-8 w-6 h-6 sm:h-8 text-white"
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
              <h3 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-[16px]">
                Custom AI Configuration
              </h3>
              <p className="text-[#94A3B8] text-xs  sm:text-[13px] mb-4">
                Tailored AI agent setup based on your specific requirements.
              </p>

              <div className="flex items-center justify-center mx-auto rounded-full w-[94px] h-[22px]  border border-[#2D3339] space-x-2">
                <Image
                  height={100}
                  width={100}
                  src="/images/time-icon.svg"
                  alt="Prior Authorization AI"
                  className=" w-3 h-3"
                />
                <span className="text-xs text-[#627084]">2-3 weeks</span>
              </div>
            </div>

            {/* Integration & Testing */}
            <div className="text-center">
              <div className="sm:w-16 w-14 h-14 sm:h-16 bg-gradient-to-r from-[#799B4B] to-[#4A6F3E] rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg
                  className="sm:w-8 w-6 h-6 sm:h-8 text-white"
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
              <h3 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-[16px]">
                Integration & Testing
              </h3>
              <p className="text-[#94A3B8] text-xs  sm:text-[13px] mb-4">
                Seamless integration with your existing EHR and systems.
              </p>

              <div className="flex items-center justify-center mx-auto rounded-full w-[94px] h-[22px]  border border-[#2D3339] space-x-2">
                <Image
                  height={100}
                  width={100}
                  src="/images/time-icon.svg"
                  alt="Prior Authorization AI"
                  className=" w-3 h-3"
                />
                <span className="text-xs text-[#627084]">1-2 weeks</span>
              </div>
            </div>

            {/* Go-Live & Optimization */}
            <div className="text-center ">
              <div className="sm:w-16 w-14 h-14 sm:h-16 bg-gradient-to-r from-[#799B4B] to-[#4A6F3E] rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg
                  className="sm:w-8 w-6 h-6 sm:h-8 text-white"
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
              <h3 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-[16px]">
                Go-Live & Optimization
              </h3>
              <p className="text-[#94A3B8] text-xs  sm:text-[13px] mb-4">
                Launch with continuous monitoring and optimization.
              </p>
              <div className="flex items-center justify-center mx-auto rounded-full w-[87px] h-[22px]  border border-[#2D3339] space-x-2">
                <Image
                  height={100}
                  width={100}
                  src="/images/time-icon.svg"
                  alt="Prior Authorization AI"
                  className=" w-3 h-3"
                />
                <span className="text-xs text-[#627084]">Ongoing</span>
              </div>
            </div>
          </div>

          {/* Implementation Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center mb-7 sm:mb-12">
            <div>
              <div
                className="text-lg sm:text-[27px] font-bold sm:mb-2"
                style={{ color: "#8EAE47" }}
              >
                4-6 weeks
              </div>
              <div className="text-[#94A3B8] text-xs sm:text-[13px]">
                Average Implementation
              </div>
            </div>
            <div>
              <div
                className="text-lg sm:text-[27px] font-bold sm:mb-2"
                style={{ color: "#8EAE47" }}
              >
                99.9%
              </div>
              <div className="text-[#94A3B8] text-xs sm:text-[13px]">
                Success Rate
              </div>
            </div>
            <div>
              <div
                className="text-lg sm:text-[27px] font-bold sm:mb-2"
                style={{ color: "#8EAE47" }}
              >
                24/7
              </div>
              <div className="text-[#94A3B8] text-xs sm:text-[13px]">
                Support
              </div>
            </div>
            <div>
              <div
                className="text-lg sm:text-[27px] font-bold sm:mb-2"
                style={{ color: "#8EAE47" }}
              >
                SOC 2
              </div>
              <div className="text-[#94A3B8] text-xs sm:text-[13px]">
                Compliant
              </div>
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
      <section className=" pt-9 pb-7 px-4 sm:px-6 sm:pt-18 sm:pb-12 ">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-7 text-balance">
            Deploy Your {}
            <span
              className="text-transparent"
              style={{
                background: "linear-gradient(90deg, #799B4B 0%, #B3D336 100%)",

                backgroundClip: "text",

                WebkitBackgroundClip: "text",
              }}
            >
              AI Workforce
            </span>
          </h2>

          <p className="text-[#9096A2] text-[12px] sm:text-xl max-w-2xl mx-auto mb-11">
            Join leading healthcare practices already seeing measurable results
            with AI workforce automation.
          </p>

          <div className="flex flex-row flex-wrap gap-4 md:gap-6 justify-center items-stretch w-full  sm:max-w-none mx-auto mb-7 sm:mb-16">
            <Button
              onClick={() => console.log("Clicked")}
              className="flex-1 min-w-[140px] md:flex-none md:w-[251px] bg-gradient-to-r from-[#799B4B] to-[#4A6F3E] hover:from-[#3d5a33] hover:to-[#799B4B] text-white cursor-pointer min-h-[44px] !px-8 py-3 text-[12px] sm:text-lg rounded-lg flex items-center justify-center"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>

            <Button
              className="flex-1 min-w-[140px] border md:flex-none md:w-[201px] border-[#799B4B33] cursor-pointer min-h-[44px] text-white hover:bg-white hover:text-black px-8 py-3 text-[12px] sm:text-lg rounded-lg transition-colors duration-500 bg-transparent flex items-center justify-center"
              onClick={() => {
                const link = document.createElement("a");
                link.href = ownerDetail.calendlyLink;
                link.target = "_blank";
                link.rel = "noopener noreferrer";
                link.click();
              }}
            >
              Schedule Demo
            </Button>
          </div>

          {/* Certification Badges */}

          <section className="mb-3 sm:mb-0 ">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-wrap  justify-center items-center  gap-4 sm:gap-8">
                <div className="flex items-center gap-[6px] min-w-[136px] sm:min-w-[0px]">
                  <img
                    src="/Hippa-small-icon.svg"
                    alt="HIPAA Compliant"
                    className="w-[22px] h-[22px] "
                  />

                  <span className="text-[#9096A2] text-[10px] sm:text-[14px]">
                    HIPAA Compliant
                  </span>
                </div>

                <div className="flex items-center gap-[6px] min-w-[136px] sm:min-w-[0px]">
                  <img
                    src="/Soc-small-icon.svg"
                    alt="SOC 2 Type II"
                    className="w-[22px] h-[22px] "
                  />

                  <span className="text-[#9096A2] text-[10px] sm:text-[14px] ">
                    SOC 2 Type II
                  </span>
                </div>

                <div className="flex items-center gap-[6px] min-w-[136px] sm:min-w-[0px]">
                  <img
                    src="/Google-small-icon.svg"
                    alt="Google for Startups"
                    className="w-[22px] h-[22px] "
                  />

                  <span className="text-[#9096A2] text-[10px] sm:text-[14px]">
                    Google Partner
                  </span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
