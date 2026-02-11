# Project Aatmanirbhar Website

A responsive, modern website for the Aatmanirbhar (Self-Reliance) movement, built with Next.js, React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Fully Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI/UX** - Clean, professional design with smooth transitions and animations
- **Reusable Components** - Modular component architecture for easy maintenance
- **Contact & Volunteer Forms** - Interactive forms with validation and submission handling
- **Performance Optimized** - Built with Next.js for optimal performance and SEO

## 📁 Project Structure

```
project-aatmanirbhar/
├── components/          # Reusable React components
│   ├── Header.tsx      # Navigation header with mobile menu
│   ├── Footer.tsx      # Site footer with links
│   ├── Layout.tsx      # Main layout wrapper
│   ├── Button.tsx      # Reusable button component
│   └── Card.tsx        # Reusable card component
├── pages/              # Next.js pages (routes)
│   ├── index.tsx       # Home page
│   ├── about.tsx       # About/The Movement page
│   ├── problems.tsx    # The Problems page
│   ├── act.tsx         # How You Can Act page
│   └── contact.tsx     # Contact Us page with forms
├── styles/             # Global styles
│   └── globals.css     # Tailwind CSS and custom styles
└── public/             # Static assets
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom React components
- **Icons**: Heroicons (via inline SVG)

## 📦 Installation & Setup

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Steps

1. **Clone the repository** (or extract the project files)
   ```bash
   cd project-aatmanirbhar
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🌐 Pages

### 1. Home Page (`/`)
- Hero section with call-to-action
- Mission overview
- Key focus areas
- Impact statistics
- Call-to-action sections

### 2. About / The Movement (`/about`)
- Movement story and history
- Vision and mission statements
- Core values
- Leadership team
- Join movement CTA

### 3. The Problems (`/problems`)
- Main challenges facing India
  - Economic dependency
  - Unemployment & skill gap
  - Agricultural crisis
  - Technology gap
- Additional critical issues
- Solutions CTA

### 4. How You Can Act (`/act`)
- Quick action items
- Role-based suggestions (Students, Professionals, Entrepreneurs, Everyone)
- Active campaigns to join
- Detailed action plans

### 5. Contact Us (`/contact`)
- Contact information cards
- General contact form
- Volunteer application form
- Social media links

## 🎨 Design Features

### Color Scheme
- **Primary**: Orange gradient (#f97316 to variations)
- **Secondary**: Green gradient (#22c55e to variations)
- **Neutral**: Gray scale for text and backgrounds

### Components

#### Button Component
Three variants available:
- `primary` - Orange gradient button
- `secondary` - Green gradient button
- `outline` - Outlined button

Usage:
```tsx
<Button variant="primary">Click Me</Button>
```

#### Card Component
Reusable card with hover effects:
```tsx
<Card>
  <div className="p-6">
    {/* Your content */}
  </div>
</Card>
```

### Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 📱 Mobile Responsiveness

The website is fully responsive with:
- Mobile-friendly navigation with hamburger menu
- Flexible grid layouts that adapt to screen size
- Touch-friendly buttons and interactive elements
- Optimized typography for readability on all devices

## 🔧 Customization

### Updating Colors
Edit `tailwind.config.js` to change the color scheme:
```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom colors
      },
      secondary: {
        // Your custom colors
      },
    },
  },
}
```

### Adding New Pages
1. Create a new file in the `pages/` directory
2. Import the Layout component
3. Add your page content

Example:
```tsx
import Layout from '../components/Layout';

export default function NewPage() {
  return (
    <Layout>
      {/* Your content */}
    </Layout>
  );
}
```

## 📝 Form Handling

Both forms (Contact and Volunteer) currently log submissions to the console. To connect to a backend:

1. Replace the form submission handlers in `pages/contact.tsx`
2. Add your API endpoint
3. Implement error handling

Example:
```tsx
const handleContactSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(contactForm)
    });
    
    if (response.ok) {
      setContactSubmitted(true);
    }
  } catch (error) {
    console.error('Submission error:', error);
  }
};
```

## 🚀 Deployment

### Build for Production
```bash
npm run build
npm start
```

### Deploy to Vercel (Recommended)
1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with one click

### Deploy to Other Platforms
The built files can be deployed to:
- Netlify
- AWS Amplify
- Google Cloud Platform
- Any Node.js hosting service

## 🔍 SEO Considerations

To improve SEO:
1. Add meta tags in each page component
2. Use Next.js `Head` component
3. Implement proper heading hierarchy
4. Add alt text to images
5. Create a sitemap

## ⚡ Performance

The website is optimized for performance with:
- Server-side rendering (SSR) via Next.js
- Code splitting and lazy loading
- Optimized images (when added)
- Minimal JavaScript bundle size
- Fast page transitions

## 🎯 Future Enhancements

Potential improvements:
- [ ] Add blog/news section
- [ ] Integrate email service for forms
- [ ] Add image gallery
- [ ] Implement search functionality
- [ ] Add testimonials section
- [ ] Multi-language support (Hindi/English)
- [ ] Dark mode toggle
- [ ] Analytics integration

## 📄 License

This project is for educational and non-commercial use.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit issues or pull requests.

## 📧 Support

For questions or support, contact: info@aatmanirbhar.org

---

Built with ❤️ for a self-reliant India
