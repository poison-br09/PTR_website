import type { RegistrationData } from './registrations';

export const FSSAI_LICENSE_RENEWAL: RegistrationData = {
    slug: 'fssai-license-renewal',
    title: 'FSSAI License Renewal Online in India',
    subtitle:
        'Renew your FSSAI Registration, State License, or Central License before expiry with Your Professional — timely filing, complete documentation, and zero-hassle renewal on the FoSCoS portal.',
    heroFeatures: [
        'Timely Renewal Filing 30 Days Before Expiry',
        'Renewal Support for Registration, State & Central Licenses',
        'Seamless Application via FoSCoS Portal',
        'Modifications Allowed During Renewal Process',
        'Trusted by 10,000+ Food Businesses Across India',
    ],
    overview: {
        heading: 'What is FSSAI License Renewal?',
        paragraphs: [
            'FSSAI License Renewal is the statutory process of extending the validity of an existing FSSAI Registration (Basic), State License, or Central License issued under the Food Safety and Standards Act, 2006. Every food business operator (FBO) in India must renew their FSSAI license before it lapses to continue manufacturing, storing, distributing, or selling food products legally.',
            'The renewal application must be submitted at least 30 days before the expiry date through the Food Safety and Standards Authority of India\'s FoSCoS (Food Safety Compliance System) portal. Late applications attract a penalty of ₹100 per day of delay, and operating with an expired license is a punishable offense that can lead to fines, business closure, or cancellation of the license altogether.',
            'During the renewal process, FBOs may also request modifications such as a change in business address, addition of food categories, change in proprietor details, or an upgrade from Registration to State or Central License. Your Professional handles the entire renewal lifecycle — from document preparation and Form A/B filing to follow-up with the licensing authority — ensuring uninterrupted business operations.',
        ],
        highlights: [
            { icon: '🔄', text: 'Mandatory renewal before expiry to avoid penalties and business disruption' },
            { icon: '📅', text: 'Must be filed at least 30 days prior to the license expiry date' },
            { icon: '💻', text: 'Filed online through the FSSAI FoSCoS portal using Form A or Form B' },
            { icon: '⚠️', text: 'Late renewal attracts a penalty of ₹100 per day of delay' },
            { icon: '✏️', text: 'Modifications in license details can be requested during renewal' },
        ],
    },
    eligibility: [
        'Any food business operator holding a valid or recently expired FSSAI Registration (Basic), State License, or Central License is eligible for renewal.',
        'The renewal application should ideally be filed 30 days before the expiry date; however, late renewal is permitted with applicable penalties.',
        'The FBO must have complied with all conditions specified in the original license, including hygiene standards and food safety protocols.',
        'Annual returns in Form D-1 for the preceding license period should have been filed on the FoSCoS portal before applying for renewal.',
        'All outstanding fees, penalties, or improvement notices issued by the Food Safety Officer must be cleared prior to renewal.',
        'If the FBO wishes to upgrade the license category (e.g., Registration to State License), the turnover and business criteria for the higher category must be met at the time of renewal.',
    ],
    documents: [
        {
            category: 'Identity & Business Proof',
            items: [
                'Photo identity proof of the FBO or authorized signatory (Aadhaar, PAN, or Voter ID)',
                'Copy of the existing FSSAI License or Registration Certificate',
                'Proof of business constitution (Partnership Deed, Certificate of Incorporation, or Proprietorship Declaration)',
                'Up-to-date GST Registration Certificate',
            ],
        },
        {
            category: 'Compliance & Operational Documents',
            items: [
                'Annual returns filed in Form D-1 for the previous license period',
                'Food safety management plan or self-inspection report',
                'Water test report from an accredited laboratory (for manufacturing units)',
                'List of food products with categories being manufactured or traded',
                'NOC from the local municipality or health department (if applicable)',
            ],
        },
        {
            category: 'Premises & Equipment Documents',
            items: [
                'Updated layout plan of the food processing or storage premises',
                'Proof of premises ownership or valid rent/lease agreement',
                'List of machinery and equipment with installed capacity (for manufacturers)',
                'Pest control records and hygiene audit reports',
            ],
        },
    ],
    process: [
        {
            title: 'Review License Details & Expiry Date',
            desc: 'Verify your current FSSAI license type (Registration, State, or Central), its expiry date, and whether any modifications are required during renewal. Initiate the process at least 30 days before expiry.',
            time: '1 day',
        },
        {
            title: 'Prepare & Compile Documents',
            desc: 'Gather all renewal documents including Form D-1 annual returns, identity proof, existing license copy, and compliance records. Ensure water test reports and inspection records are current.',
            time: '2–3 days',
        },
        {
            title: 'File Renewal Application on FoSCoS Portal',
            desc: 'Submit the renewal application online — Form A for Basic Registration renewal or Form B for State/Central License renewal — along with supporting documents and the prescribed renewal fee.',
            time: '1 day',
        },
        {
            title: 'Inspection & Verification (If Applicable)',
            desc: 'For State and Central License renewals, a Food Safety Officer may conduct a premises inspection. Basic Registration renewals are typically processed without physical inspection.',
            time: '7–15 days',
        },
        {
            title: 'Renewed License Issuance',
            desc: 'Upon successful verification, the renewed FSSAI license is issued digitally on the FoSCoS portal. Download and display the renewed certificate at your place of business.',
            time: '15–30 days total',
        },
    ],
    fees: [
        { item: 'Basic Registration Renewal (1 Year)', cost: '₹100' },
        { item: 'State License Renewal (1–5 Years)', cost: '₹2,000 – ₹5,000' },
        { item: 'Central License Renewal (1–5 Years)', cost: '₹7,500 – ₹18,750' },
        { item: 'Late Renewal Penalty', cost: '₹100 per day of delay' },
        { item: 'Professional Service Charges (Your Professional)', cost: '₹1,499 onwards' },
    ],
    advantages: [
        {
            icon: '✅',
            title: 'Uninterrupted Business Operations',
            desc: 'Timely renewal ensures your food business continues legally without any halt, seizure, or shutdown by food safety authorities.',
        },
        {
            icon: '🛡️',
            title: 'Avoid Heavy Penalties',
            desc: 'Renewing before expiry saves you from the ₹100/day late fee and potential prosecution under the Food Safety and Standards Act.',
        },
        {
            icon: '🔄',
            title: 'Opportunity to Update License',
            desc: 'The renewal window allows you to modify business details, add food categories, change addresses, or upgrade your license type.',
        },
        {
            icon: '📋',
            title: 'Regulatory Compliance',
            desc: 'A valid FSSAI license is mandatory for e-commerce food listings, government tenders, and partnerships with retailers and aggregators.',
        },
        {
            icon: '🤝',
            title: 'Consumer & Partner Trust',
            desc: 'Displaying a current FSSAI license number on packaging and premises builds consumer confidence and strengthens trade relationships.',
        },
        {
            icon: '📈',
            title: 'Multi-Year Renewal Savings',
            desc: 'State and Central Licenses can be renewed for up to 5 years at once, reducing paperwork frequency and saving on repeated professional fees.',
        },
        {
            icon: '💻',
            title: 'Fully Digital Process',
            desc: 'The entire renewal is handled online via the FoSCoS portal — no need for physical visits to FSSAI offices in most cases.',
        },
    ],
    faqs: [
        {
            q: 'When should I apply for FSSAI License Renewal?',
            a: 'You must apply for renewal at least 30 days before your license expiry date. This gives the authority adequate time to process the application and ensures there is no gap in your license validity.',
        },
        {
            q: 'What happens if my FSSAI license expires without renewal?',
            a: 'Operating with an expired FSSAI license is illegal. You will face a late penalty of ₹100 per day of delay, and continued operation without a valid license can attract fines up to ₹5 lakh, business closure, or even imprisonment under the Food Safety and Standards Act, 2006.',
        },
        {
            q: 'What is the difference between Form A and Form B for renewal?',
            a: 'Form A is used for renewing a Basic FSSAI Registration (annual turnover up to ₹12 lakh). Form B is used for renewing a State License (turnover ₹12 lakh to ₹20 crore) or a Central License (turnover above ₹20 crore). The form type must match your existing license category.',
        },
        {
            q: 'Can I make changes to my license during renewal?',
            a: 'Yes. During the renewal process, you can request modifications such as a change in business address, addition or removal of food product categories, change in proprietor or partner details, and even an upgrade from a lower license category to a higher one.',
        },
        {
            q: 'Is a physical inspection required for every renewal?',
            a: 'Not always. Basic Registration renewals are typically processed without a physical inspection. However, State and Central License renewals may involve an inspection by a Food Safety Officer, especially if modifications have been requested or compliance concerns exist.',
        },
        {
            q: 'Can I renew my FSSAI license for multiple years at once?',
            a: 'Yes. State and Central Licenses can be renewed for a period of 1 to 5 years in a single application. Basic Registration can be renewed for 1 to 5 years as well. Multi-year renewal reduces the hassle of annual filings and offers proportional fee savings.',
        },
        {
            q: 'What is the late fee for delayed FSSAI renewal?',
            a: 'The FSSAI charges a late fee of ₹100 per day of delay beyond the license expiry date. This penalty is in addition to the regular renewal fee and must be paid before the renewal application can be processed.',
        },
        {
            q: 'Do I need to file annual returns before applying for renewal?',
            a: 'Yes. Food business operators are required to file annual returns in Form D-1 on the FoSCoS portal by 31st May each year. Pending annual returns may result in rejection or delay of your renewal application.',
        },
        {
            q: 'Can I upgrade my FSSAI Registration to a State or Central License during renewal?',
            a: 'Yes. If your business turnover has increased and now qualifies for a higher license category, you can apply for an upgrade during the renewal process. You will need to submit additional documents and pay the fee difference applicable to the higher category.',
        },
        {
            q: 'How does Your Professional help with FSSAI License Renewal?',
            a: 'Your Professional provides end-to-end renewal assistance including expiry tracking, document preparation, Form A/B filing on the FoSCoS portal, modification requests, follow-up with FSSAI authorities, and timely delivery of the renewed license — ensuring your food business never faces a compliance gap.',
        },
    ],
};
