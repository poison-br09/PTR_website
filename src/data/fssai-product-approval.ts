import type { RegistrationData } from './registrations';

export const FSSAI_PRODUCT_APPROVAL: RegistrationData = {
    slug: 'fssai-product-approval',
    title: 'FSSAI Product Approval for Novel & Proprietary Foods in India',
    subtitle:
        'Get your novel food product, proprietary ingredient, or non-standard food item approved by FSSAI with end-to-end assistance from Your Professional — from application drafting to Food Authority clearance.',
    heroFeatures: [
        'FSSAI Product Approval for Novel & Proprietary Food Items',
        'Expert Assistance with NOC & Food Authority Filing',
        'Complete Lab Testing & Documentation Support',
        'Guidance on Non-Standard Ingredients & Additives Compliance',
        'Trusted by Food Businesses & Startups Across India',
    ],
    overview: {
        heading: 'What is FSSAI Product Approval?',
        paragraphs: [
            'FSSAI Product Approval is a specialized authorization required when a food business operator (FBO) intends to manufacture, import, or market a food product that does not conform to the existing standards prescribed under the Food Safety and Standards (Food Products Standards and Food Additives) Regulations, 2011. This includes novel foods, proprietary food items, non-standardized ingredients, genetically modified organisms (GMOs), and food additives not yet listed in the FSSAI regulatory framework.',
            'Unlike the basic FSSAI Registration or State/Central License — which authorize a business to operate in the food sector — Product Approval is an additional layer of regulatory clearance focused on the product itself. The Food Safety and Standards Authority of India (FSSAI) evaluates the safety, composition, labelling, and nutritional claims of the product before granting a No Objection Certificate (NOC) or formal approval through its Scientific Panels and the Food Authority.',
            'Your Professional simplifies this complex process by helping you prepare the technical dossier, coordinate NABL-accredited lab testing, draft the application with supporting scientific evidence, and liaise with FSSAI officials until your product receives clearance. Whether you are a food startup launching an innovative health drink or an established manufacturer introducing a new additive, our team ensures your product meets every regulatory benchmark.',
        ],
        highlights: [
            { icon: '🧪', text: 'Mandatory for novel foods, proprietary items & non-standard ingredients' },
            { icon: '📋', text: 'Governed by FSS Act, 2006 & FSS (Food Products Standards) Regulations, 2011' },
            { icon: '✅', text: 'Separate from FSSAI License — an additional product-level clearance' },
            { icon: '🔬', text: 'Requires scientific safety assessment & NABL-accredited lab reports' },
            { icon: '🍔', text: 'Applies to foods, beverages, additives, enzymes, processing aids & GM foods' },
        ],
    },
    eligibility: [
        'Food Business Operators (FBOs) holding a valid FSSAI Central or State License who wish to manufacture or import a non-standardized food product.',
        'Manufacturers introducing a novel food ingredient, novel food product, or food category not covered under existing FSSAI food standards.',
        'Businesses seeking approval for proprietary food items with unique formulations, compositions, or nutritional claims distinct from standard categories.',
        'Importers bringing food products into India that contain ingredients, additives, or processing aids not currently permitted under Indian food safety regulations.',
        'Companies planning to use food additives, enzymes, or processing aids at levels or in categories beyond those specified in the FSS (Food Products Standards and Food Additives) Regulations.',
        'Entities involved in the manufacture, import, or sale of genetically modified food organisms or foods derived from GM processes requiring FSSAI and GEAC clearance.',
    ],
    documents: [
        {
            category: 'Business & Licence Documents',
            items: [
                'Valid FSSAI Central or State License copy',
                'Certificate of Incorporation / Partnership Deed / Proprietorship Proof',
                'GST Registration Certificate',
                'Import-Export Code (IEC) — if the product is imported',
                'Manufacturing unit address proof and layout plan',
            ],
        },
        {
            category: 'Product Technical Dossier',
            items: [
                'Detailed product composition with complete ingredient list and quantities',
                'Manufacturing process flowchart with critical control points',
                'Shelf-life study data (accelerated and real-time stability reports)',
                'Nutritional analysis report from a NABL-accredited laboratory',
                'Product label draft with ingredients, allergens, nutritional info & claims',
            ],
        },
        {
            category: 'Safety & Testing Reports',
            items: [
                'Microbiological safety testing report from a NABL/FSSAI-notified lab',
                'Heavy metals & contaminant analysis report',
                'Toxicological risk assessment or safety evaluation data',
                'Allergenicity assessment report (where applicable)',
                'Certificate of Analysis (CoA) for each novel ingredient or additive',
            ],
        },
        {
            category: 'Scientific & Regulatory Evidence',
            items: [
                'Published scientific literature supporting product safety and efficacy',
                'History of safe use documentation (for novel ingredients)',
                'Regulatory approval status from other countries (Codex, USFDA, EFSA, etc.)',
                'GEAC approval letter — if the product involves genetically modified organisms',
                'Any prior correspondence or NOC from FSSAI related to the product',
            ],
        },
    ],
    process: [
        {
            title: 'Preliminary Assessment & Consultation',
            desc: 'Your Professional evaluates your product formulation, identifies the applicable FSSAI approval category (novel food, proprietary food, additive, etc.), and outlines the complete documentation and testing roadmap.',
            time: '1–3 Days',
        },
        {
            title: 'Lab Testing & Technical Dossier Preparation',
            desc: 'We coordinate with NABL-accredited laboratories for nutritional analysis, microbiological testing, heavy metal screening, and stability studies. Simultaneously, our experts compile the technical dossier with composition details, manufacturing process, and safety evidence.',
            time: '15–30 Days',
        },
        {
            title: 'Application Drafting & Submission',
            desc: 'The formal product approval application is drafted as per the FSSAI prescribed format, bundled with the technical dossier, lab reports, scientific literature, and supporting regulatory documents, then submitted to the FSSAI Product Approval Division.',
            time: '3–5 Days',
        },
        {
            title: 'FSSAI Scientific Panel Review',
            desc: 'FSSAI refers the application to the relevant Scientific Panel (e.g., Panel on Novel Foods, Panel on Food Additives) for a detailed safety and risk assessment. The panel may request additional data or clarifications during this stage.',
            time: '30–60 Days',
        },
        {
            title: 'Food Authority Evaluation & NOC Issuance',
            desc: 'Based on the Scientific Panel\'s recommendation, the Food Authority reviews the application and, upon satisfaction, issues a No Objection Certificate (NOC) or formal product approval order authorizing the product for manufacture, sale, or import.',
            time: '15–30 Days',
        },
        {
            title: 'Post-Approval Compliance & Market Launch',
            desc: 'Your Professional assists with final label compliance, gazette notification tracking (if applicable), and ensures your product meets all post-approval conditions such as surveillance reporting, batch testing, and periodic renewal requirements.',
            time: '5–10 Days',
        },
    ],
    fees: [
        { item: 'FSSAI Product Approval Application Fee (Government)', cost: '₹5,000 – ₹25,000' },
        { item: 'NABL-Accredited Lab Testing & Analysis', cost: '₹15,000 – ₹50,000' },
        { item: 'Technical Dossier Preparation (Your Professional)', cost: '₹20,000 – ₹60,000' },
        { item: 'Scientific Panel Review & Follow-up Assistance', cost: '₹10,000 – ₹30,000' },
        { item: 'End-to-End Product Approval Package (All-Inclusive)', cost: '₹50,000 – ₹1,50,000' },
    ],
    advantages: [
        {
            icon: '🛡️',
            title: 'Full Regulatory Compliance',
            desc: 'FSSAI Product Approval ensures your novel or proprietary food product is legally authorized for manufacture and sale across India, eliminating the risk of penalties, product seizure, or licence cancellation.',
        },
        {
            icon: '🚀',
            title: 'First-Mover Market Advantage',
            desc: 'Approved products gain a competitive edge — your brand can be the first to legally market an innovative food item, building consumer trust and establishing category leadership before competitors.',
        },
        {
            icon: '🔬',
            title: 'Scientifically Validated Safety',
            desc: 'The rigorous scientific panel review and NABL-accredited testing provide third-party validation that your product is safe for consumption, strengthening your brand credibility with consumers and retailers.',
        },
        {
            icon: '🌍',
            title: 'Enables Import & Export Opportunities',
            desc: 'An FSSAI-approved product with documented safety data and regulatory clearance is better positioned for international trade, as foreign regulators recognize India\'s science-based approval process.',
        },
        {
            icon: '📈',
            title: 'Supports Health & Nutritional Claims',
            desc: 'Product Approval allows you to legally make specific health, nutritional, or functional claims on your packaging — a significant marketing advantage in the growing health-food segment.',
        },
        {
            icon: '🤝',
            title: 'Builds Retailer & Distributor Confidence',
            desc: 'Major retail chains, e-commerce platforms, and institutional buyers require FSSAI compliance documentation. A formal product approval makes onboarding with large distribution networks seamless.',
        },
        {
            icon: '⚖️',
            title: 'Protection Against Legal Disputes',
            desc: 'A well-documented approval file with lab reports, safety assessments, and an FSSAI NOC acts as a strong legal shield in case of consumer complaints, competitor challenges, or regulatory audits.',
        },
    ],
    faqs: [
        {
            q: 'What is the difference between FSSAI License and FSSAI Product Approval?',
            a: 'An FSSAI License (Registration, State, or Central) authorizes a food business to operate — it is entity-level permission. FSSAI Product Approval, on the other hand, is product-level clearance required when a specific food item does not fall under existing FSSAI standards. You need a valid FSSAI License first, and then apply for Product Approval for any non-standard product you wish to manufacture or sell.',
        },
        {
            q: 'Which food products require FSSAI Product Approval?',
            a: 'Products that require approval include novel foods (e.g., insect-based protein, CBD-infused items), proprietary food items with unique formulations, food additives or processing aids not listed in FSSAI regulations, genetically modified food products, and any food item whose composition, ingredients, or claims do not conform to existing standards under the FSS Regulations.',
        },
        {
            q: 'How long does the FSSAI Product Approval process take?',
            a: 'The entire process typically takes 3 to 6 months from application submission to NOC issuance, depending on the complexity of the product, completeness of the technical dossier, and the Scientific Panel\'s review schedule. Products requiring additional safety data or multiple rounds of clarification may take longer.',
        },
        {
            q: 'Can I sell my product while the approval is pending?',
            a: 'No. Under the FSS Act, 2006, manufacturing, importing, or selling a non-standard food product without FSSAI approval is a violation that can result in fines up to ₹5 lakh, product recall, and potential cancellation of your FSSAI License. You must wait until the NOC or formal approval order is issued before commencing commercial sale.',
        },
        {
            q: 'What kind of lab testing is required for Product Approval?',
            a: 'FSSAI typically requires nutritional analysis, microbiological safety testing, heavy metal and contaminant screening, shelf-life stability studies, and — for novel ingredients — toxicological and allergenicity assessments. All testing must be conducted at NABL-accredited or FSSAI-notified laboratories, and reports must be submitted as part of the technical dossier.',
        },
        {
            q: 'Is FSSAI Product Approval required for imported food products?',
            a: 'Yes, if the imported food product contains ingredients, additives, or compositions not covered under existing FSSAI standards, you must obtain Product Approval before importing and selling the product in India. Additionally, you need a valid FSSAI Central License with import endorsement and an Import-Export Code (IEC).',
        },
        {
            q: 'What is a technical dossier and what should it contain?',
            a: 'A technical dossier is a comprehensive document submitted to FSSAI containing the product\'s complete composition, manufacturing process flowchart, safety and toxicological data, nutritional profile, lab test reports, stability study results, proposed label, and published scientific literature supporting the product\'s safety for human consumption.',
        },
        {
            q: 'Does FSSAI Product Approval need to be renewed?',
            a: 'The approval itself does not have a fixed renewal period like an FSSAI License. However, FSSAI may impose post-approval conditions such as periodic surveillance testing, batch-wise quality reports, or re-evaluation if new safety concerns emerge. Any change in the product formulation or manufacturing process may require a fresh approval or amendment.',
        },
        {
            q: 'What happens if FSSAI rejects my product approval application?',
            a: 'If the Scientific Panel or Food Authority rejects your application, FSSAI provides written reasons for the rejection. You can address the deficiencies — such as submitting additional safety data, modifying the formulation, or providing supplementary scientific evidence — and re-apply. Your Professional assists in analysing the rejection grounds and strengthening the re-submission.',
        },
        {
            q: 'How does Your Professional help with FSSAI Product Approval?',
            a: 'Your Professional provides end-to-end assistance including preliminary product assessment, coordination with NABL-accredited labs for all required testing, preparation of the technical dossier and application, submission to FSSAI, follow-up with the Scientific Panel, response to queries or deficiency notices, and post-approval compliance support to ensure a smooth market launch.',
        },
    ],
};
