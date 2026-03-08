export default function LatestBlogs() {
    const blogs = [
        {
            date: "March 7, 2026",
            title: "Women Entrepreneurship Platform (WEP): NITI Aayog Initiative",
            author: "Joel Dsouza",
            description: "The Women Entrepreneurship Platform (WEP) is a digital portal created to help women in India start and grow their own businesses. It...",
            image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=400&h=250",
            tags: ["Startup", "WEP"]
        },
        {
            date: "March 5, 2026",
            title: "Income Tax Refund Delay: Reasons, Status & Faster Refund Tips",
            author: "Srihari Dhondalay",
            description: "Income tax refund delay can be stressful, especially when the money you're owed seems stuck. According to data released by...",
            image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=400&h=250",
            tags: ["Tax", "Refund"]
        },
        {
            date: "March 3, 2026",
            title: "ITR Processing Time for AY 2027-28: Refund & Status Guide",
            author: "Joel Dsouza",
            description: "Every year, millions of Indian taxpayers wait anxiously to know their ITR processing time and refund status. The Central Processing...",
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=400&h=250",
            tags: ["ITR", "Tax"]
        }
    ];

    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex justify-between items-center mb-12">
                    <h2 className="text-3xl font-bold text-[#090a3d]">Latest Blogs</h2>
                    <button className="border border-[var(--color-brand-secondary)] text-[var(--color-brand-secondary)] px-6 py-2 rounded hover:bg-orange-50 transition-colors font-medium">
                        View All
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog, idx) => (
                        <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-gray-100 flex flex-col group">
                            <div className="relative overflow-hidden h-48">
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <p className="text-gray-500 text-sm mb-3 font-medium">{blog.date}</p>
                                <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-[var(--color-brand-primary)] cursor-pointer leading-snug">
                                    {blog.title}
                                </h3>
                                <p className="text-sm text-gray-400 mb-4">{blog.author}</p>
                                <p className="text-gray-600 text-sm line-clamp-3 mb-6 flex-grow">
                                    {blog.description}
                                </p>
                                <a href="#" className="flex items-center gap-2 text-[var(--color-brand-secondary)] font-semibold hover:gap-3 transition-all mt-auto">
                                    Read More <span className="text-xl">➔</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center gap-2 mt-10">
                    <div className="w-8 h-2 rounded-full bg-[var(--color-brand-secondary)]"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-200"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-200"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-200"></div>
                </div>
            </div>
        </section>
    );
}
