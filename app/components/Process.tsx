
export default function Process() {
    return (
        <section className="py-24 bg-gradient-to-b from-stone-50 to-white">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-5xl font-serif text-center mb-16">First Session & Process</h2>

                <div className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-2xl font-serif mb-6">What to expect</h3>
                            <ol className="relative border-l border-stone-200 ml-3 space-y-8">
                                <li className="mb-10 ml-6">
                                    <span className="absolute flex items-center justify-center w-6 h-6 bg-stone-100 rounded-full -left-3 ring-8 ring-white">
                                        <span className="w-2 h-2 rounded-full bg-stone-400"></span>
                                    </span>
                                    <h4 className="flex items-center mb-1 text-lg font-semibold text-stone-900">Understanding Your Concerns</h4>
                                    <p className="mb-4 text-base font-normal text-stone-500">We begin by openly discussing what brings you to therapy in a safe space.</p>
                                </li>
                                <li className="mb-10 ml-6">
                                    <span className="absolute flex items-center justify-center w-6 h-6 bg-stone-100 rounded-full -left-3 ring-8 ring-white">
                                        <span className="w-2 h-2 rounded-full bg-stone-400"></span>
                                    </span>
                                    <h4 className="flex items-center mb-1 text-lg font-semibold text-stone-900">History & Context</h4>
                                    <p className="mb-4 text-base font-normal text-stone-500">Exploring your psychological history and current life challenges.</p>
                                </li>
                                <li className="ml-6">
                                    <span className="absolute flex items-center justify-center w-6 h-6 bg-stone-100 rounded-full -left-3 ring-8 ring-white">
                                        <span className="w-2 h-2 rounded-full bg-stone-400"></span>
                                    </span>
                                    <h4 className="flex items-center mb-1 text-lg font-semibold text-stone-900">Clarifying Goals</h4>
                                    <p className="text-base font-normal text-stone-500">Setting a collaborative direction for our future sessions together.</p>
                                </li>
                            </ol>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 h-fit">
                            <h3 className="text-2xl font-serif mb-6">Who This Is For</h3>
                            <ul className="space-y-4">
                                {[
                                    "Adults seeking clarity or support (18+)",
                                    "Children and adolescents (with parental consent)",
                                    "Parents seeking guidance",
                                    "Individuals navigating life transitions"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-stone-600">
                                        <svg className="w-5 h-5 text-green-400 mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-8 p-4 bg-red-50 rounded-lg border border-red-100">
                                <p className="text-xs text-red-800 font-medium text-center">
                                    Disclaimer: Services are not intended for psychiatric emergencies.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 text-center text-stone-500 font-medium italic">
                        "You are free to ask questions and proceed at your own pace."
                    </div>
                </div>
            </div>
        </section>
    );
}
