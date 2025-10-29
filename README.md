# AppDost - Premium Website Redesign 🚀

A luxurious, modern, and interactive redesign of the AppDost website featuring 3D elements, premium animations, and exceptional user experience.

## ✨ Features

- **Luxurious Hero Section** - 3D floating elements with Three.js, premium animations with GSAP
- **Interactive Services** - Gamified service cards with smooth hover effects
- **Dynamic About Section** - Animated statistics and compelling value propositions
- **Stunning Portfolio** - 3D project cards with interactive overlays
- **Animated Tech Stack** - Floating technology bubbles with beautiful effects
- **Premium Contact Section** - Elegant form with glassmorphism design
- **Smooth Navigation** - Responsive navbar with smooth scroll (Lenis)
- **Beautiful Footer** - Comprehensive footer with all links and information

## 🛠️ Technologies Used

### Core
- **React 18.3** - UI library
- **Vite 5.4** - Build tool
- **Tailwind CSS 3.4** - Utility-first CSS

### Animations & 3D
- **GSAP 3.12** - Professional-grade animations
- **Framer Motion 11.11** - React animation library
- **Three.js 0.169** - 3D graphics
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Helpers for React Three Fiber
- **@splinetool/react-spline** - 3D design integration
- **Lenis 1.1** - Smooth scrolling

### UI Components
- **shadcn/ui** - Beautiful, accessible components
- **Radix UI** - Unstyled, accessible components
- **Lucide React** - Beautiful icons
- **class-variance-authority** - Component variants
- **clsx & tailwind-merge** - Utility functions

## 📦 Installation

1. **Navigate to the project directory:**
   ```powershell
   cd "c:\Users\KUNAL JAIN\OneDrive\Desktop\Kunal Projects\appdost-redesign"
   ```

2. **Install dependencies:**
   ```powershell
   npm install
   ```

## 🚀 Running the Project

Start the development server:
```powershell
npm run dev
```

The site will be available at `http://localhost:5173`

## 🏗️ Build for Production

Build the project:
```powershell
npm run build
```

Preview the production build:
```powershell
npm run preview
```

## 📱 Deployment

### Netlify Deployment

1. **Install Netlify CLI:**
   ```powershell
   npm install -g netlify-cli
   ```

2. **Build the project:**
   ```powershell
   npm run build
   ```

3. **Deploy:**
   ```powershell
   netlify deploy --prod
   ```

### Vercel Deployment

1. **Install Vercel CLI:**
   ```powershell
   npm install -g vercel
   ```

2. **Deploy:**
   ```powershell
   vercel --prod
   ```

### Manual Deployment

1. Build the project: `npm run build`
2. Upload the `dist` folder to your hosting service
3. Configure your hosting to serve `index.html` for all routes

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme:
```javascript
colors: {
  primary: "hsl(var(--primary))",
  // ... other colors
}
```

### Animations
Adjust GSAP animations in component files:
- `HeroSection.jsx` - Hero animations
- `ServicesSection.jsx` - Service card animations
- And more...

### 3D Elements
Modify 3D shapes in `Scene3D.jsx`:
- Change colors, sizes, positions
- Add more shapes
- Adjust floating animations

## 📂 Project Structure

```
appdost-redesign/
├── src/
│   ├── components/
│   │   ├── ui/              # shadcn/ui components
│   │   ├── sections/        # Page sections
│   │   ├── Navigation.jsx   # Navigation bar
│   │   └── Footer.jsx       # Footer component
│   ├── lib/
│   │   └── utils.js         # Utility functions
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── public/                  # Static assets
├── index.html               # HTML template
├── package.json             # Dependencies
├── tailwind.config.js       # Tailwind configuration
├── vite.config.js           # Vite configuration
└── README.md                # This file
```

## ⚡ Performance Optimization

The project is optimized for deployment with:

- **Code Splitting** - Automatic with Vite
- **Lazy Loading** - Suspense for 3D components
- **Tree Shaking** - Removes unused code
- **Image Optimization** - Using Unsplash CDN
- **Smooth Rendering** - RAF-based animations
- **Mobile Responsive** - Fully responsive design

## 🎯 Key Features

### Premium UI/UX
- Glassmorphism effects
- Gradient text and backgrounds
- Smooth transitions
- Interactive hover states
- Responsive design

### 3D Elements
- Floating geometric shapes
- Mouse-based parallax
- Smooth rotations
- Optimized rendering

### Animations
- GSAP ScrollTrigger
- Framer Motion variants
- CSS transitions
- Keyframe animations

## 🐛 Troubleshooting

### 3D Elements Not Rendering
- Check browser WebGL support
- Clear browser cache
- Update graphics drivers

### Slow Performance
- Reduce 3D element count in `Scene3D.jsx`
- Adjust animation durations
- Disable blur effects on low-end devices

### Build Errors
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again
- Clear Vite cache: `npm run dev -- --force`

## 📄 License

This project is created for AppDost. All rights reserved.

## 🤝 Support

For issues or questions:
- Email: contact@appdost.in
- Phone: +91 76350 75422

---

Built with ❤️ by AppDost Team
