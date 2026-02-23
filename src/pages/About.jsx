import React, { useEffect, useRef } from 'react';
import { ArrowLeft, CheckCircle, Instagram, Facebook, Users, BookOpen } from 'lucide-react';
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

    const bgImage = "/Janeexercising.png";

    const focusAreas = [
        {
            title: "Sustainable fat loss & body recomposition",
            body: "No crash diets. No quick fixes. I focus on permanent, meaningful change through evidence-based methods that actually fit into real life after 50."
        },
        {
            title: "Strength training as the cornerstone",
            body: "For women over 50, lifting is non-negotiable. It preserves bone density, boosts metabolism, and is the single fastest route to a leaner, more functional body."
        },
        {
            title: "Midlife-specific hormonal changes",
            body: "Generic fitness advice often fails after menopause. My approach is tailored to the hormonal and metabolic shifts that make midlife different—and manageable."
        },
    ];

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
                        <h1 className="font-drama italic text-6xl md:text-8xl lg:text-9xl text-dark leading-none mb-6">Jane Barclay</h1>
                        <a
                            href="https://www.instagram.com/janefitlife50/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-2 bg-background/80 backdrop-blur-sm border border-dark/10 text-dark px-4 py-2 rounded-full text-sm font-semibold hover:border-accent hover:text-accent transition-colors"
                        >
                            <Instagram className="w-4 h-4" />
                            <span>@janefitlife50</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Content */}
            <main className="max-w-4xl mx-auto px-6 md:px-12 pt-16 space-y-24">

                {/* Social proof stats */}
                <section className="reveal">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="bg-surface rounded-2xl p-6 border border-dark/5 flex flex-col items-center text-center">
                            <span className="text-accent mb-2"><Users className="w-5 h-5" /></span>
                            <span className="font-bold text-dark text-2xl">5.6K+</span>
                            <span className="text-dark/50 text-xs mt-1">Followers</span>
                        </div>
                        <div className="bg-surface rounded-2xl p-6 border border-dark/5 flex flex-col items-center text-center">
                            <span className="text-accent mb-2"><BookOpen className="w-5 h-5" /></span>
                            <span className="font-bold text-dark text-2xl">149</span>
                            <span className="text-dark/50 text-xs mt-1">Posts</span>
                        </div>
                        <a href="https://www.instagram.com/janefitlife50/" target="_blank" rel="noopener noreferrer"
                            className="bg-surface rounded-2xl p-6 border border-dark/5 flex flex-col items-center text-center hover:border-accent hover:shadow-md transition-all group">
                            <span className="text-accent group-hover:text-primary transition-colors mb-2"><Instagram className="w-5 h-5" /></span>
                            <span className="font-bold text-dark text-base">Instagram</span>
                            <span className="text-dark/50 text-xs mt-1">@janefitlife50</span>
                        </a>
                        <a href="https://www.facebook.com/jane.barclay.10" target="_blank" rel="noopener noreferrer"
                            className="bg-surface rounded-2xl p-6 border border-dark/5 flex flex-col items-center text-center hover:border-accent hover:shadow-md transition-all group">
                            <span className="text-accent group-hover:text-primary transition-colors mb-2"><Facebook className="w-5 h-5" /></span>
                            <span className="font-bold text-dark text-base">Facebook</span>
                            <span className="text-dark/50 text-xs mt-1">Jane Barclay</span>
                        </a>
                    </div>
                </section>

                {/* Intro */}
                <section className="reveal border-t border-dark/10 pt-16">
                    <div className="flex flex-col md:flex-row gap-12 items-start">
                        <div className="md:w-2/3 space-y-6">
                            <h2 className="font-sans font-bold text-4xl md:text-5xl text-dark leading-tight">
                                Certified Fitness &amp; Nutrition Coach <span className="text-accent">(58)</span>
                            </h2>
                            <p className="text-2xl md:text-3xl font-drama italic text-primary leading-relaxed">
                                Just a woman who figured out what actually works after 50.
                            </p>
                            <p className="text-lg text-dark/70 leading-relaxed">
                                Strong. Lean. No extreme dieting or endless cardio. I spent years trying every approach that promised results—and most of them failed me. That drove me to dig into the science, get certified, and build a method that genuinely works for women's bodies as they change in midlife.
                            </p>
                            <p className="text-lg text-dark/70 leading-relaxed">
                                My approach is built around helping women over 50 <strong className="text-dark">thrive</strong>—not just survive—through practical, sustainable habits tailored to the hormonal and metabolic realities of midlife. No one-size-fits-all advice here.
                            </p>
                        </div>
                        <div className="md:w-1/3 bg-surface rounded-[2rem] p-8 border border-dark/5 flex flex-col items-center text-center gap-4">
                            <span className="font-mono text-accent text-sm tracking-widest uppercase font-bold">The mission</span>
                            <p className="font-drama italic text-2xl text-primary leading-snug">"Get strong and lean without extreme dieting or excessive cardio."</p>
                            <div className="w-full border-t border-dark/10 pt-4 space-y-1 text-sm text-dark/60">
                                <p>Women over 50</p>
                                <p>Midlife health &amp; fitness</p>
                                <p>Body recomposition</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Focus areas */}
                <section className="reveal border-t border-dark/10 pt-20">
                    <h2 className="font-sans font-bold text-3xl md:text-4xl text-dark mb-10">What I focus on</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {focusAreas.map((item, i) => (
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
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/survey" className="inline-block bg-accent text-background px-10 py-5 rounded-full font-bold text-lg hover:bg-accent/90 transition-colors shadow-lg hover:shadow-xl">
                            Start Your Transformation
                        </Link>
                        <a
                            href="https://www.instagram.com/janefitlife50/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 bg-surface text-dark border border-dark/10 px-10 py-5 rounded-full font-bold text-lg hover:border-accent hover:text-accent transition-colors"
                        >
                            <Instagram className="w-5 h-5" />
                            Follow on Instagram
                        </a>
                    </div>
                </section>
            </main>
        </div>
    );
}
