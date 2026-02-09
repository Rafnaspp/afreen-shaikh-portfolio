"use client";

import { useState, useEffect } from "react";

// Typewriter component for typing animation
function Typewriter({ texts, className, delay = 50, pauseDelay = 1500, style }: { 
    texts: string[], 
    className?: string,
    delay?: number,
    pauseDelay?: number,
    style?: React.CSSProperties
}) {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [isTyping, setIsTyping] = useState(true);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (currentTextIndex >= texts.length) return;

        const currentText = texts[currentTextIndex];
        
        if (isPaused) {
            const pauseTimer = setTimeout(() => {
                setIsPaused(false);
                setDisplayedText("");
                setIsTyping(true);
                if (currentTextIndex < texts.length - 1) {
                    setCurrentTextIndex(prev => prev + 1);
                } else {
                    // Loop back to first text
                    setCurrentTextIndex(0);
                }
            }, pauseDelay);
            return () => clearTimeout(pauseTimer);
        }

        if (isTyping && displayedText.length < currentText.length) {
            const timer = setTimeout(() => {
                setDisplayedText(currentText.slice(0, displayedText.length + 1));
            }, delay);
            return () => clearTimeout(timer);
        } else if (isTyping && displayedText.length === currentText.length) {
            setIsTyping(false);
            setIsPaused(true);
        }
    }, [displayedText, currentTextIndex, isTyping, isPaused, texts, delay, pauseDelay]);

    // Format text with special handling for "Afreen Shaikh" to be bold and "psychologist" to be colored
    const formatText = (text: string) => {
        if (text.includes("Hello") && text.includes("Afreen Shaikh")) {
            const beforeName = text.substring(0, text.indexOf("Afreen Shaikh"));
            const afterName = text.substring(text.indexOf("Afreen Shaikh") + "Afreen Shaikh".length);
            return (
                <>
                    {beforeName}
                    <span className="font-medium">Afreen Shaikh</span>
                    {afterName}
                </>
            );
        }
        if (text.includes("I'm your personal") && text.includes("psychologist")) {
            const beforePsych = text.substring(0, text.indexOf("psychologist"));
            return (
                <>
                    {beforePsych}
                    <span className="text-primary">psychologist</span>
                </>
            );
        }
        return text;
    };

    return (
        <div className={className} style={style}>
            {formatText(displayedText)}
            <span className="animate-pulse ml-1">|</span>
        </div>
    );
}

export default function Hero() {
    return (
        <section id="home" className="min-h-screen flex items-center bg-[#FFFFFF] pt-24 pb-2 relative overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12">
                {/* Mobile View */}
                <div className="lg:hidden flex flex-col items-center justify-center min-h-[85vh] px-4 space-y-6">
                    <div className="relative w-full max-w-xs">
                        <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white relative bg-gradient-to-br from-primary/10 to-accent-peach/30">
                            <img src="/afreen.png" alt="Afreen Shaikh image" className="w-full h-full object-cover" />
                        </div>
                    </div>
                    <div className="w-full max-w-xs space-y-4 text-center">
                        <Typewriter
                            texts={["Hello, Afreen Shaikh here", "I'm your personal psychologist"]}
                            className="text-2xl md:text-4xl font-light tracking-tight min-h-[3rem]"
                            delay={80}
                            pauseDelay={2000}
                        />
                        <a
                            href="https://wa.me/917045870463?text=Hello,%20I'd%20like%20to%20book%20a%20therapy%20session."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full px-8 py-4 bg-primary text-white rounded-full font-bold shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all flex items-center justify-center gap-2"
                        >
                            Get therapy session <span>›</span>
                        </a>
                    </div>
                </div>

                {/* Desktop Grid View */}
                <div className="hidden lg:grid lg:grid-cols-2 gap-12">
                    {/* Left Column: Image */}
                    <div className="relative flex flex-col items-center lg:items-end pr-0 lg:pr-12">
                        {/* Subtle background gradient */}
                        <div className="absolute top-10 left-[10%] w-[80%] h-[90%] bg-gradient-to-br from-primary/5 via-transparent to-accent-peach/20 rounded-3xl -z-10 blur-3xl" />

                        {/* Main Image */}
                        <div className="relative z-10 w-full max-w-sm">
                            <div className=" rounded-[2.5rem] overflow-hidden shadow-2xl relative bg-gradient-to-br from-primary/10 to-accent-peach/30">
                                <img src="/afreen.png" alt="Afreen Shaikh" className="w-full h-full object-cover" />
                            </div>
                        </div>

                        {/* "We help to deal with" Section - Below Image */}
                        <div className="w-full max-w-sm mt-8 lg:mt-12">
                            <div className="flex flex-col lg:flex-row items-center lg:items-end gap-6 lg:gap-8">
                                {/* Curly Arrow SVG pointing to icons */}
                                <div className="hidden lg:block text-stone-300 transform -scale-x-100 rotate-12 pb-4">
                                    <svg width="60" height="40" viewBox="0 0 100 50" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M10,40 Q50,10 90,40" />
                                        <path d="M85,35 L90,40 L85,45" />
                                    </svg>
                                </div>

                                {/* <div className="space-y-2">
                                    <div className="flex gap-8 justify-center lg:justify-start">
                                        {[
                                            { name: 'Anxiety', icon: '🤯' },
                                            { name: 'Depression', icon: '🌧️' },
                                            { name: 'Nervousness', icon: '😰' }
                                        ].map((item) => (
                                            <div key={item.name} className="flex flex-col items-center gap-2">
                                                <div className="w-14 h-14 bg-accent-peach rounded-2xl flex items-center justify-center text-2xl text-primary">
                                                    {item.icon}
                                                </div>
                                                <span className="text-sm font-medium text-stone-500">{item.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <h3 className="font-bold text-stone-700 text-center lg:text-left">I help to deal with</h3>
                                </div> */}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Text & CTAs */}
                    <div className="space-y-8 text-center lg:text-left">
                        <div className="space-y-4">
                            <Typewriter
                                texts={["Hello, Afreen Shaikh here", "I'm your personal psychologist"]}
                                className="text-2xl md:text-3xl lg:text-5xl font-light tracking-tight mb-2 min-h-[4rem] lg:min-h-[6rem]"
                                style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", system-ui, sans-serif' }}
                                delay={60}
                                pauseDelay={2000}
                            />
                            <p className="text-stone-500 max-w-lg mx-auto lg:mx-0 leading-relaxed text-lg pt-4">
                                People often think of talk therapy when they hear the word psychologist, but this profession actually encompasses a wide range of specialty areas.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start pt-4">
                            <a
                                href="https://wa.me/917045870463?text=Hello,%20I'd%20like%20to%20book%20a%20therapy%20session."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 bg-primary text-white rounded-full font-bold shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all flex items-center gap-2"
                            >
                                Get therapy session <span>›</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
