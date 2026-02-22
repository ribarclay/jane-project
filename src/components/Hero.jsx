import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';

export default function Hero() {
    const containerRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.fromTo(
                '.hero-reveal',
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    stagger: 0.15,
                    ease: 'power3.out',
                    delay: 0.2
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    // Using Unsplash image matching requested wellness picture
    const bgImage = "https://images.unsplash.com/photo-1484627147104-f5197bcd6651?q=80&w=2940&auto=format&fit=crop";

    return (
        <section
            ref={containerRef}
            className="relative w-full h-[100dvh] bg-background flex flex-col justify-end overflow-hidden"
        >
            {/* Background Image */}
            <div
                className="absolute inset-0 w-full h-full object-cover scale-105"
                style={{
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />

            {/* Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-20 md:pb-32 lg:pb-40">
                <div className="max-w-3xl">
                    <h1 className="flex flex-col mb-8 text-dark">
                        <span className="hero-reveal font-sans font-bold text-3xl md:text-5xl lg:text-6xl tracking-tight mb-2">
                            Longevity is the
                        </span>
                        <span className="hero-reveal font-drama italic text-7xl md:text-8xl lg:text-[9rem] leading-none text-accent pr-4">
                            Blueprint.
                        </span>
                    </h1>

                    <p className="hero-reveal font-sans text-lg md:text-xl text-dark/90 max-w-xl mb-10 leading-relaxed">
                        Helping women over 50 achieve sustainable body transformations through strength training and smart nutrition, without extreme dieting.
                    </p>

                    <div className="hero-reveal">
                        <Link to="/transformation" className="inline-block relative overflow-hidden group bg-accent text-dark px-8 py-4 rounded-[2rem] font-sans font-semibold text-lg hover:scale-[1.03] transition-transform duration-300 cubic-bezier(0.25, 0.46, 0.45, 0.94)">
                            <span className="relative z-10 group-hover:text-background transition-colors duration-300 delay-75">Start Your Transformation</span>
                            <span className="absolute inset-0 bg-background translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></span>
                            <span className="absolute inset-0 bg-primary translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 delay-75 ease-in-out"></span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
