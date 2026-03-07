export default function Footer() {
    return (
        <footer className="bg-[var(--color-brand-primary)] text-white py-16">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
                    {/* Brand & Mission */}
                    <div className="lg:col-span-1">
                        <h3 className="font-bold text-2xl mb-4">RegisterKaro</h3>
                        <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                            Design outstanding interfaces with advanced Figma features in a matter of minutes.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="text-gray-300 hover:text-white transition-colors">FB</a>
                            <a href="#" className="text-gray-300 hover:text-white transition-colors">GL</a>
                            <a href="#" className="text-gray-300 hover:text-white transition-colors">AP</a>
                            <a href="#" className="text-gray-300 hover:text-white transition-colors">IG</a>
                        </div>
                    </div>

                    {/* Links cluster */}
                    <div>
                        <h4 className="font-semibold text-xl mb-4 tracking-wide text-[var(--color-brand-secondary)]">START A BUSINESS</h4>
                        <ul className="flex flex-col gap-3 text-sm text-gray-300">
                            <li><a href="#" className="hover:text-[var(--color-brand-secondary)] transition-colors">Features</a></li>
                            <li><a href="#" className="hover:text-[var(--color-brand-secondary)] transition-colors">Solutions</a></li>
                            <li><a href="#" className="hover:text-[var(--color-brand-secondary)] transition-colors">Integrations</a></li>
                            <li><a href="#" className="hover:text-[var(--color-brand-secondary)] transition-colors">Enterprise</a></li>
                            <li><a href="#" className="hover:text-[var(--color-brand-secondary)] transition-colors">Solutions</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-xl mb-4 tracking-wide text-[var(--color-brand-secondary)]">GOVERNMENT REGISTRATION</h4>
                        <ul className="flex flex-col gap-3 text-sm text-gray-300">
                            <li><a href="#" className="hover:text-[var(--color-brand-secondary)] transition-colors">Partners</a></li>
                            <li><a href="#" className="hover:text-[var(--color-brand-secondary)] transition-colors">Community</a></li>
                            <li><a href="#" className="hover:text-[var(--color-brand-secondary)] transition-colors">Developers</a></li>
                            <li><a href="#" className="hover:text-[var(--color-brand-secondary)] transition-colors">App</a></li>
                            <li><a href="#" className="hover:text-[var(--color-brand-secondary)] transition-colors">Blog</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-xl mb-4 tracking-wide text-[var(--color-brand-secondary)]">COMPLIANCE & TAX</h4>
                        <ul className="flex flex-col gap-3 text-sm text-gray-300">
                            <li><a href="#" className="hover:text-[var(--color-brand-secondary)] transition-colors">Channels</a></li>
                            <li><a href="#" className="hover:text-[var(--color-brand-secondary)] transition-colors">Scale</a></li>
                            <li><a href="#" className="hover:text-[var(--color-brand-secondary)] transition-colors">Watch the Demo</a></li>
                            <li><a href="#" className="hover:text-[var(--color-brand-secondary)] transition-colors">Our Competition</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-xl mb-4 tracking-wide text-[var(--color-brand-secondary)]">BIS & CDSCO</h4>
                        <ul className="flex flex-col gap-3 text-sm text-gray-300">
                            <li><a href="#" className="hover:text-[var(--color-brand-secondary)] transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-[var(--color-brand-secondary)] transition-colors">News</a></li>
                            <li><a href="#" className="hover:text-[var(--color-brand-secondary)] transition-colors">Leadership</a></li>
                            <li><a href="#" className="hover:text-[var(--color-brand-secondary)] transition-colors">Media Kit</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-700/50 flex flex-col items-center gap-4">
                    <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mb-2">
                        ⬆
                    </div>
                    <p className="text-gray-400 text-sm">© 2024 Registerkaro. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}
