import type { ServiceData } from '../services';

const data: Record<string, ServiceData> = {
'income-tax-return-filing': {
    slug: 'income-tax-return-filing',
    title: 'Income Tax Return Filing',
    subtitle:
      'Streamline your annual tax obligations with Your Professional — expert-led ITR filing services for salaried individuals, freelancers, businesses, and NRIs ensuring maximum refunds and full compliance.',
    heroFeatures: [
      'Accurate ITR preparation by qualified Chartered Accountants',
      'Maximized deductions under Sections 80C, 80D, 80G & more',
      'Support for all ITR forms — ITR-1 through ITR-7',
      'Fast e-filing with real-time acknowledgment tracking',
      'Dedicated post-filing support for notices and rectifications',
    ],
    overview: {
      heading: 'Why Timely Income Tax Return Filing Matters',
      paragraphs: [
        'Filing your Income Tax Return is not merely a statutory obligation — it is the cornerstone of sound financial planning. Every individual and entity earning above the basic exemption limit prescribed by the Income Tax Act, 1961 must file an annual return disclosing total income, applicable deductions, and the resulting tax liability. Your Professional simplifies this entire journey, from gathering documents to e-verification, so you can focus on what matters most — growing your wealth.',
        'The Indian tax landscape offers a rich set of deductions, exemptions, and rebates that most taxpayers fail to leverage fully. Whether you are a salaried professional exploring the benefits of the New Tax Regime versus the Old Regime, a freelancer managing presumptive taxation under Section 44ADA, or a business owner navigating depreciation schedules and carried-forward losses, our team of experienced CAs ensures every legitimate saving is captured in your return.',
        'Beyond compliance, a consistently filed ITR record opens doors to smoother loan approvals, visa processing, higher insurance coverage, and government tenders. At Your Professional, we combine deep domain expertise with secure, technology-driven workflows to deliver error-free returns well before the deadline — giving you peace of mind and a clean financial track record year after year.',
      ],
      highlights: [
        { icon: '📊', text: 'Comprehensive income analysis across salary, capital gains, house property, and other sources' },
        { icon: '💰', text: 'Optimized tax-saving strategies tailored to your unique financial profile' },
        { icon: '🔒', text: 'Bank-grade data encryption and strict confidentiality protocols' },
        { icon: '⚡', text: 'Same-day filing available for straightforward salaried returns' },
      ],
    },
    types: [
      {
        title: 'ITR-1 (Sahaj)',
        desc: 'Designed for resident individuals with total income up to ₹50 lakh sourced from salary, one house property, interest income, and agricultural income up to ₹5,000. This is the most commonly filed return form in India.',
      },
      {
        title: 'ITR-2',
        desc: 'Applicable to individuals and HUFs who earn income from capital gains, multiple house properties, foreign assets, or who are directors in a company. It does not cover business or professional income.',
      },
      {
        title: 'ITR-3',
        desc: 'Filed by individuals and HUFs carrying on a business or profession, including partners in a firm. Covers all heads of income — salary, house property, business/profession, capital gains, and other sources.',
      },
      {
        title: 'ITR-4 (Sugam)',
        desc: 'For resident individuals, HUFs, and firms (other than LLPs) opting for the presumptive taxation scheme under Sections 44AD, 44ADA, or 44AE, with total income up to ₹50 lakh.',
      },
      {
        title: 'ITR-5, ITR-6 & ITR-7',
        desc: 'Specialized forms for partnership firms, LLPs (ITR-5), companies other than those claiming Section 11 exemption (ITR-6), and trusts, political parties, institutions, and colleges (ITR-7).',
      },
    ],
    eligibility: [
      'Salaried individuals whose gross total income exceeds the basic exemption limit (₹2.5 lakh / ₹3 lakh / ₹5 lakh based on age and regime)',
      'Self-employed professionals and freelancers earning taxable income from profession or consultancy services',
      'Business owners including sole proprietors, partnership firms, and LLPs regardless of profit or loss',
      'Companies incorporated under the Companies Act, 2013 — mandatory filing irrespective of income level',
      'Individuals holding assets or financial interests outside India, or earning income from foreign sources',
      'Persons who have deposited more than ₹1 crore in current accounts, spent over ₹2 lakh on foreign travel, or paid electricity bills exceeding ₹1 lakh during the financial year',
      'Individuals seeking to claim a refund of excess TDS or advance tax paid during the year',
      'NRIs and deemed residents earning or accruing income in India above the basic exemption threshold',
    ],
    documents: [
      {
        category: 'Identity & Address Proof',
        items: [
          'PAN Card (mandatory for all taxpayers)',
          'Aadhaar Card linked with PAN for e-verification',
          'Valid passport (required for NRIs and foreign income disclosure)',
          'Current address proof — utility bill, bank statement, or Aadhaar',
        ],
      },
      {
        category: 'Income Documentation',
        items: [
          'Form 16 issued by employer for salaried individuals',
          'Form 16A / 16B / 16C for TDS on non-salary payments, property sales, and rent',
          'Bank statements and interest certificates from all savings, FD, and RD accounts',
          'Capital gains statements from brokers / mutual fund houses for equity and debt transactions',
          'Profit & Loss Account and Balance Sheet for business and professional income',
        ],
      },
      {
        category: 'Deduction & Exemption Proofs',
        items: [
          'Section 80C proofs — PPF passbook, ELSS statements, LIC premium receipts, tuition fee receipts',
          'Section 80D — health insurance premium payment receipts for self, family, and parents',
          'Section 80G — donation receipts from eligible charitable institutions with registration number',
          'Home loan interest certificate from the lender for Section 24(b) deduction',
          'Rent receipts and landlord PAN (if annual rent exceeds ₹1 lakh) for HRA exemption',
        ],
      },
    ],
    process: [
      {
        title: 'Free Consultation & Regime Selection',
        desc: 'We begin with a one-on-one consultation to understand your income sources, investments, and financial goals. Our CA evaluates whether the Old Regime or New Regime is more beneficial for you and recommends the optimal filing strategy.',
        time: '30 minutes',
      },
      {
        title: 'Document Collection & Verification',
        desc: 'Upload your Form 16, bank statements, investment proofs, and other relevant documents through our secure portal. Our team cross-verifies every document against your Form 26AS and AIS to ensure completeness and accuracy.',
        time: '1–2 days',
      },
      {
        title: 'Income Computation & Deduction Optimization',
        desc: 'We meticulously compute your total income across all applicable heads — salary, house property, business/profession, capital gains, and other sources. Every eligible deduction, exemption, and rebate is identified and applied to minimize your tax outgo.',
        time: '1–2 days',
      },
      {
        title: 'Draft Review & Taxpayer Approval',
        desc: 'A detailed draft of your return is shared with a summary showing gross income, deductions claimed, tax payable or refund due, and an explanation of key line items. You review and confirm before we proceed to filing.',
        time: '1 day',
      },
      {
        title: 'E-Filing on Income Tax Portal',
        desc: 'Your return is electronically filed on the official Income Tax e-filing portal. We select the correct ITR form, fill in all schedules accurately, and validate the XML/JSON before final submission.',
        time: '1 day',
      },
      {
        title: 'E-Verification & Acknowledgment',
        desc: 'Post-filing, we assist with e-verification through Aadhaar OTP, net banking, or EVC. Once verified, the ITR-V acknowledgment is generated, and a copy is shared with you for your records.',
        time: 'Same day',
      },
      {
        title: 'Post-Filing Support & Refund Tracking',
        desc: 'Our engagement does not end at filing. We monitor your refund status, respond to any intimation notices under Section 143(1), and assist with rectification requests if discrepancies arise during CPC processing.',
        time: 'Ongoing',
      },
    ],
    fees: [
      { item: 'ITR-1 Filing (Salaried — Single Employer)', cost: '₹999 – ₹1,499' },
      { item: 'ITR-2 Filing (Capital Gains / Multiple Sources)', cost: '₹2,499 – ₹3,999' },
      { item: 'ITR-3 Filing (Business & Professional Income)', cost: '₹3,999 – ₹7,999' },
      { item: 'ITR-4 Filing (Presumptive Taxation)', cost: '₹1,999 – ₹3,499' },
      { item: 'ITR-5 / ITR-6 Filing (Firms & Companies)', cost: '₹5,999 – ₹14,999' },
      { item: 'Revised Return / Rectification Filing', cost: '₹1,499 – ₹2,999' },
    ],
    penalties: [
      {
        violation: 'Late filing after due date but before 31st December',
        penalty: 'Late fee of ₹5,000 under Section 234F. Reduced to ₹1,000 if total income does not exceed ₹5 lakh.',
      },
      {
        violation: 'Non-filing or filing after 31st December',
        penalty: 'Late fee of ₹5,000 plus loss of ability to carry forward certain losses (capital and business). Interest under Sections 234A, 234B, and 234C may also apply.',
      },
      {
        violation: 'Under-reporting or misreporting of income',
        penalty: 'Penalty of 50% of tax payable on under-reported income; increases to 200% in cases of deliberate misreporting under Section 270A.',
      },
      {
        violation: 'Failure to disclose foreign assets or income',
        penalty: 'Penalty of ₹10 lakh under the Black Money Act, 2015, along with potential prosecution and imprisonment of up to 7 years for willful non-disclosure.',
      },
    ],
    advantages: [
      {
        icon: '🎯',
        title: 'Precision-Driven Preparation',
        desc: 'Our Chartered Accountants reconcile your income data against Form 26AS, AIS, and TIS before filing — virtually eliminating mismatches and notices from the Central Processing Centre.',
      },
      {
        icon: '💸',
        title: 'Maximum Legitimate Savings',
        desc: 'We proactively identify overlooked deductions — from NPS contributions under 80CCD(1B) to medical expenditures under 80DDB — ensuring you pay only the tax you legally owe.',
      },
      {
        icon: '📱',
        title: 'Completely Digital Experience',
        desc: 'Upload documents from your phone, review your draft online, and e-verify in minutes. No paperwork, no office visits — the entire process is handled remotely with end-to-end encryption.',
      },
      {
        icon: '🏦',
        title: 'Stronger Financial Profile',
        desc: 'Consistently filed returns strengthen your credit profile, enabling faster loan approvals at better interest rates, seamless visa processing, and eligibility for government contracts.',
      },
      {
        icon: '🛡️',
        title: 'Notice & Scrutiny Protection',
        desc: 'Should you receive a demand notice or scrutiny assessment, our team prepares and submits the response on your behalf, representing your case professionally before tax authorities.',
      },
      {
        icon: '📅',
        title: 'Year-Round Tax Planning',
        desc: 'Beyond annual filing, we offer proactive quarterly check-ins to optimize advance tax payments, plan investments, and adjust withholding — keeping you ahead of deadlines every quarter.',
      },
    ],
    disadvantages: [
      'Complexity increases significantly for individuals with income from multiple sources, foreign remittances, or ESOPs — requiring more documentation and higher professional fees.',
      'Tax laws and form structures change frequently; taxpayers who self-file without professional guidance risk selecting the wrong ITR form or missing newly introduced schedules.',
      'Refund processing timelines depend entirely on the Income Tax Department and can range from a few weeks to several months, especially when returns are selected for detailed processing.',
      'Switching between Old and New Tax Regimes has specific conditions — salaried individuals can switch each year, but business owners choosing the New Regime cannot revert easily.',
    ],
    compliance: [
      {
        area: 'Annual Return Filing',
        details: 'File the applicable ITR form on or before the due date — 31st July for individuals and non-audit cases, 31st October for audit cases, and 30th November for transfer pricing cases. Belated returns may be filed until 31st December with applicable late fees.',
      },
      {
        area: 'Advance Tax Payments',
        details: 'If your estimated tax liability for the year exceeds ₹10,000, advance tax must be paid in four instalments — 15% by 15th June, 45% by 15th September, 75% by 15th December, and 100% by 15th March. Failure attracts interest under Sections 234B and 234C.',
      },
      {
        area: 'Tax Audit (Section 44AB)',
        details: 'Businesses with turnover exceeding ₹1 crore (₹10 crore if 95% of transactions are digital) and professionals with gross receipts above ₹50 lakh must get their accounts audited by a CA and file the audit report before the due date.',
      },
      {
        area: 'Record Keeping',
        details: 'Maintain books of account, investment proofs, bank statements, and supporting documents for a minimum of 6 years from the end of the relevant assessment year — or longer if proceedings are pending.',
      },
    ],
    faqs: [
      {
        q: 'Who is required to file an Income Tax Return in India?',
        a: 'Any individual whose gross total income before deductions exceeds the basic exemption limit must file. Additionally, individuals meeting specified conditions — such as high-value deposits, foreign travel expenditure, electricity bills above ₹1 lakh, or ownership of foreign assets — must file regardless of income level. Companies and firms must file irrespective of profit or loss.',
      },
      {
        q: 'What is the difference between the Old and New Tax Regime?',
        a: 'The Old Regime offers a wide range of deductions and exemptions (HRA, 80C, 80D, LTA, etc.) with higher slab rates. The New Regime provides lower tax rates but disallows most deductions. Your Professional evaluates both scenarios for your specific profile and recommends the more tax-efficient option before filing.',
      },
      {
        q: 'What happens if I miss the filing deadline?',
        a: 'You can file a belated return under Section 139(4) until 31st December of the assessment year. However, a late fee of up to ₹5,000 under Section 234F applies, along with interest on any unpaid tax. You also lose the ability to carry forward certain losses, such as capital losses and business losses.',
      },
      {
        q: 'Can I revise my return after filing?',
        a: 'Yes. If you discover an error or omission in your original return, a revised return can be filed under Section 139(5) before 31st December of the assessment year or before the completion of assessment — whichever is earlier. Your Professional handles revised filings with no additional hassle.',
      },
      {
        q: 'How long does the refund take after filing?',
        a: 'Refunds are typically processed within 20 to 45 days after e-verification, provided the return is free of discrepancies. If the return is selected for detailed processing or adjustment, it may take longer. We track your refund status and proactively resolve any issues flagged by the CPC.',
      },
      {
        q: 'Do I need to file if my only income is from agriculture?',
        a: 'Agricultural income is exempt under Section 10(1), but if your total income including agricultural income exceeds the basic exemption limit, or if agricultural income exceeds ₹5,000, you may still need to file. This is because agricultural income is considered for rate purposes when computing tax on non-agricultural income.',
      },
      {
        q: 'What is Form 26AS, and why is it important?',
        a: 'Form 26AS is your Annual Tax Statement maintained by the Income Tax Department. It contains details of TDS deducted by employers and banks, advance tax and self-assessment tax paid, high-value transactions reported via SFT, and refunds issued. Reconciling your return with Form 26AS is critical to avoid processing delays and notices.',
      },
      {
        q: 'Can Your Professional handle NRI tax filings?',
        a: 'Absolutely. We specialize in NRI taxation, including determining residential status under Section 6, computing tax on Indian income (rental, capital gains, interest), applying DTAA benefits to avoid double taxation, and filing the appropriate ITR form. We also assist with repatriation-related TDS certificates.',
      },
    ],
    cta: {
      heading: 'File Your Income Tax Return with Confidence',
      subheading:
        'Let Your Professional handle the numbers while you enjoy peace of mind. Our experienced CAs ensure maximum savings, zero errors, and on-time filing — every single year.',
      features: [
        'Expert CA-assisted filing for all ITR forms',
        'Old vs New Regime comparison at no extra cost',
        'Secure document upload and e-verification support',
        'Post-filing notice handling and refund tracking',
      ],
    },
  },

  'tds-return-filing': {
    slug: 'tds-return-filing',
    title: 'TDS Return Filing',
    subtitle:
      'Ensure seamless Tax Deducted at Source compliance with Your Professional — accurate quarterly return filing, TDS certificate generation, and end-to-end support for deductors across all sections of the Income Tax Act.',
    heroFeatures: [
      'Quarterly TDS return preparation and filing for all applicable forms',
      'Automated challan matching and reconciliation with OLTAS',
      'Generation and distribution of Form 16, 16A, 16B, and 16C',
      'Expert handling of lower deduction and nil deduction certificate applications',
      'Dedicated support for correction statements and late filing penalty resolution',
    ],
    overview: {
      heading: 'Understanding TDS Compliance and Its Business Impact',
      paragraphs: [
        'Tax Deducted at Source is the government\'s mechanism for collecting income tax at the very point where income is generated. Every employer paying salaries, every business making payments to contractors, every tenant remitting rent above threshold limits, and every entity disbursing professional fees is potentially a TDS deductor. Filing quarterly TDS returns accurately is not optional — it is a legal mandate under Section 200(3) of the Income Tax Act, and non-compliance attracts steep penalties and interest that can quickly erode your bottom line.',
        'The complexity of TDS compliance lies in its breadth. With over 30 sections prescribing different rates, thresholds, and due dates — from Section 192 on salaries to Section 194Q on purchase of goods — keeping track of applicable provisions requires constant vigilance. Add to this the need to match challans with deductee records, handle PAN and Aadhaar validation, and reconcile with Form 26AS entries, and it becomes clear why thousands of businesses rely on dedicated professionals for TDS management.',
        'Your Professional brings order to this complexity. Our TDS compliance team manages the complete lifecycle — from computing the correct deduction amount and depositing challans on time, to preparing error-free quarterly returns and generating certificates for deductees. We leverage advanced reconciliation tools to ensure that every rupee deducted matches the government\'s records, protecting you from demand notices and keeping your deductees\' Form 26AS statements accurate.',
      ],
      highlights: [
        { icon: '📋', text: 'Complete lifecycle management from deduction computation to certificate issuance' },
        { icon: '🔄', text: 'Automated challan-deductee reconciliation eliminating manual errors' },
        { icon: '⏰', text: 'Proactive deadline tracking with reminders for deposits and returns' },
        { icon: '✅', text: 'TRACES portal management including registration, defaults resolution, and corrections' },
      ],
    },
    types: [
      {
        title: 'Form 24Q — Salary TDS',
        desc: 'Filed quarterly by employers for TDS deducted on salary payments under Section 192. The Q4 statement includes detailed annexures capturing the complete salary breakup, exemptions, deductions, and tax computation for each employee for the entire financial year.',
      },
      {
        title: 'Form 26Q — Non-Salary TDS',
        desc: 'Covers TDS on all non-salary payments to residents — including professional fees (194J), contractor payments (194C), rent (194I), interest other than on securities (194A), commission and brokerage (194H), and numerous other sections.',
      },
      {
        title: 'Form 27Q — TDS on NRI Payments',
        desc: 'Filed for TDS deducted on payments made to non-resident Indians and foreign companies. Applicable sections include 195 (other sums), 196A (mutual fund income), 196B (offshore fund units), and 196D (foreign institutional investors). Requires special attention to DTAA applicability.',
      },
      {
        title: 'Form 26QB — TDS on Property Transactions',
        desc: 'A challan-cum-statement filed by buyers of immovable property valued above ₹50 lakh. TDS is deducted at 1% under Section 194-IA and must be deposited within 30 days from the end of the month of deduction.',
      },
      {
        title: 'Form 26QC — TDS on Rent by Individuals',
        desc: 'Filed by individual tenants or HUFs (not subject to tax audit) who pay monthly rent exceeding ₹50,000. TDS is deducted at 5% under Section 194-IB, with the return filed within 30 days from the end of the month of deduction.',
      },
    ],
    eligibility: [
      'Employers — any organization or individual paying salary to employees is required to deduct TDS under Section 192 and file Form 24Q quarterly',
      'Businesses and professionals making payments to contractors, sub-contractors, or service providers above prescribed thresholds under Sections 194C, 194J, 194H, etc.',
      'Banks, financial institutions, and NBFCs deducting TDS on interest payments to depositors under Section 194A and on commission under Section 194H',
      'Individuals and HUFs subject to tax audit who make specified payments exceeding threshold limits prescribed under various TDS sections',
      'Buyers of immovable property where the transaction value equals or exceeds ₹50 lakh — TDS at 1% under Section 194-IA',
      'Individual tenants or HUFs paying monthly rent above ₹50,000 to a resident landlord under Section 194-IB',
      'Companies and entities making payments to non-residents or foreign companies, requiring TDS under Sections 195, 196A, 196B, 196C, or 196D',
      'Government entities, trusts, and institutions making payments that attract TDS provisions under the Income Tax Act',
    ],
    documents: [
      {
        category: 'Deductor Information',
        items: [
          'TAN (Tax Deduction and Collection Account Number) — mandatory for all deductors',
          'PAN of the deductor entity or individual',
          'TRACES portal login credentials for return filing and certificate download',
          'Business registration documents — Certificate of Incorporation, Partnership Deed, or Proprietorship proof',
        ],
      },
      {
        category: 'Transaction & Deductee Records',
        items: [
          'Complete payment ledger with deductee-wise breakup of amounts paid and TDS deducted',
          'PAN and Aadhaar details of all deductees for accurate reporting and lower/nil rate application',
          'Invoices, agreements, and contracts supporting the nature and amount of each payment',
          'Lower deduction certificates (Section 197) or nil deduction certificates where applicable',
          'Salary registers, payslips, and employee investment declarations for Form 24Q preparation',
        ],
      },
      {
        category: 'Challan & Payment Proofs',
        items: [
          'TDS challan details — BSR code, challan serial number, date of deposit, and amount',
          'Bank statements or online banking receipts confirming timely deposit of TDS amounts',
          'OLTAS challan status verification printout from the NSDL/TIN website',
          'Previous quarter TDS return acknowledgments and any correction statements filed',
        ],
      },
    ],
    process: [
      {
        title: 'TAN Registration & Portal Setup',
        desc: 'If you do not already have a TAN, we assist with the TAN application through Form 49B. For existing deductors, we ensure your TRACES and e-filing portal profiles are correctly configured and linked to your PAN and authorized signatories.',
        time: '1–3 days',
      },
      {
        title: 'Monthly Deduction Review & Challan Deposit',
        desc: 'Each month, we review your payment records, compute the correct TDS amount under applicable sections and rates, and ensure challans are deposited before the 7th of the following month (30th April for March deductions). We verify deposit through OLTAS and flag any short deductions immediately.',
        time: 'Monthly — by 7th',
      },
      {
        title: 'Data Compilation & Reconciliation',
        desc: 'Before quarterly filing, we compile all deductee records, match them against deposited challans, and reconcile totals. PAN validation is performed to avoid invalid PAN penalties, and any discrepancies between your books and the challan register are resolved.',
        time: '3–5 days',
      },
      {
        title: 'Return Preparation & Validation',
        desc: 'Using the latest FVU (File Validation Utility) released by NSDL, we prepare the quarterly return in the prescribed format. The return is validated for structural errors, PAN mismatches, challan inconsistencies, and section-wise rate accuracy before generating the final file.',
        time: '2–3 days',
      },
      {
        title: 'E-Filing on TRACES Portal',
        desc: 'The validated return file is uploaded to the TRACES portal along with the digital signature of the authorized person. We ensure the return is accepted without errors and obtain the provisional receipt number as confirmation of successful filing.',
        time: '1 day',
      },
      {
        title: 'Certificate Generation & Distribution',
        desc: 'After the return is processed, we download Form 16 (for salary TDS), Form 16A (for non-salary TDS), or other applicable certificates from TRACES. These certificates are digitally signed and distributed to respective deductees within the statutory timelines.',
        time: '3–7 days after processing',
      },
      {
        title: 'Correction Statements & Defaults Resolution',
        desc: 'If TRACES identifies short deduction defaults, late filing fees, or PAN errors, we prepare and file correction statements promptly. Our team also handles responses to outstanding demand notices and assists with online rectification requests.',
        time: 'As needed',
      },
    ],
    fees: [
      { item: 'Single Quarter TDS Return — Form 24Q or 26Q (up to 25 deductees)', cost: '₹1,500 – ₹2,500' },
      { item: 'Single Quarter TDS Return — Form 24Q or 26Q (26–100 deductees)', cost: '₹2,500 – ₹5,000' },
      { item: 'Single Quarter TDS Return — Form 24Q or 26Q (100+ deductees)', cost: '₹5,000 – ₹12,000' },
      { item: 'Form 27Q — NRI / Foreign Company TDS Return per quarter', cost: '₹3,000 – ₹7,500' },
      { item: 'Form 26QB / 26QC — Property or Rent TDS Statement', cost: '₹1,500 – ₹2,500 per transaction' },
      { item: 'Correction Statement Filing', cost: '₹1,000 – ₹3,000 per correction' },
    ],
    penalties: [
      {
        violation: 'Late filing of quarterly TDS return',
        penalty: 'Late filing fee of ₹200 per day under Section 234E until the return is filed, subject to a maximum equal to the total TDS amount deductible in the statement.',
      },
      {
        violation: 'Failure to deduct TDS or short deduction',
        penalty: 'The deductor is treated as an assessee-in-default. Interest of 1% per month is levied under Section 201(1A) from the date TDS was deductible to the date of actual deduction, plus the TDS amount itself becomes payable.',
      },
      {
        violation: 'TDS deducted but not deposited to government',
        penalty: 'Interest at 1.5% per month under Section 201(1A) from the date of deduction to the date of deposit. Additionally, prosecution under Section 276B may be initiated with imprisonment ranging from 3 months to 7 years.',
      },
      {
        violation: 'Furnishing incorrect information in TDS return',
        penalty: 'Penalty ranging from ₹10,000 to ₹1,00,000 under Section 271H for filing an incorrect TDS statement. This is in addition to the late filing fee if the correction is not made within one year of the prescribed filing date.',
      },
    ],
    advantages: [
      {
        icon: '🤖',
        title: 'Automated Reconciliation Engine',
        desc: 'Our proprietary tools automatically match your payment records with deposited challans and the government\'s OLTAS database, catching mismatches before they trigger demand notices — saving you hours of manual work every quarter.',
      },
      {
        icon: '📜',
        title: 'Timely Certificate Issuance',
        desc: 'We ensure Form 16 and 16A certificates are generated and delivered to your employees and vendors within statutory deadlines — keeping your deductees\' Form 26AS accurate and your relationships professional.',
      },
      {
        icon: '🔍',
        title: 'Proactive Default Management',
        desc: 'Our team continuously monitors your TRACES profile for short deduction defaults, PAN errors, and interest demands. Issues are identified and resolved through correction statements before they escalate into penalty proceedings.',
      },
      {
        icon: '📊',
        title: 'Multi-Section Expertise',
        desc: 'From Section 192 salary TDS to Section 195 NRI payments, our CAs possess in-depth knowledge of all TDS provisions, rates, and thresholds — ensuring the right amount is deducted under the right section every time.',
      },
      {
        icon: '🔐',
        title: 'Secure Data Handling',
        desc: 'Employee salary details, vendor PAN numbers, and financial data are handled with strict access controls and encrypted storage. We follow industry-standard data security practices to protect sensitive deductee information.',
      },
      {
        icon: '💼',
        title: 'End-to-End Deductor Support',
        desc: 'From TAN registration to annual Form 16 distribution, we manage every aspect of your TDS compliance — freeing your finance team to focus on strategic priorities rather than quarterly paperwork.',
      },
    ],
    disadvantages: [
      'TDS compliance involves continuous monthly and quarterly obligations — unlike annual income tax filing, it demands ongoing attention throughout the year, making it resource-intensive for businesses with many transactions.',
      'Frequent changes to TDS rates, thresholds, and sections by the Finance Act and CBDT notifications require deductors to stay constantly updated. Applying an outdated rate even inadvertently leads to short deduction demands.',
      'Reconciliation challenges can arise when challans are deposited under incorrect TAN, wrong assessment year, or incorrect section codes — requiring time-consuming correction procedures with the bank and TRACES.',
      'The TRACES portal occasionally experiences downtime, delayed processing, or technical glitches that can delay return filing, certificate downloads, and correction statement processing beyond planned timelines.',
    ],
    compliance: [
      {
        area: 'Monthly Challan Deposits',
        details: 'TDS deducted during any month must be deposited to the government by the 7th of the following month. For TDS deducted in March, the deposit deadline is 30th April. Government deductors may deposit on the same day as deduction without using a challan.',
      },
      {
        area: 'Quarterly Return Filing Deadlines',
        details: 'TDS returns must be filed quarterly — Q1 (Apr–Jun) by 31st July, Q2 (Jul–Sep) by 31st October, Q3 (Oct–Dec) by 31st January, and Q4 (Jan–Mar) by 31st May. Late filing attracts a fee of ₹200/day under Section 234E.',
      },
      {
        area: 'Certificate Issuance Timelines',
        details: 'Form 16 for salary TDS must be issued to employees by 15th June following the financial year. Form 16A for non-salary TDS must be issued within 15 days from the due date of filing the quarterly TDS return for the relevant quarter.',
      },
      {
        area: 'Lower Deduction Certificate Compliance',
        details: 'When a deductee furnishes a certificate under Section 197 for lower or nil TDS deduction, the deductor must apply the specified rate and report the certificate number in the quarterly return. Expired or invalid certificates must not be applied.',
      },
    ],
    faqs: [
      {
        q: 'What is the difference between TDS and TCS?',
        a: 'TDS (Tax Deducted at Source) is deducted by the payer at the time of making a payment — such as salary, rent, or professional fees. TCS (Tax Collected at Source) is collected by the seller from the buyer at the time of sale of specified goods like timber, scrap, minerals, or motor vehicles above ₹10 lakh. Both serve as advance tax collection mechanisms but apply in different transactional contexts.',
      },
      {
        q: 'What happens if I forget to deduct TDS on a payment?',
        a: 'If TDS is not deducted when it should have been, you are treated as an assessee-in-default under Section 201(1). Interest at 1% per month is levied from the date the tax was deductible to the date of actual deduction. Additionally, the expense on which TDS was not deducted may be disallowed under Section 40(a)(ia) while computing your business income, increasing your own tax liability.',
      },
      {
        q: 'Can I file a correction statement for a previous quarter?',
        a: 'Yes. Correction statements can be filed on the TRACES portal to rectify errors in PAN details, challan information, deductee records, or deductor details. There is no limit on the number of corrections that can be filed. However, it is advisable to file corrections promptly to avoid accumulation of defaults and interest.',
      },
      {
        q: 'How do I check if TDS deposited by me is reflecting in the deductee\'s Form 26AS?',
        a: 'After your TDS return is processed by TRACES, the TDS credit reflects in each deductee\'s Form 26AS within 7 to 10 working days. You can verify this by logging into TRACES and viewing the deductee-wise status. If credits are not reflecting, it usually indicates a PAN mismatch or challan mapping error that can be corrected through a correction statement.',
      },
      {
        q: 'What is the penalty for filing a TDS return late?',
        a: 'Under Section 234E, a late filing fee of ₹200 per day is charged from the due date until the date of filing, capped at the total TDS amount in the return. Additionally, under Section 271H, a penalty between ₹10,000 and ₹1,00,000 may be imposed if the return is filed more than one year after the due date or contains incorrect information.',
      },
      {
        q: 'Do I need a TAN even if I only deduct TDS once?',
        a: 'Yes. Any person responsible for deducting or collecting tax at source must obtain a TAN (Tax Deduction and Collection Account Number) under Section 203A. This applies even for one-time obligations such as TDS on property purchase (Form 26QB) or rent (Form 26QC). Quoting TAN is mandatory on challans, TDS returns, and certificates.',
      },
      {
        q: 'What rate of TDS applies if the deductee does not provide a PAN?',
        a: 'Under Section 206AA, if the deductee does not furnish a PAN, TDS must be deducted at the higher of the prescribed rate, 20%, or the rate in force. This significantly increases the tax burden on the deductee and creates additional compliance risk for the deductor if the higher rate is not applied correctly.',
      },
      {
        q: 'Can Your Professional help with TDS on payments to foreign parties?',
        a: 'Yes. Our team specializes in cross-border TDS under Section 195, including determining taxability under domestic law and applicable DTAA, computing the correct withholding rate, obtaining lower deduction certificates from the Assessing Officer, and filing Form 27Q. We also assist with Form 15CA/15CB certification required for foreign remittances.',
      },
    ],
    cta: {
      heading: 'Simplify Your TDS Compliance Today',
      subheading:
        'From challan deposits to certificate distribution, Your Professional manages your entire TDS lifecycle — ensuring zero defaults, timely filings, and complete peace of mind for your business.',
      features: [
        'Quarterly return filing for Forms 24Q, 26Q, 27Q, and more',
        'Automated challan reconciliation and default resolution',
        'Timely Form 16 and 16A generation and delivery',
        'Expert guidance on lower deduction certificates and NRI withholding',
      ],
    },
  },
'pf-return-filing': {
        slug: 'pf-return-filing',
        title: 'PF Return Filing',
        subtitle:
            'Streamline your Provident Fund compliance with Your Professional — timely, accurate PF return filing that keeps your business penalty-free and your employees protected.',
        heroFeatures: [
            'End-to-end EPF & EDLI return preparation and submission',
            'Monthly and annual PF return filing with zero-error guarantee',
            'Dedicated compliance experts handling ECR generation and reconciliation',
            'Real-time tracking dashboard for all PF filings and challans',
            'Seamless integration with your existing payroll systems',
        ],
        overview: {
            heading: 'Hassle-Free Provident Fund Return Filing for Every Employer',
            paragraphs: [
                'Every establishment employing 20 or more individuals is mandated under the Employees\u2019 Provident Funds and Miscellaneous Provisions Act, 1952 to register with the Employees\u2019 Provident Fund Organisation (EPFO) and file periodic PF returns. These returns capture the contribution details of both employers and employees, ensuring that retirement savings are accurately recorded and credited. Filing PF returns on time is not merely a regulatory formality — it forms the backbone of employee welfare and is closely scrutinised during audits, due diligence exercises, and government inspections.',
                'At Your Professional, we take PF return filing off your plate entirely. Our team of payroll and statutory compliance specialists manages everything from Electronic Challan cum Return (ECR) generation to contribution reconciliation and submission on the EPFO Unified Portal. We handle monthly filings, annual returns, KYC updates, and transfer claims with meticulous attention to detail, ensuring that each filing matches your payroll records exactly. Whether you have 20 employees or 20,000, our processes scale seamlessly to accommodate organisations of every size.',
                'Non-compliance with PF filing obligations can attract significant financial penalties, interest charges on delayed deposits, and even prosecution of responsible officers. By partnering with Your Professional, you mitigate these risks completely — our proactive reminder system and multi-level verification workflow mean that no deadline is ever missed and no discrepancy goes unnoticed. Focus on growing your business while we ensure your PF compliance stays impeccable.',
            ],
            highlights: [
                { icon: '🛡️', text: '100% compliance rate with zero missed deadlines across all client accounts' },
                { icon: '⚡', text: 'ECR files generated and validated within 24 hours of payroll finalisation' },
                { icon: '📊', text: 'Comprehensive monthly reconciliation reports delivered to your inbox' },
                { icon: '🤝', text: 'Dedicated relationship manager for every client account' },
            ],
        },
        types: [
            {
                title: 'Monthly ECR Filing',
                desc: 'The Electronic Challan cum Return is the primary monthly filing that every PF-registered establishment must submit. It contains employee-wise contribution details for EPF, EPS, and EDLI. Your Professional prepares the ECR from your payroll data, validates it against EPFO norms, and uploads it on the Unified Portal before the 15th of each month.',
            },
            {
                title: 'Annual PF Return',
                desc: 'Employers are required to file an annual return consolidating 12 months of contribution data along with details of new joiners, exits, and transfers during the financial year. This comprehensive filing is essential for EPFO audits and helps employees verify their annual PF statements. Our team reconciles the full year\'s data for accuracy.',
            },
            {
                title: 'PF Combined Challan Filing',
                desc: 'The combined challan covers contributions toward EPF, EPS (Pension), EDLI (Insurance), and administrative charges in a single payment instrument. Accurate challan preparation ensures correct allocation of funds across all three schemes and avoids misallocation issues that can delay employee claims.',
            },
            {
                title: 'International Worker (IW) Return',
                desc: 'Establishments employing international workers must file additional returns under the special provisions for International Workers under the EPF Scheme. These returns carry different contribution rates and exemption criteria. Your Professional ensures full compliance for organisations with a global workforce.',
            },
        ],
        eligibility: [
            'Every establishment employing 20 or more persons in any industry notified under Schedule I of the EPF Act, 1952',
            'Establishments voluntarily registered with EPFO regardless of employee count',
            'Contractors and sub-contractors supplying labour to principal employers covered under the Act',
            'Cooperative societies, trusts, and NGOs with eligible employee strength',
            'Establishments where the Central Government has extended PF provisions by special notification',
            'Factories, shops, and commercial establishments in states where PF applicability thresholds have been lowered',
            'Organisations that have obtained exemption under Section 17 of the EPF Act but are still required to file consolidated returns',
        ],
        documents: [
            {
                category: 'Employer Records',
                items: [
                    'PF establishment registration certificate and code number',
                    'Digital Signature Certificate (DSC) of the authorised signatory',
                    'Company PAN card and GST registration certificate',
                    'Bank account details linked to the PF establishment',
                    'Board resolution authorising the PF compliance officer',
                ],
            },
            {
                category: 'Employee Data',
                items: [
                    'Universal Account Number (UAN) of every contributing member',
                    'Aadhaar-linked KYC details — Aadhaar, PAN, and bank account of each employee',
                    'Date of joining, date of exit, and reason for leaving for each employee',
                    'Monthly salary breakup showing basic wages, DA, and other PF-eligible components',
                ],
            },
            {
                category: 'Payroll & Financial Records',
                items: [
                    'Finalised monthly payroll register with gross and net salary details',
                    'Previous month\'s ECR acknowledgement receipts and challan payment confirmations',
                    'Arrear or supplementary salary sheets, if applicable during the filing period',
                    'Bank challan or NEFT transaction proof for PF contribution deposits',
                ],
            },
        ],
        process: [
            {
                title: 'Payroll Data Collection',
                desc: 'We collect your finalised payroll register and employee master data, including UAN details, salary breakups, and any changes such as new joiners, exits, or salary revisions during the filing period.',
                time: '1-2 days',
            },
            {
                title: 'Data Validation & Reconciliation',
                desc: 'Our compliance team validates employee KYC status on the EPFO portal, reconciles contribution amounts against applicable wage ceilings, and flags any discrepancies for your review before proceeding.',
                time: '1-2 days',
            },
            {
                title: 'ECR File Preparation',
                desc: 'We generate the Electronic Challan cum Return file in the prescribed EPFO format, ensuring that EPF, EPS, and EDLI contributions are computed correctly for each employee based on their wage structure.',
                time: '1 day',
            },
            {
                title: 'ECR Upload & Challan Generation',
                desc: 'The validated ECR file is uploaded to the EPFO Unified Portal. Upon successful upload, the system generates a combined challan reflecting total employer and employee contributions along with administrative charges.',
                time: '1 day',
            },
            {
                title: 'Payment Processing',
                desc: 'We coordinate with your finance team to ensure the challan payment is made through the approved banking channel (online SBI or authorised bank) before the statutory deadline of the 15th of the following month.',
                time: '1-2 days',
            },
            {
                title: 'Acknowledgement & Reporting',
                desc: 'Post-payment, we download the EPFO-generated acknowledgement receipt and the Transaction Reference Number (TRRN). A detailed compliance report summarising contributions, payment status, and any pending actions is shared with you.',
                time: '1 day',
            },
            {
                title: 'Ongoing Monitoring & Support',
                desc: 'We monitor your EPFO portal for any notices, discrepancies, or employee grievances related to PF credits. Quarterly reconciliation reviews are conducted to ensure year-round accuracy and audit readiness.',
                time: 'Ongoing',
            },
        ],
        fees: [
            { item: 'Monthly PF Return Filing (up to 50 employees)', cost: '₹1,500 - ₹2,500 per month' },
            { item: 'Monthly PF Return Filing (51-200 employees)', cost: '₹2,500 - ₹5,000 per month' },
            { item: 'Monthly PF Return Filing (201-500 employees)', cost: '₹5,000 - ₹10,000 per month' },
            { item: 'Annual PF Return Preparation & Filing', cost: '₹3,000 - ₹8,000 per annum' },
            { item: 'PF Registration (New Establishment)', cost: '₹2,999 - ₹4,999 one-time' },
            { item: 'Employee KYC Update & UAN Activation (per batch)', cost: '₹500 - ₹1,500 per batch' },
        ],
        penalties: [
            {
                violation: 'Late deposit of PF contributions beyond the 15th of the following month',
                penalty: 'Interest at 12% per annum on the outstanding amount for each day of delay under Section 7Q, plus damages ranging from 5% to 25% of arrears depending on delay duration under Section 14B',
            },
            {
                violation: 'Non-filing or delayed filing of monthly Electronic Challan cum Return',
                penalty: 'Penalty up to ₹5,000 per return under the EPFO compliance framework; repeated defaults may trigger inspection and prosecution proceedings',
            },
            {
                violation: 'Failure to register with EPFO when employee strength crosses the statutory threshold',
                penalty: 'Imprisonment up to 1 year and/or fine up to ₹5,000 under Section 14(1A); back-dated contributions with interest become immediately payable',
            },
            {
                violation: 'Deducting employee PF contribution from wages but not depositing it with EPFO',
                penalty: 'Criminal prosecution under Section 405/406 of the Indian Penal Code (criminal breach of trust) in addition to EPFO penalties; imprisonment up to 3 years and fine',
            },
        ],
        advantages: [
            {
                icon: '✅',
                title: 'Guaranteed Deadline Compliance',
                desc: 'Our automated reminder system and dedicated filing calendar ensure that every monthly and annual return is filed well before the statutory deadline, eliminating the risk of late-filing penalties and interest charges.',
            },
            {
                icon: '🔍',
                title: 'Error-Free Filings',
                desc: 'Multi-level verification by experienced PF compliance professionals catches discrepancies in wage calculations, UAN mismatches, and KYC gaps before submission, resulting in clean filings that pass EPFO scrutiny.',
            },
            {
                icon: '💰',
                title: 'Cost-Effective Outsourcing',
                desc: 'Hiring an in-house PF compliance officer involves salary, training, and software costs. Our outsourced model delivers superior accuracy at a fraction of the cost, freeing your HR team for strategic initiatives.',
            },
            {
                icon: '📈',
                title: 'Scalable for Growing Teams',
                desc: 'Whether you are onboarding 5 employees or 500 in a single month, our processes and technology scale effortlessly. We handle bulk UAN generation, mass KYC updates, and high-volume ECR filings with equal precision.',
            },
            {
                icon: '🧾',
                title: 'Audit-Ready Documentation',
                desc: 'We maintain a complete digital trail of every ECR, challan, acknowledgement, and reconciliation report. During PF inspections or financial audits, all documentation is available at a moment\'s notice.',
            },
            {
                icon: '🔐',
                title: 'Data Security & Confidentiality',
                desc: 'Employee salary and identity data is handled with bank-grade encryption and strict access controls. Our processes comply with data protection best practices, ensuring that sensitive payroll information is never compromised.',
            },
        ],
        disadvantages: [
            'Employers retain ultimate legal liability for PF compliance even when filing is outsourced; the compliance officer named in EPFO records remains personally accountable for any defaults.',
            'Frequent changes in EPFO portal interfaces, contribution rate notifications, and exemption rules require continuous coordination between the employer and the service provider to avoid filing errors.',
            'Organisations with complex payroll structures — such as multiple wage components, variable pay, or international worker provisions — may need custom configurations that increase turnaround time.',
            'Dependency on timely payroll finalisation by the employer; any delay in sharing accurate payroll data directly impacts the filing timeline and may result in avoidable penalties.',
        ],
        compliance: [
            {
                area: 'Monthly ECR Filing',
                details: 'The Electronic Challan cum Return must be uploaded and the corresponding challan paid on or before the 15th of the month following the wage month. For example, contributions for January salaries must be deposited by 15th February.',
            },
            {
                area: 'Employee KYC Maintenance',
                details: 'All contributing members must have their Aadhaar, PAN, and bank account details verified and linked to their Universal Account Number. KYC updates for new employees should be completed within 30 days of joining.',
            },
            {
                area: 'Annual Return & Contribution Statement',
                details: 'Employers must file an annual return consolidating the year\'s contribution data. Additionally, employees should be able to verify their annual PF passbook statement, and employers must ensure no discrepancies exist between payroll records and EPFO ledgers.',
            },
            {
                area: 'Record Retention & Inspection Readiness',
                details: 'PF-related records — including wage registers, attendance records, ECR acknowledgements, and challan receipts — must be maintained for a minimum of 5 years and produced during EPFO inspections or audits upon request.',
            },
        ],
        faqs: [
            {
                q: 'What is PF return filing and why is it mandatory for employers?',
                a: 'PF return filing is the process of submitting employee-wise contribution details to the Employees\u2019 Provident Fund Organisation through the Electronic Challan cum Return system. It is mandatory under the EPF Act, 1952 for every registered establishment to ensure that employee retirement savings are accurately recorded, credited to the correct accounts, and that statutory contributions are deposited on time. Failure to file attracts penalties, interest, and potential prosecution.',
            },
            {
                q: 'What is the deadline for filing monthly PF returns?',
                a: 'Employers must upload the ECR and pay the corresponding challan on or before the 15th of the month immediately following the wage month. For instance, if salaries for March are disbursed in March, the ECR must be filed and contributions deposited by 15th April. If the 15th falls on a public holiday, the immediately preceding working day becomes the effective deadline.',
            },
            {
                q: 'What happens if an employer misses the PF filing deadline?',
                a: 'Late deposits attract interest at 12% per annum under Section 7Q of the EPF Act, calculated on a daily basis from the due date until the actual date of payment. In addition, the EPFO may levy damages under Section 14B ranging from 5% to 25% of the arrears depending on the duration of delay. Persistent defaulters may face prosecution with imprisonment up to 3 years.',
            },
            {
                q: 'Can Your Professional handle PF filing for multiple branches and states?',
                a: 'Absolutely. We manage PF compliance for organisations operating across multiple locations and state jurisdictions. Each branch\'s PF establishment code is tracked separately in our system, and we prepare and file individual ECRs for every code. Consolidated dashboards give you a unified view of compliance status across all your branches.',
            },
            {
                q: 'What information do I need to provide each month for PF return filing?',
                a: 'You need to share your finalised payroll register showing each employee\'s basic wages, dearness allowance, and other PF-eligible components. Additionally, we need details of new joiners with their UAN and KYC documents, information about employees who have exited during the month, and any salary revisions or arrear payments. The more timely and accurate this data, the smoother the filing process.',
            },
            {
                q: 'Is PF registration mandatory for establishments with fewer than 20 employees?',
                a: 'While the EPF Act mandates registration for establishments with 20 or more employees, smaller organisations can voluntarily register with EPFO. Once voluntarily registered, the establishment must continue to comply with all PF filing obligations as if it were mandatorily covered. Some state-specific rules may also apply lower thresholds for certain industries.',
            },
            {
                q: 'How does Your Professional ensure the accuracy of PF filings?',
                a: 'We employ a three-tier verification process. First, our payroll analysts validate salary data against PF-eligible wage components and statutory ceilings. Second, our compliance officers cross-check UAN details, KYC status, and member activation on the EPFO portal. Third, a senior reviewer audits the final ECR file before upload. This multi-level approach results in near-zero rejection rates.',
            },
            {
                q: 'What is the difference between EPF, EPS, and EDLI contributions?',
                a: 'EPF (Employees\u2019 Provident Fund) is the core retirement savings component where both employer and employee contribute 12% of basic wages. EPS (Employees\u2019 Pension Scheme) is funded by diverting 8.33% from the employer\'s share toward a pension fund. EDLI (Employees\u2019 Deposit Linked Insurance) provides life insurance coverage with the employer contributing 0.50% of basic wages. All three are filed together through the ECR.',
            },
        ],
        cta: {
            heading: 'Never Miss a PF Filing Deadline Again',
            subheading:
                'Let Your Professional handle your Provident Fund compliance with precision and care — so you can focus on building a great workplace.',
            features: [
                'Zero-penalty track record across 10,000+ monthly filings',
                'Dedicated compliance manager assigned to your account',
                'Monthly reconciliation reports and audit-ready documentation',
                'Transparent pricing with no hidden charges',
                'Free initial PF health check for new clients',
            ],
        },
    },

    'itr-2-form-filing': {
        slug: 'itr-2-form-filing',
        title: 'ITR 2 Form Filing',
        subtitle:
            'Expert ITR-2 filing services by Your Professional — accurately report capital gains, foreign income, multiple house properties, and complex income structures with confidence and ease.',
        heroFeatures: [
            'Comprehensive ITR-2 preparation for individuals and HUFs with capital gains',
            'Expert handling of foreign income, assets, and DTAA benefit claims',
            'Accurate computation of long-term and short-term capital gains across asset classes',
            'Dedicated tax professionals ensuring maximum legitimate deductions',
            'Post-filing support including refund tracking and notice management',
        ],
        overview: {
            heading: 'Precise ITR-2 Filing for Individuals with Complex Income Streams',
            paragraphs: [
                'Income Tax Return Form 2 (ITR-2) is prescribed by the Central Board of Direct Taxes for individuals and Hindu Undivided Families (HUFs) whose income profile extends beyond simple salary and single house property. If you have earned capital gains from the sale of shares, mutual funds, real estate, or other assets — or if you receive income from foreign sources, hold assets abroad, or own more than one house property — ITR-2 is the form you are required to file. Its detailed schedules capture nuances that simpler forms like ITR-1 cannot accommodate, making accuracy in preparation absolutely critical.',
                'At Your Professional, our chartered accountants and tax specialists bring deep expertise in navigating the complexities of ITR-2. From computing indexed long-term capital gains on property sales to applying Double Taxation Avoidance Agreement (DTAA) provisions for NRIs and residents with overseas income, we ensure that every schedule is filled correctly and every eligible deduction is claimed. We work with individuals, salaried professionals with stock portfolios, freelancers earning foreign currency, and HUFs with diversified income streams.',
                'Filing an incorrect or incomplete ITR-2 can lead to scrutiny notices under Section 143(1) or 143(2), demands for additional tax, or loss of legitimate refunds. Our meticulous preparation process, combined with a thorough pre-filing review, minimises the risk of errors and ensures that your return withstands any level of assessment. With Your Professional, tax season becomes a smooth, stress-free experience rather than a last-minute scramble.',
            ],
            highlights: [
                { icon: '📋', text: 'Over 15,000 ITR-2 returns filed with 99.8% accuracy rate' },
                { icon: '💹', text: 'Specialised capital gains computation across equities, debt, real estate, and crypto' },
                { icon: '🌍', text: 'Expert DTAA application for income earned in 90+ treaty countries' },
                { icon: '🔔', text: 'Proactive deadline alerts and refund status tracking for every client' },
            ],
        },
        types: [
            {
                title: 'Salaried Individual with Capital Gains',
                desc: 'If you are a salaried employee who has also earned short-term or long-term capital gains from the sale of listed equity shares, mutual fund units, bonds, or other securities during the financial year, ITR-2 is mandatory. This scenario is increasingly common as employees participate in ESOPs, systematic investment plans, and direct equity trading.',
            },
            {
                title: 'Individual with Multiple House Properties',
                desc: 'Taxpayers who own more than one house property — whether self-occupied, let out, or deemed to be let out — must file ITR-2 to correctly report rental income, claim deductions under Section 24(b) for home loan interest on each property, and compute the net annual value for tax purposes.',
            },
            {
                title: 'NRI or Resident with Foreign Income and Assets',
                desc: 'Individuals who have earned income from sources outside India, hold foreign bank accounts, own immovable property abroad, or have signing authority over overseas financial accounts are required to disclose these in Schedule FA and Schedule FSI of ITR-2. DTAA relief can be claimed to avoid double taxation.',
            },
            {
                title: 'Individual with Income from Capital Gains on Real Estate',
                desc: 'Sale of land, residential property, commercial property, or any immovable asset triggers capital gains that must be reported in ITR-2. Computation involves indexation benefits under Section 48, exemptions under Sections 54, 54EC, and 54F, and stamp duty valuation adjustments under Section 50C.',
            },
            {
                title: 'HUF with Diversified Income',
                desc: 'Hindu Undivided Families earning income from salary, house property, capital gains, and other sources — but not from business or profession — must file ITR-2. The HUF is treated as a separate tax entity, and our team ensures that partition, coparcenary income, and HUF-specific deductions are handled accurately.',
            },
        ],
        eligibility: [
            'Individuals and HUFs with total income exceeding the basic exemption limit who have earned capital gains during the financial year',
            'Salaried individuals who have also earned income from the sale of shares, mutual funds, real estate, gold, or any other capital asset',
            'Taxpayers owning more than one house property, regardless of whether additional properties are let out or vacant',
            'Residents and NRIs who have earned income from sources outside India or hold assets in foreign jurisdictions',
            'Individuals who are directors in a company but do not have income from business or profession',
            'Taxpayers who have held unlisted equity shares at any time during the financial year',
            'Individuals claiming tax treaty relief under the Double Taxation Avoidance Agreement for foreign income',
            'Agricultural income exceeding ₹5,000 when total income (excluding agriculture) exceeds the basic exemption limit',
        ],
        documents: [
            {
                category: 'Income & Tax Documents',
                items: [
                    'Form 16 from employer(s) for salary income details and TDS deducted',
                    'Form 26AS / Annual Information Statement (AIS) reflecting all TDS, TCS, and high-value transactions',
                    'Interest certificates from banks and post offices for savings account and fixed deposit interest',
                    'Dividend statements from mutual funds and equity holdings',
                    'Rental income details including tenant agreements, municipal tax receipts, and maintenance expenses',
                ],
            },
            {
                category: 'Capital Gains Documentation',
                items: [
                    'Broker contract notes and consolidated trading statements for equity and derivative transactions',
                    'Mutual fund capital gains statements (available from fund houses or CAMS/KFintech)',
                    'Sale and purchase deeds for immovable property along with stamp duty valuation documents',
                    'Cost of acquisition records, improvement costs, and indexation worksheets for each capital asset',
                    'Proof of reinvestment for claiming exemptions under Sections 54, 54EC, or 54F',
                ],
            },
            {
                category: 'Foreign Income & Deduction Proofs',
                items: [
                    'Foreign salary slips, employment contracts, or income certificates from overseas employers',
                    'Foreign bank account statements and details of all assets held outside India',
                    'Tax residency certificate and proof of taxes paid in foreign jurisdictions for DTAA claims',
                    'Section 80C proofs — PPF, ELSS, life insurance premium receipts, tuition fee receipts',
                    'Section 80D health insurance premium receipts, 80E education loan interest certificates, and 80G donation receipts',
                ],
            },
        ],
        process: [
            {
                title: 'Initial Consultation & Document Upload',
                desc: 'We begin with a detailed consultation to understand your income profile, investment portfolio, and any foreign income or assets. You upload all relevant documents through our secure client portal, and we create a personalised checklist to ensure nothing is missed.',
                time: '1-2 days',
            },
            {
                title: 'Income Classification & Computation',
                desc: 'Our tax specialists classify your income under the five heads — salary, house property, capital gains, other sources, and exempt income. Each income stream is computed according to the applicable rules, rates, and exemptions for the assessment year.',
                time: '2-3 days',
            },
            {
                title: 'Capital Gains Analysis',
                desc: 'We meticulously compute short-term and long-term capital gains for every asset class — listed equity, unlisted shares, mutual funds, real estate, gold, and other assets. Indexation benefits, grandfathering provisions, and set-off of capital losses are applied to minimise your tax liability legally.',
                time: '2-3 days',
            },
            {
                title: 'Deduction Optimisation & Tax Planning',
                desc: 'We review all eligible deductions under Sections 80C through 80U, rebates under Section 87A, and exemptions under Sections 10 and 54 to ensure your return reflects the minimum legitimate tax outgo. For those with foreign income, DTAA relief is computed and applied.',
                time: '1-2 days',
            },
            {
                title: 'Draft Return Preparation & Client Review',
                desc: 'A complete draft ITR-2 is prepared and shared with you for review. We walk you through the computation, highlight key figures, and explain any tax obligations or refund expectations. Corrections or additions are incorporated based on your feedback.',
                time: '1-2 days',
            },
            {
                title: 'E-Filing & Verification',
                desc: 'Upon your approval, we e-file the ITR-2 on the Income Tax Department portal. E-verification is completed immediately via Aadhaar OTP, net banking, or Digital Signature Certificate, eliminating the need to send a physical ITR-V to CPC Bengaluru.',
                time: '1 day',
            },
            {
                title: 'Post-Filing Support & Refund Tracking',
                desc: 'After filing, we monitor the processing status of your return, track any refund due, and respond to preliminary notices or deficiency communications from CPC. If a revised return becomes necessary due to new information, we handle that as well within the revision window.',
                time: 'Ongoing',
            },
        ],
        fees: [
            { item: 'ITR-2 Filing — Salaried with Capital Gains (Basic)', cost: '₹2,499 - ₹3,999' },
            { item: 'ITR-2 Filing — Multiple House Properties & Investments', cost: '₹3,999 - ₹5,999' },
            { item: 'ITR-2 Filing — NRI with Foreign Income & DTAA Claims', cost: '₹5,999 - ₹9,999' },
            { item: 'ITR-2 Filing — Complex Capital Gains (Real Estate + Securities)', cost: '₹4,999 - ₹7,999' },
            { item: 'Revised Return Filing (ITR-2)', cost: '₹1,999 - ₹3,499' },
            { item: 'Tax Notice Response & Rectification (per notice)', cost: '₹2,999 - ₹5,999' },
        ],
        penalties: [
            {
                violation: 'Filing ITR-2 after the due date of 31st July (non-audit cases)',
                penalty: 'Late filing fee of ₹5,000 under Section 234F if filed after the due date but before 31st December; ₹10,000 if filed after 31st December. For taxpayers with total income up to ₹5 lakh, the fee is capped at ₹1,000.',
            },
            {
                violation: 'Under-reporting or misreporting of income in ITR-2',
                penalty: 'Penalty of 50% of the tax payable on under-reported income under Section 270A. For misreporting (e.g., concealment, false claims), the penalty increases to 200% of the tax payable on the misreported amount.',
            },
            {
                violation: 'Non-disclosure of foreign assets or income in Schedule FA / FSI',
                penalty: 'Penalty of ₹10 lakh under the Black Money (Undisclosed Foreign Income and Assets) and Imposition of Tax Act, 2015. Additionally, undisclosed foreign income is taxed at a flat rate of 30% plus applicable surcharge and cess.',
            },
            {
                violation: 'Interest on delayed payment of self-assessment tax',
                penalty: 'Interest at 1% per month or part thereof under Section 234A (delay in filing), Section 234B (shortfall in advance tax), and Section 234C (deferment of advance tax instalments) calculated on the outstanding tax liability.',
            },
        ],
        advantages: [
            {
                icon: '🎯',
                title: 'Precision in Capital Gains Computation',
                desc: 'Capital gains calculations involve indexation, grandfathering, set-off rules, and multiple tax rates depending on asset type and holding period. Our specialists handle these intricacies with precision, ensuring you pay only what is legally due — nothing more.',
            },
            {
                icon: '🌐',
                title: 'Expert Foreign Income & DTAA Handling',
                desc: 'For NRIs and residents with overseas earnings, navigating treaty provisions, foreign tax credits, and Schedule FA disclosures can be daunting. Our team has deep expertise in DTAA provisions across 90+ countries, ensuring compliant and tax-efficient filings.',
            },
            {
                icon: '💡',
                title: 'Maximum Legitimate Deductions',
                desc: 'Many taxpayers miss deductions they are entitled to — from Section 80CCD(1B) NPS contributions to Section 80TTA interest exemptions. We conduct a comprehensive deduction review to ensure every eligible benefit is claimed in your return.',
            },
            {
                icon: '🛡️',
                title: 'Scrutiny-Proof Preparation',
                desc: 'Every ITR-2 we prepare undergoes a multi-point quality check against Form 26AS, AIS, and TIS data. Discrepancies are resolved before filing, dramatically reducing the likelihood of receiving a notice under Section 143(1) or being selected for scrutiny.',
            },
            {
                icon: '⏰',
                title: 'Timely Filing with Zero Stress',
                desc: 'We begin preparation well before the filing deadline, with structured timelines and milestone reminders. You never have to worry about last-minute rushes, portal crashes, or missed deadlines when Your Professional manages your ITR-2.',
            },
            {
                icon: '📞',
                title: 'Year-Round Tax Support',
                desc: 'Our engagement does not end with filing. We provide year-round support for advance tax calculations, investment planning from a tax perspective, responding to income tax notices, and filing revised returns when needed.',
            },
        ],
        disadvantages: [
            'ITR-2 is substantially more complex than ITR-1, requiring detailed schedules for capital gains, foreign assets, and multiple income sources — this means preparation takes longer and requires more documentation from the taxpayer.',
            'Taxpayers who file ITR-2 with high-value capital gains or foreign income disclosures are statistically more likely to be selected for scrutiny assessment, necessitating thorough record-keeping for up to 6-7 years.',
            'Frequent changes in capital gains tax rules — such as grandfathering provisions, surcharge modifications, and new asset class definitions — require the taxpayer and advisor to stay updated every assessment year.',
            'Errors in Schedule FA (foreign assets) or Schedule CG (capital gains) can result in disproportionately high penalties, making professional assistance essential but adding to the overall cost of compliance.',
        ],
        compliance: [
            {
                area: 'Filing Deadline Adherence',
                details: 'ITR-2 must be filed on or before 31st July of the assessment year for individuals and HUFs not subject to tax audit. For taxpayers subject to audit or with international transactions, extended deadlines of 31st October or 30th November may apply. Late filing attracts fees under Section 234F.',
            },
            {
                area: 'Advance Tax Obligations',
                details: 'If your estimated tax liability for the year exceeds ₹10,000, you are required to pay advance tax in quarterly instalments — 15% by 15th June, 45% by 15th September, 75% by 15th December, and 100% by 15th March. Failure to pay advance tax on time results in interest under Sections 234B and 234C.',
            },
            {
                area: 'Foreign Asset Reporting',
                details: 'Residents and ordinarily residents must mandatorily disclose all foreign bank accounts, financial interests, immovable property, and other assets held outside India in Schedule FA of ITR-2. This disclosure is required even if the foreign assets do not generate any income during the year.',
            },
            {
                area: 'Record Retention Requirements',
                details: 'All supporting documents — including Form 16, capital gains statements, property sale deeds, foreign income proofs, and deduction receipts — must be retained for a minimum of 6 years from the end of the relevant assessment year, or longer if proceedings are pending.',
            },
        ],
        faqs: [
            {
                q: 'Who should file ITR-2 instead of ITR-1?',
                a: 'You must file ITR-2 if you are an individual or HUF with income from capital gains, more than one house property, foreign income or assets, agricultural income exceeding ₹5,000 (when other income also exceeds the exemption limit), or if you are a director in a company. ITR-1 is only for resident individuals with total income up to ₹50 lakh from salary, one house property, other sources, and agricultural income up to ₹5,000.',
            },
            {
                q: 'Can I file ITR-2 if I have income from freelancing or a side business?',
                a: 'No. If you have any income from business or profession — including freelancing, consulting, or a sole proprietorship — you must file ITR-3 instead of ITR-2. ITR-2 is exclusively for individuals and HUFs who do not have business or professional income. However, if your only non-salary income is capital gains, rental income, or interest income, ITR-2 is the correct form.',
            },
            {
                q: 'How are capital gains on mutual funds and shares taxed in ITR-2?',
                a: 'Listed equity shares and equity-oriented mutual funds held for more than 12 months qualify as long-term capital gains (LTCG), taxed at 12.5% on gains exceeding ₹1.25 lakh per year. Short-term gains on these are taxed at 20%. For debt mutual funds and unlisted securities, LTCG (holding period over 24 months) are taxed at 12.5%, while short-term gains are added to your regular income and taxed at slab rates. All these computations are captured in Schedule CG of ITR-2.',
            },
            {
                q: 'What is Schedule FA and when is it mandatory?',
                a: 'Schedule FA (Foreign Assets) is a mandatory disclosure schedule in ITR-2 for residents and ordinarily residents who hold any asset outside India at any time during the financial year. This includes foreign bank accounts, securities, immovable property, financial interests in entities, trusts, and even signing authority over overseas accounts. Non-disclosure can attract penalties under the Black Money Act, 2015.',
            },
            {
                q: 'Can I carry forward capital losses if I file ITR-2?',
                a: 'Yes, but only if you file your ITR-2 on or before the due date. Capital losses — both short-term and long-term — can be carried forward for up to 8 assessment years and set off against future capital gains. Short-term losses can be set off against both short-term and long-term gains, while long-term losses can only be set off against long-term gains. Belated filing forfeits the right to carry forward losses.',
            },
            {
                q: 'How does Your Professional handle DTAA claims for NRIs?',
                a: 'We analyse the specific Double Taxation Avoidance Agreement between India and the country where you earned income or paid taxes. Depending on the treaty, we claim relief through the exemption method or the tax credit method in Schedule TR of ITR-2. We also ensure that you obtain the necessary Tax Residency Certificate from the foreign country and file Form 67 before the due date to claim foreign tax credit.',
            },
            {
                q: 'What if I discover an error after my ITR-2 has been filed?',
                a: 'You can file a revised return under Section 139(5) before the end of the relevant assessment year or before the completion of assessment, whichever is earlier. Your Professional handles revised return preparation promptly — we compare the original and revised computations, ensure that the correct form is used, and re-verify the return electronically. There is no penalty for genuinely revising a return.',
            },
            {
                q: 'How long does it take to get a refund after filing ITR-2?',
                a: 'Refund timelines depend on the Income Tax Department\'s processing queue and the accuracy of your return. Typically, refunds are processed within 30 to 60 days of e-verification for returns with no discrepancies. If there are mismatches between your return and Form 26AS or AIS data, processing may take longer. Your Professional monitors your refund status and follows up on delayed refunds through the appropriate channels.',
            },
        ],
        cta: {
            heading: 'File Your ITR-2 with Confidence and Clarity',
            subheading:
                'From capital gains to foreign income — Your Professional ensures every detail of your ITR-2 is accurate, optimised, and filed on time.',
            features: [
                '99.8% accuracy rate across 15,000+ ITR-2 filings',
                'Dedicated chartered accountant assigned to your return',
                'Comprehensive capital gains computation across all asset classes',
                'DTAA expertise for NRI and foreign income scenarios',
                'Post-filing refund tracking and notice management included',
            ],
        },
    },
'itr-7-form-filing': {
        slug: 'itr-7-form-filing',
        title: 'ITR 7 Form Filing',
        subtitle: 'File your Income Tax Return Form 7 seamlessly with Your Professional — designed exclusively for trusts, political parties, charitable institutions, research associations, and entities claiming exemptions under Sections 139(4A), 139(4B), 139(4C), and 139(4D) of the Income Tax Act, 1961.',
        heroFeatures: [
            'Dedicated Return Form for Trusts, NGOs & Political Parties',
            'Expert Assistance for Section 11/12 Exemption Claims',
            'End-to-End Filing Support by Your Professional',
            'Full Compliance with Income Tax Act Provisions',
            'Timely Filing to Avoid Penalties & Loss of Exemptions',
        ],
        overview: {
            heading: 'What is ITR 7 Form Filing?',
            paragraphs: [
                'ITR 7 is a specialized income tax return form prescribed by the Central Board of Direct Taxes (CBDT) for entities that are not required to furnish returns under Sections 139(1), 139(4A), 139(4B), 139(4C), or 139(4D) of the Income Tax Act, 1961. This form is primarily applicable to charitable and religious trusts, political parties, scientific research institutions, educational institutions, hospitals, news agencies, trade unions, and other entities that derive income from property held under trust. It serves as the principal compliance instrument for organizations that enjoy tax-exempt status and must demonstrate their eligibility for continued exemptions each assessment year.',
                'The filing of ITR 7 is significantly more complex than standard individual or corporate returns. It requires detailed disclosure of income derived from trust property, voluntary contributions received, application of income toward charitable or religious purposes, and the accumulation or deemed application of funds under various sections. Entities must also report investments and deposits made in compliance with Section 11(5), provide particulars of loans and borrowings, and furnish information regarding any business undertakings operated under Section 11(4A). Political parties must separately report contributions received under Section 13A along with donor details for amounts exceeding ₹20,000.',
                'Your Professional offers comprehensive ITR 7 filing services that cover everything from accurate computation of exempt and taxable income to proper scheduling of assets, liabilities, and fund utilization. Our team of experienced chartered accountants understands the nuances of trust taxation, accumulation provisions under Section 11(2), and the interplay between FCRA compliance and income tax obligations. We ensure that your organization maintains its exempt status while meeting every disclosure requirement mandated by the Income Tax Department.',
            ],
            highlights: [
                { icon: '🏛️', text: 'Mandatory for trusts, NGOs, political parties, and research associations registered under the Income Tax Act' },
                { icon: '📊', text: 'Requires detailed schedules for income application, accumulation, investments, and donor contributions' },
                { icon: '⚖️', text: 'Proper filing preserves tax-exempt status under Sections 11, 12, 13A, and 10(23C)' },
                { icon: '🗓️', text: 'Due date is typically 31st October when tax audit under Section 12A(1)(b) is applicable' },
            ],
        },
        types: [
            {
                title: 'Filing under Section 139(4A) — Charitable/Religious Trusts',
                desc: 'Applicable to trusts and institutions that have received income from property held under trust for charitable or religious purposes. These entities must file ITR 7 regardless of whether the income is fully exempt or partially taxable, and must furnish detailed particulars of income application, accumulation, and investment of trust funds as prescribed under Section 11(5).',
            },
            {
                title: 'Filing under Section 139(4B) — Political Parties',
                desc: 'Mandatory for every political party whose total income exceeds the basic exemption limit before allowing any exemption under Section 13A. The return must include a complete account of all voluntary contributions received, expenditure incurred, and details of contributors who have donated more than ₹20,000 during the financial year.',
            },
            {
                title: 'Filing under Section 139(4C) — Scientific Research Associations & News Agencies',
                desc: 'Covers entities referred to in Section 10(21), 10(22B), or 10(23A) of the Income Tax Act, including approved scientific research associations, news agencies set up in India solely for collection and distribution of news, and associations or institutions referred to in Section 10(23A). These must file ITR 7 to substantiate their claims for tax exemption.',
            },
            {
                title: 'Filing under Section 139(4D) — Universities & Educational Institutions',
                desc: 'Applicable to universities, educational institutions, hospitals, and other medical institutions referred to in Sections 10(23C)(iiiad), 10(23C)(iiiae), 10(23C)(iv), 10(23C)(v), 10(23C)(vi), or 10(23C)(via). These entities must demonstrate that their income is being applied wholly and exclusively for the objects for which they were established.',
            },
            {
                title: 'Filing under Section 139(4E) — Business Trusts',
                desc: 'Covers business trusts as defined under Section 2(13A) of the Income Tax Act, including Real Estate Investment Trusts (REITs) and Infrastructure Investment Trusts (InvITs). These trusts must report detailed information about their unit holders, income distribution, and compliance with SEBI regulations alongside Income Tax Act requirements.',
            },
        ],
        eligibility: [
            'Charitable and religious trusts registered under Section 12A or Section 12AB of the Income Tax Act',
            'Political parties registered under Section 29A of the Representation of the People Act, 1951',
            'Scientific research associations approved under Section 35(1)(ii) or Section 35(1)(iia)',
            'News agencies set up in India solely for the collection and distribution of news as referred to in Section 10(22B)',
            'Universities, hospitals, and educational institutions claiming exemptions under Section 10(23C)',
            'Trade unions registered under the Trade Unions Act, 1926, with income exceeding the exemption threshold',
            'Any institution or association that has filed a declaration under Section 139(4A) through 139(4D) and is required to furnish a return of income',
            'Business trusts including REITs and InvITs as defined under Section 2(13A) of the Income Tax Act',
        ],
        documents: [
            {
                category: 'Entity Registration & Identity Documents',
                items: [
                    'Trust Deed or Memorandum of Association and Rules/Bye-laws of the entity',
                    'Certificate of Registration under Section 12A/12AB or notification under Section 10(23C)',
                    'PAN Card of the trust, institution, or political party',
                    'TAN (Tax Deduction Account Number) if applicable for TDS obligations',
                    'Registration certificate from the Charity Commissioner or Registrar of Societies',
                ],
            },
            {
                category: 'Financial & Accounting Records',
                items: [
                    'Audited financial statements including Balance Sheet, Income & Expenditure Account, and Receipts & Payments Account',
                    'Tax Audit Report in Form 10B or Form 10BB as applicable under Section 12A(1)(b)',
                    'Details of income from property held under trust, voluntary contributions, and other sources',
                    'Statement of accumulation of income under Section 11(2) with Form 10 filed within the due date',
                    'Investment register showing compliance with modes of investment prescribed under Section 11(5)',
                ],
            },
            {
                category: 'Compliance & Disclosure Documents',
                items: [
                    'Details of donations received exceeding ₹50,000 with complete donor information (for political parties, ₹20,000 threshold)',
                    'FCRA Registration Certificate and FC-4 annual return if the entity receives foreign contributions',
                    'Form 10BD — Statement of Donations for issuance of donation certificates under Section 80G',
                    'Details of any business undertaking held under Section 11(4A) with separate books of account',
                ],
            },
        ],
        process: [
            {
                title: 'Initial Consultation & Entity Assessment',
                desc: 'Your Professional conducts a thorough review of your entity type, registration status, applicable sections (139(4A)/4B/4C/4D), and exemption claims to determine the precise filing requirements and identify any compliance gaps from prior years.',
                time: '1-2 Days',
            },
            {
                title: 'Collection & Verification of Financial Records',
                desc: 'We gather all audited financial statements, bank statements, donation records, investment particulars, and accumulation details. Every document is cross-verified against the trust deed objects and statutory provisions to ensure accuracy and completeness.',
                time: '3-5 Days',
            },
            {
                title: 'Computation of Income & Exemption Eligibility',
                desc: 'Our chartered accountants compute the total income, determine the eligible exemption amounts under Sections 11, 12, 13A, or 10(23C), calculate deemed application and accumulation, and identify any income that may be taxable due to violations of conditions prescribed under Section 13.',
                time: '2-4 Days',
            },
            {
                title: 'Preparation of Tax Audit Report (Form 10B/10BB)',
                desc: 'Where applicable, we prepare and file the Tax Audit Report in Form 10B (for entities registered under Section 12AB) or Form 10BB (for entities approved under Section 10(23C)) prior to the ITR 7 filing, ensuring all schedules and annexures are complete.',
                time: '3-5 Days',
            },
            {
                title: 'Drafting & Review of ITR 7 Return',
                desc: 'The ITR 7 form is populated with all required schedules — including Schedule AI (Application of Income), Schedule HP (House Property), Schedule BP (Business Income), Schedule SI (Specified Income), and Schedule FA (Foreign Assets). A multi-level internal review ensures zero discrepancies.',
                time: '2-3 Days',
            },
            {
                title: 'E-Filing on Income Tax Portal',
                desc: 'The finalized ITR 7 is electronically filed on the Income Tax Department e-filing portal. Your Professional handles the digital signature or EVC-based verification process and confirms successful submission with acknowledgment number generation.',
                time: '1 Day',
            },
            {
                title: 'Post-Filing Verification & Record Keeping',
                desc: 'After successful filing, we verify the ITR-V acknowledgment, ensure e-verification is completed within 30 days, maintain copies of the return and all supporting documents, and provide guidance on any subsequent notices or deficiency communications from the Income Tax Department.',
                time: '1-2 Days',
            },
        ],
        fees: [
            { item: 'ITR 7 Filing — Small Trusts (Income up to ₹25 Lakh)', cost: '₹8,000 – ₹15,000' },
            { item: 'ITR 7 Filing — Medium Entities (Income ₹25 Lakh to ₹2 Crore)', cost: '₹15,000 – ₹30,000' },
            { item: 'ITR 7 Filing — Large Institutions (Income above ₹2 Crore)', cost: '₹30,000 – ₹75,000' },
            { item: 'Tax Audit Report (Form 10B / 10BB) Preparation', cost: '₹10,000 – ₹25,000' },
            { item: 'FCRA Compliance & Foreign Contribution Reporting', cost: '₹5,000 – ₹12,000' },
            { item: 'Response to Income Tax Notices / Deficiency Intimations', cost: '₹5,000 – ₹20,000 per notice' },
        ],
        penalties: [
            {
                violation: 'Late Filing of ITR 7 Beyond Due Date',
                penalty: 'Late filing fee of ₹5,000 under Section 234F if filed after the due date. Reduced to ₹1,000 if total income does not exceed ₹5 lakh. Additionally, the entity may lose the benefit of accumulation under Section 11(2) for the relevant assessment year.',
            },
            {
                violation: 'Non-Filing of Tax Audit Report (Form 10B/10BB)',
                penalty: 'Penalty of ₹1,50,000 or 0.5% of total receipts (whichever is lower) under Section 271B for failure to get accounts audited or furnish the audit report within the prescribed due date.',
            },
            {
                violation: 'Incorrect Claim of Exemption Under Section 11/12',
                penalty: 'If the Assessing Officer determines that income has been applied for purposes other than charitable objects, or that investments violate Section 13(1)(d), the entire income of the trust becomes taxable at the maximum marginal rate of 30% plus surcharge and cess.',
            },
            {
                violation: 'Failure to Maintain Books of Account',
                penalty: 'Penalty under Section 271A for failure to keep, maintain, or retain books of account. Political parties face cancellation of exemption under Section 13A if proper accounts are not maintained and audited by a chartered accountant.',
            },
        ],
        advantages: [
            {
                icon: '🛡️',
                title: 'Preserves Tax-Exempt Status',
                desc: 'Timely and accurate ITR 7 filing is essential to maintain your entity\'s tax-exempt status under Sections 11, 12, 13A, or 10(23C). Non-filing or incorrect filing can trigger reassessment and revocation of exemption registration by the Commissioner of Income Tax.',
            },
            {
                icon: '📋',
                title: 'Comprehensive Compliance Documentation',
                desc: 'ITR 7 serves as a consolidated record of your entity\'s financial activities, fund application, and investment compliance. This documentation is critical during renewal of Section 12AB registration and for satisfying conditions prescribed by the Income Tax Department.',
            },
            {
                icon: '💰',
                title: 'Facilitates Donor Confidence & Grant Eligibility',
                desc: 'Organizations with a clean ITR 7 filing history are better positioned to receive donations, grants, and CSR funding. Donors and grant-making bodies routinely verify income tax compliance before committing funds to charitable entities.',
            },
            {
                icon: '🔍',
                title: 'Enables Income Accumulation Benefits',
                desc: 'Proper ITR 7 filing with timely submission of Form 10 allows trusts to accumulate up to 15% of income for future application under Section 11(1), and additional accumulation for specific purposes under Section 11(2) for up to five years.',
            },
            {
                icon: '📊',
                title: 'Detailed Financial Transparency',
                desc: 'The comprehensive schedules within ITR 7 promote organizational transparency by requiring disclosure of all income sources, expenditures, investments, borrowings, and transactions with interested persons — strengthening governance and accountability.',
            },
            {
                icon: '⚡',
                title: 'Faster Processing of Refunds & Assessments',
                desc: 'Entities that file ITR 7 accurately and on time experience quicker processing of tax refunds for TDS deducted on interest income or other receipts. A well-prepared return minimizes the likelihood of scrutiny assessment under Section 143(3).',
            },
        ],
        disadvantages: [
            'ITR 7 is one of the most complex return forms with over 25 detailed schedules, making self-filing extremely difficult without professional assistance and deep understanding of trust taxation provisions.',
            'Any deviation from prescribed investment modes under Section 11(5) or application of income for non-charitable purposes, even inadvertently, can result in the entire income being taxed at the maximum marginal rate.',
            'Political parties must disclose detailed donor information for contributions above ₹20,000, which involves significant record-keeping effort and compliance burden throughout the financial year.',
            'The interplay between FCRA compliance, Section 12AB registration renewal, and ITR 7 filing creates multiple overlapping deadlines that require careful coordination and advance planning.',
        ],
        compliance: [
            {
                area: 'Annual Tax Audit & Return Filing',
                details: 'Entities with total income exceeding the basic exemption limit (before allowing exemptions) must get their accounts audited under Section 12A(1)(b) and file Form 10B/10BB before the due date. ITR 7 must be filed by 31st October of the assessment year when tax audit applies, or 31st July otherwise.',
            },
            {
                area: 'Section 12AB Registration Renewal',
                details: 'Following the amendments introduced by the Taxation and Other Laws (Relaxation and Amendment of Certain Provisions) Act, 2021, trusts and institutions must obtain fresh registration under Section 12AB. Provisional registrations are valid for 3 years and regular registrations for 5 years, requiring timely renewal applications.',
            },
            {
                area: 'Donation Statement Filing (Form 10BD)',
                details: 'Entities approved under Section 80G must file Form 10BD (Statement of Donations) annually by 31st May, providing details of all donations received. They must also issue Form 10BE (Donation Certificates) to donors enabling them to claim deductions in their own returns.',
            },
            {
                area: 'Accumulation Compliance (Form 10)',
                details: 'Trusts wishing to accumulate income beyond the standard 15% under Section 11(1) must file Form 10 electronically before the due date of filing ITR 7. The form must specify the purpose and period of accumulation (maximum 5 years) and the accumulated funds must be invested per Section 11(5) modes.',
            },
        ],
        faqs: [
            {
                q: 'Who is required to file ITR 7?',
                a: 'ITR 7 must be filed by charitable and religious trusts registered under Section 12A/12AB, political parties, scientific research associations, news agencies, universities, hospitals, educational institutions, business trusts (REITs/InvITs), and any other entity required to furnish returns under Sections 139(4A) through 139(4E) of the Income Tax Act.',
            },
            {
                q: 'What is the due date for filing ITR 7?',
                a: 'If the entity is required to get its accounts audited under Section 12A(1)(b) — which applies to most trusts and institutions — the due date is 31st October of the assessment year. For entities not subject to audit, the due date is 31st July. These dates may be extended by the government through official notifications.',
            },
            {
                q: 'Is tax audit mandatory for filing ITR 7?',
                a: 'Yes, trusts and institutions registered under Section 12A/12AB are required to get their accounts audited and furnish the audit report in Form 10B. Entities approved under Section 10(23C) must furnish their audit report in Form 10BB. The audit report must be filed electronically before the due date of filing the return.',
            },
            {
                q: 'What happens if a trust does not file ITR 7?',
                a: 'Non-filing of ITR 7 can have severe consequences including late filing fees under Section 234F, loss of exemption benefits for the assessment year, and potential cancellation of registration under Section 12AB. The Commissioner may also invoke provisions under Section 12AB(4) to cancel registration if returns are not filed for three consecutive years.',
            },
            {
                q: 'Can ITR 7 be filed after the due date?',
                a: 'Yes, a belated return can be filed under Section 139(4) before 31st December of the assessment year (or before the completion of the assessment, whichever is earlier). However, filing beyond the due date attracts a late fee of ₹5,000, potential loss of accumulation benefits under Section 11(2), and interest under Section 234A on any tax payable.',
            },
            {
                q: 'How does Your Professional ensure accurate ITR 7 filing?',
                a: 'Your Professional assigns experienced chartered accountants who specialize in trust and NGO taxation. We perform a comprehensive review of your trust deed, financial statements, and compliance history. Our multi-level review process covers all 25+ schedules of ITR 7, cross-references data with Form 10B/10BB, and validates every exemption claim against the statutory provisions before e-filing.',
            },
            {
                q: 'What is the difference between Form 10B and Form 10BB?',
                a: 'Form 10B is the audit report prescribed for trusts and institutions registered under Section 12A/12AB of the Income Tax Act. Form 10BB is the audit report for entities approved under Section 10(23C) — such as universities, hospitals, and educational institutions with annual receipts exceeding ₹5 crore. Both forms must be filed electronically before the ITR 7 due date.',
            },
            {
                q: 'Are political parties required to disclose all donations in ITR 7?',
                a: 'Political parties must disclose complete details of all voluntary contributions received exceeding ₹20,000 from any single person during the financial year. This includes the name, address, PAN of the donor, and mode of payment. Contributions received through electoral bonds are reported separately. Failure to maintain proper records can result in denial of exemption under Section 13A.',
            },
        ],
        cta: {
            heading: 'File Your ITR 7 with Confidence — Partner with Your Professional',
            subheading: 'Our expert chartered accountants handle every aspect of ITR 7 filing — from tax audit preparation to e-filing and post-filing compliance — so your trust, NGO, or institution stays fully compliant and retains its tax-exempt status.',
            features: [
                'Dedicated CA Team Specializing in Trust & NGO Taxation',
                'Complete Form 10B / 10BB Tax Audit Preparation',
                'Accurate Exemption Computation Under Sections 11, 12 & 10(23C)',
                'Timely E-Filing with Digital Signature Verification',
                'Post-Filing Support for Notices & Deficiency Responses',
            ],
        },
    },

    'itr-1-form-filing': {
        slug: 'itr-1-form-filing',
        title: 'ITR 1 Form Filing',
        subtitle: 'File your ITR 1 (Sahaj) quickly and accurately with Your Professional — the simplest income tax return form designed for salaried individuals and pensioners with total income up to ₹50 lakh from salary, one house property, other sources, and agricultural income up to ₹5,000.',
        heroFeatures: [
            'Simplest Return Form for Salaried Individuals & Pensioners',
            'Applicable for Total Income Up to ₹50 Lakh',
            'Quick & Hassle-Free Filing by Your Professional',
            'Supports New Tax Regime & Old Tax Regime Selection',
            'Accurate Deduction Claims Under Sections 80C to 80U',
        ],
        overview: {
            heading: 'What is ITR 1 (Sahaj) Form Filing?',
            paragraphs: [
                'ITR 1, popularly known as "Sahaj," is the most widely used income tax return form in India, prescribed by the Central Board of Direct Taxes (CBDT) for resident individuals whose total income during the financial year does not exceed ₹50 lakh. The form is specifically designed for taxpayers who earn income from salary or pension, income from a single house property (excluding cases where loss is carried forward from previous years), income from other sources such as interest from savings accounts, fixed deposits, and family pension, and agricultural income up to ₹5,000. It is the simplest return form available and accounts for the majority of all individual income tax returns filed in India each year.',
                'Despite its simplicity, accurate ITR 1 filing requires careful attention to several critical components. Taxpayers must correctly report all salary components as reflected in Form 16 — including basic salary, HRA, special allowances, and perquisites — and claim eligible exemptions under Sections 10(13A) for HRA, 10(14) for transport and children education allowances, and standard deduction of ₹50,000 under Section 16(ia). Income from house property must account for municipal taxes paid, standard deduction of 30%, and interest on housing loan under Section 24(b). Deductions under Chapter VI-A covering Sections 80C through 80U — such as PPF, ELSS, life insurance premiums, health insurance under 80D, education loan interest under 80E, and donations under 80G — must be accurately computed and supported by documentary evidence.',
                'Your Professional provides a streamlined ITR 1 filing service that eliminates the stress and complexity of tax return preparation. Our qualified tax professionals retrieve and reconcile your Form 16, Form 26AS, Annual Information Statement (AIS), and Taxpayer Information Summary (TIS) to ensure that every source of income is reported and every legitimate deduction is claimed. Whether you are filing for the first time or need to optimize your tax liability under the new or old tax regime, Your Professional delivers accurate, timely, and fully compliant ITR 1 filing services.',
            ],
            highlights: [
                { icon: '👤', text: 'Exclusively for resident individuals with total income up to ₹50 lakh from specified sources' },
                { icon: '💼', text: 'Covers salary, pension, single house property, other sources, and agricultural income up to ₹5,000' },
                { icon: '📅', text: 'Standard due date is 31st July of the assessment year for non-audit cases' },
                { icon: '🔄', text: 'Taxpayers can choose between Old Tax Regime and New Tax Regime (Section 115BAC) while filing' },
            ],
        },
        types: [
            {
                title: 'ITR 1 Under Old Tax Regime',
                desc: 'Taxpayers opting for the old tax regime can claim all available exemptions and deductions under Chapter VI-A (Sections 80C to 80U), HRA exemption under Section 10(13A), leave travel allowance under Section 10(5), and housing loan interest deduction under Section 24(b). This regime is beneficial for individuals with significant investments, insurance premiums, home loans, or rental accommodation expenses.',
            },
            {
                title: 'ITR 1 Under New Tax Regime (Section 115BAC)',
                desc: 'The new tax regime offers reduced tax slab rates with a basic exemption limit of ₹3 lakh and a rebate under Section 87A for income up to ₹7 lakh. However, taxpayers forgo most exemptions and deductions except standard deduction of ₹75,000, NPS employer contribution under Section 80CCD(2), and family pension deduction. This regime is the default from AY 2024-25 onwards.',
            },
            {
                title: 'ITR 1 for First-Time Filers',
                desc: 'Individuals filing their income tax return for the first time need to register on the Income Tax e-filing portal, link their PAN with Aadhaar, and ensure all income sources are accurately reported. Your Professional provides dedicated hand-holding for first-time filers including regime comparison analysis, deduction optimization advisory, and step-by-step guidance through the entire process.',
            },
        ],
        eligibility: [
            'Resident individuals (not Ordinarily Resident or Non-Resident Indians are excluded) with total income up to ₹50 lakh',
            'Income is derived from salary or pension from one or more employers during the financial year',
            'Income from a single house property — self-occupied or let-out (excluding cases where brought-forward losses need to be set off)',
            'Income from other sources limited to interest income (savings account, FDs, post office), family pension, and dividend income up to ₹5,000 in aggregate',
            'Agricultural income does not exceed ₹5,000 during the financial year',
            'The individual is not a director in any company during the financial year',
            'The individual has not held any unlisted equity shares at any time during the financial year',
            'The individual does not have any income from assets or financial interests located outside India',
        ],
        documents: [
            {
                category: 'Identity & Tax Documents',
                items: [
                    'PAN Card (Permanent Account Number) of the individual taxpayer',
                    'Aadhaar Card linked with PAN for e-verification of the return',
                    'Form 16 issued by the employer(s) for the relevant financial year',
                    'Form 26AS (Annual Tax Statement) downloaded from the Income Tax portal or TRACES',
                    'Annual Information Statement (AIS) and Taxpayer Information Summary (TIS) from the e-filing portal',
                ],
            },
            {
                category: 'Income & Investment Proofs',
                items: [
                    'Salary slips or pay stubs showing monthly breakup of salary components, allowances, and deductions',
                    'Bank statements for all savings accounts showing interest earned during the financial year',
                    'Fixed deposit interest certificates or Form 16A from banks and financial institutions',
                    'Proof of tax-saving investments — PPF passbook, ELSS statements, NSC certificates, LIC premium receipts, tuition fee receipts',
                    'Housing loan interest certificate from the lender showing principal and interest breakup under Section 24(b) and Section 80C',
                ],
            },
            {
                category: 'Deduction & Exemption Supporting Documents',
                items: [
                    'Health insurance premium receipts for self, spouse, children, and parents under Section 80D',
                    'Rent receipts and landlord PAN (if annual rent exceeds ₹1,00,000) for HRA exemption claim under Section 10(13A)',
                    'Donation receipts with 80G registration number and PAN of the donee institution for Section 80G claims',
                    'Education loan interest certificate from the bank or NBFC for Section 80E deduction',
                    'NPS contribution receipts for additional deduction under Section 80CCD(1B) up to ₹50,000',
                ],
            },
        ],
        process: [
            {
                title: 'Document Collection & Income Compilation',
                desc: 'Your Professional collects your Form 16, bank statements, investment proofs, and other relevant documents. We download your Form 26AS, AIS, and TIS from the Income Tax portal to create a consolidated view of all income sources and TDS credits reported against your PAN.',
                time: '1-2 Days',
            },
            {
                title: 'Income Reconciliation & Discrepancy Resolution',
                desc: 'We reconcile the income and TDS details reported in Form 16 with Form 26AS and AIS/TIS. Any discrepancies — such as unreported interest income, mismatched TDS credits, or high-value transactions flagged in AIS — are identified and resolved before return preparation to prevent future notices.',
                time: '1-2 Days',
            },
            {
                title: 'Tax Regime Comparison & Optimization',
                desc: 'Our tax professionals compute your tax liability under both the old and new tax regimes using your actual income and deduction figures. A detailed comparison report is prepared showing the tax-saving difference, helping you make an informed decision on which regime minimizes your overall tax outflow.',
                time: '1 Day',
            },
            {
                title: 'Deduction Computation & Exemption Claims',
                desc: 'All eligible deductions under Chapter VI-A (80C, 80D, 80E, 80G, 80CCD, 80TTA/80TTB) and exemptions (HRA, LTA, standard deduction) are accurately computed based on the supporting documents provided. We ensure that deduction limits are not breached and every eligible claim is properly documented.',
                time: '1-2 Days',
            },
            {
                title: 'ITR 1 Preparation & Quality Review',
                desc: 'The ITR 1 form is populated with salary details, house property income, other source income, deductions, and tax computation. A senior tax professional reviews the completed return for accuracy, cross-references it with the original source documents, and validates the final tax liability or refund amount.',
                time: '1 Day',
            },
            {
                title: 'E-Filing & Verification on Income Tax Portal',
                desc: 'The finalized ITR 1 is electronically filed on the Income Tax e-filing portal (incometax.gov.in). We complete the e-verification process using Aadhaar OTP, net banking, or DSC, ensuring the return is successfully submitted and the acknowledgment (ITR-V) is generated instantly.',
                time: 'Same Day',
            },
            {
                title: 'Post-Filing Support & Refund Tracking',
                desc: 'After filing, Your Professional monitors the processing status of your return, tracks any refund due, and provides prompt assistance if the Income Tax Department issues an intimation under Section 143(1) or requests additional information. We help you respond to any demand or discrepancy notice efficiently.',
                time: 'Ongoing',
            },
        ],
        fees: [
            { item: 'ITR 1 Filing — Single Employer, No House Property', cost: '₹500 – ₹1,500' },
            { item: 'ITR 1 Filing — Multiple Form 16s or House Property Income', cost: '₹1,500 – ₹3,000' },
            { item: 'ITR 1 Filing with Tax Regime Comparison Advisory', cost: '₹2,000 – ₹4,000' },
            { item: 'Revised Return Filing (Correction of Original ITR 1)', cost: '₹1,000 – ₹2,500' },
            { item: 'Response to Section 143(1) Intimation or Demand Notice', cost: '₹1,500 – ₹5,000 per notice' },
            { item: 'Tax Planning Consultation with Return Filing', cost: '₹3,000 – ₹6,000' },
        ],
        penalties: [
            {
                violation: 'Late Filing of ITR 1 Beyond 31st July',
                penalty: 'Late filing fee of ₹5,000 under Section 234F is levied if the return is filed after the due date but before 31st December. The fee is reduced to ₹1,000 if the total income does not exceed ₹5 lakh. Additionally, interest under Section 234A at 1% per month on tax payable is charged from the due date until the actual filing date.',
            },
            {
                violation: 'Non-Disclosure of Income or Incorrect Reporting',
                penalty: 'Under Section 270A, if the Assessing Officer determines that the taxpayer has under-reported or misreported income, a penalty of 50% of the tax payable on under-reported income (or 200% in case of misreporting) may be levied. This applies to cases where income sources like FD interest or capital gains are not disclosed.',
            },
            {
                violation: 'Failure to File Income Tax Return When Mandatory',
                penalty: 'If an individual whose total income exceeds the basic exemption limit fails to file the return, prosecution proceedings under Section 276CC may be initiated for willful failure. This can result in imprisonment of 3 months to 2 years along with a fine. For income exceeding ₹25 lakh, imprisonment may extend to 7 years.',
            },
            {
                violation: 'Non-Linking of PAN with Aadhaar',
                penalty: 'If PAN is not linked with Aadhaar by the prescribed date, the PAN becomes inoperative. The taxpayer cannot file returns, process refunds, or carry out financial transactions requiring PAN. A fee of ₹1,000 under Section 234H is charged for delayed linking.',
            },
        ],
        advantages: [
            {
                icon: '✅',
                title: 'Simplest & Most User-Friendly Return Form',
                desc: 'ITR 1 (Sahaj) has the least number of schedules and fields among all return forms, making it the most straightforward form to file. It is pre-filled with salary, TDS, and interest data from Form 26AS and AIS, significantly reducing manual data entry and the chance of errors.',
            },
            {
                icon: '💸',
                title: 'Claim Legitimate Tax Refunds Quickly',
                desc: 'If excess TDS has been deducted by your employer or banks, filing ITR 1 is the only way to claim a refund. Accurately filed returns are processed faster by the CPC Bengaluru, and refunds are directly credited to your bank account — typically within 15-45 days of e-verification.',
            },
            {
                icon: '🏦',
                title: 'Essential for Financial Milestones',
                desc: 'ITR 1 acknowledgment serves as a critical document for home loan applications, visa processing, credit card approvals, and higher education abroad. Banks and consulates typically require 2-3 years of filed ITR receipts as proof of income and financial stability.',
            },
            {
                icon: '📈',
                title: 'Enables Loss Carry Forward for Future Years',
                desc: 'While ITR 1 does not permit reporting of capital gains or business losses, timely filing ensures that house property losses (up to ₹2 lakh under Section 24(b)) are set off against salary income in the current year, maximizing your tax benefit from home loan interest payments.',
            },
            {
                icon: '🔐',
                title: 'Avoid Scrutiny with Proper Reconciliation',
                desc: 'Filing ITR 1 with accurately reconciled data from Form 26AS, AIS, and TIS minimizes the risk of receiving a mismatch notice under Section 143(1)(a). Your Professional ensures complete alignment of reported income across all government databases.',
            },
            {
                icon: '🎯',
                title: 'Informed Tax Regime Selection',
                desc: 'Filing ITR 1 with Your Professional includes a detailed comparison of tax liability under both the old and new regimes. This analysis considers your specific income structure, deductions, and exemptions to identify the regime that results in the lowest tax liability — potentially saving thousands of rupees.',
            },
        ],
        disadvantages: [
            'ITR 1 cannot be used if total income exceeds ₹50 lakh, if the taxpayer has capital gains, business or professional income, income from more than one house property, or is a company director or holder of unlisted shares — requiring upgrade to ITR 2 or higher forms.',
            'Under the new tax regime (default from AY 2024-25), most popular deductions like Section 80C (PPF, ELSS, LIC), HRA exemption, and LTA are not available, which may result in higher tax liability for individuals with significant investments.',
            'Taxpayers with income from multiple sources like freelancing, stock trading, or rental from multiple properties often mistakenly file ITR 1 instead of the appropriate form, leading to defective return notices and the need for revised filing.',
            'The pre-filled data in ITR 1 from AIS and Form 26AS may contain errors or duplications (especially for interest income and high-value transactions), requiring careful verification before submission to avoid inflated tax computation.',
        ],
        compliance: [
            {
                area: 'Annual Return Filing Obligation',
                details: 'Every resident individual whose gross total income exceeds the basic exemption limit (₹3,00,000 under new regime or ₹2,50,000 under old regime) must file ITR 1 by 31st July of the assessment year. Even if income is below the threshold, filing is mandatory if the individual has deposited ₹1 crore or more in bank accounts, spent ₹2 lakh or more on foreign travel, or paid ₹1 lakh or more in electricity bills during the year.',
            },
            {
                area: 'Advance Tax Payment Compliance',
                details: 'If the estimated tax liability for the year (after TDS) exceeds ₹10,000, the taxpayer must pay advance tax in quarterly installments — 15% by June 15, 45% by September 15, 75% by December 15, and 100% by March 15. Failure to pay attracts interest under Sections 234B and 234C at 1% per month.',
            },
            {
                area: 'Revised & Belated Return Filing',
                details: 'If any error or omission is discovered after filing the original ITR 1, a revised return can be filed under Section 139(5) before 31st December of the assessment year or before the completion of assessment, whichever is earlier. A belated return for missed filing can also be filed within the same deadline, subject to late fees and interest.',
            },
            {
                area: 'Response to Section 143(1) Intimation',
                details: 'After processing the return, the CPC Bengaluru issues an intimation under Section 143(1) confirming the assessed income, tax payable, or refund due. Taxpayers must verify this intimation carefully and respond within 30 days if there is any demand raised. Your Professional assists in analyzing the intimation and filing a rectification request under Section 154 if needed.',
            },
        ],
        faqs: [
            {
                q: 'Who should file ITR 1 (Sahaj)?',
                a: 'ITR 1 is applicable to resident individuals whose total income from all sources does not exceed ₹50 lakh. The income must be from salary or pension, a single house property, other sources (interest, family pension, dividends), and agricultural income up to ₹5,000. It cannot be used by NRIs, company directors, holders of unlisted shares, or individuals with capital gains or business income.',
            },
            {
                q: 'What is the due date for filing ITR 1?',
                a: 'The standard due date for filing ITR 1 is 31st July of the assessment year. For example, for income earned during FY 2024-25, the ITR 1 must be filed by 31st July 2025 (AY 2025-26). The government may extend this deadline through notifications. A belated return can be filed until 31st December with applicable late fees and interest.',
            },
            {
                q: 'Can I switch between old and new tax regime while filing ITR 1?',
                a: 'Yes, salaried individuals can switch between the old and new tax regime each year at the time of filing ITR 1. From AY 2024-25, the new tax regime under Section 115BAC is the default. To opt for the old regime, you must file Form 10-IEA before the due date of filing the return. Your Professional helps you compare both regimes to identify the optimal choice.',
            },
            {
                q: 'What happens if I file ITR 1 instead of the correct form?',
                a: 'If you file ITR 1 when your income profile requires ITR 2 or ITR 3 (e.g., you have capital gains, business income, or are a company director), the Income Tax Department may issue a defective return notice under Section 139(9). You must then file a corrected return in the appropriate form within 15 days of receiving the notice, or the return will be treated as invalid.',
            },
            {
                q: 'How can I claim a tax refund through ITR 1?',
                a: 'If the TDS deducted by your employer, banks, or other deductors exceeds your actual tax liability after accounting for all deductions and exemptions, you are entitled to a refund. File ITR 1 accurately, e-verify the return, and ensure your bank account is pre-validated on the e-filing portal. Refunds are processed by CPC Bengaluru and credited directly to your bank account within 15-45 days of e-verification.',
            },
            {
                q: 'What is the difference between Form 26AS, AIS, and TIS?',
                a: 'Form 26AS is the annual tax statement showing TDS/TCS credits, advance tax payments, and self-assessment tax paid. AIS (Annual Information Statement) is a comprehensive statement showing all financial transactions reported by banks, mutual funds, and other entities. TIS (Taxpayer Information Summary) is a derived summary from AIS showing aggregated income values. All three must be reconciled before filing ITR 1.',
            },
            {
                q: 'Can I file a revised return if I made an error in ITR 1?',
                a: 'Yes, if you discover any mistake or omission in your original ITR 1, you can file a revised return under Section 139(5) before 31st December of the assessment year. The revised return completely replaces the original return. There is no limit on the number of times you can revise, but each revision must reference the original return\'s acknowledgment number and filing date.',
            },
            {
                q: 'Does Your Professional handle ITR 1 filing for multiple family members?',
                a: 'Absolutely. Your Professional offers family filing packages where we prepare and file ITR 1 for multiple family members at discounted rates. We ensure consistency in reporting inter-family transactions such as joint property income, gifts, and club salary income, while optimizing deductions individually for each family member to minimize the overall family tax burden.',
            },
        ],
        cta: {
            heading: 'File Your ITR 1 (Sahaj) Effortlessly with Your Professional',
            subheading: 'From Form 16 reconciliation to regime comparison and e-filing, our tax experts ensure your ITR 1 is filed accurately, on time, and with maximum tax savings — so you can focus on what matters most.',
            features: [
                'Complete Form 16, 26AS, AIS & TIS Reconciliation',
                'Old vs. New Tax Regime Comparison Report',
                'Maximum Deduction Claims Under Chapter VI-A',
                'Same-Day E-Filing with Aadhaar OTP Verification',
                'Post-Filing Refund Tracking & Notice Assistance',
            ],
        },
    },
'80-iac-tax-exemption': {
    slug: '80-iac-tax-exemption',
    title: '80-IAC Tax Exemption for Startups',
    subtitle:
      'Unlock a three-year income-tax holiday for your DPIIT-recognised startup under Section 80-IAC of the Income Tax Act with expert guidance from Your Professional.',
    heroFeatures: [
      '100% Tax Holiday on Profits for 3 Consecutive Years',
      'Available to DPIIT-Recognised Startups Incorporated After April 2016',
      'Exemption Window Selectable Within First 10 Years of Incorporation',
      'End-to-End Application Support by Your Professional',
    ],
    overview: {
      heading: 'Understanding Section 80-IAC Tax Exemption for Startups',
      paragraphs: [
        'Section 80-IAC of the Income Tax Act, 1961 was introduced as a cornerstone incentive under the Startup India initiative to catalyse entrepreneurial growth across the country. The provision allows eligible startups that have been recognised by the Department for Promotion of Industry and Internal Trade (DPIIT) to claim a full deduction of their profits and gains for any three consecutive assessment years out of the first ten years from the date of incorporation. By removing the burden of income tax during the critical early years of operation, the government aims to help startups reinvest earnings into product development, talent acquisition, and market expansion rather than diverting funds towards tax liabilities.',
        'To be eligible, a startup must be structured as a private limited company, a limited liability partnership, or a registered partnership firm. The entity should have been incorporated on or after 1 April 2016 and must not have an annual turnover exceeding ₹100 crore in any of the financial years for which the deduction is claimed. Importantly, the startup must be engaged in innovation, development, or improvement of products, processes, or services, or must operate a scalable business model with a high potential for employment generation or wealth creation. The Inter-Ministerial Board of Certification (IMB) under DPIIT evaluates whether the startup meets the innovation criteria before granting the certificate required for the 80-IAC deduction.',
        'At Your Professional, we simplify the entire journey from DPIIT recognition through IMB certification to the final filing of your income-tax return with the 80-IAC deduction. Our team of chartered accountants and startup consultants ensures that your application is watertight, your documentation is comprehensive, and your compliance posture remains intact throughout the exemption period and beyond.',
      ],
      highlights: [
        { icon: '💰', text: 'Save up to ₹25 lakhs or more in income tax over three years depending on profitability' },
        { icon: '📋', text: 'Flexible three-year window that you can choose within the first decade of incorporation' },
        { icon: '🏛️', text: 'Government-backed initiative designed to strengthen the Indian startup ecosystem' },
        { icon: '🤝', text: 'Your Professional provides dedicated relationship managers for every application' },
      ],
    },
    types: [
      {
        title: 'Private Limited Company',
        desc: 'A company incorporated under the Companies Act, 2013 with limited liability for shareholders is the most common structure leveraging Section 80-IAC. The entity must be registered with DPIIT and obtain IMB certification to claim the deduction on corporate profits.',
      },
      {
        title: 'Limited Liability Partnership (LLP)',
        desc: 'LLPs registered under the LLP Act, 2008 can also avail the 80-IAC exemption provided they meet all eligibility norms including the turnover ceiling and innovation criteria. The deduction applies to the profits of the LLP as a whole before distribution to partners.',
      },
      {
        title: 'Registered Partnership Firm',
        desc: 'Traditional partnership firms registered under the Indian Partnership Act, 1932 are eligible for Section 80-IAC benefits as long as they fulfil the startup definition under the DPIIT notification and have been incorporated on or after 1 April 2016.',
      },
    ],
    eligibility: [
      'The entity must be incorporated as a private limited company, LLP, or registered partnership firm on or after 1 April 2016',
      'The startup must hold a valid DPIIT recognition certificate at the time of applying for 80-IAC certification',
      'Annual turnover must not exceed ₹100 crore in any financial year for which the deduction is claimed',
      'The startup should work towards innovation, development, or improvement of products, processes, or services, or possess a scalable business model with high potential for employment generation or wealth creation',
      'The entity must not have been formed by splitting up or reconstructing a business already in existence',
      'The startup must obtain a certificate from the Inter-Ministerial Board of Certification (IMB) under DPIIT confirming eligibility',
      'The startup must not have acquired machinery or plant previously used for any purpose, beyond 20% of the total value of its machinery and plant',
      'The entity must file its income-tax returns within the due date prescribed under Section 139(1) for every assessment year in which the deduction is claimed',
    ],
    documents: [
      {
        category: 'Entity Incorporation & Recognition Documents',
        items: [
          'Certificate of Incorporation issued by the Registrar of Companies (ROC) or LLP registration certificate',
          'Valid DPIIT Recognition Certificate obtained through the Startup India portal',
          'Memorandum of Association (MOA) and Articles of Association (AOA) or LLP Agreement as applicable',
          'PAN card and TAN allocation letter of the startup entity',
          'Board resolution or partners\' consent letter authorising the application for 80-IAC certification',
        ],
      },
      {
        category: 'Financial & Business Documents',
        items: [
          'Audited financial statements (Balance Sheet, Profit & Loss Account, and Notes) for all relevant financial years',
          'Income Tax Returns filed under Section 139(1) for every year in which deduction is being claimed',
          'CA certificate confirming turnover does not exceed ₹100 crore in any relevant financial year',
          'Detailed business plan or pitch deck articulating the innovative nature and scalability of the business model',
        ],
      },
      {
        category: 'Innovation & Supporting Evidence',
        items: [
          'Description of the product, process, or service innovation with supporting technical documentation',
          'Patents, copyrights, trademarks, or design registrations held by the startup, if any',
          'Customer testimonials, case studies, or pilot-project outcomes that validate the innovation claim',
          'Details of employment generated including employee headcount and payroll evidence',
          'Letters of recommendation from incubators, accelerators, or industry bodies, if available',
        ],
      },
    ],
    process: [
      {
        title: 'Obtain DPIIT Recognition',
        desc: 'Register your startup on the Startup India portal (startupindia.gov.in) and submit the application for DPIIT recognition along with your incorporation certificate, a brief about the business, and supporting documents. DPIIT typically grants recognition within 2–5 working days after verification.',
        time: '2–5 working days',
      },
      {
        title: 'Prepare IMB Application Package',
        desc: 'Compile a comprehensive application package that includes the innovation narrative, financial statements, business plan, employment data, and all other supporting documents. Your Professional assigns a dedicated consultant to draft and review every document for completeness and accuracy.',
        time: '5–7 working days',
      },
      {
        title: 'Submit Application to Inter-Ministerial Board',
        desc: 'File the 80-IAC exemption application through the Startup India portal, attaching the complete document set. The application is routed to the Inter-Ministerial Board of Certification comprising representatives from DPIIT, the Department of Biotechnology, and the Department of Science and Technology.',
        time: '1–2 working days',
      },
      {
        title: 'IMB Evaluation and Possible Presentation',
        desc: 'The IMB evaluates the application on parameters of innovation, scalability, and employment potential. In some cases, the board may invite the startup founders for a brief presentation or seek clarifications on specific aspects of the business model.',
        time: '30–60 working days',
      },
      {
        title: 'Receive IMB Certification',
        desc: 'Upon satisfactory evaluation, the IMB issues a certificate of eligibility under Section 80-IAC. This certificate is the primary document required by the Assessing Officer when the startup claims the deduction during income-tax assessment.',
        time: '7–10 working days after approval',
      },
      {
        title: 'Claim Deduction in Income Tax Return',
        desc: 'File the income-tax return for the chosen assessment year within the due date under Section 139(1) and claim the 80-IAC deduction in the relevant schedule. Ensure that the audited financial statements and the IMB certificate are available for reference during scrutiny.',
        time: 'As per ITR filing due date',
      },
      {
        title: 'Maintain Ongoing Compliance',
        desc: 'Continue filing returns on time, keeping turnover within the ₹100 crore threshold, and retaining all supporting documents for at least six years post the last assessment year of exemption. Your Professional provides annual compliance reviews to safeguard the deduction.',
        time: 'Ongoing for exemption period',
      },
    ],
    fees: [
      { item: 'DPIIT Recognition Application', cost: 'No government fee – free of charge' },
      { item: 'IMB Certification Application', cost: 'No government fee – free of charge' },
      { item: 'Your Professional – DPIIT Recognition Assistance', cost: '₹2,999 – ₹4,999 (one-time)' },
      { item: 'Your Professional – IMB Application Preparation & Filing', cost: '₹14,999 – ₹24,999 (one-time)' },
      { item: 'Your Professional – Annual Compliance & ITR Filing Support', cost: '₹9,999 – ₹14,999 per year' },
      { item: 'Chartered Accountant Certification (if not included)', cost: '₹3,000 – ₹7,000 per certificate' },
    ],
    penalties: [
      {
        violation: 'Claiming 80-IAC deduction without valid IMB certification',
        penalty: 'Deduction disallowed in entirety; reassessment of returns with interest under Section 234A/B/C and potential penalty under Section 270A for under-reporting of income',
      },
      {
        violation: 'Exceeding ₹100 crore annual turnover during the deduction period',
        penalty: 'Automatic disqualification from 80-IAC benefit for the relevant financial year; previous claims may be scrutinised by the Assessing Officer',
      },
      {
        violation: 'Failure to file ITR within the due date under Section 139(1)',
        penalty: 'Complete forfeiture of 80-IAC deduction for the assessment year in question, regardless of IMB certification status, along with late-filing fees under Section 234F',
      },
      {
        violation: 'Misrepresentation of innovation or financial data in the application',
        penalty: 'Revocation of IMB certificate, denial of deduction, and possible prosecution proceedings under Section 276C for wilful evasion of tax',
      },
    ],
    advantages: [
      {
        icon: '🚀',
        title: 'Accelerated Cash-Flow Reinvestment',
        desc: 'By eliminating income-tax outflow for three full years, startups retain substantially more capital that can be channelled into research, development, and scaling operations without seeking additional external funding.',
      },
      {
        icon: '📊',
        title: 'Flexible Window of Exemption',
        desc: 'Startups can strategically select the three consecutive years of exemption within the first decade of incorporation, allowing them to time the benefit for peak-profitability years and maximise savings.',
      },
      {
        icon: '🏅',
        title: 'Enhanced Credibility with Investors',
        desc: 'Holding an IMB certificate and DPIIT recognition signals to angel investors, venture capitalists, and institutional lenders that the startup has passed rigorous government evaluation for innovation and scalability.',
      },
      {
        icon: '🛡️',
        title: 'Protection Against Angel Tax (Section 56(2)(viib))',
        desc: 'DPIIT-recognised startups with a valid certification are exempt from the so-called angel tax on share premium, providing additional financial security during fundraising rounds.',
      },
      {
        icon: '📝',
        title: 'Simplified Self-Certification Compliance',
        desc: 'Recognised startups benefit from self-certification under certain labour and environmental laws, reducing the regulatory burden during the critical growth phase of the business.',
      },
      {
        icon: '🌐',
        title: 'Access to Broader Startup India Benefits',
        desc: 'Beyond 80-IAC, DPIIT recognition opens doors to government tenders, the Fund of Funds, patent fast-tracking, and a host of state-level incentives available exclusively to recognised startups.',
      },
    ],
    disadvantages: [
      'The IMB evaluation process can be lengthy, sometimes taking 45–90 days, during which the startup must wait without certainty of approval',
      'Only three consecutive years of deduction are available, which may not align with the startup\'s actual profitability curve if early years are loss-making',
      'Stringent requirement to file ITR within the original due date under Section 139(1) – even a single day\'s delay results in forfeiture of the deduction for that year',
      'Startups formed by splitting up or reconstruction of an existing business are permanently ineligible, which may disadvantage genuine pivots or restructuring efforts',
    ],
    compliance: [
      {
        area: 'Timely Income Tax Return Filing',
        details: 'The startup must file its return of income under Section 139(1) within the prescribed due date for every assessment year in which the 80-IAC deduction is claimed. Belated or revised returns filed after the due date will void the deduction.',
      },
      {
        area: 'Annual Turnover Monitoring',
        details: 'The entity must ensure that its total turnover does not exceed ₹100 crore in any financial year during the deduction period. Maintaining monthly revenue dashboards and conducting quarterly internal audits is recommended.',
      },
      {
        area: 'Record Retention & Audit Trail',
        details: 'All financial records, IMB certificate, DPIIT recognition letter, board resolutions, and supporting innovation documents must be preserved for a minimum of six years from the end of the last assessment year of exemption to satisfy any future scrutiny.',
      },
      {
        area: 'Renewal of DPIIT Recognition',
        details: 'DPIIT recognition is valid for a period of ten years from the date of incorporation. Startups must ensure that recognition remains active throughout the exemption period and promptly address any queries or update requests from the DPIIT portal.',
      },
    ],
    faqs: [
      {
        q: 'What exactly is Section 80-IAC and who introduced it?',
        a: 'Section 80-IAC was inserted into the Income Tax Act, 1961 through the Finance Act 2016 as part of the Startup India Action Plan. It allows eligible startups recognised by DPIIT to claim a 100% deduction of profits and gains for any three consecutive assessment years out of the first ten years from the date of incorporation, effectively providing a full income-tax holiday during the chosen window.',
      },
      {
        q: 'Can I choose which three years to claim the 80-IAC deduction?',
        a: 'Yes, but the three years must be consecutive. You can pick any block of three consecutive assessment years within the first ten years from the date of incorporation. It is strategically advisable to select years in which your startup is most profitable to maximise the tax savings.',
      },
      {
        q: 'Is DPIIT recognition sufficient to claim 80-IAC, or do I also need IMB certification?',
        a: 'DPIIT recognition alone is not sufficient for claiming the 80-IAC deduction. You must additionally obtain a certificate from the Inter-Ministerial Board of Certification (IMB) constituted under DPIIT. The IMB evaluates your startup on innovation, scalability, and employment-generation parameters before issuing the eligibility certificate.',
      },
      {
        q: 'What happens if my startup incurs losses during the three-year exemption window?',
        a: 'The 80-IAC deduction applies only to profits and gains. If your startup incurs losses during one or more years within the chosen window, there is no tax benefit for those loss-making years because there is no positive income to exempt. However, you cannot shift the exemption window to different years once it has been selected and claimed.',
      },
      {
        q: 'Does the ₹100 crore turnover limit apply to each year individually?',
        a: 'Yes, the turnover threshold of ₹100 crore is evaluated on a per-financial-year basis. If your startup exceeds this limit in any single financial year during the deduction period, the 80-IAC benefit becomes unavailable for that particular year. Turnover in other years within the limit remains unaffected.',
      },
      {
        q: 'Can a startup that was formed by converting a sole proprietorship claim 80-IAC?',
        a: 'Generally, if the startup entity was formed by splitting up or reconstruction of an existing business, it is ineligible for 80-IAC. However, if a sole proprietorship is freshly incorporated as a private limited company or LLP with new business operations (not merely a transfer of the old business), eligibility may exist. Each case is evaluated on its specific facts, and Your Professional can provide a detailed assessment.',
      },
      {
        q: 'How long does the entire process take from start to finish?',
        a: 'If DPIIT recognition is already in place, preparing and submitting the IMB application typically takes 1–2 weeks with Your Professional\'s assistance. The IMB evaluation itself may take 30–60 working days. In total, startups should budget approximately 2–3 months from initiating the process to receiving the IMB certificate.',
      },
      {
        q: 'What role does Your Professional play in the 80-IAC application process?',
        a: 'Your Professional provides end-to-end support including eligibility assessment, DPIIT recognition assistance, drafting the innovation narrative and business plan, compiling financial documents, preparing and filing the IMB application, liaising with authorities for any clarifications, and ensuring annual compliance during the exemption period. Our team of chartered accountants and startup consultants has successfully helped hundreds of startups secure the 80-IAC benefit.',
      },
    ],
    cta: {
      heading: 'Ready to Save Lakhs in Income Tax? Let Your Professional Guide You.',
      subheading:
        'Our startup tax specialists will assess your eligibility, prepare your IMB application, and ensure you claim every rupee of deduction you deserve under Section 80-IAC.',
      features: [
        'Free Preliminary Eligibility Assessment',
        'Dedicated Relationship Manager for Your Application',
        'Complete Documentation & IMB Filing Support',
        'Annual Compliance Reviews During Exemption Period',
        'Transparent Pricing with No Hidden Charges',
      ],
    },
  },
};

export default data;
