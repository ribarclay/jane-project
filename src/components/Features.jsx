import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MousePointer2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ShufflerCard = () => {
    const [cards, setCards] = useState([
        { id: 1, text: "Whole Food Focus", color: "bg-surface", border: "border-primary/20", z: 30, scale: 1, y: 0 },
        { id: 2, text: "Mediterranean Principles", color: "bg-primary text-background", border: "border-transparent", z: 20, scale: 0.95, y: -12 },
        { id: 3, text: "Joyful Nourishment", color: "bg-accent text-background", border: "border-transparent", z: 10, scale: 0.9, y: -24 }
    ]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCards(prev => {
                const newArr = [...prev];
                const last = newArr.pop();
                newArr.unshift(last);
                return newArr.map((card, i) => ({
                    ...card,
                    z: 30 - i * 10,
                    scale: 1 - i * 0.05,
                    y: -i * 12
                }));
            });
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-surface rounded-[2rem] border border-primary/10 shadow-xl p-8 h-80 flex flex-col items-center justify-center relative overflow-hidden group">
            <div className="absolute top-6 left-6">
                <h3 className="font-sans font-bold text-xl text-primary mb-1">Evidence-Based Nutrition</h3>
                <p className="font-mono text-xs text-dark/60 uppercase tracking-widest">Sustainable Protocol</p>
            </div>

            <div className="relative w-full max-w-[200px] h-32 mt-12 flex justify-center perspective-[1000px]">
                {cards.map((card) => (
                    <div
                        key={card.id}
                        className={`absolute w-full py-4 px-6 rounded-2xl border flex items-center justify-center shadow-lg transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${card.color} ${card.border}`}
                        style={{
                            zIndex: card.z,
                            transform: `translateY(${card.y}px) scale(${card.scale})`,
                        }}
                    >
                        <span className="font-sans font-semibold text-sm whitespace-nowrap">{card.text}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

const TypewriterCard = () => {
    const [text, setText] = useState('');
    const fullText = "Prioritizing sleep...\nManaging stress...\nHonoring your body...\nBalance achieved.";

    useEffect(() => {
        let i = 0;
        const typing = setInterval(() => {
            setText(fullText.slice(0, i));
            i++;
            if (i > fullText.length) {
                setTimeout(() => { i = 0; }, 2000); // pause before restart
            }
        }, 100);
        return () => clearInterval(typing);
    }, []);

    return (
        <div className="bg-dark rounded-[2rem] border border-primary/20 shadow-xl p-8 h-80 flex flex-col relative overflow-hidden">
            <div className="absolute top-6 left-6 right-6 flex justify-between items-start">
                <div>
                    <h3 className="font-sans font-bold text-xl text-background mb-1">Nourishing Hormone Balance</h3>
                    <p className="font-mono text-xs text-background/50 uppercase tracking-widest">Mindful Integration</p>
                </div>
                <div className="flex items-center space-x-2">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                    </span>
                    <span className="font-mono text-[10px] text-accent uppercase">Live</span>
                </div>
            </div>

            <div className="mt-20 flex-1 font-mono text-sm text-background/80 whitespace-pre-line leading-relaxed">
                {text}<span className="inline-block w-2 h-4 bg-accent ml-1 animate-pulse align-middle"></span>
            </div>
        </div>
    );
};

const SchedulerCard = () => {
    const containerRef = useRef(null);
    const cursorRef = useRef(null);
    const targetRef = useRef(null);
    const btnRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

            // Reset
            tl.set(cursorRef.current, { x: 50, y: 150, opacity: 0 });
            tl.set(targetRef.current, { backgroundColor: 'transparent', scale: 1 });

            // Enter
            tl.to(cursorRef.current, { opacity: 1, duration: 0.5 });

            // Move to target
            tl.to(cursorRef.current, {
                x: 88, // approx center of Wednesday
                y: 40,
                duration: 1,
                ease: 'power2.inOut'
            });

            // Click simulation
            tl.to(cursorRef.current, { scale: 0.8, duration: 0.1 });
            tl.to(targetRef.current, { backgroundColor: '#CC5833', color: '#F2F0E9', scale: 0.95, duration: 0.1 }, "<");
            tl.to(cursorRef.current, { scale: 1, duration: 0.1 });
            tl.to(targetRef.current, { scale: 1, duration: 0.2 }, ">");

            // Move to button
            tl.to(cursorRef.current, {
                x: 140,
                y: 110,
                duration: 0.8,
                ease: 'power2.inOut',
                delay: 0.3
            });

            // Click button
            tl.to(cursorRef.current, { scale: 0.8, duration: 0.1 });
            tl.to(btnRef.current, { scale: 0.95, duration: 0.1 }, "<");
            tl.to(cursorRef.current, { scale: 1, duration: 0.1 });
            tl.to(btnRef.current, { scale: 1, duration: 0.2 }, ">");

            // Fade out
            tl.to(cursorRef.current, { opacity: 0, duration: 0.5, delay: 0.5 });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

    return (
        <div ref={containerRef} className="bg-surface rounded-[2rem] border border-primary/10 shadow-xl p-8 h-80 flex flex-col relative overflow-hidden group">
            <div className="absolute top-6 left-6">
                <h3 className="font-sans font-bold text-xl text-primary mb-1">Accessible Movement</h3>
                <p className="font-mono text-xs text-dark/60 uppercase tracking-widest">For Life</p>
            </div>

            <div className="mt-20 relative w-full h-full flex flex-col items-center">
                <div className="flex w-full justify-between px-2 mb-6">
                    {days.map((d, i) => (
                        <div
                            key={i}
                            ref={i === 3 ? targetRef : null}
                            className={`w-8 h-8 rounded-full flex items-center justify-center font-sans text-sm font-semibold border ${i === 3 ? 'border-accent text-accent' : 'border-dark/10 text-dark/40'}`}
                        >
                            {d}
                        </div>
                    ))}
                </div>

                <button ref={btnRef} className="bg-primary text-background font-sans text-xs px-6 py-2 rounded-full font-semibold">
                    Save Protocol
                </button>

                {/* Animated Cursor */}
                <div ref={cursorRef} className="absolute top-0 left-0 text-dark z-50 pointer-events-none drop-shadow-md">
                    <MousePointer2 size={24} fill="currentColor" />
                </div>
            </div>
        </div>
    );
};

export default function Features() {
    const containerRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from('.feature-card', {
                y: 60,
                opacity: 0,
                duration: 1,
                stagger: 0.15,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 75%',
                }
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="features" ref={containerRef} className="py-32 px-6 bg-background">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="feature-card">
                        <ShufflerCard />
                    </div>
                    <div className="feature-card">
                        <TypewriterCard />
                    </div>
                    <div className="feature-card">
                        <SchedulerCard />
                    </div>
                </div>
            </div>
        </section>
    );
}
