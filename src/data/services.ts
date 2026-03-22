export interface ServiceData {
    slug: string;
    title: string;
    subtitle: string;
    heroFeatures: string[];
    overview: { heading: string; paragraphs: string[]; highlights: { icon: string; text: string }[] };
    types?: { title: string; desc: string }[];
    eligibility: string[];
    documents: { category: string; items: string[] }[];
    process: { title: string; desc: string; time?: string }[];
    fees: { item: string; cost: string }[];
    penalties?: { violation: string; penalty: string }[];
    advantages: { icon: string; title: string; desc: string }[];
    disadvantages?: string[];
    compliance?: { area: string; details: string }[];
    faqs: { q: string; a: string }[];
    cta?: { heading: string; subheading: string; features: string[] };
}

export const SERVICES: Record<string, ServiceData> = {};

export const REGISTRATION_MENU_ITEMS: { label: string; slug: string }[] = [
    { label: 'Company Registration', slug: 'company-registration' },
    { label: 'Private Limited Company Registration', slug: 'private-limited-company-registration' },
    { label: 'LLP Registration', slug: 'llp-registration' },
    { label: 'Public Limited Company Registration', slug: 'public-limited-company-registration' },
    { label: 'Partnership Firm Registration', slug: 'partnership-firm-registration' },
    { label: 'NGO Registration', slug: 'ngo-registration' },
    { label: 'Trust Registration', slug: 'trust-registration' },
    { label: 'Sole Proprietorship Registration', slug: 'sole-proprietorship-registration' },
    { label: 'OPC Registration', slug: 'one-person-company' },
    { label: 'Society Registration', slug: 'society-registration' },
    { label: 'Startup India Registration', slug: 'startup-india-registration' },
    { label: 'Startup Registration', slug: 'startup-registration' },
    { label: 'Virtual Office', slug: 'virtual-office' },
    { label: 'Nidhi Company Registration', slug: 'nidhi-company-registration' },
    { label: 'Microfinance Company Registration', slug: 'microfinance-company-registration' },
    { label: 'Producer Company Registration', slug: 'producer-company-registration' },
    { label: 'Wordmark Registration', slug: 'wordmark-registration' },
    { label: 'PSARA License', slug: 'psara-license' },
    { label: 'IEC Registration', slug: 'iec-registration' },
    { label: 'Digital Signature Certificate', slug: 'digital-signature-certificate' },
    { label: 'Class 3 Digital Signature Certificate', slug: 'class-3-digital-signature-certificate' },
    { label: 'Indian Subsidiary Registration', slug: 'indian-subsidiary-registration' },
    { label: 'Small Scale Industries Registration', slug: 'small-scale-industries-registration' },
    { label: 'Foreign Subsidiary Company Registration', slug: 'foreign-subsidiary-company-registration' },
    { label: 'Foreign Company Registration', slug: 'foreign-company-registration' },
    { label: 'Barcode Registration', slug: 'barcode-registration' },
];


// --- Government Registration Menu Items ---
export const GOVERNMENT_REGISTRATION_MENU_ITEMS: { label: string; slug: string }[] = [
    { label: 'Drug License', slug: 'drug-license' },
    { label: 'Liquor License', slug: 'liquor-license' },
    { label: 'ISO Registration', slug: 'iso-registration' },
    { label: 'Ayush License', slug: 'ayush-license' },
    { label: 'FIEO Registration', slug: 'fieo-registration' },
    { label: 'Medical Device Registration', slug: 'medical-device-registration' },
    { label: 'ISI Mark Certification', slug: 'isi-mark-certification' },
    { label: 'Professional Tax Registration', slug: 'professional-tax-registration' },
    { label: 'PTEC Registration', slug: 'ptec-registration' },
    { label: 'RCMC Registration', slug: 'rcmc-registration' },
    { label: 'Factory License', slug: 'factory-license' },
    { label: 'ICEGATE Registration', slug: 'icegate-registration' },
    { label: 'Petrol Pump License', slug: 'petrol-pump-license' },
    { label: 'Network License', slug: 'network-license' },
    { label: 'TEC Certification', slug: 'tec-certification' },
    { label: 'SPICe+ Form', slug: 'spice-plus-form' },
    { label: 'ISSN Number', slug: 'issn-number' },
    { label: 'ISO 22000 FSMS Certification', slug: 'iso-22000-certification' },
    { label: 'ISO 50001 Certification', slug: 'iso-50001-certification' },
    { label: 'ISO 31000 Certification', slug: 'iso-31000-certification' },
    { label: 'ISO 9001 Certification', slug: 'iso-9001-certification' },
    { label: 'ISO 27001 Certification', slug: 'iso-27001-certification' },
    { label: 'ISO 14001 Certification', slug: 'iso-14001-certification' },
    { label: 'DUNS Number', slug: 'duns-number' },
    { label: 'Geographical Indication Registration', slug: 'geographical-indication-registration' },
    { label: 'GMP Certification', slug: 'gmp-certification' },
    { label: 'ISBN Number Registration', slug: 'isbn-number-registration' },
    { label: 'Tobacco License', slug: 'tobacco-license' },
];

// --- Import and merge all service data ---
// Registration
import { GOVT_REGISTRATIONS } from './registration/govt-registrations';
import { FSSAI_REGISTRATIONS } from './registration/fssai-registrations';
import { TRADE_REGISTRATIONS } from './registration/trade-registrations';
import { BUSINESS_CERTIFICATES } from './registration/business-certificates';
import { BUSINESS_LICENSES } from './registration/business-licenses';
import { BIS_REGISTRATIONS } from './registration/bis-registrations';
import { NGO_REGISTRATIONS } from './registration/ngo-registrations';
import { INTERNATIONAL_REGISTRATIONS } from './registration/international-registrations';
import { OTHER_SERVICES } from './registration/other-services';
import { COMPANY_REGISTRATIONS } from './registration/company-registrations';
// Compliance
import { COMPANY_COMPLIANCE } from './compliance/company-compliance';
import { ANNUAL_COMPLIANCE } from './compliance/annual-compliance';
import { MCA_SERVICES } from './compliance/mca-services';
import { EVENT_BASED_COMPLIANCE } from './compliance/event-based-compliance';
import { CONVERT_BUSINESS } from './compliance/convert-business';
// IPR
import { IPR_REGISTRATIONS } from './ipr/ipr-registrations';
// Taxation
import INCOME_TAX from './taxation/income-tax';
import GST from './taxation/gst';
// Consultation
import CA_SERVICES from './consultation/ca-services';
import BUSINESS_CONSULTANTS from './consultation/business-consultants';
import LAWYER_EXPERT from './consultation/lawyer-expert';
// More
import { ENVIRONMENTAL } from './more/environmental';
import { AGREEMENTS } from './more/agreements';
import { REGULATORY } from './more/regulatory';
import { TOOLS_CALCULATORS } from './more/tools-calculators';

Object.assign(SERVICES,
    GOVT_REGISTRATIONS, FSSAI_REGISTRATIONS, TRADE_REGISTRATIONS,
    BUSINESS_CERTIFICATES, BUSINESS_LICENSES, BIS_REGISTRATIONS,
    NGO_REGISTRATIONS, INTERNATIONAL_REGISTRATIONS, OTHER_SERVICES,
    COMPANY_COMPLIANCE, ANNUAL_COMPLIANCE, MCA_SERVICES,
    EVENT_BASED_COMPLIANCE, CONVERT_BUSINESS, IPR_REGISTRATIONS,
    INCOME_TAX, GST, CA_SERVICES, BUSINESS_CONSULTANTS, LAWYER_EXPERT,
    COMPANY_REGISTRATIONS, ENVIRONMENTAL, AGREEMENTS, REGULATORY, TOOLS_CALCULATORS,
);

// --- FSSAI Registration Menu Items ---
export const FSSAI_MENU_ITEMS: { label: string; slug: string }[] = [
    { label: 'FSSAI Registration', slug: 'fssai-registration' },
    { label: 'FSSAI Central License', slug: 'fssai-central-license' },
    { label: 'FSSAI State License', slug: 'fssai-state-license' },
    { label: 'FSSAI Product Approval', slug: 'fssai-product-approval' },
    { label: 'FSSAI License Renewal', slug: 'fssai-license-renewal' },
    { label: 'Halal Certification', slug: 'halal-certification' },
];

// --- Trade Licence Menu Items ---
export const TRADE_LICENCE_MENU_ITEMS: { label: string; slug: string }[] = [
    { label: 'Trade Licence Registration', slug: 'trade-licence-registration' },
    { label: 'Trade Licence Renewal', slug: 'trade-licence-renewal' },
];

// --- Business Certificates Menu Items ---
export const BUSINESS_CERTIFICATES_MENU_ITEMS: { label: string; slug: string }[] = [
    { label: 'RERA Registration', slug: 'rera-registration' },
    { label: 'NSIC Registration', slug: 'nsic-registration' },
    { label: 'PESO Certificate', slug: 'peso-certificate' },
    { label: 'Hallmark Registration', slug: 'hallmark-registration' },
    { label: 'Rubber Board Registration', slug: 'rubber-board-registration' },
    { label: 'IJCEPA Certificate', slug: 'ijcepa-certificate' },
    { label: 'FPO Mark Certification', slug: 'fpo-mark-certification' },
    { label: 'Spice Board Registration', slug: 'spice-board-registration' },
    { label: 'BEE Registration', slug: 'bee-registration' },
    { label: 'Make In India Certificate', slug: 'make-in-india-certificate' },
    { label: 'ZED Certification', slug: 'zed-certification' },
    { label: 'NSDC Registration', slug: 'nsdc-registration' },
    { label: 'NGO Project Report', slug: 'ngo-project-report' },
    { label: 'CMMI Certification', slug: 'cmmi-certification' },
    { label: 'APEDA Registration', slug: 'apeda-registration' },
    { label: 'TEXPROCIL Registration', slug: 'texprocil-registration' },
    { label: 'Certificate of Good Standing', slug: 'certificate-of-good-standing' },
    { label: 'CE Certification', slug: 'ce-certification' },
];

// --- Business Licenses Menu Items ---
export const BUSINESS_LICENSES_MENU_ITEMS: { label: string; slug: string }[] = [
    { label: 'RNI Registration', slug: 'rni-registration' },
    { label: 'CDSCO Registration', slug: 'cdsco-registration' },
    { label: 'AD Code Registration', slug: 'ad-code-registration' },
    { label: 'GSP Registration', slug: 'gsp-registration' },
    { label: 'SAFTA License', slug: 'safta-license' },
    { label: 'WPC Certificate', slug: 'wpc-certificate' },
    { label: 'MSTC License Registration', slug: 'mstc-license-registration' },
    { label: 'AGMARK License', slug: 'agmark-license' },
];

// --- BIS Registration Menu Items ---
export const BIS_MENU_ITEMS: { label: string; slug: string }[] = [
    { label: 'BIS Certification', slug: 'bis-certification' },
    { label: 'BIS Certification for Power Banks', slug: 'bis-certification-power-banks' },
    { label: 'BIS FMCS Certification', slug: 'bis-fmcs-certification' },
    { label: 'BIS Certification for Toys', slug: 'bis-certification-toys' },
];

// --- NGO Menu Items ---
export const NGO_MENU_ITEMS: { label: string; slug: string }[] = [
    { label: 'Section 8 Company Registration', slug: 'section-8-company-registration' },
    { label: 'Section 8 Microfinance Company', slug: 'section-8-microfinance-company-registration' },
    { label: 'Darpan Registration', slug: 'darpan-registration' },
    { label: '12A and 80G Registration', slug: '12a-and-80g-registration' },
    { label: 'FCRA Registration', slug: 'fcra-registration' },
    { label: 'NGO Accounting', slug: 'ngo-accounting' },
];

// --- International Business Setup Menu Items ---
export const INTERNATIONAL_MENU_ITEMS: { label: string; slug: string }[] = [
    { label: 'Company Registration in Dubai', slug: 'company-registration-in-dubai' },
    { label: 'UK Company Registration', slug: 'uk-company-registration' },
    { label: 'Singapore Company Registration', slug: 'singapore-company-registration' },
    { label: 'USA Company Registration', slug: 'usa-company-registration' },
    { label: 'Canada Company Registration', slug: 'canada-company-registration' },
    { label: 'Oman Company Registration', slug: 'oman-company-registration' },
    { label: 'Malaysia Company Registration', slug: 'malaysia-company-registration' },
    { label: 'Australia Company Registration', slug: 'australia-company-registration' },
    { label: 'Thailand Company Registration', slug: 'thailand-company-registration' },
    { label: 'Hong Kong Company Registration', slug: 'hong-kong-company-registration' },
    { label: 'Indonesia Company Registration', slug: 'indonesia-company-registration' },
    { label: 'Qatar Company Registration', slug: 'qatar-company-registration' },
    { label: 'Italy Company Registration', slug: 'italy-company-registration' },
    { label: 'Sweden Company Registration', slug: 'sweden-company-registration' },
    { label: 'Ireland Company Registration', slug: 'ireland-company-registration' },
    { label: 'Netherlands Company Registration', slug: 'netherlands-company-registration' },
    { label: 'Mauritius Company Registration', slug: 'mauritius-company-registration' },
    { label: 'Saudi Arabia Company Registration', slug: 'saudi-arabia-company-registration' },
    { label: 'France Company Registration', slug: 'france-company-registration' },
    { label: 'Germany Company Registration', slug: 'germany-company-registration' },
    { label: 'British Virgin Islands Registration', slug: 'british-virgin-islands-registration' },
    { label: 'New Zealand Company Registration', slug: 'new-zealand-company-registration' },
    { label: 'Dubai Free Zone Company Registration', slug: 'dubai-free-zone-company-registration' },
];

// --- Other Services Menu Items ---
export const OTHER_SERVICES_MENU_ITEMS: { label: string; slug: string }[] = [
    { label: 'Virtual CFO Services', slug: 'virtual-cfo-services' },
    { label: 'Tea Board Registration', slug: 'tea-board-registration' },
    { label: 'Insurance Repository Registration', slug: 'insurance-repository-registration' },
    { label: 'SEPC License', slug: 'sepc-license' },
    { label: 'GJEPC Registration', slug: 'gjepc-registration' },
    { label: 'ISP Registration', slug: 'isp-registration' },
];

// --- Compliance Menu Items ---
export const COMPANY_COMPLIANCE_MENU_ITEMS: { label: string; slug: string }[] = [
    { label: 'MSME Registration', slug: 'msme-registration' },
    { label: 'EPF Registration', slug: 'epf-registration' },
    { label: 'Shop & Establishment Registration', slug: 'shop-and-establishment-registration' },
];

export const ANNUAL_COMPLIANCE_MENU_ITEMS: { label: string; slug: string }[] = [
    { label: 'LLP Annual Compliance', slug: 'llp-annual-compliance' },
    { label: 'Private Limited Annual Compliance', slug: 'annual-compliance-private-limited' },
    { label: 'Outsource Bookkeeping Services', slug: 'outsource-bookkeeping-services' },
    { label: 'Bookkeeping & Accounting Services', slug: 'bookkeeping-and-accounting-services' },
    { label: 'Nidhi Company Compliance', slug: 'nidhi-company-compliance' },
    { label: 'Change in LLP Agreement', slug: 'change-in-llp-agreement' },
    { label: 'Appointment of Auditor', slug: 'appointment-of-auditor' },
    { label: 'NGO Compliance', slug: 'ngo-compliance' },
    { label: 'Annual Compliance for Society', slug: 'annual-compliance-society' },
    { label: 'Annual Compliance for Partnership', slug: 'annual-compliance-partnership-firm' },
    { label: 'Form INC-20A', slug: 'form-inc-20a' },
    { label: 'Trust Annual Compliance', slug: 'trust-annual-compliance' },
    { label: 'Partnership Firm Tax Return Filing', slug: 'partnership-firm-tax-return-filing' },
];

export const MCA_SERVICES_MENU_ITEMS: { label: string; slug: string }[] = [
    { label: 'Change Pvt Ltd Company Name', slug: 'change-private-limited-company-name' },
    { label: 'Close Private Limited Company', slug: 'close-private-limited-company' },
    { label: 'Change in Registered Office', slug: 'change-in-registered-office' },
    { label: 'Change in Object Clause', slug: 'change-in-object-clause' },
    { label: 'Revival of Struck Off Companies', slug: 'revival-of-struck-off-companies' },
    { label: 'Change in Director', slug: 'change-in-director' },
    { label: 'Add Designated Partner', slug: 'add-designated-partner' },
    { label: 'DIR-3 KYC for Directors', slug: 'dir-3-kyc-for-directors' },
    { label: 'Strike off Section 8 Companies', slug: 'strike-off-section-8-companies' },
];

export const EVENT_COMPLIANCE_MENU_ITEMS: { label: string; slug: string }[] = [
    { label: 'Winding Up of a Company', slug: 'winding-up-of-company' },
    { label: 'Director Appointment', slug: 'director-appointment' },
    { label: 'Increase Authorized Capital', slug: 'increase-authorized-capital' },
    { label: 'Removal of Director', slug: 'removal-of-director' },
    { label: 'Change of Auditor', slug: 'change-of-auditor' },
    { label: 'Issue of Shares', slug: 'issue-of-shares' },
    { label: 'Transfer of Shares', slug: 'transfer-of-shares' },
];

export const CONVERT_BUSINESS_MENU_ITEMS: { label: string; slug: string }[] = [
    { label: 'Convert Partnership Into LLP', slug: 'convert-partnership-into-llp' },
];

// --- IPR Menu Items (split into 5 sub-categories) ---
export const TRADEMARK_MENU_ITEMS: { label: string; slug: string }[] = [
    { label: 'Trademark Registration', slug: 'trademark-registration' },
    { label: 'Trademark Renewal', slug: 'trademark-renewal' },
    { label: 'Trademark Objection', slug: 'trademark-objection' },
    { label: 'Trademark Opposition', slug: 'trademark-opposition' },
    { label: 'International Trademark Registration', slug: 'international-trademark-registration' },
    { label: 'Trademark Rectification', slug: 'trademark-rectification' },
    { label: 'Trademark Registration for E-commerce', slug: 'trademark-registration-ecommerce' },
    { label: 'Trademark Hearing', slug: 'trademark-hearing' },
    { label: 'Response to Trademark Objection', slug: 'response-to-trademark-objection' },
    { label: 'Trademark Infringement', slug: 'trademark-infringement' },
    { label: 'Trademark Assignment', slug: 'trademark-assignment' },
];

export const COPYRIGHT_MENU_ITEMS: { label: string; slug: string }[] = [
    { label: 'Copyright Registration', slug: 'copyright-registration' },
];

export const PATENT_MENU_ITEMS: { label: string; slug: string }[] = [
    { label: 'Patent Registration', slug: 'patent-registration' },
];

export const DESIGN_MENU_ITEMS: { label: string; slug: string }[] = [
    { label: 'Design Registration', slug: 'design-registration' },
];

export const IP_DISPUTE_MENU_ITEMS: { label: string; slug: string }[] = [
    { label: 'Patent Search', slug: 'patent-search' },
];

// Keep combined IPR list for backward compatibility
export const IPR_MENU_ITEMS: { label: string; slug: string }[] = [
    ...TRADEMARK_MENU_ITEMS, ...COPYRIGHT_MENU_ITEMS,
    ...PATENT_MENU_ITEMS, ...DESIGN_MENU_ITEMS, ...IP_DISPUTE_MENU_ITEMS,
];

// --- Income Tax Menu Items ---
export const INCOME_TAX_MENU_ITEMS: { label: string; slug: string }[] = [
    { label: 'Income Tax Return Filing', slug: 'income-tax-return-filing' },
    { label: 'TDS Return Filing', slug: 'tds-return-filing' },
    { label: 'PF Return Filing', slug: 'pf-return-filing' },
    { label: 'ITR 2 Form Filing', slug: 'itr-2-form-filing' },
    { label: 'ITR 7 Form Filing', slug: 'itr-7-form-filing' },
    { label: 'ITR 1 Form Filing', slug: 'itr-1-form-filing' },
    { label: '80-IAC Tax Exemption', slug: '80-iac-tax-exemption' },
];

// --- GST Menu Items ---
export const GST_MENU_ITEMS: { label: string; slug: string }[] = [
    { label: 'GST Registration', slug: 'gst-registration' },
    { label: 'GST Return Filing', slug: 'gst-return-filing' },
    { label: 'GSTR9 Return Filing', slug: 'gstr9-return-filing' },
    { label: 'Cancel GST Registration', slug: 'cancel-gst-registration' },
    { label: 'Virtual Place of Business in GST', slug: 'virtual-place-of-business-gst' },
    { label: 'Additional Place of Business in GST', slug: 'additional-place-of-business-gst' },
    { label: 'GST Registration for E-commerce', slug: 'gst-registration-ecommerce' },
    { label: 'GST Return Filing for E-commerce', slug: 'gst-return-filing-ecommerce' },
    { label: 'Input Tax Credit', slug: 'input-tax-credit' },
    { label: 'GST E-Invoice', slug: 'gst-e-invoice' },
    { label: 'E-Way Bill Registration', slug: 'e-way-bill-registration' },
];

// --- CA Services Menu Items ---
export const CA_SERVICES_MENU_ITEMS: { label: string; slug: string }[] = [
    { label: 'Online Chartered Accountant Services', slug: 'online-chartered-accountant-services' },
    { label: 'Mergers and Acquisitions', slug: 'mergers-and-acquisitions' },
    { label: 'Financial Consultancy Services', slug: 'financial-consultancy-services' },
    { label: 'Financial Modeling for Startups', slug: 'financial-modeling-for-startups' },
];

// --- Business Consultants Menu Items ---
export const BUSINESS_CONSULTANTS_MENU_ITEMS: { label: string; slug: string }[] = [
    { label: 'Payment Gateway Aggregator Solutions', slug: 'payment-gateway-aggregator' },
    { label: 'Startup Planning', slug: 'startup-planning' },
    { label: 'CSR Registration', slug: 'csr-registration' },
    { label: 'Pitch Deck for Start-ups', slug: 'pitch-deck-for-startups' },
];

// --- Lawyer & Expert Menu Items ---
export const LAWYER_EXPERT_MENU_ITEMS: { label: string; slug: string }[] = [
    { label: 'Consumer Complaint', slug: 'consumer-complaint' },
    { label: 'Cheque Bounce Notice', slug: 'cheque-bounce-notice' },
];

// --- Environmental Menu Items ---
export const ENVIRONMENTAL_MENU_ITEMS: { label: string; slug: string }[] = [
    { label: 'Consent to Establish', slug: 'consent-to-establish' },
    { label: 'Environmental Due Diligence', slug: 'environmental-due-diligence' },
    { label: 'EPR Registration', slug: 'epr-registration' },
    { label: 'Environmental Auditing', slug: 'environmental-auditing' },
    { label: 'Plastic Waste Authorization', slug: 'plastic-waste-authorization' },
    { label: 'EPR Authorization for E-Waste', slug: 'epr-authorization-e-waste' },
    { label: 'Environmental Impact Assessment (EIA)', slug: 'environmental-impact-assessment' },
    { label: 'ROHS Certification', slug: 'rohs-certification' },
    { label: 'Environmental Management Plan Report', slug: 'environmental-management-plan' },
];

// --- Agreements & Contracts Menu Items ---
export const AGREEMENTS_MENU_ITEMS: { label: string; slug: string }[] = [
    { label: 'Memorandum of Understanding (MOU)', slug: 'memorandum-of-understanding' },
    { label: 'Joint Venture Agreement', slug: 'joint-venture-agreement' },
    { label: 'Franchise Agreement', slug: 'franchise-agreement' },
    { label: "Shareholder's Agreement", slug: 'shareholders-agreement' },
    { label: 'Founders Agreement', slug: 'founders-agreement' },
    { label: 'Legal Heir Certificate', slug: 'legal-heir-certificate' },
    { label: 'Sale Deed', slug: 'sale-deed' },
    { label: 'Terms of Use Agreement', slug: 'terms-of-use-agreement' },
    { label: 'Master Service Agreement', slug: 'master-service-agreement' },
    { label: 'Succession Certificate', slug: 'succession-certificate' },
    { label: 'Gift Deed', slug: 'gift-deed' },
    { label: 'Relinquishment Deed', slug: 'relinquishment-deed' },
    { label: 'Transfer Pricing Agreement', slug: 'transfer-pricing-agreement' },
    { label: 'Non-Disclosure Agreement (NDA)', slug: 'non-disclosure-agreement' },
    { label: 'Share Purchase Agreement', slug: 'share-purchase-agreement' },
    { label: 'Service Level Agreement', slug: 'service-level-agreement' },
    { label: 'Probate of Will', slug: 'probate-of-will' },
    { label: 'Fire Department NOC', slug: 'fire-department-noc' },
    { label: 'Non-Compete Agreement', slug: 'non-compete-agreement' },
];

// --- Regulatory Menu Items ---
export const REGULATORY_MENU_ITEMS: { label: string; slug: string }[] = [
    { label: 'NBFC Registration', slug: 'nbfc-registration' },
    { label: 'NBFC Compliance', slug: 'nbfc-compliance' },
    { label: 'Payment Bank License', slug: 'payment-bank-license' },
    { label: 'Payment Gateway License', slug: 'payment-gateway-license' },
    { label: 'Legal Notice for Defamation', slug: 'legal-notice-defamation' },
    { label: 'Legal Notice', slug: 'legal-notice' },
];

// --- Tools & Calculators Menu Items ---
export const TOOLS_MENU_ITEMS: { label: string; slug: string }[] = [
    { label: 'NIC Code', slug: 'nic-code' },
    { label: 'Company Name Check', slug: 'company-name-check' },
    { label: 'Search Registered Company Details', slug: 'search-registered-company' },
    { label: 'Trademark Search', slug: 'trademark-search' },
    { label: 'Trademark Registration Details', slug: 'trademark-registration-details' },
    { label: 'Trademark Class Search', slug: 'trademark-class-search' },
    { label: '8th Pay Commission Salary Calculator', slug: '8th-pay-commission-calculator' },
    { label: 'SIP Calculator', slug: 'sip-calculator' },
    { label: 'Step Up SIP Calculator', slug: 'step-up-sip-calculator' },
    { label: 'HDFC Home Loan EMI Calculator', slug: 'home-loan-emi-calculator' },
    { label: 'GST Calculator', slug: 'gst-calculator' },
    { label: 'Income Tax Calculator', slug: 'income-tax-calculator' },
    { label: 'TDS Interest Calculator', slug: 'tds-interest-calculator' },
    { label: 'TDS Calculator', slug: 'tds-calculator' },
    { label: 'PPF Calculator', slug: 'ppf-calculator' },
    { label: 'GST Interest Calculator', slug: 'gst-interest-calculator' },
];

// --- Labor Law Menu Items ---
export const LABOR_LAW_MENU_ITEMS: { label: string; slug: string }[] = [
    { label: 'SA8000 Certification', slug: 'sa8000-certification' },
];

// --- Resources Menu Items (static links) ---
export const RESOURCES_MENU_ITEMS: { label: string; slug: string }[] = [
    { label: 'Blog', slug: 'blog' },
    { label: 'Guides', slug: 'guides' },
];

// --- Get to Know Us Menu Items (static links) ---
export const GET_TO_KNOW_US_MENU_ITEMS: { label: string; slug: string }[] = [
    { label: 'About Us', slug: 'about-us' },
    { label: 'Contact Us', slug: 'contact-us' },
    { label: 'Reviews', slug: 'reviews' },
];

// --- Partnership Menu Items (static link) ---
export const PARTNERSHIP_MENU_ITEMS: { label: string; slug: string }[] = [
    { label: 'Explore Partnerships', slug: 'partnerships' },
];
