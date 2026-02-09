
const services = [
    {
        title: "Individual Therapy",
        desc: "One-on-one sessions tailored to your unique needs.",
        icon: "👤",
        tags: ["Children", "Adolescents", "Adults"]
    },
    {
        title: "Psychological Assessments",
        desc: "Formal testing for ADHD, Learning Disabilities & more.",
        icon: "📝",
        tags: ["Diagnostic", "Reports", "School Support"]
    },
    {
        title: "Seminars & Workshops",
        desc: "Mental health programs for schools and organizations.",
        icon: "🎓",
        tags: ["Corporate", "Education", "Parenting"]
    }
];

export default function Services() {
    return (
        <section id="services" className="py-24 bg-stone-50">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="flex items-center gap-2 mb-8 justify-center md:justify-start">
                    <span className="text-2xl">✨</span>
                    <h2 className="text-3xl font-serif text-foreground">Services Offered</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {services.map((s, i) => (
                        <div key={i} className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm hover:shadow-md transition-all flex flex-col items-start gap-4 h-full">
                            <div className="w-12 h-12 bg-stone-50 rounded-lg flex items-center justify-center text-2xl border border-stone-100">
                                {s.icon}
                            </div>
                            <div>
                                <h3 className="text-lg font-bold mb-2 font-serif">{s.title}</h3>
                                <p className="text-sm text-stone-500 mb-4 leading-relaxed">{s.desc}</p>
                                <div className="flex flex-wrap gap-2">
                                    {s.tags.map(tag => (
                                        <span key={tag} className="text-[10px] uppercase tracking-wider font-bold text-stone-400 bg-stone-50 px-2 py-1 rounded-md border border-stone-100">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Info Block */}
                <div className="mt-8 bg-white border border-stone-200 rounded-xl p-6 flex flex-col md:flex-row gap-6 items-center shadow-sm">
                    <div className="flex-1 text-center md:text-left">
                        <h4 className="font-bold text-stone-700 flex items-center gap-2 justify-center md:justify-start">
                            <span>ℹ️</span> Session Details
                        </h4>
                    </div>
                    <div className="flex flex-wrap gap-4 md:gap-8 justify-center text-sm text-stone-600">
                        <span className="bg-stone-50 px-3 py-1 rounded-full border border-stone-100">45–50 Mins</span>
                        <span className="bg-stone-50 px-3 py-1 rounded-full border border-stone-100">Online / In-Person</span>
                        <span className="bg-stone-50 px-3 py-1 rounded-full border border-stone-100">English & Hindi</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
