import googleLogo from '../../assets/google.svg';

export default function HeroSection() {
    return (
        <section className="bg-gradient-to-br from-blue-50 to-white pt-32 pb-24 px-4 md:px-8 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-100 opacity-20 -skew-x-12 transform origin-top translate-x-1/4"></div>

            <div className="container mx-auto flex flex-col lg:flex-row items-center relative z-10">
                {/* Left Content */}
                <div className="w-full lg:w-1/2 flex flex-col items-start gap-6 relative">
                    <div className="flex items-center gap-2 mb-2 font-medium">
                        <span className="flex items-center gap-1 text-gray-800">
                            <span className="text-yellow-500 font-bold">★</span>
                            <img src={googleLogo} alt="Google" className="h-5 object-contain ml-1" />
                            Rating
                        </span>
                        <span className="flex text-yellow-500 text-sm ml-1 tracking-widest">★★★★★</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#090a3d] leading-tight">
                        Your trusted partner<br />for compliance needs
                    </h1>

                    <p className="text-xl text-gray-600 max-w-xl">
                        An online business compliance platform that helps entrepreneurs and other individuals with various, registrations, tax filings, and other legal matters.
                    </p>

                    <div className="flex flex-wrap items-center gap-6 my-4">
                        <div className="flex items-center gap-3">
                            <div className="text-3xl">📊</div>
                            <div className="flex flex-col">
                                <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-yellow-500">4.5+</span>
                                <span className="text-sm text-gray-500">Customer Rating</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="text-3xl">👥</div>
                            <div className="flex flex-col">
                                <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-yellow-500">20,000+</span>
                                <span className="text-sm text-gray-500">Clients</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="text-3xl">🤝</div>
                            <div className="flex flex-col">
                                <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-yellow-500">99.8%</span>
                                <span className="text-sm text-gray-500">Financial Stability</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 mt-2 w-full sm:w-auto">
                        <button className="bg-[#090a3d] text-white px-8 py-3 rounded hover:bg-blue-900 transition-all font-semibold shadow-lg text-lg">
                            Talk An Expert
                        </button>
                        <button className="flex items-center justify-center gap-2 px-8 py-3 rounded font-semibold text-gray-700 hover:text-red-500 transition-colors">
                            <span className="w-8 h-8 rounded-full bg-red-100 text-red-500 flex items-center justify-center p-1">
                                ▶
                            </span>
                            See how it works
                        </button>
                    </div>
                </div>

                {/* Right Content / Image Area */}
                <div className="w-full lg:w-1/2 mt-12 lg:mt-0 flex justify-end relative">
                    <div className="relative w-full max-w-lg aspect-square">
                        {/* Target icon placeholder */}
                        <div className="absolute top-0 right-0 z-20 bg-white p-3 rounded-xl shadow-lg animate-bounce">
                            🎯 Annual Compliance
                        </div>
                        {/* Chart icon placeholder */}
                        <div className="absolute bottom-1/4 -left-4 z-20 bg-white p-3 rounded-xl shadow-lg animate-bounce" style={{ animationDelay: "1s" }}>
                            📈 Payroll Services
                        </div>
                        {/* Person holding laptop illustration placeholder */}
                        <div className="w-full h-full bg-gray-200 rounded-3xl overflow-hidden relative shadow-2xl flex flex-col items-center justify-end border-8 border-white bg-gradient-to-b from-blue-100 to-blue-50 text-center p-8">
                            <span className="text-6xl mb-4">👨‍💼</span>
                            <p className="text-gray-500 text-lg font-medium">Illustration Base</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
