import type { ServiceData } from '../services';

export const COMPANY_COMPLIANCE: Record<string, ServiceData> = {

    /* ────────────────────────────────────────────────────────────── 1. MSME REGISTRATION ────────────────────────────────────────────────────────────── */

    'msme-registration': {
        slug: 'msme-registration',
        title: 'MSME Registration (Udyam Registration) Online in India',
        subtitle:
            'Register your Micro, Small or Medium Enterprise under the Udyam Registration portal and unlock government subsidies, tax benefits, and priority lending — with expert guidance from Your Professional.',

        heroFeatures: [
            '✅ 100 % online Udyam Registration — no office visits',
            '📄 Aadhaar-based self-declaration with zero document uploads',
            '🏦 Instant access to priority sector lending and subsidies',
            '⚡ Permanent e-certificate issued in 1–2 working days',
            '🔄 Lifetime validity — no renewal ever required',
        ],

        overview: {
            heading: 'What is MSME Registration (Udyam Registration)?',
            paragraphs: [
                '<p><strong>MSME Registration</strong>, now officially termed <strong>Udyam Registration</strong>, is the government-recognised registration process for Micro, Small and Medium Enterprises under the <strong>Micro, Small and Medium Enterprises Development (MSMED) Act, 2006</strong>. Administered by the Ministry of MSME through the dedicated Udyam Registration portal (<em>udyamregistration.gov.in</em>), this registration is entirely free of cost and serves as the primary gateway to a wide array of government subsidies, tax concessions, collateral-free loans, and priority lending facilities available exclusively to MSMEs.</p>',
                '<p>Effective <strong>1st July 2020</strong>, Udyam Registration replaced the earlier Udyog Aadhaar Memorandum (UAM) system. The new framework is entirely <strong>Aadhaar-based and self-declaratory</strong>, eliminating the need for physical document uploads. Investment and turnover figures are now automatically verified by linking the portal with the Income Tax and GSTIN databases, ensuring transparency and drastically reducing the scope for misrepresentation or fraudulent claims.</p>',
                '<p>Enterprise classification under the MSMED Act is determined by two composite parameters — <strong>investment in plant &amp; machinery or equipment</strong> and <strong>annual turnover</strong>. A <strong>Micro Enterprise</strong> has investment up to &#8377;1 crore and turnover up to &#8377;5 crore; a <strong>Small Enterprise</strong> has investment up to &#8377;10 crore and turnover up to &#8377;50 crore; and a <strong>Medium Enterprise</strong> has investment up to &#8377;50 crore and turnover up to &#8377;250 crore. These thresholds were substantially revised under the <em>Aatmanirbhar Bharat</em> package in 2020, significantly expanding the coverage and reach of MSME benefits.</p>',
                '<p>Whether you are a startup, a sole proprietorship, a partnership firm, or a private limited company, <strong>Your Professional</strong> guides you through the entire Udyam Registration journey — from determining the correct classification and NIC code to filing the application, downloading your permanent Udyam Registration certificate, and helping you leverage every subsidy and scheme available. Our experts ensure your registration is accurate and fully optimised for maximum benefit.</p>',
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
            'Any proprietorship, partnership, LLP, private limited company, one person company, HUF, cooperative society, or trust engaged in manufacturing or service activity',
            'The enterprise must meet the MSMED Act investment and turnover criteria for Micro, Small, or Medium classification',
            'Aadhaar number of the proprietor, managing partner, karta (HUF), or authorised signatory is mandatory for OTP verification',
            'PAN and GSTIN are required if the enterprise is already registered under GST; otherwise PAN alone suffices',
            'Both new enterprises and existing enterprises migrating from the erstwhile UAM system are eligible to apply',
            'No minimum turnover or investment threshold — even startups with zero turnover can register on day one of operations',
            'Enterprises engaged in retail or wholesale trade are now eligible for Udyam Registration following the latest Ministry notification',
            'One person can register only one Udyam; however, multiple activities and NIC codes can be listed within a single registration',
        ],

        documents: [
            {
                category: 'Identity & Address Proof',
                items: [
                    'Aadhaar card of the proprietor / managing partner / authorised director (mandatory for OTP verification)',
                    'PAN card of the enterprise or proprietor (auto-linked via the Udyam portal)',
                    'Address proof of the business premises — electricity bill, rent agreement, or property tax receipt',
                ],
            },
            {
                category: 'Business & Financial Details',
                items: [
                    'GSTIN certificate (if registered under GST; portal auto-fetches turnover data)',
                    'Details of investment in plant & machinery / equipment as per the latest audited financials',
                    'Bank account details (account number, IFSC code) linked to the enterprise',
                    'NIC code (National Industrial Classification) of each business activity carried out',
                ],
            },
            {
                category: 'Entity-Specific Documents',
                items: [
                    'Partnership deed (for partnership firms) or LLP agreement (for LLPs)',
                    'Certificate of Incorporation, MOA, and board resolution (for companies)',
                    'Trust deed or society registration certificate (for trusts / societies)',
                ],
            },
        ],

        process: [
            {
                title: 'Free Consultation with Your Professional',
                desc: 'Discuss your enterprise type, principal activity, investment in plant & machinery, and annual turnover to determine the correct MSME classification (Micro, Small, or Medium).',
                time: '1 day',
            },
            {
                title: 'Aadhaar OTP Verification',
                desc: 'Your Aadhaar number is validated through a secure OTP sent to the registered mobile number on the Udyam Registration portal.',
                time: 'Instant',
            },
            {
                title: 'PAN & GSTIN Validation',
                desc: 'PAN is verified against the Income Tax database and GSTIN (if applicable) is linked for automatic retrieval of investment and turnover figures.',
                time: 'Instant',
            },
            {
                title: 'Complete the Udyam Registration Form',
                desc: 'Enter the enterprise name, type of organisation, registered address, bank account details, NIC codes for all activities, investment, and turnover figures in the online application.',
                time: '1 day',
            },
            {
                title: 'Self-Declaration & Submission',
                desc: 'Review all details for accuracy, accept the self-declaration, and submit the form electronically. No physical documents need to be uploaded at any stage.',
                time: 'Same day',
            },
            {
                title: 'Udyam Registration Number (URN) Allotment',
                desc: 'A permanent Udyam Registration Number is allotted and an e-certificate is generated. The certificate can be downloaded and verified anytime from the portal.',
                time: '1–2 working days',
            },
            {
                title: 'Post-Registration Support by Your Professional',
                desc: 'Your Professional assists with updating enterprise details, adding NIC codes, applying for government tenders, and availing MSME schemes and subsidies.',
                time: 'Ongoing',
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
                desc: 'Banks are mandated by the RBI to provide collateral-free loans up to ₹10 lakh and allocate a fixed percentage of advances to MSME-registered enterprises under priority sector guidelines.',
            },
            {
                icon: '💰',
                title: 'Government Subsidies & Schemes',
                desc: 'Gain access to CLCSS (Credit Linked Capital Subsidy Scheme), PMEGP, Stand-Up India, and numerous Central and State subsidy schemes exclusively reserved for MSMEs.',
            },
            {
                icon: '📉',
                title: 'Lower Interest Rates on Loans',
                desc: 'Banks and financial institutions offer concessional interest rates — typically 1% to 1.5% lower — on term loans and working capital facilities to Udyam-registered enterprises.',
            },
            {
                icon: '🛡️',
                title: 'Protection Against Delayed Payments',
                desc: 'Buyers must pay MSME suppliers within 45 days under Section 15 of the MSMED Act. Failure attracts compound interest at three times the bank rate notified by the RBI.',
            },
            {
                icon: '📋',
                title: 'Preference in Government Tenders',
                desc: 'MSMEs enjoy exemption from earnest money deposit (EMD) and receive procurement preference — at least 25 % of annual procurement by Central Ministries must be sourced from MSMEs.',
            },
            {
                icon: '🧾',
                title: 'Income Tax & MAT Benefits',
                desc: 'Eligible for MAT (Minimum Alternate Tax) credit carry-forward for 15 years, exemptions under specific startup schemes, and a reduced overall compliance burden under the Income Tax Act.',
            },
            {
                icon: '⚡',
                title: 'Concession on Electricity & Utilities',
                desc: 'Many states offer electricity duty exemption, industrial tariff concessions, and utility subsidies to MSME-registered manufacturing and service units.',
            },
            {
                icon: '🔖',
                title: 'Patent & Trademark Fee Subsidy',
                desc: 'MSMEs receive up to 50 % subsidy on patent filing fees and trademark registration fees under government intellectual-property facilitation schemes.',
            },
            {
                icon: '🌐',
                title: 'Ease of Doing Business',
                desc: 'Single-point registration, simplified GST returns, exemption from certain direct-tax provisions, and fewer inspection requirements compared to large enterprises.',
            },
        ],

        disadvantages: [
            'Classification is auto-updated annually based on IT/GST data — growing enterprises may lose MSME status and associated benefits automatically',
            'Only one Udyam Registration is permitted per enterprise; separate registrations for different business units are not allowed',
            'Trade enterprises (wholesale and retail) still have limited access to certain MSME schemes compared to manufacturing and service units',
            'Benefits are linked to Aadhaar, creating difficulties for enterprises where the promoter faces Aadhaar verification or linking issues',
            'The self-declaratory nature of the form means any inadvertent misrepresentation can lead to cancellation and penalties',
            'Enterprises exceeding Medium-classification thresholds lose all MSME benefits with no transition period or phased withdrawal',
        ],

        faqs: [
            {
                q: 'Is MSME Registration mandatory in India?',
                a: 'MSME Registration (Udyam Registration) is voluntary, not mandatory. However, it is essential to avail government subsidies, priority sector lending, tender preferences, and delayed-payment protection under the MSMED Act, 2006.',
            },
            {
                q: 'What is the difference between Udyam Registration and Udyog Aadhaar?',
                a: 'Udyam Registration replaced the Udyog Aadhaar Memorandum (UAM) system effective 1st July 2020. The new system is fully Aadhaar-based, automatically linked with IT and GST databases, and provides a permanent Udyam Registration Number (URN) with lifetime validity.',
            },
            {
                q: 'Is there any government fee for MSME / Udyam Registration?',
                a: 'No. The Ministry of MSME charges absolutely no fee for Udyam Registration — it is completely free. Your Professional charges a nominal service fee for expert consultation, application preparation, and filing assistance.',
            },
            {
                q: 'Do I need to renew my MSME Registration?',
                a: 'No. Udyam Registration has lifetime validity and does not require renewal. However, the enterprise classification (Micro, Small, or Medium) is updated automatically each year based on income-tax returns and GST data filed by the enterprise.',
            },
            {
                q: 'Can a Private Limited Company obtain MSME Registration?',
                a: 'Yes. Any form of business entity — sole proprietorship, partnership firm, LLP, private limited company, one person company, HUF, trust, or cooperative society — can obtain Udyam Registration provided it meets the investment and turnover criteria.',
            },
            {
                q: 'What documents are required for Udyam Registration?',
                a: 'Only the Aadhaar number of the proprietor or authorised signatory is mandatory. PAN and GSTIN are required if the enterprise is GST-registered. No physical documents need to be uploaded — the entire process is self-declaratory and online.',
            },
            {
                q: 'Can I have more than one Udyam Registration?',
                a: 'No. Only one Udyam Registration is allowed per enterprise as per the rules. However, you can add multiple business activities and NIC codes within a single registration to cover all your operations.',
            },
            {
                q: 'How long does it take to get the MSME certificate?',
                a: 'With Your Professional, Udyam Registration is typically completed within 1–2 working days. The e-certificate bearing the Udyam Registration Number is generated instantly upon successful submission on the portal.',
            },
            {
                q: 'What are the current MSME classification thresholds?',
                a: 'Micro Enterprise: investment up to ₹1 crore and turnover up to ₹5 crore. Small Enterprise: investment up to ₹10 crore and turnover up to ₹50 crore. Medium Enterprise: investment up to ₹50 crore and turnover up to ₹250 crore. Both investment and turnover criteria must be satisfied simultaneously.',
            },
            {
                q: 'Can retail and wholesale traders register as MSME?',
                a: 'Yes. Following the latest notification by the Ministry of MSME, enterprises engaged in retail and wholesale trade are now eligible for Udyam Registration and can avail benefits under the MSMED Act.',
            },
            {
                q: 'What happens if my turnover exceeds the Medium Enterprise limit?',
                a: 'If your enterprise turnover exceeds ₹250 crore or investment exceeds ₹50 crore, it will automatically be reclassified out of MSME status. Benefits linked to MSME registration will cease from the next financial year.',
            },
            {
                q: 'How does Your Professional help with MSME Registration?',
                a: 'Your Professional provides end-to-end assistance — from determining the correct classification and NIC code to filing the application, downloading the certificate, and helping you access government schemes, subsidies, and tender preferences available to registered MSMEs.',
            },
        ],

        cta: {
            heading: 'Register Your MSME with Your Professional Today!',
            subheading:
                'Unlock government subsidies, priority lending, tax concessions, and tender preferences with hassle-free Udyam Registration — powered by expert guidance from Your Professional.',
            features: [
                '🆓 Zero government fees — 100 % free registration',
                '⚡ Permanent e-certificate in 1–2 working days',
                '🛡️ Lifetime validity with no renewal required',
                '📞 Dedicated MSME expert support from Your Professional',
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
            '🏦 12 % employer + 12 % employee contribution on basic + DA',
            '⚡ Registration completed in 3–5 working days',
            '🔐 Covers PF, Pension (EPS) & Insurance (EDLI) in one go',
        ],

        overview: {
            heading: 'What is EPF Registration?',
            paragraphs: [
                '<p><strong>EPF Registration</strong> is the process of enrolling an establishment under the <strong>Employees\' Provident Funds and Miscellaneous Provisions Act, 1952</strong> with the <strong>Employees\' Provident Fund Organisation (EPFO)</strong>. It is mandatory for every establishment employing 20 or more persons, and for those employing 10 or more persons in certain notified industries such as cinemas, newspapers, and plantations.</p>',
                '<p>Under the EPF scheme, both the employer and employee contribute <strong>12 % of the employee\'s basic wages plus dearness allowance</strong> to the provident fund every month. The employer\'s 12 % contribution is further split across three sub-schemes — <strong>EPF</strong> (Employees\' Provident Fund at 3.67 %), <strong>EPS</strong> (Employees\' Pension Scheme at 8.33 % on wages up to ₹15,000), and <strong>EDLI</strong> (Employees\' Deposit-Linked Insurance Scheme at 0.50 %). This integrated structure provides retirement savings, monthly pension, and life-insurance cover under a single registration.</p>',
                '<p>The registration is completed online through the <strong>EPFO Unified Portal</strong> (<em>unifiedportal-emp.epfindia.gov.in</em>). Upon successful registration, the establishment receives a unique <strong>EPF Establishment Code</strong>, and every eligible employee is assigned a <strong>Universal Account Number (UAN)</strong> that remains constant throughout their career, enabling seamless PF transfer across employers.</p>',
                '<p><strong>Your Professional</strong> handles the entire EPF registration journey — from initial applicability assessment and document preparation to portal registration, employee enrolment, UAN generation, and ongoing monthly ECR filing. With Your Professional by your side, you stay fully compliant with EPFO regulations while focusing on growing your business.</p>',
            ],
            highlights: [
                { icon: '👥', text: 'Mandatory for 20+ employees (10+ in notified industries)' },
                { icon: '💰', text: '12 % employer + 12 % employee contribution on basic + DA' },
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
            'Every establishment (factory, shop, or business) employing 20 or more persons is mandatorily covered under the EPF Act',
            'Establishments employing 10 or more persons in notified industries (e.g., cinema, newspaper, plantation) are also covered',
            'Voluntary registration is available for establishments with fewer than 20 employees with the consent of employer and majority of employees',
            'Employees drawing basic wages up to ₹15,000 per month are mandatorily covered; those earning above may join voluntarily with employer approval',
            'All types of entities — companies, LLPs, partnership firms, proprietorships, trusts, and societies — are eligible for EPF registration',
            'Both permanent and contractual employees working in the establishment are covered under the EPF Act',
            'The Act applies across India except Jammu & Kashmir (which has a separate state PF Act)',
            'Once an establishment is covered, it remains covered even if the employee count falls below the threshold subsequently',
        ],

        documents: [
            {
                category: 'Establishment Documents',
                items: [
                    'Certificate of Incorporation / Partnership Deed / Registration Certificate of the entity',
                    'PAN card of the establishment',
                    'Address proof of the registered office (utility bill, rent agreement, or property documents)',
                    'GST registration certificate (if applicable)',
                    'Bank account details with cancelled cheque or latest bank statement',
                    'Digital Signature Certificate (DSC) of the authorised signatory',
                ],
            },
            {
                category: 'Employer / Authorised Signatory Documents',
                items: [
                    'Aadhaar card of the authorised signatory',
                    'PAN card of the authorised signatory',
                    'Mobile number and email ID linked to Aadhaar for OTP verification',
                    'Specimen signature of the employer or authorised representative',
                ],
            },
            {
                category: 'Employee Information',
                items: [
                    'List of employees with Aadhaar numbers and date of joining',
                    'Salary details (basic wages + DA) of all eligible employees',
                    'Bank account details and IFSC codes of all employees',
                    'Nominee details (name, relationship, Aadhaar) of each employee',
                ],
            },
        ],

        process: [
            {
                title: 'Consultation with Your Professional',
                desc: 'Discuss employee strength, wage structure, and compliance requirements to determine applicability and contribution breakup under EPF, EPS, and EDLI.',
                time: '1 day',
            },
            {
                title: 'Employer Registration on EPFO Unified Portal',
                desc: 'Create the establishment account on the EPFO Unified Portal using DSC and submit the Employer Registration Form (Form 5A) with all prescribed details.',
                time: '1 day',
            },
            {
                title: 'Upload Establishment Details',
                desc: 'Enter establishment name, address, PAN, nature of business, date of setup, and total employee count in the online form along with supporting documents.',
                time: '1 day',
            },
            {
                title: 'Employee Enrolment & UAN Generation',
                desc: 'Add all eligible employees with Aadhaar, bank details, and nominee information. A Universal Account Number (UAN) is generated for each employee automatically.',
                time: '1–2 days',
            },
            {
                title: 'KYC Verification of Employees',
                desc: 'Link Aadhaar, PAN, and bank account of each employee through the UAN portal for e-KYC verification to enable online claims and transfers.',
                time: '2–3 days',
            },
            {
                title: 'Allotment of EPF Establishment Code',
                desc: 'EPFO verifies the submission and allots a unique Establishment Code (e.g., MHBAN0012345000) within 3–5 working days of successful application.',
                time: '3–5 working days',
            },
            {
                title: 'First ECR Filing & Payment',
                desc: 'File the first Electronic Challan cum Return (ECR) and remit PF contributions by the 15th of the month following the wage month.',
                time: 'By 15th of next month',
            },
            {
                title: 'Ongoing Compliance Setup',
                desc: 'Your Professional sets up monthly ECR filing, annual return filing (Form 3A & 6A), and handles any EPFO notices, inspections, or employee grievances.',
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
                desc: 'EPF provides a substantial retirement corpus through compounding interest at 8.25 % p.a. (FY 2023–24) on accumulated PF balance, ensuring financial security after retirement.',
            },
            {
                icon: '💼',
                title: 'Statutory Compliance & Legal Safety',
                desc: 'Ensures your establishment is fully compliant with the EPF Act, avoiding penalties, criminal prosecution, and reputational damage from regulatory non-compliance.',
            },
            {
                icon: '🏥',
                title: 'Pension & Life-Insurance Coverage',
                desc: 'Employees receive monthly pension under EPS after 10 years of service and attaining age 58, plus life-insurance cover up to ₹7 lakh under EDLI at no cost to the employee.',
            },
            {
                icon: '📉',
                title: 'Tax Benefits for Employer & Employee',
                desc: 'Employer PF contribution is deductible under Section 36(1)(iv) of the Income Tax Act. Employee contribution qualifies for deduction under Section 80C up to ₹1.5 lakh per annum.',
            },
            {
                icon: '👥',
                title: 'Employee Retention & Morale',
                desc: 'PF is a significant employee benefit that helps attract and retain quality talent, especially in competitive job markets where employer-provided social security is a key differentiator.',
            },
            {
                icon: '🏦',
                title: 'Emergency Withdrawal Facility',
                desc: 'Employees can make partial withdrawals for medical emergencies, home purchase, higher education, marriage, and natural calamities under EPFO-specified conditions and limits.',
            },
            {
                icon: '🔄',
                title: 'Easy Portability via UAN',
                desc: 'The Universal Account Number (UAN) ensures seamless PF transfer when an employee changes jobs — no need for a fresh PF account, reducing paperwork and settlement delays.',
            },
            {
                icon: '🌐',
                title: 'Online Management & Transparency',
                desc: 'The EPFO Unified Portal enables online ECR filing, challan payment, claims settlement, and passbook viewing — reducing paperwork and giving employees real-time visibility.',
            },
            {
                icon: '📊',
                title: 'Government-Backed Guaranteed Returns',
                desc: 'EPF offers government-backed, risk-free returns that are typically higher than bank fixed-deposit rates, making it one of the safest long-term savings instruments for employees.',
            },
        ],

        disadvantages: [
            'Employer bears an additional cost of approximately 13 % (12 % PF + 0.50 % EDLI + 0.50 % admin charges) over and above employee wages',
            'Monthly ECR filing and payment must be completed by the 15th of every month — a tight compliance deadline with heavy penalties for delay',
            'Withdrawal before 5 years of continuous service attracts TDS at 10 % (if PAN is furnished) or 34.608 % (without PAN) on the accumulated balance',
            'Employees earning above ₹15,000 basic wages who are already EPF members cannot easily opt out of the scheme',
            'Complex compliance involving multiple forms, returns, and periodic inspections adds significant administrative burden for small businesses',
            'Once covered, an establishment cannot de-register even if the employee count falls below 20, creating a permanent compliance obligation',
        ],

        faqs: [
            {
                q: 'Is EPF Registration mandatory for all businesses?',
                a: 'EPF Registration is mandatory for establishments employing 20 or more persons. Establishments with 10+ employees in certain notified industries are also covered. Smaller establishments can opt for voluntary registration with mutual consent.',
            },
            {
                q: 'What is the current EPF contribution rate?',
                a: 'Both employer and employee contribute 12 % of basic wages + DA. Of the employer\'s 12 %, 3.67 % goes to EPF and 8.33 % to EPS. The employer also pays 0.50 % towards EDLI and 0.50 % as administrative charges.',
            },
            {
                q: 'What is UAN and how does it work?',
                a: 'Universal Account Number (UAN) is a 12-digit unique number assigned to each PF member. It remains the same throughout the employee\'s career and links all PF accounts across employers, enabling easy transfer and online withdrawal.',
            },
            {
                q: 'Can employees withdraw PF before retirement?',
                a: 'Yes. Partial withdrawals are allowed for specific purposes like home purchase, medical treatment, higher education, and marriage. Full withdrawal is permitted after 2 months of unemployment or upon attaining age 58.',
            },
            {
                q: 'What is the current interest rate on EPF?',
                a: 'The EPFO declares the interest rate annually. For FY 2023–24, the EPF interest rate is 8.25 % per annum, credited to the member\'s PF account. This rate is among the highest for risk-free savings instruments in India.',
            },
            {
                q: 'What happens if PF is not deposited on time?',
                a: 'Late deposit attracts interest at 12 % p.a. under Section 7Q and damages ranging from 5 % to 100 % of arrears under Section 14B. Persistent default can lead to criminal prosecution and imprisonment.',
            },
            {
                q: 'Can a startup with fewer than 20 employees register for EPF?',
                a: 'Yes. Establishments with fewer than 20 employees can opt for voluntary EPF registration with the consent of the employer and a majority of employees. Your Professional can assist with the entire process.',
            },
            {
                q: 'How long does EPF Registration take?',
                a: 'With Your Professional, EPF Registration is typically completed within 3–5 working days from submission of all documents on the EPFO Unified Portal, including employee UAN generation.',
            },
            {
                q: 'What is the EPF wage ceiling for mandatory coverage?',
                a: 'Employees drawing basic wages up to ₹15,000 per month are mandatorily covered. Employees earning above this threshold can join voluntarily with the employer\'s approval, but once enrolled they cannot opt out.',
            },
            {
                q: 'Is the employer\'s PF contribution tax-deductible?',
                a: 'Yes. The employer\'s contribution to EPF is fully deductible as a business expense under Section 36(1)(iv) of the Income Tax Act, provided it is deposited within the due date prescribed under the EPF Act.',
            },
            {
                q: 'What is the EDLI scheme and who is covered?',
                a: 'EDLI (Employees\' Deposit-Linked Insurance Scheme) provides life-insurance cover up to ₹7 lakh to the nominee in case of death of the employee during service. The employer contributes 0.50 % of basic wages; the employee pays nothing towards EDLI.',
            },
            {
                q: 'How does Your Professional help with EPF compliance?',
                a: 'Your Professional provides end-to-end EPF support — from initial registration and employee enrolment to monthly ECR filing, annual returns, handling EPFO notices, and assisting employees with claims, transfers, and KYC updates.',
            },
        ],

        cta: {
            heading: 'Get EPF Registration with Your Professional!',
            subheading:
                'Stay compliant with EPFO regulations and secure your employees\' future — from registration to monthly filing, Your Professional handles it all so you can focus on your business.',
            features: [
                '✅ End-to-end EPF registration & employee enrolment',
                '📋 Monthly ECR filing & annual return compliance',
                '🛡️ Avoid penalties, prosecution & reputational risk',
                '📞 Dedicated PF compliance expert from Your Professional',
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
            '📄 State-level registration with the labour department',
            '🏪 Governs working hours, wages, holidays & service conditions',
            '⚡ Registration in 5–7 working days (varies by state)',
            '🔄 Lifetime validity in select states like Maharashtra',
        ],

        overview: {
            heading: 'What is Shop and Establishment Registration?',
            paragraphs: [
                '<p><strong>Shop and Establishment Registration</strong> is a mandatory registration under the <strong>Shops and Establishments Act</strong> enacted by each state government in India. The Act regulates the conditions of work in shops, commercial establishments, restaurants, theatres, hotels, and other places of business. Every employer is legally required to register the establishment within <strong>30 days of commencing business</strong>, failing which penalties and prosecution may follow.</p>',
                '<p>The registration is obtained from the <strong>local municipal corporation</strong> or the <strong>state labour department</strong>, depending on the state. It provides official legal recognition to the business and serves as a primary proof of establishment — required for opening current bank accounts, applying for trade licences, obtaining FSSAI registration, filing for GST, and entering into commercial contracts or lease agreements.</p>',
                '<p>While the basic framework is broadly similar across states, the specific provisions regarding <strong>working hours, overtime limits, weekly holidays, annual leave, rest intervals, employment of women and young persons, and termination procedures</strong> vary significantly from state to state. For example, Maharashtra offers lifetime registration validity, while many other states require annual or biennial renewal.</p>',
                '<p><strong>Your Professional</strong> ensures you comply with your specific state\'s Shop and Establishment Act from day one. Our experts handle the entire process — from determining the applicable state rules and preparing the application to liaising with the labour department, obtaining the certificate, and setting up renewal reminders where required.</p>',
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
            'Any shop, commercial establishment, restaurant, hotel, theatre, or other establishment as defined under the applicable state Act',
            'All employers commencing business must apply for registration within 30 days of starting operations in any state',
            'Applies to both employer-run and employee-run establishments regardless of the number of employees on the rolls',
            'Covers establishments in all sectors — retail, services, IT, hospitality, healthcare, education, and warehousing',
            'Applicable to sole proprietors, partnerships, LLPs, companies, trusts, and societies operating a commercial establishment',
            'Both new businesses and existing unregistered businesses must obtain registration to avoid penalties and prosecution',
            'Even home-based businesses operating commercially from a fixed premise may be required to register in certain states',
            'Establishments operating from multiple premises in different states must obtain separate registrations for each location',
        ],

        documents: [
            {
                category: 'Identity & Address Proof',
                items: [
                    'PAN card of the proprietor / partners / directors',
                    'Aadhaar card of the proprietor / authorised person',
                    'Passport-size photographs of the applicant',
                    'Address proof of the establishment — rent agreement, property deed, sale deed, or latest utility bill',
                ],
            },
            {
                category: 'Business Documents',
                items: [
                    'Certificate of Incorporation / Partnership Deed / LLP Agreement / GST certificate (as applicable)',
                    'Nature of business activity and detailed description of goods sold or services rendered',
                    'Details of the establishment — name, complete address, and exact date of commencement of business',
                    'Floor plan or layout of the premises (required in some states such as Tamil Nadu and Karnataka)',
                ],
            },
            {
                category: 'Employee Information',
                items: [
                    'Total number of employees — categorised as male, female, and young persons separately',
                    'Details of daily working hours, weekly holidays, shift timings, and overtime policy',
                    'Salary register or employment records (required in some states for verification)',
                    'Complete list of employees with names, designations, and dates of joining',
                ],
            },
        ],

        process: [
            {
                title: 'Consultation with Your Professional',
                desc: 'Assess the type of establishment, identify the applicable state Act, and determine all documentation requirements based on your business location and activity.',
                time: '1 day',
            },
            {
                title: 'Document Collection & Verification',
                desc: 'Collect all required documents — identity proofs, address proofs, business registration certificates, employee details, and premises layout (if required by the state).',
                time: '1–2 days',
            },
            {
                title: 'Online Application Submission',
                desc: 'File the application on the state labour department portal or municipal corporation portal with all prescribed details and supporting documents.',
                time: '1 day',
            },
            {
                title: 'Payment of Registration Fee',
                desc: 'Pay the prescribed registration fee online, which varies by state and the number of employees employed in the establishment.',
                time: 'Same day',
            },
            {
                title: 'Inspection by Labour Inspector (if applicable)',
                desc: 'In some states, a labour inspector may visit the premises to verify submitted details. Many states have now moved to self-certification, waiving physical inspections.',
                time: '3–5 days (if applicable)',
            },
            {
                title: 'Certificate Issuance',
                desc: 'Upon successful verification, the Shop and Establishment Registration Certificate is issued digitally or physically by the labour department.',
                time: '5–7 working days',
            },
            {
                title: 'Display of Certificate at Premises',
                desc: 'The registration certificate must be prominently displayed at the establishment premises in a visible location as mandated by the Act.',
                time: 'Immediate',
            },
            {
                title: 'Renewal Reminder & Ongoing Compliance',
                desc: 'Your Professional sets up timely renewal reminders (where applicable) and ensures ongoing compliance with working-hour regulations, leave policies, and record-keeping requirements.',
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
                title: 'Legal Recognition & Identity',
                desc: 'Provides official legal identity to your business establishment and serves as primary proof of existence for banks, government agencies, landlords, and commercial transactions.',
            },
            {
                icon: '🏦',
                title: 'Bank Account & Loan Eligibility',
                desc: 'Required for opening a current bank account in the establishment name and applying for business loans, overdraft facilities, and credit lines from banks and NBFCs.',
            },
            {
                icon: '⚖️',
                title: 'Labour Law Compliance',
                desc: 'Ensures compliance with state-specific labour laws covering working hours, rest intervals, weekly holidays, overtime payment, and conditions of service for all employees.',
            },
            {
                icon: '🛡️',
                title: 'Employee Protection & Welfare',
                desc: 'Safeguards employee rights by mandating minimum wages, weekly off, annual leave with pay, maternity benefits, and safe and hygienic working conditions.',
            },
            {
                icon: '📋',
                title: 'Prerequisite for Other Licences',
                desc: 'Shop and Establishment certificate is a prerequisite for obtaining FSSAI licence, GST registration, trade licence, signage permits, and professional tax registration in most states.',
            },
            {
                icon: '🤝',
                title: 'Enhanced Business Credibility',
                desc: 'Registered establishments enjoy greater trust from customers, vendors, landlords, investors, and government agencies compared to unregistered businesses.',
            },
            {
                icon: '📉',
                title: 'Avoid Penalties & Prosecution',
                desc: 'Timely registration and compliance help avoid fines, criminal prosecution, and closure orders issued by the labour department for non-compliance with the Act.',
            },
            {
                icon: '🌐',
                title: 'Online Accessibility & Convenience',
                desc: 'Most states now offer online registration, renewal, and amendment, making the process paperless, faster, and accessible from anywhere without visiting government offices.',
            },
            {
                icon: '📊',
                title: 'Structured Work Environment',
                desc: 'The Act creates a structured framework for working hours, leave, and conditions of service — helping businesses build a compliant and employee-friendly workplace culture.',
            },
        ],

        disadvantages: [
            'Registration requirements, fees, and validity periods vary significantly across states, creating complexity for businesses operating in multiple states',
            'Annual renewal is mandatory in most states — missing the deadline attracts penalties, late fees, and potential closure orders from the labour department',
            'The Act imposes restrictions on maximum working hours and overtime that may limit operational flexibility for certain time-sensitive businesses',
            'Compliance with record-keeping requirements (attendance register, wage register, leave register) adds ongoing administrative overhead for small businesses',
            'Labour inspector visits (in states without self-certification) can sometimes lead to procedural delays or unwarranted scrutiny',
            'Different states have different online portals with varying levels of functionality, making multi-state compliance management challenging without professional help',
        ],

        faqs: [
            {
                q: 'Is Shop and Establishment Registration mandatory?',
                a: 'Yes. Every shop and commercial establishment in India must register under the applicable state Shop and Establishment Act within 30 days of commencing business. Non-registration attracts penalties and may lead to prosecution.',
            },
            {
                q: 'Which authority issues the Shop and Establishment certificate?',
                a: 'The certificate is issued by the local municipal corporation, district labour office, or the state labour department, depending on the state. Many states including Maharashtra, Karnataka, and Delhi now issue it through online portals.',
            },
            {
                q: 'What is the validity of Shop and Establishment Registration?',
                a: 'The validity varies by state — some states issue lifetime registration (e.g., Maharashtra post-2017 amendment), while others require annual or periodic renewal. Your Professional will advise based on your specific state rules.',
            },
            {
                q: 'Can I register online for Shop and Establishment?',
                a: 'Yes. Most major states including Maharashtra, Karnataka, Delhi, Tamil Nadu, Gujarat, and Telangana offer online registration through their respective state labour department portals or integrated portals.',
            },
            {
                q: 'What are the working hours prescribed under the Act?',
                a: 'Generally, the Act prescribes a maximum of 9 hours of work per day and 48 hours per week for employees, with at least one paid weekly holiday. Specific provisions regarding overtime, rest intervals, and spread-over hours vary by state.',
            },
            {
                q: 'Do freelancers or home-based businesses need this registration?',
                a: 'If you operate from a fixed commercial premise or employ workers, you likely need registration. Pure freelancers working from home without employees may be exempt, but it is advisable to check with Your Professional for your specific state requirements.',
            },
            {
                q: 'What is the penalty for not registering?',
                a: 'Penalties vary by state but typically range from ₹1,000 to ₹25,000 for first-time offences. Continued non-compliance can lead to higher fines, criminal prosecution, and even a closure order against the establishment.',
            },
            {
                q: 'How long does it take to get the registration certificate?',
                a: 'With Your Professional, the registration is typically completed within 5–7 working days. In states with online self-certification (e.g., Maharashtra, Gujarat), the certificate can be issued within 1–3 days.',
            },
            {
                q: 'Do I need separate registrations for multiple branches in the same state?',
                a: 'Yes. Each establishment or branch operating at a different address requires a separate Shop and Establishment Registration, even if they are in the same city or state.',
            },
            {
                q: 'What records must a registered establishment maintain?',
                a: 'Registered establishments must maintain an attendance register, wage register, leave register, overtime register, and employment register as prescribed by the state Act. Your Professional can help set up compliant record-keeping systems.',
            },
            {
                q: 'Is the Shop and Establishment Registration linked to GST?',
                a: 'While not directly linked, the Shop and Establishment certificate is often a prerequisite for obtaining GST registration and other business licences. Banks and government agencies may also request it during GST verification.',
            },
            {
                q: 'How does Your Professional help with Shop and Establishment Registration?',
                a: 'Your Professional provides end-to-end support — from identifying the applicable state Act and preparing all documents to filing the application, liaising with the labour department, obtaining the certificate, and setting up renewal reminders for ongoing compliance.',
            },
        ],

        cta: {
            heading: 'Register Your Establishment with Your Professional!',
            subheading:
                'Stay compliant with state labour laws, give your business the legal recognition it deserves, and protect your employees — Your Professional handles everything from application to certificate issuance.',
            features: [
                '📋 Complete application preparation & filing',
                '⚡ Fast-track processing in 5–7 working days',
                '🔄 Annual renewal reminders & ongoing compliance support',
                '📞 Dedicated labour-law compliance expert from Your Professional',
            ],
        },
    },
};
