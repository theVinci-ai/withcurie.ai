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

// 3rd page card data
export const stories = [
  {
    title: "Multi-Location Practice Group",
    location: "Texas • 150+ Providers",
    integration: "Epic Integration",
    roi: "24X",
    implementation: "12 months",
    challenge: "Prior authorization bottlenecks causing $2M annual revenue loss.",
    solution: "Deployed Prior Auth AI + Claims Processing agents.",
    results: [
      "95% prior auth approval rate (up from 65%)",
      "$2.4M additional revenue in 12 months",
      "80% reduction in administrative overhead",
      "3-day average processing (down from 14 days)",
    ],
    gradient: "from-[#95B445] to-[#4A6F3E]",
  },
  {
    title: "Regional Hospital Network",
    location: "California • 500+ Beds",
    integration: "Cerner Integration",
    roi: "18X",
    implementation: "8 months",
    challenge: "PDPM compliance and revenue optimization across 8 facilities.",
    solution: "PDPM Optimizer + Compliance Monitor + Quality Reporter.",
    results: [
      "35% PDPM revenue increase across network",
      "99.8% compliance score maintained",
      "60% reduction in audit findings",
      "$4.2M additional reimbursement annually",
    ],
    gradient: "from-[#7CA73D] to-[#4A6F3E]",
  },
  {
    title: "Ambulatory Surgery Centers",
    location: "Florida • 12 Centers",
    integration: "MEDITECH Integration",
    roi: "16X",
    implementation: "6 months",
    challenge: "OR utilization at 70%, supply chain inefficiencies.",
    solution: "Surgery Scheduler AI + Supply Chain optimizer.",
    results: [
      "95% OR utilization (up from 70%)",
      "30% increase in daily procedures",
      "25% supply cost reduction",
      "$1.8M additional revenue annually",
    ],
    gradient: "from-[#A2C043] to-[#799B4B]",
  },
];

// 3rd page cards data
export const cardData = [
  {
    id: 1,
    img: "/images/revenue-growth.svg",
    value: "+45%",
    title: "Revenue Growth",
    desc: "Average revenue increase across all clients",
    color: "#16A249",
  },
  {
    id: 2,
    img: "/images/time-saving.svg",
    value: "75%",
    title: "Time Savings",
    desc: "Reduction in administrative processing time",
    color: "#0284C5",
  },
  {
    id: 3,
    img: "/images/staff-productivity.svg",
    value: "3X",
    title: "Staff Productivity",
    desc: "Improvement in staff productivity metrics",
    color: "#9D65F1",
  },
  {
    id: 4,
    img: "/images/cost-reduction.svg",
    value: "65%",
    title: "Cost Reduction",
    desc: "Average operational cost savings",
    color: "#36D399",
  },
];

// 3rd page cards content

export const pricingModels = [
  {
    id: 1,
    title: "Revenue Partnership",
    subtitle: "Performance-Based Model",
    highlight: "Revenue Share",
    description:
      "We share in your success. Pay based on measurable outcomes and ROI generated.",
    included: [
      "Zero upfront investment",
      "Guaranteed ROI or we don't get paid",
      "Shared risk and reward model",
      "Performance-based compensation",
      "Continuous optimization included",
      "Full implementation support",
    ],
    benefits: [
      "Aligned incentives for success",
      "No financial risk to your organization",
      "Proven results before payment",
      "Ongoing partnership approach",
    ],
    bestFor: "Large healthcare organizations seeking guaranteed ROI",
    iconType: "svg",
    iconBg: "bg-gradient-to-r from-[#799B4B] to-[#4A6F3E]",
    iconSvg: (
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
    ),
  },
  {
    id: 2,
    title: "Subscription Model",
    subtitle: "Predictable Monthly Investment",
    highlight: "Monthly SaaS",
    description:
      "Fixed monthly pricing with full access to AI workforce platform and support.",
    included: [
      "Predictable monthly costs",
      "Full platform access",
      "All AI agents included",
      "24/7 support included",
      "Regular updates and new agents",
      "EHR integration support",
    ],
    benefits: [
      "Budget-friendly and predictable",
      "Quick implementation process",
      "Immediate access to all features",
      "Transparent pricing model",
    ],
    bestFor: "Mid-size practices wanting predictable costs",
    iconType: "image",
    iconSrc: "/images/subscription-model.svg",
  },
  {
    id: 3,
    title: "Hybrid Model",
    subtitle: "Custom Enterprise Solution",
    highlight: "Base + Performance",
    description:
      "Combines subscription base with performance bonuses for maximum flexibility.",
    included: [
      "Lower base subscription rate",
      "Performance bonus structure",
      "Custom deployment timeline",
      "Dedicated account management",
      "Custom AI agent development",
      "Enterprise SLA guarantees",
    ],
    benefits: [
      "Balanced risk and reward",
      "Customized to your needs",
      "Enterprise-level support",
      "Scalable pricing model",
    ],
    bestFor: "Enterprise healthcare systems needing custom solutions",
    iconType: "svg",
    iconBg: "bg-gradient-to-r from-[#799B4B] to-[#4A6F3E]",
    iconSvg: (
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
    ),
  },
]

// 3rd card data 
export const agentsData = [
  {
    id: 1,
    title: "Prior Authorization AI",
    description:
      "Automates prior authorization requests with 95% approval rate",
    image: "/images/agents/Prior Authorization AI.svg",
    icon: "/images/prior-icon.svg",
    days: "3 days",
    metrics: [
      "95% Approval Rate",
      "3-Day Average Processing",
    ],
  },
  {
    id: 2,
    title: "Claims Processing Agent",
    description:
      "AI-powered claims review and submission optimization",
    image: "/images/agents/Claims Processing Agent.svg",
    icon: "/images/claims-icon.svg",
    days: "2 days",
    metrics: [
      "99.2% Clean Claims",
      "40% Faster Processing",
    ],
  },
  {
    id: 3,
    title: "PDPM Optimizer",
    description:
      "Maximizes PDPM reimbursement through intelligent through case-mix optimization",
    image: "/images/agents/PDPM Optimizer.svg",
    icon: "/images/pdpm-icon.svg",
    days: "5 days",
    metrics: [
      "35% Revenue Increase",
      "PDPM Optimization",
    ],
  },
  {
    id: 4,
    title: "Compliance Monitor",
    description:
      "Real-time healthcare compliance monitoring and risk assessment",
    image: "/images/agents/Compliance Monitor.svg",
    icon: "/images/compliancemonitor-icon.svg",
    days: "4 days",
    metrics: [
      "99.8% Compliance Score",
      "Real-time Alerts",
    ],
  },
  {
    id: 5,
    title: "Patient Intake Optimizer",
    description:
      "Streamlines patient registration and intake processes",
    image: "/images/agents/Patient Intake Optimizer.svg",
    icon: "/images/patient-icon.svg",
    days: "1 day",
    metrics: [
      "60% Time Reduction",
      "Auto Form Completion",
    ],
  },
  {
    id: 6,
    title: "Surgery Scheduler AI",
    description:
      "Optimizes surgical scheduling and resource allocation",
    image: "/images/agents/Surgery Scheduler AI.svg",
    icon: "/images/surgery-icon.svg",
    days: "7 days",
    metrics: [
      "30% Efficiency Gain",
      "Resource Optimization",
    ],
  },
  {
    id: 7,
    title: "Quality Reporter",
    description:
      "Automated quality reporting and performance analytics",
    image: "/images/agents/Quality Reporter.svg",
    icon: "/images/quality-icon.svg",
    days: "6 days",
    metrics: [
      "95% Accuracy Rate",
      "Real-time Insights",
    ],
  },
  {
    id: 8,
    title: "Medication Tracker",
    description:
      "AI-powered medication management and adherence monitoring system",
    image: "/images/agents/Medication Tracker.svg",
    icon: "/images/medication-icon.svg",
    days: "3 days",
    metrics: [
      "85% Adherence Improvement",
      "Drug Interaction Detection",
    ],
  },
];
