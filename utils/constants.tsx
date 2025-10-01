export const ownerDetail = {
  name: "Karthik Sivakumar",
  email: "karthik@withpractice.ai",
  phone: "+1 (650) 555-5555",
  address: "123 Main St, Anytown, USA",
  city: "Anytown",
  state: "CA",
  zip: "12345",
  country: "USA",
  website: "https://www.practiceai.com",
  linkedin: "https://www.linkedin.com/in/karthik-sivakumar",
  twitter: "https://twitter.com/karthik-sivakumar",
  github: "https://github.com/karthik-sivakumar",
  instagram: "https://www.instagram.com/karthik-sivakumar",
  facebook: "https://www.facebook.com/karthik-sivakumar",
  calendlyLink: "https://calendly.com/karthik-withpractice",
};

// App Routes
export const appRoute = {
  default: "/",
  signUp: "/signup",
  login: "/login",
  contact: "/contact",
  privacyPolicy: "/privacy-policy",
  termAndConditions: "/terms-and-conditions",
  demo: "https://calendly.com/karthik-withpractice",
  products: "/products",
  pricing: "/pricing",
  testimonials: "/testimonials",
  featureDemo: "/feature-demo",
};

// Footer Links
export const footerLinks = [
  { text: "Contact Us", href: appRoute.contact, target: "" },
  { text: "Privacy Policy", href: appRoute.privacyPolicy, target: "" },
  { text: "Terms & Conditions", href: appRoute.termAndConditions, target: "" },
];

// Right side content for each card
export const cardDetails: Record<string, React.ReactNode> = {
visit: (
  <>
    {/* VISIT AI - Patient 360 Analysis */}
    <div className="text-gray-500 mb-4">
      // VISIT AI - Patient 360 Analysis
    </div>

    <div className="text-blue-400">
      const <span className="text-white">patient360</span> ={" "}
      <span className="text-purple-400">await</span>{" "}
      <span className="text-yellow-400">visitAI</span>.
      <span className="text-blue-400">analyze</span>({"{"})
    </div>

    {/* Highlighted version */}
    <div className="ml-4 text-white">
      patientId: <span className="text-green-400">"P-12345"</span>,
    </div>
    <div className="ml-4 text-white">
      chiefComplaint: <span className="text-green-400">"chest pain"</span>,
    </div>
    <div className="ml-4 text-white">
      includeHistory: <span className="text-orange-400">true</span>
    </div>

    <div className="text-blue-400">{"});"}</div>

    {/* Plain code version */}
    <div className="mt-4 md:pl-4  text-sm text-white">
      patientId: "P-12345", <br />
      chiefComplaint: "chest pain", <br />
      includeHistory: true
    </div>
  </>
),
  scribe: (
    <>
      {" "}
      <div className="text-gray-500 mb-4">
        {" "}
        // SCRIBE AI - Auto Transcription{" "}
      </div>{" "}
      <div className="text-blue-400">
        {" "}
        const <span className="text-white">notes</span> ={" "}
        <span className="text-purple-400">await</span>{" "}
        <span className="text-yellow-400">scribeAI</span>.{" "}
        <span className="text-blue-400">generateNotes</span>({"{"}){" "}
      </div>{" "}
      <div className="ml-4 text-white">
        {" "}
        patientId: <span className="text-green-400">"P-67890"</span>,{" "}
      </div>{" "}
      <div className="ml-4 text-white">
        {" "}
        consultation: <span className="text-green-400">
          {" "}
          "recorded audio"{" "}
        </span>{" "}
      </div>{" "}
      <div className="ml-4 text-white"> encounterId: <span className="text-green-400">"E-56789"</span> </div>
      <div className="text-blue-400">{"});"}</div>{" "}
      <div className="mt-4 md:pl-4 text-sm text-white">
  encounterId: "E-56789", <br />
  transcript: "Mild headache for 3 days.", <br />
  providerNotes: "Advise hydration & rest."
</div>

    </>
  ),
  coding: (
    <>
      {" "}
      <div className="text-gray-500 mb-4">
        {" "}
        // CODING AI - Auto Medical Coding{" "}
      </div>{" "}
      <div className="text-blue-400">
        {" "}
        const <span className="text-white">codes</span> ={" "}
        <span className="text-purple-400">await</span>{" "}
        <span className="text-yellow-400">codingAI</span>.{" "}
        <span className="text-blue-400">generate</span>({"{"}){" "}
      </div>{" "}
      <div className="ml-4 text-white">
        {" "}
        diagnosis: <span className="text-green-400">
          {" "}
          "Hypertension"{" "}
        </span>,{" "}
      </div>{" "}
      <div className="ml-4 text-white">
        {" "}
        compliant: <span className="text-orange-400">true</span>{" "}
      </div>{" "}
      <div className="ml-4 text-white"> icd10: <span className="text-green-400">["R51.9", "I10"]</span> </div>
      <div className="text-blue-400">{"});"}</div>{" "}
      <div className="mt-4 md:pl-4 text-sm text-white">
  icd10: ["R51.9", "I10"], <br />
  cpt: ["99213"], <br />
  modifiers: ["25"]
</div>
    </>
  ),
  billing: (
    <>
      {" "}
      <div className="text-gray-500 mb-4">
        {" "}
        // BILLING AI - Claim Automation{" "}
      </div>{" "}
      <div className="text-blue-400">
        {" "}
        const <span className="text-white">claim</span> ={" "}
        <span className="text-purple-400">await</span>{" "}
        <span className="text-yellow-400">billingAI</span>.{" "}
        <span className="text-blue-400">submit</span>({"{"}){" "}
      </div>{" "}
      <div className="ml-4 text-white">
        {" "}
        claimId: <span className="text-green-400">"C-98765"</span>,{" "}
      </div>{" "}
      <div className="ml-4 text-white">
        {" "}
        predictedApproval: <span className="text-green-400">"92%"</span>{" "}
      </div>{" "}
      <div className="ml-4 text-white"> insuranceProvider: <span className="text-green-400">"Blue Cross"</span> </div>
      <div className="text-blue-400">{"});"}</div>{" "}
      <div className="mt-4 md:pl-4 text-sm text-white">
  claimId: "C-98765", <br />
  insuranceProvider: "Blue Cross", <br />
  status: "Pending"
</div>
    </>
  ),
  payments: (
    <>
      {" "}
      <div className="text-gray-500 mb-4">
        {" "}
        // PAYMENTS - Stripe Integration{" "}
      </div>{" "}
      <div className="text-blue-400">
        {" "}
        const <span className="text-white">payment</span> ={" "}
        <span className="text-purple-400">await</span>{" "}
        <span className="text-yellow-400">payments</span>.{" "}
        <span className="text-blue-400">process</span>({"{"}){" "}
      </div>{" "}
      <div className="ml-4 text-white">
        {" "}
        patientId: <span className="text-green-400">"P-13579"</span>,{" "}
      </div>{" "}
      <div className="ml-4 text-white">
        {" "}
        amount: <span className="text-green-400">"$250"</span>{" "}
      </div>{" "}
      <div className="ml-4 text-white"> method: <span className="text-green-400">"Credit Card"</span> </div>
      <div className="text-blue-400">{"});"}</div>{" "}
      <div className="mt-4 md:pl-4 text-sm text-white">
  paymentId: "PMT-4567", <br />
  amount: 200.0, <br />
  method: "Credit Card"
</div>
    </>
  ),
};

// faq-------------------
export const faqs = [
  {
    question: "How quickly can Curie AI be implemented?",
    answer:
      "Curie AI can be deployed within 24-48 hours for most healthcare organizations. Our cloud-native architecture allows for rapid integration with existing EHR systems including Epic, Cerner, and Allscripts. The implementation process includes data migration, staff training, and workflow optimization to ensure seamless adoption across your practice.",
  },
  {
    question: "Is Curie AI HIPAA compliant and secure?",
    answer:
      "Yes, Curie AI is fully HIPAA compliant and maintains SOC 2 Type II certification. We employ end-to-end encryption, multi-factor authentication, and regular security audits. All patient data is processed and stored in secure, HIPAA-compliant cloud infrastructure with 99.9% uptime guarantee and comprehensive backup systems.",
  },
  {
    question: "What EHR systems does Curie AI integrate with?",
    answer:
      "Curie AI integrates seamlessly with all major EHR systems including Epic, Cerner, Allscripts, athenahealth, eClinicalWorks, and NextGen. Our API-first approach ensures compatibility with custom and legacy systems. We also support HL7 FHIR standards for interoperability and can work with practice management systems like Kareo and DrChrono.",
  },
  {
    question: "How much can I expect to save with Curie AI?",
    answer:
      "Healthcare organizations typically see 30-50% reduction in administrative costs and 25% increase in revenue within the first 6 months. Our AI workforce eliminates the need for additional administrative staff, reduces claim denials by 90%, and increases patient throughput by optimizing scheduling and documentation workflows. ROI is typically achieved within 3-4 months.",
  },
  {
    question: "Do I need technical expertise to use Curie AI?",
    answer:
      "No technical expertise is required. Curie AI is designed with healthcare professionals in mind, featuring an intuitive interface that integrates naturally into existing workflows. Our comprehensive training program includes hands-on sessions, video tutorials, and ongoing support. Most staff members become proficient within 2-3 days of training.",
  },
];
