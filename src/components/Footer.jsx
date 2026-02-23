import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-dark text-background/80 pt-20 pb-10 px-6 rounded-t-[4rem] -mx-1 mt-[-2rem] relative z-20">
            <div className="max-w-7xl mx-auto flex flex-col items-center">

                <div className="w-full grid grid-cols-1 md:grid-cols-5 gap-12 mb-20 text-center md:text-left">

                    <div className="md:col-span-2">
                        <h2 className="font-sans font-bold text-3xl text-background tracking-tight mb-4">JaneFitLife50</h2>
                        <p className="font-sans text-sm max-w-sm mx-auto md:mx-0 text-background/60 leading-relaxed">
                            Precision health and sustainable body transformations for women navigating life after 50. Strong, lean, resilient.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-sans font-bold text-background mb-4 text-sm tracking-widest uppercase">Navigation</h4>
                        <ul className="space-y-3 font-sans text-sm">
                            <li><a href="/#features" className="hover:text-primary hover:-translate-y-[1px] transition-all duration-200 inline-block">Approach</a></li>
                            <li><a href="/#manifesto" className="hover:text-primary hover:-translate-y-[1px] transition-all duration-200 inline-block">Manifesto</a></li>
                            <li><a href="/#protocol" className="hover:text-primary hover:-translate-y-[1px] transition-all duration-200 inline-block">Protocol</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-sans font-bold text-background mb-4 text-sm tracking-widest uppercase">Socials</h4>
                        <ul className="space-y-3 font-sans text-sm">
                            <li><a href="https://www.instagram.com/janefitlife50/" target="_blank" rel="noopener noreferrer" className="hover:text-primary hover:-translate-y-[1px] transition-all duration-200 inline-block">Instagram</a></li>
                            <li><a href="https://www.facebook.com/jane.barclay.10" target="_blank" rel="noopener noreferrer" className="hover:text-primary hover:-translate-y-[1px] transition-all duration-200 inline-block">Facebook</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-sans font-bold text-background mb-4 text-sm tracking-widest uppercase">Legal</h4>
                        <ul className="space-y-3 font-sans text-sm">
                            <li><a href="#" className="hover:text-primary hover:-translate-y-[1px] transition-all duration-200 inline-block">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-primary hover:-translate-y-[1px] transition-all duration-200 inline-block">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>

                <div className="w-full border-t border-background/10 pt-10 flex flex-col md:flex-row items-center justify-between">
                    <p className="font-sans text-xs text-background/40 mb-6 md:mb-0">
                        &copy; {new Date().getFullYear()} JaneFitLife50. All rights reserved.
                    </p>

                    <div className="flex items-center space-x-3 bg-background/50 border border-background/10 px-4 py-2 rounded-full">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span className="font-mono text-[10px] text-background/60 tracking-wider">SYSTEM OPERATIONAL</span>
                    </div>
                </div>

            </div>
        </footer>
    );
}
