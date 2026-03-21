export default function TrustedPartners() {
    const partners = [
        { name: 'Oracle', icon: '🛢️' },
        { name: 'Morpheus', icon: 'M' },
        { name: 'SAMSUNG', icon: '📱' },
        { name: 'monday.com', icon: 'M' },
        { name: 'Segment', icon: 'S' }
    ];

    return (
        <section className="py-12 bg-white border-t border-gray-100">
            <div className="container mx-auto px-4 md:px-8 text-center">
                <h2 className="text-xl md:text-2xl font-bold mb-8 text-[#090a3d]">
                    Trusted By Over 10,000+ Startups and Freelancers
                </h2>

                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 hover:opacity-100 transition-opacity duration-300">
                    {partners.map((partner, idx) => (
                        <div key={idx} className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300">
                            <span className="text-3xl text-gray-500">{partner.icon}</span>
                            <span className="text-xl font-bold text-gray-800 tracking-wider">
                                {partner.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
