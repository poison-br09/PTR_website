export default function Testimonials() {
    const testimonials = [
        {
            name: "Sawai Singh",
            rating: 5,
            text: "The experience is very good and loved the team how they work smoothly that's is commendable.",
            avatar: "https://randomuser.me/api/portraits/men/32.jpg"
        },
        {
            name: "Dr. Luqman Khan",
            rating: 4,
            text: "I am the partner of the Medrix Records Management Services LLP and working with Ujjwal and timely information provided by him and resolve and issue/queries. Our experience is very good and would like to work continue in future.",
            avatar: "https://randomuser.me/api/portraits/men/44.jpg"
        },
        {
            name: "Ajayraj Infratech Pvt. Ltd.",
            rating: 4,
            text: "All team members in registerkaro.in are very helpful and well experienced in their field/department. Ms/Mrs. Mamata Rathore Coordinator with us is very helpful, responsible and punctual in filing GST & other government documents/compliances.",
            avatar: "https://randomuser.me/api/portraits/men/85.jpg"
        }
    ];

    return (
        <section className="py-24 bg-[var(--color-brand-primary)]">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex justify-between items-end mb-12 text-white">
                    <h2 className="text-3xl md:text-4xl font-bold max-w-lg leading-tight">
                        Testimonials That Speak for Us
                    </h2>
                    <div className="hidden md:flex gap-4">
                        <button className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center hover:bg-gray-800 transition-colors">
                            <span className="text-xl">❮</span>
                        </button>
                        <button className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center hover:bg-gray-800 transition-colors">
                            <span className="text-xl">❯</span>
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, idx) => (
                        <div key={idx} className="bg-[#10134f] p-8 rounded-2xl shadow-lg border border-blue-900/50 flex flex-col">
                            <div className="flex items-center gap-4 mb-6">
                                <img
                                    src={testimonial.avatar}
                                    alt={testimonial.name}
                                    className="w-14 h-14 rounded-full border-2 border-[var(--color-brand-secondary)] object-cover"
                                />
                                <div>
                                    <h4 className="text-white font-bold">{testimonial.name}</h4>
                                    <div className="flex items-center gap-1 text-yellow-500 text-sm mt-1">
                                        {'★'.repeat(testimonial.rating)}{'☆'.repeat(5 - testimonial.rating)}
                                        <span className="text-gray-400 text-xs ml-2 select-none border-l pl-2 border-gray-600">{testimonial.rating}/5</span>
                                    </div>
                                </div>
                            </div>
                            <p className="text-gray-300 text-sm leading-relaxed flex-grow">
                                "{testimonial.text}"
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
