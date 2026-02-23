import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Philosophy() {
    const sectionRef = useRef(null);
    const textRef = useRef(null);

    // Dark moody forest/organic texture for the dark manifesto section
    const bgImage = "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=2940&auto=format&fit=crop";

    useEffect(() => {
        let ctx = gsap.context(() => {
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
        <section id="manifesto" ref={sectionRef} className="relative w-full py-40 md:py-56 bg-dark overflow-hidden flex items-center justify-center">
            {/* Parallax Background */}
            <div
                className="absolute inset-0 w-full h-full opacity-15"
                style={{
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed',
                }}
            />

            {/* Content */}
            <div ref={textRef} className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                <p className="phil-text font-sans text-background/50 text-lg md:text-2xl font-semibold tracking-wide mb-8">
                    Most fitness plans focus on: <span className="text-background/80 text-xl md:text-3xl">restrictive diets.</span>
                </p>
                <p className="phil-text font-sans font-bold text-background text-4xl md:text-6xl lg:text-7xl leading-tight">
                    We focus on:{' '}
                    <span className="font-drama italic text-accent text-5xl md:text-7xl lg:text-[6rem] leading-none block mt-2">
                        mindful autonomy.
                    </span>
                </p>
            </div>
        </section>
    );
}

