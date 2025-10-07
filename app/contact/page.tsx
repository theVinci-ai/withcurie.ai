"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/common/Button";
import { ButtonType } from "@/utils/commonTypes";
import { MdOutlineMailOutline, MdWatchLater } from "react-icons/md";
import { FiMapPin, FiPhone } from "react-icons/fi";
import { ArrowRight } from "lucide-react";
import { ownerDetail } from "@/utils/constants";
export default function ContactPage() {
  const contactRef = useRef(null);
  const isInView = useInView(contactRef, { once: true });

  return (
    <section
      ref={contactRef}
      className="min-h-screen bg-[#0A0A0A] text-white px-4 sm:px-6 pt-12 py-9 sm:py-12 sm:pb-20 flex flex-col items-center justify-center"
    >
      {/* Header */}
      <div className="text-center max-w-3xl mb-6 sm:mb-17">
        {" "}
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Let’s Talk About Your{" "}
          <span className="text-[#A1C45A]">AI Transformation</span>
        </h1>
        <p className="text-gray-400 text-sm md:text-base">
          Ready to reduce admin burden and increase outcomes? Our AI workforce
          specialists are here to design the perfect solution for your practice
          or enterprise.
        </p>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 w-full h-auto max-w-6xl items-start">
      {/* Left Form Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="lg:col-span-2 bg-[#0A0A0A] rounded-2xl p-4 sm:p-8 border border-[#6B95504D] self-start"
      >
        <h2 className="text-sm sm:text-xl font-semibold mb-6">
          Send us a message
        </h2>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
          {/* Full Name */}
          <div>
            <div className="text-[#D1D5DB] text-xs sm:text-[16px] mb-2">
              Full Name *
            </div>
            <input
              type="text"
              placeholder="Dr. johan doe"
              className="w-full h-[40px] bg-[#0A0A0A] placeholder:text-[#94A6B8] placeholder:text-xs sm:placeholder:text-sm border border-[#6B95504D] rounded-md px-3 text-sm text-gray-300  focus:outline-none focus:ring-2 focus:ring-[#799B4B] transition-all duration-300"
            />
          </div>

          {/* Email */}
          <div>
            <div className="text-[#D1D5DB] text-xs sm:text-[16px] mb-2">
              Email *
            </div>
            <input
              type="text"
              placeholder="johan.smith@gmail.com"
              className="w-full h-[40px] placeholder:text-[#94A6B8] placeholder:text-xs sm:placeholder:text-sm border border-[#6B95504D] rounded-md px-3 text-sm text-gray-300 bg-[#0A0A0A] focus:outline-none focus:ring-2 focus:ring-[#799B4B] transition-all duration-300"
            />
          </div>

          {/* Practice/Company */}
          <div>
            <div className="text-[#D1D5DB] text-xs sm:text-[16px] mb-2">
              Practice/Company *
            </div>
            <input
              type="text"
              placeholder="Smith Family Practice"
              className="w-full h-[40px] placeholder:text-[#94A6B8] placeholder:text-xs sm:placeholder:text-sm border border-[#6B95504D] rounded-md px-3 text-sm text-gray-300 bg-[#0A0A0A] focus:outline-none focus:ring-2 focus:ring-[#799B4B] transition-all duration-300"
            />
          </div>

          {/* Phone */}
          <div>
            <div className="text-[#D1D5DB] text-xs sm:text-[16px] mb-2">
              Phone *
            </div>
            <input
              type="text"
              placeholder="(555) 123-4678"
              className="w-full h-[40px] placeholder:text-[#94A6B8] placeholder:text-xs sm:placeholder:text-sm border border-[#6B95504D] rounded-md px-3 text-sm text-gray-300 bg-[#0A0A0A] focus:outline-none focus:ring-2 focus:ring-[#799B4B] transition-all duration-300"
            />
          </div>

          {/* Practice Type */}
          <div className="md:col-span-2">
            <div className="text-[#D1D5DB] text-xs sm:text-[16px] mb-2">
              Practice Type *
            </div>
            <select className="w-full mr-10 p-3 rounded-md bg-[#0A0A0A] text-[#94A6B8] border border-[#6B95504D] focus:ring-2 focus:ring-[#A1C45A] outline-none transition-all duration-300">
              <option value="" className="hover:bg-[#A1C45A]">Select practice type</option>
              <option value="Medical Practice">Medical Practice</option>
              <option value="Enterprise Practices">Enterprise Practices</option>
              <option value="enterprise">Enterprise</option>
            </select>
          </div>

          {/* Message */}
          <div className="md:col-span-2">
            <textarea
              rows={5}
              className="w-full bg-[#0A0A0A] placeholder:text-xs sm:placeholder:text-sm p-4 rounded-md text-gray-300 border border-[#6B95504D] placeholder:text-[#94A6B8] focus:ring-2 focus:ring-[#A1C45A] outline-none resize-none transition-all duration-300"
              placeholder="Tell us about your current challenges and goals..."
            />
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2">
            <Button
              type={ButtonType.Submit}
              onClick={() => console.log("Clicked")}
              className="w-auto bg-gradient-to-r from-[#799B4B] to-[#4A6F3E] hover:from-[#3d5a33] hover:to-[#799B4B] text-xs sm:text-sm  text-black font-semibold py-3 rounded-md transition-colors duration-300"
            >
              Send Message
            </Button>
          </div>
        </form>
      </motion.div>

      {/* Right Info Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="shadow-xl flex flex-col gap-8 self-start"
      >
        {/* Contact Info Card */}
        <div className="bg-[#0A0A0A] rounded-2xl p-4 sm:p-8 border border-[#6B95504D]">
          <h3 className="text-sm sm:text-lg font-semibold mb-3">Get in touch</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <div className="flex items-center gap-3">
                <MdOutlineMailOutline size={20} className="text-[#526C42]" />
                <div className="text-[#D1D5DB] text-xs sm:text-sm">Email</div>
              </div>
              <span className="text-white text-xs sm:text-[16px] pl-8">
                hello@withpractice.ai
              </span>
            </li>
            <li>
              <div className="flex items-center gap-3">
                <FiPhone size={20} className="text-[#526C42]" />
                <div className="text-[#D1D5DB] text-xs sm:text-sm">Phone</div>
              </div>
              <span className="text-white pl-8 text-xs sm:text-[16px]">
                +1 (555) 123-4567
              </span>
            </li>
            <li>
              <div className="flex items-center gap-3">
                <FiMapPin size={20} className="text-[#526C42]" />
                <div className="text-[#D1D5DB] text-xs sm:text-sm">Address</div>
              </div>
              <span className="text-white pl-8 text-xs sm:text-[16px]">
                San Francisco, CA
              </span>
            </li>
            <li>
              <div className="flex items-center gap-3">
                <MdWatchLater size={20} className="text-[#526C42]" />
                <div className="text-[#D1D5DB] text-xs sm:text-sm">Hours</div>
              </div>
              <span className="text-white pl-8 text-xs sm:text-[16px]">
                Mon–Fri: 9AM–6PM PST
              </span>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="bg-[#0A0A0A] rounded-2xl p-4 sm:p-8 border border-[#6B95504D]">
          <h3 className="text-sm sm:text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-[#D1D5DB] text-xs sm:text-[16px]">
            <li className="hover:text-[#A1C45A] cursor-pointer">
              Medical Practices Solutions
            </li>
            <li className="hover:text-[#A1C45A] cursor-pointer">
              Enterprise Practices Solutions
            </li>
            <li className="hover:text-[#A1C45A] cursor-pointer">
              Enterprise Solutions
            </li>
            <li className="hover:text-[#A1C45A] cursor-pointer">
              Schedule a Demo
            </li>
          </ul>
        </div>

        {/* Response Time */}
        <div className="bg-[#0A0A0A] rounded-2xl p-4 sm:p-8 border border-[#6B95504D]">
          <h3 className="text-sm sm:text-lg font-semibold mb-2">
            Response Time
          </h3>
          <p className="text-[#D1D5DB] text-xs sm:text-sm">
            We typically respond within 24 hours. For urgent matters, please
            call our direct line.
          </p>
        </div>
      </motion.div>
    </div>
      <section className=" pt-9 sm:pt-18 sm:mb-12 ">
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

          <div className="flex flex-row flex-wrap gap-4 md:gap-6 justify-center items-stretch w-full  sm:max-w-none mx-auto mb-7 sm:mb-16">
            <Button   onClick={() => console.log("Clicked")}  className="flex-1 min-w-[140px] md:flex-none md:w-[251px] bg-gradient-to-r from-[#799B4B] to-[#4A6F3E] hover:from-[#3d5a33] hover:to-[#799B4B] text-white cursor-pointer min-h-[44px] !px-8 py-3 text-[12px] sm:text-lg rounded-lg flex items-center justify-center">
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
                    Google for Startups
                  </span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </section>
  );
}
