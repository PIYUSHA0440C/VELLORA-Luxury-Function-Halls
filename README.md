# VELLORA - Luxury Function Halls

<div align="center">
  <a href="#">
    <img src="https://img.shields.io/badge/🔴_LIVE_DEMO-Click_Here-FF0055?style=for-the-badge" alt="Live Demo" />
  </a>
  <br/>
  <p><strong>Live Link:</strong> <a href="#">https://your-domain.com</a></p>
  <br/>
  <img src="https://skillicons.dev/icons?i=react,vite,tailwind,js,html,css&theme=dark" alt="Tech Stack Icons" />
</div>

## Project Description

VELLORA - Luxury Function Halls is a modern, performance-optimized frontend application designed to serve as the digital platform for a luxury event space business. The platform provides a highly interactive and responsive user interface tailored for showcasing function halls, amenities, and hospitality services. 

It was engineered from the ground up to demonstrate modern web development practices, focusing heavily on scalable responsive grid systems, reusable component architecture, and fluid user interactions.

## Key Features

- **Responsive Grid Layouts**: Engineered with CSS Grid and Tailwind utility classes to ensure flawless layout scaling from mobile viewports up to high-resolution desktop displays without layout shifts.
- **Interactive UI/UX**: Implemented custom scroll reveals, staggered entry animations, and dynamic layout morphing using physics-based animation libraries to elevate the user experience.
- **Component-Driven Architecture**: The codebase is strictly modular, breaking down complex interfaces into reusable, maintainable React functional components (e.g., UI elements, layout wrappers).
- **Client-Side Routing**: Integrated seamless, single-page navigation to eliminate hard page reloads and ensure instant transitions across different views.
- **Mobile-First Design**: Designed natively for mobile screens first, ensuring optimal touch interactions, accessible navigation, and high performance on all devices.

## Tech Stack

| Classification | Technology | Implementation Details |
| :--- | :--- | :--- |
| **Core Framework** | [React.js](https://react.dev/) | Functional components, React Hooks (`useState`, `useEffect`). |
| **Build Pipeline** | [Vite](https://vitejs.dev/) | Ultra-fast HMR (Hot Module Replacement) and optimized production bundling. |
| **Styling Engine** | [Tailwind CSS](https://tailwindcss.com/) | Utility-first CSS, bespoke design tokens, and highly specific media queries. |
| **Animation API** | [Framer Motion](https://www.framer.com/motion/) | Orchestration of physics-based transitions and scroll-linked layout variants. |
| **Routing** | [React Router](https://reactrouter.com/) | Client-side routing logic ensuring instant, seamless page transitions. |

## System Architecture

The project structure enforces a strict separation of concerns between global layouts, stateful sections, and stateless UI components:

```text
src/
├── App.css
├── App.jsx                 # Root layout wrapper and routing config
├── index.css               # Tailwind directives and bespoke color variables
├── main.jsx                # Application entry point
├── assets/                 # Static media payloads and vector graphics
│   ├── hero.png
│   ├── react.svg
│   └── vite.svg
├── components/      
│   ├── layout/             # Persistent architectural elements
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   ├── OverlayMenu.jsx
│   │   ├── PageTransition.jsx
│   │   └── SmoothScroll.jsx
│   ├── sections/           # Stateful, modular page blocks
│   │   ├── About/
│   │   ├── Hero/
│   │   │   └── Hero.jsx
│   │   └── Venues/
│   │       ├── VenueCard.jsx
│   │       └── VenuesSticky.jsx
│   └── ui/                 # Reusable, stateless micro-components
│       ├── AnimatedText.jsx
│       ├── Badge.jsx
│       ├── HoverImageLinks.jsx
│       ├── Magnetic.jsx
│       ├── MagneticButton.jsx
│       ├── PremiumImageHover.jsx
│       └── RevealText.jsx
├── data/                   # Local JSON data structures
│   └── venues.js           # Venue specifications and capacities
├── lib/                    # Global utility functions
│   └── utils.js
└── pages/                  # Top-level route assemblies
    ├── AboutPage.jsx
    ├── ContactPage.jsx
    ├── HomePage.jsx
    ├── VenueDetail.jsx
    └── VenuesPage.jsx
```

## Local Setup

Ensure Node.js is installed on your system before proceeding.

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development environment**
   ```bash
   npm run dev
   ```
   The application will boot locally at `http://localhost:5173`.

4. **Build for production**
   ```bash
   npm run build
   ```
   The optimized, minified static assets will be output to the `dist/` directory.
