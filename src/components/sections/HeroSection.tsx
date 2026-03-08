
export default function HeroSection() {
    return (
        <section className="bg-[#090a3d] pt-24 lg:pt-32 pb-16 px-4 md:px-8 relative overflow-hidden text-white min-h-screen flex flex-col items-center justify-start">
            {/* Decorative Glowing Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-[var(--color-brand-secondary)] opacity-10 blur-[120px] rounded-full z-0"></div>

            <div className="container mx-auto flex flex-col items-center relative z-10 text-center max-w-6xl">

                {/* Headlines */}
                <h1 className="text-4xl md:text-5xl lg:text-[64px] font-extrabold text-white leading-tight mb-6">
                    Register Your Business in Just 7 Days
                </h1>

                <p className="text-lg md:text-xl text-gray-300 max-w-3xl mb-8">
                    Get fast, reliable, and customizable online business solutions & legal services with free expert consultation.
                </p>

                {/* Ratings Row */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 mb-12">
                    {/* Google Rating */}
                    <div className="flex flex-col items-center border-b sm:border-b-0 sm:border-r border-gray-500/50 pb-4 sm:pb-0 sm:pr-12">
                        <div className="flex items-center gap-2 mb-1">
                            <img src={"../assets/google.svg"} alt="Google" className={`h-8 md:h-10 object-contain -mt-1 transition-all duration-300`} />
                            <span className="font-bold text-xl whitespace-nowrap">4.6 out of 5</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="flex text-yellow-500 text-lg tracking-widest">★★★★★</span>
                            <span className="text-gray-400 text-sm">(7142)</span>
                        </div>
                    </div>

                    {/* Trustpilot / Excellence Rating */}
                    <div className="flex flex-col items-center">
                        <div className="flex items-center gap-2 mb-1">
                            <div className="bg-[var(--color-brand-secondary)] text-white rounded px-1 font-bold text-sm tracking-tighter">★E</div>
                            <span className="font-bold text-xl whitespace-nowrap">4.7 out of 5</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="flex text-[var(--color-brand-secondary)] text-lg tracking-widest">★★★★★</span>
                            <span className="text-gray-400 text-sm">(3784)</span>
                        </div>
                    </div>
                </div>

                {/* The Glowing Consultation Form */}
                <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 md:p-8 w-full max-w-4xl shadow-[0_0_60px_rgba(199,145,0,0.2)] md:shadow-[0_0_100px_rgba(199,145,0,0.3)] border border-gray-400 relative z-20 mb-16">
                    <form className="flex flex-col gap-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {/* Name Input */}
                            <input
                                type="text"
                                placeholder="Enter Your Name"
                                className="w-full bg-white border border-gray-400 rounded-lg px-4 py-3 text-black placeholder-black focus:outline-none focus:border-[var(--color-brand-secondary)] focus:ring-1 focus:ring-[var(--color-brand-secondary)]"
                            />

                            {/* Phone Input with Country Code */}
                            <div className="flex rounded-lg border border-gray-400 bg-white overflow-hidden focus-within:border-[var(--color-brand-secondary)] focus-within:ring-1 focus-within:ring-[var(--color-brand-secondary)]">
                                <select className="bg-gray-100 border-r border-gray-400 px-3 py-3 text-black focus:outline-none cursor-pointer">
                                    <option>+91</option>
                                    <option>+1</option>
                                    <option>+44</option>
                                </select>
                                <input
                                    type="tel"
                                    placeholder="Enter your PhoneNo."
                                    className="w-full bg-transparent px-4 py-3 text-black placeholder-black focus:outline-none"
                                />
                            </div>

                            {/* Email Input */}
                            <input
                                type="email"
                                placeholder="Enter your Email"
                                className="w-full bg-white border border-gray-400 rounded-lg px-4 py-3 text-black placeholder-black focus:outline-none focus:border-[var(--color-brand-secondary)] focus:ring-1 focus:ring-[var(--color-brand-secondary)]"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Service Selection */}
                            <div className="relative">
                                <select className="w-full bg-white border border-gray-400 rounded-lg px-4 py-3 text-black appearance-none focus:outline-none focus:border-[var(--color-brand-secondary)] focus:ring-1 focus:ring-[var(--color-brand-secondary)] cursor-pointer">
                                    <option value="">Select your service</option>
                                    <option value="registration">Company Registration</option>
                                    <option value="trademark">Trademark Registration</option>
                                    <option value="compliance">Annual Compliance</option>
                                </select>
                                <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="button"
                                className="w-full bg-[var(--color-brand-secondary)] hover:bg-[#a17500] text-white font-bold rounded-lg px-4 py-3 transition-colors uppercase tracking-wide text-sm shadow-md"
                            >
                                Claim Your Free Consultation
                            </button>
                        </div>
                    </form>
                </div>

                {/* Stats Bar */}
                <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-6 w-full max-w-6xl mx-auto p-4 lg:p-2 lg:bg-[#15175b]/30 lg:rounded-full lg:border lg:border-white/10 mt-4">
                    <div className="bg-[var(--color-brand-secondary)] rounded-full px-5 py-2 font-bold text-sm text-white flex items-center justify-center gap-2 whitespace-nowrap shadow-lg shrink-0 w-full lg:w-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                        </svg>
                        What Sets Us Apart
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-3 lg:gap-4 w-full lg:w-auto">
                        <div className="bg-white text-gray-800 rounded-full px-4 py-1.5 text-xs font-semibold shadow-sm flex items-center whitespace-nowrap">
                            <span className="text-[var(--color-brand-secondary)] mr-1">500+</span> MCA Certified Experts
                        </div>
                        <div className="bg-white text-gray-800 rounded-full px-4 py-1.5 text-xs font-semibold shadow-sm flex items-center whitespace-nowrap">
                            <span className="text-[var(--color-brand-secondary)] mr-1">10,000+</span> Verified Reviews
                        </div>
                        <div className="bg-white text-gray-800 rounded-full px-4 py-1.5 text-xs font-semibold shadow-sm flex items-center whitespace-nowrap">
                            <span className="text-[var(--color-brand-secondary)] mr-1">2500+</span> Monthly Clients Onboardings
                        </div>
                        <div className="bg-white text-gray-800 rounded-full px-4 py-1.5 text-xs font-semibold shadow-sm flex items-center text-center whitespace-nowrap">
                            Serving Businesses Across India
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
