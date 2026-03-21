import type { RegistrationData } from './registrations';

export const BIS_REGISTRATIONS: Record<string, RegistrationData> = {
    'bis-certification': {
        slug: 'bis-certification',
        title: 'BIS Certification Online in India',
        subtitle:
            'Obtain BIS Certification for your products with expert guidance from Your Professional — end-to-end support for ISI Mark, application filing, factory inspections, and Bureau of Indian Standards compliance.',
        heroFeatures: [
            'ISI Mark Certification Under BIS Act, 2016',
            'Applicable to 300+ Products Under Mandatory & Voluntary Schemes',
            'Factory Inspection & Quality Assurance Support',
            'Trusted by Manufacturers & Importers Across India',
        ],
        overview: {
            heading: 'What is BIS Certification?',
            paragraphs: [
                'BIS Certification is a product certification scheme operated by the Bureau of Indian Standards (BIS) under the BIS Act, 2016 and the BIS (Conformity Assessment) Regulations, 2018. It ensures that products manufactured, imported, or sold in India conform to the relevant Indian Standards (IS) for quality, safety, and reliability. The iconic ISI Mark — granted upon successful certification — is one of the most recognized quality marks in the country.',
                'The certification applies to a wide range of products including electronics, electrical appliances, cement, steel, packaged drinking water, household goods, and many more. For certain categories, BIS Certification is mandatory — meaning no manufacturer or importer can sell those products in India without bearing the ISI Mark. For other categories, manufacturers may voluntarily obtain the certification to demonstrate quality compliance and build consumer trust.',
                'The process involves submitting an application to BIS, undergoing a factory inspection and product testing at BIS-recognized laboratories, and maintaining ongoing quality standards through periodic surveillance. Your Professional simplifies the entire BIS Certification journey — from application preparation and document filing to inspection coordination and license issuance — so your products reach the Indian market with full regulatory approval.',
            ],
            highlights: [
                { icon: '🏭', text: 'Product certification scheme under BIS Act, 2016 for manufacturers and importers' },
                { icon: '✅', text: 'ISI Mark granted upon certification — mandatory for 300+ product categories' },
                { icon: '🔬', text: 'Involves factory inspection and product testing at BIS-recognized laboratories' },
                { icon: '📅', text: 'License valid for 1–2 years with annual surveillance and renewal' },
            ],
        },
        types: [
            {
                title: 'Mandatory BIS Certification (Compulsory Registration)',
                desc: 'Required for products notified under Schedule II of BIS Act — includes electronics, IT products, cement, steel, LPG cylinders, and more. No sale permitted in India without ISI Mark.',
            },
            {
                title: 'Voluntary BIS Certification',
                desc: 'Manufacturers can voluntarily certify products to demonstrate adherence to Indian Standards. Commonly sought for FMCG, textiles, agricultural products, and consumer goods.',
            },
            {
                title: 'BIS CRS (Compulsory Registration Scheme)',
                desc: 'Applies to electronics and IT products under the Electronics and IT Goods (Requirements for Compulsory Registration) Order, 2012 — a separate track from the ISI Mark scheme.',
            },
            {
                title: 'BIS FMCS (Foreign Manufacturers Certification Scheme)',
                desc: 'Enables foreign manufacturers to obtain BIS Certification for products manufactured outside India and exported to the Indian market.',
            },
        ],
        eligibility: [
            'Indian manufacturers producing goods that fall under mandatory or voluntary BIS certification categories.',
            'Foreign manufacturers exporting products to India that require BIS Certification under FMCS.',
            'Importers dealing in products notified under the Compulsory Registration Scheme (CRS) for electronics and IT goods.',
            'The manufacturing unit must have adequate infrastructure, testing equipment, and quality control systems in place.',
            'The applicant must have a valid business registration — proprietorship, partnership, LLP, or company under Indian law.',
            'Products must conform to the relevant Indian Standard (IS) specification as prescribed by BIS.',
            'The manufacturer must agree to BIS surveillance inspections and maintain quality consistency post-certification.',
        ],
        documents: [
            {
                category: 'Identity & Business Documents',
                items: [
                    'PAN Card and Aadhaar Card of the proprietor/partners/directors',
                    'Certificate of Incorporation / Partnership Deed / Proprietorship Declaration',
                    'GST Registration Certificate',
                    'Valid Trade License or Udyam Registration Certificate',
                ],
            },
            {
                category: 'Factory & Manufacturing Documents',
                items: [
                    'Factory layout plan showing production area, testing lab, and storage',
                    'List of machinery and testing equipment with calibration records',
                    'Quality control process documentation and manufacturing flow chart',
                    'Ownership proof or lease agreement of the factory premises',
                ],
            },
            {
                category: 'Product & Technical Documents',
                items: [
                    'Product test reports from BIS-recognized / NABL-accredited laboratory',
                    'Relevant Indian Standard (IS) specification number for the product',
                    'Raw material sourcing details and supplier quality certificates',
                    'Product samples as required by BIS for independent testing',
                ],
            },
        ],
        process: [
            {
                title: 'Identify Applicable Indian Standard',
                desc: 'Determine the relevant IS specification for your product and verify whether BIS Certification is mandatory or voluntary for your product category.',
                time: '1–2 days',
            },
            {
                title: 'Prepare Application & Documentation',
                desc: 'Compile all required documents including business registration, factory layout, machinery list, quality control processes, and product specifications as per BIS guidelines.',
                time: '3–5 days',
            },
            {
                title: 'Submit Application on BIS Manak Online Portal',
                desc: 'File the application on the BIS Manak Online portal along with the prescribed fees, supporting documents, and product test reports from a recognized laboratory.',
                time: '1–2 days',
            },
            {
                title: 'BIS Preliminary Review',
                desc: 'BIS officers review the submitted application and documents for completeness. If any discrepancy or deficiency is found, the applicant is notified to rectify within the stipulated time.',
                time: '7–15 days',
            },
            {
                title: 'Factory Inspection by BIS Officers',
                desc: 'A team of BIS officers visits the manufacturing premises to inspect production processes, quality control mechanisms, testing facilities, and overall compliance with the relevant Indian Standard.',
                time: '15–30 days',
            },
            {
                title: 'Product Testing at BIS-Recognized Lab',
                desc: 'Product samples are drawn during the factory inspection and sent to a BIS-recognized laboratory for independent testing against the applicable IS specification.',
                time: '15–30 days',
            },
            {
                title: 'Grant of BIS License & ISI Mark',
                desc: 'Upon satisfactory inspection and test results, BIS grants the certification license and permits the manufacturer to use the ISI Mark on the certified products.',
                time: '30–60 days total',
            },
            {
                title: 'Ongoing Surveillance & Renewal',
                desc: 'BIS conducts periodic surveillance inspections and market sample testing to ensure continued compliance. The license must be renewed before expiry to maintain certification.',
                time: 'Annual',
            },
        ],
        fees: [
            { item: 'BIS Application Fee (per product)', cost: '₹1,000' },
            { item: 'BIS Marking Fee (annual)', cost: '₹1,000 – ₹5,000 (varies by product)' },
            { item: 'Testing Fee at BIS-Recognized Lab', cost: '₹5,000 – ₹50,000 (varies by product)' },
            { item: 'Factory Inspection Charges', cost: 'As per BIS schedule (borne by applicant)' },
            { item: 'Professional Service Charges (Your Professional)', cost: '₹14,999 onwards' },
        ],
        penalties: [
            {
                violation: 'Selling products without mandatory BIS Certification',
                penalty: 'Imprisonment up to 2 years and/or fine up to ₹5,00,000 under BIS Act, 2016',
            },
            {
                violation: 'Misuse of ISI Mark or Standard Mark',
                penalty: 'Imprisonment up to 1 year and/or fine up to ₹2,00,000 under BIS Act, 2016',
            },
            {
                violation: 'Failure to comply with BIS surveillance requirements',
                penalty: 'Suspension or cancellation of BIS License and recall of certified products',
            },
            {
                violation: 'Selling sub-standard products bearing ISI Mark',
                penalty: 'Imprisonment up to 2 years, fine up to ₹5,00,000, and seizure of products',
            },
        ],
        advantages: [
            {
                icon: '✅',
                title: 'Legal Compliance',
                desc: 'Meet mandatory certification requirements under the BIS Act, 2016 and avoid imprisonment and fines for selling non-certified products.',
            },
            {
                icon: '🛡️',
                title: 'Consumer Trust & Safety',
                desc: 'The ISI Mark is one of India\'s most trusted quality symbols — it assures consumers that the product meets prescribed safety and quality standards.',
            },
            {
                icon: '📈',
                title: 'Market Access & Competitive Edge',
                desc: 'BIS-certified products gain wider acceptance across retail chains, e-commerce platforms, government procurement, and export markets.',
            },
            {
                icon: '🏛️',
                title: 'Government Tender Eligibility',
                desc: 'Many government tenders and procurement programs mandate BIS Certification, making it essential for businesses targeting public-sector contracts.',
            },
            {
                icon: '🌍',
                title: 'International Credibility',
                desc: 'BIS Certification demonstrates adherence to internationally benchmarked quality standards, enhancing your brand\'s reputation in global markets.',
            },
            {
                icon: '🤝',
                title: 'Supply Chain Confidence',
                desc: 'Distributors, wholesalers, and retailers prefer stocking ISI-marked products due to reduced risk of quality complaints and regulatory action.',
            },
            {
                icon: '📋',
                title: 'Quality Improvement',
                desc: 'The certification process drives manufacturers to implement robust quality control systems, resulting in consistently better products and reduced defect rates.',
            },
            {
                icon: '💰',
                title: 'Premium Pricing Potential',
                desc: 'BIS-certified products command better pricing in the market as consumers willingly pay a premium for quality-assured goods bearing the ISI Mark.',
            },
        ],
        faqs: [
            {
                q: 'What is BIS Certification and why is it important?',
                a: 'BIS Certification is a product quality certification issued by the Bureau of Indian Standards under the BIS Act, 2016. It is important because it ensures products sold in India meet prescribed safety and quality standards. For certain product categories, it is legally mandatory — selling without certification can lead to imprisonment and fines.',
            },
            {
                q: 'Which products require mandatory BIS Certification?',
                a: 'Over 300 product categories require mandatory BIS Certification, including cement, steel, LPG cylinders, electrical appliances, electronics, IT products, packaged drinking water, helmets, and many household goods. The complete list is notified under Schedule II of the BIS Act.',
            },
            {
                q: 'How long does it take to obtain BIS Certification?',
                a: 'The entire process — from application filing to license grant — typically takes 30 to 90 days depending on the product category, factory readiness, and testing timelines. Your Professional helps expedite the process with proper documentation and coordination.',
            },
            {
                q: 'What is the difference between ISI Mark and BIS CRS?',
                a: 'ISI Mark is the product certification scheme (also called BIS Product Certification Scheme) that involves factory inspection and ongoing surveillance. BIS CRS (Compulsory Registration Scheme) is specifically for electronics and IT products and involves type-testing at a BIS-recognized lab without mandatory factory inspection.',
            },
            {
                q: 'Can foreign manufacturers get BIS Certification?',
                a: 'Yes, foreign manufacturers can obtain BIS Certification through the Foreign Manufacturers Certification Scheme (FMCS). They must appoint an Authorized Indian Representative (AIR) and comply with BIS factory inspection and product testing requirements.',
            },
            {
                q: 'How long is a BIS License valid?',
                a: 'A BIS License is typically valid for 1 to 2 years, depending on the product category and the scheme. It must be renewed before expiry, and BIS conducts annual surveillance inspections to ensure continued compliance.',
            },
            {
                q: 'What happens if BIS Certification is not obtained for mandatory products?',
                a: 'Selling products that fall under mandatory BIS Certification without obtaining the ISI Mark is a criminal offence under the BIS Act, 2016. It can result in imprisonment of up to 2 years and/or a fine of up to ₹5,00,000. Products may also be seized and recalled.',
            },
            {
                q: 'How can Your Professional help with BIS Certification?',
                a: 'Your Professional provides end-to-end BIS Certification assistance — including identifying the applicable Indian Standard, preparing documentation, filing the application on the BIS Manak Online portal, coordinating factory inspections, facilitating product testing, and ensuring timely license issuance and renewal.',
            },
        ],
        cta: {
            heading: 'Get BIS Certification with Your Professional',
            subheading:
                'Expert guidance for ISI Mark certification — from application to license grant. Let Your Professional handle the complexity while you focus on manufacturing quality products.',
            features: [
                'Complete Application & Documentation Support',
                'Factory Inspection Preparation & Coordination',
                'Product Testing Facilitation at BIS-Recognized Labs',
                'License Renewal & Surveillance Compliance Assistance',
            ],
        },
    },

    'bis-certification-power-banks': {
        slug: 'bis-certification-power-banks',
        title: 'BIS Certification for Power Banks in India',
        subtitle:
            'Get mandatory BIS Certification for power banks with Your Professional — complete support for IS 16046 compliance, laboratory testing, CRS registration, and Bureau of Indian Standards approval.',
        heroFeatures: [
            'Mandatory Certification Under BIS CRS for Power Banks',
            'Compliance with IS 16046 (Part 1) Safety Standard',
            'Product Testing at BIS-Recognized NABL Labs',
            'Trusted by Power Bank Manufacturers & Importers Nationwide',
        ],
        overview: {
            heading: 'What is BIS Certification for Power Banks?',
            paragraphs: [
                'BIS Certification for Power Banks is a mandatory product safety certification required for manufacturing, importing, or selling portable power banks in India. Power banks fall under the Compulsory Registration Scheme (CRS) of the Bureau of Indian Standards and must comply with IS 16046 (Part 1): Secondary Lithium-Ion Cells and Batteries for Portable Applications — Safety Requirements. This standard governs the safety aspects of lithium-ion cells and battery packs used in power banks.',
                'The Ministry of Electronics and Information Technology (MeitY), through the Electronics and IT Goods (Requirements for Compulsory Registration) Order, has made it compulsory for all power banks sold in India to bear the BIS Standard Mark. This applies to both domestically manufactured and imported power banks. Non-compliant products cannot be sold, distributed, or stored for sale in the Indian market.',
                'The certification process involves getting the power bank tested at a BIS-recognized laboratory, submitting the test report along with the application on the BIS CRS portal, and obtaining the registration certificate. Your Professional handles the entire process — from identifying the correct IS standard and coordinating lab testing to filing the CRS application and obtaining the BIS registration number — ensuring your power banks are market-ready with full compliance.',
            ],
            highlights: [
                { icon: '🔋', text: 'Mandatory BIS CRS registration for all power banks sold in India' },
                { icon: '📋', text: 'Must comply with IS 16046 (Part 1) — Lithium-Ion Battery Safety Standard' },
                { icon: '🔬', text: 'Product testing required at BIS-recognized / NABL-accredited laboratory' },
                { icon: '⚖️', text: 'Non-compliance attracts seizure, penalties, and import restrictions' },
            ],
        },
        eligibility: [
            'Indian manufacturers producing portable power banks with lithium-ion cells or battery packs for the domestic market.',
            'Foreign manufacturers exporting power banks to India — must appoint an Authorized Indian Representative (AIR) for CRS registration.',
            'Importers bringing power banks into India for commercial sale, distribution, or resale.',
            'The power bank must use lithium-ion cells/batteries covered under IS 16046 (Part 1) safety specifications.',
            'The applicant must hold a valid business registration — proprietorship, partnership, LLP, or company.',
            'Test reports must be from a BIS-recognized or NABL-accredited laboratory within the validity period.',
            'Each model/variant of power bank requires a separate CRS registration.',
        ],
        documents: [
            {
                category: 'Identity & Business Documents',
                items: [
                    'PAN Card and Aadhaar Card of the proprietor/partners/directors',
                    'Certificate of Incorporation / Partnership Deed / GST Registration Certificate',
                    'Authorization letter from the foreign manufacturer (if applicant is importer or AIR)',
                    'Import Export Code (IEC) certificate for importers',
                ],
            },
            {
                category: 'Product & Technical Documents',
                items: [
                    'Detailed product datasheet with specifications — capacity (mAh), voltage, cell type, and dimensions',
                    'Product test report from a BIS-recognized / NABL-accredited laboratory as per IS 16046 (Part 1)',
                    'Circuit diagram and battery management system (BMS) documentation',
                    'Product photographs showing label, markings, and model number',
                ],
            },
            {
                category: 'Manufacturing & Compliance Documents',
                items: [
                    'Factory address proof and manufacturing unit details',
                    'Quality management system documentation (ISO 9001 preferred but not mandatory)',
                    'Cell/battery supplier details and cell-level test certificates',
                    'Declaration of conformity to IS 16046 (Part 1) signed by the manufacturer',
                ],
            },
        ],
        process: [
            {
                title: 'Identify Product Scope & Applicable Standard',
                desc: 'Confirm that your power bank falls under BIS CRS and must comply with IS 16046 (Part 1). Identify the specific model variants that require separate registration.',
                time: '1 day',
            },
            {
                title: 'Get Product Tested at BIS-Recognized Lab',
                desc: 'Submit power bank samples to a BIS-recognized or NABL-accredited laboratory for testing against IS 16046 (Part 1) parameters — including overcharge, short circuit, thermal abuse, and crush tests.',
                time: '15–30 days',
            },
            {
                title: 'Prepare Application & Documentation',
                desc: 'Compile all required documents including business registration, product datasheets, test reports, circuit diagrams, and manufacturer declarations as per BIS CRS guidelines.',
                time: '2–3 days',
            },
            {
                title: 'Submit CRS Application on BIS Portal',
                desc: 'File the Compulsory Registration Scheme application on the BIS online portal with the prescribed fee, test report, and supporting documents.',
                time: '1 day',
            },
            {
                title: 'BIS Application Review & Verification',
                desc: 'BIS officers review the submitted application, test reports, and documentation. If discrepancies are found, a deficiency letter is issued and the applicant must respond within the stipulated period.',
                time: '7–15 days',
            },
            {
                title: 'Grant of CRS Registration Certificate',
                desc: 'Upon satisfactory review of documents and test reports, BIS issues the CRS Registration Certificate with a unique registration number that must be marked on the product and packaging.',
                time: '15–30 days total',
            },
            {
                title: 'Mark Products with BIS Registration Number',
                desc: 'Affix the BIS Standard Mark and registration number (R-xxxxxxxx) on all power bank units and retail packaging before placing them for sale in the Indian market.',
                time: 'Immediate',
            },
            {
                title: 'Renewal & Market Surveillance Compliance',
                desc: 'CRS registration is valid for 2 years. Renew before expiry and ensure ongoing compliance as BIS may conduct random market surveillance and sample testing.',
                time: 'Every 2 years',
            },
        ],
        fees: [
            { item: 'BIS CRS Application Fee (per product model)', cost: '₹1,000' },
            { item: 'Laboratory Testing Fee (IS 16046 Part 1)', cost: '₹30,000 – ₹80,000 (varies by lab)' },
            { item: 'BIS Registration Marking Fee (annual)', cost: '₹1,000' },
            { item: 'CRS Registration Renewal Fee (every 2 years)', cost: '₹1,000' },
            { item: 'Professional Service Charges (Your Professional)', cost: '₹9,999 onwards' },
        ],
        penalties: [
            {
                violation: 'Selling power banks without BIS CRS registration in India',
                penalty: 'Product seizure, import detention, and fine up to ₹5,00,000 under BIS Act, 2016',
            },
            {
                violation: 'Misusing or falsifying BIS Standard Mark on power banks',
                penalty: 'Imprisonment up to 1 year and/or fine up to ₹2,00,000 under BIS Act, 2016',
            },
            {
                violation: 'Importing non-BIS-certified power banks into India',
                penalty: 'Goods detained at customs, re-export ordered, and penalty imposed by DGFT/Customs authorities',
            },
            {
                violation: 'Selling power banks not conforming to IS 16046 safety standards',
                penalty: 'Cancellation of CRS registration, product recall, and prosecution under BIS Act',
            },
        ],
        advantages: [
            {
                icon: '✅',
                title: 'Regulatory Compliance',
                desc: 'Meet the mandatory BIS CRS requirement for power banks and legally sell your products in India without risk of seizure or penalties.',
            },
            {
                icon: '🛡️',
                title: 'Consumer Safety Assurance',
                desc: 'IS 16046 testing ensures your power banks meet critical safety parameters — overcharge protection, short circuit resistance, thermal stability, and crush resistance.',
            },
            {
                icon: '🛒',
                title: 'E-Commerce Market Access',
                desc: 'Major platforms like Amazon, Flipkart, and Myntra require BIS CRS certification before listing power banks — certification unlocks online sales channels.',
            },
            {
                icon: '🏪',
                title: 'Retail & Distribution Readiness',
                desc: 'Offline retailers, distributors, and wholesalers across India demand BIS-certified power banks to avoid legal liability and ensure consumer safety.',
            },
            {
                icon: '📦',
                title: 'Smooth Customs Clearance',
                desc: 'BIS CRS registration ensures hassle-free import clearance at Indian customs — non-certified power banks are detained and may be re-exported at the importer\'s cost.',
            },
            {
                icon: '📈',
                title: 'Brand Credibility & Trust',
                desc: 'The BIS Standard Mark on your power bank signals quality and safety to Indian consumers, building brand loyalty and repeat purchases.',
            },
            {
                icon: '🏛️',
                title: 'Government Procurement Eligibility',
                desc: 'BIS-certified power banks are eligible for inclusion in government procurement and GeM (Government e-Marketplace) listings.',
            },
            {
                icon: '🌍',
                title: 'Export Quality Benchmark',
                desc: 'IS 16046 is aligned with IEC 62133 international standards, making BIS-certified power banks suitable for export to markets with similar requirements.',
            },
        ],
        faqs: [
            {
                q: 'Is BIS Certification mandatory for power banks in India?',
                a: 'Yes, BIS Certification under the Compulsory Registration Scheme (CRS) is mandatory for all power banks manufactured in or imported into India. Power banks must comply with IS 16046 (Part 1) and bear the BIS Standard Mark before they can be sold in the Indian market.',
            },
            {
                q: 'Which Indian Standard applies to power banks?',
                a: 'Power banks must comply with IS 16046 (Part 1): Secondary Lithium-Ion Cells and Batteries for Portable Applications — Safety Requirements. This standard covers safety tests including overcharge, short circuit, thermal abuse, crush, and impact testing.',
            },
            {
                q: 'Can imported power banks be sold without BIS Certification?',
                a: 'No. All power banks — whether manufactured in India or imported — must have valid BIS CRS registration before sale. Imported power banks without BIS certification are detained at customs and may be re-exported at the importer\'s expense.',
            },
            {
                q: 'How long does BIS CRS registration for power banks take?',
                a: 'The entire process typically takes 30 to 60 days — including laboratory testing (15–30 days) and BIS application processing (15–30 days). Your Professional helps streamline the process with proper documentation and lab coordination.',
            },
            {
                q: 'Do I need separate BIS registration for each power bank model?',
                a: 'Yes, each model/variant of power bank with different specifications (capacity, cell type, dimensions, or BMS configuration) requires a separate CRS registration. However, minor cosmetic variations (color, branding) on the same model may be covered under one registration.',
            },
            {
                q: 'What is the validity of BIS CRS registration for power banks?',
                a: 'BIS CRS registration for power banks is valid for 2 years from the date of issue. It must be renewed before expiry by submitting a renewal application with fresh test reports if required by BIS.',
            },
            {
                q: 'Can foreign manufacturers directly apply for BIS CRS?',
                a: 'Foreign manufacturers must appoint an Authorized Indian Representative (AIR) to apply for BIS CRS registration on their behalf. The AIR is responsible for all regulatory compliance, documentation, and communication with BIS in India.',
            },
            {
                q: 'How can Your Professional help with BIS Certification for power banks?',
                a: 'Your Professional provides complete BIS CRS registration support for power banks — including identifying applicable standards, coordinating laboratory testing, preparing documentation, filing the CRS application, tracking the application status, and handling renewal and compliance requirements.',
            },
        ],
        cta: {
            heading: 'Get BIS Certification for Power Banks with Your Professional',
            subheading:
                'Expert support for mandatory CRS registration — from IS 16046 lab testing to BIS approval. Sell your power banks legally across India with full compliance.',
            features: [
                'IS 16046 Laboratory Testing Coordination',
                'Complete CRS Application & Documentation Filing',
                'BIS Registration Number & Marking Guidance',
                'Renewal & Market Surveillance Compliance Support',
            ],
        },
    },

    'bis-fmcs-certification': {
        slug: 'bis-fmcs-certification',
        title: 'BIS FMCS Certification Online in India',
        subtitle:
            'Obtain BIS Foreign Manufacturers Certification Scheme (FMCS) approval with Your Professional — comprehensive support for overseas manufacturers to certify and export products to the Indian market.',
        heroFeatures: [
            'Foreign Manufacturers Certification Under BIS Act, 2016',
            'Enables Export of ISI-Marked Products to Indian Market',
            'Factory Inspection at Overseas Manufacturing Premises',
            'Trusted by Global Manufacturers Exporting to India',
        ],
        overview: {
            heading: 'What is BIS FMCS Certification?',
            paragraphs: [
                'BIS FMCS (Foreign Manufacturers Certification Scheme) is a product certification scheme operated by the Bureau of Indian Standards that allows foreign manufacturers — based outside India — to obtain BIS Certification for their products and legally export them to the Indian market bearing the ISI Mark. The scheme was introduced under the BIS (Conformity Assessment) Regulations, 2018, read with the BIS Act, 2016, to ensure that imported products meet the same quality and safety standards as domestically manufactured goods.',
                'Under FMCS, the foreign manufacturer must appoint an Authorized Indian Representative (AIR) — a legally registered entity in India — who acts as the liaison with BIS for all regulatory matters. The certification process involves submitting the application through the AIR, getting the product tested at a BIS-recognized laboratory, and undergoing a factory inspection at the overseas manufacturing premises by a BIS officer team. Upon satisfactory compliance, BIS grants the license to use the ISI Mark.',
                'FMCS is critical for foreign manufacturers in sectors where BIS Certification is mandatory — such as cement, steel, electronics, electrical appliances, and safety equipment. Without FMCS certification, imported products cannot be sold in India for these categories. Your Professional provides end-to-end FMCS support — from AIR appointment and documentation to inspection coordination and license management — ensuring foreign manufacturers gain seamless access to the Indian market.',
            ],
            highlights: [
                { icon: '🌍', text: 'Enables foreign manufacturers to certify products for the Indian market' },
                { icon: '🤝', text: 'Requires appointment of an Authorized Indian Representative (AIR)' },
                { icon: '🏭', text: 'BIS officers conduct factory inspection at overseas manufacturing premises' },
                { icon: '✅', text: 'Grants ISI Mark license — same quality standard as domestic manufacturers' },
            ],
        },
        types: [
            {
                title: 'FMCS for Mandatory Product Categories',
                desc: 'Required for foreign manufacturers exporting products that fall under BIS mandatory certification — such as cement, steel, electronics, electrical equipment, helmets, and LPG cylinders.',
            },
            {
                title: 'FMCS for Voluntary Product Categories',
                desc: 'Foreign manufacturers can voluntarily obtain BIS Certification to demonstrate quality conformity and gain a competitive edge in the Indian market for non-mandatory product categories.',
            },
        ],
        eligibility: [
            'The applicant must be a foreign manufacturer with an established manufacturing facility outside India.',
            'The manufacturer must appoint an Authorized Indian Representative (AIR) — a legal entity registered in India — to act as the liaison with BIS.',
            'The product to be certified must conform to the relevant Indian Standard (IS) specification prescribed by BIS.',
            'The overseas factory must have adequate quality control infrastructure, testing equipment, and documented quality management systems.',
            'Test reports from a BIS-recognized laboratory or a laboratory accredited by an ILAC MRA signatory body must be submitted.',
            'The foreign manufacturer must agree to BIS factory inspections at the overseas manufacturing premises, with all inspection expenses borne by the applicant.',
            'The AIR must furnish a bank guarantee or fixed deposit as security to BIS as per the prescribed amount.',
        ],
        documents: [
            {
                category: 'Foreign Manufacturer Documents',
                items: [
                    'Certificate of Incorporation or business registration of the foreign manufacturing entity',
                    'Factory address proof and manufacturing unit layout plan',
                    'Quality management system certificates (ISO 9001 or equivalent)',
                    'Product catalogue, specifications, and technical datasheets',
                ],
            },
            {
                category: 'Authorized Indian Representative (AIR) Documents',
                items: [
                    'Certificate of Incorporation / Partnership Deed / GST Registration of the AIR entity',
                    'PAN Card and Aadhaar Card of the AIR\'s authorized signatory',
                    'Authorization letter / agreement between the foreign manufacturer and AIR',
                    'Bank guarantee or fixed deposit receipt as prescribed by BIS',
                ],
            },
            {
                category: 'Product & Technical Documents',
                items: [
                    'Product test reports from a BIS-recognized or ILAC MRA-accredited laboratory',
                    'Relevant Indian Standard (IS) specification number and compliance details',
                    'Raw material sourcing records and supplier quality certificates',
                    'Product samples for BIS independent testing (as required)',
                ],
            },
        ],
        process: [
            {
                title: 'Appoint Authorized Indian Representative (AIR)',
                desc: 'The foreign manufacturer must appoint a legally registered Indian entity as the AIR. The AIR acts as the point of contact for BIS and is responsible for all regulatory interactions, documentation, and compliance in India.',
                time: '5–10 days',
            },
            {
                title: 'Identify Applicable Indian Standard & Product Scope',
                desc: 'Determine the relevant IS specification for the product to be exported to India. Verify whether the product falls under mandatory or voluntary BIS certification categories.',
                time: '1–2 days',
            },
            {
                title: 'Get Product Tested at Recognized Laboratory',
                desc: 'Submit product samples for testing at a BIS-recognized laboratory in India or a laboratory accredited by an ILAC MRA signatory body in the manufacturer\'s country.',
                time: '15–30 days',
            },
            {
                title: 'Prepare & Submit FMCS Application',
                desc: 'The AIR submits the FMCS application on the BIS Manak Online portal along with the prescribed fee, test reports, factory details, AIR documents, and bank guarantee.',
                time: '3–5 days',
            },
            {
                title: 'BIS Application Review & Scrutiny',
                desc: 'BIS officers scrutinize the application, test reports, and documentation. If deficiencies are identified, the applicant is notified through the AIR to provide clarifications or additional documents.',
                time: '15–30 days',
            },
            {
                title: 'Factory Inspection at Overseas Premises',
                desc: 'A team of BIS officers travels to the foreign manufacturer\'s facility for a physical inspection of the production processes, quality control systems, testing infrastructure, and overall compliance with the Indian Standard.',
                time: '30–60 days',
            },
            {
                title: 'Grant of BIS FMCS License',
                desc: 'Upon satisfactory factory inspection and product test results, BIS grants the FMCS license. The foreign manufacturer is authorized to use the ISI Mark on the certified products exported to India.',
                time: '60–120 days total',
            },
            {
                title: 'Annual Surveillance & License Renewal',
                desc: 'BIS conducts annual surveillance inspections at the overseas factory and may test market samples in India. The license must be renewed before expiry with fresh test reports and continued compliance.',
                time: 'Annual',
            },
        ],
        fees: [
            { item: 'BIS FMCS Application Fee (per product)', cost: '₹1,00,000 (USD equivalent)' },
            { item: 'Factory Inspection Charges (BIS officer travel & expenses)', cost: '₹5,00,000 – ₹10,00,000 (varies by country)' },
            { item: 'Laboratory Testing Fee', cost: '₹10,000 – ₹1,00,000 (varies by product)' },
            { item: 'Annual Marking Fee', cost: '₹1,000 – ₹5,000 (varies by product)' },
            { item: 'Professional Service Charges (Your Professional)', cost: '₹49,999 onwards' },
        ],
        penalties: [
            {
                violation: 'Importing products without FMCS certification where mandatory',
                penalty: 'Goods detained at Indian customs, re-export at importer\'s cost, and fine up to ₹5,00,000',
            },
            {
                violation: 'Misuse of ISI Mark by foreign manufacturer without valid FMCS license',
                penalty: 'Imprisonment up to 2 years and/or fine up to ₹5,00,000 under BIS Act, 2016; blacklisting of manufacturer',
            },
            {
                violation: 'AIR failing to ensure compliance or furnish required information to BIS',
                penalty: 'Forfeiture of bank guarantee, cancellation of FMCS license, and legal action against AIR',
            },
            {
                violation: 'Non-conforming products found during market surveillance',
                penalty: 'Suspension of FMCS license, product recall, and prosecution of AIR and manufacturer',
            },
        ],
        advantages: [
            {
                icon: '🌍',
                title: 'Access to Indian Market',
                desc: 'FMCS certification opens the door to one of the world\'s largest consumer markets — enabling foreign manufacturers to legally sell ISI-marked products across India.',
            },
            {
                icon: '✅',
                title: 'Regulatory Compliance',
                desc: 'Meet India\'s mandatory product certification requirements and avoid customs detention, import bans, and penalties for non-compliance.',
            },
            {
                icon: '🛡️',
                title: 'Quality Parity with Domestic Manufacturers',
                desc: 'FMCS-certified products bear the same ISI Mark as domestically certified goods — ensuring a level playing field and equal consumer trust.',
            },
            {
                icon: '📈',
                title: 'Competitive Advantage',
                desc: 'ISI-marked imported products have a significant edge over non-certified imports, as Indian buyers and government agencies prefer BIS-certified goods.',
            },
            {
                icon: '🏛️',
                title: 'Government Procurement Access',
                desc: 'FMCS-certified products are eligible for Indian government tenders, public procurement, and listing on the Government e-Marketplace (GeM).',
            },
            {
                icon: '🤝',
                title: 'Supply Chain Integration',
                desc: 'Indian distributors, retailers, and e-commerce platforms readily accept FMCS-certified products, enabling faster supply chain integration and market penetration.',
            },
            {
                icon: '📦',
                title: 'Hassle-Free Customs Clearance',
                desc: 'Products with valid FMCS certification and ISI Mark enjoy smooth customs clearance at Indian ports without risk of detention or rejection.',
            },
            {
                icon: '💰',
                title: 'Long-Term Market Investment',
                desc: 'FMCS certification represents a strategic investment for foreign manufacturers seeking sustained presence and growth in the Indian market.',
            },
        ],
        faqs: [
            {
                q: 'What is BIS FMCS and who needs it?',
                a: 'BIS FMCS (Foreign Manufacturers Certification Scheme) is a certification scheme that allows manufacturers based outside India to obtain BIS Certification for their products. It is needed by any foreign manufacturer who wants to export products to India that fall under mandatory or voluntary BIS certification categories.',
            },
            {
                q: 'What is an Authorized Indian Representative (AIR)?',
                a: 'An AIR is a legally registered entity in India appointed by the foreign manufacturer to act as the liaison with BIS. The AIR handles all regulatory documentation, application filing, communication with BIS, and is responsible for ensuring ongoing compliance of the certified products in India.',
            },
            {
                q: 'Does BIS conduct factory inspection at overseas premises?',
                a: 'Yes, BIS sends a team of officers to the foreign manufacturer\'s factory for a physical inspection. The inspection covers production processes, quality control systems, testing facilities, and overall compliance with the relevant Indian Standard. All travel and inspection expenses are borne by the applicant.',
            },
            {
                q: 'How long does the BIS FMCS certification process take?',
                a: 'The FMCS process typically takes 60 to 120 days from application submission to license grant. The timeline depends on laboratory testing duration, BIS application review, and scheduling of the overseas factory inspection. Your Professional helps minimize delays with thorough documentation and proactive coordination.',
            },
            {
                q: 'Is a bank guarantee required for FMCS?',
                a: 'Yes, the AIR must furnish a bank guarantee or fixed deposit to BIS as a security deposit. The amount is prescribed by BIS and serves as a guarantee for the quality and safety compliance of the imported certified products.',
            },
            {
                q: 'Can one AIR represent multiple foreign manufacturers?',
                a: 'Yes, a single AIR can represent multiple foreign manufacturers for different products. However, the AIR must maintain separate compliance records and bank guarantees for each manufacturer and each product category.',
            },
            {
                q: 'What happens if the overseas factory fails the BIS inspection?',
                a: 'If the factory inspection reveals non-conformities, BIS provides an opportunity to rectify the deficiencies. A re-inspection is scheduled after the manufacturer addresses the issues. The FMCS license is not granted until all non-conformities are resolved to BIS satisfaction.',
            },
            {
                q: 'How can Your Professional assist with BIS FMCS Certification?',
                a: 'Your Professional offers comprehensive FMCS support — from AIR appointment and documentation to lab testing coordination, BIS application filing, overseas inspection preparation, and ongoing surveillance compliance — ensuring foreign manufacturers achieve smooth and timely certification for the Indian market.',
            },
        ],
        cta: {
            heading: 'Get BIS FMCS Certification with Your Professional',
            subheading:
                'Expert assistance for foreign manufacturers — from AIR appointment and lab testing to BIS overseas inspection and ISI Mark license. Enter the Indian market with confidence.',
            features: [
                'Authorized Indian Representative (AIR) Appointment Support',
                'Complete FMCS Application & Documentation Filing',
                'Overseas Factory Inspection Preparation & Coordination',
                'Annual Surveillance & License Renewal Management',
            ],
        },
    },

    'bis-certification-toys': {
        slug: 'bis-certification-toys',
        title: 'BIS Certification for Toys in India',
        subtitle:
            'Get mandatory BIS Certification for toys with Your Professional — complete support for IS 9873 compliance, safety testing, ISI Mark licensing, and Bureau of Indian Standards approval for toy manufacturers and importers.',
        heroFeatures: [
            'Mandatory ISI Mark Under Toys (Quality Control) Order, 2020',
            'Compliance with IS 9873 Safety Standards for Toys',
            'Safety Testing at BIS-Recognized Laboratories',
            'Trusted by Toy Manufacturers & Importers Across India',
        ],
        overview: {
            heading: 'What is BIS Certification for Toys?',
            paragraphs: [
                'BIS Certification for Toys is a mandatory product safety certification required for manufacturing, importing, or selling toys in India. The Ministry of Commerce and Industry, through the Toys (Quality Control) Order, 2020, made it compulsory for all toys sold in India to conform to Indian Safety Standards and bear the ISI Mark issued by the Bureau of Indian Standards. This order covers a wide range of toy categories — including soft toys, plastic toys, electronic toys, ride-on toys, and activity toys — and aims to protect children from unsafe or hazardous toy products.',
                'Toys must comply with the IS 9873 series of standards, which covers safety aspects such as mechanical and physical properties, flammability, migration of certain elements (heavy metals), and electrical safety for battery-operated toys. Additionally, toys must comply with IS 15644 for phthalate content limits to protect children from harmful chemicals. The certification involves rigorous laboratory testing, factory inspection by BIS officers, and ongoing surveillance to ensure continued compliance.',
                'The order applies to both domestic manufacturers and importers — no toy can be sold, distributed, or stored for sale in India without a valid BIS license bearing the ISI Mark. Your Professional provides comprehensive BIS Certification support for toys — from identifying applicable IS standards and coordinating lab testing to preparing documentation, facilitating factory inspections, and managing the license through its lifecycle.',
            ],
            highlights: [
                { icon: '🧸', text: 'Mandatory ISI Mark for all toys sold in India under Toys (Quality Control) Order, 2020' },
                { icon: '🔬', text: 'Testing required under IS 9873 series — mechanical, flammability, chemical, and electrical safety' },
                { icon: '🏭', text: 'Factory inspection by BIS officers for production quality verification' },
                { icon: '⚖️', text: 'Non-compliance attracts imprisonment up to 2 years and/or fine up to ₹5 lakhs' },
            ],
        },
        types: [
            {
                title: 'IS 9873 (Part 1) — Safety of Toys: Mechanical and Physical Properties',
                desc: 'Covers safety requirements for mechanical and physical properties of toys including small parts, sharp edges, sharp points, and entrapment hazards for children under 14 years.',
            },
            {
                title: 'IS 9873 (Part 2) — Safety of Toys: Flammability',
                desc: 'Specifies flammability requirements and test methods for toys — including cellulose nitrate prohibition and burn rate limits for plush toys, wigs, masks, and costumes.',
            },
            {
                title: 'IS 9873 (Part 3) — Safety of Toys: Migration of Certain Elements',
                desc: 'Covers limits and test methods for migration of eight heavy metals (lead, cadmium, chromium, arsenic, mercury, barium, selenium, antimony) from toy materials.',
            },
            {
                title: 'IS 9873 (Part 9) — Safety of Toys: Certain Phthalates in Toys',
                desc: 'Prescribes limits for specific phthalate plasticizers in toys and childcare articles that can be placed in the mouth, ensuring protection from endocrine-disrupting chemicals.',
            },
        ],
        eligibility: [
            'Indian manufacturers producing toys of any category — including soft toys, plastic toys, wooden toys, electronic toys, ride-on toys, and educational toys — for sale in the domestic market.',
            'Foreign manufacturers exporting toys to India must apply through the BIS Foreign Manufacturers Certification Scheme (FMCS) with an Authorized Indian Representative.',
            'Importers bringing toys into India for commercial sale, distribution, or resale.',
            'The toy manufacturer must have a proper manufacturing facility with adequate quality control systems, testing capabilities, and storage infrastructure.',
            'Toys must conform to all applicable parts of the IS 9873 series and IS 15644 as relevant to the toy category.',
            'Test reports must be obtained from BIS-recognized or NABL-accredited laboratories.',
            'The applicant must hold valid business registration and GST registration in India.',
        ],
        documents: [
            {
                category: 'Identity & Business Documents',
                items: [
                    'PAN Card and Aadhaar Card of the proprietor/partners/directors',
                    'Certificate of Incorporation / Partnership Deed / Proprietorship Declaration',
                    'GST Registration Certificate',
                    'Import Export Code (IEC) for importers',
                ],
            },
            {
                category: 'Factory & Manufacturing Documents',
                items: [
                    'Factory layout plan showing production area, raw material storage, finished goods area, and testing lab',
                    'List of machinery and testing equipment with calibration certificates',
                    'Quality control process documentation and manufacturing flow chart',
                    'Factory ownership proof or lease agreement with validity details',
                ],
            },
            {
                category: 'Product & Testing Documents',
                items: [
                    'Product test reports from BIS-recognized / NABL-accredited laboratory for all applicable IS 9873 parts',
                    'Product catalogue with age grading, material composition, and safety warnings',
                    'Raw material sourcing details and supplier certificates (especially for paints, plastics, and textiles)',
                    'Product samples as required by BIS for independent testing and verification',
                ],
            },
        ],
        process: [
            {
                title: 'Identify Applicable IS Standards for Your Toy Category',
                desc: 'Determine which parts of IS 9873 and IS 15644 apply to your specific toy type — mechanical safety, flammability, chemical migration, electrical safety, or phthalate limits.',
                time: '1–2 days',
            },
            {
                title: 'Get Toys Tested at BIS-Recognized Laboratory',
                desc: 'Submit toy samples to a BIS-recognized or NABL-accredited laboratory for testing against all applicable IS 9873 parts — including small parts test, flammability, heavy metal migration, and electrical safety.',
                time: '15–30 days',
            },
            {
                title: 'Prepare Documentation & Application',
                desc: 'Compile all required documents including business registration, factory layout, machinery list, quality control records, raw material details, and product test reports as per BIS guidelines.',
                time: '3–5 days',
            },
            {
                title: 'Submit Application on BIS Manak Online Portal',
                desc: 'File the BIS Product Certification application on the Manak Online portal with the prescribed fee, supporting documents, and laboratory test reports for all applicable IS standards.',
                time: '1–2 days',
            },
            {
                title: 'BIS Application Review & Scrutiny',
                desc: 'BIS officers review the application and documents for completeness and accuracy. If any deficiency is identified, the applicant is notified to provide additional information or rectified documents.',
                time: '7–15 days',
            },
            {
                title: 'Factory Inspection by BIS Officers',
                desc: 'A team of BIS officers visits the toy manufacturing facility to inspect production processes, raw material quality, testing infrastructure, quality control systems, and compliance with IS 9873 requirements.',
                time: '15–30 days',
            },
            {
                title: 'Grant of BIS License & ISI Mark for Toys',
                desc: 'Upon satisfactory factory inspection and product test results, BIS grants the certification license. The manufacturer is authorized to affix the ISI Mark on all certified toy products.',
                time: '45–90 days total',
            },
            {
                title: 'Ongoing Surveillance & Compliance',
                desc: 'BIS conducts periodic surveillance inspections at the factory and random market sample testing. The manufacturer must maintain quality standards and renew the license before expiry.',
                time: 'Annual',
            },
        ],
        fees: [
            { item: 'BIS Application Fee (per toy category)', cost: '₹1,000' },
            { item: 'Laboratory Testing Fee (all applicable IS 9873 parts)', cost: '₹20,000 – ₹1,00,000 (varies by toy type)' },
            { item: 'BIS Marking Fee (annual)', cost: '₹1,000 – ₹5,000 (varies by turnover)' },
            { item: 'Factory Inspection Charges', cost: 'As per BIS schedule (borne by applicant)' },
            { item: 'Professional Service Charges (Your Professional)', cost: '₹19,999 onwards' },
        ],
        penalties: [
            {
                violation: 'Manufacturing or selling toys without BIS ISI Mark in India',
                penalty: 'Imprisonment up to 2 years and/or fine up to ₹5,00,000 under BIS Act, 2016',
            },
            {
                violation: 'Importing toys without valid BIS Certification into India',
                penalty: 'Goods detained at customs, re-export at importer\'s cost, and penalty under BIS Act and Customs Act',
            },
            {
                violation: 'Selling toys not conforming to IS 9873 safety standards',
                penalty: 'Cancellation of BIS License, product recall, and prosecution under BIS Act, 2016',
            },
            {
                violation: 'Misuse of ISI Mark or BIS Standard Mark on toys',
                penalty: 'Imprisonment up to 1 year and/or fine up to ₹2,00,000 under BIS Act, 2016',
            },
        ],
        advantages: [
            {
                icon: '✅',
                title: 'Legal Compliance',
                desc: 'Meet the mandatory Toys (Quality Control) Order, 2020 requirement and legally sell toys in India without risk of seizure, penalties, or prosecution.',
            },
            {
                icon: '👶',
                title: 'Child Safety Assurance',
                desc: 'IS 9873 testing ensures toys meet rigorous safety standards — no sharp edges, no small parts hazard, no toxic chemicals, and no flammability risks for children.',
            },
            {
                icon: '🛡️',
                title: 'Consumer & Parent Trust',
                desc: 'The ISI Mark on toys builds confidence among parents and consumers that the product has been independently tested and certified for safety by India\'s national standards body.',
            },
            {
                icon: '🛒',
                title: 'E-Commerce & Retail Access',
                desc: 'Major e-commerce platforms and retail chains require BIS Certification before listing toys — ISI Mark unlocks access to Amazon, Flipkart, and organized retail.',
            },
            {
                icon: '📦',
                title: 'Smooth Customs Clearance for Importers',
                desc: 'BIS-certified toys enjoy hassle-free import clearance at Indian customs. Non-certified toys are detained and may be re-exported at the importer\'s expense.',
            },
            {
                icon: '🏛️',
                title: 'Government Procurement Eligibility',
                desc: 'BIS-certified toys are eligible for government procurement programs, Anganwadi toy supply tenders, and listing on the Government e-Marketplace (GeM).',
            },
            {
                icon: '📈',
                title: 'Competitive Market Advantage',
                desc: 'ISI-marked toys stand out against uncertified competitors — building brand credibility and enabling premium positioning in the Indian toy market.',
            },
            {
                icon: '🌍',
                title: 'Alignment with International Standards',
                desc: 'IS 9873 is harmonized with ISO 8124 international toy safety standards, making BIS-certified toys suitable for export to markets with similar regulatory requirements.',
            },
        ],
        faqs: [
            {
                q: 'Is BIS Certification mandatory for all toys sold in India?',
                a: 'Yes, under the Toys (Quality Control) Order, 2020, it is mandatory for all toys manufactured in or imported into India to bear the ISI Mark issued by BIS. This applies to all toy categories including soft toys, plastic toys, electronic toys, ride-on toys, and educational toys.',
            },
            {
                q: 'Which Indian Standards apply to toy certification?',
                a: 'Toys must comply with the IS 9873 series — Part 1 (mechanical & physical safety), Part 2 (flammability), Part 3 (migration of heavy metals), Part 4 (chemistry-related experiments), Part 7 (finger paints), Part 9 (phthalates) — and IS 15644 (phthalate limits). Applicable parts depend on the toy category.',
            },
            {
                q: 'Can handmade or artisanal toys be exempt from BIS Certification?',
                a: 'No, the Toys (Quality Control) Order, 2020 does not exempt handmade or artisanal toys. All toys intended for children under 14 years — whether mass-produced or handcrafted — must comply with applicable IS standards and bear the ISI Mark before being sold in India.',
            },
            {
                q: 'How long does BIS Certification for toys take?',
                a: 'The entire process — from laboratory testing to BIS license grant — typically takes 45 to 90 days. The timeline depends on the number of applicable IS standards, lab testing duration, and BIS factory inspection scheduling. Your Professional helps streamline the process for faster certification.',
            },
            {
                q: 'Do imported toys also need BIS Certification?',
                a: 'Yes, all imported toys must have valid BIS Certification before they can be sold in India. Foreign manufacturers must apply through the FMCS scheme with an Authorized Indian Representative, while importers must ensure that the toys they import bear a valid ISI Mark.',
            },
            {
                q: 'What safety tests are performed on toys for BIS Certification?',
                a: 'Key safety tests include small parts and choking hazard test, sharp edges and points test, tensile strength of seams and attachments, flammability and burn rate test, heavy metal migration test (lead, cadmium, etc.), phthalate content analysis, and electrical safety test for battery-operated toys.',
            },
            {
                q: 'Is separate BIS Certification required for each toy product?',
                a: 'BIS Certification is granted per product category and manufacturing unit. Multiple toy products falling under the same IS standard and manufactured at the same factory may be covered under a single BIS license, but the scope is verified during the factory inspection.',
            },
            {
                q: 'How can Your Professional help with BIS Certification for toys?',
                a: 'Your Professional provides end-to-end BIS toy certification support — from identifying applicable IS 9873 standards and coordinating lab testing to preparing documentation, filing the BIS application, facilitating factory inspections, and managing license renewal and surveillance compliance.',
            },
        ],
        cta: {
            heading: 'Get BIS Certification for Toys with Your Professional',
            subheading:
                'Expert support for mandatory toy safety certification — from IS 9873 lab testing to ISI Mark licensing. Sell safe, certified toys across India with full compliance.',
            features: [
                'IS 9873 Laboratory Testing Coordination for All Applicable Parts',
                'Complete BIS Application & Factory Inspection Support',
                'ISI Mark License Issuance & Product Marking Guidance',
                'Surveillance Compliance & License Renewal Management',
            ],
        },
    },
};
