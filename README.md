# Professional Portfolio - Gunja

A modern, interactive, and fully responsive professional portfolio showcasing healthcare administration expertise, customer service skills, and computer science knowledge.

## ✨ Features

### 🎨 Modern Design
- **Professional Color Palette**: Carefully selected colors (Smart Blue, Steel Azure, Glaucous) that convey trust, professionalism, and modernity
- **Typography**: Manrope + Source Sans 3 font pairing for a clean, contemporary look
- **Glassmorphism & Modern UI**: Aurora-inspired backgrounds with subtle blur effects
- **Fully Responsive**: Perfect viewing experience on all devices (mobile, tablet, desktop)

### 🚀 Interactive Features
- **Typing Animation**: Dynamic title rotation showcasing multiple professional roles
- **Scroll Progress Bar**: Visual indicator of page scroll progress
- **Smooth Scrolling**: Elegant navigation between sections
- **Reveal Animations**: Content smoothly fades in as you scroll
- **Dark/Light Mode**: Toggle between themes with persistent preference
- **Collapsible Experience Items**: Click to expand/collapse job details
- **Category Filters**: Filter experience by Healthcare, Banking, or NGO roles
- **Interactive Hover Effects**: Cards and buttons respond to user interaction

### 📋 Sections
1. **Hero/About**: Introduction with typing animation and quick contact info
2. **Career Highlights**: Statistical overview of experience and achievements
3. **Professional Experience**: Detailed work history with filterable categories
4. **Projects**: Key contributions and impactful projects
5. **Education**: Academic qualifications and certifications
6. **Skills**: Technical and soft skills showcase
7. **Testimonials**: Recommendations from colleagues and supervisors
8. **Contact**: Interactive form with social media links

### 🛠️ Technologies Used
- **HTML5**: Semantic, accessible markup
- **CSS3**: Modern CSS with custom properties (CSS variables), Flexbox, Grid
- **Vanilla JavaScript**: No frameworks, pure JS for optimal performance
- **Remix Icon**: Beautiful, consistent icon set
- **Google Fonts**: Manrope + Source Sans 3

## 🎯 Design Principles

### Color Scheme
- **Primary**: Smart Blue (#2D68C4) - Intelligence and professionalism
- **Primary Dark**: Steel Azure (#224C98) - Trust and stability
- **Primary Light**: Glaucous (#6082B6) - Calm and clarity
- **Accent**: Blue Slate (#536878) - Cool authority

### Typography Scale
- Headings: Manrope (600-800 weight)
- Body: Source Sans 3 (300-400 weight)
- Consistent scale from 0.75rem to 3rem

### Spacing System
- Consistent spacing scale using CSS custom properties
- 8-point grid system for alignment

## 📱 Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🚀 Getting Started

### Local Development
1. Simply open `index.html` in your browser
2. No build process required!
3. All assets are loaded from CDN or local files

### Customization

#### Update Personal Information
Edit the `resumeData` object in `script.js`:
```javascript
const resumeData = {
  name: 'Your Name',
  titles: ['Your Title 1', 'Your Title 2'],
  location: 'Your Location',
  // ... etc
}
```

#### Modify Colors
Update CSS variables in `styles.css`:
```css
:root {
  --color-primary: #2D68C4;
  --color-primary-dark: #224C98;
  /* ... etc */
}
```

#### Add/Remove Sections
Modify the HTML structure in `index.html` and update corresponding render functions in `script.js`

## 📄 File Structure
```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # All styles with CSS variables
├── script.js           # JavaScript functionality
├── README.md           # This file
├── assets/             # Images and illustrations
│   ├── workspace.svg
│   ├── success.svg
│   └── team-collaboration.svg
└── assests/            # Resume PDF
    └── gk resume.n (1).pdf
```

## ⚡ Performance
- Minimal dependencies (only Google Fonts and Remix Icon from CDN)
- Optimized CSS with modern properties
- Efficient vanilla JavaScript
- Lazy loading for animations
- Fast load times

## 🎨 Design Features
- **Scroll Progress Indicator**: Shows reading progress at the top
- **Page Loader**: Smooth entry animation
- **Reveal Animations**: Content appears as you scroll
- **Theme Toggle**: Persistent dark/light mode preference
- **Print Optimization**: Clean print stylesheet for resume printing

## 📝 Future Enhancements
- [ ] Add blog section
- [ ] Integrate with backend for contact form
- [ ] Add project detail modals
- [ ] Include downloadable portfolio PDF
- [ ] Add analytics tracking
- [ ] Implement service worker for offline support

## 👤 About
Created by **Gunja** - Healthcare Administrator & Computer Science Student

- Healthcare Administration Professional with 1.5+ years experience
- Customer Service Expert
- Computer Science M.Sc. Student
- Digital Marketing & AI Certified

## 📞 Contact
- **Email**: Gunjagunja899@gmail.com
- **Phone**: 7827601318
- **Location**: Sangam Vihar, New Delhi – 110080

## 📜 License
© 2026 Gunja. All rights reserved.

---

**Note**: This portfolio is designed to be easily customizable. Simply update the data in `script.js` and the content will automatically update throughout the site!
