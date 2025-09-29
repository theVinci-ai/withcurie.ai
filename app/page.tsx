"use client";
import { useState } from "react";
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
export default function HomePage() {
  const [activeTab, setActiveTab] = useState("medical");
  const [selectedCard, setSelectedCard] = useState("visit");

  return (
    <div className="min-h-screen bg-[#07090D] text-white overflow--hidden">
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

              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-10 max-w-xl mx-auto font-light leading-relaxed break-words">
                One platform. Infinite scale. Measurable outcomes for any
                healthcare organization.
              </p>
            </div>

            <div className="flex flex-col lg:flex-row md:gap-6 gap-4 justify-center items-center mb-23">
              <Button className="w-full sm:w-auto bg-[#4A6F3E] cursor-pointer hover:bg-[#5A7F4E] text-[#FAFAFA] !px-8 !py-3 text-lg rounded-lg flex items-center min-h-[44px] justify-center shadow-[0_0_30px_rgba(74,111,62,0.6)] hover:shadow-[0_0_40px_rgba(74,111,62,0.8)] transition-all duration-300 border border-[#4A6F3E]/50">
                <span className="block max-w-[150px] truncate sm:max-w-none sm:whitespace-normal">
                  For Medical Practices
                </span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>

              <Button className="w-full sm:w-auto bg-[#FCFCFC] cursor-pointer text-[#171D26] hover:bg-gray-100 !px-8 !py-3 text-lg rounded-lg flex items-center min-h-[44px] justify-center shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:shadow-[0_0_40px_rgba(255,255,255,0.6)] transition-all duration-300 border border-white/30">
                <span className="block max-w-[150px] truncate sm:max-w-none sm:whitespace-normal">
                  For Enterprise Practices
                </span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>

              <Button className="w-full sm:w-auto bg-[#B7E6FA] cursor-pointer hover:bg-[#B7E6FA]/90 text-[#171D26] !px-8 !py-3 text-lg rounded-lg flex items-center min-h-[44px] justify-center shadow-[0_0_30px_rgba(96,165,250,0.5)] hover:shadow-[0_0_40px_rgba(96,165,250,0.7)] transition-all duration-300 border border-blue-300/40">
                <span className="block max-w-[150px] truncate sm:max-w-none sm:whitespace-normal">
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
          <section className="py-13 px-6">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-17">
                <div className="flex items-center space-x-3">
                  <Shield className="w-12 h-12 text-[#16A249]" />
                  <span className="text-white text-base">HIPAA Compliant</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-12 h-12 text-blue-400" />
                  <span className="text-white text-base">SOC 2 Type II</span>
                </div>
                <div className="flex items-center space-x-3">
                  <img
                    src="/Google.svg"
                    alt="Google for Startups"
                    className="w-12 h-12"
                  />
                  <span className="text-white text-base">
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
      <section className="pt-22 pb-17 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What We Do
          </h2>
          <p
            className="text-3xl mb-6 text-transparent font-bold"
            style={{
              background: "linear-gradient(90deg, #799B4B 0%, #B0B733 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
            }}
          >
            - Eliminate overhead. Maximize revenue. Scale infinitely -
          </p>
          <p className="text-xl text-[#ABB0BA] mb-10 font-light">
            We deploy AI agents that automate your administrative workflows -
            claims processing, documentation, prior authorizations, and
            compliance - so your team focuses on patient care while you capture
            measurable financial results."
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
      <section className="px-6">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* LEFT SIDE - clickable cards */}
            <div className="space-y-4">
              {cards.map((card) => (
                <button
                  key={card.key}
                  onClick={() => setSelectedCard(card.key)}
                  className={`text-left p-3 md:p-6 items-start gap-4 rounded-lg cursor-pointer transition ${
                    selectedCard === card.key
                      ? "border border-[#799B4B] bg-[#799B4B1A] shadow-[0_0_30px_rgba(74,111,62,0.6)] transition-all duration-300 scale-102 rounded-2xl"
                      : "bg-[#0A0C10] border border-gray-700"
                  }`}
                >
                  {/* Header Row */}
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 flex items-center justify-center rounded-md text-xl text-white`}
                    >
                      <img
                        src={card.icon}
                        alt={card.title}
                        className="w-12 h-12"
                      />
                    </div>
                    <h3 className=" text-sm md:text-lg font-bold">{card.title}</h3>
                    {card.tag && (
                      <span className="ml-auto text-xs bg-gray-800 px-3 py-1 rounded-full">
                        {card.tag}
                      </span>
                    )}
                  </div>

                  {/* Description + Highlight */}
                  <div className="md:pl-13">
                    <p className="text-sm mt-2 text-[#9096A2] line-clamp-2 ">
                      {card.description}
                    </p>
                    {card.highlight && (
                      <p className="text-[#799B4B] text-sm mt-1 line-clamp-2 ">
                        {card.highlight}
                      </p>
                    )}
                  </div>
                </button>
              ))}
            </div>

            {/* RIGHT SIDE - dynamic details */}
            {(() => {
              const currentCard = cards.find((c) => c.key === selectedCard);
              return (
                <div className="sticky lg:top-20">
                  <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden">
                    {/* ------------Code Editor Header----------------- */}
                    <div className="bg-gray-800 px-4 py-3 flex items-center justify-between border-b border-gray-700">
                      <div className="flex items-center space-x-2">
                        <div className="flex space-x-1">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                        <span className="text-[#9096A2] text-[9px] md:text-sm ml-4">
                          {currentCard?.subtitle}-demo.js
                        </span>
                      </div>
                      <span className="text-[#9096A2] text-[9px] text-sm">API v2.0</span>
                    </div>

                    {/* Code Content (Dynamic) */}
                    <div className=" p-3 md:p-6 font-mono text-sm">
                      <div>{selectedCard && cardDetails[selectedCard]}</div>
                    </div>

                    {/* Status Bar */}
                    <div className="bg-gray-800 px-4 py-3 border-t border-gray-700 flex items-center justify-between">
                      <div className="flex items-center gap-2 md:space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-green-400 text-[9px] md:text-sm">Live API</span>
                      </div>
                      <div className="flex items-center gap-2 md:space-x-6 text-[9px] md:text-sm text-[#9096A2]">
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
      <div className="md:pt-16 pt-6 pl-6 md:pl-9 ">
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
            Learn More About Medical Practices
          </span>
        </CustomButton>
      </div>
      {/* Future of Healthcare Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="text-[12px] text-[#799B4B] border border-[#799B4B33] px-3 py-1 rounded-full mb-4 w-fit mx-auto">
              Why Choose Curie AI
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#FAFAFA] text-balance">
              The Future of Healthcare{" "}
            </h2>
            <div
              className="text-transparent font-bold md-text-5xl text-5xl mb-6"
              style={{
                background: "linear-gradient(90deg, #799B4B 0%, #B3D336 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
              }}
            >
              Operations is Here
            </div>
            <p className="text-[#ABB0BA] text-[20px] max-w-3xl mx-auto text-balance">
              We don't just provide AI tools — we deliver a complete AI
              workforce that transforms how healthcare practices operate and
              scale.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {/* AI-First Approach */}
            <div className="bg-[#11131780] backdrop-blur-sm border border-[#21242C] rounded-2xl p-5 md:p-11">
              <img className="mb-4 md:mb-12" src="/approach.svg" alt="" />
              <h3 className="text-2xl font-semibold text-[#FAFAFA] mb-4">
                AI-First Approach
              </h3>
              <p className="text-[#ABB0BA] leading-relaxed">
                Built from the ground up with AI at the core, not as an
                afterthought. Every function is designed to enhance and automate
                workflows.
              </p>
            </div>

            {/* Instant Deployment */}
            <div className="bg-[#11131780] backdrop-blur-sm border border-[#21242C] rounded-2xl p-11">
              <img className="mb-12" src="/instant.svg" alt="" />
              <h3 className="text-2xl font-semibold text-[#FAFAFA] mb-4">
                Instant Deployment
              </h3>
              <p className="text-[#ABB0BA] leading-relaxed">
                Deploy AI workforce solutions in minutes, not months. Our
                cloud-native architecture ensures seamless integration with
                existing systems.
              </p>
            </div>

            {/* Enterprise Security */}
            <div className="bg-[#11131780] backdrop-blur-sm border border-[#21242C] rounded-2xl p-11">
              <img className="mb-12" src="/security.svg" alt="" />
              <h3 className="text-2xl font-semibold text-[#FAFAFA] mb-4">
                Enterprise Security
              </h3>
              <p className="text-[#ABB0BA] leading-relaxed">
                Built with SOC2 Type II compliance with enterprise-grade
                security. Your data is protected at the highest levels.
              </p>
            </div>

            {/* Measurable Outcomes */}
            <div className="bg-[#11131780] backdrop-blur-sm border border-[#21242C] rounded-2xl p-11">
              <img className="mb-12" src="/outcomes.svg" alt="" />
              <h3 className="text-2xl font-semibold text-[#FAFAFA] mb-4">
                Measurable Outcomes
              </h3>
              <p className="text-[#ABB0BA] leading-relaxed">
                Track real ROI with comprehensive analytics. Our AI solutions
                deliver measurable improvements in efficiency and patient
                outcomes.
              </p>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="text-center">
            <p className="text-[#9096A2] mb-8">
              Backed by leading investors and trusted by healthcare
              organizations nationwide
            </p>

            {/* Certification Badges */}
            <div className="flex flex-wrap justify-center items-center gap-8">
              <div className="flex items-center space-x-2">
                <Shield className="w-8 h-8 text-[#16A249]" />
                <span className="text-gray-300 text-sm">HIPAA Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-8 h-8 text-blue-400" />
                <span className="text-gray-300 text-sm">SOC2 Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8  flex items-center justify-center">
                  <img src="/Google.svg" alt="Google for Startups" />
                </div>
                <span className="text-gray-300 text-sm">
                  Google for Startups
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-[#799B4B] text-sm rounded-full px-3 py-1 w-fit mx-auto border border-[#799B4B33]  tracking-wider mb-4">
              Frequently Asked Questions
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
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
            <p className="text-[#ABB0BA] text-xl max-w-3xl mx-auto ">
              Get answers to common questions about implementation, security,
              integrations, and expected outcomes
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {/* FAQ Item 1 */}
            <details className="group border border-[#21242C] rounded-xl bg-[#11131780] backdrop-blur-sm">
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <span className="text-[#FAFAFA] text-lg font-medium">
                  How quickly can Curie AI be implemented?
                </span>
                <ChevronDown className="w-5 h-5 text-[#FAFAFA] group-open:rotate-180 transition-transform duration-200" />
              </summary>
              <div className="px-6 pb-6 text-[#FAFAFA] leading-relaxed">
                Curie AI can be deployed within 24-48 hours for most healthcare
                organizations. Our cloud-native architecture allows for rapid
                integration with existing EHR systems including Epic, Cerner,
                and Allscripts. The implementation process includes data
                migration, staff training, and workflow optimization to ensure
                seamless adoption across your practice.
              </div>
            </details>

            {/* FAQ Item 2 */}
            <details className="group border border-[#21242C] rounded-xl bg-[#11131780] backdrop-blur-sm">
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <span className="text-[#FAFAFA] text-lg font-medium">
                  Is Curie AI HIPAA compliant and secure?
                </span>
                <ChevronDown className="w-5 h-5 text-[#FAFAFA] group-open:rotate-180 transition-transform duration-200" />
              </summary>
              <div className="px-6 pb-6 text-[#FAFAFA] leading-relaxed">
                Yes, Curie AI is fully HIPAA compliant and maintains SOC 2 Type
                II certification. We employ end-to-end encryption, multi-factor
                authentication, and regular security audits. All patient data is
                processed and stored in secure, HIPAA-compliant cloud
                infrastructure with 99.9% uptime guarantee and comprehensive
                backup systems.
              </div>
            </details>

            {/* FAQ Item 3 */}
            <details className="group border border-[#21242C] rounded-xl bg-[#11131780] backdrop-blur-sm">
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <span className="text-[#FAFAFA] text-lg font-medium">
                  What EHR systems does Curie AI integrate with?
                </span>
                <ChevronDown className="w-5 h-5 text-[#FAFAFA] group-open:rotate-180 transition-transform duration-200" />
              </summary>
              <div className="px-6 pb-6 text-[#FAFAFA] leading-relaxed">
                Curie AI integrates seamlessly with all major EHR systems
                including Epic, Cerner, Allscripts, athenahealth,
                eClinicalWorks, and NextGen. Our API-first approach ensures
                compatibility with custom and legacy systems. We also support
                HL7 FHIR standards for interoperability and can work with
                practice management systems like Kareo and DrChrono.
              </div>
            </details>

            {/* FAQ Item 4 */}
            <details className="group border border-[#21242C] rounded-xl bg-[#11131780] backdrop-blur-sm">
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <span className="text-[#FAFAFA] text-lg font-medium">
                  How much can I expect to save with Curie AI?
                </span>
                <ChevronDown className="w-5 h-5 text-[#FAFAFA] group-open:rotate-180 transition-transform duration-200" />
              </summary>
              <div className="px-6 pb-6 text-[#FAFAFA] leading-relaxed">
                Healthcare organizations typically see 30-50% reduction in
                administrative costs and 25% increase in revenue within the
                first 6 months. Our AI workforce eliminates the need for
                additional administrative staff, reduces claim denials by 90%,
                and increases patient throughput by optimizing scheduling and
                documentation workflows. ROI is typically achieved within 3-4
                months.
              </div>
            </details>

            {/* FAQ Item 5 */}
            <details className="group border border-[#21242C] rounded-xl bg-[#11131780] backdrop-blur-sm">
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <span className="text-[#FAFAFA] text-lg font-medium">
                  Do I need technical expertise to use Curie AI?
                </span>
                <ChevronDown className="w-5 h-5 text-[#FAFAFA] group-open:rotate-180 transition-transform duration-200" />
              </summary>
              <div className="px-6 pb-6 text-[#FAFAFA] leading-relaxed">
                No technical expertise is required. Curie AI is designed with
                healthcare professionals in mind, featuring an intuitive
                interface that integrates naturally into existing workflows. Our
                comprehensive training program includes hands-on sessions, video
                tutorials, and ongoing support. Most staff members become
                proficient within 2-3 days of training.
              </div>
            </details>

            {/* FAQ Item 6 */}
          </div>

          {/* Contact Section */}
          <div className="text-center mt-16">
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
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-7 text-balance">
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
          <p className="text-[#9096A2] text-xl max-w-2xl mx-auto mb-11">
            Join hundreds of practices already using AI to streamline
            operations, increase revenue, and improve patient outcomes
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button className="bg-gradient-to-r from-[#799B4B] to-[#4A6F3E] hover:from-[#3d5a33] hover:to-[#799B4B] text-white cursor-pointer min-h-[44px] !px-8 py-3 text-lg rounded-lg flex items-center">
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              variant="outline"
              className="border-[#799B4B33] cursor-pointer min-h-[44px] text-white hover:bg-white hover:text-black px-8 py-3 text-lg rounded-lg transition-all duration-300 bg-transparent"
              onClick={() => {
                // create a link and navigate to that
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
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-28 text-sm text-[#9096A2]">
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5" />
              <span>HIPAA Compliant</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5" />
              <span>SOC2 Type II</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-xs">G</span>
              </div>
              <span>Google Partner</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
