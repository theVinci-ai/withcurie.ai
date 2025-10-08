import Link from "next/link";
import Image from "next/image";
import { footerLinks } from "../utils/constants";
export default function Footer() {
  return (
    <footer className="bg-[#D2D3CE] pt-16  relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-13">
        <div className="grid grid-cols-1 sm:grid-2 md:grid-cols-3 gap-8 justify-center ">
          {/* Company Info */}
          <div className="md:col-span-1">
            <Link
              href="/"
              className="inline-flex items-center mb-6 cursor-pointer"
            >
              <Image
                src="/logo.svg"
                alt="Curie AI"
                width={38}
                height={37}
                className="w-8 h-8"
              />
              <span className="text-[#0A0C10] text-xl font-bold ml-2">
                Curie AI
              </span>
            </Link>

            <p className="text-[#0A0C10] text-sm mb-6 md:pr-30 max-w-sm leading-relaxed">
              Transforming healthcare with AI-powered workforce solutions that
              deliver measurable outcomes for practices of all sizes.
            </p>
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-black text-xs text-[#0A0C10]">
              Backed by Google for Startups
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-[#0A0C10] font-bold mb-6">Solutions</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/medical-practices"
                  className="text-[#0A0C10] hover:text-black text-sm transition-colors"
                >
                  Medical Practices
                </Link>
              </li>
              <li>
                <Link
                  href="/enterprise-practices"
                  className="text-[#0A0C10] hover:text-black text-sm transition-colors"
                >
                  Enterprise Practices
                </Link>
              </li>
              <li>
                <Link
                  href="/enterprises"
                  className="text-[#0A0C10] hover:text-black text-sm transition-colors"
                >
                  Enterprises
                </Link>
              </li>
              <li>
                <span
                
                  className="text-[#0A0C10] hover:text-black text-sm transition-colors"
                >
                  Case Studies
                </span>
              </li>
            </ul>
          </div>
          {/* AI Products */}

          {/* Company */}
          <div>
            <h3 className="text-[#0A0C10] font-bold mb-6">Company</h3>
            <ul className="space-y-4">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    target={link.target || undefined}
                    className="text-[#0A0C10] hover:text-black text-sm transition-colors"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
        </div>
      </div>
      <div className="">
        {/* Bottom Section */}
        <div className="absolute bottom-0 w-full">
          <div className="backdrop-blur-[30px] hidden lg:flex bg-white/30 justify-between flex-row items-start md:items-center gap-4  absolute bottom-0 left-0 right-0 py-4 md:px-16 lg:px-32">
            <span className="mb-2 md:mb-0 ">
              © 2025 Curie AI. All rights reserved.
            </span>
            <span>Made with AI for Healthcare</span>
          </div>
        </div>
        <div className="flex flex-col-reverse items-center">
          {/* Image neeche aayegi */}
          <div className="overflow-hidden pt-3 lg:pt-8 ">
            <div className="items-center w-full max-w-[900px] mx-auto">
              <Image
                src="/images/footer-logo3.svg"
                alt="Curie AI"
                width={450}
                height={360}
                className="w-full -mb-6 sm:-mb-11 md:-mb-17 lg:-mb-2"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
