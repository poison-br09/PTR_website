export default function FeaturedIn() {
    const brandNames = ["India.com", "mid-day", "mint", "Forbes", "The Hindu"];

    return (
        <section className="py-10 bg-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-8">
                <h2 className="text-3xl font-bold text-[#090a3d] text-center mb-10">
                    Featured In
                </h2>

                {/* Infinite scroll marquee effect container */}
                <div className="relative w-full overflow-hidden flex whitespace-nowrap">
                    {/* First set of logos */}
                    <div className="flex justify-around items-center min-w-full animate-marquee">
                        {brandNames.map((brand, idx) => (
                            <div key={`brand-1-${idx}`} className="mx-8">
                                <span className="text-3xl lg:text-5xl font-extrabold text-[#c79100] tracking-tighter cursor-default hover:text-[#090a3d] transition-colors duration-300">
                                    {brand}
                                </span>
                            </div>
                        ))}
                    </div>
                    {/* Second set of logos for infinite effect */}
                    <div className="flex justify-around items-center min-w-full animate-marquee" aria-hidden="true">
                        {brandNames.map((brand, idx) => (
                            <div key={`brand-2-${idx}`} className="mx-8">
                                <span className="text-3xl lg:text-5xl font-extrabold text-[#c79100] tracking-tighter cursor-default hover:text-[#090a3d] transition-colors duration-300">
                                    {brand}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
