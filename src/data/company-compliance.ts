import type { RegistrationData } from './registrations';

export const COMPANY_COMPLIANCE: Record<string, RegistrationData> = {

    /* ────────────────────────────────────────────────────────────── 1. MSME REGISTRATION ────────────────────────────────────────────────────────────── */

    'msme-registration': {
        slug: 'msme-registration',
        title: 'MSME Registration (Udyam Registration) Online in India',
        subtitle:
            'Register your Micro, Small or Medium Enterprise under the Udyam Registration portal and unlock government subsidies, tax benefits, and priority lending — with expert guidance from Your Professional.',

        heroFeatures: [
            '✅ 100% online Udyam Registration process',
            '📄 No documents required — Aadhaar-based verification',
            '🏦 Access to priority sector lending & subsidies',
            '⚡ Certificate issued in 1–2 working days',
        ],

        overview: {
            heading: 'What is MSME Registration (Udyam Registration)?',
            paragraphs: [
                'MSME Registration, now known as Udyam Registration, is a government registration for Micro, Small and Medium Enterprises under the Micro, Small and Medium Enterprises Development (MSMED) Act, 2006. The registration is issued by the Ministry of MSME through the Udyam Registration portal and is completely free of cost.',
                'Udyam Registration replaced the earlier Udyog Aadhaar Memorandum (UAM) process effective 1st July 2020. The new system is entirely Aadhaar-based, self-declaratory, and linked with the Income Tax and GSTIN databases for automatic verification of investment and turnover figures.',
                'MSME classification is based on investment in plant & machinery or equipment and annual turnover. A Micro Enterprise has investment up to ₹1 crore and turnover up to ₹5 crore; a Small Enterprise has investment up to ₹10 crore and turnover up to ₹50 crore; and a Medium Enterprise has investment up to ₹50 crore and turnover up to ₹250 crore. Your Professional helps you file an accurate Udyam Registration and maximise the benefits available to your enterprise.',
            ],
            highlights: [
                { icon: '🏭', text: 'Covers both manufacturing and service enterprises' },
                { icon: '🆓', text: 'Zero government fees — registration is completely free' },
                { icon: '🔗', text: 'Auto-linked with IT & GST databases for verification' },
                { icon: '♻️', text: 'Lifetime validity — no renewal required' },
            ],
        },

        types: [
            {
                title: 'Micro Enterprise',
                desc: 'Investment up to ₹1 crore in plant & machinery/equipment and annual turnover up to ₹5 crore.',
            },
            {
                title: 'Small Enterprise',
                desc: 'Investment up to ₹10 crore in plant & machinery/equipment and annual turnover up to ₹50 crore.',
            },
            {
                title: 'Medium Enterprise',
                desc: 'Investment up to ₹50 crore in plant & machinery/equipment and annual turnover up to ₹250 crore.',
            },
        ],

        eligibility: [
            'Any proprietorship, partnership, LLP, private limited company, HUF, cooperative society, or trust engaged in manufacturing or service activity',
            'The enterprise must meet the investment and turnover criteria for Micro, Small, or Medium classification',
            'Aadhaar number of the proprietor / managing partner / authorised signatory is mandatory',
            'PAN and GSTIN are required if the enterprise is already registered under GST',
            'Both new enterprises and existing enterprises migrating from UAM are eligible',
            'No minimum turnover or investment threshold — even startups with zero turnover can register',
            'Enterprises engaged in retail or wholesale trade are eligible for Udyam Registration as of the latest MSME notification',
        ],

        documents: [
            {
                category: 'Identity & Address Proof',
                items: [
                    'Aadhaar card of the proprietor / managing partner / authorised director',
                    'PAN card of the enterprise or proprietor',
                    'Address proof of the business premises (electricity bill, rent agreement, or property tax receipt)',
                ],
            },
            {
                category: 'Business Details',
                items: [
                    'GSTIN certificate (if registered under GST)',
                    'Details of investment in plant & machinery / equipment',
                    'Bank account details linked to the enterprise',
                    'NIC code (National Industrial Classification) of the business activity',
                ],
            },
            {
                category: 'Entity-Specific Documents',
                items: [
                    'Partnership deed (for partnership firms)',
                    'Certificate of Incorporation and MOA (for companies / LLPs)',
                    'Trust deed or registration certificate (for trusts / societies)',
                ],
            },
        ],

        process: [
            {
                title: 'Consultation with Your Professional',
                desc: 'Discuss your enterprise type, activity, investment, and turnover to determine the correct MSME classification.',
                time: '1 day',
            },
            {
                title: 'Aadhaar & PAN Verification',
                desc: 'Your Aadhaar and PAN details are validated through OTP-based verification on the Udyam portal.',
                time: 'Instant',
            },
            {
                title: 'Fill the Udyam Registration Form',
                desc: 'Enter enterprise name, type of organisation, address, bank details, NIC code, investment, and turnover figures in the online form.',
                time: '1 day',
            },
            {
                title: 'GSTIN & IT Database Linking',
                desc: 'The portal automatically fetches investment and turnover data from the GST and Income Tax databases for verification.',
                time: 'Instant',
            },
            {
                title: 'Self-Declaration & Submission',
                desc: 'Submit the self-declaration form after reviewing all details. No physical documents need to be uploaded.',
                time: 'Same day',
            },
            {
                title: 'Udyam Registration Number Allotted',
                desc: 'A permanent Udyam Registration Number (URN) is issued along with an e-certificate that can be downloaded anytime.',
                time: '1–2 working days',
            },
        ],

        fees: [
            { item: 'Government fee for Udyam Registration', cost: '₹0 (Free)' },
            { item: 'Your Professional — consultation & filing assistance', cost: '₹499 – ₹1,499' },
            { item: 'Udyam Registration certificate (digital)', cost: '₹0 (Free)' },
            { item: 'Correction / amendment in Udyam certificate', cost: '₹0 (Free)' },
            { item: 'Additional NIC code addition', cost: '₹0 (Free)' },
        ],

        penalties: [
            {
                violation: 'Filing false information in Udyam Registration',
                penalty: 'Cancellation of registration and penalty up to the amount of self-declared investment',
            },
            {
                violation: 'Obtaining MSME benefits without valid registration',
                penalty: 'Recovery of benefits availed along with applicable interest and penalties',
            },
            {
                violation: 'Misrepresentation of enterprise classification',
                penalty: 'Debarment from government tenders and subsidy schemes',
            },
        ],

        advantages: [
            {
                icon: '🏦',
                title: 'Priority Sector Lending',
                desc: 'Banks are mandated to provide collateral-free loans up to ₹10 lakh and priority lending to MSME-registered enterprises.',
            },
            {
                icon: '💰',
                title: 'Government Subsidies & Schemes',
                desc: 'Access to CLCSS, PMEGP, Stand-Up India, and other Central and State subsidy schemes exclusively for MSMEs.',
            },
            {
                icon: '📉',
                title: 'Lower Interest Rates',
                desc: 'Banks offer concessional interest rates (1%–1.5% lower) on business loans to Udyam-registered enterprises.',
            },
            {
                icon: '🛡️',
                title: 'Protection Against Delayed Payments',
                desc: 'Buyers must pay MSME suppliers within 45 days under Section 15 of the MSMED Act, failing which compound interest is payable.',
            },
            {
                icon: '📋',
                title: 'Preference in Government Tenders',
                desc: 'MSMEs get exemption from earnest money deposit (EMD) and enjoy preference in government procurement up to 25% of total procurement value.',
            },
            {
                icon: '🧾',
                title: 'Tax Benefits',
                desc: 'Eligible for MAT credit carry-forward for 15 years, income tax exemptions under specific schemes, and reduced compliance burden.',
            },
            {
                icon: '⚡',
                title: 'Concession on Electricity Bills',
                desc: 'Many states provide electricity duty exemption and industrial tariff concessions to MSME-registered units.',
            },
            {
                icon: '🌐',
                title: 'Ease of Doing Business',
                desc: 'Single-point registration, simplified returns, and fewer compliance requirements compared to large enterprises.',
            },
        ],

        disadvantages: [
            'Classification is auto-updated based on IT/GST data — growing enterprises may lose MSME status automatically',
            'Only one Udyam Registration is allowed per enterprise; multiple registrations are not permitted',
            'Trade enterprises (wholesale/retail) have limited access to some MSME schemes compared to manufacturing units',
            'Benefits are linked to Aadhaar, making it difficult for enterprises where the promoter has Aadhaar issues',
        ],

        faqs: [
            {
                q: 'Is MSME Registration mandatory in India?',
                a: 'MSME Registration (Udyam Registration) is voluntary, not mandatory. However, it is required to avail government subsidies, tender preferences, and priority lending benefits.',
            },
            {
                q: 'What is the difference between Udyam Registration and Udyog Aadhaar?',
                a: 'Udyam Registration replaced Udyog Aadhaar Memorandum (UAM) from 1st July 2020. The new system is Aadhaar-based, linked with IT/GST databases, and provides a permanent Udyam Registration Number (URN).',
            },
            {
                q: 'Is there any fee for MSME / Udyam Registration?',
                a: 'No. The government charges absolutely no fee for Udyam Registration. Your Professional charges a nominal service fee for expert consultation and filing assistance.',
            },
            {
                q: 'Do I need to renew my MSME Registration?',
                a: 'No. Udyam Registration has lifetime validity and does not require renewal. However, the enterprise classification (Micro/Small/Medium) is updated automatically based on annual IT returns and GST data.',
            },
            {
                q: 'Can a Private Limited Company get MSME Registration?',
                a: 'Yes. Any form of business entity — proprietorship, partnership, LLP, private limited company, trust, or cooperative society — can obtain Udyam Registration if it meets the investment and turnover criteria.',
            },
            {
                q: 'What documents are required for Udyam Registration?',
                a: 'Only Aadhaar number is mandatory. PAN and GSTIN are required if the enterprise is GST-registered. No physical documents need to be uploaded — the process is entirely self-declaratory.',
            },
            {
                q: 'Can I have more than one Udyam Registration?',
                a: 'No. As per the Udyam Registration rules, only one Udyam Registration is allowed per enterprise. However, multiple activities and NIC codes can be added within a single registration.',
            },
            {
                q: 'How long does it take to get the MSME certificate?',
                a: 'With Your Professional, Udyam Registration is typically completed within 1–2 working days. The e-certificate with the Udyam Registration Number is generated instantly upon successful submission.',
            },
        ],

        cta: {
            heading: 'Register Your MSME with Your Professional Today!',
            subheading:
                'Unlock subsidies, tax benefits, and priority lending with hassle-free Udyam Registration — powered by expert guidance from Your Professional.',
            features: [
                '🆓 Zero government fees',
                '⚡ Certificate in 1–2 working days',
                '🛡️ Lifetime validity — no renewal',
                '📞 Dedicated MSME expert support',
            ],
        },
    },

    /* ────────────────────────────────────────────────────────────── 2. EPF REGISTRATION ────────────────────────────────────────────────────────────── */

    'epf-registration': {
        slug: 'epf-registration',
        title: 'EPF Registration Online in India',
        subtitle:
            'Register your establishment under the Employees\' Provident Fund Organisation (EPFO) and ensure statutory compliance for your workforce — with end-to-end support from Your Professional.',

        heroFeatures: [
            '✅ Mandatory for establishments with 20+ employees',
            '📄 Unified portal registration with ESIC integration',
            '🏦 12% employer + 12% employee contribution',
            '⚡ Registration completed in 3–5 working days',
        ],

        overview: {
            heading: 'What is EPF Registration?',
            paragraphs: [
                'EPF Registration is the process of enrolling an establishment under the Employees\' Provident Funds and Miscellaneous Provisions Act, 1952 with the Employees\' Provident Fund Organisation (EPFO). It is mandatory for every establishment employing 20 or more persons (10 or more in certain notified industries).',
                'Under the EPF scheme, both the employer and employee contribute 12% of the employee\'s basic wages plus dearness allowance to the provident fund. The employer\'s contribution is split across three schemes — EPF (Employees\' Provident Fund), EPS (Employees\' Pension Scheme), and EDLI (Employees\' Deposit-Linked Insurance Scheme).',
                'The registration is done online through the EPFO Unified Portal (unifiedportal-emp.epfindia.gov.in). Once registered, the establishment receives a unique EPF Establishment Code. Your Professional handles the entire registration process, monthly return filing, and ongoing compliance so you can focus on building your business.',
            ],
            highlights: [
                { icon: '👥', text: 'Mandatory for 20+ employees (10+ in notified industries)' },
                { icon: '💰', text: '12% employer + 12% employee contribution on basic + DA' },
                { icon: '🔐', text: 'Covers PF, Pension, and Insurance under one registration' },
                { icon: '📱', text: 'Fully online process through EPFO Unified Portal' },
            ],
        },

        types: [
            {
                title: 'EPF (Employees\' Provident Fund)',
                desc: '3.67% of employer contribution goes to EPF account. Employee contributes full 12%. Lump-sum withdrawal available at retirement or resignation.',
            },
            {
                title: 'EPS (Employees\' Pension Scheme)',
                desc: '8.33% of employer contribution (on wages up to ₹15,000) goes to EPS. Provides monthly pension after 10 years of service and attaining 58 years of age.',
            },
            {
                title: 'EDLI (Employees\' Deposit-Linked Insurance)',
                desc: 'Employer contributes 0.50% of basic wages. Provides life insurance benefit up to ₹7 lakh to the nominee in case of death of the employee during service.',
            },
        ],

        eligibility: [
            'Every establishment (factory, shop, or business) employing 20 or more persons is mandatorily covered',
            'Establishments employing 10 or more persons in notified industries (e.g., cinema, newspaper) are also covered',
            'Voluntary registration is available for establishments with fewer than 20 employees with the consent of employer and majority of employees',
            'Employees drawing basic wages up to ₹15,000 per month are mandatorily covered; those above can join voluntarily with employer approval',
            'All types of entities — companies, LLPs, partnership firms, proprietorships, trusts, and societies — are eligible',
            'Both permanent and contractual employees are covered under EPF',
            'The Act applies across India except Jammu & Kashmir (which has a separate state PF Act)',
        ],

        documents: [
            {
                category: 'Establishment Documents',
                items: [
                    'Certificate of Incorporation / Partnership Deed / Registration Certificate',
                    'PAN card of the establishment',
                    'Address proof of the registered office (utility bill, rent agreement, or property documents)',
                    'GST registration certificate (if applicable)',
                    'Bank account details with cancelled cheque or bank statement',
                    'Digital Signature Certificate (DSC) of the authorised signatory',
                ],
            },
            {
                category: 'Employer / Authorised Signatory Documents',
                items: [
                    'Aadhaar card of the authorised signatory',
                    'PAN card of the authorised signatory',
                    'Mobile number and email ID linked to Aadhaar',
                    'Specimen signature of the employer',
                ],
            },
            {
                category: 'Employee Information',
                items: [
                    'List of employees with Aadhaar numbers and date of joining',
                    'Salary details (basic wages + DA) of all employees',
                    'Bank account details and IFSC codes of all employees',
                    'Nominee details (name, relationship, Aadhaar) of each employee',
                ],
            },
        ],

        process: [
            {
                title: 'Consultation with Your Professional',
                desc: 'Discuss employee strength, wage structure, and compliance requirements to determine applicability and contribution breakup.',
                time: '1 day',
            },
            {
                title: 'Employer Registration on EPFO Unified Portal',
                desc: 'Create the establishment account on the EPFO Unified Portal using DSC and submit the Employer Registration Form (Form 5A).',
                time: '1 day',
            },
            {
                title: 'Upload Establishment Details',
                desc: 'Enter establishment name, address, PAN, nature of business, date of setup, and total employee count in the online form.',
                time: '1 day',
            },
            {
                title: 'Employee Enrolment & UAN Generation',
                desc: 'Add all eligible employees with Aadhaar, bank details, and nominee information. Universal Account Numbers (UAN) are generated for each employee.',
                time: '1–2 days',
            },
            {
                title: 'KYC Verification of Employees',
                desc: 'Link Aadhaar, PAN, and bank account of each employee through the UAN portal for e-KYC verification.',
                time: '2–3 days',
            },
            {
                title: 'Allotment of EPF Establishment Code',
                desc: 'EPFO verifies the submission and allots a unique Establishment Code (e.g., MHBAN0012345000) within 3–5 working days.',
                time: '3–5 working days',
            },
            {
                title: 'First ECR Filing & Payment',
                desc: 'File the first Electronic Challan cum Return (ECR) and remit PF contributions by the 15th of the following month.',
                time: 'By 15th of next month',
            },
            {
                title: 'Ongoing Compliance Setup',
                desc: 'Your Professional sets up monthly ECR filing, annual return filing (Form 3A & 6A), and handles any EPFO notices or inspections.',
                time: 'Ongoing',
            },
        ],

        fees: [
            { item: 'Government fee for EPF Registration', cost: '₹0 (Free)' },
            { item: 'Your Professional — registration & filing assistance', cost: '₹2,999 – ₹7,999' },
            { item: 'Digital Signature Certificate (DSC) — Class 3', cost: '₹800 – ₹1,500' },
            { item: 'Monthly ECR filing (Your Professional service)', cost: '₹999 – ₹2,499/month' },
            { item: 'Annual PF return filing', cost: '₹1,499 – ₹3,999/year' },
        ],

        penalties: [
            {
                violation: 'Non-registration of an eligible establishment',
                penalty: 'Imprisonment up to 1 year and/or fine up to ₹5,000 under Section 14 of the EPF Act',
            },
            {
                violation: 'Late payment of PF contributions',
                penalty: 'Interest @ 12% p.a. under Section 7Q and damages up to 100% of arrears under Section 14B',
            },
            {
                violation: 'Non-filing or late filing of ECR returns',
                penalty: 'Penalty of ₹25,000 per return and prosecution under Section 14',
            },
            {
                violation: 'Deducting employee\'s share but not depositing to EPFO',
                penalty: 'Criminal prosecution with imprisonment of 1–3 years and fine under Section 405/406 IPC',
            },
            {
                violation: 'False statement or non-compliance with EPFO inspection',
                penalty: 'Imprisonment up to 6 months and/or fine up to ₹5,000',
            },
        ],

        advantages: [
            {
                icon: '🛡️',
                title: 'Retirement Security for Employees',
                desc: 'EPF provides a substantial retirement corpus through compounding interest at 8.15% p.a. (FY 2023–24) on accumulated PF balance.',
            },
            {
                icon: '💼',
                title: 'Statutory Compliance',
                desc: 'Ensures your establishment is fully compliant with the EPF Act, avoiding penalties, prosecution, and reputational damage.',
            },
            {
                icon: '🏥',
                title: 'Pension & Insurance Coverage',
                desc: 'Employees get monthly pension under EPS after 10 years of service and life insurance cover up to ₹7 lakh under EDLI.',
            },
            {
                icon: '📉',
                title: 'Tax Benefits for Employer & Employee',
                desc: 'Employer\'s PF contribution is deductible under Section 36(1)(iv) of the Income Tax Act. Employee\'s contribution qualifies for deduction under Section 80C.',
            },
            {
                icon: '👥',
                title: 'Employee Retention & Morale',
                desc: 'PF is a significant employee benefit that helps attract and retain quality talent, especially in competitive job markets.',
            },
            {
                icon: '🏦',
                title: 'Emergency Withdrawal Facility',
                desc: 'Employees can make partial withdrawals for medical emergencies, home purchase, education, and marriage under specified conditions.',
            },
            {
                icon: '🔄',
                title: 'Easy Portability via UAN',
                desc: 'Universal Account Number (UAN) ensures seamless PF transfer when an employee changes jobs — no need for fresh PF account creation.',
            },
            {
                icon: '🌐',
                title: 'Online Management',
                desc: 'EPFO Unified Portal enables online ECR filing, payment, claims settlement, and passbook viewing — reducing paperwork significantly.',
            },
        ],

        disadvantages: [
            'Employer bears an additional 13% cost (12% PF + 0.50% EDLI + 0.50% admin charges) over and above employee wages',
            'Monthly ECR filing and payment must be completed by the 15th of every month — tight compliance deadline',
            'Withdrawal before 5 years of continuous service attracts TDS at 10% (if PAN is furnished) or 34.608% (without PAN)',
            'Employees earning above ₹15,000 basic wages who are already EPF members cannot easily opt out',
            'Complex compliance involving multiple forms, returns, and inspections adds administrative burden for small businesses',
        ],

        faqs: [
            {
                q: 'Is EPF Registration mandatory for all businesses?',
                a: 'EPF Registration is mandatory for establishments employing 20 or more persons. Establishments with 10+ employees in notified industries are also covered. Smaller establishments can opt for voluntary registration.',
            },
            {
                q: 'What is the current EPF contribution rate?',
                a: 'Both employer and employee contribute 12% of basic wages + DA. Of the employer\'s 12%, 3.67% goes to EPF and 8.33% to EPS. The employer also pays 0.50% towards EDLI and 0.50% as admin charges.',
            },
            {
                q: 'What is UAN and how does it work?',
                a: 'Universal Account Number (UAN) is a 12-digit unique number assigned to each PF member. It remains the same throughout the employee\'s career and links all PF accounts, enabling easy transfer and withdrawal.',
            },
            {
                q: 'Can employees withdraw PF before retirement?',
                a: 'Yes. Partial withdrawals are allowed for specific purposes like home purchase, medical treatment, education, and marriage. Full withdrawal is allowed after 2 months of unemployment or at age 58.',
            },
            {
                q: 'What is the current interest rate on EPF?',
                a: 'The EPFO declares the interest rate annually. For FY 2023–24, the EPF interest rate is 8.25% per annum, credited to the member\'s PF account.',
            },
            {
                q: 'What happens if PF is not deposited on time?',
                a: 'Late deposit attracts interest at 12% p.a. under Section 7Q and damages ranging from 5% to 100% of arrears under Section 14B. Persistent default can lead to prosecution and imprisonment.',
            },
            {
                q: 'Can a startup with fewer than 20 employees register for EPF?',
                a: 'Yes. Establishments with fewer than 20 employees can opt for voluntary EPF registration with the consent of the employer and a majority of employees. Your Professional can assist with the process.',
            },
            {
                q: 'How long does EPF Registration take?',
                a: 'With Your Professional, EPF Registration is typically completed within 3–5 working days from submission of all documents on the EPFO Unified Portal.',
            },
        ],

        cta: {
            heading: 'Get EPF Registration with Your Professional!',
            subheading:
                'Stay compliant with EPFO regulations and secure your employees\' future — from registration to monthly filing, Your Professional handles it all.',
            features: [
                '✅ End-to-end EPF registration support',
                '📋 Monthly ECR filing & compliance',
                '🛡️ Avoid penalties & prosecution',
                '📞 Dedicated PF compliance expert',
            ],
        },
    },

    /* ────────────────────────────────────────────────────────────── 3. SHOP & ESTABLISHMENT REGISTRATION ────────────────────────────────────────────────────────────── */

    'shop-and-establishment-registration': {
        slug: 'shop-and-establishment-registration',
        title: 'Shop and Establishment Registration Online in India',
        subtitle:
            'Register your shop, office, or commercial establishment under the state Shop and Establishment Act and ensure compliance with local labour laws — guided by Your Professional.',

        heroFeatures: [
            '✅ Mandatory for all shops, offices & commercial establishments',
            '📄 State-level registration with labour department',
            '🏪 Governs working hours, wages, holidays & conditions',
            '⚡ Registration in 5–7 working days (varies by state)',
        ],

        overview: {
            heading: 'What is Shop and Establishment Registration?',
            paragraphs: [
                'Shop and Establishment Registration is a mandatory registration under the Shops and Establishments Act enacted by each state government in India. The Act regulates the conditions of work in shops, commercial establishments, restaurants, theatres, and other places of business. Every employer is required to register within 30 days of commencing business.',
                'The registration is obtained from the local municipal corporation or the state labour department, depending on the state. It provides legal recognition to the business and serves as proof of establishment for opening bank accounts, applying for licences, and entering into commercial contracts.',
                'While the basic framework is similar across states, the specific provisions regarding working hours, overtime, holidays, leave entitlements, and employment of women vary from state to state. Your Professional ensures you comply with your specific state\'s Shop and Establishment Act and handles the registration process from application to certificate issuance.',
            ],
            highlights: [
                { icon: '🏪', text: 'Applies to shops, offices, restaurants, theatres & warehouses' },
                { icon: '📜', text: 'State-level legislation — rules vary by state' },
                { icon: '⏰', text: 'Regulates working hours, overtime, rest intervals & holidays' },
                { icon: '📋', text: 'Must be obtained within 30 days of commencing business' },
            ],
        },

        types: [
            {
                title: 'Shop Registration',
                desc: 'For retail or wholesale shops selling goods to consumers. Includes grocery stores, clothing shops, electronics stores, and any premise where goods are sold.',
            },
            {
                title: 'Commercial Establishment Registration',
                desc: 'For offices, consultancies, agencies, IT companies, BPOs, and other service-based establishments where business activities are carried out.',
            },
            {
                title: 'Restaurant & Hotel Registration',
                desc: 'For restaurants, hotels, eateries, cafes, and lodging establishments that serve food, beverages, or provide accommodation to the public.',
            },
            {
                title: 'Theatre & Entertainment Registration',
                desc: 'For cinemas, theatres, amusement parks, and entertainment venues open to the public.',
            },
        ],

        eligibility: [
            'Any shop, commercial establishment, restaurant, hotel, theatre, or other establishment as defined under the state Act',
            'All employers commencing business must apply within 30 days of starting operations',
            'Applies to both employer-run and employee-run establishments regardless of the number of employees',
            'Covers establishments in all sectors — retail, services, IT, hospitality, healthcare, and education',
            'Applicable to sole proprietors, partnerships, LLPs, companies, trusts, and societies operating a commercial establishment',
            'Both new businesses and existing unregistered businesses must obtain registration',
            'Even home-based businesses operating commercially may be required to register in some states',
        ],

        documents: [
            {
                category: 'Identity & Address Proof',
                items: [
                    'PAN card of the proprietor / partners / directors',
                    'Aadhaar card of the proprietor / authorised person',
                    'Passport-size photographs of the applicant',
                    'Address proof of the establishment (rent agreement, property deed, or utility bill)',
                ],
            },
            {
                category: 'Business Documents',
                items: [
                    'Certificate of Incorporation / Partnership Deed / GST certificate',
                    'Nature of business activity and description of goods/services',
                    'Details of the establishment — name, address, date of commencement',
                    'Floor plan or layout of the premises (required in some states)',
                ],
            },
            {
                category: 'Employee Information',
                items: [
                    'Total number of employees (male, female, and minors separately)',
                    'Details of working hours, weekly holidays, and shift timings',
                    'Salary register or employment details (required in some states)',
                    'List of employees with names and designations',
                ],
            },
        ],

        process: [
            {
                title: 'Consultation with Your Professional',
                desc: 'Assess the type of establishment, applicable state Act, and documentation requirements based on your business location and activity.',
                time: '1 day',
            },
            {
                title: 'Document Collection & Verification',
                desc: 'Collect all required documents — identity proofs, address proofs, business registration documents, and employee details.',
                time: '1–2 days',
            },
            {
                title: 'Online Application Submission',
                desc: 'File the application on the state labour department portal (or municipal corporation portal) with all prescribed details and supporting documents.',
                time: '1 day',
            },
            {
                title: 'Payment of Registration Fee',
                desc: 'Pay the prescribed registration fee online, which varies by state and the number of employees in the establishment.',
                time: 'Same day',
            },
            {
                title: 'Inspection by Labour Inspector (if applicable)',
                desc: 'In some states, a labour inspector may visit the premises to verify the details submitted. Many states have now moved to self-certification and waived inspections.',
                time: '3–5 days (if applicable)',
            },
            {
                title: 'Certificate Issuance',
                desc: 'Upon successful verification, the Shop and Establishment Registration Certificate is issued digitally or physically by the labour department.',
                time: '5–7 working days',
            },
            {
                title: 'Display of Certificate',
                desc: 'The registration certificate must be prominently displayed at the establishment premises as mandated by the Act.',
                time: 'Immediate',
            },
            {
                title: 'Renewal Reminder Setup',
                desc: 'Your Professional sets up reminders for timely renewal before the certificate validity expires (annual or as per state rules).',
                time: 'Ongoing',
            },
        ],

        fees: [
            { item: 'Government registration fee (varies by state)', cost: '₹100 – ₹5,000' },
            { item: 'Your Professional — application & filing assistance', cost: '₹1,499 – ₹4,999' },
            { item: 'Annual renewal fee (state-dependent)', cost: '₹50 – ₹2,500/year' },
            { item: 'Late registration penalty (if applied after 30 days)', cost: '₹1,000 – ₹25,000' },
            { item: 'Amendment / modification of registration details', cost: '₹200 – ₹1,000' },
        ],

        penalties: [
            {
                violation: 'Operating without Shop & Establishment Registration',
                penalty: 'Fine of ₹1,000 to ₹25,000 depending on the state; continued default may attract higher penalties',
            },
            {
                violation: 'Non-renewal of registration before expiry',
                penalty: 'Fine ranging from ₹500 to ₹5,000 plus additional penalty per day of default in many states',
            },
            {
                violation: 'Violation of working hours or overtime provisions',
                penalty: 'Fine up to ₹10,000 and imprisonment up to 3 months for repeated offences under most state Acts',
            },
            {
                violation: 'Employing child labour or violating women\'s employment rules',
                penalty: 'Imprisonment of 3 months to 1 year and/or fine up to ₹50,000 under the state Act and Child Labour Act',
            },
            {
                violation: 'Not maintaining prescribed registers or records',
                penalty: 'Fine of ₹500 to ₹5,000 per violation; repeated non-compliance may lead to cancellation of registration',
            },
        ],

        advantages: [
            {
                icon: '📜',
                title: 'Legal Recognition',
                desc: 'Provides legal identity to your business establishment and serves as proof of existence for banks, government agencies, and commercial transactions.',
            },
            {
                icon: '🏦',
                title: 'Bank Account & Loan Eligibility',
                desc: 'Required for opening a current bank account in the establishment\'s name and applying for business loans from banks and NBFCs.',
            },
            {
                icon: '⚖️',
                title: 'Labour Law Compliance',
                desc: 'Ensures compliance with state-specific labour laws covering working hours, rest intervals, holidays, overtime, and conditions of service.',
            },
            {
                icon: '🛡️',
                title: 'Employee Protection',
                desc: 'Safeguards employee rights by mandating minimum wages, weekly off, annual leave, maternity benefits, and safe working conditions.',
            },
            {
                icon: '📋',
                title: 'Required for Other Licences',
                desc: 'Shop and Establishment certificate is a prerequisite for obtaining FSSAI licence, GST registration, trade licence, and signage permits in most states.',
            },
            {
                icon: '🤝',
                title: 'Business Credibility',
                desc: 'Registered establishments enjoy greater trust from customers, vendors, landlords, and potential investors compared to unregistered businesses.',
            },
            {
                icon: '📉',
                title: 'Avoid Penalties & Prosecution',
                desc: 'Timely registration helps avoid fines, prosecution, and closure orders issued by the labour department for non-compliance.',
            },
            {
                icon: '🌐',
                title: 'Online Accessibility',
                desc: 'Most states now offer online registration and renewal, making the process paperless, faster, and accessible from anywhere.',
            },
        ],

        disadvantages: [
            'Registration requirements and fees vary significantly across states, creating complexity for multi-state businesses',
            'Annual renewal is mandatory in most states — missing the deadline attracts penalties and potential closure orders',
            'The Act imposes restrictions on working hours and overtime that may limit operational flexibility for some businesses',
            'Compliance with record-keeping requirements (attendance register, wage register, leave register) adds administrative overhead',
            'Labour inspector visits (in states without self-certification) can sometimes lead to harassment or delays',
        ],

        faqs: [
            {
                q: 'Is Shop and Establishment Registration mandatory?',
                a: 'Yes. Every shop and commercial establishment must register under the state Shop and Establishment Act within 30 days of commencing business. Non-registration attracts penalties.',
            },
            {
                q: 'Which authority issues the Shop and Establishment certificate?',
                a: 'The certificate is issued by the local municipal corporation, district labour office, or the state labour department, depending on the state. Many states now issue it through online portals.',
            },
            {
                q: 'What is the validity of Shop and Establishment Registration?',
                a: 'The validity varies by state — some states issue lifetime registration (e.g., Maharashtra), while others require annual or periodic renewal. Your Professional will advise based on your state.',
            },
            {
                q: 'Can I register online for Shop and Establishment?',
                a: 'Yes. Most states including Maharashtra, Karnataka, Delhi, Tamil Nadu, and Gujarat offer online registration through their respective state labour department portals.',
            },
            {
                q: 'What are the working hours prescribed under the Act?',
                a: 'Generally, the Act prescribes 9 hours of work per day and 48 hours per week for employees, with at least one weekly holiday. However, specific provisions vary by state.',
            },
            {
                q: 'Do freelancers or home-based businesses need this registration?',
                a: 'If you operate from a fixed commercial premise or employ workers, you likely need registration. Pure freelancers working from home without employees may be exempt, but it is advisable to check with Your Professional for your specific state.',
            },
            {
                q: 'What is the penalty for not registering?',
                a: 'Penalties vary by state but typically range from ₹1,000 to ₹25,000 for first-time offences. Continued non-compliance can lead to higher fines, prosecution, and even closure of the establishment.',
            },
            {
                q: 'How long does it take to get the registration certificate?',
                a: 'With Your Professional, the registration is typically completed within 5–7 working days. In states with online self-certification, the certificate can be issued within 1–3 days.',
            },
        ],

        cta: {
            heading: 'Register Your Establishment with Your Professional!',
            subheading:
                'Stay compliant with state labour laws and give your business the legal recognition it deserves — Your Professional handles everything from filing to certificate issuance.',
            features: [
                '📋 Complete application preparation & filing',
                '⚡ Fast-track processing in 5–7 days',
                '🔄 Annual renewal reminders & support',
                '📞 Dedicated labour law compliance expert',
            ],
        },
    },
};
