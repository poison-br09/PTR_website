export default function WhyChooseUs() {
    const reasons = [
        {
            title: "5 Star Rating",
            icon: "⭐⭐⭐⭐⭐",
            color: "bg-red-50",
            description: "We are highly rated by our customers for providing excellent results."
        },
        {
            title: "300+ Services",
            icon: "🤝",
            color: "bg-green-50",
            description: "Comprehensive solutions tailored perfectly to help your business grow."
        },
        {
            title: "Reasonable Price",
            icon: "💰",
            color: "bg-blue-50",
            description: "Get premium quality services at highly competitive and reasonable prices."
        },
        {
            title: "Turn Around Time",
            icon: "⏱️",
            color: "bg-pink-50",
            description: "We guarantee quick delivery keeping your important timelines in mind."
        }
    ];

    return (
        <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center md:text-left mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
                    <div className="max-w-xl">
                        <h4 className="text-[var(--color-brand-secondary)] font-bold tracking-widest text-sm uppercase mb-2">
                            WHY Your Professional
                        </h4>
                        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-brand-primary)]">
                            Some Numbers are important
                        </h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {reasons.map((reason, idx) => (
                        <div
                            key={idx}
                            className={`p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center ${reason.color} border border-gray-100/50`}
                        >
                            <div className="text-4xl mb-6 p-4 bg-white rounded-full shadow-sm">
                                {reason.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                {reason.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
