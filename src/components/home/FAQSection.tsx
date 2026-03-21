import { useState } from 'react';

export default function FAQSection() {
    const faqs = [
        {
            question: "What are the rules for picking a name for a private limited company?",
            answer: "The registrar of companies (RoC) across India expect applicants to follow a few naming guidelines. Some of them are subjective, which means that approval can depend on the opinion of the officer handling your application. However, the more closely you follow the rules listed below, the better your chances of approval. First, however, do ensure that your name is available."
        },
        { question: "How much time is needed for setting up a private limited company in India?", answer: "Typically, it takes about 10-15 working days to register a Private Limited Company, subject to document availability and government processing times." },
        { question: "Do I need to be physically present during this process?", answer: "No, the entire company registration process is conducted online. You can send us the scanned copies of your documents to get started." },
        { question: "What documents are required to complete the process?", answer: "We require PAN cards, address proofs of directors, and a registered office address proof like an electricity bill or rent agreement." },
        { question: "Does a private limited company have continuous existence?", answer: "Yes, a private limited company has 'perpetual succession', meaning its existence is uninterrupted by the death or departure of its members." }
    ];

    const [openIdx, setOpenIdx] = useState(0);

    return (
        <section className="py-12 bg-gray-50/30">
            <div className="container mx-auto px-4 md:px-8 max-w-4xl">
                <h2 className="text-3xl text-center font-bold text-gray-800 mb-12">
                    Frequently Asked <span className="text-[var(--color-brand-secondary)]">Questions</span>
                </h2>

                <div className="flex flex-col gap-4 shadow-sm">
                    {faqs.map((faq, idx) => (
                        <div
                            key={idx}
                            className={`border border-gray-100 rounded-lg overflow-hidden transition-all duration-300 ${openIdx === idx ? 'shadow-md border-[var(--color-brand-secondary)]' : 'bg-white hover:bg-gray-50'}`}
                        >
                            <button
                                className={`w-full px-6 py-4 text-left font-medium flex justify-between items-center ${openIdx === idx ? 'bg-orange-50 text-gray-900 border-b border-orange-100' : 'text-gray-700'}`}
                                onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
                            >
                                {faq.question}
                                <span className="text-xl text-gray-400">
                                    {openIdx === idx ? '︿' : '﹀'}
                                </span>
                            </button>

                            <div
                                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIdx === idx ? 'max-h-96 py-4 text-gray-600' : 'max-h-0 py-0'}`}
                            >
                                <p className="leading-relaxed">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 text-center">
                    <button className="bg-[var(--color-brand-primary)] text-white px-8 py-3 rounded hover:bg-blue-900 transition-all font-semibold shadow-md">
                        Show more
                    </button>
                </div>
            </div>
        </section>
    );
}
