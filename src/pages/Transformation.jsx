import React, { useEffect, useRef } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

export default function Transformation() {
    const containerRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0); // Reset scroll on mount
        let ctx = gsap.context(() => {
            gsap.fromTo(
                '.reveal',
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: 'power3.out' }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="min-h-screen bg-background text-dark font-sans selection:bg-primary selection:text-background pb-32">
            <nav className="w-full p-6 md:px-12 z-50 mix-blend-difference text-white fixed top-0 left-0 bg-background/0 backdrop-blur-sm border-b border-dark/5">
                <Link to="/" className="inline-flex items-center space-x-2 text-dark hover:text-accent transition-colors">
                    <ArrowLeft className="w-5 h-5" />
                    <span className="font-sans text-sm tracking-widest uppercase font-semibold">Back to Home</span>
                </Link>
            </nav>

            <main className="pt-32 px-6 md:px-12 max-w-4xl mx-auto space-y-24">
                <div className="reveal text-center border-b border-dark/10 pb-16">
                    <span className="font-mono text-accent text-sm md:text-base tracking-widest uppercase mb-4 block">Personal Wellness Journey</span>
                    <h1 className="font-sans font-bold text-5xl md:text-7xl mb-6 text-dark leading-tight tracking-tight">
                        Start Our <span className="text-primary italic font-drama">Transformation</span>
                    </h1>
                    <p className="text-xl text-dark/70 max-w-2xl mx-auto leading-relaxed">
                        A foundational guide for establishing the mindset and habits required for sustainable, lifelong well-being.
                    </p>
                </div>

                <div className="space-y-32">
                    {/* Section 1 */}
                    <section className="reveal relative">
                        <div className="absolute -left-6 md:-left-12 top-0 h-full w-[2px] bg-primary/20"></div>
                        <h2 className="font-sans font-bold text-3xl md:text-4xl mb-8 text-dark flex items-center">
                            <span className="text-accent font-mono text-2xl mr-4">01.</span> Mindset & Motivation: The Inner Work
                        </h2>

                        <div className="space-y-12">
                            <p className="font-medium text-2xl md:text-3xl text-dark leading-relaxed italic font-drama">
                                The best advice I can give you is to ignore the noise. <strong className="text-primary font-bold not-italic font-sans">Transformation doesn't start with restriction—it starts with self-awareness.</strong> Your health journey, your rules.
                            </p>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="bg-surface p-8 rounded-[2rem] border border-dark/5">
                                    <h3 className="font-sans font-bold text-xl text-dark mb-4">The Foundation of Acceptance</h3>
                                    <p className="text-dark/80 leading-relaxed text-lg">We believe in <strong className="text-dark">Unconditional Positive Regard.</strong> This means you are accepted, respected, and valued exactly as you are today. We acknowledge your challenges without judgment, creating a safe space for true healing and growth.</p>
                                </div>

                                <div className="bg-surface p-8 rounded-[2rem] border border-dark/5">
                                    <h3 className="font-sans font-bold text-xl text-dark mb-4">The Power of Self-Reflection</h3>
                                    <p className="text-dark/80 leading-relaxed text-lg">Before you act, you must <strong className="text-dark">Reflect and Listen.</strong> By focusing your observation and attention inward, you gain the clarity and self-awareness you need to guide your own emotional, mental, and physical well-being.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 2 */}
                    <section className="reveal relative">
                        <div className="absolute -left-6 md:-left-12 top-0 h-full w-[2px] bg-primary/20"></div>
                        <h2 className="font-sans font-bold text-3xl md:text-4xl mb-8 text-dark flex items-center">
                            <span className="text-accent font-mono text-2xl mr-4">02.</span> The Practical Breakdown: Sustainable Action
                        </h2>

                        <div className="space-y-12 text-lg text-dark/80 leading-relaxed">
                            <div className="flex flex-col md:flex-row gap-8 items-start">
                                <div className="md:w-1/3">
                                    <h3 className="font-sans font-bold text-xl text-dark mb-2">Evidence Over Trend</h3>
                                </div>
                                <div className="md:w-2/3">
                                    <p>Our actionable insights are based on proven coaching experience and real-world application, not passing fads. We focus on what creates lasting change.</p>
                                </div>
                            </div>

                            <div className="w-full h-[1px] bg-dark/10"></div>

                            <div className="flex flex-col md:flex-row gap-8 items-start">
                                <div className="md:w-1/3">
                                    <h3 className="font-sans font-bold text-xl text-dark mb-2">Acknowledge Real Barriers</h3>
                                </div>
                                <div className="md:w-2/3">
                                    <p>We know you're busy. Instead of demanding an hour a day, we focus on <strong className="text-dark">micro-movements</strong>—tiny, achievable shifts you can make even on your busiest days.</p>
                                </div>
                            </div>

                            <div className="bg-primary text-background p-10 md:p-12 rounded-[3rem] mt-12 shadow-xl text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">
                                <div>
                                    <span className="text-accent font-mono uppercase tracking-widest text-sm font-bold mb-4 block">Call to Action</span>
                                    <h3 className="font-sans font-bold text-3xl text-background mb-4 text-balance">Try this today: Focus on nourishment, not restriction.</h3>
                                </div>
                                <div className="md:w-1/2 p-6 bg-background/10 rounded-3xl backdrop-blur-sm border border-background/20">
                                    <p className="text-xl md:text-2xl font-medium text-background italic">"Today, your only goal is to drink one extra glass of water."</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 3 */}
                    <section className="reveal relative border-t border-dark/10 pt-20">
                        <div className="absolute -left-6 md:-left-12 top-20 h-[calc(100%-5rem)] w-[2px] bg-primary/20"></div>
                        <h2 className="font-sans font-bold text-3xl md:text-4xl mb-8 text-dark flex items-center">
                            <span className="text-accent font-mono text-2xl mr-4">03.</span> The Journey of Connection: Building Support
                        </h2>

                        <div className="grid md:grid-cols-2 gap-12 text-lg text-dark/80">
                            <div>
                                <h3 className="font-sans font-bold text-2xl text-dark mb-4">The Importance of Relationship</h3>
                                <p className="leading-relaxed">
                                    A powerful transformation is built on trust and a <strong className="text-dark">supportive, empathetic relationship.</strong> We provide a partner in growth who listens actively and seeks to truly understand your experience.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-sans font-bold text-2xl text-dark mb-4">Empowering Autonomy</h3>
                                <p className="leading-relaxed">
                                    Our process is designed to foster your independence and strengthen your decision-making skills. You are the one who drives your journey, promoting a strong sense of <strong className="text-dark">autonomy and control</strong> over your own life.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>

                <div className="reveal mt-32 text-center border-t border-dark/10 pt-20">
                    <Link to="/" className="inline-flex items-center justify-center relative overflow-hidden group bg-accent text-background px-12 py-6 rounded-full font-sans font-bold text-xl shadow-xl hover:shadow-2xl hover:scale-[1.03] transition-all duration-300">
                        <span className="relative z-10">Return to main page</span>
                    </Link>
                </div>
            </main>
        </div>
    );
}
