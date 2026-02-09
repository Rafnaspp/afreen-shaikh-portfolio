
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const links = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Expertise", href: "#expertise" },
        { name: "Services", href: "#services" },
        { name: "FAQ", href: "#faq" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
                <Link href="/" className="font-serif text-2xl text-foreground tracking-wide">
                    Afreen Shaikh<span className="text-secondary text-sm block font-sans tracking-normal opacity-80">Clinical Psychologist</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex gap-8 items-center">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-foreground/80 hover:text-primary transition-colors text-sm font-medium tracking-wide"
                        >
                            {link.name} 
                        </Link>
                    ))}
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="lg:hidden p-2 text-foreground"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <div className="w-6 flex flex-col items-end gap-1.5">
                        <span className={`block h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? "w-6 rotate-45 translate-y-2" : "w-6"}`} />
                        <span className={`block h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : "w-4"}`} />
                        <span className={`block h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? "w-6 -rotate-45 -translate-y-2" : "w-5"}`} />
                    </div>
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`fixed inset-0 bg-background/95 backdrop-blur-xl z-40 flex flex-col justify-center items-center gap-8 transition-transform duration-500 ease-in-out lg:hidden ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                {links.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className="text-2xl font-serif text-foreground hover:text-primary transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        {link.name}
                    </Link>
                ))}
                <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="absolute top-8 right-8 p-2 text-foreground/50 hover:text-foreground"
                >
                    Close
                </button>
            </div>
        </header>
    );
}
