# JaneFitLife50 — Website Documentation

A premium wellness and longevity website for **Jane Barclay** (`@janefitlife50`), a Certified Fitness & Nutrition Coach (58) who helps women over 50 get strong and lean without extreme dieting or endless cardio.

## Tech Stack

| Tool | Purpose |
|------|---------|
| [React 19](https://react.dev) | UI framework |
| [Vite 7](https://vitejs.dev) | Dev server & bundler |
| [Tailwind CSS 3](https://tailwindcss.com) | Utility-first styling |
| [GSAP + ScrollTrigger](https://gsap.com) | Animations & scroll effects |
| [React Router DOM 7](https://reactrouter.com) | Client-side routing |
| [Lucide React](https://lucide.dev) | Icons |
| [FormSubmit](https://formsubmit.co) | Serverless form email delivery |

---

## Design System

### Colour Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `background` | `#FDFBF7` | Alabaster/Pearl — page backgrounds |
| `surface` | `#F3EFE6` | Oatmeal — cards, inputs, sections |
| `primary` | `#2A3C24` | Deep Olive/Forest Green — headings, badges, CTAs |
| `accent` | `#C18C5D` | Warm Terracotta/Caramel — highlights, buttons, step numbers |
| `dark` | `#2C2B29` | Deep Stone Charcoal — body text |

### Typography

| Family | Usage |
|--------|-------|
| **Plus Jakarta Sans** / Outfit | Primary UI font (`font-sans`) |
| **Cormorant Garamond** | Italic drama headings (`font-drama`) |
| **IBM Plex Mono** | Labels, tags, step numbers (`font-mono`) |

---

## Pages & Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | `Home.jsx` | Full landing page — all sections stacked |
| `/about` | `About.jsx` | Jane's personal About Me page |
| `/transformation` | `Transformation.jsx` | Wellness journey deep-dive content page |
| `/survey` | `Survey.jsx` | Lead capture form — sends to `jane.barclay10@gmail.com` |

---

## Project Structure

```
src/
├── App.jsx                  # Router setup (BrowserRouter)
├── main.jsx                 # React entry point
├── index.css                # Tailwind directives + noise overlay
├── App.css                  # Minimal global styles
│
├── pages/
│   ├── Home.jsx             # Landing page wrapper
│   ├── About.jsx            # About Me page (Jane's profile)
│   ├── Transformation.jsx   # Wellness journey content page
│   └── Survey.jsx           # Lead capture form (FormSubmit)
│
└── components/
    ├── Navbar.jsx            # Fixed floating pill navbar
    ├── Hero.jsx              # Full-screen hero with GSAP entrance animation
    ├── Features.jsx          # 3 interactive animated feature cards
    ├── Philosophy.jsx        # Manifesto section with parallax text
    ├── Protocol.jsx          # 3-step scroll-pinned stacked card reveal
    ├── Pricing.jsx           # 3-tier pricing grid
    └── Footer.jsx            # Footer with navigation, socials & legal links
```

---

## Key Features

### Navbar
- Fixed, floating pill-shaped nav that becomes frosted glass on scroll
- Logo (`JaneFitLife50`) links to `/about`
- `Start Transformation` button links to `/survey`

### Hero Section
- Full-viewport background image with a gradient overlay
- GSAP stagger entrance animation on load
- `Start Your Transformation` CTA links to `/transformation`

### Features Section (`#features`)
Three interactive animated cards:
1. **ShufflerCard** — auto-cycling stacked nutrition principle cards
2. **TypewriterCard** — animated typewriter showing mindful balance tips
3. **SchedulerCard** — GSAP-driven animated cursor demo

### Protocol Section (`#protocol`)
- Scroll-pinned full-screen card stack with 3 slides
- Each slide has a text column and an animated SVG visual

### Philosophy / Manifesto (`#manifesto`)
- Full-bleed parallax background image
- Large typography with GSAP scroll-triggered entrance

### Survey Form (`/survey`)
- Fields: Full Name, Email, Phone, Preferred time of day, Goals
- Submitted via [FormSubmit](https://formsubmit.co) to `jane.barclay10@gmail.com`
- **First submission activates the address** — check inbox for FormSubmit's activation email
- After submit, user is redirected back to `/survey?success=true` and sees a success screen

---

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The dev server runs at `http://localhost:5173`.

---

## Deployment

The site is deployed via **[Vercel](https://vercel.com)** connected to the GitHub repository.

- **Live URL:** https://jane-project123.vercel.app
- **GitHub:** https://github.com/ribarclay/jane-project
- Every `git push` to `main` triggers an automatic Vercel redeploy.

---

## Social Links

| Platform | URL |
|----------|-----|
| Instagram | [@janefitlife50](https://www.instagram.com/janefitlife50/) |
| Facebook | [Jane Barclay](https://www.facebook.com/jane.barclay.10) |
