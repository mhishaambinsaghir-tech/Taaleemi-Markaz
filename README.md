# تعلیمی مرکز - Taaleemi Markaz

A beautiful, fully responsive static website for an Urdu education/tutoring center built with modern web technologies.

## 🌟 Features

- **RTL Layout**: Complete right-to-left layout optimized for Urdu content
- **Urdu Typography**: Beautiful Urdu fonts (Noto Nastaliq Urdu, Amiri, Tajawal)
- **Fully Responsive**: Mobile-first design that works on all devices
- **Modern Design**: Professional color palette with deep blue, cream, and green accents
- **Interactive Features**:
  - Parallax hero section
  - Smooth scrolling navigation
  - Bento-style course grid with hover effects
  - Horizontal scrolling teacher showcase
  - Masonry testimonials layout
  - Pinterest-style gallery
  - Form validation in Urdu
  - Scroll-to-top button
  - Reveal animations on scroll

## 📁 Project Structure

```
Taaleemi Markaz/
├── index.html          # Main HTML file with RTL layout
├── style.css           # Comprehensive styles with responsive design
├── script.js           # Interactive features and form validation
└── README.md           # This file
```

## 🎨 Color Palette

- **Primary**: #1e3a5f (Deep Blue)
- **Secondary**: #f5f5dc (Cream)
- **Accent**: #4a9b5e (Green)

## 🚀 Getting Started

### Local Development

1. Clone or download this repository
2. Open `index.html` in your web browser
3. That's it! No build process required.

### Using a Local Server (Recommended)

For better development experience, use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js http-server
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## 📧 Contact Form Setup

The contact form uses [Formspree](https://formspree.io/) for handling submissions. To set it up:

1. Go to [formspree.io](https://formspree.io/)
2. Sign up for a free account
3. Create a new form and get your form endpoint
4. In `index.html`, replace `YOUR_FORM_ID` on line 573:
   ```html
   <form class="contact-form" id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
5. Replace `YOUR_FORM_ID` with your actual Formspree form ID

## 🌐 Deployment on GitHub Pages

### Method 1: Using GitHub Web Interface

1. Create a new repository on GitHub
2. Upload `index.html`, `style.css`, `script.js`, and `README.md`
3. Go to Settings → Pages
4. Under "Source", select "main" branch
5. Click Save
6. Your site will be published at `https://yourusername.github.io/repository-name`

### Method 2: Using Git Command Line

```bash
# Initialize git repository
git init

# Add files
git add .

# Commit
git commit -m "Initial commit: Taaleemi Markaz website"

# Add remote repository
git remote add origin https://github.com/yourusername/taaleemi-markaz.git

# Push to GitHub
git branch -M main
git push -u origin main

# Enable GitHub Pages in repository settings
```

### Method 3: Using Other Hosting Services

You can also deploy to:

- **Netlify**: Drag and drop your folder to [netlify.com/drop](https://app.netlify.com/drop)
- **Vercel**: Import your GitHub repository at [vercel.com](https://vercel.com)
- **Surge**: Run `npx surge` in your project directory
- **Cloudflare Pages**: Connect your GitHub repository

## 📱 Sections Overview

### 1. Hero Section
- Full-width parallax background
- Attention-grabbing headline in Urdu
- Two CTA buttons (View Courses, Register)
- Animated scroll indicator

### 2. About Section
- Two-column layout with image and text
- Diagonal accent border
- Feature highlights with icons
- Hover animations

### 3. Courses Section
- Bento-style grid with varying card sizes
- 6 different courses
- Hover zoom effects
- Course metadata (duration, students)

### 4. Teachers Section
- Horizontal scrolling cards
- Teacher profiles with photos
- Social media links on hover
- Smooth scroll navigation buttons

### 5. Testimonials Section
- Masonry layout
- Alternating background colors
- Student photos and quotes in Urdu
- Responsive column count

### 6. Gallery Section
- Pinterest-style mixed-size grid
- Hover overlays with captions
- Various classroom and activity photos

### 7. Contact/Registration Section
- Split layout (info + form)
- Complete form validation
- Formspree integration
- Contact information display

### 8. Footer
- Full-width gradient background
- Quick links and course links
- Contact information
- Social media icons

## 🎯 Customization Guide

### Changing Colors

Edit CSS variables in `style.css` (lines 9-27):

```css
:root {
    --color-primary: #1e3a5f;
    --color-secondary: #f5f5dc;
    --color-accent: #4a9b5e;
}
```

### Changing Text Content

All text is in `index.html`. Simply edit the Urdu text between tags.

### Adding More Courses

Copy a course card structure in `index.html` (around line 147) and modify:
- Icon (`<i class="fas fa-...">`)
- Title and description
- Features list
- Meta information

### Changing Images

Replace image URLs in `index.html`. The site uses:
- Unsplash for hero and gallery images
- Pravatar for teacher/student profile pictures

You can replace these with your own images.

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is free to use for educational and commercial purposes.

## 🤝 Contributing

Feel free to fork this project and customize it for your needs!

## 📞 Support

For questions or issues, please create an issue in the GitHub repository.

---

Made with ❤️ for تعلیمی مرکز
