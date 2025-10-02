"use client";

import { useState, useRef } from "react";

import { useEffect } from "react";

import { Button } from "@/components/ui/button";

import { ownerDetail } from "@/utils/constants";

import {
  ChevronRight,
  Shield,
  CheckCircle,
  Award,
  Building2,
  Stethoscope,
  Building,
  ChevronDown,
  ArrowRight,
} from "lucide-react";

import Image from "next/image";

import { cards } from "../utils/cards";

import { cardDetails } from "../utils/constants";

import { CustomButton } from "@/components/ui/custom-button";

import { faqs } from "../utils/constants";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("medical");

  const [selectedCard, setSelectedCard] = useState("visit");

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const details = document.querySelectorAll("details");

    details.forEach((targetDetail) => {
      targetDetail.addEventListener("toggle", () => {
        if (targetDetail.open) {
          details.forEach((detail) => {
            if (detail !== targetDetail) {
              detail.removeAttribute("open");
            }
          });
        }
      });
    });
  }, []);

  const containerRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // If click is outside the container, close all

      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setActiveIndex(null);
      }
    };

    document.addEventListener("click", handleClickOutside); // use "click" instead of "mousedown"

    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="min-h-screen bg-[#07090D] text-white ">
      {/* Hero Section with Background */}

      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/flowing-lines-bg.svg"
            alt=""
            fill
            className="object-contain object-center"
            priority
          />
        </div>

        {/* Hero Section */}

        <main className="relative z-10 flex flex-col items-center  min-h-[40vh] px-4 md:px-6 text-center pt-15 md:pt-[93px]">
          <div className="max-w-6xl mx-auto">
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-[1.1] break-words">
                <span className="text-white">AI Workforce For</span>

                <br />

                <span
                  className="text-transparent"
                  style={{
                    background:
                      "linear-gradient(90deg, #59804C 0%, #B3D336 50%, rgba(251, 208, 81, 0.09) 100%)",

                    backgroundClip: "text",

                    WebkitBackgroundClip: "text",
                  }}
                >
                  Healthcare Outcomes
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-18 max-w-[650px]  mx-auto font-light leading-tight break-words">
                One platform. Infinite scale. Measurable outcomes for any
                healthcare organization.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row sm:flex-wrap md:flex-wrap lg:flex-row md:gap-6 gap-4 justify-center items-stretch w-full max-w-[320px] mx-auto sm:max-w-none mb-8 sm:mb-23">
              <Button className="w-full sm:w-[260px] md:w-[291px] lg:w-[269px] bg-[#4A6F3E] cursor-pointer hover:bg-[#5A7F4E] text-[#FAFAFA] px-4 sm:px-8 py-2 sm:py-3 text-sm sm:text-lg rounded-lg flex items-center min-h-[44px] justify-center shadow-[0_0_30px_rgba(74,111,62,0.6)] hover:shadow-[0_0_40px_rgba(74,111,62,0.8)] transition-all duration-300 border border-[#4A6F3E]/50">
                <span className="truncate sm:max-w-none sm:whitespace-normal">
                  For Medical Practices
                </span>

                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>

              <Button className="w-full sm:w-[260px] md:w-[291px] lg:w-[291px]  bg-[#FCFCFC] cursor-pointer text-[#171D26] hover:bg-gray-100 px-4 sm:px-8 py-2 text-sm sm:text-lg rounded-lg flex items-center min-h-[44px] justify-center shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:shadow-[0_0_40px_rgba(255,255,255,0.6)] transition-all duration-300 border border-white/30">
                <span className="truncate sm:max-w-none sm:whitespace-normal">
                  For Enterprise Practices
                </span>

                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>

              <Button className="w-full sm:w-[260px] md:w-[291px] lg:w-[219px] bg-[#B7E6FA] cursor-pointer hover:bg-[#B7E6FA]/90 text-[#171D26] px-4 sm:px-8 py-2 text-sm sm:text-lg rounded-lg flex items-center min-h-[44px] justify-center shadow-[0_0_30px_rgba(96,165,250,0.5)] hover:shadow-[0_0_40px_rgba(96,165,250,0.7)] transition-all duration-300 border border-blue-300/40">
                <span className=" truncate sm:max-w-none sm:whitespace-normal">
                  For Enterprises
                </span>

                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            <div className="text-center">
              <p className="text-[#9096A2] text-base font-light">
                Trusted by Healthcare Organizations Worldwide
              </p>
            </div>
          </div>

          <section className="md:pt-11 pt-6 ">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-wrap  justify-center items-center  gap-4 sm:gap-8">
                <div className="flex items-center space-x-3 min-w-[136px] sm:min-w-[0px]">
                  <img
                    src="/Hippa-icon.svg"
                    alt="HIPAA Compliant"
                    className="w-8 h-8 sm:w-12 sm:h-12"
                  />

                  <span className="text-white text-[10px] sm:text-base">
                    HIPAA Compliant
                  </span>
                </div>

                <div className="flex items-center space-x-3 min-w-[136px] sm:min-w-[0px]">
                  <img
                    src="/Soc-icon.svg"
                    alt="SOC 2 Type II"
                    className="w-8 h-8 sm:w-12 sm:h-12"
                  />

                  <span className="text-white text-[10px] sm:text-base ">
                    SOC 2 Type II
                  </span>
                </div>

                <div className="flex items-center space-x-3 min-w-[136px] sm:min-w-[0px]">
                  <img
                    src="/Google-icon.svg"
                    alt="Google for Startups"
                    className="w-8 h-8 sm:w-12 sm:h-12"
                  />

                  <span className="text-white text-[10px] sm:text-base">
                    Google for Startups
                  </span>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* Compliance Section */}

      {/* What We Do Section */}

      <section className="sm:pt-22 pt-5  sm:pb-17 pb-6 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            What We Do
          </h2>

          <p
            className=" text-2xl sm:text-[30px] mb-6 text-transparent font-bold"
            style={{
              background: "linear-gradient(90deg, #799B4B 0%, #B0B733 100%)",

              backgroundClip: "text",

              WebkitBackgroundClip: "text",
            }}
          >
            - Eliminate overhead. Maximize revenue. Scale infinitely -
          </p>

          <p className=" text-[12px] sm:text-xl text-[#ABB0BA] mb-5 sm:mb-10 font-light">
            We deploy AI agents that automate your administrative workflows -
            claims processing, documentation, prior authorizations, and
            compliance - so your team focuses on patient<br></br> care while you
            capture measurable financial results."
          </p>

          {/* Tab Navigation */}

          <div
            className="p-1 sm:p-2 md:w-fit mx-auto flex overflow-x-auto scrollbar-hide"
            style={{
              borderRadius: "16px",

              border: "1px solid rgba(218, 231, 224, 0.20)",

              background: "linear-gradient(97deg, #1B1F22 0%, #1B1F22 100%)",

              backdropFilter: "blur(10px)",
            }}
          >
            <button
              onClick={() => setActiveTab("medical")}
              className={`px-3 cursor-pointer sm:px-6 md:px-8 py-3 sm:py-4 rounded-xl flex items-center space-x-2 sm:space-x-3 transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
                activeTab === "medical"
                  ? "bg-[#4A6F3E] text-white"
                  : "text-[#9096A2] hover:text-white"
              }`}
              style={
                activeTab === "medical"
                  ? { boxShadow: "0 0 32px 0 rgba(99, 233, 184, 0.30)" }
                  : {}
              }
            >
              <Stethoscope className="w-4 h-4 sm:w-5 sm:h-5" />

              <span className="font-medium text-sm sm:text-base">
                Medical Practices
              </span>
            </button>

            <button
              onClick={() => setActiveTab("enterprise")}
              className={`px-3 cursor-pointer sm:px-6 md:px-8 py-3 sm:py-4 rounded-xl flex items-center space-x-2 sm:space-x-3 transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
                activeTab === "enterprise"
                  ? "bg-[#4A6F3E] text-white"
                  : "text-[#9096A2] hover:text-white"
              }`}
              style={
                activeTab === "enterprise"
                  ? { boxShadow: "0 0 32px 0 rgba(99, 233, 184, 0.30)" }
                  : {}
              }
            >
              <Building2 className="w-4 h-4 sm:w-5 sm:h-5" />

              <span className="font-medium text-sm sm:text-base">
                Enterprise Practices
              </span>
            </button>

            <button
              onClick={() => setActiveTab("enterprises")}
              className={`px-3 cursor-pointer sm:px-6 md:px-8 py-3 sm:py-4 rounded-xl flex items-center space-x-2 sm:space-x-3 transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
                activeTab === "enterprises"
                  ? "bg-[#4A6F3E] text-white"
                  : "text-[#9096A2] hover:text-white"
              }`}
              style={
                activeTab === "enterprises"
                  ? { boxShadow: "0 0 32px 0 rgba(99, 233, 184, 0.30)" }
                  : {}
              }
            >
              <Building className="w-4 h-4 sm:w-5 sm:h-5" />

              <span className="font-medium text-sm sm:text-base">
                Enterprises
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* AI Features Section */}

      <section className=" px-4 sm:px-6">
        <div className="max-w-[1440px]   mx-auto">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-16 items-start">
            {/* LEFT SIDE - clickable cards */}

            <div className="w-full">
              <div className="flex flex-col space-y-3 sm:space-y-4 sm:pt-4 w-full">
                {cards.map((card) => (
                  <button
                    key={card.key}
                    onClick={() => setSelectedCard(card.key)}
                    className={`text-left w-full p-4 sm:p-5 md:p-6 items-start gap-4 rounded-lg cursor-pointer transition min-h-[88px] sm:min-h-[100px] ${
                      selectedCard === card.key
                        ? "border border-[#799B4B] bg-[#799B4B1A] shadow-[0_0_30px_rgba(74,111,62,0.6)] transition-all duration-300 scale-102 rounded-2xl"
                        : "bg-[#11131780] border border-[#21242C]"
                    }`}
                  >
                    {/* Header Row */}

                    <div className="flex items-center gap-2 md:gap-3">
                      <div
                        className={`w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-md text-xl text-white`}
                      >
                        <img
                          src={card.icon}
                          alt={card.title}
                          className="w-12 h-12"
                        />
                      </div>

                      <h3 className=" text-[10px] md:text-lg font-bold">
                        {card.title}
                      </h3>

                      {card.tag && (
                        <span className="ml-auto text-[8px] md:text-xs bg-[#1A1D23] px-2 md:px-3 py-1 rounded-full">
                          {card.tag}
                        </span>
                      )}
                    </div>

                    {/* Description + Highlight */}

                    <div className="md:pl-13">
                      <p className="text-[10px] sm:text-sm mt-2 text-[#9096A2] line-clamp-2 ">
                        {card.description}
                      </p>

                      {card.highlight && (
                        <p className="text-[#799B4B] sm:text-sm text-[10px] mt-1 line-clamp-2 ">
                          {card.highlight}
                        </p>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* RIGHT SIDE - dynamic details */}

            {(() => {
              const currentCard = cards.find((c) => c.key === selectedCard);

              return (
                <div className="sm:pt-4 lg:sticky lg:top-20">
                  <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden">
                    {/* ------------Code Editor Header----------------- */}

                    <div className="bg-gray-800 px-4 py-3 flex items-center justify-between border-b border-gray-700">
                      <div className="flex items-center space-x-2">
                        <div className="flex space-x-1">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>

                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>

                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>

                        <span className="text-[#9096A2] text-[8px] md:text-sm ml-3 sm:ml-4">
                          {currentCard?.subtitle}-demo.js
                        </span>
                      </div>

                      <span className="text-[#9096A2] text-[8px] sm:text-sm">
                        API v2.0
                      </span>
                    </div>

                    {/* Code Content (Dynamic) */}

                    <div className=" p-3 md:p-6 font-mono text-sm">
                      <div>{selectedCard && cardDetails[selectedCard]}</div>
                    </div>

                    {/* Status Bar */}

                    <div className="bg-gray-800 px-4 py-3 border-t border-gray-700 flex items-center justify-between">
                      <div className="flex items-center gap-2 md:space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>

                        <span className="text-green-400 text-[8px] md:text-sm">
                          Live API
                        </span>
                      </div>

                      <div className="flex items-center gap-2 md:space-x-6 text-[8px] md:text-sm text-[#9096A2]">
                        <span>Response: 55ms</span>

                        <span>Uptime: 99.9%</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      </section>

      <section className="w-full max-w-[1440px] mx-auto flex px-4 sm:px-6 md:pl-15 ">
  <div className="relative inline-block">
    <button
      className="
        peer
        bg-[#4A6F3E] cursor-pointer hover:bg-[#3d5a33]
        mt-6 md:mt-16
        text-white
        px-3 py-2 sm:px-5 sm:py-2.5 md:px-8 md:py-3
        rounded-xl flex items-center justify-start
        text-xs sm:text-sm md:text-[13px] lg:text-[14px]
        h-9 sm:h-10 md:h-11
      "
    >
      <span
        className="
          block truncate overflow-hidden whitespace-nowrap
          max-w-[120px] sm:max-w-[160px] md:max-w-[220px] lg:max-w-[340px]
        "
      >
        Learn More About Medical Practices
      </span>

      <img
        src="/images/arrow-icon.svg"
        alt="Arrow"
        className="filter brightness-0 invert w-3 h-3 sm:w-4 sm:h-4 ml-2 shrink-0"
      />
    </button>

    {/* Tooltip (mobile only) */}
    <div
      className="
        absolute bottom-10
        opacity-0 translate-y-3 pointer-events-none
        max-sm:peer-hover:opacity-100 max-sm:peer-hover:translate-y-0
        max-sm:peer-focus:opacity-100 max-sm:peer-focus:translate-y-0
        bg-[#4A6F3E]/80 backdrop-blur-md text-white text-[10px]
        px-3 py-2 rounded-lg shadow-lg shadow-[#4A6F3E]/50
        whitespace-nowrap z-[9999]
        transition-all duration-300 ease-in-out
      "
      style={{ left: "50%", transform: "translateX(-50%)" }}
    >
      Learn More About Medical Practices
      <span className="absolute left-1/2 -bottom-1 w-2 h-2 bg-[#4A6F3E]/80 rotate-45 -translate-x-1/2" />
    </div>
  </div>
</section>


      {/* Future of Healthcare Section */}
      <section className="sm:py-20 py-10 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}

          <div className="text-center mb-7 sm:mb-16">
            <div className="text-[12px] text-[#799B4B] border border-[#799B4B33] px-3 py-1 rounded-full mb-4 w-fit mx-auto">
              Why Choose Curie AI
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-[#FAFAFA] text-balance">
              The Future of Healthcare{" "}
            </h2>

            <div
              className="text-transparent font-bold md-text-5xl text-4xl mb-6"
              style={{
                background: "linear-gradient(90deg, #799B4B 0%, #B3D336 100%)",

                backgroundClip: "text",

                WebkitBackgroundClip: "text",
              }}
            >
              Operations is Here
            </div>

            <p className="text-[#ABB0BA] text-[12px] sm:text-[20px] max-w-3xl mx-auto text-balance">
              We don't just provide AI tools — we deliver a complete AI
              workforce that transforms how healthcare practices operate and
              scale.
            </p>
          </div>

          {/* Features Grid */}

          <div className="grid md:grid-cols-2 gap-8 mb-7 sm:mb-20">
            {/* AI-First Approach */}

            <div className="bg-[#11131780] justify-center items-center text-center sm:text-start   backdrop-blur-sm border border-[#21242C] rounded-2xl p-3 sm:p-11">
              <img
                className="mb-4 mx-auto sm:mx-0   md:mb-12"
                src="/approach.svg"
                alt=""
              />

              <h3 className="text-2xl font-semibold text-[#FAFAFA] mb-4">
                AI-First Approach
              </h3>

              <p className="text-[#ABB0BA] leading-relaxed">
                Built from the ground up with AI at the core, not as an
                afterthought. Every process is optimized for intelligent
                automation.
              </p>
            </div>

            {/* Instant Deployment */}

            <div className="bg-[#11131780] justify-center items-center text-center sm:text-start backdrop-blur-sm border border-[#21242C] rounded-2xl p-3 sm:p-11">
              <img
                className="mb-4 mx-auto sm:mx-0 md:mb-12"
                src="/instant.svg"
                alt=""
              />

              <h3 className="text-2xl font-semibold text-[#FAFAFA] mb-4">
                Instant Deployment
              </h3>

              <p className="text-[#ABB0BA] leading-relaxed">
                Deploy AI workforce in minutes, not months. Our modular approach
                means immediate results without lengthy implementations.
              </p>
            </div>

            {/* Enterprise Security */}

            <div className="bg-[#11131780] justify-center items-center text-center sm:text-start backdrop-blur-sm border border-[#21242C] rounded-2xl p-3 sm:p-11">
              <img
                className="mb-4 mx-auto sm:mx-0 md:mb-12"
                src="/security.svg"
                alt=""
              />

              <h3 className="text-2xl font-semibold text-[#FAFAFA] mb-4">
                Enterprise Security
              </h3>

              <p className="text-[#ABB0BA] leading-relaxed">
                SOC2, HIPAA, and ISO 27001 compliant with enterprise-grade
                security. Your data is protected at the highest levels.
              </p>
            </div>

            {/* Measurable Outcomes */}

            <div className="bg-[#11131780] justify-center items-center text-center sm:text-start backdrop-blur-sm border border-[#21242C] rounded-2xl p-3 sm:p-11">
              <img
                className="mb-4 mx-auto sm:mx-0 md:mb-12"
                src="/outcomes.svg"
                alt=""
              />

              <h3 className="text-2xl font-semibold text-[#FAFAFA] mb-4">
                Measurable Outcomes
              </h3>

              <p className="text-[#ABB0BA] leading-relaxed">
                Track real ROI with detailed analytics. Our AI delivers
                measurable improvements in revenue, efficiency, and patient
                satisfaction.
              </p>
            </div>
          </div>

          {/* Bottom Section */}

          <div className="text-center">
            <p className="text-[#9096A2] sm:text-[14px] mb-7">
              Backed by leading investors and trusted by healthcare
              organizations nationwide
            </p>

            {/* Certification Badges */}

            <section className="">
              <div className="max-w-6xl mx-auto">
                <div className="flex flex-wrap  justify-center items-center  gap-4 sm:gap-8">
                  <div className="flex items-center space-x-3 min-w-[136px] sm:min-w-[0px]">
                    <img
                      src="/Hippa-icon.svg"
                      alt="HIPAA Compliant"
                      className="w-8 h-8 sm:w-12 sm:h-12"
                    />

                    <span className="text-white text-[10px] sm:text-base">
                      HIPAA Compliant
                    </span>
                  </div>

                  <div className="flex items-center space-x-3 min-w-[136px] sm:min-w-[0px]">
                    <img
                      src="/Soc-icon.svg"
                      alt="SOC 2 Type II"
                      className="w-8 h-8 sm:w-12 sm:h-12"
                    />

                    <span className="text-white text-[10px] sm:text-base ">
                      SOC 2 Type II
                    </span>
                  </div>

                  <div className="flex items-center space-x-3 min-w-[136px] sm:min-w-[0px]">
                    <img
                      src="/Google-icon.svg"
                      alt="Google for Startups"
                      className="w-8 h-8 sm:w-12 sm:h-12"
                    />

                    <span className="text-white text-[10px] sm:text-base">
                      Google for Startups
                    </span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

      {/* FAQ Section */}

      <section className="sm:py-20 px-4 sm:px-6" ref={containerRef}>
        <div className="max-w-4xl mx-auto">
          {/* Header */}

          <div className="text-center mb-7 sm:mb-16">
            <p className="text-[#799B4B] sm:text-sm text-xs rounded-full px-3 py-1 w-fit mx-auto border border-[#799B4B33] tracking-wider mb-4">
              Frequently Asked Questions
            </p>

            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 text-balance">
              Everything You Need{" "}
              <div
                style={{
                  background:
                    "linear-gradient(90deg, #799B4B 0%, #B3D336 100%)",

                  backgroundClip: "text",

                  WebkitBackgroundClip: "text",
                }}
                className="text-transparent"
              >
                to Know About Curie AI
              </div>
            </h2>

            <p className="text-[#ABB0BA] text-[12px] sm:text-xl max-w-3xl mx-auto">
              Get answers to common questions about implementation, security,
              integrations, and expected outcomes
            </p>
          </div>

          {/* FAQ Accordion */}

          <div className="space-y-4 sm:pb-16">
            {faqs.map((faq, idx) => {
              const isActive = activeIndex === idx;

              return (
                <div
                  key={idx}
                  className="border border-[#21242C] rounded-xl bg-[#111317CC] overflow-hidden"
                >
                  <button
                    className="flex items-center justify-between w-full p-3  sm:p-6 cursor-pointer text-left"
                    onClick={() =>
                      setActiveIndex(activeIndex === idx ? null : idx)
                    }
                  >
                    <span className="text-[#FAFAFA] text-[12px] sm:text-lg font-medium truncate md:overflow-visible md:whitespace-normal">
                      {faq.question}
                    </span>

                    <ChevronDown
                      className={`w-5 h-5 text-[#FAFAFA] transition-transform duration-300 ${
                        isActive ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`px-3 sm:px-6  text-[12px] sm:text-lg text-[#ABB0BA] leading-relaxed overflow-hidden transition-[max-height] duration-500 ease-in-out`}
                    style={{
                      maxHeight: isActive ? "500px" : "0px",
                    }}
                  >
                    <div className="pb-6 text-[12px] sm:text-lg text-[#ABB0BA] leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Contact Section */}

          {/* Contact Section */}

          <div className="text-center sm:mt-16 mt-7 mb-3 sm:mb-0 text-[12px] sm:text-[16px]">
            <p className="text-[#9096A2] mb-2">
              Have more questions? We're here to help.
            </p>

            <a
              href={`mailto:${ownerDetail.email}`}
              className="text-[#799B4B] hover:text-[#5A7F4E] transition-colors"
            >
              {ownerDetail.email}
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}

      <section className="sm:py-25 py-5 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-7 text-balance">
            Ready to{" "}
            <span
              className="text-transparent"
              style={{
                background: "linear-gradient(90deg, #799B4B 0%, #B3D336 100%)",

                backgroundClip: "text",

                WebkitBackgroundClip: "text",
              }}
            >
              5x Your Practice Profits?
            </span>
          </h2>

          <p className="text-[#9096A2] text-[12px] sm:text-xl max-w-2xl mx-auto mb-11">
            Join hundreds of practices already using AI to streamline
            operations, increase revenue, and improve patient outcomes
          </p>

          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 sm:mb-16"> */}

          <div className="flex flex-row flex-wrap gap-4 md:gap-6 justify-center items-stretch w-full max-w-[320px] sm:max-w-none mx-auto mb-8 sm:mb-23">
            <Button className="flex-1 min-w-[140px] md:flex-none md:w-[251px] bg-gradient-to-r from-[#799B4B] to-[#4A6F3E] hover:from-[#3d5a33] hover:to-[#799B4B] text-white cursor-pointer min-h-[44px] !px-8 py-3 text-[12px] sm:text-lg rounded-lg flex items-center justify-center">
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>

            <Button
              variant="outline"
              className="flex-1 min-w-[140px] md:flex-none md:w-[201px] border-[#799B4B33] cursor-pointer min-h-[44px] text-white hover:bg-white hover:text-black px-8 py-3 text-[12px] sm:text-lg rounded-lg transition-colors duration-500 bg-transparent flex items-center justify-center"
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
                    Google for Startups
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
