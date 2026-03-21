export default function Services() {
    const services = [
        {
            title: "Company Formation",
            description: "Build web-based solutions that enhance customer experience.",
            linkText: "Learn more",
            icon: "🏢"
        },
        {
            title: "Company Secretarial Services",
            description: "Make data-driven decisions and utilize technology to reach business goals.",
            linkText: "Learn more",
            icon: "📊"
        },
        {
            title: "Virtual Office Address",
            description: "Foster customer relationships by effectively serving your market.",
            linkText: "Learn more",
            icon: "📍"
        },
        {
            title: "Annual Compliance Services",
            description: "Turn your ideas into modern products with our design experts.",
            linkText: "Learn more",
            icon: "📋"
        },
        {
            title: "Payroll Services",
            description: "Expand your business across the globe with minimal effort.",
            linkText: "Learn more",
            icon: "💸"
        },
        {
            title: "Bookkeeping Services",
            description: "Steering user behaviours with creative design, data insights & technology.",
            linkText: "Learn more",
            icon: "📒"
        }
    ];

    return (
        <section className="py-12 bg-gray-50/50">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <h4 className="text-[var(--color-brand-secondary)] font-bold tracking-widest text-sm uppercase mb-2">
                        WELCOME TO Your Professional
                    </h4>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#090a3d] mb-4">
                        Explore Our Services
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
                    {services.map((service, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                            <div className="text-5xl text-[var(--color-brand-secondary)] mb-6 drop-shadow-md group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                {service.description}
                            </p>
                            <a href="#" className="font-semibold flex items-center justify-center gap-2 text-[#090a3d] hover:text-[var(--color-brand-secondary)] transition-colors">
                                {service.linkText}
                                <span className="text-xl">→</span>
                            </a>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <button className="bg-[#090a3d] text-white px-8 py-3 rounded hover:bg-blue-900 transition-all font-semibold shadow-lg text-sm">
                        See All Services
                    </button>
                </div>
            </div>
        </section>
    );
}
