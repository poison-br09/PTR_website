import { useState } from 'react';
import logo from '../../assets/logo.svg';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    return (
        <header className="fixed top-4 left-4 right-4 md:left-8 md:right-8 lg:left-1/2 lg:-translate-x-1/2 lg:w-full lg:max-w-7xl z-50 bg-transparent backdrop-blur-md border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)] rounded-full transition-all duration-300">
            {/* Main Navigation */}
            <div className="px-6 py-3 flex justify-between items-center h-16 relative">
                {/* Logo */}
                <div className={`flex items-center gap-3 font-bold text-xl text-[#090a3d] transition-opacity duration-300 ${isSearchOpen ? 'opacity-0 md:opacity-100' : 'opacity-100'}`}>
                    <img src={logo} alt="Your Professional Logo" className="h-8 md:h-10 object-contain -mt-1" />
                    <span className="hidden sm:block">Your Professional</span>
                </div>

                {/* Desktop Nav - Centered OR Search Bar */}
                <div className="hidden lg:flex flex-1 justify-center items-center px-8 relative">
                    {/* Navigation Links */}
                    <nav className={`flex items-center gap-6 xl:gap-8 font-medium text-sm text-gray-700 transition-all duration-300 absolute ${isSearchOpen ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'}`}>
                        <a href="#" className="hover:text-[var(--color-brand-secondary)] transition-colors whitespace-nowrap">Registrations</a>
                        <a href="#" className="hover:text-[var(--color-brand-secondary)] transition-colors whitespace-nowrap">Compliance</a>
                        <a href="#" className="hover:text-[var(--color-brand-secondary)] transition-colors whitespace-nowrap">IPR</a>
                        <a href="#" className="hover:text-[var(--color-brand-secondary)] transition-colors whitespace-nowrap">Taxation</a>
                        <a href="#" className="hover:text-[var(--color-brand-secondary)] transition-colors whitespace-nowrap">Consultation</a>
                        <a href="#" className="hover:text-[var(--color-brand-secondary)] transition-colors whitespace-nowrap">More</a>
                        <a href="#" className="hover:text-[var(--color-brand-secondary)] transition-colors whitespace-nowrap">Contact Us</a>
                    </nav>

                    {/* Search Bar (Replaces Nav Links) */}
                    <div className={`w-full max-w-2xl flex items-center transition-all duration-300 absolute ${isSearchOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'}`}>
                        <div className="relative w-full flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 absolute left-4 text-gray-400">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                            <input
                                type="text"
                                placeholder="Search for services, blogs, etc..."
                                className="w-full bg-gray-50 border border-gray-200 rounded-full pl-12 pr-10 py-2.5 text-sm focus:outline-none focus:border-[var(--color-brand-secondary)] focus:ring-2 focus:ring-[var(--color-brand-secondary)]/20 transition-all text-gray-800"
                                autoFocus={isSearchOpen}
                            />
                            <button
                                onClick={() => setIsSearchOpen(false)}
                                className="absolute right-3 p-1.5 text-gray-400 hover:text-gray-700 hover:bg-gray-200 rounded-full transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Action Buttons (Desktop and Mobile) */}
                <div className="flex items-center gap-2 md:gap-4 z-10">
                    <div className={`hidden lg:flex items-center transition-all duration-300 ${isSearchOpen ? 'opacity-0 invisible w-0 -mr-2' : 'opacity-100 visible w-auto'}`}>
                        <button
                            onClick={() => setIsSearchOpen(true)}
                            className="text-gray-600 p-2 hover:bg-gray-100 hover:text-[var(--color-brand-secondary)] rounded-full transition-all duration-300 flex items-center justify-center transform hover:scale-105"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                        </button>
                    </div>

                    <button className="text-[#090a3d] border border-gray-200 px-4 py-1.5 rounded-full hover:bg-gray-50 transition-colors font-semibold text-sm">
                        Login
                    </button>

                    <button className="hidden lg:block bg-[var(--color-brand-secondary)] text-white px-5 py-2 rounded-full hover:bg-yellow-600 transition-all font-semibold shadow-sm hover:shadow-md text-sm">
                        Talk to Experts
                    </button>

                    {/* Mobile toggle button */}
                    <button
                        className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-full transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Nav Dropdown Panel */}
            <div className={`absolute top-[calc(100%+0.5rem)] right-4 md:right-8 w-72 bg-white/95 backdrop-blur-md rounded-2xl z-50 transform transition-all duration-200 origin-top-right lg:hidden flex flex-col shadow-2xl border border-gray-100 overflow-hidden ${isMenuOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'
                }`}>
                <div className="flex flex-col overflow-y-auto max-h-[70vh]">
                    <div className="px-6 py-4 border-b border-gray-50">
                        <div className="relative">
                            <input type="text" placeholder="Search..." className="w-full bg-gray-50 border border-gray-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-[var(--color-brand-secondary)]" />
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                        </div>
                    </div>
                    {[
                        'Registrations',
                        'Compliance',
                        'IPR',
                        'Taxation',
                        'Consultation',
                        'More'
                    ].map((item) => (
                        <a key={item} href="#" className="flex justify-between items-center text-sm font-bold text-gray-800 hover:text-[var(--color-brand-secondary)] px-6 py-4 border-b border-gray-50 transition-colors">
                            {item}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-gray-400">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </a>
                    ))}

                </div>

                <div className="p-4 bg-gray-50 mt-auto">
                    <button className="flex items-center justify-center gap-2 bg-[#ffa229] text-white px-6 py-3 w-full font-bold shadow-md hover:bg-orange-500 transition-colors rounded-xl text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                            <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42 959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                        </svg>
                        Talk to Experts
                    </button>
                </div>
            </div>
        </header>
    );
}
