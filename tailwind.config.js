/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#2A3C24',   // Deep Olive / Forest Green
                accent: '#C18C5D',    // Warm Terracotta / Caramel
                background: '#FDFBF7', // Alabaster/Pearl
                surface: '#F3EFE6',   // Oatmeal
                dark: '#2C2B29',      // Deep Stone/Charcoal
            },
            fontFamily: {
                sans: ['"Plus Jakarta Sans"', 'Outfit', 'sans-serif'],
                drama: ['"Cormorant Garamond"', 'serif'],
                mono: ['"IBM Plex Mono"', 'monospace'],
            },
            borderRadius: {
                '2xl': '2rem',
                '3xl': '3rem',
            }
        },
    },
    plugins: [],
}
