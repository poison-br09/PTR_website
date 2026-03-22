import type { ServiceData } from '../services';

const data: Record<string, ServiceData> = {
  "payment-gateway-aggregator": {
    slug: "payment-gateway-aggregator",
    title: "Payment Gateway Aggregator Solutions",
    subtitle:
      "Streamline your digital payment infrastructure with end-to-end payment gateway integration, aggregator licensing, and compliance support from Your Professional.",
    heroFeatures: [
      "RBI-Compliant Payment Aggregator Licensing",
      "Multi-Channel Gateway Integration & Configuration",
      "PCI-DSS Compliance & Security Audit Assistance",
      "Real-Time Transaction Monitoring & Settlement Setup",
      "Dedicated Regulatory Liaison & Ongoing Support",
    ],
    overview: {
      heading: "Empowering Businesses with Seamless Payment Aggregation",
      paragraphs: [
        "In today's digital economy, the ability to accept, process, and settle payments efficiently is not merely a convenience — it is a competitive necessity. Payment gateway aggregators serve as the critical bridge between merchants, acquiring banks, card networks, and end consumers, enabling businesses of all sizes to offer frictionless checkout experiences across web, mobile, and point-of-sale channels. With the Reserve Bank of India tightening regulations around intermediary payment processing, obtaining a valid Payment Aggregator (PA) license and maintaining robust compliance frameworks has become essential for any entity facilitating third-party transactions.",
        "Your Professional provides a comprehensive, turnkey solution for businesses seeking to establish or enhance their payment aggregation capabilities. Our team of fintech regulatory specialists, technology consultants, and compliance officers works in lockstep to guide you through every phase — from initial feasibility assessment and RBI application drafting, through technology stack selection and PCI-DSS certification, all the way to go-live support and post-launch compliance monitoring. We have successfully assisted over 150 organizations in securing PA licenses and integrating resilient, scalable gateway architectures.",
        "Whether you are a fintech startup building a merchant onboarding platform, an e-commerce marketplace looking to internalize payment processing, or an established enterprise diversifying into digital payments, our tailored engagement model ensures you meet every regulatory, technical, and operational benchmark. We pride ourselves on delivering solutions that are not only compliant today but are architected to adapt as regulations evolve, protecting your investment for the long term.",
      ],
      highlights: [
        { icon: "🏦", text: "Full-spectrum RBI Payment Aggregator license application and approval management" },
        { icon: "🔒", text: "PCI-DSS Level 1 certification guidance and annual recertification support" },
        { icon: "⚙️", text: "Technology-agnostic gateway integration across 30+ banking and card network partners" },
        { icon: "📊", text: "Real-time reconciliation dashboards and automated settlement workflows" },
      ],
    },
    types: [
      {
        title: "Full-Stack Payment Aggregator License",
        desc: "End-to-end licensing for entities that wish to onboard sub-merchants, collect payments on their behalf, and settle funds into merchant accounts. Includes escrow account setup, net-worth compliance, and fit-and-proper certification with the RBI.",
      },
      {
        title: "Payment Gateway Integration (Non-Aggregator)",
        desc: "For businesses that do not require a PA license but need robust gateway connectivity. We configure and deploy payment gateways such as Razorpay, PayU, Cashfree, or CCAvenue, handling API integration, webhook configuration, and multi-currency support.",
      },
      {
        title: "White-Label Aggregator Platform",
        desc: "A turnkey, brandable payment aggregation platform built on pre-licensed infrastructure. Ideal for SaaS companies and marketplaces that want to offer embedded payment processing under their own brand without obtaining an independent PA license.",
      },
      {
        title: "Cross-Border Payment Aggregation",
        desc: "Specialized licensing and integration for entities facilitating international inbound or outbound payment flows. Covers FEMA compliance, SWIFT/IBAN routing, and multi-currency settlement through authorized dealer banks.",
      },
      {
        title: "UPI & QR-Based Collection Aggregation",
        desc: "Focused solution for businesses aggregating UPI collect requests, dynamic QR code payments, and BBPS bill collection. Includes NPCI onboarding, mandate management, and real-time callback integration.",
      },
    ],
    eligibility: [
      "Company must be registered as a Private Limited Company, Public Limited Company, or LLP under Indian law",
      "Minimum net worth of ₹15 crore at the time of application, increasing to ₹25 crore within three years of receiving authorization",
      "Directors and promoters must satisfy RBI's fit-and-proper criteria with no criminal convictions or regulatory disqualifications",
      "Entity must maintain an escrow account with a scheduled commercial bank for holding merchant funds",
      "Applicant must demonstrate adequate IT infrastructure and cybersecurity measures, including PCI-DSS certification or a credible roadmap to achieve it",
      "The business model must not involve activities prohibited under the Payment and Settlement Systems Act, 2007",
      "Existing PAs operating without authorization must have applied to RBI under the grandfathering window and received an acknowledgment",
      "Foreign-owned entities must comply with FDI norms applicable to the payment aggregation sector and obtain necessary FIPB/RBI approvals",
    ],
    documents: [
      {
        category: "Corporate & Legal Documents",
        items: [
          "Certificate of Incorporation and updated Memorandum & Articles of Association",
          "Board resolution authorizing the PA license application and designating the nodal officer",
          "Audited financial statements for the preceding three financial years",
          "Net-worth certificate issued by a practicing Chartered Accountant as of the latest quarter-end",
          "Detailed shareholding pattern including beneficial ownership disclosures up to the natural person level",
        ],
      },
      {
        category: "Technology & Security Documentation",
        items: [
          "System architecture diagram covering payment flow, data storage, and network topology",
          "PCI-DSS Attestation of Compliance (AoC) or a Board-approved roadmap with timelines to achieve certification",
          "Information security policy document covering data encryption, access controls, vulnerability management, and incident response",
          "Business continuity and disaster recovery plan with documented RTO/RPO targets",
        ],
      },
      {
        category: "Regulatory & Compliance Filings",
        items: [
          "Fit-and-proper declarations for all directors, key managerial personnel, and shareholders holding 10% or more",
          "KYC/AML policy document aligned with RBI Master Directions on KYC",
          "Grievance redressal mechanism and escalation matrix for merchant and consumer complaints",
          "Draft escrow account agreement with the designated scheduled commercial bank",
        ],
      },
    ],
    process: [
      {
        title: "Feasibility Assessment & Gap Analysis",
        desc: "We evaluate your current business model, corporate structure, net-worth position, and technology stack against RBI's PA guidelines. A detailed gap report with remediation actions and timelines is delivered.",
        time: "5–7 business days",
      },
      {
        title: "Corporate Restructuring & Net-Worth Compliance",
        desc: "If required, we assist with capital infusion planning, board reconstitution, escrow account establishment, and any structural changes needed to meet eligibility thresholds.",
        time: "2–4 weeks",
      },
      {
        title: "Documentation Preparation & Review",
        desc: "Our regulatory team drafts and compiles the full application dossier — including fit-and-proper declarations, IT security policies, KYC/AML frameworks, and the business plan narrative — ensuring every document meets RBI's expectations.",
        time: "3–5 weeks",
      },
      {
        title: "RBI Application Submission",
        desc: "We file the completed application through the RBI's DAKSH portal, manage all acknowledgment tracking, and serve as your liaison for any queries or clarifications raised by the regulator.",
        time: "1–2 weeks",
      },
      {
        title: "PCI-DSS Certification & IT Audit",
        desc: "Parallel to the RBI process, we coordinate with a QSA (Qualified Security Assessor) to conduct your PCI-DSS assessment, remediate findings, and obtain the Attestation of Compliance.",
        time: "6–10 weeks",
      },
      {
        title: "Gateway Integration & UAT",
        desc: "Our technology team configures payment gateway APIs, webhook callbacks, reconciliation modules, and settlement workflows. Comprehensive User Acceptance Testing is conducted across all payment instruments.",
        time: "4–6 weeks",
      },
      {
        title: "Go-Live & Post-Launch Compliance Monitoring",
        desc: "After receiving RBI authorization, we oversee the production launch, validate live transaction flows, and set up ongoing compliance monitoring — including periodic net-worth reporting, escrow audits, and cybersecurity assessments.",
        time: "1–2 weeks + ongoing",
      },
    ],
    fees: [
      { item: "Feasibility Assessment & Gap Analysis", cost: "₹75,000 – ₹1,50,000" },
      { item: "Full PA License Application (end-to-end)", cost: "₹8,00,000 – ₹15,00,000" },
      { item: "PCI-DSS Certification Coordination", cost: "₹3,00,000 – ₹6,00,000" },
      { item: "Gateway Integration (per gateway)", cost: "₹1,50,000 – ₹3,50,000" },
      { item: "Annual Compliance Retainer", cost: "₹2,50,000 – ₹5,00,000 per annum" },
      { item: "Cross-Border Module Add-On", cost: "₹2,00,000 – ₹4,00,000" },
    ],
    penalties: [
      {
        violation: "Operating as a payment aggregator without RBI authorization",
        penalty: "Directions to cease operations, monetary penalty up to ₹10 crore under the PSS Act, and potential criminal prosecution of responsible officers",
      },
      {
        violation: "Failure to maintain prescribed net-worth thresholds",
        penalty: "Show-cause notice from RBI, restriction on onboarding new merchants, and possible revocation of authorization",
      },
      {
        violation: "Non-compliance with PCI-DSS or data security standards",
        penalty: "Fines imposed by card networks (Visa/Mastercard), mandatory forensic audit at the entity's cost, and suspension of card processing privileges",
      },
      {
        violation: "Delayed settlement of merchant funds beyond T+1 timelines",
        penalty: "RBI-imposed penalty, interest liability to affected merchants, and mandatory process audit with corrective action plan",
      },
    ],
    advantages: [
      {
        icon: "🚀",
        title: "Accelerated Time-to-Market",
        desc: "Our pre-built documentation templates, established regulatory relationships, and parallel workstream management reduce the typical PA licensing timeline by 30–40%, getting you operational faster than competitors.",
      },
      {
        icon: "🛡️",
        title: "Regulatory Certainty",
        desc: "With over 150 successful PA applications under our belt, we anticipate and pre-empt common RBI objections, dramatically increasing first-submission approval rates and eliminating costly resubmission cycles.",
      },
      {
        icon: "💡",
        title: "Technology-Agnostic Architecture",
        desc: "We design gateway integrations that are vendor-neutral and API-first, allowing you to switch or add payment partners without re-engineering your core platform — future-proofing your payments stack.",
      },
      {
        icon: "📈",
        title: "Scalable Settlement Infrastructure",
        desc: "Our reconciliation and settlement frameworks are built to handle millions of daily transactions with sub-second processing, automated split settlements, and real-time merchant dashboards.",
      },
      {
        icon: "🤝",
        title: "End-to-End Accountability",
        desc: "A single engagement team owns your project from feasibility through go-live and beyond, eliminating the coordination overhead of managing separate legal, technology, and compliance vendors.",
      },
      {
        icon: "🌐",
        title: "Cross-Border Ready",
        desc: "Our solutions natively support multi-currency processing, FEMA-compliant fund flows, and international card network certifications — enabling you to serve global merchants from day one.",
      },
      {
        icon: "📊",
        title: "Dedicated Compliance Dashboard",
        desc: "Monitor all regulatory metrics, filing deadlines, escrow account balances, and compliance status in real time through a unified digital dashboard accessible to your management team and compliance officers around the clock.",
      },
      {
        icon: "💲",
        title: "Cost Optimization Through Consolidation",
        desc: "By integrating multiple payment channels through a single aggregation layer, you reduce per-transaction costs, minimize gateway subscription fees, and achieve volume-based pricing advantages that improve unit economics at scale.",
      },
    ],
    disadvantages: [
      "The PA licensing process is inherently lengthy (6–12 months) due to RBI processing timelines, which are outside any consultant's control",
      "Minimum net-worth requirements of ₹15–25 crore represent a significant capital commitment, particularly for early-stage ventures or bootstrapped startups",
      "Ongoing compliance obligations — including annual PCI-DSS recertification, quarterly net-worth reporting, and periodic RBI audits — demand dedicated internal resources even after engagement completion",
      "Regulatory uncertainty around evolving guidelines (e.g., digital lending, CBDC integration) may necessitate future advisory engagements to maintain compliance",
      "Card network rules and scheme-specific requirements (Visa, Mastercard, RuPay) add additional compliance layers that require ongoing monitoring and adaptation beyond the core RBI PA framework",
    ],
    compliance: [
      {
        area: "RBI Periodic Reporting",
        details: "Authorized PAs must submit quarterly net-worth certificates, monthly transaction volume reports, escrow account statements, and annual audited financials to the RBI's Department of Payment and Settlement Systems.",
      },
      {
        area: "PCI-DSS Recertification",
        details: "Level 1 PCI-DSS compliance requires an annual on-site assessment by a QSA, quarterly ASV scans, and immediate reporting of any cardholder data breach. Non-compliance can result in card network fines and processing suspensions.",
      },
      {
        area: "KYC/AML & Fraud Monitoring",
        details: "PAs must implement risk-based KYC for all onboarded merchants, maintain transaction monitoring systems capable of flagging suspicious activity, and file Suspicious Transaction Reports (STRs) with the Financial Intelligence Unit within prescribed timelines.",
      },
      {
        area: "Data Localization & Privacy",
        details: "All payment data must be stored exclusively on servers located in India, in compliance with RBI's data localization directive. Additionally, PAs must align their data handling practices with the Digital Personal Data Protection Act, 2023.",
      },
    ],
    faqs: [
      {
        q: "Who needs a Payment Aggregator license from the RBI?",
        a: "Any entity that facilitates payments between a payer and multiple merchants — collecting funds into a pooled or escrow account before settling them to individual merchant accounts — requires an RBI PA license. This includes e-commerce marketplaces, fintech platforms offering embedded payments, ticketing aggregators, and bill payment services. Entities merely redirecting users to a bank's payment page without handling funds may qualify as Payment Gateways and are currently outside the licensing mandate, though this distinction is narrowing.",
      },
      {
        q: "How long does the PA license application process typically take?",
        a: "From initial application submission to final RBI authorization, the process generally takes 8–14 months. The timeline includes an initial acknowledgment phase (4–6 weeks), a detailed review and query phase (3–6 months), and a final approval phase (2–4 months). Engaging experienced consultants like Your Professional can compress the preparation phase significantly and reduce query-related delays, but the RBI's internal processing timelines remain the primary variable.",
      },
      {
        q: "What is the minimum net-worth requirement for a Payment Aggregator?",
        a: "At the time of application, the entity must demonstrate a net worth of at least ₹15 crore. This must increase to ₹25 crore by the end of the third financial year after receiving authorization. Net worth is calculated as paid-up equity capital plus free reserves minus accumulated losses, deferred expenditure, and intangible assets, as certified by a practicing Chartered Accountant.",
      },
      {
        q: "Can a startup or small business obtain a PA license?",
        a: "While the net-worth thresholds present a significant barrier for early-stage companies, startups backed by institutional investors can meet the requirements through equity infusion. Alternatively, startups can leverage our White-Label Aggregator Platform offering, which allows them to offer payment aggregation services under their own brand using pre-licensed infrastructure, avoiding the need for an independent license entirely.",
      },
      {
        q: "What happens if we are already processing payments without a PA license?",
        a: "The RBI provided a grandfathering window for existing operators to apply for authorization. If you applied within this window and received an acknowledgment, you may continue operations while your application is under review. If you did not apply or were not covered by the grandfathering provisions, you must cease aggregation activities immediately or risk enforcement action including monetary penalties and operational shutdowns.",
      },
      {
        q: "Is PCI-DSS certification mandatory before applying for the PA license?",
        a: "PCI-DSS certification is not a prerequisite for filing the application, but the RBI expects applicants to either hold a valid PCI-DSS Attestation of Compliance or present a Board-approved roadmap with clear timelines for achieving certification. In practice, most successful applications include at least an in-progress PCI-DSS assessment to demonstrate seriousness. Your Professional coordinates the PCI-DSS process in parallel with the RBI application to avoid sequential delays.",
      },
      {
        q: "How does escrow account management work for Payment Aggregators?",
        a: "PAs must maintain escrow accounts with scheduled commercial banks, governed by a tripartite agreement between the PA, the bank, and the merchant. Funds collected from customers are deposited into the escrow account and must be settled to merchant accounts within T+1 business days (or as specified in the merchant agreement). The PA cannot use escrow funds for its own purposes, and the bank monitors the account for compliance with RBI's settlement timelines.",
      },
      {
        q: "What ongoing support does Your Professional provide after go-live?",
        a: "Our Annual Compliance Retainer covers quarterly net-worth certificate preparation, assistance with RBI's periodic reporting requirements, PCI-DSS recertification coordination, escrow audit facilitation, policy updates in response to regulatory changes, and priority access to our regulatory advisory team for ad-hoc queries. We also provide technology support for gateway version upgrades, new payment method integrations, and reconciliation system enhancements.",
      },
      {
        q: "Can we integrate UPI and BBPS alongside card-based payments?",
        a: "Yes, our gateway architecture supports simultaneous integration of UPI (collect and intent flows), BBPS (bill payment), NEFT/RTGS/IMPS, net banking, wallets, and card-based payments through a unified API layer. NPCI onboarding for UPI is handled as part of the engagement, ensuring a single integration effort covers all major payment instruments available in India.",
      },
      {
        q: "What is the difference between a Payment Aggregator and a Payment Gateway?",
        a: "A Payment Aggregator pools funds from customers in an escrow account before settling to merchants, requiring an RBI license. A Payment Gateway merely provides the technology to route transactions to the acquiring bank without handling funds and currently does not require RBI authorization — though this regulatory distinction is narrowing. Your Professional advises on which classification applies to your business model and structures the engagement accordingly.",
      },
      {
        q: "How does Your Professional assist with merchant onboarding compliance?",
        a: "We design and implement a risk-based merchant onboarding framework including KYC verification, business due diligence, website and app review, prohibited business screening, and ongoing transaction monitoring — all aligned with RBI Master Directions on KYC and PA guidelines. The framework is scalable to handle high-volume onboarding while maintaining compliance integrity.",
      },
      {
        q: "Can existing Payment Aggregators migrate from one technology stack to another?",
        a: "Yes, we routinely assist authorized PAs in migrating between gateway vendors, upgrading reconciliation engines, and re-architecting settlement workflows without disrupting live transaction processing. Our phased migration strategy includes parallel-run validation, automated regression testing, and rollback contingency planning to ensure zero downtime during the transition.",
      },
    ],
    cta: {
      heading: "Launch Your Payment Aggregation Platform with Confidence",
      subheading:
        "Partner with Your Professional to navigate RBI licensing, build robust payment infrastructure, and go live faster — with full regulatory peace of mind.",
      features: [
        "Free 60-minute feasibility consultation with a fintech regulatory specialist",
        "Proven track record: 150+ successful PA license applications",
        "End-to-end service from application drafting to post-launch compliance",
        "Technology-agnostic integration across all major Indian payment networks",
        "Dedicated project manager and regulatory liaison throughout the engagement",
      ],
    },
  },

  "startup-planning": {
    slug: "startup-planning",
    title: "Startup Planning",
    subtitle:
      "Transform your entrepreneurial vision into a bankable, execution-ready business plan with Your Professional's comprehensive startup planning and strategy services.",
    heroFeatures: [
      "Market Research & Competitive Landscape Analysis",
      "Financial Modeling & Funding Strategy",
      "Legal Structure & Regulatory Roadmap",
      "Go-to-Market Strategy & Customer Acquisition Planning",
      "Pitch Deck Design & Investor Readiness Preparation",
    ],
    overview: {
      heading: "Building the Blueprint for Startup Success",
      paragraphs: [
        "Every successful startup begins not with code or capital, but with clarity — clarity of purpose, clarity of market, and clarity of execution path. Yet the journey from a promising idea to a thriving business is fraught with avoidable pitfalls: misjudged market sizing, unsustainable unit economics, ill-suited legal structures, and investor presentations that fail to communicate value. At Your Professional, we believe that rigorous, methodical planning is not the antithesis of startup agility — it is its foundation. Our Startup Planning service exists to give founders the strategic infrastructure they need to move fast without breaking things that matter.",
        "Our multidisciplinary team — comprising former startup founders, chartered accountants, corporate lawyers, marketing strategists, and financial analysts — collaborates intensively with each founding team to dissect assumptions, validate hypotheses, and construct a comprehensive business plan that withstands the scrutiny of investors, regulators, and the market itself. We go far beyond templated documents: every deliverable is custom-built around your specific industry vertical, target customer segment, revenue model, and growth ambitions.",
        "Whether you are a first-time entrepreneur crystallizing a concept, a serial founder pivoting into a new vertical, or a corporate intrapreneur seeking buy-in for a new business unit, Your Professional's Startup Planning engagement provides the analytical rigor, strategic frameworks, and actionable deliverables needed to convert vision into venture. From pre-revenue ideation through Series A readiness, we are your strategic co-pilots.",
      ],
      highlights: [
        { icon: "🎯", text: "Data-driven market sizing and TAM/SAM/SOM analysis using primary and secondary research" },
        { icon: "💰", text: "Investor-grade financial models with 3–5 year projections, sensitivity analysis, and scenario planning" },
        { icon: "⚖️", text: "Optimal legal entity structuring for tax efficiency, liability protection, and funding compatibility" },
        { icon: "📣", text: "Go-to-market playbooks with channel strategy, CAC/LTV modeling, and growth experiment frameworks" },
      ],
    },
    types: [
      {
        title: "Ideation-Stage Planning",
        desc: "For founders with a concept but limited market validation. Includes problem-solution fit assessment, initial market sizing, competitive landscape mapping, lean canvas development, and a 90-day validation roadmap with defined milestones and go/no-go criteria.",
      },
      {
        title: "Pre-Seed / Seed-Stage Business Plan",
        desc: "A comprehensive, investor-ready business plan for founders preparing to raise their first external round. Covers detailed market research, business model articulation, financial projections (3-year), team and capability gap analysis, use-of-funds breakdown, and pitch deck creation.",
      },
      {
        title: "Growth-Stage Strategic Plan",
        desc: "For startups with product-market fit seeking to scale. Includes unit economics deep-dive, channel diversification strategy, organizational design for scale, Series A/B financial model with cohort-based projections, and board-ready strategic planning documents.",
      },
      {
        title: "Pivot & Restructuring Plan",
        desc: "For startups needing to change direction due to market shifts, regulatory changes, or traction challenges. Encompasses current state assessment, pivot opportunity analysis, revised business model design, stakeholder communication strategy, and updated financial forecasts.",
      },
      {
        title: "Corporate Venture / Intrapreneurship Plan",
        desc: "Tailored for corporate teams launching new internal ventures or spin-offs. Includes strategic alignment analysis with the parent organization, ring-fenced P&L modeling, governance structure design, technology stack independence assessment, and internal investment committee presentation materials.",
      },
    ],
    eligibility: [
      "Individual entrepreneurs, founding teams, or corporate innovation groups at any stage from ideation through growth",
      "The concept must involve a lawful business activity that does not violate Indian regulatory frameworks or international sanctions",
      "Founders should be committed to active participation in the planning process, including weekly strategy sessions and feedback cycles",
      "For investor-readiness engagements, at least one founder should have domain expertise or relevant industry experience in the target sector",
      "Entities seeking government startup recognition (DPIIT) must meet the definition of a startup under the Startup India initiative — incorporated for less than 10 years with turnover below ₹100 crore",
      "Foreign nationals or NRIs may engage our services but must comply with applicable FEMA and Companies Act provisions for establishing entities in India",
      "The founding team should be willing to share relevant financial data, market research, customer feedback, and operational metrics to enable evidence-based planning",
    ],
    documents: [
      {
        category: "Founder & Team Information",
        items: [
          "Detailed resumes or LinkedIn profiles of all co-founders highlighting relevant experience and skill sets",
          "Founders' agreement or term sheet outlining equity splits, vesting schedules, roles, and decision-making protocols",
          "Personal financial statements of founders (if bootstrapping or providing personal guarantees for initial funding)",
          "Advisory board details and any existing mentor or investor relationships",
        ],
      },
      {
        category: "Business Concept & Market Data",
        items: [
          "Concept note or idea brief describing the problem, proposed solution, target customer, and initial revenue hypothesis",
          "Any existing market research, customer surveys, interview transcripts, or pilot program results",
          "Competitive analysis data — list of direct and indirect competitors, their pricing, features, and market positioning",
          "Technology architecture overview or product roadmap (if product development has commenced)",
          "Existing pitch deck or investor communication materials (if any, for refinement)",
        ],
      },
      {
        category: "Financial & Legal Records",
        items: [
          "Historical financial statements if the entity is already incorporated and operational",
          "Details of any existing funding — convertible notes, SAFEs, equity rounds, grants, or loans",
          "Certificate of Incorporation, PAN, GST registration, and other statutory registrations (if entity exists)",
          "Intellectual property filings — patents, trademarks, copyrights (if any)",
        ],
      },
    ],
    process: [
      {
        title: "Discovery & Founder Alignment Workshop",
        desc: "An intensive workshop with the founding team to understand the vision, dissect the problem statement, map stakeholder expectations, and define the engagement scope. We establish shared terminology, success metrics, and a project timeline.",
        time: "2–3 days",
      },
      {
        title: "Market Research & Competitive Intelligence",
        desc: "Our research team conducts primary interviews (industry experts, potential customers, channel partners) and secondary analysis (industry reports, regulatory filings, patent databases) to construct a comprehensive market landscape covering size, growth drivers, barriers, and competitive dynamics.",
        time: "2–3 weeks",
      },
      {
        title: "Business Model Design & Validation",
        desc: "Using frameworks like the Business Model Canvas, Value Proposition Canvas, and Jobs-to-Be-Done, we co-create and stress-test your business model. Revenue streams, pricing strategies, cost structures, and key partnerships are rigorously defined and validated against market data.",
        time: "1–2 weeks",
      },
      {
        title: "Financial Modeling & Scenario Analysis",
        desc: "Our financial analysts build a bottom-up financial model covering revenue projections, cost buildup, cash flow forecasting, break-even analysis, and funding requirements. Three scenarios (conservative, base, optimistic) are modeled with sensitivity analysis on key assumptions.",
        time: "2–3 weeks",
      },
      {
        title: "Legal Structure & Regulatory Strategy",
        desc: "We recommend the optimal legal entity type (Pvt Ltd, LLP, OPC), draft the regulatory compliance roadmap, advise on IP protection strategy, and coordinate entity incorporation if needed. Tax planning considerations (startup tax holiday under Section 80-IAC, angel tax implications) are integrated.",
        time: "1–2 weeks",
      },
      {
        title: "Go-to-Market Strategy & Growth Playbook",
        desc: "We develop a detailed GTM plan covering customer segmentation, channel strategy (organic, paid, partnerships), launch sequencing, early adopter acquisition tactics, and a 90-day growth experiment backlog with clear KPIs and measurement frameworks.",
        time: "1–2 weeks",
      },
      {
        title: "Pitch Deck, Documentation & Investor Readiness",
        desc: "All outputs are synthesized into a polished business plan document, a visually compelling investor pitch deck (15–20 slides), a one-page executive summary, and a data room checklist. We conduct mock pitch sessions with feedback to prepare founders for investor conversations.",
        time: "1–2 weeks",
      },
    ],
    fees: [
      { item: "Ideation-Stage Planning Package", cost: "₹1,50,000 – ₹3,00,000" },
      { item: "Pre-Seed / Seed Business Plan (Comprehensive)", cost: "₹3,50,000 – ₹6,00,000" },
      { item: "Growth-Stage Strategic Plan", cost: "₹5,00,000 – ₹8,50,000" },
      { item: "Pitch Deck Design & Investor Readiness (Standalone)", cost: "₹1,00,000 – ₹2,50,000" },
      { item: "Financial Model Build (Standalone)", cost: "₹1,25,000 – ₹2,75,000" },
      { item: "Entity Incorporation & Regulatory Setup Add-On", cost: "₹50,000 – ₹1,25,000" },
    ],
    penalties: [
      {
        violation: "Operating a business without required registrations (GST, Shops & Establishment, FSSAI, etc.)",
        penalty: "Fines ranging from ₹10,000 to ₹25,000 per registration lapse, potential sealing of business premises, and inability to enforce commercial contracts",
      },
      {
        violation: "Misrepresentation in investor communications or financial projections",
        penalty: "Personal liability for founders under SEBI regulations, potential fraud charges under IPC Section 420, and reputational damage leading to blacklisting by investor networks",
      },
      {
        violation: "Failure to comply with Startup India DPIIT recognition conditions",
        penalty: "Revocation of startup recognition status, clawback of tax benefits availed under Section 80-IAC, and ineligibility for government tenders reserved for recognized startups",
      },
      {
        violation: "Non-compliance with employment and labor regulations during early hiring",
        penalty: "Penalties under the Shops & Establishment Act, EPF/ESI non-compliance fines, and potential employee litigation under the Industrial Disputes Act",
      },
    ],
    advantages: [
      {
        icon: "🧭",
        title: "Strategic Clarity from Day One",
        desc: "Our structured planning process eliminates the fog of uncertainty that paralyzes many founding teams. You emerge with a crystal-clear understanding of your market position, competitive moats, unit economics, and the precise milestones needed to reach each funding stage.",
      },
      {
        icon: "📊",
        title: "Investor-Grade Deliverables",
        desc: "Every document we produce — from the financial model to the pitch deck — meets the standards expected by institutional investors, angel networks, and incubator selection committees. Our clients consistently report higher engagement rates and faster fundraising cycles.",
      },
      {
        icon: "🔬",
        title: "Evidence-Based Decision Making",
        desc: "We replace gut-feel assumptions with data-driven insights drawn from primary research, industry benchmarks, and financial analysis. This discipline dramatically reduces the risk of pursuing unviable markets or unsustainable business models.",
      },
      {
        icon: "⚖️",
        title: "Regulatory & Legal Foresight",
        desc: "Our legal team identifies regulatory requirements, licensing dependencies, and compliance obligations upfront — before they become expensive surprises. Entity structuring is optimized for both current operations and future fundraising flexibility.",
      },
      {
        icon: "🤝",
        title: "Multidisciplinary Expert Access",
        desc: "Instead of hiring multiple consultants, your founding team gets coordinated access to strategists, financial analysts, corporate lawyers, marketing experts, and design professionals — all working from a shared understanding of your business.",
      },
      {
        icon: "🔄",
        title: "Iterative & Founder-Centric Process",
        desc: "We do not hand off a static document and disappear. Our engagement involves weekly founder workshops, iterative feedback loops, and assumption-testing exercises that ensure the final plan reflects the founding team's vision while meeting external stakeholder expectations.",
      },
      {
        icon: "🔐",
        title: "IP Protection from Inception",
        desc: "Our legal team ensures your intellectual property — brand names, logos, proprietary processes, and technology — is protected through trademark filings, patent applications, and watertight assignment agreements before you enter the market.",
      },
      {
        icon: "🌐",
        title: "Network Access & Ecosystem Integration",
        desc: "Through our engagements, founding teams gain access to our curated ecosystem of angel investors, incubators, accelerators, mentor networks, and potential early customers — connections that can dramatically accelerate early traction and market validation.",
      },
    ],
    disadvantages: [
      "Comprehensive startup planning engagements require 8–12 weeks of calendar time, which may feel prolonged for founders eager to launch immediately",
      "Engagement fees, while competitive for the depth of service provided, represent a meaningful investment for bootstrapped founders without initial capital",
      "The planning process may surface uncomfortable truths about market size, competitive intensity, or unit economics that require founders to adjust or abandon cherished assumptions",
      "A business plan, no matter how well-crafted, cannot guarantee market success — execution, timing, and external factors remain beyond the scope of any planning exercise",
      "Market conditions, regulatory landscapes, and competitive dynamics evolve rapidly — a plan crafted today may require significant revision within six to twelve months as the external environment shifts",
    ],
    compliance: [
      {
        area: "Entity Registration & Statutory Compliance",
        details: "All startups must register with the Registrar of Companies (for Pvt Ltd/OPC) or the Registrar of LLPs, obtain PAN and TAN, register for GST if turnover thresholds are met, and comply with the Shops & Establishment Act of the operating state. Professional tax registration may also be required depending on the jurisdiction.",
      },
      {
        area: "Startup India / DPIIT Recognition",
        details: "Eligible startups should apply for DPIIT recognition to access benefits including tax exemptions under Section 80-IAC (three consecutive years of tax holiday within the first ten years), self-certification under labor and environmental laws, fast-tracked patent examination, and eligibility for the Fund of Funds and other government schemes.",
      },
      {
        area: "Intellectual Property Protection",
        details: "Founders should file trademark applications for their brand name, logo, and tagline at the earliest opportunity. Patentable innovations should be documented and filed provisionally. Employment and contractor agreements must include robust IP assignment and confidentiality clauses to protect proprietary assets.",
      },
      {
        area: "Fundraising & Securities Compliance",
        details: "Equity issuance must comply with Companies Act provisions regarding share valuation (Rule 11UA), board and shareholder approvals, and ROC filings. Convertible instruments (SAFE, CCD) must be structured carefully to avoid angel tax issues. FEMA compliance is mandatory when accepting investments from foreign investors or NRIs.",
      },
    ],
    faqs: [
      {
        q: "At what stage should a startup engage a planning consultant?",
        a: "The ideal time is before you commit significant capital or begin fundraising. Engaging during the ideation or pre-seed stage allows us to validate your core assumptions, identify market risks, and structure the business optimally from the outset. However, our services add substantial value at any stage — even growth-stage companies benefit from rigorous strategic planning before raising larger rounds or entering new markets.",
      },
      {
        q: "How is Your Professional's startup planning different from using online templates?",
        a: "Online templates provide a generic structure but cannot perform original market research, build custom financial models based on your specific unit economics, or provide legal and regulatory guidance tailored to your industry. Our deliverables are entirely bespoke: the market sizing uses real data sources, the financial model reflects your actual revenue drivers and cost structure, and the legal strategy accounts for your specific regulatory landscape. The gap between a template and our output is the difference between a sketch and an architect's blueprint.",
      },
      {
        q: "Will you help us incorporate the company and set up operations?",
        a: "Yes. Our Entity Incorporation & Regulatory Setup Add-On covers company registration (Pvt Ltd, LLP, or OPC), PAN/TAN application, GST registration, professional tax, Shops & Establishment license, DPIIT startup recognition, and opening of current bank accounts. We coordinate with our in-house legal team to handle all filings so founders can focus on product and customer development.",
      },
      {
        q: "What does the financial model include, and can we update it ourselves?",
        a: "Our financial models are built in Excel/Google Sheets with clearly labeled assumption cells, automated calculations, and scenario toggle switches. They include revenue buildup (bottoms-up by channel and cohort), cost structure (fixed and variable), cash flow statements, P&L projections, balance sheet estimates, break-even analysis, and funding waterfall charts. We provide a walkthrough session and user guide so your team can update assumptions and generate new scenarios independently.",
      },
      {
        q: "Do you assist with investor introductions and fundraising?",
        a: "While our core engagement focuses on planning and documentation, we maintain relationships with over 80 angel investors, 25 VC funds, and multiple incubators and accelerators across India. For clients who opt for investor readiness services, we provide warm introductions where there is a genuine strategic fit, conduct mock pitch sessions, and coach founders on negotiation tactics and term sheet evaluation.",
      },
      {
        q: "How do you handle confidentiality and intellectual property?",
        a: "We execute a comprehensive Non-Disclosure Agreement before any substantive discussions begin. All engagement materials are stored in encrypted, access-controlled environments. Our team members are contractually bound by confidentiality obligations. We do not retain proprietary business information beyond the engagement period, and all deliverables and working files are transferred exclusively to the client upon project completion.",
      },
      {
        q: "Can you help if our startup operates in a regulated industry (fintech, healthtech, edtech)?",
        a: "Absolutely. Regulated industries are a core specialization. Our planning process includes a dedicated regulatory mapping phase where we identify all applicable licenses, certifications, and compliance requirements specific to your industry vertical. For fintech startups, this might include RBI, SEBI, or IRDAI licensing; for healthtech, CDSCO and state pharmacy council requirements; for edtech, NEP compliance and UGC/AICTE frameworks. The regulatory roadmap is integrated into both the business plan timeline and the financial model's cost projections.",
      },
      {
        q: "What is the typical ROI of engaging Your Professional for startup planning?",
        a: "While ROI varies by stage and context, our clients consistently report three tangible returns: first, a 40–60% reduction in time-to-fundraise due to investor-ready documentation; second, avoidance of costly legal and structural mistakes that typically cost 3–5x more to fix post-incorporation; and third, significantly improved strategic decision-making confidence among founding teams, leading to more disciplined capital allocation and faster achievement of key milestones.",
      },
      {
        q: "Do you help with market research and competitive analysis?",
        a: "Yes, our research team conducts primary and secondary market research including TAM/SAM/SOM analysis, competitor benchmarking, customer surveys, and industry expert interviews. The findings are integrated into the business plan, financial model, and pitch deck to ensure all strategic decisions are evidence-based and defensible during investor discussions.",
      },
      {
        q: "Can you help us apply for government grants and startup schemes?",
        a: "Absolutely. We assist with applications for Startup India recognition (DPIIT), state-level startup policies, MSME registration, SIDBI Fund of Funds access, and sector-specific grants such as BioNEST, MeitY, and DST programs. Our team has a strong success rate in securing government financial support for early-stage ventures across multiple sectors.",
      },
      {
        q: "What entity structure do you recommend for a technology startup?",
        a: "The optimal structure depends on factors including founder count, fundraising plans, regulatory requirements, and tax implications. For most venture-fundable startups, we recommend a Private Limited Company due to its ability to issue equity, limited liability protection, and investor familiarity. LLPs suit professional services firms, while OPCs work for solo founders not seeking external investment in the near term.",
      },
      {
        q: "How do you support startups in heavily regulated industries?",
        a: "Regulated industries are a core strength. Our planning includes a comprehensive regulatory mapping phase identifying all applicable licenses, certifications, and compliance timelines. For fintech, this covers RBI and SEBI licensing; for healthtech, CDSCO and FSSAI approvals; for edtech, UGC and AICTE frameworks. Regulatory costs and timelines are factored into both the business plan and financial projections.",
      },
    ],
    cta: {
      heading: "Turn Your Startup Vision into a Venture-Ready Reality",
      subheading:
        "Book a complimentary strategy session with Your Professional and discover how methodical planning can accelerate your path from idea to funded, operational startup.",
      features: [
        "Free 45-minute founder strategy consultation — no commitment required",
        "Custom-built deliverables: no templates, no generic advice",
        "Multidisciplinary team: strategists, analysts, lawyers, and designers under one roof",
        "150+ startups planned and launched across 20+ industry verticals",
        "Ongoing advisory available through quarterly retainer programs",
      ],
    },
  },

  "csr-registration": {
    slug: "csr-registration",
    title: "CSR Registration",
    subtitle:
      "Navigate Corporate Social Responsibility compliance with confidence — Your Professional ensures your company meets every statutory obligation while making a meaningful impact on society.",
    heroFeatures: [
      "End-to-end CSR-1 and CSR-2 filing assistance",
      "Strategic CSR policy drafting aligned with Schedule VII",
      "Ongoing annual compliance and reporting management",
      "Expert advisory on eligible CSR activities and fund utilisation",
      "Seamless coordination with implementing agencies and NGOs",
    ],
    overview: {
      heading: "Corporate Social Responsibility Registration & Compliance",
      paragraphs: [
        "Corporate Social Responsibility (CSR) is no longer a voluntary goodwill gesture — it is a statutory mandate under Section 135 of the Companies Act, 2013. Every company meeting the prescribed net worth, turnover, or net profit thresholds must constitute a CSR Committee, formulate a robust CSR policy, and spend at least two per cent of its average net profits on eligible social welfare activities. The registration framework requires entities undertaking CSR activities — whether directly or through implementing agencies — to file Form CSR-1 on the MCA portal and obtain a unique CSR Registration Number before commencing any project.",
        "At Your Professional, we simplify the entire CSR registration and compliance lifecycle. From determining applicability and drafting your CSR policy to identifying Schedule VII-aligned projects and filing annual returns in Form CSR-2, our specialists handle every detail so your leadership team can focus on making a genuine social impact. We work closely with NGOs, Section 8 companies, and government bodies to ensure your chosen activities qualify under the law and that every rupee spent is properly documented.",
        "Non-compliance with CSR provisions can attract stringent penalties — including fines up to twice the unspent amount and personal liability for officers in default. Our proactive compliance calendar, real-time tracking dashboards, and periodic audit reviews ensure you stay ahead of every deadline and avoid costly regulatory action.",
      ],
      highlights: [
        { icon: "🏛️", text: "Mandatory for companies with ₹500 Cr+ net worth, ₹1,000 Cr+ turnover, or ₹5 Cr+ net profit" },
        { icon: "📋", text: "CSR-1 registration required for every implementing entity before project commencement" },
        { icon: "💰", text: "Minimum 2% of average net profits of preceding three financial years must be spent on CSR" },
        { icon: "⚖️", text: "Penalties of up to ₹1 Crore for the company and ₹2 Lakh for officers in default" },
      ],
    },
    types: [
      {
        title: "Direct CSR Implementation",
        desc: "The company itself undertakes CSR activities through its own CSR Committee and internal team, directly managing project execution, fund disbursement, and impact assessment without an intermediary.",
      },
      {
        title: "Implementation Through Registered Entities",
        desc: "CSR activities are carried out via a registered implementing agency — such as a Section 8 company, registered trust, or registered society — that holds a valid CSR-1 Registration Number from the MCA portal.",
      },
      {
        title: "Collaboration with Government Bodies",
        desc: "Companies partner with central or state government agencies, public sector undertakings, or government-established entities to execute CSR projects in areas like healthcare, education, and rural development.",
      },
      {
        title: "Ongoing CSR Projects (Multi-Year)",
        desc: "Long-term CSR initiatives spanning more than one financial year, requiring Board-approved multi-year project plans, annual progress reporting, and carry-forward accounting of unspent amounts into a designated Unspent CSR Account.",
      },
    ],
    eligibility: [
      "Companies with a net worth of ₹500 Crore or more during the immediately preceding financial year",
      "Companies with a turnover of ₹1,000 Crore or more during the immediately preceding financial year",
      "Companies with a net profit of ₹5 Crore or more during the immediately preceding financial year",
      "Foreign companies having a branch or project office in India meeting the above thresholds",
      "Holding, subsidiary, and associate companies meeting any of the prescribed financial thresholds independently",
      "Section 8 companies, registered trusts, or registered societies seeking CSR-1 registration as implementing agencies",
      "Any entity established by the company specifically for undertaking CSR activities on its behalf",
      "Public sector undertakings voluntarily opting for CSR registration to receive funds from private-sector companies",
    ],
    documents: [
      {
        category: "Company Identification Documents",
        items: [
          "Certificate of Incorporation (COI) of the company",
          "Permanent Account Number (PAN) card of the company",
          "Memorandum of Association (MOA) and Articles of Association (AOA)",
          "Board Resolution authorising CSR registration and appointing CSR Committee members",
          "Latest audited financial statements for the preceding three financial years",
        ],
      },
      {
        category: "CSR Committee & Policy Documents",
        items: [
          "Composition details of the CSR Committee with DIN of each director",
          "Approved CSR Policy document aligned with Schedule VII of the Companies Act",
          "Minutes of CSR Committee meetings approving project selection and fund allocation",
          "Annual Action Plan detailing projects, budgets, timelines, and implementation modalities",
        ],
      },
      {
        category: "Implementing Agency Documents (if applicable)",
        items: [
          "Registration certificate of the trust, society, or Section 8 company",
          "PAN and TAN of the implementing agency",
          "Governing document (Trust Deed / MOA / Rules & Regulations) of the agency",
          "Three years of audited financial statements of the implementing agency",
          "Unique CSR Registration Number (if already obtained) or CSR-1 application acknowledgement",
        ],
      },
    ],
    process: [
      {
        title: "Applicability Assessment",
        desc: "Our team analyses your company's financials — net worth, turnover, and net profit — against statutory thresholds to confirm whether CSR provisions apply and calculate the minimum CSR spend obligation.",
        time: "1–2 business days",
      },
      {
        title: "CSR Committee Constitution",
        desc: "We assist in constituting the CSR Committee with the requisite number of directors (including at least one independent director for listed companies) and draft the Board Resolution for committee formation.",
        time: "2–3 business days",
      },
      {
        title: "CSR Policy Drafting & Board Approval",
        desc: "A comprehensive CSR Policy is drafted covering eligible activities under Schedule VII, target beneficiaries, geographic focus areas, implementation modalities, and monitoring mechanisms, then placed before the Board for approval.",
        time: "3–5 business days",
      },
      {
        title: "Form CSR-1 Filing & Registration",
        desc: "We prepare and file Form CSR-1 on the MCA portal for the company or its implementing agency, uploading all supporting documents and obtaining the unique CSR Registration Number upon approval.",
        time: "5–7 business days",
      },
      {
        title: "Annual Action Plan Preparation",
        desc: "A detailed Annual Action Plan is prepared listing each CSR project, estimated expenditure, implementation timeline, responsible personnel, and expected social impact metrics for the financial year.",
        time: "3–4 business days",
      },
      {
        title: "Project Execution & Fund Disbursement Support",
        desc: "We coordinate with implementing agencies, verify project milestones, ensure timely fund disbursement, and maintain contemporaneous records of all CSR expenditures for audit readiness.",
        time: "Ongoing throughout the year",
      },
      {
        title: "Annual Reporting & Form CSR-2 Filing",
        desc: "At year-end, we compile the CSR Annual Report, prepare the Board's Report annexure on CSR, and file Form CSR-2 with the MCA detailing actual spend, unspent amounts, and transfer to the Unspent CSR Account if applicable.",
        time: "5–10 business days post year-end",
      },
    ],
    fees: [
      { item: "CSR Applicability Assessment & Advisory", cost: "₹4,999 – ₹9,999" },
      { item: "CSR Policy Drafting & Committee Constitution", cost: "₹7,999 – ₹14,999" },
      { item: "Form CSR-1 Filing (per entity)", cost: "₹3,999 – ₹6,999" },
      { item: "Annual Action Plan Preparation", cost: "₹5,999 – ₹11,999" },
      { item: "Annual CSR-2 Filing & Reporting", cost: "₹6,999 – ₹12,999" },
      { item: "Comprehensive Annual CSR Compliance Package", cost: "₹24,999 – ₹49,999" },
    ],
    penalties: [
      {
        violation: "Failure to spend the prescribed CSR amount",
        penalty:
          "Company must transfer the unspent amount to a scheduled bank's Unspent CSR Account within 30 days of the financial year-end; further non-compliance attracts a fine of up to twice the unspent amount or ₹1 Crore, whichever is less.",
      },
      {
        violation: "Non-transfer of unspent amount to Fund",
        penalty:
          "If unspent CSR funds relating to an ongoing project are not utilised within three financial years, the amount must be transferred to a Fund specified in Schedule VII (e.g., PM CARES, Clean Ganga Fund). Default attracts a fine of up to ₹1 Crore for the company.",
      },
      {
        violation: "Officers in default",
        penalty:
          "Every officer in default — including directors on the CSR Committee — is liable to a fine of up to ₹2 Lakh or imprisonment for up to three years, or both, for persistent non-compliance.",
      },
      {
        violation: "False or misleading CSR reporting",
        penalty:
          "Filing incorrect information in CSR-1 or CSR-2, or misrepresenting CSR spend in the Board's Report, may attract prosecution under Section 447 (fraud) with imprisonment of up to 10 years and fine up to three times the amount involved.",
      },
    ],
    advantages: [
      {
        icon: "✅",
        title: "Full Legal Compliance",
        desc: "Avoid hefty fines and director liability by meeting every CSR obligation under Section 135 and the Companies (CSR Policy) Rules on time, every time.",
      },
      {
        icon: "🌍",
        title: "Meaningful Social Impact",
        desc: "Channel your CSR funds into high-impact projects — from education and healthcare to environmental sustainability — that create lasting change in underserved communities.",
      },
      {
        icon: "📈",
        title: "Enhanced Brand Reputation",
        desc: "Demonstrable CSR commitment strengthens stakeholder trust, improves ESG ratings, and differentiates your brand in increasingly socially conscious markets.",
      },
      {
        icon: "🤝",
        title: "Strategic NGO Partnerships",
        desc: "We connect you with vetted, registered implementing agencies whose expertise and grassroots presence maximise the reach and effectiveness of every CSR rupee spent.",
      },
      {
        icon: "📊",
        title: "Transparent Reporting & Audit Trail",
        desc: "Meticulous documentation, real-time dashboards, and structured annual reports ensure complete transparency for auditors, regulators, and shareholders alike.",
      },
      {
        icon: "🛡️",
        title: "Proactive Risk Mitigation",
        desc: "Our compliance calendar and automated alerts flag upcoming deadlines weeks in advance, eliminating the risk of missed filings and unspent-amount penalties.",
      },
      {
        icon: "💲",
        title: "Tax-Efficient CSR Structuring",
        desc: "We identify opportunities where CSR expenditure may qualify for independent tax deductions under provisions such as Section 80G, helping you maximise the fiscal efficiency of your mandatory CSR spend without compromising compliance.",
      },
      {
        icon: "🌐",
        title: "Nationwide Implementation Reach",
        desc: "Our network of verified implementing agencies spans all 28 states and 8 Union Territories, enabling your company to execute CSR projects across diverse geographies and thematic areas with consistent quality and accountability.",
      },
    ],
    disadvantages: [
      "CSR applicability criteria are assessed annually, meaning companies may intermittently fall in and out of the mandate, complicating long-term project planning.",
      "Identifying genuinely impactful and Schedule VII-compliant projects requires significant due diligence, especially in regions with limited NGO infrastructure.",
      "Multi-year CSR projects carry the risk of implementing agency underperformance, requiring robust monitoring frameworks and contingency plans.",
      "Administrative overhead — including committee meetings, annual action plans, and dual-form filings — can be burdensome for smaller companies near the threshold.",
      "The Schedule VII list of eligible CSR activities, while broad, may not cover every social cause a company wishes to support, requiring careful project structuring to ensure compliance with permissible categories.",
    ],
    compliance: [
      {
        area: "Annual CSR Spend Verification",
        details:
          "Verify that at least 2% of average net profits of the preceding three financial years has been spent on eligible CSR activities; document any shortfall with reasons in the Board's Report.",
      },
      {
        area: "Unspent CSR Account Management",
        details:
          "Transfer any unspent amount for ongoing projects to a designated Unspent CSR Account within 30 days of the financial year-end and utilise it within three subsequent financial years.",
      },
      {
        area: "Board & Committee Reporting",
        details:
          "Annex the CSR Annual Report to the Board's Report, disclose CSR Committee composition, and ensure the Annual General Meeting agenda includes CSR performance discussion.",
      },
      {
        area: "Impact Assessment for Large Spenders",
        details:
          "Companies with CSR obligations of ₹10 Crore or more must undertake an independent impact assessment of their CSR projects through a registered agency and include findings in the annual report.",
      },
    ],
    faqs: [
      {
        q: "Which companies are required to comply with CSR provisions?",
        a: "Any company — whether private, public, or a foreign company's Indian branch — with a net worth of ₹500 Crore or more, turnover of ₹1,000 Crore or more, or net profit of ₹5 Crore or more during the immediately preceding financial year must comply with CSR provisions under Section 135 of the Companies Act, 2013.",
      },
      {
        q: "What is Form CSR-1 and who needs to file it?",
        a: "Form CSR-1 is an electronic registration form filed on the MCA portal by entities that wish to undertake CSR activities as implementing agencies — including Section 8 companies, registered trusts, and registered societies. Upon approval, the entity receives a unique CSR Registration Number that must be quoted in all subsequent filings.",
      },
      {
        q: "How is the minimum CSR spend calculated?",
        a: "The minimum CSR expenditure is 2% of the average net profits of the company calculated over the three immediately preceding financial years. Net profit for this purpose is computed in accordance with Section 198 of the Companies Act, excluding profits from overseas branches and dividend income from other Indian companies already complying with CSR.",
      },
      {
        q: "What happens if our company does not spend the full CSR amount?",
        a: "If the company fails to spend the entire CSR amount in a financial year, the unspent balance for ongoing projects must be transferred to an Unspent CSR Account within 30 days of the year-end and utilised within three years. Amounts not relating to any ongoing project must be transferred to a Fund specified in Schedule VII within six months. Non-compliance attracts penalties for both the company and its officers.",
      },
      {
        q: "Can CSR funds be used for activities benefiting employees?",
        a: "No. Activities that exclusively benefit the employees of the company or their families are expressly excluded from qualifying CSR activities under the Companies (CSR Policy) Rules. CSR projects must target the broader community, particularly marginalised and underprivileged sections of society.",
      },
      {
        q: "Is CSR expenditure tax-deductible?",
        a: "CSR expenditure per se is not deductible under Section 37(1) of the Income Tax Act. However, if the CSR spend qualifies independently under specific tax provisions — such as Section 80G for donations to eligible institutions — the company may claim deductions to the extent permitted by those provisions.",
      },
      {
        q: "What activities qualify under Schedule VII?",
        a: "Schedule VII covers a broad range of activities including eradicating hunger and poverty, promoting education and gender equality, ensuring environmental sustainability, supporting armed forces veterans, funding rural development and slum area improvement, disaster management, and contributing to technology incubators and government-recognised research bodies.",
      },
      {
        q: "How long does the entire CSR registration process take?",
        a: "With Your Professional managing the process, the initial applicability assessment and policy drafting typically take 5–7 business days. Form CSR-1 filing and approval take an additional 5–7 business days depending on MCA processing times. End to end, most companies are fully registered and compliant within 2–3 weeks.",
      },
      {
        q: "Can a company carry forward excess CSR spending to future years?",
        a: "Yes, under the 2021 amendment to the CSR Rules, any amount spent in excess of the mandatory 2% in a financial year may be set off against the CSR obligation for up to three immediately succeeding financial years, subject to Board approval and disclosure in the Annual Report on CSR Activities.",
      },
      {
        q: "Does CSR apply to private limited companies and LLPs?",
        a: "CSR provisions under Section 135 apply to every company registered under the Companies Act, 2013 — including private limited companies and subsidiaries of foreign companies — that meets the net worth, turnover, or net profit thresholds. However, LLPs are not covered under these provisions as they are governed by the LLP Act, 2008.",
      },
      {
        q: "Can a company undertake CSR activities through its own foundation?",
        a: "Yes, a company can implement CSR projects through its own Section 8 company (not-for-profit) or through registered trusts and societies established by the company itself. The implementing entity must obtain CSR Registration (Form CSR-1) from the MCA portal before receiving CSR funds from the company.",
      },
      {
        q: "What is the role of the CSR Committee?",
        a: "The CSR Committee, comprising three or more directors (at least one independent), is responsible for formulating the CSR policy, recommending the annual CSR budget to the Board, monitoring project implementation, and ensuring that the Annual Action Plan is executed within prescribed timelines and budget allocations.",
      },
    ],
    cta: {
      heading: "Make Your CSR Count — Register with Confidence",
      subheading:
        "Let Your Professional handle every aspect of your CSR registration and compliance so you can focus on creating real social impact.",
      features: [
        "Complete CSR-1 filing and registration management",
        "Schedule VII-aligned policy and project advisory",
        "Annual CSR-2 reporting and audit-ready documentation",
        "Dedicated compliance calendar with automated reminders",
        "Expert coordination with NGOs and implementing agencies",
      ],
    },
  },

  "pitch-deck-for-startups": {
    slug: "pitch-deck-for-startups",
    title: "Pitch Deck for Start-ups",
    subtitle:
      "Transform your vision into a compelling investor narrative — Your Professional crafts data-driven, design-forward pitch decks that open doors to funding and strategic partnerships.",
    heroFeatures: [
      "Custom-designed pitch decks tailored to your industry and funding stage",
      "Rigorous financial modelling with investor-ready projections",
      "Persuasive storytelling backed by market research and competitive analysis",
      "Unlimited revision rounds until your deck is pitch-perfect",
      "Presentation coaching and Q&A preparation for investor meetings",
    ],
    overview: {
      heading: "Professional Pitch Deck Creation for Start-ups & Growing Businesses",
      paragraphs: [
        "A pitch deck is often the single most important document in a start-up's fundraising journey. Whether you are seeking pre-seed capital from angel investors, closing a Series A round with venture capitalists, or pitching to corporate accelerators, the quality of your presentation can make or break the deal. Investors typically spend fewer than four minutes reviewing a deck before deciding whether to take the next meeting — every slide must earn its place, every data point must reinforce your narrative, and every visual must convey professionalism and clarity.",
        "At Your Professional, we combine strategic consulting with world-class design to produce pitch decks that do more than look impressive — they tell a story that resonates. Our process begins with a deep-dive discovery session where we understand your business model, unit economics, competitive landscape, and growth trajectory. We then structure your narrative using battle-tested frameworks favoured by top-tier investors, weaving in market sizing data, traction metrics, and financial projections that withstand due-diligence scrutiny.",
        "Beyond the slides themselves, we prepare you for the room. Our presentation coaching sessions cover delivery techniques, body language, objection handling, and the inevitable tough questions about burn rate, customer acquisition cost, and path to profitability. From first draft to final handshake, Your Professional is your strategic partner in fundraising success.",
      ],
      highlights: [
        { icon: "🎯", text: "Average 3.7-minute investor attention span — every slide must deliver maximum impact" },
        { icon: "💼", text: "Decks structured using proven 10–15 slide frameworks endorsed by leading VCs" },
        { icon: "📊", text: "Investor-grade financial models with 3–5 year revenue projections and scenario analysis" },
        { icon: "🚀", text: "Over 200 start-ups served across SaaS, fintech, healthtech, D2C, and deeptech verticals" },
      ],
    },
    types: [
      {
        title: "Pre-Seed / Angel Pitch Deck",
        desc: "A concise, vision-driven deck designed for early-stage fundraising where traction is limited. Emphasises the founding team's credibility, the problem's urgency, the proposed solution's uniqueness, and a clear ask with use-of-funds breakdown.",
      },
      {
        title: "Seed / Series A Pitch Deck",
        desc: "A data-rich presentation for institutional investors featuring validated traction metrics, detailed unit economics, a defensible go-to-market strategy, competitive moat analysis, and three-to-five-year financial projections with clear milestones.",
      },
      {
        title: "Growth / Series B+ Pitch Deck",
        desc: "A sophisticated deck for later-stage rounds that showcases proven scalability, cohort-level retention data, market leadership positioning, strategic expansion plans, and a compelling path to profitability or IPO readiness.",
      },
      {
        title: "Corporate / Accelerator Pitch Deck",
        desc: "Tailored for accelerator applications or corporate innovation programs, this deck highlights strategic alignment with the host organisation, pilot-ready product maturity, integration feasibility, and mutual value creation opportunities.",
      },
      {
        title: "Internal Strategy / Board Deck",
        desc: "A comprehensive presentation for board meetings or internal stakeholder alignment that covers operational performance, KPI dashboards, strategic initiatives, risk matrices, and resource allocation proposals.",
      },
    ],
    eligibility: [
      "Early-stage start-ups preparing for their first angel or pre-seed fundraising round",
      "Growth-stage companies targeting Series A, B, or later institutional funding rounds",
      "Start-ups applying to incubators, accelerators, or government grant programmes",
      "Founders seeking strategic partnerships, joint ventures, or corporate investment",
      "Social enterprises and non-profits preparing impact-investment pitch materials",
      "Existing businesses pivoting to new markets or launching new product lines requiring investor buy-in",
    ],
    documents: [
      {
        category: "Business & Product Information",
        items: [
          "Executive summary or one-pager describing the business concept and value proposition",
          "Product screenshots, demo video links, or prototype documentation",
          "Current traction data — MRR, ARR, user count, growth rate, retention metrics",
          "Go-to-market strategy document or sales playbook (if available)",
          "Competitive landscape analysis or market research reports",
        ],
      },
      {
        category: "Financial Documents",
        items: [
          "Historical financial statements (P&L, balance sheet, cash flow) for operating start-ups",
          "Existing financial model or projections spreadsheet (if available — we can build from scratch)",
          "Cap table showing current ownership structure and any prior funding rounds",
          "Use-of-funds breakdown detailing how the raised capital will be deployed",
        ],
      },
      {
        category: "Team & Legal Information",
        items: [
          "Founder and key team member bios with LinkedIn profiles and notable achievements",
          "Company incorporation certificate and organisational structure chart",
          "Patent filings, trademark registrations, or other IP documentation (if applicable)",
          "Advisory board details and notable investor or mentor endorsements",
        ],
      },
    ],
    process: [
      {
        title: "Discovery & Strategy Session",
        desc: "A 60–90 minute deep-dive call with your founding team to understand the business model, target audience, competitive advantages, fundraising goals, and the specific investor audience you are targeting.",
        time: "Day 1",
      },
      {
        title: "Narrative Architecture & Outline",
        desc: "We craft the story arc — structuring the slide sequence, defining key messages for each section, and mapping data points to narrative beats. You receive a detailed slide-by-slide outline for review and feedback.",
        time: "Days 2–3",
      },
      {
        title: "Financial Model & Market Research",
        desc: "Our analysts build or refine your financial model with revenue projections, unit economics, and scenario analysis. Simultaneously, we conduct market sizing (TAM/SAM/SOM) and competitive benchmarking research.",
        time: "Days 3–5",
      },
      {
        title: "Content Writing & Data Visualisation",
        desc: "Every slide is written with investor-calibre language — punchy headlines, concise bullet points, and compelling proof points. Complex data is translated into clean charts, infographics, and visual frameworks.",
        time: "Days 5–7",
      },
      {
        title: "Design & Brand Integration",
        desc: "Our designers apply your brand identity — colour palette, typography, logo placement — across every slide, ensuring visual consistency and professional polish that matches the calibre of your ambition.",
        time: "Days 7–9",
      },
      {
        title: "Review, Revise & Finalise",
        desc: "You receive the complete draft for review. We incorporate your feedback across unlimited revision rounds, fine-tuning messaging, data presentation, and visual elements until every slide is pitch-perfect.",
        time: "Days 9–12",
      },
      {
        title: "Presentation Coaching & Delivery Prep",
        desc: "A mock pitch session where our consultants play the role of sceptical investors. We coach your delivery, refine your talking points, prepare answers for tough questions, and ensure you walk into the room with confidence.",
        time: "Days 12–14",
      },
    ],
    fees: [
      { item: "Pre-Seed / Angel Pitch Deck (up to 12 slides)", cost: "₹14,999 – ₹24,999" },
      { item: "Seed / Series A Pitch Deck (up to 18 slides)", cost: "₹29,999 – ₹49,999" },
      { item: "Growth / Series B+ Pitch Deck (up to 25 slides)", cost: "₹49,999 – ₹79,999" },
      { item: "Financial Model & Projections (standalone)", cost: "₹19,999 – ₹34,999" },
      { item: "Presentation Coaching Session (per hour)", cost: "₹4,999 – ₹7,999" },
      { item: "Complete Fundraising Package (deck + model + coaching)", cost: "₹59,999 – ₹99,999" },
    ],
    penalties: [
      {
        violation: "Misrepresentation of financial data to investors",
        penalty:
          "Founders can face civil and criminal liability under the Indian Contract Act and Companies Act for fraudulent misrepresentation, including rescission of investment agreements and personal financial liability.",
      },
      {
        violation: "Intellectual property infringement in deck content",
        penalty:
          "Using copyrighted images, proprietary market data, or competitor trademarks without authorisation can result in legal notices, injunctions, and damages — undermining investor confidence at a critical stage.",
      },
      {
        violation: "Non-disclosure agreement violations",
        penalty:
          "Sharing confidential investor feedback, term sheet details, or proprietary due-diligence information in subsequent pitches can breach NDA obligations, exposing the start-up to litigation and reputational damage.",
      },
    ],
    advantages: [
      {
        icon: "🎨",
        title: "Investor-Grade Design Quality",
        desc: "Every slide is crafted by professional designers who understand investor expectations — clean layouts, consistent branding, and data visualisations that communicate complex ideas at a glance.",
      },
      {
        icon: "📖",
        title: "Compelling Narrative Structure",
        desc: "We use proven storytelling frameworks that guide investors through problem, solution, market opportunity, traction, and ask — building conviction slide by slide.",
      },
      {
        icon: "🔢",
        title: "Rigorous Financial Modelling",
        desc: "Our analysts build bottom-up financial models with sensitivity analysis, ensuring your projections withstand the toughest due-diligence scrutiny from institutional investors.",
      },
      {
        icon: "🏆",
        title: "Domain-Specific Expertise",
        desc: "With experience across SaaS, fintech, healthtech, edtech, D2C, and deeptech, we tailor messaging, metrics, and benchmarks to resonate with investors in your specific vertical.",
      },
      {
        icon: "⏱️",
        title: "Rapid Turnaround",
        desc: "From discovery call to final delivery in as few as 10–14 business days — we move fast without compromising quality, so you never miss a funding window.",
      },
      {
        icon: "🎤",
        title: "Pitch-Ready Confidence",
        desc: "Our coaching sessions prepare you for real investor scrutiny — practise your delivery, sharpen your responses to tough questions, and walk into every meeting fully prepared.",
      },
      {
        icon: "📈",
        title: "Data-Backed Market Sizing",
        desc: "Every market opportunity claim in your deck is supported by verified data from credible research sources, industry reports, and bottom-up analysis — giving investors confidence in the TAM, SAM, and SOM figures you present.",
      },
      {
        icon: "🔄",
        title: "Post-Delivery Support",
        desc: "Our engagement does not end at deck delivery. We provide ongoing support including investor feedback integration, metric updates, and deck refreshes as your startup evolves and hits new milestones.",
      },
    ],
    disadvantages: [
      "A pitch deck is a communication tool, not a substitute for a sound business model — even the best-designed deck cannot compensate for weak fundamentals or unclear unit economics.",
      "Outsourcing deck creation requires founders to invest significant time in discovery sessions and feedback rounds to ensure the narrative authentically represents their vision.",
      "Investor preferences vary widely across geographies, sectors, and funding stages; a deck optimised for one audience may need substantial rework for another.",
      "Financial projections in early-stage decks are inherently speculative; investors discount them heavily, so over-reliance on modelled numbers without supporting traction data can backfire.",
      "The fundraising landscape is inherently competitive — even with a world-class pitch deck, success depends on timing, investor appetite, market conditions, and the overall strength of the founding team and traction.",
    ],
    compliance: [
      {
        area: "Securities Regulation Compliance",
        details:
          "Ensure all fundraising communications comply with SEBI regulations for private placements, including restrictions on general solicitation and mandatory disclosures in offer documents accompanying the pitch deck.",
      },
      {
        area: "Intellectual Property Clearance",
        details:
          "All images, icons, charts, and third-party data used in the deck must be properly licensed or attributed. Your Professional provides only royalty-free or originally created visual assets.",
      },
      {
        area: "Data Privacy & Confidentiality",
        details:
          "Customer data, user metrics, and proprietary business information shared during deck creation are handled under strict NDA protocols. We never share client data across engagements.",
      },
      {
        area: "Financial Projection Disclaimers",
        details:
          "All forward-looking financial statements in the pitch deck include appropriate disclaimers clarifying that projections are estimates based on stated assumptions and are not guarantees of future performance.",
      },
    ],
    faqs: [
      {
        q: "How long does it take to create a pitch deck from scratch?",
        a: "Our standard turnaround is 10–14 business days from the initial discovery session to final delivery, including two rounds of revisions. For urgent fundraising timelines, we offer an expedited 5–7 day turnaround at a premium. The exact timeline depends on the complexity of your business model and the availability of supporting data.",
      },
      {
        q: "What information do I need to provide before you start?",
        a: "At a minimum, we need a clear description of your business model, target market, current traction metrics, team bios, and fundraising goals. If you have an existing financial model, competitive analysis, or prior pitch materials, sharing those accelerates the process significantly. We provide a comprehensive intake questionnaire after you engage our services.",
      },
      {
        q: "Do you also build the financial model, or just the slides?",
        a: "We offer both. Our standard pitch deck packages include a simplified financial summary integrated into the slides. For founders who need a detailed standalone financial model — complete with revenue projections, unit economics, scenario analysis, and cap-table modelling — we offer it as an add-on or as part of our Complete Fundraising Package.",
      },
      {
        q: "Can you tailor the deck for different investor audiences?",
        a: "Absolutely. We routinely create variant versions of the same core deck — one optimised for angel investors emphasising vision and team, another for VCs emphasising traction and scalability, and a third for corporate investors emphasising strategic synergies. Each variant adjusts messaging, data emphasis, and slide sequencing for maximum resonance.",
      },
      {
        q: "What formats do I receive the final deck in?",
        a: "You receive the deck in editable PowerPoint (.pptx) and Google Slides formats, along with a high-resolution PDF for sharing via email or data rooms. If you need Keynote, Figma, or Canva formats, we accommodate those upon request at no additional charge.",
      },
      {
        q: "How many revisions are included?",
        a: "All our packages include unlimited revisions until you are fully satisfied. We typically reach a final version within two to three revision rounds, but we never cap the number — your satisfaction is our benchmark, not an arbitrary revision limit.",
      },
      {
        q: "Do you sign an NDA before starting work?",
        a: "Yes. We execute a mutual Non-Disclosure Agreement before any business information is shared. Your data, strategy, financials, and proprietary insights are treated with the highest level of confidentiality throughout the engagement and beyond.",
      },
      {
        q: "What if I need to update my deck after a few months?",
        a: "We offer ongoing retainer packages for start-ups that need periodic deck updates — whether to reflect new traction data, a pivot in strategy, or preparation for a subsequent funding round. Retainer clients receive priority turnaround and discounted rates on all updates and new materials.",
      },
      {
        q: "How many slides should a startup pitch deck contain?",
        a: "We recommend 12–15 slides for the core deck shared with investors, covering problem, solution, market size, business model, traction, competitive landscape, team, financials, ask, and use of funds. An appendix of 5–10 additional slides with detailed data can be shared during or after the meeting on request.",
      },
      {
        q: "Do you help with pitch coaching and investor meeting preparation?",
        a: "Yes, our Complete Fundraising Package includes two to three mock pitch sessions where our advisors role-play as investors, ask tough questions, and provide detailed feedback on content, delivery, pacing, and body language. This preparation dramatically improves founder confidence and pitch effectiveness.",
      },
      {
        q: "Can you create a pitch deck for a pre-revenue startup?",
        a: "Absolutely. We specialise in early-stage pitch decks that focus on problem validation, market opportunity, founding team credentials, product vision, go-to-market strategy, and capital deployment plans. For pre-revenue startups, we substitute traction metrics with pilot data, waitlist numbers, letters of intent, or customer discovery insights.",
      },
      {
        q: "What makes a pitch deck stand out to investors?",
        a: "Investors evaluate thousands of decks — standout decks combine a compelling narrative, clean design, credible data, strong team credentials, and a clear articulation of why now. Your Professional ensures every slide earns its place, every claim is substantiated, and the overall flow builds a persuasive investment thesis that is difficult to ignore.",
      },
    ],
    cta: {
      heading: "Ready to Win Your Next Funding Round?",
      subheading:
        "Let Your Professional build a pitch deck that captures your vision, showcases your traction, and commands investor attention from slide one.",
      features: [
        "Custom-designed decks for every funding stage",
        "Investor-grade financial modelling and market research",
        "Unlimited revisions until you are 100% satisfied",
        "Presentation coaching with mock investor Q&A",
        "Delivered in PowerPoint, Google Slides, and PDF formats",
      ],
    },
  },
};

export default data;
