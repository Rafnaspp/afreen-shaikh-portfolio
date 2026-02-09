
export default function Expertise() {
    return (
        <section id="expertise" className="py-24 bg-white border-y border-stone-100">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-12">
                    <span className="text-3xl block mb-4">🧠</span>
                    <h2 className="text-3xl md:text-4xl font-serif text-foreground">Areas of Expertise</h2>
                    <p className="text-stone-500 mt-4 max-w-lg mx-auto">
                        Specialized care focused on evidence, empathy, and sustainable growth.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Child Column */}
                    <div className="bg-stone-50 p-8 rounded-2xl border border-stone-100 relative overflow-hidden group hover:border-blue-100 transition-colors">
                        <div className="absolute top-0 right-0 p-4 opacity-10 text-6xl group-hover:scale-110 transition-transform">🧸</div>
                        <h3 className="text-xl font-bold font-serif mb-6 flex items-center gap-3">
                            <span className="text-2xl">🧒</span> Child & Adolescent
                        </h3>
                        <ul className="space-y-3">
                            {['ADHD & Focus Issues', 'Learning Difficulties', 'Emotional Dysregulation', 'Exam Stress', 'Parenting Support'].map((item) => (
                                <li key={item} className="flex items-center gap-3 text-sm text-stone-600">
                                    <span className="text-blue-400">✓</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Adult Column */}
                    <div className="bg-stone-50 p-8 rounded-2xl border border-stone-100 relative overflow-hidden group hover:border-green-100 transition-colors">
                        <div className="absolute top-0 right-0 p-4 opacity-10 text-6xl group-hover:scale-110 transition-transform">🧘</div>
                        <h3 className="text-xl font-bold font-serif mb-6 flex items-center gap-3">
                            <span className="text-2xl">👩‍💼</span> Adult Psychology
                        </h3>
                        <ul className="space-y-3">
                            {['Anxiety & Panic', 'Depression & Mood', 'Burnout Recovery', 'Relationship Heath', 'Trauma Processing'].map((item) => (
                                <li key={item} className="flex items-center gap-3 text-sm text-stone-600">
                                    <span className="text-green-400">✓</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
