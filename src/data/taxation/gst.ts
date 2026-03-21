import type { ServiceData } from '../services';

const data: Record<string, ServiceData> = {
  'gst-registration': {
    slug: 'gst-registration',
    title: 'GST Registration',
    subtitle:
      'Obtain your GSTIN seamlessly and unlock the full potential of your business under India\'s unified tax framework. Your Professional handles every step — from application to certificate delivery.',
    heroFeatures: [
      'End-to-end GSTIN application support with expert guidance',
      'Typically processed within 3–7 working days',
      'Mandatory for businesses exceeding ₹20 lakh turnover (₹10 lakh for special category states)',
      'Enables seamless input tax credit claims and interstate trade',
      'Dedicated relationship manager for document verification and follow-ups',
    ],
    overview: {
      heading: 'Understanding GST Registration in India',
      paragraphs: [
        'The Goods and Services Tax (GST) is India\'s landmark indirect tax reform that replaced a fragmented web of central and state levies — including VAT, Service Tax, Excise Duty, and Octroi — with a single, unified tax structure. Since its introduction on 1 July 2017, GST has streamlined compliance for millions of businesses by creating one nation, one tax, one market. Every business that meets the prescribed turnover threshold or falls under mandatory registration categories must obtain a unique GST Identification Number (GSTIN) from the Central Board of Indirect Taxes and Customs (CBIC).',
        'Registration under GST is not merely a statutory obligation; it is a gateway to legitimate commerce. A valid GSTIN allows you to collect tax from customers, claim input tax credit on purchases, participate in interstate trade without restrictions, and list your business on government e-commerce and procurement portals. For startups, MSMEs, and established enterprises alike, GST registration enhances credibility, opens doors to institutional clients, and ensures that your supply chain partners can claim credits on transactions with you.',
        'At Your Professional, we have assisted thousands of entrepreneurs across India in obtaining their GSTINs without paperwork hassles or processing delays. Our dedicated compliance team reviews your documents, prepares the application on the GST portal, coordinates Aadhaar-based e-verification or digital signature authentication, and tracks the application through to approval. Whether you are a sole proprietor launching a home-based venture or a corporation expanding into new states, our structured process ensures a smooth and timely registration experience.',
      ],
      highlights: [
        { icon: '📋', text: 'Unified tax replaces 17+ indirect levies across India' },
        { icon: '🔗', text: 'Seamless input tax credit chain from manufacturer to retailer' },
        { icon: '🌐', text: 'Mandatory for interstate supply of goods or services' },
        { icon: '⚡', text: 'Online application with Aadhaar-based e-KYC verification' },
      ],
    },
    types: [
      {
        title: 'Regular GST Registration',
        desc: 'Standard registration for businesses exceeding the turnover threshold or engaging in interstate supply. Allows full input tax credit claims, requires periodic return filing, and is the most common registration type for manufacturers, traders, and service providers across India.',
      },
      {
        title: 'Composition Scheme Registration',
        desc: 'A simplified scheme for small businesses with turnover up to ₹1.5 crore (₹75 lakh for special category states). Registered persons pay tax at a flat rate on turnover and file quarterly returns instead of monthly, but cannot collect tax from customers or claim input tax credit.',
      },
      {
        title: 'Casual Taxable Person Registration',
        desc: 'Designed for individuals or businesses that supply goods or services occasionally in a state or union territory where they do not have a fixed place of business. Valid for a maximum of 90 days and requires an advance tax deposit equal to the estimated tax liability.',
      },
      {
        title: 'Non-Resident Taxable Person Registration',
        desc: 'Applicable to persons residing outside India who occasionally supply goods or services to recipients in India without having a fixed place of business in the country. Requires an advance tax deposit and is valid for 90 days, extendable upon fresh application.',
      },
      {
        title: 'Input Service Distributor (ISD) Registration',
        desc: 'Meant for offices that receive invoices for input services and distribute the credit proportionally among branches or units registered under separate GSTINs. An ISD cannot make outward supplies on its own but plays a crucial role in multi-location enterprises.',
      },
    ],
    eligibility: [
      'Businesses with aggregate annual turnover exceeding ₹20 lakh (₹10 lakh for special category states such as the North-Eastern states, Himachal Pradesh, and Uttarakhand)',
      'Any person making interstate supply of taxable goods or services, irrespective of turnover',
      'E-commerce operators and sellers required to collect or deduct tax at source under Sections 52 and 51 of the CGST Act',
      'Casual taxable persons and non-resident taxable persons supplying goods or services in India',
      'Agents or representatives supplying goods or services on behalf of other taxable persons',
      'Persons required to pay tax under reverse charge mechanism for specified categories of supply',
      'Input service distributors seeking to allocate input tax credit across multiple business verticals',
      'Every person who was previously registered under legacy laws (VAT, Service Tax, Excise) and is required to migrate to GST',
    ],
    documents: [
      {
        category: 'Identity & Address Proof of Promoters',
        items: [
          'PAN card of each promoter, partner, or director (mandatory)',
          'Aadhaar card for Aadhaar-based e-verification or physical verification',
          'Passport-sized colour photograph (recent, with white background)',
          'Voter ID, Driving Licence, or Passport as additional identity proof',
        ],
      },
      {
        category: 'Business Entity Documents',
        items: [
          'PAN card of the business entity (company, LLP, partnership firm)',
          'Certificate of Incorporation or Partnership Deed, as applicable',
          'Board Resolution or Letter of Authorization appointing the authorized signatory',
          'Memorandum and Articles of Association for companies',
          'MSME / Udyam Registration Certificate, if available',
        ],
      },
      {
        category: 'Principal Place of Business Proof',
        items: [
          'Ownership proof: property tax receipt, municipal khata, or sale deed',
          'Rental agreement and latest rent receipt if the premises are rented',
          'No-objection certificate (NOC) from the property owner on letterhead',
          'Latest electricity bill, water bill, or landline telephone bill as address verification',
        ],
      },
    ],
    process: [
      {
        title: 'Free Consultation & Eligibility Assessment',
        desc: 'Speak with a Your Professional GST expert who evaluates your business model, turnover projections, and supply patterns to determine the appropriate registration type — regular, composition, or special category.',
        time: 'Day 1',
      },
      {
        title: 'Document Collection & Verification',
        desc: 'Upload your documents through our secure portal. Our team performs a thorough pre-verification check — ensuring PAN-Aadhaar linkage, address proof validity, and entity document completeness — to eliminate rejection risks.',
        time: 'Day 1–2',
      },
      {
        title: 'GST Portal Application Filing (Form GST REG-01)',
        desc: 'We prepare and submit the application on the GST common portal in Parts A and B. Part A generates a Temporary Reference Number (TRN), and Part B captures detailed business and promoter information along with document uploads.',
        time: 'Day 2–3',
      },
      {
        title: 'Aadhaar Authentication or Digital Signature',
        desc: 'The applicant completes Aadhaar-based e-KYC (OTP verification) for expedited processing. In cases where Aadhaar authentication is not opted for, we arrange Class 2 or Class 3 Digital Signature Certificate (DSC) for application signing.',
        time: 'Day 3',
      },
      {
        title: 'Application Review & Query Resolution',
        desc: 'If the GST officer raises a clarification request (Form GST REG-03), our team drafts and submits the response (Form GST REG-04) within the stipulated timeframe, ensuring no delays due to incomplete responses.',
        time: 'Day 3–5',
      },
      {
        title: 'GSTIN Approval & Certificate Issuance',
        desc: 'Upon successful verification, the officer approves the application and issues the GST Registration Certificate (Form GST REG-06) containing your unique 15-digit GSTIN. We download and deliver the certificate to you immediately.',
        time: 'Day 5–7',
      },
      {
        title: 'Post-Registration Setup & Guidance',
        desc: 'Our team guides you on configuring your invoicing system with the correct GSTIN, HSN/SAC codes, and tax rates. We also brief you on return filing obligations, input tax credit rules, and compliance calendar milestones.',
        time: 'Day 7–8',
      },
    ],
    fees: [
      { item: 'Government fee for GST registration', cost: '₹0 (No government fee)' },
      { item: 'Your Professional service fee – Proprietorship / Individual', cost: '₹1,499 + GST' },
      { item: 'Your Professional service fee – Partnership / LLP', cost: '₹2,499 + GST' },
      { item: 'Your Professional service fee – Private Limited Company', cost: '₹2,999 + GST' },
      { item: 'Digital Signature Certificate (if Aadhaar e-KYC not used)', cost: '₹1,200 – ₹1,800' },
      { item: 'Additional state registration (each extra GSTIN)', cost: '₹1,999 + GST' },
    ],
    penalties: [
      {
        violation: 'Operating without GST registration when liable',
        penalty: '100% of tax due or ₹10,000, whichever is higher (Section 122 of CGST Act)',
      },
      {
        violation: 'Fraudulent claim of input tax credit without registration',
        penalty: 'Penalty equivalent to the credit wrongfully availed along with interest at 24% per annum',
      },
      {
        violation: 'Failure to obtain registration by a person liable under reverse charge',
        penalty: 'Tax amount plus interest at 18% per annum from the date tax was due until payment',
      },
      {
        violation: 'Supplying goods or services through unregistered e-commerce operators',
        penalty: 'Seizure of goods in transit and penalty up to ₹25,000 or tax amount, whichever is higher',
      },
    ],
    advantages: [
      {
        icon: '✅',
        title: 'Legally Authorized Tax Collection',
        desc: 'Only a GSTIN-registered business can collect GST from customers and remit it to the government. Without registration, you cannot issue tax invoices, which limits your ability to serve B2B clients who need credit.',
      },
      {
        icon: '💰',
        title: 'Full Input Tax Credit Benefits',
        desc: 'Claim credit for GST paid on all business purchases — raw materials, services, capital goods, and overheads. This directly reduces your effective tax outgo and improves profit margins across the supply chain.',
      },
      {
        icon: '🚚',
        title: 'Unrestricted Interstate Commerce',
        desc: 'A valid GSTIN is mandatory for shipping goods across state borders. Registration eliminates the need for state-specific permits and enables you to expand your market reach to all 28 states and 8 union territories.',
      },
      {
        icon: '🏦',
        title: 'Enhanced Business Credibility',
        desc: 'Banks, institutional buyers, and government agencies view GST-registered entities as compliant and trustworthy. Registration strengthens your loan applications, tender eligibility, and partnership opportunities.',
      },
      {
        icon: '🛒',
        title: 'E-Commerce Marketplace Access',
        desc: 'Platforms like Amazon, Flipkart, Meesho, and Government e-Marketplace (GeM) require sellers to provide a valid GSTIN before listing products. Registration unlocks the massive online consumer base.',
      },
      {
        icon: '📊',
        title: 'Simplified Compliance Ecosystem',
        desc: 'The GST portal provides a unified dashboard for filing returns, generating e-way bills, reconciling credits, and tracking notices. One registration replaces multiple legacy compliances and reduces administrative burden.',
      },
    ],
    disadvantages: [
      'Recurring compliance burden: registered businesses must file monthly or quarterly returns even during months with zero transactions, increasing administrative workload and costs.',
      'Increased operational costs for small businesses: engaging a tax professional or purchasing accounting software to manage GST invoicing and credit reconciliation adds to overheads.',
      'Cash flow impact under reverse charge: certain categories of supply require the recipient to pay GST upfront and then claim credit, temporarily blocking working capital.',
      'Exposure to departmental scrutiny: registration places your business on the tax radar, making it subject to audits, assessments, and information requests from GST authorities.',
    ],
    compliance: [
      {
        area: 'Monthly / Quarterly Return Filing',
        details: 'Regular taxpayers must file GSTR-1 (outward supplies) by the 11th of the following month and GSTR-3B (summary return with tax payment) by the 20th. Composition dealers file CMP-08 quarterly and GSTR-4 annually.',
      },
      {
        area: 'Annual Return & Reconciliation',
        details: 'Every registered person must file GSTR-9 (annual return) by 31 December of the following financial year. Businesses with turnover above ₹5 crore must also file GSTR-9C (reconciliation statement) certified by a CA.',
      },
      {
        area: 'E-Way Bill Generation',
        details: 'For movement of goods valued above ₹50,000, an e-way bill must be generated on the e-way bill portal before dispatch. Both inter-state and intra-state movements require valid documentation.',
      },
      {
        area: 'Input Tax Credit Reconciliation',
        details: 'Periodically reconcile your purchase records with GSTR-2B auto-drafted statements to ensure that all eligible input tax credit is claimed and any discrepancies are resolved before annual filing.',
      },
    ],
    faqs: [
      {
        q: 'Who must register for GST in India?',
        a: 'Any business whose aggregate turnover in a financial year exceeds ₹20 lakh (₹10 lakh for special category states) must register. Additionally, persons engaged in interstate supply, e-commerce, or specific notified activities must register regardless of turnover.',
      },
      {
        q: 'How long does the GST registration process take?',
        a: 'When Aadhaar authentication is opted for and all documents are in order, the GSTIN is typically issued within 3 working days. Without Aadhaar e-KYC, a physical verification may be triggered, extending the timeline to 7–15 working days.',
      },
      {
        q: 'Is there a government fee for GST registration?',
        a: 'No, the Government of India does not charge any fee for GST registration. The application on the GST common portal is completely free. However, you may incur costs for professional assistance, Digital Signature Certificates, or notarization of documents.',
      },
      {
        q: 'Can a single business have multiple GSTINs?',
        a: 'Yes. Under GST, registration is state-specific. If your business operates in multiple states, you must obtain a separate GSTIN for each state. Additionally, within the same state, you can opt for separate registrations for distinct business verticals.',
      },
      {
        q: 'What is the Composition Scheme and who can opt for it?',
        a: 'The Composition Scheme is a simplified tax regime for businesses with turnover up to ₹1.5 crore (₹75 lakh for special category states). Registered persons pay a flat tax rate on total turnover, file quarterly returns, and face reduced compliance. However, they cannot collect tax on invoices or claim input tax credit.',
      },
      {
        q: 'What happens if I do not register despite being liable?',
        a: 'Operating without mandatory GST registration is an offence under Section 122 of the CGST Act. The penalty is 100% of the tax due or ₹10,000, whichever is higher, along with interest at 18% per annum on the unpaid tax amount from the date it was due.',
      },
      {
        q: 'Can I cancel my GST registration later if my business closes?',
        a: 'Yes. You can apply for voluntary cancellation through Form GST REG-16 on the GST portal. The officer may approve cancellation after verifying that all returns are filed and outstanding liabilities are settled. You must also reverse any input tax credit on remaining stock.',
      },
      {
        q: 'How does Your Professional help with GST registration?',
        a: 'Our team handles the entire process — from assessing your eligibility and preparing documents to filing the application on the GST portal, responding to any officer queries, and delivering your GSTIN certificate. You get a dedicated relationship manager and real-time status updates throughout.',
      },
    ],
    cta: {
      heading: 'Get Your GSTIN — Fast, Affordable, Hassle-Free',
      subheading:
        'Join 50,000+ businesses that trust Your Professional for tax registration services. Start your GST registration today and unlock interstate trade, input tax credit, and marketplace access.',
      features: [
        'Expert-assisted application with zero rejection guarantee',
        'Transparent pricing — no hidden charges',
        'Dedicated relationship manager for real-time updates',
        'Free post-registration compliance consultation',
      ],
    },
  },

  'gst-return-filing': {
    slug: 'gst-return-filing',
    title: 'GST Return Filing',
    subtitle:
      'Stay compliant and avoid costly penalties with timely, accurate GST return filing by Your Professional. From GSTR-1 to GSTR-9, we handle every return so you can focus on growing your business.',
    heroFeatures: [
      'Complete filing support for GSTR-1, GSTR-3B, GSTR-4, GSTR-9, and more',
      'Automated invoice reconciliation with GSTR-2B for maximum input tax credit',
      'Late filing penalty prevention with proactive deadline tracking',
      'Dedicated GST accountant assigned to your business',
      'Monthly, quarterly, and annual return plans to suit every business size',
    ],
    overview: {
      heading: 'Why Timely GST Return Filing Matters for Your Business',
      paragraphs: [
        'GST return filing is the periodic submission of transaction details, tax liability computations, and input tax credit claims to the Goods and Services Tax Network (GSTN). Every registered taxpayer — whether a multinational corporation or a neighbourhood retailer — is obligated to file returns at prescribed intervals, even if no transactions have occurred during the period. The GST framework uses a system of interconnected returns where the data reported by one taxpayer directly impacts the credit available to another, making accuracy and timeliness critical for the entire supply chain.',
        'Missing a GST return deadline triggers an automatic late fee of ₹50 per day (₹20 for nil returns), capped at ₹10,000 per return, along with interest at 18% per annum on any unpaid tax. Beyond financial penalties, persistent non-filing can lead to suspension or cancellation of your GSTIN, blocking your ability to issue tax invoices, claim input credit, or generate e-way bills. For businesses that rely on government contracts or institutional buyers, a non-compliant GST status can disqualify you from tender participation and damage your commercial reputation.',
        'Your Professional\'s GST return filing service is designed to eliminate this risk entirely. Our team of qualified accountants and tax professionals manages your filings end to end — collecting invoices, reconciling purchase data against auto-populated GSTR-2B statements, computing optimal tax liability, and submitting returns well before deadlines. We use industry-leading reconciliation tools to ensure that every rupee of eligible input tax credit is claimed, and we flag discrepancies proactively so they can be resolved before they become audit triggers.',
      ],
      highlights: [
        { icon: '📅', text: 'Proactive deadline management — never miss a filing date' },
        { icon: '🔍', text: 'Invoice-level reconciliation for maximum ITC utilization' },
        { icon: '🛡️', text: 'Penalty protection — late fee reimbursement guarantee on our plans' },
        { icon: '📈', text: 'Cash flow optimization through strategic credit management' },
      ],
    },
    types: [
      {
        title: 'GSTR-1 — Outward Supply Return',
        desc: 'A detailed statement of all outward supplies (sales) made during the tax period. B2B invoices are reported individually with recipient GSTIN, while B2C supplies are aggregated. Filed monthly by the 11th of the following month, or quarterly under the QRMP scheme by the 13th of the month following the quarter.',
      },
      {
        title: 'GSTR-3B — Summary Return with Tax Payment',
        desc: 'A self-assessed summary return where the taxpayer declares total outward and inward supplies, input tax credit claimed, and the net tax payable. Filed monthly by the 20th of the following month (staggered dates for certain states). Tax payment accompanies this return.',
      },
      {
        title: 'GSTR-4 — Composition Scheme Annual Return',
        desc: 'Filed annually by taxpayers registered under the Composition Scheme. It consolidates the quarterly CMP-08 challan-cum-statements and provides a full-year summary of turnover, tax paid at the flat composition rate, and any supplies received under reverse charge.',
      },
      {
        title: 'GSTR-9 — Annual Return',
        desc: 'A comprehensive annual consolidation of all monthly or quarterly returns filed during the financial year. It includes details of outward supplies, inward supplies, ITC availed and reversed, tax paid, and demands or refunds. Due by 31 December of the following financial year.',
      },
      {
        title: 'GSTR-9C — Reconciliation Statement',
        desc: 'A reconciliation between the annual return (GSTR-9) and the audited financial statements. Mandatory for businesses with turnover exceeding ₹5 crore. Self-certified by the taxpayer and must be filed alongside GSTR-9.',
      },
    ],
    eligibility: [
      'Every person holding an active GST registration, including regular taxpayers, composition dealers, and casual taxable persons',
      'Businesses with nil transactions during a tax period must still file nil returns to maintain active GSTIN status',
      'E-commerce operators required to file TCS returns (GSTR-8) for tax collected at source on behalf of sellers',
      'Input Service Distributors filing GSTR-6 to distribute input tax credit among branches and units',
      'Non-resident taxable persons with active registrations must file GSTR-5 for the registration validity period',
      'Taxpayers opting for the QRMP (Quarterly Return Monthly Payment) scheme for filing GSTR-1 and GSTR-3B quarterly',
      'Entities required to file GSTR-7 for tax deducted at source under Section 51 of the CGST Act',
      'All registered persons must file annual returns (GSTR-9) regardless of turnover, unless specifically exempted by notification',
    ],
    documents: [
      {
        category: 'Sales & Outward Supply Records',
        items: [
          'All B2B tax invoices issued during the period with recipient GSTIN and HSN/SAC codes',
          'B2C invoice summaries, including point-of-sale receipts and consolidated daily totals',
          'Credit notes and debit notes issued against earlier invoices for returns, discounts, or corrections',
          'Advance receipts and adjustment entries for supplies against which advance was received in earlier periods',
          'Export invoices, deemed export documentation, and Letters of Undertaking (LUT) for zero-rated supplies',
        ],
      },
      {
        category: 'Purchase & Inward Supply Records',
        items: [
          'All purchase invoices received from registered suppliers for raw materials, goods, and services',
          'Import bills of entry and IGST payment challans for goods imported through customs',
          'Invoices for reverse charge supplies — services from unregistered persons, specified goods, and imports of services',
          'GSTR-2B auto-drafted statement downloaded from the GST portal for credit reconciliation',
        ],
      },
      {
        category: 'Payment & Financial Records',
        items: [
          'Electronic cash ledger and electronic credit ledger balances from the GST portal',
          'Bank statements reflecting GST payment challans and refund credits for the filing period',
          'Trial balance or profit-and-loss extract for annual return and reconciliation statement preparation',
          'Previous period return acknowledgements and any pending demand or refund order copies',
        ],
      },
    ],
    process: [
      {
        title: 'Data Collection & Invoice Upload',
        desc: 'Share your sales and purchase invoices through our secure client portal, email, or accounting software integration. We accept data from Tally, Zoho Books, Busy, and Excel formats. Our team organizes the data by supply type, tax rate, and HSN/SAC classification.',
        time: '1st – 5th of the month',
      },
      {
        title: 'Purchase Reconciliation with GSTR-2B',
        desc: 'We download your auto-populated GSTR-2B statement and match it line-by-line against your purchase records. Mismatches — such as missing invoices, incorrect amounts, or duplicate entries — are flagged and shared with you for supplier follow-up before filing.',
        time: '5th – 8th of the month',
      },
      {
        title: 'GSTR-1 Preparation & Filing',
        desc: 'Your outward supply data is compiled into the GSTR-1 format with invoice-level details for B2B transactions and rate-wise summaries for B2C sales. We validate HSN codes, apply correct tax rates, and file GSTR-1 on the portal well before the 11th deadline.',
        time: '8th – 11th of the month',
      },
      {
        title: 'GSTR-3B Computation & Review',
        desc: 'Based on GSTR-1 data and reconciled GSTR-2B figures, we compute your net tax liability in GSTR-3B. The draft return is shared with you for review, showing total output tax, eligible ITC, reverse charge liability, and the final payable or refundable amount.',
        time: '12th – 17th of the month',
      },
      {
        title: 'Tax Payment & GSTR-3B Filing',
        desc: 'After your approval, we generate the GST payment challan via the portal. You complete the payment through net banking, NEFT, or RTGS. Once payment is confirmed in the electronic cash ledger, we file GSTR-3B and share the filed return acknowledgement.',
        time: '17th – 20th of the month',
      },
      {
        title: 'Post-Filing Verification & Reporting',
        desc: 'We verify that filed returns reflect correctly in your GST portal dashboard, confirm that ITC is accurately credited to your electronic credit ledger, and prepare a monthly compliance summary report with key metrics — tax paid, ITC utilized, and pending credits.',
        time: '20th – 25th of the month',
      },
      {
        title: 'Annual Return & Reconciliation Support',
        desc: 'At the financial year end, we consolidate all monthly filings into GSTR-9 and, if applicable, prepare GSTR-9C by reconciling your audited financial statements with GST return data. Discrepancies are analysed and additional tax or credit adjustments are computed.',
        time: 'October – December (following FY)',
      },
    ],
    fees: [
      { item: 'Monthly GSTR-1 + GSTR-3B filing (up to 100 invoices)', cost: '₹1,499/month + GST' },
      { item: 'Monthly GSTR-1 + GSTR-3B filing (101–500 invoices)', cost: '₹2,999/month + GST' },
      { item: 'Monthly GSTR-1 + GSTR-3B filing (500+ invoices)', cost: '₹4,999/month + GST' },
      { item: 'Quarterly filing under QRMP scheme', cost: '₹2,499/quarter + GST' },
      { item: 'Annual return GSTR-9 preparation and filing', cost: '₹4,999 + GST' },
      { item: 'GSTR-9C reconciliation statement (turnover > ₹5 crore)', cost: '₹9,999 + GST' },
    ],
    penalties: [
      {
        violation: 'Late filing of GSTR-1 or GSTR-3B',
        penalty: '₹50 per day of delay (₹25 CGST + ₹25 SGST), capped at ₹10,000 per return. For nil returns, the late fee is ₹20 per day (₹10 CGST + ₹10 SGST).',
      },
      {
        violation: 'Interest on late payment of GST liability',
        penalty: '18% per annum on the net tax liability from the due date until the date of actual payment. Interest is computed on a daily basis and auto-calculated by the portal.',
      },
      {
        violation: 'Non-filing of returns for consecutive periods',
        penalty: 'Failure to file returns for a continuous period of 6 months (or 2 consecutive quarters for QRMP taxpayers) can result in suo motu cancellation of GSTIN by the jurisdictional officer under Section 29(2).',
      },
      {
        violation: 'Incorrect or fraudulent return filing',
        penalty: 'Penalty of ₹10,000 or the amount of tax evaded, whichever is higher, under Section 122. Prosecution proceedings may be initiated for tax evasion exceeding ₹5 crore.',
      },
    ],
    advantages: [
      {
        icon: '⏰',
        title: 'Zero Late-Fee Guarantee',
        desc: 'Our proactive deadline tracking and early filing practice ensures your returns are submitted well before due dates. If a delay occurs due to our oversight, we reimburse the late fee — giving you complete peace of mind.',
      },
      {
        icon: '💡',
        title: 'Maximum Input Tax Credit Recovery',
        desc: 'Through meticulous line-by-line reconciliation of your purchases against GSTR-2B, we ensure that no eligible credit is missed. On average, our clients recover 8–12% more ITC compared to self-filing, directly improving their bottom line.',
      },
      {
        icon: '🤝',
        title: 'Dedicated GST Accountant',
        desc: 'You are assigned a qualified accountant who understands your business, industry, and transaction patterns. This continuity eliminates the learning curve each month and results in faster, more accurate filings.',
      },
      {
        icon: '📱',
        title: 'Real-Time Status Dashboard',
        desc: 'Track every filing milestone — data received, reconciliation completed, draft shared, return filed — through our client portal. Receive WhatsApp and email notifications at each stage so you always know where things stand.',
      },
      {
        icon: '🔒',
        title: 'GSTIN Protection & Risk Mitigation',
        desc: 'Consistent, on-time filing keeps your GSTIN in active status, preventing suspension or cancellation. We also monitor for departmental notices and assist with responses, ensuring your registration remains uninterrupted.',
      },
      {
        icon: '📊',
        title: 'Monthly Compliance Insights Report',
        desc: 'After each filing cycle, receive a comprehensive report summarizing tax paid, ITC utilised, carry-forward credits, and year-to-date trends. Use these insights for cash flow planning, budgeting, and strategic decision-making.',
      },
    ],
    disadvantages: [
      'Outsourcing return filing requires sharing sensitive financial data — invoices, purchase records, and bank details — with a third-party service provider, which demands robust data security measures.',
      'Professional filing fees add a recurring cost to your business operations, which may be significant for micro-enterprises with very low transaction volumes and tight margins.',
      'Dependence on timely data sharing: if your team delays uploading invoices or responding to reconciliation queries, the filing timeline may be compressed, increasing error risk.',
      'Switching between service providers mid-year can create continuity gaps in reconciliation data and require re-onboarding effort for the new accountant.',
    ],
    compliance: [
      {
        area: 'Monthly Filing Deadlines',
        details: 'GSTR-1 must be filed by the 11th of the following month (13th for QRMP quarterly filers). GSTR-3B is due by the 20th (22nd or 24th for taxpayers in specified states under the staggered filing schedule).',
      },
      {
        area: 'ITC Claim Window',
        details: 'Input tax credit for any financial year can be claimed only up to 30 November of the following financial year or the date of filing the annual return, whichever is earlier. Missing this window results in permanent credit loss.',
      },
      {
        area: 'E-Invoice & E-Way Bill Compliance',
        details: 'Businesses with turnover above ₹5 crore must generate e-invoices through the Invoice Registration Portal (IRP). E-way bills are mandatory for goods movement above ₹50,000 and must be generated before dispatch.',
      },
      {
        area: 'Record Retention Requirements',
        details: 'All GST records — invoices, returns filed, payment challans, credit notes, and reconciliation workpapers — must be maintained for a minimum of 6 years from the due date of the annual return for that financial year.',
      },
    ],
    faqs: [
      {
        q: 'How often do I need to file GST returns?',
        a: 'Regular taxpayers file GSTR-1 and GSTR-3B monthly. Small taxpayers with turnover up to ₹5 crore can opt for the QRMP scheme to file these returns quarterly while making monthly tax payments through a challan. Composition dealers file CMP-08 quarterly and GSTR-4 annually. All registered persons must file the annual return GSTR-9 once a year.',
      },
      {
        q: 'What is GSTR-2B and why is it important for return filing?',
        a: 'GSTR-2B is an auto-generated statement available on the GST portal that shows input tax credit details based on the GSTR-1 and GSTR-5 filings of your suppliers. It serves as the basis for claiming ITC in GSTR-3B. Reconciling your purchase records with GSTR-2B ensures that you claim only eligible credit and avoid notices for excess claims.',
      },
      {
        q: 'Can I file a nil return if I had no transactions?',
        a: 'Yes, and you must. Even if your business had zero sales and zero purchases during a period, filing nil returns is mandatory to keep your GSTIN active. Non-filing of nil returns attracts the same late fee (₹20/day) and can eventually lead to GSTIN cancellation after prolonged default.',
      },
      {
        q: 'What happens if I miss the GST return filing deadline?',
        a: 'A late fee of ₹50 per day (₹25 CGST + ₹25 SGST) is levied for each day of delay, capped at ₹10,000 per return. Additionally, interest at 18% per annum is charged on the unpaid tax liability. Persistent non-filing for 6 months or more can result in suo motu cancellation of your GSTIN.',
      },
      {
        q: 'How does Your Professional ensure my ITC is maximized?',
        a: 'We perform invoice-level reconciliation between your purchase ledger and the GSTR-2B auto-drafted statement each month. Discrepancies — such as invoices not uploaded by suppliers, incorrect amounts, or missing HSN codes — are identified and communicated to you for follow-up. This ensures that every eligible rupee of input tax credit is captured in your return.',
      },
      {
        q: 'What information do I need to provide each month for filing?',
        a: 'You need to share all sales invoices (B2B and B2C), purchase invoices, credit/debit notes, advance receipt details, and any reverse charge invoices for the period. If you use accounting software like Tally or Zoho Books, we can integrate directly and pull data automatically, reducing your manual effort.',
      },
      {
        q: 'Can I revise a GST return after filing?',
        a: 'GST returns cannot be revised after filing. However, errors in GSTR-1 can be corrected in the subsequent month\'s filing through amendments. For GSTR-3B, any excess or short payment of tax can be adjusted in the next period\'s return, subject to interest implications on short payments.',
      },
      {
        q: 'Does Your Professional handle annual returns and reconciliation?',
        a: 'Yes. Our annual return service includes preparing GSTR-9 by consolidating all monthly filings and reconciling them with your books. For businesses with turnover exceeding ₹5 crore, we also prepare GSTR-9C by reconciling the annual return figures with your audited financial statements, identifying and explaining all variances.',
      },
    ],
    cta: {
      heading: 'Never Miss a GST Deadline Again',
      subheading:
        'Let Your Professional manage your GST return filing while you focus on what matters most — building your business. Accurate filings, maximum ITC, zero penalties.',
      features: [
        'Dedicated GST accountant assigned to your business',
        'Invoice-level GSTR-2B reconciliation every month',
        'Proactive deadline alerts via WhatsApp and email',
        'Monthly compliance summary report with actionable insights',
      ],
    },
  },

  'gstr9-return-filing': {
    slug: 'gstr9-return-filing',
    title: 'GSTR9 Return Filing',
    subtitle:
      'File your annual GST return (GSTR-9) accurately and on time with expert assistance from Your Professional — consolidate your monthly and quarterly filings into a comprehensive yearly summary.',
    heroFeatures: [
      'Complete reconciliation of GSTR-1 and GSTR-3B data',
      'Expert verification of ITC claims and tax liability',
      'Timely filing to avoid late fees and penalties',
      'Dedicated CA-assisted review before submission',
      'Post-filing support for notices and discrepancies',
    ],
    overview: {
      heading: 'What Is GSTR-9 Annual Return Filing?',
      paragraphs: [
        'GSTR-9 is the annual return that every registered taxpayer under the Goods and Services Tax regime must file for each financial year. It serves as a consolidated summary of all outward supplies, inward supplies, tax paid, input tax credit claimed, and any refunds or demands raised during the year. The return pulls together information already reported through monthly or quarterly filings such as GSTR-1 and GSTR-3B, presenting the complete tax profile of a business in a single document. Filing GSTR-9 is mandatory for all regular taxpayers whose aggregate turnover exceeds the prescribed threshold, and it plays a vital role in maintaining transparent tax records with the government.',
        'At Your Professional, we recognize that preparing GSTR-9 involves meticulous data reconciliation. Discrepancies between your books of accounts, GSTR-1 (outward supply statements), and GSTR-3B (summary returns) can lead to incorrect reporting, which may trigger scrutiny or demand notices from the tax department. Our team of experienced GST practitioners carefully reconciles every figure, verifies input tax credit utilization, checks for mismatches in HSN-level reporting, and ensures that the annual return accurately mirrors your actual business transactions.',
        'Beyond mere compliance, a well-prepared GSTR-9 strengthens your business credibility. Lenders, investors, and partners often review GST compliance records when evaluating a company. Timely and accurate annual return filing demonstrates financial discipline and reduces the risk of future litigation. Whether you are a small trader or a large enterprise, Your Professional provides end-to-end GSTR-9 filing services tailored to the complexity of your operations.',
      ],
      highlights: [
        { icon: '📊', text: 'Comprehensive reconciliation across GSTR-1, GSTR-3B, and books of accounts' },
        { icon: '🔍', text: 'Line-by-line verification of ITC eligibility and reversal requirements' },
        { icon: '⏰', text: 'On-time filing to avoid hefty late fees of ₹200 per day' },
        { icon: '🛡️', text: 'Post-filing audit support and notice response assistance' },
      ],
    },
    types: [
      {
        title: 'GSTR-9 (Regular)',
        desc: 'The standard annual return applicable to all regular GST-registered taxpayers. It consolidates details of outward and inward supplies, ITC availed and reversed, tax paid, and demand/refund particulars for the entire financial year.',
      },
      {
        title: 'GSTR-9A (Composition Dealers)',
        desc: 'Annual return specifically designed for taxpayers registered under the Composition Scheme. It captures quarterly turnover details, tax paid at composition rates, and any amendments made during the year. Note: GSTR-9A has been suspended for certain periods by government notification.',
      },
      {
        title: 'GSTR-9C (Reconciliation Statement)',
        desc: 'A self-certified reconciliation statement that must be filed by taxpayers whose aggregate turnover exceeds ₹5 crore. It reconciles the figures reported in the annual return with the audited financial statements and highlights any discrepancies with explanatory notes.',
      },
    ],
    eligibility: [
      'Every person registered under GST as a regular taxpayer during any part of the financial year',
      'Taxpayers whose aggregate turnover exceeds ₹2 crore (GSTR-9 is mandatory; for turnover up to ₹2 crore it is optional as per recent notifications)',
      'Businesses registered under the Composition Scheme must file GSTR-9A (when applicable)',
      'Taxpayers with aggregate turnover above ₹5 crore must additionally file GSTR-9C reconciliation statement',
      'Input Service Distributors (ISDs) are exempt from filing GSTR-9 but must file their own annual return',
      'Casual taxable persons and non-resident taxable persons are not required to file GSTR-9',
      'TDS deductors and TCS collectors under GST are also exempt from GSTR-9 filing',
      'UIN holders (embassies, UN bodies) are not required to file annual returns under GST',
    ],
    documents: [
      {
        category: 'GST Return Records',
        items: [
          'Copies of all GSTR-1 filings for the financial year (monthly or quarterly)',
          'Copies of all GSTR-3B filings for the financial year',
          'GSTR-2A and GSTR-2B auto-populated data for ITC reconciliation',
          'Any amendment details filed through GSTR-1 or GSTR-3B during the year',
          'Details of credit notes and debit notes issued or received',
        ],
      },
      {
        category: 'Financial Records',
        items: [
          'Audited or unaudited financial statements (Profit & Loss and Balance Sheet)',
          'Trial balance for the relevant financial year',
          'HSN-wise summary of outward supplies with turnover exceeding the prescribed limit',
          'Details of ITC availed, reversed, and ineligible credit during the year',
        ],
      },
      {
        category: 'Supporting Documents',
        items: [
          'GST registration certificate with all applicable GSTINs',
          'Details of tax paid through cash ledger and credit ledger',
          'Refund applications filed and their current status',
          'Demand orders received and payments made against them',
          'Details of late fees or interest paid during the financial year',
        ],
      },
    ],
    process: [
      {
        title: 'Data Collection and Preliminary Review',
        desc: 'We gather all GSTR-1, GSTR-3B, GSTR-2A/2B data, and your books of accounts. A preliminary review identifies obvious mismatches and missing invoices that need attention before reconciliation begins.',
        time: '2-3 days',
      },
      {
        title: 'Turnover Reconciliation',
        desc: 'Our experts reconcile the turnover reported in GSTR-1 with GSTR-3B and your profit & loss statement. Any differences due to advances, credit notes, or exempt supplies are documented and adjusted appropriately.',
        time: '2-4 days',
      },
      {
        title: 'Input Tax Credit Reconciliation',
        desc: 'We match ITC claimed in GSTR-3B against GSTR-2A/2B auto-populated data and your purchase registers. Ineligible credits are identified, reversals under Rule 42/43 are computed, and net ITC figures are finalized.',
        time: '3-5 days',
      },
      {
        title: 'HSN Summary Preparation',
        desc: 'We prepare the HSN-wise summary of outward supplies as required in Table 17 of GSTR-9. Each HSN code is validated against your product or service catalog to ensure accurate classification.',
        time: '1-2 days',
      },
      {
        title: 'Draft GSTR-9 Preparation',
        desc: 'Based on the reconciled data, we prepare a draft GSTR-9 covering all six parts and nineteen tables. The draft is shared with you for review, and our team explains any adjustments made during reconciliation.',
        time: '2-3 days',
      },
      {
        title: 'Client Review and Approval',
        desc: 'You review the draft annual return, raise queries or provide clarifications, and give formal approval for filing. We address all concerns and make final adjustments as needed before submission.',
        time: '1-2 days',
      },
      {
        title: 'Filing on GST Portal and Confirmation',
        desc: 'Once approved, we file GSTR-9 on the GST portal using DSC or EVC authentication. An acknowledgment receipt (ARN) is generated, and we share the filed return along with the confirmation for your records.',
        time: '1 day',
      },
    ],
    fees: [
      { item: 'GSTR-9 filing (turnover up to ₹1.5 crore)', cost: '₹3,500 - ₹5,000' },
      { item: 'GSTR-9 filing (turnover ₹1.5 crore to ₹5 crore)', cost: '₹5,000 - ₹8,000' },
      { item: 'GSTR-9 filing (turnover above ₹5 crore)', cost: '₹8,000 - ₹15,000' },
      { item: 'GSTR-9C reconciliation statement preparation', cost: '₹5,000 - ₹12,000' },
      { item: 'ITC reconciliation and mismatch resolution', cost: '₹2,000 - ₹5,000' },
      { item: 'Post-filing notice handling (per notice)', cost: '₹2,500 - ₹7,000' },
    ],
    penalties: [
      {
        violation: 'Late filing of GSTR-9',
        penalty:
          'Late fee of ₹200 per day (₹100 CGST + ₹100 SGST) subject to a maximum of 0.5% of turnover in the state or union territory. No late fee under IGST.',
      },
      {
        violation: 'Incorrect or incomplete reporting in GSTR-9',
        penalty:
          'May attract a demand notice under Section 73 or 74 of the CGST Act. Interest at 18% per annum is applicable on any short-paid tax identified during assessment.',
      },
      {
        violation: 'Failure to file GSTR-9C when required',
        penalty:
          'While there is no separate penalty for non-filing of GSTR-9C, discrepancies discovered during audit can lead to demand proceedings with interest and potential penalty up to 100% of the tax due.',
      },
      {
        violation: 'Claiming excess ITC in GSTR-9',
        penalty:
          'Excess ITC reported may attract reversal with interest at 24% per annum under Section 50. In cases of fraud, a penalty equivalent to the tax amount may be levied under Section 74.',
      },
    ],
    advantages: [
      {
        icon: '✅',
        title: 'Complete Compliance Record',
        desc: 'Filing GSTR-9 on time creates a clean compliance history on the GST portal, reducing the probability of being selected for audit or scrutiny and improving your overall compliance rating.',
      },
      {
        icon: '💰',
        title: 'Accurate ITC Reconciliation',
        desc: 'Professional preparation ensures every rupee of eligible input tax credit is correctly claimed and reconciled, preventing both excess claims that attract penalties and missed credits that inflate your tax burden.',
      },
      {
        icon: '🔒',
        title: 'Protection Against Future Disputes',
        desc: 'A thoroughly prepared annual return with proper reconciliation documentation serves as a strong defense if the tax department raises queries or issues demand notices in subsequent years.',
      },
      {
        icon: '📈',
        title: 'Better Business Credibility',
        desc: 'Consistent GST compliance enhances your reputation with banks, investors, and potential business partners who increasingly check GST filing status before entering into agreements or extending credit.',
      },
      {
        icon: '⏱️',
        title: 'Saves Time and Internal Resources',
        desc: 'Outsourcing GSTR-9 preparation to experts frees your accounting team to focus on core business operations while ensuring professional-grade accuracy in complex reconciliation tasks.',
      },
      {
        icon: '🧾',
        title: 'Error Detection and Correction',
        desc: 'The annual return preparation process often uncovers errors in monthly filings that can be corrected, preventing these mistakes from compounding into larger issues during departmental audits.',
      },
    ],
    disadvantages: [
      'GSTR-9 cannot be revised once filed, so any error requires alternative correction methods such as adjustment in subsequent year returns or responding to departmental queries',
      'The reconciliation process can be time-consuming for businesses with high transaction volumes, especially when GSTR-2A/2B data does not match vendor-reported figures',
      'Taxpayers with multiple GSTINs must file separate GSTR-9 returns for each registration, increasing the overall compliance burden and professional fees',
      'Late fees accumulate daily until the return is filed, and there is currently no provision for waiver of late fees once the deadline has passed for most financial years',
    ],
    compliance: [
      {
        area: 'Filing Deadline',
        details:
          'GSTR-9 is due by December 31 of the year following the relevant financial year. For example, GSTR-9 for FY 2023-24 is due by December 31, 2024. Extensions are granted by government notification on a case-by-case basis.',
      },
      {
        area: 'Ongoing Reconciliation Practices',
        details:
          'Maintain monthly reconciliation of GSTR-1 and GSTR-3B with your books of accounts. This makes annual return preparation significantly easier and helps identify mismatches early for timely resolution.',
      },
      {
        area: 'Record Retention',
        details:
          'All invoices, credit notes, debit notes, and supporting documents for transactions reported in GSTR-9 must be retained for at least 72 months (6 years) from the due date of the annual return.',
      },
      {
        area: 'Amendments and Corrections',
        details:
          'Any amendments to outward supply details or ITC for a financial year can be made in the return for the month of September of the following year or the date of filing the annual return, whichever is earlier.',
      },
    ],
    faqs: [
      {
        q: 'Who is required to file GSTR-9?',
        a: 'Every person registered under GST as a regular taxpayer must file GSTR-9. However, casual taxable persons, non-resident taxable persons, Input Service Distributors, persons paying TDS/TCS, and UIN holders are exempt. Recent notifications have also made it optional for taxpayers with aggregate turnover up to ₹2 crore.',
      },
      {
        q: 'What is the difference between GSTR-9 and GSTR-9C?',
        a: 'GSTR-9 is the annual return that summarizes all monthly/quarterly filings for the year. GSTR-9C is a reconciliation statement that compares figures in GSTR-9 with audited financial statements. GSTR-9C is mandatory only for taxpayers with aggregate turnover exceeding ₹5 crore and must be self-certified by the taxpayer.',
      },
      {
        q: 'Can I revise GSTR-9 after filing?',
        a: 'No, the GST law currently does not allow revision of GSTR-9 once it has been filed. If errors are discovered after filing, corrections may need to be made through the next financial year\'s returns or by responding to departmental notices. This is why thorough review before filing is crucial.',
      },
      {
        q: 'What happens if I miss the GSTR-9 filing deadline?',
        a: 'A late fee of ₹200 per day (₹100 CGST + ₹100 SGST) is levied for each day of delay, subject to a maximum of 0.5% of the turnover in the relevant state or union territory. There is no late fee component under IGST. The late fee accrues until the return is actually filed.',
      },
      {
        q: 'Is GSTR-9 mandatory for composition scheme dealers?',
        a: 'Composition scheme dealers are required to file GSTR-9A instead of GSTR-9. However, GSTR-9A has been suspended for certain financial years through government notifications. It is advisable to check the latest notifications or consult a professional to confirm the filing requirement for a specific year.',
      },
      {
        q: 'How do you reconcile ITC mismatches between GSTR-3B and GSTR-2A?',
        a: 'We compare ITC claimed in GSTR-3B on a monthly basis with the auto-populated GSTR-2A/2B data. Any mismatches are investigated by cross-referencing purchase invoices, verifying supplier filing status, and checking for timing differences. Legitimate credits are documented with supporting evidence, while ineligible claims are flagged for reversal.',
      },
      {
        q: 'Do I need to report HSN-wise summary in GSTR-9?',
        a: 'Yes, Table 17 of GSTR-9 requires an HSN-wise summary of outward supplies. The level of detail depends on your turnover: taxpayers with turnover up to ₹1.5 crore may report at a 2-digit HSN level, while those above ₹5 crore must report at a 6-digit level. Our team ensures accurate HSN classification for your products and services.',
      },
      {
        q: 'What supporting documents should I keep ready for GSTR-9 filing?',
        a: 'Keep all monthly GSTR-1 and GSTR-3B filings, GSTR-2A/2B data, purchase and sales registers, credit/debit notes, audited financial statements, trial balance, and details of any refund applications or demand orders. Having organized records significantly reduces the time and cost of annual return preparation.',
      },
    ],
    cta: {
      heading: 'File Your GSTR-9 Annual Return With Confidence',
      subheading:
        'Let the experts at Your Professional handle the complexities of annual return reconciliation and filing — accurate, on-time, and stress-free.',
      features: [
        'End-to-end GSTR-9 preparation and filing',
        'Thorough ITC and turnover reconciliation',
        'GSTR-9C reconciliation statement support',
        'Post-filing notice and audit assistance',
        'Dedicated GST expert assigned to your case',
      ],
    },
  },

  'cancel-gst-registration': {
    slug: 'cancel-gst-registration',
    title: 'Cancel GST Registration',
    subtitle:
      'Smoothly cancel your GST registration when your business closes or no longer meets the threshold — Your Professional handles the entire process from application to final return filing.',
    heroFeatures: [
      'Complete application preparation and submission on the GST portal',
      'Final GSTR-10 return filing included in the service',
      'Guidance on ITC reversal and stock valuation requirements',
      'Support for both voluntary and suo motu cancellation cases',
      'Assistance with revocation if cancellation was done in error',
    ],
    overview: {
      heading: 'Understanding GST Registration Cancellation',
      paragraphs: [
        'GST registration cancellation is the formal process of surrendering your GSTIN when you no longer need to remain registered under the Goods and Services Tax framework. This situation typically arises when a business discontinues operations, undergoes a change in constitution such as merger or transfer, or when the aggregate turnover drops below the mandatory registration threshold. The cancellation can be initiated voluntarily by the taxpayer, by a legal heir in case of the proprietor\'s demise, or by the proper officer (suo motu) when there are compliance failures such as non-filing of returns for extended periods.',
        'The cancellation process involves more than simply submitting a form on the GST portal. Taxpayers must reverse any input tax credit remaining in the electronic credit ledger or pay tax on the closing stock of inputs, semi-finished goods, finished goods, and capital goods as on the date of cancellation. Additionally, a final return in Form GSTR-10 must be filed within three months of the cancellation date or the date of the cancellation order, whichever is later. Failure to comply with these requirements can result in demand notices and penalties.',
        'Your Professional provides complete GST cancellation services that cover every aspect of the process. From determining whether cancellation is the right choice for your situation to computing ITC reversals, preparing and filing the cancellation application (REG-16), and submitting the final return, our team ensures nothing is overlooked. We also assist businesses that have had their registration cancelled suo motu by the tax officer and wish to apply for revocation to restore their active status.',
      ],
      highlights: [
        { icon: '📋', text: 'End-to-end handling of the cancellation application process' },
        { icon: '🔄', text: 'Accurate ITC reversal computation to avoid excess or short payment' },
        { icon: '📄', text: 'Final return (GSTR-10) preparation and timely filing' },
        { icon: '⚖️', text: 'Revocation assistance for wrongful or suo motu cancellations' },
      ],
    },
    types: [
      {
        title: 'Voluntary Cancellation by Taxpayer',
        desc: 'When a registered person no longer carries on business, the aggregate turnover falls below the threshold limit, or the business entity undergoes a change in constitution (such as amalgamation, demerger, or conversion), the taxpayer can voluntarily apply for cancellation through Form GST REG-16.',
      },
      {
        title: 'Suo Motu Cancellation by Tax Officer',
        desc: 'The proper officer may cancel a GST registration on their own initiative if the taxpayer has not filed returns for a continuous period, has obtained registration through fraud or misrepresentation, or has violated the provisions of the GST Act. A show cause notice in Form REG-17 is issued before such cancellation.',
      },
      {
        title: 'Cancellation by Legal Heir or Successor',
        desc: 'In the event of the death of a sole proprietor or the dissolution of a partnership firm, the legal heir, executor, or administrator of the estate can apply for cancellation of the GST registration of the deceased or dissolved entity.',
      },
      {
        title: 'Revocation of Cancellation',
        desc: 'If a registration has been cancelled suo motu by the tax officer, the taxpayer can apply for revocation within 30 days of the cancellation order (extendable by an additional 30 days by the Additional/Joint Commissioner). This restores the registration to active status.',
      },
    ],
    eligibility: [
      'Businesses that have permanently closed or discontinued all operations subject to GST',
      'Entities whose aggregate turnover has fallen below the mandatory registration threshold of ₹40 lakh (₹20 lakh for special category states)',
      'Companies or firms that have undergone amalgamation, merger, demerger, or transfer of business ownership',
      'Sole proprietorships where the proprietor has deceased (application by legal heir)',
      'Taxpayers who obtained voluntary registration but no longer wish to remain registered',
      'Businesses that have been converted from one type of entity to another requiring a new registration',
      'Taxpayers whose registration was cancelled suo motu and who wish to apply for revocation within the prescribed time limit',
    ],
    documents: [
      {
        category: 'Identity and Registration Documents',
        items: [
          'GST registration certificate (Form REG-06) for the GSTIN being cancelled',
          'PAN card of the business entity or proprietor',
          'Aadhaar card or other identity proof of the authorized signatory',
          'Board resolution or authorization letter for companies and LLPs',
        ],
      },
      {
        category: 'Business Closure Documents',
        items: [
          'Letter stating the reason for cancellation of registration',
          'Details of closing stock including inputs, semi-finished goods, finished goods, and capital goods',
          'Valuation of closing stock for ITC reversal computation',
          'Details of the last supply made and the date of such supply',
          'Partnership deed dissolution document or board resolution for winding up (if applicable)',
        ],
      },
      {
        category: 'Tax and Compliance Records',
        items: [
          'Copies of all pending GST returns that need to be filed before cancellation',
          'Details of input tax credit balance in the electronic credit ledger',
          'Tax payment challans for any outstanding liability including ITC reversal amount',
          'Details of any pending refund applications or demand notices',
        ],
      },
    ],
    process: [
      {
        title: 'Initial Assessment and Pre-Cancellation Review',
        desc: 'We review your GST compliance status, check for unfiled returns, pending demands, or refund applications, and assess the ITC reversal liability. This pre-cancellation audit ensures there are no surprises during the process.',
        time: '1-2 days',
      },
      {
        title: 'Filing Pending Returns',
        desc: 'All pending GSTR-1 and GSTR-3B returns must be filed up to the effective date of cancellation. We prepare and file any outstanding returns to bring your compliance record up to date before submitting the cancellation application.',
        time: '2-5 days',
      },
      {
        title: 'ITC Reversal Computation',
        desc: 'We calculate the input tax credit that must be reversed on closing stock of inputs, semi-finished goods, finished goods, and capital goods. The reversal amount is computed based on the higher of the ITC on such goods or the tax on the transaction value of such goods.',
        time: '1-3 days',
      },
      {
        title: 'Preparation and Filing of REG-16',
        desc: 'We prepare the cancellation application in Form GST REG-16 with all required details including the date from which cancellation is sought, reasons for cancellation, particulars of closing stock, and the amount of ITC reversal or tax payable. The form is filed on the GST portal with DSC or EVC.',
        time: '1 day',
      },
      {
        title: 'Response to Officer Queries (If Any)',
        desc: 'The proper officer may seek clarification or additional information before processing the cancellation. We draft and submit responses to any queries raised, providing supporting documents and explanations as required.',
        time: '3-7 days (if queries raised)',
      },
      {
        title: 'Cancellation Order Processing',
        desc: 'Once the proper officer is satisfied, a cancellation order is issued in Form REG-19 specifying the effective date of cancellation. We obtain and share this order with you along with a summary of the cancellation details.',
        time: '7-15 days',
      },
      {
        title: 'Filing of Final Return (GSTR-10)',
        desc: 'Within three months of the cancellation date or the date of the cancellation order (whichever is later), we prepare and file the final return in GSTR-10 declaring the closing stock details and tax payable thereon. This completes the cancellation process.',
        time: '1-3 days',
      },
    ],
    fees: [
      { item: 'GST cancellation application (REG-16) preparation and filing', cost: '₹1,500 - ₹3,000' },
      { item: 'Filing of pending GST returns (per return)', cost: '₹500 - ₹1,500' },
      { item: 'ITC reversal computation and documentation', cost: '₹1,000 - ₹3,000' },
      { item: 'Final return (GSTR-10) preparation and filing', cost: '₹1,000 - ₹2,500' },
      { item: 'Revocation of cancellation application (REG-21)', cost: '₹2,000 - ₹4,000' },
      { item: 'Response to show cause notice or officer queries', cost: '₹1,500 - ₹3,500' },
    ],
    penalties: [
      {
        violation: 'Non-filing of GSTR-10 (final return)',
        penalty:
          'A late fee of ₹200 per day (₹100 CGST + ₹100 SGST) is applicable for delayed filing of GSTR-10, subject to a maximum of ₹10,000. Additionally, the cancellation process remains incomplete until GSTR-10 is filed.',
      },
      {
        violation: 'Failure to pay ITC reversal amount on closing stock',
        penalty:
          'The tax amount equivalent to the ITC on closing stock or the output tax on such stock (whichever is higher) becomes recoverable as a government due. Interest at 18% per annum is applicable from the date of cancellation until payment.',
      },
      {
        violation: 'Collecting GST after cancellation of registration',
        penalty:
          'Any person who collects GST after cancellation of registration is liable to deposit the collected amount with the government along with interest. Additionally, a penalty under Section 122 of up to ₹10,000 or the tax amount involved (whichever is higher) may be imposed.',
      },
      {
        violation: 'Non-compliance leading to suo motu cancellation',
        penalty:
          'If registration is cancelled suo motu due to non-filing of returns for six consecutive months, all pending returns must still be filed with applicable late fees and interest before applying for revocation. The total late fee accumulation can be substantial.',
      },
    ],
    advantages: [
      {
        icon: '🚫',
        title: 'End of Compliance Burden',
        desc: 'Once GST registration is cancelled, you are no longer required to file monthly or quarterly GST returns, reducing the ongoing compliance cost and administrative burden for businesses that are no longer operational.',
      },
      {
        icon: '💵',
        title: 'Savings on Professional Fees',
        desc: 'Regular GST compliance requires ongoing expenditure on accounting and professional services. Cancelling an unused registration eliminates these recurring costs, which is particularly beneficial for dormant or low-turnover entities.',
      },
      {
        icon: '⚠️',
        title: 'Avoidance of Suo Motu Action',
        desc: 'Proactively cancelling your registration prevents the tax officer from initiating suo motu cancellation proceedings, which can result in additional scrutiny, penalties, and complications when seeking revocation later.',
      },
      {
        icon: '📑',
        title: 'Clean Compliance Exit',
        desc: 'A properly executed cancellation with all returns filed and dues cleared creates a clean exit record. This is important if you plan to start a new business or register under GST again in the future.',
      },
      {
        icon: '🔄',
        title: 'Revocation Option Available',
        desc: 'If your registration is cancelled suo motu, you can apply for revocation within the prescribed time limit. Our Professional assists with the entire revocation process including filing pending returns and clearing outstanding dues.',
      },
      {
        icon: '🏢',
        title: 'Smooth Business Transition',
        desc: 'For businesses undergoing restructuring, merger, or transfer, timely cancellation of the old registration facilitates a smooth transition to the new entity structure without overlapping compliance obligations.',
      },
    ],
    disadvantages: [
      'After cancellation, you cannot issue GST-compliant tax invoices or collect GST from customers, which may affect your ability to do business with registered entities who require input tax credit',
      'The ITC reversal requirement on closing stock can result in a significant one-time tax outflow, especially for businesses with large inventories at the time of cancellation',
      'If you wish to resume operations later, you must apply for fresh GST registration, which involves submitting all documents again and obtaining a new GSTIN',
      'Cancellation does not extinguish any pending tax liability, demand notice, or legal proceedings — these continue to be enforceable even after the registration is cancelled',
    ],
    compliance: [
      {
        area: 'GSTR-10 Filing Deadline',
        details:
          'The final return in Form GSTR-10 must be filed within three months from the date of cancellation or the date of the cancellation order, whichever is later. This return is mandatory and its non-filing attracts late fees.',
      },
      {
        area: 'Pending Returns Before Cancellation',
        details:
          'All GSTR-1 and GSTR-3B returns must be filed up to the effective date of cancellation. The cancellation application cannot be processed if there are outstanding return filing obligations.',
      },
      {
        area: 'Revocation Application Timeline',
        details:
          'Application for revocation of suo motu cancellation must be filed within 30 days of the service of the cancellation order. The Additional or Joint Commissioner may extend this by another 30 days, and the Commissioner may grant a further 30-day extension.',
      },
      {
        area: 'Record Preservation After Cancellation',
        details:
          'Even after cancellation, all books of accounts, invoices, and records relating to the period of registration must be preserved for at least 72 months (6 years) from the due date of the annual return for the last year of registration.',
      },
    ],
    faqs: [
      {
        q: 'Can I cancel my GST registration voluntarily?',
        a: 'Yes, you can voluntarily apply for cancellation if your business has closed, your turnover has fallen below the registration threshold, or you no longer wish to remain registered. The application is filed in Form GST REG-16 on the GST portal along with the required details.',
      },
      {
        q: 'What is the difference between cancellation and suspension of GST registration?',
        a: 'Suspension is a temporary measure where the registration is put on hold during the processing of the cancellation application or when the proper officer initiates suo motu proceedings. During suspension, you are not required to file returns. Cancellation is the permanent deactivation of the GSTIN.',
      },
      {
        q: 'Do I need to reverse ITC when cancelling GST registration?',
        a: 'Yes, you must reverse the input tax credit attributable to the closing stock of inputs, semi-finished goods, finished goods, and capital goods on the date of cancellation. The reversal amount is the higher of the ITC on such stock or the tax payable on the transaction value of such stock.',
      },
      {
        q: 'What is GSTR-10 and when should it be filed?',
        a: 'GSTR-10 is the final return that must be filed by every registered person whose registration has been cancelled or surrendered. It must be filed within three months of the cancellation date or the cancellation order date, whichever is later. It contains details of closing stock and tax payable thereon.',
      },
      {
        q: 'Can I get my GST registration restored after cancellation?',
        a: 'If the cancellation was done suo motu by the tax officer, you can apply for revocation in Form REG-21 within 30 days of the cancellation order. For voluntary cancellations, there is no revocation provision — you must apply for fresh registration if you wish to be registered again.',
      },
      {
        q: 'What happens if my GST registration is cancelled but I do not file GSTR-10?',
        a: 'Non-filing of GSTR-10 attracts a late fee of ₹200 per day up to a maximum of ₹10,000. More importantly, the cancellation process is considered incomplete without GSTR-10, and you may face difficulties in obtaining fresh registration or closing pending proceedings.',
      },
      {
        q: 'How long does the cancellation process take?',
        a: 'The proper officer must process the cancellation application within 30 days of receiving it. However, if queries are raised or additional information is requested, the timeline may extend. Typically, the end-to-end process including filing pending returns and GSTR-10 takes 2 to 6 weeks.',
      },
      {
        q: 'Will pending tax demands continue after GST registration is cancelled?',
        a: 'Yes, cancellation of registration does not discharge any pending tax liability, interest, penalty, or demand raised against you. All outstanding amounts remain recoverable, and legal proceedings initiated before cancellation continue unaffected.',
      },
    ],
    cta: {
      heading: 'Cancel Your GST Registration Hassle-Free',
      subheading:
        'Trust Your Professional to manage every step of the GST cancellation process — from pending return filing to ITC reversal and final return submission.',
      features: [
        'Complete cancellation application handling',
        'Pending return filing and compliance clearance',
        'ITC reversal calculation and payment support',
        'GSTR-10 final return preparation and filing',
        'Revocation assistance for suo motu cancellations',
      ],
    },
  },

  'virtual-place-of-business-gst': {
        slug: 'virtual-place-of-business-gst',
        title: 'Virtual Place of Business in GST',
        subtitle:
            'Register your GST with a verified virtual office address through Your Professional — affordable, fully compliant, and accepted across all Indian states for seamless GST registration.',
        heroFeatures: [
            'GST-Compliant Virtual Office Address in 24–48 Hours',
            'Accepted by GST Authorities Across All States',
            'Rent Agreement, NOC & Utility Bill Included',
            'Ideal for Freelancers, Startups & E-Commerce Sellers',
            'Dedicated Support for GST Registration & Amendments',
        ],
        overview: {
            heading: 'What is a Virtual Place of Business in GST?',
            paragraphs: [
                'A Virtual Place of Business (VPoB) in GST refers to a professionally managed office address that a taxpayer can use as their principal or additional place of business for the purpose of obtaining GST registration. Unlike a traditional physical office, a virtual place of business provides a legitimate commercial address without requiring the taxpayer to maintain an actual workspace at that location. This concept gained formal recognition after the GST Council and various state tax authorities acknowledged the growing need for flexible business models, particularly in the digital economy.',
                'Under the CGST Act, 2017 and the respective SGST Acts, every person liable to be registered under GST must declare a principal place of business on their registration application (Form GST REG-01). The law requires that this address be a place from where the business is ordinarily carried on or where books of accounts are maintained. A virtual office address, backed by a valid rent or lease agreement and a No Objection Certificate (NOC) from the premises owner, fulfils these requirements and is widely accepted by GST authorities for registration purposes.',
                'Your Professional partners with verified virtual office providers in every major Indian city to offer taxpayers a hassle-free path to GST registration. Whether you are an e-commerce seller operating from home, a freelancer seeking a professional address, or a company expanding into a new state without setting up a physical branch, our virtual place of business service ensures full compliance with GST regulations while saving you significant overhead costs.',
            ],
            highlights: [
                { icon: '🏢', text: 'A legitimate commercial address used exclusively for GST registration and compliance' },
                { icon: '📜', text: 'Backed by a valid rent agreement, NOC, and utility proof as required by GST authorities' },
                { icon: '💻', text: 'Ideal for digital businesses, freelancers, consultants, and interstate sellers' },
                { icon: '✅', text: 'Accepted by Central and State GST authorities in all 28 states and 8 union territories' },
            ],
        },
        types: [
            {
                title: 'Virtual Office for Principal Place of Business',
                desc: 'This is the most common usage where the virtual address serves as the primary registered location for a new GST registration. The address appears on all GST certificates, invoices, and official correspondence. It is suitable for businesses that operate primarily online or do not have a dedicated physical office.',
            },
            {
                title: 'Virtual Office for Additional Place of Business',
                desc: 'When a business already holds a GST registration in one state and needs to register in another state for interstate operations, a virtual office can be used as the additional place of business. This avoids the cost of leasing a physical office in every state where the taxpayer has operations.',
            },
            {
                title: 'Virtual Office with Mail Handling & GST Notice Management',
                desc: 'Premium virtual office packages include mail and notice handling services. Any physical correspondence, tax notices, or departmental letters sent to the virtual address are received, scanned, and forwarded digitally to the taxpayer. This ensures no compliance communication is missed.',
            },
            {
                title: 'Co-Working Space Based Virtual Address',
                desc: 'Some virtual office arrangements are tied to co-working spaces, giving the taxpayer the option to use meeting rooms or hot desks occasionally while still maintaining a low-cost registered address. These addresses come with additional credibility as they are visibly functional business premises.',
            },
        ],
        eligibility: [
            'Any individual, proprietor, partnership firm, LLP, company, trust, or HUF liable to register under GST can use a virtual place of business.',
            'E-commerce sellers and online marketplace operators who do not maintain a physical storefront are eligible.',
            'Freelancers, consultants, and professionals providing taxable services from a home office can obtain a virtual address for GST registration.',
            'Businesses expanding into new states for interstate supply of goods or services without establishing a physical branch can use a VPoB.',
            'Startups and micro-enterprises that want to reduce overhead costs while maintaining GST compliance are eligible.',
            'Non-resident taxable persons who need a registered place of business in India for making taxable supplies.',
            'Casual taxable persons who temporarily carry on business in a state where they do not have a fixed place of business.',
            'Aggregators and digital platform operators who need state-wise GST registrations for compliance purposes.',
        ],
        documents: [
            {
                category: 'Identity & Address Proof of Applicant',
                items: [
                    'PAN Card of the proprietor, all partners, or all directors (mandatory for GST registration)',
                    'Aadhaar Card of the authorized signatory',
                    'Passport-sized photograph of the proprietor, partners, or directors',
                    'Personal address proof (Voter ID, Driving License, or Passport) of each stakeholder',
                ],
            },
            {
                category: 'Virtual Office Premises Documents',
                items: [
                    'Rent agreement or lease deed for the virtual office address executed on stamp paper',
                    'No Objection Certificate (NOC) from the owner of the virtual office premises',
                    'Latest electricity bill or property tax receipt of the virtual office premises (not older than 2 months)',
                    'Ownership proof of the premises (sale deed, property registration, or municipal records)',
                ],
            },
            {
                category: 'Business Constitution Documents',
                items: [
                    'Certificate of Incorporation or Registration Certificate (for companies, LLPs, or partnerships)',
                    'Partnership Deed or LLP Agreement (for partnership firms or LLPs)',
                    'Board Resolution or Authorization Letter appointing the authorized signatory for GST purposes',
                    'MOA and AOA (for companies) or Trust Deed (for trusts)',
                    'MSME or Udyam Registration Certificate (if applicable)',
                ],
            },
        ],
        process: [
            {
                title: 'Choose Your Virtual Office Location',
                desc: 'Select a verified virtual office address from our network of GST-compliant locations across India. Consider the state where you need GST registration, proximity to your target market, and any specific jurisdictional requirements.',
                time: '1 day',
            },
            {
                title: 'Execute Rent Agreement & Obtain NOC',
                desc: 'A formal rent agreement is executed between you and the virtual office provider on appropriate stamp paper. A No Objection Certificate is issued by the premises owner authorizing you to use the address for GST registration purposes.',
                time: '1–2 days',
            },
            {
                title: 'Collect Premises Documents',
                desc: 'Your Professional coordinates with the virtual office provider to gather all necessary premises documents including the latest electricity bill, ownership proof, and photographs of the premises — all required by the GST portal.',
                time: '1–2 days',
            },
            {
                title: 'Prepare & File GST Registration Application',
                desc: 'Our experts prepare your GST registration application on Form GST REG-01, uploading all identity documents, business constitution proofs, and virtual office premises documents on the GST portal along with the digital signature or Aadhaar e-verification.',
                time: '1–2 days',
            },
            {
                title: 'Application Verification & Clarifications',
                desc: 'The jurisdictional GST officer verifies your application and supporting documents. If any additional information or clarification is needed, a notice in Form GST REG-03 is issued. Your Professional responds within the stipulated timeframe with the required details.',
                time: '3–7 days',
            },
            {
                title: 'Physical Verification (If Required)',
                desc: 'In some cases, the GST officer may conduct a physical verification of the virtual office premises. Our virtual office partners are trained to handle such visits, ensuring the premises are inspection-ready with proper signage and documentation.',
                time: '3–5 days (if applicable)',
            },
            {
                title: 'GSTIN Allotment & Certificate Issuance',
                desc: 'Upon successful verification, your GSTIN is allotted and the GST Registration Certificate in Form GST REG-06 is issued. The certificate displays your virtual office address as the registered place of business. You can now begin issuing GST-compliant invoices.',
                time: '7–15 days total',
            },
        ],
        fees: [
            { item: 'Virtual Office Address (Annual Rental)', cost: '₹8,000 – ₹25,000 per year' },
            { item: 'Rent Agreement & NOC Preparation', cost: '₹1,500 – ₹3,000' },
            { item: 'Stamp Duty on Rent Agreement', cost: '₹500 – ₹2,000 (varies by state)' },
            { item: 'GST Registration Filing Assistance', cost: '₹2,499 onwards' },
            { item: 'Mail & Notice Handling (Premium Add-On)', cost: '₹3,000 – ₹6,000 per year' },
            { item: 'Your Professional Complete Package', cost: '₹9,999 onwards (all-inclusive)' },
        ],
        penalties: [
            {
                violation: 'Operating without GST registration when liable',
                penalty: 'Penalty of ₹10,000 or the tax amount due, whichever is higher, under Section 122 of the CGST Act. Continued non-compliance may result in prosecution.',
            },
            {
                violation: 'Providing false address or non-existent premises for GST registration',
                penalty: 'Registration may be cancelled suo motu under Section 29. Additionally, a penalty under Section 122(1)(ii) for fraudulent registration can extend to ₹10,000 or the tax evaded.',
            },
            {
                violation: 'Failure to display GSTIN and registered address at the place of business',
                penalty: 'Penalty of up to ₹25,000 under Section 125 for contravention of provisions not specifically covered elsewhere in the Act.',
            },
            {
                violation: 'Not updating change of address in GST registration within the prescribed time',
                penalty: 'A late amendment may attract scrutiny and penalties. Non-core amendments must be filed within 15 days of the change, and failure to do so can lead to registration cancellation.',
            },
        ],
        advantages: [
            {
                icon: '💰',
                title: 'Massive Cost Savings',
                desc: 'A virtual office costs a fraction of a traditional office lease. Businesses save 70–90% on rental expenses, security deposits, maintenance charges, and utility bills — freeing up capital for growth and operations.',
            },
            {
                icon: '🚀',
                title: 'Instant Multi-State Presence',
                desc: 'Expand your business footprint across multiple Indian states without setting up physical offices in each location. Obtain state-wise GST registrations quickly to serve customers nationwide.',
            },
            {
                icon: '📋',
                title: 'Full Legal Compliance',
                desc: 'Virtual office addresses provided through Your Professional come with all documents mandated by GST authorities — rent agreements, NOCs, electricity bills, and ownership proofs — ensuring zero compliance gaps.',
            },
            {
                icon: '🏠',
                title: 'Privacy Protection for Home-Based Businesses',
                desc: 'Freelancers and home-based entrepreneurs can keep their residential address private by using a professional commercial address on all GST certificates, invoices, and official documents.',
            },
            {
                icon: '⚡',
                title: 'Quick Setup & Registration',
                desc: 'The entire setup from choosing a virtual address to obtaining a GSTIN can be completed in as little as 7–15 working days, compared to weeks or months for a traditional office lease.',
            },
            {
                icon: '🔄',
                title: 'Flexibility & Scalability',
                desc: 'Virtual office agreements are typically annual and can be renewed, relocated, or terminated with minimal hassle. This gives businesses the flexibility to adapt quickly to changing market conditions.',
            },
        ],
        disadvantages: [
            'Some GST officers may request additional verification or physical inspection of the virtual office premises, potentially delaying the registration process by a few days.',
            'A virtual office does not provide a physical workspace, so businesses that need to meet clients or store inventory in person will still need separate arrangements.',
            'Certain states or specific jurisdictional officers may have stricter acceptance criteria for virtual office addresses, requiring additional documentation or clarifications.',
            'The virtual office address must be renewed annually; failure to renew could lead to discrepancies if the GST department conducts verification after the agreement expires.',
        ],
        compliance: [
            {
                area: 'Annual Renewal of Virtual Office Agreement',
                details: 'The rent agreement for the virtual office must be renewed before expiry each year. Updated rent agreements and fresh NOCs should be maintained in records for inspection. Your Professional sends timely renewal reminders.',
            },
            {
                area: 'GST Return Filing from Registered Address',
                details: 'All GST returns (GSTR-1, GSTR-3B, GSTR-9) must be filed under the GSTIN associated with the virtual office address. The place of supply rules and invoice details should correctly reflect the registered state.',
            },
            {
                area: 'Amendment in Case of Address Change',
                details: 'If you switch your virtual office to a different address within the same state, a non-core amendment must be filed on the GST portal using Form GST REG-14 within 15 days. If moving to a different state, a new registration is required.',
            },
            {
                area: 'Readiness for Department Inspection',
                details: 'The virtual office premises must maintain proper signage displaying the registered business name and GSTIN. The virtual office provider should be prepared to facilitate any departmental visit or verification.',
            },
        ],
        faqs: [
            {
                q: 'Is a virtual office address legally accepted for GST registration in India?',
                a: 'Yes, a virtual office address is legally accepted for GST registration across all Indian states and union territories. The GST authorities require a valid rent agreement, NOC from the premises owner, and a recent utility bill — all of which are provided with our virtual office packages. Multiple High Court rulings have upheld the legitimacy of virtual offices for GST purposes.',
            },
            {
                q: 'What documents does the virtual office provider supply for GST registration?',
                a: 'The virtual office provider supplies a rent agreement executed on stamp paper, a No Objection Certificate from the premises owner, the latest electricity bill or property tax receipt, and photographs of the premises. These documents are mandatory uploads on the GST registration portal (Form GST REG-01).',
            },
            {
                q: 'Can I use a virtual office address if I already have GST registration at another location?',
                a: 'Yes, you can use a virtual office as an additional place of business under your existing GSTIN (within the same state) or obtain a fresh GSTIN in a new state using the virtual address. For the same state, file an amendment using Form GST REG-14. For a different state, file a new registration.',
            },
            {
                q: 'What happens if the GST officer rejects my application citing the virtual office address?',
                a: 'Rejections are uncommon with properly documented virtual offices. If a rejection occurs, Your Professional files a review application with additional supporting documents such as the premises ownership chain, property tax receipts, and a detailed explanation of business operations. We also assist in filing appeals with the appellate authority if needed.',
            },
            {
                q: 'Is physical verification mandatory for GST registration with a virtual office?',
                a: 'Physical verification is not mandatory in all cases. Post Aadhaar authentication, many registrations are approved without physical verification. However, the jurisdictional officer reserves the right to conduct a site visit. Our virtual office partners keep the premises inspection-ready at all times.',
            },
            {
                q: 'Can e-commerce sellers use a virtual office for GST registration?',
                a: 'Absolutely. E-commerce sellers and marketplace operators (selling on Amazon, Flipkart, Meesho, etc.) are among the most common users of virtual offices for GST registration. Since these businesses operate entirely online, a virtual office provides the perfect cost-effective solution for obtaining the mandatory GSTIN.',
            },
            {
                q: 'What is the difference between a virtual office and a registered office for GST?',
                a: 'A registered office is a physical space owned or leased by the business where operations are conducted. A virtual office is a managed address service that provides a commercial address for registration purposes without requiring the business to physically occupy the space. Both are valid for GST registration when supported by proper documentation.',
            },
            {
                q: 'How does Your Professional help with virtual office-based GST registration?',
                a: 'Your Professional provides an end-to-end service that includes sourcing a verified virtual office in your desired state, preparing the rent agreement and NOC, collecting all premises documents, filing the GST registration application, responding to any departmental queries, and providing ongoing compliance support including annual agreement renewals.',
            },
        ],
        cta: {
            heading: 'Get Your GST-Compliant Virtual Office Address Today',
            subheading:
                'Start your GST registration with a verified virtual office address — affordable, fully compliant, and ready in 24–48 hours. Your Professional handles everything from documentation to GSTIN approval.',
            features: [
                'Verified virtual addresses in all major Indian cities',
                'Complete document package: Rent Agreement + NOC + Utility Bill',
                'End-to-end GST registration assistance included',
                'Annual renewal reminders and compliance support',
                'Dedicated expert assigned to your registration',
            ],
        },
    },

    'additional-place-of-business-gst': {
        slug: 'additional-place-of-business-gst',
        title: 'Additional Place of Business in GST',
        subtitle:
            'Seamlessly add new business locations to your existing GST registration with Your Professional — expert filing, fast processing, and complete compliance assurance for multi-location businesses.',
        heroFeatures: [
            'Add New Business Locations Without Fresh GST Registration',
            'Amendment Filing on GST Portal Within 24 Hours',
            'Support for Warehouses, Branches, Godowns & Offices',
            'Expert Handling of Core & Non-Core Amendments',
            'Compliance Guidance for Multi-Location GST Operations',
        ],
        overview: {
            heading: 'What is an Additional Place of Business in GST?',
            paragraphs: [
                'An Additional Place of Business (APoB) in GST refers to any premises, other than the principal place of business, where a registered taxpayer carries on business activities. Under the CGST Act, 2017, every registered person must declare all places from where they conduct business operations within the same state or union territory. These additional locations may include branch offices, warehouses, godowns, storage facilities, manufacturing units, showrooms, retail outlets, or any other premises used for business purposes. Adding an additional place of business is a critical compliance requirement that ensures the GST department has complete visibility of all operational locations linked to a particular GSTIN.',
                'When a business opens a new branch, warehouse, or office in the same state where it is already registered under GST, it does not need to obtain a separate GSTIN. Instead, it must amend its existing GST registration to include the new location as an additional place of business. This amendment is filed through the GST portal using Form GST REG-14, and the jurisdictional officer processes the request after verifying the submitted documents. The amendment ensures that the new location is officially linked to the existing GSTIN, enabling the business to operate legally from multiple premises.',
                'Your Professional provides comprehensive assistance for adding additional places of business to your GST registration. From document preparation and portal filing to handling officer queries and ensuring post-amendment compliance, our team of GST experts manages every step of the process. Whether you are a retailer opening a new store, a manufacturer setting up an additional unit, or a logistics company adding a warehouse, we ensure your GST registration accurately reflects all your business locations.',
            ],
            highlights: [
                { icon: '🏗️', text: 'Covers branches, warehouses, godowns, factories, showrooms, and any other business premises' },
                { icon: '📝', text: 'Filed as an amendment to existing GST registration via Form GST REG-14 on the GST portal' },
                { icon: '⚖️', text: 'Mandatory under Section 28 of the CGST Act for all additional business locations within the same state' },
                { icon: '🔗', text: 'All additional locations are linked to the same GSTIN — no need for separate registration' },
            ],
        },
        types: [
            {
                title: 'Branch Office or Corporate Office',
                desc: 'Adding a new branch office, regional office, or corporate office within the same state as the principal place of business. This is common for service-based companies, IT firms, consulting agencies, and financial institutions that expand their physical presence to serve more clients.',
            },
            {
                title: 'Warehouse, Godown, or Storage Facility',
                desc: 'Businesses involved in trading, manufacturing, or e-commerce often need to declare warehouses and godowns as additional places of business. Goods stored at these locations are subject to GST provisions, and the premises must be registered to facilitate legitimate stock transfers and input tax credit claims.',
            },
            {
                title: 'Manufacturing or Processing Unit',
                desc: 'When a manufacturer sets up an additional production facility, assembly unit, or processing plant within the same state, it must be added as an additional place of business. This ensures that raw material purchases, production records, and output tax calculations are properly tracked under the existing GSTIN.',
            },
            {
                title: 'Retail Outlet or Showroom',
                desc: 'Retailers, FMCG distributors, automobile dealers, and consumer goods companies opening new retail stores or showrooms in the same state must add each location as an additional place of business to maintain accurate GST records and enable compliant billing.',
            },
            {
                title: 'Project Site or Temporary Business Premises',
                desc: 'Construction companies, infrastructure firms, and event management companies that operate from temporary project sites within the same state may need to add these locations as additional places of business for the duration of the project to ensure compliance with GST invoicing requirements.',
            },
        ],
        eligibility: [
            'Any GST-registered taxpayer who opens a new business premises within the same state or union territory where they hold an existing GSTIN.',
            'Businesses that acquire or lease a warehouse, godown, or storage facility in the same state for stocking or distributing goods.',
            'Companies establishing a new branch office, regional office, or satellite office within the same state to expand operations.',
            'Manufacturers setting up an additional production unit, factory, or processing facility in the same state as their principal place of business.',
            'Retailers and distributors opening new outlets, showrooms, or display centres in the same state under their existing business entity.',
            'E-commerce businesses and logistics companies adding fulfilment centres or distribution hubs in the same state.',
            'Service providers (IT companies, consultancies, healthcare providers) opening new service delivery centres within the same state.',
            'Any business entity that uses premises (even temporarily) for carrying on business activities must declare it as an additional place of business if it falls within the same state as the existing GSTIN.',
        ],
        documents: [
            {
                category: 'Premises Documents for the New Location',
                items: [
                    'Rent agreement or lease deed for the new premises executed on appropriate stamp paper',
                    'No Objection Certificate (NOC) from the property owner authorizing use of the premises for business purposes',
                    'Latest electricity bill or property tax receipt of the new premises (not older than 2 months)',
                    'Ownership proof of the premises if self-owned (sale deed, registry document, or municipal records)',
                    'Photographs of the new business premises (exterior with signage and interior workspace)',
                ],
            },
            {
                category: 'Business & Authorization Documents',
                items: [
                    'Board Resolution or Partner Consent Letter authorizing the addition of a new place of business',
                    'Authorization letter or Power of Attorney for the person filing the amendment on the GST portal',
                    'Copy of the existing GST Registration Certificate (Form GST REG-06)',
                    'PAN Card of the business entity',
                ],
            },
            {
                category: 'Additional Supporting Documents',
                items: [
                    'Municipal trade license or Shops & Establishments registration for the new premises (if applicable)',
                    'Fire safety certificate or NOC from the local fire department (for warehouses and factories)',
                    'Pollution Control Board consent (for manufacturing units, if applicable)',
                    'Consent letter from the co-working space operator (if the additional place is within a shared workspace)',
                ],
            },
        ],
        process: [
            {
                title: 'Assess the Requirement & Gather Premises Documents',
                desc: 'Determine whether the new location qualifies as an additional place of business under GST. Collect all premises-related documents including the rent agreement, NOC, electricity bill, and ownership proof for the new address.',
                time: '1–3 days',
            },
            {
                title: 'Prepare the Board Resolution or Partner Consent',
                desc: 'Draft and execute a Board Resolution (for companies) or Partner Consent Letter (for firms/LLPs) authorizing the addition of the new business premises. This document establishes the entity\'s formal decision to expand to the new location.',
                time: '1–2 days',
            },
            {
                title: 'Login to GST Portal & Initiate Amendment',
                desc: 'Access the GST portal using your credentials. Navigate to Services → Registration → Amendment of Registration (Core Fields). The addition of a new place of business is classified as a core amendment and requires officer approval.',
                time: '1 day',
            },
            {
                title: 'Fill Form GST REG-14 & Upload Documents',
                desc: 'Complete the amendment application in Form GST REG-14. Enter the full address of the new premises in the Additional Place of Business section, upload all supporting documents, and digitally sign the application using DSC or EVC.',
                time: '1–2 days',
            },
            {
                title: 'Application Review by Jurisdictional Officer',
                desc: 'The jurisdictional GST officer reviews the amendment application and verifies all uploaded documents. If additional information is required, a notice in Form GST REG-03 is issued, and the applicant must respond within 7 working days.',
                time: '5–10 days',
            },
            {
                title: 'Site Verification (If Applicable)',
                desc: 'The GST officer may order a physical verification of the new premises, particularly for warehouses, factories, or high-value locations. The officer or an authorized representative visits the site to confirm its existence and suitability for declared business activities.',
                time: '3–7 days (if required)',
            },
            {
                title: 'Amendment Approval & Updated Certificate',
                desc: 'Once satisfied, the officer approves the amendment in Form GST REG-15. The updated GST Registration Certificate reflecting the new additional place of business is generated and available for download from the GST portal.',
                time: '15–30 days total',
            },
        ],
        fees: [
            { item: 'Government Fee for GST Amendment', cost: 'Nil (no government fee for amendment)' },
            { item: 'Rent Agreement Preparation & Stamp Duty', cost: '₹1,500 – ₹5,000 (varies by state)' },
            { item: 'NOC Preparation & Notarization', cost: '₹500 – ₹2,000' },
            { item: 'Professional Service Charges (Your Professional)', cost: '₹2,999 onwards' },
            { item: 'Comprehensive Amendment Package (Documents + Filing)', cost: '₹4,999 onwards' },
            { item: 'Expedited Processing (Priority Handling)', cost: '₹1,500 additional' },
        ],
        penalties: [
            {
                violation: 'Operating from an undeclared additional place of business',
                penalty: 'Penalty under Section 122(1)(xii) of the CGST Act for contravention of any provision. A general penalty of up to ₹25,000 may be imposed under Section 125. The GST department may also deny input tax credit on purchases made for the undeclared premises.',
            },
            {
                violation: 'Failure to amend registration within the prescribed timeframe',
                penalty: 'The amendment must be filed within 15 days of the change. Delayed filing may lead to show cause notices, scrutiny of past returns, and potential disallowance of ITC related to the undeclared location.',
            },
            {
                violation: 'Issuing invoices with an incorrect or undeclared place of business',
                penalty: 'Invoices issued from an undeclared premises may be treated as non-compliant. The recipient may face ITC reversal, and the supplier may be penalized under Section 122 for issuing incorrect invoices — penalty of ₹10,000 or the tax amount involved, whichever is higher.',
            },
            {
                violation: 'Claiming ITC on goods stored at an unregistered premises',
                penalty: 'Input tax credit claimed on goods or capital assets stored at a premises not declared in the GST registration may be denied or reversed. Interest at 18% per annum and applicable penalties under Section 74 may be levied.',
            },
        ],
        advantages: [
            {
                icon: '🔗',
                title: 'Unified GSTIN for Multiple Locations',
                desc: 'All additional places of business within the same state operate under a single GSTIN, simplifying return filing, ITC management, and tax computations. There is no need to maintain separate registrations for each location.',
            },
            {
                icon: '📊',
                title: 'Seamless Input Tax Credit Flow',
                desc: 'Goods and services purchased for any declared additional place of business are eligible for input tax credit under the existing GSTIN. Proper declaration prevents ITC reversals and ensures smooth credit utilization.',
            },
            {
                icon: '✅',
                title: 'Full Regulatory Compliance',
                desc: 'Declaring all business premises ensures complete compliance with the CGST Act, preventing penalties, show cause notices, and adverse audit findings. It demonstrates transparency in business operations to tax authorities.',
            },
            {
                icon: '🏪',
                title: 'Supports Business Expansion',
                desc: 'The ability to add multiple locations under a single GSTIN makes it easy for businesses to expand through new branches, warehouses, factories, or outlets without the administrative burden of managing multiple GST registrations.',
            },
            {
                icon: '📄',
                title: 'Accurate Invoicing & Documentation',
                desc: 'With all locations declared, businesses can issue invoices bearing the correct address of the premises from which goods are supplied or services are rendered, maintaining compliance with GST invoicing rules.',
            },
            {
                icon: '🛡️',
                title: 'Protection During GST Audits',
                desc: 'Having all business locations properly declared in the GST registration safeguards the business during departmental audits, inspections, and assessments. Undeclared premises are a common trigger for adverse audit observations.',
            },
        ],
        disadvantages: [
            'The amendment process for adding an additional place of business requires officer approval (core amendment), which can take 15–30 days depending on the jurisdictional officer\'s workload and verification requirements.',
            'Each additional premises requires its own set of documents (rent agreement, NOC, utility bill), which means additional coordination with landlords and property owners for every new location.',
            'Physical verification by the GST officer may be required for certain types of premises (especially warehouses and factories), adding time and requiring premises to be inspection-ready.',
            'Maintaining compliance across multiple business locations — including proper invoice series, stock registers, and address declarations — increases the administrative overhead for the business.',
        ],
        compliance: [
            {
                area: 'Timely Filing of Amendment Application',
                details: 'Any change in business premises, including the addition of a new location, must be reported via Form GST REG-14 within 15 days of the change. Timely filing prevents penalties and ensures continuous compliance with GST provisions.',
            },
            {
                area: 'Invoice Address Compliance',
                details: 'Invoices issued from an additional place of business must bear the address of that specific premises as the "address of supply" along with the GSTIN. The principal place of business address should also appear on the invoice as per Rule 46 of the CGST Rules.',
            },
            {
                area: 'Stock & Inventory Records',
                details: 'Separate stock registers or inventory records must be maintained for each additional place of business, especially for warehouses and godowns. Stock transfers between the principal and additional places must be documented with delivery challans.',
            },
            {
                area: 'Removal of Additional Place of Business',
                details: 'If a business vacates or closes an additional place of business, a corresponding amendment must be filed on the GST portal to remove the location from the registration. Failure to remove a closed premises may lead to compliance issues during audits.',
            },
        ],
        faqs: [
            {
                q: 'What qualifies as an additional place of business under GST?',
                a: 'Any premises from which a registered taxpayer carries on business within the same state — other than the principal place of business — qualifies as an additional place of business. This includes branch offices, warehouses, godowns, factories, showrooms, retail outlets, project sites, and even co-working spaces used for business operations.',
            },
            {
                q: 'Do I need a separate GST registration for a new branch in the same state?',
                a: 'No. If the new branch is in the same state where you already hold a GSTIN, you do not need a separate registration. You simply add the new location as an additional place of business through an amendment of your existing registration using Form GST REG-14.',
            },
            {
                q: 'Is adding an additional place of business a core or non-core amendment?',
                a: 'Adding an additional place of business is classified as a core amendment under GST. This means the amendment application requires approval from the jurisdictional GST officer before it takes effect, unlike non-core amendments which are auto-approved.',
            },
            {
                q: 'How long does it take to add an additional place of business?',
                a: 'The entire process typically takes 15–30 days from the date of filing the amendment. This includes document preparation (1–3 days), portal filing (1–2 days), officer review (5–10 days), and potential site verification (3–7 days). Your Professional expedites the process through meticulous documentation and proactive follow-up.',
            },
            {
                q: 'Can I add a warehouse in another state as an additional place of business?',
                a: 'No. An additional place of business can only be added within the same state or union territory as the existing GSTIN. If you need to operate from a different state, you must obtain a separate GST registration in that state. Each state requires its own GSTIN.',
            },
            {
                q: 'What happens if I operate from a premises without adding it to my GST registration?',
                a: 'Operating from an undeclared premises is a violation of GST provisions. The consequences include denial or reversal of input tax credit related to that premises, penalties under Sections 122 and 125 of the CGST Act, and potential adverse findings during GST audits or assessments.',
            },
            {
                q: 'Can I remove an additional place of business from my GST registration later?',
                a: 'Yes, you can remove an additional place of business by filing an amendment on the GST portal through Form GST REG-14. This is also a core amendment requiring officer approval. It is important to remove closed premises to avoid compliance discrepancies during audits.',
            },
            {
                q: 'How does Your Professional assist with adding an additional place of business?',
                a: 'Your Professional handles the entire process end-to-end. We help prepare all premises documents, draft the Board Resolution or Partner Consent, file the amendment application on the GST portal, respond to any officer queries or notices, and ensure the updated GST certificate correctly reflects all your business locations.',
            },
        ],
        cta: {
            heading: 'Add Your New Business Location to GST Registration Today',
            subheading:
                'Expanding to a new branch, warehouse, or outlet? Let Your Professional handle the GST amendment seamlessly — from documentation to portal filing to officer coordination.',
            features: [
                'Complete document preparation for the new premises',
                'Expert filing of Form GST REG-14 on the GST portal',
                'Proactive response to officer queries and notices',
                'Updated GST certificate with new location details',
                'Ongoing compliance support for multi-location operations',
            ],
        },
    },

  'gst-registration-ecommerce': {
        slug: 'gst-registration-ecommerce',
        title: 'GST Registration for E-commerce in India',
        subtitle:
            'Get mandatory GST registration for e-commerce operators and sellers with Your Professional — expert guidance on compliance requirements, TCS provisions, marketplace onboarding documentation, and seamless GSTIN activation for online businesses across India.',
        heroFeatures: [
            'Mandatory GST Registration for All E-commerce Sellers & Operators',
            'GSTIN Activation Within 3–7 Working Days',
            'Complete TCS Compliance Setup for Marketplace Operators',
            'Trusted by 15,000+ Online Sellers Nationwide',
            'Dedicated Support for Amazon, Flipkart, Meesho & Other Platforms',
        ],
        overview: {
            heading: 'What is GST Registration for E-commerce?',
            paragraphs: [
                'GST Registration for E-commerce is a mandatory tax compliance requirement under Section 24 of the Central Goods and Services Tax (CGST) Act, 2017, which mandates that every person who supplies goods or services through an electronic commerce operator must obtain GST registration, irrespective of the aggregate turnover threshold that applies to traditional businesses. This means that even if your annual turnover is below ₹20 lakhs (or ₹10 lakhs for special category states), you are still required to register for GST if you sell through platforms like Amazon, Flipkart, Myntra, Meesho, or any other e-commerce marketplace.',
                'E-commerce operators — the platforms that facilitate the supply of goods or services between buyers and sellers — are also required to obtain GST registration compulsorily under Section 24(x) of the CGST Act. These operators are further required to collect Tax Collected at Source (TCS) under Section 52 at the rate of 1% (0.5% CGST + 0.5% SGST for intra-state supplies, or 1% IGST for inter-state supplies) on the net value of taxable supplies made through their platform. This TCS mechanism ensures that the government can track transactions conducted through digital marketplaces and maintain a robust tax collection framework.',
                'At Your Professional, we provide end-to-end GST registration services tailored specifically for e-commerce businesses. Whether you are a first-time seller looking to onboard on a marketplace, an established e-commerce operator launching your own platform, or a brand expanding from offline to online sales channels, our team of GST experts handles every aspect of your registration — from application drafting and document compilation to ARN tracking and GSTIN activation — so you can focus on growing your online business without worrying about compliance hurdles.',
            ],
            highlights: [
                { icon: '🛒', text: 'Compulsory registration for all e-commerce sellers regardless of turnover under Section 24 of the CGST Act' },
                { icon: '💻', text: 'E-commerce operators must register separately and comply with TCS provisions under Section 52' },
                { icon: '📊', text: 'Enables sellers to claim Input Tax Credit (ITC) on business purchases and reduce overall tax liability' },
                { icon: '⚖️', text: 'Governed by the CGST Act 2017, SGST Acts, IGST Act 2017, and related e-commerce notifications' },
            ],
        },
        types: [
            {
                title: 'E-commerce Seller Registration (Marketplace Model)',
                desc: 'This is the most common type of GST registration for e-commerce, applicable to individuals, proprietors, partnerships, LLPs, and companies that list and sell products or services through third-party marketplace platforms such as Amazon, Flipkart, Snapdeal, Myntra, Meesho, or JioMart. The seller is required to obtain a GSTIN in each state from which they supply goods, and the marketplace operator deducts TCS on their behalf before remitting the sale proceeds.',
            },
            {
                title: 'E-commerce Operator Registration (Platform Owner)',
                desc: 'Required for entities that own and operate an electronic commerce platform facilitating the supply of goods or services by other sellers. This includes marketplace aggregators, food delivery platforms (Swiggy, Zomato), ride-hailing services (Uber, Ola), and accommodation aggregators (OYO, MakeMyTrip). Operators must register under GST, collect TCS at prescribed rates, file monthly TCS returns (GSTR-8), and furnish details of all supplies facilitated through their platform.',
            },
            {
                title: 'Multi-State E-commerce Registration',
                desc: 'When an e-commerce seller stores inventory in warehouses or fulfillment centres located across multiple states (such as Amazon FBA sellers using warehouses in Maharashtra, Karnataka, Delhi, and Tamil Nadu), they are required to obtain separate GST registrations in each state where they maintain a place of business or stock. This multi-state registration ensures proper tax collection and compliance in each jurisdiction.',
            },
            {
                title: 'Composition Scheme E-commerce Registration',
                desc: 'Following the amendments introduced in the Union Budget 2023, eligible e-commerce sellers with an aggregate turnover of up to ₹1.5 crore can now opt for the Composition Scheme under Section 10 of the CGST Act while selling through e-commerce platforms. This simplified scheme allows sellers to pay tax at a reduced rate (1% for manufacturers, 5% for restaurant services, 6% for other suppliers) without the need to file detailed monthly returns.',
            },
        ],
        eligibility: [
            'Any individual, proprietor, partnership firm, LLP, or company supplying goods or services through an e-commerce platform is mandatorily required to register under GST, regardless of turnover.',
            'E-commerce operators (platform owners) who own, operate, or manage a digital platform that facilitates supply of goods or services by other persons are compulsorily required to obtain GST registration.',
            'Sellers storing inventory in warehouses or fulfillment centres in multiple states must obtain separate GST registration in each such state.',
            'Suppliers of services through e-commerce platforms — such as freelancers, consultants, and service providers listed on aggregator apps — must register if the platform is responsible for collecting and remitting tax.',
            'Foreign entities or non-resident individuals supplying goods or services in India through an e-commerce platform must obtain GST registration as a non-resident taxable person.',
            'Casual taxable persons who occasionally supply goods or services through e-commerce channels during exhibitions, seasonal sales, or pop-up events must obtain temporary GST registration.',
            'Businesses transitioning from offline-only sales to a hybrid (offline + online) model must update their existing GST registration or obtain a new registration as applicable.',
            'Entities eligible for the Composition Scheme with turnover up to ₹1.5 crore can now register for e-commerce sales under the amended provisions effective from October 2023.',
        ],
        documents: [
            {
                category: 'Identity & Address Proof of Applicant',
                items: [
                    'PAN Card of the applicant (individual) or the business entity (company/LLP/firm)',
                    'Aadhaar Card of the proprietor, all partners, or all directors as applicable',
                    'Passport-size photograph of the proprietor / partners / directors (recent, with white background)',
                    'Voter ID, Driving Licence, or Passport as additional identity verification',
                ],
            },
            {
                category: 'Business & Premises Documentation',
                items: [
                    'Certificate of Incorporation (for companies), LLP Agreement (for LLPs), or Partnership Deed (for firms)',
                    'Proof of principal place of business — electricity bill, property tax receipt, or municipal khata (not older than 2 months)',
                    'Rent agreement or lease deed (if premises is rented) along with NOC from the landlord on letterhead',
                    'Warehouse or fulfillment centre address proof for each state where inventory is stored',
                    'Board Resolution or Authorisation Letter appointing the Authorised Signatory for GST purposes',
                ],
            },
            {
                category: 'E-commerce Specific Documents',
                items: [
                    'E-commerce platform seller account details or onboarding confirmation email',
                    'Bank account statement or cancelled cheque of the business bank account linked to the e-commerce platform',
                    'Details of goods or services to be supplied through the e-commerce platform (HSN/SAC codes)',
                    'Digital Signature Certificate (DSC) of the authorised signatory (mandatory for companies and LLPs)',
                ],
            },
        ],
        process: [
            {
                title: 'Initial Consultation & Business Assessment',
                desc: 'Our GST experts review your e-commerce business model, identify the applicable registration type (seller, operator, or multi-state), determine the correct HSN/SAC codes for your products or services, and advise on the optimal registration strategy including any state-specific requirements.',
                time: '1 Day',
            },
            {
                title: 'Document Collection & Verification',
                desc: 'We collect all required identity proofs, business documents, address proofs for each place of business, e-commerce platform details, and bank account information. Our team verifies each document for completeness, accuracy, and compliance with GST portal upload specifications.',
                time: '1–2 Days',
            },
            {
                title: 'GST Portal Application Drafting (Form GST REG-01)',
                desc: 'Our team prepares the GST registration application on the official GST portal (www.gst.gov.in), filling in all parts — business details, promoter/partner information, authorised signatory details, principal and additional places of business, HSN/SAC codes, and bank account particulars — with precision to avoid queries or rejection.',
                time: '1 Day',
            },
            {
                title: 'Application Submission & ARN Generation',
                desc: 'The completed application along with all supporting documents is submitted electronically on the GST portal. Upon successful submission, an Application Reference Number (ARN) is generated, which can be used to track the status of your registration application in real-time.',
                time: '1 Day',
            },
            {
                title: 'Government Verification & Processing',
                desc: 'The jurisdictional GST officer reviews the submitted application and documents. If any clarification or additional document is required, the officer raises a query through the portal (Form GST REG-03), which our team responds to promptly within the stipulated timeline to prevent delays.',
                time: '3–7 Working Days',
            },
            {
                title: 'GSTIN Approval & Certificate Issuance',
                desc: 'Once the officer is satisfied with the application and documents, the GST registration is approved and a unique 15-digit Goods and Services Tax Identification Number (GSTIN) is issued along with the GST Registration Certificate (Form GST REG-06), which is digitally signed and available for download from the portal.',
                time: '1–2 Days',
            },
            {
                title: 'Platform Onboarding & Post-Registration Setup',
                desc: 'After receiving the GSTIN, we assist you in updating your e-commerce marketplace seller profile with the new GST details, configuring invoice templates with proper tax breakup, setting up HSN-wise tax rates in your seller dashboard, and establishing a return filing calendar to ensure ongoing compliance from day one.',
                time: '1–2 Days',
            },
        ],
        fees: [
            { item: 'Government Fee for GST Registration', cost: '₹0 (No government fee charged)' },
            { item: 'Professional Fee — Single State Seller Registration', cost: '₹1,499 – ₹2,999' },
            { item: 'Professional Fee — E-commerce Operator Registration', cost: '₹3,999 – ₹5,999' },
            { item: 'Professional Fee — Multi-State Registration (per additional state)', cost: '₹999 – ₹1,999 per state' },
            { item: 'Digital Signature Certificate (DSC) for Companies/LLPs', cost: '₹800 – ₹1,500' },
            { item: 'Post-Registration Compliance Setup & Platform Integration', cost: '₹999 – ₹2,499' },
        ],
        penalties: [
            {
                violation: 'Selling on E-commerce Platform Without GST Registration',
                penalty: 'Penalty of ₹10,000 or the tax amount due, whichever is higher, under Section 122 of the CGST Act. Additionally, the e-commerce platform may suspend or deactivate the seller account for non-compliance.',
            },
            {
                violation: 'Failure to Obtain Registration by E-commerce Operator',
                penalty: 'Penalty of ₹10,000 or the tax due, whichever is higher, along with potential liability for tax and interest on all transactions facilitated without proper registration.',
            },
            {
                violation: 'Non-Collection or Non-Remittance of TCS by Operator',
                penalty: 'Interest at 18% per annum on the TCS amount not collected or remitted, plus a penalty equivalent to the TCS amount that was required to be collected under Section 52.',
            },
            {
                violation: 'Late Filing of GST Returns by E-commerce Seller',
                penalty: 'Late fee of ₹50 per day (₹25 CGST + ₹25 SGST) for regular returns, capped at ₹5,000 per return. For nil returns, the late fee is ₹20 per day (₹10 CGST + ₹10 SGST).',
            },
        ],
        advantages: [
            {
                icon: '✅',
                title: 'Marketplace Access & Onboarding',
                desc: 'GST registration is the primary prerequisite for onboarding on any major e-commerce marketplace in India. Without a valid GSTIN, platforms like Amazon, Flipkart, and Meesho will not allow you to list products or accept orders, effectively blocking your access to millions of potential customers.',
            },
            {
                icon: '💰',
                title: 'Input Tax Credit Recovery',
                desc: 'Registered e-commerce sellers can claim Input Tax Credit (ITC) on all business-related purchases — raw materials, packaging, shipping charges, platform commissions, advertising expenses, and overheads — significantly reducing the effective tax burden and improving profit margins.',
            },
            {
                icon: '🏦',
                title: 'TCS Credit Utilisation',
                desc: 'The TCS deducted by the e-commerce operator at 1% on your net taxable supplies is reflected in your electronic cash ledger on the GST portal. This TCS credit can be claimed and utilised while filing your monthly or quarterly GST returns, ensuring no double taxation on your sales.',
            },
            {
                icon: '📈',
                title: 'Business Credibility & Trust',
                desc: 'Displaying a valid GSTIN on your seller profile and invoices enhances buyer confidence, establishes your brand as a legitimate and compliant business, and improves your seller ratings on marketplaces — leading to better product visibility and higher conversion rates.',
            },
            {
                icon: '🌐',
                title: 'Pan-India & Cross-Border Sales',
                desc: 'GST registration enables seamless inter-state supply of goods across India without the burden of multiple state-level tax registrations. It also opens the door to export opportunities via e-commerce platforms with zero-rated supply benefits and IGST refunds.',
            },
            {
                icon: '🔒',
                title: 'Legal Protection & Compliance Safety',
                desc: 'Operating with proper GST registration shields your business from penalties, account suspensions, and legal notices from tax authorities. It also ensures that your business records are audit-ready and that you can respond to any departmental inquiry with confidence.',
            },
        ],
        disadvantages: [
            'Mandatory registration requirement applies regardless of turnover, which increases compliance costs for micro and small sellers who might otherwise be exempt from GST under the threshold limit.',
            'Multi-state registration obligations for sellers using multiple fulfillment centres (e.g., Amazon FBA) result in additional registration fees, separate return filings for each state, and increased accounting complexity.',
            'TCS deducted by the e-commerce operator at source impacts the immediate cash flow of sellers, as the credit can only be claimed during the return filing cycle — creating a temporary working capital gap.',
            'Regular return filing obligations (GSTR-1, GSTR-3B, and annual GSTR-9) demand ongoing professional assistance and accounting infrastructure, adding to the recurring operational costs of running an online business.',
        ],
        compliance: [
            {
                area: 'Monthly/Quarterly Return Filing',
                details: 'E-commerce sellers must file GSTR-1 (outward supplies) and GSTR-3B (summary return with tax payment) either monthly or quarterly depending on their turnover and the scheme opted (regular or QRMP). Operators must additionally file GSTR-8 (TCS return) by the 10th of each month.',
            },
            {
                area: 'Annual Return & Reconciliation',
                details: 'All registered e-commerce sellers must file the annual return in Form GSTR-9 by 31st December of the following financial year. Sellers with turnover exceeding ₹5 crore must also file a self-certified reconciliation statement in Form GSTR-9C.',
            },
            {
                area: 'Invoice & E-invoicing Compliance',
                details: 'E-commerce sellers must issue tax invoices with mandatory fields including GSTIN, HSN codes, tax breakup (CGST/SGST/IGST), and place of supply. Businesses with turnover exceeding ₹5 crore must comply with e-invoicing requirements by generating invoices through the Invoice Registration Portal (IRP).',
            },
            {
                area: 'TCS Reconciliation & Credit Matching',
                details: 'Sellers must regularly reconcile the TCS deducted by e-commerce operators (reflected in Form GSTR-2B) with their own sales records. Any discrepancy must be reported to the operator and resolved before filing returns to ensure accurate ITC and TCS credit claims.',
            },
        ],
        faqs: [
            {
                q: 'Is GST registration mandatory for all e-commerce sellers in India?',
                a: 'Yes. Under Section 24(ix) of the CGST Act, 2017, every person who supplies goods or services through an electronic commerce operator is required to obtain GST registration compulsorily, regardless of their aggregate annual turnover. This means that even if your turnover is below ₹20 lakhs (₹10 lakhs for special category states), you must register for GST if you sell on platforms like Amazon, Flipkart, Meesho, or any other online marketplace.',
            },
            {
                q: 'What is TCS in GST and how does it affect e-commerce sellers?',
                a: 'Tax Collected at Source (TCS) is a mechanism under Section 52 of the CGST Act where the e-commerce operator deducts 1% tax (0.5% CGST + 0.5% SGST for intra-state, or 1% IGST for inter-state) on the net value of taxable supplies made through the platform before remitting the payment to the seller. This TCS amount is deposited with the government and is reflected in the seller\'s electronic cash ledger, which can be claimed as credit while filing GST returns.',
            },
            {
                q: 'Can I use the Composition Scheme if I sell through an e-commerce platform?',
                a: 'Yes, following recent amendments effective from October 2023, eligible e-commerce sellers with aggregate turnover up to ₹1.5 crore can opt for the Composition Scheme while selling through e-commerce platforms. Under this scheme, sellers pay tax at reduced rates (1% for manufacturers, 5% for restaurants, 6% for other suppliers) and file simplified quarterly returns instead of monthly returns. However, composition dealers cannot collect tax from customers or claim Input Tax Credit.',
            },
            {
                q: 'Do I need separate GST registrations for each state if I use Amazon FBA?',
                a: 'Yes. If you use Amazon\'s Fulfillment by Amazon (FBA) service and your inventory is stored in fulfillment centres across multiple states, you are required to obtain separate GST registrations in each state where inventory is stored. This is because each warehouse location constitutes a "place of business" under GST law, and inter-state stock transfers between your own warehouses are treated as taxable supplies requiring proper documentation and tax payment.',
            },
            {
                q: 'How long does it take to get GST registration for an e-commerce business?',
                a: 'The entire GST registration process for an e-commerce business typically takes 3 to 7 working days from the date of application submission, provided all documents are in order and no queries are raised by the jurisdictional officer. With Your Professional handling your application, most registrations are completed within 5 working days. In case of queries from the GST officer, an additional 3–5 days may be required for response and re-processing.',
            },
            {
                q: 'What happens if I sell on e-commerce without GST registration?',
                a: 'Selling on an e-commerce platform without valid GST registration is a serious offence under the CGST Act. You may face a penalty of ₹10,000 or the tax amount evaded (whichever is higher), interest on unpaid taxes at 18% per annum, and your seller account may be suspended or permanently deactivated by the marketplace platform. Additionally, you will not be eligible to claim any Input Tax Credit on your purchases, resulting in higher effective costs.',
            },
            {
                q: 'Can a freelancer or service provider on aggregator platforms register for GST?',
                a: 'Yes, freelancers, consultants, cab drivers, delivery partners, and other service providers who supply services through aggregator platforms (such as Urban Company, Uber, Swiggy, etc.) are required to register for GST if the e-commerce operator is liable to collect and pay tax on such services under Section 9(5) of the CGST Act. Even otherwise, voluntary GST registration allows service providers to claim ITC on business expenses and operate with greater professional credibility.',
            },
            {
                q: 'Does Your Professional help with post-registration compliance for e-commerce sellers?',
                a: 'Absolutely. Your Professional provides comprehensive post-registration support including monthly/quarterly return filing (GSTR-1, GSTR-3B), annual return preparation (GSTR-9), TCS reconciliation, ITC optimization, e-invoicing setup, HSN classification review, and ongoing advisory on GST law changes affecting e-commerce businesses. We offer flexible monthly and annual compliance plans designed specifically for online sellers and marketplace operators.',
            },
        ],
        cta: {
            heading: 'Start Selling Online with Proper GST Registration',
            subheading: 'Get your GSTIN activated in as little as 3 working days with Your Professional — your trusted partner for e-commerce tax compliance across India.',
            features: [
                'Free expert consultation on e-commerce GST requirements',
                'Complete application drafting and document verification',
                'Multi-state registration support for FBA and warehouse sellers',
                'Post-registration platform onboarding assistance',
                'Dedicated compliance manager for ongoing support',
            ],
        },
    },

    'gst-return-filing-ecommerce': {
        slug: 'gst-return-filing-ecommerce',
        title: 'GST Return Filing for E-commerce Businesses in India',
        subtitle:
            'Simplify your e-commerce GST return filing with Your Professional — expert handling of GSTR-1, GSTR-3B, GSTR-8 (TCS), annual returns, TCS reconciliation, and complete marketplace tax compliance for online sellers and e-commerce operators across India.',
        heroFeatures: [
            'Complete GSTR-1, GSTR-3B & GSTR-8 Filing for E-commerce',
            'Accurate TCS Reconciliation with Marketplace Deductions',
            'Timely Filing to Avoid Late Fees & Interest Penalties',
            'Trusted by 12,000+ E-commerce Sellers & Operators',
            'Dedicated GST Expert Assigned to Your Business',
        ],
        overview: {
            heading: 'What is GST Return Filing for E-commerce?',
            paragraphs: [
                'GST Return Filing for E-commerce is the mandatory periodic reporting and tax payment process that every registered e-commerce seller and e-commerce operator must comply with under the Goods and Services Tax framework in India. Unlike traditional brick-and-mortar businesses that deal with straightforward sales transactions, e-commerce businesses face a unique and complex return filing landscape that involves multiple return forms, Tax Collected at Source (TCS) reconciliation, multi-state filings, marketplace settlement matching, and intricate Input Tax Credit (ITC) calculations — all governed by strict deadlines with significant penalties for non-compliance.',
                'For e-commerce sellers, the primary returns include GSTR-1 (details of outward supplies filed monthly or quarterly), GSTR-3B (summary return with tax payment filed monthly or quarterly), and the annual return GSTR-9. E-commerce operators — the platforms themselves — have the additional obligation of filing GSTR-8, a monthly return that captures details of all TCS collected on supplies facilitated through their platform, along with the net value of supplies, tax collected, and details of each supplier. The interplay between the seller\'s returns and the operator\'s TCS filings creates a web of data that must be perfectly reconciled to avoid discrepancies, notices, and blocked ITC claims.',
                'At Your Professional, we specialise in GST return filing for the e-commerce ecosystem. Our dedicated team of GST practitioners understands the nuances of marketplace taxation — from reconciling Amazon and Flipkart TCS statements with your GSTR-2B auto-populated data, to managing multi-state return filings for sellers with inventory across various fulfillment centres, to optimising ITC claims and ensuring that every rupee of TCS credit is properly utilised. We handle the entire return filing cycle end-to-end, giving you the peace of mind to focus on scaling your online business.',
            ],
            highlights: [
                { icon: '📅', text: 'Monthly GSTR-1 and GSTR-3B filing deadlines — 11th and 20th of each month respectively for regular filers' },
                { icon: '🧾', text: 'GSTR-8 (TCS return) must be filed by e-commerce operators by the 10th of each subsequent month' },
                { icon: '🔄', text: 'Quarterly filing option available under QRMP scheme for sellers with turnover up to ₹5 crore' },
                { icon: '📊', text: 'Annual return GSTR-9 and reconciliation statement GSTR-9C due by 31st December each year' },
            ],
        },
        types: [
            {
                title: 'GSTR-1 — Outward Supply Return',
                desc: 'GSTR-1 captures the details of all outward supplies (sales) made by the e-commerce seller during the tax period. This includes B2B invoices (with buyer GSTIN), B2C large invoices (inter-state sales above ₹2.5 lakhs), B2C small invoices (aggregated state-wise), credit notes, debit notes, export invoices, and advances received. For e-commerce sellers, accurate GSTR-1 filing is critical because it forms the basis of the buyer\'s ITC claims and must match with the data reported by the e-commerce operator in GSTR-8.',
            },
            {
                title: 'GSTR-3B — Summary Return with Tax Payment',
                desc: 'GSTR-3B is a self-declared summary return where the seller reports aggregate outward and inward supplies, claims ITC (including TCS credit from e-commerce operators), computes the net tax liability, and makes the payment. For e-commerce sellers, GSTR-3B is the return where TCS credits reflected in GSTR-2B are actually claimed and adjusted against the output tax liability, making accurate reconciliation essential before filing.',
            },
            {
                title: 'GSTR-8 — E-commerce Operator TCS Return',
                desc: 'GSTR-8 is exclusively filed by e-commerce operators and contains details of all supplies made through the platform, the TCS collected on those supplies, and particulars of each supplier (seller). This return must be filed by the 10th of the month following the tax period. The data filed in GSTR-8 auto-populates in the seller\'s GSTR-2B, enabling them to claim the TCS credit while filing their own returns.',
            },
            {
                title: 'GSTR-9 — Annual Return',
                desc: 'The annual return consolidates all monthly/quarterly returns filed during the financial year into a comprehensive yearly summary. For e-commerce sellers, GSTR-9 requires meticulous reconciliation of total sales reported in GSTR-1 with GSTR-3B figures, verification of total ITC claimed against GSTR-2B auto-populated data, and matching of TCS credits with operator GSTR-8 filings. Sellers with turnover exceeding ₹5 crore must also file GSTR-9C (self-certified reconciliation).',
            },
            {
                title: 'GSTR-9C — Reconciliation Statement',
                desc: 'GSTR-9C is a self-certified reconciliation statement that reconciles the figures reported in the annual return (GSTR-9) with the audited financial statements of the business. For e-commerce businesses with turnover above ₹5 crore, this statement is mandatory and requires detailed comparison of turnover, tax paid, ITC claimed, and TCS credits across all GST returns, marketplace settlement reports, and books of accounts.',
            },
        ],
        eligibility: [
            'All GST-registered e-commerce sellers who supply goods or services through any online marketplace platform are required to file periodic GST returns as per their filing frequency (monthly or quarterly).',
            'E-commerce operators (platform owners) registered under GST who facilitate supplies and collect TCS must file monthly GSTR-8 returns in addition to their regular GSTR-1 and GSTR-3B returns.',
            'Sellers registered under the QRMP (Quarterly Return Monthly Payment) scheme with aggregate turnover up to ₹5 crore can file GSTR-1 and GSTR-3B on a quarterly basis while making monthly tax payments using the PMT-06 challan.',
            'Composition scheme dealers selling through e-commerce platforms (where permitted under amended provisions) must file quarterly returns in Form CMP-08 and an annual return in Form GSTR-4.',
            'Sellers with multi-state GST registrations must file separate returns for each GSTIN in each state, reporting only the supplies originating from or attributable to that particular state registration.',
            'Non-resident taxable persons and casual taxable persons selling through e-commerce must file returns for the period of their registration and settle all tax liabilities before the registration expires.',
            'Input Service Distributors (ISDs) associated with e-commerce businesses must file monthly returns in Form GSTR-6 to distribute ITC across multiple registrations within the same entity.',
        ],
        documents: [
            {
                category: 'Sales & Transaction Records',
                items: [
                    'Complete sales register or transaction report from each e-commerce platform (Amazon Seller Central, Flipkart Seller Hub, etc.) for the filing period',
                    'Tax invoices issued to B2B customers with GSTIN, including all mandatory fields such as place of supply, HSN codes, and tax breakup',
                    'Credit notes and debit notes issued during the period for returns, cancellations, price adjustments, or discounts',
                    'Export invoices and shipping bills (if applicable) for goods sold to customers outside India through cross-border e-commerce',
                    'Advance receipts register for any advance payments received against future supply of goods or services',
                ],
            },
            {
                category: 'Purchase & Input Tax Credit Documents',
                items: [
                    'Purchase invoices from all vendors, suppliers, and service providers with valid GSTIN and proper tax breakup for ITC claims',
                    'GSTR-2B auto-populated statement downloaded from the GST portal showing eligible ITC, ineligible ITC, and TCS credits for the period',
                    'E-commerce platform commission invoices and TCS certificates/statements for reconciliation with GSTR-2B data',
                    'Import documents including Bill of Entry and IGST payment receipts for goods imported for online sale',
                    'Expense invoices for logistics, warehousing, packaging, advertising, and other business expenses eligible for ITC',
                ],
            },
            {
                category: 'Bank & Payment Reconciliation Records',
                items: [
                    'Bank statements for the filing period showing all receipts from e-commerce platforms, customer payments, and refund transactions',
                    'E-commerce marketplace settlement reports showing gross sales, TCS deducted, platform commissions, shipping fees, and net payable amounts',
                    'Payment gateway reports (Razorpay, PayU, CCAvenue, etc.) for sellers with their own e-commerce websites',
                    'GST electronic ledger statements (cash ledger, credit ledger, liability ledger) from the GST portal for verification before filing',
                ],
            },
        ],
        process: [
            {
                title: 'Data Collection from All Platforms',
                desc: 'We collect and consolidate sales data, transaction reports, TCS statements, commission invoices, and settlement reports from every e-commerce platform where you sell — Amazon, Flipkart, Meesho, Myntra, your own website, and others. We also gather your purchase invoices, expense records, and bank statements for the filing period.',
                time: '1–2 Days',
            },
            {
                title: 'Sales & Purchase Data Reconciliation',
                desc: 'Our team meticulously reconciles your sales records from each marketplace with the data reflected in your GST portal, matching invoice-level details to identify any discrepancies in transaction values, HSN codes, place of supply, or tax rates. We also reconcile purchase invoices with GSTR-2B auto-populated data to ensure maximum eligible ITC claims.',
                time: '1–2 Days',
            },
            {
                title: 'TCS Reconciliation with Operator Filings',
                desc: 'We download and cross-verify the TCS data reported by each e-commerce operator in their GSTR-8 filings (as reflected in your GSTR-2B) against the actual TCS deducted as per marketplace settlement reports. Any mismatches are flagged and communicated to the operator for correction before filing your returns.',
                time: '1–2 Days',
            },
            {
                title: 'GSTR-1 Preparation & Filing',
                desc: 'We prepare your GSTR-1 return with complete details of all outward supplies — B2B invoices, B2C sales (state-wise), credit/debit notes, export invoices, and advance receipts. Each entry is verified for correct HSN classification, applicable tax rate, place of supply determination, and invoice serial number continuity before submission on the GST portal.',
                time: '1 Day',
            },
            {
                title: 'GSTR-3B Preparation, ITC Optimization & Filing',
                desc: 'We prepare GSTR-3B with accurate aggregate figures for outward supplies, inward supplies (including reverse charge), ITC claims (segregated into IGST, CGST, SGST), TCS credit utilisation, and net tax computation. Our team optimises your ITC claims within legal provisions and calculates the exact tax payable or refundable before filing and generating the payment challan.',
                time: '1 Day',
            },
            {
                title: 'GSTR-8 Filing (For E-commerce Operators)',
                desc: 'For clients who are e-commerce operators, we prepare and file GSTR-8 with details of every supplier who made supplies through the platform, net value of taxable supplies, TCS collected (CGST, SGST, IGST breakup), and supplier GSTIN-wise breakup. This is filed by the 10th of the subsequent month and auto-populates in each seller\'s GSTR-2B.',
                time: '1 Day',
            },
            {
                title: 'Post-Filing Verification & Compliance Report',
                desc: 'After filing all returns, we download and verify the filed returns, check the updated electronic ledger balances (cash, credit, and liability), generate a comprehensive compliance report summarising tax paid, ITC utilised, TCS credits claimed, and any carry-forward balances. We also set up reminders and timelines for the next filing cycle.',
                time: '1 Day',
            },
        ],
        fees: [
            { item: 'Government Fee for GST Return Filing', cost: '₹0 (No government filing fee)' },
            { item: 'Monthly GSTR-1 + GSTR-3B Filing (Single State, up to 100 invoices)', cost: '₹1,499 – ₹2,999 per month' },
            { item: 'Monthly GSTR-1 + GSTR-3B Filing (Single State, 100–500 invoices)', cost: '₹2,999 – ₹5,999 per month' },
            { item: 'Monthly GSTR-8 (TCS Return) Filing for E-commerce Operators', cost: '₹3,999 – ₹7,999 per month' },
            { item: 'Multi-State Return Filing (per additional GSTIN per month)', cost: '₹999 – ₹2,499 per state' },
            { item: 'Annual Return GSTR-9 + GSTR-9C Preparation & Filing', cost: '₹4,999 – ₹14,999 per year' },
        ],
        penalties: [
            {
                violation: 'Late Filing of GSTR-1 or GSTR-3B',
                penalty: 'Late fee of ₹50 per day of delay (₹25 CGST + ₹25 SGST) for each return, subject to a maximum of ₹5,000 per return. For nil returns, the late fee is reduced to ₹20 per day (₹10 CGST + ₹10 SGST). Additionally, interest at 18% per annum is levied on the outstanding tax liability from the due date until the date of actual payment.',
            },
            {
                violation: 'Late Filing of GSTR-8 by E-commerce Operator',
                penalty: 'Late fee of ₹200 per day (₹100 CGST + ₹100 SGST) subject to a maximum of ₹5,000 per return. The operator is also liable to pay interest at 18% per annum on the TCS amount not deposited by the due date. Persistent non-filing may result in suspension of the operator\'s GST registration.',
            },
            {
                violation: 'Non-Filing or Incorrect Filing Leading to ITC Mismatch',
                penalty: 'If the seller\'s GSTR-1 data does not match with the GSTR-3B figures or with the operator\'s GSTR-8, the buyer\'s ITC may be blocked or reversed. The seller may face a demand notice under Section 73/74 of the CGST Act for recovery of tax along with interest and a penalty equal to 10% to 100% of the tax demanded depending on whether fraud is established.',
            },
            {
                violation: 'Failure to File Annual Return (GSTR-9) by Due Date',
                penalty: 'Late fee of ₹200 per day (₹100 CGST + ₹100 SGST) subject to a maximum of 0.5% of the turnover of the taxpayer in the state or union territory. Non-filing of annual returns for consecutive years may result in cancellation of GST registration by the jurisdictional officer.',
            },
        ],
        advantages: [
            {
                icon: '📋',
                title: 'Accurate TCS Credit Utilisation',
                desc: 'Professional return filing ensures that every rupee of TCS deducted by e-commerce operators is accurately identified, reconciled with GSTR-2B data, and claimed in your GSTR-3B return — preventing any loss of legitimate tax credits that directly impact your bottom line and cash flow.',
            },
            {
                icon: '💵',
                title: 'Maximum ITC Optimisation',
                desc: 'Our GST experts analyse your complete purchase and expense data to identify every eligible Input Tax Credit — from platform commissions and logistics charges to advertising spends and warehouse rentals — ensuring you claim the maximum ITC within legal provisions and minimize your net tax outgo.',
            },
            {
                icon: '🛡️',
                title: 'Penalty & Notice Prevention',
                desc: 'Timely and accurate return filing eliminates the risk of late fees (up to ₹5,000 per return), interest charges (18% per annum), demand notices, and registration suspension — protecting your business from financial losses and operational disruptions caused by non-compliance.',
            },
            {
                icon: '🔍',
                title: 'Multi-Platform Data Reconciliation',
                desc: 'We consolidate and reconcile data from multiple e-commerce platforms (Amazon, Flipkart, Meesho, and others), your own website sales, and offline transactions into a single unified return — eliminating discrepancies and ensuring that your GST filings present a complete and accurate picture of your business.',
            },
            {
                icon: '⏰',
                title: 'Time & Resource Savings',
                desc: 'E-commerce GST filing involves complex data from multiple sources, intricate reconciliation requirements, and tight deadlines. Outsourcing this to Your Professional frees up your time and internal resources, allowing you to focus on product sourcing, marketing, customer service, and business growth.',
            },
            {
                icon: '📊',
                title: 'Comprehensive Compliance Reports',
                desc: 'After each filing cycle, you receive a detailed compliance report covering tax paid, ITC claimed, TCS credits utilised, carry-forward balances, and filing status across all states — giving you complete visibility into your GST position and enabling better financial planning and decision-making.',
            },
        ],
        disadvantages: [
            'E-commerce return filing is inherently more complex than standard GST filing due to TCS reconciliation requirements, multi-platform data consolidation, and the need to match operator-reported data (GSTR-8) with seller records — resulting in higher professional fees compared to regular businesses.',
            'Sellers with multi-state GST registrations face multiplicative compliance burden, as separate returns must be filed for each GSTIN in each state, with each requiring its own set of reconciled data, ITC calculations, and tax payments.',
            'Frequent changes in GST e-commerce provisions, TCS rates, return filing deadlines, and compliance requirements necessitate continuous monitoring and adaptation, adding to the ongoing cost and complexity of maintaining compliance.',
            'Dependency on e-commerce operators for timely and accurate GSTR-8 filing means that any delay or error by the platform in reporting TCS data can cascade into the seller\'s return filing, potentially causing ITC mismatches and delayed credit claims.',
        ],
        compliance: [
            {
                area: 'Monthly Return Filing Calendar',
                details: 'GSTR-1 must be filed by the 11th of the following month (or quarterly by the 13th of the month following the quarter for QRMP filers). GSTR-3B is due by the 20th of the following month (or 22nd/24th for quarterly filers depending on the state). GSTR-8 is due by the 10th of the following month. Missing any of these deadlines triggers automatic late fees and interest.',
            },
            {
                area: 'TCS Statement Reconciliation',
                details: 'Sellers must download the GSTR-2B statement from the GST portal every month and reconcile the TCS credits shown therein with the actual TCS deducted as per marketplace payment settlement reports. Discrepancies must be communicated to the e-commerce operator within the same tax period to ensure corrections are made in their GSTR-8 before the filing deadline.',
            },
            {
                area: 'E-invoicing & E-way Bill Compliance',
                details: 'E-commerce sellers with aggregate turnover exceeding ₹5 crore must generate e-invoices through the Invoice Registration Portal (IRP) for all B2B supplies. Additionally, e-way bills must be generated for movement of goods valued above ₹50,000 — including stock transfers to fulfillment centres and dispatches to customers for high-value orders.',
            },
            {
                area: 'Annual Audit & Reconciliation',
                details: 'The annual return (GSTR-9) due by 31st December requires complete reconciliation of monthly/quarterly filings with books of accounts. For turnover exceeding ₹5 crore, the self-certified GSTR-9C reconciliation statement must compare GST return figures with audited financial statements, with detailed explanations for any variances identified.',
            },
        ],
        faqs: [
            {
                q: 'What GST returns must an e-commerce seller file every month?',
                a: 'A regular e-commerce seller must file GSTR-1 (details of all outward supplies/sales) by the 11th of the following month and GSTR-3B (summary return with tax payment) by the 20th of the following month. Sellers under the QRMP scheme can file both returns quarterly instead of monthly, but must make monthly tax payments using the PMT-06 challan by the 25th of each month. Additionally, the annual return GSTR-9 must be filed by 31st December each year.',
            },
            {
                q: 'What is GSTR-8 and who needs to file it?',
                a: 'GSTR-8 is a monthly return that must be filed exclusively by e-commerce operators (platform owners like Amazon, Flipkart, etc.) by the 10th of the month following the tax period. It contains details of all supplies facilitated through the platform, the TCS collected on those supplies, and GSTIN-wise details of each seller. The data filed in GSTR-8 auto-populates in the respective seller\'s GSTR-2B, enabling them to claim TCS credits.',
            },
            {
                q: 'How do I reconcile TCS deducted by Amazon or Flipkart with my GST returns?',
                a: 'To reconcile TCS, first download your detailed settlement reports from Amazon Seller Central or Flipkart Seller Hub showing the TCS deducted on each transaction. Then download your GSTR-2B from the GST portal, which shows the TCS credits auto-populated from the operator\'s GSTR-8 filing. Compare both datasets transaction-by-transaction or in aggregate to identify mismatches. Any discrepancies should be raised with the marketplace\'s seller support team for correction before you file your GSTR-3B.',
            },
            {
                q: 'Can I claim ITC on the commission charged by e-commerce platforms?',
                a: 'Yes, the commission or service fee charged by e-commerce platforms (Amazon referral fees, Flipkart commission, Meesho shipping fees, etc.) is a service subject to GST at 18%. The platform issues a tax invoice for this commission, and the GST charged on it is eligible for Input Tax Credit in your GSTR-3B return, provided the invoice appears in your GSTR-2B and you have a valid tax invoice. This ITC on platform commissions can significantly reduce your net tax liability.',
            },
            {
                q: 'What happens if I miss a GST return filing deadline?',
                a: 'Missing a GST return filing deadline attracts a late fee of ₹50 per day (₹25 CGST + ₹25 SGST) for regular returns, capped at ₹5,000 per return. Additionally, interest at 18% per annum is levied on any outstanding tax liability from the due date. If returns remain unfiled for a continuous period, the GST portal blocks filing of subsequent returns and may ultimately result in cancellation of your GST registration by the department.',
            },
            {
                q: 'Do I need to file separate returns for each state if I have multi-state registration?',
                a: 'Yes, if you have GST registrations in multiple states (common for Amazon FBA sellers with inventory in warehouses across states), you must file separate GSTR-1 and GSTR-3B returns for each GSTIN in each state. Each state-level return should only include supplies originating from or attributable to that particular state registration. Stock transfers between your own warehouses across states must also be reported as supply in the respective state returns.',
            },
            {
                q: 'What is the QRMP scheme and can e-commerce sellers opt for it?',
                a: 'The Quarterly Return Monthly Payment (QRMP) scheme allows eligible taxpayers with aggregate turnover up to ₹5 crore to file GSTR-1 and GSTR-3B quarterly instead of monthly, while making monthly tax payments using the PMT-06 challan. E-commerce sellers are eligible for this scheme if their turnover is within the threshold. Under QRMP, B2B invoices can be uploaded monthly through the Invoice Furnishing Facility (IFF) to ensure timely ITC for buyers, while the complete GSTR-1 is filed quarterly.',
            },
            {
                q: 'How does Your Professional ensure accuracy in e-commerce GST return filing?',
                a: 'Your Professional follows a rigorous multi-step verification process: (1) We consolidate data from all platforms and cross-verify with your accounting records, (2) We reconcile TCS credits in GSTR-2B with marketplace settlement reports, (3) We validate HSN codes and tax rates for every product category, (4) We perform automated and manual checks for invoice-level accuracy, (5) We reconcile GSTR-1 output figures with GSTR-3B summary before filing, and (6) We generate a post-filing compliance report for your records. This end-to-end process ensures zero discrepancy filings.',
            },
        ],
        cta: {
            heading: 'Simplify Your E-commerce GST Return Filing Today',
            subheading: 'Let Your Professional handle the complexity of TCS reconciliation, multi-platform data consolidation, and timely GST filing — so you can focus on growing your online business.',
            features: [
                'Expert TCS reconciliation with Amazon, Flipkart & all platforms',
                'Timely monthly/quarterly GSTR-1 and GSTR-3B filing',
                'GSTR-8 preparation and filing for e-commerce operators',
                'Maximum ITC optimisation and credit utilisation',
                'Comprehensive post-filing compliance reports',
                'Dedicated GST expert assigned to your account',
            ],
        },
    },

  'input-tax-credit': {
    slug: 'input-tax-credit',
    title: 'Input Tax Credit',
    subtitle:
      'Maximize your GST savings by claiming Input Tax Credit on eligible purchases — reduce your tax liability legally and efficiently with expert guidance from Your Professional.',
    heroFeatures: [
      'Reduce effective tax outgo by claiming credit on business purchases',
      'Seamless reconciliation of GSTR-2B with purchase records',
      'Expert review to ensure 100% eligible ITC is captured',
      'End-to-end support from documentation to filing',
      'Proactive compliance to avoid reversals and penalties',
    ],
    overview: {
      heading: 'What Is Input Tax Credit and Why Does It Matter?',
      paragraphs: [
        'Input Tax Credit (ITC) is the cornerstone mechanism of the Goods and Services Tax regime that prevents the cascading effect of taxes. When a registered business purchases goods or services for furtherance of business, the GST paid on those inputs can be set off against the GST liability on outward supplies. This ensures that tax is levied only on the value added at each stage of the supply chain, making the entire system more equitable and transparent. Without proper ITC management, businesses end up paying significantly more tax than they are legally required to, directly eroding profit margins.',
        'Claiming ITC is not automatic — it requires meticulous documentation, timely reconciliation with supplier filings, and strict adherence to the conditions prescribed under Sections 16 to 21 of the CGST Act, 2017, read with the relevant rules. Businesses must ensure that their suppliers have actually uploaded invoices in their GSTR-1, that the corresponding details reflect in the auto-generated GSTR-2B statement, and that payments to suppliers are made within 180 days. Any mismatch, delay, or non-compliance can result in denial or reversal of ITC, leading to increased tax costs and potential interest and penalty liabilities.',
        'At Your Professional, we offer a comprehensive ITC management service that covers everything from invoice-level verification and GSTR-2B reconciliation to identifying blocked credits, managing reversals under Rule 42 and Rule 43, and filing accurate returns. Our team of GST specialists ensures that every rupee of legitimate credit is captured while keeping your compliance posture audit-ready.',
      ],
      highlights: [
        { icon: '💰', text: 'Directly reduces the net GST payable on your outward supplies' },
        { icon: '📊', text: 'Requires accurate matching between GSTR-2B and books of accounts' },
        { icon: '⚖️', text: 'Governed by strict conditions under Sections 16–21 of the CGST Act' },
        { icon: '🔄', text: 'Unclaimed or reversed ITC increases effective cost of doing business' },
      ],
    },
    types: [
      {
        title: 'ITC on Inputs',
        desc: 'Credit available on raw materials, consumables, and goods directly used in the manufacture or supply of taxable goods and services. This forms the bulk of ITC for manufacturing and trading entities and must be tracked at the invoice level.',
      },
      {
        title: 'ITC on Input Services',
        desc: 'Credit claimed on services procured for business purposes such as professional consultancy, rent, advertising, logistics, IT support, and similar operational services. Proper classification between business and personal use is essential to avoid blocked credit issues.',
      },
      {
        title: 'ITC on Capital Goods',
        desc: 'Credit on machinery, equipment, computers, furniture, and other assets with a useful life exceeding one year that are used for business purposes. Unlike the earlier regime, GST allows full ITC on capital goods in the year of purchase itself, subject to conditions.',
      },
      {
        title: 'Provisional ITC (Now Restricted)',
        desc: 'Previously, taxpayers could claim provisional ITC up to a prescribed percentage of matched credit. Post amendments, ITC is now restricted to credits appearing in GSTR-2B, making real-time reconciliation and vendor follow-up critical.',
      },
      {
        title: 'ITC on Reverse Charge Mechanism',
        desc: 'When GST is paid under the reverse charge mechanism by the recipient of goods or services, the recipient is entitled to claim ITC of such tax paid, provided all other conditions of Section 16 are fulfilled and the supply is used for taxable purposes.',
      },
    ],
    eligibility: [
      'The claimant must be a registered person under GST holding a valid GSTIN',
      'Goods or services must be received and used for the purpose of business or furtherance of business',
      'A valid tax invoice or debit note issued by the supplier must be in possession of the recipient',
      'The supplier must have actually uploaded the invoice details in their GSTR-1, and the same must reflect in the recipient\'s GSTR-2B',
      'The recipient must have filed the relevant GST return (GSTR-3B) for the tax period in which ITC is claimed',
      'Payment for the invoice must be made to the supplier within 180 days from the date of issue of the invoice; otherwise ITC must be reversed',
      'The goods or services must not fall under the blocked credit list specified under Section 17(5) of the CGST Act',
      'In case of capital goods or inputs used partly for taxable and partly for exempt supplies, proportionate ITC must be calculated as per Rules 42 and 43',
    ],
    documents: [
      {
        category: 'Invoice and Supply Documentation',
        items: [
          'Original tax invoices bearing valid GSTIN of both supplier and recipient',
          'Debit notes or supplementary invoices for any price adjustments',
          'Bill of entry for goods imported into India along with IGST payment proof',
          'Self-invoices for supplies received under reverse charge mechanism',
          'Delivery challans and goods receipt notes confirming actual receipt of goods',
        ],
      },
      {
        category: 'Return Filing and Reconciliation Records',
        items: [
          'GSTR-2B auto-generated statement for the relevant tax period',
          'GSTR-3B filed copy showing ITC claimed in the respective month',
          'Reconciliation report matching purchase register with GSTR-2B data',
          'Annual return GSTR-9 with consolidated ITC summary',
        ],
      },
      {
        category: 'Payment and Business Use Proof',
        items: [
          'Bank statements or payment vouchers proving payment to suppliers within 180 days',
          'Purchase orders and contracts establishing business purpose of the procurement',
          'Stock registers or consumption records for inputs and raw materials',
          'Asset registers for ITC claimed on capital goods',
        ],
      },
    ],
    process: [
      {
        title: 'Invoice Collection and Verification',
        desc: 'Gather all purchase invoices, debit notes, and import documents for the tax period. Verify that each document contains the mandatory particulars — valid GSTIN, HSN/SAC codes, correct tax rates, and sequential invoice numbering.',
        time: '1–2 days',
      },
      {
        title: 'GSTR-2B Download and Reconciliation',
        desc: 'Download the auto-generated GSTR-2B statement from the GST portal for the relevant period. Match each line item against the internal purchase register to identify matched, mismatched, and missing invoices requiring supplier follow-up.',
        time: '2–3 days',
      },
      {
        title: 'Blocked Credit and Eligibility Review',
        desc: 'Review every ITC entry against the blocked credit list under Section 17(5) — motor vehicles, food and beverages, personal consumption items, construction of immovable property, etc. Flag ineligible credits for exclusion before filing.',
        time: '1–2 days',
      },
      {
        title: 'Proportionate ITC Calculation (Rules 42 & 43)',
        desc: 'For businesses making both taxable and exempt supplies, compute the proportionate ITC using the prescribed formulas under Rule 42 (inputs and input services) and Rule 43 (capital goods). Document the working in detail for audit trail.',
        time: '1–2 days',
      },
      {
        title: 'Supplier Communication for Mismatches',
        desc: 'Reach out to suppliers whose invoices are not reflecting in GSTR-2B due to non-filing or incorrect filing of their GSTR-1. Issue formal communication requesting rectification within the prescribed timelines to safeguard your ITC entitlement.',
        time: '3–5 days',
      },
      {
        title: 'GSTR-3B Filing with ITC Claim',
        desc: 'Prepare and file GSTR-3B for the tax period with the verified and eligible ITC amount filled in the appropriate tables. Cross-verify ITC bifurcation between IGST, CGST, and SGST components and ensure the set-off order follows the prescribed rules.',
        time: '1 day',
      },
      {
        title: 'Periodic Review and Annual Reconciliation',
        desc: 'Conduct quarterly reviews of cumulative ITC claims and perform annual reconciliation while preparing GSTR-9 and GSTR-9C (if applicable). Address any pending reversals, reclaims, or adjustments before the annual return deadline.',
        time: 'Ongoing',
      },
    ],
    fees: [
      { item: 'Monthly ITC Reconciliation Service', cost: '₹2,000 – ₹8,000 per month (based on invoice volume)' },
      { item: 'GSTR-2B Mismatch Resolution', cost: '₹1,500 – ₹5,000 per period' },
      { item: 'Rules 42/43 Proportionate ITC Computation', cost: '₹3,000 – ₹10,000 per annum' },
      { item: 'Annual ITC Reconciliation for GSTR-9', cost: '₹5,000 – ₹25,000 (based on turnover)' },
      { item: 'ITC Reversal Advisory and Reclaim Assistance', cost: '₹2,000 – ₹7,000 per case' },
      { item: 'Comprehensive ITC Management (Annual Retainer)', cost: '₹15,000 – ₹60,000 per annum' },
    ],
    penalties: [
      {
        violation: 'Claiming ITC without actual receipt of goods or services (fraudulent claim)',
        penalty: 'ITC amount recovered along with interest at 24% per annum and penalty equal to the ITC amount or ₹10,000, whichever is higher, under Section 74',
      },
      {
        violation: 'Failure to reverse ITC when payment not made to supplier within 180 days',
        penalty: 'ITC amount to be added back to output tax liability along with interest at 18% per annum from the date of availing until reversal',
      },
      {
        violation: 'Availing ITC on blocked credits listed under Section 17(5)',
        penalty: 'Demand for recovery of wrongly availed credit with interest at 18% and potential penalty under Section 73 or 74 depending on intent',
      },
      {
        violation: 'ITC claimed on invoices not reflected in GSTR-2B beyond permissible limits',
        penalty: 'Excess ITC to be reversed with interest; repeated non-compliance may trigger departmental audit or scrutiny proceedings',
      },
    ],
    advantages: [
      {
        icon: '💵',
        title: 'Significant Tax Savings',
        desc: 'Properly claimed ITC directly reduces the GST payable on outward supplies, resulting in substantial savings that improve cash flow and profitability for businesses of all sizes.',
      },
      {
        icon: '🔗',
        title: 'Eliminates Tax Cascading',
        desc: 'The ITC mechanism ensures that tax is levied only on the value addition at each stage, preventing the cascading or "tax on tax" effect that inflated costs under the pre-GST regime.',
      },
      {
        icon: '📈',
        title: 'Improves Competitive Pricing',
        desc: 'By recovering input taxes, businesses can price their products and services more competitively in the market without absorbing hidden tax costs into their selling price.',
      },
      {
        icon: '🏗️',
        title: 'Full Credit on Capital Goods',
        desc: 'Unlike the previous excise regime which allowed credit in installments, GST permits full ITC on capital goods in the year of purchase, accelerating the recovery of investment costs.',
      },
      {
        icon: '🤝',
        title: 'Promotes Vendor Compliance',
        desc: 'Since ITC depends on supplier filings, it creates a self-policing ecosystem where businesses actively encourage their vendors to file returns on time, strengthening overall tax compliance.',
      },
      {
        icon: '📋',
        title: 'Better Financial Record-Keeping',
        desc: 'The rigorous documentation and reconciliation requirements for ITC naturally lead to improved accounting practices, accurate books, and stronger internal controls across the organization.',
      },
    ],
    disadvantages: [
      'ITC is restricted to credits appearing in GSTR-2B, making the claimant dependent on the supplier\'s timely and accurate filing — any delay or error by the supplier directly impacts the buyer\'s credit availability.',
      'The 180-day payment condition creates cash flow pressure, especially for businesses that operate on extended credit terms with their suppliers, as failure to pay within the deadline triggers mandatory reversal.',
      'Complex proportionate credit calculations under Rules 42 and 43 increase the compliance burden for businesses engaged in both taxable and exempt supplies, requiring specialized knowledge and regular recalculation.',
      'Blocked credit provisions under Section 17(5) deny ITC on several common business expenses such as food and beverages, employee welfare, and motor vehicles, requiring careful monitoring to avoid inadvertent claims.',
    ],
    compliance: [
      {
        area: 'Monthly GSTR-2B Reconciliation',
        details: 'Download and reconcile GSTR-2B with the purchase register every month before filing GSTR-3B. Identify and resolve mismatches promptly to ensure maximum eligible ITC is claimed and no excess credit is taken.',
      },
      {
        area: '180-Day Payment Monitoring',
        details: 'Maintain a tracker for all purchase invoices to ensure supplier payments are made within 180 days. Set up alerts at 150 days to allow buffer time. Any invoice unpaid beyond 180 days requires immediate ITC reversal with interest.',
      },
      {
        area: 'Annual ITC Reconciliation (GSTR-9/9C)',
        details: 'Perform comprehensive annual reconciliation of ITC claimed during the year against audited financial statements and GSTR-2B cumulative data. Report adjustments and reversals accurately in the annual return and reconciliation statement.',
      },
      {
        area: 'Reversal and Reclaim Register',
        details: 'Maintain a dedicated register tracking all ITC reversals made during the year — whether due to Rule 42/43 calculations, non-payment within 180 days, or exempt use — along with any subsequent reclaims upon fulfilling the conditions.',
      },
    ],
    faqs: [
      {
        q: 'What is Input Tax Credit and how does it work under GST?',
        a: 'Input Tax Credit is the mechanism that allows a registered taxpayer to reduce the GST payable on outward supplies by the amount of GST already paid on inward purchases of goods and services. When you buy raw materials, services, or capital goods for your business, the GST charged by the supplier becomes your input tax. This input tax can be claimed as credit and set off against your output tax liability when you sell goods or provide services, effectively ensuring that you only pay tax on the value you add.',
      },
      {
        q: 'Who is eligible to claim Input Tax Credit?',
        a: 'Any person registered under GST who procures goods or services for the furtherance of business can claim ITC, provided the conditions under Section 16 are fulfilled. This includes manufacturers, traders, service providers, and e-commerce operators. Composition scheme taxpayers, persons making exclusively exempt supplies, and unregistered persons are not eligible to claim ITC.',
      },
      {
        q: 'What conditions must be fulfilled to claim ITC successfully?',
        a: 'Four fundamental conditions must be met: (1) you must possess a valid tax invoice or debit note, (2) you must have actually received the goods or services, (3) the supplier must have uploaded the invoice in their GSTR-1 and it must reflect in your GSTR-2B, and (4) you must have filed the GSTR-3B return for the relevant period. Additionally, payment must be made to the supplier within 180 days of the invoice date.',
      },
      {
        q: 'What are blocked credits under GST where ITC cannot be claimed?',
        a: 'Section 17(5) of the CGST Act lists specific items where ITC is blocked regardless of business use. These include motor vehicles (with exceptions for specified businesses), food and beverages, outdoor catering, beauty treatment, health services, club memberships, rent-a-cab services, life and health insurance (with exceptions), travel benefits for employees, and works contract services for construction of immovable property. It is critical to review this list periodically as amendments may alter the scope.',
      },
      {
        q: 'What happens if my supplier has not filed their GSTR-1?',
        a: 'If the supplier has not filed their GSTR-1, the invoice will not appear in your auto-generated GSTR-2B, and you will not be able to claim ITC on that purchase. You should reach out to the supplier immediately and request them to file their return. Until the invoice is reflected in GSTR-2B, the credit remains unavailable. This underscores the importance of vendor compliance monitoring and choosing GST-compliant suppliers.',
      },
      {
        q: 'Is there a time limit to claim Input Tax Credit?',
        a: 'Yes. As per Section 16(4) of the CGST Act, ITC for any financial year can be claimed in the return filed up to the 30th of November following the end of that financial year, or in the annual return, whichever is earlier. For example, ITC pertaining to FY 2023-24 must be claimed by 30th November 2024. Missing this deadline results in permanent forfeiture of the credit.',
      },
      {
        q: 'How does ITC work for businesses making both taxable and exempt supplies?',
        a: 'Businesses making mixed supplies must apportion their ITC between taxable and exempt portions. Rule 42 governs the apportionment for inputs and input services, while Rule 43 deals with capital goods. The ITC attributable to exempt supplies must be reversed. The calculation involves determining the ratio of exempt turnover to total turnover and applying it to the common credit. This reversal must be done monthly with an annual true-up.',
      },
      {
        q: 'Can ITC be claimed on goods or services used for personal purposes?',
        a: 'No. ITC is available only when goods or services are used for the purpose of business or furtherance of business. Any purchases made for personal consumption of the proprietor, partners, or directors are not eligible for ITC. If goods are used partly for business and partly for personal purposes, only the proportionate credit attributable to business use may be claimed.',
      },
    ],
    cta: {
      heading: 'Maximize Your GST Savings with Expert ITC Management',
      subheading:
        'Stop leaving money on the table — let Your Professional ensure every eligible rupee of Input Tax Credit is captured, reconciled, and compliant.',
      features: [
        'Complete GSTR-2B reconciliation and mismatch resolution',
        'Blocked credit audit to prevent inadvertent claims',
        'Proportionate ITC calculations under Rules 42 & 43',
        'Vendor compliance tracking and communication support',
        'Annual reconciliation aligned with GSTR-9 and GSTR-9C',
      ],
    },
  },

  'gst-e-invoice': {
    slug: 'gst-e-invoice',
    title: 'GST E-Invoice',
    subtitle:
      'Streamline your invoicing process with GST E-Invoice compliance — generate IRN-enabled electronic invoices seamlessly, reduce errors, and stay ahead of regulatory mandates with Your Professional.',
    heroFeatures: [
      'Automated IRN generation through the Invoice Registration Portal',
      'Real-time validation and authentication of every invoice',
      'Seamless integration with existing billing and ERP systems',
      'Auto-population of GSTR-1 reducing manual filing effort',
      'Expert setup, training, and ongoing compliance support',
    ],
    overview: {
      heading: 'Understanding GST E-Invoicing: The Digital Transformation of Business Billing',
      paragraphs: [
        'GST E-Invoicing is the government-mandated system of electronically authenticating B2B invoices through the Invoice Registration Portal (IRP) managed by the National Informatics Centre (NIC). Under this system, every eligible invoice must be reported to the IRP in a standardized JSON format, which validates the data, generates a unique Invoice Reference Number (IRN), digitally signs the invoice, and returns a QR code. This process transforms a regular invoice into an authenticated e-invoice that is recognized across the GST ecosystem for return filing, e-way bill generation, and input tax credit matching.',
        'Initially introduced on 1st October 2020 for businesses with an aggregate turnover exceeding ₹500 crore, the e-invoicing mandate has been progressively extended to cover businesses with turnover exceeding ₹5 crore as of 1st August 2023. The government has signaled its intent to eventually bring all registered taxpayers under the e-invoicing framework, making early adoption a strategic advantage. Non-compliance with e-invoicing requirements has serious consequences — invoices issued without a valid IRN are treated as if no invoice was issued, attracting penalties and denying ITC to the recipient.',
        'Your Professional provides end-to-end GST e-invoicing services, from initial assessment of applicability and system configuration to ongoing generation, error resolution, and compliance monitoring. Whether you are a large enterprise needing ERP integration or a growing business seeking a cost-effective cloud-based solution, our team ensures your e-invoicing operations are smooth, accurate, and fully compliant with the latest notifications and technical specifications.',
      ],
      highlights: [
        { icon: '🔐', text: 'Every invoice receives a unique IRN and digital signature from the IRP' },
        { icon: '📱', text: 'QR code on each invoice enables instant verification by tax authorities' },
        { icon: '⚡', text: 'Auto-populates GSTR-1 and Part A of E-Way Bill, reducing duplication' },
        { icon: '📉', text: 'Currently mandatory for businesses with turnover exceeding ₹5 crore' },
      ],
    },
    types: [
      {
        title: 'B2B Invoices',
        desc: 'Standard business-to-business supply invoices are the primary document type covered under e-invoicing. Every invoice raised by an eligible supplier to another registered business must be reported to the IRP for IRN generation before being shared with the buyer.',
      },
      {
        title: 'Credit Notes',
        desc: 'Credit notes issued against previously generated e-invoices — whether for sales returns, post-supply discounts, or deficiency in services — must also be reported to the IRP and receive their own unique IRN for proper tracking and ITC adjustment.',
      },
      {
        title: 'Debit Notes',
        desc: 'Debit notes issued for additional charges, price escalations, or supplementary invoicing linked to original supplies must be registered on the IRP with a separate IRN, ensuring the complete audit trail of financial adjustments between parties.',
      },
      {
        title: 'Export Invoices',
        desc: 'Invoices for supplies made to recipients outside India, whether with payment of IGST or under bond/LUT, are covered under e-invoicing requirements and must be reported to the IRP with appropriate supply type classification and shipping details.',
      },
      {
        title: 'SEZ Supply Invoices',
        desc: 'Invoices for supplies made to Special Economic Zone developers or units, whether with or without payment of tax, fall within the ambit of e-invoicing and require IRN generation through the standard IRP workflow.',
      },
    ],
    eligibility: [
      'Businesses with an aggregate annual turnover exceeding ₹5 crore in any financial year from 2017-18 onwards are mandatorily required to generate e-invoices',
      'The turnover threshold is computed on the basis of aggregate turnover across all GSTINs held under the same PAN',
      'E-invoicing applies to B2B supplies, exports, and supplies to SEZ units and developers — B2C transactions are currently exempt',
      'Special categories such as banks, financial institutions, NBFCs, insurance companies, GTA services, passenger transport, and cinema ticket sales have been exempted via specific notifications',
      'SEZ units themselves are exempt from issuing e-invoices for supplies within the SEZ but must comply for DTA supplies if applicable',
      'Government departments and local authorities registered only for TDS deduction purposes are excluded from e-invoicing requirements',
      'Once the turnover threshold is crossed in any financial year, the e-invoicing requirement continues in all subsequent years regardless of whether turnover drops below the threshold',
      'Businesses voluntarily registered under GST with turnover below the threshold are not required to generate e-invoices unless specifically notified',
    ],
    documents: [
      {
        category: 'Technical Setup Requirements',
        items: [
          'Valid GSTIN and active login credentials for the GST portal and IRP portal',
          'API credentials obtained by registering on the E-Invoice portal (einvoice1.gst.gov.in)',
          'ERP or billing software capable of generating invoices in the prescribed e-invoice JSON schema (Version 1.1)',
          'Digital signature certificate (DSC) of the authorized signatory for portal registration',
          'Master data configuration — HSN codes, SAC codes, unit of measurement codes, and state codes as per e-invoice schema',
        ],
      },
      {
        category: 'Invoice Data Fields (Mandatory)',
        items: [
          'Supplier details — legal name, GSTIN, trade name, and complete address with PIN code and state code',
          'Recipient details — legal name, GSTIN, trade name, address, place of supply, and state code',
          'Item-level details — description, HSN/SAC code, quantity, unit, unit price, discount, taxable value, and tax amounts (CGST, SGST, IGST, cess)',
          'Document details — invoice number, invoice date, invoice type, and supply type code',
          'Value summary — total invoice value, total taxable value, total tax amount, and rounding-off adjustments',
        ],
      },
      {
        category: 'Integration and Compliance Documentation',
        items: [
          'API integration documentation and sandbox testing reports',
          'Error resolution logs for rejected or failed e-invoice submissions',
          'Cancellation records with reasons for any e-invoices cancelled within 24 hours of generation',
          'Reconciliation reports mapping IRN numbers to internal invoice references and GSTR-1 entries',
        ],
      },
    ],
    process: [
      {
        title: 'Applicability Assessment',
        desc: 'Determine whether your business meets the turnover threshold for mandatory e-invoicing by analyzing aggregate turnover across all GSTINs under the same PAN. Review applicable exemption notifications to confirm whether any category-specific exclusion applies to your business.',
        time: '1–2 days',
      },
      {
        title: 'Portal Registration and API Setup',
        desc: 'Register on the E-Invoice portal (einvoice1.gst.gov.in) using your GSTIN credentials. Generate API authentication credentials — client ID and client secret — which will be used by your billing software or ERP to communicate with the IRP for IRN generation.',
        time: '1–2 days',
      },
      {
        title: 'Software Configuration and Schema Mapping',
        desc: 'Configure your ERP, accounting software, or billing application to generate invoice data in the e-invoice JSON schema format prescribed by GSIC. Map internal fields to the mandatory and optional schema fields, including HSN codes, state codes, supply type codes, and unit of measurement codes.',
        time: '3–7 days',
      },
      {
        title: 'Sandbox Testing and Validation',
        desc: 'Use the sandbox environment provided by the IRP to test your integration. Submit sample invoices, credit notes, and debit notes to verify that the JSON payload is correctly structured, all mandatory fields are populated, and the response — including IRN, signed invoice, and QR code — is properly received and parsed by your system.',
        time: '3–5 days',
      },
      {
        title: 'Go-Live and Production IRN Generation',
        desc: 'Switch from the sandbox to the production IRP endpoint. Begin generating e-invoices for all eligible B2B transactions. Each invoice is submitted to the IRP, validated, assigned a unique IRN, digitally signed, and returned with a QR code that must be printed on the invoice document shared with the buyer.',
        time: '1 day',
      },
      {
        title: 'Error Monitoring and Resolution',
        desc: 'Monitor the API response for any rejected invoices due to schema validation errors, duplicate IRN requests, or data mismatches. Establish an error handling workflow to correct and resubmit failed invoices promptly, ensuring no transaction goes uninvoiced.',
        time: 'Ongoing',
      },
      {
        title: 'Reconciliation and Return Filing Verification',
        desc: 'Verify that all e-invoices with valid IRNs are correctly auto-populated in your GSTR-1 draft. Reconcile the IRP portal records with your internal invoice register and address any discrepancies before the GSTR-1 filing deadline for each tax period.',
        time: 'Monthly',
      },
    ],
    fees: [
      { item: 'E-Invoice Applicability Assessment', cost: '₹2,000 – ₹5,000' },
      { item: 'IRP Portal Registration and API Setup', cost: '₹3,000 – ₹8,000' },
      { item: 'ERP / Software Integration and Configuration', cost: '₹10,000 – ₹50,000 (depending on complexity)' },
      { item: 'Sandbox Testing and Go-Live Support', cost: '₹5,000 – ₹15,000' },
      { item: 'Monthly E-Invoice Compliance Management', cost: '₹3,000 – ₹12,000 per month' },
      { item: 'Error Resolution and Resubmission Support', cost: '₹1,500 – ₹5,000 per incident batch' },
    ],
    penalties: [
      {
        violation: 'Issuing invoices without generating a valid IRN on the IRP when mandatorily required',
        penalty: 'The invoice is deemed to have not been issued at all under GST law. Penalty of 100% of the tax due or ₹10,000, whichever is higher, may be imposed under Section 122. The recipient loses ITC eligibility on such invoices.',
      },
      {
        violation: 'Generating e-invoice with incorrect or false particulars',
        penalty: 'Penalty under Section 122 for issuing incorrect invoices — up to ₹25,000 per invoice. If done with intent to evade tax, proceedings under Section 132 (prosecution) may also be initiated.',
      },
      {
        violation: 'Failure to cancel an incorrect e-invoice within 24 hours and issuing a fresh one',
        penalty: 'The incorrect e-invoice remains valid on the IRP and auto-populates GSTR-1 with wrong data. Manual correction is required during GSTR-1 filing. Persistent errors may trigger departmental scrutiny and notices.',
      },
      {
        violation: 'Non-compliance with e-invoicing mandate despite crossing turnover threshold',
        penalty: 'All B2B invoices issued without IRN are treated as non-compliant. Buyers cannot claim ITC, leading to commercial disputes. The supplier faces penalty proceedings, potential suspension of GSTIN, and reputational damage.',
      },
    ],
    advantages: [
      {
        icon: '🤖',
        title: 'Automated Return Population',
        desc: 'E-invoices reported to the IRP automatically populate the supplier\'s GSTR-1 and the corresponding details in the buyer\'s GSTR-2B, dramatically reducing manual data entry, filing effort, and transcription errors in return preparation.',
      },
      {
        icon: '✅',
        title: 'Real-Time Invoice Validation',
        desc: 'The IRP validates every invoice against the prescribed schema and GST master data in real time, catching errors like incorrect GSTINs, invalid HSN codes, or mathematical mismatches before the invoice enters the tax ecosystem.',
      },
      {
        icon: '🔒',
        title: 'Enhanced Data Integrity and Authenticity',
        desc: 'Each e-invoice is digitally signed by the IRP and carries a unique IRN, making it tamper-proof and universally verifiable. This eliminates the risk of fake invoices being used for fraudulent ITC claims in the supply chain.',
      },
      {
        icon: '🚚',
        title: 'Seamless E-Way Bill Integration',
        desc: 'Part A of the E-Way Bill is automatically generated from the e-invoice data, eliminating the need for separate data entry on the E-Way Bill portal. Businesses only need to update vehicle details in Part B to complete the E-Way Bill.',
      },
      {
        icon: '⏱️',
        title: 'Faster ITC Reconciliation for Buyers',
        desc: 'Since e-invoice data flows directly into GSTR-2B, buyers benefit from near-instant availability of ITC details, enabling faster reconciliation with purchase records and reducing the lag in credit availability.',
      },
      {
        icon: '🌐',
        title: 'Standardized Invoicing Across India',
        desc: 'The e-invoice schema creates a uniform invoicing standard across all industries and states, facilitating interoperability between different billing systems and simplifying vendor management for businesses with nationwide operations.',
      },
    ],
    disadvantages: [
      'Initial setup costs can be significant, especially for businesses requiring custom ERP integration, API development, and schema mapping — small businesses with limited IT infrastructure may find the transition challenging.',
      'The system requires stable and consistent internet connectivity for real-time communication with the IRP; any network disruption can delay invoice generation, impacting billing cycles and goods dispatch timelines.',
      'The 24-hour window for cancellation of an e-invoice is restrictive — if an error is discovered after this period, the original invoice cannot be cancelled on the IRP, requiring issuance of a credit note and a fresh invoice to correct the record.',
      'Continuous dependency on the IRP\'s availability means that any downtime or technical issues on the government portal directly impact the business\'s ability to issue invoices, creating operational bottlenecks during outage periods.',
    ],
    compliance: [
      {
        area: 'Real-Time IRN Generation',
        details: 'Every B2B invoice, credit note, and debit note must be reported to the IRP and must receive a valid IRN before being issued to the recipient. No e-invoice-applicable document should be shared with the buyer without the IRN and QR code printed on it.',
      },
      {
        area: 'GSTR-1 Reconciliation with IRP Data',
        details: 'Verify monthly that all IRN-generated invoices are correctly auto-populated in the GSTR-1 draft. Any manual invoices added to GSTR-1 that should have been e-invoiced must be corrected. Reconcile IRP records with the internal sales register before filing.',
      },
      {
        area: 'Cancellation and Amendment Protocols',
        details: 'E-invoices can only be cancelled on the IRP within 24 hours of generation. Beyond this window, corrections must be made through credit notes (which themselves require IRN). Maintain a log of all cancellations with documented reasons for audit purposes.',
      },
      {
        area: 'Schema and Software Updates',
        details: 'Monitor GSTN notifications and NIC advisories for updates to the e-invoice schema, API versioning, new mandatory fields, or changes to validation rules. Update your billing software and integration promptly to avoid rejection of invoices due to outdated schema compliance.',
      },
    ],
    faqs: [
      {
        q: 'What is GST E-Invoicing and how is it different from regular invoicing?',
        a: 'GST E-Invoicing is a system where B2B invoices are electronically reported to and authenticated by the government\'s Invoice Registration Portal (IRP) before being issued to the buyer. Unlike regular invoicing where the invoice exists only between the two parties, an e-invoice receives a unique Invoice Reference Number (IRN), a digital signature, and a QR code from the IRP, making it a government-verified document. The invoice data then automatically flows into GST returns and the E-Way Bill system.',
      },
      {
        q: 'Which businesses are required to generate e-invoices?',
        a: 'As of the latest notification, all GST-registered businesses with an aggregate annual turnover exceeding ₹5 crore in any financial year from 2017-18 onwards must generate e-invoices for their B2B supplies, exports, and supplies to SEZ units. Certain categories like banks, insurance companies, NBFCs, GTAs, and passenger transport services have been specifically exempted. The turnover threshold is calculated across all GSTINs under the same PAN.',
      },
      {
        q: 'What is an IRN and why is it important?',
        a: 'IRN stands for Invoice Reference Number — a unique 64-character hash generated by the IRP for each e-invoice based on the supplier\'s GSTIN, financial year, document type, and document number. The IRN serves as the unique identity of the invoice in the GST ecosystem. Without a valid IRN, an invoice issued by an e-invoicing-eligible business is not considered a valid tax invoice, meaning the recipient cannot claim ITC on it.',
      },
      {
        q: 'Can I cancel an e-invoice after it has been generated?',
        a: 'Yes, but only within 24 hours of IRN generation. You can cancel an e-invoice directly on the IRP portal or through the API by providing the IRN and the reason for cancellation. After the 24-hour window, cancellation on the IRP is not possible. In such cases, you must issue a credit note against the original e-invoice (the credit note itself will need its own IRN) and then generate a fresh corrected e-invoice.',
      },
      {
        q: 'Does e-invoicing apply to B2C transactions?',
        a: 'No, currently e-invoicing is mandated only for B2B invoices, credit notes, debit notes, exports, and supplies to SEZ units and developers. Business-to-consumer (B2C) transactions, including those at retail point of sale, are not covered under the e-invoicing mandate. However, the government has introduced dynamic QR code requirements for B2C invoices issued by businesses with turnover exceeding ₹500 crore.',
      },
      {
        q: 'How does e-invoicing impact GSTR-1 and GSTR-3B filing?',
        a: 'E-invoice data reported to the IRP is automatically populated in the supplier\'s GSTR-1 draft on the GST portal. This means you do not need to manually enter e-invoiced transactions in GSTR-1 — they appear pre-filled. For GSTR-3B, the liability figures are derived from the GSTR-1 data, so accurate e-invoicing directly improves the accuracy of your monthly return. Any manual additions or amendments to GSTR-1 should only cover non-e-invoice transactions.',
      },
      {
        q: 'What happens if the IRP portal is down and I cannot generate e-invoices?',
        a: 'The government has set up multiple IRP portals to ensure redundancy. If the primary IRP (einvoice1.gst.gov.in) is unavailable, you can try the secondary IRP. In cases of prolonged outages, the GSTN typically issues advisories with interim measures. Businesses should have contingency protocols — such as queuing invoices locally and bulk-uploading once connectivity is restored — to minimize operational disruption during portal downtime.',
      },
      {
        q: 'Is there a limit on the number of e-invoices that can be generated per day?',
        a: 'There is no official cap on the number of e-invoices a business can generate per day through the IRP. However, API-based generation is subject to rate limits set by the NIC to prevent system overload. For businesses with very high invoice volumes, it is advisable to implement bulk generation logic with retry mechanisms and to distribute API calls across the day to avoid throttling and ensure consistent throughput.',
      },
    ],
    cta: {
      heading: 'Go Live with GST E-Invoicing — Hassle-Free and Fully Compliant',
      subheading:
        'From applicability assessment to ERP integration and ongoing compliance, Your Professional handles every aspect of your e-invoicing journey so you can focus on growing your business.',
      features: [
        'Complete applicability analysis and exemption review',
        'IRP portal registration and API credential setup',
        'ERP and billing software integration with schema mapping',
        'Sandbox testing, go-live support, and staff training',
        'Monthly reconciliation and error resolution management',
      ],
    },
  },

  'e-way-bill-registration': {
    slug: 'e-way-bill-registration',
    title: 'E-Way Bill Registration',
    subtitle:
      'Streamline the movement of your goods across India with hassle-free E-Way Bill registration. Your Professional guides you through seamless compliance with GST transportation regulations, ensuring uninterrupted logistics and penalty-free operations.',
    heroFeatures: [
      'Mandatory for goods movement exceeding ₹50,000 in value',
      'Real-time generation and tracking on the NIC portal',
      'Valid for intra-state and inter-state transportation',
      'Integrated with GST returns for automated reconciliation',
      'Digital verification by officers via RFID and GPS mapping',
    ],
    overview: {
      heading: 'Understanding E-Way Bill Registration and Its Role in GST Compliance',
      paragraphs: [
        'The Electronic Way Bill, commonly known as the E-Way Bill, is a digitally generated document required under the Goods and Services Tax (GST) framework for the transportation of goods valued above ₹50,000. Introduced under Rule 138 of the CGST Rules, 2017, the E-Way Bill system replaced the fragmented state-level permit mechanisms with a unified, technology-driven solution. Every registered person who causes the movement of goods—whether as a consignor, consignee, or transporter—must generate an E-Way Bill on the official NIC E-Way Bill portal before the goods are dispatched. Your Professional simplifies this critical compliance requirement so your supply chain operates without disruption.',
        'The E-Way Bill contains two parts: Part A, which captures invoice-level details such as the GSTIN of the supplier and recipient, place of delivery, document number, value, and HSN code; and Part B, which records the transporter details including the vehicle number and transporter ID. Once both parts are completed, the system generates a unique 12-digit E-Way Bill Number (EBN) along with a scannable QR code. This EBN must accompany the goods throughout transit and can be verified at any checkpoint by tax officers using handheld devices, RFID readers, or the online verification portal.',
        'Failing to generate a valid E-Way Bill or carrying goods with an expired or incorrect bill can lead to severe consequences, including detention of goods and vehicles, imposition of penalties equivalent to the tax amount or ₹10,000 (whichever is higher), and potential prosecution under GST law. With Your Professional, you gain expert assistance in portal registration, bill generation, compliance management, and dispute resolution—ensuring your goods move freely and your business stays on the right side of the law.',
      ],
      highlights: [
        { icon: '🚛', text: 'Mandatory for transporting goods worth more than ₹50,000 across or within state borders' },
        { icon: '📲', text: 'Generated electronically on the NIC portal with unique EBN and QR code' },
        { icon: '⏱️', text: 'Validity period based on distance—ranging from 1 day for up to 200 km to 20 days for 4,000 km' },
        { icon: '🔗', text: 'Seamlessly linked with GST returns, e-invoicing, and transporter records for unified compliance' },
      ],
    },
    types: [
      {
        title: 'Inward E-Way Bill (Recipient-Generated)',
        desc: 'When the recipient or consignee of goods initiates the movement—such as in cases of purchase returns, goods received on approval, or situations where the supplier is unregistered—the recipient generates the E-Way Bill. This ensures that even inbound shipments are tracked under the GST framework and the recipient takes ownership of compliance for the transportation leg.',
      },
      {
        title: 'Outward E-Way Bill (Supplier-Generated)',
        desc: 'The most common type, generated by the supplier or consignor when dispatching goods to a buyer. This applies to regular sales, stock transfers between branches, goods sent on job work, and exports. The supplier fills in the invoice details in Part A and either completes Part B themselves or assigns it to a registered transporter.',
      },
      {
        title: 'Consolidated E-Way Bill',
        desc: 'Transporters carrying multiple consignments in a single conveyance can generate a Consolidated E-Way Bill (CEWB). This bundles individual E-Way Bills into a single document tied to one vehicle, simplifying checkpoint verification. The CEWB is particularly useful for logistics companies handling LTL (Less Than Truckload) shipments from multiple clients.',
      },
      {
        title: 'E-Way Bill via SMS',
        desc: 'For businesses in areas with limited internet connectivity, the E-Way Bill system supports generation and management via SMS. Registered users can send formatted SMS messages to the designated number to generate, update vehicle details, or cancel E-Way Bills. While limited in functionality compared to the web portal, this mode ensures compliance even in remote locations.',
      },
      {
        title: 'E-Way Bill via API Integration',
        desc: 'Large enterprises and logistics platforms can integrate directly with the NIC E-Way Bill system through APIs. This enables bulk generation, automatic vehicle assignment, real-time status tracking, and seamless synchronization with ERP and warehouse management systems. API integration is ideal for businesses processing hundreds or thousands of shipments daily.',
      },
    ],
    eligibility: [
      'Any person registered under GST who causes movement of goods exceeding ₹50,000 in a single consignment',
      'Transporters—whether registered or enrolled on the E-Way Bill portal—moving goods on behalf of registered or unregistered persons',
      'Unregistered persons making inter-state supplies, where the recipient must ensure E-Way Bill generation before dispatch',
      'Businesses undertaking stock transfers, branch transfers, or goods movement for job work or exhibitions even without a sale transaction',
      'E-commerce operators facilitating the supply and delivery of goods through their platforms where the consignment value threshold is met',
      'Persons transporting handicraft goods inter-state, regardless of GST registration status, under specific exemption notifications',
      'Composition scheme dealers dispatching goods exceeding the prescribed value threshold to buyers within or outside the state',
      'Government departments and public sector undertakings moving taxable goods as part of procurement or distribution activities',
    ],
    documents: [
      {
        category: 'Registration and Identity Documents',
        items: [
          'Valid GSTIN of the consignor and consignee (or enrollment ID for transporters)',
          'PAN card of the business entity or proprietor',
          'Aadhaar card of the authorized signatory for portal verification',
          'Digital Signature Certificate (DSC) or EVC credentials for portal access',
          'Transporter ID issued by the E-Way Bill portal (for logistics providers)',
        ],
      },
      {
        category: 'Consignment and Invoice Documents',
        items: [
          'Tax invoice, bill of supply, or delivery challan with complete details of goods',
          'HSN code of goods being transported along with applicable tax rates',
          'Exact value of consignment including taxable value, CGST, SGST/UTGST, IGST, and cess',
          'Supplier and recipient address details including PIN codes for distance calculation',
        ],
      },
      {
        category: 'Transport and Vehicle Documents',
        items: [
          'Vehicle registration number of the conveyance carrying the goods',
          'Transporter name and GSTIN or transporter ID for third-party logistics',
          'Transport document number (GR/RR/LR/Railway receipt/Airway bill/Bill of Lading)',
          'Approximate distance of transportation in kilometers for validity calculation',
        ],
      },
    ],
    process: [
      {
        title: 'Portal Registration and Enrollment',
        desc: 'The first step is registering on the NIC E-Way Bill portal (ewaybillgst.gov.in). GST-registered persons can log in directly using their GSTIN, while unregistered transporters must enroll by providing their PAN, Aadhaar, and business details. Your Professional handles the entire registration process, including username creation, password setup, and configuration of sub-user accounts for your logistics team.',
        time: '1–2 business days',
      },
      {
        title: 'Part A – Invoice and Goods Details Entry',
        desc: 'After logging into the portal, Part A of the E-Way Bill is completed with details extracted from the tax invoice or delivery challan. This includes the GSTIN of supplier and recipient, document type and number, goods description with HSN code, consignment value with tax breakup, and the reason for transportation (supply, export, job work, etc.). Accurate entry at this stage prevents rejection or mismatch during transit verification.',
        time: '15–30 minutes per bill',
      },
      {
        title: 'Part B – Transporter and Vehicle Assignment',
        desc: 'Part B captures the transportation details—specifically the vehicle number and transporter ID. If the supplier arranges transport, they complete Part B themselves. If a third-party transporter is engaged, the supplier can assign the E-Way Bill to the transporter using their transporter ID, and the transporter then updates Part B with the vehicle number. The bill becomes active and valid only after Part B is filled.',
        time: '5–10 minutes per bill',
      },
      {
        title: 'EBN Generation and QR Code Issuance',
        desc: 'Once both parts are completed and validated by the system, a unique 12-digit E-Way Bill Number (EBN) is generated along with a machine-readable QR code. The EBN serves as the primary reference for all checkpoint verifications, while the QR code contains encrypted bill details that officers can scan instantly. The generated bill can be printed or stored digitally on the driver\'s mobile device.',
        time: 'Instant (system-generated)',
      },
      {
        title: 'Goods Dispatch and Transit Monitoring',
        desc: 'With the active E-Way Bill, goods are dispatched from the origin. During transit, tax officers at checkpoints can verify the bill by entering the EBN on the portal, scanning the QR code, or reading the RFID tag (where applicable). The system also enables the consignor, consignee, and transporter to track the bill status in real time. For multi-modal transport, vehicle details can be updated on the portal without generating a new bill.',
        time: 'Validity: 1 day per 200 km (regular) or 1 day per 200 km (over-dimensional cargo)',
      },
      {
        title: 'Extension, Modification, or Cancellation',
        desc: 'If the goods cannot reach the destination within the E-Way Bill validity period due to unforeseen circumstances—vehicle breakdown, natural calamity, or transshipment delays—the validity can be extended on the portal before or within 8 hours of expiry. Vehicle number changes can be updated anytime during transit. If goods are not transported, the bill can be cancelled within 24 hours of generation, provided it has not been verified by any officer en route.',
        time: '5–15 minutes',
      },
      {
        title: 'Delivery Confirmation and Record Maintenance',
        desc: 'Upon delivery of goods to the recipient, the E-Way Bill cycle is complete. While there is no formal "delivery confirmation" step on the portal, businesses must maintain records of generated E-Way Bills, corresponding invoices, and transport documents for audit purposes. Your Professional assists in organizing digital records, reconciling bills with GST returns, and preparing documentation for any departmental inquiries.',
        time: 'Ongoing compliance activity',
      },
    ],
    fees: [
      {
        item: 'E-Way Bill Portal Registration',
        cost: 'Free of charge (government portal)',
      },
      {
        item: 'Individual E-Way Bill Generation',
        cost: 'No government fee per bill',
      },
      {
        item: 'Professional Assistance – Portal Setup & Training',
        cost: '₹1,500 – ₹3,000 (one-time)',
      },
      {
        item: 'Professional Assistance – Monthly Compliance Management',
        cost: '₹2,000 – ₹5,000 per month (based on volume)',
      },
      {
        item: 'API Integration Setup for Bulk Generation',
        cost: '₹10,000 – ₹50,000 (depends on ERP/system complexity)',
      },
      {
        item: 'Dispute Resolution and Penalty Representation',
        cost: '₹3,000 – ₹15,000 per case (depending on complexity)',
      },
    ],
    penalties: [
      {
        violation: 'Movement of goods without a valid E-Way Bill',
        penalty:
          'Tax amount applicable on the goods or ₹10,000, whichever is higher. The goods and vehicle may be detained or seized under Section 129 of the CGST Act until the penalty is paid or a security bond is furnished.',
      },
      {
        violation: 'Transporting goods with an expired E-Way Bill',
        penalty:
          'Treated equivalently to movement without an E-Way Bill. A penalty equal to 200% of the tax amount may be imposed, and the goods remain under detention until the matter is resolved through payment or adjudication.',
      },
      {
        violation: 'Incorrect or incomplete E-Way Bill details',
        penalty:
          'If the bill contains wrong GSTIN, incorrect HSN code, mismatched value, or wrong vehicle number, officers may detain the consignment. Penalty ranges from ₹10,000 to the full tax amount, and repeated violations may trigger a detailed audit of the business.',
      },
      {
        violation: 'Failure to carry or produce E-Way Bill during transit inspection',
        penalty:
          'The driver or person in charge of the conveyance must produce the E-Way Bill (physical or digital) upon demand. Failure to do so results in immediate detention under Section 68, with release contingent upon payment of applicable tax and penalty or furnishing of bank guarantee.',
      },
    ],
    advantages: [
      {
        icon: '📊',
        title: 'Unified National Tracking System',
        desc: 'The E-Way Bill system replaces the chaotic patchwork of state-level transit permits, check posts, and manual documentation with a single, technology-driven platform. Businesses operating across multiple states benefit from standardized processes, reduced paperwork, and elimination of physical border checks that previously caused hours of delays.',
      },
      {
        icon: '⚡',
        title: 'Faster Goods Movement and Reduced Transit Time',
        desc: 'With electronic verification via QR codes and RFID at checkpoints, physical inspections are minimized. This dramatically reduces waiting times at state borders and en-route check posts, enabling goods to reach their destination faster and improving overall supply chain efficiency for manufacturers, traders, and logistics providers.',
      },
      {
        icon: '🛡️',
        title: 'Enhanced Tax Compliance and Revenue Protection',
        desc: 'The E-Way Bill creates a digital trail linking every goods movement to a specific invoice, GSTIN, and transaction. This makes it significantly harder to evade GST through unaccounted sales, undervaluation, or unauthorized stock movement. The system strengthens the integrity of the tax base and helps honest businesses compete on a level playing field.',
      },
      {
        icon: '🔄',
        title: 'Seamless Integration with GST Ecosystem',
        desc: 'E-Way Bills are tightly integrated with GSTR-1 filings, e-invoicing, and input tax credit mechanisms. Auto-population of data between systems reduces manual data entry, minimizes errors, and ensures that the same invoice details flow consistently across all compliance touchpoints—from billing to filing to transportation.',
      },
      {
        icon: '💻',
        title: 'Multiple Generation Channels for Flexibility',
        desc: 'The system accommodates businesses of all sizes and technical capabilities by offering multiple bill generation methods—web portal, SMS, Android app, API integration, and bulk upload via Excel. Whether you are a small trader in a remote town or a large corporation processing thousands of daily shipments, there is a channel that fits your operations.',
      },
      {
        icon: '📱',
        title: 'Real-Time Visibility and Control',
        desc: 'Consignors, consignees, and transporters can track E-Way Bill status in real time, update vehicle details during transit, extend validity when needed, and cancel bills that are no longer required. This level of control and transparency was simply not possible under the old paper-based permit systems and empowers businesses with actionable logistics intelligence.',
      },
    ],
    disadvantages: [
      'Technology dependence can create challenges in areas with poor internet connectivity, potentially delaying E-Way Bill generation and causing compliance gaps during network outages or portal downtime.',
      'The ₹50,000 threshold applies per consignment, not per invoice, creating complexity when multiple invoices for the same buyer are shipped together and their combined value crosses the limit even if individual invoices do not.',
      'Validity periods based on fixed distance calculations may not account for real-world transit delays caused by traffic congestion, road conditions, vehicle breakdowns, or natural disasters, forcing businesses to extend bills under time pressure.',
      'Small businesses and individual transporters often struggle with the digital literacy requirements of the portal, leading to errors in data entry, accidental generation of incorrect bills, and exposure to penalties that disproportionately impact smaller operators.',
    ],
    compliance: [
      {
        area: 'E-Way Bill Generation and Record Keeping',
        details:
          'Every E-Way Bill generated must be maintained in digital or physical records for a minimum of 72 months (6 years) from the date of filing the relevant annual return. Records should include the EBN, corresponding invoice, transport documents, and any extension or cancellation logs. Regular reconciliation between E-Way Bills generated and GSTR-1 data is essential to avoid mismatch notices from the department.',
      },
      {
        area: 'Vehicle and Transporter Update Obligations',
        details:
          'When goods are transferred from one vehicle to another during transit (transshipment), the E-Way Bill must be updated with the new vehicle number before the goods resume movement. Similarly, if the transporter changes, the reassignment must be completed on the portal. Failure to update vehicle or transporter details renders the E-Way Bill invalid and exposes the consignment to detention.',
      },
      {
        area: 'State-Specific Rules and Threshold Variations',
        details:
          'While the central E-Way Bill threshold is ₹50,000, individual states have the power to reduce this threshold for intra-state movement. Several states have notified lower thresholds (some as low as ₹25,000 or even ₹10,000 for specific goods). Businesses must stay updated on state-specific notifications and ensure compliance with the applicable threshold for each shipment route.',
      },
      {
        area: 'Blocking and Unblocking of E-Way Bill Generation',
        details:
          'The government has implemented a mechanism to block E-Way Bill generation for taxpayers who fail to file their GSTR-3B returns for two or more consecutive periods. Once blocked, the taxpayer cannot generate any new E-Way Bills until the pending returns are filed. Your Professional monitors your filing calendar to ensure your E-Way Bill generation facility is never disrupted due to return filing lapses.',
      },
    ],
    faqs: [
      {
        q: 'What is an E-Way Bill and when is it required?',
        a: 'An E-Way Bill is an electronic document generated on the NIC portal that must accompany goods during transportation when the consignment value exceeds ₹50,000. It is required for both inter-state and intra-state movement of goods, whether by road, rail, air, or ship. The bill ensures that goods being moved are covered under a valid tax document and helps the government track goods in transit to prevent tax evasion.',
      },
      {
        q: 'Who is responsible for generating the E-Way Bill?',
        a: 'The responsibility lies with the person who causes the movement of goods. In most cases, this is the supplier (consignor) for outward supplies. However, if the goods are transported by the recipient (e.g., in purchase situations) or by an unregistered supplier, the recipient must generate the bill. Transporters can also generate or complete E-Way Bills when the consignor or consignee fails to do so, ensuring goods are not stranded without documentation.',
      },
      {
        q: 'What is the validity period of an E-Way Bill?',
        a: 'For regular cargo (other than over-dimensional cargo), the E-Way Bill is valid for 1 day for every 200 kilometers or part thereof. For over-dimensional cargo, it is 1 day for every 20 kilometers. The validity starts from the time of generation. If goods cannot reach their destination within the validity period, the bill can be extended on the portal by the generator or transporter, provided the extension is done before or within 8 hours of the bill\'s expiry.',
      },
      {
        q: 'Can an E-Way Bill be cancelled or modified after generation?',
        a: 'An E-Way Bill can be cancelled within 24 hours of generation if the goods are not transported or if there is an error in the bill, provided no officer has verified it during transit. However, modification of Part A details (invoice, goods, value) is not permitted—if these are incorrect, the bill must be cancelled and a new one generated. Part B (vehicle number) can be updated any number of times during transit without cancellation.',
      },
      {
        q: 'Are there any goods exempt from E-Way Bill requirements?',
        a: 'Yes, several categories of goods are exempt regardless of value. These include fruits and vegetables, unprocessed tea leaves, raw silk and silk yarn, newspapers, judicial and non-judicial stamp papers, personal household effects, goods transported by non-motorized conveyance, and goods specified under certain CGST/SGST notifications. Additionally, goods transported under customs bond or supervision, and defense and military equipment under specific conditions, are also exempt.',
      },
      {
        q: 'What happens if my E-Way Bill facility is blocked?',
        a: 'The E-Way Bill generation facility is automatically blocked if you fail to file GSTR-3B for two or more consecutive tax periods. Once blocked, you cannot generate any new E-Way Bills, which effectively halts your ability to dispatch goods legally. To unblock, you must file all pending GSTR-3B returns. The unblocking is processed automatically within a few hours of filing. Your Professional proactively monitors your return filing schedule to prevent such disruptions.',
      },
      {
        q: 'How does the Consolidated E-Way Bill work for transporters?',
        a: 'A transporter carrying multiple consignments in a single vehicle can generate a Consolidated E-Way Bill (CEWB) by clubbing individual E-Way Bills into one document. The CEWB simplifies checkpoint verification since the officer needs to check only one consolidated document instead of multiple individual bills. Each underlying individual E-Way Bill retains its own validity and details. If the vehicle changes, the CEWB must be regenerated with the updated vehicle number.',
      },
      {
        q: 'Can I generate E-Way Bills through my existing accounting or ERP software?',
        a: 'Yes, the NIC E-Way Bill system provides APIs that allow direct integration with accounting software, ERP platforms, and logistics management systems. Many popular software solutions like Tally, SAP, Oracle, and Zoho offer built-in E-Way Bill modules. For custom integrations, Your Professional can assist with API setup, testing, and deployment so that your team can generate, update, and manage E-Way Bills directly from the tools they already use without logging into the portal separately.',
      },
    ],
    cta: {
      heading: 'Simplify Your E-Way Bill Compliance with Your Professional',
      subheading:
        'From portal registration to bulk bill generation and penalty resolution, our experts ensure your goods move freely while you stay fully compliant with GST transportation rules.',
      features: [
        'Complete E-Way Bill portal setup and team training',
        'Ongoing compliance management and return filing monitoring',
        'API integration with your ERP or accounting software',
        'Expert representation for detention and penalty matters',
        'State-specific threshold tracking and advisory updates',
      ],
    },
  }
};

export default data;
