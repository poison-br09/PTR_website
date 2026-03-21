export default function Testimonials() {
    const testimonials = [
        {
            name: "Random User 1",
            rating: 5,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
            avatar: "https://randomuser.me/api/portraits/men/32.jpg"
        },
        {
            name: "Random User 2",
            rating: 4,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
            avatar: "https://randomuser.me/api/portraits/men/44.jpg"
        },
        {
            name: "Random User 3",
            rating: 4,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
            avatar: "https://randomuser.me/api/portraits/men/85.jpg"
        }
    ];

    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 text-[#090a3d] gap-4">
                    <h2 className="text-3xl md:text-4xl font-bold leading-tight text-center md:text-left">
                        Testimonials That Speak for Us
                    </h2>
                    <div className="hidden md:flex gap-4">
                        <button className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors">
                            <span className="text-xl text-gray-500">❮</span>
                        </button>
                        <button className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors">
                            <span className="text-xl text-gray-500">❯</span>
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 flex flex-col hover:shadow-xl transition-shadow">
                            <div className="flex items-center gap-4 mb-6">
                                <img
                                    src={testimonial.avatar}
                                    alt={testimonial.name}
                                    className="w-14 h-14 rounded-full border-2 border-[var(--color-brand-secondary)] object-cover"
                                />
                                <div>
                                    <h4 className="text-[#090a3d] font-bold">{testimonial.name}</h4>
                                    <div className="flex items-center gap-1 text-yellow-500 text-sm mt-1">
                                        {'★'.repeat(testimonial.rating)}{'☆'.repeat(5 - testimonial.rating)}
                                        <span className="text-gray-500 text-xs ml-2 select-none border-l pl-2 border-gray-300">{testimonial.rating}/5</span>
                                    </div>
                                </div>
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                                "{testimonial.text}"
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
