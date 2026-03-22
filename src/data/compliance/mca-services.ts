import type { ServiceData } from '../services';

export const MCA_SERVICES: Record<string, ServiceData> = {

// ──────────────────────────────────────────────────────────────
    // 1. Change Private Limited Company Name
    // ──────────────────────────────────────────────────────────────
    'change-private-limited-company-name': {
        slug: 'change-private-limited-company-name',
        title: 'Change Private Limited Company Name Online in India',
        subtitle:
            'Rebrand your Private Limited Company with a new name by filing INC-24 with the MCA. Your Professional ensures a smooth, compliant name change process under the Companies Act, 2013.',
        heroFeatures: [
            '📝 INC-24 Filing with MCA',
            '⚡ Name Approval via RUN (Reserve Unique Name)',
            '📜 Updated Certificate of Incorporation',
            '🛡️ Full Companies Act, 2013 Compliance',
        ],

        overview: {
            heading: 'What Is a Company Name Change?',
            paragraphs: [
                'A Private Limited Company registered under the Companies Act, 2013 can change its name by passing a Special Resolution and obtaining approval from the Registrar of Companies (ROC). The process involves reserving a new name through the RUN (Reserve Unique Name) service on the MCA portal, followed by filing Form INC-24.',
                'A name change may be needed for rebranding, mergers, change in business activity, or to comply with a direction issued by the Central Government under Section 16 of the Companies Act, 2013. The altered name takes effect from the date of issuance of the fresh Certificate of Incorporation.',
                'Your Professional provides end-to-end assistance—from name availability search and RUN application to Special Resolution drafting, INC-24 filing, and obtaining the updated Certificate of Incorporation.',
            ],
            highlights: [
                { icon: '🏛️', text: 'Governed by Sections 13 & 16 of the Companies Act, 2013' },
                { icon: '📋', text: 'Requires Special Resolution by shareholders' },
                { icon: '🔍', text: 'Name approved via RUN service on MCA portal' },
                { icon: '📄', text: 'Fresh Certificate of Incorporation issued by ROC' },
            ],
        },

        types: [
            { title: 'Voluntary Name Change', desc: 'Company opts to change its name for rebranding, strategic alignment, or business diversification under Section 13(2).' },
            { title: 'Directed Name Change', desc: 'Central Government directs the company to change its name under Section 16 if the name is identical or too similar to an existing company or registered trademark.' },
        ],

        eligibility: [
            'Company must be registered as a Private Limited Company under the Companies Act, 2013',
            'No pending compliance defaults or overdue annual filings with the ROC',
            'Special Resolution must be passed with at least 75% majority in a General Meeting or via postal ballot',
            'Proposed new name must not be identical or too similar to any existing company or LLP name',
            'New name must not infringe on any registered trademark under the Trade Marks Act, 1999',
            'Company must not be under any winding-up proceedings or strike-off action',
            'At least one year must have elapsed since the last name change (unless directed by the Central Government)',
        ],

        documents: [
            {
                category: 'Company Documents',
                items: [
                    'Certificate of Incorporation (existing)',
                    'Memorandum of Association (MOA)',
                    'Articles of Association (AOA)',
                    'Board Resolution for calling General Meeting',
                    'Special Resolution passed in General Meeting (or Postal Ballot)',
                ],
            },
            {
                category: 'Director & Shareholder Documents',
                items: [
                    'PAN Card of all directors',
                    'Aadhaar Card of all directors',
                    'Digital Signature Certificate (DSC) of the authorised director',
                    'List of shareholders with shareholding pattern',
                ],
            },
            {
                category: 'Regulatory & Filing Documents',
                items: [
                    'RUN (Reserve Unique Name) approval letter',
                    'Form MGT-14 (Special Resolution filing with ROC)',
                    'Form INC-24 (Application for name change)',
                    'NOC from trademark holder (if the proposed name resembles a registered trademark)',
                ],
            },
        ],

        process: [
            { title: 'Name Availability Search', desc: 'Conduct a comprehensive search on the MCA portal to verify that the proposed name is available and does not conflict with existing company or LLP names or registered trademarks.', time: '1 day' },
            { title: 'Reserve Name via RUN', desc: 'File the RUN (Reserve Unique Name) application on the MCA portal with up to two proposed names. The name reservation is valid for 60 days from approval.', time: '2–3 days' },
            { title: 'Board Meeting', desc: 'Convene a Board Meeting to approve the name change proposal and authorise calling an Extraordinary General Meeting (EGM) or issuing a postal ballot notice.', time: '1 day' },
            { title: 'Pass Special Resolution', desc: 'Hold an EGM or conduct postal ballot to pass a Special Resolution with at least 75% majority of voting shareholders approving the name change.', time: '3–7 days' },
            { title: 'File MGT-14', desc: 'File Form MGT-14 with the ROC within 30 days of passing the Special Resolution, attaching certified true copies of the resolution.', time: '1–2 days' },
            { title: 'File INC-24', desc: 'File Form INC-24 with the ROC along with the RUN approval, Special Resolution, and other prescribed attachments for approval of the name change.', time: '2–3 days' },
            { title: 'ROC Approval & New Certificate', desc: 'Upon verification, the ROC issues a fresh Certificate of Incorporation reflecting the new company name. The name change is effective from the date on this certificate.', time: '5–10 days' },
            { title: 'Post-Approval Updates', desc: 'Update the company name on all statutory records, letterheads, signage, bank accounts, GST registration, PAN/TAN, and other government registrations.', time: '7–15 days' },
        ],

        fees: [
            { item: 'RUN Application Fee (MCA)', cost: '₹1,000' },
            { item: 'Form INC-24 Filing Fee', cost: '₹2,000 – ₹5,000 (based on authorised capital)' },
            { item: 'Form MGT-14 Filing Fee', cost: '₹500 – ₹2,000 (based on authorised capital)' },
            { item: 'Stamp Duty on Altered MOA', cost: 'Varies by state' },
            { item: 'Your Professional Service Fee', cost: '₹7,999 onwards' },
        ],

        penalties: [
            { violation: 'Failure to file INC-24 within 30 days of Special Resolution', penalty: 'Additional fee of ₹100 per day of delay as prescribed under the Companies (Registration Offices and Fees) Rules, 2014' },
            { violation: 'Non-compliance with Central Government direction under Section 16', penalty: 'Penalty of ₹1,000 per day until the name change is effected, up to ₹1,00,000' },
            { violation: 'Failure to update name on official documents within prescribed time', penalty: 'Fine up to ₹1,000 per day of default for the company and every officer in default' },
        ],

        advantages: [
            { icon: '🏷️', title: 'Strategic Rebranding', desc: 'Align your company name with your evolving brand identity, market positioning, or diversified business activities.' },
            { icon: '⚖️', title: 'Legal Continuity', desc: 'The company retains its CIN and all legal rights, obligations, and contracts remain unaffected by the name change.' },
            { icon: '🔒', title: 'Trademark Protection', desc: 'A unique, distinctive name can be registered as a trademark, strengthening your intellectual property portfolio.' },
            { icon: '📈', title: 'Market Perception', desc: 'A modern, relevant company name enhances credibility and attracts better business opportunities and investor confidence.' },
            { icon: '🌐', title: 'Domain & Digital Presence', desc: 'Rebrand your online identity with a new company name that aligns with available domain names and digital branding.' },
            { icon: '🤝', title: 'Merger & Acquisition Alignment', desc: 'Post-merger or acquisition, a name change reflects the new ownership structure and combined brand identity.' },
        ],

        disadvantages: [
            'Requires Special Resolution with 75% shareholder approval, which can be challenging in companies with diverse shareholding',
            'Name change must be updated across all statutory registrations (GST, PAN, TAN, bank accounts), which is time-consuming',
            'Existing brand recognition associated with the old name may be temporarily lost',
            'Additional costs for stamp duty, filing fees, and updating marketing materials and signage',
            'Name reservation via RUN is valid only for 60 days—delays can lead to re-application',
        ],

        faqs: [
            { q: 'How long does it take to change a Private Limited Company name?', a: 'The entire process typically takes 15–30 working days from name reservation through RUN to issuance of the new Certificate of Incorporation by the ROC.' },
            { q: 'Does the CIN (Corporate Identity Number) change when the company name changes?', a: 'No, the CIN remains the same. Only the company name is updated in the MCA records and a fresh Certificate of Incorporation is issued with the new name.' },
            { q: 'Can we propose any name for the company?', a: 'The proposed name must comply with the Companies (Incorporation) Rules, 2014. It should not be identical or similar to existing companies/LLPs, should not violate any trademark, and must not contain words restricted by the Central Government.' },
            { q: 'Is a name change applicable for One Person Company (OPC) or Section 8 Company?', a: 'Yes, the name change process under Section 13 applies to all types of companies, including OPCs, Section 8 companies, and public companies, with minor variations in fee structure.' },
            { q: 'What happens to existing contracts after a name change?', a: 'All existing contracts, agreements, and legal obligations remain valid and enforceable. The company continues as the same legal entity, just with a new name.' },
            { q: 'Do we need to update the GST registration after a name change?', a: 'Yes, you must apply for amendment of your GST registration within 15 days of receiving the new Certificate of Incorporation by filing an application on the GST portal.' },
            { q: 'Can the Central Government force a company to change its name?', a: 'Yes, under Section 16 of the Companies Act, 2013, the Central Government can direct a company to change its name within 3 months if it is identical or too closely resembles the name of an existing company.' },
            { q: 'How can Your Professional help with the name change process?', a: 'Your Professional provides end-to-end assistance including name availability search, RUN application, drafting resolutions, filing MGT-14 and INC-24, and obtaining the updated Certificate of Incorporation.' },
        ],

        cta: {
            heading: 'Change Your Company Name with Confidence',
            subheading: 'Let Your Professional handle the entire name change process—from RUN application to new Certificate of Incorporation.',
            features: [
                '📝 Complete RUN & INC-24 Filing',
                '⚡ Fast-Track Processing',
                '🛡️ 100% MCA Compliance',
                '📞 Dedicated Expert Support',
            ],
        },
    },

    // ──────────────────────────────────────────────────────────────
    // 2. Close Private Limited Company
    // ──────────────────────────────────────────────────────────────
    'close-private-limited-company': {
        slug: 'close-private-limited-company',
        title: 'Close Private Limited Company Online in India',
        subtitle:
            'Wind up or strike off your Private Limited Company by filing STK-2 with the MCA. Your Professional ensures a hassle-free closure process fully compliant with the Companies Act, 2013.',
        heroFeatures: [
            '📋 STK-2 Strike Off Application',
            '⚡ Fast-Track Voluntary Closure',
            '🛡️ Companies Act, 2013 Compliance',
            '✅ Complete Liability Settlement',
        ],

        overview: {
            heading: 'What Is Company Closure / Strike Off?',
            paragraphs: [
                'Closing a Private Limited Company in India involves removing the company from the Register of Companies maintained by the MCA. This can be done either through voluntary strike off under Section 248 of the Companies Act, 2013 by filing Form STK-2, or through voluntary winding up under the Insolvency and Bankruptcy Code, 2016.',
                'The strike off route (STK-2) is the most common and cost-effective method for closing a company that has no liabilities or assets, or has ceased business operations. The company must have settled all debts and liabilities and obtained a No Objection Certificate (NOC) from creditors before filing.',
                'Your Professional guides you through the entire closure process—from passing the Special Resolution and obtaining required NOCs to filing STK-2 and ensuring all statutory requirements are met for a clean company closure.',
            ],
            highlights: [
                { icon: '📜', text: 'Governed by Section 248 of the Companies Act, 2013' },
                { icon: '📋', text: 'Form STK-2 filed with ROC for voluntary strike off' },
                { icon: '⚖️', text: 'All liabilities must be settled before closure' },
                { icon: '🏛️', text: 'Company name removed from Register of Companies' },
            ],
        },

        types: [
            { title: 'Voluntary Strike Off (STK-2)', desc: 'Company applies for removal of name from ROC under Section 248(2) when it has no assets/liabilities or has not commenced business within one year of incorporation.' },
            { title: 'Strike Off by ROC (Suo Motu)', desc: 'ROC initiates removal under Section 248(1) if the company has not filed annual returns or financial statements for two consecutive years.' },
            { title: 'Voluntary Winding Up', desc: 'Company undergoes winding up through the Insolvency and Bankruptcy Code, 2016 when it has assets to distribute or liabilities to settle through a formal liquidation process.' },
        ],

        eligibility: [
            'Company must have no pending liabilities or debts, or all liabilities must be fully settled',
            'Company has not commenced business within one year of incorporation, or has ceased all business operations',
            'No pending legal proceedings against the company in any court or tribunal',
            'All statutory returns (annual returns, financial statements) must be filed up to the date of application',
            'Special Resolution must be passed by at least 75% of shareholders, or consent of at least 75% of members obtained',
            'Company must not have any pending tax liabilities with Income Tax, GST, or other statutory authorities',
            'NOC must be obtained from all creditors and affected parties',
        ],

        documents: [
            {
                category: 'Company Documents',
                items: [
                    'Certificate of Incorporation',
                    'Memorandum of Association (MOA) & Articles of Association (AOA)',
                    'Board Resolution authorising closure',
                    'Special Resolution passed by shareholders (75% majority)',
                    'Statement of accounts (not older than 30 days from the date of application)',
                ],
            },
            {
                category: 'Regulatory & Tax Documents',
                items: [
                    'Income Tax returns filed up to the date of application',
                    'GST cancellation certificate or proof of GST return filing',
                    'No Objection Certificate (NOC) from creditors',
                    'Indemnity Bond signed by all directors (in prescribed format)',
                    'Affidavit by directors confirming no pending liabilities',
                ],
            },
            {
                category: 'Director Documents',
                items: [
                    'PAN Card of all directors',
                    'Aadhaar Card of all directors',
                    'Digital Signature Certificate (DSC) of the authorised director',
                    'Director Identification Number (DIN) of all directors',
                ],
            },
        ],

        process: [
            { title: 'Settle All Liabilities', desc: 'Clear all outstanding debts, loans, and statutory dues including income tax, GST, and any other government liabilities. Close all bank accounts after settling pending transactions.', time: '7–15 days' },
            { title: 'Obtain NOCs', desc: 'Obtain No Objection Certificates from all creditors, banks, and statutory authorities. Apply for GST cancellation if the company is registered under GST.', time: '7–30 days' },
            { title: 'Convene Board Meeting', desc: 'Hold a Board Meeting to approve the proposal for voluntary closure and authorise calling an EGM or issuing postal ballot for passing the Special Resolution.', time: '1 day' },
            { title: 'Pass Special Resolution', desc: 'Pass a Special Resolution with at least 75% majority of voting shareholders to approve the voluntary strike off of the company.', time: '3–7 days' },
            { title: 'Prepare Statement of Accounts', desc: 'Prepare a statement of accounts showing the assets and liabilities of the company, certified by a Chartered Accountant, not older than 30 days from the filing date.', time: '3–5 days' },
            { title: 'File STK-2 with ROC', desc: 'File Form STK-2 on the MCA portal along with the Special Resolution, statement of accounts, indemnity bond, affidavit, and NOCs from creditors.', time: '1–2 days' },
            { title: 'ROC Verification & Public Notice', desc: 'The ROC publishes a notice on the MCA portal inviting objections from the public for 30 days. If no objections are received, the ROC proceeds with strike off.', time: '30–60 days' },
            { title: 'Strike Off & Gazette Publication', desc: 'Upon satisfaction, the ROC strikes off the company name and publishes the notice in the Official Gazette. The company ceases to exist from the date of strike off.', time: '30–60 days' },
        ],

        fees: [
            { item: 'Form STK-2 Filing Fee (MCA)', cost: '₹5,000 (e-form fee)' },
            { item: 'Professional Fee for CA Certification', cost: '₹3,000 – ₹5,000' },
            { item: 'GST Cancellation Fee', cost: 'Nil (no government fee)' },
            { item: 'Stamp Duty (if applicable)', cost: 'Varies by state' },
            { item: 'Your Professional Service Fee', cost: '₹9,999 onwards' },
        ],

        penalties: [
            { violation: 'Filing annual returns after company is struck off', penalty: 'Company must first be revived before filing any pending returns; revival costs ₹25,000–₹1,00,000+' },
            { violation: 'Directors of struck-off company starting new company without settling liabilities', penalty: 'Disqualification of directors under Section 164(2) for 5 years from holding directorship in any company' },
            { violation: 'Failure to file STK-2 within prescribed timelines after ceasing business', penalty: 'ROC may initiate suo motu strike off and directors face penalties under Section 248' },
        ],

        advantages: [
            { icon: '✅', title: 'End Compliance Burden', desc: 'Eliminate ongoing statutory compliance requirements including annual filing of returns, board meetings, and audit obligations.' },
            { icon: '💰', title: 'Cost Savings', desc: 'Stop incurring recurring costs on audit fees, compliance fees, registered office maintenance, and other administrative expenses.' },
            { icon: '🛡️', title: 'Director Protection', desc: 'Prevent director disqualification under Section 164(2) that occurs when a company fails to file annual returns for 3 consecutive years.' },
            { icon: '📋', title: 'Clean Regulatory Record', desc: 'A properly closed company reflects a clean regulatory record for the directors, enabling them to hold positions in other companies.' },
            { icon: '⚡', title: 'Simpler Than Winding Up', desc: 'The STK-2 strike off process is faster and more cost-effective than the formal winding up process under the Insolvency and Bankruptcy Code.' },
            { icon: '🔒', title: 'Limited Liability Closure', desc: 'Personal assets of shareholders remain protected as the closure settles only company liabilities within the limited liability framework.' },
        ],

        disadvantages: [
            'The closure process can take 3–6 months from filing to final strike off due to the mandatory public notice period',
            'All liabilities and statutory dues must be fully cleared before filing, which can be time-consuming',
            'Directors may face disqualification issues if the company has pending compliance defaults that are not rectified before closure',
            'Once struck off, revival requires an application to NCLT and can be expensive and time-consuming',
            'GST cancellation and income tax clearance may involve scrutiny and additional compliance requirements',
        ],

        faqs: [
            { q: 'How long does it take to close a Private Limited Company?', a: 'The entire process typically takes 3–6 months from filing STK-2 to the final strike off, mainly due to the mandatory 30-day public notice period and ROC processing time.' },
            { q: 'Can a struck-off company be revived?', a: 'Yes, a struck-off company can be revived within 20 years of the date of strike off by filing an application with the National Company Law Tribunal (NCLT) under Section 252 of the Companies Act, 2013.' },
            { q: 'What happens to the directors after the company is struck off?', a: 'The directors remain liable for any liabilities incurred before the strike off. If the company had pending annual returns at the time of closure, directors may face disqualification under Section 164(2).' },
            { q: 'Is it mandatory to cancel GST before closing the company?', a: 'Yes, it is highly recommended to apply for GST cancellation before or alongside the company closure process to avoid future compliance issues and notices from the GST department.' },
            { q: 'Can we close a company that has pending liabilities?', a: 'No, all liabilities must be fully settled before filing STK-2. If the company has unsettled debts, it must either clear them or opt for the formal winding up process under the Insolvency and Bankruptcy Code.' },
            { q: 'What is the difference between strike off and winding up?', a: 'Strike off (STK-2) is a simpler process for companies with no assets/liabilities, while winding up is a formal liquidation process under the IBC for companies with assets to distribute or debts to settle.' },
            { q: 'Do all directors need to sign the STK-2 form?', a: 'Form STK-2 must be signed digitally by the authorised director, and all directors must sign the indemnity bond and affidavit confirming no pending liabilities.' },
            { q: 'How can Your Professional help with company closure?', a: 'Your Professional provides complete assistance from settling liabilities, obtaining NOCs, drafting resolutions, preparing the statement of accounts, filing STK-2, and tracking the application until final strike off.' },
        ],

        cta: {
            heading: 'Close Your Company the Right Way',
            subheading: 'Let Your Professional handle the entire closure process—from compliance clearance to final strike off.',
            features: [
                '📋 Complete STK-2 Filing',
                '⚖️ Full Liability Settlement Guidance',
                '🛡️ Director Protection Advisory',
                '📞 Dedicated Expert Support',
            ],
        },
    },

    // ──────────────────────────────────────────────────────────────
    // 3. Change in Registered Office
    // ──────────────────────────────────────────────────────────────
    'change-in-registered-office': {
        slug: 'change-in-registered-office',
        title: 'Change in Registered Office Address Online in India',
        subtitle:
            'Shift your company\'s registered office address by filing INC-22 with the MCA. Your Professional ensures compliant relocation under the Companies Act, 2013, whether within or outside the state.',
        heroFeatures: [
            '📍 INC-22 Filing with MCA',
            '🏢 Within City, State, or Inter-State Shift',
            '📜 Updated MCA Records & Certificate',
            '🛡️ Full Companies Act, 2013 Compliance',
        ],

        overview: {
            heading: 'What Is a Change in Registered Office?',
            paragraphs: [
                'Every company registered under the Companies Act, 2013 must have a registered office address where all official communications and notices can be served. When a company needs to relocate its registered office, it must follow specific procedures prescribed under Sections 12 and 13 of the Companies Act, 2013.',
                'The procedure varies depending on whether the shift is within the same city, within the same state but to a different ROC jurisdiction, or from one state to another. A simple shift within the same city requires only a Board Resolution and INC-22 filing, while an inter-state shift requires a Special Resolution and approval from the Regional Director.',
                'Your Professional provides complete assistance for all types of registered office changes—from Board/Special Resolution drafting, INC-22 filing, to obtaining confirmation from the Regional Director for inter-state shifts.',
            ],
            highlights: [
                { icon: '🏛️', text: 'Governed by Sections 12 & 13 of the Companies Act, 2013' },
                { icon: '📋', text: 'Form INC-22 filed with ROC for address change' },
                { icon: '🔄', text: 'Procedure varies based on type of shift (local/state/inter-state)' },
                { icon: '📄', text: 'Updated records reflected on MCA portal after approval' },
            ],
        },

        types: [
            { title: 'Within Same City/Town (Same ROC)', desc: 'Simplest procedure requiring only a Board Resolution and filing of INC-22. No Special Resolution or government approval needed.' },
            { title: 'Within Same State but Different ROC Jurisdiction', desc: 'Requires a Special Resolution by shareholders and filing of INC-22. ROC approval is needed for the jurisdictional transfer.' },
            { title: 'From One State to Another', desc: 'Most complex procedure requiring Special Resolution, alteration of MOA (Clause II), filing of INC-23 with the Regional Director, and INC-22 with the new ROC.' },
        ],

        eligibility: [
            'Company must be registered under the Companies Act, 2013',
            'No pending compliance defaults or overdue annual filings with the ROC',
            'Board Resolution (for same city shift) or Special Resolution (for inter-state/different ROC shift) must be passed',
            'New registered office must be a valid physical address (not a P.O. Box or virtual address)',
            'Proof of ownership or occupancy of the new premises must be available',
            'NOC from the owner of the new premises (if rented or leased)',
            'Company must have verified its registered office address within 30 days of incorporation or change',
        ],

        documents: [
            {
                category: 'Company Documents',
                items: [
                    'Certificate of Incorporation',
                    'Memorandum of Association (MOA) — for inter-state shift',
                    'Articles of Association (AOA)',
                    'Board Resolution (for same city shift) or Special Resolution (for other shifts)',
                    'Copy of utility bill (electricity, water, gas) of the new premises not older than 2 months',
                ],
            },
            {
                category: 'Premises Documents',
                items: [
                    'Proof of ownership (sale deed/property tax receipt) or rental/lease agreement for the new premises',
                    'NOC from the owner of the new premises (if rented)',
                    'Proof of registered office address (utility bill not older than 2 months)',
                    'Google Maps location or photograph of the new office premises',
                ],
            },
            {
                category: 'Director & Filing Documents',
                items: [
                    'Digital Signature Certificate (DSC) of the authorised director',
                    'Form INC-22 (Verification of Registered Office)',
                    'Form INC-23 (Application to Regional Director — for inter-state shift)',
                    'Form MGT-14 (if Special Resolution is passed)',
                ],
            },
        ],

        process: [
            { title: 'Identify New Premises', desc: 'Finalise the new registered office address and obtain the necessary ownership/lease documents and NOC from the landlord (if applicable).', time: '1–3 days' },
            { title: 'Board Meeting / EGM', desc: 'For a shift within the same city, pass a Board Resolution. For inter-state or different ROC jurisdiction, convene an EGM and pass a Special Resolution.', time: '1–7 days' },
            { title: 'File MGT-14 (If Applicable)', desc: 'If a Special Resolution is passed, file Form MGT-14 with the ROC within 30 days of passing the resolution.', time: '1–2 days' },
            { title: 'File INC-22 with ROC', desc: 'File Form INC-22 (Verification of Registered Office) on the MCA portal along with proof of the new address, utility bill, NOC, and resolution.', time: '1–3 days' },
            { title: 'File INC-23 (Inter-State Only)', desc: 'For inter-state shift, file Form INC-23 with the Regional Director along with the Special Resolution, creditor NOCs, and other prescribed documents.', time: '5–10 days' },
            { title: 'Publication of Notice (Inter-State)', desc: 'Publish a notice of the proposed shift in a newspaper circulating in the state of the existing and proposed registered office for creditor objections.', time: '7–14 days' },
            { title: 'Regional Director Approval', desc: 'The Regional Director confirms the shift after verifying compliance and hearing any objections. The order is filed with both the old and new ROCs.', time: '30–60 days' },
            { title: 'Update Registrations', desc: 'Update the registered office address across all statutory registrations including GST, PAN/TAN, bank accounts, and other government records.', time: '7–15 days' },
        ],

        fees: [
            { item: 'Form INC-22 Filing Fee (MCA)', cost: '₹1,000 – ₹5,000 (based on authorised capital)' },
            { item: 'Form INC-23 Filing Fee (Inter-State)', cost: '₹5,000 – ₹10,000 (based on authorised capital)' },
            { item: 'Form MGT-14 Filing Fee', cost: '₹500 – ₹2,000 (based on authorised capital)' },
            { item: 'Newspaper Publication Charges', cost: '₹2,000 – ₹5,000 (for inter-state shift)' },
            { item: 'Your Professional Service Fee', cost: '₹4,999 onwards' },
        ],

        penalties: [
            { violation: 'Failure to file INC-22 within 30 days of the address change', penalty: 'Additional filing fee of ₹100 per day of delay' },
            { violation: 'Company not maintaining registered office or not displaying name/address', penalty: 'Fine of ₹1,000 per day of default, up to ₹1,00,000 for the company and ₹500 per day for every officer in default' },
            { violation: 'Non-filing of INC-23 for inter-state shift', penalty: 'ROC may treat the shift as invalid; company faces penalties under Section 12 and potential prosecution' },
        ],

        advantages: [
            { icon: '🏢', title: 'Business Expansion', desc: 'Relocate your registered office to a new city or state to tap into new markets, access better infrastructure, or be closer to clients.' },
            { icon: '💰', title: 'Cost Optimisation', desc: 'Move to a location with lower rent, reduced operational costs, or beneficial state tax incentives and subsidies.' },
            { icon: '📍', title: 'Strategic Location', desc: 'Position your company in a business-friendly location such as SEZs, IT parks, or industrial corridors for regulatory and logistical advantages.' },
            { icon: '🔄', title: 'Compliance Flexibility', desc: 'Shift to a jurisdiction with a more responsive ROC for faster processing of statutory filings and compliance matters.' },
            { icon: '👥', title: 'Talent Access', desc: 'Move to a location with better access to skilled talent pool, academic institutions, and industry clusters.' },
            { icon: '🌐', title: 'Client Proximity', desc: 'Relocate closer to key clients, vendors, or business partners to improve operational efficiency and relationship management.' },
        ],

        disadvantages: [
            'Inter-state shift is complex, time-consuming, and requires Regional Director approval which can take 2–3 months',
            'Newspaper publication and creditor NOCs add to the cost and procedural requirements for inter-state shifts',
            'All statutory registrations (GST, PAN, TAN, EPFO, ESIC) must be updated, which involves multiple applications',
            'Existing service-level agreements and client contracts may need amendment to reflect the new address',
            'Employees may face relocation challenges if the shift involves a change of city or state',
        ],

        faqs: [
            { q: 'How long does it take to change the registered office address?', a: 'A shift within the same city takes 7–15 days. A shift within the same state but different ROC takes 15–30 days. An inter-state shift can take 2–4 months due to Regional Director approval requirements.' },
            { q: 'Do I need a Special Resolution for all types of registered office changes?', a: 'No. A shift within the same city (same ROC jurisdiction) requires only a Board Resolution. A shift to a different ROC jurisdiction or different state requires a Special Resolution.' },
            { q: 'Can I use a residential address as a registered office?', a: 'Yes, a residential address can be used as a registered office provided you have proof of address (utility bill) and an NOC from the owner if it is rented or leased premises.' },
            { q: 'What is Form INC-22 used for?', a: 'Form INC-22 is the "Verification of Registered Office" form filed with the ROC to intimate the change of registered office address. It must be accompanied by proof of address and NOC from the premises owner.' },
            { q: 'Is it mandatory to update the GST registration after changing the registered office?', a: 'Yes, you must file an amendment application on the GST portal within 15 days of the address change. If the shift is to a different state, you need to cancel the existing GST and apply for fresh registration.' },
            { q: 'What happens if the new address is in a different ROC jurisdiction within the same state?', a: 'You need to pass a Special Resolution, file MGT-14, and file INC-22. The ROC will transfer the company records to the new jurisdictional ROC office.' },
            { q: 'Can a company change its registered office during pending litigation?', a: 'Yes, but the company must disclose pending proceedings in the INC-23 application (for inter-state shift). Courts or opposing parties may object if they believe the shift is intended to evade jurisdiction.' },
            { q: 'How does Your Professional help with registered office change?', a: 'Your Professional handles the entire process including resolution drafting, INC-22/INC-23 filing, newspaper publication (for inter-state), obtaining Regional Director approval, and updating all statutory registrations.' },
        ],

        cta: {
            heading: 'Relocate Your Registered Office Seamlessly',
            subheading: 'Let Your Professional manage the entire registered office change—from resolution to updated MCA records.',
            features: [
                '📍 All Shift Types Covered',
                '📋 INC-22 & INC-23 Filing',
                '🛡️ Full Regulatory Compliance',
                '📞 Dedicated Expert Support',
            ],
        },
    },

    // ──────────────────────────────────────────────────────────────
    // 4. Change in Object Clause
    // ──────────────────────────────────────────────────────────────
    'change-in-object-clause': {
        slug: 'change-in-object-clause',
        title: 'Change in Object Clause (MOA Alteration) Online in India',
        subtitle:
            'Alter the Object Clause of your Memorandum of Association (MOA) by filing MGT-14 with the MCA. Your Professional ensures compliant amendment under the Companies Act, 2013.',
        heroFeatures: [
            '📋 MGT-14 Filing with MCA',
            '📜 MOA Object Clause Alteration',
            '⚖️ Section 13 Compliance',
            '🔄 Expand or Modify Business Activities',
        ],

        overview: {
            heading: 'What Is a Change in Object Clause?',
            paragraphs: [
                'The Object Clause (Clause III) of the Memorandum of Association (MOA) defines the purpose and scope of business activities a company is authorised to carry out. Under Section 13 of the Companies Act, 2013, a company can alter its Object Clause by passing a Special Resolution and filing Form MGT-14 with the ROC.',
                'Companies often need to alter their Object Clause to expand into new business verticals, diversify operations, enter new markets, or comply with regulatory requirements. The alteration allows the company to undertake activities beyond its original scope without forming a new entity.',
                'Your Professional provides comprehensive assistance for Object Clause alteration—from drafting the revised clause and Special Resolution to filing MGT-14 and ensuring the amended MOA is properly updated with the ROC.',
            ],
            highlights: [
                { icon: '📜', text: 'Governed by Section 13 of the Companies Act, 2013' },
                { icon: '📋', text: 'Requires Special Resolution (75% majority)' },
                { icon: '🏛️', text: 'Form MGT-14 filed with ROC within 30 days' },
                { icon: '✅', text: 'Amended MOA takes effect from the date of filing' },
            ],
        },

        eligibility: [
            'Company must be registered under the Companies Act, 2013',
            'No pending compliance defaults or overdue annual filings with the ROC',
            'Special Resolution must be passed with at least 75% majority in a General Meeting or via postal ballot',
            'The proposed alteration must not violate any provisions of the Companies Act or any other applicable law',
            'If the company has taken loans from banks/financial institutions, NOC from lenders may be required as per loan covenants',
            'Section 8 companies (non-profit) require Central Government approval for alteration of Object Clause',
            'The altered Object Clause must clearly and specifically describe the new business activities',
        ],

        documents: [
            {
                category: 'Company Documents',
                items: [
                    'Existing Memorandum of Association (MOA)',
                    'Articles of Association (AOA)',
                    'Certificate of Incorporation',
                    'Board Resolution authorising the calling of EGM',
                    'Special Resolution passed in EGM or via postal ballot',
                    'Certified true copy of the altered MOA',
                ],
            },
            {
                category: 'Filing Documents',
                items: [
                    'Form MGT-14 (Filing of Special Resolution with ROC)',
                    'Explanatory Statement under Section 102 of the Companies Act, annexed to the EGM notice',
                    'Notice of EGM along with proof of service to all shareholders',
                    'Minutes of the EGM recording the passing of the Special Resolution',
                ],
            },
            {
                category: 'Director Documents',
                items: [
                    'Digital Signature Certificate (DSC) of the authorised director',
                    'PAN Card of the director signing the form',
                    'Certified copy of Board Resolution authorising the director to sign and file MGT-14',
                ],
            },
        ],

        process: [
            { title: 'Draft Revised Object Clause', desc: 'Draft the new or amended Object Clause specifying the additional or modified business activities. Ensure the language is clear, specific, and compliant with MCA guidelines.', time: '1–2 days' },
            { title: 'Convene Board Meeting', desc: 'Hold a Board Meeting to approve the proposed alteration of the Object Clause, draft the EGM notice with explanatory statement, and authorise calling an EGM.', time: '1 day' },
            { title: 'Issue EGM Notice', desc: 'Send notice of the EGM to all shareholders at least 21 clear days before the meeting date, along with the explanatory statement under Section 102.', time: '21 days (notice period)' },
            { title: 'Pass Special Resolution', desc: 'Conduct the EGM and pass a Special Resolution with at least 75% majority of voting shareholders approving the alteration of the Object Clause.', time: '1 day' },
            { title: 'File MGT-14 with ROC', desc: 'File Form MGT-14 on the MCA portal within 30 days of passing the Special Resolution, attaching the certified true copy of the resolution and altered MOA.', time: '1–3 days' },
            { title: 'ROC Approval & Records Update', desc: 'The ROC reviews the filing, verifies compliance, and updates the company records to reflect the altered Object Clause in the MOA.', time: '3–7 days' },
        ],

        fees: [
            { item: 'Form MGT-14 Filing Fee', cost: '₹500 – ₹5,000 (based on authorised capital)' },
            { item: 'Stamp Duty on Altered MOA', cost: 'Varies by state (typically ₹100 – ₹1,000)' },
            { item: 'Printing of Amended MOA', cost: '₹500 – ₹1,000' },
            { item: 'Professional Fee (CS/CA)', cost: '₹2,000 – ₹5,000 (for certification)' },
            { item: 'Your Professional Service Fee', cost: '₹5,999 onwards' },
        ],

        penalties: [
            { violation: 'Failure to file MGT-14 within 30 days of Special Resolution', penalty: 'Additional fee of ₹100 per day of delay as per the Companies (Registration Offices and Fees) Rules, 2014' },
            { violation: 'Company carrying out activities not covered in Object Clause', penalty: 'Such activities may be treated as ultra vires and the company and its officers may face penalties under Section 13' },
            { violation: 'Non-disclosure of material facts in the explanatory statement', penalty: 'Officers in default may face prosecution under Section 102(5) with fine up to ₹5,00,000' },
        ],

        advantages: [
            { icon: '🔄', title: 'Business Diversification', desc: 'Expand into new business verticals and revenue streams without forming a separate company, saving time and registration costs.' },
            { icon: '📈', title: 'Growth Opportunities', desc: 'Unlock new market opportunities by legally authorising the company to engage in previously restricted business activities.' },
            { icon: '⚖️', title: 'Legal Compliance', desc: 'Ensure all business activities are legally authorised under the MOA, protecting the company from ultra vires challenges.' },
            { icon: '🤝', title: 'Investor Confidence', desc: 'A broader Object Clause signals business flexibility and growth potential, attracting investors and strategic partners.' },
            { icon: '🏛️', title: 'Regulatory Alignment', desc: 'Align the Object Clause with current regulatory requirements and industry-specific licensing conditions.' },
            { icon: '🌐', title: 'International Expansion', desc: 'Add export/import or international trade as objects to facilitate cross-border business operations and partnerships.' },
            { icon: '💡', title: 'Innovation & R&D', desc: 'Include research and development activities in the Object Clause to access government grants, subsidies, and tax benefits for innovation.' },
        ],

        disadvantages: [
            'Requires Special Resolution with 75% shareholder approval, which may be difficult in companies with dispersed shareholding',
            'The 21-day EGM notice period adds to the overall timeline even for straightforward alterations',
            'Section 8 companies require additional Central Government approval, significantly extending the timeline',
            'Stamp duty varies by state and can add to costs for companies registered in high stamp duty states',
            'If lender NOC is required under loan agreements, obtaining clearance may cause additional delays',
        ],

        faqs: [
            { q: 'What is the Object Clause in a MOA?', a: 'The Object Clause (Clause III) in the Memorandum of Association defines the scope of business activities the company is authorised to undertake. Any business activity not covered in the Object Clause is considered ultra vires (beyond the powers of the company).' },
            { q: 'Why would a company need to change its Object Clause?', a: 'Companies alter their Object Clause to diversify into new business lines, enter new markets, comply with licensing requirements, pursue M&A opportunities, or include emerging business activities like e-commerce or fintech.' },
            { q: 'How long does it take to change the Object Clause?', a: 'The process typically takes 25–40 days, including the mandatory 21-day EGM notice period, passing the Special Resolution, and filing MGT-14 with the ROC.' },
            { q: 'Is Central Government approval needed for Object Clause alteration?', a: 'No, for most private and public companies, only a Special Resolution and MGT-14 filing is required. However, Section 8 companies (non-profit) require prior approval from the Central Government.' },
            { q: 'Can we remove objects from the MOA?', a: 'Yes, the alteration can include addition, removal, or modification of existing objects. If the company has ceased certain activities, removing those objects simplifies the MOA and avoids confusion.' },
            { q: 'Does changing the Object Clause affect the company CIN or PAN?', a: 'No, altering the Object Clause does not change the Company Identification Number (CIN), PAN, TAN, or any other statutory registration numbers.' },
            { q: 'What happens if the company operates outside its Object Clause?', a: 'Activities outside the Object Clause are considered ultra vires and may be deemed void. Directors and officers may face personal liability, and the company could face penalties under the Companies Act.' },
            { q: 'How does Your Professional help with Object Clause alteration?', a: 'Your Professional provides end-to-end assistance including drafting the revised Object Clause, preparing Board/Special Resolutions, EGM notice, explanatory statement, filing MGT-14, and updating the MOA with the ROC.' },
        ],

        cta: {
            heading: 'Expand Your Business Scope Legally',
            subheading: 'Let Your Professional handle the Object Clause alteration—from drafting to ROC filing.',
            features: [
                '📜 Expert MOA Drafting',
                '📋 Complete MGT-14 Filing',
                '🛡️ Full Compliance Assurance',
                '📞 Dedicated Expert Support',
            ],
        },
    },

    // ──────────────────────────────────────────────────────────────
    // 5. Revival of Struck Off Companies
    // ──────────────────────────────────────────────────────────────
    'revival-of-struck-off-companies': {
        slug: 'revival-of-struck-off-companies',
        title: 'Revival of Struck Off Companies Online in India',
        subtitle:
            'Restore your struck-off company to active status by filing an application with the NCLT. Your Professional provides expert assistance for company revival under Section 252 of the Companies Act, 2013.',
        heroFeatures: [
            '⚖️ NCLT Application Filing',
            '📜 Section 252 Revival Process',
            '🔄 Restore Active Company Status',
            '🛡️ Full Companies Act, 2013 Compliance',
        ],

        overview: {
            heading: 'What Is Revival of a Struck Off Company?',
            paragraphs: [
                'When a company is struck off from the Register of Companies by the ROC under Section 248 of the Companies Act, 2013 (either suo motu for non-filing or upon voluntary application), it ceases to exist as a legal entity. However, the company can be revived by filing an application before the National Company Law Tribunal (NCLT) under Section 252.',
                'The NCLT has the power to restore the name of the company to the Register of Companies if it is satisfied that the company was carrying on business at the time of strike off, or that it is just and equitable to restore the company. The application must be filed within 20 years from the date of publication of the strike-off notice in the Official Gazette.',
                'Your Professional provides comprehensive assistance for company revival—from preparing the NCLT petition and compiling all pending statutory filings to representing your case before the NCLT and obtaining the revival order.',
            ],
            highlights: [
                { icon: '⚖️', text: 'Application filed before NCLT under Section 252' },
                { icon: '📋', text: 'Must file within 20 years of the strike-off publication' },
                { icon: '🔄', text: 'Company restored to active status upon NCLT order' },
                { icon: '🏛️', text: 'All pending compliances must be filed post-revival' },
            ],
        },

        types: [
            { title: 'Revival by Company/Members', desc: 'The company itself, any member, creditor, or workman whose interests have been affected can file an application under Section 252(1) for revival.' },
            { title: 'Revival by ROC', desc: 'The Registrar of Companies can also file an application with the NCLT for revival if satisfied that the company was carrying on business or it is just and equitable.' },
            { title: 'Revival Under Court Direction', desc: 'In certain cases, a High Court or other tribunal may direct the ROC or company to apply for revival as part of ongoing proceedings.' },
        ],

        eligibility: [
            'The company must have been struck off under Section 248 of the Companies Act, 2013',
            'Application must be filed within 20 years from the date of publication of the strike-off notice in the Official Gazette',
            'The applicant must be a member, creditor, workman, or the company itself (through its directors)',
            'The applicant must demonstrate that the company was carrying on business at the time of strike off, or that it is just and equitable to restore the company',
            'All pending statutory filings (annual returns, financial statements) must be prepared for filing upon revival',
            'The company must be willing to clear all pending statutory dues and penalties upon revival',
            'Directors must not be disqualified under Section 164(2) or must apply for removal of disqualification simultaneously',
        ],

        documents: [
            {
                category: 'NCLT Application Documents',
                items: [
                    'NCLT petition (Form NCLT-9) with supporting affidavit',
                    'Memorandum of Association (MOA) and Articles of Association (AOA)',
                    'Certificate of Incorporation (original or certified copy)',
                    'Copy of the strike-off order or Official Gazette notification',
                    'Statement of affairs of the company at the time of strike off',
                    'Grounds and justification for revival (detailed explanation)',
                ],
            },
            {
                category: 'Compliance & Financial Documents',
                items: [
                    'Audited financial statements for all pending years',
                    'Annual returns for all pending years',
                    'Income tax returns for all pending years',
                    'Bank account statements showing business transactions (if claiming business was active)',
                    'GST returns (if applicable) for pending periods',
                ],
            },
            {
                category: 'Director & Applicant Documents',
                items: [
                    'PAN Card and Aadhaar Card of all directors',
                    'Affidavit from directors confirming willingness to comply with all pending requirements',
                    'Board Resolution authorising the filing of revival application',
                    'Proof of identity and address of the applicant (if member or creditor)',
                    'Vakalatnama (power of attorney) in favour of the advocate appearing before NCLT',
                ],
            },
        ],

        process: [
            { title: 'Assessment & Gap Analysis', desc: 'Evaluate the grounds for revival, identify all pending compliances, calculate outstanding penalties and fees, and assess the feasibility of the revival application.', time: '3–5 days' },
            { title: 'Prepare Pending Filings', desc: 'Prepare all overdue financial statements, annual returns, and income tax returns that need to be filed upon or immediately after revival.', time: '7–15 days' },
            { title: 'Draft NCLT Petition', desc: 'Prepare the NCLT petition (Form NCLT-9) with detailed grounds for revival, supporting affidavits, and all required annexures and exhibits.', time: '3–5 days' },
            { title: 'File Application with NCLT', desc: 'File the revival application at the appropriate NCLT bench having jurisdiction over the registered office of the struck-off company, along with prescribed court fees.', time: '1–2 days' },
            { title: 'Serve Notice to ROC', desc: 'Serve a copy of the NCLT petition on the Registrar of Companies and other respondents as directed by the Tribunal.', time: '7–14 days' },
            { title: 'NCLT Hearing & Arguments', desc: 'Appear before the NCLT for hearings, present arguments and evidence supporting the revival, and address any objections raised by the ROC or other parties.', time: '30–90 days' },
            { title: 'Obtain Revival Order', desc: 'Upon satisfaction, the NCLT passes an order directing the ROC to restore the company name to the Register of Companies and restore it to active status.', time: '7–14 days' },
            { title: 'File NCLT Order with ROC & Complete Compliance', desc: 'File the certified copy of the NCLT order with the ROC, pay all pending fees and penalties, file all overdue returns, and restore the company to full compliance.', time: '15–30 days' },
        ],

        fees: [
            { item: 'NCLT Court Filing Fee', cost: '₹5,000 – ₹25,000 (based on case complexity)' },
            { item: 'Advocate / Legal Counsel Fee', cost: '₹15,000 – ₹50,000 (varies by NCLT bench)' },
            { item: 'Pending Annual Filing Fees & Penalties', cost: '₹10,000 – ₹5,00,000+ (depends on years of default)' },
            { item: 'CA/CS Professional Fee (Pending Filings)', cost: '₹10,000 – ₹30,000' },
            { item: 'Your Professional Service Fee', cost: '₹24,999 onwards' },
        ],

        penalties: [
            { violation: 'Pending annual return filings (AOC-4, MGT-7)', penalty: 'Additional fee of ₹100 per day of delay per form, which can accumulate to lakhs for multi-year defaults' },
            { violation: 'Directors of struck-off company acting as directors in other companies', penalty: 'Disqualification under Section 164(2) for 5 years; personal liability for actions taken during disqualification period' },
            { violation: 'Company conducting business while struck off', penalty: 'Personal liability on every person who was an officer or member during such period; fine up to ₹5,00,000 and imprisonment up to 6 months' },
        ],

        advantages: [
            { icon: '🔄', title: 'Restore Legal Entity', desc: 'Revive the company as a fully functional legal entity with all its rights, obligations, and assets restored to the pre-strike-off status.' },
            { icon: '📊', title: 'Protect Assets & Contracts', desc: 'Restore ownership of company assets, intellectual property, contracts, and agreements that were frozen upon strike off.' },
            { icon: '🛡️', title: 'Director Rehabilitation', desc: 'Directors can apply for removal of disqualification under Section 164(2) simultaneously, restoring their ability to hold directorships.' },
            { icon: '💼', title: 'Business Continuity', desc: 'Resume business operations under the same CIN, PAN, TAN, and registrations without forming a new company from scratch.' },
            { icon: '⚖️', title: 'Legal Standing', desc: 'The company regains its legal standing to sue and be sued, enter into contracts, and participate in legal proceedings.' },
            { icon: '🏦', title: 'Financial Access', desc: 'Restore access to frozen bank accounts, recover pending receivables, and resume financial operations with banks and financial institutions.' },
            { icon: '📋', title: 'Compliance Regularisation', desc: 'File all pending statutory returns and bring the company into full compliance with the Companies Act, Income Tax Act, and GST laws.' },
        ],

        disadvantages: [
            'The NCLT revival process is lengthy and can take 3–12 months depending on the bench workload and case complexity',
            'Accumulated penalties for non-filing of annual returns can run into lakhs of rupees for multi-year defaults',
            'Directors may face disqualification proceedings and personal liability for actions during the strike-off period',
            'Legal representation before NCLT is required, adding significant costs to the revival process',
            'There is no guarantee of revival—NCLT may refuse the application if grounds are insufficient',
            'All pending tax and statutory compliances must be cleared, which can be a substantial financial burden',
        ],

        faqs: [
            { q: 'How long does it take to revive a struck-off company?', a: 'The revival process typically takes 3–12 months from filing the NCLT application to obtaining the revival order, depending on the NCLT bench workload, case complexity, and any objections raised.' },
            { q: 'Who can file an application for revival?', a: 'The company (through its directors), any member, creditor, or workman aggrieved by the strike off can file an application for revival under Section 252 of the Companies Act, 2013.' },
            { q: 'What is the time limit for filing a revival application?', a: 'The application must be filed within 20 years from the date of publication of the strike-off notice in the Official Gazette.' },
            { q: 'Will the directors\' disqualification be removed upon revival?', a: 'Revival of the company does not automatically remove director disqualification. Directors must separately apply for removal of disqualification, though NCLT may pass directions in the same order.' },
            { q: 'What happens to the company assets after strike off?', a: 'Under Section 248(7), any property vested in the struck-off company is deemed to be the property of the government. Upon revival, the assets are restored to the company.' },
            { q: 'Can a company struck off by the ROC suo motu be revived?', a: 'Yes, whether the company was struck off voluntarily (STK-2) or suo motu by the ROC, it can be revived through an NCLT application under Section 252.' },
            { q: 'What are the costs involved in reviving a struck-off company?', a: 'Costs include NCLT filing fees (₹5,000–₹25,000), advocate fees (₹15,000–₹50,000), pending filing penalties (can be lakhs), and professional service fees. Your Professional offers packages starting at ₹24,999.' },
            { q: 'How can Your Professional help with company revival?', a: 'Your Professional provides end-to-end revival assistance including gap analysis, preparation of all pending filings, drafting the NCLT petition, legal representation before NCLT, filing the revival order with ROC, and completing all post-revival compliances.' },
        ],

        cta: {
            heading: 'Revive Your Struck-Off Company Today',
            subheading: 'Let Your Professional handle the complete NCLT revival process—from petition drafting to active status restoration.',
            features: [
                '⚖️ Expert NCLT Representation',
                '📋 All Pending Filings Prepared',
                '🔄 Full Compliance Restoration',
                '📞 Dedicated Expert Support',
            ],
        },
    },

    'change-in-director': {
        slug: 'change-in-director',
        title: 'Change in Director',
        subtitle: 'Seamless appointment or resignation of directors with MCA DIR-12 filing — handled end-to-end by Your Professional.',
        heroFeatures: [
            'DIR-12 Filing with MCA',
            'Board Resolution Drafting',
            'DIN Verification & Compliance',
            'ROC Approval in 5–7 Days'
        ],
        overview: {
            heading: 'What is Change in Director?',
            paragraphs: [
                'A Change in Director refers to the appointment of a new director or the resignation of an existing director from a company registered under the Companies Act, 2013. Every such change must be reported to the Registrar of Companies (ROC) by filing Form DIR-12 within 30 days of the board resolution approving the change.',
                'Directors are the key managerial personnel responsible for corporate governance. Whether a company needs to appoint an additional director, replace a retiring director, or accept a resignation, the procedure is governed by Sections 152, 168, and 169 of the Companies Act, 2013. Non-compliance attracts penalties for both the company and its officers in default.',
                'Your Professional simplifies the entire process — from drafting the board resolution and obtaining Digital Signature Certificates to filing DIR-12 with the MCA portal and ensuring timely ROC approval.'
            ],
            highlights: [
                { icon: '📋', text: 'Mandatory DIR-12 filing within 30 days' },
                { icon: '⚖️', text: 'Governed by Companies Act, 2013' },
                { icon: '🔐', text: 'DSC required for all signatories' },
                { icon: '✅', text: 'Applicable to all company types' }
            ]
        },
        types: [
            { title: 'Appointment of Director', desc: 'Adding a new director to the board through ordinary or special resolution as per Section 152 of the Companies Act, 2013.' },
            { title: 'Resignation of Director', desc: 'A director may resign by giving notice in writing under Section 168. The resignation takes effect from the date mentioned in the notice or the date of receipt by the board.' },
            { title: 'Removal of Director', desc: 'Shareholders can remove a director before the expiry of their term by passing an ordinary resolution under Section 169, subject to special notice requirements.' },
            { title: 'Change in Designation', desc: 'Changing the designation of an existing director — for example, from Additional Director to Regular Director — also requires DIR-12 filing with the ROC.' }
        ],
        eligibility: [
            'The company must be registered under the Companies Act, 2013',
            'The incoming director must hold a valid Director Identification Number (DIN)',
            'The new director must not be disqualified under Section 164 of the Companies Act',
            'A board meeting must be convened with a valid quorum to approve the change',
            'The resigning director must submit a written notice to the board under Section 168',
            'Digital Signature Certificates (DSC) must be active for all signing directors'
        ],
        documents: [
            {
                category: 'Director Documents',
                items: [
                    'PAN Card of the incoming/outgoing director',
                    'Aadhaar Card or Passport for identity proof',
                    'Passport-size photograph (recent)',
                    'Proof of residential address (utility bill or bank statement not older than 2 months)',
                    'Director Identification Number (DIN) allotment letter',
                    'Digital Signature Certificate (DSC)'
                ]
            },
            {
                category: 'Company Documents',
                items: [
                    'Certificate of Incorporation',
                    'Memorandum of Association (MOA)',
                    'Articles of Association (AOA)',
                    'Board Resolution for appointment/resignation',
                    'Latest Annual Return (Form MGT-7)'
                ]
            },
            {
                category: 'Statutory Forms',
                items: [
                    'Form DIR-12 (Particulars of appointment/change in directors)',
                    'Form DIR-2 (Consent to act as Director)',
                    'Form DIR-8 (Intimation of disqualification, if applicable)',
                    'Resignation letter (in case of resignation)'
                ]
            }
        ],
        process: [
            { title: 'Consultation & Assessment', desc: 'Your Professional reviews the company structure and advises on the appropriate type of directorial change and applicable legal provisions.', time: '1 day' },
            { title: 'DIN Verification / Application', desc: 'If the incoming director does not have a DIN, an application is filed via DIR-3 on the MCA portal.', time: '1–3 days' },
            { title: 'Board Resolution Drafting', desc: 'A board resolution is drafted to approve the appointment, resignation, or removal of the director, specifying the effective date.', time: '1–2 days' },
            { title: 'Consent & Declaration', desc: 'The incoming director signs Form DIR-2 (consent) and Form DIR-8 (declaration of non-disqualification). DSCs are affixed to all forms.', time: '1–2 days' },
            { title: 'Filing DIR-12 with MCA', desc: 'Form DIR-12 is prepared and filed electronically on the MCA V3 portal along with all supporting attachments.', time: '1 day' },
            { title: 'ROC Processing & Approval', desc: 'The Registrar of Companies processes the application and updates the company master data upon approval.', time: '3–5 working days' },
            { title: 'Confirmation & Records Update', desc: 'Your Professional provides the updated MCA master data and ensures the company\'s statutory registers are updated accordingly.', time: '1–2 days' }
        ],
        fees: [
            { item: 'DIR-12 Government Filing Fee', cost: '₹300 – ₹600 (based on authorized capital)' },
            { item: 'DIN Application Fee (DIR-3)', cost: '₹500 (if new DIN is required)' },
            { item: 'Digital Signature Certificate (DSC)', cost: '₹1,500 – ₹2,500 per director' },
            { item: 'Professional Service Charges', cost: '₹2,999 onwards' },
            { item: 'Stamp Duty (if applicable)', cost: '₹100 – ₹500 (varies by state)' }
        ],
        penalties: [
            { violation: 'Non-filing of DIR-12 within 30 days', penalty: '₹50,000 + ₹500/day for continuing default (for the company)' },
            { violation: 'Director not reporting resignation to ROC', penalty: '₹50,000 – ₹5,00,000 under Section 168(2)' },
            { violation: 'Acting as director while disqualified', penalty: 'Imprisonment up to 1 year and/or fine of ₹1,00,000 – ₹5,00,000' },
            { violation: 'Failure to maintain statutory registers', penalty: '₹50,000 + ₹1,000/day of continuing default' }
        ],
        advantages: [
            { icon: '⚡', title: 'Fast ROC Approval', desc: 'DIR-12 filings are typically processed within 3–5 working days, ensuring quick updates to your company records.' },
            { icon: '🛡️', title: 'Full Legal Compliance', desc: 'Ensures adherence to Sections 152, 168, and 169 of the Companies Act, 2013 and prevents penalties.' },
            { icon: '📄', title: 'Complete Documentation', desc: 'Your Professional drafts all board resolutions, consent forms, and declarations — nothing is left to guesswork.' },
            { icon: '🔄', title: 'Seamless Transition', desc: 'Smooth handover of directorial duties with updated statutory registers and MCA master data.' },
            { icon: '🤝', title: 'Expert Guidance', desc: 'Dedicated compliance expert reviews your case and handles any ROC queries or resubmissions at no extra cost.' },
            { icon: '💰', title: 'Transparent Pricing', desc: 'No hidden charges — the entire filing fee structure is communicated upfront before engagement.' },
            { icon: '🔐', title: 'Secure DSC Handling', desc: 'All Digital Signature Certificates are handled securely with proper authorization protocols.' }
        ],
        disadvantages: [
            'Delay in filing beyond 30 days attracts additional government fees and penalties',
            'Directors without a valid DIN must first apply for one, adding 3–5 extra days',
            'If the board quorum is not met, a valid resolution cannot be passed',
            'ROC may raise queries if supporting documents are incomplete, delaying approval'
        ],
        faqs: [
            { q: 'What is Form DIR-12?', a: 'Form DIR-12 is the statutory form prescribed under the Companies Act, 2013 to intimate the ROC about the appointment, resignation, or removal of a director from a company. It must be filed within 30 days of the change.' },
            { q: 'Is a board resolution mandatory for changing a director?', a: 'Yes. A board resolution is mandatory for the appointment or acceptance of resignation of a director. For removal under Section 169, an ordinary resolution at a general meeting is required.' },
            { q: 'What is the penalty for late filing of DIR-12?', a: 'If DIR-12 is not filed within 30 days, the company faces a penalty of ₹50,000 plus ₹500 per day of continuing default. Officers in default are also liable for similar penalties.' },
            { q: 'Can a director resign without board approval?', a: 'A director can submit a resignation notice under Section 168. The resignation is effective from the date specified in the notice or the date it is received by the board, whichever is later. The board must take note of the resignation.' },
            { q: 'Does the new director need a DIN?', a: 'Yes. Every individual proposed to be appointed as a director must have a valid Director Identification Number (DIN). If they do not have one, a DIN application must be filed via DIR-3 before appointment.' },
            { q: 'How long does the entire process take?', a: 'With Your Professional, the complete process — from consultation to ROC approval — typically takes 7–10 working days, depending on document readiness and MCA processing times.' },
            { q: 'Is DSC required for DIR-12 filing?', a: 'Yes. The Digital Signature Certificate of an existing director and a practicing professional (CA/CS/CWA) is mandatory for authenticating the DIR-12 form on the MCA portal.' },
            { q: 'Can a director of a private limited company be removed?', a: 'Yes. Under Section 169, shareholders may remove a director by passing an ordinary resolution after giving special notice. However, this does not apply to directors appointed by the Tribunal or under proportional representation.' }
        ],
        cta: {
            heading: 'Need to Change a Director? Let Your Professional Handle It.',
            subheading: 'From board resolutions to MCA filing — we make directorial changes hassle-free.',
            features: [
                'Complete DIR-12 filing with ROC',
                'Board resolution & consent form drafting',
                'DSC procurement assistance',
                'Post-filing statutory register update'
            ]
        }
    },

    'add-designated-partner': {
        slug: 'add-designated-partner',
        title: 'Add Designated Partner',
        subtitle: 'File Form 4 with the MCA to add a Designated Partner to your LLP — DPIN/DIN verification, consent management, and LLP Agreement amendment fully handled by Your Professional.',
        heroFeatures: [
            'LLP Form 4 Filing with MCA',
            'DPIN / DIN Verification & Allotment',
            'Supplementary LLP Agreement Drafting',
            'Partner Consent & DSC Management',
            'ROC Master Data Update in 5–7 Days'
        ],
        overview: {
            heading: 'What is Adding a Designated Partner to an LLP?',
            paragraphs: [
                '<p>A Designated Partner in a Limited Liability Partnership (LLP) is an individual entrusted with the responsibility of regulatory compliance, statutory filings, and representing the LLP before the Registrar of Companies (ROC). Under <strong>Section 7 of the LLP Act, 2008</strong>, every LLP must have at least two Designated Partners at all times, and at least one of them must be a resident of India — defined as an individual who has stayed in India for not fewer than 120 days during the immediately preceding financial year. Unlike ordinary partners, Designated Partners are personally accountable for penalties arising from non-compliance, making their role critical to the governance framework of any LLP.</p>',
                '<p>The process of adding a new Designated Partner is governed by the LLP Act and the LLP Rules, 2009. Whether the LLP is expanding its management team, meeting statutory requirements after a resignation, or bringing in domain expertise, the addition requires execution of a <strong>Supplementary LLP Agreement</strong> and filing of <strong>Form 4</strong> (Notice of Appointment/Cessation of Partner or Designated Partner) with the MCA within 30 days of the change. Additionally, <strong>Form 3</strong> must be filed to intimate the ROC about amendments to the LLP Agreement. The incoming Designated Partner must hold a valid <strong>DPIN (now unified with DIN)</strong> and provide prior written consent to act in that capacity.</p>',
                '<p>The consequences of delayed or non-compliance are significant — the LLP Act prescribes a penalty of <strong>₹100 per day of default with no upper cap</strong> for late filing of Form 4, and maintaining fewer than two Designated Partners attracts additional penalties of ₹10,000 plus ₹100 per day until the shortfall is rectified. These penalties apply both to the LLP and to every existing Designated Partner, making timely compliance essential to avoid mounting financial liabilities.</p>',
                '<p>Your Professional manages every aspect of the addition process — from verifying or obtaining the DPIN/DIN of the incoming partner, drafting the Supplementary LLP Agreement with appropriate profit-sharing ratios and responsibility clauses, procuring Digital Signature Certificates, and coordinating partner consent, to filing Form 4 and Form 3 on the MCA portal and tracking ROC approval. Our compliance team ensures the entire process is completed within <strong>7–10 working days</strong>, with zero risk of penalties or procedural errors.</p>'
            ],
            highlights: [
                { icon: '👥', text: 'Minimum 2 Designated Partners required per LLP at all times' },
                { icon: '🏠', text: 'At least one must be an Indian resident (120+ days)' },
                { icon: '📝', text: 'Form 4 filing mandatory within 30 days of the change' },
                { icon: '🔑', text: 'DPIN/DIN required for every Designated Partner' }
            ]
        },
        types: [
            { title: 'Addition of New Designated Partner', desc: 'Bringing in a new individual as a Designated Partner to the LLP by amending the LLP Agreement and filing Form 4 with the ROC.' },
            { title: 'Conversion of Partner to Designated Partner', desc: 'An existing partner of the LLP may be elevated to the role of Designated Partner through a supplementary agreement and Form 4 filing.' },
            { title: 'Replacement of Designated Partner', desc: 'When a Designated Partner resigns or is removed, a replacement must be appointed within 30 days to maintain the statutory minimum of two Designated Partners.' }
        ],
        eligibility: [
            'The LLP must be registered and active under the LLP Act, 2008 with the ROC',
            'The incoming Designated Partner must hold a valid DPIN or DIN allotted by the MCA',
            'At least one Designated Partner must be a resident of India (stayed 120+ days in India in the previous financial year)',
            'The incoming partner must provide prior written consent to act as Designated Partner',
            'All existing partners must agree to the addition as per the terms of the existing LLP Agreement',
            'A Supplementary LLP Agreement must be executed on appropriate stamp paper and filed with the ROC',
            'Digital Signature Certificate (DSC) is required for the incoming and existing Designated Partners for MCA filings',
            'The incoming individual must not be disqualified under Section 7 of the LLP Act, 2008 — must be at least 18 years of age, of sound mind, and not an undischarged insolvent'
        ],
        documents: [
            {
                category: 'Partner Identity Documents',
                items: [
                    'PAN Card of the incoming Designated Partner',
                    'Aadhaar Card (for Indian residents) or Passport (for foreign nationals)',
                    'Passport-size photograph (recent, white background)',
                    'Proof of residential address (utility bill, bank statement, or telephone bill not older than 2 months)',
                    'DPIN / DIN allotment letter or proof of allotment'
                ]
            },
            {
                category: 'LLP Documents',
                items: [
                    'Certificate of Incorporation of the LLP',
                    'Existing LLP Agreement (original or certified copy)',
                    'PAN Card of the LLP',
                    'Supplementary LLP Agreement (to be drafted by Your Professional)',
                    'Consent letter from the incoming Designated Partner (in prescribed format)'
                ]
            },
            {
                category: 'Digital & Statutory Forms',
                items: [
                    'Digital Signature Certificate (DSC) of the incoming Designated Partner',
                    'DSC of existing Designated Partners (for form authentication)',
                    'Form 4 — Notice of appointment/cessation of partner or Designated Partner',
                    'Form 3 — Information with regard to LLP Agreement (for supplementary agreement filing)',
                    'Prior written consent of the incoming partner as prescribed under the LLP Rules'
                ]
            }
        ],
        process: [
            { title: 'Initial Consultation & Eligibility Review', desc: 'Your Professional evaluates the current LLP structure, reviews the existing LLP Agreement terms, checks partner eligibility, and advises on the complete process for adding the new Designated Partner.', time: '1 day' },
            { title: 'DPIN / DIN Verification or Application', desc: 'The incoming partner\'s DPIN or DIN is verified on the MCA portal. If not available, a fresh DIN application is filed through the DIR-3 e-form with supporting identity and address proof.', time: '1–3 days' },
            { title: 'DSC Procurement & Validation', desc: 'Digital Signature Certificates are procured for the incoming partner (if not already held) and existing DSCs are validated for MCA form signing. Class 3 DSC with 2-year validity is recommended.', time: '1–2 days' },
            { title: 'Supplementary LLP Agreement Drafting', desc: 'A comprehensive Supplementary LLP Agreement is drafted incorporating the new Designated Partner\'s details, profit-sharing ratio, capital contribution, and management responsibilities.', time: '2–3 days' },
            { title: 'Partner Consent & Agreement Execution', desc: 'The incoming Designated Partner signs the consent letter in the prescribed format. All partners execute the Supplementary LLP Agreement on appropriate stamp paper as per state requirements.', time: '1–2 days' },
            { title: 'Filing Form 4 with MCA', desc: 'Form 4 (notice of appointment of Designated Partner) is prepared, digitally signed by a current Designated Partner, and filed electronically on the MCA portal with all supporting documents attached.', time: '1 day' },
            { title: 'Filing Form 3 with MCA', desc: 'Form 3 is filed to intimate the ROC about the amendments to the LLP Agreement within 30 days of execution of the Supplementary Agreement, along with a certified copy of the agreement.', time: '1 day' },
            { title: 'ROC Approval & Final Documentation', desc: 'The Registrar processes the application and updates the LLP master data. Your Professional tracks the status, handles any ROC queries, and shares the updated master data and filed form receipts with the client.', time: '3–5 working days' }
        ],
        fees: [
            { item: 'Form 4 Government Filing Fee', cost: '₹50 – ₹200 (based on LLP contribution)' },
            { item: 'Form 3 Government Filing Fee', cost: '₹50 – ₹200 (based on LLP contribution)' },
            { item: 'DIN Application Fee (DIR-3)', cost: '₹500 (if new DIN is required)' },
            { item: 'Digital Signature Certificate (DSC)', cost: '₹1,500 – ₹2,500 per partner' },
            { item: 'Professional Service Charges', cost: '₹3,499 onwards' }
        ],
        penalties: [
            { violation: 'Non-filing of Form 4 within 30 days', penalty: '₹100/day of default (no cap under LLP Act, 2008)' },
            { violation: 'Failure to maintain minimum 2 Designated Partners', penalty: '₹10,000 + ₹100/day penalty for each Designated Partner until compliance' },
            { violation: 'Non-filing of Form 3 (supplementary agreement)', penalty: '₹100/day of default for the LLP and every Designated Partner' },
            { violation: 'Designated Partner acting without valid DPIN/DIN', penalty: '₹50,000 fine under Section 7 of the LLP Act' }
        ],
        advantages: [
            { icon: '📈', title: 'Strengthened Management', desc: 'Adding a Designated Partner brings fresh expertise and shared decision-making responsibilities to the LLP, improving operational efficiency.' },
            { icon: '⚖️', title: 'Statutory Compliance Assured', desc: 'Ensures the LLP meets the mandatory requirement of having at least two Designated Partners under Section 7 of the LLP Act, 2008.' },
            { icon: '📄', title: 'Agreement Drafting Included', desc: 'Your Professional drafts the Supplementary LLP Agreement with legally sound clauses covering profit-sharing, capital contribution, and management duties.' },
            { icon: '⏱️', title: 'Quick Turnaround', desc: 'The complete process — from DPIN verification to ROC confirmation — is handled within 7–10 working days with no delays.' },
            { icon: '🛡️', title: 'Penalty Avoidance', desc: 'Timely filing within 30 days prevents daily penalties of ₹100/day (no cap) under the LLP Act for delayed compliance.' },
            { icon: '🤝', title: 'End-to-End Support', desc: 'Your Professional handles all MCA filings, DSC procurement, consent management, and ROC correspondence — zero back-and-forth for the client.' },
            { icon: '💼', title: 'Improved Credibility', desc: 'An updated LLP structure with additional Designated Partners enhances trust and confidence with banks, clients, and regulatory authorities.' },
            { icon: '🔑', title: 'DPIN/DIN Assistance', desc: 'If the incoming partner does not hold a DIN, Your Professional files the DIR-3 application and obtains the DIN before initiating Form 4 filing.' },
            { icon: '📋', title: 'Complete Documentation Trail', desc: 'Every document — consent letters, supplementary agreement, MCA receipts — is systematically organized and shared with the client for future reference.' }
        ],
        disadvantages: [
            'DPIN/DIN procurement adds 3–5 working days if the incoming partner does not already have one allotted',
            'All existing partners must consent to the change, which may cause delays in multi-partner LLPs',
            'Late filing of Form 4 attracts ₹100/day penalty with no upper cap under the LLP Act',
            'Supplementary agreement must be executed on stamp paper, and stamp duty rates vary by state',
            'The incoming partner must obtain a valid Digital Signature Certificate (DSC) before the filing can proceed',
            'If the existing LLP Agreement has restrictive clauses on partner admission, legal review may be required before proceeding'
        ],
        faqs: [
            { q: 'What is Form 4 in LLP?', a: 'Form 4 is the statutory form prescribed under the LLP Act, 2008 to notify the ROC about the appointment or cessation of a partner or Designated Partner. It must be filed within 30 days of the change, along with supporting documents including the consent letter and DPIN/DIN details.' },
            { q: 'Is DPIN the same as DIN?', a: 'Yes. Since the MCA notification dated 2015, the Designated Partner Identification Number (DPIN) has been unified with the Director Identification Number (DIN). A DIN is sufficient for acting as a Designated Partner of an LLP, and no separate DPIN application is required.' },
            { q: 'Can a body corporate be a Designated Partner?', a: 'No. Only individuals can be Designated Partners of an LLP. However, a body corporate can become a partner (not Designated Partner) of an LLP through its authorized nominee, who may then be appointed as a Designated Partner in an individual capacity.' },
            { q: 'What happens if an LLP has fewer than 2 Designated Partners?', a: 'If the number of Designated Partners falls below two, the remaining Designated Partner must appoint a replacement within 30 days. Failing to do so attracts a penalty of ₹10,000 plus ₹100 per day until the shortfall is rectified, applicable to the LLP and its Designated Partners.' },
            { q: 'Is a Supplementary LLP Agreement mandatory?', a: 'Yes. Any change in the LLP structure — including addition or removal of a Designated Partner — requires execution of a Supplementary LLP Agreement. This agreement must be filed with the ROC via Form 3 within 30 days of its execution.' },
            { q: 'What is the residency requirement for Designated Partners?', a: 'At least one Designated Partner must have stayed in India for a minimum of 120 days during the immediately preceding financial year. This is a mandatory requirement under the LLP Act, 2008, and non-compliance may attract regulatory scrutiny.' },
            { q: 'How long does the entire process take with Your Professional?', a: 'The typical turnaround is 7–10 working days from the date of document submission, including DPIN/DIN verification, agreement drafting, Form 4 and Form 3 filing, and ROC approval. If a new DIN is required, an additional 3–5 days may be needed.' },
            { q: 'Can a minor be appointed as a Designated Partner?', a: 'No. A minor cannot be a Designated Partner of an LLP. The individual must be at least 18 years of age, of sound mind, not an undischarged insolvent, and must not be disqualified under any provision of the LLP Act, 2008.' },
            { q: 'What is the consent requirement for the incoming Designated Partner?', a: 'The incoming Designated Partner must provide prior written consent to act in that capacity. This consent letter, in the format prescribed under the LLP Rules, must be filed along with Form 4 as an attachment on the MCA portal.' },
            { q: 'Can a foreign national be added as a Designated Partner?', a: 'Yes. A foreign national can be appointed as a Designated Partner, provided they hold a valid DIN and a Digital Signature Certificate. However, the LLP must still ensure that at least one Designated Partner is an Indian resident as per the 120-day residency requirement.' },
            { q: 'What documents does Your Professional need from the client?', a: 'Your Professional requires the incoming partner\'s PAN Card, Aadhaar/Passport, address proof, photograph, and DIN details. For the LLP, we need the Certificate of Incorporation, existing LLP Agreement, and PAN Card. All statutory forms and the Supplementary Agreement are prepared by our team.' },
            { q: 'Is stamp duty payable on the Supplementary LLP Agreement?', a: 'Yes. The Supplementary LLP Agreement must be executed on non-judicial stamp paper, and the stamp duty amount varies by state. Your Professional advises on the applicable stamp duty based on the state of the LLP\'s registered office and ensures proper execution.' }
        ],
        cta: {
            heading: 'Adding a Designated Partner to Your LLP? Let Your Professional Handle It.',
            subheading: 'From DPIN/DIN verification and consent management to Form 4 filing and LLP Agreement amendment — we ensure seamless, penalty-free compliance with the LLP Act.',
            features: [
                'Complete Form 4 & Form 3 filing with MCA',
                'Supplementary LLP Agreement drafting & execution',
                'DPIN/DIN verification, allotment & DSC assistance',
                'Partner consent coordination & document management',
                'Post-filing ROC master data update & tracking'
            ]
        }
    },

    'dir-3-kyc-for-directors': {
        slug: 'dir-3-kyc-for-directors',
        title: 'DIR-3 KYC for Directors',
        subtitle: 'Mandatory annual KYC compliance for all DIN holders — file DIR-3 KYC before September 30 with Your Professional and keep your DIN active.',
        heroFeatures: [
            'Annual DIR-3 KYC Filing (e-Form & Web)',
            'Due Date: 30th September Every Year',
            'Aadhaar OTP & Email Verification',
            'DIN Reactivation with Late Fee Support',
            'Dedicated Compliance Expert Assigned'
        ],
        overview: {
            heading: 'What is DIR-3 KYC for Directors?',
            paragraphs: [
                '<p>DIR-3 KYC is a <strong>mandatory annual compliance requirement</strong> introduced by the Ministry of Corporate Affairs (MCA) under <strong>Rule 12A of the Companies (Appointment and Qualification of Directors) Rules, 2014</strong>. Every individual who has been allotted a Director Identification Number (DIN) — whether currently serving as a director in any company, having resigned from all directorships, or even never having joined a company — must file DIR-3 KYC before <strong>30th September of every financial year</strong>. This requirement was introduced in 2018 to ensure the MCA maintains an accurate, verified database of all DIN holders across India.</p>',
                '<p>The MCA offers two modes of filing: the <strong>DIR-3 KYC e-Form</strong> and the <strong>DIR-3 KYC Web-Based Form</strong>. The e-Form must be used for first-time filing or whenever there is a change in the director\'s personal details (mobile number, email address, or residential address) — it requires certification by a practicing professional (CA, CS, or CWA) and a Digital Signature Certificate (DSC). The web-based form is a simplified version for subsequent years when no details have changed — it requires only Aadhaar-based OTP verification and email confirmation, with no professional certification or DSC needed. Understanding which form applies is critical, as filing the wrong form can lead to rejection or delays.</p>',
                '<p>The consequences of non-filing are severe and immediate. If DIR-3 KYC is not filed by the 30th September deadline, the MCA <strong>automatically deactivates the DIN</strong> with the status marked as "Deactivated due to non-filing of DIR-3 KYC." A deactivated DIN renders the director completely unable to sign or file any form on the MCA portal, which can cascade into compliance failures for every company where the director holds a position. Reactivation requires filing the DIR-3 KYC form along with a <strong>late fee of ₹5,000</strong>, with no provision for waiver or reduction of this penalty.</p>',
                '<p>Your Professional provides complete DIR-3 KYC filing support — from determining the correct form type (e-Form vs. web-based), collecting and verifying documents, coordinating real-time Aadhaar OTP and email verification with the director, to affixing the DSC and submitting the form on the MCA portal. We also offer an <strong>annual reminder service</strong> to ensure you never miss the September 30 deadline, and provide full DIN reactivation assistance if your DIN has already been deactivated due to past non-filing.</p>'
            ],
            highlights: [
                { icon: '📅', text: 'Annual due date: 30th September every year' },
                { icon: '🔒', text: 'DIN automatically deactivated on non-filing' },
                { icon: '📱', text: 'Aadhaar OTP verification mandatory for Indian residents' },
                { icon: '👤', text: 'Applicable to ALL DIN holders — active, resigned, or unused' }
            ]
        },
        types: [
            { title: 'DIR-3 KYC (e-Form)', desc: 'Filed for the first time or when there is a change in personal details (mobile number, email, address). This requires a practicing professional (CA/CS/CWA) to certify the form and a valid DSC.' },
            { title: 'DIR-3 KYC (Web-Based)', desc: 'Filed for subsequent years when there is no change in personal details. This is a simplified web-based form that requires only Aadhaar OTP and email verification — no professional certification or DSC needed.' },
            { title: 'DIN Reactivation (after deactivation)', desc: 'If a director\'s DIN has been deactivated due to non-filing of DIR-3 KYC, the DIN can be reactivated by filing the KYC form along with the prescribed late fee of ₹5,000.' }
        ],
        eligibility: [
            'Every individual who has been allotted a DIN by the MCA — irrespective of whether they currently hold any directorship',
            'Directors of all company types — Private Limited, Public Limited, One Person Company (OPC), Section 8, Producer Company, Nidhi Company, etc.',
            'Designated Partners of LLPs who hold a DIN allotted by the MCA',
            'Directors who have resigned from all companies but still hold an active or deactivated DIN',
            'DIN holders whose DIN has been deactivated due to non-filing in previous years (for reactivation with ₹5,000 late fee)',
            'Individuals who obtained a DIN but never joined or were appointed to any company',
            'Foreign nationals holding an Indian DIN — must use passport-based verification instead of Aadhaar',
            'Nominee directors, independent directors, and additional directors holding a valid DIN'
        ],
        documents: [
            {
                category: 'Identity & Address Proof',
                items: [
                    'PAN Card (mandatory for all Indian residents)',
                    'Aadhaar Card (mandatory for Indian residents — used for OTP verification)',
                    'Passport (mandatory for foreign nationals; optional for Indian residents)',
                    'Proof of current residential address (utility bill, bank statement, or telephone bill not older than 2 months)',
                    'Passport-size photograph (recent, white background)'
                ]
            },
            {
                category: 'Verification & Digital Details',
                items: [
                    'Personal mobile number linked to Aadhaar (for real-time OTP during filing)',
                    'Personal email ID (for email verification link from MCA)',
                    'Digital Signature Certificate (DSC) — required for e-form filing only',
                    'DIN allotment number and date of allotment',
                    'Details of all companies where the individual is currently a director (CIN, name)'
                ]
            },
            {
                category: 'Professional Certification (e-Form Only)',
                items: [
                    'Certification by a practicing Chartered Accountant (CA) with membership number',
                    'Or certification by a practicing Company Secretary (CS) with membership number',
                    'Or certification by a practicing Cost Accountant (CWA) with membership number',
                    'UDIN (Unique Document Identification Number) generated by the certifying professional'
                ]
            }
        ],
        process: [
            { title: 'Document Collection & Form Type Assessment', desc: 'Your Professional collects all necessary documents — PAN, Aadhaar, address proof, DSC, and current contact details — and determines whether the e-form or web-based form is applicable based on changes in personal details.', time: '1 day' },
            { title: 'DIN Status Verification', desc: 'We verify the current status of the DIN on the MCA portal — whether it is active, deactivated due to non-filing, or flagged for any compliance issue. If deactivated, the reactivation process with late fee is initiated.', time: '1 day' },
            { title: 'Form Preparation & Data Entry', desc: 'Based on the applicable form type, Your Professional prepares either the e-form (with all personal details, address, and professional certification) or initiates the web-based DIR-3 KYC form on the MCA portal.', time: '1–2 days' },
            { title: 'Aadhaar OTP Verification', desc: 'An OTP is sent to the director\'s Aadhaar-linked mobile number for identity verification. The director must be available to share the OTP in real-time, as it expires within a short window.', time: 'Same day' },
            { title: 'Email Verification', desc: 'A verification link is sent by the MCA to the director\'s registered personal email. The director clicks the link to confirm the email address — this step must be completed before form submission.', time: 'Same day' },
            { title: 'Professional Certification & DSC Affixing', desc: 'For e-form filings, the practicing professional (CA/CS/CWA) certifies the form and generates a UDIN. The director\'s DSC is affixed, and the form is submitted on the MCA portal.', time: '1 day' },
            { title: 'Filing Submission & SRN Generation', desc: 'The DIR-3 KYC form is submitted on the MCA portal. Your Professional provides the SRN (Service Request Number) and filing receipt as confirmation of successful submission.', time: '1 day' },
            { title: 'Post-Filing DIN Status Verification', desc: 'Your Professional verifies the DIN status on the MCA portal after filing to confirm it remains active (or has been reactivated). The filing receipt and status confirmation are shared with the director.', time: '1–2 days' }
        ],
        fees: [
            { item: 'DIR-3 KYC Government Fee (on time)', cost: '₹0 (no government fee if filed before 30th September)' },
            { item: 'DIR-3 KYC Late Fee (after due date)', cost: '₹5,000 (for DIN reactivation)' },
            { item: 'Digital Signature Certificate (DSC)', cost: '₹1,500 – ₹2,500 (if not already available)' },
            { item: 'Professional Service Charges (per director)', cost: '₹999 onwards' }
        ],
        penalties: [
            { violation: 'Non-filing of DIR-3 KYC by 30th September', penalty: 'DIN is deactivated with status marked as "Deactivated due to non-filing of DIR-3 KYC"' },
            { violation: 'Filing after deactivation', penalty: '₹5,000 late fee to reactivate the DIN — no waiver provision available' },
            { violation: 'Providing false/incorrect details', penalty: 'Penalty under Section 448/449 of the Companies Act — imprisonment up to 6 months and/or fine' },
            { violation: 'Director continuing to act with deactivated DIN', penalty: 'All MCA filings signed by the director will be rejected; potential personal liability under Section 164' }
        ],
        advantages: [
            { icon: '✅', title: 'DIN Remains Active', desc: 'Timely filing of DIR-3 KYC ensures your DIN stays active, allowing you to sign MCA forms and act as a director without any interruption to your duties.' },
            { icon: '💰', title: 'Zero Government Fee', desc: 'If filed before 30th September, there is no government fee for DIR-3 KYC — you only pay the professional service charges starting at ₹999.' },
            { icon: '⏱️', title: 'Quick & Simple Process', desc: 'Your Professional completes the entire filing in 2–3 working days, including document collection, OTP verification, and DSC submission on the MCA portal.' },
            { icon: '🔄', title: 'DIN Reactivation Support', desc: 'If your DIN has been deactivated due to past non-filing, we handle the complete reactivation process including late fee payment and form resubmission.' },
            { icon: '🛡️', title: 'Avoid Compliance Cascade', desc: 'Non-filing of DIR-3 KYC can lead to DIN deactivation, which cascades into compliance failures for every company where you hold a directorship.' },
            { icon: '📋', title: 'Annual Reminder Service', desc: 'Your Professional sends timely reminders well before the September 30 due date, so you never miss a DIR-3 KYC deadline across multiple financial years.' },
            { icon: '🤝', title: 'Dedicated Expert Assistance', desc: 'A compliance expert is personally assigned to handle your filing, including real-time coordination for Aadhaar OTP and email verification steps.' },
            { icon: '🌐', title: 'Foreign Director Support', desc: 'For directors who are foreign nationals, we assist with passport-based verification, alternate filing procedures, and DSC procurement from authorized agencies.' },
            { icon: '📊', title: 'Multi-Director Bulk Filing', desc: 'For companies with multiple directors, Your Professional offers bulk filing packages with centralized coordination and status tracking for all DIN holders.' }
        ],
        disadvantages: [
            'Aadhaar OTP is required in real-time during filing, so the director must be personally available and reachable',
            'DSC must be valid and active at the time of filing — expired DSCs require renewal before the e-form can be submitted',
            'Deactivated DINs attract a flat ₹5,000 late fee with no waiver, reduction, or installment provision',
            'Foreign directors face additional documentation requirements and may need passport attestation for verification',
            'The web-based form cannot be used if any personal details have changed — the full e-form with professional certification is required instead',
            'OTP and email verification links expire within a short time window, requiring the director to act promptly during the filing session'
        ],
        faqs: [
            { q: 'Who needs to file DIR-3 KYC?', a: 'Every individual who holds an allotted DIN must file DIR-3 KYC annually — regardless of whether they are currently appointed as a director in any company. Even resigned directors with active DINs, inactive DIN holders, and individuals who never joined any company must file.' },
            { q: 'What is the due date for DIR-3 KYC?', a: 'The due date for filing DIR-3 KYC is 30th September of every financial year. Filing after this date results in automatic DIN deactivation by the MCA and a mandatory ₹5,000 late fee for reactivation.' },
            { q: 'What happens if I miss the DIR-3 KYC deadline?', a: 'Your DIN will be deactivated by the MCA with the status "Deactivated due to non-filing of DIR-3 KYC." A deactivated DIN means you cannot sign or file any MCA form, and all companies where you are a director may face compliance issues due to inability to file returns.' },
            { q: 'What is the difference between DIR-3 KYC e-Form and the web-based form?', a: 'The DIR-3 KYC e-Form is used for first-time filing or when personal details (mobile, email, address) have changed — it requires professional certification by a CA/CS/CWA and a DSC. The web-based form is for subsequent years with no changes — it only needs Aadhaar OTP and email verification, with no professional certification or DSC required.' },
            { q: 'Can a deactivated DIN be reactivated?', a: 'Yes. A deactivated DIN can be reactivated by filing the DIR-3 KYC form along with a late fee of ₹5,000. The reactivation typically takes 2–3 working days after filing. Your Professional handles the entire reactivation process end-to-end.' },
            { q: 'Is Aadhaar mandatory for DIR-3 KYC?', a: 'Yes, for Indian residents. Aadhaar is mandatory for identity verification via OTP during the filing process. Foreign nationals must use their passport number for identity verification instead of Aadhaar.' },
            { q: 'How much does DIR-3 KYC cost if filed on time?', a: 'There is no government fee if DIR-3 KYC is filed before 30th September. You only pay the professional service charges, which start at ₹999 per director with Your Professional. If filed after the due date, an additional ₹5,000 government late fee applies.' },
            { q: 'Do I need a DSC for DIR-3 KYC?', a: 'A DSC is required only for the e-Form version of DIR-3 KYC (first-time filing or when details have changed). The web-based form for subsequent years with no changes does not require a DSC — only Aadhaar OTP and email verification are needed.' },
            { q: 'What if my mobile number linked to Aadhaar has changed?', a: 'If your Aadhaar-linked mobile number has changed, you must first update it with UIDAI before filing DIR-3 KYC, as the OTP will be sent to the Aadhaar-linked number. Your Professional can guide you on the Aadhaar update process.' },
            { q: 'Can DIR-3 KYC be filed for multiple directors at once?', a: 'DIR-3 KYC must be filed individually for each DIN holder. However, Your Professional offers bulk filing packages for companies with multiple directors, with centralized coordination and tracking for all filings.' },
            { q: 'Is DIR-3 KYC applicable to Designated Partners of LLPs?', a: 'Yes. Designated Partners of LLPs who hold a DIN allotted by the MCA must file DIR-3 KYC annually, just like directors of companies. The same due date and penalty provisions apply.' },
            { q: 'What is a UDIN and why is it required?', a: 'UDIN (Unique Document Identification Number) is a unique number generated by the certifying professional (CA/CS/CWA) for every document they certify. It is mandatory for e-form DIR-3 KYC filings and must be mentioned in the form for verification purposes.' }
        ],
        cta: {
            heading: 'Keep Your DIN Active — File DIR-3 KYC Before September 30.',
            subheading: 'Your Professional ensures on-time filing with Aadhaar verification, DSC support, and DIN reactivation assistance — so you never face deactivation or penalties.',
            features: [
                'Annual DIR-3 KYC filing for all DIN holders (e-Form & web-based)',
                'DIN reactivation with ₹5,000 late fee assistance',
                'Real-time Aadhaar OTP & email verification coordination',
                'Timely annual reminder service before September 30 deadline',
                'Multi-director bulk filing with centralized tracking'
            ]
        }
    },

    'strike-off-section-8-companies': {
        slug: 'strike-off-section-8-companies',
        title: 'Strike off Section 8 Companies',
        subtitle: 'Legally close your Section 8 (non-profit) Company by filing STK-2 with the MCA — Regional Director approval, compliance clearance, and Gazette notification managed by Your Professional.',
        heroFeatures: [
            'STK-2 Filing with ROC for Section 8 Companies',
            'Regional Director (RD) Approval Coordination',
            'Pending Compliance Clearance & Filing',
            'Special Resolution & Affidavit Drafting',
            'Official Gazette Notification Tracking'
        ],
        overview: {
            heading: 'What is Strike Off of a Section 8 Company?',
            paragraphs: [
                '<p>Strike off of a Section 8 Company is the process of voluntarily removing the company\'s name from the Register of Companies maintained by the Registrar of Companies (ROC) under <strong>Section 248 of the Companies Act, 2013</strong>. Section 8 Companies — formed exclusively for promoting charitable objects such as education, art, science, sports, commerce, social welfare, religion, or environmental protection — enjoy special privileges under the Act, including exemption from the requirement to use "Limited" or "Private Limited" in their name, and certain tax benefits. However, when such a company has ceased operations, fulfilled its objectives, or is no longer viable, the promoters and directors may seek to close it through the strike off process.</p>',
                '<p>Unlike ordinary companies, the strike off of a Section 8 Company involves <strong>additional regulatory considerations</strong> due to its non-profit nature and the special license granted under Section 8(1) of the Companies Act. The company must first obtain approval or a No Objection Certificate (NOC) from the <strong>Regional Director (RD)</strong> of the MCA, as Section 8 companies operate under a license that imposes conditions on the application of profits and assets. Any remaining assets at the time of dissolution cannot be distributed among members — they must be transferred to another Section 8 Company with similar objects, or to the Central or State Government, as per the conditions of the license and the provisions of the Memorandum of Association.</p>',
                '<p>The procedural requirements under <strong>Section 248(2)</strong> mandate that the company must not have carried on any business or operations for the preceding two financial years, all statutory filings must be current, all liabilities must be fully settled, and all assets must be properly disposed of or transferred. A <strong>special resolution</strong> must be passed by at least 75% of the members, directors must execute sworn affidavits and indemnity bonds, and a statement of accounts not older than 30 days must be prepared and certified by a Chartered Accountant. The ROC publishes a public notice in the Official Gazette allowing 30 days for objections from stakeholders before proceeding with the final strike off.</p>',
                '<p>Your Professional manages every step of this complex process — from initial eligibility assessment, clearing all pending ROC filings, coordinating with the Regional Director for NOC or approval, drafting the special resolution and board minutes, preparing notarized affidavits and indemnity bonds, to filing <strong>Form STK-2</strong> on the MCA portal, handling ROC queries, and tracking the Official Gazette notification. Our team has extensive experience with Section 8 Company closures and ensures the process is completed in <strong>3–6 months</strong> with full legal compliance and zero risk of personal liability for the directors.</p>'
            ],
            highlights: [
                { icon: '🏛️', text: 'Governed by Section 248 of Companies Act, 2013' },
                { icon: '📝', text: 'STK-2 filing with ROC required for voluntary strike off' },
                { icon: '⏳', text: 'Company must be inactive for 2 consecutive financial years' },
                { icon: '📰', text: 'Name published in Official Gazette with 30-day objection period' }
            ]
        },
        types: [
            { title: 'Voluntary Strike Off (by Company)', desc: 'The company itself applies to the ROC for strike off by filing STK-2 after passing a special resolution and meeting all preconditions under Section 248(2), including Regional Director approval.' },
            { title: 'Strike Off by ROC (Suo Motu)', desc: 'The ROC may strike off a company on its own if it has reasonable cause to believe the company is not carrying on business — under Section 248(1). The company is given a 30-day notice before removal.' },
            { title: 'Strike Off Post-Amalgamation', desc: 'If a Section 8 Company has been amalgamated with another company or entity, the transferor company may apply for strike off after the NCLT order is executed.' }
        ],
        eligibility: [
            'The Section 8 Company must not have carried on any business or operations for two consecutive financial years preceding the application',
            'The company must not have applied for any change of name, conversion, or alteration of objects in the last 3 months',
            'All statutory filings with the ROC must be up to date — including annual returns (MGT-7/MGT-7A), financial statements (AOC-4), and auditor appointments (ADT-1)',
            'All liabilities of the company must be fully settled or adequately provided for, with no outstanding debts to creditors',
            'All assets must be disposed of, transferred to another Section 8 Company with similar objects, or their nil value must be declared — assets cannot be distributed among members',
            'No legal proceedings must be pending against the company before any court, tribunal, or regulatory authority',
            'A special resolution must be passed by at least 75% of the members present and voting, authorizing the directors to file the strike off application',
            'Approval or NOC from the Regional Director (RD) of the MCA must be obtained, as Section 8 companies operate under a special license'
        ],
        documents: [
            {
                category: 'Company Incorporation & Governance Documents',
                items: [
                    'Certificate of Incorporation of the Section 8 Company',
                    'License granted under Section 8(1) of the Companies Act, 2013',
                    'Memorandum of Association (MOA) and Articles of Association (AOA)',
                    'Board Resolution for initiating strike off proceedings',
                    'Special Resolution passed by members at a general meeting',
                    'Form MGT-14 (Filing of special resolution with ROC)'
                ]
            },
            {
                category: 'Financial & Compliance Documents',
                items: [
                    'Latest audited financial statements (Balance Sheet, Profit & Loss Account)',
                    'Latest Annual Return (Form MGT-7 or MGT-7A)',
                    'Statement of accounts not older than 30 days from the date of STK-2 application',
                    'Income Tax returns and clearance certificate (if applicable)',
                    'NOC from the Regional Director (RD) of the MCA'
                ]
            },
            {
                category: 'Affidavits, Declarations & Statutory Forms',
                items: [
                    'Affidavit by all directors confirming no business operations for 2 consecutive financial years',
                    'Indemnity bond by all directors in the prescribed format (notarized)',
                    'Declaration that all liabilities are settled, assets disposed of or transferred, and no proceedings are pending',
                    'NOC from regulatory authorities — Charity Commissioner, FCRA authority, or other licensing bodies (if applicable)',
                    'Form STK-2 (Application for voluntary strike off by the company)',
                    'Form ADT-1 (Auditor appointment — if any pending filing exists)',
                    'CTC of special resolution certified by a director and the Company Secretary (if applicable)'
                ]
            }
        ],
        process: [
            { title: 'Preliminary Eligibility Assessment', desc: 'Your Professional reviews the company\'s incorporation documents, Section 8 license conditions, filing status, financial position, asset disposition, and pending proceedings to confirm eligibility for strike off under Section 248.', time: '2–3 days' },
            { title: 'Clearing Pending Compliances', desc: 'All overdue ROC filings — including annual returns (MGT-7/MGT-7A), financial statements (AOC-4), auditor appointments (ADT-1), and any other pending forms — are prepared and filed to bring the company into full compliance.', time: '5–15 days' },
            { title: 'Regional Director Approval / NOC', desc: 'An application or communication is made to the Regional Director (RD) of the MCA seeking approval or NOC for the strike off of the Section 8 Company, as required due to its special license and non-profit status.', time: '15–30 days' },
            { title: 'Board Meeting & Special Resolution', desc: 'A board meeting is convened to pass a resolution for initiating strike off proceedings. A general meeting is held to pass the special resolution with at least 75% majority, and Form MGT-14 is filed with the ROC.', time: '3–5 days' },
            { title: 'Affidavit, Indemnity Bond & Statement of Accounts', desc: 'Directors\' affidavits confirming no business operations and indemnity bonds are drafted, executed, and notarized. A statement of accounts (not older than 30 days) is prepared and certified by a Chartered Accountant.', time: '3–5 days' },
            { title: 'Asset Transfer & Liability Settlement Confirmation', desc: 'All remaining assets are transferred to another Section 8 Company with similar objects or to the government, as required by the license conditions. Final confirmation of liability settlement is documented.', time: '5–10 days' },
            { title: 'Filing STK-2 with ROC', desc: 'Form STK-2 is prepared and filed electronically on the MCA portal with all attachments — special resolution, RD approval/NOC, affidavits, indemnity bonds, statement of accounts, and asset transfer confirmation.', time: '1–2 days' },
            { title: 'ROC Processing, Public Notice & Final Strike Off', desc: 'The ROC publishes a notice on the MCA portal and in the Official Gazette, allowing 30 days for objections. If no objections are received, the ROC strikes off the company and publishes the final notice. Your Professional tracks every stage and provides the final strike off order.', time: '45–90 days' }
        ],
        fees: [
            { item: 'STK-2 Government Filing Fee', cost: '₹5,000 (prescribed fee under Companies Act)' },
            { item: 'MGT-14 Filing Fee (Special Resolution)', cost: '₹300 – ₹600 (based on authorized capital)' },
            { item: 'Overdue Filing Fees (if applicable)', cost: '₹200 – ₹12,000 (per form, based on delay period)' },
            { item: 'Affidavit & Notarization Charges', cost: '₹500 – ₹1,500' },
            { item: 'Professional Service Charges', cost: '₹9,999 onwards' }
        ],
        penalties: [
            { violation: 'Filing STK-2 with false or incorrect statements', penalty: 'Penalty under Section 448 — imprisonment up to 6 months and/or fine up to ₹5,00,000' },
            { violation: 'Directors failing to settle liabilities before strike off', penalty: 'Personal liability continues even after strike off under Section 248(7)' },
            { violation: 'Non-filing of pending annual returns before STK-2', penalty: 'ROC may reject the STK-2 application; additional filing fees with penalties for delayed returns' },
            { violation: 'Revival application by aggrieved party post strike off', penalty: 'NCLT can restore the company within 20 years; directors may face cost orders' }
        ],
        advantages: [
            { icon: '🏁', title: 'Clean & Legal Closure', desc: 'Strike off provides a lawful and definitive way to close a Section 8 Company that has ceased operations, avoiding perpetual compliance obligations and annual filing requirements.' },
            { icon: '💰', title: 'Cost-Effective Alternative', desc: 'Strike off via STK-2 is significantly cheaper than winding up through the NCLT, which involves extensive legal proceedings, tribunal fees, and liquidator costs.' },
            { icon: '⏱️', title: 'Faster Than Winding Up', desc: 'While NCLT winding up can take 1–2 years, strike off is typically completed within 3–6 months including the RD approval and public notice period.' },
            { icon: '📋', title: 'Complete Compliance Clearance', desc: 'Your Professional ensures all pending ROC filings are cleared before applying, eliminating the risk of STK-2 rejection due to non-compliance.' },
            { icon: '🛡️', title: 'Director Liability Protection', desc: 'Proper closure with fully settled liabilities and documented asset transfer protects directors from future claims and personal liability under the Companies Act.' },
            { icon: '📄', title: 'End-to-End Documentation', desc: 'From special resolution drafting and RD application to affidavit notarization and asset transfer documentation — every document is prepared and filed by Your Professional.' },
            { icon: '🤝', title: 'ROC & RD Correspondence Handling', desc: 'All queries raised by the ROC or the Regional Director during processing are handled by our compliance team at no additional cost.' },
            { icon: '📰', title: 'Gazette Notification Tracking', desc: 'We track the Official Gazette publication, monitor the 30-day objection window, and provide the final strike off order for the client\'s records.' },
            { icon: '🏛️', title: 'Section 8 Expertise', desc: 'Your Professional has specialized experience with Section 8 Company closures, including handling the unique requirements around non-profit asset transfer, RD approvals, and Charity Commissioner NOCs.' }
        ],
        disadvantages: [
            'The company must have been inactive for at least 2 consecutive financial years before applying for strike off',
            'All pending ROC filings must be cleared first, which may involve significant additional fees and late penalties for long-dormant companies',
            'Regional Director (RD) approval or NOC adds 15–30 days to the timeline compared to ordinary company strike off',
            'The ROC process includes a mandatory 30-day public notice period in the Official Gazette for stakeholder objections',
            'Creditors, members, or other stakeholders (including the Charity Commissioner) can object to the strike off, potentially delaying or blocking the process',
            'Remaining assets cannot be distributed among members — they must be transferred to another Section 8 Company with similar objects or to the government',
            'An aggrieved party can apply for company revival through the NCLT within 20 years of strike off, creating long-term residual risk for directors'
        ],
        faqs: [
            { q: 'What is Form STK-2?', a: 'Form STK-2 is the application form prescribed under Section 248(2) of the Companies Act, 2013 for voluntary strike off of a company by its directors. It is filed with the ROC along with the special resolution, affidavits, indemnity bonds, statement of accounts, and RD approval/NOC for Section 8 companies.' },
            { q: 'Can a Section 8 Company be struck off while it has liabilities?', a: 'No. All liabilities of the company must be fully settled or adequately provided for before filing STK-2. The directors must submit a sworn affidavit confirming that all debts and obligations have been discharged in full.' },
            { q: 'How long does the strike off process take for a Section 8 Company?', a: 'The entire process typically takes 3–6 months. This includes clearing pending filings (5–15 days), obtaining RD approval (15–30 days), filing STK-2 (1–2 days), the mandatory 30-day public notice period, and final ROC processing (15–30 days).' },
            { q: 'Is Regional Director approval mandatory for Section 8 Company strike off?', a: 'Yes. Since Section 8 Companies operate under a special license granted by the Central Government (through the Regional Director), any major change including closure requires RD approval or NOC. This is an additional step not required for ordinary company strike off.' },
            { q: 'What happens to the assets of a Section 8 Company upon strike off?', a: 'Assets of a Section 8 Company cannot be distributed among its members. They must be transferred to another Section 8 Company with similar objects, or to the Central or State Government, as per the conditions of the Section 8 license and the MOA of the company.' },
            { q: 'Is a special resolution required for strike off?', a: 'Yes. A special resolution must be passed by at least 75% of the members present and voting at a general meeting, authorizing the directors to file the strike off application. This resolution is filed with the ROC via Form MGT-14.' },
            { q: 'Can a struck-off Section 8 Company be revived?', a: 'Yes. Under Section 252 of the Companies Act, 2013, any member, creditor, or aggrieved party may apply to the NCLT for revival of the company within 20 years from the date of strike off, if they can demonstrate sufficient cause for restoration.' },
            { q: 'What is the difference between strike off and winding up for Section 8 Companies?', a: 'Strike off is a simpler, faster, and cheaper process for closing an inactive Section 8 Company. Winding up through NCLT is a formal insolvency process used when a company has significant debts, disputed liabilities, or is ordered to close by the tribunal. Strike off is suitable only when all liabilities are settled.' },
            { q: 'Do we need a NOC from the Charity Commissioner?', a: 'It depends on the state. In states where the Section 8 Company is registered with the Charity Commissioner or any similar regulatory authority, a NOC from that authority may be required before filing STK-2. Your Professional advises on state-specific requirements.' },
            { q: 'Can Your Professional handle pending compliances before strike off?', a: 'Yes. Your Professional clears all pending annual returns (MGT-7/MGT-7A), financial statements (AOC-4), auditor appointments (ADT-1), and any other overdue filings before filing STK-2, ensuring the application is not rejected by the ROC.' },
            { q: 'What are the tax implications of striking off a Section 8 Company?', a: 'The company should file all pending income tax returns and obtain tax clearance before strike off. Any tax liabilities must be settled. The transfer of assets to another Section 8 Company or the government may have tax implications that should be reviewed by a tax professional.' },
            { q: 'Is FCRA clearance required for Section 8 Companies receiving foreign contributions?', a: 'Yes. If the Section 8 Company holds an FCRA registration and has received foreign contributions, clearance from the FCRA authority (Ministry of Home Affairs) may be required before closure. Your Professional coordinates with all relevant regulatory authorities as part of the strike off process.' }
        ],
        cta: {
            heading: 'Ready to Close Your Section 8 Company? Your Professional Makes It Simple.',
            subheading: 'From Regional Director approval and compliance clearance to STK-2 filing and Official Gazette notification — we handle every step of the strike off process for non-profit companies.',
            features: [
                'Complete STK-2 filing with ROC for Section 8 Companies',
                'Regional Director approval & NOC coordination',
                'Pending compliance clearance (annual returns, financials, auditor)',
                'Special resolution, affidavit & indemnity bond drafting',
                'Asset transfer documentation & Gazette notification tracking'
            ]
        }
    }
};
