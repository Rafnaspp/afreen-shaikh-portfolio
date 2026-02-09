export default function About() {
    return (
        <section id="about" className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="glass-panel p-8 md:p-12 rounded-2xl relative z-10 border-none bg-stone-50/50">
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-serif text-foreground">About Me</h2>
                            <p className="text-stone-600 leading-relaxed text-lg">
                                I am a Clinical Psychologist with over 7 years of dedicated experience in providing evidence-based mental health care. My practice is built on the foundation of empathy, ethical integrity, and emotional safety.
                            </p>
                            <p className="text-stone-600 leading-relaxed text-lg">
                                I work with children, adolescents, and adults, helping them navigate complex emotional landscapes. My goal is not just symptom reduction, but fostering deep self-understanding and resilience.
                            </p>

                            <div className="grid grid-cols-2 gap-4 pt-4">
                                <div className="flex items-center gap-3 text-sm text-stone-500 font-medium">
                                    <span className="w-2 h-2 rounded-full bg-green-300"></span> 7+ Years Experience
                                </div>
                                <div className="flex items-center gap-3 text-sm text-stone-500 font-medium">
                                    <span className="w-2 h-2 rounded-full bg-blue-300"></span> Evidence-Based
                                </div>
                                <div className="flex items-center gap-3 text-sm text-stone-500 font-medium">
                                    <span className="w-2 h-2 rounded-full bg-purple-300"></span> LGBTQ+ Affirmative
                                </div>
                                <div className="flex items-center gap-3 text-sm text-stone-500 font-medium">
                                    <span className="w-2 h-2 rounded-full bg-orange-300"></span> Trauma-Informed
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
