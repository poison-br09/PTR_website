import type { ServiceData } from '../services';

export const BUSINESS_LICENSES: Record<string, ServiceData> = {


    /* ──────────────────────────────────────────────────────────────
       1. RNI REGISTRATION
       ────────────────────────────────────────────────────────────── */
    'rni-registration': {
        slug: 'rni-registration',
        title: 'RNI Registration Online in India',
        subtitle:
            'Register your newspaper or periodical with the Registrar of Newspapers for India (RNI) seamlessly — Your Professional offers complete title verification, documentation, and filing support.',
        heroFeatures: [
            'Title Verification & Allotment in 30–60 Days',
            'Expert Guidance on Press & Registration of Books Act Compliance',
            'End-to-End Filing with RNI & District Magistrate',
            'Trusted by Publishers & Media Houses Across India',
        ],

        overview: {
            heading: 'What is RNI Registration?',
            paragraphs: [
                'RNI Registration is the mandatory process of registering a newspaper, magazine, journal, or any periodical publication with the Registrar of Newspapers for India under the Press and Registration of Books Act, 1867 (PRB Act).',
                'The RNI maintains a comprehensive register of all newspapers and periodicals published in India. Registration ensures legal recognition, protects the title of the publication, and enables the publisher to access government advertising, accreditation, and postal concessions.',
                'The process involves two stages — title verification (where the proposed title is checked for availability) and subsequent registration with the District Magistrate after the first issue is published. Your Professional guides you through both stages efficiently.',
            ],
            highlights: [
                { icon: '📰', text: 'Mandatory for publishing newspapers and periodicals in India' },
                { icon: '⚖️', text: 'Governed under the Press and Registration of Books Act, 1867' },
                { icon: '🏛️', text: 'Issued by the Registrar of Newspapers for India (RNI)' },
                { icon: '🔒', text: 'Protects the title of the publication from duplication' },
            ],
        },

        types: [
            { title: 'Newspaper Registration', desc: 'For daily, bi-weekly, or weekly newspapers covering news and current affairs.' },
            { title: 'Magazine / Periodical Registration', desc: 'For weekly, fortnightly, monthly, quarterly, or annual magazines and journals.' },
            { title: 'E-Newspaper Registration', desc: 'For digital-only news publications seeking RNI recognition (subject to evolving guidelines).' },
        ],

        eligibility: [
            'The applicant must be a citizen of India and at least 18 years of age.',
            'The publisher must not have been convicted of any offence involving moral turpitude.',
            'A valid declaration must be filed before the District Magistrate or the designated authority.',
            'The proposed title must not be identical or similar to any existing registered title.',
            'The publication must be printed in India at a declared printing press.',
            'The applicant must have a fixed address within the jurisdiction of the concerned District Magistrate.',
        ],

        documents: [
            {
                category: 'Identity & Address Proof',
                items: [
                    'PAN Card of the publisher',
                    'Aadhaar Card of the publisher',
                    'Passport-sized photographs (4 copies)',
                    'Proof of residential address (utility bill / rent agreement)',
                ],
            },
            {
                category: 'Publication & Press Documents',
                items: [
                    'Title verification letter from RNI',
                    'Declaration filed before the District Magistrate (Form I)',
                    'NOC from the printing press owner',
                    'Affidavit on non-judicial stamp paper by the publisher',
                ],
            },
            {
                category: 'Post-Publication Documents',
                items: [
                    'Five copies of the first published issue',
                    'Certificate of authentication from the District Magistrate',
                    'Annual statement filed with RNI (Form IV)',
                    'Proof of periodicity and regularity of publication',
                ],
            },
        ],

        process: [
            { title: 'Title Availability Check', desc: 'Search the RNI database to ensure your proposed title is not already registered or similar to an existing publication.', time: '1–2 days' },
            { title: 'Apply for Title Verification', desc: 'Submit a title verification application to RNI with up to 6 title choices in order of preference along with the prescribed fee.', time: '1–2 days' },
            { title: 'RNI Title Allotment', desc: 'RNI verifies the proposed titles and allots an available title. The allotment letter is valid for a limited period.', time: '30–60 days' },
            { title: 'File Declaration with District Magistrate', desc: 'The publisher files a declaration in Form I before the District Magistrate within the stipulated time after title allotment.', time: '7–15 days' },
            { title: 'Publish the First Issue', desc: 'Print and publish the first issue of the newspaper or periodical from the declared printing press.', time: '15–30 days' },
            { title: 'Submit Copies to RNI', desc: 'Send five copies of the first published issue along with the authenticated declaration to the RNI office.', time: '3–5 days' },
            { title: 'Certificate of Registration Issued', desc: 'After verification, RNI issues the Certificate of Registration, completing the registration process.', time: '30–45 days' },
        ],

        fees: [
            { item: 'Title Verification Fee', cost: '₹500' },
            { item: 'Declaration Filing Fee', cost: '₹50 – ₹200' },
            { item: 'Registration Certificate Fee', cost: '₹100 – ₹500' },
            { item: 'Duplicate Certificate Fee', cost: '₹200 – ₹500' },
            { item: 'Professional Service Charges (Your Professional)', cost: '₹4,999 onwards' },
        ],

        penalties: [
            { violation: 'Publishing without RNI registration', penalty: 'Fine up to ₹500 and seizure of copies under PRB Act' },
            { violation: 'Filing a false declaration', penalty: 'Imprisonment up to 6 months or fine or both' },
            { violation: 'Failure to submit annual returns (Form IV)', penalty: 'Cancellation of registration by RNI' },
        ],

        advantages: [
            { icon: '📰', title: 'Legal Recognition', desc: 'Your publication gains official recognition and legal standing across India.' },
            { icon: '🔒', title: 'Title Protection', desc: 'The registered title cannot be used by any other publisher in India.' },
            { icon: '📢', title: 'Government Advertising', desc: 'Registered publications are eligible to receive government advertisements through DAVP.' },
            { icon: '📬', title: 'Postal Concessions', desc: 'Enjoy subsidized postal rates for distribution under India Post schemes.' },
            { icon: '🎫', title: 'Press Accreditation', desc: 'Journalists of registered publications can apply for PIB press accreditation.' },
            { icon: '💼', title: 'Business Credibility', desc: 'RNI registration enhances trust with readers, advertisers, and partners.' },
            { icon: '🏦', title: 'Easier Funding', desc: 'Banks and investors view RNI-registered publications as legitimate media enterprises.' },
        ],

        faqs: [
            { q: 'What is RNI Registration and who needs it?', a: 'RNI Registration is the process of registering a newspaper, magazine, or periodical with the Registrar of Newspapers for India under the Press and Registration of Books Act, 1867. Anyone intending to publish a newspaper or periodical in India must obtain RNI registration.' },
            { q: 'How many title choices can I submit?', a: 'You can submit up to 6 title choices in order of preference with your title verification application. RNI will allot the first available title that is not identical or similar to an existing registered publication.' },
            { q: 'How long does the entire RNI registration take?', a: 'The complete process — from title verification to receiving the Certificate of Registration — typically takes 3 to 6 months, depending on RNI processing times and the speed of completing post-allotment formalities.' },
            { q: 'Can a foreigner register a newspaper in India?', a: 'No. Under the PRB Act, only Indian citizens can file a declaration and act as a publisher, printer, or editor of a newspaper or periodical in India.' },
            { q: 'What happens if I do not publish within the stipulated period?', a: 'If the first issue is not published within 6 months of the title allotment (or such extended period), the title allotment lapses and you must re-apply for a fresh title verification.' },
            { q: 'Is RNI registration required for online-only publications?', a: 'Currently, RNI registration is primarily for print publications. Digital-only publications do not fall under the PRB Act, though the government has been considering amendments to include digital media.' },
            { q: 'Can I transfer my RNI-registered title to another person?', a: 'The title itself is not directly transferable. A new declaration must be filed before the District Magistrate by the new publisher, and RNI must be informed of the change in ownership.' },
            { q: 'How does Your Professional assist with RNI Registration?', a: 'Your Professional provides end-to-end assistance — from title availability search and verification filing to declaration preparation, District Magistrate coordination, and final registration with RNI.' },
        ],

        cta: {
            heading: 'Register Your Publication with RNI Today',
            subheading: 'Let Your Professional handle the entire RNI registration process while you focus on creating great content.',
            features: [
                'Free Title Availability Check',
                'Complete Application Filing',
                'District Magistrate Coordination',
                'Post-Registration Compliance Support',
            ],
        },
    },

    /* ──────────────────────────────────────────────────────────────
       2. CDSCO REGISTRATION
       ────────────────────────────────────────────────────────────── */
    'cdsco-registration': {
        slug: 'cdsco-registration',
        title: 'CDSCO Registration Online in India',
        subtitle:
            'Obtain your CDSCO approval for drugs, cosmetics, and medical devices with expert assistance from Your Professional — complete regulatory filing, documentation, and compliance support.',
        heroFeatures: [
            'CDSCO Approval in 30–90 Business Days',
            'Expert Assistance for New Drug & Medical Device Applications',
            'End-to-End Regulatory Compliance Support',
            'Trusted by Pharma & MedTech Companies Across India',
        ],

        overview: {
            heading: 'What is CDSCO Registration?',
            paragraphs: [
                'CDSCO Registration refers to the regulatory approval granted by the Central Drugs Standard Control Organisation — the national regulatory body under the Ministry of Health & Family Welfare — for the import, manufacture, sale, and distribution of drugs, cosmetics, and medical devices in India.',
                'Under the Drugs and Cosmetics Act, 1940, and Medical Devices Rules, 2017, all new drugs, clinical trial approvals, import licenses, and medical device registrations must be approved by CDSCO through the office of the Drugs Controller General of India (DCGI).',
                'Your Professional helps navigate the complex CDSCO regulatory framework, from pre-submission consultations to final approval, ensuring your application meets all statutory requirements.',
            ],
            highlights: [
                { icon: '💊', text: 'Central authority for drug and medical device regulation in India' },
                { icon: '🏛️', text: 'Functions under the Drugs Controller General of India (DCGI)' },
                { icon: '📋', text: 'Governed by Drugs & Cosmetics Act, 1940 and MD Rules, 2017' },
                { icon: '🌍', text: 'Mandatory for import and manufacture of regulated products' },
            ],
        },

        types: [
            { title: 'New Drug Approval', desc: 'Approval for manufacturing or importing a new drug not previously approved in India (Form 44).' },
            { title: 'Medical Device Registration', desc: 'Registration and import/manufacture license for medical devices under MD Rules, 2017 classified as Class A, B, C, or D.' },
            { title: 'Import License (Form 10)', desc: 'License to import drugs, cosmetics, or medical devices into India for sale or distribution.' },
            { title: 'Clinical Trial Approval', desc: 'Permission to conduct clinical trials of new drugs or investigational medical devices in India.' },
        ],

        eligibility: [
            'The applicant must be a registered pharmaceutical company, LLP, or authorized agent in India.',
            'For import licenses, the applicant must be the Indian authorized agent of the foreign manufacturer.',
            'Manufacturing premises must hold a valid State Drug Manufacturing License where applicable.',
            'Products must conform to pharmacopoeia standards (Indian Pharmacopoeia, BP, USP, or equivalent).',
            'Medical devices must be classified under the appropriate risk class (A, B, C, or D) per MD Rules, 2017.',
            'The foreign manufacturer must hold a valid Free Sale Certificate or Certificate of Pharmaceutical Product from the country of origin for import applications.',
            'A qualified technical staff (pharmacist / medical device expert) must be employed by the applicant firm.',
        ],

        documents: [
            {
                category: 'Company & Identity Documents',
                items: [
                    'Certificate of Incorporation / Partnership Deed / LLP Agreement',
                    'PAN Card and GST Registration Certificate of the firm',
                    'Authorized signatory letter and power of attorney',
                    'Wholesale Drug License of the importing firm (for import applications)',
                ],
            },
            {
                category: 'Product & Technical Documents',
                items: [
                    'Product dossier including composition, specifications, and stability data',
                    'Certificate of Pharmaceutical Product (CoPP) or Free Sale Certificate from country of origin',
                    'GMP Certificate of the manufacturing site (WHO-GMP / ISO 13485 for devices)',
                    'Clinical trial data or bioequivalence study reports (for new drugs)',
                    'Test reports from approved laboratories',
                ],
            },
            {
                category: 'Regulatory & Compliance Documents',
                items: [
                    'Form 40 / Form 41 (application for import license)',
                    'Site Master File of the manufacturing facility',
                    'Risk classification and conformity assessment for medical devices',
                    'Labelling and packaging artwork as per Indian regulatory requirements',
                ],
            },
        ],

        process: [
            { title: 'Product Classification & Strategy', desc: 'Determine the regulatory pathway — new drug, generic, import license, or medical device registration — based on product type and risk class.', time: '2–5 days' },
            { title: 'Dossier Preparation', desc: 'Compile the complete product dossier including technical data, clinical evidence, stability studies, and GMP documentation per CDSCO guidelines.', time: '15–30 days' },
            { title: 'Application Filing with CDSCO', desc: 'Submit the application (Form 40/44 or MD-14/15) online through the SUGAM portal along with the prescribed fees.', time: '1–3 days' },
            { title: 'CDSCO Screening & Query', desc: 'CDSCO screens the application for completeness. Queries or deficiency letters may be issued requiring additional data.', time: '15–30 days' },
            { title: 'Subject Expert Committee Review', desc: 'For new drugs and Class C/D devices, the application is reviewed by the relevant Subject Expert Committee (SEC) of CDSCO.', time: '30–60 days' },
            { title: 'Manufacturing Site Inspection', desc: 'CDSCO or a joint team may conduct an inspection of the manufacturing facility to verify GMP compliance.', time: '30–45 days' },
            { title: 'Approval & License Issuance', desc: 'Upon satisfactory review, CDSCO issues the registration certificate or import license through the SUGAM portal.', time: '7–15 days' },
            { title: 'Post-Approval Compliance', desc: 'Maintain pharmacovigilance, periodic safety update reports, and renewal of licenses as per CDSCO timelines.', time: 'Ongoing' },
        ],

        fees: [
            { item: 'New Drug Application Fee', cost: '₹50,000 – ₹5,00,000' },
            { item: 'Import License Fee (Form 10)', cost: '₹1,000 – ₹5,000 per product' },
            { item: 'Medical Device Registration Fee', cost: '₹5,000 – ₹50,000 (based on class)' },
            { item: 'Clinical Trial Application Fee', cost: '₹50,000 – ₹2,00,000' },
            { item: 'Professional Service Charges (Your Professional)', cost: '₹24,999 onwards' },
        ],

        penalties: [
            { violation: 'Manufacturing or importing without CDSCO approval', penalty: 'Imprisonment up to 3–5 years and fine up to ₹1 lakh under Drugs & Cosmetics Act' },
            { violation: 'Sale of misbranded or adulterated drugs', penalty: 'Imprisonment up to life and fine up to ₹10 lakh or three times the value of the drugs' },
            { violation: 'Non-compliance with medical device regulations', penalty: 'Penalty up to ₹50 lakh and suspension or cancellation of license' },
        ],

        advantages: [
            { icon: '✅', title: 'Legal Market Access', desc: 'Gain authorized access to the Indian pharmaceutical and medical device market — one of the world\'s largest.' },
            { icon: '🌍', title: 'Global Credibility', desc: 'CDSCO approval is recognized internationally and enhances your brand\'s regulatory profile.' },
            { icon: '🔬', title: 'Quality Assurance', desc: 'CDSCO\'s rigorous review ensures your products meet international safety and efficacy standards.' },
            { icon: '🏥', title: 'Hospital & Institutional Sales', desc: 'Government hospitals and institutions mandate CDSCO-approved products for procurement.' },
            { icon: '📈', title: 'Market Expansion', desc: 'Approved products can be distributed across all Indian states without additional central approvals.' },
            { icon: '🛡️', title: 'Patent & IP Protection', desc: 'CDSCO registration records provide evidence of market authorization supporting patent and IP claims.' },
            { icon: '🤝', title: 'Distributor Confidence', desc: 'Indian distributors and stockists prefer to deal only with CDSCO-approved products.' },
        ],

        faqs: [
            { q: 'What is CDSCO and what does it regulate?', a: 'CDSCO (Central Drugs Standard Control Organisation) is India\'s national regulatory authority for pharmaceuticals, cosmetics, and medical devices. It operates under the DCGI and governs drug approvals, import licenses, clinical trials, and medical device registrations.' },
            { q: 'What is the SUGAM portal?', a: 'SUGAM is the online portal launched by CDSCO for electronic submission and tracking of all regulatory applications including new drug approvals, import licenses, clinical trial permissions, and medical device registrations.' },
            { q: 'How long does CDSCO approval typically take?', a: 'Timelines vary by application type — import licenses may take 30–60 days, medical device registrations 60–120 days, and new drug approvals 6–18 months depending on the complexity and data requirements.' },
            { q: 'Do I need CDSCO approval for cosmetics?', a: 'Yes. Import of cosmetics into India requires a registration certificate from CDSCO. Domestically manufactured cosmetics need a State Drug Manufacturing License and must comply with the Drugs and Cosmetics Rules.' },
            { q: 'What are the medical device risk classes?', a: 'Medical devices are classified as Class A (low risk — e.g., tongue depressors), Class B (low-moderate — e.g., needles), Class C (moderate-high — e.g., ventilators), and Class D (high risk — e.g., heart valves). Higher classes require more extensive regulatory review.' },
            { q: 'Can a foreign company directly apply to CDSCO?', a: 'No. A foreign manufacturer must appoint an Indian Authorized Agent who files the application on their behalf. The agent must hold a valid Wholesale Drug License in India.' },
            { q: 'Is GMP certification mandatory for CDSCO approval?', a: 'Yes. All manufacturing facilities — domestic and foreign — must demonstrate GMP compliance (Schedule M for drugs or ISO 13485 for medical devices) as part of the CDSCO approval process.' },
            { q: 'How does Your Professional help with CDSCO Registration?', a: 'Your Professional provides comprehensive regulatory support — from product classification and dossier preparation to SUGAM filing, query resolution, SEC meeting coordination, and post-approval compliance management.' },
        ],

        cta: {
            heading: 'Get Your CDSCO Approval with Expert Support',
            subheading: 'Your Professional simplifies complex pharmaceutical and medical device regulations so you can focus on innovation.',
            features: [
                'Free Regulatory Pathway Assessment',
                'Complete Dossier Preparation',
                'SUGAM Portal Filing & Tracking',
                'Post-Approval Compliance Support',
            ],
        },
    },

    /* ──────────────────────────────────────────────────────────────
       3. AD CODE REGISTRATION
       ────────────────────────────────────────────────────────────── */
    'ad-code-registration': {
        slug: 'ad-code-registration',
        title: 'AD Code Registration Online in India',
        subtitle:
            'Register your Authorized Dealer Code with Indian Customs quickly and hassle-free — Your Professional provides complete documentation, bank coordination, and customs port filing support.',
        heroFeatures: [
            'AD Code Registration in 3–7 Business Days',
            'Seamless Bank & Customs Port Coordination',
            'Required for All Import & Export Transactions',
            'Trusted by Exporters & Importers Across India',
        ],

        overview: {
            heading: 'What is AD Code Registration?',
            paragraphs: [
                'AD Code (Authorized Dealer Code) is a 14-digit unique code issued by the bank authorized by the Reserve Bank of India (RBI) to deal in foreign exchange. This code must be registered at the respective customs port from where goods are imported or exported.',
                'AD Code registration is a mandatory prerequisite for filing Bills of Entry (for imports) and Shipping Bills (for exports) through the Indian Customs Electronic Data Interchange (EDI) system (ICEGATE). Without a valid AD Code registered at the port, no customs clearance can be processed.',
                'Your Professional assists businesses in obtaining the AD Code from their authorized dealer bank and registering it at all required customs ports across India, ensuring uninterrupted trade operations.',
            ],
            highlights: [
                { icon: '🏦', text: 'Issued by RBI-authorized dealer banks for foreign exchange transactions' },
                { icon: '🚢', text: 'Must be registered at each customs port used for import/export' },
                { icon: '📋', text: 'Mandatory for filing Shipping Bills and Bills of Entry on ICEGATE' },
                { icon: '🔗', text: 'Links your bank account to customs for trade payment reconciliation' },
            ],
        },

        eligibility: [
            'The applicant must hold a valid Importer Exporter Code (IEC) issued by DGFT.',
            'The business must maintain a current account with an RBI-authorized dealer bank.',
            'The bank account must be in the name of the IEC-holding entity.',
            'The applicant must have a valid GSTIN linked to the IEC.',
            'Partnership firms, companies, LLPs, proprietorships, and trusts engaged in foreign trade are eligible.',
        ],

        documents: [
            {
                category: 'Business & Identity Documents',
                items: [
                    'Importer Exporter Code (IEC) Certificate',
                    'PAN Card of the entity and authorized signatory',
                    'GST Registration Certificate',
                    'Certificate of Incorporation / Partnership Deed / Proprietorship Declaration',
                ],
            },
            {
                category: 'Bank Documents',
                items: [
                    'AD Code letter issued by the authorized dealer bank on bank letterhead',
                    'Bank account details (cancelled cheque / bank statement)',
                    'Bank authorization letter with signatory verification',
                ],
            },
            {
                category: 'Customs & Trade Documents',
                items: [
                    'Letter of request for AD Code registration addressed to the customs authority',
                    'Self-attested copy of RCMC (Registration Cum Membership Certificate) if applicable',
                    'Customs broker authorization letter (if filing through a customs broker)',
                    'Digital signature of the authorized signatory for ICEGATE filing',
                ],
            },
        ],

        process: [
            { title: 'Obtain IEC (If Not Already Held)', desc: 'Ensure you have a valid Importer Exporter Code from DGFT. This is the primary prerequisite for AD Code registration.', time: '1–3 days' },
            { title: 'Open Current Account with AD Bank', desc: 'Maintain a current account with an RBI-authorized dealer bank (most scheduled commercial banks qualify).', time: '1–5 days' },
            { title: 'Request AD Code Letter from Bank', desc: 'Apply to your authorized dealer bank for the AD Code letter. The bank issues the 14-digit AD Code on its letterhead.', time: '1–3 days' },
            { title: 'Prepare Registration Documents', desc: 'Compile all required documents including IEC certificate, PAN, GST certificate, and the AD Code bank letter.', time: '1–2 days' },
            { title: 'File Registration at Customs Port', desc: 'Submit the AD Code registration application at the customs house of the port(s) from where you intend to import or export.', time: '1–2 days' },
            { title: 'Customs Verification & Approval', desc: 'The customs authority verifies the documents and registers the AD Code in the ICEGATE/EDI system for the specific port.', time: '2–5 days' },
        ],

        fees: [
            { item: 'AD Code Issuance by Bank', cost: '₹Nil – ₹500 (varies by bank)' },
            { item: 'Customs Port Registration Fee', cost: '₹Nil (no government fee at most ports)' },
            { item: 'ICEGATE Digital Signature Token', cost: '₹1,500 – ₹3,000' },
            { item: 'Professional Service Charges (Your Professional)', cost: '₹2,999 onwards' },
        ],

        advantages: [
            { icon: '🚢', title: 'Enable Import/Export Operations', desc: 'AD Code is mandatory for customs clearance — without it, no shipment can be processed through Indian ports.' },
            { icon: '💱', title: 'Foreign Exchange Compliance', desc: 'Ensures all trade-related foreign exchange transactions are routed through authorized banking channels per RBI guidelines.' },
            { icon: '⚡', title: 'Faster Customs Clearance', desc: 'Pre-registered AD Code at ports ensures smooth and faster processing of Bills of Entry and Shipping Bills.' },
            { icon: '🔄', title: 'Multi-Port Registration', desc: 'The same AD Code can be registered at multiple customs ports across India for diversified trade operations.' },
            { icon: '📊', title: 'Trade Data Reconciliation', desc: 'Links your bank account to customs records, enabling accurate reconciliation of trade payments and refunds.' },
            { icon: '💰', title: 'Duty Drawback & Refunds', desc: 'Valid AD Code registration is required to claim duty drawback, GST refunds on exports, and other trade incentives.' },
        ],

        faqs: [
            { q: 'What is an AD Code and why is it needed?', a: 'AD Code (Authorized Dealer Code) is a 14-digit code from your authorized dealer bank that must be registered at customs ports to process import and export shipments. It links your bank account to customs for foreign exchange transaction tracking.' },
            { q: 'Is AD Code the same as IEC?', a: 'No. IEC (Importer Exporter Code) is issued by DGFT and identifies you as a trader. AD Code is issued by your bank and links your bank account to customs for payment processing. Both are required for international trade.' },
            { q: 'Do I need separate AD Codes for each customs port?', a: 'No. You have one AD Code from your bank, but it must be separately registered at each customs port from where you intend to import or export. The registration process must be completed at every port individually.' },
            { q: 'Can I register AD Code at multiple ports simultaneously?', a: 'Yes. Your Professional can file AD Code registration at multiple customs ports simultaneously, ensuring you are ready to trade from any port without delays.' },
            { q: 'How long is the AD Code valid?', a: 'The AD Code registration remains valid as long as your bank account is active and your IEC is valid. There is no separate renewal required unless you change your bank account.' },
            { q: 'What happens if I change my bank account?', a: 'If you switch to a different authorized dealer bank, you must obtain a new AD Code from the new bank and re-register it at all customs ports where you trade.' },
            { q: 'Can an individual register for AD Code?', a: 'Yes, an individual sole proprietor holding a valid IEC and a current account with an authorized dealer bank can register for an AD Code for import/export activities.' },
            { q: 'How does Your Professional help with AD Code Registration?', a: 'Your Professional handles the entire process — from coordinating with your bank for the AD Code letter to filing registration at all required customs ports, ICEGATE setup, and digital signature procurement.' },
        ],

        cta: {
            heading: 'Get Your AD Code Registered at All Ports',
            subheading: 'Your Professional ensures your import-export operations are never held up due to missing customs registrations.',
            features: [
                'Bank Coordination for AD Code Letter',
                'Multi-Port Registration Filing',
                'ICEGATE Setup Assistance',
                'Ongoing Trade Compliance Support',
            ],
        },
    },

    /* ──────────────────────────────────────────────────────────────
       4. GSP REGISTRATION
       ────────────────────────────────────────────────────────────── */
    'gsp-registration': {
        slug: 'gsp-registration',
        title: 'GSP Registration Online in India',
        subtitle:
            'Register as a GST Suvidha Provider (GSP) with GSTN and offer seamless GST compliance solutions — Your Professional provides complete application support, technical documentation, and GSTN coordination.',
        heroFeatures: [
            'End-to-End GSP Application Filing with GSTN',
            'Technical Infrastructure & API Integration Guidance',
            'Empanel Your Company as an Authorized GST Suvidha Provider',
            'Trusted Advisory for IT & FinTech Companies Across India',
        ],

        overview: {
            heading: 'What is GSP Registration?',
            paragraphs: [
                'GSP (GST Suvidha Provider) Registration is the process of empanelment with the Goods and Services Tax Network (GSTN) that authorizes a company to develop and offer GST compliance applications and services by accessing GSTN APIs.',
                'GSPs act as the bridge between taxpayers and the GSTN platform. They build or facilitate third-party applications (Application Service Providers — ASPs) that help businesses file GST returns, generate e-way bills, reconcile invoices, and perform other GST-related functions through secure API integration.',
                'GSTN periodically invites applications from eligible companies for GSP empanelment. Your Professional helps IT companies, FinTech firms, and tax technology providers prepare and submit compelling GSP applications that meet GSTN\'s stringent technical and financial criteria.',
            ],
            highlights: [
                { icon: '🖥️', text: 'Authorized access to GSTN APIs for GST compliance solutions' },
                { icon: '🏛️', text: 'Empanelment granted by GSTN (Goods and Services Tax Network)' },
                { icon: '🔗', text: 'Enables building GST return filing, e-invoicing, and e-way bill applications' },
                { icon: '🔒', text: 'Requires robust IT infrastructure and data security compliance' },
            ],
        },

        types: [
            { title: 'GST Suvidha Provider (GSP)', desc: 'Companies empanelled by GSTN to provide secure API access for GST compliance applications and services.' },
            { title: 'Application Service Provider (ASP)', desc: 'Companies that build end-user GST compliance applications and connect to GSTN through an empanelled GSP. ASPs do not require separate GSTN empanelment but must partner with a GSP.' },
        ],

        eligibility: [
            'The applicant must be a company registered under the Companies Act, 2013 (private or public limited company).',
            'Minimum net worth of ₹1 crore (as per the latest audited financial statements).',
            'The company must have a minimum of 3 years of experience in IT/ITeS or financial technology services.',
            'Adequate IT infrastructure including secure data centres, disaster recovery, and API management capabilities.',
            'The company must comply with data protection and information security standards (ISO 27001 or equivalent).',
            'A dedicated team of technology professionals for API integration, maintenance, and support.',
            'No pending criminal proceedings or debarment orders against the company or its directors.',
        ],

        documents: [
            {
                category: 'Company & Financial Documents',
                items: [
                    'Certificate of Incorporation and Memorandum & Articles of Association',
                    'Audited financial statements for the last 3 years',
                    'Net worth certificate from a Chartered Accountant',
                    'PAN Card, GST Registration Certificate, and TAN of the company',
                    'Board resolution authorizing the GSP application',
                ],
            },
            {
                category: 'Technical & Infrastructure Documents',
                items: [
                    'Technical capability document (IT infrastructure, data centre, DR site details)',
                    'ISO 27001 or equivalent information security certification',
                    'API integration architecture and scalability plan',
                    'Data privacy and security policy document',
                ],
            },
            {
                category: 'Experience & Compliance Documents',
                items: [
                    'Portfolio of IT/ITeS or FinTech projects undertaken in the last 3 years',
                    'Client testimonials or work orders demonstrating relevant experience',
                    'Self-declaration of no pending criminal proceedings or debarment',
                    'Undertaking to comply with GSTN terms and conditions',
                ],
            },
        ],

        process: [
            { title: 'Check GSTN Empanelment Window', desc: 'GSTN opens GSP empanelment applications periodically. Monitor the GSTN website and Your Professional will notify you of open windows.', time: '1–2 days' },
            { title: 'Eligibility Assessment', desc: 'Evaluate whether your company meets the net worth, experience, IT infrastructure, and security certification requirements for GSP empanelment.', time: '3–5 days' },
            { title: 'Prepare Application & Documentation', desc: 'Compile the complete application including company documents, technical capability documents, financial statements, and security certifications.', time: '10–15 days' },
            { title: 'Submit Application to GSTN', desc: 'File the GSP empanelment application through the GSTN portal or designated submission channel with all supporting documents.', time: '1–2 days' },
            { title: 'GSTN Evaluation & Due Diligence', desc: 'GSTN evaluates the application, conducts due diligence on the company\'s technical capabilities, financial health, and security posture.', time: '30–60 days' },
            { title: 'Technical Assessment & Demo', desc: 'Shortlisted applicants may be asked to demonstrate API integration capabilities and infrastructure readiness.', time: '15–30 days' },
            { title: 'Empanelment & API Access', desc: 'Upon successful evaluation, GSTN issues the GSP empanelment letter and provides sandbox and production API credentials.', time: '15–30 days' },
            { title: 'Go-Live & Compliance', desc: 'Integrate with GSTN production APIs, launch GST compliance services, and maintain ongoing SLA and security compliance.', time: 'Ongoing' },
        ],

        fees: [
            { item: 'GSTN Empanelment Application Fee', cost: '₹1,00,000 (non-refundable, subject to GSTN notification)' },
            { item: 'Annual API Usage / License Fee', cost: 'As per GSTN terms (varies by volume)' },
            { item: 'ISO 27001 Certification Cost', cost: '₹2,00,000 – ₹5,00,000' },
            { item: 'Infrastructure Setup Cost', cost: '₹10,00,000 – ₹50,00,000 (data centre, DR, security)' },
            { item: 'Professional Service Charges (Your Professional)', cost: '₹49,999 onwards' },
        ],

        advantages: [
            { icon: '🖥️', title: 'Authorized GSTN API Access', desc: 'Gain direct, secure access to GSTN APIs for building and offering GST compliance solutions.' },
            { icon: '📈', title: 'Massive Market Opportunity', desc: 'India has over 1.4 crore registered GST taxpayers — GSPs serve this entire addressable market.' },
            { icon: '💰', title: 'Recurring Revenue Model', desc: 'GSP services generate recurring subscription and transaction-based revenue from taxpayers and ASPs.' },
            { icon: '🤝', title: 'ASP Partner Ecosystem', desc: 'Empanelled GSPs can onboard multiple ASP partners, creating a scalable platform business model.' },
            { icon: '🏛️', title: 'Government-Backed Credibility', desc: 'GSTN empanelment provides official recognition and trust in the GST compliance ecosystem.' },
            { icon: '🔒', title: 'Data Security Leadership', desc: 'Meeting GSTN\'s stringent security requirements positions your company as a leader in data protection and compliance.' },
        ],

        disadvantages: [
            'High upfront investment in IT infrastructure, data centres, and security certifications.',
            'Stringent net worth and experience eligibility criteria limit participation to established companies.',
            'GSTN empanelment windows are periodic and may not always be open for new applications.',
            'Ongoing compliance with GSTN SLAs, uptime requirements, and security audits is resource-intensive.',
            'API rate limits and usage terms set by GSTN may affect scalability during peak filing periods.',
        ],

        faqs: [
            { q: 'What is the difference between GSP and ASP?', a: 'A GSP (GST Suvidha Provider) is empanelled by GSTN and has direct API access. An ASP (Application Service Provider) builds end-user GST applications but connects to GSTN through a GSP. ASPs do not need separate GSTN empanelment.' },
            { q: 'Who can apply for GSP empanelment?', a: 'Only companies registered under the Companies Act, 2013 with a minimum net worth of ₹1 crore, at least 3 years of IT/ITeS experience, and adequate technical infrastructure can apply for GSP empanelment.' },
            { q: 'How often does GSTN open GSP empanelment?', a: 'GSTN opens GSP empanelment periodically based on market demand. There is no fixed schedule. Your Professional monitors GSTN announcements and alerts you when new windows open.' },
            { q: 'What technical infrastructure is needed for GSP?', a: 'GSPs need secure data centres (Tier III or above), disaster recovery facilities, API management platforms, SSL/TLS encryption, ISO 27001 certification, and a dedicated technical team for integration and support.' },
            { q: 'Can a startup apply for GSP empanelment?', a: 'The minimum 3-year experience requirement and ₹1 crore net worth threshold make it difficult for early-stage startups. However, startups can partner with existing GSPs as ASPs to offer GST compliance solutions.' },
            { q: 'What services can a GSP offer?', a: 'GSPs can offer GST return filing, e-invoicing, e-way bill generation, invoice reconciliation, GSTR-2A/2B matching, input tax credit analysis, and other GST compliance services through API integration.' },
            { q: 'Is ISO 27001 certification mandatory for GSP?', a: 'While GSTN requires demonstrable information security capabilities, ISO 27001 or equivalent certification is strongly recommended and may be mandatory depending on the empanelment criteria in force.' },
            { q: 'How does Your Professional help with GSP Registration?', a: 'Your Professional provides end-to-end support — from eligibility assessment and documentation to application filing, GSTN coordination, technical readiness review, and post-empanelment compliance advisory.' },
        ],

        cta: {
            heading: 'Become an Empanelled GST Suvidha Provider',
            subheading: 'Your Professional helps IT and FinTech companies navigate GSTN empanelment and unlock the massive GST compliance market.',
            features: [
                'Eligibility & Readiness Assessment',
                'Complete Application Preparation',
                'Technical Documentation Support',
                'Post-Empanelment Compliance Advisory',
            ],
        },
    },

    'safta-license': {
        slug: 'safta-license',
        title: 'SAFTA License Registration Online in India',
        subtitle:
            'Apply for your SAFTA License online with Your Professional — expert guidance on South Asian Free Trade Area compliance, preferential tariff documentation, and seamless approval for cross-border trade with SAARC nations.',
        heroFeatures: [
            'Preferential Tariff Access Across SAARC Nations',
            'End-to-End SAFTA Documentation & Filing',
            'Certificate of Origin Assistance Included',
            'Trusted by 5,000+ Exporters & Importers Across India',
        ],
        overview: {
            heading: 'What is a SAFTA License?',
            paragraphs: [
                'The South Asian Free Trade Area (SAFTA) Agreement is a multilateral trade agreement among the eight SAARC member states — India, Pakistan, Bangladesh, Sri Lanka, Nepal, Bhutan, the Maldives, and Afghanistan — aimed at reducing customs duties and promoting intra-regional trade. A SAFTA License enables Indian exporters and importers to avail preferential tariff rates on goods traded with these nations.',
                'SAFTA came into effect on 1 January 2006, replacing the earlier SAPTA (South Asian Preferential Trade Arrangement). Under this framework, member countries progressively reduce or eliminate tariffs on a wide range of products, subject to a Sensitive List maintained by each country.',
                'To avail preferential duty benefits under SAFTA, exporters must obtain a Certificate of Origin (CoO) issued by designated authorities in India (typically the Export Inspection Council or authorized agencies). The CoO certifies that the goods meet the Rules of Origin criteria specified under the SAFTA Agreement.',
                'At Your Professional, we assist businesses with the entire SAFTA licensing and documentation process — from eligibility assessment and Certificate of Origin procurement to customs filing and compliance advisory — so you can maximize tariff savings and expand your South Asian trade footprint.',
            ],
            highlights: [
                { icon: '🌏', text: 'Covers trade with all 8 SAARC member nations under preferential tariff rates' },
                { icon: '📉', text: 'Significant customs duty reduction or elimination on eligible goods' },
                { icon: '📜', text: 'Certificate of Origin required to claim SAFTA preferential tariff benefits' },
                { icon: '🏛️', text: 'Governed by the SAFTA Agreement under the SAARC framework since 2006' },
            ],
        },
        types: [
            {
                title: 'SAFTA Certificate of Origin (Preferential)',
                desc: 'Issued by designated authorities to certify that exported goods meet the Rules of Origin criteria under the SAFTA Agreement, enabling the importer in the destination SAARC country to claim preferential tariff rates.',
            },
            {
                title: 'SAFTA Sensitive List Exemption',
                desc: 'Certain products fall under each country\'s Sensitive List and are excluded from tariff concessions. Businesses must verify whether their goods qualify for preferential treatment or fall under the exclusion list.',
            },
            {
                title: 'SAFTA Trade Facilitation for LDCs',
                desc: 'Special and differential treatment provisions for Least Developed Countries (LDCs) within SAARC — including faster tariff liberalization, technical assistance, and capacity building measures.',
            },
        ],
        eligibility: [
            'The applicant must be a registered exporter or importer with a valid Importer Exporter Code (IEC) issued by DGFT.',
            'The goods being exported or imported must qualify under the SAFTA Rules of Origin — typically requiring a minimum domestic value addition of 40% (30% for LDCs).',
            'The business must be registered under GST and hold a valid GSTIN for cross-border trade compliance.',
            'The exporter must be able to demonstrate that the goods are manufactured, produced, or substantially transformed in India.',
            'The destination or origin country must be a SAARC member state that is a signatory to the SAFTA Agreement.',
            'The product must not fall under the Sensitive List of the importing country, which excludes certain items from preferential tariff treatment.',
            'The applicant must maintain proper records of procurement, manufacturing, and export transactions for verification by customs authorities.',
        ],
        documents: [
            {
                category: 'Business & Export Registration Documents',
                items: [
                    'Valid Importer Exporter Code (IEC) certificate issued by DGFT',
                    'GST Registration Certificate (GSTIN)',
                    'Certificate of Incorporation / Partnership Deed / Proprietorship Declaration',
                    'PAN Card of the business entity and authorized signatory',
                    'RCMC (Registration Cum Membership Certificate) from the relevant Export Promotion Council',
                ],
            },
            {
                category: 'Product & Origin Documentation',
                items: [
                    'Detailed product description with HS Code classification',
                    'Manufacturing or processing records demonstrating value addition in India',
                    'Bill of Materials and cost breakdown sheet for Rules of Origin compliance',
                    'Supplier invoices and raw material procurement records',
                    'Test reports or quality certificates (if required by the importing country)',
                ],
            },
            {
                category: 'Trade & Customs Documents',
                items: [
                    'Commercial invoice and packing list for the export consignment',
                    'Bill of Lading / Airway Bill',
                    'Shipping Bill filed with Indian Customs',
                    'Letter of Credit or payment terms documentation',
                    'Previous SAFTA Certificate of Origin (for renewal or repeat consignments)',
                ],
            },
        ],
        process: [
            {
                title: 'Eligibility & Product Assessment',
                desc: 'Your Professional experts evaluate your products against SAFTA Rules of Origin criteria and the importing country\'s Sensitive List to confirm eligibility for preferential tariffs.',
                time: '1–2 days',
            },
            {
                title: 'IEC & Export Registration Verification',
                desc: 'We verify that your IEC, GST registration, and RCMC are active and valid. Any missing registrations are flagged and facilitated before proceeding.',
                time: '1–2 days',
            },
            {
                title: 'Rules of Origin Documentation Preparation',
                desc: 'Our team compiles the Bill of Materials, cost sheets, and manufacturing records to demonstrate that the goods meet the minimum value addition threshold required under SAFTA.',
                time: '2–3 days',
            },
            {
                title: 'Certificate of Origin Application Filing',
                desc: 'The application for SAFTA Certificate of Origin is prepared and filed with the designated issuing authority (Export Inspection Council or authorized agency) along with all supporting documents.',
                time: '1–2 days',
            },
            {
                title: 'Verification & Inspection (if required)',
                desc: 'The issuing authority may conduct a documentary or physical verification of the goods and manufacturing process. Your Professional assists with pre-inspection preparation and coordination.',
                time: '3–5 days',
            },
            {
                title: 'Certificate of Origin Issuance',
                desc: 'Upon successful verification, the SAFTA Certificate of Origin is issued. This document must accompany the export consignment for the importer to claim preferential duty treatment.',
                time: '2–3 days',
            },
            {
                title: 'Customs Filing & Export Clearance',
                desc: 'The Shipping Bill is filed with Indian Customs referencing the SAFTA CoO. Your Professional ensures all declarations align with the preferential tariff claim.',
                time: '1–2 days',
            },
            {
                title: 'Post-Export Compliance & Record Keeping',
                desc: 'Your Professional assists with maintaining export records, filing returns, and managing Certificate of Origin renewals for subsequent consignments to SAARC countries.',
                time: 'Ongoing',
            },
        ],
        fees: [
            { item: 'SAFTA Certificate of Origin Application Fee', cost: '₹500 – ₹2,000 per certificate (varies by issuing authority)' },
            { item: 'Export Inspection Council Registration Fee', cost: '₹1,000 – ₹5,000 (one-time)' },
            { item: 'RCMC Registration / Renewal Fee', cost: '₹2,000 – ₹10,000 (varies by Export Promotion Council)' },
            { item: 'Customs Broker & Documentation Charges', cost: '₹2,000 – ₹8,000 per consignment' },
            { item: 'Your Professional Service Charges', cost: '₹4,999 onwards (inclusive of CoO filing & advisory)' },
        ],
        penalties: [
            {
                violation: 'Fraudulent Certificate of Origin',
                penalty: 'Revocation of export privileges, customs penalty up to 5 times the duty evaded, and criminal prosecution under the Customs Act, 1962.',
            },
            {
                violation: 'Failure to Meet Rules of Origin',
                penalty: 'Denial of preferential tariff — the importing country\'s customs will levy full MFN (Most Favoured Nation) duty rates on the consignment.',
            },
            {
                violation: 'Misclassification of Goods (HS Code)',
                penalty: 'Customs fine of ₹10,000 – ₹5,00,000, confiscation of goods, and potential blacklisting from preferential trade schemes.',
            },
            {
                violation: 'Non-Maintenance of Export Records',
                penalty: 'Suspension of Certificate of Origin issuing privileges and penalty under DGFT trade notice provisions.',
            },
        ],
        advantages: [
            {
                icon: '📉',
                title: 'Reduced Customs Duties',
                desc: 'SAFTA provides significant tariff reductions — often 0% to 5% — on eligible goods exported to SAARC nations, dramatically lowering the landed cost for buyers.',
            },
            {
                icon: '🌏',
                title: 'South Asian Market Access',
                desc: 'Gain preferential access to markets in Bangladesh, Sri Lanka, Nepal, Bhutan, the Maldives, Afghanistan, and Pakistan — a combined consumer base of over 1.9 billion people.',
            },
            {
                icon: '🏆',
                title: 'Competitive Pricing Advantage',
                desc: 'Lower tariffs mean your products are priced more competitively in SAARC markets compared to non-SAFTA exporters, helping you win more orders.',
            },
            {
                icon: '📊',
                title: 'Export Revenue Growth',
                desc: 'Businesses leveraging SAFTA benefits report higher export volumes and revenue from South Asian markets due to reduced trade barriers and simplified procedures.',
            },
            {
                icon: '🤝',
                title: 'Stronger Regional Partnerships',
                desc: 'SAFTA compliance signals reliability and professionalism to South Asian buyers and distributors, helping you build long-term trade relationships.',
            },
            {
                icon: '🛡️',
                title: 'Government Export Incentives',
                desc: 'SAFTA-registered exporters can combine preferential tariff benefits with Indian government export incentives like MEIS, RoDTEP, and Duty Drawback for maximum savings.',
            },
            {
                icon: '📋',
                title: 'Simplified Trade Procedures',
                desc: 'The SAFTA framework includes trade facilitation measures that simplify customs procedures, reduce documentation, and speed up border clearance for member nations.',
            },
            {
                icon: '🔄',
                title: 'Repeat Consignment Ease',
                desc: 'Once the initial Certificate of Origin is obtained, subsequent consignments of the same product to the same destination benefit from a streamlined renewal process.',
            },
        ],
        disadvantages: [
            'The Sensitive List maintained by each SAARC country excludes many commercially significant products from preferential tariff treatment.',
            'Rules of Origin compliance requires detailed manufacturing and cost documentation, adding to the administrative burden for small exporters.',
            'Political tensions between SAARC nations — particularly India and Pakistan — have historically limited the practical utilization of SAFTA concessions.',
            'The Certificate of Origin must be obtained for each consignment, which can delay shipments if processing times are longer than expected.',
            'SAFTA benefits are limited to SAARC nations only — businesses trading with Southeast Asia, the Middle East, or other regions need separate trade agreements.',
            'Customs authorities in importing countries may challenge the Certificate of Origin, leading to duty disputes and consignment delays at the border.',
        ],
        faqs: [
            {
                q: 'What is SAFTA and who are its member countries?',
                a: 'SAFTA (South Asian Free Trade Area) is a multilateral trade agreement among 8 SAARC nations — India, Pakistan, Bangladesh, Sri Lanka, Nepal, Bhutan, the Maldives, and Afghanistan. It provides preferential tariff rates on goods traded between member countries to promote regional commerce.',
            },
            {
                q: 'How do I claim preferential tariffs under SAFTA?',
                a: 'To claim preferential tariffs, you need a SAFTA Certificate of Origin (CoO) issued by a designated authority in India. This certificate must accompany your export consignment, and the importer presents it to their customs authority to avail reduced duty rates.',
            },
            {
                q: 'What are SAFTA Rules of Origin?',
                a: 'Rules of Origin under SAFTA require that exported goods are manufactured, produced, or substantially transformed in the exporting country. Typically, a minimum domestic value addition of 40% (30% for LDCs) is required for goods to qualify for preferential treatment.',
            },
            {
                q: 'What is the SAFTA Sensitive List?',
                a: 'Each SAARC member country maintains a Sensitive List of products that are excluded from SAFTA tariff concessions. These are typically products where the country wants to protect its domestic industry. India\'s Sensitive List includes items like textiles, certain agricultural products, and automobiles.',
            },
            {
                q: 'Can Your Professional help with Certificate of Origin filing?',
                a: 'Yes. Your Professional provides end-to-end assistance — from Rules of Origin assessment and documentation preparation to CoO application filing, customs coordination, and post-export compliance. We handle the entire process so you can focus on growing your exports.',
            },
            {
                q: 'Is an IEC mandatory for SAFTA benefits?',
                a: 'Yes. A valid Importer Exporter Code (IEC) issued by the Directorate General of Foreign Trade (DGFT) is mandatory for any business engaged in international trade, including trade under SAFTA. Your Professional can assist with IEC registration if you don\'t already have one.',
            },
            {
                q: 'How long does it take to get a SAFTA Certificate of Origin?',
                a: 'The processing time for a SAFTA Certificate of Origin is typically 5–10 working days from the date of application, depending on the issuing authority and whether physical verification is required. Your Professional expedites the process through proper documentation.',
            },
            {
                q: 'Can SAFTA benefits be combined with other export incentives?',
                a: 'Yes. SAFTA preferential tariffs can be availed alongside Indian government export schemes such as RoDTEP, Duty Drawback, and benefits under the Foreign Trade Policy. However, double-counting of the same benefit is not permitted under customs regulations.',
            },
        ],
        cta: {
            heading: 'Start Exporting with SAFTA Preferential Tariffs Today',
            subheading: 'Let Your Professional handle your SAFTA licensing and Certificate of Origin — expand your South Asian trade with expert support.',
            features: [
                'Complete Rules of Origin assessment',
                'Certificate of Origin filing & issuance',
                'Customs documentation support',
                'Ongoing export compliance advisory',
            ],
        },
    },

    'wpc-certificate': {
        slug: 'wpc-certificate',
        title: 'WPC Certificate Registration Online in India',
        subtitle:
            'Apply for your WPC Certificate online with Your Professional — expert guidance on Wireless Planning & Coordination approvals, ETA documentation, and fast clearance for importing wireless and radio-frequency equipment into India.',
        heroFeatures: [
            'WPC ETA Approval in 15–30 Working Days',
            'Complete RF Equipment Import Compliance',
            'End-to-End WPC Documentation & Filing',
            'Trusted by 3,000+ Importers & Electronics Companies',
        ],
        overview: {
            heading: 'What is a WPC Certificate?',
            paragraphs: [
                'The WPC (Wireless Planning & Coordination) Wing operates under the Department of Telecommunications (DoT), Ministry of Communications, Government of India. It is the national radio regulatory authority responsible for frequency spectrum management, licensing of wireless equipment, and coordination of all wireless communication activities in India.',
                'Any entity importing, manufacturing, or operating wireless and radio-frequency (RF) equipment in India must obtain an Equipment Type Approval (ETA) certificate from the WPC Wing. This certification ensures that the wireless equipment complies with Indian radio frequency standards and does not cause harmful interference to other communication systems.',
                'The WPC ETA is mandatory for a wide range of devices including Wi-Fi routers, Bluetooth devices, RFID equipment, drones with wireless communication, IoT devices, walkie-talkies, satellite communication equipment, and any device operating in the radio frequency spectrum.',
                'At Your Professional, we provide comprehensive WPC certificate assistance — from equipment assessment and frequency coordination to ETA application filing, testing coordination, and import clearance — ensuring your wireless products reach the Indian market without regulatory delays.',
            ],
            highlights: [
                { icon: '📡', text: 'Mandatory for all wireless and RF equipment imported, sold, or operated in India' },
                { icon: '🏛️', text: 'Issued by the WPC Wing under the Department of Telecommunications (DoT)' },
                { icon: '🔬', text: 'Equipment must pass RF testing at authorized labs before ETA issuance' },
                { icon: '⚖️', text: 'Governed by the Indian Telegraph Act, 1885 and Indian Wireless Telegraphy Act, 1933' },
            ],
        },
        types: [
            {
                title: 'Equipment Type Approval (ETA)',
                desc: 'Mandatory approval for all wireless equipment operating in specific frequency bands. ETA certifies that the equipment meets the technical standards and does not cause harmful interference to licensed wireless services in India.',
            },
            {
                title: 'Dealer Possession Licence (DPL)',
                desc: 'Required for dealers, distributors, and retailers who stock, sell, or possess wireless equipment. The DPL authorizes the holder to commercially deal in approved wireless devices without operating them.',
            },
            {
                title: 'Experimental Licence',
                desc: 'Issued for research and development purposes, allowing organizations to import, possess, and operate wireless equipment on a temporary basis for testing, experimentation, or demonstration activities.',
            },
        ],
        eligibility: [
            'The applicant must be a registered company, LLP, partnership firm, or proprietorship engaged in importing, manufacturing, or dealing in wireless equipment.',
            'The wireless equipment must operate within the frequency bands and power limits prescribed by the National Frequency Allocation Plan (NFAP) of India.',
            'The equipment must not have been banned, restricted, or previously rejected for ETA by the WPC Wing.',
            'Foreign manufacturers must apply through an authorized Indian representative or importer who holds a valid IEC.',
            'The applicant must have the equipment tested at a WPC-recognized testing laboratory and provide the test report with the application.',
            'The business must hold a valid GST registration and PAN for compliance and documentation purposes.',
            'For import clearance, the applicant must hold a valid Importer Exporter Code (IEC) issued by DGFT.',
        ],
        documents: [
            {
                category: 'Business & Identity Documents',
                items: [
                    'Certificate of Incorporation / Partnership Deed / Proprietorship Declaration',
                    'PAN Card of the business entity and authorized signatory',
                    'GST Registration Certificate (GSTIN)',
                    'Importer Exporter Code (IEC) certificate from DGFT',
                    'Aadhaar Card and photograph of the authorized signatory',
                    'Board Resolution / Authorization Letter for the signatory (for companies)',
                ],
            },
            {
                category: 'Equipment Technical Documents',
                items: [
                    'Detailed technical specifications of the wireless equipment (frequency, power, modulation)',
                    'Equipment photographs (front, back, side, and label views)',
                    'User manual and technical documentation from the manufacturer',
                    'RF test report from a WPC-recognized testing laboratory',
                    'Declaration of Conformity (DoC) from the manufacturer',
                    'FCC / CE / TELEC or equivalent international certification (if available)',
                ],
            },
            {
                category: 'Import & Trade Documents',
                items: [
                    'Proforma invoice from the overseas supplier/manufacturer',
                    'Bill of Entry / Import documentation (for equipment already imported)',
                    'Authorization letter from the foreign manufacturer appointing the Indian representative',
                    'Previous ETA certificate (for renewal or variant applications)',
                ],
            },
        ],
        process: [
            {
                title: 'Equipment Assessment & Frequency Check',
                desc: 'Your Professional evaluates your wireless equipment specifications against India\'s National Frequency Allocation Plan to confirm whether the frequency bands and power levels are permissible.',
                time: '1–2 days',
            },
            {
                title: 'Document Collection & Preparation',
                desc: 'We compile all business registration documents, equipment technical specifications, manufacturer authorizations, and test reports required for the WPC ETA application.',
                time: '2–3 days',
            },
            {
                title: 'RF Testing at Authorized Laboratory',
                desc: 'The wireless equipment is submitted to a WPC-recognized testing laboratory for radio frequency compliance testing. Your Professional coordinates the testing process and manages lab submissions.',
                time: '5–10 days',
            },
            {
                title: 'WPC ETA Application Filing',
                desc: 'The ETA application is filed on the SARAS (Simplified Application for Radio Approvals System) online portal of the WPC Wing, along with all supporting documents and the RF test report.',
                time: '1–2 days',
            },
            {
                title: 'Scrutiny & Query Resolution',
                desc: 'The WPC Wing reviews the application and may raise queries or request additional information. Your Professional handles all correspondence and provides clarifications promptly.',
                time: '5–10 days',
            },
            {
                title: 'Fee Payment',
                desc: 'Upon preliminary approval, the applicable ETA fee is paid online through the SARAS portal. Your Professional ensures timely payment to avoid processing delays.',
                time: '1 day',
            },
            {
                title: 'ETA Certificate Issuance',
                desc: 'After successful verification and fee payment, the WPC Wing issues the Equipment Type Approval certificate. The ETA is typically valid for a period of 5 years.',
                time: '3–7 days',
            },
            {
                title: 'Import Clearance & Compliance Support',
                desc: 'Your Professional provides the ETA certificate for customs clearance and assists with ongoing compliance — including renewal reminders, variant applications, and Dealer Possession Licence support.',
                time: '1–2 days',
            },
        ],
        fees: [
            { item: 'WPC ETA Application Fee', cost: '₹3,000 – ₹10,000 (varies by equipment category)' },
            { item: 'RF Testing Laboratory Charges', cost: '₹15,000 – ₹50,000 (depends on equipment complexity)' },
            { item: 'Dealer Possession Licence Fee', cost: '₹1,000 – ₹5,000 per annum' },
            { item: 'Import Licence / DGFT Fees (if applicable)', cost: '₹1,000 – ₹5,000' },
            { item: 'Your Professional Service Charges', cost: '₹9,999 onwards (inclusive of filing, testing coordination & advisory)' },
        ],
        penalties: [
            {
                violation: 'Importing Wireless Equipment Without ETA',
                penalty: 'Confiscation of equipment at customs, fine up to ₹5,00,000, and potential prosecution under the Indian Telegraph Act, 1885 and Indian Wireless Telegraphy Act, 1933.',
            },
            {
                violation: 'Operating Non-Approved Wireless Equipment',
                penalty: 'Seizure of equipment, imprisonment up to 3 years, and fine under the Indian Wireless Telegraphy Act. Repeat offences attract enhanced penalties.',
            },
            {
                violation: 'Dealing in Wireless Equipment Without DPL',
                penalty: 'Fine of ₹10,000 – ₹1,00,000 and confiscation of stock. The dealer may be barred from future WPC approvals.',
            },
            {
                violation: 'Operating on Unauthorized Frequency Bands',
                penalty: 'Immediate equipment seizure, spectrum interference penalty up to ₹10,00,000, and criminal prosecution under the Indian Telegraph Act.',
            },
        ],
        advantages: [
            {
                icon: '✅',
                title: 'Legal Import Clearance',
                desc: 'A WPC ETA certificate is mandatory for customs clearance of wireless equipment. Without it, consignments will be held at the port, causing delays and additional storage costs.',
            },
            {
                icon: '📡',
                title: 'Spectrum Compliance',
                desc: 'ETA certification ensures your wireless equipment operates within India\'s authorized frequency bands and power limits, preventing harmful interference with licensed communication systems.',
            },
            {
                icon: '🏪',
                title: 'Market Access in India',
                desc: 'WPC certification is a prerequisite for selling wireless equipment in the Indian market. Without ETA, products cannot be legally marketed, distributed, or sold in India.',
            },
            {
                icon: '🔬',
                title: 'Quality & Safety Assurance',
                desc: 'RF testing and ETA certification guarantee that wireless devices meet Indian technical standards, enhancing product credibility and consumer confidence in your brand.',
            },
            {
                icon: '🤝',
                title: 'OEM & Distribution Partnerships',
                desc: 'Indian distributors, e-commerce platforms, and retailers require WPC ETA as a mandatory compliance document before listing or selling wireless products.',
            },
            {
                icon: '🛡️',
                title: 'Protection from Seizure & Penalties',
                desc: 'ETA-certified equipment is protected from customs confiscation, DoT enforcement actions, and penalties — safeguarding your business investment and reputation.',
            },
            {
                icon: '🌐',
                title: 'IoT & Smart Device Enablement',
                desc: 'WPC certification is essential for IoT devices, smart home products, wearables, and connected equipment entering the rapidly growing Indian digital ecosystem.',
            },
            {
                icon: '🔄',
                title: '5-Year Validity & Easy Renewal',
                desc: 'WPC ETA certificates are valid for up to 5 years, reducing the frequency of re-application. Your Professional handles timely renewals and variant approvals.',
            },
        ],
        disadvantages: [
            'RF testing at authorized laboratories can take 5–10 working days and costs ₹15,000 – ₹50,000, which adds to the product launch timeline and budget.',
            'The WPC Wing may raise multiple rounds of queries, extending the approval timeline to 30–45 days in some cases.',
            'Foreign manufacturers must appoint an authorized Indian representative, which requires additional legal documentation and coordination.',
            'Each variant or model of wireless equipment requires a separate ETA application, increasing costs for companies with large product portfolios.',
            'The SARAS portal occasionally experiences technical issues, which can delay application submissions and status tracking.',
            'Changes in frequency allocation or technical standards may require re-testing and re-certification of previously approved equipment.',
        ],
        faqs: [
            {
                q: 'What is a WPC Certificate and why is it required?',
                a: 'A WPC Certificate (Equipment Type Approval) is issued by the Wireless Planning & Coordination Wing of the Department of Telecommunications. It certifies that a wireless device complies with Indian radio frequency standards and is mandatory for importing, manufacturing, selling, or operating any wireless equipment in India.',
            },
            {
                q: 'Which products require WPC ETA certification?',
                a: 'Products that operate in the radio frequency spectrum — including Wi-Fi routers, Bluetooth devices, wireless headphones, IoT sensors, drones with communication modules, RFID readers, walkie-talkies, satellite phones, and any device with RF transmission capability — require WPC ETA.',
            },
            {
                q: 'How long does WPC ETA approval take?',
                a: 'The typical processing time is 15–30 working days from application submission, depending on the complexity of the equipment and whether the WPC Wing raises queries. RF testing at the lab takes an additional 5–10 days before application filing.',
            },
            {
                q: 'Can a foreign manufacturer directly apply for WPC ETA?',
                a: 'No. Foreign manufacturers must apply through an authorized Indian representative — typically an importer, distributor, or subsidiary registered in India. The Indian representative files the ETA application and holds the certificate on behalf of the manufacturer.',
            },
            {
                q: 'What is the validity period of a WPC ETA certificate?',
                a: 'WPC ETA certificates are typically valid for 5 years from the date of issuance. Before expiry, the certificate must be renewed by filing a renewal application with updated test reports if required. Your Professional provides renewal reminders and filing support.',
            },
            {
                q: 'Is WPC certification different from BIS certification?',
                a: 'Yes. WPC certification (ETA) covers radio frequency compliance — ensuring the device operates within authorized spectrum bands. BIS (Bureau of Indian Standards) certification covers product safety and quality standards. Many wireless products require both WPC ETA and BIS certification.',
            },
            {
                q: 'Can Your Professional handle RF lab testing coordination?',
                a: 'Yes. Your Professional coordinates the entire RF testing process — from lab selection and sample submission to test report collection and submission with the WPC ETA application. We work with WPC-recognized labs to ensure smooth and timely testing.',
            },
            {
                q: 'What happens if I import wireless equipment without WPC ETA?',
                a: 'Importing wireless equipment without a valid WPC ETA certificate is illegal. Customs authorities will detain the consignment at the port, and you may face fines up to ₹5,00,000, confiscation of goods, and prosecution under the Indian Telegraph Act and Indian Wireless Telegraphy Act.',
            },
        ],
        cta: {
            heading: 'Get Your WPC Certificate for Wireless Equipment Today',
            subheading: 'Let Your Professional handle your WPC ETA approval — from RF testing to import clearance, we ensure full compliance.',
            features: [
                'Complete equipment frequency assessment',
                'RF lab testing coordination',
                'WPC ETA application & follow-up',
                'Import clearance & compliance support',
            ],
        },
    },

    'mstc-license-registration': {
        slug: 'mstc-license-registration',
        title: 'MSTC License Registration Online in India',
        subtitle:
            'Register on the MSTC portal online with Your Professional — expert guidance on e-commerce registration, e-auction participation, and vendor empanelment for government surplus sales, scrap trading, and PSU procurement.',
        heroFeatures: [
            'MSTC Vendor Registration in 7–15 Days',
            'Access to Government e-Auctions & Tenders',
            'End-to-End Portal Registration & Filing',
            'Trusted by 4,000+ Traders & Scrap Dealers Across India',
        ],
        overview: {
            heading: 'What is MSTC License Registration?',
            paragraphs: [
                'MSTC Limited (formerly Metal Scrap Trade Corporation) is a Government of India enterprise under the Ministry of Steel. Originally established in 1964 for canalization of scrap metal imports, MSTC has evolved into India\'s leading e-commerce service provider for government and public sector undertakings (PSUs).',
                'MSTC operates one of the largest e-auction and e-procurement platforms in India, facilitating the sale of surplus materials, scrap, used assets, and other goods on behalf of government departments, railways, defence establishments, coal companies, steel plants, and PSUs. It also provides e-procurement services for government purchases.',
                'To participate in MSTC e-auctions, e-tenders, and e-commerce transactions, businesses must register as vendors on the MSTC portal (www.mstcecommerce.com). The registration process involves identity verification, document submission, and empanelment approval by MSTC.',
                'At Your Professional, we assist businesses with the complete MSTC registration process — from portal account creation and document preparation to vendor empanelment and e-auction participation guidance — enabling you to access lucrative government scrap and surplus sale opportunities.',
            ],
            highlights: [
                { icon: '🏛️', text: 'Government of India enterprise under the Ministry of Steel since 1964' },
                { icon: '💻', text: 'India\'s largest e-auction platform for government scrap and surplus sales' },
                { icon: '🔐', text: 'Mandatory vendor registration required for e-auction participation' },
                { icon: '📊', text: 'Facilitates transactions worth ₹50,000+ crore annually across sectors' },
            ],
        },
        eligibility: [
            'Any individual, proprietorship, partnership firm, LLP, private/public company, or cooperative society engaged in trading, manufacturing, or recycling activities.',
            'The applicant must hold a valid PAN Card and GST registration (GSTIN) for business transactions on the MSTC platform.',
            'The business must have a valid bank account in the name of the firm/company for EMD (Earnest Money Deposit) and payment processing.',
            'The applicant must not be blacklisted, debarred, or suspended by any government department, PSU, or MSTC for prior misconduct.',
            'For specific e-auctions (e.g., coal, minerals, defence scrap), additional sector-specific licences or registrations may be required.',
            'The authorized signatory must have a valid digital signature certificate (DSC) — Class 2 or Class 3 — for online bidding and document signing.',
            'The business must have relevant trade experience and financial capacity proportionate to the e-auction categories it intends to participate in.',
        ],
        documents: [
            {
                category: 'Business Identity & Registration Documents',
                items: [
                    'PAN Card of the business entity and proprietor/partners/directors',
                    'GST Registration Certificate (GSTIN)',
                    'Certificate of Incorporation / Partnership Deed / LLP Agreement / Proprietorship Declaration',
                    'Aadhaar Card and passport-sized photographs of the authorized signatory',
                    'Shop & Establishment Registration or Trade Licence (as applicable)',
                ],
            },
            {
                category: 'Financial & Banking Documents',
                items: [
                    'Cancelled cheque or bank account statement (last 6 months) in the name of the business',
                    'Bank certificate or letter confirming account details',
                    'Income Tax Return (ITR) of the last 2–3 financial years',
                    'Balance sheet and profit & loss statement (audited, if applicable)',
                ],
            },
            {
                category: 'Digital & Authorization Documents',
                items: [
                    'Class 2 or Class 3 Digital Signature Certificate (DSC) of the authorized signatory',
                    'Board Resolution / Authorization Letter appointing the signatory for MSTC transactions',
                    'Power of Attorney (if applicable, for representatives bidding on behalf of the business)',
                    'Previous MSTC registration certificate or e-auction participation records (for renewal)',
                ],
            },
        ],
        process: [
            {
                title: 'Business Eligibility Assessment',
                desc: 'Your Professional evaluates your business type, trade activities, and target e-auction categories to determine MSTC registration requirements and applicable vendor categories.',
                time: '1 day',
            },
            {
                title: 'Document Collection & Preparation',
                desc: 'We collect all required identity, financial, and authorization documents. Our team verifies document accuracy, formats, and validity before portal submission.',
                time: '2–3 days',
            },
            {
                title: 'Digital Signature Certificate (DSC) Procurement',
                desc: 'If you don\'t have a valid DSC, Your Professional facilitates procurement of a Class 2 or Class 3 Digital Signature Certificate from a licensed Certifying Authority.',
                time: '1–3 days',
            },
            {
                title: 'MSTC Portal Account Creation',
                desc: 'We create your vendor account on the MSTC e-commerce portal (www.mstcecommerce.com), entering all business details, contact information, and selecting relevant auction categories.',
                time: '1 day',
            },
            {
                title: 'Document Upload & Application Submission',
                desc: 'All supporting documents are uploaded to the MSTC portal in the prescribed format. The vendor registration application is submitted for MSTC review and approval.',
                time: '1–2 days',
            },
            {
                title: 'MSTC Verification & Empanelment',
                desc: 'MSTC verifies the submitted documents, business credentials, and financial capacity. Your Professional handles any queries or additional information requests from MSTC.',
                time: '5–10 days',
            },
            {
                title: 'Registration Approval & Activation',
                desc: 'Upon successful verification, your vendor account is activated and you receive MSTC registration confirmation. You can now participate in e-auctions and e-tenders on the platform.',
                time: '1–2 days',
            },
            {
                title: 'E-Auction Training & Bidding Support',
                desc: 'Your Professional provides guidance on navigating the MSTC e-auction platform, EMD deposit procedures, bidding strategies, and post-auction payment and material lifting protocols.',
                time: '1 day',
            },
        ],
        fees: [
            { item: 'MSTC Vendor Registration Fee', cost: '₹1,000 – ₹5,000 (varies by vendor category)' },
            { item: 'Digital Signature Certificate (DSC)', cost: '₹800 – ₹3,000 (Class 2 or Class 3, valid for 2 years)' },
            { item: 'Earnest Money Deposit (EMD) per Auction', cost: 'Varies — typically 5%–25% of lot value (refundable)' },
            { item: 'MSTC Service Charge on Transactions', cost: '0.5% – 1% of transaction value (charged by MSTC)' },
            { item: 'Your Professional Service Charges', cost: '₹4,999 onwards (inclusive of registration, DSC & portal setup)' },
        ],
        advantages: [
            {
                icon: '🏛️',
                title: 'Government Platform Credibility',
                desc: 'MSTC is a Government of India enterprise — registration on the platform provides access to verified, transparent, and legally binding e-auction transactions.',
            },
            {
                icon: '💰',
                title: 'Lucrative Business Opportunities',
                desc: 'MSTC facilitates sale of scrap, surplus materials, used machinery, and assets from railways, defence, coal companies, and PSUs — often at competitive prices below market rates.',
            },
            {
                icon: '📋',
                title: 'Access to Government Tenders',
                desc: 'MSTC registration enables participation in e-procurement and e-tender processes of central and state government departments, expanding your B2G business pipeline.',
            },
            {
                icon: '🔒',
                title: 'Transparent & Secure Transactions',
                desc: 'The MSTC e-auction platform uses digital signatures, encrypted bidding, and automated processes — ensuring transparency, fairness, and security for all participants.',
            },
            {
                icon: '🏭',
                title: 'Multi-Sector Access',
                desc: 'A single MSTC registration provides access to e-auctions across steel, coal, minerals, railways, defence, power, and other government sector verticals.',
            },
            {
                icon: '📊',
                title: 'Real-Time Bidding & Market Pricing',
                desc: 'MSTC\'s e-auction format allows real-time competitive bidding, helping you acquire materials at fair market-discovered prices with full audit trails.',
            },
            {
                icon: '🌐',
                title: 'Pan-India Coverage',
                desc: 'MSTC e-auctions cover materials and assets located across India — from steel plant scrap in Jharkhand to railway surplus in Maharashtra — enabling nationwide sourcing.',
            },
            {
                icon: '🤝',
                title: 'PSU Vendor Empanelment',
                desc: 'MSTC registration serves as a stepping stone for vendor empanelment with major PSUs like SAIL, Coal India, Indian Railways, BHEL, and ONGC.',
            },
        ],
        disadvantages: [
            'The MSTC e-auction platform requires a valid Digital Signature Certificate, which adds to the initial setup cost and must be renewed periodically.',
            'Earnest Money Deposit (EMD) requirements for high-value auctions can be substantial, tying up working capital during the auction and settlement process.',
            'The platform interface can be complex for first-time users, and technical issues during live bidding may impact participation.',
            'Post-auction material lifting must be completed within strict timelines; delays attract penalties and may result in forfeiture of the EMD.',
            'Competition in popular auction categories (e.g., steel scrap, coal) can be intense, requiring significant market knowledge and bidding expertise.',
            'MSTC charges a service fee on all transactions, which must be factored into the cost-benefit analysis of each auction participation.',
        ],
        faqs: [
            {
                q: 'What is MSTC and what services does it provide?',
                a: 'MSTC Limited (Metal Scrap Trade Corporation) is a Government of India enterprise under the Ministry of Steel. It operates India\'s largest e-commerce platform for government e-auctions, e-procurement, and e-sales — facilitating the sale of scrap, surplus materials, and used assets on behalf of PSUs and government departments.',
            },
            {
                q: 'Who can register on the MSTC portal?',
                a: 'Any individual, proprietorship, partnership firm, LLP, company, or cooperative society with a valid PAN, GST registration, and bank account can register as a vendor on the MSTC portal. The business must not be blacklisted by any government agency.',
            },
            {
                q: 'Is a Digital Signature Certificate mandatory for MSTC registration?',
                a: 'Yes. A Class 2 or Class 3 Digital Signature Certificate (DSC) is mandatory for online bidding, document signing, and secure transactions on the MSTC e-commerce platform. Your Professional can facilitate DSC procurement as part of the registration process.',
            },
            {
                q: 'How long does MSTC registration take?',
                a: 'MSTC vendor registration typically takes 7–15 working days from document submission, depending on the verification process. With Your Professional handling the application, the process is streamlined to minimize delays and query resolution time.',
            },
            {
                q: 'What types of e-auctions are available on MSTC?',
                a: 'MSTC conducts e-auctions for a wide range of materials including steel scrap, iron ore, coal, industrial surplus, used machinery, railway scrap, defence stores, and PSU assets. E-procurement and e-tender services are also available for government purchases.',
            },
            {
                q: 'What is EMD and how does it work on MSTC?',
                a: 'Earnest Money Deposit (EMD) is a refundable security deposit required to participate in an e-auction. Typically 5%–25% of the lot value, EMD is paid online before bidding. If you win, it\'s adjusted against the purchase price; if you lose, it\'s refunded within 7–10 working days.',
            },
            {
                q: 'Can Your Professional help with e-auction participation?',
                a: 'Yes. Beyond registration, Your Professional provides guidance on auction category selection, EMD deposit, bidding strategies, and post-auction compliance — including payment, material lifting, and documentation for successful transactions.',
            },
            {
                q: 'Is MSTC registration valid across all auction categories?',
                a: 'A single MSTC vendor registration provides access to the platform, but you may need to register for specific auction categories separately. Some auctions (e.g., coal, minerals, defence) have additional eligibility requirements and documentation needs.',
            },
        ],
        cta: {
            heading: 'Register on MSTC and Start Bidding in Government e-Auctions',
            subheading: 'Let Your Professional handle your MSTC registration — unlock access to government scrap sales, PSU auctions, and e-procurement opportunities.',
            features: [
                'Complete vendor registration & empanelment',
                'Digital Signature Certificate facilitation',
                'E-auction platform onboarding & training',
                'Ongoing bidding & compliance support',
            ],
        },
    },

    'agmark-license': {
        slug: 'agmark-license',
        title: 'AGMARK License Registration Online in India',
        subtitle:
            'Apply for your AGMARK License online with Your Professional — expert guidance on agricultural produce quality certification, DMI compliance, and grading authorization for food and farm products across India.',
        heroFeatures: [
            'AGMARK Certification Approval in 30–60 Days',
            'Complete DMI Documentation & Lab Testing Support',
            'Applicable for 200+ Agricultural Commodities',
            'Trusted by 6,000+ Food & Agri Businesses Across India',
        ],
        overview: {
            heading: 'What is an AGMARK License?',
            paragraphs: [
                'AGMARK is a certification mark employed on agricultural products in India, assuring that they conform to a set of standards approved by the Directorate of Marketing and Inspection (DMI), an attached office of the Department of Agriculture and Farmers Welfare, Ministry of Agriculture & Farmers Welfare, Government of India.',
                'The AGMARK certification system was established under the Agricultural Produce (Grading and Marking) Act, 1937. It covers over 200 agricultural and allied commodities including cereals, pulses, spices, oilseeds, ghee, honey, wheat flour (atta), vermicelli, edible oils, fruits, vegetables, and other farm produce.',
                'An AGMARK License (also called a Certificate of Authorization for Packing or CAP) is issued to manufacturers, packers, and traders who wish to grade and sell their agricultural products under the AGMARK quality certification mark. The licence certifies that the licensee\'s premises, equipment, and processes meet DMI standards.',
                'At Your Professional, we provide end-to-end AGMARK licensing support — from eligibility assessment and infrastructure compliance to DMI application filing, laboratory testing coordination, and grading authorization — helping you build consumer trust through certified quality.',
            ],
            highlights: [
                { icon: '🌾', text: 'Covers 200+ agricultural commodities — cereals, spices, oils, ghee, honey & more' },
                { icon: '🏛️', text: 'Issued by the Directorate of Marketing and Inspection (DMI) under Ministry of Agriculture' },
                { icon: '🔬', text: 'Mandatory laboratory testing to verify product quality meets AGMARK grade standards' },
                { icon: '⚖️', text: 'Governed by the Agricultural Produce (Grading and Marking) Act, 1937' },
            ],
        },
        types: [
            {
                title: 'Certificate of Authorization for Packing (CAP)',
                desc: 'The primary AGMARK licence issued to manufacturers and packers who grade, pack, and label agricultural products with the AGMARK certification mark. The CAP authorizes the holder to use the AGMARK symbol on product packaging.',
            },
            {
                title: 'Grading at Source (GAS)',
                desc: 'Applicable for grading and certification of agricultural produce at the point of production — such as farms, mandis, and collection centres. This facilitates quality assurance from the very first stage of the supply chain.',
            },
            {
                title: 'Approved Laboratory Recognition',
                desc: 'Laboratories seeking to conduct quality testing for AGMARK grading must obtain DMI recognition. The approval certifies that the lab meets the infrastructure, equipment, and personnel standards required for AGMARK testing.',
            },
        ],
        eligibility: [
            'The applicant must be a manufacturer, packer, or trader of agricultural produce seeking to grade and sell products under the AGMARK certification mark.',
            'The business premises (factory, processing unit, or packing facility) must meet DMI infrastructure and hygiene standards for the specific commodity.',
            'The applicant must have access to a DMI-recognized laboratory for product quality testing, or arrange for testing at an approved external lab.',
            'The business must hold valid GST registration, FSSAI licence (for food products), and any other sector-specific registrations required for the commodity.',
            'The applicant must employ or appoint a qualified chemist or food technologist for in-house quality control (mandatory for certain commodity categories).',
            'The premises must have adequate storage, packaging, and labelling infrastructure compliant with AGMARK grading standards.',
            'The applicant must not have any prior AGMARK licence revocations or pending proceedings with DMI for quality violations.',
        ],
        documents: [
            {
                category: 'Business & Identity Documents',
                items: [
                    'Certificate of Incorporation / Partnership Deed / Proprietorship Declaration',
                    'PAN Card of the business entity and authorized signatory',
                    'GST Registration Certificate (GSTIN)',
                    'FSSAI Registration or Licence Certificate (for food products)',
                    'Aadhaar Card and photographs of the proprietor/partners/directors',
                    'Trade Licence / Shop & Establishment Registration',
                ],
            },
            {
                category: 'Premises & Infrastructure Documents',
                items: [
                    'Layout plan and photographs of the manufacturing/packing premises',
                    'List of equipment and machinery used for grading, processing, and packaging',
                    'Water supply and sanitation facility details',
                    'Storage facility details with pest control and fumigation records',
                    'NOC from Pollution Control Board (if applicable)',
                    'Fire safety certificate (for large-scale processing units)',
                ],
            },
            {
                category: 'Quality Control & Product Documents',
                items: [
                    'Product samples for laboratory testing (as per AGMARK commodity standards)',
                    'Qualification certificate of the in-house chemist or food technologist',
                    'Previous AGMARK licence or CAP certificate (for renewal applications)',
                    'Details of quality control procedures and standard operating protocols',
                    'Raw material sourcing details and supplier invoices',
                ],
            },
        ],
        process: [
            {
                title: 'Commodity & Eligibility Assessment',
                desc: 'Your Professional evaluates your product against AGMARK commodity standards to confirm eligibility, applicable grade specifications, and infrastructure requirements for the specific agricultural produce.',
                time: '1–2 days',
            },
            {
                title: 'Premises Inspection Preparation',
                desc: 'We assess your manufacturing/packing facility against DMI infrastructure, hygiene, and equipment standards. Any gaps are identified and recommendations provided for compliance before DMI inspection.',
                time: '3–5 days',
            },
            {
                title: 'Document Collection & Application Preparation',
                desc: 'All business registration, premises, and quality control documents are collected and verified. The AGMARK licence application (Form-I for CAP) is prepared with accurate details.',
                time: '2–3 days',
            },
            {
                title: 'Application Submission to DMI / Regional Office',
                desc: 'The completed application along with all supporting documents and prescribed fee is submitted to the DMI Regional Office or Sub-Office having jurisdiction over the applicant\'s premises.',
                time: '1–2 days',
            },
            {
                title: 'DMI Premises Inspection',
                desc: 'A DMI-authorized inspector visits the premises to verify compliance with AGMARK grading standards — including equipment, hygiene, storage, packaging, and quality control arrangements. Your Professional assists with inspection preparation.',
                time: '7–15 days',
            },
            {
                title: 'Product Sample Testing',
                desc: 'Product samples are submitted to a DMI-recognized laboratory for quality testing against the prescribed AGMARK grade specifications. Your Professional coordinates sample submission and report collection.',
                time: '7–15 days',
            },
            {
                title: 'Scrutiny, Query Resolution & Approval',
                desc: 'DMI reviews the inspection report, lab test results, and application documents. Any queries or deficiencies are addressed by Your Professional. Upon satisfaction, the licence is approved.',
                time: '10–20 days',
            },
            {
                title: 'AGMARK Licence (CAP) Issuance',
                desc: 'The Directorate of Marketing and Inspection issues the Certificate of Authorization for Packing (CAP), authorizing the business to grade and sell products under the AGMARK mark. The licence is typically valid for 1–3 years.',
                time: '3–5 days',
            },
        ],
        fees: [
            { item: 'AGMARK Licence (CAP) Application Fee', cost: '₹1,000 – ₹5,000 (varies by commodity and scale)' },
            { item: 'DMI Inspection Fee', cost: '₹2,000 – ₹10,000 (based on premises size and location)' },
            { item: 'Laboratory Testing Charges', cost: '₹1,500 – ₹8,000 per sample (varies by commodity)' },
            { item: 'Annual Renewal Fee', cost: '₹1,000 – ₹3,000 per annum' },
            { item: 'Your Professional Service Charges', cost: '₹7,999 onwards (inclusive of documentation, filing & lab coordination)' },
        ],
        penalties: [
            {
                violation: 'Using AGMARK Without Valid Licence',
                penalty: 'Imprisonment up to 3 years, fine up to ₹5,000, and confiscation of the falsely marked goods under the Agricultural Produce (Grading and Marking) Act, 1937.',
            },
            {
                violation: 'Selling Sub-Standard Products with AGMARK',
                penalty: 'Licence suspension or cancellation, prosecution under food safety laws, and fine proportionate to the value of adulterated or sub-standard goods seized.',
            },
            {
                violation: 'Failure to Maintain Quality Standards',
                penalty: 'Warning notice followed by licence suspension. Repeated non-compliance leads to permanent cancellation of the CAP and blacklisting from re-application for 2–5 years.',
            },
            {
                violation: 'Obstructing DMI Inspection',
                penalty: 'Immediate suspension of AGMARK licence, prosecution under the Act, and fine up to ₹2,000. The licence will not be restored until full cooperation is demonstrated.',
            },
        ],
        advantages: [
            {
                icon: '✅',
                title: 'Quality Assurance Mark',
                desc: 'AGMARK certification provides an official government quality assurance stamp, giving consumers confidence that the product meets nationally prescribed standards for purity and grade.',
            },
            {
                icon: '📈',
                title: 'Higher Market Value',
                desc: 'AGMARK-certified products command premium pricing in retail and wholesale markets. Consumers, institutional buyers, and export markets prefer graded and certified agricultural produce.',
            },
            {
                icon: '🏪',
                title: 'Retail & Distribution Access',
                desc: 'Major supermarket chains, organized retailers, and e-commerce platforms prioritize AGMARK-certified products for their agricultural and food categories, ensuring wider distribution reach.',
            },
            {
                icon: '🌐',
                title: 'Export Market Credibility',
                desc: 'AGMARK certification enhances international buyer confidence and supports compliance with importing country quality requirements — facilitating agricultural exports from India.',
            },
            {
                icon: '🛡️',
                title: 'Consumer Trust & Brand Value',
                desc: 'The AGMARK symbol is widely recognized by Indian consumers as a mark of quality and purity — building brand trust and customer loyalty for your agricultural products.',
            },
            {
                icon: '🏛️',
                title: 'Government Procurement Eligibility',
                desc: 'AGMARK certification is often mandatory for supplying agricultural products to government institutions, PDS (Public Distribution System), mid-day meal schemes, and defence establishments.',
            },
            {
                icon: '📋',
                title: 'Legal Protection',
                desc: 'AGMARK grading provides legal documentation of product quality at the time of sale, protecting both sellers and buyers in case of quality disputes or consumer complaints.',
            },
            {
                icon: '🤝',
                title: 'B2B Trade Advantage',
                desc: 'AGMARK certification simplifies quality negotiations with bulk buyers, food processors, and institutional purchasers — standardizing quality expectations and reducing rejections.',
            },
        ],
        disadvantages: [
            'The AGMARK licensing process involves premises inspection and lab testing, which can take 30–60 days — delaying market entry for new products.',
            'Maintaining AGMARK quality standards requires ongoing quality control investment — including in-house chemists, regular testing, and documented procedures.',
            'DMI inspectors may visit the premises periodically for surprise checks, requiring the facility to be audit-ready at all times.',
            'Each commodity or product requires separate AGMARK grading approval, increasing compliance complexity for businesses with diverse product portfolios.',
            'Laboratory testing costs add to the per-unit production cost, which can be significant for small-scale producers and farmer producer organizations.',
            'Changes in product specifications, premises, or packaging require modification of the AGMARK licence, involving additional application and inspection fees.',
        ],
        faqs: [
            {
                q: 'What is AGMARK and what does it certify?',
                a: 'AGMARK is a quality certification mark for agricultural products in India, issued under the Agricultural Produce (Grading and Marking) Act, 1937. It certifies that the product meets the quality standards prescribed by the Directorate of Marketing and Inspection (DMI) for that specific commodity — covering parameters like purity, grade, moisture content, and adulteration limits.',
            },
            {
                q: 'Which products can be certified under AGMARK?',
                a: 'AGMARK covers over 200 agricultural and allied commodities including wheat flour (atta), rice, pulses, spices (turmeric, chilli, coriander), edible oils, ghee, honey, vermicelli, fruits, vegetables, oilseeds, cereals, and other farm produce. The full list is maintained by the DMI.',
            },
            {
                q: 'Is AGMARK mandatory for selling agricultural products?',
                a: 'AGMARK is not mandatory for all agricultural product sales. However, it is required for supplying to government institutions, PDS, and certain institutional buyers. It is also highly preferred by organized retailers, export buyers, and quality-conscious consumers.',
            },
            {
                q: 'How is AGMARK different from FSSAI?',
                a: 'FSSAI (Food Safety and Standards Authority of India) licence is mandatory for all food businesses and covers food safety and hygiene standards. AGMARK is a voluntary quality certification specifically for agricultural products, certifying grade and purity. Many agricultural food products benefit from having both FSSAI and AGMARK certifications.',
            },
            {
                q: 'How long does it take to get an AGMARK licence?',
                a: 'The AGMARK licensing process typically takes 30–60 days from application submission, including premises inspection and product lab testing. Timelines depend on the DMI regional office workload and whether any compliance gaps need to be addressed. Your Professional expedites the process through thorough preparation.',
            },
            {
                q: 'What is the validity of an AGMARK licence?',
                a: 'An AGMARK licence (Certificate of Authorization for Packing) is typically valid for 1–3 years, depending on the commodity and licensing terms. The licence must be renewed before expiry by filing a renewal application with updated documents and inspection reports.',
            },
            {
                q: 'Can Your Professional help with DMI inspection preparation?',
                a: 'Yes. Your Professional provides comprehensive inspection preparation support — including premises audit, equipment compliance check, documentation readiness, quality control protocol review, and mock inspection — to maximize your chances of first-time approval.',
            },
            {
                q: 'Does AGMARK certification help with exports?',
                a: 'Yes. AGMARK certification demonstrates that your products meet nationally recognized quality standards, which enhances credibility with international buyers. It supports compliance with importing country regulations and can be used alongside other export certifications like APEDA registration and phytosanitary certificates.',
            },
        ],
        cta: {
            heading: 'Get Your AGMARK License for Quality-Certified Agricultural Products',
            subheading: 'Let Your Professional handle your AGMARK licensing — from premises compliance to DMI approval, we ensure your products carry the mark of quality.',
            features: [
                'Complete commodity eligibility assessment',
                'Premises inspection preparation & compliance',
                'Lab testing coordination & DMI filing',
                'Licence issuance & annual renewal support',
            ],
        },
    }
};
