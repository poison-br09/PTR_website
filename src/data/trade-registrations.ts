import type { RegistrationData } from './registrations';

export const TRADE_REGISTRATIONS: Record<string, RegistrationData> = {
    'trade-licence-registration': {
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
    },
    'trade-licence-renewal': {
        slug: 'trade-licence-renewal',
        title: 'Trade Licence Renewal Online in India',
        subtitle:
            'Renew your Trade Licence seamlessly with Your Professional — timely renewal filing, complete documentation support, and expert guidance to keep your business legally compliant with municipal corporation requirements across India.',
        heroFeatures: [
            'Hassle-Free Trade Licence Renewal with Expert Assistance',
            'Timely Filing to Avoid Late Fees & Penalties up to ₹5,000',
            'End-to-End Support for Municipal Corporation Compliance',
            'Trusted by 10,000+ Businesses Across India for Licence Renewals',
        ],
        overview: {
            heading: 'What is Trade Licence Renewal?',
            paragraphs: [
                'A Trade Licence (also known as a Shop and Establishment Licence in some states) is a permit issued by the local municipal corporation, municipality, or panchayat authority that grants legal permission to carry on a specific trade, business, or profession within its jurisdiction. Under the Municipal Corporation Acts of various Indian states, every business — whether a shop, factory, warehouse, restaurant, hotel, or service establishment — is required to obtain and periodically renew this licence to continue operations lawfully.',
                'Trade Licence Renewal is the statutory process of extending the validity of an existing trade licence before or after its expiry. In most Indian municipalities, trade licences are valid for one financial year (1st April to 31st March) and must be renewed annually. Failure to renew the licence on time can result in penalties, late fees, closure notices, or even prosecution under the relevant municipal laws. The renewal process involves submitting the prescribed application form, updated documents, and payment of the renewal fee to the concerned municipal authority.',
                'Your Professional simplifies the entire Trade Licence Renewal process — from tracking renewal due dates and preparing documentation to filing applications with the municipal corporation and following up until the renewed licence is issued. Whether you operate a small retail shop, a large commercial establishment, or a home-based business, our team ensures your trade licence remains valid and your business stays fully compliant with all local body regulations.',
            ],
            highlights: [
                { icon: '🏛️', text: 'Mandatory annual renewal under Municipal Corporation Acts across all Indian states' },
                { icon: '📅', text: 'Valid for one financial year (April to March) — must be renewed before expiry' },
                { icon: '⚖️', text: 'Non-renewal attracts penalties, late fees, and potential business closure orders' },
                { icon: '🔄', text: 'Online and offline renewal options available depending on the municipality' },
            ],
        },
        types: [
            {
                title: 'Annual Renewal (Standard)',
                desc: 'The most common type of renewal, filed every financial year before 31st March or within the grace period allowed by the respective municipal authority. This applies to all existing trade licence holders whose business activity, premises, and ownership details remain unchanged from the previous year.',
            },
            {
                title: 'Late Renewal (Post-Expiry)',
                desc: 'When a trade licence is not renewed within the prescribed deadline or grace period, the business must apply for a late renewal along with applicable late fees and penalties. Municipal corporations typically charge a penalty of ₹50–₹500 per month of delay, and in some cases, the business may need to undergo a fresh inspection before the licence is reissued.',
            },
            {
                title: 'Renewal with Change of Business Activity',
                desc: 'If the nature or category of the trade or business has changed since the original licence was issued — such as switching from retail to wholesale, adding a new product line, or starting food service operations — the renewal application must include details of the changed business activity along with any additional approvals or NOCs required for the new activity.',
            },
            {
                title: 'Renewal with Change of Premises',
                desc: 'When a business has relocated to a new address within the same municipal jurisdiction, the renewal application must be accompanied by updated premises documents including the new rent agreement, property tax receipt, and NOC from the property owner. A fresh inspection of the new premises may be required by the municipal authority.',
            },
            {
                title: 'Renewal with Change of Ownership or Constitution',
                desc: 'If there has been a change in the ownership of the business — such as transfer of proprietorship, addition or removal of partners, change in directors, or conversion from proprietorship to partnership or company — the renewal must be filed with updated ownership documents, a board resolution or partnership deed amendment, and identity proof of the new owner(s).',
            },
            {
                title: 'Renewal for Seasonal or Temporary Trade Licence',
                desc: 'Certain municipal corporations issue seasonal or temporary trade licences for businesses that operate only during specific periods — such as fireworks shops during Diwali, fair stalls, or seasonal food vendors. These licences require renewal before each operational season with updated safety and compliance certificates.',
            },
        ],
        eligibility: [
            'Any individual, firm, company, or organization holding a valid or expired trade licence issued by a municipal corporation, municipality, or panchayat in India.',
            'Proprietors, partners, directors, or authorized signatories of the business entity that originally obtained the trade licence.',
            'Businesses operating within the jurisdictional limits of the municipal authority that issued the original trade licence.',
            'Establishments where there has been no order of permanent cancellation or revocation of the trade licence by the municipal authority.',
            'Business operators who have cleared all outstanding dues, property taxes, and previous penalty amounts owed to the concerned municipal body.',
            'Entities that comply with the fire safety, health, sanitation, and environmental norms prescribed by the local municipal authority for the relevant trade category.',
            'Successors, legal heirs, or assignees of the original licence holder — provided appropriate transfer or succession documentation is submitted along with the renewal application.',
        ],
        documents: [
            {
                category: 'Identity & Address Proof of Applicant',
                items: [
                    'Aadhaar Card of the proprietor, managing partner, or authorized director',
                    'PAN Card of the applicant or business entity',
                    'Passport-sized photographs (2 copies) of the licence holder or authorized signatory',
                    'Voter ID, Passport, or Driving License as additional identity proof',
                ],
            },
            {
                category: 'Business & Premises Documents',
                items: [
                    'Copy of the existing Trade Licence (previous year or original)',
                    'Rent agreement or ownership deed of the business premises',
                    'Latest property tax payment receipt for the business premises',
                    'NOC (No Objection Certificate) from the landlord or property owner (if rented)',
                    'Utility bill (electricity or water) of the business premises as address proof',
                ],
            },
            {
                category: 'Business Constitution & Registration Documents',
                items: [
                    'Certificate of Incorporation / Partnership Deed / Proprietorship Declaration as applicable',
                    'GST Registration Certificate of the business',
                    'Shop and Establishment Registration Certificate (if applicable in the state)',
                    'Board Resolution or Authorization Letter for the person signing the renewal application',
                ],
            },
            {
                category: 'Compliance & Safety Certificates',
                items: [
                    'Fire Safety Certificate / NOC from the Fire Department (for applicable categories)',
                    'Health and Sanitation Certificate from the municipal health officer (for food businesses)',
                    'Pollution Control Board NOC or Consent to Operate (for manufacturing or industrial units)',
                    'Building Completion Certificate or Occupancy Certificate (if new premises)',
                ],
            },
        ],
        process: [
            {
                title: 'Check Renewal Due Date & Licence Status',
                desc: 'Verify the expiry date of your existing trade licence and confirm whether it falls within the standard renewal window or requires a late renewal application. Your Professional tracks renewal timelines and sends proactive reminders to ensure you never miss a deadline.',
                time: '1 day',
            },
            {
                title: 'Gather & Verify Required Documents',
                desc: 'Collect all necessary documents including the previous trade licence copy, identity proofs, premises documents, property tax receipts, and compliance certificates. Our team reviews each document for completeness and accuracy before filing.',
                time: '1–2 days',
            },
            {
                title: 'Prepare the Renewal Application Form',
                desc: 'Fill out the prescribed trade licence renewal form as required by the respective municipal corporation — whether it is an online form on the municipal e-governance portal or a physical form for offline submission.',
                time: '1 day',
            },
            {
                title: 'Calculate & Pay Renewal Fees',
                desc: 'Determine the applicable renewal fee based on the trade category, area of premises, and municipal fee schedule. Pay the renewal fee along with any late fees or penalties (if applicable) through the designated payment channels — online, demand draft, or challan.',
                time: '1 day',
            },
            {
                title: 'Submit Renewal Application to Municipal Authority',
                desc: 'File the completed renewal application along with all supporting documents and fee payment proof with the concerned municipal corporation office or through the online municipal portal. An acknowledgement receipt or application reference number is issued upon submission.',
                time: '1 day',
            },
            {
                title: 'Municipal Verification & Inspection',
                desc: 'The municipal authority verifies the submitted documents and may conduct a physical inspection of the business premises to confirm compliance with health, safety, fire, and building regulations. For routine annual renewals without changes, inspection may be waived.',
                time: '3–7 days',
            },
            {
                title: 'Address Queries or Deficiencies (If Any)',
                desc: 'If the municipal officer raises any queries, requests additional documents, or identifies deficiencies in the application, Your Professional promptly addresses these on your behalf to prevent delays in the renewal process.',
                time: '2–5 days',
            },
            {
                title: 'Approval & Issuance of Renewed Trade Licence',
                desc: 'Upon successful verification, the municipal authority approves the renewal and issues the renewed trade licence certificate — either digitally through the e-governance portal or as a physical certificate from the municipal office.',
                time: '7–15 days',
            },
            {
                title: 'Download or Collect the Renewed Licence',
                desc: 'Download the renewed trade licence from the municipal portal or collect the physical certificate from the municipal office. Verify all details — business name, address, trade category, validity period — for accuracy.',
                time: '1–2 days',
            },
            {
                title: 'Display Renewed Licence at Business Premises',
                desc: 'Display the renewed trade licence prominently at your place of business as mandated by the municipal corporation rules. Keep a digital and physical copy for records, and note the next renewal due date for timely future compliance.',
                time: 'Immediate',
            },
        ],
        fees: [
            { item: 'Trade Licence Renewal Fee — Small Shops (below 500 sq. ft.)', cost: '₹500 – ₹2,000 per year' },
            { item: 'Trade Licence Renewal Fee — Medium Establishments (500–2,000 sq. ft.)', cost: '₹2,000 – ₹5,000 per year' },
            { item: 'Trade Licence Renewal Fee — Large Commercial Premises (above 2,000 sq. ft.)', cost: '₹5,000 – ₹25,000 per year' },
            { item: 'Late Renewal Penalty (varies by municipality)', cost: '₹50 – ₹500 per month of delay' },
            { item: 'Change of Trade Activity — Additional Processing Fee', cost: '₹500 – ₹2,000' },
            { item: 'Premises Inspection Fee (if applicable)', cost: '₹200 – ₹1,000' },
            { item: 'Professional Service Charges (Your Professional)', cost: '₹1,999 onwards' },
            { item: 'Document Preparation & Filing Assistance (Your Professional)', cost: '₹999 onwards' },
        ],
        penalties: [
            {
                violation: 'Operating without a valid (renewed) Trade Licence',
                penalty: 'Fine of ₹2,000 – ₹10,000 and potential closure notice from the municipal authority. Repeated offences may lead to permanent cancellation of the licence.',
            },
            {
                violation: 'Late renewal beyond the prescribed grace period',
                penalty: 'Late fee of ₹50 – ₹500 per month of delay, depending on the municipal corporation. Accumulated late fees can significantly increase the total renewal cost.',
            },
            {
                violation: 'Operating a different trade or business activity than what is specified in the licence',
                penalty: 'Fine of ₹5,000 – ₹25,000 and mandatory cessation of the unauthorized activity. The licence may be suspended until the correct trade category is applied for and approved.',
            },
            {
                violation: 'Failure to display the Trade Licence at the business premises',
                penalty: 'Fine of ₹500 – ₹2,000 per instance. Municipal inspectors can issue spot fines during routine or surprise inspections.',
            },
            {
                violation: 'Providing false or misleading information in the renewal application',
                penalty: 'Cancellation of the trade licence, fine of up to ₹50,000, and potential prosecution under the relevant Municipal Corporation Act. The business may be blacklisted from obtaining a new licence.',
            },
        ],
        advantages: [
            {
                icon: '✅',
                title: 'Continued Legal Compliance',
                desc: 'A renewed trade licence ensures your business operates within the legal framework of the Municipal Corporation Act, avoiding fines, closure orders, and legal proceedings.',
            },
            {
                icon: '🛡️',
                title: 'Protection Against Penalties',
                desc: 'Timely renewal protects your business from late fees, penalty charges, and enforcement actions that can disrupt operations and damage your reputation.',
            },
            {
                icon: '🏪',
                title: 'Uninterrupted Business Operations',
                desc: 'A valid trade licence allows your business to operate without disruption — municipal authorities cannot issue closure notices or seal premises with a current licence.',
            },
            {
                icon: '🤝',
                title: 'Enhanced Business Credibility',
                desc: 'A current and valid trade licence boosts trust among customers, vendors, and financial institutions — it demonstrates that your business is legitimate, compliant, and professionally managed.',
            },
            {
                icon: '🏦',
                title: 'Easier Access to Bank Loans & Credit',
                desc: 'Banks and financial institutions often require a valid trade licence as part of the KYC and loan documentation process. A renewed licence facilitates smooth loan applications and credit approvals.',
            },
            {
                icon: '📋',
                title: 'Eligibility for Government Tenders & Contracts',
                desc: 'Many government tenders and procurement processes mandate a valid trade licence. Timely renewal ensures your business remains eligible to bid on lucrative government contracts.',
            },
            {
                icon: '📈',
                title: 'Support for Business Expansion',
                desc: 'A consistently renewed trade licence creates a clean compliance track record, making it easier to apply for additional licences, expand to new locations, or upgrade your business category.',
            },
            {
                icon: '💼',
                title: 'Smooth GST & Tax Compliance',
                desc: 'A valid trade licence is often cross-referenced during GST registration, income tax assessments, and other regulatory audits. Keeping it renewed avoids discrepancies in your business records.',
            },
            {
                icon: '🔄',
                title: 'Hassle-Free Renewal with Your Professional',
                desc: 'Your Professional handles the entire renewal process — from document collection and form filing to fee payment and follow-ups — so you can focus on running your business without dealing with municipal paperwork.',
            },
            {
                icon: '⏰',
                title: 'Proactive Renewal Reminders',
                desc: 'Your Professional sends timely reminders before your licence expires, ensuring you never miss a renewal deadline and always stay ahead of compliance requirements.',
            },
        ],
        disadvantages: [
            'The renewal fee varies significantly across municipal corporations, making it difficult for multi-location businesses to budget uniformly for renewals across different cities.',
            'Municipal office processes can be slow and bureaucratic — renewals that should take 7–15 days may stretch to 30–45 days in some jurisdictions due to backlogs and administrative delays.',
            'Premises inspection requirements for certain trade categories can be intrusive and time-consuming, especially for businesses that require fire safety or pollution control clearances.',
            'Late renewal penalties accumulate quickly and can become disproportionately expensive, particularly for small businesses that miss the deadline due to lack of awareness.',
            'Change of trade activity or premises during renewal requires additional documentation and approvals, significantly increasing the complexity and time required for the renewal process.',
            'Online renewal portals of many municipalities are outdated, unreliable, or not user-friendly — frequent technical glitches and server downtime can delay the filing process.',
        ],
        faqs: [
            {
                q: 'What is a Trade Licence and why does it need to be renewed?',
                a: 'A Trade Licence is a permit issued by the local municipal corporation that authorizes a business to operate a specific trade or profession within its jurisdiction. Under the Municipal Corporation Acts of Indian states, trade licences are typically valid for one financial year (April to March) and must be renewed annually to maintain legal authorization for business operations. Failure to renew results in the licence lapsing, making the business operation illegal.',
            },
            {
                q: 'When should I apply for Trade Licence Renewal?',
                a: 'You should apply for renewal before the expiry of the current licence — ideally 30 to 60 days before 31st March of each financial year. Most municipal corporations provide a grace period of 30 to 90 days after expiry, but late fees are applicable for renewals filed after the due date. Your Professional sends proactive reminders to ensure timely filing.',
            },
            {
                q: 'What happens if I do not renew my Trade Licence on time?',
                a: 'If you fail to renew your trade licence within the prescribed period, you will be liable to pay late fees (typically ₹50–₹500 per month of delay). Continued non-renewal can result in the municipal authority issuing a closure notice, sealing the business premises, or imposing fines up to ₹10,000. In extreme cases, prosecution under the Municipal Corporation Act may follow.',
            },
            {
                q: 'Can I renew my Trade Licence online?',
                a: 'Yes, many municipal corporations across India — including those in Delhi, Mumbai, Bangalore, Chennai, Kolkata, and Hyderabad — have launched online portals for trade licence renewal. However, some smaller municipalities still require physical submission. Your Professional handles both online and offline renewals depending on your municipal jurisdiction.',
            },
            {
                q: 'What documents are required for Trade Licence Renewal?',
                a: 'The key documents include a copy of the existing trade licence, identity proof (Aadhaar/PAN), premises documents (rent agreement or ownership deed), latest property tax receipt, GST registration certificate, and compliance certificates (fire safety, health, pollution — as applicable). If there is a change in business activity or premises, additional documents are required.',
            },
            {
                q: 'How much does Trade Licence Renewal cost?',
                a: 'The renewal fee depends on the type of trade, area of premises, and the municipal corporation. For small shops (below 500 sq. ft.), fees typically range from ₹500 to ₹2,000 per year. Medium establishments pay ₹2,000 to ₹5,000, and large commercial premises may pay ₹5,000 to ₹25,000 per year. Your Professional charges a service fee starting from ₹1,999 for end-to-end renewal assistance.',
            },
            {
                q: 'Can I renew a Trade Licence if my business activity has changed?',
                a: 'Yes, but you must declare the change in business activity in your renewal application and provide any additional NOCs or approvals required for the new trade category. The municipal authority may conduct a fresh inspection of the premises to verify compliance with regulations applicable to the new activity. Your Professional assists with all documentation for activity changes.',
            },
            {
                q: 'Is a physical inspection required for every Trade Licence Renewal?',
                a: 'Not necessarily. For standard annual renewals where there are no changes in business activity, premises, or ownership, many municipal corporations waive the inspection requirement. However, for renewals involving changes, first-time renewals in certain categories, or businesses dealing in food, hazardous materials, or public entertainment, a physical inspection is generally mandatory.',
            },
            {
                q: 'What if my Trade Licence has been expired for more than one year?',
                a: 'If your trade licence has been expired for an extended period, the renewal process may be treated as a fresh application by some municipal corporations. You may need to submit the complete set of documents as required for a new licence, pay accumulated late fees, and undergo a premises inspection. Your Professional can assess your specific situation and advise the most efficient path to restore your licence.',
            },
            {
                q: 'Can I renew a Trade Licence for multiple years at once?',
                a: 'Some municipal corporations allow multi-year renewal (typically 2–3 years) with upfront payment of fees for the entire period. However, this facility is not universally available and depends on the policies of the specific municipal body. Your Professional can check with your local authority to determine if multi-year renewal is available in your jurisdiction.',
            },
            {
                q: 'How does Your Professional help with Trade Licence Renewal?',
                a: 'Your Professional provides end-to-end assistance — from tracking renewal deadlines and collecting documents to filling out application forms, paying fees, coordinating with the municipal authority, handling queries and inspections, and delivering the renewed licence certificate to you. Our team handles the entire process so you can focus on running your business without worrying about compliance.',
            },
            {
                q: 'Is Trade Licence Renewal mandatory for home-based businesses?',
                a: 'Yes, if your home-based business was issued a trade licence by the local municipal authority, it must be renewed annually like any other business. Even small home-based operations such as tuition centres, tailoring shops, beauty parlours, and food businesses operating from residential premises are required to maintain a valid trade licence to operate legally.',
            },
        ],
        cta: {
            heading: 'Renew Your Trade Licence with Your Professional',
            subheading:
                'Don\'t risk penalties or business disruption — let our experts handle your Trade Licence Renewal quickly, accurately, and affordably. Get started today!',
            features: [
                'End-to-end renewal assistance from document collection to licence delivery',
                'Proactive renewal reminders so you never miss a deadline',
                'Expert handling of municipal queries, inspections, and follow-ups',
                'Affordable pricing starting at just ₹1,999 for complete renewal service',
            ],
        },
    },
};
