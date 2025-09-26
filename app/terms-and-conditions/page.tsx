import Image from 'next/image';
import Link from 'next/link';

export default function TermsAndConditionsPage() {
  return (
    <div className='min-h-screen justify-center text-center bg-white'>
      {/* Main Content */}
      <main className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <div className='prose prose-lg max-w-none'>
          <h1 className='text-4xl font-bold text-[#0A0C10] mb-8'>
            Terms & Conditions
          </h1>

          <div className='text-sm text-gray-600 mb-8'>
            Last updated: September 24, 2025
          </div>

          <div className='space-y-8 text-gray-700'>
            <section>
              <h2 className='text-2xl font-semibold text-[#0A0C10] mb-4'>
                Acceptance of Terms
              </h2>
              <p className='text-lg leading-relaxed'>
                By accessing and using Curie AI's services, you accept and agree
                to be bound by the terms and provision of this agreement. If you
                do not agree to abide by the above, please do not use this
                service.
              </p>
            </section>

            <section>
              <h2 className='text-2xl font-semibold text-[#0A0C10] mb-4'>
                Description of Service
              </h2>
              <p className='text-lg leading-relaxed mb-4'>
                Curie AI provides AI-powered healthcare workflow solutions
                including:
              </p>
              <ul className='list-disc list-inside space-y-2 text-lg'>
                <li>Visit AI - Patient summary generation</li>
                <li>Scribe AI - Medical note transcription and generation</li>
                <li>Coding AI - Medical code generation</li>
                <li>Billing AI - Claims processing and management</li>
                <li>Payment solutions - Patient payment processing</li>
              </ul>
            </section>

            <section>
              <h2 className='text-2xl font-semibold text-[#0A0C10] mb-4'>
                User Responsibilities
              </h2>
              <p className='text-lg leading-relaxed mb-4'>
                As a user of our services, you agree to:
              </p>
              <ul className='list-disc list-inside space-y-2 text-lg'>
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account credentials</li>
                <li>
                  Use the service in compliance with applicable laws and
                  regulations
                </li>
                <li>Not attempt to gain unauthorized access to our systems</li>
                <li>Report any security vulnerabilities or issues promptly</li>
              </ul>
            </section>

            <section>
              <h2 className='text-2xl font-semibold text-[#0A0C10] mb-4'>
                Healthcare Compliance
              </h2>
              <p className='text-lg leading-relaxed'>
                Curie AI operates in compliance with healthcare regulations
                including HIPAA. Users are responsible for ensuring their use of
                our services complies with all applicable healthcare laws and
                regulations in their jurisdiction.
              </p>
            </section>

            <section>
              <h2 className='text-2xl font-semibold text-[#0A0C10] mb-4'>
                Intellectual Property
              </h2>
              <p className='text-lg leading-relaxed'>
                All content, features, and functionality of Curie AI services
                are owned by Curie AI and are protected by international
                copyright, trademark, patent, trade secret, and other
                intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className='text-2xl font-semibold text-[#0A0C10] mb-4'>
                Limitation of Liability
              </h2>
              <p className='text-lg leading-relaxed'>
                Curie AI shall not be liable for any indirect, incidental,
                special, consequential, or punitive damages, including without
                limitation, loss of profits, data, use, goodwill, or other
                intangible losses, resulting from your use of the service.
              </p>
            </section>

            <section>
              <h2 className='text-2xl font-semibold text-[#0A0C10] mb-4'>
                Service Availability
              </h2>
              <p className='text-lg leading-relaxed'>
                We strive to maintain high service availability but do not
                guarantee uninterrupted access. We reserve the right to modify,
                suspend, or discontinue any part of our services with reasonable
                notice.
              </p>
            </section>

            <section>
              <h2 className='text-2xl font-semibold text-[#0A0C10] mb-4'>
                Termination
              </h2>
              <p className='text-lg leading-relaxed'>
                Either party may terminate this agreement at any time. Upon
                termination, your right to use the service will cease
                immediately, and we will delete your data in accordance with our
                data retention policies and applicable laws.
              </p>
            </section>

            <section>
              <h2 className='text-2xl font-semibold text-[#0A0C10] mb-4'>
                Contact Information
              </h2>
              <p className='text-lg leading-relaxed'>
                If you have any questions about these Terms & Conditions, please
                contact us:
              </p>
              <div className='mt-4 p-4 bg-gray-50 rounded-lg'>
                <p>
                  <strong>Email:</strong> legal@withpractice.ai
                </p>
                <p>
                  <strong>Address:</strong> Curie AI Legal Department
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
