import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // If we scroll past 50px, change navbar state
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
            <nav
                className={`pointer-events-auto flex items-center justify-between px-6 py-3 rounded-[2rem] transition-all duration-500 ease-out border ${isScrolled
                    ? 'bg-background/80 backdrop-blur-xl text-primary border-primary/10 shadow-lg'
                    : 'bg-transparent text-dark border-transparent'
                    }`}
                style={{ width: '100%', maxWidth: '800px' }}
            >
                <Link to="/about" className="font-sans font-bold text-lg tracking-tight hover:text-accent transition-colors">
                    JaneFitLife50
                </Link>
                <div className="hidden md:flex items-center space-x-8 font-sans text-sm font-semibold tracking-wide">
                    <a href="#features" className="hover:-translate-y-[1px] transition-transform duration-300">Approach</a>
                    <a href="#manifesto" className="hover:-translate-y-[1px] transition-transform duration-300">Manifesto</a>
                    <a href="#protocol" className="hover:-translate-y-[1px] transition-transform duration-300">Protocol</a>
                    <a href="#pricing" className="hover:-translate-y-[1px] transition-transform duration-300 text-accent">Pricing</a>
                </div>
                <Link to="/survey" className="relative overflow-hidden group bg-accent text-background px-5 py-2 rounded-full font-sans font-semibold text-sm transition-transform duration-300 hover:scale-[1.03] shadow-md pointer-events-auto">
                    <span className="relative z-10">Start Transformation</span>
                    <span className="absolute inset-0 bg-primary translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></span>
                </Link>
            </nav>
        </div>
    );
}
