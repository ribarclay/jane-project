import React, { useEffect, useRef } from 'react';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

export default function About() {
    const containerRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        let ctx = gsap.context(() => {
            gsap.fromTo(
                '.reveal',
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: 'power3.out' }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    const bgImage = "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2940&auto=format&fit=crop";

    return (
        <div ref={containerRef} className="min-h-screen bg-background text-dark font-sans pb-32">

            {/* Back nav */}
            <nav className="absolute top-0 left-0 w-full p-6 md:px-12 z-50">
                <Link to="/" className="inline-flex items-center space-x-2 text-dark hover:text-accent transition-colors">
                    <ArrowLeft className="w-5 h-5" />
                    <span className="font-sans text-sm tracking-widest uppercase font-semibold">Back to Home</span>
                </Link>
            </nav>

            {/* Hero */}
            <div className="relative w-full h-[70vh] overflow-hidden">
                <div
                    className="absolute inset-0 w-full h-full"
                    style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center top' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
                    <div className="max-w-3xl reveal">
                        <span className="font-mono text-accent tracking-widest uppercase text-sm font-semibold block mb-3">About Me</span>
                        <h1 className="font-drama italic text-6xl md:text-8xl lg:text-9xl text-dark leading-none mb-4">Jane Barclay</h1>
                    </div>
                </div>
            </div>

            {/* Content */}
            <main className="max-w-4xl mx-auto px-6 md:px-12 pt-16 space-y-24">

                {/* Intro */}
                <section className="reveal">
                    <div className="flex flex-col md:flex-row gap-12 items-start">
                        <div className="md:w-2/3 space-y-6">
                            <h2 className="font-sans font-bold text-4xl md:text-5xl text-dark leading-tight">
                                Certified Fitness &amp; Nutrition Coach <span className="text-accent">(58)</span>
                            </h2>
                            <p className="text-2xl md:text-3xl font-drama italic text-primary leading-relaxed">
                                Just a woman who figured out what actually works after 50.
                            </p>
                            <p className="text-lg text-dark/70 leading-relaxed">
                                Strong. Lean. No extreme dieting or endless cardio. I spent years trying every approach that promised results—and most of them failed me. That's what drove me to dig into the science, get certified, and build a method that genuinely works for women's bodies as they change after 50.
                            </p>
                        </div>
                        <div className="md:w-1/3 bg-surface rounded-[2rem] p-8 border border-dark/5 flex flex-col items-center text-center gap-3">
                            <span className="font-mono text-accent text-sm tracking-widest uppercase font-bold">In a nutshell</span>
                            <p className="font-sans font-bold text-dark text-lg leading-relaxed">Strong • Lean</p>
                            <p className="font-sans text-dark/70 text-sm leading-relaxed">No extreme dieting<br />No endless cardio</p>
                        </div>
                    </div>
                </section>

                {/* Values / Pillars */}
                <section className="reveal border-t border-dark/10 pt-20">
                    <h2 className="font-sans font-bold text-3xl md:text-4xl text-dark mb-10">What I believe</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Strength is the foundation", body: "Resistance training is non-negotiable for bone density, metabolism, and confidence after 50. We build you up—not wear you down." },
                            { title: "Food is not the enemy", body: "Sustainable nutrition is about nourishment, not punishment. I teach you to eat well for life, not just for a season." },
                            { title: "Self-compassion accelerates results", body: "Progress happens fastest when we drop the shame and the 'all or nothing' mentality. You're already enough—we're just refining." },
                        ].map((item, i) => (
                            <div key={i} className="bg-surface rounded-[2rem] p-8 border border-dark/5">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                                    <CheckCircle className="w-5 h-5 text-primary" />
                                </div>
                                <h3 className="font-sans font-bold text-xl text-dark mb-3">{item.title}</h3>
                                <p className="text-dark/70 text-sm leading-relaxed">{item.body}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <section className="reveal text-center border-t border-dark/10 pt-20">
                    <h2 className="font-sans font-bold text-3xl md:text-4xl text-dark mb-4">Ready to start?</h2>
                    <p className="text-dark/70 text-lg mb-10 max-w-xl mx-auto">Let's have a chat about where you are and where you want to be. No pressure, no sales pitch.</p>
                    <Link to="/survey" className="inline-block bg-accent text-background px-10 py-5 rounded-full font-bold text-lg hover:bg-accent/90 transition-colors shadow-lg hover:shadow-xl">
                        Start Your Transformation
                    </Link>
                </section>
            </main>
        </div>
    );
}
