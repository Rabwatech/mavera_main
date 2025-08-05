# Mavera - Wedding Halls Website

A modern, responsive website for Mavera wedding halls built with Next.js, TypeScript, and Tailwind CSS.

## 🎉 Features

- **Modern Design**: Beautiful, responsive design with modern UI/UX
- **Interactive 3D Models**: Three.js integration for immersive hall previews
- **Multiple Halls**: Dedicated pages for different wedding halls
- **Booking System**: Interactive booking and reservation system
- **Gallery**: Photo gallery showcasing events and venues
- **Testimonials**: Customer reviews and testimonials
- **Mobile Responsive**: Optimized for all device sizes

## 🏗️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **3D Graphics**: Three.js
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── about/             # About page
│   ├── booking/           # Booking page
│   ├── gallery/           # Gallery page
│   ├── halls/             # Hall pages
│   │   ├── flower-hall/
│   │   ├── golden-hall/
│   │   └── grand-ballroom/
│   ├── services/          # Services page
│   ├── testimonials/      # Testimonials page
│   └── layout.tsx         # Root layout
├── components/            # Reusable components
│   ├── home/             # Home page specific components
│   ├── Navbar.tsx        # Navigation component
│   ├── Footer.tsx        # Footer component
│   ├── Hero.tsx          # Hero section
│   ├── Gallery.tsx       # Gallery component
│   ├── Testimonials.tsx  # Testimonials component
│   └── ThreeDModel.tsx   # 3D model component
└── index.css             # Global styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd mavera_main-main
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📱 Pages

- **Home**: Landing page with hero section and overview
- **About**: Company information and story
- **Halls**: 
  - Flower Hall
  - Golden Hall  
  - Grand Ballroom
- **Services**: Available services and packages
- **Gallery**: Photo gallery of events
- **Booking**: Reservation system
- **Testimonials**: Customer reviews
- **Privacy/Terms**: Legal pages

## 🎨 Customization

### Styling
The project uses Tailwind CSS for styling. You can customize the design by modifying:
- `tailwind.config.js` - Tailwind configuration
- `src/index.css` - Global styles
- Component-specific styles in each component

### Content
Update content by editing the respective page components in `src/app/` directory.

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
The project can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform

## 📄 License

This project is private and proprietary.

## 🤝 Contributing

This is a private project. Please contact the development team for any contributions or modifications.

## 📞 Support

For support and inquiries, please contact the development team. 