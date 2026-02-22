import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

export default function Survey() {
    const containerRef = useRef(null);
    const [submitted, setSubmitted] = useState(false);

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

    useEffect(() => {
        // Check for FormSubmit success redirect
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get('success') === 'true') {
            setSubmitted(true);
            // Clean up the URL
            window.history.replaceState({}, document.title, window.location.pathname);
        }
    }, []);

    return (
        <div ref={containerRef} className="min-h-screen bg-surface flex flex-col items-center justify-center p-6 relative">
            <nav className="absolute top-0 left-0 w-full p-6 md:px-12 z-50">
                <Link to="/" className="inline-flex items-center space-x-2 text-dark hover:text-accent transition-colors">
                    <ArrowLeft className="w-5 h-5" />
                    <span className="font-sans text-sm tracking-widest uppercase font-semibold">Back to Home</span>
                </Link>
            </nav>

            <div className="w-full max-w-2xl bg-background rounded-[3rem] shadow-xl p-8 md:p-14 reveal border border-dark/5 my-20">
                {submitted ? (
                    <div className="text-center py-16">
                        <CheckCircle2 className="w-20 h-20 text-primary mx-auto mb-6" />
                        <h2 className="font-sans font-bold text-3xl md:text-5xl text-dark mb-4">You're on your way!</h2>
                        <p className="text-dark/70 text-lg mb-10 max-w-md mx-auto">
                            Thank you for sharing your goals. We'll be in touch with you shortly at your preferred time.
                        </p>
                        <Link to="/" className="inline-block bg-primary text-background px-8 py-4 rounded-full font-bold hover:bg-primary/90 transition-colors">
                            Return Home
                        </Link>
                    </div>
                ) : (
                    <>
                        <div className="text-center mb-10">
                            <span className="font-mono text-accent tracking-widest uppercase text-sm font-semibold block mb-2">Step 1</span>
                            <h1 className="font-sans font-bold text-3xl md:text-4xl text-dark mb-4">Start Your Transformation</h1>
                            <p className="text-dark/70 text-lg">Tell us a little about yourself, and we'll reach out to schedule a consultation.</p>
                        </div>

                        <form action="https://formsubmit.co/jane.barclay10@gmail.com" method="POST" className="space-y-6">
                            {/* FormSubmit Configuration */}
                            <input type="hidden" name="_subject" value="New JaneFitLife50 Transformation Inquiry!" />
                            <input type="hidden" name="_captcha" value="false" />
                            <input type="hidden" name="_next" value={window.location.origin + "/survey?success=true"} />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-bold text-dark mb-2">Full Name</label>
                                    <input required type="text" name="name" id="name" className="w-full bg-surface border border-dark/10 rounded-xl px-4 py-3 text-dark focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" placeholder="Jane Doe" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-bold text-dark mb-2">Email Address</label>
                                    <input required type="email" name="email" id="email" className="w-full bg-surface border border-dark/10 rounded-xl px-4 py-3 text-dark focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" placeholder="jane@example.com" />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-bold text-dark mb-2">Phone Number</label>
                                <input required type="tel" name="phone" id="phone" className="w-full bg-surface border border-dark/10 rounded-xl px-4 py-3 text-dark focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" placeholder="(555) 123-4567" />
                            </div>

                            <div>
                                <label htmlFor="time" className="block text-sm font-bold text-dark mb-2">Preferred time of day to speak</label>
                                <select required name="preferred_time" id="time" className="w-full bg-surface border border-dark/10 rounded-xl px-4 py-3 text-dark focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none cursor-pointer">
                                    <option value="" disabled selected>Select a time...</option>
                                    <option value="morning">Morning (8am - 12pm)</option>
                                    <option value="afternoon">Afternoon (12pm - 5pm)</option>
                                    <option value="evening">Evening (5pm - 8pm)</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="goals" className="block text-sm font-bold text-dark mb-2">What are the main goals you want to achieve?</label>
                                <textarea required name="goals" id="goals" rows="4" className="w-full bg-surface border border-dark/10 rounded-xl px-4 py-3 text-dark focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none" placeholder="e.g. I want to build strength, improve my mobility, and feel more energetic throughout the day without strict dieting..."></textarea>
                            </div>

                            <button type="submit" className="w-full bg-accent text-background py-4 rounded-full font-bold text-lg hover:bg-accent/90 transition-colors shadow-lg hover:shadow-xl mt-4">
                                Submit Details
                            </button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
}
