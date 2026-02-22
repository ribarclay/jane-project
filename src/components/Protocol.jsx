import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const protocols = [
    {
        step: "01",
        title: "Mindful Baseline",
        desc: "We assess your current relationship with food, movement, and stress to establish a mindful starting point.",
        renderVisual: () => (
            <svg viewBox="0 0 100 100" className="w-full h-full text-primary opacity-60">
                <g className="animate-[spin_20s_linear_infinite] origin-center">
                    {[...Array(8)].map((_, i) => (
                        <circle
                            key={i}
                            cx="50"
                            cy="50"
                            r={20 + i * 5}
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="0.5"
                            strokeDasharray={`${4 + i} ${6 + i}`}
                            className="origin-center"
                            style={{ transform: `rotate(${i * 15}deg)` }}
                        />
                    ))}
                    <circle cx="50" cy="50" r="10" fill="currentColor" opacity="0.3" />
                </g>
            </svg>
        ),
    },
    {
        step: "02",
        title: "Accessible Movement for Life",
        desc: "Joyful, inclusive movement designed to support longevity, bone density, and functional strength.",
        renderVisual: () => (
            <div className="relative w-full h-full flex items-center justify-center p-8">
                <div className="grid grid-cols-6 gap-2 w-full h-full opacity-40">
                    {[...Array(36)].map((_, i) => (
                        <div key={i} className="w-full h-full bg-primary/20 rounded-sm"></div>
                    ))}
                </div>
                <div className="absolute top-0 bottom-0 w-full left-0 origin-left border-l-2 border-accent shadow-[0_0_15px_rgba(204,88,51,0.5)] animate-[scan_3s_ease-in-out_infinite_alternate]" style={{
                    animationName: 'scan'
                }}>
                    <style>{`
            @keyframes scan {
              0% { transform: translateX(0); }
              100% { transform: translateX(100%); }
            }
          `}</style>
                </div>
            </div>
        ),
    },
    {
        step: "03",
        title: "Lifelong Nourishment",
        desc: "Mastering Mediterranean lifestyle principles and intuitive nutrition for long-term health.",
        renderVisual: () => (
            <svg viewBox="0 0 100 50" className="w-full h-full text-accent opacity-80">
                <path
                    d="M0 25 L10 25 L15 10 L25 40 L35 15 L45 35 L50 25 L100 25"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="200"
                    strokeDashoffset="200"
                    className="waveform-path"
                />
                <style>{`
          .waveform-path {
            animation: pulse-wave 2s ease-in-out infinite;
          }
          @keyframes pulse-wave {
            0% { stroke-dashoffset: 200; opacity: 0; }
            50% { opacity: 1; }
            100% { stroke-dashoffset: 0; opacity: 0; }
          }
        `}</style>
            </svg>
        )
    }
];

export default function Protocol() {
    const containerRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Pinning the whole container
            ScrollTrigger.create({
                trigger: containerRef.current,
                start: 'top top',
                end: `+=${protocols.length * 100}%`,
                pin: true,
                // markers: true,
            });

            // Animate cards as user scrolls
            cardsRef.current.forEach((card, index) => {
                if (index === 0) return; // First card is natively visible

                const prevCard = cardsRef.current[index - 1];

                gsap.to(card, {
                    yPercent: -100,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: `top+=${index * 100}% top`,
                        end: `top+=${(index + 1) * 100}% top`,
                        scrub: true,
                    }
                });

                // Dim and shrink previous card
                gsap.to(prevCard, {
                    scale: 0.9,
                    opacity: 0.3,
                    filter: 'blur(10px)',
                    ease: 'none',
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: `top+=${index * 100}% top`,
                        end: `top+=${(index + 1) * 100}% top`,
                        scrub: true,
                    }
                });
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="protocol" className="bg-surface text-dark overflow-hidden">
            <div ref={containerRef} className="relative w-full h-screen">
                {protocols.map((protocol, i) => (
                    <div
                        key={i}
                        ref={el => cardsRef.current[i] = el}
                        className="absolute top-0 left-0 w-full h-screen flex flex-col md:flex-row items-center justify-center p-6 md:p-20 will-change-transform bg-surface"
                        style={{ zIndex: i, top: i === 0 ? '0' : '100%' }} // stack below view initially
                    >
                        {/* Split layout: Text left, Visual right */}
                        <div className="w-full md:w-1/2 max-w-xl flex flex-col items-start pr-0 md:pr-12 mb-12 md:mb-0">
                            <span className="font-mono text-xl md:text-3xl text-accent mb-6 select-none">{protocol.step}</span>
                            <h2 className="font-sans font-bold text-4xl md:text-6xl mb-6 tracking-tight text-dark">
                                {protocol.title}
                            </h2>
                            <p className="font-sans text-lg md:text-xl text-dark/80 leading-relaxed">
                                {protocol.desc}
                            </p>
                        </div>

                        <div className="w-full md:w-1/2 h-64 md:h-[500px] flex items-center justify-center bg-background/5 rounded-[3rem] border border-background/10 relative overflow-hidden">
                            <div className="absolute inset-4">
                                {protocol.renderVisual()}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
