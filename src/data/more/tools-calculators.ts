import type { ServiceData } from '../services';

export const TOOLS_CALCULATORS: Record<string, ServiceData> = {
'nic-code': {
        slug: 'nic-code',
        title: 'NIC Code – National Industrial Classification Code',
        subtitle:
            'Find the correct NIC code for your business with Your Professional. Our expert team helps you identify and apply the right industrial classification code for GST registration, Udyam, company incorporation, and all government filings.',
        heroFeatures: [
            'Instant NIC Code Lookup & Verification',
            'Expert Guidance for GST & Udyam Classification',
            'Covers All 21 Economic Sections & 99 Divisions',
            'Aligned with NIC 2008 & Latest ISIC Standards',
            'End-to-End Support for Business Registration Filings',
        ],
        overview: {
            heading: 'What is a NIC Code and Why Does Your Business Need One?',
            paragraphs: [
                'The National Industrial Classification (NIC) code is a standardized statistical system used by the Government of India to classify economic activities into distinct categories. Maintained by the Central Statistical Organisation (CSO) under the Ministry of Statistics and Programme Implementation, NIC codes form the backbone of all official data collection, economic analysis, and regulatory filings across the country. Every business entity operating in India — whether a sole proprietorship, partnership firm, LLP, or private limited company — is required to declare its NIC code during registration and compliance filings.',
                'NIC codes follow a hierarchical structure comprising sections (single-letter alphabetic codes from A to U), divisions (two-digit numeric codes), groups (three-digit codes), classes (four-digit codes), and sub-classes (five-digit codes). This layered classification allows for extremely precise identification of a business\'s primary economic activity. For instance, a software development company might fall under Section J (Information and Communication), Division 62 (Computer programming, consultancy and related activities), Group 620, and Class 6201 (Computer programming activities). Selecting the correct code is not just a regulatory formality — it directly impacts your GST rate applicability, Udyam registration category, government tender eligibility, MSME benefits, and industry-specific licensing requirements.',
                'Your Professional provides comprehensive NIC code identification services to ensure your business is classified accurately from day one. Misclassification can lead to incorrect tax obligations, denial of subsidies, complications during audits, and difficulties in obtaining industry-specific licenses or permits. Our team of experienced consultants cross-references your business activities against the latest NIC 2008 framework, international ISIC Rev. 4 standards, and current MCA and GST portal requirements to deliver the most accurate classification for your specific operations.',
            ],
            highlights: [
                { icon: '🏭', text: 'Mandatory for GST registration, Udyam, and MCA filings' },
                { icon: '📊', text: 'Hierarchical 5-level structure covering all economic sectors' },
                { icon: '🔍', text: 'Accurate classification ensures correct tax rates and benefits' },
                { icon: '🌐', text: 'Aligned with UN ISIC Rev. 4 international standards' },
            ],
        },
        types: [
            {
                title: 'Section-Level Classification (A–U)',
                desc: 'The broadest tier of NIC classification divides the entire economy into 21 sections identified by single alphabetic characters. These range from Section A (Agriculture, Forestry and Fishing) through Section U (Activities of Extraterritorial Organizations). This level is used for macro-economic reporting and high-level categorization in census data and national accounts.',
            },
            {
                title: 'Division & Group-Level Codes (2–3 Digits)',
                desc: 'Divisions break each section into more specific economic domains using two-digit numeric codes, while groups add a third digit for finer granularity. For example, Division 10 covers "Manufacture of food products" while Group 101 narrows it to "Processing and preserving of meat." These mid-level codes are commonly used in trade licensing, pollution control board registrations, and Shops & Establishment filings.',
            },
            {
                title: 'Class & Sub-Class Codes (4–5 Digits)',
                desc: 'The most granular tiers of the NIC system, class codes (four digits) and sub-class codes (five digits) pinpoint the exact nature of a business activity. Sub-class codes are India-specific extensions added to accommodate the diversity of the Indian economy. These precise codes are mandatory for GST registration, Udyam MSME enrolment, company incorporation on the MCA portal, Import Export Code (IEC) applications, and Professional Tax registration.',
            },
            {
                title: 'Multiple Activity Classification',
                desc: 'Businesses engaged in more than one economic activity can declare multiple NIC codes — one primary code representing the principal revenue-generating activity and secondary codes for ancillary operations. Proper multi-activity classification is critical for composite GST dealers, diversified conglomerates, and enterprises seeking government incentives tied to specific industries.',
            },
        ],
        eligibility: [
            'Any individual or entity starting a new business in India and applying for GST, Udyam, or company registration needs to identify the appropriate NIC code.',
            'Existing businesses updating their GST registration, adding new business verticals, or amending their MCA filings must verify and update their NIC codes.',
            'Sole proprietors, partnership firms, LLPs, private and public limited companies, Section 8 companies, and cooperatives all require NIC codes for statutory filings.',
            'Startups applying for DPIIT recognition under the Startup India initiative must declare their NIC code to establish the nature of their innovation-driven activity.',
            'Businesses applying for MSME or Udyam registration must provide accurate NIC codes to determine their classification as micro, small, or medium enterprise within the correct sector.',
            'Importers and exporters applying for an Import Export Code (IEC) must furnish NIC codes representing their primary trade activity to the Directorate General of Foreign Trade (DGFT).',
            'Entities bidding for government tenders or applying for industry-specific incentive schemes need correctly assigned NIC codes to demonstrate eligibility.',
            'Foreign companies establishing a subsidiary, branch office, or liaison office in India must identify the appropriate NIC code for RBI and MCA filings.',
        ],
        documents: [
            {
                category: 'Business Information Required',
                items: [
                    'Detailed description of your primary business activity and revenue streams',
                    'Products manufactured or services rendered with specifications',
                    'Target industry or sector your business operates in',
                    'Details of raw materials used or inputs consumed (for manufacturing businesses)',
                    'Existing GST registration certificate or application reference (if any)',
                ],
            },
            {
                category: 'Supporting Documents',
                items: [
                    'Certificate of Incorporation / Partnership Deed / LLP Agreement (as applicable)',
                    'Memorandum of Association (MOA) showing the objects clause',
                    'GST registration certificate or ARN (if already registered)',
                    'Udyam Registration Certificate (if already enrolled as MSME)',
                ],
            },
            {
                category: 'For Amendments & Updates',
                items: [
                    'Current NIC code declared in existing registrations',
                    'Board resolution or partner consent letter authorizing the change of business activity',
                    'Revised MOA or supplementary LLP agreement reflecting new business objects',
                    'Updated GST portal login credentials for amendment filing',
                ],
            },
        ],
        process: [
            {
                title: 'Share Your Business Details',
                desc: 'Provide our consultants with a comprehensive description of your business activities, products, services, and revenue model. The more detailed the information, the more precise the NIC code identification.',
                time: 'Day 1',
            },
            {
                title: 'Activity Mapping & Analysis',
                desc: 'Our team maps your business activities to the NIC 2008 hierarchical framework, starting from the section level down to the five-digit sub-class. We consider primary revenue sources, ancillary activities, and future expansion plans.',
                time: '1–2 days',
            },
            {
                title: 'Cross-Reference with Regulatory Portals',
                desc: 'We verify the identified NIC codes against the MCA portal, GST common portal, Udyam registration system, and DGFT IEC database to ensure compatibility and acceptance across all platforms.',
                time: '1 day',
            },
            {
                title: 'Expert Review & Recommendation',
                desc: 'A senior consultant reviews the shortlisted codes, evaluates potential implications on GST rates, MSME benefits, licensing requirements, and government tender eligibility, and provides a final recommendation report.',
                time: '1 day',
            },
            {
                title: 'Client Confirmation & Documentation',
                desc: 'We present the recommended NIC codes with a detailed rationale document explaining the classification logic. You review and confirm the selection before we proceed with any filings.',
                time: '1 day',
            },
            {
                title: 'Integration into Registration Filings',
                desc: 'Upon confirmation, we incorporate the selected NIC codes into your GST registration application, Udyam enrolment, company incorporation forms, or amendment requests as required.',
                time: '1–2 days',
            },
            {
                title: 'Post-Filing Verification',
                desc: 'After submission, we verify that the NIC codes have been correctly recorded on all government portals and provide you with updated certificates and confirmation documents for your records.',
                time: '1–2 days',
            },
        ],
        fees: [
            { item: 'NIC Code Identification & Consultation', cost: '₹500 – ₹1,500' },
            { item: 'Detailed Classification Report', cost: '₹1,000 – ₹2,500' },
            { item: 'NIC Code Amendment in GST Registration', cost: '₹1,500 – ₹3,000' },
            { item: 'NIC Code Update in Udyam Registration', cost: '₹1,000 – ₹2,000' },
            { item: 'Multi-Activity Classification Package', cost: '₹2,500 – ₹5,000' },
            { item: 'Complete Registration Bundle (NIC + Filing)', cost: '₹3,000 – ₹8,000' },
        ],
        advantages: [
            {
                icon: '✅',
                title: 'Regulatory Compliance',
                desc: 'Correct NIC code selection ensures your business meets all statutory requirements for GST, MCA, Udyam, and other government registrations without delays or rejections.',
            },
            {
                icon: '💰',
                title: 'Access to Government Incentives',
                desc: 'Accurate industrial classification opens doors to sector-specific subsidies, MSME benefits, tax holidays, and government procurement preferences tied to particular NIC categories.',
            },
            {
                icon: '📉',
                title: 'Correct Tax Rate Application',
                desc: 'NIC codes directly influence GST rate applicability and professional tax obligations. Proper classification prevents overpayment of taxes or disputes during GST audits.',
            },
            {
                icon: '🏆',
                title: 'Government Tender Eligibility',
                desc: 'Many government tenders and public procurement contracts require businesses to hold specific NIC classifications. Correct coding ensures you qualify for relevant bidding opportunities.',
            },
            {
                icon: '📊',
                title: 'Accurate Business Profiling',
                desc: 'A precisely assigned NIC code creates a credible business profile that banks, investors, and regulatory authorities rely on for due diligence, credit assessment, and licensing decisions.',
            },
            {
                icon: '🔄',
                title: 'Seamless Multi-Platform Filing',
                desc: 'With a verified NIC code, all your registrations across MCA, GST, Udyam, DGFT, and state portals remain consistent, reducing discrepancies and compliance complications.',
            },
        ],
        disadvantages: [
            'NIC codes are based on the NIC 2008 framework and may not perfectly capture newly emerging industries such as blockchain, AI-as-a-Service, or drone technology, requiring businesses to use the closest approximation until the classification system is updated.',
            'Changing a NIC code after registration involves amendment procedures on multiple government portals (GST, MCA, Udyam), which can be time-consuming and may trigger scrutiny or additional document requests from authorities.',
            'Businesses with highly diversified operations spanning multiple unrelated sectors may find it challenging to select a single primary NIC code that fully represents their economic footprint, potentially limiting access to certain sector-specific incentives.',
            'There is no centralized real-time NIC code validation tool provided by the government; different portals may have slightly different dropdown lists or outdated code descriptions, leading to occasional discrepancies across filings.',
        ],
        faqs: [
            {
                q: 'What is a NIC code and who issues it?',
                a: 'NIC stands for National Industrial Classification. It is a statistical standard developed by the Central Statistical Organisation (CSO) under the Ministry of Statistics and Programme Implementation, Government of India. NIC codes are used to classify businesses by their primary economic activity for regulatory, taxation, and statistical purposes.',
            },
            {
                q: 'Where is the NIC code required?',
                a: 'NIC codes are required during GST registration, Udyam MSME registration, company incorporation on the MCA portal, Import Export Code (IEC) application, Professional Tax registration, Shops & Establishment license, factory license applications, and various state and central government incentive scheme applications.',
            },
            {
                q: 'How many digits does a NIC code have?',
                a: 'NIC codes range from one-letter section codes to five-digit sub-class codes. For most government filings such as GST and Udyam registration, you need the five-digit sub-class code, which provides the most precise classification of your business activity.',
            },
            {
                q: 'Can a business have more than one NIC code?',
                a: 'Yes. Businesses engaged in multiple economic activities can declare one primary NIC code for their main revenue-generating activity and additional secondary NIC codes for ancillary operations. The GST portal, MCA forms, and Udyam registration all allow declaration of multiple activity codes.',
            },
            {
                q: 'What happens if I select the wrong NIC code?',
                a: 'Selecting an incorrect NIC code can result in wrong GST rate applicability, denial of MSME benefits, ineligibility for government tenders, complications during tax audits, and difficulties obtaining industry-specific licenses. It is advisable to get professional assistance to ensure accurate classification from the outset.',
            },
            {
                q: 'Can I change my NIC code after registration?',
                a: 'Yes, NIC codes can be amended after registration. For GST, you can file an amendment application on the GST portal. For MCA filings, you may need to update the MOA and file relevant forms. For Udyam, amendments can be done online. Each platform has its own procedure and timelines for processing the change.',
            },
            {
                q: 'What is the difference between NIC code and HSN/SAC code?',
                a: 'NIC codes classify the nature of business activity (what the business does), while HSN (Harmonized System of Nomenclature) codes classify goods and SAC (Services Accounting Code) codes classify services for GST billing purposes. NIC codes are used during registration; HSN/SAC codes are used on invoices and GST returns.',
            },
            {
                q: 'Is the NIC code the same across all government portals?',
                a: 'The underlying NIC 2008 framework is standard, but different portals may present the codes with slightly different descriptions or dropdown structures. Our team ensures the code selected is consistent and accepted across MCA, GST, Udyam, DGFT, and all other relevant platforms to prevent discrepancies in your filings.',
            },
        ],
        cta: {
            heading: 'Find Your Correct NIC Code Today',
            subheading:
                'Let our experts identify and verify the right NIC code for your business. Accurate classification from day one saves you from compliance headaches, audit disputes, and missed government incentives.',
            features: [
                'Expert NIC code identification within 2–3 business days',
                'Cross-verified across GST, MCA, Udyam & DGFT portals',
                'Detailed classification rationale report included',
                'Amendment support for existing registrations',
            ],
        },
    },

    'company-name-check': {
        slug: 'company-name-check',
        title: 'Company Name Availability Check on MCA Portal',
        subtitle:
            'Search and verify your desired company name on the MCA portal with Your Professional. Our naming experts ensure your company name meets all Ministry of Corporate Affairs guidelines and clears RUN (Reserve Unique Name) approval on the first attempt.',
        heroFeatures: [
            'Real-Time MCA Portal Name Availability Search',
            'Expert Analysis of Naming Guidelines & Restrictions',
            'RUN (Reserve Unique Name) Application Filing',
            'Trademark Conflict & Phonetic Similarity Check',
            'Name Reservation Valid for 20 Days with Extension Support',
        ],
        overview: {
            heading: 'Why Is a Company Name Check Essential Before Incorporation?',
            paragraphs: [
                'Choosing the right name for your company is one of the most critical steps in the business incorporation process. Under the Companies Act, 2013, every company registered in India must have a unique name that is not identical or deceptively similar to any existing company, LLP, or registered trademark. The Ministry of Corporate Affairs (MCA) maintains a comprehensive database of all registered entities, and the name you select must pass through their automated screening system as well as manual review by the Registrar of Companies (ROC) before it can be approved and reserved for your use.',
                'The MCA has established detailed naming guidelines under Rule 8 of the Companies (Incorporation) Rules, 2014, which govern what names are permissible, restricted, or prohibited. Names that are identical to existing entities, contain words requiring prior government approval (such as "Bank," "Insurance," "Stock Exchange," or "Reserve"), resemble well-known trademarks, include offensive or undesirable words, or mislead the public about the nature of business activities are routinely rejected. Additionally, phonetic similarity tests are applied — meaning names that sound like existing registered names, even if spelled differently, can also be declined by the ROC.',
                'Your Professional offers a thorough company name availability check service that goes far beyond a simple MCA portal search. Our naming specialists conduct multi-layered screening including MCA database search, trademark registry verification through the Controller General of Patents, Designs and Trademarks (CGPDTM), phonetic similarity analysis, restricted word identification, and compliance with all current SEBI, RBI, and IRDA naming directives. We help you craft a name that is not only legally available but also commercially strong, brand-worthy, and positioned for long-term growth.',
            ],
            highlights: [
                { icon: '🔎', text: 'Multi-database search across MCA, trademark, and LLP registries' },
                { icon: '⚖️', text: 'Full compliance with Companies (Incorporation) Rules, 2014' },
                { icon: '🛡️', text: 'Trademark conflict screening to prevent future disputes' },
                { icon: '📝', text: 'RUN application filing with professional name justification' },
            ],
        },
        types: [
            {
                title: 'New Company Name Search',
                desc: 'A comprehensive name availability check for entrepreneurs and businesses planning to incorporate a new Private Limited Company, Public Limited Company, One Person Company (OPC), or Section 8 Company. This includes screening across MCA databases, LLP registries, and trademark records to ensure the proposed name is unique, compliant, and unlikely to face objection from the ROC.',
            },
            {
                title: 'LLP Name Availability Check',
                desc: 'Dedicated name search for Limited Liability Partnerships filed through the RUN-LLP service on the MCA portal. LLP naming rules have additional nuances — for instance, the name must end with "LLP" or "Limited Liability Partnership" and must not contain words suggesting it is a company. Our service covers all LLP-specific naming provisions under the LLP Act, 2008.',
            },
            {
                title: 'Name Change for Existing Companies',
                desc: 'Companies seeking to rebrand or change their registered name must pass a fresh name availability check and obtain approval through a Special Resolution and ROC filing. We conduct the availability search, draft the board and shareholder resolutions, and file the necessary forms (INC-24) to effect the name change with the Registrar.',
            },
            {
                title: 'Trademark-Integrated Name Search',
                desc: 'A premium search service that combines MCA name availability verification with a detailed trademark search across all 45 classes under the Trade Marks Act, 1999. This integrated approach ensures the name you select for your company can also be registered as a trademark, protecting your brand identity from infringement and opposition proceedings.',
            },
            {
                title: 'Foreign Company Name Clearance',
                desc: 'Foreign companies establishing a subsidiary, joint venture, or wholly owned subsidiary (WOS) in India must ensure their proposed entity name complies with Indian naming regulations while maintaining brand consistency with the parent company. We handle RBI and MCA compliance checks, name reservation, and any approvals required for using a foreign brand name in the Indian entity name.',
            },
        ],
        eligibility: [
            'Any individual, group of promoters, or corporate entity planning to incorporate a new company under the Companies Act, 2013 must perform a name availability check before filing for incorporation.',
            'Existing companies seeking to change their registered name must obtain fresh name approval from the ROC through the prescribed procedure.',
            'LLPs being incorporated or renamed must check name availability through the RUN-LLP service on the MCA portal.',
            'Foreign companies establishing an Indian subsidiary or branch office must verify name availability and compliance with Indian naming regulations before proceeding with RBI and MCA filings.',
            'Startups applying for DPIIT recognition should verify that their proposed company name does not conflict with existing registered entities or trademarks in their sector.',
            'Promoters must have a valid Director Identification Number (DIN) and Digital Signature Certificate (DSC) before applying for name reservation through the RUN service.',
            'At least one proposed director must be an Indian resident (stayed in India for 182+ days in the preceding financial year) for the company to be incorporated under the proposed name.',
        ],
        documents: [
            {
                category: 'For Name Reservation (RUN Application)',
                items: [
                    'Two proposed company names in order of preference with significance and meaning of each name',
                    'Director Identification Number (DIN) of at least one proposed director',
                    'Digital Signature Certificate (DSC) of the applicant director',
                    'Detailed description of the main objects and proposed business activities of the company',
                    'No Objection Certificate (NOC) from an existing company or trademark holder if using a similar or derived name',
                ],
            },
            {
                category: 'For Name Change of Existing Company',
                items: [
                    'Certified copy of the Board Resolution approving the proposed name change',
                    'Certified copy of the Special Resolution passed by shareholders (ordinary resolution for Section 8 companies)',
                    'Altered Memorandum of Association reflecting the new name',
                    'NOC from the Registrar of Companies (if the existing name was reserved by another entity)',
                    'Updated letterhead, common seal design, and signage details reflecting the new name',
                ],
            },
            {
                category: 'Supporting Documents for Trademark-Linked Names',
                items: [
                    'Trademark registration certificate or application receipt (TM-A) from the CGPDTM',
                    'Authorization letter from the trademark owner permitting use of the mark in the company name',
                    'Evidence of prior use of the brand name in commerce (invoices, marketing materials, website screenshots)',
                ],
            },
        ],
        process: [
            {
                title: 'Submit Your Preferred Names',
                desc: 'Share up to three preferred company names with our team along with a brief description of your proposed business activities, target market, and the significance behind each name choice.',
                time: 'Day 1',
            },
            {
                title: 'MCA Database Screening',
                desc: 'We search the MCA company and LLP databases for exact matches, partial matches, and phonetically similar names. This includes checking active companies, struck-off entities, and names currently reserved by other applicants.',
                time: '1 day',
            },
            {
                title: 'Trademark Registry Verification',
                desc: 'A parallel search is conducted on the CGPDTM trademark database across all 45 classes to identify any registered or pending trademarks that could conflict with your proposed company name and trigger opposition proceedings.',
                time: '1 day',
            },
            {
                title: 'Restricted Word & Compliance Analysis',
                desc: 'Our naming experts analyze each proposed name against MCA restricted and prohibited word lists, SEBI naming norms, RBI guidelines for financial terms, and IRDA regulations for insurance-related terminology to preempt any objections from the ROC.',
                time: '1 day',
            },
            {
                title: 'Name Feasibility Report & Recommendation',
                desc: 'We deliver a comprehensive feasibility report ranking your proposed names by likelihood of approval, highlighting potential risks, and recommending modifications if needed to improve the chances of first-attempt clearance.',
                time: '1–2 days',
            },
            {
                title: 'RUN Application Filing on MCA Portal',
                desc: 'Upon your confirmation, we file the RUN (Reserve Unique Name) application on the MCA portal with a professionally drafted name justification letter and all supporting documents. Up to two names can be proposed per RUN application.',
                time: '1 day',
            },
            {
                title: 'ROC Approval & Name Reservation',
                desc: 'The ROC typically processes RUN applications within 2–3 working days. Once approved, the name is reserved for 20 days (extendable by 20 days with a re-submission). We monitor the application status and notify you immediately upon approval or if a resubmission is required.',
                time: '2–3 days',
            },
        ],
        fees: [
            { item: 'Basic Name Availability Search (MCA only)', cost: '₹500 – ₹1,000' },
            { item: 'Comprehensive Name Search (MCA + Trademark)', cost: '₹1,500 – ₹3,000' },
            { item: 'RUN Application Filing (Government Fee)', cost: '₹1,000' },
            { item: 'RUN Re-submission Fee (if name rejected)', cost: '₹1,000' },
            { item: 'Name Change Filing (Form INC-24)', cost: '₹3,000 – ₹8,000' },
            { item: 'Premium Naming Consultation (Branding + Legal)', cost: '₹5,000 – ₹10,000' },
        ],
        advantages: [
            {
                icon: '⚡',
                title: 'First-Attempt Approval',
                desc: 'Our multi-layered screening process dramatically increases the probability of your company name being approved by the ROC on the very first RUN application, saving time and avoiding resubmission fees.',
            },
            {
                icon: '🛡️',
                title: 'Trademark Conflict Prevention',
                desc: 'By conducting parallel trademark registry searches, we ensure your company name does not infringe on existing trademarks, preventing costly legal disputes, cease-and-desist notices, and forced rebranding down the line.',
            },
            {
                icon: '📋',
                title: 'Full Regulatory Compliance',
                desc: 'Every name recommendation is vetted against MCA naming rules, SEBI guidelines, RBI directives, and IRDA norms so your company name meets all regulatory requirements across financial, corporate, and sectoral frameworks.',
            },
            {
                icon: '🎯',
                title: 'Brand-Ready Naming',
                desc: 'Beyond legal compliance, our naming consultation considers brand positioning, domain availability, phonetic appeal, and market perception to help you choose a name that works as a powerful business asset.',
            },
            {
                icon: '⏱️',
                title: 'Faster Incorporation Timeline',
                desc: 'A pre-verified company name eliminates back-and-forth with the ROC, reducing your overall incorporation timeline by 5–10 days compared to applicants who face name rejections and must restart the process.',
            },
            {
                icon: '🔒',
                title: 'Name Reservation Security',
                desc: 'Once approved, your company name is reserved exclusively for 20 days (extendable to 40 days), giving you a protected window to complete your incorporation documentation without the risk of another entity claiming the same name.',
            },
        ],
        disadvantages: [
            'The RUN service allows only two name proposals per application. If both names are rejected, you must file a fresh RUN application with a new government fee of ₹1,000, which can increase costs for applicants with highly competitive or generic name preferences.',
            'Name reservation through RUN is valid for only 20 days (extendable once for another 20 days). If the incorporation is not completed within this window, the reserved name lapses and becomes available to other applicants, requiring a fresh reservation.',
            'The ROC\'s assessment of "deceptive similarity" and "undesirability" involves subjective judgment, meaning names that appear clearly distinct to applicants may still be rejected based on the Registrar\'s interpretation of phonetic or conceptual resemblance to existing entities.',
            'Companies using names that include words like "National," "Bharat," "Indian," "Hindustan," or sector-specific terms like "Bank," "Insurance," or "Exchange" require prior approval from the Central Government or relevant regulatory body, adding 15–30 days to the naming process.',
        ],
        faqs: [
            {
                q: 'How do I check if a company name is available in India?',
                a: 'You can check company name availability on the MCA portal using the "Check Company Name" feature or through the RUN (Reserve Unique Name) service. However, a basic portal search only checks for exact matches. For a thorough check that includes phonetic similarity, trademark conflicts, and restricted word analysis, it is advisable to use professional name screening services like those offered by Your Professional.',
            },
            {
                q: 'What is the RUN service on the MCA portal?',
                a: 'RUN stands for Reserve Unique Name. It is an online service on the MCA portal that allows proposed directors to apply for reservation of a company name before filing for incorporation. You can propose up to two names per application, and the ROC typically processes the application within 2–3 working days. The government fee for a RUN application is ₹1,000.',
            },
            {
                q: 'How long is a company name reserved after RUN approval?',
                a: 'A company name approved through the RUN service is reserved for 20 days from the date of approval. If you are unable to complete the incorporation within this period, you can apply for a 20-day extension by re-submitting the RUN form. If the name is not used within the extended period, it lapses and becomes available for others.',
            },
            {
                q: 'What are the naming guidelines for a company in India?',
                a: 'Under Rule 8 of the Companies (Incorporation) Rules, 2014, a company name must not be identical or deceptively similar to an existing company or LLP, must not resemble a registered trademark, must not contain prohibited or offensive words, must not suggest government patronage unless approved, and must clearly indicate the type of company (e.g., "Private Limited" or "Limited"). Names using certain words like "Bank," "Insurance," or "Stock Exchange" require prior approval from the relevant regulatory authority.',
            },
            {
                q: 'Can my company name be rejected even after RUN approval?',
                a: 'In rare cases, yes. If it is later discovered that the name was obtained by furnishing wrong or misleading information, or if a trademark holder files an objection within the prescribed period, the ROC can direct the company to change its name within 3 months. Additionally, the Central Government has the power under Section 16 of the Companies Act, 2013 to order a name change if the name is found to be identical or too similar to an existing entity.',
            },
            {
                q: 'What is the difference between RUN and SPICe+ name reservation?',
                a: 'RUN is a standalone name reservation service where you reserve a name before incorporation. SPICe+ (Simplified Proforma for Incorporating Company Electronically Plus) is the integrated incorporation form that includes name reservation as Part A. If you use SPICe+ Part A for name reservation, the approved name is automatically carried forward to Part B for incorporation. RUN is useful when you want to reserve a name well in advance of incorporation.',
            },
            {
                q: 'Can I use a foreign language word in my company name?',
                a: 'Yes, you can use a foreign language word in your company name, but you must provide the exact English translation and meaning in the RUN application. The ROC will evaluate whether the translated meaning is acceptable under Indian naming guidelines. Names in regional Indian languages (written in their respective scripts) are also permissible, but the English transliteration must be provided and will be used for all official MCA records.',
            },
            {
                q: 'How much does it cost to reserve a company name?',
                a: 'The government fee for filing a RUN application is ₹1,000 per submission. If both proposed names are rejected and you need to file again, another ₹1,000 fee is applicable. Professional service charges for comprehensive name screening, trademark verification, and RUN filing typically range from ₹1,500 to ₹5,000 depending on the scope of the search and the complexity of the naming requirements.',
            },
        ],
        cta: {
            heading: 'Reserve Your Perfect Company Name Now',
            subheading:
                'Don\'t let a name rejection delay your business launch. Our naming experts conduct thorough MCA, trademark, and compliance screening to help you secure the ideal company name on the first attempt.',
            features: [
                'Comprehensive MCA + Trademark name screening',
                'Professional RUN application filing with justification',
                'First-attempt approval rate of over 95%',
                'Complete name change support for existing companies',
            ],
        },
    },

'search-registered-company': {
    slug: 'search-registered-company',
    title: 'Search Registered Company Details',
    subtitle:
      'Learn how to search and verify registered company details on the MCA21 portal — access CIN, director information, financial filings, and compliance history of any company registered in India.',

    heroFeatures: [
      'Instant Access to MCA21 Company Master Data',
      'Verify CIN, Directors, Registered Address & Status',
      'Check Filing History & Annual Compliance Records',
      'Identify Charges, Mortgages & Financial Obligations',
      'Free Public Search Available on MCA Portal',
    ],

    overview: {
      heading: 'How to Search Registered Company Details on the MCA21 Portal',
      paragraphs: [
        'The Ministry of Corporate Affairs (MCA) maintains a comprehensive digital registry of every company incorporated in India through the MCA21 portal. This publicly accessible database allows anyone — entrepreneurs, investors, vendors, legal professionals, or curious individuals — to search and verify details of any registered company. The Company Master Data section provides critical information including the Corporate Identification Number (CIN), registered office address, date of incorporation, authorised and paid-up capital, company status (active, struck off, dormant, or under liquidation), and the listing of current and former directors.',
        'Conducting a company search is an essential due diligence step before entering into business relationships, investment agreements, vendor contracts, or employment with any organisation. By reviewing the publicly available records on MCA21, you can confirm whether a company is legitimately registered, whether it is actively compliant with statutory filings, and whether any charges or encumbrances exist against its assets. The portal also provides access to filed documents such as annual returns (Form AOC-4), financial statements, and change-of-director filings, all of which paint a comprehensive picture of the company\'s operational and financial health.',
        'The MCA21 portal underwent a significant upgrade to MCA21 Version 3 (V3), introducing a modernised interface, improved search functionality, and integrated services. Whether you use the free Company Master Data search or opt for detailed document viewing through the paid MCA services, understanding how to navigate this portal is a valuable skill for anyone involved in business, law, or finance in India.',
      ],
      highlights: [
        { icon: '🔍', text: 'Search any Indian registered company by name, CIN, or director name — completely free on MCA21' },
        { icon: '📊', text: 'Access real-time company status: Active, Dormant, Struck Off, Under Liquidation, or Dissolved' },
        { icon: '🏛️', text: 'Governed by the Companies Act, 2013 — all registered entities must file with the Registrar of Companies (ROC)' },
        { icon: '📋', text: 'View historical filing records, director changes, charge registrations, and compliance timelines' },
      ],
    },

    types: [
      {
        title: 'Company Name Search',
        desc: 'Search for a company using its full or partial name. The MCA21 portal returns matching results from the Company Master Data, displaying basic details such as CIN, registration date, state, and current status. This is the most common search method when you know the company name but not its unique identification number.',
      },
      {
        title: 'CIN / LLPIN Search',
        desc: 'If you already have the Corporate Identification Number (CIN) for a company or the Limited Liability Partnership Identification Number (LLPIN) for an LLP, you can directly look up comprehensive details. This returns a complete profile including registered address, authorised capital, paid-up capital, company category, sub-category, class, and the full list of directors with their DINs.',
      },
      {
        title: 'Director Search (DIN-Based)',
        desc: 'Search using a Director Identification Number (DIN) to find all companies where a particular individual serves or has served as a director. This is invaluable for background checks, identifying conflicts of interest, or mapping the business network of an individual across multiple entities.',
      },
      {
        title: 'Charge / Borrowing Search',
        desc: 'Review all registered charges (mortgages, pledges, hypothecations) against a company\'s assets filed with the ROC. This search reveals outstanding borrowings, the charge holder (typically a bank or NBFC), creation and satisfaction dates, and the nature of assets charged. Essential for credit risk assessment and financial due diligence.',
      },
      {
        title: 'Document Search & Viewing',
        desc: 'Access and download filed statutory documents including annual returns (MGT-7/MGT-7A), financial statements (AOC-4/AOC-4 XBRL), incorporation documents (MOA & AOA), board resolutions, and event-based filings. While basic search is free, viewing certain documents requires payment of a nominal MCA fee.',
      },
    ],

    eligibility: [
      'Any Indian citizen or foreign national can search registered company details on the MCA21 portal — no registration or login required for basic Company Master Data search.',
      'For viewing or downloading detailed filed documents (annual returns, financial statements, MOA/AOA), users must create an MCA21 account and pay the applicable document viewing fee.',
      'Professionals such as Chartered Accountants (CAs), Company Secretaries (CSs), and Advocates with MCA-registered credentials can access additional professional dashboards and bulk data services.',
      'Government agencies, regulatory bodies, and law enforcement can request extended data access through formal channels with the Ministry of Corporate Affairs.',
      'Banks, financial institutions, and credit rating agencies can use MCA data for credit assessment and KYC verification under RBI guidelines.',
      'Researchers and academic institutions may access aggregated MCA data for studies related to corporate governance, compliance trends, and economic analysis.',
      'Foreign investors and international entities can search Indian company records for cross-border due diligence, FDI compliance verification, and pre-investment analysis.',
    ],

    documents: [
      {
        category: 'Information You Can Retrieve (Company Profile)',
        items: [
          'Corporate Identification Number (CIN) and Registration Number',
          'Company name, registered office address, email, and date of incorporation',
          'Authorised share capital and paid-up share capital',
          'Company category (Limited by Shares, Guarantee, Unlimited), sub-category, and class (Private/Public)',
          'Current company status: Active, Dormant, Struck Off, Under Liquidation, Dissolved, or Amalgamated',
        ],
      },
      {
        category: 'Director & Key Personnel Records',
        items: [
          'Full list of current directors with DIN, name, designation, and date of appointment',
          'Details of resigned or disqualified directors with effective dates',
          'Company Secretary and compliance officer details (for listed and large companies)',
          'Signatory details for recent statutory filings',
        ],
      },
      {
        category: 'Filing & Compliance History',
        items: [
          'Annual return filing dates (Form MGT-7 / MGT-7A) and financial statement filing dates (Form AOC-4)',
          'Event-based filings: allotment of shares (PAS-3), change of directors (DIR-12), change of registered office (INC-22)',
          'Charge registration and modification records (CHG-1, CHG-4, CHG-9)',
          'Details of any compounding applications, penalties imposed, or strike-off proceedings',
          'Dormant company status applications and active company tagging (ACTIVE Form INC-22A)',
        ],
      },
    ],

    process: [
      {
        title: 'Visit the MCA21 Portal',
        desc: 'Navigate to the official MCA21 website (www.mca.gov.in). On the homepage, locate the "MCA Services" tab or the direct link to the Company/LLP Master Data section. The portal is accessible 24/7 from any device with an internet connection.',
        time: '1 minute',
      },
      {
        title: 'Select Your Search Method',
        desc: 'Choose from the available search options: Company Name, CIN/LLPIN, or Director (DIN). For the most accurate results, use the CIN if available. For name-based searches, use the full legal name as registered — avoid abbreviations or trade names that may differ from the registered entity name.',
        time: '1 minute',
      },
      {
        title: 'Enter Search Parameters & View Results',
        desc: 'Input your search query and complete the CAPTCHA verification. The portal returns a list of matching companies. Click on the desired company to open its detailed Company Master Data page showing CIN, status, registered address, capital details, and director information.',
        time: '2–3 minutes',
      },
      {
        title: 'Review Company Master Data Profile',
        desc: 'Carefully examine the company profile. Verify the company status (Active is the most reassuring), check the date of last AGM and date of latest balance sheet to assess filing compliance, review the registered office address for legitimacy, and note the authorised vs. paid-up capital for financial assessment.',
        time: '5–10 minutes',
      },
      {
        title: 'Check Director History & Associations',
        desc: 'Navigate to the director details section to review the list of current and former directors. Note their DINs and use the Director Search feature to check their involvement in other entities — this helps identify potential conflicts of interest, shell company networks, or serial defaulters.',
        time: '5–10 minutes',
      },
      {
        title: 'Examine Charges & Borrowings',
        desc: 'Access the Charge Details section to review all registered and satisfied charges. Active charges indicate outstanding borrowings — check the charge holder (bank/NBFC), date of creation, amount secured, and nature of assets pledged. Unsatisfied old charges may signal financial distress or administrative negligence.',
        time: '5–10 minutes',
      },
      {
        title: 'Download Filed Documents (Optional)',
        desc: 'For deeper analysis, access the document filing history. View or download annual returns, financial statements, board resolutions, and incorporation documents. Some documents require MCA login and payment of ₹100 per document. Downloaded documents provide the most comprehensive insight into the company\'s operations and financial health.',
        time: '10–15 minutes',
      },
    ],

    fees: [
      { item: 'Company Master Data Search', cost: 'Free (No charge)' },
      { item: 'Director / DIN Search', cost: 'Free (No charge)' },
      { item: 'Viewing Index of Charges', cost: 'Free (No charge)' },
      { item: 'Viewing Filed Documents (per document)', cost: '₹100' },
      { item: 'Certified Copy of Documents (per document)', cost: '₹500 – ₹1,000' },
      { item: 'Third-Party Due Diligence Report (Professional Service)', cost: '₹2,000 – ₹15,000 depending on scope' },
    ],

    advantages: [
      {
        icon: '🆓',
        title: 'Free & Publicly Accessible',
        desc: 'Basic company search on MCA21 is completely free and available to anyone without requiring login or registration — making it the most accessible corporate due diligence tool in India.',
      },
      {
        icon: '⚡',
        title: 'Instant Verification',
        desc: 'Results are returned in real-time, allowing you to instantly verify whether a company is legitimately registered, currently active, and compliant with filing obligations before making any business decision.',
      },
      {
        icon: '🔒',
        title: 'Authentic Government Source',
        desc: 'Data is sourced directly from the Registrar of Companies under the Ministry of Corporate Affairs — the only authoritative registry for Indian companies, ensuring accuracy and legal admissibility.',
      },
      {
        icon: '🕵️',
        title: 'Comprehensive Due Diligence',
        desc: 'From director backgrounds to charge registrations and filing history, MCA21 provides a 360-degree view of any company — enabling thorough pre-transaction due diligence without relying on third parties.',
      },
      {
        icon: '🌐',
        title: 'Accessible from Anywhere',
        desc: 'The MCA21 V3 portal is accessible globally, allowing international investors, NRIs, and foreign entities to verify Indian company credentials from any location before committing to cross-border transactions.',
      },
      {
        icon: '📈',
        title: 'Track Compliance Health',
        desc: 'By reviewing filing dates for annual returns and financial statements, you can quickly assess whether a company maintains good compliance standing — a strong indicator of operational discipline and governance quality.',
      },
    ],

    disadvantages: [
      'The MCA21 portal occasionally experiences downtime, slow loading, or CAPTCHA issues — particularly during peak hours or at financial year-end when filing volumes surge, which can delay urgent searches.',
      'While basic company data is free, accessing detailed filed documents (financial statements, annual returns, MOA/AOA) requires payment of ₹100 per document, which adds up when conducting extensive due diligence on multiple entities.',
      'The portal only contains information for companies and LLPs registered under the Companies Act or LLP Act — proprietary firms, partnership firms (registered under the Partnership Act), trusts, and societies are not covered in MCA records.',
      'Historical data for very old filings (pre-MCA21 digitisation era) may be incomplete, scanned in poor quality, or entirely unavailable — limiting research on companies incorporated before 2006–2007.',
    ],

    faqs: [
      {
        q: 'Is it free to search company details on the MCA portal?',
        a: 'Yes, the basic Company Master Data search is completely free and does not require any login or registration. You can search by company name, CIN, or DIN at no cost. However, viewing or downloading detailed filed documents such as annual returns and financial statements requires an MCA account and a fee of ₹100 per document.',
      },
      {
        q: 'What is a CIN and where can I find it?',
        a: 'CIN stands for Corporate Identification Number — a unique 21-character alphanumeric code assigned to every company registered with the ROC. It encodes the state of registration, year of incorporation, company type, and registration number. You can find a company\'s CIN on its Certificate of Incorporation, official letterheads, invoices, or by searching the company name on the MCA21 portal.',
      },
      {
        q: 'Can I find out who the directors of a company are?',
        a: 'Yes. The Company Master Data page on MCA21 lists all current directors along with their Director Identification Numbers (DINs), names, designations, and appointment dates. You can also use the Director Search (DIN-based) to find all companies where a specific individual holds or has held directorship.',
      },
      {
        q: 'How do I check if a company is still active or has been struck off?',
        a: 'On the Company Master Data page, look for the "Company Status" field. An active and compliant company will show "Active." Other statuses include "Dormant," "Struck Off" (removed from the register for non-compliance), "Under Liquidation," "Dissolved," or "Amalgamated." Also check the "Date of Last AGM" and "Date of Latest Balance Sheet" — if these are several years old, the company may be non-compliant even if technically active.',
      },
      {
        q: 'Can I search for companies registered in a specific state or industry?',
        a: 'The basic MCA21 search does not offer advanced filters by state or industry directly. However, you can derive state information from the CIN (the first letter indicates the state code) and use partial name searches to narrow results. For bulk industry or state-wise data, the MCA provides downloadable datasets and the "MCA Data & Reports" section offers aggregated statistical information.',
      },
      {
        q: 'What should I look for when conducting due diligence on a company?',
        a: 'Focus on five key areas: (1) Company Status — ensure it is "Active"; (2) Filing Compliance — check that annual returns and financial statements are filed regularly and recently; (3) Director Background — review current directors and their associations with other entities; (4) Charges — examine outstanding borrowings and whether charges have been satisfied; (5) Capital Structure — compare authorised and paid-up capital to understand the company\'s financial commitment and scale.',
      },
      {
        q: 'Is MCA data sufficient for complete due diligence before investing?',
        a: 'MCA data provides a strong foundation but should not be the sole source. For comprehensive due diligence, supplement MCA records with GST verification (on the GST portal), CIBIL/credit checks, legal case searches (on eCourts or NCLT), trademark/IP verification, and physical verification of the registered office. Professional due diligence services combine all these data sources into a consolidated assessment.',
      },
      {
        q: 'Can foreign nationals access the MCA21 portal?',
        a: 'Yes, the MCA21 portal is publicly accessible globally. Foreign nationals, NRIs, and international businesses can search Indian company details without any restrictions. For downloading documents, they would need to create an MCA account and can pay the applicable fees. This makes the portal a valuable tool for international investors conducting pre-investment due diligence on Indian entities.',
      },
    ],

    cta: {
      heading: 'Need Help Verifying a Company?',
      subheading:
        'Our experts conduct comprehensive company due diligence using MCA records, GST verification, credit checks, and legal searches — delivering a detailed report so you can make informed decisions.',
      features: [
        'Complete MCA21 Company Profile Analysis',
        'Director Background & Cross-Entity Checks',
        'Charge & Borrowing Verification',
        'Filing Compliance & Financial Health Assessment',
        'Professional Due Diligence Report Delivered in 3–5 Days',
      ],
    },
  },

  'trademark-search': {
    slug: 'trademark-search',
    title: 'Trademark Search',
    subtitle:
      'Conduct a comprehensive trademark search on the IP India portal before filing your application — verify availability, identify conflicting marks, and strengthen your brand protection strategy.',

    heroFeatures: [
      'Search the Official IP India Trademark Database',
      'Check Trademark Availability Across 45 Classes',
      'Identify Identical & Deceptively Similar Marks',
      'Review Trademark Status: Registered, Pending, Opposed, Abandoned',
      'Essential Pre-Filing Step to Avoid Objections & Rejections',
    ],

    overview: {
      heading: 'What is a Trademark Search and Why is it Important?',
      paragraphs: [
        'A trademark search is the critical first step in the brand registration process — it involves systematically searching the Indian Trademark Registry database (maintained by the Controller General of Patents, Designs and Trade Marks under the Department for Promotion of Industry and Internal Trade) to determine whether a proposed trademark is available for registration or if identical or deceptively similar marks already exist. The search is conducted through the IP India public search portal and covers all 45 trademark classes defined under the Nice Classification system, encompassing goods (Classes 1–34) and services (Classes 35–45).',
        'Filing a trademark application without conducting a thorough search is one of the most common and costly mistakes businesses make. If an identical or confusingly similar mark already exists in the same or related class, the Trademark Registrar will raise an objection under Section 11 of the Trade Marks Act, 1999, or an existing trademark holder may file an opposition under Section 21 — both of which result in delays, additional legal costs, and potential rejection of your application. A comprehensive pre-filing search helps you evaluate the registrability of your proposed mark, identify potential conflicts early, and make informed decisions about proceeding, modifying, or selecting an alternative mark.',
        'Beyond the official IP India database, a thorough trademark search also considers common law rights (unregistered marks in commercial use), domain name registrations, business name registrations, and social media handles. While the IP India portal provides the most authoritative data on registered and pending trademarks, a multi-layered search approach — often called a "comprehensive" or "full" trademark search — significantly reduces the risk of post-filing complications and strengthens your overall brand protection strategy.',
      ],
      highlights: [
        { icon: '🔎', text: 'Search over 30 lakh+ trademark records on the IP India public database — completely free to access' },
        { icon: '⚖️', text: 'Governed by the Trade Marks Act, 1999 and Trade Marks Rules, 2017 — non-compliance risks refusal or opposition' },
        { icon: '🛡️', text: 'Identifies potential Section 9 (absolute grounds) and Section 11 (relative grounds) refusal risks before filing' },
        { icon: '📑', text: 'Covers all 45 Nice Classification classes — essential for multi-class brand protection planning' },
      ],
    },

    types: [
      {
        title: 'Wordmark Search',
        desc: 'A wordmark search focuses on the textual element of a proposed trademark — the brand name, tagline, or slogan in plain text without any specific font, colour, or design. This is the most common and important type of search because word elements carry the highest distinctiveness weight. The search identifies identical matches, phonetically similar marks (e.g., "Zee" vs. "Xee"), and visually similar spellings across all relevant trademark classes.',
      },
      {
        title: 'Device / Logo Search (Vienna Classification)',
        desc: 'A device search examines graphical elements — logos, symbols, emblems, or design marks — using the Vienna Classification system that categorises images into codes. For example, a lion device falls under Vienna Code 03.01. This search ensures your proposed logo does not conflict with existing registered or pending device marks. It is especially important when the visual identity (rather than the name) is the primary brand differentiator.',
      },
      {
        title: 'Phonetic / Sound-Alike Search',
        desc: 'A phonetic search identifies marks that may not be visually identical but sound similar when spoken aloud. This is critical in India\'s multilingual market where marks may be transliterated across Hindi, English, Tamil, and other languages. For instance, "Kleen" and "Clean" are phonetically identical and would likely be refused as deceptively similar. The Trademark Registry applies phonetic comparison as a key test during examination.',
      },
      {
        title: 'Class-Specific Combined Search',
        desc: 'A class-specific search examines availability within a particular Nice Classification class or group of related classes. Since trademark protection is class-specific, a mark may be available in Class 25 (clothing) but not in Class 9 (electronics). This search is essential for businesses operating across multiple product or service categories who need multi-class filing strategies.',
      },
      {
        title: 'Comprehensive / Full Availability Search',
        desc: 'A comprehensive search combines wordmark, device, phonetic, and class-specific searches with additional layers — including state trademark registries, common law usage, domain registrations, company name databases (MCA), and social media presence. This premium search provides the highest confidence level and is recommended for businesses making significant brand investments or entering crowded market segments.',
      },
    ],

    eligibility: [
      'Any individual (Indian citizen or foreign national) who intends to use or is already using a trademark in connection with goods or services can conduct a trademark search.',
      'Proprietorship firms, partnership firms, LLPs, and companies of any type (Private Limited, Public Limited, OPC, Section 8) can search for trademarks before filing applications.',
      'Startups and entrepreneurs at the ideation stage should conduct trademark searches before finalising brand names, logos, or taglines to avoid costly rebranding later.',
      'Trademark attorneys, IP professionals, and registered trademark agents conduct searches on behalf of their clients as part of pre-filing due diligence and opinion letters.',
      'Existing trademark holders can conduct monitoring searches to identify potentially infringing or deceptively similar marks filed by third parties in order to initiate opposition proceedings.',
      'Foreign entities and multinational corporations can search the Indian trademark database to assess brand availability before entering the Indian market or filing convention-priority applications.',
      'E-commerce sellers, exporters, and franchise businesses should search trademarks to ensure their brand names do not conflict with existing registrations in their operating classes.',
      'Investors and acquirers conduct trademark searches as part of intellectual property due diligence during mergers, acquisitions, and funding rounds to evaluate the target company\'s brand portfolio strength.',
    ],

    documents: [
      {
        category: 'Information Required for Conducting a Search',
        items: [
          'Exact proposed trademark (word, phrase, tagline, or slogan) as intended to be used',
          'High-resolution image of the proposed logo or device mark (if applicable)',
          'Identified Nice Classification class(es) relevant to your goods or services',
          'Name of the proposed proprietor / applicant entity for conflict assessment',
          'Description of the goods or services the mark will represent',
        ],
      },
      {
        category: 'Documents Needed for Filing After Search (Preparation)',
        items: [
          'Trademark application Form TM-A with detailed goods/services description',
          'Power of Attorney (Form TM-48) if filing through a registered trademark agent or attorney',
          'Copy of the logo in JPEG format (min. 8 cm × 8 cm) for device or combined marks',
          'Proof of claim to proprietorship: certificate of incorporation, partnership deed, or identity proof',
          'Priority document from the home country (if claiming convention priority under the Paris Convention)',
        ],
      },
      {
        category: 'Supporting Evidence for Stronger Applications',
        items: [
          'Proof of prior use: invoices, advertisements, packaging, or website screenshots showing the mark in commerce with dates',
          'Affidavit of use detailing the date of first use, geographical extent, and sales turnover associated with the mark',
          'Market survey reports or brand recognition studies (useful for well-known trademark claims under Section 11(6))',
          'Domain name registration certificates and social media handle ownership records supporting brand identity',
        ],
      },
    ],

    process: [
      {
        title: 'Define Your Trademark & Identify Relevant Classes',
        desc: 'Before searching, clearly define the mark you intend to register — whether it is a word, logo, combination, sound, or three-dimensional shape. Then identify the appropriate Nice Classification class(es) that cover your goods or services. Use the Nice Classification guide or consult a trademark professional to ensure correct class selection, as searching the wrong class produces misleading results.',
        time: '30 minutes – 1 hour',
      },
      {
        title: 'Access the IP India Public Search Portal',
        desc: 'Navigate to the official IP India trademark search website (ipindiaonline.gov.in/tmrpublicsearch). The portal offers multiple search options: Wordmark Search, Vienna Code (Device) Search, Phonetic Search, and Combined Search. The database is updated regularly and contains records of all trademark applications filed with the Indian Trademark Registry since digitisation.',
        time: '2–3 minutes',
      },
      {
        title: 'Conduct Wordmark & Phonetic Searches',
        desc: 'Enter your proposed trademark in the Wordmark search field and select the relevant class(es). Review all returned results for identical and similar marks. Then conduct a separate Phonetic search to catch sound-alike conflicts that may not appear in text-based searches. Record the application numbers, statuses, and proprietor names of all potentially conflicting marks.',
        time: '30–45 minutes',
      },
      {
        title: 'Perform Device / Logo Search (If Applicable)',
        desc: 'If your trademark includes a graphical element, use the Vienna Classification-based device search. Identify the correct Vienna Code for your logo (e.g., 03.01 for lions, 05.03 for trees, 26.01 for geometric shapes) and search within your target classes. Review returned results for visually similar devices that could create confusion in the marketplace.',
        time: '20–30 minutes',
      },
      {
        title: 'Analyse Search Results & Assess Risk',
        desc: 'Evaluate each conflicting result based on: (a) similarity of the mark — visual, phonetic, and conceptual; (b) similarity of the goods/services — same class, related classes, or complementary offerings; (c) status of the conflicting mark — registered, pending, opposed, abandoned, or expired; and (d) proprietor details. Marks that are abandoned, expired, or removed pose no threat, while registered or pending marks in the same class present high risk.',
        time: '1–2 hours',
      },
      {
        title: 'Conduct Extended Searches (Recommended)',
        desc: 'For high-confidence assessments, extend your search beyond IP India to include the MCA company name database, domain registries (WHOIS), state-level trademark registries, e-commerce marketplace brand registries, and social media platforms. This multi-layered approach uncovers common law usage and unregistered marks that may still have enforceable rights under the Trade Marks Act.',
        time: '1–3 hours',
      },
      {
        title: 'Obtain a Professional Search Opinion & Proceed',
        desc: 'Based on the search findings, obtain a written registrability opinion from a trademark attorney or IP professional. The opinion should cover the likelihood of registration, potential opposition risks, and recommendations — whether to proceed as-is, modify the mark, or select an alternative. With a positive opinion, you can confidently proceed to file your trademark application on the IP India portal.',
        time: '1–2 working days',
      },
    ],

    fees: [
      { item: 'IP India Public Search Portal Access', cost: 'Free (No charge)' },
      { item: 'Professional Trademark Search (Single Class)', cost: '₹1,500 – ₹3,000' },
      { item: 'Comprehensive Multi-Class Search (All 45 Classes)', cost: '₹5,000 – ₹10,000' },
      { item: 'Trademark Search with Registrability Opinion (Attorney)', cost: '₹3,000 – ₹8,000' },
      { item: 'International Trademark Search (WIPO / Madrid Protocol)', cost: '₹8,000 – ₹20,000 depending on jurisdictions' },
      { item: 'Ongoing Trademark Watch / Monitoring Service (Annual)', cost: '₹5,000 – ₹15,000 per class per year' },
    ],

    advantages: [
      {
        icon: '🎯',
        title: 'Avoid Costly Rejections & Objections',
        desc: 'A thorough pre-filing search identifies identical and similar existing marks, dramatically reducing the risk of examination objections under Section 11 or opposition proceedings — saving you months of delay and thousands in legal fees.',
      },
      {
        icon: '💡',
        title: 'Make Informed Branding Decisions',
        desc: 'Search results empower you to choose brand names and logos with the highest registrability potential. If conflicts are found early, you can modify or pivot before investing in packaging, marketing materials, signage, and domain purchases.',
      },
      {
        icon: '⚡',
        title: 'Faster Registration Process',
        desc: 'Applications filed after comprehensive searches experience significantly fewer objections and proceed to registration faster — often within 6–8 months compared to 18–24 months for contested applications.',
      },
      {
        icon: '🛡️',
        title: 'Stronger Legal Protection',
        desc: 'A well-searched trademark that clears all conflict checks stands on stronger legal ground. If you ever need to enforce your mark against infringers, a clean search history demonstrates that your adoption was in good faith and without intent to copy.',
      },
      {
        icon: '💰',
        title: 'Protect Your Brand Investment',
        desc: 'Rebranding due to a failed trademark application or infringement claim is extremely expensive — new logos, packaging, signage, marketing, and lost brand equity. A ₹2,000–₹5,000 search can protect lakhs of rupees in brand investment.',
      },
      {
        icon: '🌍',
        title: 'Foundation for International Expansion',
        desc: 'A clean Indian trademark search is the first step toward international brand protection via the Madrid Protocol. Establishing your mark in India as a "home registration" enables cost-effective extension to 130+ member countries.',
      },
    ],

    disadvantages: [
      'The IP India public search portal can be slow, occasionally unresponsive, and has a dated user interface — searches may require multiple attempts, and results are not always presented in the most user-friendly format, making analysis cumbersome for non-professionals.',
      'The database primarily covers marks filed with the Indian Trademark Registry and may not capture all unregistered marks in commercial use, state-level registrations, or very recent filings that have not yet been indexed — creating blind spots in the search.',
      'Trademark search results require professional interpretation — determining whether two marks are "deceptively similar" involves subjective assessment of visual, phonetic, and conceptual similarity that automated search tools cannot fully evaluate, necessitating expert analysis.',
      'A clear search result does not guarantee registration. The Trademark Registrar may still raise objections on absolute grounds (Section 9) such as descriptiveness, lack of distinctiveness, or public policy concerns that a search cannot predict, since these are examined separately from relative grounds.',
    ],

    faqs: [
      {
        q: 'Is the IP India trademark search portal free to use?',
        a: 'Yes, the IP India public search portal (ipindiaonline.gov.in/tmrpublicsearch) is completely free to access. You can conduct unlimited wordmark, phonetic, and device searches across all 45 trademark classes without any charges or registration. However, for professional analysis, interpretation, and registrability opinions, you would engage a trademark attorney or IP firm at their professional fee.',
      },
      {
        q: 'What is the difference between a trademark search and trademark registration?',
        a: 'A trademark search is the investigative step where you check whether your proposed mark is available — it does not confer any legal rights. Trademark registration is the formal process of filing an application (Form TM-A) with the Trademark Registry, undergoing examination, surviving the opposition period, and receiving a registration certificate that grants you exclusive legal rights to use the mark for 10 years (renewable indefinitely).',
      },
      {
        q: 'How do I know which trademark class to search in?',
        a: 'Trademark classes are determined by the Nice Classification system, which divides all goods and services into 45 classes (1–34 for goods, 35–45 for services). For example, clothing falls under Class 25, software under Class 9, and restaurant services under Class 43. Use the official Nice Classification guide or consult a trademark professional to identify the correct class for your specific goods or services. Searching the wrong class may give false confidence.',
      },
      {
        q: 'What does it mean if I find a similar trademark that is "Abandoned" or "Removed"?',
        a: 'An "Abandoned" mark means the applicant failed to respond to an examination report or opposition within the prescribed time, and the application was deemed withdrawn. A "Removed" mark means the registration expired and was not renewed (trademarks must be renewed every 10 years). In both cases, the mark no longer has active protection and generally does not block a new application — though you should verify there is no residual common law usage.',
      },
      {
        q: 'Can I file a trademark application if a similar mark exists in a different class?',
        a: 'Generally, yes. Trademark protection is class-specific, so "APEX" in Class 9 (electronics) does not automatically block "APEX" in Class 25 (clothing). However, exceptions exist: well-known trademarks enjoy cross-class protection under Section 11(6), and the Registrar may refuse marks that could cause confusion with famous brands regardless of class differences. A professional search opinion is essential in such cases.',
      },
      {
        q: 'How current is the data on the IP India search portal?',
        a: 'The IP India database is regularly updated, but there can be a lag of a few days to a couple of weeks between when an application is filed and when it appears in the public search database. Very recently filed applications (within the last 7–15 days) may not yet be searchable. For maximum accuracy, some professionals recommend repeating the search shortly before filing to catch any new applications that may have appeared since the initial search.',
      },
      {
        q: 'Should I hire a professional for trademark search, or can I do it myself?',
        a: 'You can certainly conduct a basic search yourself on the IP India portal — and we encourage it as a first step. However, professional search services add significant value through: (a) experience in identifying deceptively similar marks that non-experts may miss; (b) phonetic and conceptual similarity analysis; (c) multi-class and multi-database searches; and (d) a formal registrability opinion that assesses your chances of successful registration. For businesses investing significantly in branding, professional search is a worthwhile investment.',
      },
      {
        q: 'What if my trademark search shows conflicts — should I give up on the name?',
        a: 'Not necessarily. Conflicts found during search require careful analysis. Consider: (1) Is the conflicting mark actually registered and active, or has it been abandoned/expired? (2) Are the goods/services truly similar, or are they in different market segments? (3) Can your mark be modified — by adding a distinctive prefix, suffix, or design element — to create sufficient differentiation? (4) Is the conflicting mark being used in a limited geographical area while you operate nationally? A trademark attorney can advise on the best strategy based on the specific conflicts identified.',
      },
    ],

    cta: {
      heading: 'Get a Professional Trademark Search Report',
      subheading:
        'Our IP experts conduct thorough multi-class trademark searches, analyse conflicts, and deliver a detailed registrability opinion — helping you file with confidence and protect your brand from day one.',
      features: [
        'Comprehensive Wordmark, Phonetic & Device Search',
        'All 45 Nice Classification Classes Covered',
        'Detailed Conflict Analysis with Risk Assessment',
        'Written Registrability Opinion by Trademark Attorney',
        'Search Report Delivered Within 2–3 Business Days',
      ],
    },
  },

// ─── 1. TRADEMARK REGISTRATION DETAILS ─────────────────────────────────────

    'trademark-registration-details': {
        slug: 'trademark-registration-details',
        title: 'Trademark Registration Details — Check Status & Track Application',
        subtitle:
            'Learn how to check your trademark registration status, track your TM application on the IP India portal, and decode every stage of the examination pipeline — Your Professional provides end-to-end monitoring and expert guidance throughout the registration lifecycle.',
        heroFeatures: [
            'Real-Time Trademark Status Tracking on the IP India Portal',
            'Application Number & Formality Check Report Assistance',
            'Stage-by-Stage Examination Pipeline Decoded by Experts',
            'Vienna Codification & Journal Publication Monitoring',
            'Dedicated Status Dashboard with Your Professional Account',
        ],
        overview: {
            heading: 'How to Check Trademark Registration Status on IP India',
            paragraphs: [
                'After filing a trademark application (Form TM-A) with the Office of the Controller General of Patents, Designs and Trade Marks, every applicant receives a unique application number. This number is the key to tracking the progress of your mark through the Indian Trademark Registry\'s multi-stage examination process. The official IP India portal (ipindiaonline.gov.in) provides a public search utility under "Trade Mark Application/Registered Mark" where you can enter your application number, trademark name, or proprietor details to retrieve current status information. However, interpreting the status codes, examination reports, and procedural notations requires familiarity with the Trade Marks Act, 1999 and the Trade Marks Rules, 2017.',
                'A trademark application typically passes through several distinct stages: New Application → Formality Check Passed → Marked for Examination → Under Examination → Examination Report Issued → Accepted / Objected → Published in Trade Marks Journal → Registered. At each stage, the Registry updates the status on the IP India database. Delays can occur due to incomplete documentation, Vienna Codification issues, or the Registrar raising objections under Sections 9 and 11 of the Trade Marks Act. Understanding where your application stands and what action is required at each phase is critical to securing timely registration.',
                'Your Professional offers a comprehensive trademark tracking and advisory service. We monitor your application status daily, alert you to examination reports, prepare responses to office actions and objections, represent you at hearings before the Registrar, and ensure your mark progresses smoothly from filing to the issuance of the Registration Certificate. Our clients never miss a deadline or overlook a status change — because our automated monitoring system and dedicated IP experts work in tandem to protect your brand.',
            ],
            highlights: [
                { icon: '🔍', text: 'Public search available at ipindiaonline.gov.in under National & International Trademark search' },
                { icon: '📋', text: 'Formality Check verifies TM-A completeness, class accuracy, and power of attorney' },
                { icon: '⚖️', text: 'Examination Report under Sections 9 & 11 addresses distinctiveness and conflict with prior marks' },
                { icon: '📰', text: 'Trade Marks Journal publication triggers a 4-month opposition window under Section 21' },
            ],
        },
        types: [
            {
                title: 'Status Check by Application Number',
                desc: 'The most direct method — enter the 7-digit application number (or the new 12-digit format for recent filings) on the IP India portal\'s "Trade Mark Application Status" page. The result displays the mark, class, proprietor name, filing date, current status, and any associated examination report or hearing date.',
            },
            {
                title: 'Status Check by Trademark Name (Wordmark Search)',
                desc: 'If the application number is unavailable, you can search by the wordmark itself across all 45 classes. This phonetic and visual search returns matching or similar marks along with their registration status, useful for both tracking your own mark and conducting clearance searches for potential conflicts.',
            },
            {
                title: 'Status Check by Proprietor / Applicant Name',
                desc: 'Search the IP India database using the proprietor\'s name or the applicant company name. This is particularly useful for businesses with multiple trademark applications across different classes, allowing a consolidated view of all pending and registered marks under a single entity.',
            },
            {
                title: 'Vienna Classification Code Search',
                desc: 'For device marks (logos, labels, composite marks), the Trademark Registry assigns Vienna Codification codes to classify figurative elements. Searching by Vienna code helps track logo-based applications and identify similar device marks filed by third parties.',
            },
            {
                title: 'Trademark Journal Publication Search',
                desc: 'Once a mark is accepted by the Examiner, it is published in the weekly Trade Marks Journal. You can search the Journal archives on the IP India portal by application number, class, or proprietor to confirm publication and check if any opposition has been filed during the 4-month window.',
            },
        ],
        eligibility: [
            'Any individual, partnership firm, LLP, company, or trust that has filed a trademark application (Form TM-A) with the Indian Trademark Registry can check its status.',
            'Trademark attorneys, advocates, and registered agents acting on behalf of applicants can track application status using the power of attorney reference.',
            'Third parties conducting due diligence, brand clearance searches, or opposition research may use the public search facility to verify registration details of any mark.',
            'Foreign applicants who have filed through the Madrid Protocol (international registration designating India) can track the status of their IR number on the IP India portal.',
            'Existing trademark holders seeking renewal status, assignment recordal status, or rectification petition status are eligible to use the status tracking facility.',
            'Opponents or interested parties who have filed a Notice of Opposition under Section 21 can track the opposition proceeding status and hearing schedule.',
            'Licensees and authorised users recorded under Section 49 of the Trade Marks Act can verify their recorded user status in the Trademark Register.',
        ],
        documents: [
            {
                category: 'For Status Tracking & Monitoring',
                items: [
                    'Trademark Application Number (7-digit or 12-digit format)',
                    'TM-A Filing Acknowledgement or Receipt from the Registry',
                    'Power of Attorney (Form TM-48) if tracked by an agent or attorney',
                    'Copy of the Trademark as Filed (wordmark text or device image)',
                    'Class and specification of goods/services as mentioned in the application',
                ],
            },
            {
                category: 'For Responding to Examination Reports & Objections',
                items: [
                    'Original TM-A Application with all annexures',
                    'Evidence of prior use — invoices, packaging, advertisements, and bills dated before the filing date',
                    'Affidavit of Use sworn by the proprietor or authorised signatory',
                    'Counter-statement and evidence in support of distinctiveness (acquired or inherent)',
                    'Written Submissions for hearing before the Registrar citing relevant case law',
                ],
            },
            {
                category: 'For Post-Registration Matters',
                items: [
                    'Registration Certificate issued by the Trademark Registry',
                    'Form TM-R for renewal within 6 months before or after the 10-year expiry',
                    'Form TM-P for assignment or transmission of the registered mark',
                    'Proof of continuous use if the mark is subject to a rectification or cancellation action under Section 47',
                ],
            },
        ],
        process: [
            {
                title: 'Application Filing & Number Allocation',
                desc: 'After submitting Form TM-A (online or offline) with the prescribed fee, the Registry allocates a unique application number. Online filings receive the number instantly; physical filings may take 2–5 working days. Your Professional files electronically for immediate confirmation.',
                time: '1 day',
            },
            {
                title: 'Formality Check by the Registry',
                desc: 'The Registry conducts a preliminary formality check — verifying the application form, class selection, applicant details, power of attorney (TM-48), and fee payment. If deficiencies exist, a Formality Check Fail notice is issued and the applicant must rectify within 30 days.',
                time: '15–30 days',
            },
            {
                title: 'Allotment to Examiner & Vienna Codification',
                desc: 'The application enters the examination queue and is assigned to a Trademark Examiner based on the class. Device marks undergo Vienna Codification — a coding system for figurative elements. The status changes to "Marked for Examination" on the IP India portal.',
                time: '30–60 days',
            },
            {
                title: 'Examination & Report Issuance',
                desc: 'The Examiner reviews the mark for absolute grounds (Section 9 — descriptiveness, deceptiveness, customary terms) and relative grounds (Section 11 — conflict with identical or similar prior marks). An Examination Report is issued reflecting acceptance, conditional acceptance, or objection.',
                time: '6–12 months',
            },
            {
                title: 'Objection Response & Hearing (If Objected)',
                desc: 'If objections are raised, the applicant must file a response within 30 days of the examination report. If the Examiner is not satisfied with the written response, a hearing is scheduled before the Registrar. Your Professional prepares detailed counter-arguments with supporting evidence and case law.',
                time: '3–6 months',
            },
            {
                title: 'Publication in Trade Marks Journal',
                desc: 'Upon acceptance, the mark is advertised in the weekly Trade Marks Journal (published every Monday). This triggers a 4-month opposition period under Section 21. Any person may file a Notice of Opposition during this window. Your Professional monitors the Journal and alerts you if opposition is filed.',
                time: '4 months (opposition window)',
            },
            {
                title: 'Registration Certificate Issuance',
                desc: 'If no opposition is filed (or if opposition proceedings are decided in the applicant\'s favour), the Registry issues the Registration Certificate. The mark is entered in the Register of Trade Marks with effect from the date of the original application. Your Professional delivers the certificate and sets up renewal reminders for the 10-year cycle.',
                time: '1–2 months after Journal period',
            },
        ],
        fees: [
            { item: 'Trademark Status Monitoring Service (per application, annual)', cost: '₹1,999 – ₹3,499' },
            { item: 'Examination Report Response Drafting', cost: '₹3,999 – ₹6,999' },
            { item: 'Hearing Representation before the Registrar', cost: '₹7,999 – ₹14,999' },
            { item: 'Opposition Defence (Counter-Statement + Evidence)', cost: '₹9,999 – ₹19,999' },
            { item: 'Expedited Examination Request (Form TM-M)', cost: '₹4,999 + Government Fee' },
            { item: 'Certified Copy of Registration Certificate', cost: '₹999 + Government Fee' },
        ],
        advantages: [
            {
                icon: '📡',
                title: 'Real-Time Monitoring',
                desc: 'Your Professional\'s automated tracking system checks the IP India portal daily and sends instant email and SMS alerts whenever your application status changes — no more manual refreshes or missed updates.',
            },
            {
                icon: '⚡',
                title: 'Rapid Objection Response',
                desc: 'When an examination report raises objections, our IP attorneys draft a comprehensive response within 7 working days, well within the 30-day statutory deadline, citing relevant precedents and legal arguments.',
            },
            {
                icon: '🛡️',
                title: 'Opposition Protection',
                desc: 'We monitor Trade Marks Journal publications and immediately notify you of any opposition filed against your mark. Our team prepares a robust defence strategy to protect your brand rights.',
            },
            {
                icon: '📊',
                title: 'Consolidated Dashboard',
                desc: 'Businesses with multiple trademark applications across different classes get a unified dashboard view — track all your marks, deadlines, and action items in one place through your Your Professional account.',
            },
            {
                icon: '🎯',
                title: 'Expert Stage Interpretation',
                desc: 'IP India status codes like "Objected," "Accepted & Advertised," or "Opposition Pending" are decoded by our experts into plain-language summaries with clear next-step recommendations.',
            },
            {
                icon: '🔄',
                title: 'End-to-End Lifecycle Management',
                desc: 'From initial filing through registration and renewal, Your Professional manages the complete lifecycle — including assignment recordals, user registrations, and 10-year renewal filings.',
            },
        ],
        disadvantages: [
            'The IP India portal may experience intermittent downtime or slow loading, which can temporarily delay status checks — although our system retries automatically.',
            'Status updates on the IP India database are not instantaneous; there is typically a 2–7 day lag between a Registry action and its reflection online.',
            'Complex opposition proceedings can extend the registration timeline by 12–24 months, requiring sustained legal effort and additional costs beyond standard tracking.',
            'Marks that receive objections on absolute grounds (descriptiveness or generic nature) may require significant evidence of acquired distinctiveness, which is not always easy to compile.',
        ],
        faqs: [
            {
                q: 'How do I check my trademark application status online?',
                a: 'Visit ipindiaonline.gov.in and navigate to "Trade Marks" → "Trade Mark Application/Registered Mark." Enter your 7-digit or 12-digit application number and click "View." The result displays the current status, class, filing date, proprietor name, and any pending examination report or hearing date. You can also search by trademark name or applicant name if the application number is unavailable.',
            },
            {
                q: 'What does "Formality Check Fail" mean in my trademark status?',
                a: 'A "Formality Check Fail" status indicates that the Registry found deficiencies in your TM-A application — such as an incorrect class, missing power of attorney (TM-48), fee shortfall, or unclear representation of the mark. You must rectify these deficiencies and re-submit within 30 days of the notice. Your Professional identifies the specific deficiency and files the correction promptly.',
            },
            {
                q: 'What is the meaning of "Marked for Examination" on the IP India portal?',
                a: 'This status means your application has passed the formality check and has been placed in the examination queue. It will be assigned to a Trademark Examiner who will review the mark for compliance with Sections 9 and 11 of the Trade Marks Act. Depending on the workload at the Registry, examination can take 6–12 months from this stage.',
            },
            {
                q: 'How long does it take to get a trademark registered in India?',
                a: 'Under ideal circumstances — no objections, no opposition — a trademark can be registered within 12–18 months from the filing date. However, if the Examiner raises objections or a third party files an opposition, the timeline may extend to 24–36 months. Expedited examination (Form TM-M) can reduce the examination phase, but it does not eliminate the 4-month opposition window.',
            },
            {
                q: 'What happens after my trademark is published in the Trade Marks Journal?',
                a: 'Publication triggers a 4-month opposition window under Section 21 of the Trade Marks Act. Any person may file a Notice of Opposition (Form TM-O) during this period. If no opposition is filed, the Registry proceeds to issue the Registration Certificate. If opposition is filed, both parties engage in an adversarial proceeding — counter-statement, evidence, and hearing — before the Registrar decides the matter.',
            },
            {
                q: 'Can I track multiple trademark applications at once?',
                a: 'Yes. Your Professional offers a consolidated trademark portfolio management dashboard where you can track all your trademark applications across multiple classes and jurisdictions. Each application is monitored independently with individual alerts, deadline reminders, and status summaries. The IP India portal itself allows searching by proprietor name to view all marks filed under a single entity.',
            },
            {
                q: 'What should I do if my trademark application is objected?',
                a: 'File a response to the Examination Report within 30 days of its issuance. The response should address each objection raised by the Examiner — for absolute grounds (Section 9), provide evidence of distinctiveness; for relative grounds (Section 11), distinguish your mark from the cited prior marks. If the written response is insufficient, a hearing is scheduled. Your Professional drafts comprehensive responses and represents clients at hearings.',
            },
            {
                q: 'Is the trademark status check free on the IP India portal?',
                a: 'Yes, checking trademark status on the IP India public search portal is completely free and does not require any login or registration. The database is publicly accessible and updated regularly. However, interpreting the status codes, examination reports, and legal notices requires expertise — which is where Your Professional\'s tracking and advisory service adds value.',
            },
        ],
        cta: {
            heading: 'Never Miss a Trademark Status Update Again',
            subheading: 'Let Your Professional monitor your trademark application 24/7 — get instant alerts, expert objection responses, and a clear path to registration.',
            features: [
                'Daily Automated Status Monitoring on IP India',
                'Expert Examination Report Response within 7 Days',
                'Hearing Representation by Experienced IP Attorneys',
                'Consolidated Dashboard for Multi-Mark Portfolios',
            ],
        },
    },

// ─── 2. TRADEMARK CLASS SEARCH ─────────────────────────────────────────────

    'trademark-class-search': {
        slug: 'trademark-class-search',
        title: 'Trademark Class Search — Nice Classification Guide for Filing',
        subtitle:
            'Understand the 45 trademark classes under the Nice Classification system, identify the correct class for your goods or services, and file your trademark application accurately — Your Professional provides expert class identification, multi-class strategy, and comprehensive specification drafting.',
        heroFeatures: [
            'Complete Guide to All 45 Nice Classification Classes',
            'Expert Class Identification for Your Specific Goods or Services',
            'Multi-Class Filing Strategy for Maximum Brand Protection',
            'Specification of Goods/Services Drafting by IP Specialists',
            'Cross-Class Conflict Search to Avoid Objections Under Section 11',
        ],
        overview: {
            heading: 'What Is Trademark Class Search Under the Nice Classification?',
            paragraphs: [
                'The Nice Classification — officially known as the International Classification of Goods and Services for the Purposes of the Registration of Marks — is a system established by the Nice Agreement (1957) and administered by the World Intellectual Property Organization (WIPO). It divides all goods and services into 45 classes: Classes 1 through 34 cover goods, and Classes 35 through 45 cover services. India, as a signatory to the Nice Agreement, follows this classification system under Rule 22 of the Trade Marks Rules, 2017. Every trademark application filed with the Indian Trademark Registry must specify the class(es) under which protection is sought and provide a clear specification of goods or services within that class.',
                'Selecting the correct trademark class is arguably the most critical step in the filing process. Filing under the wrong class can result in rejection of the application, wasted government fees, and — most dangerously — gaps in brand protection that competitors or counterfeiters can exploit. For instance, a software company filing only under Class 9 (computer software) may leave its consulting services unprotected if it fails to also file under Class 42 (technology consultancy). Similarly, a restaurant brand filing only under Class 43 (restaurant services) may not cover its packaged food products, which fall under Class 29 or Class 30.',
                'Your Professional\'s trademark class search service goes beyond simple keyword matching. Our IP specialists analyse your business model, product lines, service offerings, future expansion plans, and competitive landscape to recommend a precise set of classes and draft a watertight specification of goods or services. We also conduct cross-class conflict searches to identify similar marks in related classes that could trigger objections under Section 11 of the Trade Marks Act, 1999, ensuring your application sails through examination.',
            ],
            highlights: [
                { icon: '🌐', text: 'Nice Classification is used by 150+ countries — consistent class numbering worldwide' },
                { icon: '📦', text: 'Classes 1–34 cover goods: chemicals, clothing, electronics, food, beverages, and more' },
                { icon: '💼', text: 'Classes 35–45 cover services: advertising, finance, education, legal, IT, and more' },
                { icon: '🔢', text: 'India follows the 12th Edition of the Nice Classification (NCL 12-2023)' },
            ],
        },
        types: [
            {
                title: 'Single-Class Trademark Filing',
                desc: 'Suitable for businesses with a focused product or service offering that falls entirely within one Nice Classification class. For example, a clothing brand filing exclusively under Class 25 (clothing, footwear, headgear). Single-class filing minimises costs while providing targeted protection for the core business.',
            },
            {
                title: 'Multi-Class Trademark Filing',
                desc: 'Ideal for businesses operating across multiple product or service categories. The Trade Marks Rules, 2017 permit filing a single application covering multiple classes (with additional fees per class). A technology company might file under Class 9 (software), Class 35 (online retail), Class 38 (telecommunications), and Class 42 (SaaS services) in one application.',
            },
            {
                title: 'Defensive Class Filing',
                desc: 'A strategic approach where the proprietor files the trademark in classes beyond their current operations to prevent third parties from registering the same or similar mark in related classes. Well-known brands often file across 10–15 classes as a defensive measure, even if they do not currently trade in all categories.',
            },
            {
                title: 'Specification Drafting & Narrowing',
                desc: 'The specification of goods or services within each class determines the exact scope of protection. Broad specifications risk objection from the Examiner or opposition from existing mark holders; narrow specifications may leave gaps. Your Professional drafts specifications that are strategically broad enough for protection yet precise enough to avoid conflicts.',
            },
            {
                title: 'Cross-Class Similarity Search',
                desc: 'The Trademark Registry considers marks in "similar" or "cognate" classes when assessing conflict under Section 11. For example, Class 29 (processed foods) and Class 30 (staple foods) are treated as related classes. Our cross-class search identifies potential conflicts in allied classes, enabling pre-emptive strategies.',
            },
        ],
        eligibility: [
            'Any individual, sole proprietor, partnership firm, LLP, private limited company, public limited company, or one-person company proposing to use a trademark for goods or services in India.',
            'Startups and new businesses that have not yet commenced trade but intend to use the mark — filing is permitted on a "proposed to be used" basis under Section 18(1) of the Trade Marks Act.',
            'Foreign companies and individuals seeking trademark protection in India, either through a direct application or via the Madrid Protocol (International Registration designating India).',
            'Existing trademark holders looking to extend protection to additional classes as their business diversifies into new product or service categories.',
            'E-commerce sellers, D2C brands, and marketplace operators who sell across multiple categories and need multi-class coverage to protect their brand comprehensively.',
            'Franchise businesses and licensors who need to register trademarks across goods classes (for products) and service classes (for the franchise business model) simultaneously.',
            'Non-profit organisations, educational institutions, and government bodies that use distinctive marks for their programmes, events, or public services.',
            'Brand owners conducting pre-filing clearance searches to verify that their proposed mark does not conflict with existing registrations in the intended class(es).',
        ],
        documents: [
            {
                category: 'For Trademark Class Identification & Search',
                items: [
                    'Detailed description of all goods manufactured, traded, or planned for future production',
                    'Detailed description of all services offered or planned — including digital and offline services',
                    'Brand name, logo, or composite mark as proposed for registration',
                    'Business plan or pitch deck indicating product/service roadmap for the next 3–5 years',
                    'List of existing trademark registrations (if any) with their class details',
                ],
            },
            {
                category: 'For Trademark Application Filing (Post Class Selection)',
                items: [
                    'Form TM-A (online e-filing through the IP India portal)',
                    'Proof of identity and address of the applicant — Aadhaar, PAN, passport, or CIN for companies',
                    'Power of Attorney (Form TM-48) authorising Your Professional to act as the trademark agent',
                    'User Affidavit declaring the date of first use (if the mark is already in use) or "proposed to be used"',
                    'Brand representation in JPG format (8 cm × 8 cm, under 2 MB) for device or composite marks',
                ],
            },
            {
                category: 'For Multi-Class Strategy & Defensive Filing',
                items: [
                    'Revenue breakup by product or service category to prioritise filing classes',
                    'Competitor trademark filings and their class coverage (obtained via search)',
                    'Franchise or licensing agreements that may require registration in specific classes',
                    'Export documentation if the brand is used in international markets (for Madrid Protocol coordination)',
                ],
            },
        ],
        process: [
            {
                title: 'Business & Brand Analysis',
                desc: 'Your Professional\'s IP specialists conduct a thorough analysis of your business model, product lines, service offerings, revenue streams, and future expansion plans. This diagnostic phase ensures that no category of goods or services is overlooked when selecting trademark classes.',
                time: '1–2 days',
            },
            {
                title: 'Nice Classification Mapping',
                desc: 'Based on the business analysis, we map each product and service to the appropriate Nice Classification class using the official WIPO class headings, the Alphabetical List of Goods and Services, and the Indian Trademark Registry\'s accepted specifications. We identify primary classes and allied/cognate classes.',
                time: '2–3 days',
            },
            {
                title: 'Cross-Class Conflict Search',
                desc: 'We conduct an exhaustive search of the Indian Trademark Register across all identified classes and their cognate classes. The search covers identical marks, phonetically similar marks, and visually similar device marks. A detailed search report with risk assessment is delivered to the client.',
                time: '3–5 days',
            },
            {
                title: 'Class Strategy & Specification Drafting',
                desc: 'Based on the mapping and search results, we recommend a filing strategy — which classes to file in immediately, which to file defensively, and which to monitor. For each class, we draft a precise specification of goods or services that balances breadth of protection with examination-friendliness.',
                time: '2–3 days',
            },
            {
                title: 'Client Review & Approval',
                desc: 'We present the recommended class strategy, specification language, and search report to the client for review. Any adjustments to class selection or specification wording are incorporated. The client approves the final filing plan before proceeding.',
                time: '1–2 days',
            },
            {
                title: 'TM-A Application Filing',
                desc: 'Your Professional files the trademark application (Form TM-A) electronically on the IP India portal, attaching the mark representation, applicant details, power of attorney (TM-48), and the finalised specification for each class. For multi-class applications, a single filing covers all approved classes.',
                time: '1 day',
            },
            {
                title: 'Post-Filing Monitoring & Examination Support',
                desc: 'After filing, we monitor the application status on the IP India portal, respond to any formality check issues, and prepare for examination. If the Examiner raises objections related to class or specification, our team drafts a response citing WIPO guidelines and Indian Registry practice.',
                time: 'Ongoing (12–18 months)',
            },
        ],
        fees: [
            { item: 'Single-Class Trademark Search & Class Identification', cost: '₹1,499 – ₹2,499' },
            { item: 'Multi-Class Comprehensive Search (up to 5 classes)', cost: '₹3,999 – ₹6,999' },
            { item: 'Cross-Class Conflict Search Report (per cognate group)', cost: '₹1,999 – ₹3,499' },
            { item: 'Specification of Goods/Services Drafting (per class)', cost: '₹999 – ₹1,999' },
            { item: 'TM-A Filing Fee — Individual / Startup (per class, government fee)', cost: '₹4,500 per class' },
            { item: 'TM-A Filing Fee — Other Applicants (per class, government fee)', cost: '₹9,000 per class' },
        ],
        advantages: [
            {
                icon: '🎯',
                title: 'Precision Class Selection',
                desc: 'Our IP specialists analyse your entire business ecosystem — not just your current products — to identify every relevant class, ensuring no gap in protection that competitors could exploit.',
            },
            {
                icon: '💰',
                title: 'Cost-Optimised Multi-Class Strategy',
                desc: 'Rather than filing blindly across all 45 classes, we recommend a targeted strategy that balances comprehensive coverage with budget efficiency — prioritising high-risk classes and deferring low-priority ones.',
            },
            {
                icon: '📝',
                title: 'Examiner-Friendly Specifications',
                desc: 'Our specifications are drafted using WIPO-recognised terminology and Indian Registry-accepted wording, significantly reducing the likelihood of objections during examination and accelerating the approval process.',
            },
            {
                icon: '🔎',
                title: 'Cross-Class Conflict Detection',
                desc: 'We don\'t just search within your chosen classes — we search cognate and allied classes that the Examiner would cross-reference, catching potential conflicts that a basic trademark search would miss.',
            },
            {
                icon: '🚀',
                title: 'Future-Proof Brand Protection',
                desc: 'By incorporating your business roadmap into the class strategy, we ensure your trademark protection covers planned product launches, service expansions, and market diversification for years to come.',
            },
            {
                icon: '🌍',
                title: 'International Classification Alignment',
                desc: 'Since the Nice Classification is used in 150+ countries, the class strategy we build for India seamlessly aligns with your international filing plans under the Madrid Protocol or direct foreign applications.',
            },
        ],
        disadvantages: [
            'Multi-class filing increases government fees proportionally — each additional class adds ₹4,500 (individuals/startups) or ₹9,000 (others) to the filing cost, which can be significant for small businesses.',
            'The Nice Classification system is updated periodically (latest: 12th Edition, 2023), and new goods or services may not yet have clear class assignments — requiring interpretation and risk of misclassification.',
            'Defensive filings in classes where the proprietor has no genuine intention to use the mark may be vulnerable to removal for non-use under Section 47 after 5 years of non-use.',
            'Cross-class similarity is not always predictable — the Registrar retains discretion to treat non-cognate classes as related in specific cases, which may lead to unexpected objections.',
        ],
        faqs: [
            {
                q: 'How many trademark classes are there in India?',
                a: 'India follows the Nice Classification system, which divides all goods and services into 45 classes. Classes 1 through 34 cover goods (tangible products such as chemicals, electronics, clothing, food, and beverages), while Classes 35 through 45 cover services (intangible offerings such as advertising, finance, education, legal, IT, and hospitality). India currently follows the 12th Edition of the Nice Classification (NCL 12-2023).',
            },
            {
                q: 'How do I find the right trademark class for my business?',
                a: 'Start by listing all the goods you manufacture or trade and all the services you offer. Then consult the Nice Classification\'s Alphabetical List of Goods and Services (available on the WIPO website) to match each item to its class. For complex businesses, Your Professional\'s IP specialists conduct a detailed analysis of your business model, product lines, and future plans to recommend the precise set of classes — avoiding both over-filing and under-filing.',
            },
            {
                q: 'Can I file a trademark in multiple classes in one application?',
                a: 'Yes. Under Rule 22 of the Trade Marks Rules, 2017, India permits multi-class applications. A single Form TM-A can cover any number of classes, with the government fee charged per class (₹4,500 for individuals/startups per class, ₹9,000 for others). Multi-class filing simplifies management — one application number, one examination — while covering diverse goods and services.',
            },
            {
                q: 'What is the difference between goods classes and services classes?',
                a: 'Goods classes (1–34) protect tangible products — items that are manufactured, sold, or traded. Services classes (35–45) protect intangible offerings — activities performed for the benefit of others. A restaurant, for example, would file under Class 43 (food and beverage services) for its dining services and under Class 29 or 30 (processed foods or staple foods) for its packaged food products sold in retail.',
            },
            {
                q: 'What happens if I file my trademark in the wrong class?',
                a: 'Filing in the wrong class can have serious consequences. The Examiner may reject the application on formality grounds, the specification may be narrowed or amended (with delays), and — most critically — your brand may remain unprotected in the actual class where you operate. Competitors could register the same or similar mark in the correct class. Correcting a wrong class typically requires a fresh application with new government fees.',
            },
            {
                q: 'What are cognate classes and why do they matter?',
                a: 'Cognate classes are classes that the Trademark Registry considers related because the goods or services they cover are commonly produced or offered by the same traders. For example, Class 29 (dairy, meat, preserved foods) and Class 30 (coffee, tea, rice, flour) are cognate. When examining a mark under Section 11, the Registrar searches not just the applied class but also its cognate classes for conflicting marks. Understanding cognate relationships is essential for both clearance searches and strategic filing.',
            },
            {
                q: 'Do I need to file in a class if I am not yet selling those products?',
                a: 'You can file on a "proposed to be used" basis under Section 18(1) of the Trade Marks Act. This allows you to secure class protection before launching the product or service. However, the mark must be put to genuine use within a reasonable period. Under Section 47, a registered mark that has not been used for 5 years and 1 month from the date of registration can be removed from the Register upon an application by an aggrieved party.',
            },
            {
                q: 'How much does it cost to file a trademark in multiple classes?',
                a: 'The government fee per class is ₹4,500 for individuals, startups, and small enterprises, and ₹9,000 for all other applicants (companies, LLPs, etc.) when filed electronically. A 3-class application for a startup would cost ₹13,500 in government fees alone. Your Professional\'s service fee for class search, specification drafting, and filing is additional. We provide transparent pricing with no hidden charges — contact us for a customised quote based on your class requirements.',
            },
        ],
        cta: {
            heading: 'File Your Trademark in the Right Class — The First Time',
            subheading: 'Wrong class means wasted fees and zero protection. Let Your Professional\'s IP specialists identify the perfect classes for your brand and draft bulletproof specifications.',
            features: [
                'Expert Nice Classification Analysis for Your Business',
                'Cross-Class Conflict Search Across Cognate Categories',
                'Precise Specification Drafting Using WIPO-Accepted Terms',
                'Multi-Class Strategy Aligned with Your Growth Roadmap',
            ],
        },
    },

'8th-pay-commission-calculator': {
        slug: '8th-pay-commission-calculator',
        title: '8th Pay Commission Salary Calculator',
        subtitle:
            'Accurately estimate your revised salary, allowances, and pension under the upcoming 8th Pay Commission using our comprehensive calculator — trusted by lakhs of central government employees across India.',
        heroFeatures: [
            'Instant Revised Salary Estimation Based on Expected Fitment Factor',
            'Detailed Breakup of Basic Pay, DA, HRA, TA & Other Allowances',
            'Pension & Gratuity Projection for Retiring Government Employees',
            'Compare Current 7th CPC Pay with Projected 8th CPC Figures',
            'Free to Use — No Login or Registration Required',
        ],
        overview: {
            heading: 'What Is the 8th Pay Commission and How Does the Calculator Work?',
            paragraphs: [
                'The 8th Pay Commission is the next anticipated central pay revision body expected to be constituted by the Government of India to review and recommend changes to the salary structure, allowances, and pension of central government employees. Historically, pay commissions have been set up roughly every ten years, with the 7th Pay Commission recommendations implemented from January 2016. The 8th Pay Commission is widely expected to take effect around 2026, impacting over 50 lakh central government employees and more than 65 lakh pensioners across the country.',
                'Our 8th Pay Commission Salary Calculator is a powerful estimation tool designed to help government employees project their revised basic pay, dearness allowance, house rent allowance, transport allowance, and overall take-home salary based on various expected fitment factors. The calculator uses established pay revision methodologies and historical trends from the 5th, 6th, and 7th Pay Commissions to generate realistic salary projections. Users can input their current pay level, basic pay, and posting location to receive an instant, detailed salary breakup under the new pay regime.',
                'Whether you are a central government employee planning for your financial future, a pensioner wanting to understand the impact on your retirement benefits, or simply someone curious about pay commission economics, this calculator provides a reliable, data-driven starting point. The tool also factors in grade pay equivalences, pay matrix levels, and allowance percentages to deliver the most comprehensive estimation available online today.',
            ],
            highlights: [
                { icon: '📊', text: 'Supports all 18 pay levels from Level 1 to Level 18 of the 7th CPC Pay Matrix' },
                { icon: '🏠', text: 'Location-based HRA calculation for X, Y, and Z category cities' },
                { icon: '📈', text: 'Multiple fitment factor scenarios (2.57x, 2.86x, 3.00x, and custom)' },
                { icon: '🧓', text: 'Dedicated pension and family pension estimation for retirees' },
            ],
        },
        types: [
            {
                title: 'Basic Pay Revision Calculator',
                desc: 'Estimates the revised basic pay by applying the expected fitment factor to your current basic pay in the 7th CPC pay matrix. Supports all pay levels from Level 1 (₹18,000) through Level 18 (₹2,50,000) and allows custom fitment factors for personalised projections.',
            },
            {
                title: 'Allowance Estimation Calculator',
                desc: 'Computes the revised Dearness Allowance, House Rent Allowance, Transport Allowance, and other standard central government allowances based on the projected basic pay. HRA is calculated using city classification (X, Y, Z) and the latest percentage slabs likely to be recommended.',
            },
            {
                title: 'Pension & Gratuity Calculator',
                desc: 'Projects the revised pension amount for current and future retirees by applying the expected fitment factor to the last drawn basic pay. Also estimates commuted pension value, gratuity payout, and family pension entitlements under the new commission framework.',
            },
            {
                title: 'Arrears Estimation Calculator',
                desc: 'Calculates the expected arrears payout based on the likely implementation date and the difference between current and revised pay. Factors in months of retrospective application and provides both lump-sum and instalment-based arrears breakdowns.',
            },
            {
                title: 'Comparative Pay Analysis Tool',
                desc: 'Generates a side-by-side comparison of salary components under the 6th, 7th, and projected 8th Pay Commission structures for any given pay level. Helps employees visualise their salary growth trajectory across pay revisions and understand the compounding impact of each commission.',
            },
        ],
        eligibility: [
            'All central government employees currently drawing salary under the 7th CPC Pay Matrix (Level 1 to Level 18)',
            'Defence personnel including Indian Army, Navy, and Air Force servicemen drawing military pay',
            'Central government pensioners and family pensioners receiving pension under the 7th CPC structure',
            'Employees of central autonomous bodies and statutory organisations whose pay scales are linked to central government pay revisions',
            'State government employees in states that typically adopt central pay commission recommendations with or without modifications',
            'Public sector undertaking (PSU) employees whose pay revision cycles follow central pay commission timelines',
            'Railway employees, postal department staff, and other central service cadres covered under the Union government pay structure',
            'Researchers and academics in centrally funded institutions like IITs, IIMs, and central universities whose pay is pegged to UGC or AICTE pay scales derived from CPC recommendations',
        ],
        documents: [
            {
                category: 'Current Salary Information Required',
                items: [
                    'Latest salary slip showing current basic pay, grade pay (if applicable), and pay level',
                    'Current Dearness Allowance percentage as per the latest government order',
                    'House Rent Allowance category (X, Y, or Z city classification) of your posting station',
                    'Transport Allowance slab applicable to your pay level and city category',
                    'Any special allowance or deputation allowance currently being drawn',
                ],
            },
            {
                category: 'Service & Pay Details for Pension Calculation',
                items: [
                    'Total qualifying service in years and months for pension computation',
                    'Date of retirement or expected date of superannuation',
                    'Last drawn basic pay or the average of last 10 months basic pay (whichever is applicable)',
                    'Details of any commuted portion of pension already opted for',
                ],
            },
            {
                category: 'Reference Documents for Verification',
                items: [
                    'Copy of the 7th CPC Pay Matrix table for your current pay level',
                    'Government notification or office memorandum confirming your pay fixation under 7th CPC',
                    'Previous pay commission fixation order (6th CPC to 7th CPC) for historical comparison',
                ],
            },
        ],
        process: [
            {
                title: 'Select Your Current Pay Level',
                desc: 'Choose your current pay level from the 7th CPC Pay Matrix (Level 1 through Level 18). The calculator pre-populates the minimum and maximum basic pay for your selected level, or you can enter your exact current basic pay manually for precise calculation.',
                time: 'Instant',
            },
            {
                title: 'Enter Your Current Basic Pay',
                desc: 'Input the exact basic pay amount as shown on your latest salary slip. Ensure this figure reflects the most recent annual increment and any pay fixation done after promotion or MACP.',
                time: 'Instant',
            },
            {
                title: 'Choose a Fitment Factor Scenario',
                desc: 'Select from pre-configured fitment factor options — 2.57x (conservative based on 6th CPC pattern), 2.86x (moderate based on 7th CPC pattern), 3.00x (optimistic based on employee union demands), or enter a custom multiplier for personalised estimation.',
                time: 'Instant',
            },
            {
                title: 'Specify Your Posting Location',
                desc: 'Select the city classification of your current posting — X (metros like Delhi, Mumbai, Kolkata, Chennai, Bengaluru, Hyderabad), Y (cities with population 50 lakh+), or Z (all other locations). This determines your HRA and Transport Allowance percentages.',
                time: 'Instant',
            },
            {
                title: 'Review the Detailed Salary Breakup',
                desc: 'The calculator generates a comprehensive breakup showing revised basic pay, DA at the applicable percentage, HRA, TA, and estimated gross and net salary. Each component is displayed alongside the current value for easy comparison.',
                time: 'Instant',
            },
            {
                title: 'Calculate Pension & Retirement Benefits',
                desc: 'If applicable, enter your qualifying service years and expected retirement date to compute your projected pension, gratuity, commuted pension value, and family pension under the 8th CPC structure. The tool applies the standard pension formulae with the revised basic pay.',
                time: '1–2 minutes',
            },
            {
                title: 'Download or Share Your Salary Report',
                desc: 'Export the complete salary comparison report as a downloadable PDF or shareable link. The report includes all input parameters, assumptions, projected figures, and a disclaimer about the estimation nature of the calculations.',
                time: 'Instant',
            },
        ],
        fees: [
            { item: '8th Pay Commission Salary Calculator', cost: 'Free' },
            { item: 'Pension & Gratuity Estimation Module', cost: 'Free' },
            { item: 'Arrears Calculation Tool', cost: 'Free' },
            { item: 'Comparative Pay Analysis (6th vs 7th vs 8th CPC)', cost: 'Free' },
            { item: 'Downloadable PDF Salary Report', cost: 'Free' },
            { item: 'Personalised Financial Planning Consultation', cost: 'Starting ₹999' },
        ],
        advantages: [
            {
                icon: '⚡',
                title: 'Instant and Accurate Projections',
                desc: 'Get detailed salary estimations in seconds using fitment factors derived from historical pay commission data and government reports. The calculator processes complex pay matrix computations behind the scenes, eliminating the need for manual calculations or spreadsheet formulas.',
            },
            {
                icon: '🔍',
                title: 'Comprehensive Salary Breakup',
                desc: 'Unlike basic calculators that only show revised basic pay, our tool provides a full salary breakup including DA, HRA, TA, NPS contribution, professional tax deduction, and net take-home pay — giving you the complete financial picture under the 8th CPC.',
            },
            {
                icon: '📉',
                title: 'Multiple Scenario Comparison',
                desc: 'Evaluate multiple fitment factor scenarios side-by-side to understand the best-case, worst-case, and most likely salary revision outcomes. This empowers you to make informed financial decisions regardless of the final commission recommendation.',
            },
            {
                icon: '🧮',
                title: 'Pension-Ready Calculations',
                desc: 'Our calculator includes dedicated pension, gratuity, and commutation modules built specifically for employees nearing retirement. Project your post-retirement income with confidence using the same formulae the government applies during pay fixation.',
            },
            {
                icon: '🔒',
                title: 'Privacy-First Design',
                desc: 'All calculations are performed entirely in your browser — no salary data is transmitted to any server, stored in any database, or shared with third parties. Your financial information remains completely private and under your control at all times.',
            },
            {
                icon: '📱',
                title: 'Mobile-Friendly and Accessible',
                desc: 'Use the calculator on any device — desktop, tablet, or smartphone — with a fully responsive interface. No app download required, no registration needed, and no usage limits. Access it anytime, anywhere, as many times as you want.',
            },
        ],
        disadvantages: [
            'Projections are based on expected fitment factors and historical trends; actual 8th CPC recommendations may differ significantly once the commission submits its report to the government.',
            'The calculator does not account for individual-specific deductions such as income tax, professional tax variations by state, or voluntary deductions like CGHS, cooperative society subscriptions, or festival advances.',
            'State government employees should note that their state may adopt a modified version of the central pay commission recommendations, leading to different actual salary figures than those projected here.',
            'Specialised allowances such as risk allowance, field area allowance, hardship allowance, and other post-specific allowances are not included in the standard calculation and must be estimated separately.',
        ],
        faqs: [
            {
                q: 'When will the 8th Pay Commission be implemented?',
                a: 'The 8th Pay Commission is widely expected to be constituted by 2025 and its recommendations are anticipated to take effect from January 2026. However, the exact timeline depends on the government\'s official announcement. Historically, pay commissions take 18–24 months to submit their report after constitution, followed by a government review period before implementation.',
            },
            {
                q: 'What fitment factor is expected in the 8th Pay Commission?',
                a: 'While the official fitment factor will be determined by the commission, estimates range from 2.57x to 3.00x based on historical patterns. The 6th CPC applied a factor of 1.86x and the 7th CPC applied 2.57x to the 6th CPC basic pay. Employee unions have demanded a minimum factor of 2.86x for the 8th CPC. Our calculator lets you try all these scenarios and even custom values.',
            },
            {
                q: 'How accurate are the salary projections from this calculator?',
                a: 'The calculator provides well-reasoned estimates based on historical pay commission patterns, publicly available reports, and established government pay fixation formulae. While the projections are reliable for planning purposes, the actual figures will depend on the 8th Pay Commission\'s final recommendations, which may introduce new pay structures, allowance categories, or calculation methodologies not currently anticipated.',
            },
            {
                q: 'Does the calculator work for defence personnel and military pay scales?',
                a: 'Yes, defence personnel can use the basic pay revision and allowance estimation features by entering their current pay level and basic pay from the Defence Pay Matrix. However, military-specific allowances like Military Service Pay (MSP), flying allowance, submarine allowance, and field area allowances require separate calculation as they follow distinct revision patterns.',
            },
            {
                q: 'Can I calculate my pension under the 8th Pay Commission using this tool?',
                a: 'Absolutely. The calculator includes a dedicated pension module where you can enter your qualifying service years and last drawn basic pay to project your revised pension, family pension, commuted pension value, and retirement gratuity. It supports both pre-2004 (Old Pension Scheme) and post-2004 (NPS-based) retirement benefit estimations with appropriate caveats.',
            },
            {
                q: 'Will the 8th Pay Commission benefit state government employees as well?',
                a: 'The Central Pay Commission directly applies to central government employees. However, most state governments constitute their own State Pay Commissions or adopt the central recommendations with modifications. States like Kerala, West Bengal, and Maharashtra typically revise pay within 1–2 years of the central revision. Our calculator provides central government figures, which can serve as a baseline reference for state employees.',
            },
            {
                q: 'How are the arrears calculated in this tool?',
                a: 'The arrears calculator estimates the difference between the current and projected revised salary, multiplied by the number of months between the expected implementation date and the date the revised pay is actually disbursed. For instance, if the commission recommends implementation from January 2026 but salaries are revised from July 2026, you would receive 6 months of arrears on the differential amount.',
            },
            {
                q: 'Is my salary data safe when using this calculator?',
                a: 'Completely. The entire calculation is performed client-side in your web browser using JavaScript. No salary data, personal details, or calculation inputs are sent to any server or stored in any database. You can verify this by using the calculator in offline mode after the page has loaded — it works entirely without an internet connection once loaded.',
            },
        ],
        cta: {
            heading: 'Calculate Your 8th Pay Commission Salary Now',
            subheading:
                'Get an instant, detailed projection of your revised salary, allowances, and pension under the upcoming 8th Pay Commission — completely free and private.',
            features: [
                'Instant salary projection across all 18 pay levels',
                'Multiple fitment factor scenarios for realistic planning',
                'Complete pension, gratuity, and arrears estimation',
                'Downloadable PDF report for your records',
            ],
        },
    },

    'sip-calculator': {
        slug: 'sip-calculator',
        title: 'SIP Calculator',
        subtitle:
            'Plan your wealth-building journey with our advanced SIP Calculator — estimate your investment returns, compare mutual fund strategies, and build a personalised investment plan to achieve your financial goals.',
        heroFeatures: [
            'Accurate SIP Return Estimation with Compound Interest Modelling',
            'Flexible Inputs for Monthly, Quarterly, and Annual SIP Contributions',
            'Goal-Based Investment Planning with Target Amount Reverse Calculation',
            'Inflation-Adjusted Real Returns for Realistic Wealth Projection',
            'Visual Charts and Graphs Showing Investment Growth Over Time',
        ],
        overview: {
            heading: 'What Is a SIP Calculator and Why Should You Use One?',
            paragraphs: [
                'A Systematic Investment Plan (SIP) is a disciplined method of investing a fixed amount at regular intervals — typically monthly — into mutual funds or other investment vehicles. Rather than making a large lump-sum investment, SIP allows investors to spread their investment over time, benefiting from rupee cost averaging and the power of compounding. Our SIP Calculator is a comprehensive financial planning tool that helps you estimate the potential returns on your SIP investments over any time horizon, using realistic expected rate of return assumptions based on historical market data.',
                'The calculator goes far beyond simple interest computation. It models the full compound growth trajectory of your monthly contributions, accounting for the time value of money and the exponential nature of long-term wealth creation. Whether you are investing ₹500 per month as a college student or ₹1,00,000 per month as a seasoned investor, the calculator provides precise projections of your total invested amount, estimated returns, and final corpus value. You can adjust the monthly investment amount, expected annual return rate, and investment duration to explore different scenarios and find the strategy that best aligns with your financial goals.',
                'Beyond basic SIP calculations, our tool includes advanced features like step-up SIP estimation (where your monthly contribution increases annually), goal-based reverse calculation (find out how much you need to invest monthly to reach a target corpus), and inflation-adjusted return projections. These features make it an indispensable planning companion for anyone serious about building long-term wealth through systematic investing in the Indian mutual fund market.',
            ],
            highlights: [
                { icon: '💰', text: 'Supports SIP amounts from ₹100 to ₹10,00,000 per month with custom intervals' },
                { icon: '📅', text: 'Investment duration modelling from 1 year to 40 years for complete life-stage planning' },
                { icon: '🎯', text: 'Goal-based reverse calculator to determine required monthly SIP for your target corpus' },
                { icon: '📊', text: 'Interactive charts showing year-wise invested amount vs. wealth accumulated' },
            ],
        },
        types: [
            {
                title: 'Standard SIP Calculator',
                desc: 'The foundational calculator that computes the future value of regular monthly investments at a specified expected rate of return over a chosen investment period. Uses the standard compound interest formula for SIP: FV = P × [{(1 + r)^n - 1} / r] × (1 + r), where P is the monthly investment, r is the monthly rate of return, and n is the total number of instalments.',
            },
            {
                title: 'Step-Up SIP Calculator',
                desc: 'Models a more realistic investment strategy where your SIP contribution increases by a fixed percentage each year — typically aligned with your annual salary increment. For example, starting with ₹10,000 per month and stepping up by 10% annually allows you to invest ₹11,000 in the second year, ₹12,100 in the third year, and so on, dramatically increasing your final corpus compared to a flat SIP.',
            },
            {
                title: 'Goal-Based SIP Calculator',
                desc: 'Works in reverse — you specify your target corpus amount and investment horizon, and the calculator determines the monthly SIP amount needed to achieve that goal at various expected return rates. Ideal for planning specific financial milestones like buying a home, funding children\'s education, or building a retirement corpus.',
            },
            {
                title: 'Lump Sum vs SIP Comparison Calculator',
                desc: 'Provides a side-by-side comparison of investing a lump sum amount versus spreading the same investment through monthly SIPs over a specified period. Demonstrates the impact of rupee cost averaging, timing risk reduction, and behavioural benefits of disciplined SIP investing versus one-time deployment of capital.',
            },
            {
                title: 'SIP with Inflation Adjustment Calculator',
                desc: 'Adjusts the projected future corpus for inflation to show you the real purchasing power of your accumulated wealth. If your SIP projects a corpus of ₹1 crore in 20 years, this calculator shows you what that amount will be worth in today\'s rupees, factoring in an assumed annual inflation rate — ensuring your financial plans are grounded in reality.',
            },
        ],
        eligibility: [
            'Any individual aged 18 years or above with a valid PAN card and KYC-compliant status who wishes to invest in mutual funds through SIP mode',
            'Salaried professionals looking to automate wealth creation through regular monthly deductions aligned with their salary credit cycle',
            'Self-employed individuals and business owners seeking a disciplined investment approach that does not require timing the market',
            'Students and young professionals starting their investment journey with amounts as low as ₹100 or ₹500 per month',
            'Parents and guardians planning long-term investments for children\'s education or marriage through minor accounts with guardian oversight',
            'NRI investors with NRE or NRO bank accounts who are eligible to invest in Indian mutual funds through SIP under FEMA regulations',
            'HUF (Hindu Undivided Family) entities with a valid PAN card and KYC documentation seeking to invest family funds systematically',
            'Retirees and senior citizens looking to invest pension income or savings through conservative SIP strategies in debt or balanced mutual funds',
        ],
        documents: [
            {
                category: 'KYC Documents for Starting a SIP',
                items: [
                    'PAN Card (mandatory for all mutual fund investments in India)',
                    'Aadhaar Card for eKYC verification and address proof',
                    'Recent passport-size photograph (for physical KYC submission)',
                    'Cancelled cheque or bank statement for bank account verification and auto-debit mandate setup',
                    'Proof of address — Aadhaar, passport, voter ID, utility bill, or bank statement (any one)',
                ],
            },
            {
                category: 'Additional Documents for Specific Investor Categories',
                items: [
                    'For NRIs: Valid passport, overseas address proof, NRE/NRO bank account details, and PIO/OCI card if applicable',
                    'For Minors: Birth certificate, guardian\'s KYC documents, and relationship proof with the guardian',
                    'For HUFs: HUF PAN card, HUF deed, and Karta\'s individual KYC documents',
                    'For Corporates/Trusts: Board resolution, trust deed, authorised signatory list, and entity PAN card',
                ],
            },
            {
                category: 'Information Needed to Use the SIP Calculator',
                items: [
                    'Desired monthly SIP amount (minimum ₹100 for most mutual funds)',
                    'Expected annual rate of return (historical equity mutual fund returns range from 10% to 15% CAGR)',
                    'Investment time horizon in years (recommended minimum 5 years for equity SIPs)',
                    'Annual step-up percentage if using the step-up SIP calculator (typically 5% to 15%)',
                    'Target corpus amount if using the goal-based reverse SIP calculator',
                ],
            },
        ],
        process: [
            {
                title: 'Enter Your Monthly SIP Amount',
                desc: 'Start by entering the amount you wish to invest each month. You can choose any amount starting from ₹100. If you are unsure about how much to invest, begin with 10–20% of your monthly income as a starting benchmark and adjust from there using the calculator\'s projections.',
                time: 'Instant',
            },
            {
                title: 'Set the Expected Annual Return Rate',
                desc: 'Choose an expected rate of annual return based on your investment category. For equity mutual funds, 12–15% CAGR is a reasonable historical benchmark; for balanced or hybrid funds, 9–12% is typical; for debt funds, 6–8% is standard. The calculator accepts rates from 1% to 30% for maximum flexibility in scenario modelling.',
                time: 'Instant',
            },
            {
                title: 'Select Your Investment Duration',
                desc: 'Specify the number of years you plan to continue the SIP. Longer durations amplify the power of compounding — a 25-year SIP at 12% annual return generates roughly 10 times the returns compared to a 10-year SIP with the same monthly contribution. Choose a realistic horizon aligned with your financial goal.',
                time: 'Instant',
            },
            {
                title: 'Configure Advanced Options',
                desc: 'Optionally enable step-up SIP to model annual contribution increases, toggle inflation adjustment to see real returns, or switch to goal-based mode to reverse-calculate the monthly SIP needed for a target amount. These advanced settings transform the basic calculator into a comprehensive financial planning tool.',
                time: '1–2 minutes',
            },
            {
                title: 'Review the Projection Results',
                desc: 'The calculator displays your total invested amount, estimated returns earned, and the projected final corpus. A detailed year-by-year breakup table shows how your wealth grows each year, and interactive doughnut and line charts visualise the contribution-vs-returns split and the growth trajectory respectively.',
                time: 'Instant',
            },
            {
                title: 'Compare Different Scenarios',
                desc: 'Modify the input parameters to explore different investment strategies — try different monthly amounts, return rates, and durations. Save or note down multiple scenarios to compare them and identify the optimal SIP strategy that balances your affordability with your financial ambitions.',
                time: '2–5 minutes',
            },
            {
                title: 'Download Your Investment Plan',
                desc: 'Export the complete investment projection as a PDF report including all input assumptions, year-wise breakup, charts, and comparison tables. Use this report for personal financial planning, discussions with your financial advisor, or as a reference document for your investment journey.',
                time: 'Instant',
            },
        ],
        fees: [
            { item: 'Standard SIP Calculator', cost: 'Free' },
            { item: 'Step-Up SIP Calculator', cost: 'Free' },
            { item: 'Goal-Based Reverse SIP Calculator', cost: 'Free' },
            { item: 'Lump Sum vs SIP Comparison Tool', cost: 'Free' },
            { item: 'Inflation-Adjusted Returns Calculator', cost: 'Free' },
            { item: 'Personalised Mutual Fund Advisory Session', cost: 'Starting ₹1,499' },
        ],
        advantages: [
            {
                icon: '🎯',
                title: 'Goal Clarity and Financial Discipline',
                desc: 'By visualising the end result of regular investments, the SIP calculator instils financial discipline and provides concrete milestones. Seeing that a ₹10,000 monthly SIP at 12% return becomes ₹1 crore in 20 years transforms an abstract savings habit into a tangible goal-oriented plan.',
            },
            {
                icon: '📐',
                title: 'Mathematical Precision',
                desc: 'The calculator uses the exact compound interest SIP formula used by mutual fund houses and AMFI to compute future values. Unlike rough mental estimates, it accounts for monthly compounding, reinvestment of returns, and the precise timing of each instalment to deliver accurate projections.',
            },
            {
                icon: '🔄',
                title: 'Scenario Flexibility',
                desc: 'Test dozens of what-if scenarios in minutes — what if you increase your SIP by ₹5,000? What if returns are 10% instead of 12%? What if you invest for 25 years instead of 15? This flexibility helps you build a robust investment plan that accounts for both optimistic and conservative market conditions.',
            },
            {
                icon: '📈',
                title: 'Demonstrates the Power of Compounding',
                desc: 'The year-wise breakup table and growth charts vividly illustrate how compounding accelerates wealth creation over time. Most investors are surprised to see that more than 60–70% of the final corpus in a 20+ year SIP comes from returns on returns — the calculator makes this abstract concept tangible and motivating.',
            },
            {
                icon: '🎓',
                title: 'Educational and Empowering',
                desc: 'The calculator serves as a financial literacy tool that helps new investors understand key concepts like compound interest, rupee cost averaging, the impact of early investing, and the cost of delay. It transforms complex financial mathematics into intuitive, visual insights that anyone can understand.',
            },
            {
                icon: '🔐',
                title: 'Completely Private and Secure',
                desc: 'All computations happen locally in your browser. No investment data, financial details, or personal information is transmitted to any server or stored anywhere. You can use the calculator with complete confidence that your financial planning details remain entirely confidential.',
            },
        ],
        disadvantages: [
            'SIP calculator projections assume a constant rate of return throughout the investment period, whereas actual mutual fund returns fluctuate significantly year to year due to market volatility, economic cycles, and fund manager performance.',
            'The calculator does not account for exit loads, expense ratios, Securities Transaction Tax (STT), or capital gains tax — all of which reduce the actual returns you receive from your mutual fund investments upon redemption.',
            'Past performance of mutual funds, on which expected return rates are typically based, is not a guarantee of future results. Market conditions, regulatory changes, and macroeconomic factors can significantly alter actual returns from projected estimates.',
            'The tool provides mathematical projections and should not be construed as investment advice. Individual investment decisions should consider personal risk appetite, existing portfolio allocation, tax implications, and consultation with a SEBI-registered financial advisor.',
        ],
        faqs: [
            {
                q: 'What is a SIP and how does it work?',
                a: 'A Systematic Investment Plan (SIP) is a method of investing a fixed amount regularly — usually monthly — into a mutual fund scheme. On each SIP date, your fixed amount buys units of the mutual fund at the prevailing Net Asset Value (NAV). When NAV is low, you get more units; when NAV is high, you get fewer. Over time, this averages out your purchase cost (rupee cost averaging) and, combined with the power of compounding, helps build significant wealth.',
            },
            {
                q: 'What is the minimum amount needed to start a SIP?',
                a: 'Most mutual fund houses in India allow SIPs starting from as low as ₹100 per month, though ₹500 is the most common minimum. Some fund houses like SBI Mutual Fund and Nippon India offer micro-SIPs from ₹100. There is no upper limit — you can invest any amount that suits your financial capacity. Our calculator supports any amount from ₹100 upward.',
            },
            {
                q: 'What rate of return should I expect from a SIP in mutual funds?',
                a: 'Returns depend on the type of mutual fund. Historically, Indian equity mutual funds (large-cap, mid-cap, small-cap) have delivered 12–18% CAGR over 10+ year periods. Balanced or hybrid funds typically return 9–12% CAGR, while debt funds offer 6–8% CAGR. For conservative planning, use 10–12% for equity SIPs and 7–8% for debt SIPs. Remember, these are historical averages and not guaranteed.',
            },
            {
                q: 'How does the step-up SIP feature work in the calculator?',
                a: 'The step-up SIP feature allows you to model annual increases in your monthly contribution. For example, if you start with ₹10,000 per month and set a 10% annual step-up, your SIP becomes ₹11,000 in year 2, ₹12,100 in year 3, and so on. This mirrors real-life salary growth and dramatically increases your final corpus — a 10% annual step-up can increase your final wealth by 50–70% compared to a flat SIP over a 20-year period.',
            },
            {
                q: 'What is the difference between SIP and lump sum investing?',
                a: 'SIP invests a fixed amount regularly over time, while lump sum invests the entire amount at once. SIP benefits from rupee cost averaging — you buy more units when prices are low and fewer when prices are high, reducing the impact of market timing. Lump sum can outperform SIP in a consistently rising market but carries higher timing risk. Our comparison calculator helps you evaluate both strategies for your specific situation.',
            },
            {
                q: 'Can I modify or stop my SIP in the middle?',
                a: 'Yes, SIPs are completely flexible. You can increase, decrease, pause, or stop your SIP at any time without any penalty. Most fund houses allow SIP modifications through their app or website. However, note that stopping a SIP early reduces the compounding benefit. If the calculator shows you need 15 years to reach your goal, stopping at year 8 will yield significantly less than the projected amount due to the exponential nature of compound growth.',
            },
            {
                q: 'How does inflation affect my SIP returns?',
                a: 'Inflation erodes the purchasing power of your future corpus. If your SIP projects ₹1 crore in 20 years at 12% nominal returns, and inflation averages 6% annually, the real purchasing power of that ₹1 crore is approximately ₹31 lakhs in today\'s terms. Our inflation-adjusted calculator shows this real value, helping you set more accurate and meaningful financial targets. To beat inflation comfortably, aim for returns at least 4–5% above the inflation rate.',
            },
            {
                q: 'Is the SIP calculator suitable for planning retirement savings?',
                a: 'Absolutely. The SIP calculator is one of the most effective tools for retirement planning. Enter your current age, desired retirement age, and expected monthly expenses in retirement to work backwards and determine the monthly SIP needed. For instance, if you need ₹2 crore by age 60 and you are currently 30, the goal-based calculator can tell you the exact monthly SIP required at various expected return rates. Combine this with the step-up SIP feature for the most realistic retirement savings plan.',
            },
        ],
        cta: {
            heading: 'Start Planning Your Wealth-Building Journey Today',
            subheading:
                'Use our free SIP Calculator to visualise how small, regular investments can grow into substantial wealth over time — and take the first step toward financial freedom.',
            features: [
                'Instant projections with interactive charts and year-wise breakup',
                'Step-up SIP modelling for realistic salary-linked investment growth',
                'Goal-based reverse calculator to find your ideal monthly SIP amount',
                'Inflation-adjusted returns for practical financial planning',
            ],
        },
    },

'step-up-sip-calculator': {
        slug: 'step-up-sip-calculator',
        title: 'Step Up SIP Calculator',
        subtitle:
            'Plan your wealth creation journey with our advanced Step Up SIP Calculator — model annual increment scenarios, visualize compounding growth, and discover how even modest yearly top-ups can dramatically accelerate your mutual fund corpus over time.',

        heroFeatures: [
            'Calculate Returns with Annual SIP Increment of 5%–50%',
            'Compare Regular SIP vs Step-Up SIP Growth Side by Side',
            'Visualize Year-by-Year Corpus Breakdown with Interactive Charts',
            'Model Multiple Scenarios with Custom Increment Percentages',
            'Get Instant Results — No Sign-Up or Download Required',
        ],

        overview: {
            heading: 'What is a Step Up SIP and How Does the Calculator Work?',
            paragraphs: [
                'A Step Up SIP (Systematic Investment Plan), also known as a Top-Up SIP, is an investment strategy where you increase your monthly SIP contribution by a fixed percentage or amount at regular intervals — typically once a year. Unlike a standard SIP where the investment amount remains constant throughout the tenure, a Step Up SIP aligns your investments with your growing income, ensuring that your savings rate keeps pace with salary increments, bonuses, and career progression. Most leading mutual fund houses in India — including SBI, HDFC, ICICI Prudential, and Axis — offer built-in step-up facilities that automate these annual increases.',

                'The Step Up SIP Calculator is a powerful financial planning tool that helps you estimate the future value of your investments when you commit to increasing your SIP contributions annually. By entering your initial monthly investment, expected annual increment percentage, estimated rate of return, and investment horizon, the calculator projects your total invested amount, expected returns, and final corpus. It factors in the compounding effect of both your growing contributions and accumulated returns, giving you a realistic picture of long-term wealth creation that a basic SIP calculator simply cannot provide.',

                'Financial advisors and certified planners consistently recommend step-up SIPs because they leverage the twin engines of disciplined investing and incremental growth. Research from the Association of Mutual Funds in India (AMFI) shows that investors who increase SIP contributions by just 10% annually can accumulate up to 50–60% more wealth over a 20-year horizon compared to those who maintain flat SIPs. Our calculator empowers you to experiment with different increment rates, compare outcomes, and find the optimal strategy that balances your current lifestyle with ambitious long-term financial goals such as retirement planning, children\'s education, or home purchase.',
            ],
            highlights: [
                { icon: '📈', text: 'A 10% annual step-up on a ₹10,000 SIP can generate 50–60% more corpus over 20 years compared to a flat SIP' },
                { icon: '💡', text: 'Aligns investment growth with salary increments — invest more as you earn more without lifestyle strain' },
                { icon: '🔄', text: 'Automates discipline — once configured with your fund house, increments happen without manual intervention' },
                { icon: '🎯', text: 'Ideal for goal-based planning — model exact scenarios for retirement, education, or home purchase milestones' },
            ],
        },

        types: [
            {
                title: 'Fixed Percentage Step-Up SIP',
                desc: 'The most popular variant where your SIP amount increases by a fixed percentage (e.g., 10%, 15%, or 25%) every year. If you start with ₹10,000 and choose a 10% annual step-up, your SIP becomes ₹11,000 in Year 2, ₹12,100 in Year 3, and so on. This method mirrors typical salary increment patterns and is offered by virtually all major AMCs through their online platforms and mobile apps.',
            },
            {
                title: 'Fixed Amount Step-Up SIP',
                desc: 'Instead of a percentage increase, you raise your SIP by a fixed rupee amount each year — for example, adding ₹2,000 annually. Starting at ₹10,000, your SIP becomes ₹12,000 in Year 2, ₹14,000 in Year 3, and so forth. This approach provides predictable, linear growth in contributions and is preferred by investors who want certainty about future cash outflows rather than exponentially rising commitments.',
            },
            {
                title: 'Custom Milestone-Based Step-Up',
                desc: 'An advanced approach where you increase SIP contributions at specific life or career milestones rather than fixed annual intervals. For instance, you might boost your SIP after a job promotion, completing a loan repayment, or receiving an annual bonus. While most AMC platforms support annual step-ups, milestone-based adjustments typically require manual SIP modifications through your fund house portal or distributor.',
            },
            {
                title: 'Inflation-Linked Step-Up SIP',
                desc: 'A strategy where your annual SIP increment is pegged to the prevailing inflation rate (typically 6–7% in India). This ensures your real investment value is preserved over time — you are not just investing more in nominal terms, but maintaining purchasing power parity. Financial planners recommend at least matching inflation with your step-up rate to prevent erosion of long-term corpus value.',
            },
            {
                title: 'Hybrid Step-Up with Lump Sum Top-Up',
                desc: 'Combines regular percentage-based annual step-ups with occasional lump sum investments triggered by windfalls like annual bonuses, tax refunds, or asset liquidation proceeds. While the calculator primarily models systematic annual increments, combining step-up SIPs with strategic lump sum deployments can significantly boost the overall corpus, especially when markets are undervalued.',
            },
        ],

        eligibility: [
            'Any Indian resident aged 18 years or above with a valid PAN card and KYC-compliant mutual fund account can start a Step Up SIP with any SEBI-registered Asset Management Company.',
            'NRIs (Non-Resident Indians) holding NRE or NRO bank accounts are eligible to invest in step-up SIPs, subject to FEMA regulations and fund-specific NRI investment policies.',
            'Minor investors can participate through a guardian-managed mutual fund account — the guardian sets up and manages the step-up SIP until the minor attains majority at age 18.',
            'Hindu Undivided Families (HUFs) and sole proprietorship firms can invest in step-up SIPs through their designated Karta or proprietor, using PAN and KYC documentation in the entity name.',
            'No minimum income or salary threshold is required — step-up SIPs can start from as low as ₹500 per month with many fund houses, with annual increments of as little as ₹500 or 5%.',
            'Investors must have an active bank account with auto-debit mandate (NACH/ECS) registration for seamless SIP deductions and annual step-up execution.',
            'Both existing SIP investors looking to upgrade their plans and new investors starting fresh can opt for step-up functionality during SIP registration or by modifying an existing SIP.',
            'Corporate and institutional investors including trusts, societies, and partnership firms can set up step-up SIPs provided they meet SEBI and AMFI documentation requirements for non-individual investors.',
        ],

        documents: [
            {
                category: 'Identity & KYC Documents',
                items: [
                    'PAN Card (mandatory for all mutual fund investments in India)',
                    'Aadhaar Card for eKYC verification and Aadhaar-based OTP authentication',
                    'Passport, Voter ID, or Driving License as supplementary identity proof',
                    'Recent passport-sized photograph (for physical KYC submission if required)',
                ],
            },
            {
                category: 'Bank & Financial Documents',
                items: [
                    'Active savings or current bank account with cheque book facility',
                    'Cancelled cheque or bank account statement for account verification and NACH mandate registration',
                    'NACH/ECS auto-debit mandate form signed or digitally authorized for SIP deductions',
                    'Latest 3-month bank statement if investing above ₹50,000 per month (for enhanced due diligence)',
                    'NRE/NRO account details with FIRC documentation for NRI investors',
                ],
            },
            {
                category: 'Address & Additional Proof',
                items: [
                    'Current address proof — utility bill (electricity, gas, water, landline), bank statement, or rent agreement not older than 3 months',
                    'Aadhaar card serves as both identity and address proof under SEBI\'s simplified KYC norms',
                    'For NRIs — overseas address proof with apostilled or notarized documents as required by the AMC',
                    'FATCA (Foreign Account Tax Compliance Act) self-declaration form for all investors',
                ],
            },
        ],

        process: [
            {
                title: 'Define Your Financial Goal and Timeline',
                desc: 'Begin by clearly identifying the financial objective you are saving for — retirement corpus, child\'s higher education, home down payment, or general wealth creation. Determine your investment horizon (e.g., 10, 15, 20, or 25 years) as this directly impacts how step-up compounding works in your favor.',
                time: '15–30 minutes',
            },
            {
                title: 'Determine Starting SIP Amount and Step-Up Rate',
                desc: 'Assess your current monthly surplus after essential expenses and existing EMIs. Choose a comfortable starting SIP amount (e.g., ₹5,000 or ₹10,000) and decide on an annual step-up percentage (typically 10–15%) that aligns with your expected salary growth trajectory.',
                time: '20–30 minutes',
            },
            {
                title: 'Use the Step Up SIP Calculator to Model Scenarios',
                desc: 'Enter your starting SIP amount, annual step-up percentage, expected rate of return (typically 12–15% for equity funds, 7–9% for debt funds), and investment tenure into the calculator. Compare multiple scenarios by adjusting variables — see how a 10% vs 15% vs 25% step-up changes your final corpus.',
                time: '5–10 minutes',
            },
            {
                title: 'Select the Right Mutual Fund Scheme',
                desc: 'Based on your risk profile and investment horizon, choose between equity (large-cap, mid-cap, flexi-cap), hybrid (balanced advantage), or debt mutual fund categories. Review the fund\'s 3-year, 5-year, and 10-year CAGR, expense ratio, fund manager track record, and AUM before finalizing.',
                time: '1–3 hours (research)',
            },
            {
                title: 'Complete KYC and Register Your SIP',
                desc: 'If you are a first-time mutual fund investor, complete your KYC through the AMC website, CAMS/KFintech portals, or platforms like MFCentral. Register your step-up SIP online by specifying the base amount, step-up percentage, frequency (annual), SIP date, and investment tenure.',
                time: '30–60 minutes',
            },
            {
                title: 'Set Up Auto-Debit Mandate (NACH/ECS)',
                desc: 'Authorize an auto-debit mandate through your bank via net banking, UPI autopay, or physical NACH form submission. This ensures your SIP installments — including stepped-up amounts — are automatically debited from your bank account on the chosen date each month without manual intervention.',
                time: '1–2 business days',
            },
            {
                title: 'Monitor, Review, and Rebalance Annually',
                desc: 'Track your step-up SIP performance through the AMC app, consolidated account statement (CAS), or portfolio trackers like MFCentral. Review annually whether your actual returns align with calculator projections, and adjust your step-up rate or fund allocation if your financial goals, income, or market conditions change significantly.',
                time: 'Ongoing (annual review)',
            },
        ],

        fees: [
            { item: 'SIP Registration & Setup', cost: 'Free — no charges levied by AMCs or platforms' },
            { item: 'Step-Up/Top-Up Modification Fee', cost: 'Free — annual step-up activation and changes are at zero cost' },
            { item: 'Expense Ratio (Fund Management Fee)', cost: '0.05%–2.25% annually (deducted from NAV; varies by fund category and plan type — Direct plans have lower ratios)' },
            { item: 'Exit Load (Early Redemption Charge)', cost: '0%–1% if redeemed within 1 year for equity funds; nil for most debt funds beyond 3–6 months holding period' },
            { item: 'Stamp Duty on Mutual Fund Purchases', cost: '0.005% of transaction value (applicable since July 2020 on all fresh purchases and SIP installments)' },
            { item: 'Capital Gains Tax (on Redemption)', cost: 'STCG: 20% (equity, <1 year) | LTCG: 12.5% above ₹1.25 lakh (equity, >1 year) | As per income slab for debt funds' },
        ],

        advantages: [
            {
                icon: '🚀',
                title: 'Exponential Wealth Acceleration',
                desc: 'Step-up SIPs harness the dual power of increasing contributions and compound returns. A ₹10,000 monthly SIP with a 10% annual step-up at 12% returns grows to approximately ₹1.9 crore in 20 years — versus ₹1 crore with a flat SIP. The incremental discipline generates nearly double the wealth.',
            },
            {
                icon: '💰',
                title: 'Income-Aligned Investment Growth',
                desc: 'By pegging SIP increases to your salary increments (typically 8–15% annually in India), step-up SIPs ensure you invest proportionally more as your earning capacity grows — without impacting your current standard of living or creating financial stress.',
            },
            {
                icon: '🎯',
                title: 'Precise Goal-Based Planning',
                desc: 'The calculator lets you reverse-engineer exact step-up rates needed to achieve specific financial targets. Need ₹5 crore for retirement in 25 years? The tool tells you the starting SIP and annual increment required, transforming abstract goals into actionable monthly commitments.',
            },
            {
                icon: '🛡️',
                title: 'Built-In Inflation Protection',
                desc: 'A flat SIP loses real value over time due to inflation (averaging 6–7% in India). Step-up SIPs counteract this erosion by ensuring your investment contributions grow at least as fast as inflation, preserving and enhancing the purchasing power of your future corpus.',
            },
            {
                icon: '🧠',
                title: 'Behavioral Discipline & Automation',
                desc: 'Once configured, step-up SIPs run on autopilot — your fund house automatically increases the debit amount each year. This removes the psychological barrier of manually deciding to invest more, leveraging automation to enforce financial discipline even during periods of market volatility or spending temptation.',
            },
            {
                icon: '📊',
                title: 'Superior Rupee Cost Averaging',
                desc: 'As your SIP amount increases over time, you purchase more units during market corrections and fewer during peaks — amplifying the rupee cost averaging benefit. Higher contributions during bear markets mean a lower average cost per unit, boosting overall portfolio returns when markets recover.',
            },
        ],

        disadvantages: [
            'Overcommitment Risk — Aggressive step-up rates (above 20–25% annually) can strain monthly cash flows during years when salary increments fall short of expectations, unexpected expenses arise, or economic downturns reduce disposable income. Always maintain an emergency fund equivalent to 6 months of expenses before committing to high step-up rates.',
            'Projection Assumptions May Not Materialize — Calculator estimates are based on assumed constant annual returns (e.g., 12% CAGR), which rarely occur in practice. Actual mutual fund returns fluctuate significantly year to year — equity markets can deliver 30% in one year and negative returns the next, making long-term projections indicative rather than guaranteed.',
            'Limited Flexibility in Down Years — Most AMC step-up SIP configurations do not allow temporary pauses or reductions in the increment during financially difficult years. If you cannot honor the stepped-up amount, you may need to cancel the existing SIP and register a new one at a lower amount, disrupting continuity and potentially triggering exit loads.',
            'Does Not Account for Tax Drag and Inflation Variability — Standard step-up SIP calculators typically show pre-tax returns and assume a constant inflation rate. In reality, capital gains taxes (STCG at 20%, LTCG at 12.5% above ₹1.25 lakh for equity), inflation variability, and changing tax laws can significantly reduce the effective real returns compared to calculator projections.',
        ],

        faqs: [
            {
                q: 'What is the difference between a regular SIP and a Step Up SIP?',
                a: 'In a regular SIP, you invest a fixed amount (e.g., ₹10,000) every month throughout the investment tenure. In a Step Up SIP, your monthly investment automatically increases by a predetermined percentage or fixed amount at annual intervals. For example, with a 10% step-up, your ₹10,000 SIP becomes ₹11,000 in Year 2, ₹12,100 in Year 3, and so on — resulting in significantly higher wealth accumulation due to increased contributions compounding over time.',
            },
            {
                q: 'What is a good annual step-up percentage for SIP investments?',
                a: 'Financial planners generally recommend a step-up rate of 10–15% annually, which closely mirrors the average salary increment rate for salaried professionals in India. Conservative investors may start with 5–10%, while aggressive savers with rapidly growing incomes can opt for 15–25%. The key principle is to choose a rate you can sustain for the entire investment horizon without straining your monthly budget — consistency matters more than the percentage itself.',
            },
            {
                q: 'Can I modify or cancel my Step Up SIP after starting it?',
                a: 'Yes. Most AMCs and investment platforms allow you to modify the step-up percentage, pause the SIP temporarily, or cancel it entirely through their online portal, mobile app, or by submitting a written request. However, modifications typically take effect from the next billing cycle, and cancelled SIPs may trigger exit loads on units purchased within the load period. Check your specific fund house\'s terms before making changes.',
            },
            {
                q: 'How much extra wealth can a Step Up SIP generate compared to a flat SIP?',
                a: 'The additional wealth depends on your step-up rate, return expectations, and tenure. As a benchmark: a ₹10,000 monthly SIP with 12% annual returns over 20 years generates approximately ₹1 crore with a flat SIP. With a 10% annual step-up, the same scenario yields approximately ₹1.9 crore — nearly 90% more wealth. With a 15% step-up, the corpus can exceed ₹2.5 crore. Longer tenures and higher step-up rates amplify this differential exponentially.',
            },
            {
                q: 'Is the Step Up SIP Calculator accurate for real investment planning?',
                a: 'The calculator provides reliable indicative estimates based on the mathematical model of compound growth with incrementally increasing contributions. However, it assumes a constant annual return rate, which differs from real-world market behavior where returns fluctuate. Use it as a directional planning tool — your actual corpus will vary based on market conditions, fund performance, expense ratios, tax implications, and whether you maintain the step-up discipline throughout the tenure.',
            },
            {
                q: 'Which mutual fund categories are best suited for Step Up SIPs?',
                a: 'For long-term step-up SIPs (10+ years), equity-oriented funds — particularly flexi-cap, large-cap, and index funds — are ideal because they offer the highest long-term CAGR (12–15% historically) to maximize the compounding benefit of increasing contributions. For medium-term goals (5–7 years), hybrid or balanced advantage funds provide a smoother ride. Avoid pure debt funds for step-up SIPs unless your goal is capital preservation, as their lower returns (6–8%) diminish the incremental benefit of stepping up.',
            },
            {
                q: 'Do all mutual fund companies in India offer Step Up SIP facility?',
                a: 'Most major AMCs in India — including SBI Mutual Fund, HDFC Mutual Fund, ICICI Prudential, Axis, Nippon India, Kotak, and DSP — offer step-up or top-up SIP options through their websites and apps. Additionally, investment platforms like Groww, Zerodha Coin, Kuvera, and Paytm Money provide step-up SIP configuration across multiple AMCs. The minimum step-up amount and percentage vary by AMC, typically starting from ₹500 or 5% per annum.',
            },
            {
                q: 'Can I use the Step Up SIP Calculator for goal-based financial planning?',
                a: 'Absolutely — goal-based planning is the primary use case for this calculator. Input your target corpus (e.g., ₹2 crore for retirement), expected return rate, and investment tenure, then experiment with different starting SIP amounts and step-up rates until the projected corpus meets your goal. Many investors use it to plan for multiple simultaneous goals — allocating separate step-up SIPs for retirement, children\'s education, home purchase, and emergency corpus building.',
            },
        ],

        cta: {
            heading: 'Start Planning Your Step Up SIP Strategy Today',
            subheading:
                'Use our free Step Up SIP Calculator to discover how small annual increments can transform your long-term wealth. Get personalized mutual fund recommendations from our certified financial planners.',
            features: [
                'Free Step Up SIP Calculations with Detailed Year-by-Year Projections',
                'Expert Mutual Fund Selection Guidance Based on Your Risk Profile',
                'Customized Goal-Based Investment Plans with Step-Up Optimization',
                'Ongoing Portfolio Monitoring and Annual Rebalancing Support',
            ],
        },
    },

    'home-loan-emi-calculator': {
        slug: 'home-loan-emi-calculator',
        title: 'HDFC Home Loan EMI Calculator',
        subtitle:
            'Calculate your HDFC home loan EMI instantly with our advanced calculator — generate detailed amortization schedules, analyze prepayment savings, compare floating vs fixed rate scenarios, and plan your home purchase with complete financial clarity.',

        heroFeatures: [
            'Calculate Monthly EMI for Loan Amounts from ₹1 Lakh to ₹10 Crore+',
            'Generate Full Amortization Schedule with Principal & Interest Breakdown',
            'Analyze Part-Prepayment and Full Prepayment Savings Instantly',
            'Compare Floating Rate vs Fixed Rate EMI Scenarios Side by Side',
            'View Total Interest Payable and Loan Cost Over Complete Tenure',
        ],

        overview: {
            heading: 'How Does the HDFC Home Loan EMI Calculator Work?',
            paragraphs: [
                'The HDFC Home Loan EMI Calculator is a comprehensive financial planning tool designed to help prospective homebuyers estimate their Equated Monthly Installment (EMI) for housing loans offered by HDFC Ltd (now merged with HDFC Bank). EMI is the fixed monthly payment comprising both principal repayment and interest charges that a borrower pays to the lender over the loan tenure. The calculator uses the standard reducing balance method formula — EMI = [P × r × (1+r)^n] / [(1+r)^n – 1] — where P is the principal loan amount, r is the monthly interest rate, and n is the total number of monthly installments. By inputting your desired loan amount, applicable interest rate, and preferred tenure, you get instant, accurate EMI figures along with a complete cost-of-borrowing analysis.',

                'Beyond basic EMI computation, this calculator generates a month-by-month amortization schedule that reveals exactly how much of each EMI payment goes toward principal reduction versus interest servicing. In the early years of a home loan, a significantly larger portion of the EMI covers interest (often 70–80%), with the principal component gradually increasing over time. Understanding this amortization pattern is crucial for making informed decisions about prepayments — even a single lump sum prepayment in the early years can save lakhs in interest and reduce your loan tenure by several years. The calculator\'s prepayment analysis module lets you model these scenarios precisely.',

                'HDFC Bank (post-merger with HDFC Ltd) is India\'s largest housing finance provider, with home loan interest rates currently starting from 8.25% per annum for salaried individuals and 8.30% for self-employed borrowers. Loan tenures extend up to 30 years, with amounts ranging from ₹5 lakh to ₹10 crore or more based on eligibility. Our calculator incorporates these parameters and allows you to experiment with different combinations of loan amount, interest rate, and tenure to find the EMI sweet spot that fits your monthly budget while minimizing total interest outflow. Whether you are a first-time homebuyer, upgrading to a larger property, or refinancing an existing loan, this tool provides the financial clarity needed to make one of life\'s most significant financial decisions.',
            ],
            highlights: [
                { icon: '🏠', text: 'HDFC home loan rates start from 8.25% p.a. for salaried borrowers — among the most competitive in India' },
                { icon: '📋', text: 'Amortization schedule reveals that up to 80% of initial EMIs go toward interest — prepay early to save lakhs' },
                { icon: '⚡', text: 'Part-prepayment of just 1–2 EMIs extra per year can reduce a 20-year loan tenure by 3–5 years' },
                { icon: '💹', text: 'Floating rate loans benefit from RBI rate cuts — every 0.25% reduction saves ₹15–20 per lakh per month on EMI' },
            ],
        },

        types: [
            {
                title: 'Home Purchase Loan (New or Resale Property)',
                desc: 'The standard home loan product for purchasing a new apartment, villa, independent house, or resale residential property. HDFC Bank finances up to 75–90% of the property value (Loan-to-Value ratio depends on the loan amount slab as per RBI norms). Eligible properties include builder flats, society apartments, plotted developments with construction, and resale properties with clear title documentation.',
            },
            {
                title: 'Home Construction Loan',
                desc: 'Designed for borrowers who own a plot of land and wish to construct a residential house. HDFC Bank disburses the loan in tranches linked to construction milestones verified by their technical team. Interest during the construction phase is charged only on the disbursed amount (pre-EMI interest), with full EMI commencing after complete disbursement. Construction must typically be completed within 36 months.',
            },
            {
                title: 'Home Extension & Renovation Loan',
                desc: 'Available for homeowners looking to extend their existing property (adding rooms, floors, or additional built-up area) or undertake significant renovation work (structural modifications, modernization, or upgrades). Loan amounts are typically lower than purchase loans, and the tenure may be shorter (up to 15–20 years). The property\'s enhanced value post-renovation serves as collateral.',
            },
            {
                title: 'Balance Transfer (Home Loan Refinancing)',
                desc: 'Allows borrowers to transfer their outstanding home loan from another bank or HFC to HDFC Bank to benefit from lower interest rates, better service, or top-up loan availability. HDFC Bank evaluates the outstanding principal, remaining tenure, and property value before approving the transfer. Borrowers can save significantly on total interest if the rate differential is 0.25% or more, especially in the early-to-mid tenure of the original loan.',
            },
            {
                title: 'Plot Purchase Loan with Construction Finance',
                desc: 'A composite loan product that covers both the purchase of a residential plot and subsequent construction of a house on it. The plot purchase component is disbursed first, followed by construction tranches. Construction must commence within a specified period (usually 12–24 months from plot purchase disbursement). The combined loan amount is determined by the total project cost including plot value and estimated construction expenses.',
            },
        ],

        eligibility: [
            'Salaried individuals aged 21–65 years (at loan maturity) with a minimum net monthly income of ₹25,000 and at least 2–3 years of total work experience including 1 year with the current employer are eligible for HDFC home loans.',
            'Self-employed professionals (doctors, CAs, architects, lawyers) and business owners aged 25–70 years (at loan maturity) with a minimum annual income of ₹3 lakh and at least 3 years of business continuity or professional practice are eligible.',
            'A CIBIL credit score of 700 or above is generally required for competitive interest rates. Scores between 650–700 may qualify at higher rates, while scores below 650 often result in rejection or significantly elevated pricing.',
            'The total EMI-to-income ratio (including all existing loans) should not exceed 50–60% of net monthly income. HDFC Bank uses the Fixed Obligation to Income Ratio (FOIR) metric — typically capped at 55% for salaried and 50% for self-employed applicants.',
            'Loan-to-Value (LTV) ratio follows RBI guidelines: up to 90% for loans up to ₹30 lakh, 80% for loans between ₹30–75 lakh, and 75% for loans above ₹75 lakh. The remaining amount must be funded through borrower\'s own contribution (down payment).',
            'Co-applicants (spouse, parents, or co-owners) can be added to enhance loan eligibility by combining incomes. All property co-owners must mandatorily be co-applicants to the home loan as per HDFC Bank policy.',
            'NRIs and PIOs (Persons of Indian Origin) can avail HDFC home loans for properties in India, subject to FEMA compliance, NRE/NRO account maintenance, and power of attorney arrangements for documentation and disbursement.',
            'The property must be located in an area approved by HDFC Bank, with clear title, valid building approvals, occupation certificate (for ready properties), and must not be under any legal dispute or encumbrance. Builder projects must be on HDFC Bank\'s approved project list for under-construction purchases.',
        ],

        documents: [
            {
                category: 'Identity, Income & Employment Proof',
                items: [
                    'PAN Card and Aadhaar Card (mandatory for all applicants and co-applicants)',
                    'Latest 6 months\' salary slips and Form 16 / IT Returns for the last 2 years (salaried applicants)',
                    'Last 3 years\' audited financial statements (Profit & Loss, Balance Sheet) with ITR, computation of income, and business profile for self-employed applicants',
                    'Latest 6 months\' bank statements of the salary account or primary business account showing regular cash flows',
                    'Employment offer letter or appointment letter, and experience certificates for salaried applicants',
                ],
            },
            {
                category: 'Property & Legal Documents',
                items: [
                    'Sale agreement / allotment letter from the builder or seller with full property specifications',
                    'Title deed chain — sale deed, conveyance deed, or mother deed establishing clear ownership history for at least 30 years',
                    'Approved building plan, commencement certificate, and occupation/completion certificate (for ready properties) from the local municipal authority',
                    'Encumbrance certificate (EC) for the last 13–30 years confirming the property is free from legal liabilities or mortgages',
                    'Property tax paid receipts, society NOC (if applicable), and land revenue records (7/12 extract or equivalent)',
                ],
            },
            {
                category: 'Additional Documents for Special Cases',
                items: [
                    'Power of Attorney (POA) — notarized and registered — for NRI applicants authorizing a representative in India for documentation and disbursement proceedings',
                    'FEMA declaration and NRE/NRO account details with FIRC certificates for NRI applicants',
                    'Existing loan sanction letter and last 12 months\' repayment track record for balance transfer applications',
                    'Construction estimate from a licensed architect or civil engineer, approved building plan, and stage-wise completion schedule for construction and plot + construction loans',
                    'Business registration certificate, GST registration, partnership deed, or Memorandum of Association for self-employed and business applicants',
                ],
            },
        ],

        process: [
            {
                title: 'Check Eligibility and Calculate Affordable EMI',
                desc: 'Use the EMI calculator to determine how much home loan you can afford based on your monthly income, existing obligations, and desired EMI budget. Input different loan amounts, interest rates, and tenures to find the combination where the EMI stays within 40–45% of your net monthly income — leaving sufficient margin for other expenses and savings.',
                time: '15–30 minutes',
            },
            {
                title: 'Get Pre-Approved or In-Principle Sanction',
                desc: 'Apply for a pre-approval from HDFC Bank by submitting basic income and identity documents. Pre-approval gives you a conditional loan sanction letter specifying the maximum eligible loan amount and applicable interest rate — strengthening your position during property negotiations and helping you search within a realistic budget.',
                time: '2–5 business days',
            },
            {
                title: 'Select Property and Negotiate Purchase Terms',
                desc: 'Identify and finalize the residential property you wish to purchase. Ensure the property or builder project is on HDFC Bank\'s approved list (for under-construction properties). Negotiate the purchase price, payment schedule, and registration terms with the seller or developer before signing the agreement to sell.',
                time: '2–8 weeks (varies)',
            },
            {
                title: 'Submit Complete Loan Application with Documents',
                desc: 'Fill the HDFC Bank home loan application form online or at a branch. Attach all required documents including income proof, identity documents, property papers, and bank statements. Pay the applicable processing fee (typically 0.25–0.50% of loan amount or ₹3,000–₹10,000, whichever is applicable). The bank assigns a dedicated relationship manager for your application.',
                time: '1–2 days',
            },
            {
                title: 'Technical and Legal Verification by Bank',
                desc: 'HDFC Bank conducts independent technical valuation (assessing property market value, construction quality, and compliance with approved plans) and legal verification (examining title documents, ownership chain, encumbrances, and municipal approvals). Both reports must be satisfactory for loan sanction to proceed.',
                time: '5–10 business days',
            },
            {
                title: 'Loan Sanction and Offer Letter Issuance',
                desc: 'Upon satisfactory verification, HDFC Bank issues a formal loan sanction letter detailing the approved loan amount, interest rate (fixed or floating), tenure, EMI amount, terms and conditions, and disbursement schedule. Review all terms carefully, especially prepayment charges, rate reset clauses, and insurance requirements before accepting.',
                time: '2–3 business days after verification',
            },
            {
                title: 'Loan Disbursement and EMI Commencement',
                desc: 'After you accept the sanction letter and complete the property registration, HDFC Bank disburses the loan amount — either as a lump sum (for ready properties) or in tranches (for under-construction or construction loans). EMI payments commence from the month following full disbursement, or pre-EMI interest is charged on partial disbursements until full release.',
                time: '3–7 business days post-registration',
            },
        ],

        fees: [
            { item: 'Loan Processing Fee', cost: '0.25%–0.50% of loan amount or ₹3,000 minimum (often waived during festive offers and special promotions)' },
            { item: 'Prepayment / Foreclosure Charges', cost: 'NIL for floating rate loans (as per RBI mandate) | Up to 2% on outstanding principal for fixed rate loans' },
            { item: 'Legal & Technical Verification Fee', cost: '₹5,000–₹15,000 depending on property value and location (one-time, non-refundable)' },
            { item: 'Loan Statement / NOC Issuance Fee', cost: '₹500–₹1,000 per statement; NOC issued free of charge upon full loan repayment' },
            { item: 'CERSAI Registration Charge', cost: '₹50–₹100 (mandatory Central Registry charge for registering mortgage with the government)' },
            { item: 'Stamp Duty on Loan Agreement', cost: 'Varies by state — typically 0.1%–0.5% of loan amount (Maharashtra: 0.1%, Karnataka: 0.3%, etc.)' },
        ],

        advantages: [
            {
                icon: '🏦',
                title: 'India\'s Most Trusted Housing Lender',
                desc: 'HDFC Bank (merged with HDFC Ltd) is India\'s largest home loan provider with over ₹6 lakh crore in housing loan assets. Decades of expertise, nationwide branch presence across 3,500+ cities, and a robust digital platform ensure reliable, transparent, and efficient loan processing from application to disbursement.',
            },
            {
                icon: '📉',
                title: 'Competitive Interest Rates with Rate Flexibility',
                desc: 'HDFC Bank offers home loan rates starting from 8.25% p.a. — linked to the RBI repo rate for transparent transmission. Borrowers benefit automatically from RBI rate cuts through lower EMIs or reduced tenure. The calculator helps you visualize the exact savings from even a 0.25% rate reduction across your full loan tenure.',
            },
            {
                icon: '💰',
                title: 'Substantial Tax Benefits Under Multiple Sections',
                desc: 'Home loan borrowers enjoy significant tax deductions — up to ₹2 lakh per year on interest paid (Section 24b), up to ₹1.5 lakh on principal repayment (Section 80C), and additional ₹50,000 for first-time buyers under Section 80EEA. These benefits can effectively reduce your net EMI burden by 20–30% depending on your tax slab.',
            },
            {
                icon: '⚡',
                title: 'Free Prepayment with Massive Savings Potential',
                desc: 'RBI mandates zero prepayment charges on floating rate home loans. The calculator\'s prepayment analysis shows that paying just one extra EMI per year on a ₹50 lakh, 20-year loan at 8.5% saves approximately ₹8–10 lakh in total interest and reduces the tenure by 2–3 years — a powerful wealth optimization strategy.',
            },
            {
                icon: '📊',
                title: 'Complete Amortization Transparency',
                desc: 'The detailed month-by-month amortization schedule reveals exactly how your money is allocated between principal and interest at every stage. This transparency helps you identify the optimal timing for prepayments (earlier is better), plan for interest certificate submissions for tax filing, and track your equity buildup in the property over time.',
            },
            {
                icon: '🔄',
                title: 'Flexible Tenure and Repayment Options',
                desc: 'HDFC Bank offers tenures from 5 to 30 years, allowing you to balance between lower EMIs (longer tenure) and lower total interest (shorter tenure). The calculator helps you compare — a ₹50 lakh loan at 8.5% costs ₹45,000 EMI over 20 years (₹58 lakh total interest) vs ₹39,000 over 25 years (₹67 lakh interest) — enabling informed trade-off decisions.',
            },
        ],

        disadvantages: [
            'Long-Term Interest Burden — Even at competitive rates, home loans carry enormous total interest costs. A ₹50 lakh loan at 8.5% over 20 years results in approximately ₹58 lakh in total interest — more than the principal itself. Extending the tenure to 25 or 30 years to reduce EMI further inflates total interest to ₹67 lakh or ₹78 lakh respectively, making tenure extension a costly convenience.',
            'Floating Rate Uncertainty — While floating rates benefit from RBI cuts, they also expose borrowers to rate hikes. In a rising interest rate cycle (as seen in 2022–2023), EMIs or loan tenure can increase significantly. A 1% rate increase on a ₹50 lakh, 20-year loan raises the EMI by approximately ₹3,000–₹3,500 per month, impacting household budgets substantially.',
            'Heavy Documentation and Processing Time — Home loan applications require extensive documentation (income proof, property papers, legal verification, technical valuation) and the end-to-end process typically takes 2–4 weeks. Self-employed applicants face even more stringent documentation requirements including audited financials, ITRs, and business proof — often extending processing time to 4–6 weeks.',
            'Property Lock-In and Liquidity Constraint — A home loan ties your largest asset to a long-term debt obligation, reducing financial flexibility. Selling the property before loan closure requires lender NOC and loan transfer/prepayment, adding complexity and cost. Additionally, the mandatory down payment (10–25% of property value) locks up significant capital that could otherwise be deployed in higher-return investments.',
        ],

        faqs: [
            {
                q: 'How is home loan EMI calculated using the reducing balance method?',
                a: 'EMI is calculated using the formula: EMI = [P × r × (1+r)^n] / [(1+r)^n – 1], where P is the principal loan amount, r is the monthly interest rate (annual rate divided by 12), and n is the total number of monthly installments. For example, a ₹50 lakh loan at 8.5% for 20 years: r = 8.5/(12×100) = 0.00708, n = 240 months, giving EMI = approximately ₹43,391. The reducing balance method means interest is calculated on the outstanding principal each month, which decreases with every EMI paid.',
            },
            {
                q: 'What is the current HDFC Bank home loan interest rate?',
                a: 'As of the latest available rates, HDFC Bank offers home loan interest rates starting from 8.25% per annum for salaried individuals and 8.30% for self-employed borrowers under the floating rate regime linked to the HDFC Bank RPLR (Retail Prime Lending Rate). Actual rates vary based on your loan amount, credit score, employment profile, and relationship with the bank. Women borrowers typically get a 0.05% concession. Always verify the latest rates on the official HDFC Bank website or through a branch representative before making decisions.',
            },
            {
                q: 'How can I reduce my total home loan interest outflow?',
                a: 'Five proven strategies to minimize interest: (1) Choose the shortest tenure you can comfortably afford — shorter tenure means dramatically less interest. (2) Make regular part-prepayments — even one extra EMI per year saves lakhs. (3) Opt for a higher EMI if your income allows — increasing EMI by ₹5,000 on a ₹50 lakh loan can save ₹10+ lakh in interest. (4) Negotiate for the lowest possible interest rate at sanction and review refinancing options periodically. (5) Ensure prepayments are directed toward principal reduction, not advance EMI payments.',
            },
            {
                q: 'What is an amortization schedule and why is it important?',
                a: 'An amortization schedule is a detailed month-by-month table showing the breakdown of each EMI payment into principal and interest components, along with the outstanding loan balance after each payment. It is crucial because it reveals that in the initial years, 70–80% of your EMI goes toward interest with only 20–30% reducing the principal. This insight helps you time prepayments optimally — prepaying in the first 5–7 years has the maximum impact on total interest savings because the outstanding principal (on which interest accrues) is highest during this period.',
            },
            {
                q: 'Are there any charges for prepaying my HDFC floating rate home loan?',
                a: 'No. As per RBI circular dated June 2012, no Indian bank or HFC can levy prepayment or foreclosure charges on floating rate home loans for individual borrowers. This applies to both part-prepayments and full loan closure. However, fixed rate home loans may attract a prepayment penalty of up to 2% on the outstanding principal amount. HDFC Bank\'s floating rate home loans are fully prepayment-free, making them ideal for borrowers who plan to make regular lump sum payments.',
            },
            {
                q: 'Should I choose a fixed or floating interest rate for my home loan?',
                a: 'For most borrowers, floating rate is recommended because: (1) Floating rates are typically 1–2% lower than fixed rates at inception. (2) Zero prepayment charges on floating loans per RBI rules. (3) You benefit from RBI rate cuts automatically. (4) True "fixed" rates in India are actually fixed only for 2–5 years, after which they reset to floating. Choose fixed only if you have strong reason to believe interest rates will rise sharply and you want EMI certainty for the fixed period. The calculator helps you compare EMIs under both scenarios.',
            },
            {
                q: 'How much home loan am I eligible for based on my salary?',
                a: 'As a general rule, HDFC Bank considers 55–60% of your net monthly income as the maximum allowable EMI (across all loans). So if your net salary is ₹1 lakh, your total EMI capacity is approximately ₹55,000–₹60,000. Subtracting existing EMIs (car loan, personal loan, credit card dues), the remaining capacity determines your home loan eligibility. At 8.5% for 20 years, ₹50,000 EMI capacity translates to approximately ₹57–58 lakh loan eligibility. Factors like credit score, employer category, and co-applicant income can increase this significantly.',
            },
            {
                q: 'What tax benefits are available on home loan EMI payments?',
                a: 'Home loan borrowers enjoy three primary tax benefits: (1) Section 24(b) — Deduction of up to ₹2 lakh per year on interest paid for self-occupied property (no limit for let-out property). (2) Section 80C — Deduction of up to ₹1.5 lakh per year on principal repayment (within the overall 80C limit). (3) Section 80EEA — Additional ₹1.5 lakh deduction on interest for first-time buyers (for loans sanctioned between specific dates, subject to property value cap). These benefits combined can reduce your effective annual tax liability by ₹60,000–₹1.5 lakh depending on your income tax slab.',
            },
        ],

        cta: {
            heading: 'Calculate Your HDFC Home Loan EMI Now',
            subheading:
                'Get instant EMI estimates, detailed amortization schedules, and prepayment analysis for your dream home. Our certified financial advisors can help you secure the best rates and optimize your loan structure.',
            features: [
                'Free EMI Calculation with Month-by-Month Amortization Breakdown',
                'Prepayment Savings Analysis — See How Extra Payments Reduce Tenure and Interest',
                'Expert Assistance for HDFC Home Loan Application and Documentation',
                'Rate Negotiation Support and Balance Transfer Advisory for Existing Borrowers',
            ],
        },
    },

'gst-calculator': {
        slug: 'gst-calculator',
        title: 'GST Calculator',
        subtitle:
            'Instantly compute GST-inclusive and GST-exclusive prices across all slab rates — 5%, 12%, 18%, and 28% — with a free, easy-to-use online GST calculator trusted by businesses, CAs, and freelancers.',
        heroFeatures: [
            'Calculate GST-Inclusive & Exclusive Amounts Instantly',
            'Supports All GST Slabs — 5%, 12%, 18% & 28%',
            'Breakup of CGST, SGST & IGST Components',
            'Ideal for Invoicing, Billing & Tax Compliance',
            'Free Tool — No Registration or Login Required',
        ],
        overview: {
            heading: 'What is a GST Calculator and Why Do You Need One?',
            paragraphs: [
                'A GST Calculator is a digital tool designed to compute the Goods and Services Tax applicable on any product or service in India. Whether you are adding GST to a base price or extracting the tax component from an inclusive amount, the calculator handles both operations with pinpoint accuracy. It eliminates the need for manual arithmetic, reduces billing errors, and helps businesses stay compliant with GST regulations enforced by the Central Board of Indirect Taxes and Customs (CBIC).',
                'Under the GST framework introduced on 1 July 2017, every taxable supply of goods or services attracts a specific tax rate determined by the HSN (Harmonized System of Nomenclature) or SAC (Services Accounting Code). The four primary GST slabs — 5%, 12%, 18%, and 28% — cover everything from everyday essentials to luxury goods. The calculator instantly splits the computed tax into its CGST, SGST, and IGST components, making it invaluable for preparing invoices, filing returns, and reconciling input tax credit.',
                'Whether you are a small business owner generating invoices, a chartered accountant verifying tax liability, a freelancer quoting GST-inclusive rates to clients, or a consumer who simply wants to understand the tax breakup on a purchase, this GST Calculator serves as a reliable, fast, and transparent tool that takes the guesswork out of GST computation.',
            ],
            highlights: [
                { icon: '🧮', text: 'Computes both GST-inclusive (add tax) and GST-exclusive (remove tax) amounts' },
                { icon: '📊', text: 'Automatic split into CGST, SGST, and IGST components for accurate invoicing' },
                { icon: '⚡', text: 'Real-time calculation across all four GST slab rates — 5%, 12%, 18%, 28%' },
                { icon: '📋', text: 'Helps businesses maintain GST-compliant invoices and avoid penalties' },
            ],
        },
        types: [
            {
                title: 'GST-Exclusive Calculation (Adding GST)',
                desc: 'Start with the base price of a product or service and add the applicable GST rate to determine the final selling price. This is the most common calculation used by businesses when generating invoices. For example, if a product costs ₹1,000 and the GST rate is 18%, the tool calculates ₹180 as tax and ₹1,180 as the total payable amount, with a clear breakup of CGST (₹90) and SGST (₹90) for intra-state sales.',
            },
            {
                title: 'GST-Inclusive Calculation (Removing GST)',
                desc: 'Begin with the total MRP or selling price that already includes GST and reverse-calculate the base price and embedded tax amount. This is essential for consumers who want to know the actual product cost, retailers decoding MRP-based pricing, and accountants reconciling purchase entries. The formula used is: Base Price = Total Price × 100 / (100 + GST Rate).',
            },
            {
                title: 'IGST Calculation (Inter-State Transactions)',
                desc: 'When goods or services are supplied between two different states, Integrated GST (IGST) applies instead of the CGST + SGST combination. The calculator identifies inter-state transactions and computes the entire tax as IGST payable to the Central Government. For instance, a ₹5,000 service taxed at 18% inter-state results in ₹900 IGST with no state-level split.',
            },
            {
                title: 'Reverse Charge Mechanism (RCM) Calculation',
                desc: 'Under certain notified supplies, the recipient of goods or services is liable to pay GST instead of the supplier — this is the Reverse Charge Mechanism. The calculator helps recipients determine the exact GST liability they need to self-assess and pay, ensuring compliance with Section 9(3) and 9(4) of the CGST Act, 2017.',
            },
            {
                title: 'Cess and Compensation Cess Calculation',
                desc: 'Certain luxury and sin goods — such as automobiles, aerated beverages, tobacco, and coal — attract an additional GST Compensation Cess over and above the standard 28% slab. The calculator factors in this additional cess component to provide the complete tax outgo, helping businesses in these sectors price their products accurately.',
            },
        ],
        eligibility: [
            'Any business registered under GST (regular, composition, or casual taxpayer) that needs to calculate tax on invoices and supplies.',
            'Freelancers and self-employed professionals providing taxable services who need to quote GST-inclusive or exclusive rates to clients.',
            'E-commerce sellers and marketplace vendors who must comply with TCS (Tax Collected at Source) provisions and need accurate tax breakups.',
            'Chartered Accountants, tax consultants, and bookkeepers who verify GST computations for multiple clients across different industries.',
            'Importers and exporters dealing with IGST on cross-border transactions and needing accurate duty calculations for customs clearance.',
            'Consumers and individuals who want to understand the GST component embedded in MRP or quoted prices before making purchase decisions.',
            'Startups and MSMEs transitioning from the composition scheme to the regular scheme who need to issue tax invoices with proper GST breakup.',
            'Government contractors and vendors supplying goods or services to public sector entities where GST compliance is mandatory for payment processing.',
        ],
        documents: [
            {
                category: 'For Business GST Calculation',
                items: [
                    'GSTIN (GST Identification Number) for verifying applicable tax rate',
                    'HSN Code or SAC Code of the product or service being supplied',
                    'Base price or MRP of the goods or service',
                    'Supply type — intra-state (CGST + SGST) or inter-state (IGST)',
                    'Applicable GST slab rate confirmation from the GST rate schedule',
                ],
            },
            {
                category: 'For Invoice Generation',
                items: [
                    'Supplier and recipient GSTIN details',
                    'Place of supply to determine CGST/SGST or IGST applicability',
                    'Itemized list with individual HSN/SAC codes and corresponding rates',
                    'Discount details (pre-GST or post-GST) affecting the taxable value',
                ],
            },
            {
                category: 'For GST Return Filing Reference',
                items: [
                    'Monthly or quarterly sales and purchase summary with tax breakup',
                    'Input Tax Credit (ITC) details for set-off calculations',
                    'Debit and credit notes issued during the period',
                    'Reverse charge transactions requiring self-assessment',
                    'Export invoices with LUT/bond reference for zero-rated supplies',
                ],
            },
        ],
        process: [
            {
                title: 'Select Calculation Type',
                desc: 'Choose whether you want to add GST to a base amount (GST-exclusive) or extract GST from a total amount (GST-inclusive). This determines the direction of the calculation.',
                time: 'Instant',
            },
            {
                title: 'Enter the Amount',
                desc: 'Input the base price (before tax) or the total price (including tax) depending on your chosen calculation type. The calculator accepts any positive numerical value.',
                time: 'Instant',
            },
            {
                title: 'Choose the GST Rate',
                desc: 'Select the applicable GST slab rate — 0.25%, 3%, 5%, 12%, 18%, or 28%. Refer to the HSN/SAC code of your product or service to identify the correct rate from the official GST rate schedule.',
                time: 'Instant',
            },
            {
                title: 'Specify Supply Type',
                desc: 'Indicate whether the transaction is intra-state (within the same state, attracting CGST + SGST) or inter-state (between different states, attracting IGST). This determines how the tax is split.',
                time: 'Instant',
            },
            {
                title: 'View Detailed Tax Breakup',
                desc: 'The calculator instantly displays the base price, total GST amount, CGST component, SGST component (or IGST for inter-state), and the final payable amount — all in a clear, invoice-ready format.',
                time: 'Instant',
            },
            {
                title: 'Copy or Download Results',
                desc: 'Use the computed values directly in your invoices, quotations, or accounting entries. The breakup can be copied to clipboard or used as reference while preparing GST-compliant tax invoices.',
                time: 'Instant',
            },
            {
                title: 'Verify Against GST Portal',
                desc: 'For critical transactions, cross-verify the calculated amounts against the GST portal rate finder or consult the official HSN/SAC directory to ensure the applied rate matches current government notifications.',
                time: '2–5 minutes',
            },
        ],
        fees: [
            { item: 'Online GST Calculator Usage', cost: 'Free — No charges' },
            { item: 'GST Registration (if not registered)', cost: '₹999 – ₹2,500 (professional fees)' },
            { item: 'GST Return Filing — GSTR-1 & GSTR-3B', cost: '₹500 – ₹2,000 per month' },
            { item: 'GST Annual Return (GSTR-9)', cost: '₹2,000 – ₹10,000' },
            { item: 'GST Audit (GSTR-9C) if applicable', cost: '₹5,000 – ₹25,000' },
            { item: 'GST Consultation & Advisory', cost: '₹1,000 – ₹5,000 per session' },
        ],
        advantages: [
            {
                icon: '⚡',
                title: 'Instant & Accurate Results',
                desc: 'Get precise GST calculations in milliseconds — no manual formulas, no spreadsheet errors. The calculator handles all arithmetic including fractional paise rounding as per GST rules.',
            },
            {
                icon: '📑',
                title: 'Invoice-Ready Tax Breakup',
                desc: 'Receive a detailed split of CGST, SGST, and IGST components that can be directly used in tax invoices, ensuring compliance with Rule 46 of the CGST Rules, 2017.',
            },
            {
                icon: '🔄',
                title: 'Bidirectional Calculation',
                desc: 'Whether you need to add GST to a base price or reverse-calculate the tax from an inclusive amount, the tool handles both directions seamlessly — crucial for retail and wholesale pricing.',
            },
            {
                icon: '🏢',
                title: 'Multi-Slab Support',
                desc: 'Supports all GST rate slabs including 0.25%, 3%, 5%, 12%, 18%, and 28%, plus compensation cess categories — covering every product and service classification under the GST regime.',
            },
            {
                icon: '💼',
                title: 'Business Decision Support',
                desc: 'Helps businesses accurately price products, prepare quotations, compare vendor costs excluding tax, and plan procurement budgets by isolating the exact tax impact on every transaction.',
            },
            {
                icon: '🆓',
                title: 'Completely Free & Private',
                desc: 'No registration, no login, no data storage — your financial information stays on your device. The calculator runs entirely in your browser with zero data transmission to external servers.',
            },
        ],
        disadvantages: [
            'The calculator provides standard GST computation and does not account for product-specific exemptions, conditional rate changes, or notifications that may alter the effective rate for certain categories.',
            'Cess calculations for items like automobiles, tobacco, and aerated drinks require manual verification as cess rates vary by sub-category and may change with government notifications.',
            'The tool does not replace professional tax advice — complex scenarios involving composite supplies, mixed supplies, anti-profiteering provisions, or cross-border transactions should be reviewed by a qualified GST practitioner.',
            'Input Tax Credit (ITC) eligibility and set-off calculations are not covered by this calculator and require separate analysis based on purchase invoices, blocked credits under Section 17(5), and vendor compliance status.',
        ],
        faqs: [
            {
                q: 'How do I calculate GST on a product if I know the base price?',
                a: 'Select the "Add GST" option, enter the base price, and choose the applicable GST rate (5%, 12%, 18%, or 28%). The calculator will display the GST amount and the total price. Formula: GST Amount = Base Price × GST Rate / 100; Total Price = Base Price + GST Amount.',
            },
            {
                q: 'How do I find the base price from a GST-inclusive amount?',
                a: 'Select the "Remove GST" option and enter the total inclusive price. The calculator reverse-computes the base amount using the formula: Base Price = Inclusive Price × 100 / (100 + GST Rate). For example, ₹1,180 at 18% GST gives a base price of ₹1,000 and tax of ₹180.',
            },
            {
                q: 'What is the difference between CGST, SGST, and IGST?',
                a: 'CGST (Central GST) and SGST (State GST) are charged equally on intra-state transactions — if GST is 18%, CGST is 9% and SGST is 9%. IGST (Integrated GST) is charged on inter-state transactions at the full rate (18%). The calculator automatically splits the tax based on the supply type you select.',
            },
            {
                q: 'Which GST rate applies to my product or service?',
                a: 'GST rates are determined by HSN codes (for goods) and SAC codes (for services) as notified by the GST Council. Common rates include 5% for essential goods, 12% for processed foods, 18% for most services, and 28% for luxury items. You can search for your specific HSN/SAC code on the official GST portal or consult a tax professional.',
            },
            {
                q: 'Can I use this calculator for inter-state transactions?',
                a: 'Yes. Select "Inter-State" as the supply type, and the calculator will compute the entire tax as IGST instead of splitting it into CGST and SGST. This is applicable when the supplier and recipient are in different states or union territories.',
            },
            {
                q: 'Is this calculator accurate for GST return filing?',
                a: 'The calculator provides accurate mathematical computation of GST at the selected rate. However, for return filing purposes, you should verify the applicable rate against the latest GST Council notifications, check for exemptions, and ensure your HSN/SAC classification is correct before reporting values in GSTR-1 and GSTR-3B.',
            },
            {
                q: 'How does the Reverse Charge Mechanism affect GST calculation?',
                a: 'Under RCM, the buyer pays GST instead of the seller. The tax amount remains the same — for example, 18% on ₹10,000 is still ₹1,800. The difference is that the recipient must self-assess, pay the tax, and can later claim ITC on it. The calculator computes the amount; you need to identify whether RCM applies based on the nature of supply.',
            },
            {
                q: 'What is GST Compensation Cess and when does it apply?',
                a: 'GST Compensation Cess is an additional tax levied on specified luxury and sin goods over the standard 28% GST. It applies to items like motor vehicles (1%–22%), aerated beverages (12%), tobacco products (various rates), and coal (₹400/tonne). This cess was introduced to compensate states for revenue loss during the GST transition period.',
            },
        ],
        cta: {
            heading: 'Calculate Your GST Instantly — Free & Accurate',
            subheading:
                'Use our GST Calculator to compute tax-inclusive and exclusive amounts across all slab rates. Need help with GST registration, return filing, or compliance? Our expert CAs are just a call away.',
            features: [
                'Free GST Calculator — No Registration Required',
                'Accurate CGST, SGST & IGST Breakup',
                'Expert GST Filing & Compliance Support',
                'Trusted by 10,000+ Businesses Across India',
            ],
        },
    },

    'income-tax-calculator': {
        slug: 'income-tax-calculator',
        title: 'Income Tax Calculator',
        subtitle:
            'Compare your tax liability under the Old Regime and New Regime side by side — factor in deductions, exemptions, and surcharges to find the most tax-efficient option for your income level.',
        heroFeatures: [
            'Side-by-Side Old Regime vs New Regime Comparison',
            'Covers All Income Sources — Salary, Business, Capital Gains & More',
            'Automatic Calculation of Deductions Under 80C, 80D, HRA & Others',
            'Includes Surcharge, Cess & Rebate Under Section 87A',
            'Free Tool — Updated for Assessment Year 2025–26',
        ],
        overview: {
            heading: 'What is an Income Tax Calculator and How Does It Help You?',
            paragraphs: [
                'An Income Tax Calculator is a comprehensive tool that estimates your total tax liability for a given financial year based on your income, deductions, and exemptions. With the introduction of the New Tax Regime under Section 115BAC of the Income Tax Act, 1961, taxpayers now have the critical choice between two fundamentally different tax structures — the Old Regime with higher rates but extensive deductions, and the New Regime with lower slab rates but minimal deductions. This calculator empowers you to make that choice with data, not guesswork.',
                'The calculator takes into account all major income heads — salary, house property, business or profession, capital gains, and other sources — and applies the relevant slab rates, surcharges, and the 4% Health and Education Cess. For the Old Regime, it factors in popular deductions such as Section 80C (₹1.5 lakh), Section 80D (health insurance), HRA exemption, standard deduction, home loan interest under Section 24(b), and NPS contributions under Section 80CCD(1B). For the New Regime, it applies the revised slab rates announced in Budget 2024 with the enhanced rebate and standard deduction.',
                'Whether you are a salaried employee evaluating your Form 16, a freelancer estimating advance tax payments, a senior citizen checking rebate eligibility, or a tax consultant advising multiple clients, this Income Tax Calculator provides a clear, comparative view that simplifies one of the most important annual financial decisions every Indian taxpayer faces.',
            ],
            highlights: [
                { icon: '⚖️', text: 'Compare Old Regime and New Regime tax liability instantly with detailed breakup' },
                { icon: '💰', text: 'Factor in 80C, 80D, HRA, NPS, home loan interest, and 15+ other deductions' },
                { icon: '📅', text: 'Updated for FY 2024–25 (AY 2025–26) with latest Budget amendments' },
                { icon: '🎯', text: 'Identifies the optimal regime based on your specific income and deduction profile' },
            ],
        },
        types: [
            {
                title: 'Old Regime Tax Calculation',
                desc: 'The original tax structure with slab rates of 5%, 20%, and 30% for individuals below 60 years, along with comprehensive deduction benefits under Chapter VI-A (Sections 80C to 80U), HRA exemption under Section 10(13A), Leave Travel Allowance, standard deduction of ₹50,000, and home loan interest deduction under Section 24(b). Best suited for taxpayers with significant investments, insurance premiums, home loans, and employer-provided allowances.',
            },
            {
                title: 'New Regime Tax Calculation (Section 115BAC)',
                desc: 'The simplified tax structure introduced in Budget 2020 and revised in Budget 2023 and 2024, featuring lower slab rates — 0% up to ₹3 lakh, 5% for ₹3–7 lakh, 10% for ₹7–10 lakh, 15% for ₹10–12 lakh, 20% for ₹12–15 lakh, and 30% above ₹15 lakh. Offers a standard deduction of ₹75,000 and enhanced rebate under Section 87A up to ₹7 lakh taxable income, but disallows most traditional deductions and exemptions.',
            },
            {
                title: 'Advance Tax Liability Estimation',
                desc: 'For taxpayers whose estimated tax liability exceeds ₹10,000 in a financial year, advance tax must be paid in four quarterly instalments — 15% by June 15, 45% by September 15, 75% by December 15, and 100% by March 15. The calculator helps estimate each instalment amount to avoid interest under Sections 234B and 234C.',
            },
            {
                title: 'Senior Citizen Tax Calculation',
                desc: 'Senior citizens (60–80 years) enjoy a higher basic exemption limit of ₹3 lakh and additional deductions under Section 80TTB (₹50,000 on interest income) in the Old Regime. Super senior citizens (80+ years) get an exemption limit of ₹5 lakh. The calculator applies age-specific slab rates and deduction limits automatically based on the date of birth entered.',
            },
            {
                title: 'Capital Gains Tax Computation',
                desc: 'Income from sale of assets like property, shares, mutual funds, and gold is taxed differently — short-term capital gains (STCG) on equity at 15%, long-term capital gains (LTCG) on equity above ₹1.25 lakh at 12.5%, property LTCG at 12.5% after indexation removal (post-July 2024), and other assets at applicable slab rates. The calculator handles these special rates alongside regular income.',
            },
        ],
        eligibility: [
            'Salaried individuals receiving income from employment, including basic salary, HRA, special allowances, bonuses, and perquisites reported in Form 16.',
            'Self-employed professionals and freelancers earning income under the head "Profits and Gains of Business or Profession" who need to estimate advance tax liability.',
            'Senior citizens (60+ years) and super senior citizens (80+ years) who are eligible for higher exemption limits and additional deductions under the Old Regime.',
            'Individuals with multiple income sources including salary, rental income, capital gains, fixed deposit interest, and dividend income requiring consolidated tax computation.',
            'Hindu Undivided Families (HUFs) that are taxed as a separate entity and eligible for similar deductions as individual taxpayers under the Old Regime.',
            'NRIs (Non-Resident Indians) earning taxable income in India from salary, property, capital gains, or other sources, subject to DTAA provisions where applicable.',
            'Taxpayers with home loans seeking to optimize deductions under Section 24(b) for interest (up to ₹2 lakh) and Section 80C for principal repayment.',
            'Individuals making investments in ELSS, PPF, NPS, life insurance, Sukanya Samriddhi Yojana, or other Section 80C instruments who want to quantify the tax savings.',
        ],
        documents: [
            {
                category: 'Income Documents',
                items: [
                    'Form 16 / Form 16A from employer(s) showing salary income and TDS details',
                    'Bank statements and interest certificates for savings account and fixed deposit interest income',
                    'Capital gains statements from broker or mutual fund houses for equity, debt, and property transactions',
                    'Rental income details including municipal taxes paid, home loan interest certificate, and tenant agreements',
                    'Form 26AS / Annual Information Statement (AIS) for cross-verifying TDS credits and reported transactions',
                ],
            },
            {
                category: 'Deduction & Exemption Proofs',
                items: [
                    'Section 80C investment proofs — PPF passbook, ELSS statements, LIC premium receipts, NSC certificates, tuition fee receipts',
                    'Section 80D — Health insurance premium receipts for self, spouse, children, and parents (up to ₹25,000/₹50,000 for senior citizen parents)',
                    'HRA exemption — Rent receipts, landlord PAN (if rent exceeds ₹1 lakh/year), and rental agreement',
                    'Home loan interest certificate from bank under Section 24(b) and principal repayment under Section 80C',
                    'NPS contribution proof under Section 80CCD(1B) for additional ₹50,000 deduction',
                ],
            },
            {
                category: 'Personal & Filing Information',
                items: [
                    'PAN Card and Aadhaar Card (linked) — mandatory for e-filing',
                    'Bank account details (IFSC code and account number) for refund credit via ECS',
                    'Date of birth for age-based slab rate determination (general, senior, super senior)',
                    'Residential status — Resident, Non-Resident, or Resident but Not Ordinarily Resident (RNOR)',
                ],
            },
        ],
        process: [
            {
                title: 'Enter Basic Personal Details',
                desc: 'Provide your age category (below 60, 60–80, or above 80), residential status, and the financial year for which you are calculating tax. These determine your applicable slab rates and exemption limits.',
                time: 'Instant',
            },
            {
                title: 'Input All Income Sources',
                desc: 'Enter your gross salary (including HRA, special allowances, and bonuses), rental income, capital gains (short-term and long-term), interest income from bank deposits, dividend income, and any other taxable income. The calculator aggregates all heads.',
                time: '2–3 minutes',
            },
            {
                title: 'Add Deductions & Exemptions (Old Regime)',
                desc: 'Input your eligible deductions — Section 80C investments (up to ₹1.5 lakh), Section 80D health insurance premium, HRA exemption, home loan interest under Section 24(b), NPS under 80CCD(1B), education loan interest under 80E, donations under 80G, and standard deduction. The calculator computes net taxable income.',
                time: '3–5 minutes',
            },
            {
                title: 'View Old Regime vs New Regime Comparison',
                desc: 'The calculator simultaneously computes your tax liability under both regimes, displaying a detailed comparison including gross income, total deductions, taxable income, tax before cess, surcharge (if applicable), 4% health and education cess, and final tax payable.',
                time: 'Instant',
            },
            {
                title: 'Check Rebate Eligibility Under Section 87A',
                desc: 'If your net taxable income is up to ₹5 lakh (Old Regime) or ₹7 lakh (New Regime), you are eligible for a rebate that effectively makes your tax zero. The calculator automatically applies this rebate and shows the post-rebate liability.',
                time: 'Instant',
            },
            {
                title: 'Review Advance Tax Schedule',
                desc: 'If your estimated tax liability exceeds ₹10,000 for the year, the calculator provides a quarterly advance tax payment schedule — 15% by June 15, 45% by September 15, 75% by December 15, and 100% by March 15 — helping you avoid interest under Sections 234B and 234C.',
                time: 'Instant',
            },
            {
                title: 'Download or Save Results',
                desc: 'Review the complete computation summary, including regime comparison, slab-wise breakup, deduction summary, and recommended regime. Save or print the results for your records or share with your tax advisor for verification before filing your ITR.',
                time: '1 minute',
            },
        ],
        fees: [
            { item: 'Online Income Tax Calculator Usage', cost: 'Free — No charges' },
            { item: 'ITR-1 (Sahaj) Filing — Salaried Individuals', cost: '₹499 – ₹1,500' },
            { item: 'ITR-2 Filing — Capital Gains & Multiple Sources', cost: '₹1,500 – ₹4,000' },
            { item: 'ITR-3 Filing — Business & Professional Income', cost: '₹2,500 – ₹7,500' },
            { item: 'ITR-4 (Sugam) Filing — Presumptive Taxation', cost: '₹999 – ₹2,500' },
            { item: 'Tax Planning & Advisory Consultation', cost: '₹1,500 – ₹5,000 per session' },
        ],
        advantages: [
            {
                icon: '⚖️',
                title: 'Instant Regime Comparison',
                desc: 'See your exact tax liability under both Old and New Regimes side by side — no need for separate calculations. The tool highlights which regime saves you more money based on your specific income and deduction profile.',
            },
            {
                icon: '🎯',
                title: 'Comprehensive Deduction Coverage',
                desc: 'Accounts for 15+ deduction sections including 80C, 80D, 80E, 80G, 80CCD(1B), 80TTA, 80TTB, HRA exemption, Section 24(b), standard deduction, and more — ensuring no legitimate tax-saving avenue is missed.',
            },
            {
                icon: '📊',
                title: 'Detailed Slab-Wise Breakup',
                desc: 'Provides a transparent breakdown showing exactly how much tax falls in each slab, the surcharge calculation for high-income earners, and the 4% cess — giving you complete visibility into your tax computation.',
            },
            {
                icon: '🏦',
                title: 'Advance Tax Planning',
                desc: 'Estimates quarterly advance tax instalments so you can plan cash flows, avoid interest penalties under Sections 234B and 234C, and make timely payments throughout the financial year.',
            },
            {
                icon: '👴',
                title: 'Age-Specific Computation',
                desc: 'Automatically applies different exemption limits and slab rates for general taxpayers (below 60), senior citizens (60–80), and super senior citizens (above 80), along with age-specific deduction limits.',
            },
            {
                icon: '🔒',
                title: 'Private & Secure',
                desc: 'All calculations are performed locally in your browser. No income data, salary details, or personal financial information is transmitted to any server — your sensitive tax information remains completely private.',
            },
        ],
        disadvantages: [
            'The calculator provides an estimated tax liability based on the information you enter. Actual tax may differ due to rounding rules, marginal relief calculations, or specific provisions not covered by the tool.',
            'Complex income scenarios such as income from foreign sources subject to DTAA, deemed income under clubbing provisions (Section 64), or income from a revocable transfer may require manual adjustment or professional consultation.',
            'Special tax rates on capital gains — including grandfathering provisions for equity purchased before 31 January 2018 and indexation rules for property sold before/after July 2024 — involve nuances that the calculator handles at a basic level and may need expert verification.',
            'Tax benefits under specific sections like 80GG (rent paid without HRA), 80RRB (royalty on patents), 80QQB (royalty on books), and 80U (disability) have complex eligibility conditions that require manual verification beyond the calculator\'s scope.',
        ],
        faqs: [
            {
                q: 'Which tax regime should I choose — Old or New?',
                a: 'It depends on your deduction profile. If your total deductions (80C, 80D, HRA, home loan interest, NPS, etc.) exceed approximately ₹3.75–4 lakh, the Old Regime typically results in lower tax. If your deductions are minimal, the New Regime\'s lower slab rates are usually more beneficial. Use this calculator to compare both with your actual numbers.',
            },
            {
                q: 'What is the basic exemption limit for FY 2024–25?',
                a: 'Under the New Regime, income up to ₹3 lakh is exempt for all age groups. Under the Old Regime, the limit is ₹2.5 lakh for individuals below 60, ₹3 lakh for senior citizens (60–80), and ₹5 lakh for super senior citizens (80+).',
            },
            {
                q: 'How does the Section 87A rebate work?',
                a: 'Under the Old Regime, if your net taxable income is up to ₹5 lakh, you get a rebate of up to ₹12,500, making your tax effectively zero. Under the New Regime, if taxable income is up to ₹7 lakh, the rebate of up to ₹25,000 applies — again making tax zero. The calculator applies this automatically.',
            },
            {
                q: 'What is the surcharge on high income?',
                a: 'Surcharge applies on income tax (not on income) when total income exceeds ₹50 lakh: 10% for ₹50 lakh–₹1 crore, 15% for ₹1–2 crore, 25% for ₹2–5 crore, and 37% above ₹5 crore (capped at 25% under the New Regime). Marginal relief ensures surcharge doesn\'t exceed the additional income above the threshold.',
            },
            {
                q: 'Can I switch between Old and New Regime every year?',
                a: 'Salaried individuals with no business income can switch between regimes every financial year at the time of filing their ITR. However, taxpayers with business or professional income who opt out of the New Regime can switch back only once in their lifetime. The New Regime is the default from FY 2023–24.',
            },
            {
                q: 'How is HRA exemption calculated?',
                a: 'HRA exemption under Section 10(13A) is the minimum of three amounts: (1) Actual HRA received, (2) 50% of basic salary for metro cities or 40% for non-metro, and (3) Rent paid minus 10% of basic salary. This exemption is available only under the Old Regime and requires rent receipts as proof.',
            },
            {
                q: 'What deductions are allowed under the New Regime?',
                a: 'The New Regime allows very limited deductions — standard deduction of ₹75,000 (from FY 2024–25), employer\'s NPS contribution under Section 80CCD(2) up to 14% of salary, deduction for family pension under Section 57(iia), and Agniveer Corpus Fund under Section 80CCH. All other major deductions like 80C, 80D, and HRA are not available.',
            },
            {
                q: 'How do I calculate tax on capital gains along with salary income?',
                a: 'Capital gains are added to your total income but taxed at special rates — STCG on equity at 20%, LTCG on equity above ₹1.25 lakh at 12.5%, and property/other LTCG at 12.5%. The calculator separates these from slab-rate income and applies the correct tax rate to each component before computing the total liability.',
            },
        ],
        cta: {
            heading: 'Find Your Optimal Tax Regime — Calculate Now for Free',
            subheading:
                'Use our Income Tax Calculator to compare Old vs New Regime, maximize your deductions, and plan your tax-saving investments. Need expert help with ITR filing or tax planning? Connect with our CAs today.',
            features: [
                'Free Income Tax Calculator — Updated for AY 2025–26',
                'Old Regime vs New Regime Side-by-Side Comparison',
                'Expert ITR Filing Starting at ₹499',
                'Personalized Tax Planning & Advisory Services',
            ],
        },
    },

'tds-interest-calculator': {
    slug: 'tds-interest-calculator',
    title: 'TDS Interest Calculator',
    subtitle:
      'Accurately compute interest on late TDS deduction and late TDS payment under Section 201(1A) of the Income Tax Act — avoid penalties, stay compliant, and plan your cash flow with confidence.',
    heroFeatures: [
      'Instant Interest Calculation for Late Deduction & Late Payment',
      'Covers Section 201(1A) — 1% and 1.5% Per Month Rates',
      'Handles Part-of-Month Rounding as per Income Tax Rules',
      'Supports All TDS Payment Types — Salary, Rent, Professional Fees & More',
      'Free to Use — No Registration or Sign-Up Required',
    ],
    overview: {
      heading: 'What Is TDS Interest and Why Does It Matter?',
      paragraphs: [
        'Tax Deducted at Source (TDS) is a mechanism through which the Indian government collects income tax at the point of income generation. When a deductor fails to deduct TDS on time or deducts it but delays depositing it with the government, interest is levied under Section 201(1A) of the Income Tax Act, 1961. This interest is mandatory and cannot be waived, even if the underlying tax liability is eventually settled by the deductee.',
        'The interest rate depends on the nature of the default. If TDS was not deducted when it should have been, interest accrues at 1% per month (or part thereof) from the date the tax was deductible until the date it is actually deducted. If TDS was deducted but not deposited to the government within the prescribed due date, the rate increases to 1.5% per month (or part thereof) from the date of deduction to the date of actual payment. Crucially, even a single day into a new month counts as a full month for interest calculation purposes.',
        'Our TDS Interest Calculator simplifies this complex computation by automatically applying the correct interest rate, handling part-of-month rounding, and producing a precise figure you can rely on when filing your TDS returns or responding to demand notices from the Centralized Processing Cell (CPC). Whether you are an individual, a business, or a tax professional managing multiple deductors, this tool eliminates manual errors and saves valuable time during every compliance cycle.',
      ],
      highlights: [
        { icon: '⏱️', text: 'Interest at 1% per month for non-deduction and 1.5% per month for non-payment — part of month counted as full month' },
        { icon: '📅', text: 'Calculation period runs from the date tax was deductible or deducted to the date of actual payment to the government' },
        { icon: '⚠️', text: 'Interest under Section 201(1A) is mandatory — cannot be reduced, waived, or appealed' },
        { icon: '🔢', text: 'Accurate part-of-month rounding ensures your calculation matches CPC demand computations exactly' },
      ],
    },
    types: [
      {
        title: 'Interest on Non-Deduction of TDS (Section 201(1A)(i))',
        desc: 'When TDS is not deducted at the time of credit or payment — whichever is earlier — interest is charged at 1% per month or part of the month from the date on which tax was required to be deducted to the date on which it is actually deducted. This situation commonly arises when payers overlook their TDS obligations on rent, professional fees, or contract payments.',
      },
      {
        title: 'Interest on Late Payment of TDS (Section 201(1A)(ii))',
        desc: 'When TDS is deducted on time but not deposited with the government before the prescribed due date, interest accrues at 1.5% per month or part of the month from the date of deduction to the date of actual deposit. Even a delay of a single day beyond the 7th of the following month triggers a full month of additional interest.',
      },
      {
        title: 'Interest on Late Filing of TDS Return (Section 234E)',
        desc: 'While technically a fee rather than interest, Section 234E imposes a late filing charge of ₹200 per day for every day the TDS return remains unfiled after the due date. The fee is capped at the total TDS amount reported in the return. This is computed separately from the Section 201(1A) interest but often accompanies it in demand notices.',
      },
      {
        title: 'Combined Interest on Non-Deduction Followed by Late Payment',
        desc: 'In scenarios where TDS was neither deducted on the due date nor deposited on time after eventual deduction, both legs of interest apply sequentially — 1% from the date of deductibility to the date of deduction, and then 1.5% from the date of deduction to the date of deposit. Our calculator handles this combined scenario seamlessly.',
      },
    ],
    eligibility: [
      'Any person or entity responsible for deducting TDS under the Income Tax Act — employers, businesses, professionals, or HUFs making specified payments.',
      'Companies, LLPs, firms, and trusts that are required to deduct TDS on salaries, rent, interest, commission, professional fees, or contract payments.',
      'Tax professionals (CAs, tax consultants, and accountants) preparing TDS returns for multiple clients who need quick interest verification.',
      'Individuals who receive demand notices under Section 201 and need to verify the interest amount computed by the CPC before responding.',
      'Government departments and PSUs responsible for deducting TDS on vendor payments and contractor bills as per Section 194C, 194J, and related provisions.',
      'Non-resident deductors making payments subject to TDS under sections like 195, who need to compute interest for delayed compliance.',
      'Any deductor who has received an intimation under Section 200A and wishes to cross-verify the interest component before making payment.',
    ],
    documents: [
      {
        category: 'Transaction & Payment Details',
        items: [
          'Amount on which TDS was deductible (gross payment value)',
          'Applicable TDS rate and section under which deduction was required',
          'Date on which the payment was credited or actually paid — whichever is earlier',
          'Date on which TDS was actually deducted (if deducted late)',
          'Challan details — BSR code, challan serial number, and date of deposit with the government',
        ],
      },
      {
        category: 'TDS Return & Compliance Records',
        items: [
          'Form 26Q, 24Q, 27Q, or 27EQ return data showing the relevant quarter and financial year',
          'Provisional receipt or acknowledgement number of the TDS return filed',
          'CPC intimation or demand notice under Section 200A or 201, if available',
          'Traces portal login credentials for verifying filed return details and challan status',
        ],
      },
      {
        category: 'Supporting References',
        items: [
          'PAN of the deductor and deductee for cross-referencing with Form 26AS',
          'TAN (Tax Deduction and Collection Account Number) of the deductor',
          'Bank statement or payment proof showing the date of TDS deposit to the government',
        ],
      },
    ],
    process: [
      {
        title: 'Select the Type of Default',
        desc: 'Choose whether the interest pertains to non-deduction of TDS (Section 201(1A)(i) at 1% per month) or late payment of TDS already deducted (Section 201(1A)(ii) at 1.5% per month). For combined defaults, you can compute each leg separately.',
        time: 'Instant',
      },
      {
        title: 'Enter the TDS Amount',
        desc: 'Input the exact amount of TDS that was required to be deducted or was deducted but not deposited. This is the base amount on which interest will be calculated — not the gross payment amount.',
        time: 'Instant',
      },
      {
        title: 'Provide the Start Date of Default',
        desc: 'For non-deduction cases, enter the date on which TDS was deductible (date of credit or payment, whichever is earlier). For late payment cases, enter the date on which TDS was actually deducted from the payee.',
        time: 'Instant',
      },
      {
        title: 'Provide the End Date of Default',
        desc: 'For non-deduction cases, enter the date on which TDS was eventually deducted. For late payment cases, enter the date on which TDS was deposited to the government via challan. The calculator will count months inclusively.',
        time: 'Instant',
      },
      {
        title: 'Review the Month Count and Rounding',
        desc: 'The calculator displays the number of months (including part-of-month rounded up) between the start and end dates. Verify this matches your expectation — remember, even one day into a new month counts as a complete month for interest purposes.',
        time: 'Instant',
      },
      {
        title: 'View the Computed Interest Amount',
        desc: 'The tool applies the applicable rate (1% or 1.5%) to the TDS amount for the computed number of months and displays the total interest payable. This figure can be used directly in your TDS return correction or challan payment.',
        time: 'Instant',
      },
      {
        title: 'Download or Copy the Calculation Summary',
        desc: 'Export the detailed computation showing the TDS amount, rate applied, date range, month count, and final interest figure. Use this as a working paper for your records, for responding to CPC notices, or for internal compliance documentation.',
        time: 'Instant',
      },
    ],
    fees: [
      { item: 'TDS Interest Calculator Usage', cost: 'Free — No Charges' },
      { item: 'Interest Rate for Non-Deduction (Sec 201(1A)(i))', cost: '1% per month or part thereof' },
      { item: 'Interest Rate for Late Payment (Sec 201(1A)(ii))', cost: '1.5% per month or part thereof' },
      { item: 'Late Filing Fee under Section 234E', cost: '₹200 per day (max = TDS amount)' },
      { item: 'Penalty under Section 271C for Non-Deduction', cost: 'Equal to the amount of TDS not deducted' },
      { item: 'Penalty under Section 271H for Late Filing', cost: '₹10,000 to ₹1,00,000' },
    ],
    advantages: [
      {
        icon: '✅',
        title: 'Pinpoint Accuracy',
        desc: 'The calculator applies the exact part-of-month rounding rule mandated by Section 201(1A), ensuring your interest figure matches CPC computations down to the last rupee — no manual counting errors.',
      },
      {
        icon: '⚡',
        title: 'Instant Results',
        desc: 'Get your interest liability in seconds instead of spending time manually counting months, applying rates, and worrying about rounding. Ideal for tax professionals handling bulk corrections during peak filing seasons.',
      },
      {
        icon: '🔄',
        title: 'Handles Both Default Types',
        desc: 'Whether the default is non-deduction or late deposit — or a combination of both — the calculator applies the correct rate for each leg automatically, eliminating the confusion between 1% and 1.5% scenarios.',
      },
      {
        icon: '📊',
        title: 'Audit-Ready Output',
        desc: 'The detailed breakdown showing dates, months counted, rate applied, and final interest provides a transparent working paper that can be attached to TDS return corrections, replies to CPC notices, or internal audit files.',
      },
      {
        icon: '💰',
        title: 'Prevents Overpayment',
        desc: 'Many deductors end up overpaying interest because of incorrect month counting. By providing the precise amount, this tool helps you avoid depositing more than what is legally required.',
      },
      {
        icon: '🛡️',
        title: 'Supports CPC Notice Verification',
        desc: 'When you receive a demand notice under Section 200A or 201, use this calculator to independently verify the interest component before making payment — ensuring you only pay what is genuinely owed.',
      },
    ],
    disadvantages: [
      'The calculator computes interest only — it does not file correction statements or generate challans for you. You will still need to use the TRACES portal or your TDS software for actual return filing.',
      'Interest computation assumes the user inputs accurate dates. If the date of credit, deduction, or deposit is entered incorrectly, the output will reflect that error. Always cross-verify dates against your books of account.',
      'The tool does not account for situations where the deductee has already paid the tax on the income and filed a return — in such cases, the deductor may not be treated as an assessee in default, and interest provisions may not apply.',
      'For complex multi-party or cross-border TDS scenarios involving Section 195 and DTAA benefits, professional consultation is recommended in addition to using this calculator.',
    ],
    faqs: [
      {
        q: 'What is the interest rate for late deduction of TDS?',
        a: 'Under Section 201(1A)(i), if TDS is not deducted at the time it was required, interest is charged at 1% per month or part of the month from the date on which TDS was deductible to the date on which it was actually deducted. Even a single day into a new month is counted as a full month.',
      },
      {
        q: 'What is the interest rate for late payment of TDS after deduction?',
        a: 'Under Section 201(1A)(ii), if TDS is deducted but not deposited to the government within the prescribed due date, interest is charged at 1.5% per month or part of the month from the date of deduction to the date of actual payment to the credit of the government.',
      },
      {
        q: 'How is "part of the month" treated in TDS interest calculation?',
        a: 'Any fraction of a month is treated as a full month. For example, if the default period is 2 months and 3 days, interest will be computed for 3 full months. This rounding rule is strictly applied by the CPC and cannot be contested.',
      },
      {
        q: 'Can TDS interest under Section 201(1A) be waived?',
        a: 'No. Interest under Section 201(1A) is mandatory and compensatory in nature. It cannot be waived, reduced, or appealed. The only way to minimize it is to ensure timely deduction and deposit of TDS.',
      },
      {
        q: 'Is there a penalty in addition to the interest for late TDS?',
        a: 'Yes. Apart from interest under Section 201(1A), a penalty equal to the TDS amount can be imposed under Section 271C for failure to deduct. Additionally, Section 271H allows a penalty of ₹10,000 to ₹1,00,000 for late filing of TDS returns. Section 234E also levies a fee of ₹200 per day for delayed return filing.',
      },
      {
        q: 'What is the due date for depositing TDS with the government?',
        a: 'TDS deducted during any month (except March) must be deposited by the 7th of the following month. For TDS deducted in March, the due date is 30th April. Government deductors have relaxed timelines — they can deposit on the same day without using a challan if payment is made through book adjustment.',
      },
      {
        q: 'If the deductee has already paid tax on the income, do I still owe interest?',
        a: 'If the deductee has paid tax on the income, filed a return of income, and the Assessing Officer is satisfied that there is no loss to revenue, the deductor may not be treated as assessee in default under the first proviso to Section 201(1). However, interest under Section 201(1A) from the date of deductibility to the date of filing by the deductee may still apply.',
      },
      {
        q: 'Can I use this calculator to verify CPC demand notices?',
        a: 'Absolutely. One of the primary use cases for this calculator is to independently verify the interest component in demand notices received under Section 200A or 201. Enter the same dates and amounts as stated in the notice to confirm whether the CPC computation is accurate before making payment.',
      },
    ],
    cta: {
      heading: 'Calculate Your TDS Interest Liability Instantly',
      subheading:
        'Stop guessing and start calculating — use our free TDS Interest Calculator to determine your exact liability under Section 201(1A) and stay ahead of CPC notices.',
      features: [
        'Instant computation with part-of-month rounding',
        'Supports non-deduction and late deposit scenarios',
        'Exportable audit-ready calculation summary',
        'Trusted by CAs and tax professionals across India',
      ],
    },
  },

  'tds-calculator': {
    slug: 'tds-calculator',
    title: 'TDS Calculator',
    subtitle:
      'Quickly determine the correct TDS rate and amount for any payment type under the Income Tax Act — covering salaries, rent, professional fees, contracts, interest, and more with section-wise accuracy.',
    heroFeatures: [
      'Comprehensive Coverage of All TDS Sections — 192 to 196D',
      'Automatic Rate Lookup Based on Payment Type & Payee Status',
      'Handles Higher Rate TDS for Non-PAN Cases (Section 206AA)',
      'Supports Threshold Limit Checks for Each Section',
      'Free Online Tool — No Login or Software Installation Needed',
    ],
    overview: {
      heading: 'What Is TDS and How Does the TDS Calculator Help?',
      paragraphs: [
        'Tax Deducted at Source (TDS) is a system introduced by the Income Tax Department where the person making a specified payment deducts tax at a prescribed rate before releasing the payment to the recipient. The deducted amount is then deposited with the government on behalf of the payee, who can claim credit for it while filing their income tax return. TDS applies to a wide range of payments including salaries, interest on fixed deposits, rent, professional and technical fees, commission, contract payments, and dividends.',
        'Determining the correct TDS rate is not straightforward — it varies by the nature of payment, the section under which it falls, the status of the payee (resident, non-resident, company, or individual), whether the payee has furnished a valid PAN, and whether threshold exemption limits are breached. Applying an incorrect rate can lead to short deduction notices, interest under Section 201(1A), and penalties under Section 271C. Conversely, over-deduction creates cash flow issues for the payee and additional correction work for the deductor.',
        'Our TDS Calculator eliminates this complexity by letting you select the payment type and payee details, then automatically applying the correct TDS rate as per the latest Finance Act provisions. It factors in threshold limits, surcharge and cess where applicable, and flags situations where a higher rate applies due to non-furnishing of PAN under Section 206AA or non-filing of returns under Section 206AB. Whether you are a salaried employer, a business making vendor payments, or a tax professional computing TDS for multiple clients, this tool delivers reliable results in seconds.',
      ],
      highlights: [
        { icon: '📋', text: 'Covers 30+ TDS sections from 192 (salary) to 196D (income of foreign institutional investors)' },
        { icon: '🔍', text: 'Automatically applies higher rate of 20% when payee PAN is not available (Section 206AA)' },
        { icon: '📊', text: 'Factors in threshold exemption limits — no TDS if payment is below the section-specific threshold' },
        { icon: '🌐', text: 'Supports resident and non-resident payee rates including special rates under DTAA provisions' },
      ],
    },
    types: [
      {
        title: 'TDS on Salary (Section 192)',
        desc: 'Employers deduct TDS on salary at the average rate of income tax applicable to the employee based on their estimated total income for the financial year. This includes basic salary, allowances, perquisites, and any other taxable component. The employee can declare investments under Chapter VI-A, HRA exemption, and other deductions to reduce the TDS burden through Form 12BB.',
      },
      {
        title: 'TDS on Interest Other Than Securities (Section 194A)',
        desc: 'Banks, cooperative societies, and post offices deduct TDS at 10% on interest payments exceeding ₹40,000 (₹50,000 for senior citizens) in a financial year. This covers fixed deposit interest, recurring deposit interest, and interest on loans. Payees can submit Form 15G or 15H to avoid deduction if their total income is below the taxable limit.',
      },
      {
        title: 'TDS on Rent (Section 194-I)',
        desc: 'TDS is deducted on rent payments exceeding ₹2,40,000 per annum to a resident. The rate is 2% for rent on plant, machinery, or equipment and 10% for rent on land, building, or furniture. Individual and HUF payers not subject to audit may instead fall under Section 194-IB with a flat 5% rate on monthly rent exceeding ₹50,000.',
      },
      {
        title: 'TDS on Professional and Technical Fees (Section 194J)',
        desc: 'Payments exceeding ₹30,000 per annum to a resident for professional services, technical services, royalty, or non-compete fees attract TDS at 10%. A reduced rate of 2% applies to payments for technical services (other than professional services) and payments to call centers. This section is widely applicable to consultants, lawyers, doctors, architects, and IT service providers.',
      },
      {
        title: 'TDS on Contract Payments (Section 194C)',
        desc: 'Payments to a resident contractor or sub-contractor exceeding ₹30,000 per single payment or ₹1,00,000 in aggregate during the financial year attract TDS at 1% for individuals and HUFs and 2% for companies and firms. This applies to manufacturing, supply of labour, carriage of goods, catering, advertising, and any work contract.',
      },
    ],
    eligibility: [
      'Any person making a payment covered under TDS provisions of the Income Tax Act — including individuals, HUFs, companies, firms, LLPs, trusts, associations of persons, and government bodies.',
      'Employers paying salary to employees where the estimated annual income exceeds the basic exemption limit under Section 192.',
      'Businesses and professionals whose accounts were subject to audit in the preceding financial year, making them liable to deduct TDS on most specified payments.',
      'Banks, financial institutions, NBFCs, and cooperative societies paying interest on deposits exceeding the threshold limits under Section 194A.',
      'Any person paying rent exceeding ₹2,40,000 per annum under Section 194-I, or individuals paying monthly rent exceeding ₹50,000 under Section 194-IB.',
      'Persons making payments to non-residents that are chargeable to tax in India under Section 195 — including interest, royalty, technical service fees, or capital gains.',
      'E-commerce operators required to deduct TDS at 1% on gross amounts paid to e-commerce participants under Section 194-O.',
      'Any deductor who needs to verify TDS rates before processing payments to avoid short-deduction notices and associated interest and penalties.',
    ],
    documents: [
      {
        category: 'Payee Information Required',
        items: [
          'PAN of the payee (absence triggers higher TDS rate of 20% under Section 206AA)',
          'Residential status of the payee — Resident Indian, Non-Resident, or Foreign Company',
          'Nature of the payee entity — Individual, HUF, Firm, Company, AOP, Trust, or Government',
          'Form 15G or 15H from the payee (if applicable — for nil or lower deduction on interest income)',
          'Lower deduction certificate under Section 197, if furnished by the payee with the certificate number and validity period',
        ],
      },
      {
        category: 'Payment & Transaction Details',
        items: [
          'Nature of payment — salary, interest, rent, professional fees, commission, contract payment, dividend, or other specified category',
          'Gross amount of payment before any TDS deduction',
          'Applicable section under the Income Tax Act governing TDS on this payment type',
          'Date of payment or credit to the payee account — whichever is earlier (this determines the TDS deduction date)',
        ],
      },
      {
        category: 'Deductor Compliance Records',
        items: [
          'TAN (Tax Deduction and Collection Account Number) of the deductor',
          'Cumulative payment amount to the same payee during the financial year (to check against threshold limits)',
          'Challan details for previous TDS deposits made during the quarter for the same payee',
          'TRACES portal access for verifying Section 206AB applicability (higher rate for non-filers)',
        ],
      },
    ],
    process: [
      {
        title: 'Select the Nature of Payment',
        desc: 'Choose the type of payment from the dropdown — salary, interest on securities, interest other than securities, rent (land/building), rent (plant/machinery), professional fees, technical fees, contract payment, commission, dividend, or other applicable category. This determines the governing TDS section.',
        time: 'Instant',
      },
      {
        title: 'Enter Payee Details',
        desc: 'Specify the residential status (Resident or Non-Resident), entity type (Individual, Company, Firm, etc.), and whether a valid PAN has been furnished. If the payee holds a lower deduction certificate under Section 197, input the certificate rate to override the standard rate.',
        time: 'Instant',
      },
      {
        title: 'Input the Payment Amount',
        desc: 'Enter the gross amount of the payment. The calculator will automatically check this against the threshold exemption limit for the relevant section. If the amount (individually or cumulatively for the year) is below the threshold, the tool will indicate that no TDS is applicable.',
        time: 'Instant',
      },
      {
        title: 'Review the Applicable TDS Rate',
        desc: 'The calculator displays the standard TDS rate for the selected section and payee profile. If PAN is not available, it shows the higher rate under Section 206AA (20% or the applicable rate, whichever is higher). If the payee is a specified non-filer, the Section 206AB rate is flagged.',
        time: 'Instant',
      },
      {
        title: 'View the TDS Amount and Net Payment',
        desc: 'The tool computes and displays the TDS amount to be deducted and the net payment to be released to the payee. For non-resident payments, surcharge and health & education cess at 4% are added to the base rate where applicable.',
        time: 'Instant',
      },
      {
        title: 'Check Deposit Due Date',
        desc: 'Based on the payment date entered, the calculator shows the due date for depositing TDS with the government — typically the 7th of the following month (30th April for March deductions). This helps you set internal reminders and avoid late deposit interest.',
        time: 'Instant',
      },
      {
        title: 'Export or Save the Computation',
        desc: 'Download or copy the complete TDS computation sheet showing the section, rate, gross amount, TDS amount, net payable, and deposit due date. This serves as a ready reference for your accounts team and can be attached to payment vouchers for audit trail purposes.',
        time: 'Instant',
      },
    ],
    fees: [
      { item: 'TDS Calculator Usage', cost: 'Free — No Charges' },
      { item: 'TDS on Salary (Section 192)', cost: 'Average rate based on income slab' },
      { item: 'TDS on Interest (Section 194A)', cost: '10% (Resident), 20% (No PAN)' },
      { item: 'TDS on Rent — Land/Building (Section 194-I)', cost: '10% (Resident), 20% (No PAN)' },
      { item: 'TDS on Professional Fees (Section 194J)', cost: '10% (Professional), 2% (Technical)' },
      { item: 'TDS on Contract Payments (Section 194C)', cost: '1% (Individual/HUF), 2% (Others)' },
    ],
    advantages: [
      {
        icon: '🎯',
        title: 'Section-Wise Rate Accuracy',
        desc: 'The calculator maintains an up-to-date rate table aligned with the latest Finance Act amendments, ensuring you always apply the correct TDS rate for the specific section governing your payment — eliminating short-deduction risk.',
      },
      {
        icon: '⚡',
        title: 'Saves Time on Every Payment Cycle',
        desc: 'Instead of manually looking up TDS rate charts, checking threshold limits, and computing amounts, get the complete computation in seconds. Particularly valuable for businesses processing hundreds of vendor payments monthly.',
      },
      {
        icon: '🛡️',
        title: 'Prevents Compliance Penalties',
        desc: 'Applying the wrong TDS rate triggers short-deduction notices, interest under Section 201(1A), and potential penalties under Section 271C. This calculator acts as a first line of defense against such costly compliance failures.',
      },
      {
        icon: '📋',
        title: 'Handles Non-PAN and Non-Filer Scenarios',
        desc: 'Automatically applies the higher TDS rate of 20% under Section 206AA when the payee has not furnished a PAN, and flags Section 206AB applicability for specified persons who have not filed income tax returns for the past two years.',
      },
      {
        icon: '🌍',
        title: 'Supports Non-Resident Payments',
        desc: 'For payments to non-residents under Section 195, the calculator applies the base rate along with applicable surcharge and 4% health and education cess, giving you the effective TDS rate rather than just the base rate — a common source of under-deduction errors.',
      },
      {
        icon: '📈',
        title: 'Threshold Limit Awareness',
        desc: 'Each TDS section has a specific threshold below which no TDS is required. The calculator checks your payment amount against these limits and clearly indicates when deduction is not needed — helping you avoid unnecessary deductions that create refund burdens for payees.',
      },
    ],
    disadvantages: [
      'The calculator provides the standard TDS rate based on the Income Tax Act. For payments to non-residents where a Double Taxation Avoidance Agreement (DTAA) provides a beneficial rate, you should consult the specific treaty provisions or a tax advisor to determine the applicable rate.',
      'Salary TDS computation under Section 192 requires detailed estimation of total income, deductions under Chapter VI-A, HRA exemptions, and other allowances. This calculator provides the rate framework but a full salary TDS computation may require your payroll software or a dedicated salary TDS tool.',
      'The tool does not verify Section 206AB applicability in real-time against the Income Tax Department database. You should separately check the specified person status of the payee on the TRACES portal or the compliance check utility before applying the standard rate.',
      'For certain complex payment types — such as immovable property purchases (Section 194-IA), payments by partnership firms to partners, or payments under life insurance policies (Section 194DA) — additional conditions and special computation rules may apply beyond the basic rate lookup.',
    ],
    faqs: [
      {
        q: 'What happens if TDS is deducted at a rate lower than prescribed?',
        a: 'If TDS is deducted at a rate lower than prescribed (short deduction), the deductor will receive a demand notice from the CPC for the shortfall amount along with interest under Section 201(1A) at 1% per month for non-deduction and 1.5% per month for late payment. The deductor must file a correction statement and pay the differential amount with interest.',
      },
      {
        q: 'What is the TDS rate when the payee does not provide a PAN?',
        a: 'Under Section 206AA, if the payee does not furnish a valid PAN to the deductor, TDS must be deducted at the higher of: (a) the rate prescribed in the relevant section, (b) the rate in force (as per the Finance Act), or (c) 20%. In practice, this means 20% applies in most cases when PAN is not available.',
      },
      {
        q: 'What is Section 206AB and how does it affect TDS rates?',
        a: 'Section 206AB requires TDS to be deducted at a higher rate for "specified persons" — individuals who have not filed income tax returns for the two preceding years where the TDS/TCS amount exceeded ₹50,000 in each year. The higher rate is the greater of: twice the prescribed rate, twice the rate in force, or 5%. This does not apply to salary TDS under Section 192.',
      },
      {
        q: 'Is there a threshold limit below which TDS need not be deducted?',
        a: 'Yes. Most TDS sections have specified threshold limits. For example, Section 194A has a ₹40,000 limit (₹50,000 for senior citizens), Section 194C has a ₹30,000 per transaction and ₹1,00,000 annual limit, Section 194J has a ₹30,000 annual limit, and Section 194-I has a ₹2,40,000 annual limit. No TDS is required if the payment does not exceed these thresholds.',
      },
      {
        q: 'Can the payee request a lower TDS deduction rate?',
        a: 'Yes. Under Section 197, a payee whose total income justifies a lower or nil TDS rate can apply to the Assessing Officer for a lower deduction certificate. Once issued, the deductor must deduct TDS at the rate specified in the certificate instead of the standard rate. This is commonly used by contractors and professionals with significant expenses who would otherwise have large TDS refund claims.',
      },
      {
        q: 'How is TDS calculated on payments to non-residents?',
        a: 'TDS on payments to non-residents under Section 195 is deducted at the rates specified in the Finance Act or the applicable DTAA rate — whichever is more beneficial to the payee. The effective rate includes surcharge (based on the income amount) and health & education cess at 4%. For example, if the base rate is 10%, the effective rate after cess would be 10.40% (or higher with surcharge for larger amounts).',
      },
      {
        q: 'What is the difference between Section 194J and Section 194C?',
        a: 'Section 194J applies to payments for professional services (legal, medical, engineering, architectural, accounting, technical consultancy, interior decoration, advertising, etc.) and technical services, while Section 194C applies to payments made to contractors for carrying out any work including supply of labour. The distinction matters because the rates differ — 194J charges 10% for professional and 2% for technical services, while 194C charges 1% for individuals/HUFs and 2% for others.',
      },
      {
        q: 'When should TDS be deducted — at the time of credit or payment?',
        a: 'TDS must be deducted at the earlier of (a) the time of credit to the payee account (including suspense account or any other account) in the books of the deductor, or (b) the time of actual payment. This means even if you have not made the actual payment but have credited the amount in your books, TDS is required to be deducted at that point.',
      },
    ],
    cta: {
      heading: 'Find the Right TDS Rate for Any Payment — Instantly',
      subheading:
        'Stop second-guessing TDS rates and thresholds. Use our free TDS Calculator to ensure every payment you process is compliant with the latest Income Tax Act provisions.',
      features: [
        'Section-wise TDS rate lookup for 30+ payment types',
        'Automatic higher rate flagging for non-PAN and non-filer cases',
        'Threshold limit checks to prevent unnecessary deductions',
        'Trusted by businesses and tax professionals across India',
      ],
    },
  },

'ppf-calculator': {
    slug: 'ppf-calculator',
    title: 'PPF Calculator',
    subtitle:
      'Accurately estimate your Public Provident Fund maturity amount, yearly interest accrual, and total wealth accumulation over the 15-year tenure. Your Professional\'s PPF Calculator empowers you to plan long-term savings with complete transparency — factoring in variable annual deposits, compounding schedules, and extension block projections.',
    heroFeatures: [
      'Instant computation of PPF maturity value with year-by-year interest breakdown',
      'Supports variable annual contributions from ₹500 to ₹1,50,000 per financial year',
      'Calculates compounding at the prevailing government-notified interest rate',
      'Projects wealth growth across the full 15-year mandatory lock-in period and optional 5-year extension blocks',
      'Includes Section 80C tax savings estimation on annual deposits',
    ],
    overview: {
      heading: 'Understanding the Public Provident Fund (PPF) and How Our Calculator Helps',
      paragraphs: [
        'The Public Provident Fund (PPF) is one of India\'s most trusted long-term savings instruments, introduced by the Government of India in 1968 under the Public Provident Fund Act. Backed by a sovereign guarantee, PPF offers a unique combination of safety, attractive interest rates, and tax efficiency that few other instruments can match. Contributions to a PPF account qualify for deduction under Section 80C of the Income Tax Act, the interest earned is completely exempt from income tax under Section 10(11), and the maturity proceeds are also tax-free — making it a rare Exempt-Exempt-Exempt (EEE) instrument in the Indian taxation landscape. The scheme is administered through designated post offices and authorized nationalized banks, and any resident Indian individual can open an account with a minimum annual deposit of ₹500 and a maximum of ₹1,50,000.',
        'Despite its simplicity, estimating the final maturity amount of a PPF account is not straightforward because interest is compounded annually on the lowest balance between the close of the fifth day and the last day of each month. This means the timing of your deposits within each month significantly affects the interest earned. Additionally, the Government of India revises the PPF interest rate every quarter based on the yield of government securities, so the rate applicable in one financial year may differ from the next. These factors combine to make manual calculations cumbersome and error-prone, especially when an investor wants to compare scenarios involving different contribution levels or partial withdrawals after the seventh year.',
        'Your Professional\'s PPF Calculator addresses these challenges by providing a detailed, year-by-year projection of your PPF corpus. Simply input your planned annual investment amount, the applicable interest rate, and the tenure — the calculator instantly generates a comprehensive schedule showing the opening balance, deposit, interest earned, and closing balance for every financial year. Whether you are a salaried professional mapping your retirement savings, a self-employed individual seeking tax-efficient parking for surplus funds, or a parent opening a PPF account for a minor child, this tool gives you the clarity needed to make informed decisions and stay on track toward your financial goals.',
      ],
      highlights: [
        { icon: '🔒', text: 'Sovereign-guaranteed scheme with zero credit risk backed by Government of India' },
        { icon: '💰', text: 'EEE tax status — deposits, interest, and maturity all exempt from income tax' },
        { icon: '📈', text: 'Compounding interest calculated on monthly minimum balances for optimal growth' },
        { icon: '🗓️', text: '15-year lock-in with optional 5-year extension blocks for continued wealth accumulation' },
      ],
    },
    types: [
      {
        title: 'Standard PPF Maturity Calculation',
        desc: 'Computes the maturity value at the end of the 15-year lock-in period assuming a fixed annual contribution deposited at the start of each financial year. This mode applies the prevailing interest rate uniformly across all years and shows a clean year-by-year breakdown of principal accumulation versus compound interest earned, making it ideal for first-time investors who want a quick estimate of their corpus.',
      },
      {
        title: 'Variable Contribution Projection',
        desc: 'Allows investors to enter different contribution amounts for each financial year, reflecting real-life scenarios where income and savings capacity change over time. The calculator adjusts the compounding schedule for each year\'s unique deposit, providing a highly accurate maturity projection for individuals who plan to start small and gradually increase their PPF contributions as their income grows.',
      },
      {
        title: 'Extension Block Projection',
        desc: 'Models the growth of the PPF corpus beyond the initial 15-year tenure by simulating one or more 5-year extension blocks with or without fresh contributions. Investors who opt to extend their PPF account can choose to continue depositing (up to ₹1,50,000 per year) or simply let the existing balance earn compound interest without additional deposits — this mode calculates both scenarios side by side.',
      },
      {
        title: 'Tax Savings Estimator',
        desc: 'Alongside the maturity projection, this mode highlights the cumulative tax benefit under Section 80C across the entire tenure. By factoring in the investor\'s applicable income tax slab, it estimates the year-by-year tax savings generated by PPF deposits and presents the effective post-tax return, helping high-income individuals compare PPF against other Section 80C instruments such as ELSS, NSC, and tax-saving fixed deposits.',
      },
      {
        title: 'Partial Withdrawal Impact Analysis',
        desc: 'PPF rules permit one partial withdrawal per financial year from the seventh year onward, subject to a ceiling of 50% of the balance at the end of the fourth preceding year or the balance at the end of the preceding year, whichever is lower. This calculation mode lets investors model how a withdrawal at a specific year impacts the final maturity amount, enabling better planning for mid-term liquidity needs such as education expenses or a home down payment.',
      },
    ],
    eligibility: [
      'Any resident Indian individual, including salaried employees, self-employed professionals, and business owners, is eligible to open a PPF account',
      'A parent or legal guardian may open a PPF account on behalf of a minor child; however, the combined deposit in the guardian\'s own account and the minor\'s account cannot exceed ₹1,50,000 per financial year',
      'Hindu Undivided Families (HUFs) and Non-Resident Indians (NRIs) are not eligible to open new PPF accounts; however, NRIs who opened an account while they were residents may continue the account until maturity',
      'Only one PPF account per individual is permitted across all banks and post offices; a second account, if detected, is treated as irregular and earns no interest',
      'The minimum annual deposit to keep the account active is ₹500, and the maximum permissible deposit is ₹1,50,000 in a financial year, which can be made in a lump sum or up to 12 instalments',
      'Joint accounts are not permitted under PPF rules — the account must be held in a single individual\'s name only',
      'An investor must have a valid PAN card and Aadhaar number linked to the account for seamless KYC compliance and annual information statement reporting',
      'Deposits must be made through authorized bank branches, India Post offices, or via internet banking and UPI on supported platforms',
    ],
    documents: [
      {
        category: 'Account Opening Documents',
        items: [
          'PPF Account Opening Form (Form A) duly filled and signed by the applicant',
          'PAN card of the account holder (mandatory for all financial transactions)',
          'Aadhaar card for identity verification and e-KYC authentication',
          'Two recent passport-sized colour photographs with white background',
          'Nomination Form (Form E) specifying one or more nominees with their share percentages',
        ],
      },
      {
        category: 'Address & Identity Proof',
        items: [
          'Valid address proof such as Aadhaar card, Voter ID, Driving Licence, Passport, or utility bill not older than 3 months',
          'Proof of date of birth — birth certificate, school leaving certificate, or Passport',
          'For minor accounts: birth certificate of the child and identity proof of the guardian',
          'Bank passbook or latest bank statement showing the linked savings account details',
        ],
      },
      {
        category: 'Extension & Withdrawal Documents',
        items: [
          'Form H for extension of the PPF account beyond the 15-year maturity in blocks of 5 years',
          'Form C for partial withdrawal from the PPF account after completion of the sixth financial year',
          'Form D for obtaining a loan against the PPF balance (available between the 3rd and 6th financial years)',
          'Self-declaration or affidavit if any discrepancy exists in the name or address across submitted documents',
        ],
      },
    ],
    process: [
      {
        title: 'Enter Annual Investment Amount',
        desc: 'Begin by entering the amount you plan to deposit into your PPF account each financial year. The calculator accepts any value between ₹500 (minimum to keep the account active) and ₹1,50,000 (the maximum permissible annual limit). If you intend to vary your contributions year to year, switch to the variable contribution mode for a more precise projection.',
        time: '1 minute',
      },
      {
        title: 'Select Applicable Interest Rate',
        desc: 'Choose the PPF interest rate for your calculation. The tool defaults to the current government-notified rate, but you can override it with a custom rate to model different economic scenarios. As of the latest quarter, the PPF interest rate is set by the Ministry of Finance and is typically reviewed every three months based on the yield of the 10-year government bond.',
        time: '30 seconds',
      },
      {
        title: 'Choose Investment Tenure',
        desc: 'Specify whether you want to calculate for the standard 15-year lock-in period or include one or more 5-year extension blocks. The calculator automatically adjusts the compounding schedule based on the selected duration, allowing you to see how your money grows if you choose to keep the account open beyond the mandatory maturity date.',
        time: '30 seconds',
      },
      {
        title: 'Review Year-by-Year Breakdown',
        desc: 'Once you submit the inputs, the calculator generates a detailed table showing the opening balance, annual deposit, interest credited, and closing balance for every financial year of the chosen tenure. This breakdown makes it easy to visualize how compound interest accelerates the growth of your corpus in the later years of the investment.',
        time: 'Instant',
      },
      {
        title: 'Analyse Tax Savings Impact',
        desc: 'The results screen also displays the cumulative Section 80C deduction claimed over the tenure and an estimate of total tax savings based on your selected income tax slab. This feature helps you understand the effective return on your PPF investment after accounting for the tax benefit, which can significantly enhance the real rate of return compared to taxable alternatives.',
        time: 'Instant',
      },
      {
        title: 'Compare Multiple Scenarios',
        desc: 'Use the scenario comparison feature to run multiple calculations side by side with different deposit amounts, interest rates, or tenures. This is especially useful for investors trying to decide between maximizing their PPF contribution at ₹1,50,000 per year versus splitting funds across multiple instruments or for those evaluating the impact of a mid-term partial withdrawal on the final corpus.',
        time: '2 minutes',
      },
      {
        title: 'Download or Share Projection Report',
        desc: 'After finalizing your preferred scenario, download a detailed PDF report containing the complete year-by-year schedule, maturity amount summary, tax savings analysis, and graphical growth chart. You can share this report with your financial advisor or use it as a planning reference when opening or reviewing your PPF account at the bank or post office.',
        time: '1 minute',
      },
    ],
    fees: [
      { item: 'PPF Calculator Tool Usage', cost: 'Completely free — no charges for unlimited calculations' },
      { item: 'PPF Account Opening (at Bank / Post Office)', cost: 'No account opening fee; minimum first deposit of ₹500 required' },
      { item: 'Annual PPF Account Maintenance', cost: '₹0 — no annual maintenance charges on PPF accounts at any authorized institution' },
      { item: 'Penalty for Non-Deposit in a Financial Year', cost: '₹50 per year of default plus the minimum ₹500 deposit for each defaulted year to revive the account' },
      { item: 'Premature Closure Charges (Allowed after 5 years for specific reasons)', cost: 'Interest rate reduced by 1% from the date of opening for the entire tenure on premature closure' },
      { item: 'Loan Against PPF Balance (3rd to 6th Year)', cost: 'Interest at 1% above the prevailing PPF rate on the outstanding loan amount' },
    ],
    advantages: [
      {
        icon: '🛡️',
        title: 'Sovereign Safety Guarantee',
        desc: 'PPF is backed by the Government of India, which means your principal and accumulated interest carry zero default risk regardless of economic conditions. Unlike bank fixed deposits that are insured only up to ₹5,00,000 by DICGC, the entire PPF balance enjoys an unconditional sovereign guarantee, making it one of the safest saving instruments available to retail investors in India.',
      },
      {
        icon: '🏷️',
        title: 'Triple Tax Exemption (EEE Status)',
        desc: 'PPF is one of the few financial instruments that offers Exempt-Exempt-Exempt tax treatment. Your annual deposits qualify for deduction under Section 80C (up to ₹1,50,000), the interest earned each year is completely tax-free under Section 10(11), and the final maturity amount is exempt from capital gains or income tax — delivering unmatched after-tax returns for conservative investors.',
      },
      {
        icon: '📊',
        title: 'Power of Long-Term Compounding',
        desc: 'With a mandatory 15-year tenure and annual compounding on monthly minimum balances, PPF leverages the exponential growth effect of compound interest. Our calculator vividly illustrates how interest-on-interest accelerates wealth creation — by the final years of the tenure, interest income alone often exceeds the annual deposit amount, demonstrating the remarkable wealth-building power of disciplined long-term saving.',
      },
      {
        icon: '🔄',
        title: 'Flexible Deposit Structure',
        desc: 'Investors can contribute any amount between ₹500 and ₹1,50,000 per financial year in a single lump sum or spread across up to 12 monthly instalments. This flexibility accommodates varying income levels and cash flow patterns, allowing you to deposit more in high-income months and reduce contributions during lean periods without losing the account\'s active status.',
      },
      {
        icon: '💳',
        title: 'Built-In Liquidity Options',
        desc: 'Despite the 15-year lock-in, PPF provides structured liquidity through loans against the balance from the third to sixth year and partial withdrawals from the seventh year onward. These features ensure that investors can access a portion of their savings for genuine financial needs — such as higher education, medical emergencies, or home purchase — without completely surrendering the long-term compounding benefit.',
      },
      {
        icon: '🧮',
        title: 'Accurate Planning with Our Calculator',
        desc: 'Your Professional\'s PPF Calculator eliminates guesswork by providing precise, year-by-year projections based on your actual planned contributions and the prevailing interest rate. Whether you are a first-time investor seeking clarity or an experienced saver comparing extension scenarios, the tool delivers actionable insights that help you optimize deposit timing and maximize your final maturity corpus.',
      },
    ],
    disadvantages: [
      'The 15-year lock-in period is one of the longest among retail savings instruments, limiting liquidity for investors who may need funds before maturity. Premature closure is permitted only after five years and solely for specified reasons such as serious illness or higher education, with a 1% interest rate penalty applied to the entire tenure.',
      'The maximum annual deposit ceiling of ₹1,50,000 restricts the amount of tax-free compounding available to high-net-worth individuals. Investors with surplus savings beyond this limit must look at other instruments for additional deployment, diluting the simplicity of a single-instrument savings strategy.',
      'PPF interest rates are revised quarterly by the Government of India and have shown a declining trend over the past decade — from 8.7% in 2013–14 to around 7.1% in recent years. Since the rate is not locked at the time of account opening, long-term projections based on the current rate may overestimate or underestimate the actual maturity amount.',
      'PPF accounts are available only to resident Indian individuals, excluding NRIs (for new accounts), HUFs, trusts, and corporate entities. Joint accounts are also not permitted, limiting the instrument\'s utility for families that prefer pooled savings vehicles or for individuals who become non-residents during the tenure.',
    ],
    faqs: [
      {
        q: 'What is the current PPF interest rate and how often does it change?',
        a: 'The PPF interest rate is set by the Ministry of Finance and is reviewed at the beginning of every quarter (January, April, July, and October). As of the latest notification, the rate stands at 7.1% per annum compounded annually. The rate is benchmarked to the yield of the 10-year government bond plus a small spread. Any revision applies only to the quarter in which it is announced and does not retroactively alter interest already credited to the account.',
      },
      {
        q: 'How does the PPF Calculator compute the year-by-year interest breakdown?',
        a: 'The calculator applies the annual interest rate to the account balance using the government-prescribed method: interest is computed on the lowest balance between the close of the fifth day and the last day of every month, and the total monthly interest amounts are aggregated to determine the annual interest credited on 31 March. For simplicity, when a single annual deposit amount is entered, the tool assumes the deposit is made before the 5th of April to maximize that year\'s interest. In variable mode, you can specify the deposit month for more precise results.',
      },
      {
        q: 'Can I use the calculator to project PPF returns for a minor child\'s account?',
        a: 'Yes. The PPF Calculator works identically for a minor\'s account — simply enter the annual contribution you plan to make in the child\'s name. Remember that the combined deposit across your own PPF account and the minor\'s account cannot exceed ₹1,50,000 in a single financial year. The tax benefit under Section 80C is available to the guardian who makes the deposit, and the interest earned remains tax-exempt in the hands of the minor until they reach adulthood.',
      },
      {
        q: 'What happens if I miss a deposit in one or more financial years?',
        a: 'If no deposit is made in a financial year, the PPF account becomes inactive (dormant). To revive it, you must pay a penalty of ₹50 for each year of default along with the minimum deposit of ₹500 for every defaulted year plus the current year\'s minimum deposit. During the dormant period, the existing balance continues to earn interest at the prevailing rate, but no fresh deposits or withdrawals are permitted until the account is reactivated.',
      },
      {
        q: 'Is there a way to model partial withdrawals in the PPF Calculator?',
        a: 'Yes. The calculator\'s partial withdrawal impact analysis mode allows you to enter the year and amount of a planned withdrawal (subject to PPF withdrawal rules applicable from the seventh financial year). The tool then recalculates the remaining tenure\'s compounding schedule with the reduced balance, showing you exactly how much the withdrawal reduces your final maturity amount. This helps you weigh the trade-off between accessing funds now and maximizing long-term growth.',
      },
      {
        q: 'How accurate are the projections if the PPF interest rate changes in future quarters?',
        a: 'The calculator generates projections based on the interest rate you input, which is typically the current quarter\'s rate. Since PPF rates can change every quarter, long-term projections assume rate constancy and should be treated as indicative estimates rather than guaranteed outcomes. For more conservative planning, you can run the calculator at a lower assumed rate (for example, 6.5% or 7.0%) to build in a margin of safety against potential future rate reductions.',
      },
      {
        q: 'Can NRIs use the PPF Calculator or open new PPF accounts?',
        a: 'Non-Resident Indians (NRIs) cannot open new PPF accounts under the current rules. However, if an individual opened a PPF account while they were a resident Indian and subsequently became an NRI, they are permitted to continue the account on a non-repatriable basis until the original 15-year maturity date (extensions are not allowed). Such investors can absolutely use this calculator to project their maturity amount and plan their finances. The interest rate and compounding method remain the same for NRI-held accounts.',
      },
      {
        q: 'Does the calculator account for the Section 80C tax benefit on PPF deposits?',
        a: 'Yes. After generating the maturity projection, the results include a dedicated tax savings section that estimates the cumulative tax benefit over the entire tenure. You can select your applicable income tax slab — whether it is 5%, 20%, or 30% under the old regime, or the new tax regime rates — and the calculator shows the year-by-year tax saved on your PPF deposits. This effective tax saving, when added to the tax-free interest, significantly boosts the real return compared to taxable fixed-income alternatives.',
      },
    ],
    cta: {
      heading: 'Plan Your PPF Investments with Confidence',
      subheading:
        'Use our free PPF Calculator to visualize your wealth growth, optimize deposit timing, and maximize tax savings. Need expert help opening or managing your PPF account? Your Professional\'s team is just a click away.',
      features: [
        'Unlimited free calculations with detailed year-by-year schedules',
        'Compare multiple scenarios to find your optimal investment strategy',
        'Downloadable PDF reports for financial planning and advisor consultations',
        'Expert assistance available for PPF account opening, transfers, and extensions',
      ],
    },
  },

  'gst-interest-calculator': {
    slug: 'gst-interest-calculator',
    title: 'GST Interest Calculator',
    subtitle:
      'Precisely calculate the interest payable on delayed GST payments under Section 50 of the CGST Act, 2017. Your Professional\'s GST Interest Calculator helps businesses and tax professionals determine the exact interest liability for late tax remittances — covering CGST, SGST, IGST, and cess components — so you can settle dues accurately and avoid compounding penalties.',
    heroFeatures: [
      'Computes interest under Section 50(1) at 18% per annum on net tax liability paid after the due date',
      'Calculates interest under Section 50(3) at 24% per annum on wrongly availed and utilized input tax credit',
      'Supports separate computation for CGST, SGST/UTGST, IGST, and Compensation Cess components',
      'Automatically determines the number of delay days based on the original due date and actual payment date',
      'Reflects the landmark Supreme Court and High Court rulings confirming interest on net cash liability post-amendment',
    ],
    overview: {
      heading: 'Understanding GST Interest Provisions Under Section 50 of the CGST Act',
      paragraphs: [
        'Under India\'s Goods and Services Tax framework, every registered taxpayer is required to remit the tax collected from recipients to the government within the prescribed due dates — typically the 20th of the month following the tax period for regular monthly filers under GSTR-3B, or the quarterly due dates for taxpayers under the QRMP scheme. When a taxpayer fails to deposit the tax on time, Section 50 of the Central Goods and Services Tax (CGST) Act, 2017 mandates the payment of interest on the delayed amount. The interest serves as compensation to the exchequer for the time value of money and as a deterrent against habitual non-compliance. Section 50(1) prescribes an interest rate of 18% per annum on the amount of tax paid after the due date, while Section 50(3) imposes a higher rate of 24% per annum on input tax credit that has been wrongly availed and utilized — reflecting the graver nature of fraudulent or erroneous credit claims.',
        'The calculation of GST interest has been the subject of significant judicial and legislative evolution. Prior to the retrospective amendment effective from 1 September 2020, interest was computed on the gross tax liability, which meant that even taxpayers who had sufficient balance in their electronic credit ledger were charged interest on the full output tax rather than just the net cash component. Following widespread industry representations and several High Court rulings (notably the Megha Engineering and Infrastructure Limited case before the Telangana High Court), Section 50(1) was amended to clarify that interest is payable only on the portion of tax paid by debiting the electronic cash ledger — i.e., the net cash tax liability after adjustment of input tax credit. This amendment, given retrospective effect from 1 July 2017, brought significant relief to compliant taxpayers and fundamentally changed how interest calculations are performed.',
        'Your Professional\'s GST Interest Calculator incorporates these legislative amendments and judicial interpretations to deliver accurate, component-wise interest computations. Whether you are a business owner preparing for a delayed GSTR-3B filing, a chartered accountant reconciling a client\'s interest liability across multiple tax periods, or a tax officer verifying a demand notice, this tool eliminates manual calculation errors and provides a transparent, auditable breakdown of principal tax due, number of delay days, applicable interest rate, and the total interest payable for each GST component.',
      ],
      highlights: [
        { icon: '⚖️', text: 'Aligned with the retrospective Section 50 amendment effective from 1 July 2017' },
        { icon: '📅', text: 'Automatic delay-day computation from the filing due date to the actual payment date' },
        { icon: '🔢', text: 'Component-wise interest breakup for CGST, SGST, IGST, and Cess separately' },
        { icon: '📑', text: 'Supports both Section 50(1) at 18% and Section 50(3) at 24% interest rate scenarios' },
      ],
    },
    types: [
      {
        title: 'Section 50(1) — Interest on Late Payment of Tax',
        desc: 'This is the most common interest scenario, applicable when a registered taxpayer deposits the GST liability after the due date of the applicable return (typically GSTR-3B). Interest at 18% per annum is levied on the net tax paid through the electronic cash ledger — meaning the gross output liability minus the input tax credit utilized from the electronic credit ledger. The calculator determines the exact number of delay days (from the day after the due date to the date of actual payment) and computes the per-component interest for CGST, SGST/UTGST, IGST, and Compensation Cess.',
      },
      {
        title: 'Section 50(3) — Interest on Wrongly Availed and Utilized ITC',
        desc: 'When a taxpayer avails input tax credit to which they are not entitled — whether due to invoices from non-existent suppliers, credit on blocked items under Section 17(5), or excess credit claimed beyond the eligible amount — and utilizes such credit against output tax, interest is charged at 24% per annum. This higher rate reflects the severity of improper credit utilization. The calculator allows separate input of the wrongly utilized ITC amount and applies the 24% rate from the date of utilization to the date of reversal or payment.',
      },
      {
        title: 'Multi-Period Consolidated Interest Calculation',
        desc: 'Businesses that have accumulated delayed payments across several tax periods — for example, during a cash flow crunch or pending dispute resolution — can use this mode to compute the aggregate interest liability for multiple months in a single calculation. Enter the tax period, due date, payment date, and net tax liability for each period, and the calculator produces a consolidated interest summary with individual period breakdowns, making it easy to reconcile with GST portal records or departmental demand notices.',
      },
      {
        title: 'QRMP Scheme Taxpayer Interest Computation',
        desc: 'Taxpayers registered under the Quarterly Return Monthly Payment (QRMP) scheme file GSTR-3B on a quarterly basis but are required to deposit monthly tax through the PMT-06 challan by the 25th of the following month. Interest on delayed monthly payments under the QRMP scheme follows the same Section 50(1) provisions, but the due dates differ from regular monthly filers. This mode pre-configures the correct due dates for QRMP taxpayers and computes interest accordingly.',
      },
      {
        title: 'Interest Estimation for Voluntary Compliance (DRC-03)',
        desc: 'When a taxpayer identifies a short payment or error in a prior return and wishes to make a voluntary payment through Form DRC-03, they must include the applicable interest along with the differential tax amount. This calculation mode helps taxpayers compute the exact interest to include in the DRC-03 payment, ensuring that the voluntary compliance is complete and no residual interest demand arises from the department post-payment.',
      },
    ],
    eligibility: [
      'All registered GST taxpayers — including regular taxpayers, composition scheme dealers, casual taxable persons, and non-resident taxable persons — are subject to interest under Section 50 for delayed tax payments',
      'Input Service Distributors (ISDs) who delay the distribution of credit beyond the prescribed timelines may also attract interest provisions on the output tax side',
      'E-commerce operators required to collect Tax Collected at Source (TCS) under Section 52 are liable for interest on late deposit of TCS amounts',
      'Taxpayers who have wrongly availed and utilized input tax credit — whether through fake invoices, ineligible credits, or excess claims — are subject to the higher 24% interest rate under Section 50(3)',
      'Tax Deductors at Source (TDS) under Section 51 of the CGST Act who delay the deposit of deducted tax are liable for interest at the same 18% per annum rate under Section 50(1)',
      'Businesses filing revised or rectified returns that result in additional tax liability must pay interest on the differential amount from the original due date of the return to the date of actual payment',
      'Taxpayers under the QRMP scheme who miss the monthly PMT-06 challan payment deadline are liable for interest computed from the 26th of the month following the relevant month',
      'Any person required to reverse input tax credit under Rule 42 or Rule 43 (common credit apportionment) who delays the reversal beyond the return due date may be charged interest on the reversed amount',
    ],
    documents: [
      {
        category: 'Tax Payment & Return Records',
        items: [
          'GSTR-3B filed returns for the relevant tax periods showing the declared output tax and input tax credit claimed',
          'Electronic Cash Ledger statement from the GST portal reflecting actual tax payments and their dates',
          'Electronic Credit Ledger statement showing ITC available and utilized against output liabilities',
          'PMT-06 challan receipts for monthly tax deposits (applicable for QRMP scheme taxpayers)',
          'DRC-03 voluntary payment acknowledgments, if any prior payments have been made toward the same period',
        ],
      },
      {
        category: 'Demand Notices & Correspondence',
        items: [
          'Form GST DRC-01 — show cause notice issued by the GST officer detailing the principal demand and proposed interest',
          'Form GST DRC-07 — order confirming the demand, interest, and penalty after adjudication',
          'Any communication or order from the Appellate Authority, Tribunal, or High Court modifying the interest computation or rate',
          'Rectification orders under Section 161 or revision orders under Section 108 impacting the tax or interest amounts',
        ],
      },
      {
        category: 'Supporting Computation Documents',
        items: [
          'GSTR-2A / GSTR-2B auto-populated data for verifying the eligible input tax credit for the relevant periods',
          'Reconciliation statement between books of accounts and GST returns showing the net tax payable',
          'Working sheet or spreadsheet with month-wise gross liability, ITC utilization, and net cash tax paid for interest computation',
        ],
      },
    ],
    process: [
      {
        title: 'Select the Interest Provision',
        desc: 'Begin by choosing whether you are calculating interest under Section 50(1) for late tax payment at 18% per annum or under Section 50(3) for wrongly availed and utilized ITC at 24% per annum. This selection determines the applicable rate and ensures the calculator applies the correct legal basis for the computation. If you have both types of liabilities, run separate calculations for each.',
        time: '30 seconds',
      },
      {
        title: 'Enter the Tax Period and Due Date',
        desc: 'Select the relevant GST return period (month and year for monthly filers, or quarter for QRMP taxpayers). The calculator automatically populates the standard due date based on the filing frequency and applicable notifications. For example, the due date for GSTR-3B for a particular month is typically the 20th of the following month, while QRMP quarterly returns have specific dates prescribed for each quarter. You can also override the due date if an extension was notified by the government.',
        time: '1 minute',
      },
      {
        title: 'Input the Net Tax Liability by Component',
        desc: 'Enter the net tax amount paid through the electronic cash ledger for each GST component — CGST, SGST/UTGST, IGST, and Compensation Cess. The net tax liability is the gross output tax minus the input tax credit utilized for that component. If you are computing interest under the pre-amendment method (gross liability), the calculator provides a toggle to switch between gross and net modes for comparison purposes.',
        time: '2 minutes',
      },
      {
        title: 'Enter the Actual Payment Date',
        desc: 'Input the date on which the delayed tax was actually deposited into the electronic cash ledger via challan payment or DRC-03. The calculator computes the number of delay days as the difference between the day after the due date and the payment date (inclusive). Interest accrues from the day immediately following the due date, so even a one-day delay triggers interest liability for that single day.',
        time: '30 seconds',
      },
      {
        title: 'Review the Component-Wise Interest Breakdown',
        desc: 'The calculator generates a detailed table showing, for each GST component: the net tax amount, number of delay days, applicable interest rate (18% or 24%), daily interest, and total interest payable. This component-wise breakdown is essential for accurate payment because interest on CGST, SGST, IGST, and Cess must be deposited separately into the respective government heads via distinct minor heads in the challan.',
        time: 'Instant',
      },
      {
        title: 'Verify Against GST Portal Records',
        desc: 'Cross-check the calculated interest amounts with the interest automatically computed and reflected on the GST portal in the "Interest" column of your GSTR-3B. Note that the portal\'s auto-populated interest may sometimes differ due to system limitations or timing of ledger updates — our calculator provides an independent verification that you can rely on for accurate self-assessment before filing.',
        time: '5 minutes',
      },
      {
        title: 'Download Computation Sheet and Make Payment',
        desc: 'Download the detailed interest computation as a PDF or Excel file for your records. This document serves as auditable proof of your interest calculation methodology and can be attached to DRC-03 voluntary payments, reply to show cause notices, or submitted during GST audits and assessments. Proceed to deposit the interest amount through the GST portal by generating a challan under the "Interest" head for each applicable component.',
        time: '3 minutes',
      },
    ],
    fees: [
      { item: 'GST Interest Calculator Tool Usage', cost: 'Completely free — unlimited calculations with no registration required' },
      { item: 'Interest Rate Under Section 50(1) — Late Tax Payment', cost: '18% per annum on the net cash tax liability (calculated on a daily basis from the day after the due date)' },
      { item: 'Interest Rate Under Section 50(3) — Wrongly Availed ITC', cost: '24% per annum on the amount of ITC wrongly availed and utilized (from the date of utilization to date of payment)' },
      { item: 'Professional Assistance for Interest Computation & Filing', cost: 'Starting at ₹1,500 per return period — includes reconciliation, interest calculation, and GSTR-3B filing with interest' },
      { item: 'DRC-03 Voluntary Payment Filing Assistance', cost: 'Starting at ₹2,000 per DRC-03 — includes computation, payment, and acknowledgment filing' },
      { item: 'Reply to Show Cause Notice (DRC-01) Including Interest Verification', cost: 'Starting at ₹5,000 per notice — includes detailed computation sheet, legal grounds, and drafted reply' },
    ],
    advantages: [
      {
        icon: '✅',
        title: 'Accurate Net Liability Computation',
        desc: 'The calculator implements the post-amendment Section 50(1) provision that restricts interest to the net cash tax liability rather than the gross output tax. This distinction can reduce interest liability by 50–80% for taxpayers who have substantial ITC balances, saving significant amounts that would otherwise be incorrectly paid if computed on the gross figure using manual methods or outdated spreadsheets.',
      },
      {
        icon: '📐',
        title: 'Precise Day-Count Methodology',
        desc: 'Interest under GST is computed on a per-day basis, and even a single day\'s miscalculation can lead to over-payment or under-payment. Our calculator uses exact calendar day differences, accounts for leap years, and ensures the delay period starts from the day after the due date — eliminating the off-by-one errors that commonly occur in manual calculations and Excel-based workarounds.',
      },
      {
        icon: '🗂️',
        title: 'Component-Wise Segregation',
        desc: 'GST interest must be deposited under the correct tax head — CGST interest goes to the Central Government, SGST interest to the State Government, and IGST interest to the Integrated tax head. The calculator automatically segregates the interest by component, ensuring that your challan payment is correctly allocated and you do not face reconciliation issues during annual return filing or departmental audit.',
      },
      {
        icon: '📋',
        title: 'Audit-Ready Documentation',
        desc: 'The downloadable computation sheet provides a transparent, step-by-step audit trail that includes the legal provision, applicable rate, delay period, principal amount, and computed interest for each component and each tax period. This documentation stands up to scrutiny during GST audits, departmental assessments, and appellate proceedings, reducing the burden of proof on the taxpayer.',
      },
      {
        icon: '⏱️',
        title: 'Time and Cost Efficiency',
        desc: 'Manually computing GST interest for multiple tax periods across four components is tedious and error-prone. Chartered accountants and tax managers spend hours building and validating Excel sheets for each client or business unit. Our calculator reduces this task to minutes, freeing up professional time for higher-value advisory work and ensuring that even junior staff can produce accurate computations independently.',
      },
      {
        icon: '🔄',
        title: 'Multi-Period Batch Processing',
        desc: 'For businesses that have accumulated delayed payments across several months — whether due to cash flow constraints, disputes, or oversight — the consolidated mode processes all periods at once and produces an aggregated summary alongside individual period breakdowns. This is invaluable when responding to demand notices that cover multiple tax periods or when making a single consolidated DRC-03 voluntary payment.',
      },
    ],
    disadvantages: [
      'The calculator computes interest based on the inputs provided by the user and cannot independently verify whether the net tax liability entered is accurate. If the underlying GSTR-3B figures contain errors in output tax declaration or ITC claims, the computed interest will inherit those inaccuracies. Users should reconcile their return data with books of accounts before relying on the calculator\'s output.',
      'GST interest provisions have undergone multiple amendments and are subject to ongoing litigation in various High Courts and the Supreme Court. While the calculator reflects the current settled legal position (interest on net liability under Section 50(1) effective retrospectively from 1 July 2017), future judicial decisions or legislative changes could alter the computation methodology. Users should stay updated on legal developments.',
      'The tool calculates interest as a standalone component and does not factor in late fees under Section 47, penalties under Section 73 or Section 74, or prosecution provisions that may apply in cases of willful non-compliance. A complete assessment of the financial exposure from delayed GST payments requires consideration of all these elements together, ideally with the guidance of a qualified tax professional.',
      'For interest under Section 50(3) on wrongly availed ITC, the date of utilization can be complex to determine — especially when ITC from multiple invoices across different months is utilized against output tax in various proportions. The calculator requires the user to input the utilization date, but identifying this date accurately may require detailed ledger analysis that is beyond the tool\'s scope.',
    ],
    faqs: [
      {
        q: 'Is GST interest calculated on the gross tax liability or the net cash liability?',
        a: 'Following the amendment to Section 50(1) of the CGST Act — which was given retrospective effect from 1 July 2017 — interest is now payable only on the net tax liability, i.e., the portion of output tax paid by debiting the electronic cash ledger after adjustment of available input tax credit. This means if your gross output tax for a period was ₹10,00,000 and you utilized ₹7,00,000 of ITC, interest applies only on the remaining ₹3,00,000 paid in cash. Our calculator defaults to this net liability method, which is the current legally settled position.',
      },
      {
        q: 'From which date does GST interest start accruing?',
        a: 'Interest begins accruing from the day immediately following the due date of the GST return in which the tax was required to be paid. For example, if the due date for GSTR-3B for October 2024 is 20 November 2024, and you make the payment on 15 December 2024, interest is calculated for 25 days (from 21 November to 15 December inclusive). The calculator automatically computes this delay period when you enter the due date and payment date.',
      },
      {
        q: 'What is the difference between Section 50(1) and Section 50(3) interest?',
        a: 'Section 50(1) applies to late payment of tax — when a taxpayer files their return or makes payment after the due date, interest at 18% per annum is charged on the delayed net cash tax amount. Section 50(3) applies specifically to input tax credit that has been wrongly availed and utilized — for instance, ITC claimed on fake invoices, blocked credits, or excess credit beyond eligible amounts. The interest rate under Section 50(3) is 24% per annum, reflecting the more serious nature of improper credit claims. Our calculator handles both provisions separately.',
      },
      {
        q: 'Does the calculator account for government-notified extensions in filing due dates?',
        a: 'Yes. The calculator is pre-configured with the standard due dates for GSTR-3B (monthly and quarterly filers) based on CBIC notifications. When the government extends a filing deadline — as it did during the COVID-19 pandemic for several tax periods — you can manually override the due date field to reflect the extended date. The interest computation will then use the extended due date as the starting point, ensuring accurate calculation in line with the notified relaxation.',
      },
      {
        q: 'Can I use this calculator for computing interest on delayed IGST payment on imports?',
        a: 'Interest on delayed payment of IGST on imports is governed by the Customs Act, 1962, and not by Section 50 of the CGST Act. The interest rate and computation methodology for customs-related IGST differ from the domestic GST provisions. This calculator is designed specifically for domestic GST return-related interest under Section 50 of the CGST Act and should not be used for import duty or IGST-on-import interest calculations. For import-related interest, consult the Customs Tariff provisions or reach out to our experts.',
      },
      {
        q: 'Is the interest payable even if the delay is caused by technical glitches on the GST portal?',
        a: 'In principle, interest under Section 50 is an automatic levy triggered by the delay in tax payment, regardless of the reason for the delay. However, the GST Council and CBIC have occasionally provided relief through notifications or press releases when widespread portal glitches prevented timely filing — as occurred during the early months of GST implementation. If you believe a technical issue caused your delay, document it with screenshots and error logs, and consider filing a representation with the jurisdictional officer. Our team can assist in drafting such representations.',
      },
      {
        q: 'How should I deposit the calculated interest amount on the GST portal?',
        a: 'Interest must be paid by generating a challan on the GST portal (under Services > Payments > Create Challan) and selecting the appropriate minor head for "Interest" under each major tax head — CGST, SGST/UTGST, IGST, or Cess. The interest amount for each component should be entered in the respective interest column. After payment, the amount is credited to your electronic cash ledger under the interest head, and you must declare the interest in the relevant GSTR-3B return in the "Interest" row of Table 5.1. Our calculator\'s component-wise breakup directly maps to these challan fields for seamless payment.',
      },
      {
        q: 'Can interest under Section 50 be waived or reduced by the GST authorities?',
        a: 'Unlike penalties, which have discretionary elements in certain provisions, interest under Section 50 is a statutory charge and cannot be waived by the assessing officer or the appellate authority. It is treated as automatic compensation to the government for delayed receipt of tax revenue. However, the principal tax demand itself can be challenged — and if the demand is reduced or quashed through adjudication, appeal, or revision, the corresponding interest liability also stands reduced proportionally. If you believe the interest demand is excessive, our experts can evaluate the grounds for challenging the underlying tax demand.',
      },
    ],
    cta: {
      heading: 'Compute Your GST Interest Liability Accurately',
      subheading:
        'Stop guessing and start computing. Use our free GST Interest Calculator to determine the exact interest payable under Section 50 of the CGST Act. Need help filing delayed returns, responding to demand notices, or making DRC-03 voluntary payments? Your Professional\'s GST experts are here to assist.',
      features: [
        'Free unlimited calculations for all GST components — CGST, SGST, IGST, and Cess',
        'Supports both Section 50(1) at 18% and Section 50(3) at 24% interest computations',
        'Downloadable computation sheets for audit documentation and departmental submissions',
        'Expert assistance available for return filing, DRC-03 payments, and show cause notice replies',
      ],
    },
  }
};
