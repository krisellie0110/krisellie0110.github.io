# Project: The Eternal Wedding Website (Jan 2026)
# Role: Senior Creative Developer & UI/UX Specialist

## 1. Vision & Vibe
- **Aesthetic:** "Modern Editorial Luxury." High-end magazine feel. 
- **Core Mood:** Sophisticated, warm, and intentional. Avoid "cheap" wedding templates.
- **Palette (2026 Trends):** - Primary: Mocha Mousse (#A38A75) - Pantone 2026.
  - Secondary: Cloud Dancer (#F0EEE9) - Soft off-white.
  - Accent: Deep Charcoal (#2D2D2D) for high-contrast typography.
- **Typography:**
  - Headings: Playfair Display (Serif) - Elegant and timeless.
  - Body: Inter or Montserrat (Sans-serif) - Clean and readable.

## 2. Tech Stack & Standards
- **Framework:** Next.js 15 (App Router) + TypeScript.
- **Styling:** Tailwind CSS (Focus on custom spacing and typography utility classes).
- **Animations:** Framer Motion (Required for all section transitions).
- **Responsiveness:** Mobile-first design. Desktop should feel like a widescreen cinematic experience.
- **Accessibility:** WCAG 2.1 compliant. Every image must have descriptive alt text.

## 3. Project Structure & Components
- **Hero Section:** Full-screen high-res image with a sophisticated fade-in text overlay.
- **The Story:** A vertical timeline using Framer Motion scroll-reveal effects.
- **Event Details:** - Location: Interactive Map (Google Maps MCP).
  - Time: A customized countdown timer in serif font.
- **RSVP Portal:** High-end glassmorphism form. Connect to Google Sheets via MCP for live guest tracking.
- **Gallery:** Masonry layout with a "lightbox" zoom effect.

## 4. Coding Instructions for Gemini
- **Strict Typing:** Always use TypeScript interfaces. No `any`.
- **Component Pattern:** Use Atomic Design (Small, reusable components).
- **Vibe Coding Protocol:** Before writing code, describe the visual "why" behind the design choice.
- **Refinement:** If I say "Make it more elegant," prioritize white space, increase letter-spacing on headings, and slow down animation durations.