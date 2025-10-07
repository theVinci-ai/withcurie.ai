import Header from '@/components/header';
import Image from 'next/image';
import Link from 'next/link';

export default function PrivacyPolicyPage() {
  return (
    <div className='min-h-screen bg-[#07090D] overflow-x-hidden'>
      {/* Main Content */}
      <section className=''>
        <div className='max-w-[1000px] justify-center items-center text-center sm:text-start mx-auto px-3 sm:px-4 py-8 sm:py-16 break-words'>
          <h3 className='text-2xl sm:text-4xl text-white font-gilroy-semibold mb-4 sm:mb-8'>Privacy Policy</h3>
          <p className='text-[#D1D5DB]  mb-4 sm:mb-6'>Updated: March 20, 2025</p>
          <h3 className='text-xl sm:text-2xl text-white font-semibold mb-4 sm:mb-6'>
            Our Commitment to Your Privacy
          </h3>
          <p className='mb-6 text-[#D1D5DB]'>
            At Curie Health AI Inc. (&quot;Curie AI,&quot; &quot;we,&quot;
            &quot;our,&quot; or &quot;us&quot;), we understand the importance of
            privacy to our users. This Privacy Policy explains how we collect,
            use, protect, and share personal information when you interact with
            our AI powered practice management platform, EHR integration
            solution, AI health tools like scribe and medical coding agents, and
            related services.
          </p>
          <p className='mb-6 font-semibold text-white'>
            This policy covers personal information collected through:
          </p>
          <ul className='mb-6  text-[#D1D5DB] break-words'>
            <li>Our website at https://withpractice.ai/</li>
            <li>Our AI powered practice management agent product</li>
            <li>Our AI powered physician agent product</li>
            <li>
              Our AI powered coding and billing agent for service providers{' '}
            </li>
            <li>Our EHR integration solutions</li>
            <li>Our Telehealth and digital patient engagement tools</li>
            <li>Our mobile applications</li>
            <li>
              Our communications, social media, and events (collectively, the
              &quot;Services&quot;)
            </li>
          </ul>
          <h4 className='text-lg font-semibold mb-2 text-white'>Important Note:</h4>
          <p className='mb-4 text-[#D1D5DB]'>
            This Privacy Policy does not govern how your healthcare provider
            (&quot;Provider&quot;) uses personal information or Protected Health
            Information (&quot;PHI&quot;) as defined under HIPAA that Curie AI
            processes on the Provider&apos;s behalf. For information about your
            Provider&apos;s use of your personal information or PHI, please
            contact them directly to request their Notice of Health Information
            Privacy Practices.
          </p>
          <p className='mb-4 text-[#D1D5DB]'>
            Our Privacy Policy adheres to the EU-U.S. DPF Principles for
            personal data transferred from the European Union and the United
            Kingdom, and the Swiss-U.S. DPF Principles for personal data
            transferred from Switzerland.
          </p>
          <h4 className='text-lg font-semibold text-white'>1. Information We Collect</h4>
          <p className='font-bold mb-2 text-white'>A. Information You Provide Directly</p>
          <p className='mb-4 text-[#D1D5DB]'>
            When you use our platform, create an account, or interact with our
            Services, we collect information you provide through forms and other
            interactions. Depending on your role (provider, practice
            administrator, service provider or patient), this may include:
          </p>
          <ul className='mb-6 text-[#D1D5DB]'>
            <li>
              <span className='font-bold text-white'>Contact Information:</span> Name,
              email address, physical address, phone number
            </li>
            <li>
              <span className='font-bold text-white'>Professional Information:</span>{' '}
              Practice details, credentials, specialties, NPI number, workplace
              information, service provider details
            </li>
            <li>
              <span className='font-bold text-white'>Account Information:</span> Username,
              password, account preferences, security questions
            </li>
            <li>
              <span className='font-bold text-white'>Payment Details:</span> Bank account
              information, payment card details, billing information
            </li>
            <li>
              <span className='font-bold text-white'>Practice Information:</span>{' '}
              Appointment schedules, practice workflows, physician workflows,
              service provider staff workflows, staff information
            </li>
            <li>
              <span className='font-bold text-white'>Communications:</span> Support
              requests, feedback, survey responses, messages
            </li>
            <li>
              <span className='font-bold text-white'>User Preferences:</span> Notification
              settings, display preferences, feature selections
            </li>
          </ul>
          <p className='mb-4 text-[#D1D5DB]'>
            Unless specifically requested for legitimate business purposes, we
            ask that you do not provide sensitive personal information (e.g.,
            information related to racial/ethnic origin, political opinions,
            religion, health details not required for our Services, biometric
            data, criminal background).
          </p>
          <p className='mb-4 text-[#D1D5DB]'>
            If you choose not to provide certain information, some features of
            our AI agents, practice management agent platform, physician agent
            platform, service provider agent platform or patient engagement
            tools may be unavailable.
          </p>
          <p className='font-bold my-2 text-white'>
            B. Information Collected Automatically
          </p>
          <p className='mb-4 text-[#D1D5DB]'>
            When you use our Services, we and our service providers
            automatically collect certain technical information:
          </p>
          <ul className='mb-6 text-[#D1D5DB]'>
            <li>
              <span className='font-bold text-white'>Device Information:</span> Device
              type, operating system, browser type, screen resolution, IP
              address, unique identifiers
            </li>
            <li>
              <span className='font-bold text-white'>Usage Information:</span> Pages
              visited, features used, time spent on platform, navigation
              patterns, clickstreams
            </li>
            <li>
              <span className='font-bold text-white'>Performance Data:</span> Load times,
              errors, feature usage statistics statistics
            </li>
            <li>
              <span className='font-bold text-white'>Location Information:</span> General
              location (city/state) derived from IP address
            </li>
          </ul>
          <p className='mb-4 text-[#D1D5DB]'>
            Our systems automatically record this information in log files to
            secure our platform, identify potential security threats, optimize
            performance, and improve our Services.
          </p>
          <p className='mb-4 text-white'>
            We employ several technologies to collect this information:
          </p>
          <ul className='mb-6 text-[#D1D5DB]'>
            <li>
              <span className='font-bold text-white'>Cookies:</span> Small text files
              stored on your device that help our platform recognize you and
              remember preferences
            </li>
            <li>
              <span className='font-bold text-white'>Web Beacons:</span> Small graphic
              files that track when you view certain content
            </li>
            <li>
              <span className='font-bold text-white'>Local Storage:</span> Data stored
              locally on your device to improve performance and improve
              performance and user experience
            </li>
            <li>
              <span className='font-bold text-white'>Analytics Tools:</span>
              Technologies that help us understand how users interact with our
              platform
            </li>
            <li>
              <span className='font-bold text-white'>Session Recording:</span>
              Tools that may record anonymized user sessions to usability issues
            </li>
          </ul>
          <p className='mb-4 text-[#D1D5DB]'>
            We process this information to operate our platform, enhance user
            experience, troubleshoot issues, and develop new features for
            healthcare providers and their patients.
          </p>
          <p className='font-bold my-2 text-white'>C. Information from Third Parties</p>
          <p className='mb-4 text-white'>We may obtain information about you from:</p>
          <ul className='mb-6 text-[#D1D5DB]'>
            <li>Healthcare providers using our platform</li>
            <li>Industry partners and integrations</li>
            <li>Payment processors and financial institutions</li>
            <li>Healthcare directories and databases</li>
            <li>Professional networks and associations</li>
            <li>Public records and databases</li>
          </ul>
          <p className='mb-4 text-[#D1D5DB]'>
            We only process information shared by others when they have
            appropriate permission to do so.
          </p>
          <h4 className='text-lg font-semibold text-white'>
            2. How We Use Your Information
          </h4>
          <p className='font-bold mb-2'>
            A. Providing Our Healthcare Technology Platform
          </p>
          <p className='mb-4 text-white'>We use personal information to:</p>
          <ul className='mb-6 text-[#D1D5DB]'>
            <li>
              Operate and maintain our practice management agent platform and
              EHR integrations
            </li>
            <li>Process appointments, payments, and clinical documentation</li>
            <li>Enable Telehealth consultations and patient communications</li>
            <li>Facilitate insurance verification and claims processing</li>
            <li>Support clinical workflows and practice operations</li>
            <li>Provide technical support and maintenance</li>
            <li>Manage user accounts and authentication</li>
          </ul>
          <p className='font-bold mb-2 text-white'>
            B. Improving Our Healthcare Solutions
          </p>
          <p className='mb-4 text-white'>We analyze data to:</p>
          <ul className='mb-6 text-[#D1D5DB]'>
            <li>Enhance platform functionality and user experience</li>
            <li>Develop new features for healthcare practices</li>
            <li>Develop new features for healthcare professionals</li>
            <li>Optimize clinical workflows and practice efficiency</li>
            <li>Resolve technical issues and bugs</li>
            <li>Customize the platform for different specialties</li>
            <li>Improve security and performance</li>
            <li>Conduct research on healthcare delivery innovation</li>
          </ul>
          <p className='mb-4 text-[#D1D5DB]'>
            As part of these efforts, we may create de-identified, aggregated
            data sets that no longer identify individuals. We may use and share
            this anonymous data for lawful business purposes, including
            developing industry insights and benchmarks while maintaining
            de-identification.
          </p>
          <p className='font-bold mb-2 text-white'>C. AI-Enhanced Healthcare Tools</p>
          <p className='mb-4 text-white' >We may use artificial intelligence to:</p>
          <ul className='mb-6 text-[#D1D5DB]'>
            <li>Automate routine administrative tasks</li>
            <li>Improve clinical documentation efficiency</li>
            <li>Enhance patient engagement and communication</li>
            <li>Support care coordination across providers</li>
            <li>Offer intelligent scheduling and practice management tools</li>
          </ul>
          <p className='mb-4 text-[#D1D5DB]'>
            When you interact with these AI-enhanced tools, your information may
            be processed to deliver these capabilities in accordance with all
            applicable healthcare laws and regulations.
          </p>
          <p className='font-bold mb-2 text-white'>D. Communications</p>
          <p className='mb-4 text-white'>We may send:</p>
          <ul className='mb-6 text-[#D1D5DB]'>
            <li>Platform updates and feature announcements</li>
            <li>
              Educational content about practice management best practices
            </li>
            <li>Training resources for our platform</li>
            <li>News about healthcare technology innovations</li>
            <li>Renewal and billing information</li>
            <li>Support-related communications</li>
          </ul>
          <p className='mb-4 text-[#D1D5DB]'>
            You can manage your communication preferences as described in the
            &quot;Your Choices&quot; section.
          </p>
          <p className='font-bold mb-2 text-white'>
            E. Text Messaging and Mobile Communications
          </p>
          <p className='mb-4 text-white'>
            For users who opt in, we may send text messages related to:
          </p>
          <ul className='mb-6 text-[#D1D5DB]'>
            <li>Physician communication notifications</li>
            <li>Practice communication notifications</li>
            <li>Patient communication notifications</li>
            <li>Urgent system alerts and updates</li>
            <li>Two-factor authentication</li>
          </ul>
          <p className='mb-4 text-[#D1D5DB]'>
            Mobile information will not be shared with third parties for
            marketing. You can opt out of these messages as described in the
            &quot;Your Choices&quot; section.
          </p>
          <p className='font-bold mb-2 text-white'>F. Targeted Platform Improvements</p>
          <p className='mb-4 text-[#D1D5DB]'>We may analyze usage patterns to:</p>
          <ul className='mb-6 text-[#D1D5DB]'>
            <li>
              Identify which practice management features are most valuable
            </li>
            <li>Understand clinical workflow preferences by specialty</li>
            <li>Improve our healthcare platform for specific user types</li>
            <li>Develop better onboarding and training resources</li>
            <li>Optimize our platform for different practice sizes</li>
          </ul>
          <p className='font-bold mb-2 text-white'>G. Security and Compliance</p>
          <p className='mb-4 text-[#D1D5DB]'>We use information to:</p>
          <ul className='mb-6 text-[#D1D5DB]'>
            <li>
              Protect the security and integrity of our healthcare platform
            </li>
            <li>Verify user identities and prevent unauthorized access</li>
            <li>Detect and prevent fraud and abuse</li>
            <li>Conduct audits and ensure regulatory compliance</li>
            <li>Enforce our Terms of Service</li>
            <li>Meet legal obligations specific to healthcare technology</li>
          </ul>
          <p className='font-bold mb-2 text-white'>H. With Your Permission</p>
          <p className='mb-4 text-[#D1D5DB]'>
            We will use your information for other purposes when you give
            specific consent or direction to do so.
          </p>
          <h4 className='text-lg font-semibold text-white'>3. How We Share Information</h4>
          <p className='mb-4 text-[#D1D5DB]'>
            We do not sell personal information for money. We share information
            with:
          </p>
          <ul className='mb-6 text-[#D1D5DB]'>
            <li>
              <span className='font-bold text-white'>Healthcare Team:</span> With providers
              and staff within a practice who use our platform to coordinate
              care and practice operations.
            </li>
            <li>
              <span className='font-bold text-white'>Technology Partners:</span> Carefully
              selected service providers that help us deliver specific platform
              functionality like scheduling, Telehealth, billing, analytics, and
              cloud infrastructure. These partners are contractually bound to
              protect your information and use it only to provide the contracted
              services.
            </li>
            <li>
              <span className='font-bold text-white'>Integration Partners:</span> When you
              choose to connect our platform with other healthcare systems,
              EHRs, labs, pharmacies, or insurance providers to facilitate
              coordinated care, with appropriate permissions.
            </li>
            <li>
              <span className='font-bold text-white'>Legal Requirements:</span> When
              required by law, legal process, or to protect rights and safety.
              This may include responses to lawful requests from healthcare
              regulatory authorities.
            </li>
            <li>
              <span className='font-bold text-white'>Business Transfers:</span> If Curie AI
              is involved in a merger, acquisition, or sale of assets, with
              appropriate safeguards for protected health information.
            </li>
            <li>
              <span className='font-bold text-white'>Professional Advisors:</span> Legal,
              accounting, and other advisors in connection with corporate
              governance, regulatory compliance, and business operations.
            </li>
          </ul>
          <p className='mb-4 text-[#D1D5DB]'>
            For PHI, all sharing is conducted in compliance with HIPAA and other
            healthcare privacy laws when applicable.
          </p>
          <h4 className='text-lg font-semibold text-white'>
            4. Data Security in Healthcare Technology
          </h4>
          <p className='mb-4 text-[#D1D5DB]'>
            We implement comprehensive technical, administrative, and physical
            safeguards to protect personal information on our healthcare
            platform, including:
          </p>
          <ul className='mb-6 text-[#D1D5DB]'>
            <li>Encryption of data in transit and at rest</li>
            <li>Role-based access controls</li>
            <li>Multi-factor authentication</li>
            <li>Regular security assessments and penetration testing</li>
            <li>Employee training on privacy and security</li>
            <li>Business continuity and disaster recovery protocols</li>
          </ul>
          <p className='mb-4 text-[#D1D5DB]'>
            While we maintain robust security measures appropriate for
            healthcare information, no security system is impenetrable. We
            cannot guarantee absolute security during transmission or storage.
          </p>
          <h4 className='text-lg font-semibold text-white'>
            5. Data Retention for Healthcare Records
          </h4>
          <p className='mb-4 text-[#D1D5DB]'>
            We retain personal information only as long as necessary to:
          </p>
          <ul className='mb-6 text-[#D1D5DB]'>
            <li>Fulfill the purposes outlined in this Privacy Policy</li>
            <li>Comply with medical record retention requirements</li>
            <li>Meet legal, regulatory, and compliance obligations</li>
            <li>Support legitimate business operations</li>
          </ul>
          <p className='mb-4 text-white'>Retention periods vary based on:</p>
          <ul className='mb-6 text-[#D1D5DB]'>
            <li>The nature and sensitivity of the information</li>
            <li>Legal requirements for healthcare records</li>
            <li>Professional guidelines for medical documentation</li>
            <li>Business needs for historical data</li>
          </ul>
          <p className='mb-4 text-[#D1D5DB]'>
            We maintain specific retention schedules and secure disposal
            procedures aligned with healthcare industry standards and
            regulations.
          </p>
          <h4 className='text-lg font-semibold text-white'>6. Your Privacy Choices</h4>
          <p className='font-bold mb-2 text-white'>A. Managing Your Information</p>
          <p className='mb-4 text-[#D1D5DB]'>
            Depending on your relationship with us, you may request to:
          </p>
          <ul className='mb-6 text-[#D1D5DB]'>
            <li>Access your account information</li>
            <li>Update your profile and preferences</li>
            <li>Export your data (where technically feasible)</li>
            <li>
              Delete your personal information (subject to retention
              requirements)
            </li>
          </ul>
          <p className='mb-4 text-[#D1D5DB]'>
            For such requests, please contact support@withpractice.ai.
          </p>
          <p className='font-bold mb-2 text-white'>B. Communication Preferences</p>
          <p className='mb-4 text-white'>
            You can manage your communication preferences by:
          </p>
          <ul className='mb-6 text-[#D1D5DB]'>
            <li>Adjusting notification settings in your Curie AI account</li>
            <li>Clicking &quot;unsubscribe&quot; in email communications</li>
            <li>Replying &quot;STOP&quot; to text messages</li>
            <li>Contacting our support team</li>
          </ul>
          <p className='mb-4 text-[#D1D5DB]'>
            Note that certain service-related communications about your account,
            security, or platform functionality cannot be opted out of as they
            are necessary for providing our Services.
          </p>
          <p className='font-bold mb-2 text-white'>C. Cookie Management</p>
          <p className='mb-4 text-white'>
            You can manage cookies and similar technologies through:
          </p>
          <ul className='mb-6 text-[#D1D5DB]'>
            <li>Browser settings to block, delete, or limit cookies</li>
            <li>
              Mobile device settings to reset advertising IDs or limit tracking
            </li>
            <li>Our cookie preference center (where available)</li>
          </ul>
          <p className='mb-4 text-[#D1D5DB]'>
            Some features of our platform may require cookies to function
            properly. For more information, visit www.allaboutcookies.org.
          </p>
          <p className='font-bold mb-2 text-white'>D. Analytics Opt-Out</p>
          <p className='mb-4 text-[#D1D5DB]'>
            Our platform uses analytics tools like Google Analytics. To opt out
            of Google Analytics, install the Google Analytics Opt-out Browser
            Add-on: https://tools.google.com/dlpage/gaoptout.
          </p>
          <p className='font-bold mb-2 text-white'>E. Do Not Track</p>
          <p className='mb-4 text-[#D1D5DB]'>
            Our website currently does not respond to &quot;Do Not Track&quot;
            browser signals.
          </p>
          <h4 className='text-lg font-semibold text-white'>
            7. International Data in Healthcare
          </h4>
          <p className='mb-4 text-[#D1D5DB]'>
            If you access our Services from outside the United States,
            understand that personal information may be transferred to and
            processed in the United States and other countries with different
            privacy laws.
          </p>
          <p className='mb-4 text-[#D1D5DB]'>
            We implement appropriate safeguards for international transfers of
            healthcare data as required by applicable laws.
          </p>
          <h4 className='text-lg font-semibold text-white'>8. California Residents</h4>
          <p className='mb-4 text-[#D1D5DB]'>
            If you are a California resident, the California Consumer Privacy
            Act (CCPA) grants specific rights regarding your personal
            information:
          </p>
          <p className='font-bold mb-2 text-white'>A. Information Collection and Use</p>
          <p className='mb-4 text-white'>
            Within the past twelve months, we have collected:
          </p>
          <ul className='mb-6 text-[#D1D5DB]'>
            <li>Identifiers (name, email, IP address)</li>
            <li>Professional and employment information</li>
            <li>Commercial information and records</li>
            <li>Internet activity information</li>
            <li>Inferences drawn from other personal information</li>
          </ul>
          <p className='mb-4 text-[#D1D5DB]'>
            For sensitive personal information, we only use and disclose it for
            permitted purposes under the CCPA, such as providing our healthcare
            platform services, security, and quality improvement.
          </p>
          <p className='font-bold mb-2 etxt-white'>B. Your California Rights</p>
          <ul className='mb-6 text-[#D1D5DB]'>
            <li>
              Right to Know what personal information we collect and how we use
              it
            </li>
            <li>
              Right to Delete personal information (subject to healthcare record
              exceptions)
            </li>
            <li>Right to Correct inaccurate personal information</li>
            <li>
              Right to Opt-Out of &quot;sales&quot; or &quot;sharing&quot; of
              personal information
            </li>
            <li>Right to Non-Discrimination for exercising these rights</li>
          </ul>
          <p className='mb-4 text-[#D1D5DB]'>
            To exercise these rights, contact hello@withpractice.ai with your
            specific request and contact information. We will verify your
            identity before processing your request, following our verification
            procedures for healthcare-related systems.
          </p>
          <h4 className='text-lg font-semibold text-white'>9. European Residents</h4>
          <p className='mb-4 text-[#D1D5DB]'>
            For individuals in the European Economic Area, United Kingdom, or
            Switzerland, we provide these additional details:
          </p>
          <p className='font-bold mb-2 text-white'>A. Legal Basis for Processing</p>
          <p className='mb-4 text-white'>We rely on these legal bases for processing:</p>
          <ul className='mb-6 text-[#D1D5DB]'>
            <li>
              <span className='font-bold text-white'>Contract Performance:</span>{' '}
              Processing necessary to provide our healthcare platform services
              to providers and practices
            </li>
            <li>
              <span className='font-bold text-white'>Legitimate Interests:</span> Research,
              development, security, and business operations, balanced against
              individual rights
            </li>
            <li>
              <span className='font-bold text-white'>Legal Obligations:</span> Compliance
              with healthcare laws, regulations, and professional standards
            </li>
            <li>
              <span className='font-bold text-white'>Consent:</span> Where specifically
              requested and freely given
            </li>
          </ul>
          <p className='font-bold mb-2 text-white'>B. Your European Privacy Rights</p>
          <p className='mb-4 text-white'>You may request to:</p>
          <ul className='mb-6 text-[#D1D5DB]'>
            <li>
              Access information about our processing of your personal
              information
            </li>
            <li>Correct inaccurate data</li>
            <li>Delete your information (subject to legal requirements)</li>
            <li>Transfer your information to another provider</li>
            <li>Restrict or object to certain processing</li>
          </ul>
          <p className='mb-4 text-[#D1D5DB]'>
            Contact hello@withpractice.ai to exercise these rights. We may need
            to verify your identity and will respond within applicable legal
            timeframes.
          </p>
          <p className='font-bold mb-2 text-white'>C. International Transfers</p>
          <p className='mb-4 text-[#D1D5DB]'>
            For transfers of European personal information to the United States,
            we implement appropriate safeguards as required by European data
            protection laws.
          </p>
          <h4 className='text-lg font-semibold text-white'>10. Data Privacy Framework</h4>
          <p className='mb-4 text-[#D1D5DB]'>
            Curie AI complies with the EU-U.S. Data Privacy Framework, the
            Swiss-U.S. Data Privacy Framework, and the UK Extension regarding
            personal information transferred from these regions to the United
            States. We&apos;ve certified to the U.S. Department of Commerce our
            adherence to the Data Privacy Framework Principles.
          </p>
          <p className='mb-4 text-[#D1D5DB]'>
            For unresolved privacy concerns related to our healthcare platform,
            contact us at hello@withpractice.ai first. If not satisfactorily
            resolved, we commit to referring complaints to JAMS, an independent
            dispute resolution provider
            (https://www.jamsadr.com/DPF-Dispute-Resolution).
          </p>
          <h4 className='text-lg font-semibold text-white'>11. Children&apos;s Privacy</h4>
          <p className='mb-4 text-[#D1D5DB]'>
            Our Services are not directed to children under 18. We do not
            knowingly collect personal information from children. If you believe
            we have inadvertently collected information from a child, please
            contact us to have it removed.
          </p>
          <h4 className='text-lg font-semibold text-white'>
            12. Links to Other Healthcare Services
          </h4>
          <p className='mb-4 text-[#D1D5DB]'>
            Our platform may link to other websites, applications, or services
            not operated by Curie AI. We are not responsible for the privacy
            practices of these third-party services. We recommend reviewing
            their privacy policies before sharing information.
          </p>
          <h4 className='text-lg font-semibold text-white'>
            13. Changes to This Privacy Policy
          </h4>
          <p className='mb-4 text-[#D1D5DB]'>
            We may update this Privacy Policy as our Services evolve and privacy
            laws change. We will notify you of material changes through our
            platform, email, or other appropriate means. The revised policy
            takes effect immediately upon posting unless otherwise specified.
          </p>
          <h4 className='text-lg text-white font-semibold'>
            14. Contact Our Privacy Team
          </h4>
          <p className='mb-4 text-[#D1D5DB]'>
            For questions about this Privacy Policy or our privacy practices:
          </p>
          <p className='mb-4 text-white'>Email: support@withpractice.ai</p>
          <p className='mb-4 text-[#D1D5DB]'>
            Curie Health AI Inc. 1111B S Governors Ave, #23527, Dover, DE 19904
          </p>
        </div>
      </section>
    </div>
  );
}
