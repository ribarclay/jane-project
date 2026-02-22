import React from 'react';
import { Check } from 'lucide-react';

export default function Pricing() {
    const tiers = [
        {
            name: 'Mindful Movement & Meal Planning',
            desc: 'Self-guided lifestyle blueprint',
            price: '$49',
            period: 'one-time',
            features: ['Metabolic starter guide', '4-week workout outline', 'Nutrition basics', 'Community access'],
            pop: false,
        },
        {
            name: 'Evidence-Based Nutrition Reset',
            desc: 'The complete membership',
            price: '$99',
            period: '/ month',
            features: ['Full application access', 'Custom progressive workouts', 'Macro adjustments', 'Weekly Q&A calls', 'Priority support'],
            pop: true,
        },
        {
            name: 'Nourishing Hormone Balance',
            desc: 'Direct access & guidance',
            price: '$299',
            period: '/ month',
            features: ['Everything in Transformation', 'Weekly 1:1 video review', 'Daily chat access', 'Custom form analysis'],
            pop: false,
        }
    ];

    return (
        <section id="pricing" className="py-32 px-6 bg-background">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="font-sans font-bold text-4xl md:text-5xl text-dark mb-4">Start Your Journey</h2>
                    <p className="font-sans text-lg text-dark/90 max-w-2xl mx-auto">
                        Choose the level of guidance that fits your goals and lifestyle.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    {tiers.map((tier, i) => (
                        <div
                            key={i}
                            className={`rounded-[2rem] p-8 md:p-10 border transition-transform duration-300 hover:-translate-y-2 ${tier.pop
                                ? 'bg-primary text-background border-transparent ring-4 ring-primary/20 scale-100 md:scale-105 shadow-2xl z-10'
                                : 'bg-background text-dark border-primary/20 shadow-lg'
                                }`}
                        >
                            <h3 className="font-sans font-bold text-2xl mb-2">{tier.name}</h3>
                            <p className={`font-sans text-sm mb-6 ${tier.pop ? 'text-background/90' : 'text-dark/80'}`}>{tier.desc}</p>
                            <div className="mb-8">
                                <span className="font-sans font-bold text-5xl">{tier.price}</span>
                                <span className={`font-sans text-lg ${tier.pop ? 'text-background/90' : 'text-dark/80'}`}>{tier.period}</span>
                            </div>

                            <ul className="space-y-4 mb-10">
                                {tier.features.map((feat, j) => (
                                    <li key={j} className="flex items-start">
                                        <Check className={`w-5 h-5 mr-3 shrink-0 ${tier.pop ? 'text-accent' : 'text-primary'}`} />
                                        <span className="font-sans text-sm font-medium">{feat}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-4 px-6 rounded-full font-sans font-bold text-sm transition-all duration-300 ${tier.pop
                                ? 'bg-accent text-background hover:bg-accent/90 shadow-md'
                                : 'bg-primary/20 text-primary hover:bg-primary hover:text-background'
                                }`}>
                                Select Plan
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
