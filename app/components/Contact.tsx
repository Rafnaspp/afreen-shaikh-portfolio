
export default function Contact() {
    return (
        <footer id="contact" className="bg-stone-900 text-stone-300 py-16 md:py-24">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 mb-16">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">Start Your Journey</h2>
                        <p className="text-stone-400 mb-8 max-w-md">
                            Reaching out is the first step toward healing. Feel free to contact me via email or WhatsApp to schedule a consultation.
                        </p>

                        <div className="space-y-6">
                            <a href="mailto:afreen.spsychologist@gmail.com" className="flex items-center gap-4 hover:text-white transition-colors group">
                                <div className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center group-hover:bg-primary transition-colors">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                </div>
                                <span className="text-lg">afreen.spsychologist@gmail.com</span>
                            </a>

                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                </div>
                                <span className="text-lg">7045870463</span>
                            </div>

                            <a href="https://instagram.com/psyched4mind" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 hover:text-white transition-colors group">
                                <div className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center group-hover:bg-primary transition-colors">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2a10 10 0 1 0 10 10A10.01 10.01 0 0 0 12 2zm2 13h-4v-4h4zm0-6h-4V7h4z" /></svg>
                                </div>
                                <span className="text-lg font-medium">@psyched4mind</span>
                            </a>
                        </div>
                    </div>

                    <div className="bg-stone-800/50 p-8 rounded-2xl border border-stone-700/50 backdrop-blur-sm">
                        <h3 className="text-xl font-serif text-white mb-6">Important Note</h3>
                        <ul className="space-y-4 text-sm text-stone-400">
                            <li className="flex gap-3">
                                <svg className="w-5 h-5 text-stone-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                                Therapy is not a replacement for psychiatric treatment or medication.
                            </li>
                            <li className="flex gap-3">
                                <svg className="w-5 h-5 text-stone-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                                No medication is prescribed in these sessions.
                            </li>
                            <li className="flex gap-3">
                                <svg className="w-5 h-5 text-red-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                                <span className="text-stone-300">If you are in a crisis or emergency, please contact your local emergency services immediately.</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-stone-800 text-center text-sm text-stone-500">
                    &copy; {new Date().getFullYear()} Afreen Shaikh. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
