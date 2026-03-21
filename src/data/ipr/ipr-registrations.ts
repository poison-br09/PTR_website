import type { ServiceData } from '../services';

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  IPR REGISTRATIONS — All IPR Registration Data (Consolidated)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export const IPR_REGISTRATIONS: Record<string, ServiceData> = {
// ─── 1. TRADEMARK REGISTRATION ──────────────────────────────────────────────

    'trademark-registration': {
        slug: 'trademark-registration',
        title: 'Trademark Registration in India — Brand Name & Logo Protection',
        subtitle:
            'Secure exclusive rights over your brand name, logo, tagline, or sound mark with Your Professional — end-to-end TM-A filing under the Trade Marks Act, 1999 with the Indian Trademark Registry.',
        heroFeatures: [
            'TM-A Application Filing with the Controller General of Patents, Designs & Trade Marks',
            'Protection for Brand Names, Logos, Taglines, Shapes & Sound Marks',
            'Trademark Valid for 10 Years from Date of Application — Renewable Indefinitely',
            'Dedicated Support from Your Professional for Search, Filing & Objection Handling',
        ],
        overview: {
            heading: 'Why Register a Trademark in India?',
            paragraphs: [
                'A trademark is a visual or auditory symbol — a word, name, logo, device, numeral, colour combination, shape of goods, packaging, or sound — that distinguishes the goods or services of one enterprise from another. In India, trademark registration is governed by the Trade Marks Act, 1999 and the Trade Marks Rules, 2017, administered by the Controller General of Patents, Designs and Trade Marks under the Department for Promotion of Industry and Internal Trade (DPIIT).',
                'While unregistered trademarks enjoy limited common-law protection under the tort of passing off, a registered trademark grants the proprietor an exclusive statutory right to use the mark across India, the right to licence it, and the ability to initiate infringement proceedings under Sections 29 and 30 of the Act. Registration also entitles the proprietor to use the ® symbol, signalling legal ownership.',
                'Your Professional handles every stage of the trademark registration process — from comprehensive trademark search and classification under the Nice Classification (45 classes) to TM-A filing, examination response, objection hearing representation, publication in the Trade Marks Journal, and final registration certificate procurement.',
            ],
            highlights: [
                { icon: '🛡️', text: 'Exclusive statutory right to use the mark across India under the Trade Marks Act, 1999' },
                { icon: '⏳', text: 'Protection for 10 years from application date, renewable indefinitely in 10-year cycles' },
                { icon: '⚖️', text: 'Legal remedies including injunctions, damages & criminal prosecution for infringement' },
                { icon: '🌐', text: 'Priority right for international filing under the Madrid Protocol within 6 months' },
            ],
        },
        types: [
            { title: 'Word Mark', desc: 'Protects the brand name, word, or combination of words in any font, style, or colour. Offers the broadest scope of protection as it covers the textual element irrespective of design.' },
            { title: 'Device Mark (Logo)', desc: 'Protects a specific logo, symbol, or graphical design. The protection is limited to the exact visual representation as filed.' },
            { title: 'Composite Mark', desc: 'Combination of word and device elements filed as a single mark. Protects the specific arrangement of text and graphics together.' },
            { title: 'Sound Mark', desc: 'Protects a unique audio signature or jingle associated with a brand, filed in MP3 format with a sonogram representation under Rule 26(5).' },
            { title: 'Colour Mark', desc: 'Protects a specific colour or combination of colours that has acquired distinctiveness through prolonged use and is uniquely associated with the brand.' },
            { title: 'Shape Mark / 3D Mark', desc: 'Protects the distinctive three-dimensional shape of goods or their packaging, provided the shape is not functional or dictated by the nature of the goods.' },
        ],
        eligibility: [
            'Any individual (Indian or foreign national) claiming to be the proprietor of a trademark',
            'Sole proprietorship firms, partnership firms, LLPs, and Hindu Undivided Families (HUFs)',
            'Private limited companies, public limited companies, and One Person Companies (OPCs)',
            'Societies registered under the Societies Registration Act, 1860 and trusts',
            'Government departments, statutory bodies, and local authorities',
            'Foreign companies and individuals can file through an agent with an Indian address for service',
            'Joint proprietors — two or more persons claiming joint ownership of the mark',
        ],
        documents: [
            {
                category: 'Applicant Identity & Address Proof',
                items: [
                    'PAN card of the applicant (individual or entity)',
                    'Aadhaar card / passport / voter ID of the individual applicant or authorised signatory',
                    'Certificate of Incorporation / Partnership Deed / LLP Agreement (for business entities)',
                    'Address proof of the principal place of business (utility bill, rent agreement, or ownership deed)',
                    'MSME / Udyam Registration Certificate (for claiming reduced government fees)',
                ],
            },
            {
                category: 'Trademark Details',
                items: [
                    'Clear representation of the trademark — logo in JPEG format (minimum 331×331 pixels, maximum 2 MB)',
                    'List of goods/services to be covered, classified under the Nice Classification (NCL 12th Edition)',
                    'Date of first use of the trademark in India (if claiming prior use) with supporting evidence',
                    'Sound file in MP3 format with graphical representation/sonogram (for sound marks)',
                    'Description of the mark including colour claims, disclaimers, or translations (if applicable)',
                ],
            },
            {
                category: 'Legal & Authorisation Documents',
                items: [
                    'Power of Attorney (Form TM-48) authorising the trademark agent to act on behalf of the applicant',
                    'Affidavit of use (if claiming user-based rights prior to filing date)',
                    'Priority document from the foreign trademark office (if claiming convention priority under Section 154)',
                    'No Objection Certificate from a living person whose name/image is being used as a trademark',
                ],
            },
        ],
        process: [
            { title: 'Comprehensive Trademark Search', desc: 'Your Professional conducts an exhaustive search on the Trade Marks Registry database (IP India) and common-law sources to assess the availability and registrability of the proposed mark across relevant classes.', time: '1–2 days' },
            { title: 'Classification & Application Preparation', desc: 'Identify the correct Nice Classification class(es) for your goods/services (45 classes — 1–34 for goods, 35–45 for services). Prepare Form TM-A with all particulars, representation of the mark, and applicant details.', time: '1–2 days' },
            { title: 'Filing TM-A Application', desc: 'File the trademark application (Form TM-A) online through the IP India portal. Upon filing, the applicant receives an application number and can immediately use the ™ symbol.', time: '1 day' },
            { title: 'Vienna Codification & Examination', desc: 'The Registry assigns Vienna Classification codes (for device marks) and allocates the application to an Examiner. The Examiner reviews the mark for distinctiveness, conflicts with prior marks, and compliance with Sections 9 and 11.', time: '30–60 days' },
            { title: 'Examination Report & Response', desc: 'If objections are raised in the Examination Report, Your Professional drafts and files a detailed counter-statement within 30 days. If a hearing is scheduled, Your Professional represents you before the Registrar.', time: '30–90 days' },
            { title: 'Publication in Trade Marks Journal', desc: 'Once accepted, the mark is published in the Trade Marks Journal for 4 months, inviting opposition from third parties under Section 21. Your Professional monitors the journal and defends against any opposition.', time: '4 months' },
            { title: 'Opposition Proceedings (if any)', desc: 'If a notice of opposition is filed, Your Professional handles the entire opposition process — counter-statement, evidence filing, and hearing representation before the Registrar.', time: '6–24 months (if opposed)' },
            { title: 'Registration Certificate Issued', desc: 'If no opposition is filed or the opposition is decided in your favour, the Registrar issues the Registration Certificate. The proprietor can now use the ® symbol.', time: '1–2 weeks after Journal period' },
        ],
        fees: [
            { item: 'Government Fee — TM-A Filing (per class, individual / startup / MSME)', cost: '₹4,500' },
            { item: 'Government Fee — TM-A Filing (per class, other entities)', cost: '₹9,000' },
            { item: 'Trademark Search & Availability Report', cost: '₹1,500 – ₹3,000' },
            { item: 'Your Professional Service Fee (filing + examination response)', cost: '₹5,000 – ₹8,000' },
            { item: 'Opposition Hearing Representation (if applicable)', cost: '₹10,000 – ₹25,000' },
        ],
        penalties: [
            { violation: 'Using a registered trademark without authorisation (Section 103)', penalty: 'Imprisonment of 6 months to 3 years and fine of ₹50,000 to ₹2,00,000' },
            { violation: 'Falsely applying a trademark to goods/services (Section 104)', penalty: 'Imprisonment of 6 months to 3 years and fine of ₹50,000 to ₹2,00,000' },
            { violation: 'Selling goods with falsified trademarks (Section 104)', penalty: 'Imprisonment up to 3 years or fine or both' },
            { violation: 'Falsely representing a trademark as registered (Section 107)', penalty: 'Imprisonment up to 3 years or fine or both' },
        ],
        advantages: [
            { icon: '🛡️', title: 'Exclusive Legal Rights', desc: 'Registration grants the proprietor exclusive rights to use the mark for specified goods/services across India, with statutory protection under Sections 28 and 29 of the Trade Marks Act.' },
            { icon: '⚖️', title: 'Strong Legal Remedies', desc: 'The registered proprietor can file infringement suits seeking injunctions, damages, delivery up of infringing goods, and criminal prosecution with imprisonment up to 3 years.' },
            { icon: '💰', title: 'Valuable Business Asset', desc: 'A registered trademark is an intangible asset that can be licenced, franchised, mortgaged, or assigned — adding significant value to your business during fundraising, M&A, or expansion.' },
            { icon: '🌍', title: 'International Protection Pathway', desc: 'Indian trademark registration provides a priority right for filing under the Madrid Protocol in 130+ member countries within 6 months of the Indian application date.' },
            { icon: '🚫', title: 'Deterrent Against Infringers', desc: 'The ® symbol and public registration record act as a powerful deterrent, discouraging competitors, counterfeiters, and cybersquatters from using similar marks.' },
            { icon: '🔒', title: 'Domain Name & Social Media Protection', desc: 'A registered trademark strengthens disputes under UDRP (domain names) and helps enforce takedowns on social media platforms, e-commerce marketplaces, and search engines.' },
            { icon: '📈', title: 'Brand Trust & Consumer Confidence', desc: 'Registration signals authenticity and builds consumer trust, differentiating your products and services in a crowded marketplace and enhancing brand recall.' },
            { icon: '♾️', title: 'Perpetual Protection', desc: 'Unlike patents (20 years) or designs (15 years), trademarks can be renewed indefinitely in 10-year cycles, offering perpetual protection as long as the mark remains in use.' },
        ],
        disadvantages: [
            'Registration process can take 8–24 months from filing to certificate issuance, depending on objections and opposition',
            'Protection is limited to the specific goods/services and classes mentioned in the application — separate filings needed for each class',
            'Trademark can be removed from the Register for non-use if not used for a continuous period of 5 years (Section 47)',
            'Descriptive, generic, or common words face rejection under Section 9 — strong distinctiveness is required',
            'Opposition proceedings by third parties can significantly delay registration and increase legal costs',
        ],
        faqs: [
            { q: 'What is the difference between ™ and ® symbols?', a: 'The ™ symbol can be used by anyone claiming trademark rights, even without registration. The ® symbol can only be used after the trademark is officially registered with the Trade Marks Registry. Using ® without registration is a punishable offence under Section 107 of the Trade Marks Act.' },
            { q: 'How long does trademark registration take in India?', a: 'The entire process typically takes 8–12 months if there are no objections or oppositions. If the Examiner raises objections, the timeline extends to 12–18 months. Opposed applications may take 18–36 months to resolve.' },
            { q: 'Can I register a trademark in multiple classes?', a: 'Yes. India follows a multi-class filing system under the Trade Marks Rules, 2017. You can file a single application covering multiple Nice Classification classes, though the government fee is charged per class (₹4,500 for individuals/startups/MSMEs or ₹9,000 for others per class).' },
            { q: 'What happens if someone opposes my trademark application?', a: 'If a third party files a Notice of Opposition within 4 months of journal publication, Your Professional files a counter-statement on your behalf. Both parties submit evidence, and a hearing is conducted before the Registrar, who decides whether to allow or refuse the registration.' },
            { q: 'Can a trademark be registered if it is already in use by someone else?', a: 'Not if the prior user has a registered trademark in the same or similar class. However, if you have been using the mark prior to the other party (honest concurrent use under Section 12), you may still obtain registration by proving prior use with evidence.' },
            { q: 'Is a trademark search mandatory before filing?', a: 'While not legally mandatory, Your Professional strongly recommends a comprehensive trademark search before filing. It helps identify identical or similar existing marks that could lead to objections, opposition, or refusal — saving time and money.' },
            { q: 'What can be registered as a trademark in India?', a: 'Under Section 2(zb) of the Trade Marks Act, a trademark can include words, names, letters, numerals, devices, brand names, headings, labels, colours, shapes of goods, packaging, sound marks, and any combination thereof that is capable of distinguishing goods or services.' },
            { q: 'How does Your Professional help with trademark registration?', a: 'Your Professional provides end-to-end trademark registration services — from availability search and classification advice to TM-A filing, examination report response, hearing representation, opposition defence, and certificate procurement. We ensure your brand is protected efficiently and cost-effectively.' },
        ],
        cta: {
            heading: 'Protect Your Brand — Register Your Trademark Today!',
            subheading: 'Your Professional makes trademark registration simple, fast, and hassle-free — from search to certificate.',
            features: [
                'Free Trademark Availability Search & Consultation',
                'Complete TM-A Filing & Examination Response',
                'Opposition Hearing Representation',
                'Certificate Procurement & Renewal Reminders',
            ],
        },
    },

    // ─── 2. TRADEMARK RENEWAL ───────────────────────────────────────────────────

    'trademark-renewal': {
        slug: 'trademark-renewal',
        title: 'Trademark Renewal in India — TM-R Filing & Continued Protection',
        subtitle:
            'Renew your registered trademark every 10 years with Your Professional — timely TM-R filing with the Indian Trademark Registry to maintain uninterrupted brand protection under the Trade Marks Act, 1999.',
        heroFeatures: [
            'TM-R Application Filing for Seamless 10-Year Trademark Renewal',
            'Renewal Can Be Filed 6 Months Before or After Expiry (with Late Fee)',
            'Applicable for All Registered Trademarks Including Madrid Protocol Designations',
            'Dedicated Renewal Tracking & Filing Support from Your Professional',
        ],
        overview: {
            heading: 'Why Renew Your Trademark on Time?',
            paragraphs: [
                'Under Section 25 of the Trade Marks Act, 1999, a registered trademark is valid for a period of 10 years from the date of application. To maintain continued protection, the proprietor must file a renewal application (Form TM-R) with the prescribed fee before the trademark\'s expiry date. Failure to renew results in removal of the mark from the Register of Trade Marks.',
                'The Registrar issues a renewal reminder notice (Form TM-24) approximately 6 months before expiry. However, relying solely on the official reminder is risky — if the trademark lapses, any third party may apply for an identical or similar mark. While restoration is possible within 6 months of removal (under Section 25(4) via Form TM-13), it involves additional fees, delays, and the risk of third-party rights intervening.',
                'Your Professional proactively tracks your trademark renewal deadlines, files TM-R applications well in advance, and ensures your brand protection remains uninterrupted. We handle single and bulk renewals across multiple classes and maintain a comprehensive renewal calendar for all your IP assets.',
            ],
            highlights: [
                { icon: '🔄', text: 'Trademarks must be renewed every 10 years from the date of application to remain on the Register' },
                { icon: '⚠️', text: 'Late renewal permitted within 6 months of expiry with a surcharge of ₹3,000 (individuals) or ₹5,000 (others)' },
                { icon: '🗑️', text: 'Non-renewed trademarks are removed from the Register and lose all statutory protection' },
                { icon: '♻️', text: 'Restoration possible within 1 year of removal under Section 25(4) via Form TM-13' },
            ],
        },
        eligibility: [
            'The registered proprietor of the trademark as recorded in the Register of Trade Marks',
            'An assignee or successor-in-title who has recorded the assignment with the Registry (Form TM-23/TM-24)',
            'A registered user (licensee) authorised by the proprietor to file renewal on their behalf',
            'Legal heirs or executors of a deceased proprietor, with proof of legal succession',
            'An authorised trademark agent holding a valid Power of Attorney (Form TM-48) from the proprietor',
            'The holder of an International Registration designating India under the Madrid Protocol',
            'Joint proprietors — any one or all joint owners can file the renewal application',
        ],
        documents: [
            {
                category: 'Trademark & Registration Details',
                items: [
                    'Trademark Registration Certificate (original or copy)',
                    'Trademark Registration Number and class(es) under which the mark is registered',
                    'Current representation of the trademark as it appears on the Register',
                    'Renewal reminder notice from the Registry (Form TM-24), if received',
                    'Details of any recorded assignment, merger, or change in proprietorship since last renewal',
                ],
            },
            {
                category: 'Applicant Identity & Authorisation',
                items: [
                    'PAN card and Aadhaar card / passport of the proprietor or authorised signatory',
                    'Certificate of Incorporation / Partnership Deed / LLP Agreement (for business entities)',
                    'Power of Attorney (Form TM-48) in favour of the trademark agent',
                    'Legal succession documents (for renewal by legal heirs — probate, succession certificate)',
                    'MSME / Udyam Registration Certificate (for claiming reduced government fees)',
                ],
            },
            {
                category: 'Additional Documents (if applicable)',
                items: [
                    'Form TM-23 (request for change of proprietor name/address, if changed since registration)',
                    'Form TM-13 with additional fee (for restoration of removed trademarks)',
                    'Affidavit of continued use of the trademark (may be requested by the Registry)',
                    'Proof of assignment or transmission (deed of assignment, merger order) if proprietor has changed',
                ],
            },
        ],
        process: [
            { title: 'Renewal Deadline Identification', desc: 'Your Professional reviews your trademark portfolio, identifies the exact renewal due date (10 years from the application/last renewal date), and sets up advance reminders at 12 months, 6 months, and 3 months before expiry.', time: '1 day' },
            { title: 'Status Verification on IP India Portal', desc: 'Verify the current status of the trademark on the IP India online database — checking for any pending proceedings, recorded assignments, or changes in proprietorship that need to be updated before renewal.', time: '1 day' },
            { title: 'Prepare & Verify Renewal Application', desc: 'Prepare Form TM-R with accurate details including registration number, class(es), proprietor information, and any changes since the last renewal. Cross-verify all details against the Register entry.', time: '1–2 days' },
            { title: 'File Form TM-R Online', desc: 'File the renewal application (Form TM-R) through the IP India e-filing portal along with the prescribed government fee. If filing within 6 months after expiry, the surcharge for late renewal is included.', time: '1 day' },
            { title: 'Payment Confirmation & Receipt', desc: 'Obtain the system-generated filing receipt and payment confirmation from the IP India portal. Your Professional retains copies for your records and portfolio tracking.', time: 'Same day' },
            { title: 'Registry Processing & Verification', desc: 'The Trademark Registry processes the renewal application, verifies the fee payment, and updates the Register of Trade Marks with the new validity period (next 10 years).', time: '15–60 days' },
            { title: 'Renewed Registration Certificate', desc: 'Upon successful processing, the Registry issues an updated Registration Certificate reflecting the renewed validity period. Your Professional delivers the certificate and updates your IP portfolio records.', time: '1–3 months' },
        ],
        fees: [
            { item: 'Government Fee — TM-R Renewal (per class, individual / startup / MSME)', cost: '₹5,000' },
            { item: 'Government Fee — TM-R Renewal (per class, other entities)', cost: '₹10,000' },
            { item: 'Late Renewal Surcharge — within 6 months after expiry (individual / startup / MSME)', cost: '₹3,000 per class' },
            { item: 'Late Renewal Surcharge — within 6 months after expiry (other entities)', cost: '₹5,000 per class' },
            { item: 'Restoration Fee — Form TM-13 (if trademark removed from Register)', cost: '₹5,000 – ₹10,000 per class' },
        ],
        penalties: [
            { violation: 'Failure to renew within the 10-year validity period', penalty: 'Trademark is advertised as expiring and enters a 6-month grace period with late fee surcharge' },
            { violation: 'Non-renewal even after 6-month grace period', penalty: 'Trademark is removed from the Register under Section 25(3), losing all statutory rights and ® symbol usage' },
            { violation: 'Continued use of ® symbol after removal from the Register', penalty: 'Constitutes an offence under Section 107 — imprisonment up to 3 years or fine or both' },
            { violation: 'Third-party filing for identical/similar mark after removal', penalty: 'Former proprietor may lose priority and face competing applications during the restoration window' },
        ],
        advantages: [
            { icon: '🔄', title: 'Uninterrupted Brand Protection', desc: 'Timely renewal ensures your trademark remains on the Register with continuous statutory protection, preventing any gap in legal rights that competitors could exploit.' },
            { icon: '♾️', title: 'Perpetual Ownership Rights', desc: 'Unlike patents or designs with finite terms, trademarks can be renewed indefinitely in 10-year cycles — giving your brand perpetual legal protection as long as it remains in commercial use.' },
            { icon: '💰', title: 'Preserves Brand Equity', desc: 'A lapsed trademark can be appropriated by third parties, destroying years of brand-building investment. Renewal safeguards the goodwill, reputation, and market recognition you\'ve built.' },
            { icon: '⚖️', title: 'Maintains Enforcement Rights', desc: 'Only registered trademarks can invoke infringement remedies under Section 29. Renewal ensures you retain the right to pursue injunctions, damages, and criminal prosecution against infringers.' },
            { icon: '🌐', title: 'Supports International Protection', desc: 'An active Indian trademark registration supports international filings under the Madrid Protocol and serves as evidence of rights in foreign jurisdictions and WIPO proceedings.' },
            { icon: '📋', title: 'Simplifies Business Transactions', desc: 'An active, renewed trademark simplifies licencing agreements, franchise arrangements, and due diligence during mergers, acquisitions, and investment rounds.' },
            { icon: '🚫', title: 'Avoids Costly Restoration Process', desc: 'Restoration of a removed trademark (Form TM-13) involves additional fees, extended timelines, potential third-party challenges, and no guarantee of success. Timely renewal avoids these risks entirely.' },
            { icon: '📊', title: 'Comprehensive Portfolio Management', desc: 'Your Professional maintains a renewal calendar across your entire trademark portfolio, ensuring no renewal deadline is missed — especially critical for businesses with marks in multiple classes.' },
        ],
        disadvantages: [
            'Government renewal fees apply per class — multi-class trademarks incur higher cumulative renewal costs',
            'Late renewal within the 6-month grace period attracts a surcharge of ₹3,000–₹5,000 per class in addition to the standard fee',
            'If the trademark is removed for non-renewal, restoration is not guaranteed and is subject to Registrar discretion under Section 25(4)',
            'The renewal process does not involve a fresh examination — any issues with the mark (e.g., it has become generic) remain unaddressed',
            'Madrid Protocol designations have separate renewal processes through WIPO, requiring coordination between Indian and international filings',
        ],
        faqs: [
            { q: 'When should I file for trademark renewal?', a: 'You can file Form TM-R up to 6 months before the expiry date. The Registry sends a reminder notice (Form TM-24) approximately 6 months before expiry. Your Professional recommends filing at least 3 months before the due date to avoid any last-minute complications.' },
            { q: 'What happens if I miss the trademark renewal deadline?', a: 'If you miss the renewal date, you have a 6-month grace period during which you can still renew by paying the standard fee plus a late surcharge. After this 6-month window, the trademark is removed from the Register. Restoration is possible within 1 year of removal via Form TM-13, but it is discretionary and involves additional costs.' },
            { q: 'Can a third party register my trademark if I fail to renew?', a: 'Yes. Once your trademark is removed from the Register, any third party can apply for registration of an identical or similar mark in the same class. During the restoration window, your pending Form TM-13 application may provide some protection, but there is no guarantee.' },
            { q: 'How much does trademark renewal cost in India?', a: 'The government fee for TM-R filing is ₹5,000 per class for individuals, startups, and MSMEs, and ₹10,000 per class for other entities. Late renewal attracts an additional surcharge of ₹3,000 or ₹5,000 per class respectively. Your Professional\'s service fee for handling the renewal process is additional.' },
            { q: 'Do I need to prove use of the trademark at the time of renewal?', a: 'No. Unlike some jurisdictions (e.g., the US), India does not require proof of use or a declaration of use at the time of renewal. However, under Section 47, any person can apply for removal of a trademark that has not been used for a continuous period of 5 years and 3 months.' },
            { q: 'Can I renew a trademark that has been assigned to a new owner?', a: 'Yes, but the assignment must first be recorded with the Trademark Registry using Form TM-23. The new proprietor (assignee) can then file Form TM-R in their name. Your Professional assists with both the assignment recording and subsequent renewal.' },
            { q: 'Is the renewal process different for Madrid Protocol trademarks?', a: 'Yes. International Registrations designating India under the Madrid Protocol are renewed directly through WIPO, not the Indian Registry. The renewal fee is paid to WIPO in Swiss Francs, and the validity is managed centrally. Your Professional coordinates both Indian and international renewals.' },
            { q: 'How does Your Professional help with trademark renewal?', a: 'Your Professional provides proactive renewal management — tracking expiry dates across your entire trademark portfolio, filing TM-R applications well in advance, handling late renewals and restorations, and ensuring your brand protection remains uninterrupted. We also manage bulk renewals for businesses with multiple registrations.' },
        ],
        cta: {
            heading: 'Don\'t Let Your Trademark Lapse — Renew with Your Professional!',
            subheading: 'Your Professional ensures timely renewal so your brand stays protected — no deadlines missed, no rights lost.',
            features: [
                'Proactive Renewal Deadline Tracking & Reminders',
                'Complete TM-R Filing & Payment Processing',
                'Late Renewal & Restoration Assistance',
                'Full Trademark Portfolio Management',
            ],
        },
    },

// ─── 1. TRADEMARK OBJECTION ──────────────────────────────────────────
    'trademark-objection': {
        slug: 'trademark-objection',
        title: 'Trademark Objection Reply — Respond to Examiner\'s Objection Report',
        subtitle:
            'Overcome trademark objections with expert legal drafting and representation from Your Professional — protect your brand by filing a comprehensive reply under the Trade Marks Act, 1999.',
        heroFeatures: [
            'Detailed Analysis of the Examination Report & Objection Grounds',
            'Professionally Drafted TM-A Reply with Supporting Evidence',
            'Representation at TM Hearing Before the Registrar',
            'End-to-End Support from Your Professional Until Acceptance',
        ],
        overview: {
            heading: 'What Is a Trademark Objection?',
            paragraphs: [
                'A trademark objection occurs when the Trademark Examiner raises concerns about a trademark application during the examination stage. The Registrar of Trademarks issues an Examination Report citing specific grounds under Sections 9 and 11 of the Trade Marks Act, 1999, explaining why the mark may not be eligible for registration.',
                'Common objection grounds include descriptive or generic nature of the mark (Section 9), deceptive similarity with an existing registered or pending mark (Section 11), lack of distinctiveness, marks contrary to public morality, or improper classification of goods and services. The applicant must respond within 30 days of receiving the examination report.',
                'Your Professional provides expert assistance in analysing the examination report, drafting a legally sound response with case law citations, filing the reply on the IP India portal, and representing you at the TM hearing if the Registrar schedules one. A well-drafted objection reply significantly increases the chances of your trademark proceeding to publication.',
            ],
            highlights: [
                { icon: '📋', text: 'Reply must be filed within 30 days of the Examination Report' },
                { icon: '⚖️', text: 'Objections raised under Sections 9 & 11 of the Trade Marks Act, 1999' },
                { icon: '🏛️', text: 'TM Hearing scheduled if written reply does not satisfy the Registrar' },
                { icon: '✅', text: 'Successful reply leads to publication in the Trademark Journal' },
            ],
        },
        types: [
            { title: 'Absolute Grounds Objection (Section 9)', desc: 'Objection based on the inherent nature of the mark — marks that are descriptive, generic, non-distinctive, customary, deceptive, or contrary to law or morality. The applicant must prove acquired distinctiveness through use.' },
            { title: 'Relative Grounds Objection (Section 11)', desc: 'Objection based on conflict with an earlier trademark — the applied mark is identical or deceptively similar to a registered or pending mark for the same or similar goods/services. The applicant must differentiate or prove honest concurrent use.' },
            { title: 'Formality Objection', desc: 'Objection raised due to procedural or documentation deficiencies such as incorrect class selection, incomplete Form TM-A, missing user affidavit, or improper Power of Attorney. These are typically easier to resolve by filing corrected documents.' },
            { title: 'Conditional Acceptance Objection', desc: 'The Registrar may conditionally accept the mark subject to disclaimers, limitations on goods/services, or amendments. The applicant must agree to the conditions or contest them at a hearing.' },
        ],
        eligibility: [
            'Any trademark applicant who has received an Examination Report from the Registrar of Trademarks',
            'The objection reply must be filed by the applicant or their authorized trademark attorney/agent',
            'Applications pending before the Indian Trademark Registry under the Trade Marks Act, 1999',
            'Reply must be filed within 30 days from the date of issuance of the Examination Report',
            'Applicant must hold a valid trademark application number (allotted at the time of filing Form TM-A)',
            'Power of Attorney (Form TM-48) is required if the reply is filed through a trademark agent or attorney',
        ],
        documents: [
            {
                category: 'Core Application Documents',
                items: [
                    'Copy of the Examination Report issued by the Trademark Registrar',
                    'Original trademark application (Form TM-A) with application number',
                    'Copy of the applied trademark (wordmark or logo)',
                    'Power of Attorney (Form TM-48) — if filed through an agent or attorney',
                    'Proof of identity of the applicant (PAN, Aadhaar, or passport)',
                ],
            },
            {
                category: 'Evidence of Use & Distinctiveness',
                items: [
                    'User Affidavit with date of first use and continuous use details',
                    'Sales invoices, purchase orders, and turnover details showing use of the mark',
                    'Product labels, packaging images, and photographs of the mark in use',
                    'Advertising and marketing materials (brochures, print ads, social media campaigns)',
                    'Website screenshots, domain registration records, and online presence evidence',
                ],
            },
            {
                category: 'Legal & Supporting Documents',
                items: [
                    'Written submissions or legal arguments drafted in response to the objection',
                    'Relevant case law citations and precedents supporting the registrability of the mark',
                    'Certificate of Incorporation or business registration proof',
                    'Prior trademark registrations of the applicant (if any) — to demonstrate brand consistency',
                    'Third-party consents, co-existence agreements, or NOCs (if applicable)',
                ],
            },
        ],
        process: [
            { title: 'Receive & Analyse the Examination Report', desc: 'Carefully review the Examination Report issued by the Registrar, identify the specific objection grounds cited (Section 9, Section 11, or formality-based), and assess the strength of each objection.', time: '1–2 days' },
            { title: 'Conduct Legal Research & Prior Art Search', desc: 'Research relevant case law, Trademark Registry precedents, and IPAB/High Court rulings that support the registrability of the mark. Conduct a comparative analysis if the objection cites a conflicting mark.', time: '2–3 days' },
            { title: 'Gather Evidence of Use & Distinctiveness', desc: 'Collect invoices, advertising materials, affidavits, turnover details, and other evidence demonstrating the mark has acquired distinctiveness and has been in bona fide use in commerce.', time: '2–5 days' },
            { title: 'Draft the Objection Reply', desc: 'Prepare a comprehensive written reply addressing each objection ground with legal arguments, case law citations, evidence references, and factual submissions. Your Professional ensures the reply is persuasive and legally sound.', time: '3–5 days' },
            { title: 'File the Reply on IP India Portal', desc: 'Submit the drafted reply along with supporting evidence through the official IP India online portal within the 30-day deadline. Acknowledge receipt and note the filing reference number.', time: '1 day' },
            { title: 'Attend TM Hearing (If Scheduled)', desc: 'If the written reply does not satisfy the Registrar, a hearing is scheduled. Your Professional represents you before the Registrar, presenting oral arguments and evidence to overcome the objection.', time: '1–3 months' },
            { title: 'Receive Acceptance & Proceed to Publication', desc: 'Upon successful resolution of the objection, the trademark application is accepted and published in the Trademark Journal for a 4-month opposition period.', time: '1–2 months' },
        ],
        fees: [
            { item: 'Trademark Objection Reply Drafting (Your Professional)', cost: '₹3,000 – ₹8,000' },
            { item: 'Government Fee for TM Hearing (if applicable)', cost: '₹0 (no additional fee)' },
            { item: 'Evidence Compilation & Affidavit Preparation', cost: '₹1,500 – ₹3,000' },
            { item: 'Trademark Attorney Representation at Hearing', cost: '₹5,000 – ₹15,000' },
            { item: 'Original TM-A Filing Fee (for reference — already paid)', cost: '₹4,500 (individual) / ₹9,000 (others)' },
        ],
        penalties: [
            { violation: 'Failure to File Reply Within 30 Days', penalty: 'The trademark application is treated as abandoned by the Registrar under Rule 33 of the Trade Marks Rules, 2017.' },
            { violation: 'Filing Incomplete or Inadequate Reply', penalty: 'The Registrar may refuse the application or schedule a hearing. If the applicant fails to attend the hearing, the application is abandoned.' },
            { violation: 'Non-attendance at Scheduled TM Hearing', penalty: 'The Registrar may dispose of the application ex parte, typically resulting in refusal of the trademark registration.' },
            { violation: 'Submission of False Evidence or Affidavits', penalty: 'Criminal liability under the Indian Penal Code for perjury (Section 191/193 IPC) and possible cancellation of the application.' },
        ],
        advantages: [
            { icon: '🛡️', title: 'Protects Your Brand Investment', desc: 'A well-drafted objection reply prevents your trademark application from being abandoned, safeguarding the time, money, and effort invested in building your brand.' },
            { icon: '⚖️', title: 'Legal Expertise & Case Law Support', desc: 'Your Professional leverages relevant case law, IPAB rulings, and High Court precedents to build a compelling legal argument tailored to the specific objection grounds.' },
            { icon: '⏱️', title: 'Timely Compliance Within 30-Day Deadline', desc: 'Professional assistance ensures the reply is drafted, reviewed, and filed within the strict 30-day deadline, avoiding automatic abandonment of the application.' },
            { icon: '📈', title: 'Higher Success Rate at Hearings', desc: 'Expert representation at TM hearings before the Registrar significantly improves the chances of overcoming objections and securing trademark acceptance.' },
            { icon: '📝', title: 'Comprehensive Evidence Compilation', desc: 'Your Professional helps gather and organize evidence of use, distinctiveness, and market reputation — critical for overcoming Section 9 descriptiveness objections.' },
            { icon: '🔍', title: 'Thorough Analysis of Conflicting Marks', desc: 'For Section 11 objections, Your Professional conducts a detailed comparative analysis to distinguish your mark from the cited earlier mark.' },
            { icon: '✅', title: 'Smooth Path to Registration', desc: 'Successful resolution of objections leads to acceptance and publication in the Trademark Journal, moving your mark closer to full registration and ® status.' },
        ],
        disadvantages: [
            'The 30-day reply window is strict and cannot be extended, requiring quick action',
            'Objection replies do not guarantee acceptance — the Registrar retains discretion to refuse',
            'TM hearings may be scheduled months after the reply is filed, delaying the registration process',
            'Section 11 objections involving well-known or identical marks are inherently difficult to overcome',
            'Additional legal costs are incurred if the matter escalates to a hearing or requires appeal to IPAB/High Court',
            'Evidence of acquired distinctiveness may be challenging for new businesses with limited use history',
        ],
        faqs: [
            { q: 'What happens if I don\'t respond to a trademark objection?', a: 'If no reply is filed within 30 days of the Examination Report, the Trademark Registrar treats the application as abandoned under Rule 33 of the Trade Marks Rules, 2017. You would need to file a fresh application with new fees.' },
            { q: 'Can I file the objection reply myself without a trademark attorney?', a: 'Yes, you can file the reply yourself through the IP India portal. However, trademark objections involve legal complexities requiring knowledge of the Trade Marks Act, Rules, and relevant case law. Professional assistance from Your Professional significantly improves the chances of success.' },
            { q: 'What is the difference between a trademark objection and a trademark opposition?', a: 'A trademark objection is raised by the Registrar/Examiner during examination before publication. A trademark opposition is filed by a third party after the mark is published in the Trademark Journal. They are distinct proceedings with different procedures and timelines.' },
            { q: 'How long does it take to resolve a trademark objection?', a: 'If the written reply is accepted, the objection can be resolved within 2–4 months. If a hearing is scheduled, it may take 6–12 months or longer depending on the Registrar\'s calendar and complexity of the case.' },
            { q: 'Can I appeal if my trademark application is refused after the hearing?', a: 'Yes. If the Registrar refuses the application after the hearing, you can file an appeal before the Intellectual Property Appellate Board (IPAB) or the relevant High Court within the prescribed time limit.' },
            { q: 'What are the most common grounds for trademark objection in India?', a: 'The most common grounds are: (1) descriptive or non-distinctive mark under Section 9(1)(a)–(b), (2) deceptive similarity with an existing mark under Section 11(1), (3) marks identical to well-known trademarks under Section 11(2), and (4) incorrect classification of goods/services.' },
            { q: 'Does Your Professional handle TM hearing representation?', a: 'Yes. Your Professional provides end-to-end support including drafting the written reply, compiling evidence, preparing the applicant for the hearing, and representing the applicant before the Trademark Registrar at the hearing.' },
            { q: 'Is the Examination Report the same as a Show Cause Notice?', a: 'In trademark practice, the Examination Report effectively serves as a show cause notice — it asks the applicant to show cause why the mark should be registered despite the identified objections. The applicant must respond with a written reply or attend a hearing.' },
        ],
        cta: {
            heading: 'Received a Trademark Objection? Act Before the Deadline!',
            subheading: 'Your Professional drafts compelling objection replies and represents you at TM hearings — don\'t let your brand application lapse.',
            features: [
                'Expert Analysis of Examination Report',
                'Legally Sound Reply with Case Law Citations',
                'Evidence Compilation & Affidavit Support',
                'TM Hearing Representation Before Registrar',
            ],
        },
    },

    // ─── 2. TRADEMARK OPPOSITION ─────────────────────────────────────────
    'trademark-opposition': {
        slug: 'trademark-opposition',
        title: 'Trademark Opposition — File or Defend Against TM-O Proceedings',
        subtitle:
            'Protect your brand rights by filing or defending a trademark opposition under Section 21 of the Trade Marks Act, 1999. Your Professional handles the entire TM-O process from notice to final order.',
        heroFeatures: [
            'Filing of Notice of Opposition (Form TM-O) Within 4-Month Window',
            'Drafting Counter-Statement & Evidence Compilation',
            'Strategic Legal Representation Before the Registrar',
            'Complete Support from Your Professional — Filing to Final Order',
        ],
        overview: {
            heading: 'What Is Trademark Opposition?',
            paragraphs: [
                'Trademark opposition is a legal proceeding under Section 21 of the Trade Marks Act, 1999, where any person can challenge a trademark application after it is published in the Trademark Journal. Once a trademark application passes examination and is accepted, it is published for public notice for a period of four months. During this window, any aggrieved party can file a Notice of Opposition (Form TM-O) to prevent the mark from being registered.',
                'Opposition may be filed on grounds such as deceptive similarity with an earlier mark, the applicant\'s lack of bona fide intention to use, descriptiveness, bad faith filing, or conflict with a well-known trademark. The opposition proceeding follows a structured process including notice, counter-statement, evidence stages, and a hearing before the Registrar.',
                'Whether you need to oppose a third-party mark that infringes on your brand or defend your trademark application against an opposition, Your Professional provides comprehensive legal support — from drafting notices and counter-statements to compiling evidence and representing you at hearings before the Trademark Registry.',
            ],
            highlights: [
                { icon: '📰', text: 'Opposition must be filed within 4 months of Trademark Journal publication' },
                { icon: '📄', text: 'Filed using Form TM-O with prescribed government fee at the Trademark Registry' },
                { icon: '⚔️', text: 'Structured proceeding with evidence rounds and oral hearing before Registrar' },
                { icon: '🏆', text: 'Successful opposition prevents a conflicting mark from being registered' },
            ],
        },
        types: [
            { title: 'Filing Opposition (Opponent)', desc: 'You are the aggrieved party opposing a third-party trademark that conflicts with your existing rights. This involves filing Form TM-O, submitting evidence in support, and attending the hearing to prevent the mark from being registered.' },
            { title: 'Defending Opposition (Applicant)', desc: 'Your trademark application has been opposed by a third party. This involves filing a Counter-Statement (Form TM-O), submitting evidence in support of your application, and attending the hearing to secure registration.' },
            { title: 'Pre-publication Opposition', desc: 'Though rare, any person can submit a representation to the Registrar before publication under Section 21(1) proviso, requesting re-examination of the accepted mark. This is typically used when the mark was erroneously accepted.' },
        ],
        eligibility: [
            'Any person (individual, company, LLP, trust, or other legal entity) can file a trademark opposition — there is no requirement to be a registered trademark owner',
            'The opposition must be filed within 4 months from the date of publication in the Trademark Journal (extendable by 1 month on application)',
            'The opponent must have a legitimate interest or be aggrieved by the registration of the applied mark',
            'The applicant whose mark is opposed must file a Counter-Statement within 2 months of receiving the Notice of Opposition',
            'Both parties must be willing to participate in the evidence and hearing stages as prescribed under the Trade Marks Rules, 2017',
            'A Power of Attorney (Form TM-48) is required if the proceedings are conducted through a trademark attorney or agent',
            'Foreign applicants or opponents can participate through their authorized Indian agent or attorney',
        ],
        documents: [
            {
                category: 'Opposition Filing Documents (For Opponent)',
                items: [
                    'Notice of Opposition (Form TM-O) with details of the opposed trademark application',
                    'Copy of the Trademark Journal page showing the published mark',
                    'Opponent\'s trademark registration certificate or application details (if applicable)',
                    'Power of Attorney (Form TM-48) — if filed through a trademark attorney or agent',
                    'Evidence Affidavit with exhibits supporting the grounds of opposition',
                    'Proof of prior use — invoices, advertisements, packaging, website evidence',
                ],
            },
            {
                category: 'Defence Documents (For Applicant)',
                items: [
                    'Counter-Statement (Form TM-O) denying the grounds of opposition',
                    'Evidence Affidavit in support of the trademark application',
                    'Proof of bona fide use — sales records, invoices, marketing materials, customer testimonials',
                    'User Affidavit with date of first use and continuous commercial use details',
                    'Power of Attorney (Form TM-48) — if defended through a trademark attorney or agent',
                ],
            },
            {
                category: 'Common Supporting Documents',
                items: [
                    'Identity proof of the party (PAN, Aadhaar, or passport for individuals; COI for companies)',
                    'Market survey reports, consumer affidavits, or industry recognition evidence (if available)',
                    'Relevant case law compilations and legal precedents supporting the party\'s position',
                    'Prior correspondence, cease-and-desist notices, or co-existence agreements (if any)',
                    'Financial records showing investment in brand building, advertising expenditure, and turnover',
                ],
            },
        ],
        process: [
            { title: 'Monitor the Trademark Journal', desc: 'Regularly review the Trademark Journal published by the Trademark Registry for newly accepted marks that may conflict with your brand. Your Professional provides trademark watch services to identify potential conflicts early.', time: 'Ongoing' },
            { title: 'File Notice of Opposition (Form TM-O)', desc: 'Draft and file the Notice of Opposition with the Trademark Registry within 4 months of publication. The notice must specify the grounds of opposition with supporting facts. Government fee is payable at the time of filing.', time: '1–5 days' },
            { title: 'Applicant Files Counter-Statement', desc: 'The applicant (whose mark is opposed) must file a Counter-Statement within 2 months of receiving the Notice of Opposition. Failure to file a Counter-Statement results in the application being deemed abandoned.', time: '2 months (statutory)' },
            { title: 'Evidence by Opponent (Rule 46)', desc: 'The opponent files evidence by way of affidavit in support of the opposition within 2 months of receiving the Counter-Statement. This includes prior use evidence, market reputation proof, and consumer confusion likelihood.', time: '2 months (statutory)' },
            { title: 'Evidence by Applicant (Rule 47)', desc: 'The applicant files evidence by way of affidavit in support of the application within 2 months of receiving the opponent\'s evidence. This includes use evidence, distinctiveness proof, and response to opposition claims.', time: '2 months (statutory)' },
            { title: 'Reply Evidence by Opponent (Rule 48)', desc: 'The opponent may file reply evidence within 1 month strictly confined to matters raised in the applicant\'s evidence. No new grounds or fresh evidence can be introduced at this stage.', time: '1 month (statutory)' },
            { title: 'Hearing Before the Registrar', desc: 'Both parties present oral arguments before the Registrar at the designated Trademark Registry office. The Registrar considers the evidence, arguments, and applicable law before reserving the order.', time: '6–18 months' },
            { title: 'Final Order by the Registrar', desc: 'The Registrar passes a final order either allowing the opposition (refusing the mark) or dismissing the opposition (allowing the mark to proceed to registration). Either party may appeal to the High Court within 3 months.', time: '1–3 months after hearing' },
        ],
        fees: [
            { item: 'Government Fee — Notice of Opposition (Form TM-O)', cost: '₹2,700 (e-filing) / ₹3,000 (physical)' },
            { item: 'Government Fee — Counter-Statement Filing', cost: '₹0 (no separate fee)' },
            { item: 'Professional Fee — Opposition Drafting & Filing (Your Professional)', cost: '₹8,000 – ₹20,000' },
            { item: 'Professional Fee — Counter-Statement & Defence (Your Professional)', cost: '₹8,000 – ₹20,000' },
            { item: 'Evidence Compilation & Affidavit Preparation', cost: '₹5,000 – ₹15,000 per stage' },
        ],
        penalties: [
            { violation: 'Failure to File Counter-Statement Within 2 Months', penalty: 'The opposed trademark application is deemed abandoned under Rule 45(1) of the Trade Marks Rules, 2017, and the applicant loses all rights under the application.' },
            { violation: 'Failure to Submit Evidence Within Prescribed Time', penalty: 'The party in default is deemed to have abandoned their case. The opponent loses the opposition, or the applicant loses defence, and the Registrar may pass an ex parte order.' },
            { violation: 'Non-appearance at the Hearing', penalty: 'The Registrar may dispose of the matter ex parte based on the evidence on record, typically in favour of the party present.' },
            { violation: 'Filing Frivolous or Vexatious Opposition', penalty: 'The Registrar may award compensatory costs to the applicant under Rule 52 of the Trade Marks Rules, 2017, typically ranging from ₹5,000 to ₹25,000.' },
        ],
        advantages: [
            { icon: '🛡️', title: 'Prevents Confusingly Similar Marks', desc: 'Filing an opposition stops a conflicting mark from being registered, protecting your brand from consumer confusion and market dilution.' },
            { icon: '⚖️', title: 'Statutory Right Available to Any Person', desc: 'Under Section 21, any person can oppose a trademark — you do not need to own a registered trademark. Prior use or legitimate interest is sufficient.' },
            { icon: '💰', title: 'Cost-Effective Brand Protection', desc: 'Opposition proceedings are significantly cheaper than infringement litigation. Preventing registration at this stage avoids expensive post-registration cancellation or court proceedings.' },
            { icon: '📊', title: 'Structured Evidence-Based Process', desc: 'The opposition process follows a well-defined structure with clear timelines for evidence submission, ensuring both parties have a fair opportunity to present their case.' },
            { icon: '🏛️', title: 'Expert Tribunal Adjudication', desc: 'The matter is decided by the Registrar of Trademarks who is a quasi-judicial authority with specialized expertise in intellectual property law.' },
            { icon: '🌐', title: 'Protects Well-Known Trademark Rights', desc: 'Opposition is a powerful tool for owners of well-known trademarks to prevent registration of marks that trade on their reputation, even for dissimilar goods/services under Section 11(2).' },
            { icon: '📝', title: 'Creates Legal Precedent & Record', desc: 'A successful opposition creates an official record at the Trademark Registry, deterring future applicants from filing similar marks and strengthening your brand\'s legal position.' },
        ],
        disadvantages: [
            'Opposition proceedings can be lengthy, often taking 12–24 months from filing to final order',
            'Cumulative professional and evidence costs can be significant across multiple evidence stages',
            'The 4-month opposition window is strict — failure to file within time forfeits the right to oppose',
            'The Registrar\'s decision may be appealed to the High Court, further prolonging the dispute',
            'Frivolous oppositions may result in cost awards against the opponent',
            'Evidence gathering and affidavit preparation require substantial effort, especially for proving prior use and reputation',
            'There is no guarantee of success — the Registrar exercises independent discretion based on evidence and law',
        ],
        faqs: [
            { q: 'Who can file a trademark opposition in India?', a: 'Any person can file a trademark opposition under Section 21 of the Trade Marks Act, 1999. There is no requirement to be a registered trademark owner. You only need to demonstrate that you are an aggrieved party with a legitimate interest in opposing the mark.' },
            { q: 'What is the time limit for filing a trademark opposition?', a: 'The Notice of Opposition (Form TM-O) must be filed within 4 months from the date of publication of the trademark in the Trademark Journal. An extension of 1 month may be granted by the Registrar on an application made before the expiry of the 4-month period.' },
            { q: 'What happens if the applicant does not file a Counter-Statement?', a: 'If the applicant fails to file a Counter-Statement within 2 months of receiving the Notice of Opposition, the trademark application is deemed abandoned under Rule 45(1) of the Trade Marks Rules, 2017. The applicant loses all rights under that application.' },
            { q: 'On what grounds can a trademark be opposed?', a: 'Common grounds include: (1) deceptive similarity with an earlier mark (Section 11(1)), (2) conflict with a well-known trademark (Section 11(2)), (3) descriptive or non-distinctive mark (Section 9), (4) bad faith filing, (5) the applicant not being the true proprietor, and (6) the mark causing confusion among the public.' },
            { q: 'How long does a trademark opposition proceeding take?', a: 'From filing the Notice of Opposition to the final order, the proceeding typically takes 12–24 months. This includes statutory periods for Counter-Statement (2 months), evidence by opponent (2 months), evidence by applicant (2 months), reply evidence (1 month), and scheduling of the hearing.' },
            { q: 'Can I appeal the Registrar\'s decision in an opposition case?', a: 'Yes. Either party can file an appeal against the Registrar\'s order before the relevant High Court within 3 months from the date of the order, as per Section 91 of the Trade Marks Act, 1999.' },
            { q: 'What is the difference between trademark opposition and trademark cancellation?', a: 'Opposition is a pre-registration remedy filed during the 4-month publication window to prevent a mark from being registered. Cancellation (rectification) is a post-registration remedy under Section 57 to remove an already-registered mark from the register. Both are adjudicated by the Registrar.' },
            { q: 'How does Your Professional help with trademark opposition?', a: 'Your Professional provides end-to-end support including Trademark Journal monitoring, drafting and filing the Notice of Opposition or Counter-Statement, compiling evidence with affidavits, preparing legal arguments with case law citations, and representing you at the hearing before the Registrar.' },
        ],
        cta: {
            heading: 'Need to Oppose a Trademark or Defend Your Application?',
            subheading: 'Your Professional provides strategic, evidence-backed trademark opposition services — file or defend with confidence.',
            features: [
                'Trademark Journal Monitoring & Alerts',
                'TM-O Filing & Counter-Statement Drafting',
                'Evidence Compilation Across All Stages',
                'Hearing Representation Before Registrar',
            ],
        },
    },

'international-trademark-registration': {
        slug: 'international-trademark-registration',
        title: 'International Trademark Registration — Madrid Protocol',
        subtitle:
            'Protect your brand across 130+ countries through a single WIPO application with expert guidance from Your Professional — streamlined global trademark filing for Indian businesses.',
        heroFeatures: [
            'Single Application for Trademark Protection in 130+ Countries',
            'File Through Indian Trademark Office via Madrid Protocol',
            'Centralized Management of Global Trademark Portfolio',
            'End-to-End WIPO Filing Support from Your Professional',
        ],
        overview: {
            heading: 'Why Register Your Trademark Internationally?',
            paragraphs: [
                'The Madrid Protocol, administered by the World Intellectual Property Organization (WIPO), enables trademark owners to seek protection in multiple countries through a single international application filed via their home trademark office. India has been a member of the Madrid Protocol since July 8, 2013, allowing Indian businesses to efficiently expand their brand protection globally.',
                'Without international registration, a trademark registered in India offers protection only within Indian borders. As businesses expand into foreign markets through exports, e-commerce, or subsidiaries, securing trademark rights in each target country becomes essential to prevent brand piracy, counterfeiting, and unauthorized use by third parties.',
                'Your Professional simplifies the complex international trademark registration process — from selecting designated countries and preparing the WIPO application to managing office actions from foreign trademark offices and maintaining your global trademark portfolio.',
            ],
            highlights: [
                { icon: '🌐', text: 'Protection in 130+ member countries through one application' },
                { icon: '💰', text: 'Cost-effective compared to filing separately in each country' },
                { icon: '📋', text: 'Centralized management — renew, expand, or modify from one place' },
                { icon: '⚡', text: 'Streamlined process via Indian Trademark Office as Office of Origin' },
            ],
        },
        types: [
            { title: 'Standard International Application', desc: 'Filed through the Indian Trademark Office (Office of Origin) to WIPO, designating specific member countries where protection is sought. Requires a base application or registration in India.' },
            { title: 'Subsequent Designation', desc: 'Extend protection of an existing international registration to additional Madrid Protocol member countries at any time after the initial filing, without a new application.' },
            { title: 'Replacement Request', desc: 'Replace existing national trademark registrations in designated countries with the international registration, consolidating your portfolio while preserving original priority dates.' },
            { title: 'Transformation Application', desc: 'If the international registration is cancelled (e.g., due to central attack within 5 years), convert designated country protections into independent national applications retaining the original filing date.' },
        ],
        eligibility: [
            'Applicant must be a national of India, or domiciled in India, or have a real and effective industrial or commercial establishment in India',
            'A base trademark application or registration must exist with the Indian Trademark Office (Controller General of Patents, Designs & Trademarks)',
            'The mark in the international application must be identical to the base mark in the Indian application/registration',
            'The goods and services claimed internationally must not be broader than those in the base Indian application/registration',
            'Individuals, companies, partnership firms, LLPs, trusts, and other legal entities are eligible to file',
            'The applicant must designate at least one Madrid Protocol member country for protection',
            'Foreign nationals with a commercial establishment in India are also eligible to file through the Indian office',
        ],
        documents: [
            {
                category: 'Applicant & Identity Documents',
                items: [
                    'Copy of Indian trademark registration certificate or application acknowledgment (TM-A)',
                    'Identity proof of applicant — Aadhaar, PAN, or passport',
                    'Certificate of Incorporation / Partnership Deed / LLP Agreement (for entities)',
                    'Power of Attorney in favour of the trademark agent or attorney',
                    'Passport-sized photograph (for individual applicants)',
                ],
            },
            {
                category: 'Trademark & Application Documents',
                items: [
                    'Reproduction of the trademark (identical to the base Indian mark)',
                    'List of goods and services with Nice Classification codes',
                    'List of designated countries where protection is sought',
                    'Priority document (if claiming priority from an earlier application)',
                    'Declaration of intent to use the mark (required by some designated countries)',
                ],
            },
            {
                category: 'WIPO & Fee Documents',
                items: [
                    'Completed WIPO Form MM2 (International Application)',
                    'Certification form from the Indian Trademark Office',
                    'Fee calculation sheet from WIPO fee calculator',
                    'Proof of fee payment to Indian Trademark Office and WIPO',
                ],
            },
        ],
        process: [
            { title: 'Trademark Search & Strategy', desc: 'Your Professional conducts a comprehensive search across target countries to assess availability and advises on the optimal filing strategy, country selection, and Nice Classification.', time: '3–5 days' },
            { title: 'Verify Base Application/Registration', desc: 'Confirm that a valid Indian trademark application or registration exists and that the mark, applicant details, and goods/services align with the intended international filing.', time: '1–2 days' },
            { title: 'Prepare International Application', desc: 'Complete WIPO Form MM2 with applicant details, mark reproduction, Nice Classification, designated countries, and any declarations required by specific jurisdictions.', time: '3–5 days' },
            { title: 'File via Indian Trademark Office', desc: 'Submit the international application through the Indian Trademark Office (Office of Origin), which certifies and forwards it to WIPO\'s International Bureau.', time: '1–2 days' },
            { title: 'WIPO Formal Examination', desc: 'WIPO examines the application for formalities, classifies goods/services, and publishes the international registration in the WIPO Gazette of International Marks.', time: '2–4 months' },
            { title: 'Notification to Designated Countries', desc: 'WIPO notifies each designated country\'s trademark office, which then examines the mark under its national law within 12–18 months.', time: '12–18 months' },
            { title: 'Respond to Office Actions (if any)', desc: 'If a designated country raises objections or oppositions, Your Professional coordinates with local attorneys to file responses and overcome refusals.', time: 'Varies' },
            { title: 'Grant of Protection', desc: 'Each designated country issues a Statement of Grant of Protection upon successful examination, securing trademark rights in that jurisdiction.', time: 'Upon clearance' },
        ],
        fees: [
            { item: 'Indian Trademark Office Handling Fee', cost: '₹5,000 – ₹10,000' },
            { item: 'WIPO Basic Fee (black & white mark)', cost: 'CHF 653 (~₹60,000)' },
            { item: 'WIPO Basic Fee (colour mark)', cost: 'CHF 903 (~₹83,000)' },
            { item: 'Supplementary Fee per Class (where applicable)', cost: 'CHF 100 per class (~₹9,200)' },
            { item: 'Individual Country Designation Fee', cost: 'Varies by country (CHF 70–1,500+ per country)' },
        ],
        penalties: [
            { violation: 'Central Attack (Dependency Period)', penalty: 'If the base Indian mark is cancelled, refused, or restricted within 5 years, the international registration is correspondingly affected in all designated countries.' },
            { violation: 'Non-Renewal', penalty: 'International registration lapses if not renewed every 10 years with WIPO; protection ceases in all designated countries.' },
            { violation: 'Failure to Respond to Office Actions', penalty: 'Protection is refused in the designated country if objections or oppositions are not addressed within the stipulated deadline (typically 2–6 months).' },
        ],
        advantages: [
            { icon: '🌍', title: 'Global Protection via Single Application', desc: 'Secure trademark rights in over 130 countries through one application filed with the Indian Trademark Office — no need to file separately in each country.' },
            { icon: '💰', title: 'Cost-Effective Filing', desc: 'Significantly cheaper than filing independent national applications in each target country, especially when designating multiple jurisdictions simultaneously.' },
            { icon: '📋', title: 'Centralized Portfolio Management', desc: 'Manage renewals, record changes of ownership, update applicant details, and expand to new countries — all through a single WIPO portal.' },
            { icon: '📅', title: 'Single Renewal Date', desc: 'The entire international registration is renewed once every 10 years through WIPO, eliminating the need to track multiple national renewal deadlines.' },
            { icon: '🔄', title: 'Flexible Country Expansion', desc: 'Add new countries to your existing international registration at any time through subsequent designations without filing a fresh application.' },
            { icon: '⚖️', title: 'Priority Claim Advantage', desc: 'Claim priority from the Indian base application within 6 months of filing, securing an earlier effective filing date in all designated countries.' },
            { icon: '🛡️', title: 'Strong Anti-Counterfeiting Tool', desc: 'International registration strengthens enforcement capabilities against counterfeit goods in global markets and at customs borders.' },
            { icon: '🤝', title: 'Expert Support from Your Professional', desc: 'Your Professional manages the entire international filing process, coordinates with foreign attorneys, and ensures your global trademark portfolio remains protected.' },
        ],
        disadvantages: [
            'Dependent on the base Indian mark for the first 5 years — cancellation of the Indian mark can affect the entire international registration (central attack)',
            'Not all countries are members of the Madrid Protocol (e.g., some African and South American nations require separate national filings)',
            'Designated countries may still refuse protection based on their national examination standards and local grounds for refusal',
            'Individual country designation fees can accumulate significantly when selecting many jurisdictions',
            'Local legal representation may be required to respond to office actions in designated countries, adding to costs',
            'The mark and goods/services must be identical to the base Indian application — no modifications are permitted',
        ],
        faqs: [
            { q: 'What is the Madrid Protocol for international trademark registration?', a: 'The Madrid Protocol is an international treaty administered by WIPO that allows trademark owners to file a single application through their home country\'s trademark office to seek protection in multiple member countries. India has been a member since July 2013.' },
            { q: 'How many countries can I protect my trademark in through the Madrid System?', a: 'The Madrid System currently covers over 130 countries, including the USA, EU (via EUIPO), UK, China, Japan, Australia, and most major trading nations. You can designate any combination of member countries in your application.' },
            { q: 'Do I need an Indian trademark registration before filing internationally?', a: 'You need either a pending Indian trademark application or an existing Indian registration as the base mark. The international application is filed through the Indian Trademark Office as the Office of Origin.' },
            { q: 'What happens if my Indian trademark application is refused after international filing?', a: 'If the base Indian mark is cancelled, refused, or restricted within the first 5 years (dependency period), the international registration is correspondingly affected. However, you can convert the affected designations into independent national applications (transformation) to preserve your rights.' },
            { q: 'How long does international trademark registration take?', a: 'WIPO processes the application in about 2–4 months. Each designated country then has 12–18 months to examine and grant or refuse protection. The total timeline varies by country and whether objections are raised.' },
            { q: 'Is international trademark registration expensive?', a: 'The Madrid System is significantly more cost-effective than filing individual national applications. Total costs depend on the number of designated countries and classes. Your Professional provides a detailed fee estimate based on your specific filing strategy.' },
            { q: 'Can I add more countries later to my international registration?', a: 'Yes. You can file a subsequent designation at any time to extend protection to additional Madrid Protocol member countries without submitting a new international application.' },
            { q: 'How does Your Professional help with international trademark registration?', a: 'Your Professional provides end-to-end support — from trademark search and country strategy to WIPO application preparation, filing through the Indian Trademark Office, responding to foreign office actions, and ongoing portfolio management.' },
        ],
        cta: {
            heading: 'Ready to Protect Your Brand Globally?',
            subheading: 'Your Professional makes international trademark registration simple and affordable for Indian businesses expanding worldwide.',
            features: [
                'Free Consultation on Global Trademark Strategy',
                'Complete WIPO Application Preparation & Filing',
                'Coordination with Foreign Trademark Offices',
                'Ongoing Portfolio Management & Renewal Support',
            ],
        },
    },

    'trademark-rectification': {
        slug: 'trademark-rectification',
        title: 'Trademark Rectification — Removal or Correction of Trademark',
        subtitle:
            'Apply for rectification or removal of a registered trademark from the Trademark Register with expert legal support from Your Professional — file TM-26 before the Registrar or IPAB.',
        heroFeatures: [
            'File TM-26 Application for Rectification or Removal',
            'Applicable Before Registrar of Trademarks or High Court',
            'Correct Errors, Remove Dead Marks, or Challenge Invalid Registrations',
            'Complete Legal Assistance from Your Professional',
        ],
        overview: {
            heading: 'What is Trademark Rectification?',
            paragraphs: [
                'Trademark rectification is a legal remedy under Section 57 of the Trade Marks Act, 1999, that allows any aggrieved person to apply for the correction, modification, or removal of a trademark entry from the Register of Trademarks maintained by the Controller General of Patents, Designs & Trademarks. The application is filed using Form TM-26.',
                'Rectification may be sought on various grounds — including that the trademark was registered without sufficient cause, that it is wrongly remaining on the register, that the registered proprietor has no bona fide intention to use the mark, or that there are errors or defects in the register entry. It is a crucial mechanism for maintaining the integrity of the trademark register and protecting legitimate brand owners.',
                'Your Professional provides comprehensive legal support for trademark rectification proceedings — from evaluating the grounds for rectification and drafting the TM-26 application to representing clients before the Registrar of Trademarks or the appropriate High Court.',
            ],
            highlights: [
                { icon: '⚖️', text: 'Legal remedy under Section 57 of Trade Marks Act, 1999' },
                { icon: '📝', text: 'Filed using Form TM-26 before the Registrar or High Court' },
                { icon: '🗑️', text: 'Remove wrongfully registered or abandoned trademarks' },
                { icon: '✅', text: 'Correct errors, update details, or cancel unused marks' },
            ],
        },
        types: [
            { title: 'Removal of Trademark', desc: 'Application to completely remove a trademark from the register on grounds that it was wrongly registered, has not been used for 5 years, or the proprietor had no bona fide intention to use it.' },
            { title: 'Correction of Register Entry', desc: 'Application to correct clerical errors, factual mistakes, or outdated information in the trademark register entry — such as name, address, or goods/services description.' },
            { title: 'Variation of Registered Trademark', desc: 'Application to add or alter a disclaimer, condition, or limitation associated with the registered trademark without changing the essential features of the mark.' },
            { title: 'Cancellation on Grounds of Non-Use', desc: 'Any aggrieved person can apply for cancellation if the registered trademark has not been genuinely used by the proprietor for a continuous period of 5 years and 3 months from the date of registration.' },
        ],
        eligibility: [
            'Any person aggrieved by the presence or absence of an entry in the Register of Trademarks',
            'Any person aggrieved by a registration that conflicts with their prior trademark rights',
            'The Registrar of Trademarks may also apply to the High Court for rectification suo motu',
            'Competitors whose business is affected by a wrongfully registered trademark',
            'Trademark applicants whose applications were refused due to the cited registered mark',
            'Proprietors of registered trademarks seeking correction of their own register entries',
        ],
        documents: [
            {
                category: 'Applicant Documents',
                items: [
                    'Identity proof of applicant — Aadhaar, PAN, or passport',
                    'Certificate of Incorporation / Partnership Deed / LLP Agreement (for entities)',
                    'Power of Attorney (Form TM-48) in favour of the trademark attorney',
                    'Details of applicant\'s own trademark (if any) — application/registration number',
                    'Evidence establishing the applicant as a "person aggrieved"',
                ],
            },
            {
                category: 'Rectification & Legal Documents',
                items: [
                    'Completed Form TM-26 (Application for Rectification)',
                    'Statement of Case with detailed grounds for rectification',
                    'Affidavit in support of the rectification application',
                    'Copies of relevant evidence — non-use proof, prior rights, market confusion',
                    'Certified copy of the trademark registration certificate being challenged',
                ],
            },
            {
                category: 'Supporting Evidence',
                items: [
                    'Market survey or consumer confusion evidence (if applicable)',
                    'Sales invoices, advertisements, or product packaging proving applicant\'s prior use',
                    'Trademark search reports showing conflicting marks',
                    'Cease and desist correspondence exchanged between parties (if any)',
                    'Court orders or previous opposition/cancellation orders (if any)',
                ],
            },
        ],
        process: [
            { title: 'Evaluate Grounds for Rectification', desc: 'Your Professional reviews the case facts, examines the trademark register entry, and advises on the strength and viability of the rectification grounds under Section 57.', time: '2–3 days' },
            { title: 'Gather Evidence & Documentation', desc: 'Collect all supporting evidence — proof of non-use, prior rights, market confusion, or clerical errors — and prepare affidavits to build a strong case.', time: '5–7 days' },
            { title: 'Draft Form TM-26 & Statement of Case', desc: 'Prepare the rectification application in Form TM-26 along with a comprehensive Statement of Case detailing the legal and factual grounds for rectification.', time: '3–5 days' },
            { title: 'File Application with Registrar or High Court', desc: 'Submit the TM-26 application with prescribed fees before the Registrar of Trademarks (at the appropriate office) or the High Court having jurisdiction.', time: '1–2 days' },
            { title: 'Serve Notice on Registered Proprietor', desc: 'The Registrar or Court issues notice to the registered trademark proprietor, who is given an opportunity to file a counter-statement within 2 months.', time: '2–3 months' },
            { title: 'Evidence Filing & Hearing', desc: 'Both parties file evidence and written submissions. The Registrar or Court conducts a hearing where arguments are presented by both sides.', time: '6–12 months' },
            { title: 'Order of Rectification or Dismissal', desc: 'The Registrar or Court passes an order — either directing rectification/removal of the trademark or dismissing the application. The order is binding and appealable.', time: 'Upon hearing' },
        ],
        fees: [
            { item: 'TM-26 Filing Fee (before Registrar) — per class', cost: '₹3,000 (individual) / ₹5,000 (entity)' },
            { item: 'TM-26 Filing Fee (e-filing) — per class', cost: '₹2,700 (individual) / ₹4,500 (entity)' },
            { item: 'High Court Filing Fee (if applicable)', cost: 'Varies by High Court rules — typically ₹5,000–₹20,000' },
            { item: 'Professional/Attorney Fees', cost: '₹15,000 – ₹50,000 (depending on complexity)' },
            { item: 'Affidavit Notarization & Documentation', cost: '₹500 – ₹2,000' },
        ],
        penalties: [
            { violation: 'Filing Frivolous Rectification', penalty: 'The Registrar or Court may impose costs on the applicant for filing a vexatious or frivolous rectification application without genuine grounds.' },
            { violation: 'Non-Compliance with Timelines', penalty: 'Failure to file evidence or counter-statement within the prescribed time limits (typically 2 months) may result in the application being decided ex-parte or dismissed.' },
            { violation: 'Continued Use After Rectification Order', penalty: 'Using a trademark after it has been ordered for removal constitutes infringement under Section 29 of the Trade Marks Act, attracting civil and criminal penalties.' },
        ],
        advantages: [
            { icon: '🗑️', title: 'Remove Blocking Trademarks', desc: 'Clear the path for your own trademark registration by removing conflicting marks that were wrongfully registered or are no longer in use.' },
            { icon: '⚖️', title: 'Statutory Legal Remedy', desc: 'Rectification is a well-established legal remedy under Section 57 of the Trade Marks Act, 1999, providing a formal mechanism to challenge invalid registrations.' },
            { icon: '📝', title: 'Correct Register Errors', desc: 'Fix clerical mistakes, update proprietor details, or correct goods/services descriptions to ensure the trademark register accurately reflects current information.' },
            { icon: '🛡️', title: 'Protect Brand Integrity', desc: 'Prevent consumer confusion and brand dilution by removing similar or identical marks that were registered in bad faith or without genuine use.' },
            { icon: '💰', title: 'Cost-Effective Alternative', desc: 'Rectification proceedings before the Registrar are more affordable and quicker than infringement suits or civil litigation in courts.' },
            { icon: '🚫', title: 'Challenge Non-Use Registrations', desc: 'Remove trademarks that have not been genuinely used for 5+ years, freeing up the register for active brands and businesses.' },
            { icon: '📊', title: 'Maintain Register Accuracy', desc: 'Contributes to maintaining the overall accuracy and reliability of the Trademark Register, benefiting the entire business ecosystem.' },
            { icon: '🤝', title: 'Expert Legal Support from Your Professional', desc: 'Your Professional handles the entire rectification process — from case evaluation and evidence collection to drafting, filing, and representation before the Registrar or Court.' },
        ],
        disadvantages: [
            'Rectification proceedings can take 12–24 months or longer depending on the complexity and forum',
            'The applicant must prove "person aggrieved" status — mere public interest may not be sufficient',
            'If the registered proprietor provides evidence of genuine use, the cancellation on non-use grounds may fail',
            'Orders of the Registrar can be appealed to the High Court, further extending the timeline and costs',
            'The registered proprietor may file a counter-claim for rectification of the applicant\'s trademark',
            'Filing in the wrong jurisdiction or forum may result in procedural delays and additional costs',
        ],
        faqs: [
            { q: 'What is trademark rectification under Indian law?', a: 'Trademark rectification is a legal proceeding under Section 57 of the Trade Marks Act, 1999, that allows any aggrieved person to apply for the correction, modification, or removal of a trademark entry from the Register of Trademarks.' },
            { q: 'On what grounds can a trademark be rectified or removed?', a: 'Common grounds include: the mark was registered without sufficient cause, the registration was obtained by fraud, the mark conflicts with a prior registered/unregistered mark, the proprietor had no bona fide intention to use it, or the mark has not been used for 5 years and 3 months.' },
            { q: 'Who can file a trademark rectification application?', a: 'Any "person aggrieved" can file — this includes competitors, trademark applicants whose marks were refused due to the cited registration, and anyone whose business interests are adversely affected by the registered mark.' },
            { q: 'Where is the rectification application filed?', a: 'The application (Form TM-26) can be filed before the Registrar of Trademarks at the appropriate trademark office having jurisdiction based on the registered proprietor\'s address, or directly before the High Court.' },
            { q: 'What is the filing fee for trademark rectification?', a: 'The government fee for filing Form TM-26 before the Registrar is ₹3,000 per class for individuals and ₹5,000 per class for entities. E-filing attracts a 10% discount. High Court filing fees vary by jurisdiction.' },
            { q: 'How long does trademark rectification take?', a: 'Proceedings before the Registrar typically take 12–24 months, while High Court proceedings may take longer depending on the court\'s schedule. The timeline depends on evidence complexity, counter-statements, and hearing schedules.' },
            { q: 'Can a registered trademark owner defend against rectification?', a: 'Yes. The registered proprietor receives notice and has 2 months to file a counter-statement with evidence defending the validity of their registration. They can present arguments during the hearing to oppose the rectification.' },
            { q: 'How does Your Professional help with trademark rectification?', a: 'Your Professional provides comprehensive support — evaluating the merits of your case, gathering evidence, drafting the TM-26 application and Statement of Case, filing before the appropriate forum, and representing you throughout the proceedings.' },
        ],
        cta: {
            heading: 'Need to Rectify or Remove a Trademark?',
            subheading: 'Your Professional provides expert legal assistance for trademark rectification proceedings before the Registrar or High Court.',
            features: [
                'Free Case Evaluation & Legal Consultation',
                'Complete TM-26 Application Drafting & Filing',
                'Evidence Collection & Affidavit Preparation',
                'Representation Before Registrar or High Court',
            ],
        },
    },

// ─── 1. TRADEMARK REGISTRATION FOR E-COMMERCE ─────────────────────
    'trademark-registration-ecommerce': {
        slug: 'trademark-registration-ecommerce',
        title: 'Trademark Registration for E-commerce Brands in India',
        subtitle: 'Protect your online brand identity with Your Professional — secure trademark registration for Amazon Brand Registry, Flipkart Brand Protection, Meesho, and other e-commerce platforms with end-to-end expert assistance.',
        heroFeatures: [
            'Amazon, Flipkart & Meesho Brand Registry Eligible',
            'Complete TM Filing Under the Trade Marks Act, 1999',
            'Protection Against Counterfeit Listings & Brand Abuse',
            'Fast-Track Application with Dedicated IP Attorney',
        ],
        overview: {
            heading: 'Why Do E-commerce Sellers Need Trademark Registration?',
            paragraphs: [
                'Trademark registration for e-commerce is the process of securing legal rights over a brand name, logo, or tagline used to sell products or services on online marketplaces such as Amazon, Flipkart, Meesho, Myntra, and other digital platforms. A registered trademark under the Trade Marks Act, 1999 gives the brand owner exclusive rights to use the mark in commerce and take legal action against unauthorized sellers, counterfeit products, and brand impersonators.',
                'E-commerce platforms have introduced mandatory Brand Registry programs — Amazon Brand Registry, Flipkart Brand Protection, and similar initiatives — that require sellers to hold a registered trademark or at least an applied-for trademark (TM application number) to enroll. Brand Registry unlocks powerful tools including enhanced brand content (A+ Content), brand analytics, automated counterfeit detection, and the ability to report IP violations directly to the marketplace.',
                'Your Professional specializes in trademark registration tailored for e-commerce sellers and D2C brands. From conducting a comprehensive trademark search across all 45 classes, to filing the application with the Controller General of Patents, Designs and Trade Marks, to managing objections and oppositions, we ensure your brand is fully protected across every online and offline channel.',
            ],
            highlights: [
                { icon: '🛒', text: 'Mandatory for Amazon Brand Registry, Flipkart Brand Protection & Meesho enrollment' },
                { icon: '🛡️', text: 'Legal shield against counterfeit listings, hijackers & unauthorized resellers' },
                { icon: '📈', text: 'Unlocks A+ Content, brand analytics & enhanced listing features on marketplaces' },
                { icon: '⚖️', text: 'Grants exclusive legal rights under the Trade Marks Act, 1999 for 10 years (renewable)' },
            ],
        },
        types: [
            { title: 'Word Mark Registration', desc: 'Protects the brand name or product name in standard text form — ideal for sellers who use a distinctive brand name across multiple e-commerce platforms.' },
            { title: 'Logo/Device Mark Registration', desc: 'Protects the visual brand logo or graphical element used on product packaging, listings, and storefronts on online marketplaces.' },
            { title: 'Combined Mark (Word + Logo)', desc: 'Protects both the brand name and logo together as a single composite mark — recommended for e-commerce brands with a unified visual identity.' },
            { title: 'Tagline/Slogan Mark', desc: 'Protects unique brand taglines or slogans used in product listings, advertisements, and promotional campaigns on digital platforms.' },
        ],
        eligibility: [
            'Individual sellers or sole proprietors operating on any e-commerce marketplace in India.',
            'Partnership firms, LLPs, or companies selling products or services online.',
            'D2C (Direct-to-Consumer) brands with their own website or app alongside marketplace presence.',
            'Manufacturers, traders, or resellers seeking to establish and protect their own brand identity.',
            'Startups and MSMEs looking to enroll in Amazon Brand Registry, Flipkart Brand Protection, or similar programs.',
            'Foreign entities or NRIs selling products in India through e-commerce channels.',
            'Any person or business claiming to be the proprietor of a trademark used or proposed to be used in trade.',
        ],
        documents: [
            { category: 'Identity & Business Proof', items: ['PAN Card & Aadhaar Card of the applicant/proprietor', 'Certificate of Incorporation / Partnership Deed / LLP Agreement', 'GST Registration Certificate', 'MSME/Udyam Registration Certificate (if applicable)', 'Authorization letter or Power of Attorney for the IP attorney'] },
            { category: 'Brand & Trademark Details', items: ['Brand name to be registered (exact wording)', 'Logo in JPEG format (minimum 300 DPI resolution)', 'Description of goods/services and applicable trademark class(es)', 'Date of first use of the trademark (if already in use)', 'Screenshots of the brand as used on e-commerce listings'] },
            { category: 'E-commerce Platform Documents', items: ['Seller account details and store URLs on Amazon, Flipkart, Meesho, etc.', 'Product listing screenshots showing brand name and logo usage', 'Invoices or packaging samples bearing the trademark', 'Brand Registry enrollment confirmation (if previously attempted)', 'Any prior trademark search reports or correspondence'] },
        ],
        process: [
            { title: 'Free Brand Consultation & TM Search', desc: 'Our IP experts analyze your brand name and logo, conduct a comprehensive search across the Trade Marks Registry database (all 45 classes) to assess registrability and identify potential conflicts.', time: '1–2 days' },
            { title: 'Class Identification & Application Drafting', desc: 'Identify the correct Nice Classification class(es) for your e-commerce products/services and draft the trademark application with accurate goods/services description.', time: '1–2 days' },
            { title: 'Filing with the Trade Marks Registry', desc: 'File the trademark application (Form TM-A) electronically with the Controller General of Patents, Designs and Trade Marks. You receive the TM application number immediately for Brand Registry enrollment.', time: '1 day' },
            { title: 'Vienna Codification & Formality Check', desc: 'The Registry assigns Vienna Classification codes (for logo marks) and conducts a formality examination of the application documents and class specifications.', time: '15–30 days' },
            { title: 'Examination & Response to Objections', desc: 'A Trademark Examiner reviews the application and may raise objections under Sections 9 or 11 of the Trade Marks Act. Your Professional drafts and files a detailed response or attends the hearing on your behalf.', time: '30–60 days' },
            { title: 'Publication in Trade Marks Journal', desc: 'Once accepted, the trademark is published in the Trade Marks Journal for a 4-month opposition period during which any third party may file an opposition.', time: '4 months' },
            { title: 'Opposition Handling (If Any)', desc: 'If a third-party opposition is filed, our IP attorneys prepare and file a counter-statement, evidence, and attend hearings before the Registrar to defend your trademark.', time: '6–12 months (if opposed)' },
            { title: 'Registration Certificate & Brand Registry', desc: 'Upon successful completion, the Trade Marks Registry issues the Registration Certificate. We then assist you in enrolling in Amazon Brand Registry, Flipkart Brand Protection, and other platform programs.', time: '1–2 days after certificate' },
        ],
        fees: [
            { item: 'Government Fee — Individual/Startup/MSME (per class)', cost: '₹4,500' },
            { item: 'Government Fee — Other Entities (per class)', cost: '₹9,000' },
            { item: 'Professional Fee — Single Class Filing', cost: '₹1,500 – ₹3,000' },
            { item: 'Professional Fee — Multi-Class Filing (per additional class)', cost: '₹1,000 – ₹2,000' },
            { item: 'Trademark Objection Reply (if required)', cost: '₹2,500 – ₹5,000' },
        ],
        penalties: [
            { violation: 'Using an unregistered trademark with the ® symbol', penalty: 'Criminal offence under Section 107 of the Trade Marks Act — fine up to ₹2 lakh and imprisonment up to 3 years.' },
            { violation: 'Selling counterfeit/trademark-infringing products on e-commerce', penalty: 'Civil suit for damages, injunction, account of profits; criminal prosecution under Sections 103–104 with imprisonment up to 3 years and fine up to ₹2 lakh.' },
            { violation: 'Filing a trademark application with false information', penalty: 'Application rejection and potential criminal prosecution under Section 101 for falsifying entries in the Register.' },
            { violation: 'Failure to renew trademark after 10 years', penalty: 'Trademark removed from the Register; loss of all legal rights and Brand Registry privileges on e-commerce platforms.' },
        ],
        advantages: [
            { icon: '🏪', title: 'Brand Registry Access', desc: 'A registered trademark is mandatory for enrollment in Amazon Brand Registry, Flipkart Brand Protection, and Meesho Brand Programs — unlocking premium seller tools and brand control features.' },
            { icon: '🔒', title: 'Legal Protection Against Counterfeits', desc: 'Exclusive right to use the mark across India — take down counterfeit listings, file infringement suits, and claim statutory damages under the Trade Marks Act, 1999.' },
            { icon: '📊', title: 'Enhanced Listing Features', desc: 'Brand-registered sellers get access to A+ Content, Sponsored Brand Ads, Brand Analytics, Brand Story, and virtual product bundles on Amazon and similar tools on other platforms.' },
            { icon: '💰', title: 'Higher Business Valuation', desc: 'A registered trademark is an intangible asset on your balance sheet — it increases brand equity, investor confidence, and overall business valuation for funding rounds.' },
            { icon: '🌐', title: 'Pan-India & Global Protection', desc: 'Registration provides protection across all of India and serves as a foundation for international trademark filings under the Madrid Protocol in 130+ countries.' },
            { icon: '⚡', title: 'Deterrent Against Infringers', desc: 'The ® symbol on your products and listings serves as a visible deterrent to counterfeiters, copycats, and unauthorized sellers attempting to ride on your brand reputation.' },
            { icon: '📜', title: 'Valid for 10 Years (Renewable)', desc: 'Trademark registration is valid for 10 years from the date of application and can be renewed indefinitely in 10-year increments by filing Form TM-R.' },
            { icon: '🤝', title: 'Licensing & Franchise Opportunities', desc: 'A registered trademark can be licensed to authorized sellers, franchisees, or distributors via a Registered User Agreement, creating additional revenue streams.' },
        ],
        disadvantages: [
            'The complete registration process can take 8–18 months depending on objections and oppositions.',
            'Separate applications and government fees are required for each trademark class, increasing costs for sellers with diverse product ranges.',
            'Descriptive, generic, or common trade names may be refused registration under Section 9 of the Trade Marks Act.',
            'Trademarks must be actively used in commerce — non-use for 5 continuous years makes the mark vulnerable to cancellation under Section 47.',
            'The 4-month opposition window means any competitor or third party can challenge your trademark before registration.',
            'Post-registration enforcement against infringers on e-commerce platforms still requires active monitoring and complaint filing.',
        ],
        faqs: [
            { q: 'Can I apply for Amazon Brand Registry with a pending trademark application?', a: 'Yes. Amazon Brand Registry accepts trademarks that have a pending application (with serial/application number) or are already registered. Your Professional files your TM application and provides the application number typically within 1–2 working days for immediate Brand Registry enrollment.' },
            { q: 'Which trademark class should an e-commerce seller file under?', a: 'It depends on the products you sell. For example, Class 25 covers clothing and footwear, Class 18 covers bags and leather goods, Class 3 covers cosmetics, and Class 9 covers electronics. Your Professional conducts a detailed product analysis to identify the correct class(es) for comprehensive protection.' },
            { q: 'What is the difference between ™ and ® symbols?', a: 'The ™ symbol indicates a trademark that has been applied for but not yet registered — anyone can use it. The ® symbol can only be used after the trademark is officially registered by the Trade Marks Registry. Using ® without registration is a criminal offence under the Trade Marks Act, 1999.' },
            { q: 'How long does trademark registration take for e-commerce sellers?', a: 'The typical timeline is 8–12 months if there are no objections or oppositions. However, you receive the TM application number within 1–2 days of filing, which is sufficient for Brand Registry enrollment on most platforms.' },
            { q: 'Can I register a trademark for multiple e-commerce platforms with one application?', a: 'Yes. A single trademark registration protects your brand across all platforms and channels — Amazon, Flipkart, Meesho, Myntra, your own website, offline retail, and any other marketplace. You do not need separate registrations for each platform.' },
            { q: 'What happens if my trademark application receives an objection?', a: 'The Examiner may raise objections under Section 9 (absolute grounds) or Section 11 (relative grounds — similarity with existing marks). Your Professional drafts a detailed reply with legal arguments, evidence of distinctiveness, and prior use proof to overcome the objection.' },
            { q: 'Can I trademark my product name and brand logo separately?', a: 'Yes, and it is often recommended. Filing separate applications for the word mark (brand name) and device mark (logo) provides broader protection. If one is challenged, the other remains protected. Your Professional offers discounted multi-application packages.' },
            { q: 'What is the cost of trademark registration for e-commerce sellers?', a: 'The government fee is ₹4,500 per class for individuals, startups, and MSMEs, and ₹9,000 per class for other entities. Your Professional\'s professional fee starts at ₹1,500 per class, making the total cost highly affordable for online sellers.' },
        ],
        cta: {
            heading: 'Protect Your E-commerce Brand Today',
            subheading: 'Your Professional helps online sellers secure trademark registration and unlock Brand Registry on Amazon, Flipkart, Meesho & more.',
            features: [
                'Comprehensive TM Search & Filing in 1–2 Days',
                'Immediate Application Number for Brand Registry',
                'Expert Objection Handling & Hearing Representation',
                'Ongoing Brand Protection & Renewal Support',
            ],
        },
    },

    // ─── 2. TRADEMARK HEARING ─────────────────────────────────────────
    'trademark-hearing': {
        slug: 'trademark-hearing',
        title: 'Trademark Hearing Services in India',
        subtitle: 'Expert trademark hearing representation by Your Professional — appear before the Trademark Registrar for show cause hearings, opposition proceedings, and rectification matters with experienced IP attorneys.',
        heroFeatures: [
            'Experienced IP Attorneys for Registrar Hearings',
            'Show Cause, Opposition & Rectification Hearings',
            'Physical & Virtual Hearing Representation Across India',
            'High Success Rate in Overcoming TM Objections',
        ],
        overview: {
            heading: 'What is a Trademark Hearing?',
            paragraphs: [
                'A trademark hearing is a quasi-judicial proceeding conducted by the Registrar of Trade Marks under the Trade Marks Act, 1999, where the trademark applicant or their authorized attorney appears to present arguments, evidence, and legal submissions in response to objections raised during examination, opposition by third parties, or rectification applications. The hearing is a critical stage that determines whether a trademark will proceed to registration or be refused.',
                'Hearings are typically scheduled when a written response to an Examination Report (show cause hearing under Section 15) does not fully satisfy the Examiner, when an opposition is filed by a third party under Section 21, or when a rectification or cancellation petition is filed under Sections 47 or 57 of the Trade Marks Act. The Registrar may conduct hearings at any of the five Trade Marks Registry offices — Mumbai, Delhi, Kolkata, Chennai, or Ahmedabad — or via video conferencing as per the Trade Marks (Amendment) Rules, 2017.',
                'Your Professional provides end-to-end trademark hearing representation services across India. Our IP attorneys have extensive experience appearing before the Registrar of Trade Marks in show cause hearings, opposition hearings, and rectification proceedings. We prepare comprehensive written submissions, compile evidence portfolios, draft legal arguments citing relevant case law and statutory provisions, and represent your interests at the hearing to maximize the chances of a favorable outcome.',
            ],
            highlights: [
                { icon: '⚖️', text: 'Quasi-judicial proceeding before the Registrar of Trade Marks under the TM Act, 1999' },
                { icon: '📋', text: 'Covers show cause hearings (Sec. 15), opposition (Sec. 21) & rectification (Sec. 47/57)' },
                { icon: '🏛️', text: 'Conducted at 5 TM Registry offices or via video conferencing across India' },
                { icon: '🎯', text: 'Outcome determines whether trademark proceeds to registration or is refused' },
            ],
        },
        types: [
            { title: 'Show Cause Hearing (Section 15)', desc: 'Scheduled when the Examiner is not satisfied with the written reply to the Examination Report. The applicant must appear and present oral arguments to overcome objections under Sections 9 or 11 of the Trade Marks Act.' },
            { title: 'Opposition Hearing (Section 21)', desc: 'Arises when a third party files a Notice of Opposition against a published trademark. Both parties present evidence and arguments before the Registrar, who then decides whether to allow or refuse registration.' },
            { title: 'Rectification Hearing (Section 47/57)', desc: 'Initiated when an aggrieved party files a petition to remove or vary a registered trademark on grounds of non-use (Section 47) or invalidity (Section 57). Both the registered proprietor and petitioner are heard.' },
            { title: 'Interlocutory Hearing', desc: 'Procedural hearings for interim matters such as extension of time, amendment of application, consolidation of proceedings, or adjournment requests during pending trademark cases.' },
        ],
        eligibility: [
            'Trademark applicants who have received a Show Cause Hearing notice from the Registrar after filing an Examination Report reply.',
            'Applicants whose trademarks have been opposed by third parties and hearing dates have been scheduled.',
            'Registered trademark proprietors defending against rectification or cancellation petitions.',
            'Third parties who have filed opposition or rectification proceedings and need representation at the hearing.',
            'Authorized agents or attorneys holding a valid Power of Attorney (Form TM-M) on behalf of the trademark owner.',
            'Foreign applicants or NRIs who require representation before the Indian Trade Marks Registry through an agent for service in India.',
        ],
        documents: [
            { category: 'Hearing Notice & Case Documents', items: ['Hearing notice/Show Cause notice issued by the Registrar of Trade Marks', 'Copy of the original trademark application (Form TM-A)', 'Examination Report and written reply filed with the Registry', 'Opposition notice (Form TM-O) and counter-statement (Form TM-C) if applicable', 'Any prior correspondence or office actions from the Registry'] },
            { category: 'Evidence & Supporting Documents', items: ['Evidence of prior use — invoices, bills, advertisements, packaging samples', 'Sales figures, revenue data, and market presence documentation', 'Consumer surveys, media coverage, or brand recognition evidence', 'Affidavits of use sworn before a Notary Public or Magistrate', 'Relevant case law citations and legal precedent compilation'] },
            { category: 'Authorization & Identity Documents', items: ['Power of Attorney (Form TM-M) in favor of the representing attorney', 'Identity proof of the trademark applicant/proprietor (PAN, Aadhaar)', 'Certificate of Incorporation / Partnership Deed / LLP Agreement', 'Board Resolution authorizing representation at the hearing', 'Vakalatnamah or authorization letter for the appearing advocate'] },
        ],
        process: [
            { title: 'Case Analysis & Hearing Notice Review', desc: 'Our IP attorneys thoroughly review the hearing notice, Examination Report, objections raised, prior replies, and all case records to understand the grounds of refusal or opposition.', time: '1–2 days' },
            { title: 'Legal Research & Strategy Development', desc: 'Conduct in-depth research of relevant case law, Registrar precedents, and IPAB/High Court rulings to develop a robust legal strategy addressing each ground of objection or opposition.', time: '2–3 days' },
            { title: 'Written Submissions Preparation', desc: 'Draft comprehensive written submissions citing statutory provisions (Sections 9, 11, 15, 21, 30, 47, 57 of the TM Act), evidence of distinctiveness, prior use, and supporting case law for filing with the Registrar.', time: '2–4 days' },
            { title: 'Evidence Compilation & Affidavit Drafting', desc: 'Compile and organize all supporting evidence including sales invoices, advertisements, market surveys, and brand usage proof. Draft affidavits of use with proper notarization and attestation.', time: '2–3 days' },
            { title: 'Pre-Hearing Preparation & Mock Arguments', desc: 'Conduct a pre-hearing briefing session with the applicant, finalize arguments, anticipate counter-arguments, and prepare rebuttals to ensure comprehensive coverage of all issues.', time: '1 day' },
            { title: 'Appearance Before the Registrar', desc: 'Our authorized IP attorney appears before the Registrar of Trade Marks at the designated Registry office (Mumbai, Delhi, Kolkata, Chennai, or Ahmedabad) or via video conferencing to present oral arguments and evidence.', time: 'Hearing date' },
            { title: 'Post-Hearing Follow-Up & Compliance', desc: 'After the hearing, we track the Registrar\'s order, file any additional documents requested, comply with directions issued, and advise on further action including appeal to the High Court if the order is adverse.', time: '7–30 days' },
        ],
        fees: [
            { item: 'Show Cause Hearing — Professional Fee', cost: '₹5,000 – ₹15,000' },
            { item: 'Opposition Hearing — Professional Fee', cost: '₹10,000 – ₹25,000' },
            { item: 'Rectification/Cancellation Hearing — Professional Fee', cost: '₹15,000 – ₹30,000' },
            { item: 'Outstation Hearing — Travel & Appearance Charges', cost: '₹5,000 – ₹10,000 (additional)' },
            { item: 'Written Submissions & Evidence Compilation', cost: '₹3,000 – ₹8,000' },
        ],
        penalties: [
            { violation: 'Non-appearance at scheduled hearing without adjournment request', penalty: 'The Registrar may decide the matter ex parte — trademark application can be abandoned/refused, or opposition/rectification decided against the absent party under Rule 39.' },
            { violation: 'Failure to file evidence within prescribed timelines', penalty: 'The defaulting party is deemed to have abandoned their case. In opposition proceedings, failure to file evidence by the opponent results in the opposition being deemed withdrawn under Rule 46.' },
            { violation: 'Filing false evidence or misleading affidavits', penalty: 'Criminal prosecution under Section 101 of the Trade Marks Act and Indian Penal Code provisions for perjury. Evidence may be struck off and adverse inference drawn by the Registrar.' },
            { violation: 'Not complying with post-hearing directions', penalty: 'Case may be decided adversely, application refused, or registration cancelled. Costs may be imposed by the Registrar on the non-complying party.' },
        ],
        advantages: [
            { icon: '🎯', title: 'Expert Legal Representation', desc: 'Your Professional\'s IP attorneys specialize in trademark hearings with extensive experience in presenting arguments before the Registrar at all five Registry offices across India.' },
            { icon: '📊', title: 'High Success Rate', desc: 'Our evidence-based approach, thorough case law research, and persuasive advocacy have resulted in a high success rate in overcoming examination objections and defeating oppositions.' },
            { icon: '🏛️', title: 'Pan-India Hearing Coverage', desc: 'We represent clients at all Trade Marks Registry offices — Mumbai, Delhi, Kolkata, Chennai, and Ahmedabad — as well as via video conferencing as permitted under the amended Rules.' },
            { icon: '📝', title: 'Comprehensive Written Submissions', desc: 'Every hearing is backed by meticulously prepared written submissions, organized evidence portfolios, and detailed case law citations that strengthen your position before the Registrar.' },
            { icon: '⏱️', title: 'Timely Compliance & Follow-Up', desc: 'We ensure strict compliance with all procedural timelines, filing deadlines, and post-hearing directions to avoid adverse ex parte orders or case abandonment.' },
            { icon: '💼', title: 'End-to-End Case Management', desc: 'From initial case analysis through hearing appearance to post-hearing compliance and appeal advisory — Your Professional manages the entire hearing lifecycle seamlessly.' },
            { icon: '🔄', title: 'Virtual Hearing Support', desc: 'For hearings conducted via video conferencing, we handle all technical setup, document sharing, and digital submission requirements on your behalf.' },
            { icon: '⚖️', title: 'Appeal Advisory & Escalation', desc: 'If the Registrar\'s order is unfavorable, we advise on appellate options including appeals to the High Court under Section 91 of the Trade Marks Act and prepare the necessary documentation.' },
        ],
        disadvantages: [
            'Hearing outcomes are discretionary and depend on the Registrar\'s assessment — there is no guarantee of a favorable order even with strong arguments.',
            'Opposition and rectification hearings can involve multiple adjournments, extending the timeline by several months.',
            'Outstation hearings at distant Registry offices may incur additional travel and accommodation costs.',
            'Complex cases involving well-known marks or multi-party oppositions may require multiple hearing sessions and substantially higher legal costs.',
            'The Registrar\'s decision can be appealed to the High Court, but appeals involve additional time, expense, and legal complexity.',
            'Video conferencing hearings may face technical disruptions that can lead to rescheduling and further delays in the proceedings.',
        ],
        faqs: [
            { q: 'When is a trademark hearing scheduled?', a: 'A hearing is scheduled when (1) your written reply to the Examination Report does not fully satisfy the Examiner under Section 15, (2) a third party files an opposition against your published trademark under Section 21, or (3) a rectification/cancellation petition is filed under Sections 47 or 57 of the Trade Marks Act, 1999.' },
            { q: 'Can I attend a trademark hearing virtually?', a: 'Yes. Since the Trade Marks (Amendment) Rules, 2017, the Registrar conducts hearings via video conferencing. Your Professional can represent you at both physical hearings at Registry offices and virtual hearings without requiring your personal presence.' },
            { q: 'What happens if I miss the scheduled hearing date?', a: 'If you fail to appear without requesting an adjournment in advance, the Registrar may decide the matter ex parte. For examination hearings, your application may be refused or abandoned. For opposition hearings, the case may be decided against you in your absence.' },
            { q: 'How should I prepare for a trademark show cause hearing?', a: 'Your Professional prepares comprehensive written submissions addressing each objection, compiles evidence of brand use and distinctiveness, researches relevant case law precedents, and conducts a pre-hearing briefing. Our attorney then presents structured oral arguments before the Registrar.' },
            { q: 'What are common grounds for objections at show cause hearings?', a: 'Common objections include descriptiveness or lack of distinctiveness (Section 9), deceptive similarity with prior marks (Section 11), use of prohibited marks or emblems (Section 9(2)), and geographical indications. Our attorneys develop specific strategies to counter each type of objection.' },
            { q: 'Can the Registrar\'s hearing decision be appealed?', a: 'Yes. If the Registrar refuses registration or passes an adverse order, you can file an appeal before the High Court having jurisdiction under Section 91 of the Trade Marks Act, 1999. Your Professional advises on the merits of an appeal and assists with the filing process.' },
            { q: 'How much does trademark hearing representation cost?', a: 'Show cause hearing representation typically costs ₹5,000–₹15,000, opposition hearings ₹10,000–₹25,000, and rectification hearings ₹15,000–₹30,000. Outstation hearings may incur additional charges of ₹5,000–₹10,000. Your Professional provides transparent, all-inclusive pricing.' },
            { q: 'Do I need to be personally present at the hearing?', a: 'No. Your Professional\'s IP attorney appears on your behalf with a valid Power of Attorney (Form TM-M). You do not need to be personally present at either physical or virtual hearings. We handle all aspects of representation and keep you informed of the outcome.' },
        ],
        cta: {
            heading: 'Facing a Trademark Hearing? Get Expert Representation',
            subheading: 'Your Professional\'s IP attorneys appear before the Registrar to defend your trademark with well-prepared arguments and evidence.',
            features: [
                'Show Cause, Opposition & Rectification Hearing Coverage',
                'Pan-India Representation at All 5 Registry Offices',
                'Comprehensive Written Submissions & Evidence Portfolios',
                'Post-Hearing Compliance & Appeal Advisory',
            ],
        },
    },

// ─── 1. RESPONSE TO TRADEMARK OBJECTION ─────────────────────────────
    'response-to-trademark-objection': {
        slug: 'response-to-trademark-objection',
        title: 'Response to Trademark Objection — File Your Reply with Your Professional',
        subtitle: 'Draft and file a compelling response to a trademark examination report within the statutory 30-day window — expert legal assistance by Your Professional.',
        heroFeatures: [
            'Expert Drafting of Examination Report Reply',
            'Filing Within Statutory 30-Day Deadline',
            'Hearing Representation Before the Registrar',
            'End-to-End Support by Your Professional',
        ],
        overview: {
            heading: 'What is a Response to Trademark Objection?',
            paragraphs: [
                'After filing a trademark application in India, the Trademark Examiner reviews it under Sections 9 and 11 of the Trade Marks Act, 1999. If the Examiner finds grounds for refusal — such as descriptiveness, deceptive similarity to an existing mark, or lack of distinctiveness — an Examination Report is issued raising objections.',
                'The applicant must file a written response (counter-statement) within 30 days from the date of the Examination Report. This response addresses each objection raised, providing legal arguments, evidence of distinctiveness, prior use documentation, and supporting affidavits to persuade the Registrar to accept the mark.',
                'If the response is not filed within the prescribed time, or if the Registrar is not satisfied with the reply, the application may be called for a hearing under Rule 39 of the Trade Marks Rules, 2017. Failure to respond or attend the hearing results in abandonment of the application. Your Professional provides expert assistance in drafting persuasive responses and representing applicants at hearings before the Registrar.',
            ],
            highlights: [
                { icon: '📝', text: 'Mandatory reply to Examination Report under Rule 36 of Trade Marks Rules, 2017' },
                { icon: '⏱️', text: '30-day statutory deadline from date of issuance of Examination Report' },
                { icon: '⚖️', text: 'Addresses objections under Sections 9 (absolute grounds) and 11 (relative grounds)' },
                { icon: '🛡️', text: 'Prevents abandonment and protects your trademark investment' },
            ],
        },
        eligibility: [
            'Any applicant who has filed a trademark application (TM-A) with the Indian Trade Marks Registry and received an Examination Report with objections.',
            'Proprietors, partners, companies, LLPs, trusts, societies, and other legal entities who are applicants on record.',
            'Authorised trademark agents or attorneys holding a valid Power of Attorney (Form TM-48) on behalf of the applicant.',
            'Applicants whose marks have been objected to under Section 9 (absolute grounds — descriptiveness, generic terms, deceptive marks) of the Trade Marks Act, 1999.',
            'Applicants whose marks have been objected to under Section 11 (relative grounds — similarity to prior marks) of the Trade Marks Act, 1999.',
            'Applicants who have received a show-cause hearing notice under Rule 39 of the Trade Marks Rules, 2017.',
        ],
        documents: [
            {
                category: 'Application & Objection Documents',
                items: [
                    'Copy of the original trademark application (Form TM-A) with application number',
                    'Complete Examination Report issued by the Trademark Examiner',
                    'Any prior correspondence with the Trade Marks Registry regarding the application',
                    'Details of the trademark class(es) and goods/services specification',
                ],
            },
            {
                category: 'Evidence & Supporting Documents',
                items: [
                    'Affidavit of use with evidence of prior use (invoices, advertisements, packaging)',
                    'Sales figures, turnover data, and market share documentation',
                    'Certificates of registration in other jurisdictions (if applicable)',
                    'Consumer survey reports or media coverage demonstrating distinctiveness',
                    'Letters of consent from cited mark owners (for Section 11 objections)',
                ],
            },
            {
                category: 'Legal & Identity Documents',
                items: [
                    'Power of Attorney (Form TM-48) in favour of the trademark agent or attorney',
                    'Identity proof of the applicant (PAN card, Aadhaar, passport, or certificate of incorporation)',
                    'Board resolution authorising the signatory (for companies and LLPs)',
                ],
            },
        ],
        process: [
            { title: 'Review the Examination Report', desc: 'Carefully analyse each objection raised by the Trademark Examiner — identify whether they are under Section 9 (absolute grounds) or Section 11 (relative grounds) and assess the strength of each objection.', time: '1–2 days' },
            { title: 'Gather Evidence of Distinctiveness', desc: 'Collect invoices, advertisements, sales data, affidavits, and any other evidence that demonstrates the trademark has acquired distinctiveness through use in trade.', time: '2–5 days' },
            { title: 'Draft the Counter-Statement', desc: 'Prepare a detailed written response addressing each objection with legal arguments, case law citations, and supporting evidence. Your Professional ensures the response is comprehensive and legally sound.', time: '3–5 days' },
            { title: 'File the Response Online', desc: 'Submit the counter-statement through the IP India online portal (ipindia.gov.in) within the 30-day deadline. Attach all supporting documents and evidence.', time: '1 day' },
            { title: 'Attend the Show-Cause Hearing', desc: 'If the Registrar is not satisfied with the written response, a hearing is scheduled. Your Professional represents you before the Registrar, presenting oral arguments and additional evidence.', time: 'As scheduled' },
            { title: 'Receive Acceptance or Appeal', desc: 'Upon acceptance, the mark proceeds to publication in the Trade Marks Journal. If refused, Your Professional advises on filing an appeal before the Intellectual Property Appellate Board (IPAB) or High Court.', time: '1–3 months' },
        ],
        fees: [
            { item: 'Government Fee for Filing Response (per class)', cost: '₹0 (no additional fee for response)' },
            { item: 'Professional Fee — Response Drafting (Your Professional)', cost: '₹3,000 – ₹8,000' },
            { item: 'Hearing Representation Fee (Your Professional)', cost: '₹5,000 – ₹15,000' },
            { item: 'Affidavit Preparation & Notarisation', cost: '₹1,000 – ₹3,000' },
            { item: 'Appeal Filing Fee (if refused — per class)', cost: '₹3,000 – ₹10,000' },
        ],
        penalties: [
            { violation: 'Failure to file response within 30 days', penalty: 'Application deemed abandoned under Rule 36 of the Trade Marks Rules, 2017 — the mark will not proceed to registration.' },
            { violation: 'Non-attendance at show-cause hearing', penalty: 'Application treated as abandoned; the Registrar may refuse the application ex parte.' },
            { violation: 'Submission of false or misleading evidence', penalty: 'Application liable to refusal; potential criminal liability under Section 101 of the Trade Marks Act, 1999 for falsification.' },
        ],
        advantages: [
            { icon: '🛡️', title: 'Protects Your Application', desc: 'A well-drafted response prevents your trademark application from being abandoned or refused, preserving your filing date priority.' },
            { icon: '📊', title: 'Builds Evidentiary Record', desc: 'Compiling evidence of use and distinctiveness strengthens your trademark portfolio and creates a record that supports future enforcement actions.' },
            { icon: '⚖️', title: 'Expert Legal Argumentation', desc: 'Your Professional leverages case law precedents and statutory provisions to construct persuasive legal arguments tailored to each objection.' },
            { icon: '⏱️', title: 'Timely Compliance', desc: 'Professional handling ensures the response is filed well within the 30-day statutory deadline, avoiding abandonment risks.' },
            { icon: '🎯', title: 'Higher Acceptance Rate', desc: 'Professionally drafted responses with proper evidence and legal citations significantly improve the likelihood of trademark acceptance.' },
            { icon: '🏛️', title: 'Hearing Representation', desc: 'Your Professional provides experienced advocacy before the Registrar at show-cause hearings, presenting oral arguments effectively.' },
            { icon: '🔄', title: 'Appeal Support', desc: 'If the application is refused despite the response, Your Professional guides you through the appellate process before the IPAB or High Court.' },
        ],
        faqs: [
            { q: 'What happens if I do not file a response to the Examination Report?', a: 'If no response is filed within 30 days from the date of the Examination Report, your trademark application is treated as abandoned under Rule 36 of the Trade Marks Rules, 2017. You will lose your filing date priority and will need to file a fresh application with new fees.' },
            { q: 'Can the 30-day deadline for filing a response be extended?', a: 'The Trade Marks Rules, 2017 provide a strict 30-day window. However, in practice, applicants may request an adjournment or extension at the hearing stage. It is strongly advisable to file the response within the prescribed time to avoid complications.' },
            { q: 'What are absolute grounds and relative grounds for objection?', a: 'Absolute grounds (Section 9) relate to the inherent nature of the mark — e.g., descriptiveness, generic terms, marks lacking distinctiveness, or deceptive marks. Relative grounds (Section 11) relate to conflict with earlier marks — e.g., identical or deceptively similar marks already registered or applied for in the same or similar class.' },
            { q: 'What evidence can strengthen my response?', a: 'Key evidence includes invoices and sales records showing use of the mark in trade, advertising expenditure data, media coverage, consumer surveys, social media presence, certificates of registration in other countries, and affidavits from trade professionals attesting to the mark\'s distinctiveness.' },
            { q: 'What happens at a show-cause hearing?', a: 'A show-cause hearing is scheduled if the Registrar is not satisfied with the written response. At the hearing, the applicant or their authorised agent presents oral arguments before the Registrar, explains the evidence, and addresses any remaining concerns. The Registrar then decides to accept or refuse the mark.' },
            { q: 'Can Your Professional handle the entire objection response process?', a: 'Yes. Your Professional manages the complete process — from analysing the Examination Report and gathering evidence to drafting the counter-statement, filing it online, and representing you at any hearing before the Trade Marks Registry.' },
            { q: 'What if my trademark is refused after the hearing?', a: 'If the Registrar refuses your trademark, you can file an appeal before the High Court (following the dissolution of IPAB). Your Professional advises on the merits of an appeal and assists with the appellate proceedings.' },
            { q: 'Is there an additional government fee for filing the response?', a: 'No. There is no separate government fee for filing a response to the Examination Report. The fees were already paid at the time of filing the original trademark application (Form TM-A). However, professional fees for drafting and representation apply separately.' },
        ],
        cta: {
            heading: 'Respond to Your Trademark Objection Before the Deadline',
            subheading: 'Your Professional drafts expert responses and represents you at hearings — protect your trademark today.',
            features: [
                'Expert Examination Report Analysis',
                'Legally Sound Counter-Statement Drafting',
                'Hearing Representation Before Registrar',
                'Complete Filing & Follow-Up Support',
            ],
        },
    },

    // ─── 2. TRADEMARK INFRINGEMENT ───────────────────────────────────────
    'trademark-infringement': {
        slug: 'trademark-infringement',
        title: 'Trademark Infringement — Legal Action & Remedies with Your Professional',
        subtitle: 'Protect your brand from unauthorised use — Your Professional provides comprehensive legal remedies under Sections 29 and 30 of the Trade Marks Act, 1999.',
        heroFeatures: [
            'Cease & Desist Notices for Immediate Action',
            'Civil & Criminal Remedies Under the Trade Marks Act',
            'Injunction, Damages & Account of Profits',
            'Expert Enforcement Support by Your Professional',
        ],
        overview: {
            heading: 'What is Trademark Infringement?',
            paragraphs: [
                'Trademark infringement occurs when a person uses a mark that is identical or deceptively similar to a registered trademark without the authorisation of the registered proprietor, in relation to goods or services for which the mark is registered. Under Section 29 of the Trade Marks Act, 1999, such unauthorised use constitutes infringement and the proprietor has the right to initiate legal proceedings.',
                'The Trade Marks Act, 1999 provides both civil remedies (injunction, damages, account of profits, delivery up of infringing goods) under Section 135 and criminal remedies (imprisonment up to 3 years and fine up to ₹2,00,000) under Sections 103 and 104. Section 30 lays down certain acts that do not constitute infringement — such as honest concurrent use, descriptive use, and use by a registered user.',
                'Your Professional provides end-to-end trademark enforcement services — from conducting infringement investigations and sending cease-and-desist notices to filing civil suits for permanent injunction and damages, as well as initiating criminal complaints for counterfeiting. Timely action is critical to prevent dilution of your brand and loss of goodwill.',
            ],
            highlights: [
                { icon: '⚖️', text: 'Governed by Sections 29, 30, 103, 104 & 135 of the Trade Marks Act, 1999' },
                { icon: '🚫', text: 'Covers identical marks, deceptively similar marks, and well-known trademarks' },
                { icon: '🔒', text: 'Civil remedies include injunction, damages, and account of profits' },
                { icon: '⚠️', text: 'Criminal penalties include imprisonment up to 3 years and fine up to ₹2,00,000' },
            ],
        },
        types: [
            { title: 'Use of Identical Mark on Identical Goods/Services', desc: 'Using a mark identical to a registered trademark in relation to identical goods or services — the clearest form of infringement under Section 29(1).' },
            { title: 'Use of Similar Mark Causing Confusion', desc: 'Using a mark similar to a registered trademark on identical or similar goods/services, where such use is likely to cause confusion among the public — under Section 29(2).' },
            { title: 'Use on Dissimilar Goods (Well-Known Marks)', desc: 'Using a mark identical or similar to a well-known trademark even on dissimilar goods or services, where such use takes unfair advantage of or is detrimental to the distinctive character or repute of the registered mark — under Section 29(4).' },
            { title: 'Use as Trade Name or Domain Name', desc: 'Unauthorised use of a registered trademark as a business name, trading style, or internet domain name that causes confusion with the registered mark.' },
            { title: 'Counterfeiting & Falsification', desc: 'Manufacturing or dealing in goods bearing a false trademark that is identical to a registered mark — a criminal offence under Sections 103 and 104 with imprisonment and fine.' },
        ],
        eligibility: [
            'The registered proprietor of a trademark registered under the Trade Marks Act, 1999 (a valid registration certificate is required).',
            'A registered user of the trademark who has been authorised by the proprietor under Section 49 of the Act.',
            'An assignee or licensee with a valid assignment or licence agreement that grants enforcement rights.',
            'Any aggrieved person in the case of well-known trademarks that are being misused on dissimilar goods or services.',
            'The mark must be validly registered and in force — an expired or surrendered registration cannot be the basis of an infringement action.',
            'The infringing use must be in the course of trade — personal or non-commercial use generally does not constitute infringement.',
            'The alleged infringement must have occurred within the territorial jurisdiction of the court where the suit is filed.',
        ],
        documents: [
            {
                category: 'Trademark Registration Documents',
                items: [
                    'Trademark Registration Certificate issued by the Trade Marks Registry',
                    'Complete specification of goods/services covered under the registration',
                    'Evidence of renewal if the registration has been renewed',
                    'Details of any assignment, licence, or registered user agreements',
                ],
            },
            {
                category: 'Evidence of Infringement',
                items: [
                    'Samples, photographs, or screenshots of the infringing goods, packaging, or advertisements',
                    'Purchase receipts, invoices, or trap purchase evidence from the infringing party',
                    'Market survey or investigator\'s report documenting the infringing use',
                    'Domain name WHOIS records, website screenshots, and social media evidence (if applicable)',
                    'Comparison chart showing similarity between the registered mark and the infringing mark',
                ],
            },
            {
                category: 'Legal & Supporting Documents',
                items: [
                    'Affidavit of the proprietor detailing the history of the mark, prior use, and reputation',
                    'Sales figures, advertising expenditure, and revenue data for the registered mark',
                    'Copies of any prior cease-and-desist notices sent to the infringer',
                    'Power of Attorney (Vakalatnama) in favour of the advocate',
                ],
            },
        ],
        process: [
            { title: 'Infringement Investigation', desc: 'Your Professional conducts a thorough investigation to identify the infringing party, collect evidence (trap purchases, photographs, invoices), and assess the scope and scale of the infringement.', time: '3–7 days' },
            { title: 'Send Cease & Desist Notice', desc: 'A formal legal notice is sent to the infringer demanding immediate cessation of the infringing activity, destruction of infringing goods, and compensation — providing an opportunity to resolve the matter without litigation.', time: '2–3 days' },
            { title: 'File Suit for Injunction & Damages', desc: 'If the infringer does not comply, a civil suit is filed before the District Court or High Court seeking interim and permanent injunction, damages, account of profits, and delivery up of infringing goods.', time: '1–2 weeks' },
            { title: 'Obtain Interim Injunction (Ex-Parte)', desc: 'Your Professional moves an urgent application for an ex-parte interim injunction to immediately restrain the infringer from using the mark pending trial — often granted within days in clear cases.', time: '3–7 days' },
            { title: 'Criminal Complaint (If Applicable)', desc: 'For counterfeiting cases, a criminal complaint is filed under Sections 103 and 104 of the Act, and police action including search and seizure of infringing goods can be initiated.', time: '1–2 weeks' },
            { title: 'Trial & Evidence Presentation', desc: 'During the trial, evidence of infringement, reputation of the mark, and extent of damages is presented. Your Professional handles witness examination, cross-examination, and legal arguments.', time: '6–24 months' },
            { title: 'Judgment & Enforcement', desc: 'Upon a favourable judgment, the court grants permanent injunction, awards damages or account of profits, and orders delivery up or destruction of infringing goods. Your Professional assists with enforcement of the decree.', time: 'As per court' },
        ],
        fees: [
            { item: 'Cease & Desist Notice Drafting (Your Professional)', cost: '₹5,000 – ₹15,000' },
            { item: 'Court Fee for Civil Suit (varies by jurisdiction & claim amount)', cost: '₹5,000 – ₹50,000+' },
            { item: 'Professional Fee — Civil Litigation (Your Professional)', cost: '₹25,000 – ₹2,00,000+' },
            { item: 'Criminal Complaint Filing & Police Action', cost: '₹10,000 – ₹50,000' },
            { item: 'Investigation & Evidence Collection', cost: '₹10,000 – ₹30,000' },
        ],
        penalties: [
            { violation: 'Infringement of a registered trademark (Section 29)', penalty: 'Civil remedies: Permanent injunction, damages, account of profits, delivery up, and costs of litigation as ordered by the court.' },
            { violation: 'Falsifying or falsely applying a trademark (Section 103)', penalty: 'Criminal offence: Imprisonment of not less than 6 months (extendable to 3 years) and fine of not less than ₹50,000 (extendable to ₹2,00,000).' },
            { violation: 'Selling goods with a false trademark (Section 104)', penalty: 'Criminal offence: Imprisonment of not less than 6 months (extendable to 3 years) and fine of not less than ₹50,000 (extendable to ₹2,00,000).' },
            { violation: 'Applying false trade description (Section 107)', penalty: 'Criminal offence: Imprisonment up to 3 years and/or fine. Police may seize goods under a search warrant issued by a Magistrate.' },
        ],
        advantages: [
            { icon: '🛡️', title: 'Brand Protection', desc: 'Legal action against infringers safeguards your brand identity, prevents consumer confusion, and preserves the goodwill you have built over years.' },
            { icon: '💰', title: 'Financial Compensation', desc: 'Courts can award substantial damages and account of profits — ensuring you are compensated for losses caused by the unauthorised use of your mark.' },
            { icon: '🚫', title: 'Immediate Restraint', desc: 'Ex-parte interim injunctions can be obtained within days, immediately stopping the infringer from causing further damage to your brand.' },
            { icon: '⚖️', title: 'Dual Remedies — Civil & Criminal', desc: 'The Trade Marks Act provides both civil (injunction, damages) and criminal (imprisonment, fine) remedies, offering comprehensive enforcement options.' },
            { icon: '🌐', title: 'Online & Offline Enforcement', desc: 'Enforcement actions extend to e-commerce platforms, social media, domain names, and physical marketplaces — covering all channels of infringement.' },
            { icon: '📢', title: 'Deterrent Effect', desc: 'Successful enforcement actions serve as a strong deterrent to potential infringers, reducing the risk of future misuse of your trademark.' },
            { icon: '🏛️', title: 'Strengthens Registration', desc: 'Active enforcement demonstrates use of the mark in trade and strengthens the validity of your registration against challenges or cancellation actions.' },
            { icon: '🤝', title: 'Negotiated Settlements', desc: 'Many infringement disputes are resolved through negotiated settlements, coexistence agreements, or licensing arrangements — Your Professional facilitates favourable outcomes.' },
        ],
        faqs: [
            { q: 'What constitutes trademark infringement under Indian law?', a: 'Under Section 29 of the Trade Marks Act, 1999, infringement occurs when a person uses a mark identical or deceptively similar to a registered trademark, without authorisation, in the course of trade, in relation to goods or services covered by the registration. This includes use on packaging, advertising, business names, and domain names.' },
            { q: 'What is the difference between infringement and passing off?', a: 'Infringement is a statutory remedy available only to registered trademark owners under the Trade Marks Act, 1999. Passing off is a common law remedy available to both registered and unregistered trademark owners, based on misrepresentation causing damage to goodwill. Infringement requires a valid registration; passing off requires proof of reputation, misrepresentation, and damage.' },
            { q: 'Can I take action against someone using a similar (not identical) mark?', a: 'Yes. Section 29(2) covers the use of marks that are similar (not just identical) to the registered trademark on identical or similar goods/services, where such use is likely to cause confusion among the public. The test is whether an average consumer would be confused or deceived.' },
            { q: 'What is an ex-parte interim injunction?', a: 'An ex-parte interim injunction is a court order granted without hearing the other party, in urgent cases where delay would cause irreparable harm. In trademark infringement cases, courts routinely grant ex-parte injunctions to immediately restrain the infringer pending trial.' },
            { q: 'What are the criminal penalties for trademark counterfeiting?', a: 'Under Sections 103 and 104 of the Trade Marks Act, 1999, counterfeiting is punishable with imprisonment of not less than 6 months (extendable to 3 years) and a fine of not less than ₹50,000 (extendable to ₹2,00,000). Police can conduct search and seizure operations under a Magistrate\'s warrant.' },
            { q: 'Can I take action against infringement on e-commerce platforms?', a: 'Yes. Most e-commerce platforms (Amazon, Flipkart, Meesho, etc.) have brand protection programs and IP reporting mechanisms. Your Professional can file takedown requests on these platforms and also initiate legal proceedings against sellers and platforms in appropriate cases.' },
            { q: 'How long does a trademark infringement case take in India?', a: 'While interim injunctions can be obtained within days to weeks, a full trial in a trademark infringement case typically takes 2–5 years depending on the court, complexity of the case, and parties involved. Commercial Courts Act, 2015 has expedited timelines in some jurisdictions.' },
            { q: 'Does Your Professional handle the entire infringement process?', a: 'Yes. Your Professional manages the complete enforcement process — from investigation and cease-and-desist notices to filing civil suits, obtaining injunctions, initiating criminal complaints, and representing you through trial and enforcement of the court decree.' },
        ],
        cta: {
            heading: 'Stop Trademark Infringement — Protect Your Brand Now',
            subheading: 'Your Professional provides comprehensive enforcement — cease & desist notices, civil suits, and criminal complaints.',
            features: [
                'Infringement Investigation & Evidence Collection',
                'Cease & Desist Notices',
                'Civil Suits for Injunction & Damages',
                'Criminal Complaints for Counterfeiting',
            ],
        },
    },

    // ─── 3. TRADEMARK ASSIGNMENT ─────────────────────────────────────────
    'trademark-assignment': {
        slug: 'trademark-assignment',
        title: 'Trademark Assignment — Transfer Ownership with Your Professional',
        subtitle: 'Transfer trademark ownership seamlessly using Form TM-23 or TM-24 — with or without goodwill — expert assistance by Your Professional.',
        heroFeatures: [
            'Assignment With or Without Goodwill of the Business',
            'Filing of Form TM-23 (By Assignor) or TM-24 (By Assignee)',
            'Recordal in the Register of Trademarks',
            'Complete Documentation & Filing by Your Professional',
        ],
        overview: {
            heading: 'What is Trademark Assignment?',
            paragraphs: [
                'Trademark assignment is the legal process of transferring ownership of a registered or pending trademark from one party (the assignor) to another party (the assignee). Under Section 37 of the Trade Marks Act, 1999, a registered trademark is assignable and transmissible — either in connection with the goodwill of the business (assignment with goodwill) or independently without the goodwill (assignment without goodwill).',
                'The assignment must be recorded with the Trade Marks Registry by filing Form TM-23 (joint application by assignor and assignee) or Form TM-24 (application by the assignee alone, with proof of title). Under Section 45, an unregistered assignment is not effective against third parties — only the person recorded in the Register as the proprietor can enforce the mark. The assignment must also comply with Section 40, which imposes restrictions on assignment of marks that could cause confusion.',
                'Your Professional provides comprehensive trademark assignment services — from drafting the assignment deed, ensuring compliance with Sections 37–45 of the Act, preparing and filing the appropriate forms, and following up with the Registry until the assignment is recorded and the assignee is entered as the new proprietor.',
            ],
            highlights: [
                { icon: '🔄', text: 'Governed by Sections 37–45 of the Trade Marks Act, 1999' },
                { icon: '📋', text: 'Filed via Form TM-23 (joint) or Form TM-24 (assignee alone)' },
                { icon: '🏢', text: 'Assignment with goodwill transfers the mark along with the business reputation' },
                { icon: '📑', text: 'Must be recorded in the Register to be enforceable against third parties' },
            ],
        },
        types: [
            { title: 'Assignment With Goodwill', desc: 'The trademark is transferred along with the goodwill of the business or the part of the business concerned with the goods/services covered by the mark. The assignee acquires both the mark and the associated business reputation — the most common form of assignment.' },
            { title: 'Assignment Without Goodwill', desc: 'The trademark is transferred independently, without the goodwill of the business. Under Section 39, certain restrictions apply — the assignment must not create confusion among the public, and the Registrar may impose conditions or refuse recordal if confusion is likely.' },
            { title: 'Partial Assignment', desc: 'The trademark is assigned only in respect of some (not all) goods or services covered by the registration. The assignor retains the mark for the remaining goods/services. This must comply with Section 40 to avoid concurrent use causing confusion.' },
            { title: 'Assignment of Pending Application', desc: 'A trademark application that has not yet been registered can also be assigned. The assignment is recorded and the assignee becomes the applicant on record, proceeding with the registration process.' },
        ],
        eligibility: [
            'The assignor must be the registered proprietor of the trademark or the applicant of a pending trademark application.',
            'The assignee can be any individual, company, LLP, partnership firm, trust, society, or other legal entity capable of holding property.',
            'Both parties must enter into a valid written assignment deed that clearly identifies the mark, registration number, goods/services, and consideration.',
            'The assignment must not result in multiple exclusive rights to identical or nearly identical marks existing in different persons for the same goods/services likely to cause confusion (Section 40).',
            'If the assignment is without goodwill, the Registrar must be satisfied that the assignment will not cause confusion among the public (Section 39).',
            'The assignment must be recorded with the Registry within 6 months from the date of the assignment deed (or within an extended period with the Registrar\'s permission).',
            'Foreign entities may also be assignees, subject to applicable foreign exchange regulations and compliance with FEMA provisions.',
        ],
        documents: [
            {
                category: 'Assignment Deed & Agreement',
                items: [
                    'Executed trademark assignment deed signed by both assignor and assignee',
                    'Details of consideration (monetary value) and payment terms',
                    'NOC (No Objection Certificate) from the assignor, if required',
                    'Board resolutions of both parties authorising the assignment (for companies/LLPs)',
                ],
            },
            {
                category: 'Trademark & Registration Documents',
                items: [
                    'Trademark Registration Certificate or pending application acknowledgement',
                    'Complete details of the trademark — mark, class, goods/services, registration/application number',
                    'Copies of any existing licence or registered user agreements affecting the mark',
                    'Evidence of use of the mark by the assignor (if required by the Registry)',
                ],
            },
            {
                category: 'Identity & Filing Documents',
                items: [
                    'Identity and address proof of both assignor and assignee (PAN, Aadhaar, passport, or certificate of incorporation)',
                    'Form TM-23 (joint request) or Form TM-24 (assignee\'s request with proof of title)',
                    'Power of Attorney (Form TM-48) in favour of the trademark agent',
                    'Proof of payment of the prescribed government fee',
                ],
            },
        ],
        process: [
            { title: 'Preliminary Assessment', desc: 'Your Professional reviews the trademark registration, existing licences, and business context to determine the appropriate type of assignment (with/without goodwill, complete/partial) and identify any potential issues under Sections 39 and 40.', time: '1–2 days' },
            { title: 'Drafting the Assignment Deed', desc: 'A comprehensive trademark assignment deed is drafted specifying the mark, registration number, goods/services, type of assignment, consideration, warranties, and indemnities. Both parties review and sign the deed.', time: '3–5 days' },
            { title: 'Stamp Duty & Notarisation', desc: 'The assignment deed is executed on appropriate stamp paper as per the applicable state stamp duty laws and notarised. Your Professional advises on the correct stamp duty value.', time: '1–2 days' },
            { title: 'Prepare Form TM-23 or TM-24', desc: 'The appropriate form is prepared — TM-23 for joint application by assignor and assignee, or TM-24 for application by the assignee alone along with proof of title. All supporting documents are compiled.', time: '1–2 days' },
            { title: 'File with the Trade Marks Registry', desc: 'The completed form along with the assignment deed, supporting documents, and prescribed government fee is filed with the Trade Marks Registry through the IP India online portal.', time: '1 day' },
            { title: 'Registry Examination', desc: 'The Trade Marks Registry examines the application to ensure compliance with Sections 37–45. The Registrar may raise objections or require additional documentation, particularly for assignments without goodwill.', time: '2–6 months' },
            { title: 'Advertisement (If Required)', desc: 'Under Section 44, the Registrar may direct the assignment to be advertised in the Trade Marks Journal in the prescribed manner, particularly for assignments without goodwill.', time: '1–2 months' },
            { title: 'Recordal & Updated Certificate', desc: 'Upon satisfaction of all requirements, the Registrar records the assignment in the Register of Trademarks and the assignee is entered as the new proprietor. An updated registration extract reflecting the new ownership is issued.', time: '1–3 months' },
        ],
        fees: [
            { item: 'Government Fee — Form TM-23 (per mark, e-filing)', cost: '₹5,000 (individual) / ₹10,000 (other entities)' },
            { item: 'Government Fee — Form TM-24 (per mark, e-filing)', cost: '₹5,000 (individual) / ₹10,000 (other entities)' },
            { item: 'Professional Fee — Assignment Deed Drafting (Your Professional)', cost: '₹5,000 – ₹15,000' },
            { item: 'Professional Fee — Filing & Follow-Up (Your Professional)', cost: '₹3,000 – ₹8,000' },
            { item: 'Stamp Duty & Notarisation (varies by state)', cost: '₹500 – ₹5,000' },
        ],
        advantages: [
            { icon: '🔄', title: 'Seamless Ownership Transfer', desc: 'Trademark assignment allows businesses to transfer brand assets efficiently during mergers, acquisitions, restructuring, or sale of business divisions.' },
            { icon: '💰', title: 'Monetisation of IP Assets', desc: 'Trademark owners can realise financial value from their intellectual property by assigning marks they no longer use or that align better with another entity\'s business.' },
            { icon: '🏢', title: 'Business Continuity', desc: 'Assignment with goodwill ensures that the brand reputation, customer loyalty, and market recognition are transferred along with the mark — maintaining business continuity.' },
            { icon: '📜', title: 'Legal Certainty', desc: 'Recording the assignment with the Trade Marks Registry provides legal certainty — only the recorded proprietor can enforce the mark and grant licences.' },
            { icon: '🌐', title: 'Cross-Border Flexibility', desc: 'Trademarks can be assigned to foreign entities, facilitating international brand strategies, cross-border M&A transactions, and global IP portfolio management.' },
            { icon: '⚖️', title: 'Partial Assignment Option', desc: 'Partial assignment allows transfer of rights for specific goods/services while retaining the mark for others — providing strategic flexibility in brand management.' },
            { icon: '🛡️', title: 'Enforceable Rights', desc: 'Once recorded, the assignee obtains full enforcement rights including the ability to initiate infringement proceedings, grant licences, and further assign the mark.' },
            { icon: '📊', title: 'Tax & Accounting Benefits', desc: 'Trademark assignments are recognised as transfer of intangible assets for tax and accounting purposes, enabling structured transactions with clear valuation and consideration.' },
        ],
        faqs: [
            { q: 'What is the difference between trademark assignment and licensing?', a: 'Assignment permanently transfers ownership of the trademark from the assignor to the assignee — the assignor ceases to be the proprietor. Licensing grants permission to use the mark while the licensor retains ownership. Assignment requires recordal with the Registry; licensing requires registration of the user under Section 49.' },
            { q: 'Can a trademark be assigned without the goodwill of the business?', a: 'Yes. Under Section 39 of the Trade Marks Act, 1999, a trademark can be assigned without the goodwill of the business. However, the Registrar must be satisfied that the assignment will not cause confusion among the public. The Registrar may impose conditions or direct advertisement of the assignment.' },
            { q: 'What is the difference between Form TM-23 and Form TM-24?', a: 'Form TM-23 is a joint application filed by both the assignor and assignee together for recording the assignment. Form TM-24 is filed by the assignee alone and must be accompanied by proof of title (e.g., the assignment deed, court order, or other documentary evidence of the transfer).' },
            { q: 'Is there a time limit for recording the assignment?', a: 'While there is no strict statutory deadline, it is advisable to file the application for recordal within 6 months from the date of the assignment deed. Delay in recording may result in the assignee being unable to enforce the mark, and third parties may acquire rights in the interim.' },
            { q: 'Can a pending trademark application be assigned?', a: 'Yes. A trademark application that has not yet been registered can be assigned. The assignment is recorded and the assignee replaces the assignor as the applicant on record, continuing with the registration process.' },
            { q: 'What happens if the assignment is not recorded with the Registry?', a: 'Under Section 45 of the Trade Marks Act, 1999, an unregistered assignment is not effective against third parties. The assignor remains the recorded proprietor, and the assignee cannot enforce the mark or be recognised as the owner until the assignment is recorded in the Register.' },
            { q: 'Can a trademark be assigned for only some goods or services?', a: 'Yes. Partial assignment is permitted, where the mark is transferred only for certain goods or services covered by the registration. However, Section 40 restricts assignments that would create confusion — the Registrar may refuse recordal if concurrent use of the mark by different persons would mislead the public.' },
            { q: 'Does Your Professional handle the complete assignment process?', a: 'Yes. Your Professional manages the entire trademark assignment process — from preliminary assessment and drafting the assignment deed to preparing and filing the TM-23 or TM-24 form, addressing Registry queries, and ensuring the assignment is recorded with the new proprietor reflected in the Register.' },
        ],
        cta: {
            heading: 'Transfer Your Trademark Ownership with Confidence',
            subheading: 'Your Professional handles the complete assignment process — deed drafting, TM-23/TM-24 filing, and Registry recordal.',
            features: [
                'Assignment Deed Drafting & Execution',
                'Form TM-23 / TM-24 Filing',
                'Registry Follow-Up & Recordal',
                'Expert Guidance on Goodwill & Partial Assignments',
            ],
        },
    },

'copyright-registration': {
        slug: 'copyright-registration',
        title: 'Copyright Registration Online in India',
        subtitle:
            'Protect your original literary, artistic, musical, dramatic, and software works with Copyright Registration under the Copyright Act, 1957 — expert filing support, transparent pricing, and end-to-end assistance by Your Professional.',
        heroFeatures: [
            '📝 Registration Under Copyright Act, 1957',
            '🛡️ Lifetime Protection + 60 Years Post Author\'s Death',
            '⚡ Online Filing via Copyright Office Portal',
            '🌍 International Protection Under Berne Convention',
        ],
        overview: {
            heading: 'What is Copyright Registration?',
            paragraphs: [
                'Copyright is an intellectual property right that grants the creator of an original work exclusive rights to use, reproduce, distribute, perform, and display the work. In India, copyright protection is governed by the Copyright Act, 1957 and the Copyright Rules, 2013, administered by the Copyright Office under the Department for Promotion of Industry and Internal Trade (DPIIT).',
                'Copyright automatically comes into existence the moment an original work is created and fixed in a tangible medium. However, registration provides a legal presumption of ownership, serves as prima facie evidence in courts, and makes enforcement significantly easier in cases of infringement. It covers literary works (books, articles, computer programs), artistic works (paintings, photographs, sculptures), musical works, dramatic works, cinematographic films, and sound recordings.',
                'Your Professional simplifies the entire copyright registration process — from application drafting and document preparation to filing on the Copyright Office e-filing portal and handling examiner objections — ensuring your creative works receive the legal protection they deserve.',
            ],
            highlights: [
                { icon: '📚', text: 'Covers literary, artistic, musical, dramatic, cinematographic works & sound recordings' },
                { icon: '⏳', text: 'Protection lasts for author\'s lifetime + 60 years after death' },
                { icon: '⚖️', text: 'Registered copyright is prima facie evidence of ownership in court' },
                { icon: '🌐', text: 'International protection in 180+ countries under the Berne Convention' },
            ],
        },
        types: [
            {
                title: 'Literary Works',
                desc: 'Includes books, articles, poems, essays, research papers, computer programs (software source code), databases, tables, and compilations. Computer programs are explicitly classified as literary works under the Copyright Act, 1957.',
            },
            {
                title: 'Artistic Works',
                desc: 'Covers paintings, drawings, sketches, sculptures, photographs, engravings, architectural works, and works of artistic craftsmanship — irrespective of artistic quality.',
            },
            {
                title: 'Musical Works',
                desc: 'Includes any work consisting of music (melody, harmony, rhythm) and also includes any graphical notation of such work. Lyrics are registered separately as literary works.',
            },
            {
                title: 'Dramatic Works',
                desc: 'Covers plays, screenplays, choreographic scripts, and any piece intended for performance — including recitation, scenic arrangement, and acting form.',
            },
            {
                title: 'Cinematographic Films & Sound Recordings',
                desc: 'Includes visual recordings on any medium (movies, documentaries, short films) and sound recordings fixed in any medium regardless of the process used.',
            },
        ],
        eligibility: [
            'The author or creator of an original literary, artistic, musical, or dramatic work.',
            'The producer of a cinematographic film or sound recording.',
            'An employer, where the work is created by an employee in the course of employment (copyright vests in the employer under Section 17 of the Copyright Act, 1957).',
            'An assignee or licensee who has obtained rights from the original author through a written assignment or license agreement.',
            'A legal heir or successor of the deceased author who inherits the copyright.',
            'Indian nationals, residents, and foreign nationals whose works are first published in India or in a country that is a member of the Berne Convention or Universal Copyright Convention.',
        ],
        documents: [
            {
                category: 'Identity & Applicant Documents',
                items: [
                    'PAN Card and Aadhaar Card of the applicant (author/creator)',
                    'Address proof of the applicant (passport, utility bill, or bank statement)',
                    'Passport-size photograph of the applicant',
                    'Power of Attorney (Form V) if filed through an agent or attorney',
                ],
            },
            {
                category: 'Work & Ownership Documents',
                items: [
                    'Two copies of the work to be registered (manuscript, printout, CD/DVD, digital file)',
                    'NOC (No Objection Certificate) from the author if the applicant is not the author',
                    'Assignment deed or employment agreement if copyright is claimed by someone other than the author',
                    'Certificate of registration of the publishing entity (if applicable)',
                ],
            },
            {
                category: 'Additional Supporting Documents',
                items: [
                    'Date of first publication and country of first publication details',
                    'Search certificate from the Trade Marks Registry (if the work involves a logo or brand name)',
                    'DD/online payment receipt for the prescribed copyright registration fee',
                    'Affidavit or declaration supporting the originality of the work',
                ],
            },
        ],
        process: [
            {
                title: 'Determine the Category of Work',
                desc: 'Identify whether your work falls under literary, artistic, musical, dramatic, cinematographic, or sound recording category as defined under the Copyright Act, 1957.',
                time: '1 day',
            },
            {
                title: 'Prepare the Application (Form XIV)',
                desc: 'Draft the application in Form XIV with complete details of the work, authorship, date of creation, first publication, and applicant information as per Copyright Rules, 2013.',
                time: '1–2 days',
            },
            {
                title: 'File Application on Copyright Office e-Filing Portal',
                desc: 'Submit the completed application along with copies of the work, supporting documents, and prescribed fees on the official Copyright Office e-filing portal.',
                time: '1 day',
            },
            {
                title: 'Mandatory 30-Day Waiting Period',
                desc: 'After filing, a mandatory 30-day waiting period applies during which any objections can be raised by third parties. The Copyright Office issues a diary number for tracking.',
                time: '30 days',
            },
            {
                title: 'Examination by the Copyright Examiner',
                desc: 'If no objections are received, the Copyright Examiner reviews the application for completeness and verifies the originality and ownership claims.',
                time: '1–3 months',
            },
            {
                title: 'Response to Discrepancy Letter (If Any)',
                desc: 'If the Examiner raises any discrepancy or objection, a response must be filed within 30 days addressing the issues raised — Your Professional handles this on your behalf.',
                time: '30 days (if applicable)',
            },
            {
                title: 'Registration & Issuance of Copyright Certificate',
                desc: 'Upon successful examination, the work is entered in the Register of Copyrights and an official Copyright Registration Certificate is issued to the applicant.',
                time: '2–6 months total',
            },
        ],
        fees: [
            { item: 'Copyright Registration — Literary/Artistic Work (per work)', cost: '₹500' },
            { item: 'Copyright Registration — Musical Work', cost: '₹2,000' },
            { item: 'Copyright Registration — Cinematographic Film', cost: '₹5,000' },
            { item: 'Copyright Registration — Sound Recording', cost: '₹2,000' },
            { item: 'Professional Service Charges (Your Professional)', cost: '₹3,999 onwards' },
        ],
        penalties: [
            {
                violation: 'Infringement of Copyright (knowing use of infringing copies)',
                penalty: 'Imprisonment of 6 months to 3 years and fine of ₹50,000 to ₹2,00,000 under Section 63 of the Copyright Act, 1957',
            },
            {
                violation: 'Repeat offence of copyright infringement',
                penalty: 'Imprisonment of 1 year to 3 years and fine of ₹1,00,000 to ₹2,00,000 under Section 63A',
            },
            {
                violation: 'Making or possessing plates for infringing copies',
                penalty: 'Imprisonment up to 2 years and fine under Section 65 of the Copyright Act, 1957',
            },
            {
                violation: 'False entries in the Register of Copyrights',
                penalty: 'Imprisonment up to 1 year or fine or both under Section 67 of the Copyright Act, 1957',
            },
        ],
        advantages: [
            {
                icon: '⚖️',
                title: 'Legal Evidence of Ownership',
                desc: 'A registered copyright serves as prima facie evidence of ownership in court, making it significantly easier to prove your rights in infringement disputes.',
            },
            {
                icon: '🛡️',
                title: 'Deterrent Against Infringement',
                desc: 'Registration acts as a strong deterrent — potential infringers are less likely to copy or misuse a work that has been officially registered with the Copyright Office.',
            },
            {
                icon: '🌍',
                title: 'International Protection',
                desc: 'India is a member of the Berne Convention and the TRIPS Agreement — a copyright registered in India is recognized and enforceable in over 180 countries worldwide.',
            },
            {
                icon: '💰',
                title: 'Monetisation & Licensing',
                desc: 'Registered copyrights can be licensed, assigned, or sold — enabling creators to generate revenue through royalties, licensing deals, and syndication agreements.',
            },
            {
                icon: '⏳',
                title: 'Long Duration of Protection',
                desc: 'Copyright protection lasts for the lifetime of the author plus 60 years after death — one of the longest protection durations among all intellectual property rights.',
            },
            {
                icon: '📋',
                title: 'Basis for Legal Action',
                desc: 'Registration is essential for filing infringement suits and seeking statutory damages, injunctions, and criminal prosecution against violators.',
            },
            {
                icon: '🏦',
                title: 'Asset for Business Valuation',
                desc: 'Copyrights are recognized as intangible assets on the balance sheet — enhancing business valuation for fundraising, mergers, acquisitions, and IP portfolio building.',
            },
            {
                icon: '🖥️',
                title: 'Software & Digital Protection',
                desc: 'Computer programs are classified as literary works — copyright registration provides a cost-effective way to protect software source code, apps, and databases without patent costs.',
            },
        ],
        faqs: [
            {
                q: 'Is copyright registration mandatory in India?',
                a: 'No, copyright automatically comes into existence when an original work is created and fixed in a tangible form. However, registration is highly recommended as it provides prima facie evidence of ownership, makes enforcement easier, and is necessary for filing infringement suits in many cases.',
            },
            {
                q: 'How long does copyright registration take in India?',
                a: 'The process typically takes 2 to 6 months from the date of filing, including the mandatory 30-day objection period and examination by the Copyright Examiner. Your Professional ensures timely filing and follow-ups to minimize delays.',
            },
            {
                q: 'Can I copyright software or a mobile app?',
                a: 'Yes, computer programs (including software source code, mobile apps, and databases) are classified as literary works under Section 2(o) of the Copyright Act, 1957. Copyright registration is the most cost-effective way to protect software in India.',
            },
            {
                q: 'What is the duration of copyright protection in India?',
                a: 'For literary, dramatic, musical, and artistic works, copyright lasts for the lifetime of the author plus 60 years from the beginning of the calendar year following the year of the author\'s death. For cinematographic films and sound recordings, it lasts 60 years from the year of publication.',
            },
            {
                q: 'Can I register copyright for an unpublished work?',
                a: 'Yes, both published and unpublished works can be registered with the Copyright Office in India. Registration of unpublished works helps establish the date of creation and authorship, which can be crucial in future infringement disputes.',
            },
            {
                q: 'What is the difference between copyright and trademark?',
                a: 'Copyright protects original creative expressions (books, music, art, software) while trademarks protect brand identifiers (names, logos, slogans) used in commerce. A logo, for example, can be protected under both — copyright for its artistic expression and trademark for its brand identification function.',
            },
            {
                q: 'Is my Indian copyright valid internationally?',
                a: 'Yes, India is a signatory to the Berne Convention, TRIPS Agreement, and the Universal Copyright Convention. Works registered in India are automatically recognized and protected in over 180 member countries without the need for separate registration in each country.',
            },
            {
                q: 'How can Your Professional help with copyright registration?',
                a: 'Your Professional provides complete copyright registration support — from identifying the correct category of work and preparing the application in Form XIV to filing on the Copyright Office e-filing portal, handling examiner objections, and securing the registration certificate.',
            },
        ],
        cta: {
            heading: 'Register Your Copyright with Your Professional',
            subheading:
                'Protect your creative works with expert copyright registration support — from application drafting to certificate issuance. Let Your Professional safeguard your intellectual property.',
            features: [
                'Complete Application Drafting & Filing Support',
                'Copyright Office e-Filing Portal Submission',
                'Examiner Objection Handling & Response',
                'Registration Certificate Procurement',
            ],
        },
    },

    'patent-registration': {
        slug: 'patent-registration',
        title: 'Patent Registration Online in India',
        subtitle:
            'Secure exclusive rights to your invention with Patent Registration under the Patents Act, 1970 — expert drafting, specification filing, and prosecution support by Your Professional.',
        heroFeatures: [
            '🔬 Registration Under the Patents Act, 1970',
            '🛡️ 20-Year Exclusive Protection from Date of Filing',
            '📄 Provisional & Complete Specification Filing',
            '⚡ Expert Patent Drafting & Prosecution Support',
        ],
        overview: {
            heading: 'What is Patent Registration?',
            paragraphs: [
                'A patent is an exclusive right granted by the government to an inventor for a new invention — giving the patent holder the legal right to exclude others from making, using, selling, or importing the patented invention for a period of 20 years from the date of filing. In India, patents are governed by the Patents Act, 1970 (as amended in 2005) and the Patents Rules, 2003, administered by the Indian Patent Office (IPO) under the Controller General of Patents, Designs and Trade Marks (CGPDTM).',
                'To be patentable, an invention must satisfy three key criteria: novelty (the invention must be new and not part of the existing prior art), inventive step (the invention must involve a technical advance or economic significance that is not obvious to a person skilled in the art), and industrial applicability (the invention must be capable of being made or used in an industry). The Patents Act also lists specific exclusions under Sections 3 and 4 — including abstract theories, mathematical methods, computer programs per se, and methods of agriculture.',
                'Your Professional provides end-to-end patent registration assistance — from prior art search and patentability analysis to provisional/complete specification drafting, filing at the Indian Patent Office, responding to examination reports, and guiding you through the entire prosecution process until the patent is granted.',
            ],
            highlights: [
                { icon: '🔒', text: 'Exclusive right to make, use, sell, and import the invention for 20 years' },
                { icon: '📋', text: 'Must satisfy novelty, inventive step, and industrial applicability criteria' },
                { icon: '🏛️', text: 'Governed by the Patents Act, 1970 and administered by the Indian Patent Office' },
                { icon: '📅', text: 'Provisional specification secures early filing date — 12 months to file complete specification' },
            ],
        },
        types: [
            {
                title: 'Provisional Patent Application',
                desc: 'Filed when the invention is still in the conceptual or development stage. Secures an early priority date and gives the applicant 12 months to file a complete specification with full details of the invention.',
            },
            {
                title: 'Complete Patent Application (Ordinary)',
                desc: 'Filed with a complete specification containing full details of the invention, claims, drawings, and abstract. Can be filed directly or within 12 months of a provisional application.',
            },
            {
                title: 'Convention Patent Application',
                desc: 'Filed by applicants who have already filed a patent in a Convention country (Paris Convention member). Must be filed within 12 months of the earliest foreign filing to claim priority.',
            },
            {
                title: 'PCT National Phase Application',
                desc: 'Filed under the Patent Cooperation Treaty (PCT) route — allows applicants to enter the national phase in India within 31 months of the international filing date or priority date.',
            },
            {
                title: 'Patent of Addition',
                desc: 'Filed for an improvement or modification of an already patented invention. The patent of addition expires with the main patent and no separate renewal fee is required.',
            },
        ],
        eligibility: [
            'The true and first inventor of the invention, whether an individual or a group of individuals.',
            'An assignee of the inventor who has acquired the right to apply through a written assignment or agreement.',
            'The legal representative of a deceased inventor who is entitled to apply on behalf of the estate.',
            'Any Indian or foreign national — foreign applicants must provide an address for service in India.',
            'The invention must be novel — it must not have been published or publicly disclosed anywhere in the world before the filing date.',
            'The invention must involve an inventive step — a technical advance or economic significance that is not obvious to a person skilled in the art.',
            'The invention must have industrial applicability — it must be capable of being manufactured or used in an industry.',
        ],
        documents: [
            {
                category: 'Applicant & Inventor Documents',
                items: [
                    'PAN Card and Aadhaar Card / Passport of the applicant and inventor(s)',
                    'Proof of right to file (assignment deed, employer declaration, or MoU if applicant is not the inventor)',
                    'Name, address, and nationality of each applicant and inventor',
                    'Power of Attorney (Form 26) if filed through a patent agent or attorney',
                ],
            },
            {
                category: 'Patent Specification & Technical Documents',
                items: [
                    'Provisional Specification (Form 2) — if filing a provisional application first',
                    'Complete Specification (Form 2) — including description, claims, abstract, and drawings',
                    'Statement and Undertaking (Form 3) — details of corresponding foreign applications filed',
                    'Prior art search report documenting existing patents and publications in the field',
                ],
            },
            {
                category: 'Filing & Fee Documents',
                items: [
                    'Application for Grant of Patent (Form 1) with prescribed particulars',
                    'Declaration as to Inventorship (Form 5) — if provisional specification was filed first',
                    'Fee payment receipt (DD / online payment) as per First Schedule of Patents Rules, 2003',
                    'Priority document and certified copy of earlier application (for convention/PCT applications)',
                ],
            },
        ],
        process: [
            {
                title: 'Prior Art Search & Patentability Analysis',
                desc: 'Conduct a comprehensive search of existing patents, publications, and prior art databases (Indian Patent Office, USPTO, EPO, WIPO) to assess the novelty and patentability of your invention.',
                time: '3–7 days',
            },
            {
                title: 'Draft Patent Specification',
                desc: 'Prepare the provisional or complete specification including detailed description, claims defining the scope of protection, abstract, and technical drawings as required under Section 10 of the Patents Act.',
                time: '7–15 days',
            },
            {
                title: 'File Patent Application at Indian Patent Office',
                desc: 'Submit the patent application (Form 1) along with the specification (Form 2), Statement and Undertaking (Form 3), and other prescribed forms on the IPO e-filing portal with the requisite fees.',
                time: '1–2 days',
            },
            {
                title: 'Publication of Application',
                desc: 'The patent application is published in the Official Patent Journal — either after 18 months from the filing/priority date (automatic) or upon request for early publication (Form 9) within 1 month.',
                time: '18 months (or 1 month for early publication)',
            },
            {
                title: 'Request for Examination',
                desc: 'File a Request for Examination (Form 18) within 48 months from the filing/priority date. The Patent Office assigns an examiner to review the application for patentability.',
                time: 'Within 48 months of filing',
            },
            {
                title: 'Respond to First Examination Report (FER)',
                desc: 'The examiner issues a First Examination Report with objections/requirements. The applicant must respond within 6 months (extendable by 3 months) addressing all objections with arguments and amendments.',
                time: '6–9 months',
            },
            {
                title: 'Pre-Grant Opposition (If Any)',
                desc: 'Any third party may file a pre-grant opposition under Section 25(1) after publication. The applicant is given an opportunity to file a counter-statement and evidence in response.',
                time: 'Variable',
            },
            {
                title: 'Grant of Patent & Issuance of Certificate',
                desc: 'Upon satisfactory resolution of all objections and opposition (if any), the Controller grants the patent and issues a Certificate of Patent. The patent is published in the Patent Journal.',
                time: '3–5 years total (typical)',
            },
        ],
        fees: [
            { item: 'Provisional Application Filing (Natural Person)', cost: '₹1,750' },
            { item: 'Complete Specification Filing (Natural Person)', cost: '₹1,750' },
            { item: 'Request for Examination (Natural Person)', cost: '₹4,000' },
            { item: 'Early Publication Request (Form 9)', cost: '₹2,500' },
            { item: 'Professional Service Charges (Your Professional)', cost: '₹14,999 onwards' },
        ],
        penalties: [
            {
                violation: 'Contravention of secrecy direction under Section 35',
                penalty: 'Imprisonment up to 2 years or fine or both under Section 118 of the Patents Act, 1970',
            },
            {
                violation: 'Wrongful use of words "patent" or "patented" on non-patented articles',
                penalty: 'Fine up to ₹1,00,000 under Section 120 of the Patents Act, 1970',
            },
            {
                violation: 'False claim of patent pending on products without a filed application',
                penalty: 'Fine up to ₹1,00,000 under Section 120 of the Patents Act, 1970',
            },
            {
                violation: 'Non-disclosure of information regarding foreign applications (Section 8)',
                penalty: 'Patent may be revoked by the Controller or High Court under Section 64',
            },
        ],
        advantages: [
            {
                icon: '🔒',
                title: '20-Year Exclusive Rights',
                desc: 'A granted patent provides exclusive rights for 20 years from the filing date — preventing competitors from making, using, selling, or importing the patented invention without your permission.',
            },
            {
                icon: '💰',
                title: 'Revenue Generation Through Licensing',
                desc: 'Patent holders can license their invention to third parties for royalties, enter cross-licensing agreements, or sell (assign) the patent — creating significant revenue streams from innovation.',
            },
            {
                icon: '🏆',
                title: 'Competitive Advantage',
                desc: 'Patents create a legal monopoly in the market — competitors cannot copy your technology, giving you a significant edge in market positioning, pricing, and product differentiation.',
            },
            {
                icon: '📈',
                title: 'Increased Business Valuation',
                desc: 'Patents are recognized as valuable intangible assets — they enhance company valuation for fundraising, venture capital, IPOs, and mergers and acquisitions.',
            },
            {
                icon: '🏛️',
                title: 'Government Incentives & Tax Benefits',
                desc: 'Patented inventions are eligible for reduced tax rates under the Patent Box Regime (Section 115BBF of the Income Tax Act) — royalty income from patents taxed at a concessional rate of 10%.',
            },
            {
                icon: '🌍',
                title: 'International Filing Priority',
                desc: 'An Indian patent application provides a 12-month priority window under the Paris Convention to file in other countries — protecting your invention globally while developing a commercial strategy.',
            },
            {
                icon: '🛡️',
                title: 'Legal Deterrent Against Infringement',
                desc: 'A granted patent enables the holder to file infringement suits in court seeking injunctions, damages, and account of profits — acting as a powerful deterrent against copying.',
            },
            {
                icon: '🤝',
                title: 'Attracts Investment & Partnerships',
                desc: 'Patents demonstrate innovation capability and defensible IP — making the business more attractive to investors, strategic partners, and collaborators for joint ventures and R&D partnerships.',
            },
        ],
        faqs: [
            {
                q: 'What can be patented in India?',
                a: 'Any new invention — a product or process — that involves an inventive step and is capable of industrial application can be patented. However, the Patents Act, 1970 excludes certain categories under Sections 3 and 4, including abstract theories, mathematical methods, computer programs per se, methods of agriculture, traditional knowledge, and inventions contrary to public morality.',
            },
            {
                q: 'What is the difference between a provisional and complete specification?',
                a: 'A provisional specification is a preliminary description filed to secure an early filing date when the invention is still in development. A complete specification includes the full technical details, claims, drawings, and abstract. If a provisional is filed first, the complete specification must be submitted within 12 months.',
            },
            {
                q: 'How long does it take to get a patent granted in India?',
                a: 'The typical timeline from filing to grant is 3 to 5 years, depending on the complexity of the invention, examination backlog, and whether any opposition is filed. Expedited examination is available for startups, MSMEs, and female applicants under the revised Patent Rules.',
            },
            {
                q: 'How long is a patent valid in India?',
                a: 'A patent is valid for 20 years from the date of filing of the application. The patent holder must pay annual renewal fees to maintain the patent in force. Failure to pay renewal fees results in lapse of the patent.',
            },
            {
                q: 'Can software be patented in India?',
                a: 'Computer programs "per se" are excluded from patentability under Section 3(k) of the Patents Act. However, software inventions that demonstrate a technical effect or solve a technical problem beyond the ordinary interaction with a computer may be patentable — the key is framing the claims around the technical contribution.',
            },
            {
                q: 'What is the Patent Box Regime in India?',
                a: 'The Patent Box Regime under Section 115BBF of the Income Tax Act, 1961 offers a concessional tax rate of 10% on royalty income earned from patents developed and registered in India. This incentive encourages domestic innovation and patent filing.',
            },
            {
                q: 'Can I file a patent internationally from India?',
                a: 'Yes, you can file in foreign countries either directly or through the PCT (Patent Cooperation Treaty) route. An Indian filing gives you a 12-month priority window under the Paris Convention to file in other member countries. The PCT route allows entry into 150+ countries through a single international application.',
            },
            {
                q: 'How can Your Professional help with patent registration?',
                a: 'Your Professional provides end-to-end patent registration support — from prior art search and patentability analysis to specification drafting, application filing at the Indian Patent Office, responding to examination reports, handling oppositions, and guiding you through prosecution until the patent is granted.',
            },
        ],
        cta: {
            heading: 'File Your Patent with Your Professional',
            subheading:
                'From invention disclosure to patent grant — expert drafting, filing, and prosecution support. Let Your Professional protect your innovation with a strong, enforceable patent.',
            features: [
                'Prior Art Search & Patentability Analysis',
                'Provisional & Complete Specification Drafting',
                'Indian Patent Office Filing & Prosecution',
                'Examination Report Response & Opposition Handling',
            ],
        },
    },

'design-registration': {
        slug: 'design-registration',
        title: 'Design Registration in India — Protection Under the Designs Act, 2000',
        subtitle:
            'Protect the unique visual appearance and ornamental design of your products with expert design registration services from Your Professional — secure exclusive rights across India.',
        heroFeatures: [
            'Exclusive Protection for Product Aesthetics & Visual Appearance',
            'Valid for 10 Years, Extendable Up to 15 Years',
            'Prevents Unauthorized Copying of Registered Industrial Designs',
            'Dedicated Support from Your Professional — Filing to Grant',
        ],
        overview: {
            heading: 'Why Register a Design in India?',
            paragraphs: [
                'A registered design under the Designs Act, 2000 grants exclusive rights to the proprietor over the novel visual features of shape, configuration, pattern, ornamentation, or composition of lines and colours applied to any article. In a competitive market, product appearance is often the first differentiator — design registration ensures that your creative investment is legally protected against imitation and piracy.',
                'The Controller General of Patents, Designs and Trade Marks (CGPDTM), operating under the Department for Promotion of Industry and Internal Trade (DPIIT), administers design registration in India. Registration confers the right to prevent third parties from manufacturing, selling, or importing articles bearing a substantially similar design without authorization.',
                'Your Professional handles the entire design registration process — from novelty assessment and classification under the Locarno Classification to application drafting, filing at the Design Office (Kolkata), and responding to examination objections — ensuring swift and smooth protection of your creative assets.',
            ],
            highlights: [
                { icon: '🎨', text: 'Protects visual appearance — shape, pattern, ornamentation & configuration' },
                { icon: '🛡️', text: 'Exclusive right to use the design for up to 15 years' },
                { icon: '⚖️', text: 'Legal remedies including injunctions, damages & account of profits' },
                { icon: '🌏', text: 'Priority claims under the Paris Convention for international filings' },
            ],
        },
        types: [
            {
                title: 'Original Design',
                desc: 'A new and original design that has not been previously published or used in India. It must be significantly distinguishable from known designs or combination of known designs.',
            },
            {
                title: 'Design Applied to an Article',
                desc: 'A design applied to a specific article of manufacture — the design is protected only in connection with the article or set of articles for which it is registered.',
            },
            {
                title: 'Design for a Set of Articles',
                desc: 'A single application can cover a set of articles (e.g., a tea set, cutlery set) where the articles are ordinarily sold together and bear the same design.',
            },
            {
                title: 'Textile Design',
                desc: 'Designs applied to textile fabrics, wallpapers, lace, and similar materials — includes patterns, ornamentation, and composition of lines or colours applied to flat surfaces.',
            },
        ],
        eligibility: [
            'The design must be new or original — not previously published or disclosed in India or any other country',
            'It must be applied to or applicable to an article of manufacture by any industrial process',
            'The design must appeal to and be judged solely by the eye — functional features are not registrable',
            'It must be significantly distinguishable from known designs or a combination of known designs',
            'The design must not include any scandalous or obscene matter',
            'Any person claiming to be the proprietor of a new or original design may apply — individuals, companies, LLPs, or partnership firms',
            'Foreign applicants can file through a registered agent in India and claim convention priority within 6 months of the first filing',
        ],
        documents: [
            {
                category: 'Applicant Identity Documents',
                items: [
                    'Name, address, and nationality of the applicant',
                    'PAN card and Aadhaar card (for Indian individuals)',
                    'Certificate of Incorporation / Partnership Deed (for entities)',
                    'Power of Attorney (Form 23) in favour of the registered agent',
                    'Priority document (if claiming convention priority under the Paris Convention)',
                ],
            },
            {
                category: 'Design Representations',
                items: [
                    'Four sets of representations (drawings, photographs, or CAD renders) of the design from all angles',
                    'Statement of novelty specifying the novel features of the design',
                    'Name and address of the author/creator of the design',
                    'Class and sub-class under the Locarno Classification',
                    'Brief description of the article to which the design is applied',
                ],
            },
            {
                category: 'Additional Supporting Documents',
                items: [
                    'Assignment deed (if the applicant is not the creator of the design)',
                    'Certified copy of the priority application (for convention applications)',
                    'Disclaimer statement (if disclaiming any part of the design)',
                    'Specimen of the article (may be requested by the Controller during examination)',
                ],
            },
        ],
        process: [
            {
                title: 'Design Novelty Assessment',
                desc: 'Your Professional conducts a thorough prior art search across Indian and international design databases to assess the novelty and registrability of the proposed design.',
                time: '2–3 days',
            },
            {
                title: 'Locarno Classification & Application Drafting',
                desc: 'Classify the design under the appropriate Locarno class, prepare representations, draft the statement of novelty, and compile the complete application in Form 1.',
                time: '3–5 days',
            },
            {
                title: 'Filing at the Design Office',
                desc: 'File the application electronically at the Patent Office, Kolkata (which also functions as the Design Office). Obtain the filing receipt and application number.',
                time: '1 day',
            },
            {
                title: 'Formal Examination by the Controller',
                desc: 'The Controller examines the application for compliance with the Designs Act, 2000 and Designs Rules, 2001 — checking novelty, classification, and completeness of representations.',
                time: '1–3 months',
            },
            {
                title: 'Response to Objections (if any)',
                desc: 'If the Controller raises objections, Your Professional drafts and files a comprehensive response within the stipulated deadline to overcome the objections.',
                time: '1–3 months',
            },
            {
                title: 'Registration & Publication',
                desc: 'Upon satisfaction, the Controller registers the design and issues the Registration Certificate. The design is published in the official Design Journal.',
                time: '3–6 months (total)',
            },
            {
                title: 'Post-Registration Compliance',
                desc: 'Your Professional assists with renewal filings, assignment recordals, and any enforcement actions required to protect the registered design.',
                time: 'Ongoing',
            },
        ],
        fees: [
            { item: 'Design Registration — Natural Person (per design)', cost: '₹1,000' },
            { item: 'Design Registration — Small Entity', cost: '₹2,000' },
            { item: 'Design Registration — Other than Small Entity / Natural Person', cost: '₹4,000' },
            { item: 'Renewal Fee (Extension for 5 years — before expiry)', cost: '₹2,000 – ₹8,000' },
            { item: 'Restoration of Lapsed Design', cost: '₹2,000 – ₹8,000 + surcharge' },
        ],
        penalties: [
            {
                violation: 'Piracy of Registered Design (Section 22)',
                penalty: 'Contract debt not exceeding ₹25,000 for each contravention, recoverable by the registered proprietor. Aggregate not exceeding ₹50,000. Injunction and account of profits may also be awarded.',
            },
            {
                violation: 'Falsely Representing a Design as Registered (Section 35)',
                penalty: 'Fine up to ₹25,000 for falsely marking an article as bearing a registered design or making false entries in the Register of Designs.',
            },
            {
                violation: 'Unauthorized Use of the Word "Registered" (Section 36)',
                penalty: 'Any person who falsely represents that a design applied to an article is registered shall be punishable with a fine which may extend to ₹25,000.',
            },
        ],
        advantages: [
            {
                icon: '🎨',
                title: 'Exclusive Visual Protection',
                desc: 'Registration grants the proprietor exclusive rights over the visual appearance of the article — preventing competitors from copying the look and feel of the product.',
            },
            {
                icon: '⏳',
                title: 'Long Protection Period',
                desc: 'Initial protection for 10 years from the date of registration, extendable by a further 5 years (total 15 years) upon payment of the renewal fee.',
            },
            {
                icon: '💰',
                title: 'Cost-Effective IP Protection',
                desc: 'Design registration is significantly more affordable and faster than patent protection — ideal for protecting product aesthetics without high legal costs.',
            },
            {
                icon: '⚡',
                title: 'Faster Grant Process',
                desc: 'Design applications in India are typically processed within 3–6 months, compared to 2–4 years for patents — ensuring swift market protection.',
            },
            {
                icon: '🌍',
                title: 'International Priority Rights',
                desc: 'Convention priority under the Paris Convention allows Indian design applicants to file in other member countries within 6 months while retaining the original filing date.',
            },
            {
                icon: '⚖️',
                title: 'Strong Legal Remedies',
                desc: 'Registered design owners can seek injunctions, damages, and account of profits against infringers in the District Court or High Court.',
            },
            {
                icon: '📈',
                title: 'Enhanced Commercial Value',
                desc: 'A registered design adds tangible value to the business — it can be licensed, assigned, or used as collateral, and strengthens the overall IP portfolio.',
            },
            {
                icon: '🔒',
                title: 'Deterrent Against Imitation',
                desc: 'The ® mark and registration certificate serve as a strong deterrent against potential copyists and counterfeiters in the market.',
            },
        ],
        disadvantages: [
            'Only protects the visual/aesthetic aspects — functional features must be protected via patents',
            'Protection is limited to the specific article or set of articles for which the design is registered',
            'No opposition procedure — third parties can only seek cancellation after registration is granted',
            'Maximum protection of 15 years is shorter compared to trademarks (perpetual) or copyrights (lifetime + 60 years)',
            'Disclosure of the design before filing may destroy novelty unless convention priority is claimed',
        ],
        faqs: [
            {
                q: 'What is the difference between a design registration and a patent?',
                a: 'A design registration protects the visual appearance (shape, pattern, ornamentation) of an article, while a patent protects the functional, technical, or inventive aspects. If your innovation is in how a product looks, design registration is appropriate; if it is in how it works, a patent is needed.',
            },
            {
                q: 'Can I register a design that has already been publicly disclosed?',
                a: 'No. Under the Designs Act, 2000, a design must be new or original and not previously published in India or elsewhere. However, if you have filed a design application in a Paris Convention country, you can claim priority in India within 6 months.',
            },
            {
                q: 'How long does design registration take in India?',
                a: 'The typical timeline is 3–6 months from the date of filing to grant, assuming no objections are raised by the Controller. Your Professional ensures complete and accurate applications to minimize delays.',
            },
            {
                q: 'Can a design registration be renewed?',
                a: 'Yes. The initial registration is valid for 10 years. It can be extended for an additional 5 years (total 15 years) by filing Form 3 with the prescribed renewal fee before the expiry of the initial period.',
            },
            {
                q: 'What cannot be registered as a design in India?',
                a: 'Purely functional designs, designs that are not new or original, designs contrary to public order or morality, designs that are mere mechanical contrivances, and designs that include scandalous or obscene matter cannot be registered.',
            },
            {
                q: 'Can I file a single application for multiple designs?',
                a: 'India follows a single-design-per-application rule. However, if the designs belong to the same class under the Locarno Classification and are applied to a set of articles ordinarily sold together, a single application for the set may be filed.',
            },
            {
                q: 'What are the consequences of not registering my design?',
                a: 'Without registration, you have no statutory right to prevent others from copying your design. You may only rely on passing off or copyright protection (if applicable), which are harder to enforce and offer weaker protection for industrial designs.',
            },
            {
                q: 'How does Your Professional assist with design registration?',
                a: 'Your Professional provides end-to-end design registration services — including prior art search, Locarno classification, application drafting, filing, examination response, and post-grant compliance — ensuring your product designs receive timely and robust protection.',
            },
        ],
        cta: {
            heading: 'Protect Your Product Designs Today',
            subheading:
                'Your Professional ensures swift and comprehensive design registration — from novelty search to grant certificate.',
            features: [
                'Free Design Registrability Assessment',
                'Expert Locarno Classification & Drafting',
                'End-to-End Filing & Examination Support',
                'Post-Registration Renewal & Enforcement Assistance',
            ],
        },
    },

    'patent-search': {
        slug: 'patent-search',
        title: 'Patent Search in India — Prior Art Search & Patentability Assessment',
        subtitle:
            'Make informed patent filing decisions with comprehensive prior art search, FER analysis, and patentability assessment services from Your Professional — minimize rejections, maximize protection.',
        heroFeatures: [
            'Thorough Prior Art Search Across Indian & International Databases',
            'Detailed Patentability Assessment & FER Analysis Reports',
            'Expert Analysis by Registered Patent Agents & IP Attorneys',
            'Trusted Guidance from Your Professional Before Every Filing',
        ],
        overview: {
            heading: 'Why Conduct a Patent Search Before Filing?',
            paragraphs: [
                'A patent search — also known as a prior art search or patentability search — is the critical first step before filing a patent application. It involves systematically searching patent databases, scientific literature, and published documents to identify existing disclosures (prior art) that may affect the novelty or inventive step of your invention. Filing without a search risks rejection, wasted costs, and loss of valuable time.',
                'Under the Indian Patents Act, 1970 (as amended), an invention must satisfy three key criteria for grant: novelty (Section 2(1)(l)), inventive step (Section 2(1)(ja)), and industrial applicability (Section 2(1)(ac)). A comprehensive patent search evaluates your invention against these criteria and provides a clear picture of the existing patent landscape in your technology domain.',
                'Your Professional offers expert patent search services covering Indian Patent Office (IPO) records, USPTO, EPO, WIPO (PCT), and other international databases. Our team of registered patent agents analyzes the search results, prepares detailed patentability opinions, and provides strategic recommendations — including FER (First Examination Report) analysis for pending applications — to strengthen your patent strategy.',
            ],
            highlights: [
                { icon: '🔍', text: 'Search across 100M+ patent documents from IPO, USPTO, EPO & WIPO databases' },
                { icon: '📊', text: 'Detailed patentability opinion covering novelty, inventive step & industrial applicability' },
                { icon: '📋', text: 'FER analysis & response strategy for pending patent applications' },
                { icon: '💡', text: 'Technology landscape mapping & freedom-to-operate assessment' },
            ],
        },
        types: [
            {
                title: 'Novelty Search (Prior Art Search)',
                desc: 'Identifies published patents, patent applications, and non-patent literature that may anticipate the novelty of the invention. Essential before filing a new patent application.',
            },
            {
                title: 'Patentability Search',
                desc: 'Goes beyond novelty search to assess the inventive step (non-obviousness) of the invention by analysing the closest prior art references in combination. Provides a clear patentability opinion.',
            },
            {
                title: 'FER Analysis & Response',
                desc: 'Analysis of the First Examination Report (FER) issued by the Indian Patent Office — identifying cited prior art, objections raised, and crafting a strategic response to overcome rejections.',
            },
            {
                title: 'Freedom-to-Operate (FTO) Search',
                desc: 'Determines whether a product or process infringes any existing patents in force. Critical before commercialization to avoid patent infringement litigation and associated liabilities.',
            },
            {
                title: 'Patent Landscape / State-of-the-Art Search',
                desc: 'Maps the entire patent activity in a specific technology domain — identifying key players, filing trends, white spaces, and opportunities for innovation and strategic filing.',
            },
        ],
        eligibility: [
            'Inventors or applicants planning to file a patent application in India or internationally',
            'Startups and businesses seeking to validate the patentability of their innovations before investing in R&D or filing',
            'Patent holders or applicants who have received a First Examination Report (FER) and need analysis and response strategy',
            'Companies planning product launches or market entry who require Freedom-to-Operate clearance',
            'Research institutions, universities, and individual researchers seeking to assess the novelty of their inventions',
            'IP law firms, corporate IP departments, and technology transfer offices requiring outsourced search services',
        ],
        documents: [
            {
                category: 'Invention Disclosure Documents',
                items: [
                    'Detailed description of the invention — including technical problem, solution, and advantages',
                    'Drawings, diagrams, flowcharts, or schematic representations of the invention',
                    'List of key features, components, or method steps that distinguish the invention',
                    'Known prior art references (if any) already identified by the inventor',
                    'Relevant technical field, keywords, and International Patent Classification (IPC) codes (if known)',
                ],
            },
            {
                category: 'For FER Analysis',
                items: [
                    'Copy of the First Examination Report (FER) issued by the Indian Patent Office',
                    'Complete patent application (provisional or complete specification) as filed',
                    'Cited prior art documents referenced in the FER',
                    'Claims chart mapping the claimed invention against cited prior art',
                ],
            },
            {
                category: 'Additional Documents (if applicable)',
                items: [
                    'Published patent application number (for post-publication search)',
                    'Product brochures, technical datasheets, or prototype specifications (for FTO search)',
                    'Target jurisdictions and patent databases to be searched',
                    'Competitor names or patent assignee names (for landscape analysis)',
                ],
            },
        ],
        process: [
            {
                title: 'Invention Disclosure & Consultation',
                desc: 'The inventor provides a detailed disclosure of the invention to Your Professional. Our patent team conducts an initial consultation to understand the technical scope, key features, and search objectives.',
                time: '1–2 days',
            },
            {
                title: 'Search Strategy Formulation',
                desc: 'Define the search scope — technology domain, target databases (IPO, USPTO, EPO, WIPO), keywords, IPC codes, and relevant date ranges. Tailor the strategy based on the type of search requested.',
                time: '1 day',
            },
            {
                title: 'Comprehensive Database Search',
                desc: 'Execute systematic searches across Indian and international patent databases, scientific journals, and published literature using Boolean operators, classification codes, and semantic search tools.',
                time: '3–5 days',
            },
            {
                title: 'Prior Art Analysis & Comparison',
                desc: 'Analyse the most relevant prior art references, compare them feature-by-feature with the invention, and identify areas of overlap, novelty, and potential inventive step.',
                time: '2–3 days',
            },
            {
                title: 'Patentability Opinion & Report',
                desc: 'Prepare a comprehensive search report with a patentability opinion covering novelty, inventive step, and industrial applicability. Include claim-by-claim analysis and strategic filing recommendations.',
                time: '2–3 days',
            },
            {
                title: 'Client Review & Strategy Discussion',
                desc: 'Present the search report to the client, discuss findings, and advise on the best course of action — whether to proceed with filing, modify the claims, or explore alternative protection strategies.',
                time: '1–2 days',
            },
            {
                title: 'FER Response Preparation (if applicable)',
                desc: 'For pending applications, Your Professional analyses the FER, prepares detailed arguments and claim amendments, and files the response within the statutory deadline (6 months from FER issuance).',
                time: '2–4 weeks',
            },
        ],
        fees: [
            { item: 'Basic Novelty / Prior Art Search (Indian databases)', cost: '₹5,000 – ₹15,000' },
            { item: 'Comprehensive Patentability Search (Indian + International)', cost: '₹15,000 – ₹35,000' },
            { item: 'FER Analysis & Response Preparation', cost: '₹10,000 – ₹25,000' },
            { item: 'Freedom-to-Operate (FTO) Search & Opinion', cost: '₹25,000 – ₹60,000' },
            { item: 'Patent Landscape / State-of-the-Art Report', cost: '₹30,000 – ₹75,000' },
        ],
        advantages: [
            {
                icon: '🔍',
                title: 'Informed Filing Decisions',
                desc: 'A thorough prior art search reveals the existing patent landscape, enabling you to make data-driven decisions about whether and how to file your patent application.',
            },
            {
                icon: '💰',
                title: 'Cost Savings',
                desc: 'Identifying relevant prior art before filing prevents wasted expenditure on applications that are likely to be rejected — saving filing fees, attorney costs, and years of prosecution time.',
            },
            {
                icon: '📝',
                title: 'Stronger Patent Claims',
                desc: 'Understanding the prior art allows Your Professional to draft claims that are precisely differentiated from existing disclosures, resulting in stronger and more defensible patents.',
            },
            {
                icon: '⚡',
                title: 'Faster Prosecution',
                desc: 'Applications filed with knowledge of the prior art face fewer objections during examination, leading to faster grant timelines and reduced back-and-forth with the Patent Office.',
            },
            {
                icon: '🛡️',
                title: 'Reduced Infringement Risk',
                desc: 'Freedom-to-Operate searches identify existing patents that could be infringed by your product, enabling design-arounds or licensing strategies before costly litigation arises.',
            },
            {
                icon: '📊',
                title: 'Strategic IP Portfolio Building',
                desc: 'Patent landscape analysis identifies white spaces, technology trends, and competitor activities — enabling strategic R&D investment and targeted patent filing to build a robust IP portfolio.',
            },
            {
                icon: '📋',
                title: 'Effective FER Response',
                desc: 'Expert FER analysis ensures that responses to Patent Office objections are comprehensive, well-argued, and address all cited prior art — maximizing the chances of patent grant.',
            },
            {
                icon: '🤝',
                title: 'Investor & Partner Confidence',
                desc: 'A professional patentability report strengthens investor pitches, due diligence processes, and partnership discussions by demonstrating a well-researched and defensible IP position.',
            },
        ],
        disadvantages: [
            'No search can guarantee 100% coverage — unpublished applications and trade secrets remain invisible until publication (18 months from filing)',
            'Search results are based on existing databases and may not capture very recent filings not yet indexed',
            'Patentability opinions are advisory — the final decision on grant rests with the Patent Office examiner',
            'Complex inventions spanning multiple technology domains may require broader (and costlier) search strategies',
            'Prior art interpretation involves subjective judgement — different analysts may reach different conclusions on inventive step',
        ],
        faqs: [
            {
                q: 'Is a patent search mandatory before filing a patent application in India?',
                a: 'While not legally mandatory, a patent search is strongly recommended. It helps assess patentability, avoid prior art conflicts, and draft stronger claims. Filing without a search significantly increases the risk of rejection during examination.',
            },
            {
                q: 'What databases does Your Professional search during a patent search?',
                a: 'Your Professional searches the Indian Patent Office (InPASS/IPO), USPTO, EPO (Espacenet), WIPO (PATENTSCOPE), Google Patents, and relevant non-patent literature databases including IEEE, PubMed, and Google Scholar, depending on the technology domain.',
            },
            {
                q: 'What is a First Examination Report (FER) and why is it important?',
                a: 'The FER is the first official communication from the Indian Patent Office examiner after examining your patent application. It lists objections — including cited prior art — that must be addressed within 6 months. Failure to respond results in abandonment of the application.',
            },
            {
                q: 'How long does a comprehensive patent search take?',
                a: 'A standard patentability search typically takes 7–14 business days, including analysis and report preparation. Urgent searches can be completed in 3–5 business days. FTO and landscape searches may take 2–4 weeks depending on complexity.',
            },
            {
                q: 'Can a patent search guarantee that my invention is patentable?',
                a: 'No. A patent search provides a professional assessment based on available prior art, but cannot guarantee grant. Unpublished applications, trade secrets, and examiner discretion may affect the outcome. However, a thorough search significantly improves the probability of success.',
            },
            {
                q: 'What is the difference between a novelty search and a Freedom-to-Operate search?',
                a: 'A novelty search determines whether an invention is new (for filing purposes), while an FTO search determines whether a product or process infringes existing patents in force (for commercialization purposes). They serve different objectives and search different sets of references.',
            },
            {
                q: 'Should I conduct a patent search for a provisional application?',
                a: 'Yes. Even though a provisional specification establishes priority, conducting a search before filing helps identify the closest prior art, refine the invention disclosure, and ensure the complete specification (to be filed within 12 months) contains strong, differentiated claims.',
            },
            {
                q: 'How does Your Professional help with patent searches?',
                a: 'Your Professional provides end-to-end patent search services — from invention disclosure consultation and search strategy formulation to comprehensive database searching, prior art analysis, patentability opinion reports, and FER response preparation — all handled by registered patent agents and IP professionals.',
            },
        ],
        cta: {
            heading: 'Search Before You File — Save Time & Money',
            subheading:
                'Your Professional delivers expert patent search reports that empower confident, strategic patent filings.',
            features: [
                'Free Initial Invention Assessment',
                'Comprehensive Prior Art Search & Patentability Opinion',
                'Expert FER Analysis & Response Drafting',
                'Freedom-to-Operate & Landscape Reports',
            ],
        },
    },
};
