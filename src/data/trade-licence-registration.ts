import type { RegistrationData } from './registrations';

export const TRADE_LICENCE_REGISTRATION: RegistrationData = {
    slug: 'trade-licence-registration',
    title: 'Trade Licence Registration Online in India',
    subtitle:
        'Apply for your Trade Licence online with Your Professional — expert guidance on municipal requirements, documentation, and fast approval for shops, establishments, and commercial businesses across India.',
    heroFeatures: [
        'Trade Licence Approval in 7–15 Business Days',
        'End-to-End Municipal Filing & Follow-Up',
        'Applicable for Shops, Restaurants, Factories & More',
        'Trusted by 10,000+ Businesses Across India',
    ],
    overview: {
        heading: 'What is a Trade Licence?',
        paragraphs: [
            'A Trade Licence (also spelled Trade License) is a permit issued by the local municipal corporation or urban local body that authorises a person or entity to carry on a particular trade, business, or profession within the jurisdiction of that municipality. It is mandatory for any business operating from a commercial or residential premises in India.',
            'Trade Licence registration is governed by the respective state municipal laws, such as the Municipal Corporation Act and the Shops and Establishments Act. The licence must be obtained before commencing business operations and is subject to annual renewal.',
            'The purpose of a Trade Licence is to ensure that businesses comply with safety, health, and environmental regulations. It does not confer ownership rights but certifies that the business meets the minimum standards set by the local governing authority for public safety and welfare.',
            'At Your Professional, we simplify the entire Trade Licence registration process — from document preparation and municipal form filing to follow-up and approval — so you can focus on running your business.',
        ],
        highlights: [
            { icon: '🏛️', text: 'Issued by Municipal Corporation / Urban Local Body of the respective city or town' },
            { icon: '📋', text: 'Mandatory for all businesses — shops, restaurants, factories, warehouses, and service providers' },
            { icon: '🔄', text: 'Must be renewed annually before the expiry date to avoid penalties and business disruption' },
            { icon: '⚖️', text: 'Governed by state-specific municipal laws and the Shops & Establishments Act' },
        ],
    },
    types: [
        {
            title: 'Shop & Establishment Licence',
            desc: 'Required for retail shops, commercial offices, and establishments that employ workers. Governed by the Shops and Establishments Act of the respective state and ensures compliance with working hours, leave, and wage regulations.',
        },
        {
            title: 'Health Trade Licence',
            desc: 'Mandatory for businesses that may impact public health — such as salons, spas, swimming pools, laundry services, and pest control agencies. Ensures the premises meets hygiene and sanitation standards set by the municipal health department.',
        },
        {
            title: 'Food Trade Licence',
            desc: 'Required for restaurants, bakeries, food stalls, catering businesses, and food processing units. This licence works in conjunction with the FSSAI licence and ensures the premises complies with food safety and hygiene norms.',
        },
        {
            title: 'Factory / Industrial Trade Licence',
            desc: 'Applicable to manufacturing units, factories, and industrial establishments. Ensures compliance with pollution control, fire safety, waste disposal, and worker safety norms as per the Factories Act, 1948 and local municipal regulations.',
        },
        {
            title: 'Storage & Warehouse Licence',
            desc: 'Required for businesses involved in storage, warehousing, or distribution of goods — especially hazardous materials, chemicals, petroleum, and inflammable substances. Ensures fire safety and structural compliance of the premises.',
        },
        {
            title: 'Entertainment & Hospitality Licence',
            desc: 'Needed for hotels, lodges, guest houses, cinema halls, amusement parks, and event venues. Covers fire safety, public gathering regulations, noise pollution norms, and building safety standards.',
        },
    ],
    eligibility: [
        'Any individual, partnership firm, LLP, company, society, or trust carrying on a trade, business, or profession within municipal limits.',
        'The business must operate from a fixed premises — commercial, residential (with commercial use permission), or industrial.',
        'The applicant must be at least 18 years of age.',
        'The premises must comply with local zoning laws, fire safety norms, and building regulations.',
        'Businesses dealing with food, health, or hazardous materials must hold additional sector-specific licences (e.g., FSSAI, Pollution Control NOC).',
        'The applicant must not have any pending municipal dues or prior licence revocations for the same premises.',
        'For rented premises, a valid rent agreement or No Objection Certificate (NOC) from the landlord is required.',
        'The proposed business activity must not be prohibited under the prevailing municipal or state laws.',
    ],
    documents: [
        {
            category: 'Identity & Address Proof of Applicant',
            items: [
                'PAN Card of the applicant / business entity',
                'Aadhaar Card of the proprietor / partners / directors',
                'Passport-sized photographs (2–4 copies)',
                'Voter ID / Driving Licence / Passport as additional identity proof',
            ],
        },
        {
            category: 'Business Premises Documents',
            items: [
                'Ownership proof (sale deed / property tax receipt) or rent/lease agreement',
                'No Objection Certificate (NOC) from the landlord (if rented)',
                'Latest property tax payment receipt',
                'Building plan approval / occupancy certificate from the municipal authority',
                'Fire safety NOC (for factories, restaurants, hotels, and storage units)',
            ],
        },
        {
            category: 'Business Registration Documents',
            items: [
                'Certificate of Incorporation / Partnership Deed / LLP Agreement (as applicable)',
                'GST Registration Certificate (if applicable)',
                'FSSAI Licence (for food-related businesses)',
                'Shops & Establishments Registration Certificate (if already obtained)',
            ],
        },
        {
            category: 'Additional Documents (if applicable)',
            items: [
                'Pollution Control Board NOC (for factories and industrial units)',
                'Environmental clearance certificate (for hazardous or polluting industries)',
                'Health department NOC (for health trade activities)',
                'Signboard details and proposed business activity declaration',
            ],
        },
    ],
    process: [
        {
            title: 'Consultation & Eligibility Check',
            desc: 'Your Professional experts assess your business type, location, and trade activity to determine the applicable trade licence category and municipal jurisdiction.',
            time: '1 day',
        },
        {
            title: 'Document Collection & Verification',
            desc: 'We collect all required identity proofs, premises documents, and business registration certificates. Our team verifies completeness and accuracy before submission.',
            time: '1–2 days',
        },
        {
            title: 'Application Form Preparation',
            desc: 'The prescribed municipal application form is filled with accurate business details, premises address, nature of trade activity, and number of employees.',
            time: '1 day',
        },
        {
            title: 'Municipal Portal / Office Submission',
            desc: 'The application along with all supporting documents is submitted to the respective Municipal Corporation — either through the online portal or at the municipal office counter.',
            time: '1 day',
        },
        {
            title: 'Payment of Licence Fees',
            desc: 'Applicable licence fees and municipal charges are paid based on the business category, premises area, and number of employees. Payment is made online or via demand draft.',
            time: '1 day',
        },
        {
            title: 'Municipal Inspection (if required)',
            desc: 'A municipal inspector may visit the business premises to verify compliance with health, safety, fire, and zoning norms. Your Professional assists with pre-inspection preparation.',
            time: '3–7 days',
        },
        {
            title: 'Scrutiny & Verification by Authorities',
            desc: 'The municipal authority verifies all submitted documents, cross-checks premises details, and reviews the inspection report (if applicable).',
            time: '3–5 days',
        },
        {
            title: 'Objection Resolution (if any)',
            desc: 'If the municipal authority raises any objection or requests additional documents, Your Professional handles all correspondence and clarifications promptly.',
            time: '2–5 days',
        },
        {
            title: 'Trade Licence Issuance',
            desc: 'Upon successful verification, the Municipal Corporation issues the Trade Licence certificate — either digitally through the online portal or as a physical certificate.',
            time: '1–3 days',
        },
        {
            title: 'Licence Delivery & Renewal Setup',
            desc: 'Your Professional delivers the Trade Licence to you and sets up annual renewal reminders so your business remains compliant without any lapse.',
            time: '1 day',
        },
    ],
    fees: [
        { item: 'Municipal Trade Licence Application Fee', cost: '₹500 – ₹5,000 (varies by city & business type)' },
        { item: 'Shops & Establishment Registration Fee', cost: '₹500 – ₹3,000 (varies by state)' },
        { item: 'Health Trade Licence Fee', cost: '₹1,000 – ₹10,000 (based on premises area & trade type)' },
        { item: 'Signboard / Hoarding Fee', cost: '₹500 – ₹5,000 per annum (varies by municipal corporation)' },
        { item: 'Fire Safety NOC Fee', cost: '₹1,000 – ₹10,000 (based on building category)' },
        { item: 'Your Professional Service Charges', cost: '₹2,999 onwards (inclusive of documentation & filing)' },
    ],
    penalties: [
        {
            violation: 'Operating without a Trade Licence',
            penalty: 'Fine of ₹2,000 – ₹25,000 depending on the municipal corporation; business may be sealed or shut down by the authorities.',
        },
        {
            violation: 'Failure to Renew Trade Licence',
            penalty: 'Late renewal penalty of ₹100 – ₹500 per month of delay; continued non-renewal may result in licence cancellation and business closure.',
        },
        {
            violation: 'Operating a Prohibited or Unauthorized Trade',
            penalty: 'Immediate licence revocation, sealing of premises, and fine up to ₹50,000. Criminal proceedings may be initiated in serious cases.',
        },
        {
            violation: 'Violation of Health & Safety Norms',
            penalty: 'Fine of ₹5,000 – ₹1,00,000; licence suspension until violations are rectified. Repeated offences lead to permanent cancellation.',
        },
        {
            violation: 'Providing False Information in Application',
            penalty: 'Licence cancellation, blacklisting from future applications, and prosecution under relevant municipal and penal laws. Fine up to ₹50,000.',
        },
    ],
    advantages: [
        {
            icon: '✅',
            title: 'Legal Authorization',
            desc: 'A Trade Licence legally authorizes your business to operate within the municipal jurisdiction, protecting you from penalties, fines, and forced closure by authorities.',
        },
        {
            icon: '🏪',
            title: 'Business Credibility',
            desc: 'A valid Trade Licence enhances your credibility with customers, suppliers, and financial institutions — demonstrating that your business is legitimate and compliant.',
        },
        {
            icon: '🏦',
            title: 'Bank Account & Loan Access',
            desc: 'Banks and NBFCs require a Trade Licence as a key document for opening business bank accounts and approving loan applications for commercial entities.',
        },
        {
            icon: '📋',
            title: 'Government Tender Eligibility',
            desc: 'A Trade Licence is often a mandatory requirement for participating in government tenders, contracts, and procurement processes at municipal, state, and central levels.',
        },
        {
            icon: '🛡️',
            title: 'Public Health & Safety Compliance',
            desc: 'The licence ensures that your business premises meet minimum health, fire safety, and environmental standards — protecting both employees and customers.',
        },
        {
            icon: '🤝',
            title: 'Partnership & Collaboration',
            desc: 'Corporates and large enterprises prefer to work with licensed businesses. A Trade Licence makes it easier to form partnerships, sign contracts, and onboard as a vendor.',
        },
        {
            icon: '📊',
            title: 'GST & Tax Registration Support',
            desc: 'A Trade Licence serves as valid proof of business for GST registration, income tax filings, and other statutory registrations required under Indian law.',
        },
        {
            icon: '🏛️',
            title: 'Government Scheme Access',
            desc: 'Licensed businesses can avail benefits under MSME schemes, Startup India, PMEGP, Mudra Loan, and other government initiatives for small and medium enterprises.',
        },
        {
            icon: '🔒',
            title: 'Protection from Unauthorized Competition',
            desc: 'Municipal enforcement against unlicensed businesses levels the playing field and protects legitimate licence-holding businesses from unfair competition.',
        },
        {
            icon: '🔄',
            title: 'Smooth Renewal & Continuity',
            desc: 'Annual renewal is a simple process — especially with Your Professional handling reminders and filing — ensuring uninterrupted business operations year after year.',
        },
    ],
    disadvantages: [
        'Trade Licence fees and renewal charges vary significantly across municipalities, leading to unpredictability in compliance costs for multi-city businesses.',
        'The municipal inspection process can be time-consuming and subjective, with different inspectors applying varying standards of assessment.',
        'Separate Trade Licences are required for each business premises — businesses with multiple branches must obtain and renew individual licences for each location.',
        'The renewal process must be completed annually, adding to the administrative burden and cost of running a small business.',
        'Any change in business activity, premises area, or ownership requires fresh application or modification, which involves additional fees and processing time.',
        'In some municipalities, the online system is unreliable or unavailable, forcing applicants to visit the municipal office multiple times for submission and follow-up.',
    ],
    faqs: [
        {
            q: 'What is a Trade Licence and why is it required?',
            a: 'A Trade Licence is a permit issued by the Municipal Corporation that authorizes a business to operate within its jurisdiction. It is mandatory under municipal law for all trades, businesses, and professions operating from a fixed premises. Operating without one can result in fines and business closure.',
        },
        {
            q: 'Who needs to obtain a Trade Licence in India?',
            a: 'Every individual, firm, LLP, company, or organization carrying on any trade, business, or profession within the limits of a municipality or urban local body must obtain a Trade Licence — including shops, restaurants, offices, factories, and warehouses.',
        },
        {
            q: 'How long does it take to get a Trade Licence?',
            a: 'With Your Professional, the typical processing time is 7–15 business days depending on the municipal corporation, completeness of documents, and whether a physical inspection is required. Some municipalities offer express processing for an additional fee.',
        },
        {
            q: 'What is the validity of a Trade Licence?',
            a: 'A Trade Licence is generally valid for one financial year (April to March). It must be renewed annually before the expiry date. Some municipalities issue licences valid for up to 3 years for certain business categories.',
        },
        {
            q: 'What is the difference between a Trade Licence and a Shops & Establishment Licence?',
            a: 'A Trade Licence permits you to carry on a specific trade within the municipal area and is issued by the Municipal Corporation. A Shops & Establishment Licence regulates working conditions (working hours, holidays, wages) and is issued under the state-specific Shops and Establishments Act. Most businesses need both.',
        },
        {
            q: 'Can I operate my business while the Trade Licence application is under process?',
            a: 'Some municipalities issue a provisional or temporary licence or acknowledgment receipt that allows you to operate while the application is being processed. However, rules vary by municipality — Your Professional will advise you based on your specific location.',
        },
        {
            q: 'Is a Trade Licence required for home-based businesses?',
            a: 'Yes, if you are conducting commercial activities from a residential premises, you generally need a Trade Licence. Additionally, you may need permission from the local authority or housing society for commercial use of a residential property.',
        },
        {
            q: 'What happens if I do not renew my Trade Licence on time?',
            a: 'Late renewal attracts a penalty fee that increases with the delay period. Continued non-renewal can lead to licence cancellation, sealing of the business premises, and legal action by the Municipal Corporation. Your Professional sends timely renewal reminders to prevent this.',
        },
        {
            q: 'Do I need a separate Trade Licence for each business location?',
            a: 'Yes. A Trade Licence is premises-specific. If your business operates from multiple locations within the same or different municipal jurisdictions, you need a separate Trade Licence for each premises.',
        },
        {
            q: 'Can Your Professional help with Trade Licence renewal?',
            a: 'Absolutely. Your Professional provides end-to-end renewal services including document preparation, fee payment, municipal filing, and follow-up — ensuring your licence is renewed well before the expiry date without any disruption to your business.',
        },
        {
            q: 'What is the cost of obtaining a Trade Licence?',
            a: 'The government fees typically range from ₹500 to ₹10,000 depending on the municipal corporation, type of trade, and premises area. Your Professional charges start at ₹2,999 inclusive of documentation, filing, and follow-up with the authorities.',
        },
        {
            q: 'Is a Trade Licence sufficient to start my business legally?',
            a: 'A Trade Licence is one of the essential licences, but depending on your business type you may also need GST Registration, FSSAI Licence, Shops & Establishment Registration, Pollution Control NOC, and other sector-specific permits. Your Professional can guide you on all required registrations.',
        },
    ],
    cta: {
        heading: 'Get Your Trade Licence with Your Professional — Fast, Simple & Reliable',
        subheading:
            'Let our experts handle the entire Trade Licence registration process — from documentation and municipal filing to inspection support and approval follow-up. Start your business on the right side of the law.',
        features: [
            'Complete documentation and form preparation',
            'Municipal portal filing and office submission',
            'Inspection coordination and compliance support',
            'Annual renewal reminders and re-filing assistance',
        ],
    },
};
