import type { ServiceData } from '../services';

export const COMPANY_REGISTRATIONS: Record<string, ServiceData> = {
'private-limited-company-registration': {
        slug: 'private-limited-company-registration',
        title: 'Private Limited Company Registration Online in India',
        subtitle: 'Register your Private Limited Company with expert CA & CS support, transparent pricing, and fast MCA approval — ensuring smooth, end-to-end company registration.',
        heroFeatures: [
            'Company Registration in 7–10 Business Days',
            'Name Approval & MCA Filing by Experts',
            'PAN, TAN, DIN, DSC, MoA & AoA Included',
            'MCA-Approved Certificate of Incorporation',
            'Trusted by Startups & Entrepreneurs Across India',
        ],
        overview: {
            heading: 'What is a Private Limited Company?',
            paragraphs: [
                'A Private Limited Company (Pvt. Ltd.) is a separate legal entity privately held by a small group of shareholders. Unlike sole proprietorships or partnerships, the company\'s liability is limited to the shares held by each shareholder — personal assets are protected in case of business losses.',
                'It is one of the most popular business structures in India, especially for startups and growing businesses. Registration is governed by the Companies Act, 2013 and regulated by the Ministry of Corporate Affairs (MCA).',
                'Registration also involves compliance with the Income Tax Act, 1961, GST laws, FEMA (for foreign investment), and other applicable regulations.',
            ],
            highlights: [
                { icon: '👥', text: 'Minimum 2 and maximum 200 members' },
                { icon: '⚖️', text: 'Separate legal entity under Companies Act, 2013' },
                { icon: '🛡️', text: 'Limited liability — shareholders liable only up to their shareholding' },
                { icon: '♾️', text: 'Perpetual succession — business continues even if shareholders change' },
                { icon: '⭐', text: 'Preferred structure for investors, banks, and VCs' },
            ],
        },
        eligibility: [
            'Minimum 2 directors required; at least one must be an Indian resident (stayed 182+ days in India in the previous financial year).',
            'Maximum 15 directors by default; can be increased by special resolution.',
            'Minimum 2 shareholders required; maximum 200 (excluding current/former employees with ESOPs).',
            'Must have a physical registered office address in India with supporting documents.',
            'Unique company name as per MCA guidelines — no similarity with existing companies or trademarks.',
            'No minimum paid-up capital requirement; authorized share capital must be declared.',
            'Every director must obtain a Director Identification Number (DIN) and Class 3 Digital Signature Certificate (DSC).',
        ],
        documents: [
            {
                category: 'For Directors & Shareholders (Indian)',
                items: ['PAN Card (mandatory)', 'Aadhaar Card', 'Recent passport-sized photographs', 'Address proof: Latest utility bill (not older than 2 months), bank statement, or Voter ID', 'Email ID & mobile number (Aadhaar-linked preferred)', 'Specimen signature'],
            },
            {
                category: 'For Foreign Directors/Shareholders',
                items: ['Passport copy (with visa details)', 'Address proof from home country (utility bill, bank statement, or driving license)', 'Bank statement from home country', 'All documents must be notarized and apostilled'],
            },
            {
                category: 'Registered Office Address',
                items: ['Latest utility bill (not older than 2 months) or property tax receipt', 'No Objection Certificate (NOC) from the property owner if rented', 'Rent/lease agreement copy (if applicable)'],
            },
            {
                category: 'Company Documents',
                items: ['Proposed company name options (3–4 alternatives)', 'Description of business activities and objectives', 'Details of authorized and paid-up capital', 'Shareholding pattern', 'Draft MoA & AoA', 'Resolution appointing first directors'],
            },
        ],
        process: [
            { title: 'Get Digital Signature Certificates (DSC)', desc: 'Each proposed director and subscriber must obtain a Class 3 DSC for signing documents digitally. Validity: 2 years.', time: '1–2 working days' },
            { title: 'Apply for Director Identification Number (DIN)', desc: 'Every director must have a unique DIN. For new companies, DINs are issued as part of the SPICe+ form.', time: '1 working day' },
            { title: 'Reserve Your Unique Company Name', desc: 'Use the RUN (Reserve Unique Name) service on the MCA portal. You can submit up to 4 name options. Approved names are reserved for 20 days.', time: '1–2 working days' },
            { title: 'Prepare & Draft Essential Documents', desc: 'Draft MoA (company objectives), AoA (internal management rules), director consent declarations, and registered office proofs.', time: '' },
            { title: 'File SPICe+ Incorporation Form', desc: 'Submit the SPICe+ form on MCA portal covering company registration, PAN, TAN, EPFO, ESIC, and bank account opening.', time: '' },
            { title: 'Receive Certificate of Incorporation', desc: 'Upon ROC verification, receive your COI with CIN, PAN, and TAN — your company is legally ready to operate.', time: '7–10 working days total' },
        ],
        fees: [
            { item: 'Name Reservation Fee', cost: '₹1,000' },
            { item: 'Incorporation Fees (up to ₹1 lakh capital)', cost: '₹5,000' },
            { item: 'Stamp Duty', cost: '₹135 – ₹15,000+ (varies by state)' },
            { item: 'Digital Signature Certificate (DSC)', cost: '₹2,500 per director' },
            { item: 'Professional Service Charges', cost: '₹1,999 onwards' },
            { item: 'PAN & TAN Application Fee', cost: '₹443' },
        ],
        advantages: [
            { icon: '⚖️', title: 'Separate Legal Identity', desc: 'The company is recognized as a separate legal entity — can own property, enter contracts, and initiate legal action.' },
            { icon: '🛡️', title: 'Limited Liability', desc: 'Shareholders are protected from personal liability. Risk is limited to the amount invested in shares.' },
            { icon: '💰', title: 'Easier Access to Funding', desc: 'Preferred by investors, VCs, and banks — making it easier to raise funds and attract investment.' },
            { icon: '⭐', title: 'Enhanced Credibility', desc: 'Being a registered company improves trust with clients, suppliers, and financial institutions.' },
            { icon: '🏦', title: 'Easier Access to Loans', desc: 'Banks and NBFCs prefer to offer loans to registered companies over unregistered entities.' },
            { icon: '🔄', title: 'Easy Transfer of Ownership', desc: 'Shares can be transferred smoothly, making changes in ownership or investment simple.' },
            { icon: '🏛️', title: 'Government Scheme Eligibility', desc: 'Eligible for Startup India, MSME incentives, and industry-specific government policies.' },
            { icon: '♾️', title: 'Perpetual Succession', desc: 'The company continues to exist even if shareholders or directors change.' },
            { icon: '🤝', title: 'Strategic Partnerships', desc: 'Being a formal entity makes joint ventures, mergers, and partnerships easier.' },
        ],
        faqs: [
            { q: 'Can a single person register a private limited company in India?', a: 'No. The law requires minimum 2 members — at least 2 directors and 2 shareholders. Solo entrepreneurs can register a One Person Company (OPC) instead.' },
            { q: 'Is there a minimum capital requirement?', a: 'No mandatory minimum capital requirement. You can start with any amount. However, the authorized share capital must be declared during registration.' },
            { q: 'How long does it take to register?', a: 'Typically 7–10 business days with professional assistance, provided all documents are accurate and government authorities respond promptly.' },
            { q: 'What documents are required?', a: 'PAN, Aadhaar, address proof, passport-sized photos of directors/shareholders, registered office proof (utility bill + NOC if rented), and proposed company details.' },
            { q: 'What is the difference between Pvt Ltd and LLP registration?', a: 'A Pvt Ltd company has a more formal structure with shares, board meetings, and higher compliance. An LLP is more flexible with less compliance, but has limited investor appeal.' },
            { q: 'Is GST registration mandatory after Pvt Ltd registration?', a: 'GST registration is mandatory if turnover exceeds the threshold or if the company is involved in inter-state supply or e-commerce.' },
            { q: 'Can a Private Limited Company convert to a Public Company?', a: 'Yes, by passing a special resolution, altering the AoA, and filing the necessary forms with the ROC.' },
            { q: 'What are the annual compliance requirements?', a: 'Annual return filing (MGT-7), financial statements (AOC-4), minimum 4 board meetings per year, AGM within 6 months of financial year-end, income tax filing, and GST returns.' },
            { q: 'Can NRIs register a Private Limited Company in India?', a: 'Yes. NRIs and foreign nationals can be directors or shareholders. At least one director must be an Indian resident.' },
            { q: 'What is the SPICe+ Form?', a: 'SPICe+ (Simplified Proforma for Incorporating Company Electronically) is an integrated form that covers name reservation, incorporation, PAN, TAN, EPFO, ESIC, and bank account setup.' },
        ],
    },

    'llp-registration': {
        slug: 'llp-registration',
        title: 'LLP Registration Online in India',
        subtitle: 'Register your Limited Liability Partnership online with Your Professional. Enjoy the flexibility of a partnership with the security of limited liability.',
        heroFeatures: [
            'LLP Registration in 10–15 Business Days',
            'PAN & TAN Included with Registration',
            'Professional Drafting of LLP Agreement',
            'DSC & DPIN for Designated Partners',
            'Complete Compliance Support',
        ],
        overview: {
            heading: 'What is a Limited Liability Partnership (LLP)?',
            paragraphs: [
                'A Limited Liability Partnership (LLP) is a business structure that combines the flexibility of a partnership with the security of limited liability. Governed by the Limited Liability Partnership Act, 2008, it is a separate legal entity distinct from its partners.',
                'LLP registration is ideal for professionals, consultants, and small to medium businesses seeking low compliance obligations with shared management. Partners\' personal assets are protected from business liabilities.',
                'Unlike traditional partnerships, an LLP requires registration with the Ministry of Corporate Affairs (MCA) and must comply with annual filing requirements.',
            ],
            highlights: [
                { icon: '🤝', text: 'Minimum 2 designated partners required' },
                { icon: '🛡️', text: 'Limited liability — partners not personally liable for business debts' },
                { icon: '⚖️', text: 'Separate legal entity under LLP Act, 2008' },
                { icon: '📋', text: 'Lower compliance compared to Private Limited Companies' },
                { icon: '💰', text: 'No minimum capital contribution required' },
            ],
        },
        eligibility: [
            'Minimum 2 designated partners required; no maximum limit on total partners.',
            'At least one designated partner must be an Indian resident (stayed 182+ days in India).',
            'All designated partners must obtain a Designated Partner Identification Number (DPIN).',
            'Digital Signature Certificate (DSC) required for all designated partners.',
            'Must have a registered office address in India.',
            'The proposed LLP name must be unique and not resemble existing companies/LLPs.',
            'Any individual or body corporate can become a partner in an LLP.',
        ],
        documents: [
            { category: 'For Partners (Indian)', items: ['PAN Card (mandatory)', 'Aadhaar Card', 'Passport-sized photographs', 'Address proof (utility bill, bank statement — not older than 2 months)', 'Email ID & mobile number'] },
            { category: 'For Foreign Partners', items: ['Passport copy with visa details', 'Address proof from home country', 'All documents must be notarized and apostilled'] },
            { category: 'Registered Office', items: ['Utility bill (not older than 2 months)', 'NOC from property owner if rented', 'Rent/lease agreement (if applicable)'] },
            { category: 'LLP Documents', items: ['Proposed LLP name (2–3 options)', 'Description of business activities', 'LLP Agreement draft', 'Details of capital contribution by each partner', 'Subscriber sheet signed by all partners'] },
        ],
        process: [
            { title: 'Obtain DSC for Designated Partners', desc: 'Apply for Class 3 Digital Signature Certificates for all designated partners.', time: '1–2 days' },
            { title: 'Apply for DPIN', desc: 'Designated Partner Identification Number is obtained via the FiLLiP form on MCA portal.', time: '1 day' },
            { title: 'Reserve LLP Name', desc: 'Apply for name reservation through the RUN-LLP service on MCA portal. Names are reserved for 90 days.', time: '1–2 days' },
            { title: 'File FiLLiP Form', desc: 'Submit the Form for incorporation of LLP (FiLLiP) with all required documents and details.', time: '' },
            { title: 'Draft & File LLP Agreement', desc: 'File the LLP Agreement within 30 days of incorporation. This defines the mutual rights and duties of partners.', time: '' },
            { title: 'Receive Certificate of Incorporation', desc: 'Upon ROC approval, receive the Certificate of Incorporation with LLPIN and PAN.', time: '10–15 days total' },
        ],
        fees: [
            { item: 'Name Reservation Fee', cost: '₹200' },
            { item: 'Incorporation Fee (FiLLiP)', cost: '₹500 – ₹5,000' },
            { item: 'LLP Agreement Filing', cost: '₹500' },
            { item: 'Stamp Duty on LLP Agreement', cost: 'Varies by state' },
            { item: 'DSC per Partner', cost: '₹1,500 – ₹2,500' },
            { item: 'Professional Charges', cost: '₹3,000 onwards' },
        ],
        advantages: [
            { icon: '🛡️', title: 'Limited Liability', desc: 'Partners\' personal assets are protected. Liability is limited to the agreed contribution.' },
            { icon: '📋', title: 'Low Compliance', desc: 'Fewer compliance requirements compared to a Private Limited Company. No mandatory audit below ₹40 lakh turnover.' },
            { icon: '🤝', title: 'Flexible Management', desc: 'Partners can manage the business directly. No requirement for board meetings or resolutions.' },
            { icon: '⚖️', title: 'Separate Legal Entity', desc: 'The LLP can own property, enter contracts, and sue or be sued in its own name.' },
            { icon: '💰', title: 'No Minimum Capital', desc: 'No minimum capital contribution required. Partners can start with any amount.' },
            { icon: '♾️', title: 'Perpetual Succession', desc: 'The LLP continues to exist regardless of changes in partners.' },
            { icon: '🔄', title: 'Easy Conversion', desc: 'Partnership firms and private companies can be easily converted to an LLP.' },
            { icon: '📊', title: 'Tax Efficiency', desc: 'No Dividend Distribution Tax (DDT). Profits taxed only at the LLP level at a flat 30% rate.' },
        ],
        faqs: [
            { q: 'What is the minimum number of partners required for LLP?', a: 'Minimum 2 designated partners are required. There is no upper limit on the total number of partners.' },
            { q: 'Is there a minimum capital requirement for LLP?', a: 'No. There is no minimum capital requirement. Partners can contribute any amount as agreed in the LLP Agreement.' },
            { q: 'What is the difference between LLP and Partnership?', a: 'LLP provides limited liability and is a separate legal entity. Traditional partnerships have unlimited liability and are not separate legal entities.' },
            { q: 'Is audit mandatory for LLP?', a: 'Audit is mandatory only if the LLP\'s annual turnover exceeds ₹40 lakh or capital contribution exceeds ₹25 lakh.' },
            { q: 'Can an LLP be converted to a Private Limited Company?', a: 'Yes. An LLP can be converted to a Pvt Ltd company by following the procedure under Section 366 of the Companies Act, 2013.' },
            { q: 'What is the LLP Agreement?', a: 'The LLP Agreement is a legal document outlining the mutual rights, duties, and obligations of partners. It must be filed within 30 days of incorporation.' },
            { q: 'What are the annual compliance requirements for LLP?', a: 'Annual Return (Form 11) by May 30, Statement of Account & Solvency (Form 8) by October 30, and Income Tax Return filing.' },
            { q: 'Can NRIs or foreigners be partners in an LLP?', a: 'Yes, but at least one designated partner must be an Indian resident.' },
        ],
    },

    'one-person-company': {
        slug: 'one-person-company',
        title: 'One Person Company (OPC) Registration Online in India',
        subtitle: 'Register your One Person Company (OPC) online in India with full MCA compliance. Your Professional manages DSC, DIN, name approval, and incorporation smoothly.',
        heroFeatures: ['Incorporation in 7–10 Business Days', 'Company Name Approval with MOA & AOA Drafting', 'PAN & TAN Issuance with Incorporation Certificate', 'DIN Allotment for the Company Director', 'DSC Tokens with Complete Support & Shipping'],
        overview: {
            heading: 'What is a One Person Company?',
            paragraphs: [
                'A One Person Company (OPC) is a business structure introduced under the Companies Act, 2013, that allows a single Indian citizen and resident to form a private limited company. It gives the sole owner full control to make decisions with limited liability, separate legal status, and perpetual succession.',
                'The sole owner of the OPC acts as both shareholder and director, with a nominee appointed for succession. OPCs must appoint a nominee to take over in case the owner is incapacitated or dies. An OPC business model combines the simplicity of a sole proprietorship with limited liability.',
                'With minimal compliance, no fixed capital requirement, and professional credibility, an OPC registration supports growth for new founders. OPC can also be converted into a private or public company if financial thresholds are exceeded.',
            ],
            highlights: [
                { icon: '👤', text: 'Single member ownership — both shareholder and director' },
                { icon: '⚖️', text: 'Separate legal entity under Companies Act, 2013' },
                { icon: '🛡️', text: 'Limited liability — personal assets protected from business debts' },
                { icon: '♾️', text: 'Perpetual succession — nominee steps in automatically' },
                { icon: '📋', text: 'Restricted share transfer — sole member holds complete ownership' },
            ],
        },
        eligibility: [
            'Only one person (natural person, Indian citizen, and resident) can form an OPC.',
            'The sole member must have stayed in India for at least 182 days in the preceding financial year.',
            'A nominee must be appointed at the time of registration to take over in case the sole member can no longer manage the company.',
            'A person cannot form more than one OPC or be a nominee in more than one OPC.',
            'Must have a registered office address in India.',
            'No minimum capital requirement.',
            'NRIs and foreign nationals are now eligible to form an OPC (after Companies (Incorporation) Amendment Rules, 2021).',
        ],
        documents: [
            { category: 'For Member/Director', items: ['PAN Card and Aadhaar Card (Identity proof)', 'Recent passport-sized photographs', 'Government-issued ID (Passport, Driving License, or Voter ID)', 'Proof of residence (Recent utility bills, bank statements)', 'Digital Signature Certificate (DSC)'] },
            { category: 'For Nominee', items: ['PAN Card and Aadhaar Card', 'Recent photographs', 'Signed consent letter to act as a nominee (Form INC-3)', 'Identity and address proof documents'] },
            { category: 'For Registered Office', items: ['Proof of ownership or rental agreement', 'No-objection certificate (NOC) from the property owner if rented', 'Recent utility bills showing the address'] },
            { category: 'Additional Requirements', items: ['Director Identification Number (DIN) — obtained during registration', 'Declaration of intended business activities', 'Memorandum of Association (MOA)', 'Articles of Association (AOA)'] },
        ],
        process: [
            { title: 'Name Reservation', desc: 'Pick about six unique name options that represent your business well. Check availability on the MCA portal. Your name must end with "(OPC) Private Limited".', time: '1–3 days' },
            { title: 'Obtain DSC and DIN', desc: 'Apply for a Digital Signature Certificate (DSC) through authorized agencies. Submit your ID and address proofs. Then apply for a Director Identification Number (DIN).', time: '1–2 days' },
            { title: 'Prepare and File Incorporation Documents', desc: 'Draft your Memorandum of Association (MOA) and Articles of Association (AOA). Fill out Form INC-9 (director declaration) and Form INC-3 (nominee consent). Submit through SPICe+ form on MCA website.', time: '' },
            { title: 'Pay Registration Fees', desc: 'Calculate the government fee based on your capital. Add state stamp duty according to local rules. Include professional fees if using registration services.', time: '' },
            { title: 'Verification and Certificate Issuance', desc: 'The Registrar of Companies checks all documents for compliance with the law. If everything is good, they issue your Certificate of Incorporation with a unique Corporate Identity Number (CIN).', time: '' },
            { title: 'Post-Registration Setup', desc: 'Get company seals and letterheads. Open a business bank account using your incorporation certificate. Apply for PAN, TAN, and GST registrations for tax purposes.', time: '15–25 days total' },
        ],
        fees: [
            { item: 'Government Filing Fees', cost: '₹1,000 and above (depends on authorized capital)' },
            { item: 'Digital Signature Certificate (DSC)', cost: '₹1,000 – ₹2,000' },
            { item: 'Director Identification Number (DIN)', cost: '₹500 per DIN' },
            { item: 'Professional/Consultancy Fees', cost: '₹5,000 – ₹15,000 (varies)' },
            { item: 'Stamp Duty', cost: 'Varies by state' },
        ],
        advantages: [
            { icon: '👤', title: 'Complete Control with Legal Protection', desc: 'The sole owner has full control over decisions while enjoying limited liability protection, reducing personal financial risk.' },
            { icon: '📋', title: 'Simplified Compliance', desc: 'OPCs have fewer regulatory requirements and annual compliance obligations compared to private limited companies, reducing administrative hassle and costs.' },
            { icon: '♾️', title: 'Continuity and Stability', desc: 'Perpetual succession ensures the company\'s uninterrupted existence, which builds trust with customers and investors.' },
            { icon: '🏦', title: 'Easier Access to Funding', desc: 'OPCs can raise capital through loans or investments, providing better opportunities to grow compared to sole proprietorships.' },
            { icon: '⭐', title: 'Credibility and Trust', desc: 'Being a registered company enhances the business\'s credibility with clients, vendors, and financial institutions.' },
            { icon: '💰', title: 'Tax Advantages', desc: 'OPCs often benefit from corporate tax rates and can avail certain government incentives and subsidies meant for registered companies.' },
        ],
        faqs: [
            { q: 'What is One Person Company (OPC) registration?', a: 'OPC registration is the process by which a single individual can incorporate a private limited company with limited liability and a separate legal identity. The OPC structure combines the benefits of sole proprietorship with the features of a corporate entity.' },
            { q: 'Who is eligible to be a member of an OPC?', a: 'Any natural person who is an Indian citizen and resident (stayed 182+ days in India in the preceding financial year). NRIs are also eligible after the 2021 amendment.' },
            { q: 'What documents are required for OPC registration?', a: 'PAN, Aadhaar, passport-sized photos, address proof, DSC, nominee consent (Form INC-3), registered office proof (utility bill + NOC if rented), and MoA/AoA.' },
            { q: 'Who cannot form an OPC?', a: 'Minors, persons with unsound mind, persons already owning an OPC or acting as a nominee in another OPC cannot form an OPC.' },
            { q: 'What is the role of a nominee in an OPC?', a: 'The nominee becomes the sole member in case of death or incapacity of the original member, ensuring business continuity. A nominee must be appointed at the time of registration.' },
            { q: 'What are the post-incorporation formalities for an OPC?', a: 'File annual returns and financial statements with MCA, hold at least two board meetings per year (90 days gap), appoint an auditor within 30 days, file income tax returns, and register for GST if applicable.' },
            { q: 'Can an NRI form an OPC in India?', a: 'Yes. After the Companies (Incorporation) Amendment Rules, 2021, NRIs and foreign nationals are eligible to form an OPC in India.' },
            { q: 'How many OPCs can one person form?', a: 'Only one. A person cannot incorporate more than one OPC or be a nominee in more than one OPC at the same time.' },
            { q: 'What is the minimum capital requirement?', a: 'There is no minimum capital requirement for OPC registration. You can start with any amount of authorized share capital.' },
            { q: 'Can an OPC have multiple directors?', a: 'Yes. While an OPC has only one member (shareholder), it can appoint up to 15 directors to manage the company.' },
            { q: 'How long does it take to register an OPC?', a: 'Approximately 15 to 25 days, depending on document preparation and government processing speed.' },
            { q: 'When must an OPC convert to a Private Limited Company?', a: 'Mandatory conversion when paid-up capital exceeds ₹50 lakh or average annual turnover exceeds ₹2 crore for three consecutive years.' },
            { q: 'Is GST registration mandatory after OPC registration?', a: 'GST registration is mandatory if turnover exceeds the threshold or if the company is involved in inter-state supply or e-commerce.' },
            { q: 'Can an OPC issue shares to the public?', a: 'No. An OPC cannot issue shares to the public or invite the public to subscribe for its securities.' },
            { q: 'How can I close my OPC if I no longer wish to operate it?', a: 'You can apply for voluntary strike-off under Section 248 of the Companies Act, 2013, or initiate winding up proceedings through the NCLT.' },
        ],
    },

    'public-limited-company-registration': {
        slug: 'public-limited-company-registration',
        title: 'Public Limited Company Registration Online in India',
        subtitle: 'Register your Public Limited Company and raise capital from the public with expert guidance on MCA compliance.',
        heroFeatures: ['Public Company Registration Support', 'Minimum 3 Directors & 7 Shareholders', 'PAN, TAN & CIN Included', 'IPO & Capital Market Ready Structure', 'End-to-End Compliance Assistance'],
        overview: {
            heading: 'What is a Public Limited Company?',
            paragraphs: [
                'A Public Limited Company is a business entity governed by the Companies Act, 2013, that can offer its shares to the general public. It provides limited liability to shareholders and can raise capital by listing on stock exchanges.',
                'Public companies must have a minimum of 3 directors and 7 shareholders, with no maximum limit on shareholders. They are subject to stricter compliance requirements than private companies.',
                'This structure is ideal for large businesses, corporations, and companies planning to go public through an IPO.',
            ],
            highlights: [
                { icon: '🏛️', text: 'Can raise capital from the public through share issuance' },
                { icon: '👥', text: 'Minimum 3 directors and 7 shareholders required' },
                { icon: '📈', text: 'Can be listed on stock exchanges (BSE, NSE)' },
                { icon: '🛡️', text: 'Limited liability for all shareholders' },
                { icon: '💰', text: 'Minimum authorized capital of ₹5 lakh' },
            ],
        },
        eligibility: ['Minimum 3 directors required.', 'Minimum 7 shareholders; no maximum limit.', 'At least one director must be an Indian resident.', 'Minimum authorized capital of ₹5 lakh.', 'Must have a registered office in India.', 'Company name must end with "Limited".', 'DIN and DSC required for all directors.'],
        documents: [
            { category: 'For Directors & Shareholders', items: ['PAN Card', 'Aadhaar Card', 'Passport-sized photographs', 'Address proof (not older than 2 months)', 'DIN & DSC for each director'] },
            { category: 'Company Documents', items: ['MoA & AoA', 'Proposed company name', 'Business activity description', 'Capital structure details', 'Consent of directors (DIR-2)', 'Declaration from subscribers (INC-9)'] },
            { category: 'Registered Office', items: ['Utility bill (not older than 2 months)', 'NOC from property owner', 'Rent/lease agreement'] },
        ],
        process: [
            { title: 'Obtain DSC & DIN', desc: 'All proposed directors must obtain Digital Signature Certificates and Director Identification Numbers.', time: '1–2 days' },
            { title: 'Reserve Company Name', desc: 'Apply through RUN service on MCA portal. Name must end with "Limited".', time: '1–2 days' },
            { title: 'Draft MoA & AoA', desc: 'Prepare incorporation documents with clear business objectives.', time: '' },
            { title: 'File SPICe+ Form', desc: 'Submit SPICe+ with all documents and pay government fees.', time: '' },
            { title: 'Receive Certificate of Incorporation', desc: 'ROC issues COI with CIN, PAN, and TAN after verification.', time: '15–20 days total' },
        ],
        fees: [
            { item: 'Government Fees', cost: '₹10,000 – ₹50,000+' },
            { item: 'Stamp Duty', cost: 'Varies by state & capital' },
            { item: 'DSC per Director', cost: '₹2,500' },
            { item: 'Professional Charges', cost: '₹15,000 onwards' },
        ],
        advantages: [
            { icon: '💰', title: 'Raise Capital from Public', desc: 'Can issue shares to the general public and list on stock exchanges.' },
            { icon: '🛡️', title: 'Limited Liability', desc: 'Shareholders are only liable up to their shareholding amount.' },
            { icon: '⭐', title: 'High Credibility', desc: 'Public companies enjoy greater trust from customers, investors, and government bodies.' },
            { icon: '📈', title: 'Easy Share Transfer', desc: 'Shares can be freely traded on stock exchanges.' },
            { icon: '♾️', title: 'Perpetual Succession', desc: 'Company continues to exist regardless of changes in membership.' },
            { icon: '🌍', title: 'Global Opportunities', desc: 'Easier access to international markets and foreign investment.' },
        ],
        faqs: [
            { q: 'What is the minimum capital for a Public Limited Company?', a: 'Minimum authorized share capital is ₹5 lakh.' },
            { q: 'Can a Private Company convert to a Public Company?', a: 'Yes, by passing a special resolution, altering the AoA, and filing with ROC.' },
            { q: 'Is it mandatory to list on a stock exchange?', a: 'No. A public company can choose not to list. It becomes a "listed company" only when it applies for and gets approved for listing.' },
            { q: 'What are the compliance requirements?', a: 'Stricter requirements including mandatory audit, quarterly board meetings, AGM, statutory filing with ROC, SEBI compliance (if listed).' },
            { q: 'Can foreign nationals be directors?', a: 'Yes, but at least one director must be an Indian resident.' },
        ],
    },

    'partnership-firm-registration': {
        slug: 'partnership-firm-registration',
        title: 'Partnership Firm Registration Online in India',
        subtitle: 'Launch your business with a legally registered partnership firm — get expert help for drafting agreements and filing paperwork efficiently.',
        heroFeatures: ['Partnership Deed Drafting', 'PAN & TAN Registration', 'Professional Legal Assistance', 'Fast Registration Process', 'Trusted by 20,000+ Firms'],
        overview: {
            heading: 'What is Partnership Firm Registration?',
            paragraphs: [
                'Partnership firm registration is the legal process of establishing a business partnership under the Indian Partnership Act, 1932, with the Registrar of Firms. You need a minimum of two partners with no upper limit and zero minimum capital investment.',
                'After you register a partnership firm, your business gains official legal status and benefits like partner protection, easier loan approvals, improved market reputation, and you operate with complete legal authority.',
                'The firm registration process covers different categories of partnerships: General Partnership (all partners share equal responsibility), Limited Liability Partnership (LLP — limited liability protection), and Limited Partnership (some partners have limited liability while others have unlimited).',
                'Partnership firm registration in India is mainly governed by the Indian Partnership Act, 1932, Income Tax Act, 1961, GST Laws, and Indian Contract Act, 1872. Key regulatory authorities include the Registrar of Firms (RoF), Income Tax Department, GST Department, and Local Municipal Authorities.',
            ],
            highlights: [
                { icon: '👥', text: 'Minimum 2 partners required; maximum 50' },
                { icon: '🤝', text: 'Shared control — every partner can make business decisions' },
                { icon: '📊', text: 'Profit and loss sharing as per agreed ratio' },
                { icon: '⚠️', text: 'Partners have unlimited personal liability' },
                { icon: '📝', text: 'Partnership deed defines all rights and duties' },
                { icon: '🤝', text: 'Partners join willingly and can end partnership by mutual agreement' },
            ],
        },
        eligibility: [
            'Include at least two partners: A minimum of 2 individuals must come together to form a partnership firm.',
            'Limit the number of partners to 50: The law allows up to 50 partners in a partnership firm.',
            'Prepare a written partnership agreement: You must draft and sign a partnership deed that clearly defines profit sharing, roles, and responsibilities.',
            'Set a lawful business objective: Your business must have a legal purpose and operate in compliance with Indian laws.',
            'Ensure only individuals act as partners: Only natural persons, not companies or legal entities, can become partners in a traditional partnership firm.',
            'Confirm all partners are adults: Every partner must be at least 18 years old and legally capable of entering into a contract.',
            'Submit valid identity and address proof: Each partner must provide government-issued ID and current address documentation.',
            'Avoid disqualified individuals: You must not include anyone declared insolvent, mentally unfit, or legally disqualified from managing a business.',
        ],
        documents: [
            { category: 'Essential Documents', items: ['Partnership Deed: Draft a comprehensive partnership agreement outlining terms, roles, and responsibilities', 'PAN Cards of all partners (self-attested copies)', 'Residential Address Proof: Aadhaar card, voter ID, or passport for each partner', 'Business Address Proof: Documents verifying the firm\'s registered office address', 'Recent passport-size photographs of all partners'] },
            { category: 'Additional Documents (if applicable)', items: ['Rent Agreement (if operating from rented premises)', 'NOC from Landlord granting permission to use the space for business', 'Latest utility bills (electricity or water) for business premises', 'Recent bank statements of all partners as proof of financial identity'] },
            { category: 'Partnership Deed Must Include', items: ['Full names and current addresses of all partners', 'Nature and scope of the business', 'Capital contribution made by each partner', 'Agreed profit and loss sharing ratio', 'Defined roles, rights, and duties of every partner'] },
        ],
        process: [
            { title: 'Choose a Name for Your Partnership Firm', desc: 'Pick a unique and relevant name that reflects your business activities, doesn\'t match existing registered firms, and avoids misleading or restricted words. Prepare 2–3 alternative names.', time: '' },
            { title: 'Draft the Partnership Deed', desc: 'Prepare a detailed Partnership Deed covering names, addresses, business scope, capital contribution, profit/loss sharing ratio, duties, and partner exit rules. Sign on non-judicial stamp paper and notarize.', time: '' },
            { title: 'Obtain a PAN Card for the Firm', desc: 'Apply for a Permanent Account Number (PAN) in the firm\'s name via the NSDL or UTIITSL website. Required for tax purposes and opening a bank account.', time: '5–7 days' },
            { title: 'Fill Out Application for Registration (Form No. 1)', desc: 'Obtain Form No. 1 from the Registrar of Firms (RoF) website. Provide firm name, business nature, location, partner names, addresses, and joining dates. All partners must sign.', time: '' },
            { title: 'Submit Documents to Registrar of Firms', desc: 'Submit original Partnership Deed, registration fee, firm PAN copy, address proof, PAN/Aadhaar of all partners, and an affidavit declaring accuracy of details.', time: '' },
            { title: 'Receive Your Registration Certificate', desc: 'After verification, the Registrar of Firms issues a Certificate of Registration with a unique firm number — your legal proof of registration.', time: '7–14 days' },
            { title: 'Open a Current Bank Account', desc: 'Open a current account in the firm\'s name using the Registration Certificate and PAN card to manage finances.', time: '' },
        ],
        fees: [
            { item: 'Partnership Deed Stamp Duty', cost: '₹200 – ₹2,000 (varies by state)' },
            { item: 'Registration Fees', cost: '₹200 – ₹1,000 (varies by state)' },
            { item: 'Name Search and Reservation', cost: '₹100 – ₹500' },
            { item: 'Partnership Deed Drafting', cost: '₹3,000 – ₹8,000' },
            { item: 'Legal Consultation', cost: '₹2,000 – ₹5,000' },
            { item: 'Registration Assistance', cost: '₹5,000 – ₹15,000' },
            { item: 'PAN Card Application', cost: '₹110 (online) / ₹225 (physical)' },
            { item: 'TAN Registration', cost: 'Free online' },
        ],
        advantages: [
            { icon: '⚖️', title: 'Legal Recognition & Protection', desc: 'Your partnership gains formal recognition, enabling partners to sue third parties and enforce business contracts. Provides legal proof of partnership existence.' },
            { icon: '⭐', title: 'Enhanced Credibility & Trust', desc: 'Registered status demonstrates commitment to formal business practices. Suppliers and service providers prefer dealing with registered entities.' },
            { icon: '🏦', title: 'Financial Advantages', desc: 'Banks readily open current accounts and provide business loans to registered partnerships. Financial institutions offer better credit terms and higher limits.' },
            { icon: '🤝', title: 'Operational Benefits', desc: 'Clear partnership deed terms help settle internal conflicts. Registration facilitates branch openings, franchise operations, and geographic expansion.' },
            { icon: '💰', title: 'Tax Benefits', desc: 'Partners can claim legitimate business expenses and reduce overall tax liability. Registered partnerships qualify for various MSME benefits and subsidies.' },
            { icon: '♾️', title: 'Succession Planning', desc: 'Formal partnership terms outline succession procedures and asset distribution. Registration simplifies partner entry, exit, and ownership transfer.' },
        ],
        faqs: [
            { q: 'How to find the registration number of a partnership firm?', a: 'You can find the registration number on the Partnership Registration Certificate issued by the Registrar of Firms. Alternatively, contact the Registrar of Firms in your state and provide the firm\'s name and relevant details.' },
            { q: 'Is registration of a partnership firm compulsory?', a: 'No, registration is optional under the Indian Partnership Act, 1932. However, unregistered firms lose the right to sue third parties for business disputes and face legal limitations.' },
            { q: 'What are the documents required for partnership firm registration?', a: 'Partnership Deed on stamp paper, PAN cards and address proofs of all partners, business address proof, photographs, and an affidavit.' },
            { q: 'How much time does it take to register a partnership firm in India?', a: 'Typically 7–14 working days after submission of all documents, though timelines vary by state.' },
            { q: 'What is the minimum capital for a partnership firm?', a: 'There is no minimum capital requirement. Partners can start with any agreed amount of capital contribution.' },
            { q: 'Is a partnership firm a separate legal entity?', a: 'No. Unlike companies and LLPs, a partnership firm is not a separate legal entity from its partners under Indian law. Partners are personally liable.' },
            { q: 'What is a Partnership Deed?', a: 'A legal document defining the terms of partnership — profit sharing ratio, roles, capital contribution, dispute resolution, and partner exit rules. It must be signed on stamp paper and notarized.' },
            { q: 'How many partners are required to start a partnership firm?', a: 'A minimum of 2 partners are required, with a maximum limit of 50 partners.' },
            { q: 'Can an NRI be a partner?', a: 'Yes, NRIs can be partners in an Indian partnership firm, subject to FEMA regulations and approval.' },
            { q: 'Can a partnership be converted to LLP or Pvt Ltd?', a: 'Yes. Partnerships can be converted to LLP or Private Limited Company by following the prescribed legal procedure.' },
            { q: 'What is the cost of partnership registration in India?', a: 'Total costs range from ₹5,000 to ₹15,000 including stamp duty, registration fees, deed drafting, and professional charges, varying by state.' },
            { q: 'How is a partnership firm taxed?', a: 'Profits are taxed at a flat 30% rate at the firm level plus surcharge and cess. Partners\' share of profit is exempt from personal income tax.' },
        ],
    },

    'sole-proprietorship-registration': {
        slug: 'sole-proprietorship-registration',
        title: 'Sole Proprietorship Registration Online in India',
        subtitle: 'Start your business with the simplest structure. One owner, full control, minimal compliance.',
        heroFeatures: ['Fastest Business Setup', 'GST & MSME Registration', 'Business Bank Account Assistance', 'Shop Act License Support', 'Dedicated Expert Guidance'],
        overview: {
            heading: 'What is a Sole Proprietorship?',
            paragraphs: [
                'A Sole Proprietorship is the simplest and most common form of business in India. It is owned and managed by a single individual, with no legal distinction between the owner and the business.',
                'There is no separate registration for a sole proprietorship with the MCA. Instead, it is established through various tax registrations like GST, MSME (Udyam), Shop & Establishment Act, or FSSAI.',
                'This structure is ideal for freelancers, traders, small shop owners, and professionals who want minimal compliance and full control.',
            ],
            highlights: [
                { icon: '👤', text: 'Single owner with full control' },
                { icon: '⚡', text: 'Easiest and fastest to set up' },
                { icon: '📋', text: 'Minimal regulatory compliance' },
                { icon: '💰', text: 'No minimum capital requirement' },
                { icon: '⚠️', text: 'Unlimited personal liability' },
            ],
        },
        eligibility: ['Any Indian citizen above 18 years of age.', 'Must be of sound mind and competent to contract.', 'A valid PAN card is mandatory.', 'Business address proof required.', 'No minimum capital requirement.', 'Applicable licenses based on business type (GST, FSSAI, Shop Act).'],
        documents: [
            { category: 'For the Proprietor', items: ['PAN Card', 'Aadhaar Card', 'Passport-sized photograph', 'Bank account details', 'Email ID & mobile number'] },
            { category: 'Business Documents', items: ['Proof of business address (rent agreement or utility bill)', 'Shop & Establishment License (if applicable)', 'GST Registration Certificate (if applicable)', 'MSME/Udyam Registration (optional but beneficial)'] },
        ],
        process: [
            { title: 'Choose Business Name', desc: 'Select a unique business name. It can be your own name or a trade name.', time: '' },
            { title: 'Open Business Bank Account', desc: 'Open a current account in the business name using your PAN and address proof.', time: '1–3 days' },
            { title: 'Register under Shop & Establishment Act', desc: 'Apply for the license from your local municipal authority.', time: '5–7 days' },
            { title: 'Apply for GST Registration', desc: 'Mandatory if turnover exceeds threshold or for inter-state supply.', time: '3–5 days' },
            { title: 'Get MSME/Udyam Registration', desc: 'Register on the Udyam portal for government benefits and priority lending.', time: '1 day (instant)' },
            { title: 'Obtain Other Licenses', desc: 'FSSAI (food business), Import Export Code (IEC), or other sector-specific licenses as needed.', time: 'Varies' },
        ],
        fees: [
            { item: 'Shop & Establishment License', cost: '₹500 – ₹5,000 (varies by state)' },
            { item: 'GST Registration', cost: 'Free (government) + professional charges' },
            { item: 'MSME/Udyam Registration', cost: 'Free' },
            { item: 'Professional Charges', cost: '₹1,500 onwards' },
            { item: 'Current Account Opening', cost: 'Varies by bank' },
        ],
        advantages: [
            { icon: '⚡', title: 'Easiest to Start', desc: 'No formal incorporation process. Just get the necessary licenses and start.' },
            { icon: '👤', title: 'Full Control', desc: 'The owner has complete authority over all business decisions.' },
            { icon: '📋', title: 'Minimal Compliance', desc: 'Only basic tax filing and license renewals required.' },
            { icon: '💰', title: 'Direct Tax Filing', desc: 'Income taxed as personal income — simple ITR filing.' },
            { icon: '🔒', title: 'Privacy', desc: 'No public disclosure of financial information.' },
            { icon: '🏛️', title: 'Government Benefits', desc: 'Eligible for MSME benefits, Mudra loans, and other schemes.' },
        ],
        faqs: [
            { q: 'What is the legal status of a sole proprietorship?', a: 'A sole proprietorship has no separate legal entity from its owner. The owner is personally liable for all debts and obligations.' },
            { q: 'Is GST registration mandatory?', a: 'Only if turnover exceeds ₹20 lakh (₹10 lakh for NE states) or for inter-state supply/e-commerce.' },
            { q: 'Can a sole proprietorship have employees?', a: 'Yes. A sole proprietor can hire any number of employees.' },
            { q: 'Can it be converted to a company later?', a: 'Yes. A sole proprietorship can be converted to a Private Limited Company or LLP.' },
            { q: 'How is a sole proprietorship taxed?', a: 'Income is taxed under the proprietor\'s personal income tax slab rates.' },
            { q: 'Is there any registration required with MCA?', a: 'No. Sole proprietorships are not registered with MCA. They are identified through GST, MSME, or Shop Act registrations.' },
        ],
    },

    'startup-india-registration': {
        slug: 'startup-india-registration',
        title: 'Startup India Registration Online',
        subtitle: 'Get recognized under the Startup India initiative. Enjoy tax benefits, funding access, and compliance relaxations.',
        heroFeatures: ['DPIIT Recognition Certificate', 'Tax Exemption under Section 80-IAC', 'Easy Access to Government Funds', 'Fast-track Patent & Trademark Filing', 'Self-certification for Labour & Environmental Laws'],
        overview: {
            heading: 'What is Startup India Registration?',
            paragraphs: [
                'Startup India is a flagship initiative launched by the Government of India to promote innovation-driven businesses. Startups that complete registration under this scheme receive recognition from the Department for Promotion of Industry and Internal Trade (DPIIT).',
                'DPIIT-recognized startups enjoy tax exemptions for up to 3 years, easier access to funding, fast-track IP registration, self-certification for compliance, and access to government tenders.',
                'To qualify, the entity must be incorporated as a Private Limited Company, LLP, or Partnership Firm, be less than 10 years old, and have an annual turnover below ₹100 crore.',
            ],
            highlights: [
                { icon: '🇮🇳', text: 'Government of India initiative' },
                { icon: '💰', text: 'Tax exemption under Section 80-IAC for 3 years' },
                { icon: '🚀', text: 'Access to Startup India Seed Fund and Fund of Funds' },
                { icon: '⚡', text: 'Fast-track patent filing at 80% rebate' },
                { icon: '📋', text: 'Self-certification under labour & environmental laws' },
            ],
        },
        eligibility: ['Entity must be a Pvt Ltd Company, LLP, or Registered Partnership Firm.', 'Must be less than 10 years old from the date of incorporation.', 'Annual turnover must not exceed ₹100 crore in any financial year.', 'Must be working towards innovation or improvement of existing products/services.', 'Must not have been formed by splitting/restructuring an existing business.', 'Must be incorporated or registered in India.'],
        documents: [
            { category: 'Required Documents', items: ['Certificate of Incorporation / Registration', 'Brief description of the innovation or business idea', 'Proof of concept, prototype, or revenue details', 'PAN of the entity', 'Aadhaar of the authorized person', 'Awards/recognitions (if any)', 'Patent/trademark details (if any)'] },
        ],
        process: [
            { title: 'Incorporate Your Business', desc: 'Register as a Pvt Ltd Company, LLP, or Partnership Firm first.', time: '' },
            { title: 'Register on Startup India Portal', desc: 'Create an account at startupindia.gov.in.', time: '' },
            { title: 'Fill Recognition Application', desc: 'Submit entity details, innovation details, and supporting documents.', time: '' },
            { title: 'Get DPIIT Recognition', desc: 'DPIIT reviews and issues the Recognition Certificate.', time: '2–5 working days' },
            { title: 'Apply for Tax Exemption (Optional)', desc: 'Apply to Inter-Ministerial Board for tax exemption under Section 80-IAC.', time: '30–60 days' },
        ],
        fees: [
            { item: 'Startup India Recognition', cost: 'Free' },
            { item: 'Professional Assistance', cost: '₹2,000 onwards' },
            { item: 'Tax Exemption Filing', cost: 'Additional charges may apply' },
        ],
        advantages: [
            { icon: '💰', title: 'Tax Exemption', desc: '100% income tax exemption for 3 consecutive years out of the first 10 years under Section 80-IAC.' },
            { icon: '🏦', title: 'Funding Access', desc: 'Access to Startup India Seed Fund, Fund of Funds, and credit guarantee schemes.' },
            { icon: '⚡', title: 'Fast-track IP Filing', desc: '80% rebate on patent filing fees and fast-track trademark processing.' },
            { icon: '📋', title: 'Self-Certification', desc: 'Compliance ease under 9 labour and 3 environmental laws for 5 years.' },
            { icon: '🏛️', title: 'Government Tenders', desc: 'Relaxation in prior experience/turnover criteria for government procurement.' },
            { icon: '🌐', title: 'Networking', desc: 'Access to incubators, accelerators, and the Startup India Hub for mentorship.' },
        ],
        faqs: [
            { q: 'Is Startup India registration free?', a: 'Yes. DPIIT recognition is completely free of charge.' },
            { q: 'Can an existing business apply?', a: 'Yes, if it meets the eligibility criteria — less than 10 years old, turnover under ₹100 crore, and working towards innovation.' },
            { q: 'What type of entities can apply?', a: 'Private Limited Companies, LLPs, and Registered Partnership Firms.' },
            { q: 'What is DPIIT recognition?', a: 'It is the official recognition by the Department for Promotion of Industry and Internal Trade, which unlocks all Startup India benefits.' },
            { q: 'Is the tax exemption automatic?', a: 'No. DPIIT recognition is step one. Tax exemption requires a separate application to the Inter-Ministerial Board.' },
        ],
    },

    'ngo-registration': {
        slug: 'ngo-registration',
        title: 'NGO Registration Online in India',
        subtitle: 'Registering your NGO ensures legal status, funding access, and tax benefits. Build credibility and operate seamlessly with expert help for a smooth, compliant registration process.',
        heroFeatures: ['Draft Trust Deed or MOA/AOA', 'File Documents with Relevant Authorities', 'Get Expert Legal and Compliance Help', 'Assistance with 12A and 80G', 'Trusted by Over 8,000 NGOs'],
        overview: {
            heading: 'What is NGO Registration?',
            paragraphs: [
                'NGO Registration is the formal process of legally establishing a non-profit entity in India to operate for charitable, social, educational, or cultural purposes. An NGO can be registered as a Trust, Society, or Section 8 Company, each governed by different laws.',
                'Registration gives the NGO a legal identity, allowing it to operate officially, open bank accounts, apply for grants, and enter into contracts. It enhances credibility, ensures compliance with government regulations, and makes the organization eligible for tax exemptions under Sections 12A and 80G of the Income Tax Act.',
                'It also improves access to domestic and international funding, including CSR contributions, while promoting transparency and public trust.',
            ],
            highlights: [
                { icon: '❤️', text: 'Non-profit entity for social, educational, or charitable purposes' },
                { icon: '📋', text: 'Register as Trust, Society, or Section 8 Company' },
                { icon: '💰', text: '12A & 80G tax exemption available' },
                { icon: '🌍', text: 'FCRA registration for foreign donations' },
                { icon: '⚖️', text: 'Legal recognition and enhanced credibility' },
            ],
        },
        eligibility: [
            'Trusts require a minimum of 2 trustees. Societies need at least 7 members. Section 8 Companies require a minimum of 2 directors and shareholders.',
            'All founding members must be adults (18 years or older) with a sound mind and legally capable of entering into contracts.',
            'The organization must have charitable, religious, educational, cultural, scientific, research, social welfare, or environmental protection objectives.',
            'The organization must not distribute profits or dividends to its members, with all income applied solely toward its objectives.',
            'A properly drafted trust deed, memorandum of association, or articles of association outlining the organization\'s objectives and governance structure is required.',
            'For FCRA registration, at least 51% of the governing body members must be Indian citizens.',
            'Founding members should not have been convicted of offenses involving moral turpitude or terrorism.',
            'Willingness to maintain proper books of accounts, file annual returns, and comply with all statutory requirements.',
        ],
        documents: [
            { category: 'Identification Documents', items: ['PAN cards of all founding members', 'Aadhaar cards of all founding members', 'Address proof of all founding members (utility bills, rental agreements, etc.)'] },
            { category: 'Organizational Documents', items: ['For Trust: Trust deed on stamp paper', 'For Society: Memorandum of Association and Rules & Regulations', 'For Section 8 Company: Memorandum of Association and Articles of Association'] },
            { category: 'Property Documents', items: ['Proof of registered office address (rent agreement, NOC from the owner)', 'Utility bills for the office premises', 'Property documents if the NGO owns property'] },
            { category: 'Financial Documents', items: ['Bank account details', 'Initial fund proof for the organization', 'Affidavit of funding sources'] },
            { category: 'Meeting Records', items: ['Minutes of the preliminary meeting', 'Resolution for the formation of the organization', 'Election records of governing body members'] },
            { category: 'Activity Plan Documents', items: ['Detailed project proposal outlining planned activities', 'Operational budget for the first year', 'Implementation strategy for charitable objectives'] },
            { category: 'Additional Requirements', items: ['Photographs of all founding members', 'Character certificates (for some states)', 'No Objection Certificate from concerned departments (if required)'] },
        ],
        process: [
            { title: 'Choose the Right Name for Your NGO', desc: 'Select a unique and meaningful name that reflects your NGO\'s objectives. The name should not conflict with existing organizations or violate any trademarks.', time: '' },
            { title: 'Decide the Type of NGO to Register', desc: 'Choose whether to register as a Trust (min 2 members, simplest), Society (min 7 members, democratic), or Section 8 Company (min 2 directors, most credible) based on goals and operational scale.', time: '' },
            { title: 'Prepare Required Documents', desc: 'Gather Trust Deed for Trusts, MoA and Rules for Societies, or MoA and AoA for Section 8 Companies, along with ID proofs, address proofs, and affidavits of members.', time: '' },
            { title: 'Submit Application and Registration Fee', desc: 'Apply to Sub-Registrar (Trust), Registrar of Societies (Society), or Ministry of Corporate Affairs/MCA (Section 8 Company). Pay the applicable government registration fees.', time: '' },
            { title: 'Obtain Certificate of Registration', desc: 'Once approved, receive the Trust Deed Registration Certificate, Society Registration Certificate, or Certificate of Incorporation for Section 8 Company.', time: '15–30 days' },
            { title: 'Apply for PAN and Open a Bank Account', desc: 'Apply for a PAN card in the NGO\'s name and open a bank account to manage finances.', time: '' },
        ],
        fees: [
            { item: 'Trust Registration Fees', cost: '₹3,000 – ₹10,000 (varies by state)' },
            { item: 'Society Registration Fees', cost: '₹2,000 – ₹8,000 (varies by state)' },
            { item: 'Section 8 Company Fees', cost: '₹15,000 – ₹30,000' },
            { item: 'Professional Assistance', cost: '₹8,000 – ₹25,000' },
            { item: 'Documentation Expenses', cost: '₹2,000 – ₹5,000' },
            { item: '12A & 80G Registration', cost: '₹5,000 – ₹15,000' },
            { item: 'FCRA Registration', cost: '₹10,000 (govt) + ₹10,000 – ₹20,000 (professional)' },
            { item: 'Annual Filing Fees', cost: '₹1,000 – ₹5,000' },
        ],
        advantages: [
            { icon: '⚖️', title: 'Legal Recognition', desc: 'Establishes formal status as a legitimate nonprofit entity. Provides legal standing to enter into contracts, own property, and take legal action.' },
            { icon: '💰', title: 'Tax Benefits', desc: 'Exempts the organization from income tax on surpluses under Section 12A. Allows donors to claim tax deductions on contributions under Section 80G.' },
            { icon: '🌍', title: 'FCRA Eligibility', desc: 'Creates the foundation for applying for FCRA registration to receive foreign funding. Expands potential donor base to include international organizations and donors.' },
            { icon: '🏦', title: 'Funding Access', desc: 'Enables receipt of domestic donations and grants from government agencies. Qualifies for CSR funding from corporations under Companies Act provisions.' },
            { icon: '⭐', title: 'Operational Credibility', desc: 'Enhances trust among stakeholders, beneficiaries, and the general public. Demonstrates commitment to transparency and accountability in operations.' },
            { icon: '🤝', title: 'Partnership Opportunities', desc: 'Creates pathways for formal collaborations with government agencies and programs. Enhances the ability to form partnerships with other NGOs and private sector entities.' },
            { icon: '🏛️', title: 'Banking Facilities', desc: 'Enables opening and operating organizational bank accounts with better terms. Facilitates financial transactions under the organization\'s name.' },
            { icon: '♾️', title: 'Perpetual Existence', desc: 'Ensures the organization continues regardless of changes in membership or leadership. Provides institutional stability for long-term social impact.' },
        ],
        faqs: [
            { q: 'Which NGO structure is best for a small charitable initiative?', a: 'Trust is ideal for small initiatives due to its simpler formation, minimal membership requirements (just 2 trustees), and relatively lower compliance burden than other structures.' },
            { q: 'How long does NGO registration take in India?', a: 'Trust registration takes 15–30 days, Society registration takes 15–30 days, and Section 8 Company registration takes 20–30 days, depending on the state and completeness of documents.' },
            { q: 'Can foreigners be founders of an NGO in India?', a: 'Foreigners can be directors in a Section 8 Company, but Trust and Society typically require Indian citizens as founders. For FCRA, at least 51% of the governing body must be Indian citizens.' },
            { q: 'What is the difference between 12A and 80G?', a: '12A exempts the NGO\'s income from tax. 80G allows donors who contribute to the NGO to claim tax deductions. Both require separate registration with the Income Tax Department.' },
            { q: 'Can an NGO engage in commercial activities?', a: 'Yes, but all income must be used for the NGO\'s charitable objectives. Distribution of profits to members is not allowed.' },
            { q: 'Is it mandatory to register an NGO?', a: 'While not legally mandatory in all cases, registration provides significant advantages including legal recognition, tax exemptions, funding access, and enhanced credibility.' },
            { q: 'How much does NGO registration cost?', a: 'Trust registration costs ₹3,000–₹10,000, Society costs ₹2,000–₹8,000, and Section 8 Company costs ₹15,000–₹30,000, plus professional fees.' },
            { q: 'What are the annual compliance requirements for registered NGOs?', a: 'Annual returns filing, maintaining books of accounts, audits, income tax returns, renewal of registrations (state-specific), and board/governing body meetings.' },
            { q: 'Is FCRA registration necessary for all NGOs?', a: 'No. FCRA registration is only required if the NGO wants to receive foreign funding or donations from abroad.' },
            { q: 'What are the different types of NGO registration?', a: 'Trust (governed by Indian Trusts Act, 1882), Society (governed by Societies Registration Act, 1860), and Section 8 Company (governed by Companies Act, 2013).' },
            { q: 'What are the tax benefits for NGOs in India?', a: 'Income exemption under Section 12A, donor tax deductions under Section 80G, and exemption from wealth tax and capital gains tax on assets used for charitable purposes.' },
            { q: 'How to find an NGO registration number?', a: 'Check the registration certificate issued by the relevant authority. You can also verify through the NGO-DARPAN portal or the MCA portal for Section 8 Companies.' },
        ],
    },

    'trust-registration': { slug: 'trust-registration', title: 'Trust Registration Online in India', subtitle: 'Register your Trust for charitable, religious, or educational purposes with expert legal assistance.', heroFeatures: ['Trust Registration in 10–15 Days', 'Trust Deed Drafting by Experts', '12A & 80G Tax Exemption', 'PAN & Bank Account Assistance', 'FCRA Guidance'], overview: { heading: 'What is Trust Registration?', paragraphs: ['A Trust is a legal arrangement where property is held by one party (trustee) for the benefit of another (beneficiary). In India, Trusts are registered under the Indian Trusts Act, 1882, for private trusts, or under the relevant state laws for public/charitable trusts.', 'Trust registration is the simplest way to establish an NGO or charitable organization. It requires a minimum of 2 members — the author/settlor and the trustee.', 'Trusts are ideal for running schools, hospitals, charitable activities, religious institutions, and social welfare programs.'], highlights: [{ icon: '🤲', text: 'Established for charitable, religious, or educational purposes' }, { icon: '👥', text: 'Minimum 2 members (settlor and trustee)' }, { icon: '📝', text: 'Trust Deed is the governing document' }, { icon: '💰', text: 'Tax exemption under 12A and 80G' }, { icon: '⚖️', text: 'Registered under Indian Trusts Act, 1882' }] }, eligibility: ['Minimum 2 members (author/settlor and trustee).', 'Must have a charitable, religious, or educational objective.', 'Must have a registered address.', 'Trust Deed must be executed on stamp paper.', 'Settlor must transfer property or funds to the trust.'], documents: [{ category: 'Required Documents', items: ['Trust Deed on appropriate stamp paper', 'PAN & Aadhaar of all trustees', 'Address proof of registered office', 'Passport-sized photographs of trustees', 'NOC from landlord (if rented)', 'Objects and purposes of the trust'] }], process: [{ title: 'Draft the Trust Deed', desc: 'Prepare a comprehensive Trust Deed with objectives, trustees, property details, and rules on stamp paper.', time: '' }, { title: 'Execute the Deed', desc: 'The author/settlor executes the deed in the presence of 2 witnesses.', time: '' }, { title: 'Register with Sub-Registrar', desc: 'Submit the executed deed to the local Sub-Registrar\'s office for registration.', time: '7–15 days' }, { title: 'Apply for PAN', desc: 'Apply for the trust\'s PAN using Form 49A.', time: '5–7 days' }, { title: 'Apply for 12A & 80G', desc: 'File for tax exemption with the Income Tax Department.', time: '' }], fees: [{ item: 'Stamp Duty on Trust Deed', cost: '₹500 – ₹10,000 (varies by state)' }, { item: 'Sub-Registrar Fee', cost: '₹1,000 – ₹5,000' }, { item: 'Professional Charges', cost: '₹5,000 onwards' }], advantages: [{ icon: '⚡', title: 'Easy Formation', desc: 'Simplest NGO structure — just 2 members and a Trust Deed.' }, { icon: '💰', title: 'Tax Benefits', desc: '12A exempts trust income, 80G allows donors to claim deductions.' }, { icon: '🏛️', title: 'Government Grants', desc: 'Eligible for grants, CSR funding, and foreign donations (with FCRA).' }, { icon: '🤲', title: 'Social Impact', desc: 'Ideal vehicle for charitable and social welfare activities.' }], faqs: [{ q: 'Can a trust be dissolved?', a: 'A trust can be dissolved if all its objectives are fulfilled or by court order. The Trust Deed may specify dissolution conditions.' }, { q: 'What is the validity of trust registration?', a: 'Trust registration is permanent. There is no need for renewal.' }, { q: 'Can a trust do business?', a: 'A charitable trust can undertake business activities if the income is used for charitable purposes.' }] },

    'society-registration': { slug: 'society-registration', title: 'Society Registration Online in India', subtitle: 'Register your Society for promoting literature, science, charity, or any useful purpose with expert assistance.', heroFeatures: ['Society Registration in 15–20 Days', 'MoA & Bylaws Drafting', '12A & 80G Tax Exemption', 'Democratic Governance Structure', 'Complete Compliance Support'], overview: { heading: 'What is Society Registration?', paragraphs: ['A Society is a group of persons coming together for a common purpose — literary, scientific, charitable, or social. Societies are registered under the Societies Registration Act, 1860.', 'A minimum of 7 members are required to form a Society. It is governed democratically with elected office bearers and general body meetings.', 'Society registration is ideal for clubs, cultural organizations, alumni associations, housing associations, and citizen welfare groups.'], highlights: [{ icon: '👥', text: 'Minimum 7 members required' }, { icon: '🗳️', text: 'Democratic governance with elected members' }, { icon: '📋', text: 'Governed by MoA and Rules/Bylaws' }, { icon: '💰', text: 'Eligible for 12A, 80G tax exemption' }, { icon: '⚖️', text: 'Registered under Societies Registration Act, 1860' }] }, eligibility: ['Minimum 7 members required.', 'Members must be Indian citizens.', 'Must have a charitable, literary, scientific, or social objective.', 'Must have a registered address.', 'President and Secretary must be appointed.'], documents: [{ category: 'Required Documents', items: ['MoA of the Society', 'Rules and Bylaws', 'PAN & Aadhaar of all members', 'Address proof of registered office', 'Photographs of members', 'NOC from landlord', 'Minutes of the first general meeting', 'List of governing body/managing committee members'] }], process: [{ title: 'Draft MoA & Bylaws', desc: 'Prepare the Memorandum of Association (objectives) and Rules/Bylaws (governance).', time: '' }, { title: 'Conduct First Meeting', desc: 'Hold the first general body meeting and pass a resolution to register.', time: '' }, { title: 'File Registration Application', desc: 'Submit to the Registrar of Societies in your state with all documents and fees.', time: '' }, { title: 'Receive Registration Certificate', desc: 'After verification, the Registrar issues the certificate.', time: '15–30 days' }, { title: 'Apply for PAN, 12A & 80G', desc: 'Obtain PAN and file for tax exemptions.', time: '' }], fees: [{ item: 'Registration Fee', cost: '₹2,000 – ₹10,000 (varies by state)' }, { item: 'Stamp Duty', cost: 'Varies by state' }, { item: 'Professional Charges', cost: '₹5,000 onwards' }], advantages: [{ icon: '🗳️', title: 'Democratic Management', desc: 'Members have equal voting rights and elect governing body.' }, { icon: '💰', title: 'Tax Benefits', desc: 'Eligible for 12A and 80G exemptions.' }, { icon: '🤝', title: 'Community Building', desc: 'Ideal for organizations with many members and shared goals.' }, { icon: '🏛️', title: 'Government Recognition', desc: 'Registered societies can receive government grants and CSR funds.' }], faqs: [{ q: 'How many members are needed?', a: 'Minimum 7 members for registration.' }, { q: 'Can a society do business?', a: 'Yes, if the profits are used solely for the society\'s objectives and not distributed to members.' }, { q: 'What is the renewal process?', a: 'Many states require annual renewal of society registration. Check your state\'s requirements.' }] },

    'section-8-company-registration': { slug: 'section-8-company-registration', title: 'Section 8 Company Registration Online in India', subtitle: 'Register a non-profit company under Section 8 of the Companies Act for charitable objectives with pan-India operations.', heroFeatures: ['Section 8 Registration with MCA', 'License under Section 8(1)', 'No Minimum Capital Required', '12A & 80G Tax Exemption', 'Pan-India Operations'], overview: { heading: 'What is a Section 8 Company?', paragraphs: ['A Section 8 Company is a non-profit company formed under Section 8 of the Companies Act, 2013, for promoting commerce, art, science, sports, education, research, social welfare, religion, or charity.', 'It is the most credible NGO structure as it is regulated by the MCA and follows corporate governance standards. Unlike Trusts and Societies, it can operate pan-India without separate state registrations.', 'The company name does not include "Private Limited" or "Limited" and profits cannot be distributed among members.'], highlights: [{ icon: '🏛️', text: 'Regulated by MCA under Companies Act, 2013' }, { icon: '🌍', text: 'Pan-India operations without state-level registrations' }, { icon: '💰', text: 'No minimum capital requirement' }, { icon: '⭐', text: 'Highest credibility among NGO structures' }, { icon: '📋', text: 'Company name without "Private Limited" or "Limited"' }] }, eligibility: ['Minimum 2 directors and 2 members for private Section 8; 3 directors and 7 members for public Section 8.', 'Must have a charitable objective — promoting commerce, art, education, etc.', 'Profits must be applied towards the company\'s objects.', 'No dividend or profit distribution to members.', 'License from Central Government under Section 8(1) required.', 'DIN and DSC for all directors.'], documents: [{ category: 'Required Documents', items: ['MoA & AoA', 'PAN & Aadhaar of directors and members', 'DSC & DIN for directors', 'Estimated income & expenditure for 3 years', 'Declaration by directors/subscribers', 'Registered office proof', 'NOC from landlord'] }], process: [{ title: 'Obtain DSC & DIN', desc: 'For all proposed directors.', time: '1–2 days' }, { title: 'Reserve Company Name', desc: 'Apply via RUN/SPICe+ on MCA portal.', time: '1–2 days' }, { title: 'Apply for Section 8 License', desc: 'File Form INC-12 with MCA for obtaining the license.', time: '15–20 days' }, { title: 'File SPICe+ for Incorporation', desc: 'Submit incorporation form after receiving the license.', time: '' }, { title: 'Receive Certificate of Incorporation', desc: 'MCA issues COI without "Private Limited" or "Limited" suffix.', time: '20–30 days total' }], fees: [{ item: 'Government Fees', cost: '₹5,000 – ₹15,000' }, { item: 'DSC per Director', cost: '₹2,500' }, { item: 'Professional Charges', cost: '₹10,000 onwards' }], advantages: [{ icon: '⭐', title: 'Highest Credibility', desc: 'Most trusted NGO structure, regulated by MCA.' }, { icon: '🌍', title: 'Pan-India Operation', desc: 'Operate across India without state-level registrations.' }, { icon: '💰', title: 'Tax Benefits', desc: '12A and 80G exemptions available.' }, { icon: '🏦', title: 'CSR Eligible', desc: 'Preferred recipient of Corporate Social Responsibility funds.' }, { icon: '♾️', title: 'Perpetual Succession', desc: 'Continues to exist regardless of member changes.' }], faqs: [{ q: 'Can a Section 8 Company do business?', a: 'Yes, but all income must be used for the company\'s charitable objectives. No profits can be distributed to members.' }, { q: 'Does it need "Limited" in its name?', a: 'No. Section 8 companies are exempt from using "Private Limited" or "Limited" in their name.' }, { q: 'Can it convert to a for-profit company?', a: 'Yes, but only with approval from the Central Government and NCLT.' }] },

    'virtual-office': {
        slug: 'virtual-office',
        title: 'Virtual Office Address for GST and Company Registration',
        subtitle: 'Get a 100% compliant virtual office address for company and GST registration, ideal for startups and remote businesses. Cut costs, build credibility, and get seamless compliance support.',
        heroFeatures: ['Premium Business Address in Prestigious Locations', 'GST & Company Registration with NOC, Rent & Utility Bill', 'Complete Mail Handling, Forwarding & Reception Support', 'Access to Fully Equipped Meeting & Conference Rooms', 'End-to-End Documentation Support with ROC Assistance'],
        overview: {
            heading: 'What is a Virtual Office?',
            paragraphs: [
                'A Virtual Office is a modern business solution that provides a professional address and essential office services in India, without the cost of a dedicated physical space. It\'s perfect for startups, remote teams, and growing businesses that want to save on rent while maintaining a credible presence.',
                'A virtual office space provides a prime commercial address, professional mail handling, and the documents required for company registration and GST registration. It\'s a smart, flexible, and affordable way to run your business from anywhere, whether you\'re working from home or expanding to a new city.',
                'MCA (Ministry of Corporate Affairs) and GST authorities accept virtual office addresses if supported with valid documentation like NOC, Rent Agreement, and Utility Bill. Virtual offices are particularly beneficial for freelancers, startups, SMEs, remote businesses, e-commerce companies, and professionals like CAs, lawyers, and architects.',
            ],
            highlights: [
                { icon: '📍', text: 'Professional business address in prime commercial locations' },
                { icon: '📬', text: 'Mail handling, sorting, forwarding, and scanning services' },
                { icon: '📞', text: 'Telephone answering services with local business number' },
                { icon: '🏢', text: 'On-demand meeting room and conference hall access' },
                { icon: '💰', text: 'Most cost-effective — setup in 24–48 hours' },
                { icon: '✅', text: 'Accepted for MCA company registration and GST compliance' },
            ],
        },
        eligibility: [
            'Any business entity — startups, freelancers, SMEs, remote businesses, e-commerce companies, and professionals can use a virtual office.',
            'Foreign companies entering India can use virtual offices to establish a presence before setting up a subsidiary.',
            'MCA and GST authorities accept virtual office addresses if supported with valid documentation (NOC, Rent Agreement, Utility Bill).',
            'GST registration plans need a state-specific virtual office address since GST is state-wise. Multiple addresses may be needed for multi-state operations.',
            'The virtual office provider must offer compliant documentation for legal and official purposes.',
            'Every company must display its registered office address on its signboard outside the premises as per MCA rules.',
        ],
        documents: [
            { category: 'From Virtual Office Provider', items: ['No Objection Certificate (NOC) from property owner permitting use for business registration', 'Lease/Rental Agreement between the business and the virtual office provider', 'Utility Bill (electricity, water, or telephone — not older than 2 months)', 'Property Tax Receipt for further legitimacy evidence', 'Registration documents of the virtual office provider (some authorities may require)'] },
            { category: 'From the Business/Applicant', items: ['Identity Proof of Directors/Proprietor (PAN, Aadhaar, Passport, Voter ID)', 'Address Proof of Directors/Shareholders', 'PAN Card of the Company', 'Business Proof / Certificate of Incorporation / Partnership Deed / Proprietorship Certificate', 'Digital Signature Certificate (DSC) for electronic filing', 'Memorandum of Association (MOA) and Articles of Association (AOA) for company registration', 'LLP Agreement for LLP registration', 'Bank statement or cancelled cheque', 'GSTIN (if already registered for GST)'] },
        ],
        process: [
            { title: 'Define Your Business Plan', desc: 'Determine your business model, target audience, and how you\'ll manage operations virtually before selecting a virtual office.', time: '' },
            { title: 'Choose a Reliable Virtual Office Provider', desc: 'Research providers based on location, track record, service offerings, compliance documentation, cost, technology, and customer support. Ensure they can support ROC inspections.', time: '' },
            { title: 'Sign Up and Complete Documentation (KYC)', desc: 'Submit identity and address proof for directors/signatories. Sign the service agreement after understanding all terms and conditions. Many providers offer digital KYC for faster onboarding.', time: '' },
            { title: 'Establish Virtual Business Address & Phone System', desc: 'Activate local business address for legal representation and set up a business phone number with professional call answering services.', time: '24–48 hours' },
            { title: 'Get Email Address and Domain Name', desc: 'Set up a custom email address with your company\'s domain and register a domain name for your website. MCA requires the registered office to be capable of receiving notices during working hours.', time: '' },
            { title: 'Register Your Business (Company, GST, Udyam)', desc: 'Use the virtual office address as your official business address. Apply via SPICe+ form on MCA portal for company registration, GST portal for GST, and Udyam portal for MSME registration.', time: '' },
            { title: 'Maintain Compliance Post-Registration', desc: 'File annual returns, ensure timely tax filings (GST, income tax), comply with labor laws if you have employees, and renew virtual office services to maintain your legal address.', time: '' },
        ],
        fees: [
            { item: 'Business Address Plan', cost: '₹1,000 – ₹2,000/month' },
            { item: 'GST Registration Plan', cost: '₹1,300 – ₹2,000/month' },
            { item: 'Company Registration Plan', cost: '₹1,500 – ₹2,700/month' },
            { item: 'Premium/All-inclusive Packages', cost: '₹3,000 – ₹6,000/month or ₹10,000 – ₹25,000/year' },
            { item: 'Meeting Room Access', cost: '₹300 – ₹1,000/hour (Tier-1 cities)' },
        ],
        advantages: [
            { icon: '💰', title: 'Cost-Effectiveness', desc: 'Substantially more affordable than physical offices. Eliminates rent, utility bills, maintenance fees, and need for dedicated admin staff. Reallocate resources towards growth.' },
            { icon: '📍', title: 'Professional Business Address', desc: 'A prime location address in a commercial area enhances credibility and reputation. Clients and partners trust businesses with recognized addresses.' },
            { icon: '📬', title: 'Mail & Call Services', desc: 'Professional handling of correspondence and calls ensures you never miss important communications. Contributes to an efficient and professional image.' },
            { icon: '🔄', title: 'Flexibility & Scalability', desc: 'Operate from anywhere, expanding into new markets or scaling down seamlessly without constraints of physical space.' },
            { icon: '⚡', title: 'Quick Setup', desc: 'Can be set up and operational within 24 to 48 hours depending on documentation and provider process.' },
            { icon: '🌍', title: 'Multi-city Presence at Low Cost', desc: 'Establish a pan-India presence without setting up physical branches. Use virtual offices in multiple states for GST registration.' },
            { icon: '✅', title: 'Simplified Compliance', desc: 'Assists with legal registrations including GST and company incorporation. Provides a legitimate business address that meets statutory requirements.' },
            { icon: '🏦', title: 'Investor & Bank Friendly', desc: 'Banks usually accept virtual office addresses for current account opening if proper proof is submitted. Due-diligence friendly for loans and investment.' },
            { icon: '🌱', title: 'Eco-Friendly', desc: 'Reduces commuting, contributing to lower carbon footprint and promoting environmental sustainability.' },
        ],
        faqs: [
            { q: 'What is a virtual office?', a: 'A virtual office provides businesses with a professional address and essential office services — such as mail handling, call forwarding, and meeting space — without the need for a physical workspace. It is a cost-effective solution for startups, freelancers, and SMEs.' },
            { q: 'Can a virtual office be used for company registration?', a: 'Yes. Virtual offices are accepted by the Ministry of Corporate Affairs (MCA) for company registration. You need proper documentation including NOC, Rent Agreement, and Utility Bill from the provider.' },
            { q: 'Is a virtual office legal in India?', a: 'Yes. Virtual offices are recognized and accepted by the Indian government. The MCA has issued guidelines for their use in company registration and compliance.' },
            { q: 'How does a virtual office work?', a: 'The provider gives you a professional address for official purposes, handles your mail and calls, and offers meeting room access on demand. Your core business operations run remotely using digital tools.' },
            { q: 'Why do businesses need a virtual office address?', a: 'For legal registrations (company, GST, Udyam), professional credibility, cost savings, multi-city presence, and maintaining compliance without the overhead of a physical office.' },
            { q: 'How long does a virtual office setup take?', a: 'Typically 24 to 48 hours, depending on documentation and provider process. Digital KYC makes onboarding even faster.' },
            { q: 'How much does a virtual office cost?', a: 'Business Address plans start from ₹1,000–₹2,000/month. GST registration plans from ₹1,300–₹2,000/month. Company registration plans from ₹1,500–₹2,700/month. Premium packages range ₹10,000–₹25,000/year.' },
            { q: 'Is a virtual office valid for GST registration?', a: 'Yes. Virtual office addresses are accepted for GST registration with proper documentation. The GST department may conduct physical verification (Rule 25 of CGST Rules), so proper signage and agreement are critical.' },
            { q: 'Can I use a virtual office for GST registration in multiple states?', a: 'Yes. Since GST is state-wise, you can get virtual office addresses in multiple states for multi-state GST registration. Each state requires a separate address.' },
            { q: 'Can I open a bank account with a virtual office address?', a: 'Yes. Most banks in India accept virtual office addresses for opening business bank accounts, though some may require additional verification or specific documentation.' },
            { q: 'Is a virtual office address MCA-approved?', a: 'Yes. MCA accepts virtual office addresses for registered office purposes if supported with valid NOC, Rent Agreement, and Utility Bill. Some ROC offices may require physical verification.' },
            { q: 'Will ROC or GST officials visit my virtual office?', a: 'Possibly. ROC may conduct physical verifications and GST authorities may visit under Rule 25 of CGST Rules. Choose a provider who supports inspections and keeps the office physically accessible when needed.' },
            { q: 'What is the difference between virtual and traditional offices?', a: 'Virtual offices provide address and services without physical workspace (most cost-effective, high flexibility, quick setup). Traditional offices provide dedicated physical space (highest cost, limited flexibility, time-consuming setup).' },
            { q: 'Which documents do I need to own a virtual office?', a: 'From the provider: NOC, Rent Agreement, Utility Bill, Property Tax Receipt. From you: PAN, Aadhaar, Company documents (COI/Partnership Deed), DSC, MOA/AOA.' },
        ],
    },

    'producer-company-registration': { slug: 'producer-company-registration', title: 'Producer Company Registration Online in India', subtitle: 'Register your Producer Company for agricultural and allied activities. Pool resources, process goods, and sell collectively.', heroFeatures: ['Producer Company Incorporation', 'Minimum 10 Producer Members', 'PAN & TAN Included', 'Compliance Support', 'Government Scheme Eligibility'], overview: { heading: 'What is a Producer Company?', paragraphs: ['A Producer Company is a body corporate registered under the Companies Act, 2013 (Part IXA), formed by farmers, agricultural producers, and similar groups to collectively process, market, and sell their produce.', 'It combines the benefits of a cooperative with the efficiency of a company, giving producers better bargaining power, fair returns, and access to markets.', 'Producer companies can engage in production, harvesting, procurement, pooling, handling, marketing, selling, and export of primary produce.'], highlights: [{ icon: '🌾', text: 'For farmers and agricultural producers' }, { icon: '👥', text: 'Minimum 10 producer members (or 2 producer institutions)' }, { icon: '💰', text: 'Better bargaining power and fair returns' }, { icon: '🏛️', text: 'Government support and subsidies' }, { icon: '📈', text: 'Corporate structure with cooperative benefits' }] }, eligibility: ['Minimum 10 individual producers or 2 producer institutions.', 'Members must be engaged in primary production (agriculture, animal husbandry, etc.).', 'Must have 5 directors (minimum).', 'At least one director must be an Indian resident.', 'Must have objectives related to producer activities.'], documents: [{ category: 'Required Documents', items: ['PAN & Aadhaar of all directors and members', 'Address proof of directors', 'Registered office proof', 'MoA & AoA', 'DSC & DIN for directors', 'Producer membership list', 'Board resolution'] }], process: [{ title: 'Obtain DSC & DIN', desc: 'For all proposed directors.', time: '1–2 days' }, { title: 'Reserve Company Name', desc: 'Must include "Producer Company Limited".', time: '1–2 days' }, { title: 'Draft MoA & AoA', desc: 'Include producer-specific objectives and bylaws.', time: '' }, { title: 'File Incorporation Form', desc: 'Submit SPICe+ with producer company-specific details.', time: '' }, { title: 'Receive COI', desc: 'Certificate of Incorporation issued by ROC.', time: '15–20 days' }], fees: [{ item: 'Government Fees', cost: '₹5,000 – ₹15,000' }, { item: 'Stamp Duty', cost: 'Varies by state' }, { item: 'Professional Charges', cost: '₹15,000 onwards' }], advantages: [{ icon: '🌾', title: 'Collective Strength', desc: 'Pool resources for better market access and pricing.' }, { icon: '🏛️', title: 'Government Support', desc: 'Eligible for NABARD funding, subsidies, and government schemes.' }, { icon: '🛡️', title: 'Limited Liability', desc: 'Members\' liability limited to their shares.' }, { icon: '📈', title: 'Better Market Access', desc: 'Direct access to consumers, retailers, and exporters.' }], faqs: [{ q: 'Who can form a Producer Company?', a: 'Any 10 or more individuals engaged in primary production, or 2 or more producer institutions.' }, { q: 'Can it do export?', a: 'Yes. Producer companies can export primary produce.' }, { q: 'What makes it different from cooperatives?', a: 'Operates under the Companies Act with professional management, while cooperatives are governed by state cooperative laws.' }] },

    'iec-registration': {
        slug: 'iec-registration',
        title: 'IEC (Import Export Code) Registration Online in India',
        subtitle: 'Ready to start trading internationally? Your Professional makes India\'s IEC Registration easy and trouble-free, helping you start your international trade journey smoothly.',
        heroFeatures: ['IEC Approval in 2–7 Days', 'Complete Application Filing & Approval', 'End-to-End Service Support', 'Expert Assistance Throughout', 'Trusted by 5,000+ Indian Exporters & Importers'],
        overview: {
            heading: 'What is IEC Registration?',
            paragraphs: [
                'IEC (Import Export Code) Registration grants businesses and individuals a 10-digit code, which legally authorizes them to import and export goods or services. This code, issued by the Directorate General of Foreign Trade (DGFT), serves as proof that your business complies with foreign trade regulations.',
                'Having an IEC Code confirms your legal right to participate in global trade. Without proper registration, you may face significant fines, business limitations, difficulties with customs clearance, and potential harm to your company\'s reputation.',
                'IEC registration is governed by the Foreign Trade (Development & Regulation) Act, 1992, Foreign Trade Policy, and the Foreign Exchange Management Act, 1999 (FEMA). The DGFT is the central authority for issuing and regulating IECs, with customs authorities ensuring compliance at ports, airports, and borders.',
                'Any business structure can apply — Sole Proprietors, Partnership Firms, LLPs, Private Limited Companies, Public Limited Companies, Trusts, Societies, and Hindu Undivided Families (HUFs).',
            ],
            highlights: [
                { icon: '🌍', text: 'Mandatory for all import/export activities in India' },
                { icon: '♾️', text: 'Lifetime validity — no renewal needed' },
                { icon: '🔢', text: '10-digit code linked to PAN' },
                { icon: '🏛️', text: 'Issued by DGFT, Ministry of Commerce' },
                { icon: '📋', text: 'Must be updated annually on DGFT portal (April–June)' },
                { icon: '🌐', text: 'Valid throughout India for all ports and customs points' },
            ],
        },
        eligibility: [
            'Must be a resident Indian citizen or a registered business entity.',
            'Must maintain an active bank account in India.',
            'Must possess a valid PAN card (for individuals and businesses).',
            'Must have a legitimate business address with supporting documentation.',
            'Must demonstrate compliance with business registration requirements.',
            'Must provide accurate contact information for verification.',
        ],
        documents: [
            { category: 'General Documents', items: ['IEC Registration Application Form (ANF-2A)', 'PAN Card (mandatory for all applicants)', 'Address proof (Aadhaar Card, Voter ID, or utility bills)', 'Scanned copy of a bank certificate or cancelled cheque', 'Passport-sized photograph of the applicant/directors', 'Digital Signature Certificate (DSC) for online submission'] },
            { category: 'Business Registration Documents', items: ['Certificate of Incorporation (for companies)', 'Partnership Deed and partner details (for partnerships)', 'MOA/AOA (for companies)', 'Trust Deed and NGO Registration certificate (for trusts/NGOs)', 'Permission letter from RBI (for branch offices)'] },
            { category: 'Entity-Specific Additional Documents', items: ['Proprietorship: Address proof of the proprietor', 'Partnership: Partnership deed and partner details', 'LLP/Companies: Certificate of Incorporation, director details', 'Trusts/NGOs: Trust deed and registration certificate', 'Branch Office: Permission letter from the RBI'] },
        ],
        process: [
            { title: 'Research and Preparation', desc: 'Decide on your business structure. Ensure your PAN details are correct and match business registration documents. Prepare digital copies (PDF/JPEG) of all required documents.', time: '' },
            { title: 'Online Application on DGFT Portal', desc: 'Visit dgft.gov.in and register as a new user. Log in, select "Apply for IEC," and complete the ANF-2A application form with accurate business and contact details. Upload all required documents and pay the ₹500 fee online.', time: '' },
            { title: 'Post-Submission Verification', desc: 'The DGFT verifies your submitted details. If there are any discrepancies, you may be contacted for clarification.', time: '' },
            { title: 'Receive IEC Certificate', desc: 'IEC is generated instantly in most cases. Download your digital e-IEC certificate from the DGFT portal. Verify all details and keep both digital and printed copies. Start using your IEC immediately for trade activities.', time: '2–7 working days total' },
        ],
        fees: [
            { item: 'DGFT Application Fee (non-refundable)', cost: '₹500' },
            { item: 'Digital Signature Certificate (if required)', cost: '₹1,500 – ₹3,000' },
            { item: 'Professional Assistance Fees', cost: '₹1,000 – ₹5,000' },
            { item: 'IEC Modification Charges', cost: '₹200 per modification' },
        ],
        advantages: [
            { icon: '⚖️', title: 'Legal Authorization', desc: 'Gain official permission to conduct international trade without legal obstacles. Mandatory for customs clearance — must be included in Bill of Entry (imports) and Shipping Bill (exports).' },
            { icon: '🏦', title: 'Banking Benefits', desc: 'Open foreign currency accounts and access specialized trade financing. Banks require IEC to process foreign payments to/from international buyers and suppliers.' },
            { icon: '💰', title: 'Duty Benefits & Export Incentives', desc: 'Become eligible for duty drawbacks, MEIS (Merchandise Exports from India Scheme), and other export incentives and government subsidies under the Foreign Trade Policy.' },
            { icon: '⭐', title: 'Global Credibility', desc: 'Enhance your business reputation with international buyers and suppliers. IEC demonstrates you are a legitimate, compliant trader recognized by DGFT.' },
            { icon: '⚡', title: 'Customs Efficiency', desc: 'Experience faster clearance processes at ports and borders. Without IEC, your goods will be held indefinitely at customs.' },
            { icon: '🏛️', title: 'Market Access', desc: 'Participate in government tenders requiring IEC credentials. Access Special Economic Zone (SEZ) benefits and trade facilitation programs.' },
        ],
        faqs: [
            { q: 'How long does the IEC Registration process take?', a: 'The online IEC Registration process typically takes 2 to 7 working days after successful submission of all required and accurate documents on the DGFT portal.' },
            { q: 'Is IEC Registration mandatory for all businesses?', a: 'IEC is mandatory for any business importing or exporting goods or services. Exemptions exist for personal-use goods, certain government departments, and notified charitable/religious institutions.' },
            { q: 'Do I need to notify authorities if I change my business address?', a: 'Yes. Any change in business details including address must be updated on the DGFT portal. IEC modification charges are ₹200 per modification request.' },
            { q: 'What happens if I don\'t apply for IEC Registration?', a: 'Operating without IEC leads to customs clearance refusal, penalties up to five times the value of goods traded, ineligibility for export incentives, potential blacklisting, seizure of goods, and even criminal prosecution.' },
            { q: 'Can a foreign national or NRI apply for IEC Registration in India?', a: 'Foreign nationals and NRIs can apply through registered Indian business entities. The business must have a valid PAN and bank account in India.' },
            { q: 'Can I use the same IEC code for multiple businesses?', a: 'No. Each business entity requires its own unique IEC. The IEC is linked to the entity\'s PAN and cannot be shared across different businesses.' },
            { q: 'What is the validity of the IEC code?', a: 'Lifetime. IEC codes have permanent validity with no renewal needed. However, you must update your IEC details annually on the DGFT portal between April and June, or it will be deactivated.' },
            { q: 'Can my IEC be transferred to another business?', a: 'No. An IEC is non-transferable and is tied to the specific PAN and business entity it was issued to.' },
            { q: 'How do I track my IEC application status?', a: 'Log in to the DGFT portal (dgft.gov.in), go to your dashboard, and check the application status using your application reference number.' },
            { q: 'Can I appeal if my IEC Registration is rejected?', a: 'Yes. You can rectify the issues cited in the rejection and reapply, or file an appeal with the appropriate DGFT authority.' },
            { q: 'Do I need an IEC if I\'m only importing or exporting services?', a: 'Yes. IEC is required for both goods and services trade. Software exports, IT services, consulting, and other service exports also require an IEC for receiving foreign payments.' },
            { q: 'When is the IEC Code not required?', a: 'IEC is exempt for personal-use imports/exports not connected with trade, by central/state government ministries, and by certain notified charitable, religious, or educational institutions for non-commercial purposes.' },
            { q: 'What are the grounds for IEC suspension?', a: 'IEC can be suspended for compliance failures (not updating annually), providing false information, breaking foreign trade policy rules, trading in restricted items without licenses, and foreign exchange violations or money laundering.' },
            { q: 'Can a sole proprietor get IEC?', a: 'Yes. Any individual, proprietor, partnership firm, LLP, company, trust, society, or HUF can apply for and obtain an IEC.' },
        ],
    },

    'digital-signature-certificate': {
        slug: 'digital-signature-certificate',
        title: 'Digital Signature Certificate (DSC) Online in India',
        subtitle: 'Apply for a Digital Signature Certificate (DSC) online with Your Professional — trusted by professionals for fast, secure, and government-recognized digital identity solutions across multiple regulatory platforms.',
        heroFeatures: ['MCA, GST, ITR, EPFO, and DGFT Compatible', 'Class 3, DGFT, and Document Signer DSCs', 'Secure Signing with Legal Validity & Encryption', 'Ideal for Individuals, Businesses & Professionals', 'Trusted by 10,000+ Users Across India'],
        overview: {
            heading: 'What is a Digital Signature Certificate (DSC)?',
            paragraphs: [
                'A Digital Signature Certificate (DSC) is an electronic credential that proves your identity in the digital realm. Think of it as a digital equivalent of a handwritten signature but with enhanced security and legal validity. It ensures that a digital document or transaction truly originated from you and hasn\'t been tampered with.',
                'A DSC uses cryptography to link an individual or organization to a digital document. When you sign a document digitally, it creates a unique encrypted hash of the document. This hash is then encrypted with your private key. Anyone can verify this signature using your public key, ensuring the document\'s origin and integrity.',
                'In India, DSCs are issued by Certifying Authorities (CAs) licensed by the Controller of Certifying Authorities (CCA) under the Information Technology Act, 2000. Class 1 and Class 2 DSCs have been discontinued since January 1, 2021 — Class 3 DSC is now the only valid and accepted certificate for all official purposes.',
                'A DSC secures online transactions through authentication of identity, data integrity (tamper-proofing), non-repudiation (undeniable proof of signing), confidentiality (with encryption DSC), timestamping, and audit trails.',
            ],
            highlights: [
                { icon: '🔒', text: 'Cryptographic security — tamper-proof authentication' },
                { icon: '📋', text: 'Mandatory for MCA, GST, Income Tax, EPFO, and DGFT filings' },
                { icon: '📅', text: '1, 2, or 3-year validity options' },
                { icon: '⚖️', text: 'Legally valid under Information Technology Act, 2000' },
                { icon: '💻', text: 'Stored on secure USB crypto token (FIPS 140-2 Level 2)' },
                { icon: '🏛️', text: 'Class 3 DSC is the only active class since Jan 2021' },
            ],
        },
        eligibility: [
            'Any individual — for personal use like income tax filing, document signing, or securing email.',
            'Any director or authorized signatory of a company, LLP, or partnership firm.',
            'Valid PAN Card is mandatory for all DSC applications.',
            'Aadhaar Card is highly preferred for Aadhaar-based eKYC (fastest and paperless verification).',
            'Must complete identity verification via Aadhaar eKYC (OTP/Biometric) or video verification.',
            'For organizational DSCs: both individual identity AND organization identity (COI, company PAN) must be verified, plus an authorization letter/board resolution.',
        ],
        documents: [
            { category: 'For Individuals', items: ['PAN Card (mandatory)', 'Aadhaar Card (preferred for eKYC)', 'Passport, Driving License, or Voter ID (alternative identity proof)', 'Recent utility bill, bank statement, or post office passbook (address proof — not older than 3 months)', 'Recent passport-size color photograph'] },
            { category: 'For Businesses/Organizations', items: ['Certificate of Incorporation / Registration (for companies, LLPs)', 'Partnership Deed (for partnership firms)', 'Shop & Establishment License (for proprietorships)', 'Utility bill or rent agreement for business address (not older than 3 months)', 'Authorization letter on company letterhead with board resolution', 'PAN Card of the organization'] },
        ],
        process: [
            { title: 'Choose DSC Class & Validity', desc: 'Select Class 3 DSC (the only active class — mandatory for all official purposes). Choose 1, 2, or 3-year validity. Longer validity is more cost-effective.', time: '' },
            { title: 'Fill Out Online Application Form', desc: 'Provide your full name, contact details (mobile & email for verification), address, PAN number, and specify DSC class and type (Sign, Encrypt, or Combo).', time: '' },
            { title: 'Complete KYC Verification', desc: 'Verify identity via Aadhaar eKYC (OTP or Biometric — fastest and paperless) or PAN-based verification with video call (show original documents to camera and state unique code).', time: '' },
            { title: 'Make Payment', desc: 'Pay online via net banking, credit/debit card, or UPI. Cost varies by class, type, and validity period.', time: '' },
            { title: 'Complete Final Verification', desc: 'For Class 3 DSCs, a video verification call may be required where you display original PAN and address proof and verbally confirm your details.', time: '' },
            { title: 'DSC Issuance and Download', desc: 'Once approved, receive email/SMS with download instructions. DSC is securely downloaded onto a USB crypto token. Token requires a PIN for access, providing extra security.', time: '1–2 business days' },
        ],
        fees: [
            { item: 'Class 3 DSC — Sign Only (1 year)', cost: '₹800 – ₹1,500' },
            { item: 'Class 3 DSC — Sign Only (2 years)', cost: '₹1,500 – ₹2,500' },
            { item: 'Class 3 DSC — Sign + Encrypt (2 years)', cost: '₹2,500 – ₹3,500' },
            { item: 'Class 3 DSC — Sign Only (3 years)', cost: '₹2,000 – ₹3,000' },
            { item: 'USB Crypto Token', cost: 'Usually included' },
            { item: 'DSC Renewal (2 years)', cost: '~₹3,400' },
            { item: 'Professional Charges', cost: '₹500 onwards' },
        ],
        advantages: [
            { icon: '⚖️', title: 'Legal Validity & Compliance', desc: 'Digitally signed documents hold the same legal weight as physically signed documents under the IT Act, 2000. Mandatory for MCA, GST, Income Tax, EPFO, DGFT, and e-tendering.' },
            { icon: '🔒', title: 'Enhanced Security & Data Integrity', desc: 'Verifies signer identity (authentication), detects any document tampering (integrity), provides undeniable proof of signing (non-repudiation), and encrypts sensitive data (confidentiality).' },
            { icon: '⚡', title: 'Time & Cost Savings', desc: 'Eliminates printing, scanning, and couriering. Documents signed within minutes regardless of location. Reduces manual work and accelerates contract approvals.' },
            { icon: '🌍', title: 'Convenience & Accessibility', desc: 'Sign documents from any location with internet. Simplified e-filings to government agencies. Facilitates remote team collaboration with real-time signing.' },
            { icon: '⭐', title: 'Credibility & Trust', desc: 'Projects a modern, tech-savvy, and trustworthy image. Digital signatures are globally recognized for international business transactions.' },
            { icon: '🌱', title: 'Eco-Friendly & Paperless', desc: 'Supports paperless workflows, reduces printing and storage costs, and promotes environmental sustainability.' },
        ],
        faqs: [
            { q: 'How long does it take to get a DSC?', a: 'With online paperless applications and quick verification, you can often get your DSC issued within 1–2 business days, sometimes even faster.' },
            { q: 'What is the validity of a Digital Signature Certificate?', a: 'DSCs are available with 1, 2, or 3-year validity. Longer validity reduces renewal frequency and ensures uninterrupted service. After expiry, you must apply for a new DSC.' },
            { q: 'Can I have multiple DSCs?', a: 'Yes. An individual can have multiple DSCs for different purposes (e.g., one for MCA filings and another for DGFT). Each DSC is tied to the specific use case and portal.' },
            { q: 'What should I do if my DSC is lost or compromised?', a: 'Immediately contact the issuing Certifying Authority to revoke the compromised DSC. Apply for a new DSC with fresh KYC verification. Report any unauthorized use.' },
            { q: 'How do I use my DSC to sign documents?', a: 'Plug in your USB crypto token, enter your PIN, and use the signing option in the portal or software (e.g., Adobe Acrobat, MCA portal, GST portal). The document is cryptographically signed with your private key.' },
            { q: 'Is a DSC required for NRIs and foreign nationals?', a: 'Yes, NRIs and foreign nationals who are directors of Indian companies or need to file documents with Indian government portals require a DSC. Video verification is typically used for identity confirmation.' },
            { q: 'Which class of DSC do I need?', a: 'Class 3 DSC is the only active class since January 2021. It is mandatory for MCA filings, GST, Income Tax, e-tendering, DGFT, EPFO, and all official government portals.' },
            { q: 'What is the difference between Sign and Encrypt DSC?', a: 'A Sign DSC authenticates your identity and ensures document integrity. An Encrypt DSC additionally encrypts data for confidentiality. A Combo DSC (Sign + Encrypt) provides both functions — required for e-tendering.' },
            { q: 'Can I use one DSC for multiple platforms?', a: 'Yes. The same Class 3 DSC can be used for MCA, GST, Income Tax, EPFO, DGFT, e-tendering, and other portals. Some portals (like DGFT) may need a specialized DSC configuration.' },
            { q: 'How do I renew my DSC?', a: 'Initiate renewal 7–30 days before expiry. Visit your Certifying Authority\'s website, select "Renew DSC," complete a new KYC verification, pay the renewal fee (~₹3,400 for 2 years), and download onto your existing or new USB token.' },
            { q: 'What happens if my DSC expires?', a: 'An expired DSC cannot be renewed — you must apply for a completely new one with fresh KYC verification. This is more time-consuming than timely renewal, so renew before expiry.' },
            { q: 'What is the difference between a digital signature and a digital certificate?', a: 'A digital certificate (DSC) is your electronic identity credential containing your public key. A digital signature is the cryptographic stamp you create using your DSC\'s private key when signing a document. You need the certificate to create the signature.' },
        ],
    },

    'class-3-digital-signature-certificate': { slug: 'class-3-digital-signature-certificate', title: 'Class 3 Digital Signature Certificate Online', subtitle: 'Get a Class 3 DSC for MCA filings, e-tendering, company registration, and secure electronic transactions.', heroFeatures: ['Class 3 DSC in 1–2 Days', 'Required for MCA & ROC Filing', 'e-Tendering & e-Procurement Ready', 'Aadhaar-based Verification', 'USB Token Included'], overview: { heading: 'What is a Class 3 Digital Signature Certificate?', paragraphs: ['A Class 3 DSC provides the highest level of assurance about the identity of the signer. It is mandatory for MCA filings, e-tendering, e-procurement, and other high-security electronic transactions.', 'It requires in-person verification or Aadhaar-based authentication. The DSC is stored on a secure USB token that must be plugged into the computer for signing.', 'All company directors must have a Class 3 DSC for company incorporation (SPICe+ filing) and subsequent MCA compliance filings.'], highlights: [{ icon: '🔒', text: 'Highest level of identity assurance' }, { icon: '📋', text: 'Mandatory for SPICe+ filing and company incorporation' }, { icon: '🏛️', text: 'Required for government e-tendering' }, { icon: '💻', text: 'Stored on secure USB token' }, { icon: '⚖️', text: 'Legally valid under IT Act, 2000' }] }, eligibility: ['Any individual or authorized signatory.', 'Valid PAN and Aadhaar required.', 'Aadhaar-based eKYC or video verification.'], documents: [{ category: 'Required Documents', items: ['PAN Card', 'Aadhaar Card', 'Passport-sized photograph', 'Email ID & mobile (Aadhaar-linked)', 'Organization authorization letter (if applicable)'] }], process: [{ title: 'Apply Online', desc: 'Submit application with personal details and choose validity period.', time: '' }, { title: 'Complete eKYC', desc: 'Verify via Aadhaar OTP or video verification.', time: '' }, { title: 'Receive USB Token', desc: 'DSC loaded on USB token and delivered.', time: '1–2 days' }], fees: [{ item: 'Class 3 DSC (Signing Only, 2 years)', cost: '₹1,500 – ₹2,000' }, { item: 'Class 3 DSC (Signing + Encryption, 2 years)', cost: '₹2,500 – ₹3,500' }, { item: 'USB Token', cost: 'Usually included' }], advantages: [{ icon: '🔒', title: 'Highest Security', desc: 'Maximum assurance level for electronic transactions.' }, { icon: '📋', title: 'Universal Acceptance', desc: 'Accepted on MCA, GST, IT, IRCTC, e-tendering portals.' }, { icon: '⚖️', title: 'Legal Compliance', desc: 'Meets all statutory requirements for digital signing.' }], faqs: [{ q: 'What is the difference between Class 2 and Class 3?', a: 'Class 2 (now discontinued) was for lower-risk transactions. Class 3 provides the highest assurance and is mandatory for MCA filings.' }, { q: 'Is physical verification needed?', a: 'No. Aadhaar-based eKYC or video verification is sufficient.' }] },

    'startup-registration': { slug: 'startup-registration', title: 'Startup Registration Online in India', subtitle: 'Register your startup as a Private Limited Company, LLP, or OPC and kickstart your entrepreneurial journey.', heroFeatures: ['Complete Startup Setup', 'Entity Registration + DPIIT Recognition', 'PAN, TAN, GST Assistance', 'Startup India Benefits', 'Expert CA & CS Support'], overview: { heading: 'What is Startup Registration?', paragraphs: ['Startup Registration involves formally incorporating your business entity (Pvt Ltd, LLP, or OPC) and optionally obtaining DPIIT recognition under the Startup India scheme.', 'Proper registration gives your startup a legal identity, limited liability protection, ability to raise funding, and credibility with customers and investors.', 'Most startups choose Private Limited Company registration for its investor-friendly structure and credibility.'], highlights: [{ icon: '🚀', text: 'Complete startup incorporation' }, { icon: '⚖️', text: 'Legal protection and limited liability' }, { icon: '💰', text: 'Funding-ready structure' }, { icon: '🇮🇳', text: 'Startup India benefits available' }, { icon: '📋', text: 'PAN, TAN, GST — all in one package' }] }, eligibility: ['Founders must be 18+ years old.', 'At least one founder should be an Indian resident.', 'Must have a business idea or plan.', 'Choose entity type: Pvt Ltd (2+ members), LLP (2+ partners), or OPC (1 member).'], documents: [{ category: 'Required Documents', items: ['PAN & Aadhaar of all founders', 'Address proof', 'Passport-sized photographs', 'Business plan / pitch deck', 'Registered office proof', 'DSC for all directors/partners'] }], process: [{ title: 'Choose Entity Structure', desc: 'Select Pvt Ltd, LLP, or OPC based on your needs.', time: '' }, { title: 'Incorporate the Entity', desc: 'Complete DSC, DIN, name reservation, and SPICe+/FiLLiP filing.', time: '7–15 days' }, { title: 'Get PAN, TAN & GST', desc: 'Obtain all tax registrations post incorporation.', time: '' }, { title: 'Apply for DPIIT Recognition', desc: 'Register on Startup India portal for government benefits.', time: '2–5 days' }, { title: 'Open Bank Account', desc: 'Open a corporate bank account with COI and PAN.', time: '' }], fees: [{ item: 'Entity Incorporation', cost: '₹5,000 – ₹15,000' }, { item: 'DPIIT Recognition', cost: 'Free' }, { item: 'GST Registration', cost: '₹2,000 onwards' }, { item: 'Professional Charges', cost: '₹5,000 onwards' }], advantages: [{ icon: '⚖️', title: 'Legal Entity', desc: 'Separate legal identity protects personal assets.' }, { icon: '💰', title: 'Raise Funding', desc: 'Investor-friendly structure for equity fundraising.' }, { icon: '🏛️', title: 'Government Benefits', desc: 'Tax exemption, easier compliance, and funding access under Startup India.' }, { icon: '⭐', title: 'Credibility', desc: 'Registered entities are trusted by clients, vendors, and investors.' }], faqs: [{ q: 'Which entity type is best for startups?', a: 'Private Limited Company is the most common choice due to its investor-friendly structure, limited liability, and credibility.' }, { q: 'Is DPIIT registration mandatory?', a: 'Not mandatory, but highly recommended for tax benefits, funding access, and compliance relaxations.' }, { q: 'Can a solo founder register?', a: 'Yes, as an OPC (One Person Company) or by adding a nominee/co-founder for Pvt Ltd.' }] },

    'microfinance-company-registration': {
        slug: 'microfinance-company-registration',
        title: 'Microfinance Company Registration in India',
        subtitle: 'Register your Microfinance Company in India with expert guidance. We simplify the NBFC setup process, ensure legal compliance, and help you launch your financial services venture smoothly.',
        heroFeatures: ['RBI Compliance Guidance for Microfinance Companies', 'Assistance with Capital & Net Owned Fund Requirements', 'Help with Business Plan & Policy Drafting', 'Support in Choosing the Right NBFC Structure', 'Timely Updates on Registration Status & Approvals'],
        overview: {
            heading: 'What is a Microfinance Company?',
            paragraphs: [
                'A microfinance company is a financial institution that provides small loans (microcredit) and other financial services to low-income individuals and communities that traditional banks typically overlook. These include farmers, daily wage earners, small shopkeepers, and women entrepreneurs who often lack credit history or collateral.',
                'The core aim of microfinance companies is to promote financial inclusion. They bridge the gap left by conventional banking systems by offering accessible financial support in the form of small, collateral-free loans.',
                'There are two primary legal structures: NBFC-MFI (registered under Companies Act, 2013, and regulated by RBI — for commercial, for-profit micro-lending with minimum ₹5 crore NOF) and Section 8 Company (non-profit, regulated by MCA — simpler setup for social impact micro-credit without RBI license).',
                'In the last year alone, microfinance institutions in India disbursed over ₹4.2 lakh crore in loans, reaching nearly 8 crore borrowers — a testament to their transformative impact on the nation\'s financial landscape.',
            ],
            highlights: [
                { icon: '🏦', text: 'Provides small loans to underserved communities' },
                { icon: '🏛️', text: 'NBFC-MFI regulated by RBI; Section 8 by MCA' },
                { icon: '💰', text: 'NBFC-MFI requires ₹5 crore NOF (₹2 crore for NE)' },
                { icon: '❤️', text: 'Section 8 route for non-profit micro-credit — no minimum capital' },
                { icon: '👩', text: 'About 95% of microfinance clients are women' },
                { icon: '📈', text: '₹4.2 lakh crore disbursed to 8 crore borrowers annually' },
            ],
        },
        eligibility: [
            'NBFC-MFI: Minimum Net Owned Fund (NOF) of ₹5 crore (₹2 crore for Northeastern states). NOF = Paid-up capital + Free Reserves – Accumulated Losses – Intangible Assets.',
            'NBFC-MFI: Must be registered as a Private or Public Limited Company under Companies Act, 2013.',
            'NBFC-MFI: Directors must possess relevant experience in financial services for sound management.',
            'NBFC-MFI: Must obtain Certificate of Registration (CoR) from RBI before starting lending operations.',
            'Section 8 Company: Main goal must be social welfare — promoting charity, education, or environmental protection. No profit distribution to owners.',
            'Section 8 Company: No minimum capital requirement — makes it accessible for individuals/groups wanting to create social impact.',
            'Section 8 Company: No prior RBI approval needed for micro-credit activities (unless total assets exceed threshold). Regulated by MCA.',
            'Section 8 Company: Minimum 2 directors, at least one must be an Indian resident.',
            'Both structures: Company must first be incorporated under the Companies Act, 2013, with at least 2 directors and 2 shareholders.',
        ],
        documents: [
            { category: 'For All Directors and Shareholders', items: ['PAN Card (mandatory for all Indian directors/shareholders)', 'Aadhaar Card for Indian directors and shareholders', 'Passport for foreign directors', 'Proof of home address (bank statement, electricity/phone/mobile bill — not older than 2 months)', 'Recent passport-sized color photographs', 'Email ID and phone number for official communications'] },
            { category: 'For Company\'s Registered Office', items: ['No Objection Certificate (NOC) from landlord if rented', 'Rental Agreement / Lease Document if rented', 'Recent electricity / utility bill (not older than 2 months)', 'Sale Deed / Property Papers if owned'] },
            { category: 'RBI-Specific Documents (for NBFC-MFI only)', items: ['Certificate of Incorporation, MoA & AoA', 'Audited financial reports for last 3 years (company and promoters/directors)', 'Banker\'s Letter confirming NOF deposit is "free from any lien"', 'Board Resolutions stating directors plan to apply for NBFC license', 'Detailed Business Plan (target borrowers, loan management, revenue projections, risk handling)', 'System Audit Report (for larger NBFCs)', 'KYC Policy (Know Your Customer rules)', 'Fair Practices Code (interest rates, loan disbursement, grievance redressal)'] },
        ],
        process: [
            { title: 'Register a Private or Public Limited Company', desc: 'Incorporate under Companies Act, 2013. Get DSC and DIN for all directors, reserve a unique company name, draft MOA and AOA, and submit incorporation forms online. Receive Certificate of Incorporation with PAN and TAN.', time: '' },
            { title: 'Arrange Minimum Net Owned Fund (₹5 Crore for NBFC-MFI)', desc: 'Gather minimum ₹5 crore NOF (₹2 crore for NE states). This money must be real cash that the company owns — it shows the RBI that the company is financially stable.', time: '' },
            { title: 'Deposit NOF and Get "No Lien" Certificate', desc: 'Deposit the entire NOF amount into a fixed deposit in a bank. Obtain a "No Lien" certificate clearly stating the deposit is free from any guarantee or encumbrance.', time: '' },
            { title: 'Apply Online for RBI License (NBFC-MFI)', desc: 'Apply through RBI\'s COSMOS portal. Fill out detailed forms and upload documents including business plan, financial records, and director identity papers. RBI evaluates the company\'s plans and risk management.', time: '' },
            { title: 'Submit Hard Copies to RBI Regional Office', desc: 'Send physical copies of all documents to the regional RBI office. RBI reviews carefully and may ask additional questions. If approved, RBI issues the Certificate of Registration (CoR).', time: '3–6 months total' },
        ],
        fees: [
            { item: 'Section 8 Company — Government Fees', cost: '₹5,000 – ₹10,000' },
            { item: 'Section 8 Company — Professional Fees', cost: '₹20,000 – ₹50,000' },
            { item: 'NBFC-MFI — RBI Application Fee (non-refundable)', cost: '₹3,00,000' },
            { item: 'NBFC-MFI — Minimum Capital (NOF)', cost: '₹5 crore (₹2 crore for NE states)' },
            { item: 'DSC per Director', cost: '₹2,000 – ₹4,000' },
            { item: 'DIN Application', cost: '₹500 per director' },
            { item: 'Company Name Reservation', cost: '₹1,000' },
        ],
        advantages: [
            { icon: '❤️', title: 'Social Impact', desc: 'Serve underserved communities — farmers, hawkers, artisans, and daily wage earners — with financial inclusion and collateral-free loans.' },
            { icon: '👩', title: 'Women-Led Growth', desc: 'About 95% of microfinance clients are women, leading to stronger community development outcomes and female entrepreneurship.' },
            { icon: '🏛️', title: 'RBI Regulated (NBFC-MFI)', desc: 'RBI registration provides credibility and trust. Can raise funds from banks and financial institutions for larger-scale lending.' },
            { icon: '📋', title: 'Simpler Section 8 Route', desc: 'No minimum capital, no RBI license needed, tax benefits, and can receive donations and grants. Ideal for non-profit micro-credit.' },
            { icon: '📈', title: 'Growing Market', desc: 'Over 190 million Indians lack access to formal banking. Microfinance fills a massive gap in rural and semi-urban areas.' },
            { icon: '💰', title: 'Government Support', desc: 'Priority sector lending, government schemes for financial inclusion, and policies encouraging microfinance institutions.' },
            { icon: '🔒', title: 'Tax Benefits (Section 8)', desc: 'Section 8 companies can get special tax breaks, saving money to reinvest in social goals.' },
            { icon: '🌍', title: 'Reduces Dependency on Moneylenders', desc: 'Microloans offer a safer and more transparent alternative to high-interest informal lending from moneylenders.' },
        ],
        faqs: [
            { q: 'Can a Section 8 company give loans without RBI approval?', a: 'Yes, generally a Section 8 company can offer micro-credit without needing direct approval from the RBI. However, they must still follow fair practices and reasonable interest rates. If their total business size grows very large (over ₹100 crore), the RBI might regulate them more closely.' },
            { q: 'What is the maximum interest rate a microfinance company can charge?', a: 'NBFC-MFIs must follow RBI guidelines on interest rate caps. Section 8 companies are not strictly bound by NBFC-MFI rate caps, but interest charged must be fair, reasonable, and non-exploitative.' },
            { q: 'Do I need specific qualifications to be a director?', a: 'For NBFC-MFI, the RBI mandates that directors possess relevant experience in financial services. For Section 8 company, minimum 2 directors are needed with at least one Indian resident — no specific financial experience required.' },
            { q: 'Can a microfinance company accept deposits from the public?', a: 'No. NBFC-MFIs cannot accept public deposits unless separately licensed. Section 8 MFIs are also not allowed to accept deposits. Funding comes from grants, donations, or institutional loans.' },
            { q: 'What are the yearly compliances after registration?', a: 'Annual returns filing with MCA (Form MGT-7, AOC-4), board meetings (minimum 4 per year), annual general meeting, income tax returns, and RBI-specific reporting for NBFC-MFIs.' },
            { q: 'How are microfinance loans different from bank loans?', a: 'Microfinance loans are typically small, collateral-free, given to low-income borrowers with flexible repayment terms. Bank loans require credit history, collateral, and formal income records.' },
            { q: 'Can a single person start a microfinance company?', a: 'No. You need at least 2 directors and 2 shareholders to incorporate a company under the Companies Act, 2013. At least one director must be an Indian resident.' },
            { q: 'What is a "Net Owned Fund" (NOF)?', a: 'NOF is the actual money the company truly owns — Paid-up Capital + Free Reserves – Accumulated Losses – Intangible Assets. For NBFC-MFI, minimum ₹5 crore NOF is required (₹2 crore for NE states).' },
            { q: 'Can a Section 8 company become an NBFC-MFI later?', a: 'Not directly. A Section 8 company is non-profit, while an NBFC-MFI is for-profit. You would need to incorporate a separate company and apply for NBFC-MFI registration with the RBI.' },
            { q: 'What kind of collateral is needed for microfinance loans?', a: 'Microfinance loans are typically collateral-free. Group lending and peer accountability ensure high repayment rates. This is what makes microfinance accessible to those without assets.' },
            { q: 'Are there government schemes that support microfinance companies?', a: 'Yes. The government has schemes like priority sector lending norms, MUDRA loans, and various state-level programs that support microfinance institutions in serving underbanked populations.' },
            { q: 'How does microfinance help women?', a: 'About 95% of microfinance clients are women. Microfinance supports female entrepreneurship, financial independence, and community-wide development. Group lending models empower women to support each other.' },
        ],
    },

    'wordmark-registration': {
        slug: 'wordmark-registration',
        title: 'Wordmark Registration in India',
        subtitle: 'Secure exclusive rights to your brand name with expert Wordmark Registration in India. Your Professional ensures a smooth, compliant process for protecting your business identity under trademark law.',
        heroFeatures: ['Trademark Search & Eligibility Check', 'Filing of Wordmark Application (Online/Offline)', 'Response Handling for Objections & Oppositions', 'Legal Guidance on Trademark Classes & Use of ™/®', 'Complete Support from Filing to Certificate Issuance & Renewal'],
        overview: {
            heading: 'What is a Wordmark?',
            paragraphs: [
                'A wordmark, also called a logotype, is a text-only logo that uses a company\'s name styled in a specific font. Unlike logos with symbols or images, a wordmark\'s power comes from its unique typography. It uses specific fonts, colors, and spacing to make the brand stand out and be easy to remember.',
                'Registering a wordmark protects your brand name as a legal asset under the Trade Marks Act, 1999 in India. Once registered, a wordmark becomes your exclusive legal property under Section 28. You gain the statutory right to use the mark in connection with the specified class of goods/services.',
                'A wordmark registration provides broader protection than a logo trademark because it protects the word itself regardless of font, color, or design. You can sue anyone who uses an identical or deceptively similar mark under Section 29 of the Act, and it supports cross-border protection through the Madrid Protocol.',
            ],
            highlights: [
                { icon: '📝', text: 'Text-only logo — protects the brand name itself' },
                { icon: '🛡️', text: 'Broader protection than logo marks — any font, color, or design' },
                { icon: '📅', text: 'Valid for 10 years, renewable indefinitely' },
                { icon: '⚖️', text: 'Exclusive legal rights under Trade Marks Act, 1999' },
                { icon: '🌍', text: 'International protection via Madrid Protocol' },
                { icon: '🔒', text: 'Prevents similar marks from being registered (Section 11)' },
            ],
        },
        eligibility: [
            'Any individual can apply for a wordmark, even if they do not own a company. The trademark can be registered for prospective use.',
            'Partnership firms are eligible — all partner names (up to 10) must be clearly stated in the application.',
            'Joint owners can jointly apply, provided both names are listed in the trademark application.',
            'Proprietorship firms may submit under the proprietor\'s name.',
            'LLPs must register under the LLP\'s name — partners are not mentioned in the application.',
            'Trusts and societies may register through a representative (chairman, trustee, or secretary).',
            'Any Indian company — limited by shares, guarantee, or unlimited liability — can register under the company\'s official name.',
            'Foreign companies may register using their name as registered in their home country.',
        ],
        documents: [
            { category: 'Identity & Address Proof', items: ['PAN Card, Aadhaar Card, Passport, Voter ID, or Driving License', 'For companies/LLPs: identity proof of the director or authorized signatory', 'Address proof: recent electricity bill, telephone bill, bank statement, or rent agreement'] },
            { category: 'Business Registration Proof', items: ['Certificate of Incorporation (for Pvt Ltd companies)', 'LLP Agreement (for LLPs)', 'Partnership Deed (for partnership firms)', 'MSME or Udyam Registration (for sole proprietors — optional but helps with 50% fee discount)'] },
            { category: 'Trademark-Specific Documents', items: ['Power of Attorney (Form TM-48) — when filed through a trademark agent or attorney', 'User Affidavit — if the mark is already in use (with invoices, product labels, website screenshots, and date of first use)', 'Trademark Application Form (Form TM-A) — primary form with applicant details, trademark class, goods/services description', 'Logo or Wordmark Image (optional for standard wordmark — needed only for stylized versions, JPG format under 200 KB)'] },
        ],
        process: [
            { title: 'Conducting a Trademark Search', desc: 'Perform a trademark search on the official IP India portal to determine whether the mark is available and ensure there are no legal conflicts.', time: '' },
            { title: 'Submission of Application', desc: 'File the trademark registration application either online or offline using Form TM-A. Upon online submission, an application number is generated for tracking.', time: '1–2 days' },
            { title: 'Application Review and Examination', desc: 'The trademark examiner reviews the application and documents. If approved, it proceeds to publication. If objections arise, the applicant must respond within one month.', time: '1–3 months' },
            { title: 'Publication and Public Notice', desc: 'The approved trademark is published in the official Trademark Journal for four months. Any party can oppose during this window. If no oppositions are raised, registration continues.', time: '4 months' },
            { title: 'Grant of Registration Certificate', desc: 'Once all reviews and objections are cleared, the Registrar issues the official certificate of registration.', time: '6–12 months total' },
            { title: 'Renewal of the Registered Wordmark', desc: 'The trademark registration remains valid for ten years. After expiry, it can be renewed indefinitely by paying the prescribed government renewal fee.', time: '' },
        ],
        fees: [
            { item: 'Government Fee — Individuals, MSMEs, Startups (online)', cost: '₹4,500 per class' },
            { item: 'Government Fee — Individuals, MSMEs, Startups (physical)', cost: '₹5,000 per class' },
            { item: 'Government Fee — Companies, LLPs, Others (online)', cost: '₹9,000 per class' },
            { item: 'Government Fee — Companies, LLPs, Others (physical)', cost: '₹10,000 per class' },
            { item: 'Professional Fees', cost: '₹5,000 – ₹30,000 (varies by complexity)' },
            { item: 'Renewal Fee (online)', cost: '₹9,000' },
            { item: 'Renewal Fee (physical)', cost: '₹10,000' },
            { item: 'Opposition Filing Fee', cost: '₹2,700' },
            { item: 'Expedited Examination Fee (e-filing only)', cost: '₹40,000' },
        ],
        advantages: [
            { icon: '🛡️', title: 'Exclusive Rights', desc: 'Gain the sole legal right to use your brand name nationwide for your specified goods/services.' },
            { icon: '⚖️', title: 'Legal Protection', desc: 'Take legal action against anyone using a similar or identical mark without permission. Claim damages, injunctions, and seizure of goods.' },
            { icon: '📝', title: 'Flexible Use', desc: 'Protects the word itself, so you can use it in any font, color, or design while maintaining protection.' },
            { icon: '💰', title: 'Increased Brand Value', desc: 'Makes your brand appear more trustworthy, high-quality, and professional. Registered trademark is a valuable intangible asset.' },
            { icon: '🌍', title: 'International Protection', desc: 'Apply for international protection under the Madrid Protocol. Protects your brand globally and prevents foreign entities from registering your name.' },
            { icon: '🤝', title: 'Licensing & Franchising', desc: 'Lets you license or franchise your brand name to generate additional income streams.' },
            { icon: '⭐', title: 'Customer Trust & Loyalty', desc: 'Builds strong relationships with customers who associate your brand with consistency and reliability.' },
            { icon: '🔒', title: 'Prevents Copycats', desc: 'The Trademark Registry refuses similar or identical marks (Section 11), reducing the risk of future copycats being legally recognized.' },
        ],
        faqs: [
            { q: 'Can you sell your registered wordmark?', a: 'Yes. A registered wordmark can be sold or transferred through a process called "Trademark Assignment." This involves transferring ownership rights to another individual or entity. Types include complete, partial, with goodwill, and without goodwill assignments.' },
            { q: 'What is the difference between a wordmark and a trademark?', a: 'A wordmark is a specific type of trademark that protects only the text/name of a brand. A trademark is a broader term that can include wordmarks, logos (device marks), combination marks, sound marks, and more.' },
            { q: 'Is wordmark registration compulsory in India?', a: 'No, it is not legally mandatory. However, without registration you only have common law rights (limited to area of use). Registration provides nationwide statutory protection and stronger legal remedies.' },
            { q: 'How long does it take to get a wordmark registered in India?', a: 'The filing itself takes 1–2 days. The complete process including examination, publication (4 months), and certificate issuance typically takes 6–12 months.' },
            { q: 'Can I use my brand name before the wordmark is registered?', a: 'Yes. You can use the ™ symbol while your application is pending. However, the ® symbol should only be used after official registration. Using ® before registration is unlawful.' },
            { q: 'What happens if someone objects to my wordmark application?', a: 'If objections arise during the 4-month publication period, you have 30 days to respond. A satisfactory response leads to further processing. You may also receive examination objections under Section 9 (descriptive) or Section 11 (similar mark).' },
            { q: 'For how long is a wordmark registration valid in India?', a: '10 years from the date of filing. It can be renewed indefinitely for successive 10-year periods by paying the renewal fee (₹9,000 online / ₹10,000 offline).' },
            { q: 'Can I register a wordmark that is not in English?', a: 'Yes. Wordmarks can be registered in any language or script, including Hindi, regional languages, or transliterations, as long as they meet the distinctiveness criteria.' },
            { q: 'What are the main grounds for refusal of a wordmark?', a: 'Common grounds include: the mark is generic or descriptive (Section 9), it is identical or similar to an existing mark (Section 11), it is deceptive or scandalous, or it lacks distinctiveness.' },
            { q: 'Who is eligible to apply for a wordmark in India?', a: 'Individuals, partnership firms, joint owners, proprietorship firms, LLPs, trusts, societies, Indian companies, and foreign companies can all apply.' },
            { q: 'Do I need a GST registration to apply for a wordmark?', a: 'No. GST registration is not a prerequisite for applying for a wordmark. However, having MSME/Udyam registration qualifies you for a 50% discount on government fees.' },
        ],
    },

    'psara-license': {
        slug: 'psara-license',
        title: 'PSARA License Online for Security Agencies in India',
        subtitle: 'Get your PSARA License easily with professional legal assistance to operate your security business legally and efficiently.',
        heroFeatures: ['End-to-end Application Drafting and Documentation', 'License Certificate Provided', 'Handled by Experienced Legal Experts', 'Trusted by 20,000+ Security Agencies', '100% Online & Transparent Process'],
        overview: {
            heading: 'What is a PSARA License?',
            paragraphs: [
                'A PSARA license is a mandatory authorization required under the Private Security Agencies (Regulation) Act, 2005. This foundational law governs how private security agencies operate in India, setting rigorous standards for everything from guard training to physical fitness.',
                'To operate legally, every private security agency is required to obtain the PSARA registration. This ensures compliance with government regulations, which in turn fosters trust and credibility with clients.',
                'A private security agency is any business entity providing security services to various sectors, such as banking and finance. It provides trained personnel to safeguard individuals, property, and assets. These agencies offer services like guarding, patrolling, surveillance, and access control for residential, commercial, and industrial clients.',
                'The PSARA License establishes credibility, ensures compliance with government norms, allows recruitment of trained guards, and is essential for bidding on large contracts, especially with corporations and government bodies.',
            ],
            highlights: [
                { icon: '🛡️', text: 'Mandatory for all private security agencies in India' },
                { icon: '📅', text: 'Valid for 5 years (1 year in some states like Uttarakhand, Chhattisgarh)' },
                { icon: '🏛️', text: 'Issued by State Controlling Authority (Home Department)' },
                { icon: '⚖️', text: 'Under Private Security Agencies (Regulation) Act, 2005' },
                { icon: '⚠️', text: 'Operating without license: up to 1 year imprisonment + ₹25,000 fine' },
                { icon: '📋', text: 'State-specific — separate license needed for each state' },
            ],
        },
        eligibility: [
            'Any registered Indian organization can apply: Sole Proprietorship, Partnership Firm, LLP, OPC, or Private Limited Company.',
            'Directors/Principal Officers must be Indian citizens, at least 18 years old.',
            'Directors must have a clean criminal record and not have been dismissed from government service due to misconduct.',
            'Directors must possess adequate financial resources to manage business expenses.',
            'Security guards must be Indian citizens, aged 18–65 years.',
            'Guards must meet specified physical fitness standards including height, weight, and vision criteria.',
            'Guards must undergo mandatory prior training from a recognized institute.',
            'Character verification is mandatory for all employees. Preference given to ex-servicemen or retired police personnel.',
        ],
        documents: [
            { category: 'Required Documents', items: [
                'Certificate of Incorporation (Pvt Ltd, LLP, OPC) or Partnership Deed',
                'PAN Card and identity proof (Aadhaar, Passport, Voter ID) of directors/partners',
                'GST Registration Certificate of the agency',
                'Proof of office address (ownership papers, lease agreement, utility bills, landlord NOC)',
                'Photographs and details of agency logo and uniform pattern',
                'Two recent passport-size photographs of promoters/directors',
                'Affidavit of non-conviction for all key personnel',
                'Character verification certificates for employees',
                'List of employees with contact details',
                'MOU with a government-approved training institute',
                'Training certificates for guards and supervisors',
                'Details of arm licenses (if applicable)',
            ] },
        ],
        process: [
            { title: 'Preparing Your Business Foundation', desc: 'Legally register your security agency. Choose a suitable business structure (Sole Proprietorship, Partnership Firm, LLP, or Private Limited Company) and a business name.', time: '' },
            { title: 'Partnering for Training: The MOU', desc: 'Sign a Memorandum of Understanding (MOU) with a recognized security training institute approved by the state. This confirms your commitment to providing proper guard training.', time: '' },
            { title: 'Filing Your Application Online', desc: 'Gather all required documents. Create an account on the state\'s online PSARA application portal and fill out the application form (Form I) for antecedent verification. Ensure documents are clear, legible, and accurate.', time: '' },
            { title: 'Police Verification', desc: 'After submission, the state police department initiates background checks for criminal history of all applicants and directors. A NOC from the police is essential for the license grant.', time: '' },
            { title: 'Review and License Issuance', desc: 'The Controlling Authority reviews submitted documents, the MOU, and police reports. If satisfied, the PSARA license is granted in Form IV, officially authorizing your agency to operate legally.', time: '60–120 days total' },
        ],
        fees: [
            { item: 'Single District Operation', cost: '₹5,000' },
            { item: 'Up to Five Districts', cost: '₹10,000' },
            { item: 'Entire State Operation', cost: '₹25,000' },
            { item: 'Professional/Consultancy Charges', cost: '₹10,000 onwards' },
        ],
        advantages: [
            { icon: '⚖️', title: 'Legal Recognition & Protection', desc: 'Operating with a PSARA license ensures your agency complies with Indian law, protecting it from legal issues, penalties, and forced closure.' },
            { icon: '⭐', title: 'Credibility & Client Trust', desc: 'A PSARA certificate adds credibility, signaling that your agency meets professional standards. Attracts large organizations and builds long-term client trust.' },
            { icon: '🏛️', title: 'Access to Government Contracts', desc: 'PSARA license is essential for bidding on high-value government contracts. Gain access to prestigious and large-scale security projects.' },
            { icon: '📈', title: 'Industry Recognition & Growth', desc: 'Licensing elevates your agency\'s profile within the security industry. Recognized professionalism drives growth, partnerships, and wider opportunities.' },
            { icon: '👥', title: 'Employee Welfare & Legal Benefits', desc: 'Ensure security personnel receive proper training, EPFO, and ESIC benefits. Maintain a fully authorized and compliant employee base.' },
            { icon: '🔄', title: 'Scalability & Expansion', desc: 'The PSARA license enables district and state-wide expansion. Scale operations strategically while staying compliant.' },
        ],
        faqs: [
            { q: 'What is a PSARA license?', a: 'A PSARA license is a legal authorization required for private security agencies to operate in India under the Private Security Agencies (Regulation) Act, 2005. Without this license, operating a private security business is illegal.' },
            { q: 'What is the full form of PSARA?', a: 'PSARA stands for Private Security Agencies (Regulation) Act, 2005. It is the foundational law governing how private security agencies operate in India.' },
            { q: 'Who is eligible for a PSARA license?', a: 'Any registered Indian business entity (Sole Proprietorship, Partnership Firm, LLP, OPC, or Pvt Ltd Company) with directors who are Indian citizens, 18+ years old, with clean criminal records.' },
            { q: 'What documents are required for obtaining a PSARA license?', a: 'Certificate of Incorporation/Partnership Deed, PAN & Aadhaar of directors, GST certificate, office address proof, agency logo/uniform details, non-conviction affidavits, employee list, MOU with training institute, and guard training certificates.' },
            { q: 'How much does a PSARA license cost?', a: '₹5,000 for single district operations, ₹10,000 for up to five districts, and ₹25,000 for entire state operations. Additional professional service charges may apply.' },
            { q: 'What is the validity of a PSARA license?', a: 'Typically 5 years from the date of issuance. However, in Uttarakhand and Chhattisgarh, the initial validity is only 1 year.' },
            { q: 'Is the PSARA license valid all over India?', a: 'No. The PSARA license is state-specific — it is valid only within the jurisdiction of the state where it was approved. A separate license is needed for each state.' },
            { q: 'Is a PSARA license mandatory?', a: 'Yes. Operating a private security agency without a valid PSARA license is illegal and can result in imprisonment of up to 1 year, a fine of up to ₹25,000, or both.' },
            { q: 'How long does it take to get a PSARA License?', a: 'Ideally 60 days from application receipt. However, actual processing times can range from 50 to 120 working days depending on the state and completeness of documents.' },
            { q: 'Is training mandatory for security guards under PSARA?', a: 'Yes. All security guards must undergo mandatory training from a government-approved training institute before deployment. An MOU with a recognized institute is required.' },
            { q: 'Can a PSARA license obtained in one state be transferred to another?', a: 'No. The PSARA license is not transferable between states. You must apply for a separate license in each state where you wish to operate.' },
            { q: 'What is the role of supervisors in the PSARA licensing process?', a: 'It is mandatory to appoint one supervisor for every fifteen security guards. Supervisors must be experienced and trained to oversee guard performance and compliance.' },
            { q: 'Can a security agency work without a PSARA license?', a: 'No. Operating without a valid PSARA license carries severe penalties: imprisonment up to 1 year, fine up to ₹25,000, or both. The agency can also be shut down.' },
            { q: 'Can foreign nationals file for a PSARA license?', a: 'No. Only Indian citizens can apply for a PSARA license. Directors and principal officers must be Indian citizens.' },
        ],
    },

    'gumasta-license': { slug: 'gumasta-license', title: 'Gumasta License Online in India', subtitle: 'Get your Gumasta License (Shop & Establishment License) to legally operate your shop or business establishment.', heroFeatures: ['Quick Online Application', 'Valid Under Shop & Establishment Act', 'State-Level Registration', 'Annual Renewal Support', 'Compliance Assistance'], overview: { heading: 'What is a Gumasta License?', paragraphs: ['A Gumasta License, also known as Shop & Establishment License, is mandatory for all shops and commercial establishments operating in India. It is issued under the respective state\'s Shop and Establishment Act.', 'The license regulates working conditions including working hours, holidays, wages, and other employment conditions.', 'It is one of the first licenses any new business should obtain and is required for opening a bank account, GST registration, and other statutory purposes.'], highlights: [{ icon: '🏪', text: 'Mandatory for all shops and commercial establishments' }, { icon: '📋', text: 'Governs working hours, holidays, and wages' }, { icon: '🏛️', text: 'Issued by local municipal authority' }, { icon: '📅', text: 'Must be obtained within 30 days of starting business' }, { icon: '🔄', text: 'Annual renewal required in most states' }] }, eligibility: ['Any person running a shop or commercial establishment.', 'Must have a physical business address.', 'Owner must be 18+ years old.', 'Must comply with local municipal requirements.'], documents: [{ category: 'Required Documents', items: ['PAN & Aadhaar of the owner', 'Passport-sized photograph', 'Proof of business address (rent agreement / utility bill)', 'Partnership deed / Certificate of Incorporation', 'Nature of business description', 'Employee details (if any)'] }], process: [{ title: 'Submit Application', desc: 'Apply online through the state\'s portal or offline at the municipal office.', time: '' }, { title: 'Document Verification', desc: 'Authorities verify the submitted documents.', time: '' }, { title: 'Inspection (some states)', desc: 'Physical inspection of the establishment may be conducted.', time: '' }, { title: 'Receive License', desc: 'License issued after verification.', time: '7–15 days' }], fees: [{ item: 'Application Fee', cost: '₹500 – ₹5,000 (varies by state)' }, { item: 'Late Fee (if delayed)', cost: 'Penalty applicable' }, { item: 'Professional Charges', cost: '₹1,000 onwards' }], advantages: [{ icon: '✅', title: 'Legal Operation', desc: 'Legally required to run any shop or establishment.' }, { icon: '🏦', title: 'Bank Account', desc: 'Required for opening a business bank account.' }, { icon: '📋', title: 'Other Registrations', desc: 'Needed as proof for GST, FSSAI, and other registrations.' }, { icon: '👥', title: 'Employee Protection', desc: 'Ensures compliance with labour laws and employee rights.' }], faqs: [{ q: 'Is it mandatory?', a: 'Yes. Every shop and commercial establishment must obtain this license within 30 days of starting operations.' }, { q: 'What is the penalty for not having it?', a: 'Varies by state — typically fines and potential closure orders.' }, { q: 'Does it need renewal?', a: 'Yes, annual renewal is required in most states.' }] },

    'trade-license': {
        slug: 'trade-license',
        title: 'Trade License Online in India',
        subtitle: 'Get your trade license approved without delays. Your Professional ensures your application meets all legal and municipal requirements for your shop, restaurant, factory, or commercial business.',
        heroFeatures: ['Quick & Smooth Online Application Process', 'Complete Documentation & Filing Support', 'Expert Advice on License Type & Municipal Rules', 'Assistance with Renewals, Updates & Compliance Checks', 'Direct Coordination with Local Municipal Authorities'],
        overview: {
            heading: 'What is a Trade License?',
            paragraphs: [
                'A Trade License is an official document or certificate issued by a local government body, most commonly the Municipal Corporation of your city or state. This license grants you the legal permission to start and operate a particular trade or business within a specific, designated area.',
                'It is important to understand that this license regulates your business activity to ensure it aligns with local laws. It is not a document that grants you ownership of the property where you operate. Instead, it certifies that the business you are conducting is permissible at that location.',
                'The main purpose of a trade license is to ensure your business follows local safety, health, and zoning rules. This system was introduced to protect the general public from any potential nuisance or health hazards that could arise from commercial activities.',
                'Trade licenses are categorized based on the nature of business: Industrial License (manufacturing units), Shops & Establishment License (shops, offices), FSSAI License (food businesses), Professional License (doctors, lawyers, engineers), Health Trade License (restaurants, clinics), and Miscellaneous Licenses (liquor, tourism, import-export, e-commerce, real estate, factory).',
            ],
            highlights: [
                { icon: '🏛️', text: 'Issued by local Municipal Corporation' },
                { icon: '📋', text: 'Mandatory for all commercial and trading activities' },
                { icon: '📅', text: 'Valid for one financial year (April 1 – March 31)' },
                { icon: '⚖️', text: 'Ensures compliance with local safety, health, and zoning rules' },
                { icon: '🏪', text: 'Required for shops, restaurants, factories, warehouses, and more' },
                { icon: '🔄', text: 'Must be renewed annually before March 31' },
            ],
        },
        eligibility: [
            'The applicant must be a legal adult — 18 years of age or older.',
            'The applicant must not have any prior criminal convictions or records.',
            'The business activity must be legally permissible under Indian law — no unlawful activities.',
            'The trade must fall under the jurisdiction of the local municipal authority issuing the license.',
            'The business must comply with local zoning laws — the activity should be allowed in the area where it is being conducted.',
            'Required for: shop owners/retailers, service providers (salons, gyms, coaching), manufacturing units/factories, food establishments (restaurants, cafes, bakeries), home-based businesses with public interaction, warehouses/storage units, e-commerce warehouses, and freelancers operating from commercial spaces.',
        ],
        documents: [
            { category: 'Identity and Address Proof', items: ['Government-issued photo ID (Aadhaar Card, Passport, Voter ID, Driving License)', 'Address proof of business premises (Lease/Rent Agreement, Property Tax Receipt, Utility Bill)', 'PAN Card of the applicant/company'] },
            { category: 'Proof of Business Ownership', items: ['For Companies: Certificate of Incorporation, MOA, AOA', 'For Partnership Firms: Partnership Deed, Registration Certificate', 'For Proprietorships: Proprietorship Declaration or Certificate'] },
            { category: 'Proof of Business Premises', items: ['Lease Agreement (if rented)', 'Property Tax Receipt (if owned)', 'NOC from property owner, neighbors, or local authority (depending on business nature)'] },
            { category: 'Other Supporting Documents', items: ['Occupancy Certificate (proof premises are legally occupied)', 'Business Plan (brief document outlining nature and scope)', 'Layout Plan (certified layout map of premises)', 'Khata Certificate/Extract (from local municipal body)', 'Affidavit or Declaration (stating legitimacy of business)', 'GST Registration Certificate (optional, based on business nature)'] },
        ],
        process: [
            { title: 'Visit the Municipal Portal', desc: 'Go to the official website of your local Municipal Corporation (e.g., mcdonline.nic.in for Delhi, bbmp.gov.in for Bengaluru). Register or login to create an account.', time: '' },
            { title: 'Fill the Application Form', desc: 'Navigate to "Apply for New Trade License." Fill out the online form with accurate details about your business, owner(s), and premises address.', time: '' },
            { title: 'Upload Documents', desc: 'Scan and upload clear copies of all required documents in the specified format (PDF, JPG). Follow the document checklist carefully.', time: '' },
            { title: 'Pay the Fees', desc: 'The portal calculates the application fee based on your business details. Pay online using net banking, credit card, or debit card.', time: '' },
            { title: 'Submit and Track', desc: 'After payment, submit your application. The system generates a unique application number. Use this to track status on the portal.', time: '' },
            { title: 'Verification and Inspection', desc: 'A municipal official reviews your application and documents. In some cases, a physical inspection of business premises is conducted to verify safety and zoning compliance.', time: '' },
            { title: 'Approval and Download', desc: 'Once approved, you are notified via SMS or email. Log back into the portal and download the final Trade License certificate in PDF format.', time: '7–30 days total' },
        ],
        fees: [
            { item: 'Small Shop / Retail', cost: '₹500 – ₹2,000' },
            { item: 'Medium Commercial Establishment', cost: '₹2,000 – ₹5,000' },
            { item: 'Large Industrial / Commercial', cost: '₹5,000 – ₹10,000+' },
            { item: 'Delhi (MCD)', cost: 'Starts from ₹200/year (varies by area size and zone)' },
            { item: 'Maharashtra (Gumasta)', cost: 'Starts at ₹680 (varies by employee count, 1–5 year validity)' },
            { item: 'Karnataka (BBMP)', cost: 'Varies by business type/size; 5% monthly penalty for late renewal' },
            { item: 'Professional Charges', cost: '₹2,000 onwards' },
        ],
        advantages: [
            { icon: '⚖️', title: 'Avoid Penalties', desc: 'Helps you avoid fines, penalties, or forced closure by municipal authorities. Operating without a license can lead to heavy fines and immediate business sealing.' },
            { icon: '⭐', title: 'Business Credibility', desc: 'Displaying a valid trade license boosts credibility. Customers, vendors, and investors view it as a sign of professionalism, ethical conduct, and legal legitimacy.' },
            { icon: '🏦', title: 'Access to Banking Facilities', desc: 'Most banks and financial institutions require a trade license when approving business loans or opening current accounts. Acts as legal validation of your business.' },
            { icon: '📋', title: 'Pre-requisite for Other Registrations', desc: 'A trade license often becomes a prerequisite for obtaining GST registration, FSSAI license, factory licenses, and other business permits.' },
            { icon: '🛡️', title: 'Ensures Safety', desc: 'Licensing ensures your business meets key safety and environmental standards — fire safety, hygiene in food handling, pollution control — protecting customers and employees.' },
            { icon: '✅', title: 'Legal Permission to Operate', desc: 'Official permission from the municipal authority to conduct your specific trade or business in a designated area.' },
        ],
        faqs: [
            { q: 'How to get a trade license?', a: 'Apply to your local Municipal Corporation either online through the municipality\'s official website or offline by visiting the licensing department office in person.' },
            { q: 'How to apply trade license online in India?', a: 'Visit your local municipal corporation\'s portal, register/login, fill the application form, upload documents, pay fees online, and submit. Track using the application number provided.' },
            { q: 'What is the cost of a trade license in India?', a: 'Fees range from ₹500 for small shops to over ₹10,000 for large industrial establishments. The cost depends on state, city, type of business, size of premises, and location.' },
            { q: 'What are the documents required for a trade license?', a: 'Government-issued photo ID, PAN card, address proof of business premises (lease/rent agreement or property tax receipt), proof of business ownership, NOC from landlord (if rented), and layout plan.' },
            { q: 'How to renew a trade license online?', a: 'Login to the municipal portal, select "Renew Trade License," enter your license number, verify details, upload latest property tax receipt, pay renewal fee, and download the renewed license.' },
            { q: 'What is the penalty for not renewing the trade license?', a: 'Operating with an expired license is legally the same as operating without one. Late fees are charged per day/month of delay. Continued non-renewal can lead to heavy fines and potential closure.' },
            { q: 'What is the duration of time required to get a trade license certificate?', a: 'Typically 7 to 30 days after submission, depending on the municipality and whether physical inspection is required.' },
            { q: 'Is a trade license mandatory for an online business?', a: 'If you have a physical premises used for order processing, delivery hubs, or warehousing, a trade license may be required for that location.' },
            { q: 'Is a trade license mandatory for GST registration?', a: 'A trade license is often a prerequisite or supporting document for GST registration, though requirements vary by state.' },
            { q: 'Who is eligible for a trade license in India?', a: 'Any person or entity that is 18+ years old, has no criminal convictions, conducts a legally permissible business, and operates within the jurisdiction of the local municipal authority.' },
            { q: 'How many types of trade licenses are there?', a: 'Six main types: Industrial License, Shops & Establishment License, FSSAI License, Professional License, Health Trade License, and Miscellaneous Licenses (liquor, tourism, import-export, e-commerce, real estate, factory).' },
            { q: 'How to cancel a trade license?', a: 'Submit a formal cancellation application to the municipal authority, surrender the original license certificate, and provide proof of business closure (board resolution or dissolution deed).' },
            { q: 'How to find the trade license number?', a: 'The Trade License Number is printed on your certificate. It is a unique identifier essential for all future interactions with the municipal corporation including renewal and amendment.' },
            { q: 'Is a trade license required for a private limited company & proprietorship?', a: 'Yes. Any business entity — whether private limited company, LLP, partnership, or proprietorship — operating a trade within municipal limits requires a trade license.' },
        ],
    },

    'fssai-registration': { slug: 'fssai-registration', title: 'FSSAI Registration Online in India', subtitle: 'Get your FSSAI license for food business operations. Mandatory for manufacturers, retailers, distributors, and restaurants.', heroFeatures: ['FSSAI Registration in 5–7 Days', '14-Digit License Number', 'Basic / State / Central License', 'Annual Compliance Support', 'Expert Food Safety Consultants'], overview: { heading: 'What is FSSAI Registration?', paragraphs: ['FSSAI Registration is mandatory for all food businesses in India. The Food Safety and Standards Authority of India (FSSAI) regulates food safety and issues licenses under the Food Safety and Standards Act, 2006.', 'There are 3 types: Basic Registration (turnover up to ₹12 lakh), State License (₹12 lakh – ₹20 crore), and Central License (above ₹20 crore or multi-state).', 'The FSSAI license is valid for 1–5 years and must be displayed at the business premises.'], highlights: [{ icon: '🍽️', text: 'Mandatory for all food businesses' }, { icon: '🔢', text: '14-digit license number' }, { icon: '📋', text: 'Basic / State / Central categories' }, { icon: '📅', text: '1–5 year validity' }, { icon: '⚖️', text: 'Under Food Safety & Standards Act, 2006' }] }, eligibility: ['All food businesses — manufacturers, processors, retailers, restaurants, food delivery, etc.', 'Petty food operators (turnover up to ₹12 lakh) need Basic Registration.', 'Medium businesses (₹12 lakh – ₹20 crore) need State License.', 'Large businesses (above ₹20 crore or multi-state) need Central License.'], documents: [{ category: 'Required Documents', items: ['PAN & Aadhaar of owner/partners/directors', 'Business registration documents', 'Food safety management plan', 'Layout plan of the premises', 'List of food products', 'Water testing report', 'NOC from municipality', 'Equipment & machinery list'] }], process: [{ title: 'Determine License Type', desc: 'Based on turnover and business scale.', time: '' }, { title: 'Submit Application', desc: 'Apply on FSSAI FoSCoS portal with required documents.', time: '' }, { title: 'Inspection (for State/Central)', desc: 'Food safety officer inspects the premises.', time: '' }, { title: 'Receive FSSAI License', desc: 'License issued with 14-digit number.', time: '5–30 days' }], fees: [{ item: 'Basic Registration', cost: '₹100/year' }, { item: 'State License', cost: '₹2,000 – ₹5,000/year' }, { item: 'Central License', cost: '₹7,500/year' }, { item: 'Professional Charges', cost: '₹2,000 onwards' }], advantages: [{ icon: '✅', title: 'Legal Compliance', desc: 'Legally operate any food business.' }, { icon: '⭐', title: 'Consumer Trust', desc: 'FSSAI logo builds customer confidence.' }, { icon: '🏛️', title: 'Government Tenders', desc: 'Required for government food supply contracts.' }, { icon: '💰', title: 'Business Growth', desc: 'Access to larger markets and online food platforms.' }], faqs: [{ q: 'Is FSSAI mandatory?', a: 'Yes, for all food businesses — from street vendors to large manufacturers.' }, { q: 'What is the penalty for not having FSSAI?', a: 'Fine up to ₹5 lakh and imprisonment up to 6 months.' }, { q: 'What is the validity?', a: '1 to 5 years based on the period you choose during application.' }] },

    'bis-certification': { slug: 'bis-certification', title: 'BIS Registration Online in India', subtitle: 'Get Bureau of Indian Standards (BIS) certification for your products. Mandatory for electronics, steel, cement, and more.', heroFeatures: ['BIS Certification Support', 'ISI Mark & CRS Registration', 'Test Lab Coordination', 'Factory Audit Preparation', 'Renewal & Compliance Support'], overview: { heading: 'What is BIS Registration?', paragraphs: ['BIS (Bureau of Indian Standards) Registration certifies that products meet Indian quality and safety standards. It is mandatory for many categories including electronics, IT products, cement, steel, chemicals, and more.', 'There are two schemes: ISI Mark (for domestic manufacturers) and CRS (Compulsory Registration Scheme for electronics and IT products). Foreign manufacturers can also obtain BIS certification.', 'BIS certification ensures consumer safety and is mandatory for customs clearance of regulated products.'], highlights: [{ icon: '✅', text: 'Certifies products meet Indian standards' }, { icon: '🏭', text: 'ISI Mark for manufacturers' }, { icon: '💻', text: 'CRS for electronics & IT products' }, { icon: '🏛️', text: 'Under Bureau of Indian Standards Act, 2016' }, { icon: '🌍', text: 'Available for domestic and foreign manufacturers' }] }, eligibility: ['Manufacturers (Indian or foreign) of products under mandatory BIS standards.', 'Must have a manufacturing unit (or authorized Indian representative for foreign manufacturers).', 'Products must pass testing at BIS-recognized labs.', 'Factory must meet BIS quality requirements.'], documents: [{ category: 'Required Documents', items: ['Application in prescribed form', 'Test reports from BIS-recognized lab', 'Factory layout plan', 'Quality control documents', 'Product specifications', 'PAN & business registration', 'Authorization letter (for foreign manufacturers)'] }], process: [{ title: 'Product Testing', desc: 'Get products tested at a BIS-recognized lab.', time: '2–4 weeks' }, { title: 'Submit Application', desc: 'Apply on BIS portal with test reports and factory details.', time: '' }, { title: 'Factory Audit', desc: 'BIS conducts an audit of the manufacturing facility.', time: '' }, { title: 'Grant of License', desc: 'BIS issues the license after satisfactory audit.', time: '2–4 months total' }], fees: [{ item: 'Application Fee', cost: '₹1,000 – ₹10,000' }, { item: 'Testing Charges', cost: 'Varies by product' }, { item: 'Annual License Fee', cost: '₹1,000 – ₹10,000' }, { item: 'Professional Charges', cost: '₹10,000 onwards' }], advantages: [{ icon: '✅', title: 'Market Access', desc: 'BIS certification is mandatory for selling regulated products in India.' }, { icon: '⭐', title: 'Quality Assurance', desc: 'BIS mark builds consumer confidence.' }, { icon: '🏛️', title: 'Customs Clearance', desc: 'Required for importing regulated products into India.' }, { icon: '🌍', title: 'Export Credibility', desc: 'BIS-certified products have better acceptance globally.' }], faqs: [{ q: 'Which products need BIS?', a: 'Electronics, IT products, cement, steel, chemicals, safety equipment, food products, and many others under compulsory standards.' }, { q: 'Can foreign manufacturers get BIS?', a: 'Yes, through the Foreign Manufacturers Certification Scheme (FMCS) with an authorized Indian representative.' }, { q: 'What is the validity?', a: 'ISI Mark license is valid for 1–2 years. CRS registration is for the product model\'s lifecycle.' }] },

    'nidhi-company-registration': {
        slug: 'nidhi-company-registration',
        title: 'Nidhi Company Registration Online in India',
        subtitle: 'Register your Nidhi Company online with Your Professional. Get expert assistance to launch your NBFC-style entity, fully compliant with MCA norms and Nidhi Rules, 2014.',
        heroFeatures: ['MCA-Compliant Entity Setup', 'PAN & TAN Allotment + DSC for Directors', 'Bank Account Opening Guidance', 'Assistance With NDH Filings', 'Dedicated Support for Annual Returns & Reporting'],
        overview: {
            heading: 'What is a Nidhi Company?',
            paragraphs: [
                'A Nidhi Company is a special kind of Non-Banking Financial Company (NBFC). Its main job is to borrow and lend money, but only among its members. The core idea is "mutual benefit," meaning everything the company does is for its members\' good.',
                'These companies are set up under Section 406 of the Companies Act, 2013. The Ministry of Corporate Affairs (MCA) oversees them through the Nidhi Rules, 2014. While classified as an NBFC, Nidhi Companies are exempt from registering with the Reserve Bank of India (RBI).',
                'Nidhi Companies cannot issue preference shares, debentures, or any other debt instruments. They cannot conduct business such as chit funds, hire purchase, leasing, or insurance. They are regulated by MCA and must comply with the Companies Act, 2013, and Nidhi Rules, 2014.',
            ],
            highlights: [
                { icon: '🏦', text: 'Borrows and lends money only among its members' },
                { icon: '👥', text: 'Minimum 7 members at incorporation, 200 within 1 year' },
                { icon: '📋', text: 'Exempt from RBI registration — regulated by MCA' },
                { icon: '💰', text: 'Minimum paid-up capital of ₹5 lakh (₹10 lakh within 1 year)' },
                { icon: '⚖️', text: 'Under Section 406 of Companies Act, 2013' },
                { icon: '🏛️', text: 'Company name must end with "Nidhi Limited"' },
            ],
        },
        eligibility: [
            'Must be registered as a Public Company under the Companies Act, 2013.',
            'Minimum 7 members at incorporation. Must achieve 200 members within 1 year.',
            'Minimum 3 directors required. All directors must also be members of the company.',
            'Minimum paid-up capital of ₹5 lakh at incorporation, raised to ₹10 lakh within 1 year as per Nidhi Rules, 2014.',
            'Net Owned Funds (NOF) of at least ₹20 lakh must be achieved within the first year.',
            'NOF to deposit ratio must not exceed 1:20 — for every ₹1 of NOF, up to ₹20 in deposits.',
            'Company name must always end with "Nidhi Limited" (e.g., ABC Nidhi Limited).',
            'Only equity shares with a face value of at least ₹10 can be issued. Only individuals can be members — companies or trusts cannot.',
            'Must have a registered office in India for all official communications.',
            'Must keep unencumbered term deposits equal to at least 10% of outstanding deposits in a scheduled commercial bank.',
        ],
        documents: [
            { category: 'For Directors and Members', items: ['PAN Card (self-attested copy for all directors and members)', 'Identity Proof: Aadhaar Card / Voter ID / Driving License / Passport', 'Address Proof: Latest bank statement or utility bill (not older than 2 months)', 'Recent passport-size photographs of all directors and members', 'Digital Signature Certificate (DSC) for all proposed directors'] },
            { category: 'For Registered Office', items: ['Latest utility bill (electricity, telephone, or gas) not older than 2 months', 'No Objection Certificate (NOC) from landlord if premises are rented', 'Rent Agreement / Lease Deed (if rented)'] },
            { category: 'Other Incorporation Documents', items: ['Declaration from directors confirming they are not disqualified under Companies Act, 2013', 'Consent to Act as Director (Form DIR-2)', 'Memorandum of Association (MoA) with Nidhi-specific objectives', 'Articles of Association (AoA) following Nidhi Rules, 2014'] },
        ],
        process: [
            { title: 'Obtain DSC and DIN', desc: 'All proposed directors need a Class 3 Digital Signature Certificate (DSC) for electronic filing and a Director Identification Number (DIN) from MCA.', time: '1–2 days' },
            { title: 'Reserve Company Name (SPICe+ Part A)', desc: 'Apply to check if your chosen name is available using SPICe+ Part A on MCA portal. Suggest at least two names ending with "Nidhi Limited". Name must be unique and not similar to existing companies or trademarks.', time: '1–3 days' },
            { title: 'Draft MoA and AoA', desc: 'Draft the Memorandum of Association (company objectives — deposits and loans limited to members) and Articles of Association (internal rules, director roles, meetings, voting). Both must follow Nidhi Rules, 2014.', time: '' },
            { title: 'File SPICe+ Part B', desc: 'Submit the main incorporation form along with e-MoA and e-AoA. This combined application covers DIN, PAN, TAN, EPFO, ESIC, and GST registration in one filing.', time: '' },
            { title: 'Receive Certificate of Incorporation', desc: 'After verification, the Registrar of Companies (ROC) issues the Certificate of Incorporation (COI) with your Corporate Identification Number (CIN).', time: '15–20 days total' },
            { title: 'File NDH-4 for Nidhi Declaration', desc: 'Once 200 members and ₹20 lakh NOF are achieved, file Form NDH-4 with the Central Government within 120 days of incorporation to officially declare the company as a Nidhi Company.', time: '' },
        ],
        fees: [
            { item: 'MCA Government Filing Fees (for ₹5 lakh capital)', cost: '₹4,000 – ₹6,000' },
            { item: 'Stamp Duty (varies by state)', cost: '₹2,000 – ₹15,000' },
            { item: 'DSC per Director', cost: '₹1,000 – ₹1,500' },
            { item: 'Professional/Consultant Fees', cost: '₹5,000 – ₹15,000' },
            { item: 'Miscellaneous Costs', cost: '₹500 – ₹1,000' },
        ],
        advantages: [
            { icon: '⚡', title: 'Simple and Easy Formation', desc: 'Compared to other financial entities, the process is straightforward with less stringent regulations, making it easier for community groups to start and operate.' },
            { icon: '🛡️', title: 'Limited Liability Protection', desc: 'Since it\'s registered under the Companies Act, 2013, members\' and directors\' personal assets are protected from business debts.' },
            { icon: '💰', title: 'Lower Capital Requirement', desc: 'Initial capital needed (₹5 lakh) is significantly less than for other NBFCs, making it more accessible for smaller groups.' },
            { icon: '🏦', title: 'Easy Access to Funds for Members', desc: 'Members can easily get loans with less paperwork and flexible terms. Loans are usually given against gold, property, or deposits.' },
            { icon: '📊', title: 'Encourages Culture of Savings', desc: 'By accepting deposits from members, Nidhi companies naturally promote saving and smart money habits within their community.' },
            { icon: '♾️', title: 'Perpetual Succession', desc: 'A registered Nidhi company lasts forever. Its existence isn\'t affected if a member or director dies, goes bankrupt, or leaves.' },
            { icon: '🔒', title: 'No Third-Party Intervention', desc: 'Nidhi companies only deal with their members for deposits and loans. No outside parties are involved, building trust within the member group.' },
            { icon: '⭐', title: 'High Degree of Credibility', desc: 'MCA registration gives Nidhi Companies legal recognition and boosts member confidence.' },
        ],
        faqs: [
            { q: 'What is Nidhi Company Registration?', a: 'Nidhi Company Registration is the legal process to start a Nidhi Company under the Companies Act, 2013. It allows members to save and borrow money among themselves for mutual benefit. Minimum paid-up capital of ₹5 lakh is required, and at least 200 members must be achieved within one year.' },
            { q: 'How long does it take to register a Nidhi company?', a: 'The incorporation process typically takes 15–20 working days. Achieving 200 members and filing NDH-4 for official Nidhi declaration must be done within 120 days of incorporation.' },
            { q: 'Is RBI approval needed for a Nidhi company?', a: 'No. Nidhi Companies are exempt from registering with the RBI. They are regulated by the Ministry of Corporate Affairs (MCA) under the Nidhi Rules, 2014. However, the RBI can issue directives if needed to protect the financial system.' },
            { q: 'What is the main difference between a Nidhi Company and a regular NBFC?', a: 'Nidhi Companies can only deal with their members and are exempt from RBI registration. Regular NBFCs can deal with the general public and must be registered with the RBI. Nidhi Companies cannot issue debentures or preference shares.' },
            { q: 'Can a Nidhi Company accept deposits from the general public?', a: 'No. A Nidhi Company can only accept deposits from its members. It cannot advertise for deposits and can only display a simple notice board at its office with interest rates and terms.' },
            { q: 'What is the maximum loan a Nidhi Company can give to a member?', a: 'Loans are given as secured loans backed by gold, silver, property, or fixed deposit receipts held with the company. The amounts and terms must follow limits set in the Nidhi Rules.' },
            { q: 'Can a Nidhi Company operate all over India?', a: 'Nidhi companies can only open new branches after getting approval from the Regional Director and after filing Form NDH-4. Expansion is monitored closely by the MCA.' },
            { q: 'What happens if a Nidhi company does not get 200 members in its first year?', a: 'If the company fails to achieve 200 members or ₹20 lakh NOF within one year, it must file Form NDH-2 with the Regional Director within 30 days after the end of the first financial year requesting more time.' },
            { q: 'Do directors of a Nidhi company also need to be members?', a: 'Yes. Only individuals who are members can be directors. This strengthens the mutual benefit principle by keeping the company\'s leadership within its member community.' },
            { q: 'What is the minimum investment needed to start a Nidhi company?', a: 'Minimum paid-up capital of ₹5 lakh at incorporation. This must be raised to ₹10 lakh within 1 year. Additionally, Net Owned Funds (NOF) of ₹20 lakh must be maintained within the first year.' },
        ],
    },

"indian-subsidiary-registration": {
    slug: "indian-subsidiary-registration",
    title: "Indian Subsidiary Registration",
    subtitle:
      "Establish your foreign company's presence in India by registering a wholly or partly owned subsidiary under the Companies Act, 2013 — with full limited-liability protection and operational independence.",
    heroFeatures: [
      "100% Foreign Direct Investment permitted in most sectors under the automatic route",
      "Separate legal entity with limited liability shielding the parent company",
      "Eligible for government incentives, tax treaties, and DTAA benefits",
      "Full operational autonomy to conduct business, own assets, and enter contracts in India",
      "Streamlined digital incorporation through the MCA SPICe+ portal",
    ],
    overview: {
      heading: "What Is Indian Subsidiary Registration?",
      paragraphs: [
        "An Indian subsidiary is a company incorporated in India under the Companies Act, 2013, where a foreign parent company holds more than 50 percent of the total share capital. The subsidiary operates as a completely separate legal entity, meaning its debts and liabilities do not extend to the parent company. This structure is the most widely preferred route for multinational corporations looking to tap into the Indian market while retaining strategic control over operations, branding, and intellectual property.",
        "Registration begins with obtaining Digital Signature Certificates and Director Identification Numbers for the proposed directors, followed by name reservation and filing of incorporation documents through the Ministry of Corporate Affairs SPICe+ form. The process also involves obtaining a PAN, TAN, GST registration, and opening an Indian bank account for the new entity. Foreign investment approvals, if required under the sectoral cap, are routed through the Reserve Bank of India.",
        "Your Professional guides foreign businesses through every stage of subsidiary formation — from pre-incorporation advisory and regulatory clearance to post-incorporation compliance setup. Our team ensures that your Indian subsidiary is structured to maximise tax efficiency, protect intellectual property, and comply with both Indian corporate law and international reporting standards such as FEMA and transfer pricing regulations.",
      ],
      highlights: [
        { icon: "🏢", text: "Separate legal identity distinct from the foreign parent company" },
        { icon: "🛡️", text: "Limited liability protection for shareholders and parent entity" },
        { icon: "🌐", text: "Eligible for FDI up to 100% in most sectors under automatic route" },
        { icon: "📊", text: "Access to Indian double taxation avoidance agreements and incentives" },
      ],
    },
    types: [
      {
        title: "Wholly Owned Subsidiary (WOS)",
        desc: "The foreign parent company holds 100% of the share capital. This structure offers complete control over operations, strategic decisions, and profit repatriation. It is the most common choice for large multinationals entering India.",
      },
      {
        title: "Partly Owned Subsidiary",
        desc: "The foreign parent holds more than 50% but less than 100% of the shares, with the remaining equity held by Indian residents or entities. This model is useful in sectors with FDI caps or where local partnerships provide market access advantages.",
      },
      {
        title: "Step-Down Subsidiary",
        desc: "An Indian subsidiary that is itself owned by another subsidiary (not directly by the ultimate parent). This layered holding structure is used by conglomerates for regional management, tax planning, and operational segregation across multiple jurisdictions.",
      },
      {
        title: "Section 8 Subsidiary (Non-Profit)",
        desc: "A subsidiary registered under Section 8 of the Companies Act for promoting commerce, science, art, education, charity, or social welfare. Profits are applied solely towards the objects of the company, and dividends to members are prohibited.",
      },
    ],
    eligibility: [
      "The foreign parent company must be a legally incorporated entity in its home jurisdiction with a valid certificate of incorporation",
      "At least two directors are required, with a minimum of one director who is an Indian resident (stayed in India for at least 182 days in the preceding calendar year)",
      "Minimum of two shareholders are needed; the foreign parent company can be one of the shareholders",
      "The proposed subsidiary must have a registered office address in India available at the time of incorporation",
      "Foreign investment must comply with the FDI policy and FEMA regulations applicable to the proposed business sector",
      "The parent company's board resolution authorising the investment in India must be duly notarised and apostilled",
      "Minimum authorised share capital as prescribed; no statutory minimum paid-up capital requirement post Companies Amendment Act 2015",
      "If the proposed sector falls under the government approval route, prior approval from the concerned ministry and DPIIT is mandatory before incorporation",
    ],
    documents: [
      {
        category: "Foreign Parent Company Documents",
        items: [
          "Certificate of Incorporation of the parent company (notarised and apostilled)",
          "Board Resolution authorising investment in the Indian subsidiary (notarised and apostilled)",
          "Memorandum and Articles of Association of the parent company",
          "Proof of registered office address of the parent company",
          "Latest audited financial statements of the parent company",
        ],
      },
      {
        category: "Proposed Indian Directors & Shareholders",
        items: [
          "Valid passport copies of all proposed directors (self-attested)",
          "PAN card of the Indian resident director",
          "Address proof of all directors (utility bill, bank statement, or driving licence not older than 2 months)",
          "Digital Signature Certificate (DSC) for each proposed director",
          "Director Identification Number (DIN) or application for the same",
        ],
      },
      {
        category: "Registered Office & Compliance Documents",
        items: [
          "Proof of registered office in India (rental agreement or ownership deed)",
          "No Objection Certificate (NOC) from the property owner for using the premises",
          "Utility bill for the registered office address (not older than 2 months)",
          "Declaration by the first directors and subscribers under INC-9",
        ],
      },
    ],
    process: [
      {
        title: "Preliminary Advisory & Structure Planning",
        desc: "Your Professional analyses the parent company's business objectives, recommends the optimal subsidiary structure, evaluates FDI policy applicability, and prepares a detailed incorporation roadmap including capital structure and compliance obligations.",
        time: "1–2 days",
      },
      {
        title: "Obtain DSC and DIN for Directors",
        desc: "Digital Signature Certificates are obtained for all proposed directors from a licensed Certifying Authority, and Director Identification Numbers are applied for through the MCA portal. These are prerequisites for filing any incorporation form.",
        time: "2–3 days",
      },
      {
        title: "Name Reservation via RUN (Reserve Unique Name)",
        desc: "Up to two proposed names are submitted through the MCA RUN service. Names must be unique, not identical or similar to existing companies or trademarks, and must comply with the naming guidelines under the Companies Act.",
        time: "1–3 days",
      },
      {
        title: "SPICe+ Incorporation Filing",
        desc: "The SPICe+ (Simplified Proforma for Incorporating Company Electronically Plus) form is filed with the Registrar of Companies. This single integrated form covers company incorporation, DIN allotment, PAN, TAN, EPFO, ESIC, and GST registration simultaneously.",
        time: "5–7 days",
      },
      {
        title: "Certificate of Incorporation & PAN/TAN Issuance",
        desc: "Upon successful verification, the Registrar issues the Certificate of Incorporation bearing the Corporate Identity Number (CIN). PAN and TAN are automatically allotted by the Income Tax Department through the integrated SPICe+ process.",
        time: "1–2 days",
      },
      {
        title: "Bank Account Opening & Capital Infusion",
        desc: "An Indian bank account is opened in the subsidiary's name. The foreign parent company then remits the share subscription money into this account. The inward remittance is reported to the RBI via the AD bank within the stipulated time frame under FEMA.",
        time: "5–10 days",
      },
      {
        title: "Post-Incorporation Regulatory Filings",
        desc: "FC-GPR (Foreign Currency Gross Provisional Return) is filed with the RBI within 30 days of share allotment. Statutory registers are maintained, the first board meeting is convened, and the auditor is appointed within 30 days of incorporation.",
        time: "7–15 days",
      },
    ],
    fees: [
      { item: "Government filing fee (MCA SPICe+ incorporation)", cost: "₹2,000 – ₹7,500 (based on authorised capital)" },
      { item: "Stamp duty on Memorandum & Articles of Association", cost: "₹1,000 – ₹5,000 (varies by state)" },
      { item: "Digital Signature Certificate (per director)", cost: "₹1,500 – ₹2,500" },
      { item: "Director Identification Number (DIN) fee", cost: "₹500 per director" },
      { item: "Professional fees (Your Professional end-to-end service)", cost: "₹35,000 – ₹75,000" },
      { item: "RBI FC-GPR filing and FEMA compliance advisory", cost: "₹10,000 – ₹20,000" },
    ],
    penalties: [
      {
        violation: "Non-filing of FC-GPR within 30 days of share allotment",
        penalty: "Late filing fee plus compounding penalty under FEMA up to three times the amount involved; continued non-compliance may attract adjudication proceedings by the Enforcement Directorate.",
      },
      {
        violation: "Failure to hold the first board meeting within 30 days of incorporation",
        penalty: "Fine of ₹1,00,000 on the company and ₹25,000 on every defaulting director, with an additional ₹5,000 per day of continuing default.",
      },
      {
        violation: "Non-appointment of auditor within 30 days",
        penalty: "The Board must appoint the auditor within 30 days of registration; failure attracts a penalty of ₹300 per day of default on the company, subject to a maximum of ₹3,00,000.",
      },
      {
        violation: "Non-compliance with annual filing requirements (AOC-4, MGT-7)",
        penalty: "Additional fees of ₹100 per day of delay; continued default may lead to the company being marked as a defaulting company and eventual striking off by the Registrar.",
      },
    ],
    advantages: [
      {
        icon: "🔒",
        title: "Limited Liability Shield",
        desc: "The parent company's exposure is strictly limited to its investment in the subsidiary. Personal assets of directors and the parent entity are fully protected from the subsidiary's debts, lawsuits, and operational liabilities.",
      },
      {
        icon: "💼",
        title: "Full Operational Autonomy",
        desc: "The Indian subsidiary can independently enter contracts, hire employees, acquire assets, borrow funds, and conduct all business activities in its own name without requiring day-to-day involvement of the parent company.",
      },
      {
        icon: "🌍",
        title: "FDI & Treaty Benefits",
        desc: "India's extensive network of Double Taxation Avoidance Agreements and Bilateral Investment Treaties enables efficient profit repatriation, reduced withholding taxes, and investment protection for the foreign parent company.",
      },
      {
        icon: "📈",
        title: "Access to India's Growing Market",
        desc: "A locally incorporated entity gains easier access to government tenders, public-sector contracts, banking facilities, and consumer trust — crucial advantages in one of the world's fastest-growing major economies.",
      },
      {
        icon: "🏦",
        title: "Easier Fundraising & Credit Access",
        desc: "Indian subsidiaries can raise capital through equity, external commercial borrowings (ECBs), non-convertible debentures, and working capital facilities from Indian banks, often at competitive interest rates.",
      },
      {
        icon: "⚖️",
        title: "Credibility & Brand Trust",
        desc: "A registered Indian company inspires greater confidence among local customers, suppliers, regulators, and talent compared to operating through a branch office or liaison office structure.",
      },
    ],
    disadvantages: [
      "Incorporation and ongoing compliance costs are higher than branch or liaison offices, including annual statutory audit, board meetings, and multiple regulatory filings with MCA, RBI, and Income Tax authorities.",
      "Transfer pricing regulations require that all transactions between the subsidiary and the parent company be conducted at arm's length, necessitating detailed documentation, annual transfer pricing reports, and potential scrutiny from tax authorities.",
      "Winding up or closing an Indian subsidiary is a lengthy and complex process, often taking 12–24 months or more, involving clearances from multiple regulators including the NCLT, RBI, and Income Tax Department.",
      "Directors bear personal liability for non-compliance with certain statutory provisions under the Companies Act, and the Indian resident director requirement may limit flexibility in board composition.",
    ],
    compliance: [
      {
        area: "Annual Filings with MCA",
        details: "File annual financial statements (AOC-4) within 30 days of the AGM and the annual return (MGT-7) within 60 days of the AGM. Conduct a minimum of four board meetings per year with not more than 120 days between consecutive meetings.",
      },
      {
        area: "RBI & FEMA Compliance",
        details: "File FC-GPR within 30 days of share allotment to foreign investors. Submit Annual Return on Foreign Liabilities and Assets (FLA Return) to the RBI by July 15 each year. Report all downstream investments and inter-company transactions as required.",
      },
      {
        area: "Income Tax & Transfer Pricing",
        details: "File corporate income tax returns by October 31 (for companies requiring transfer pricing audit). Maintain contemporaneous transfer pricing documentation. File Form 3CEB (transfer pricing certificate) along with the tax return.",
      },
      {
        area: "GST & Other Statutory Compliances",
        details: "File monthly or quarterly GST returns depending on turnover. Comply with TDS deduction and deposit obligations. Maintain statutory registers including Register of Members, Register of Directors, and Register of Charges.",
      },
    ],
    faqs: [
      {
        q: "Can a foreign company own 100% of an Indian subsidiary?",
        a: "Yes, 100% foreign ownership is permitted in most sectors under the automatic route of India's FDI policy. Certain sectors like defence, telecom, insurance, and media have sectoral caps or require government approval. Your Professional will verify the applicable FDI limits for your specific business activity before incorporation.",
      },
      {
        q: "Is an Indian resident director mandatory for a subsidiary?",
        a: "Yes, at least one director must be a resident of India, meaning they have stayed in India for at least 182 days during the immediately preceding calendar year. This is a mandatory requirement under Section 149(3) of the Companies Act, 2013. Your Professional can assist with identifying a suitable resident director if needed.",
      },
      {
        q: "What is the minimum capital required to register a subsidiary in India?",
        a: "There is no statutory minimum paid-up capital requirement for a private limited company in India after the 2015 amendment. However, the capital should be adequate for the proposed business operations and must comply with any sector-specific requirements. Foreign exchange must be remitted through proper banking channels.",
      },
      {
        q: "How long does the entire subsidiary registration process take?",
        a: "The end-to-end process typically takes 3 to 5 weeks, depending on the speed of document collection, apostillisation of foreign documents, name availability, and RoC processing times. Your Professional's streamlined process ensures minimal delays through parallel processing of DSC, DIN, and document preparation.",
      },
      {
        q: "What is FC-GPR, and when must it be filed?",
        a: "FC-GPR (Foreign Currency Gross Provisional Return) is a reporting form submitted to the Reserve Bank of India to report the receipt of foreign investment. It must be filed within 30 days of allotment of shares to the foreign investor, through the authorised dealer bank. Late filing can attract compounding penalties under FEMA.",
      },
      {
        q: "Can the Indian subsidiary repatriate profits to the parent company?",
        a: "Yes, profits can be repatriated as dividends after payment of applicable taxes. India abolished the Dividend Distribution Tax in 2020; dividends are now taxable in the hands of the recipient. DTAA benefits may reduce withholding tax rates. Capital repatriation is also permitted subject to FEMA guidelines.",
      },
      {
        q: "What is the difference between a subsidiary and a branch office?",
        a: "A subsidiary is a separate legal entity incorporated under Indian law with its own liabilities and compliance requirements, offering limited liability protection. A branch office is an extension of the foreign company itself, with the parent directly liable for its obligations. Subsidiaries have greater operational flexibility and are eligible for government incentives.",
      },
      {
        q: "Does Your Professional handle post-incorporation compliance as well?",
        a: "Absolutely. Your Professional provides comprehensive post-incorporation support including RBI filings, annual MCA compliance, income tax returns, GST filings, transfer pricing documentation, statutory audit coordination, and ongoing regulatory advisory — ensuring your subsidiary remains fully compliant at all times.",
      },
    ],
    cta: {
      heading: "Register Your Indian Subsidiary with Confidence",
      subheading:
        "Let Your Professional handle the complexities of Indian company law, FDI regulations, and RBI compliance so you can focus on growing your business in one of the world's most dynamic markets.",
      features: [
        "End-to-end incorporation in 3–5 weeks",
        "Expert FEMA and RBI compliance management",
        "Dedicated relationship manager for your entity",
        "Post-incorporation compliance packages available",
      ],
    },
  },

  "small-scale-industries-registration": {
    slug: "small-scale-industries-registration",
    title: "Small Scale Industries Registration",
    subtitle:
      "Secure your SSI/MSME registration under the Micro, Small and Medium Enterprises Development Act, 2006 to unlock government subsidies, priority lending, tax benefits, and procurement preferences for your enterprise.",
    heroFeatures: [
      "Free online registration through the Udyam Registration portal — no fees charged",
      "Access priority sector lending from banks at concessional interest rates",
      "Eligible for government procurement preference with 25% reservation in public tenders",
      "Avail subsidies under CLCSS, PMEGP, and other central and state MSME schemes",
      "Protection against delayed payments from buyers under MSMED Act provisions",
    ],
    overview: {
      heading: "What Is Small Scale Industries (SSI/MSME) Registration?",
      paragraphs: [
        "Small Scale Industries registration, now formalised under the Udyam Registration framework introduced on 1st July 2020, is the official process by which micro, small, and medium enterprises in India obtain recognition from the Ministry of Micro, Small and Medium Enterprises. The classification is based on composite criteria of investment in plant and machinery (or equipment for service enterprises) and annual turnover, replacing the earlier system that distinguished between manufacturing and service enterprises.",
        "The registration is entirely paperless and linked to the enterprise's Aadhaar number and PAN/GSTIN. Once registered, the enterprise receives a permanent Udyam Registration Number (URN) and an e-certificate that serves as proof of MSME status for all regulatory, banking, and subsidy-related purposes. The classification is dynamic — the portal automatically reclassifies the enterprise based on ITR and GST return data filed with the government.",
        "Your Professional assists entrepreneurs, startups, and existing businesses in obtaining their SSI/MSME registration quickly and correctly. Beyond mere form-filling, we provide strategic advisory on choosing the right enterprise classification, maximising scheme eligibility, ensuring data consistency across PAN, GST, and Aadhaar records, and leveraging MSME status for tangible financial benefits such as credit guarantee coverage, technology upgradation subsidies, and preferential market access.",
      ],
      highlights: [
        { icon: "🆓", text: "Completely free registration with no government fees or renewal charges" },
        { icon: "🏭", text: "Applicable to both manufacturing and service sector enterprises" },
        { icon: "💰", text: "Unlocks subsidies, tax benefits, and concessional credit facilities" },
        { icon: "📜", text: "Permanent registration with dynamic reclassification based on ITR/GST data" },
      ],
    },
    types: [
      {
        title: "Micro Enterprise",
        desc: "Investment in plant and machinery or equipment does not exceed ₹1 crore, and annual turnover does not exceed ₹5 crore. This category covers the vast majority of small shops, home-based businesses, artisans, and early-stage startups across India.",
      },
      {
        title: "Small Enterprise",
        desc: "Investment in plant and machinery or equipment does not exceed ₹10 crore, and annual turnover does not exceed ₹50 crore. Small enterprises form the backbone of India's industrial and services economy, including established manufacturers, IT firms, and professional service providers.",
      },
      {
        title: "Medium Enterprise",
        desc: "Investment in plant and machinery or equipment does not exceed ₹50 crore, and annual turnover does not exceed ₹250 crore. Medium enterprises are typically well-established businesses with significant workforce and market presence, often serving as suppliers to large corporations.",
      },
    ],
    eligibility: [
      "Any individual, proprietorship, Hindu Undivided Family, partnership firm, co-operative society, LLP, private limited company, or public limited company engaged in manufacturing or service activities",
      "The enterprise must be engaged in the production, manufacturing, processing, or preservation of goods, or in providing or rendering services",
      "Investment in plant and machinery (for manufacturing) or equipment (for services) must fall within the prescribed MSME limits",
      "Annual turnover of the enterprise must not exceed the threshold for the applicable category (Micro: ₹5 Cr, Small: ₹50 Cr, Medium: ₹250 Cr)",
      "The proprietor or authorised signatory must possess a valid Aadhaar number linked to their mobile number for OTP verification",
      "PAN and GSTIN of the enterprise are mandatory for registration (exemption available for enterprises not required to file GST)",
      "The enterprise should not be a subsidiary, division, or unit of any large enterprise that exceeds the MSME investment and turnover thresholds",
      "Existing enterprises holding EM-Part-II or UAM registrations must migrate to the Udyam portal to retain MSME benefits",
    ],
    documents: [
      {
        category: "Identity & Business Proof",
        items: [
          "Aadhaar card of the proprietor, managing partner, or authorised signatory (mandatory for portal OTP verification)",
          "PAN card of the enterprise (or PAN of the proprietor for proprietorship firms)",
          "GSTIN certificate (if registered under GST; exemption for non-GST enterprises)",
          "Partnership deed or LLP agreement (for partnership and LLP entities)",
          "Certificate of Incorporation and MOA/AOA (for companies)",
        ],
      },
      {
        category: "Enterprise & Activity Details",
        items: [
          "Description of the main business activity with NIC (National Industrial Classification) code",
          "Details of investment in plant and machinery or equipment (bank statements, purchase invoices, or CA certificate)",
          "Details of annual turnover as per the latest ITR or audited financial statements",
          "List of products manufactured or services rendered by the enterprise",
        ],
      },
      {
        category: "Bank & Address Proof",
        items: [
          "Bank account details of the enterprise (account number, IFSC code, branch name)",
          "Proof of business premises (utility bill, rent agreement, or property tax receipt)",
          "District and state details of all plant or office locations of the enterprise",
        ],
      },
    ],
    process: [
      {
        title: "Pre-Registration Assessment & Advisory",
        desc: "Your Professional reviews your enterprise's investment, turnover, and business activity to determine the correct MSME category (Micro, Small, or Medium) and identifies the applicable NIC code. We also verify Aadhaar-PAN-GSTIN linkage to prevent rejection.",
        time: "1 day",
      },
      {
        title: "Aadhaar Verification & OTP Authentication",
        desc: "The proprietor or authorised signatory's Aadhaar number is entered on the Udyam Registration portal. An OTP is sent to the linked mobile number for real-time verification. This step establishes the identity of the applicant and is a mandatory gateway.",
        time: "10–15 minutes",
      },
      {
        title: "Enterprise Information Submission",
        desc: "Complete enterprise details are filled in the online form including legal name, type of organisation, PAN, GSTIN, address of all plants and offices, date of commencement, bank account details, and the main business activity with corresponding NIC code.",
        time: "30–60 minutes",
      },
      {
        title: "Investment & Turnover Declaration",
        desc: "Details of investment in plant and machinery or equipment and annual turnover are declared. The portal auto-validates these figures against ITR and GST data filed with the government. Any discrepancy must be resolved before proceeding.",
        time: "15–30 minutes",
      },
      {
        title: "Submission & Auto-Verification",
        desc: "Upon submission, the portal cross-verifies the declared information with government databases including Income Tax, GST Network, and GeM. The enterprise classification is automatically determined based on the composite criteria of investment and turnover.",
        time: "Instant to 1–2 days",
      },
      {
        title: "Udyam Registration Certificate Issuance",
        desc: "A permanent Udyam Registration Number (URN) and an e-certificate are generated and sent to the registered email address. The certificate contains the enterprise name, type, category, URN, date of incorporation, and NIC code. No physical certificate is issued.",
        time: "Instant (upon successful verification)",
      },
      {
        title: "Post-Registration Benefit Activation",
        desc: "Your Professional assists in activating scheme benefits — registering on the GeM portal for government procurement, applying for CLCSS subsidy, opening a CGTMSE-backed credit facility, and enrolling in state-level MSME incentive programmes applicable to your district.",
        time: "3–7 days",
      },
    ],
    fees: [
      { item: "Government fee for Udyam Registration", cost: "₹0 (completely free)" },
      { item: "Professional assistance fee (Your Professional)", cost: "₹1,500 – ₹3,500" },
      { item: "CA certificate for investment/turnover (if required)", cost: "₹2,000 – ₹5,000" },
      { item: "GST registration (if not already registered)", cost: "₹2,000 – ₹4,000" },
      { item: "NIC code identification and advisory", cost: "Included in professional fee" },
      { item: "Post-registration scheme enrolment support", cost: "₹2,000 – ₹5,000 (optional)" },
    ],
    penalties: [
      {
        violation: "Filing false or misleading information in the Udyam Registration form",
        penalty: "The registration is liable to be cancelled after due verification. The enterprise may also face prosecution under Section 27 of the MSMED Act, 2006, and penalties under the Indian Penal Code for furnishing false information to a government authority.",
      },
      {
        violation: "Non-updation of enterprise information upon change in investment or turnover",
        penalty: "The enterprise may lose its MSME classification and associated benefits. The Udyam portal periodically reclassifies enterprises based on ITR and GST data; failure to update may result in automatic upgrading or disqualification from scheme benefits.",
      },
      {
        violation: "Continued use of MSME benefits after exceeding the prescribed thresholds",
        penalty: "Benefits availed fraudulently are recoverable by the government along with interest. The enterprise may be blacklisted from government procurement portals (GeM) and barred from future MSME scheme participation for a defined period.",
      },
    ],
    advantages: [
      {
        icon: "🏦",
        title: "Priority Sector Lending",
        desc: "Banks are mandated by the RBI to allocate a significant portion of their lending to the MSME sector. Registered MSMEs benefit from easier loan approvals, lower interest rates, and access to collateral-free credit up to ₹2 crore under the CGTMSE scheme.",
      },
      {
        icon: "💸",
        title: "Government Subsidies & Schemes",
        desc: "Registered enterprises can avail capital subsidies of 15–25% under the Credit Linked Capital Subsidy Scheme (CLCSS) for technology upgradation, along with benefits under PMEGP, SFURTI, ZED Certification, and numerous state-level incentive programmes.",
      },
      {
        icon: "🛒",
        title: "Government Procurement Preference",
        desc: "Central government ministries and CPSEs are required to procure at least 25% of their annual purchases from MSMEs, with 4% sub-target for SC/ST-owned and 3% for women-owned enterprises. Registration on the GeM portal provides direct access to these tenders.",
      },
      {
        icon: "⏱️",
        title: "Protection Against Delayed Payments",
        desc: "Under the MSMED Act, buyers must make payment to MSME suppliers within 45 days of acceptance. In case of delayed payment, the buyer is liable to pay compound interest at three times the bank rate, and the dispute can be resolved through the MSME Facilitation Council.",
      },
      {
        icon: "📉",
        title: "Tax & Regulatory Benefits",
        desc: "MSMEs enjoy concessional tax rates, exemptions from certain direct tax provisions, reduced patent filing fees (50% rebate), and simplified compliance requirements. State governments offer additional incentives including stamp duty exemption, electricity duty waivers, and land at subsidised rates.",
      },
      {
        icon: "🎓",
        title: "Skill Development & Market Access",
        desc: "Registered MSMEs get access to government-sponsored skill development programmes, technology centres, tool rooms, and testing laboratories. Trade fair participation subsidies, export promotion support, and cluster development programmes further enhance market reach.",
      },
    ],
    disadvantages: [
      "The MSME classification is dynamic and linked to ITR/GST data; an enterprise may be automatically reclassified (upgraded) if its investment or turnover exceeds the threshold in a particular year, potentially losing benefits associated with the lower category.",
      "Certain benefits are available only to manufacturing enterprises, and some central government schemes have additional eligibility criteria beyond mere Udyam registration, requiring separate applications and documentation.",
      "The Aadhaar-based registration process can pose challenges for enterprises with multiple partners or directors, as only one Aadhaar is linked to the registration, potentially creating dependency on a single individual.",
      "Enterprises operating in the informal sector without proper books of account, PAN, or GST registration may find it difficult to demonstrate accurate investment and turnover figures required for correct classification.",
    ],
    compliance: [
      {
        area: "Udyam Registration Update",
        details: "Enterprise information on the Udyam portal must be updated whenever there is a change in investment, turnover, business activity, address, or any other registered detail. The portal also auto-updates classification based on annual ITR and GST return data.",
      },
      {
        area: "Statutory Filings & Returns",
        details: "MSMEs must comply with all applicable statutory filings including GST returns (GSTR-1, GSTR-3B), income tax returns, TDS returns, and any industry-specific filings. Proprietorships file ITR-3 or ITR-4 (presumptive); companies file ITR-6.",
      },
      {
        area: "Labour Law & Factory Compliance",
        details: "Manufacturing MSMEs must comply with the Factories Act (if employing 10+ workers with power or 20+ without), EPF and ESI contributions, Shops & Establishments Act registration, and other applicable labour laws. Many states offer simplified single-window compliance for MSMEs.",
      },
      {
        area: "Environmental & Quality Certifications",
        details: "Depending on the industry, MSMEs may need to obtain Consent to Establish and Consent to Operate from the State Pollution Control Board, BIS certification for products, FSSAI licence for food products, or ISO certification for quality management systems.",
      },
    ],
    faqs: [
      {
        q: "Is SSI registration the same as MSME/Udyam registration?",
        a: "Yes, SSI registration has been superseded by MSME registration, which is now conducted exclusively through the Udyam Registration portal. The old SSI, EM-Part-II, and Udyog Aadhaar Memorandum (UAM) registrations have all been replaced by Udyam Registration effective 1st July 2020. All existing registrations needed to be migrated to the Udyam portal.",
      },
      {
        q: "Is there any fee for Udyam/MSME registration?",
        a: "No, the government charges absolutely no fee for Udyam Registration. The process is entirely free and can be completed online at udyamregistration.gov.in. Be cautious of third-party websites that charge registration fees claiming to be the official portal. Your Professional charges only for professional advisory and assistance services.",
      },
      {
        q: "What is the validity of the Udyam Registration certificate?",
        a: "The Udyam Registration certificate is valid permanently and does not require renewal. However, the enterprise classification (Micro, Small, or Medium) is dynamic and may change based on the investment and turnover data reported in your ITR and GST returns. The portal automatically updates the classification accordingly.",
      },
      {
        q: "Can a service enterprise register as an MSME?",
        a: "Yes, the current MSME classification framework applies uniformly to both manufacturing and service enterprises. The distinction between manufacturing and service sectors was removed in the revised classification criteria notified on 1st June 2020. Both types are now classified based on the same composite criteria of investment and turnover.",
      },
      {
        q: "How is the investment in plant and machinery calculated for classification?",
        a: "The calculation is linked to the Income Tax Return filed by the enterprise. It includes the written down value of plant and machinery or equipment as per the IT Act, excluding land, building, furniture, and fittings. Second-hand machinery purchased is also included. The Udyam portal auto-fetches this data from the ITR filed with the government.",
      },
      {
        q: "Can a company with foreign investment register as an MSME?",
        a: "Yes, there is no restriction on foreign investment for MSME registration, provided the enterprise meets the investment and turnover criteria. However, a subsidiary of a large enterprise that itself exceeds MSME thresholds would not qualify. The registration is based on the individual enterprise's own financials, not the parent entity's.",
      },
      {
        q: "What are the benefits of MSME registration for government tenders?",
        a: "Registered MSMEs enjoy procurement preference under the Public Procurement Policy — 25% of central government procurement is reserved for MSMEs. Additionally, MSMEs are exempt from submitting Earnest Money Deposit (EMD) and security deposit in government tenders. Registration on the GeM portal with a valid URN provides direct access to these opportunities.",
      },
      {
        q: "Can Your Professional help with scheme applications after registration?",
        a: "Yes, Your Professional provides end-to-end support beyond just Udyam Registration. We assist with GeM portal registration, CLCSS subsidy applications, CGTMSE credit guarantee enrolment, state MSME scheme applications, and ongoing compliance management to ensure your enterprise maximises all available benefits from its MSME status.",
      },
    ],
    cta: {
      heading: "Get Your MSME Registration Today",
      subheading:
        "Your Professional makes SSI/MSME registration effortless — from eligibility assessment and correct classification to post-registration benefit activation across central and state government schemes.",
      features: [
        "Quick registration with expert guidance",
        "Correct NIC code and category classification",
        "Post-registration scheme enrolment assistance",
        "Ongoing compliance and advisory support",
      ],
    },
  },

"foreign-subsidiary-company-registration": {
    slug: "foreign-subsidiary-company-registration",
    title: "Foreign Subsidiary Company Registration",
    subtitle:
      "Establish your Indian company's global footprint by registering a wholly-owned or majority-held subsidiary in a foreign jurisdiction with expert end-to-end guidance from Your Professional.",
    heroFeatures: [
      "Complete overseas subsidiary incorporation support",
      "Multi-jurisdiction compliance and structuring",
      "RBI and FEMA regulatory approval assistance",
      "Dedicated international business advisory team",
      "Post-incorporation governance and annual compliance"
    ],
    overview: {
      heading: "Expand Beyond Borders with a Foreign Subsidiary",
      paragraphs: [
        "A Foreign Subsidiary Company is an entity incorporated outside India in which an Indian parent company holds more than fifty percent of the equity share capital. This corporate structure empowers Indian businesses to access international markets, serve overseas clients directly, tap into foreign talent pools, and benefit from favourable tax treaties and investment incentives offered by host countries. Your Professional brings decades of cross-border advisory experience to simplify every step of this complex journey.",
        "Setting up a foreign subsidiary involves navigating dual regulatory frameworks — the Indian foreign exchange management regime under FEMA and the RBI's Overseas Direct Investment (ODI) regulations on one hand, and the company law, tax, and licensing requirements of the host jurisdiction on the other. Our team coordinates with local legal counsel, chartered accountants, and registered agents across key jurisdictions to ensure seamless incorporation and ongoing compliance.",
        "Whether you are a technology startup looking to establish a presence in the United States, a manufacturing company expanding into Southeast Asia, or a services firm entering European markets, Your Professional tailors the subsidiary structure to your strategic objectives — choosing the right entity type, optimising holding structures, and setting up transfer-pricing frameworks from day one."
      ],
      highlights: [
        { icon: "🌍", text: "Presence in 50+ jurisdictions worldwide through our partner network" },
        { icon: "⚖️", text: "Full FEMA and RBI ODI regulatory compliance management" },
        { icon: "📊", text: "Tax-efficient holding and operational structure planning" },
        { icon: "🤝", text: "End-to-end coordination with local agents and legal counsel" }
      ]
    },
    types: [
      {
        title: "Wholly-Owned Subsidiary (WOS)",
        desc: "The Indian parent holds 100% equity in the foreign entity. This provides maximum control over operations, intellectual property, and profits. Ideal for companies wanting full strategic autonomy in the host country."
      },
      {
        title: "Majority-Owned Subsidiary",
        desc: "The Indian parent holds between 51% and 99% equity, with the remainder held by local or third-party investors. This structure is often mandated in jurisdictions that require local participation or is chosen to leverage a local partner's market knowledge."
      },
      {
        title: "Step-Down Subsidiary",
        desc: "A subsidiary incorporated under an existing overseas subsidiary rather than directly under the Indian parent. This multi-tier structure is used for ring-fencing risk, optimising withholding taxes through treaty networks, or meeting specific regulatory requirements in certain jurisdictions."
      },
      {
        title: "Joint Venture Subsidiary",
        desc: "Formed with a foreign partner where the Indian entity holds the majority stake. This is common in markets where local partnerships accelerate regulatory approvals, distribution access, and brand acceptance."
      }
    ],
    eligibility: [
      "The Indian parent must be a company registered under the Companies Act, 2013, or a body corporate established under an Act of Parliament",
      "The parent entity must have a satisfactory track record of profitability — net profit in at least the preceding three out of five financial years from the Indian operations",
      "The proposed overseas investment must not exceed 400% of the net worth of the Indian parent as per the last audited balance sheet under the automatic route",
      "The Indian entity must not be on the RBI caution list or the specific approval list of the Reserve Bank",
      "All existing foreign exchange obligations, including export obligations and previous ODI reporting, must be up to date",
      "The Indian parent must obtain a Unique Identification Number (UIN) from the RBI through an Authorised Dealer bank before making the overseas investment",
      "If the investment exceeds the automatic route limit, prior approval from the RBI under the approval route is mandatory",
      "The parent entity must comply with all sectoral regulations applicable to the proposed business activity in the host country"
    ],
    documents: [
      {
        category: "Indian Parent Company Documents",
        items: [
          "Certified copy of the Certificate of Incorporation and Memorandum & Articles of Association",
          "Board Resolution approving the overseas investment and authorising a signatory",
          "Audited financial statements for the last three financial years",
          "Net worth certificate issued by the statutory auditor not older than six months",
          "Copy of the PAN card and GST registration certificate of the company"
        ]
      },
      {
        category: "RBI and FEMA Filings",
        items: [
          "Form ODI – Part I (Application for Overseas Direct Investment) filed through the Authorised Dealer bank",
          "Annual Performance Report (APR) of any existing overseas subsidiaries",
          "Evidence of the Unique Identification Number allotted by the RBI",
          "Valuation certificate from a SEBI-registered merchant banker if acquiring an existing entity"
        ]
      },
      {
        category: "Host Country Incorporation Documents",
        items: [
          "Proposed company name reservation or availability confirmation",
          "Memorandum and Articles of Association or equivalent constitutional documents as per host jurisdiction",
          "Identification and address proof of proposed directors and shareholders (passport, utility bill)",
          "Registered office address proof in the host country (lease agreement or utility bill)",
          "Apostilled or notarised Power of Attorney in favour of the local registered agent"
        ]
      }
    ],
    process: [
      {
        title: "Strategic Planning & Jurisdiction Selection",
        desc: "Our advisors assess your business goals, target markets, and regulatory landscape to recommend the optimal host jurisdiction, entity type, and holding structure. We prepare a detailed feasibility report covering tax implications, repatriation rules, and compliance costs.",
        time: "3–5 business days"
      },
      {
        title: "Board Approval & Internal Documentation",
        desc: "We draft the board resolution, investment proposal, and shareholder approval documents required under the Companies Act and FEMA regulations. All internal governance steps are completed before approaching the regulator.",
        time: "2–3 business days"
      },
      {
        title: "RBI / Authorised Dealer Bank Filing",
        desc: "Form ODI Part I is prepared and filed through your Authorised Dealer bank. We coordinate with the bank to ensure all supporting documents — net worth certificate, valuation report, and APRs — are in order for seamless processing.",
        time: "7–15 business days"
      },
      {
        title: "Host Country Name Reservation & Incorporation",
        desc: "Working with our local partner in the chosen jurisdiction, we reserve the company name, prepare and file constitutional documents, appoint directors, and obtain the Certificate of Incorporation or equivalent registration.",
        time: "5–20 business days (varies by jurisdiction)"
      },
      {
        title: "Bank Account Opening & Capital Remittance",
        desc: "A corporate bank account is opened in the host country. Upon receipt of the incorporation certificate, the approved investment amount is remitted from the Indian parent's Authorised Dealer bank to the subsidiary's account.",
        time: "5–10 business days"
      },
      {
        title: "Post-Incorporation Registrations",
        desc: "We assist with obtaining the tax identification number, VAT or sales tax registration, employer registration, and any sector-specific licences required in the host jurisdiction to commence business operations.",
        time: "5–15 business days"
      },
      {
        title: "Compliance Setup & Handover",
        desc: "A compliance calendar is set up covering Indian ODI reporting (Form ODI Part II, APR), host-country annual filings, transfer-pricing documentation, and statutory audit timelines. All records and credentials are handed over in a secure digital vault.",
        time: "3–5 business days"
      }
    ],
    fees: [
      { item: "Professional Fee – Jurisdiction Analysis & Structuring Advisory", cost: "₹25,000 – ₹50,000" },
      { item: "RBI / Authorised Dealer Filing & Coordination", cost: "₹15,000 – ₹30,000" },
      { item: "Host Country Incorporation (Government Fees + Local Agent)", cost: "USD 1,500 – USD 8,000 (varies by jurisdiction)" },
      { item: "Registered Agent Annual Retainer (Host Country)", cost: "USD 500 – USD 2,000 per year" },
      { item: "Transfer Pricing Study & Documentation", cost: "₹50,000 – ₹1,50,000" },
      { item: "Annual Compliance Management (India + Host Country)", cost: "₹30,000 – ₹75,000 per year" }
    ],
    penalties: [
      {
        violation: "Non-filing or delayed filing of Form ODI Part II with the RBI",
        penalty: "Penalty up to three times the amount involved in the contravention or ₹2 lakh, whichever is higher, under FEMA Section 13"
      },
      {
        violation: "Failure to submit the Annual Performance Report (APR) by 31 December each year",
        penalty: "Compounding fees starting at ₹5,000 per instance plus potential restriction on further outward remittances until compliance is restored"
      },
      {
        violation: "Making overseas investment without RBI approval where required",
        penalty: "The entire investment may be treated as a contravention; penalty up to three times the sum involved and possible direction to disinvest and repatriate proceeds"
      },
      {
        violation: "Non-compliance with host country annual filing or tax obligations",
        penalty: "Varies by jurisdiction — may include late-filing fees, interest on unpaid taxes, director disqualification, or involuntary dissolution of the entity"
      }
    ],
    advantages: [
      {
        icon: "🌐",
        title: "Direct Market Access",
        desc: "A foreign subsidiary allows your company to contract with local clients, participate in government tenders, open local bank accounts, and build brand credibility in the host market — advantages that are difficult to achieve through cross-border service delivery alone."
      },
      {
        icon: "🛡️",
        title: "Limited Liability Protection",
        desc: "The subsidiary is a separate legal entity; the Indian parent's liability is restricted to its equity contribution. This corporate veil shields the parent from operational risks, litigation, and regulatory actions in the foreign jurisdiction."
      },
      {
        icon: "💰",
        title: "Tax Treaty Benefits",
        desc: "A properly structured subsidiary can leverage Double Taxation Avoidance Agreements to reduce withholding taxes on dividends, interest, and royalties flowing between the parent and subsidiary, significantly improving after-tax returns."
      },
      {
        icon: "📈",
        title: "Access to Foreign Capital",
        desc: "A locally incorporated subsidiary can raise debt or equity in the host country, access local banking facilities, and benefit from government grants or incentive schemes available to domestic entities."
      },
      {
        icon: "🧠",
        title: "Talent Acquisition",
        desc: "Having a local entity makes it straightforward to hire employees, sponsor work visas, and offer locally compliant employment contracts — critical for building dedicated engineering, sales, or support teams abroad."
      },
      {
        icon: "🔄",
        title: "Operational Flexibility",
        desc: "The subsidiary can independently manage its operations, enter into contracts, own intellectual property, and make investment decisions, providing the agility needed to respond quickly to local market conditions."
      }
    ],
    disadvantages: [
      "Dual regulatory compliance across Indian and host-country jurisdictions increases administrative burden and professional costs, especially for small and medium enterprises",
      "Repatriation of profits to India is subject to host-country withholding taxes and RBI reporting requirements, which can delay and reduce the effective return on investment",
      "Differences in accounting standards, financial-year periods, and audit requirements between India and the host country can create complexity in consolidated financial reporting",
      "Ongoing transfer-pricing documentation obligations under both Indian and host-country tax laws require maintaining detailed intercompany transaction records and benchmarking studies"
    ],
    compliance: [
      {
        area: "RBI Overseas Direct Investment Reporting",
        details: "File Form ODI Part II within 30 days of receiving shares in the subsidiary. Submit the Annual Performance Report (APR) by 31 December each year for every overseas subsidiary or step-down subsidiary."
      },
      {
        area: "Host Country Annual Filings",
        details: "File annual returns, financial statements, and tax returns within the deadlines prescribed by the host country's company registry and tax authority. Maintain registered agent services and a registered office address at all times."
      },
      {
        area: "Transfer Pricing Documentation",
        details: "Prepare and maintain contemporaneous transfer-pricing documentation under Section 92D of the Income Tax Act for all intercompany transactions. File Form 3CEB with the Indian income-tax return if the aggregate value of international transactions exceeds ₹1 crore."
      },
      {
        area: "Indian Parent Company Disclosures",
        details: "Disclose the foreign subsidiary in the Indian parent's annual financial statements under Schedule III of the Companies Act. Prepare Consolidated Financial Statements including the subsidiary as per Ind AS 110."
      }
    ],
    faqs: [
      {
        q: "What is the maximum amount an Indian company can invest in a foreign subsidiary?",
        a: "Under the automatic route, an Indian company can invest up to 400% of its net worth as per the last audited balance sheet. Investments exceeding this threshold require prior approval from the Reserve Bank of India under the approval route."
      },
      {
        q: "Can a private limited company or LLP set up a foreign subsidiary?",
        a: "Yes. Both private limited companies and LLPs registered in India can set up foreign subsidiaries. LLPs follow a slightly different regulatory framework under the FEMA (Transfer or Issue of Any Foreign Security) Regulations, but the core ODI process is similar."
      },
      {
        q: "How long does it take to incorporate a foreign subsidiary end to end?",
        a: "The total timeline typically ranges from four to eight weeks, depending on the host jurisdiction. Jurisdictions like Singapore, the UAE, and the United Kingdom have faster incorporation processes (often under two weeks), while others may take longer due to additional licensing requirements."
      },
      {
        q: "Is it mandatory to appoint a local director in the foreign subsidiary?",
        a: "This depends entirely on the host jurisdiction's company law. Many countries, including Singapore, the UK, and several EU member states, require at least one locally resident director. Our team ensures you meet all directorship requirements during incorporation."
      },
      {
        q: "What are the ongoing compliance obligations for the Indian parent?",
        a: "The Indian parent must file Form ODI Part II after shares are allotted, submit the Annual Performance Report by 31 December each year, disclose the subsidiary in its annual financial statements, prepare consolidated accounts, and maintain transfer-pricing documentation for intercompany transactions."
      },
      {
        q: "Can the foreign subsidiary repatriate profits to the Indian parent?",
        a: "Yes. Dividends declared by the foreign subsidiary can be repatriated to India. The dividend may be subject to withholding tax in the host country, which can often be reduced under the applicable Double Taxation Avoidance Agreement. The Indian parent must report the receipt through its Authorised Dealer bank."
      },
      {
        q: "What happens if we fail to file the Annual Performance Report?",
        a: "Non-filing of the APR is treated as a contravention under FEMA. The RBI may impose compounding penalties and restrict the Indian entity from making any further overseas investments until the APR backlog is cleared and penalties are compounded."
      },
      {
        q: "How does Your Professional assist after the subsidiary is incorporated?",
        a: "We provide a comprehensive post-incorporation compliance service that includes RBI reporting, host-country annual filings, transfer-pricing documentation, statutory audit coordination, and ongoing advisory on regulatory changes affecting your subsidiary."
      }
    ],
    cta: {
      heading: "Ready to Take Your Business Global?",
      subheading:
        "Let Your Professional handle the complexities of foreign subsidiary registration so you can focus on capturing international markets.",
      features: [
        "Free 30-minute jurisdiction selection consultation",
        "End-to-end RBI and host-country filing management",
        "Dedicated international compliance team",
        "Transparent pricing with no hidden charges"
      ]
    }
  },

  "foreign-company-registration": {
    slug: "foreign-company-registration",
    title: "Foreign Company Registration",
    subtitle:
      "Navigate the regulatory landscape of establishing a foreign company's place of business or liaison, branch, or project office in India under Sections 380–386 of the Companies Act, 2013 with Your Professional's comprehensive registration services.",
    heroFeatures: [
      "Complete Section 380–386 compliance management",
      "RBI approval for Branch, Liaison & Project Offices",
      "ROC filing and FC-1 to FC-4 form preparation",
      "Ongoing annual compliance and regulatory advisory",
      "Dedicated India-entry strategy consulting"
    ],
    overview: {
      heading: "Bring Your Global Business to India",
      paragraphs: [
        "A Foreign Company, as defined under Section 2(42) of the Companies Act, 2013, is any company or body corporate incorporated outside India that establishes a place of business within India. Sections 380 through 386 of the Act lay down a comprehensive framework governing the registration, reporting, and conduct of such entities on Indian soil. Whether your organisation seeks to open a liaison office for market exploration, a branch office for revenue-generating activities, or a project office for executing a specific contract, Your Professional provides end-to-end regulatory guidance.",
        "Registration of a foreign company in India requires coordinated filings with the Registrar of Companies (ROC), the Reserve Bank of India (RBI), and in certain cases, sector-specific regulators such as SEBI, IRDA, or the Department of Industrial Policy and Promotion. The process involves obtaining RBI approval under the Foreign Exchange Management (Establishment in India of a Branch Office, Liaison Office, or Project Office) Regulations, followed by registration with the ROC by filing Form FC-1 within thirty days of establishing a place of business.",
        "Your Professional's team of company secretaries, chartered accountants, and legal advisors works as a single point of contact — coordinating with your global headquarters, Indian regulatory authorities, and local service providers to ensure a smooth, timeline-driven setup process. We have helped over 200 foreign entities across technology, manufacturing, financial services, and infrastructure sectors establish their Indian presence."
      ],
      highlights: [
        { icon: "🏛️", text: "Comprehensive Sections 380–386 compliance from day one" },
        { icon: "📋", text: "Seamless RBI approval for Branch, Liaison & Project Offices" },
        { icon: "🕐", text: "Typical registration completed within 6–10 weeks" },
        { icon: "🔒", text: "Ongoing regulatory monitoring and annual filing management" }
      ]
    },
    types: [
      {
        title: "Liaison Office (Representative Office)",
        desc: "A liaison office acts as a communication channel between the foreign head office and Indian parties. It cannot undertake any commercial, trading, or industrial activity in India. Permitted activities include collecting market information, promoting the parent's products, facilitating technical or financial collaborations, and representing the parent in purchases or sales as a buying or selling agent."
      },
      {
        title: "Branch Office",
        desc: "A branch office of a foreign company can carry out a wider range of activities including export and import of goods, rendering professional or consulting services, conducting research, promoting technical or financial collaborations, and acting as a buying or selling agent. Unlike a liaison office, a branch office may generate revenue in India, subject to RBI and sectoral regulations."
      },
      {
        title: "Project Office",
        desc: "A project office is established to execute a specific project in India, typically awarded by an Indian company or government body. The RBI grants general permission for setting up a project office provided the project is funded by inward remittance, a bilateral or multilateral financing institution, or the project has been cleared by an appropriate authority. The office must close upon project completion."
      },
      {
        title: "Place of Business (Section 380 Registration)",
        desc: "Any other form of presence that constitutes a 'place of business' — such as a warehouse, a data centre, a representative's home office used regularly for company affairs, or a factory — triggers the registration obligation under Section 380 even without a formal RBI-approved office category."
      }
    ],
    eligibility: [
      "The foreign entity must be a company or body corporate validly incorporated and existing under the laws of its home jurisdiction",
      "The parent company must have a proven track record of profitable operations — generally a net worth of at least USD 100,000 or its equivalent for liaison and branch office approvals",
      "The principal business activity of the foreign company must fall within the sectors permitted by the RBI for the chosen office type (liaison, branch, or project)",
      "For branch offices, the parent entity's home country must have reciprocal arrangements allowing Indian companies to establish branch offices there",
      "For project offices, the parent must have secured a contract from an Indian entity to execute a specific project, and the project must be funded through permissible channels",
      "The foreign company must not be engaged in any activity prohibited under the Foreign Direct Investment policy or placed on any restricted entity list by Indian authorities",
      "The applicant must demonstrate the ability to maintain the Indian office financially through inward remittances from the head office or, in the case of project offices, through project receipts",
      "All proposed activities of the Indian office must comply with the Foreign Exchange Management Act, 1999, and regulations issued thereunder"
    ],
    documents: [
      {
        category: "Parent Company Corporate Documents",
        items: [
          "Certified copy of the Certificate of Incorporation or equivalent registration document of the foreign company, apostilled or consularised",
          "Certified copy of the Charter, Statute, Memorandum and Articles of Association or equivalent constitutional documents",
          "Full list of directors and secretary of the foreign company with their names, addresses, nationalities, and passport details",
          "Audited financial statements of the foreign company for the latest two financial years",
          "Board Resolution or equivalent authority document approving the establishment of a place of business in India and authorising a representative"
        ]
      },
      {
        category: "RBI Application Documents",
        items: [
          "Application in the prescribed form (Form FNC) to the Reserve Bank of India through an Authorised Dealer Category-I bank",
          "Banker's certificate from the foreign company's home country bank confirming the company's financial standing and track record",
          "Detailed activity plan describing the proposed operations, projected revenue (for branch offices), staffing, and duration",
          "Power of Attorney or authorisation letter in favour of the authorised representative in India, duly notarised and apostilled"
        ]
      },
      {
        category: "ROC Registration Documents (Form FC-1)",
        items: [
          "Form FC-1 (Registration of Foreign Company) filed electronically on the MCA portal within 30 days of establishing a place of business",
          "Proof of the registered office or place of business in India — lease or rental agreement and a utility bill not older than two months",
          "Details of the authorised representative resident in India, including PAN, Aadhaar, address proof, and a declaration of consent (Form FC-2)",
          "Digital Signature Certificate (DSC) of the authorised representative for electronic filing on the MCA portal"
        ]
      }
    ],
    process: [
      {
        title: "India-Entry Strategy Assessment",
        desc: "We begin with a comprehensive assessment of your business objectives, target sectors, and operational requirements in India. Based on this analysis, we recommend the most appropriate office type — liaison, branch, or project — along with a location strategy, tax planning, and regulatory roadmap.",
        time: "3–5 business days"
      },
      {
        title: "Document Preparation & Apostillisation",
        desc: "All parent company documents are compiled, translated into English where necessary, and apostilled or consularised as per Indian requirements. The board resolution, Power of Attorney, and activity plan are drafted and executed by the foreign company's authorised signatories.",
        time: "5–10 business days"
      },
      {
        title: "RBI Approval Application",
        desc: "The application for establishing a liaison, branch, or project office is filed with the RBI through an Authorised Dealer Category-I bank. We coordinate with the bank, provide all supporting documents, and respond to any queries raised by the RBI during the review process.",
        time: "15–30 business days"
      },
      {
        title: "Indian Office Setup",
        desc: "Upon receiving RBI approval, we assist with securing a registered office address, executing the lease agreement, obtaining a PAN and TAN for the Indian office, and setting up the initial corporate bank account with an Authorised Dealer bank.",
        time: "5–7 business days"
      },
      {
        title: "ROC Registration – Form FC-1 Filing",
        desc: "Form FC-1 is prepared and filed electronically on the MCA portal within 30 days of establishing the place of business. We ensure all annexures — including translated and apostilled constitutional documents, director details, and representative declarations — are correctly uploaded.",
        time: "3–5 business days"
      },
      {
        title: "Post-Registration Compliances",
        desc: "We obtain the Corporate Identity Number (CIN) for the foreign company, complete GST registration if applicable, register under the Shops and Establishments Act of the relevant state, and complete any sector-specific registrations required for your business activities.",
        time: "7–10 business days"
      },
      {
        title: "Compliance Onboarding & Handover",
        desc: "A detailed compliance calendar is prepared covering annual ROC filings (Form FC-3, FC-4), RBI annual activity certificates, income-tax return filings, GST returns, transfer-pricing documentation, and statutory audit coordination. All credentials and records are securely transferred to your team.",
        time: "3–5 business days"
      }
    ],
    fees: [
      { item: "India-Entry Strategy Advisory & Office-Type Recommendation", cost: "₹20,000 – ₹40,000" },
      { item: "RBI Application Preparation & Filing (Liaison / Branch / Project Office)", cost: "₹30,000 – ₹60,000" },
      { item: "ROC Registration – Form FC-1 Filing (Including Government Fees)", cost: "₹15,000 – ₹25,000" },
      { item: "PAN, TAN, and GST Registration for the Indian Office", cost: "₹8,000 – ₹15,000" },
      { item: "Registered Office Address & Virtual Office Service (Annual)", cost: "₹25,000 – ₹60,000 per year" },
      { item: "Annual Compliance Package (ROC + RBI + Tax Filings)", cost: "₹50,000 – ₹1,25,000 per year" }
    ],
    penalties: [
      {
        violation: "Failure to register with the ROC by filing Form FC-1 within 30 days of establishing a place of business",
        penalty: "Fine of not less than ₹1 lakh which may extend to ₹3 lakh, and in the case of a continuing offence, a further fine of ₹50,000 per day during which the default continues — applicable to the foreign company and every officer in default under Section 392"
      },
      {
        violation: "Non-filing or late filing of annual returns (Form FC-4) or financial statements (Form FC-3) with the ROC",
        penalty: "Additional fee of ₹100 per day of delay as prescribed under the Companies (Registration of Foreign Companies) Rules, plus potential prosecution of the authorised representative under Section 392"
      },
      {
        violation: "Operating beyond the scope of permitted activities as approved by the RBI",
        penalty: "The RBI may revoke the approval and direct closure of the Indian office. Additionally, penalties under FEMA Section 13 — up to three times the amount involved in the contravention or ₹2 lakh, whichever is more — may be imposed"
      },
      {
        violation: "Failure to submit the Annual Activity Certificate (AAC) to the RBI through the Authorised Dealer bank",
        penalty: "The RBI may issue a show-cause notice for non-compliance and may refuse renewal of the office's approval. Compounding fees and restrictions on future remittances may also be levied"
      }
    ],
    advantages: [
      {
        icon: "🇮🇳",
        title: "Direct Indian Market Presence",
        desc: "A registered office in India allows the foreign company to directly engage with Indian clients, partners, and government bodies, building trust and credibility that remote operations cannot replicate. It positions the company as a committed participant in the Indian economy."
      },
      {
        icon: "💼",
        title: "Revenue Generation Capability",
        desc: "A branch office can earn revenue from permitted activities such as consulting services, import-export, and research work. This enables the foreign entity to monetise its Indian operations without the need to incorporate a separate Indian subsidiary."
      },
      {
        icon: "📑",
        title: "Simplified Structure vs. Subsidiary",
        desc: "Unlike an Indian subsidiary, a branch or liaison office does not require a separate board of directors, shareholders' agreements, or Indian equity holders. This reduces corporate governance complexity and allows the head office to maintain direct operational control."
      },
      {
        icon: "🔍",
        title: "Market Intelligence & Exploration",
        desc: "A liaison office provides a low-cost, low-risk way to explore the Indian market — gathering intelligence, building relationships, and testing demand before committing to a full commercial presence through a branch or subsidiary."
      },
      {
        icon: "⏱️",
        title: "Project-Specific Flexibility",
        desc: "Project offices provide a time-bound, purpose-specific structure that avoids long-term commitments. Once the project is completed, the office can be closed with full repatriation of surplus funds, making it ideal for infrastructure and construction companies."
      },
      {
        icon: "🏦",
        title: "Repatriation of Profits",
        desc: "Branch and project offices can repatriate net profits and surplus funds to the head office after meeting Indian tax obligations. The repatriation is facilitated through the Authorised Dealer bank and is generally permitted without additional RBI approval."
      }
    ],
    disadvantages: [
      "Liaison offices cannot generate any revenue in India, limiting their utility for companies that need to monetise their Indian presence quickly and making them suitable only for preparatory or auxiliary activities",
      "Branch offices of foreign companies are taxed at 40% plus applicable surcharge and cess on Indian-sourced income — significantly higher than the 25%–30% corporate tax rate applicable to Indian companies, which can erode profitability",
      "The RBI approval process can be lengthy and unpredictable, particularly for entities from countries that do not have robust bilateral financial cooperation agreements with India, potentially delaying the market-entry timeline",
      "Foreign companies registered in India are subject to extensive annual compliance — ROC filings, RBI annual activity certificates, tax returns, transfer pricing, and audit obligations — creating a significant ongoing administrative burden"
    ],
    compliance: [
      {
        area: "ROC Annual Filings",
        details: "File Form FC-3 (financial statements of the foreign company, translated and converted to INR) and Form FC-4 (annual return) with the Registrar of Companies within 60 days of the close of the financial year. Any changes in directors, registered address, or constitutional documents must be reported via Form FC-2 within 30 days."
      },
      {
        area: "RBI Annual Activity Certificate",
        details: "Submit the Annual Activity Certificate (AAC) audited by a Chartered Accountant to the Authorised Dealer bank, which forwards it to the RBI. The AAC must confirm that the office has operated within the scope of its approved activities during the preceding financial year. Due date is typically 30 September each year."
      },
      {
        area: "Income Tax & Transfer Pricing",
        details: "File the annual income-tax return for the Indian office by the due date (typically 30 November for entities requiring transfer-pricing reports). Maintain contemporaneous transfer-pricing documentation under Section 92D for all transactions between the Indian office and the head office or associated enterprises. File Form 3CEB if applicable."
      },
      {
        area: "GST & Indirect Tax Compliance",
        details: "Register under GST if the Indian office provides taxable services or is involved in import of goods. File monthly or quarterly GST returns (GSTR-1, GSTR-3B) and the annual return (GSTR-9) within prescribed timelines. Ensure correct classification of services under the reverse charge mechanism for payments to the head office."
      }
    ],
    faqs: [
      {
        q: "What is the difference between a liaison office, a branch office, and a project office?",
        a: "A liaison office can only perform representational and communication activities and cannot earn revenue. A branch office can engage in revenue-generating activities such as consulting, import-export, and research within its approved scope. A project office is set up to execute a specific project and must close once the project is completed. Each has different RBI approval requirements and permitted activities."
      },
      {
        q: "How long does the entire registration process take?",
        a: "The end-to-end process typically takes six to ten weeks. RBI approval is the most time-intensive step, usually taking three to six weeks. ROC registration via Form FC-1 can be completed within one to two weeks after RBI approval is in hand. Your Professional works to expedite each stage through proactive coordination."
      },
      {
        q: "Can a foreign company carry out manufacturing activities through a branch office in India?",
        a: "Generally, no. Manufacturing activities typically require the incorporation of an Indian subsidiary or a joint venture company. Branch offices are permitted to engage in specific activities approved by the RBI, and manufacturing is not usually among them. However, specific government approvals may be available in certain sectors."
      },
      {
        q: "Is it mandatory to have an authorised representative resident in India?",
        a: "Yes. Under Section 380(1)(c) of the Companies Act, 2013, every foreign company must have at least one authorised representative who is a resident of India. This person is responsible for receiving legal notices and documents on behalf of the foreign company and ensuring compliance with Indian regulations."
      },
      {
        q: "What taxes apply to a foreign company's Indian branch office?",
        a: "A branch office is taxed at 40% on its Indian-sourced income (plus applicable surcharge and 4% health and education cess). It must also comply with transfer-pricing regulations for transactions with the head office. GST applies if the branch provides taxable services. There is no dividend distribution tax since profits are repatriated, not distributed as dividends."
      },
      {
        q: "Can a liaison office be converted into a branch office or subsidiary?",
        a: "Yes, but it requires a fresh application. To convert to a branch office, you need to apply to the RBI for branch office approval and, upon grant, update the ROC registration. To convert to a subsidiary, a new Indian company must be incorporated, and the liaison office must be closed following the prescribed RBI closure process."
      },
      {
        q: "What is the Annual Activity Certificate and who issues it?",
        a: "The Annual Activity Certificate (AAC) is a certification by a practicing Chartered Accountant in India confirming that the liaison, branch, or project office has carried out only the activities permitted by the RBI during the preceding financial year. It is submitted to the Authorised Dealer bank, which forwards it to the Reserve Bank of India."
      },
      {
        q: "How does Your Professional help with ongoing compliance after registration?",
        a: "We provide a comprehensive annual compliance package that covers ROC filings (FC-3 and FC-4), RBI Annual Activity Certificate coordination, income-tax return preparation and filing, GST return management, transfer-pricing documentation, and statutory audit facilitation. A dedicated compliance manager is assigned to your account with quarterly review meetings."
      }
    ],
    cta: {
      heading: "Establish Your Indian Presence with Confidence",
      subheading:
        "From RBI approvals to ROC filings, Your Professional handles every aspect of foreign company registration so you can focus on building your business in India.",
      features: [
        "Free initial consultation on India-entry strategy",
        "Single-window coordination with RBI, ROC, and tax authorities",
        "Experienced team of company secretaries and chartered accountants",
        "Post-registration compliance management included"
      ]
    }
  },

"barcode-registration": {
    slug: "barcode-registration",
    title: "Barcode Registration",
    subtitle:
      "Obtain GS1-certified barcodes for your products in India and streamline retail distribution, inventory tracking, and supply chain management with Your Professional's end-to-end registration assistance.",
    heroFeatures: [
      "GS1 India-certified barcode numbers for retail-ready products",
      "Seamless registration for GTIN, EAN-13, and UPC-A formats",
      "Dedicated support for e-commerce marketplace listing compliance",
      "Fast-track processing with expert documentation handling",
    ],
    overview: {
      heading: "Why Barcode Registration Matters for Your Business",
      paragraphs: [
        "Barcode registration through GS1 India is the definitive way to assign a globally unique product identifier to every item your business manufactures, imports, or sells. A registered barcode — typically in the EAN-13 or UPC-A format — enables automated scanning at retail point-of-sale terminals, warehouse management systems, and logistics platforms. Without a valid GS1 barcode, products are effectively locked out of modern organised retail chains, leading e-commerce marketplaces, and international export channels.",
        "GS1 India, the local arm of the international GS1 organisation, is the sole authorised body for issuing Global Trade Item Numbers (GTINs) in India. When you register through GS1, your company receives a unique GS1 Company Prefix, from which individual GTINs are derived for each product variant — covering differences in size, colour, packaging, and flavour. This structured numbering ensures no two products anywhere in the world share the same identifier, eliminating costly mix-ups across the supply chain.",
        "Your Professional simplifies the entire barcode registration journey — from selecting the right GS1 membership tier and preparing documentation to generating print-ready barcode artwork. Whether you are a startup launching your first product or an established manufacturer expanding your catalogue, our experts ensure your barcodes meet GS1 standards and are accepted across domestic and global retail ecosystems.",
      ],
      highlights: [
        { icon: "🏷️", text: "Globally unique product identification accepted in over 100 countries" },
        { icon: "🛒", text: "Mandatory for listing on Amazon, Flipkart, JioMart, and organised retail" },
        { icon: "📦", text: "Enables real-time inventory tracking and warehouse automation" },
        { icon: "📊", text: "Improves supply chain visibility, demand forecasting, and sales analytics" },
      ],
    },
    types: [
      {
        title: "EAN-13 Barcode",
        desc: "The most widely used barcode format in India and globally for retail products. It consists of 13 digits — including the GS1 country prefix, company prefix, item reference, and a check digit — and is printed on product packaging for point-of-sale scanning.",
      },
      {
        title: "UPC-A Barcode",
        desc: "A 12-digit barcode format predominantly used in the United States and Canada. Indian exporters targeting North American retail chains need UPC-A barcodes, which can be derived from GS1-issued GTINs through a simple conversion process.",
      },
      {
        title: "GS1-128 / ITF-14 Barcode",
        desc: "Used for outer cartons, shipping cases, and logistics units rather than individual retail items. ITF-14 encodes the GTIN at a higher packaging level, while GS1-128 can carry additional data such as batch numbers, expiry dates, and serial numbers for traceability.",
      },
      {
        title: "GS1 DataBar",
        desc: "A compact barcode format designed for small or hard-to-label items such as fresh produce, loose vegetables, coupons, and healthcare products. It can encode supplementary information like weight and expiry date alongside the GTIN.",
      },
      {
        title: "QR Code with GS1 Digital Link",
        desc: "An emerging standard that embeds a GS1 GTIN inside a QR code linked to a web URI. Consumers can scan the code with a smartphone to access product details, authenticity verification, and promotional content, while retailers can still use it at checkout.",
      },
    ],
    eligibility: [
      "Any Indian business entity — sole proprietorship, partnership firm, LLP, private limited company, or public limited company — engaged in manufacturing, importing, or distributing products",
      "Startups and MSMEs launching new consumer products for domestic or international markets",
      "E-commerce sellers required to provide valid EAN/UPC barcodes for marketplace listings on Amazon, Flipkart, Myntra, and similar platforms",
      "Exporters whose overseas buyers or retail partners mandate GS1-certified barcodes on shipped goods",
      "Farmers, FPOs, and agricultural cooperatives packaging branded produce for organised retail or government procurement",
      "Pharmaceutical companies and medical device manufacturers requiring barcodes for regulatory traceability and serialisation",
      "Retailers developing private-label or store-brand products that need unique identifiers distinct from supplier barcodes",
      "Non-profit organisations and government bodies distributing packaged goods that enter commercial supply chains",
    ],
    documents: [
      {
        category: "Business Identity Documents",
        items: [
          "Certificate of Incorporation / Partnership Deed / Udyam Registration Certificate",
          "GST Registration Certificate (GSTIN)",
          "PAN Card of the business entity",
          "Aadhaar Card or passport of the authorised signatory",
          "Current bank account statement or cancelled cheque in the entity's name",
        ],
      },
      {
        category: "Product Information",
        items: [
          "Complete product catalogue with item names, descriptions, and variant details (size, weight, colour, flavour)",
          "Product photographs or packaging artwork showing label placement area for barcodes",
          "HSN codes corresponding to each product for classification purposes",
          "Brand name and trademark registration certificate (if available)",
        ],
      },
      {
        category: "Application & Authorisation",
        items: [
          "Duly filled GS1 India membership application form signed by the authorised signatory",
          "Board resolution or authorisation letter empowering the signatory to apply on behalf of the entity",
          "Declaration confirming that the barcodes will be used exclusively for the applicant's own products",
        ],
      },
    ],
    process: [
      {
        title: "Initial Consultation & Tier Selection",
        desc: "Our experts assess your product range, expected SKU count, and distribution channels to recommend the optimal GS1 India membership tier — ranging from a single GTIN for startups to unlimited prefixes for large manufacturers.",
        time: "1 day",
      },
      {
        title: "Document Collection & Verification",
        desc: "We compile and verify all required business identity documents, product details, and authorisation letters, ensuring every submission meets GS1 India's formatting and completeness standards before filing.",
        time: "1–2 days",
      },
      {
        title: "GS1 India Application Filing",
        desc: "The completed membership application along with supporting documents is submitted to GS1 India through their official portal. Payment of the applicable registration and annual fees is processed at this stage.",
        time: "1 day",
      },
      {
        title: "Application Review & Approval",
        desc: "GS1 India reviews the submitted application, validates the business credentials, and issues the GS1 Company Prefix along with the allotted range of GTINs upon successful verification.",
        time: "3–7 working days",
      },
      {
        title: "GTIN Assignment to Products",
        desc: "Each product variant in your catalogue is assigned a unique GTIN from the allotted range. We maintain a master GTIN registry for your company to prevent duplicates and ensure systematic numbering.",
        time: "1–2 days",
      },
      {
        title: "Barcode Artwork Generation",
        desc: "Print-ready barcode images in EAN-13, UPC-A, or other required formats are generated in high-resolution EPS, SVG, and PNG files, sized and formatted to meet GS1 specifications for your packaging dimensions.",
        time: "1–2 days",
      },
      {
        title: "Verification & Marketplace Listing Support",
        desc: "Each generated barcode is scanned and verified for readability and compliance. We provide guidance on correct placement, quiet zone requirements, and assist with uploading barcode data to e-commerce marketplace catalogues.",
        time: "1–2 days",
      },
    ],
    fees: [
      {
        item: "GS1 India Registration Fee (up to 10 GTINs)",
        cost: "₹2,000 – ₹4,000 (one-time, based on turnover slab)",
      },
      {
        item: "GS1 India Registration Fee (up to 100 GTINs)",
        cost: "₹6,000 – ₹10,000 (one-time, based on turnover slab)",
      },
      {
        item: "GS1 India Registration Fee (up to 1,000 GTINs)",
        cost: "₹12,000 – ₹25,000 (one-time, based on turnover slab)",
      },
      {
        item: "Annual Renewal Fee",
        cost: "₹1,500 – ₹15,000 per year (varies by tier and turnover)",
      },
      {
        item: "Barcode Artwork Generation (per SKU)",
        cost: "₹100 – ₹300 per barcode image",
      },
      {
        item: "Your Professional Service Fee (end-to-end assistance)",
        cost: "₹1,499 – ₹4,999 (depending on tier and SKU count)",
      },
    ],
    penalties: [
      {
        violation: "Using unregistered or counterfeit barcodes",
        penalty:
          "Products may be delisted from retail chains and e-commerce platforms; GS1 can issue cease-and-desist notices, and repeated offences may attract legal action under consumer protection and trademark laws.",
      },
      {
        violation: "Assigning the same GTIN to multiple distinct products",
        penalty:
          "Causes supply chain errors, incorrect pricing at checkout, and inventory mismatches. GS1 India may suspend the company prefix, and affected retailers can levy contractual penalties for catalogue discrepancies.",
      },
      {
        violation: "Failure to renew GS1 membership",
        penalty:
          "The GS1 Company Prefix and all associated GTINs become inactive after a grace period. Products bearing expired barcodes will fail verification at retail and marketplace systems, halting sales until renewal is completed.",
      },
      {
        violation: "Sharing or reselling GS1-issued barcodes to third parties",
        penalty:
          "Violates GS1 membership terms and can result in immediate termination of membership. Third-party products using misallocated barcodes face global supply chain rejection and potential legal liability.",
      },
    ],
    advantages: [
      {
        icon: "🌍",
        title: "Global Acceptance",
        desc: "GS1 barcodes are recognised in over 100 countries, enabling your products to enter international retail and e-commerce ecosystems without requiring separate local registration in each market.",
      },
      {
        icon: "⚡",
        title: "Faster Checkout & Reduced Errors",
        desc: "Automated barcode scanning at point-of-sale terminals eliminates manual price entry, cutting checkout time by up to 70% and virtually eliminating pricing errors that erode customer trust.",
      },
      {
        icon: "📈",
        title: "Enhanced Supply Chain Visibility",
        desc: "Every movement of a barcoded product — from factory floor to warehouse shelf to delivery truck — is digitally recorded, giving you real-time visibility into stock levels, shipment status, and demand patterns.",
      },
      {
        icon: "🛡️",
        title: "Brand Protection & Anti-Counterfeiting",
        desc: "A registered GS1 barcode ties your product directly to your verified company identity, making it significantly harder for counterfeiters to pass off fake goods through legitimate retail and online channels.",
      },
      {
        icon: "🏪",
        title: "Marketplace & Retail Compliance",
        desc: "Major platforms like Amazon, Flipkart, BigBasket, and organised retail chains such as Reliance Retail and D-Mart mandate GS1 barcodes for product listings, making registration a prerequisite for market access.",
      },
      {
        icon: "📋",
        title: "Simplified Regulatory Compliance",
        desc: "For sectors like pharmaceuticals, food, and electronics, GS1 barcodes facilitate batch-level traceability required by FSSAI, CDSCO, and BIS, streamlining audit trails and recall management.",
      },
    ],
    disadvantages: [
      "Annual renewal fees must be paid to GS1 India to keep the company prefix active; lapsed memberships render all assigned barcodes invalid, potentially disrupting sales across all channels.",
      "Small businesses and micro-enterprises with very few products may find the cumulative cost of registration, renewal, and artwork generation disproportionate to their initial revenue.",
      "Barcode placement and print quality must meet strict GS1 specifications — incorrect sizing, poor contrast, or insufficient quiet zones can cause scan failures at retail terminals, requiring packaging reprints.",
      "Businesses that exclusively sell through informal or unorganised retail channels where barcode scanning is not practised may see limited immediate return on their registration investment.",
    ],
    compliance: [
      {
        area: "Annual GS1 Membership Renewal",
        details:
          "GS1 India membership must be renewed annually before the expiry date. Failure to renew within the stipulated grace period results in deactivation of your company prefix and all associated GTINs, requiring re-registration to restore active status.",
      },
      {
        area: "GTIN Management & Data Synchronisation",
        details:
          "Each new product variant must be assigned a unique GTIN, and retired products should have their GTINs deactivated (not reassigned for at least 48 months). Product data linked to GTINs should be kept current in the GS1 Global Data Synchronisation Network (GDSN) if you supply to participating retailers.",
      },
      {
        area: "Barcode Print Quality Standards",
        details:
          "All printed barcodes must meet ISO/IEC 15416 (linear) or ISO/IEC 15415 (2D) verification grades. Regular quality checks using a barcode verifier — especially when changing packaging suppliers or print methods — are essential to maintain scan readability across the supply chain.",
      },
      {
        area: "Marketplace & Regulatory Data Updates",
        details:
          "E-commerce platforms and regulatory bodies may periodically request updated GTIN certificates or product data sheets. Maintaining an up-to-date GTIN master file and promptly responding to data verification requests prevents listing suspensions and compliance flags.",
      },
    ],
    faqs: [
      {
        q: "What is a GS1 barcode and why is it different from free online barcodes?",
        a: "A GS1 barcode is backed by a globally unique GTIN issued by GS1, the international standards organisation. Free online barcodes generate random numbers not registered in any global database, meaning they can conflict with existing products, fail verification at retail chains, and get rejected by e-commerce marketplaces. Only GS1-issued barcodes guarantee worldwide uniqueness and acceptance.",
      },
      {
        q: "How many barcodes do I need for my products?",
        a: "You need one unique GTIN — and therefore one barcode — for every distinct product variant. If you sell a shampoo in 100ml and 250ml bottles, each size requires its own GTIN. Similarly, different colours, flavours, pack sizes, and bundle configurations each need separate barcodes. Our team helps you audit your catalogue to determine the exact count before selecting a membership tier.",
      },
      {
        q: "Can I use Indian GS1 barcodes for products I export internationally?",
        a: "Yes. GTINs issued by GS1 India carry the country prefix '890' and are recognised by retail systems worldwide. Your products can be scanned and sold in any country that follows GS1 standards — which includes virtually all major markets in North America, Europe, Asia-Pacific, and the Middle East.",
      },
      {
        q: "How long does the entire barcode registration process take?",
        a: "With Your Professional's assistance, the typical turnaround from document submission to receiving print-ready barcode artwork is 7 to 14 working days. Straightforward applications with complete documentation can be processed faster, while applications requiring additional verification from GS1 India may take slightly longer.",
      },
      {
        q: "Is barcode registration mandatory for selling on Amazon and Flipkart?",
        a: "Yes. Both Amazon India and Flipkart require a valid EAN/UPC barcode — issued by GS1 — for most product categories. Listings without a verified GS1 barcode may be suppressed or rejected during catalogue quality checks. Some exemptions exist for handmade or unbranded items, but branded products universally require registration.",
      },
      {
        q: "What happens if I do not renew my GS1 membership?",
        a: "If your GS1 India membership lapses and the grace period expires, your company prefix and all associated GTINs are deactivated. Products carrying these barcodes will fail verification when scanned by retail systems or marketplace bots, leading to delisting or order fulfilment blocks. Reactivation requires paying outstanding dues plus applicable late fees.",
      },
      {
        q: "Can I transfer my GS1 barcodes to another company if I sell my brand?",
        a: "GS1 barcodes are tied to the registered company, not to a brand name. If you sell your brand or product line, the acquiring company must either apply for its own GS1 membership and assign new GTINs, or formally request a transfer of the company prefix through GS1 India with appropriate legal documentation — such as a business transfer agreement.",
      },
      {
        q: "Do I need separate barcodes for inner units and outer shipping cartons?",
        a: "Yes. Individual retail units use EAN-13 or UPC-A barcodes, while outer cartons and shipping cases use ITF-14 or GS1-128 barcodes. This dual-level encoding enables warehouse scanners to identify cases without opening them, while retail scanners read the inner unit barcode at checkout. Your Professional can set up both levels during the registration process.",
      },
    ],
    cta: {
      heading: "Get Your Products Barcode-Ready with Your Professional",
      subheading:
        "From GS1 membership selection to print-ready barcode artwork — our experts handle the entire registration process so your products are retail-ready and marketplace-compliant from day one.",
      features: [
        "End-to-end GS1 India registration assistance",
        "Print-ready barcode artwork in EAN-13, UPC-A & ITF-14 formats",
        "Dedicated GTIN management and catalogue support",
        "Amazon, Flipkart & marketplace listing guidance",
        "Annual renewal reminders and compliance tracking",
      ],
    },
  }
};
