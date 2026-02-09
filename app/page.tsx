"use client";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Expertise from "./components/Expertise";
import Services from "./components/Services";
import Process from "./components/Process";
import Contact from "./components/Contact";
import WhatsAppButton from "./components/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Expertise />
      <Services />
      <Process />
      <Contact />
      <WhatsAppButton />
    </main>
  );
}
