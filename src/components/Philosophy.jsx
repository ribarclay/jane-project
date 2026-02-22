import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Philosophy() {
    const sectionRef = useRef(null);
    const textRef = useRef(null);

    // Clean, dark organic texture
    const bgImage = "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2946&auto=format&fit=crop";

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Parallax text
            gsap.from('.phil-text', {
                y: 50,
                opacity: 0,
                duration: 1.2,
                stagger: 0.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: textRef.current,
                    start: 'top 80%',
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="manifesto" ref={sectionRef} className="relative w-full py-40 md:py-56 bg-surface overflow-hidden flex items-center justify-center">
            {/* Parallax Background */}
            <div
                className="absolute inset-0 w-full h-full opacity-20"
                style={{
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed', // Simple parallax via CSS, reliable
                }}
            />

            {/* Content */}
            <div ref={textRef} className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                <p className="phil-text font-sans text-dark/80 text-lg md:text-2xl font-semibold tracking-wide mb-8">
                    Most fitness plans focus on: <span className="text-dark text-xl md:text-3xl">restrictive diets.</span>
                </p>
                <p className="phil-text font-sans font-bold text-dark text-4xl md:text-6xl lg:text-7xl leading-tight">
                    We focus on:{' '}
                    <span className="font-drama italic text-primary text-5xl md:text-7xl lg:text-[6rem] leading-none block mt-2">
                        mindful autonomy.
                    </span>
                </p>
            </div>
        </section>
    );
}
