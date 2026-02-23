# Propsoch Landing Page Redesign

## Overview
This project is a redesigned and performance-optimized version of the Propsoch landing page, created as part of a frontend intern assignment.

The goal was to analyze the existing landing page, identify UX and performance issues, and build an improved version with better Lighthouse scores and cleaner UX.

---

## Part 1: Lighthouse Analysis (Original Site)

- Performance: ~54
- Accessibility: ~71
- Best Practices: ~92
- SEO: ~100

Key issues identified:
- Heavy hero section with video and large assets
- High JavaScript execution time
- Cluttered layout on mobile
- Accessibility issues (contrast, labels, heading order)
- Over-complex navigation for a landing page

---

## Part 2: Improvements Made

- Redesigned the hero section with a clear value proposition
- Removed heavy media to improve Core Web Vitals
- Simplified page structure for better readability and mobile UX
- Used semantic HTML and accessible color contrast
- Optimized images using Next.js `next/image`
- Added trust and benefit sections inspired by the original site
- Implemented a minimal sticky header for brand visibility

### Final Lighthouse Scores (Redesigned Page)

- Performance: 94
- Accessibility: 95
- Best Practices: 100
- SEO: 100

---

## Tech Stack
- Next.js
- TypeScript
- Tailwind CSS

---

## Deployment
The project is deployed using Vercel.