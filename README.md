# Nexium

A modern, responsive web application built with Next.js showcasing premium web development services. This project demonstrates advanced React patterns, smooth animations, and a custom carousel implementation.

## About

Nexium is a professional service showcase website that highlights custom web development, WordPress solutions, and Shopify e-commerce services. The project features a clean, modern design with smooth animations and an interactive service carousel.

## Features

- **Responsive Design** - Fully responsive across all devices and screen sizes
- **Animated Service Carousel** - Custom-built carousel with smooth slide animations and scale effects
- **Modern UI/UX** - Clean interface with attention to detail and user experience
- **Type-Safe** - Built with TypeScript for enhanced code quality and developer experience
- **Performance Optimized** - Fast loading times and optimized assets
- **SEO Friendly** - Proper meta tags and semantic HTML structure

## Tech Stack

### Frontend Framework
- **Next.js 16.1.4** - React framework for production
- **React 19.2.3** - JavaScript library for building user interfaces
- **TypeScript 5** - Static type checking

### Styling
- **Tailwind CSS 4** - Utility-first CSS framework
- **PostCSS** - CSS transformations

### Components & Libraries
- **Embla Carousel React 8.6.0** - Lightweight carousel library for smooth animations

### Development Tools
- **ESLint** - Code linting and quality assurance
- **Next.js ESLint Config** - Next.js specific linting rules

## Pages

- **Home** (`/`) - Landing page with hero section and overview
- **About Us** (`/about-us`) - Company information and team details
- **Our Services** (`/our-services`) - Interactive service carousel showcasing offerings
- **Contact Us** (`/contact-us`) - Contact form and company information

## Getting Started

### Prerequisites

Make sure you have the following installed on your system:
- Node.js 18.x or higher
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/nexium.git
cd nexium
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

### Development

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

The page will auto-reload when you make changes to the code.

### Build

Create an optimized production build:

```bash
npm run build
# or
yarn build
# or
pnpm build
```

### Production

Start the production server:

```bash
npm run start
# or
yarn start
# or
pnpm start
```

## Project Structure

```
nexium/
├── app/                      # Next.js app directory
│   ├── about-us/            # About us page
│   ├── contact-us/          # Contact page
│   ├── our-services/        # Services page with carousel
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles
├── components/              # React components
│   ├── Header.tsx          # Header component
│   ├── Footer.tsx          # Footer component
│   ├── Navbar.tsx          # Navigation bar
│   ├── HeroSection.tsx     # Hero section component
│   ├── WhatWeBuildSection.tsx    # Animated services carousel
│   ├── ServicesCarousel.tsx      # Services carousel
│   ├── TeamCTASection.tsx        # Team CTA section
│   ├── ContactFormSection.tsx    # Contact form
│   └── ClientLogosSection.tsx    # Client logos display
├── public/                  # Static files
│   └── images/             # Image assets
├── .claude/                # Claude Code settings
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
├── tailwind.config.ts      # Tailwind CSS configuration
└── next.config.ts          # Next.js configuration
```

## Key Components

### WhatWeBuildSection
Custom-built service carousel featuring:
- Three-card layout with center focus
- Smooth slide animations
- Scale and opacity transitions
- Responsive navigation arrows
- Dynamic content rendering

## Customization

### Modifying Services

Edit the services data in `app/our-services/page.tsx`:

```typescript
const servicesData = [
  {
    title: "Your Service",
    description: "Service description",
    items: ["Feature 1", "Feature 2", "Feature 3"],
  },
  // Add more services...
];
```

### Styling

The project uses Tailwind CSS for styling. Modify styles directly in component files or update the Tailwind configuration in `tailwind.config.ts`.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Optimized images with Next.js Image component
- Code splitting for faster page loads
- Minimized CSS and JavaScript bundles
- Server-side rendering for improved SEO

## License

This project is open source and available under the [MIT License](LICENSE).

## Author

**Faraz**

- Portfolio: [Your Portfolio URL]
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)

## Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Embla Carousel for the carousel functionality

---

Made with ❤️ using Next.js and TypeScript
