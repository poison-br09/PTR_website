import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-[var(--color-brand-primary)] text-white py-16">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
                    {/* Brand & Mission */}
                    <div className="lg:col-span-1">
                        <h3 className="font-bold text-2xl mb-4">Your Professional</h3>
                        <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                            Your trusted partner for business registration, government licensing, compliance, and legal services across India. We simplify complex processes so you can focus on building your business.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="text-gray-300 hover:text-[var(--color-brand-secondary)] transition-colors" aria-label="Facebook">
                                <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" fillRule="evenodd" /></svg>
                            </a>
                            <a href="#" className="text-gray-300 hover:text-[var(--color-brand-secondary)] transition-colors" aria-label="Instagram">
                                <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
                            </a>
                            <a href="#" className="text-gray-300 hover:text-[var(--color-brand-secondary)] transition-colors" aria-label="LinkedIn">
                                <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
                            </a>
                            <a href="#" className="text-gray-300 hover:text-[var(--color-brand-secondary)] transition-colors" aria-label="YouTube">
                                <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path fillRule="evenodd" d="M21.582 6.186a2.6 2.6 0 00-1.824-1.84C18.148 3.928 12 3.928 12 3.928s-6.148 0-7.758.418c-.886.236-1.586.953-1.824 1.84C2 7.828 2 12 2 12s0 4.172.418 5.814a2.6 2.6 0 001.824 1.84C5.852 20.072 12 20.072 12 20.072s6.148 0 7.758-.418a2.6 2.6 0 001.824-1.84C22 16.172 22 12 22 12s0-4.172-.418-5.814zm-11.582 9.06V8.754l5.418 3.246-5.418 3.246z" clipRule="evenodd" /></svg>
                            </a>
                        </div>
                    </div>

                    {/* Links cluster */}
                    <div>
                        <h4 className="font-semibold text-xl mb-4 tracking-wide text-[var(--color-brand-secondary)]">START A BUSINESS</h4>
                        <ul className="flex flex-col gap-3 text-sm text-gray-300">
                            <li><Link to="/private-limited-company-registration" className="hover:text-[var(--color-brand-secondary)] transition-colors">Private Limited Company</Link></li>
                            <li><Link to="/llp-registration" className="hover:text-[var(--color-brand-secondary)] transition-colors">LLP Registration</Link></li>
                            <li><Link to="/partnership-firm-registration" className="hover:text-[var(--color-brand-secondary)] transition-colors">Partnership Firm</Link></li>
                            <li><Link to="/sole-proprietorship-registration" className="hover:text-[var(--color-brand-secondary)] transition-colors">Sole Proprietorship</Link></li>
                            <li><Link to="/startup-india-registration" className="hover:text-[var(--color-brand-secondary)] transition-colors">Startup India</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-xl mb-4 tracking-wide text-[var(--color-brand-secondary)]">GOVERNMENT REGISTRATION</h4>
                        <ul className="flex flex-col gap-3 text-sm text-gray-300">
                            <li><Link to="/drug-license" className="hover:text-[var(--color-brand-secondary)] transition-colors">Drug License</Link></li>
                            <li><Link to="/iso-registration" className="hover:text-[var(--color-brand-secondary)] transition-colors">ISO Registration</Link></li>
                            <li><Link to="/factory-license" className="hover:text-[var(--color-brand-secondary)] transition-colors">Factory License</Link></li>
                            <li><Link to="/isi-mark-certification" className="hover:text-[var(--color-brand-secondary)] transition-colors">ISI Mark Certification</Link></li>
                        </ul>
                        <h4 className="font-semibold text-xl mt-6 mb-4 tracking-wide text-[var(--color-brand-secondary)]">FSSAI REGISTRATION</h4>
                        <ul className="flex flex-col gap-3 text-sm text-gray-300">
                            <li><Link to="/fssai-registration" className="hover:text-[var(--color-brand-secondary)] transition-colors">FSSAI Registration</Link></li>
                            <li><Link to="/fssai-central-license" className="hover:text-[var(--color-brand-secondary)] transition-colors">FSSAI Central License</Link></li>
                            <li><Link to="/fssai-state-license" className="hover:text-[var(--color-brand-secondary)] transition-colors">FSSAI State License</Link></li>
                            <li><Link to="/fssai-product-approval" className="hover:text-[var(--color-brand-secondary)] transition-colors">FSSAI Product Approval</Link></li>
                            <li><Link to="/fssai-license-renewal" className="hover:text-[var(--color-brand-secondary)] transition-colors">FSSAI License Renewal</Link></li>
                            <li><Link to="/halal-certification" className="hover:text-[var(--color-brand-secondary)] transition-colors">Halal Certification</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-xl mb-4 tracking-wide text-[var(--color-brand-secondary)]">COMPLIANCE & TAX</h4>
                        <ul className="flex flex-col gap-3 text-sm text-gray-300">
                            <li><Link to="/professional-tax-registration" className="hover:text-[var(--color-brand-secondary)] transition-colors">Professional Tax</Link></li>
                            <li><Link to="/ptec-registration" className="hover:text-[var(--color-brand-secondary)] transition-colors">PTEC Registration</Link></li>
                            <li><Link to="/icegate-registration" className="hover:text-[var(--color-brand-secondary)] transition-colors">ICEGATE Registration</Link></li>
                            <li><Link to="/rcmc-registration" className="hover:text-[var(--color-brand-secondary)] transition-colors">RCMC Registration</Link></li>
                        </ul>
                        <h4 className="font-semibold text-xl mt-6 mb-4 tracking-wide text-[var(--color-brand-secondary)]">TRADE LICENCE</h4>
                        <ul className="flex flex-col gap-3 text-sm text-gray-300">
                            <li><Link to="/trade-licence-registration" className="hover:text-[var(--color-brand-secondary)] transition-colors">Trade Licence Registration</Link></li>
                            <li><Link to="/trade-licence-renewal" className="hover:text-[var(--color-brand-secondary)] transition-colors">Trade Licence Renewal</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-xl mb-4 tracking-wide text-[var(--color-brand-secondary)]">BIS & CDSCO</h4>
                        <ul className="flex flex-col gap-3 text-sm text-gray-300">
                            <li><Link to="/bis-certification" className="hover:text-[var(--color-brand-secondary)] transition-colors">BIS Certification</Link></li>
                            <li><Link to="/medical-device-registration" className="hover:text-[var(--color-brand-secondary)] transition-colors">Medical Device Registration</Link></li>
                            <li><Link to="/gmp-certification" className="hover:text-[var(--color-brand-secondary)] transition-colors">GMP Certification</Link></li>
                            <li><Link to="/iso-9001-certification" className="hover:text-[var(--color-brand-secondary)] transition-colors">ISO 9001 Certification</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-700/50 flex flex-col items-center gap-4">
                    <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mb-2 hover:bg-yellow-400 transition-colors cursor-pointer">
                        ⬆
                    </button>
                    <p className="text-gray-400 text-sm">© 2026 Your Professional. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}
