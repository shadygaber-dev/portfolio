# Shady.dev - Frontend Developer Portfolio

A modern, elegant, and fully responsive portfolio website showcasing frontend development skills and projects. Built with vanilla HTML, CSS, and JavaScript with a focus on performance, accessibility, and user experience.

![Portfolio Preview](https://img.shields.io/badge/Portfolio-Shady.dev-6366f1)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## ✨ Features

### 🎨 Design
- **Modern & Elegant UI** - Clean, professional design inspired by premium agencies
- **Dark/Light Mode** - Smooth theme switching with local storage persistence
- **Responsive Design** - Fully responsive across all devices (mobile, tablet, desktop)
- **Smooth Animations** - Carefully crafted animations and transitions

### 🚀 Performance
- **Vanilla JavaScript** - No heavy frameworks, pure performance
- **Component-Based Architecture** - Modular and maintainable code structure
- **Optimized Assets** - Fast loading times
- **Smooth Scrolling** - Buttery smooth scroll effects

### ⚡ Interactive Features
- **Scroll Progress Bar** - Visual indicator at the top of the page
- **Back to Top Button** - Quick navigation with smooth scrolling
- **Mobile Menu** - Smooth hamburger menu animation
- **Project Filtering** - Dynamic project categorization
- **Contact Form** - Validated form with user feedback
- **Scroll Reveal Animations** - Elements animate as you scroll

### ♿ Accessibility
- **Semantic HTML** - Proper HTML5 structure
- **ARIA Labels** - Screen reader support
- **Keyboard Navigation** - Full keyboard accessibility
- **Reduced Motion Support** - Respects user preferences

## 📁 Project Structure

```
portfolio/
├── index.html              # Home page
├── about.html              # About page
├── projects.html           # Projects showcase
├── skills.html             # Skills & technologies
├── contact.html            # Contact form
│
├── styles/
│   ├── main.css           # Core styles & variables
│   ├── components.css     # Component-specific styles
│   ├── animations.css     # Animation utilities
│   └── responsive.css     # Responsive breakpoints
│
├── js/
│   ├── main.js            # App initialization
│   ├── projects.js        # Projects page logic
│   ├── contact.js         # Contact form handling
│   └── components/
│       ├── theme.js       # Theme manager (dark/light mode)
│       ├── scroll.js      # Scroll effects & progress bar
│       ├── navigation.js  # Navigation & mobile menu
│       └── animations.js  # Animation manager
│
└── README.md              # Project documentation
```

## 🎯 Pages Overview

### Home (`index.html`)
- Hero section with animated title
- About preview with statistics
- Expertise showcase
- Featured projects
- Client testimonials
- Call-to-action section

### About (`about.html`)
- Personal introduction
- Professional experience timeline
- Education background
- Core values and principles

### Projects (`projects.html`)
- Project filtering by category
- Detailed project cards
- Live demo and GitHub links
- Technologies used

### Skills (`skills.html`)
- Technical skills showcase
- Technologies & tools
- Soft skills
- No progress bars (as requested)

### Contact (`contact.html`)
- Contact information
- Contact form with validation
- Social media links
- Location information

## 🛠️ Technologies Used

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with custom properties
- **JavaScript (ES6+)** - Modular components

### Design Tools
- **Google Fonts** - Poppins & Playfair Display
- **SVG Icons** - Scalable vector graphics
- **CSS Grid & Flexbox** - Modern layouts

### Features
- **CSS Variables** - Dynamic theming
- **Intersection Observer API** - Scroll animations
- **Local Storage** - Theme persistence
- **ES6 Modules** - Clean code structure

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local server (optional but recommended)

### Installation

1. **Clone or download the project**
   ```bash
   git clone [your-repo-url]
   cd portfolio
   ```

2. **Open with a local server** (recommended)
   
   Using Python:
   ```bash
   python -m http.server 8000
   ```
   
   Using Node.js (with `http-server`):
   ```bash
   npx http-server
   ```
   
   Using VS Code:
   - Install "Live Server" extension
   - Right-click on `index.html` → "Open with Live Server"

3. **Or simply open the HTML file**
   ```
   Open index.html in your browser
   ```

## ⚙️ Customization

### Update Personal Information

1. **Email Address**: Search for `shadygaber.dev@gmail.com` and replace with your email
2. **Phone Number**: Update in `contact.html`
3. **Social Links**: Update GitHub, LinkedIn, Twitter links in footer and contact page
4. **Location**: Update in `contact.html`

### Change Theme Colors

Edit CSS variables in `styles/main.css`:

```css
:root {
    --primary-color: #6366f1;      /* Main brand color */
    --accent-color: #ec4899;        /* Accent color */
    --text-primary: #1f2937;        /* Main text color */
    --bg-primary: #ffffff;          /* Background color */
}
```

### Add Projects

Edit the projects section in `projects.html`:

```html
<article class="project-card-full" data-category="web">
    <!-- Your project content -->
</article>
```

### Modify Content

All content is in plain HTML - simply edit the text in each HTML file.

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🎨 Design Philosophy

This portfolio follows these design principles:
- **Clean & Minimal** - Focus on content
- **Professional** - Agency-level quality
- **User-Centric** - Easy navigation and interaction
- **Performant** - Fast loading and smooth animations
- **Accessible** - Usable by everyone

## 📄 License

This project is open source and available for personal and commercial use.

## 📧 Contact

**Shady Gaber**
- Email: shadygaber.dev@gmail.com
- Website: Shady.dev

---

## 🙏 Credits

- Design inspiration: [Oroya Agency](https://www.oroya.fr/)
- Fonts: Google Fonts (Poppins, Playfair Display)
- Icons: Custom SVG icons

---

**Made with ❤️ by Shady**

*Building the web, one line at a time.*

