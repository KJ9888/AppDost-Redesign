# AppDost - Complete Website Redesign 🚀

A modern, professional, and fully-featured redesign of the AppDost website with multi-page architecture, interactive elements, and consistent design system.

## ✨ Features

### Multi-Page Architecture
- **Home Page** - Hero section with real-time stats, services, about, projects, testimonials, and tech stack
- **About Page** - Company mission, team values, and premium contact section
- **Services Page** - Detailed service offerings with interactive cards and CTA
- **Portfolio Page** - 3-column grid with category filtering and real project images
- **Careers Page** - Job listings, application form, and success toast notifications
- **Blog Page** - Featured articles, category filtering, search functionality

### Interactive Components
- **Real-time Analytics** - Live user count and engagement metrics
- **Category Filtering** - Dynamic portfolio and blog filtering
- **Search Functionality** - Real-time blog search
- **Toast Notifications** - Success feedback with confetti animation
- **Smooth Animations** - Framer Motion throughout all pages
- **Form Validation** - Professional contact and career forms

### Premium UI/UX
- **Consistent Color Theme** - Slate-950/900 backgrounds with blue/purple/pink gradients
- **Glassmorphism Design** - Modern card designs with backdrop blur
- **Responsive Layout** - Mobile-first design approach
- **Hover Interactions** - Smooth transitions and scale effects
- **Loading States** - React Suspense with custom loaders

## 🛠️ Technologies Used

### Core

- **React 18.3** - UI library
- **Vite 5.4** - Build tool
- **Tailwind CSS 3.4** - Utility-first CSS

### Animations & Effects

- **GSAP 3.12** - Professional-grade animations
- **Framer Motion 11.11** - React animation library with AnimatePresence
- **Lenis 1.1** - Smooth scrolling

### UI Components & Routing

- **React Router DOM 6.28** - Client-side routing
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
│   │   ├── ui/                    # shadcn/ui components
│   │   │   ├── button.jsx         # Button component
│   │   │   ├── card.jsx           # Card component
│   │   │   └── toast.jsx          # Toast notification
│   │   ├── sections/              # Page sections
│   │   │   ├── HeroSection.jsx    # Home hero
│   │   │   ├── ServicesSection.jsx
│   │   │   ├── AboutSection.jsx
│   │   │   ├── ProjectsSection.jsx
│   │   │   ├── TestimonialsSection.jsx
│   │   │   ├── TechStackSection.jsx
│   │   │   ├── ContactSection.jsx
│   │   │   └── TrustBar.jsx
│   │   ├── Navigation.jsx         # Navigation bar
│   │   ├── Footer.jsx             # Footer component
│   │   ├── FloatingCTA.jsx        # Floating action button
│   │   └── ScrollToTop.jsx        # Scroll behavior
│   ├── pages/
│   │   ├── HomePage.jsx           # Main landing page
│   │   ├── AboutPage.jsx          # About us page
│   │   ├── ServicesPage.jsx       # Services page
│   │   ├── PortfolioPage.jsx      # Portfolio with filtering
│   │   ├── CareersPage.jsx        # Careers & jobs
│   │   └── BlogPage.jsx           # Blog with search
│   ├── lib/
│   │   └── utils.js               # Utility functions
│   ├── App.jsx                    # Router setup
│   ├── main.jsx                   # Entry point
│   └── index.css                  # Global styles
├── public/                        # Static assets
├── index.html                     # HTML template
├── package.json                   # Dependencies
├── tailwind.config.js             # Tailwind configuration
├── vite.config.js                 # Vite configuration
└── README.md                      # This file
```

## ⚡ Performance Optimization

The project is optimized with:

- **Code Splitting** - React.lazy() for page-level splitting
- **Lazy Loading** - Suspense for heavy components
- **Optimized Images** - Real project images from AppDost
- **Smooth Rendering** - RAF-based animations
- **Mobile Responsive** - Fully responsive across all devices
- **Fast Navigation** - React Router for instant page transitions
- **Minimal Bundle** - Tree-shaking with Vite

## 🎨 Design System

### Color Palette
- **Background**: Slate-950, Slate-900
- **Cards**: Slate-800/50 with white/10 borders
- **Gradients**: Blue-400 → Purple-400 → Pink-400
- **Text**: White (primary), Gray-300/400 (secondary)

### Typography
- **Headings**: Bold, 2xl-6xl responsive sizes
- **Body**: Regular, sm-lg responsive sizes
- **Special**: Gradient text with bg-clip-text

### Components
- **Buttons**: Gradient backgrounds with hover effects
- **Cards**: Glassmorphism with backdrop-blur
- **Forms**: Slate-800 backgrounds with focus rings
- **Toast**: Green gradient with confetti animation

## 🎯 Key Features by Page

### Home Page
- Real-time active user tracking
- Animated statistics counter
- Service cards with hover effects
- Project showcase
- Client testimonials
- Tech stack visualization
- Contact form

### About Page
- Company mission statement
- Team values and culture
- Premium contact cards
- Gradient effects and animations

### Services Page
- Detailed service offerings
- Interactive service cards
- Trust indicators
- Call-to-action section

### Portfolio Page
- 3-column responsive grid
- Category filtering (All, Web, Mobile, Design)
- Real project images from AppDost
- Hover effects with stats overlay
- Smooth transitions with AnimatePresence

### Careers Page
- Hero section with stats
- Benefits showcase
- Job openings display
- Application form with file upload
- Success toast with confetti
- Form validation

### Blog Page
- Featured article section
- Category filtering
- Real-time search
- Post counter
- External blog links (AppDost blog)
- Newsletter CTA

## 🐛 Troubleshooting

### Navigation Issues
- Ensure React Router is properly configured
- Check that all route paths match Navigation links
- Clear browser cache

### Form Submission
- Toast notifications require proper state management
- Check console for any validation errors
- Ensure all required fields are filled

### Slow Performance
- Reduce number of animated elements
- Adjust animation durations in Framer Motion
- Disable blur effects on low-end devices
- Check browser console for warnings

### Build Errors
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again
- Clear Vite cache: `npm run dev -- --force`
- Check for ESLint errors in terminal

## � External Links

- **AppDost Website**: https://appdost.in
- **AppDost Blog**: https://appdost.in/blog/1760299622897
- **Portfolio Projects**: Real images from AppDost projects

## 📊 Pages & Routes

- `/` - Home page
- `/about` - About page
- `/services` - Services page
- `/portfolio` - Portfolio page
- `/careers` - Careers page
- `/blog` - Blog page

## �📄 License

This project is created for AppDost. All rights reserved.

## 🤝 Support

For issues or questions:

- Email: contact@appdost.in
- Phone: +91 9599523893
- Website: https://appdost.in

---

Built with ❤️ by Kunal Jain for AppDost
