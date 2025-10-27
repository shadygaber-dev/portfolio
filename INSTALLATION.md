# Installation Guide - Shady.dev Portfolio

## 📋 Quick Start

This is a static website built with vanilla HTML, CSS, and JavaScript. No build process or dependencies required!

## 🚀 Option 1: Direct Opening (Simplest)

1. Download or clone the project
2. Navigate to the `portfolio` folder
3. Double-click `index.html`

**Note**: Some features may not work properly due to browser CORS restrictions. Using a local server is recommended.

## 🌐 Option 2: Using a Local Server (Recommended)

### Using Python (Built-in)

**Python 3.x:**
```bash
cd portfolio
python -m http.server 8000
```

**Python 2.x:**
```bash
cd portfolio
python -m SimpleHTTPServer 8000
```

Then open: `http://localhost:8000`

### Using Node.js

**Install http-server globally:**
```bash
npm install -g http-server
```

**Run the server:**
```bash
cd portfolio
http-server
```

Then open: `http://localhost:8080`

### Using PHP (If installed)

```bash
cd portfolio
php -S localhost:8000
```

Then open: `http://localhost:8000`

### Using VS Code Live Server

1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

## 🎨 Customization Steps

### Step 1: Update Personal Information

**In all HTML files, replace:**

- `shadygaber.dev@gmail.com` → Your email
- Phone number in `contact.html`
- Social media links (GitHub, LinkedIn, Twitter)
- Location information

### Step 2: Customize Theme Colors

Edit `styles/main.css`:

```css
:root {
    --primary-color: #6366f1;    /* Change to your brand color */
    --accent-color: #ec4899;      /* Change to your accent color */
}
```

### Step 3: Add Your Projects

Edit `projects.html` and add your projects:

```html
<article class="project-card-full fade-in-up" data-category="web">
    <div class="project-image-full">
        <!-- Add your project image or placeholder -->
    </div>
    <div class="project-content-full">
        <div class="project-tags">
            <span class="tag">Technology 1</span>
            <span class="tag">Technology 2</span>
        </div>
        <h3 class="project-title-full">Your Project Name</h3>
        <p class="project-description-full">
            Your project description here...
        </p>
        <div class="project-links">
            <a href="your-demo-link" class="project-link">Live Demo →</a>
            <a href="your-github-link" class="project-link">GitHub →</a>
        </div>
    </div>
</article>
```

### Step 4: Update About Section

Edit `about.html`:
- Update work experience
- Modify education section
- Change statistics numbers

### Step 5: Modify Skills

Edit `skills.html`:
- Add/remove technologies
- Update skill categories

## 📸 Adding Images

### For Profile/About Images

Replace the placeholder SVG in HTML files with your actual images:

```html
<!-- Replace this: -->
<div class="image-placeholder">
    <svg>...</svg>
</div>

<!-- With this: -->
<img src="images/profile.jpg" alt="Your Name">
```

### For Project Images

Add your project screenshots:

```html
<div class="project-image-full">
    <img src="images/project-name.jpg" alt="Project Name">
</div>
```

**Recommended image sizes:**
- Profile images: 500x500px
- Project thumbnails: 800x500px (16:10 ratio)

## 🎯 Contact Form Setup

The contact form is currently set up with a demo function. To make it work:

### Option 1: Using EmailJS (Free)

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Get your public key
3. Update `js/contact.js`:

```javascript
async sendEmail(data) {
    emailjs.init("YOUR_PUBLIC_KEY");
    
    return emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        {
            from_name: data.name,
            from_email: data.email,
            subject: data.subject,
            message: data.message
        }
    );
}
```

### Option 2: Using Formspree (Free)

1. Sign up at [Formspree](https://formspree.io/)
2. Get your form endpoint
3. Update `contact.html`:

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Option 3: Using Your Own Backend

Create a backend API and update the fetch call in `js/contact.js`.

## 🌍 Deployment

### GitHub Pages (Free)

1. Create a GitHub repository
2. Push your code
3. Go to Settings → Pages
4. Select branch (usually `main`) and `/root` folder
5. Your site will be live at `https://username.github.io/repo-name`

### Netlify (Free)

1. Sign up at [Netlify](https://www.netlify.com/)
2. Drag and drop the `portfolio` folder
3. Your site is live!

### Vercel (Free)

1. Sign up at [Vercel](https://vercel.com/)
2. Import your GitHub repository
3. Deploy!

### Traditional Hosting

Upload all files via FTP to your hosting provider.

## 🔧 Troubleshooting

### JavaScript modules not working

If you see errors about modules, make sure you're using a local server (not opening files directly).

### Styles not loading

Check that all CSS file paths are correct:
```html
<link rel="stylesheet" href="styles/main.css">
```

### Animations not working

Ensure JavaScript is enabled in your browser and check the browser console for errors.

### Theme toggle not working

Check that the theme.js file is being loaded properly and there are no JavaScript errors.

## 📱 Testing Responsiveness

Test your site on different screen sizes:

**Using Browser DevTools:**
1. Press F12 to open DevTools
2. Click the device toggle button (or Ctrl+Shift+M)
3. Test different devices

**Recommended breakpoints to test:**
- Mobile: 375px, 414px
- Tablet: 768px, 1024px
- Desktop: 1280px, 1920px

## 🎓 Learning Resources

If you want to customize further:

- **HTML**: [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML)
- **CSS**: [CSS-Tricks](https://css-tricks.com/)
- **JavaScript**: [JavaScript.info](https://javascript.info/)

## 💡 Tips

1. **Backup**: Always keep a backup before making major changes
2. **Test**: Test on multiple browsers and devices
3. **Optimize**: Compress images before uploading
4. **Version Control**: Use Git to track changes
5. **Performance**: Test with Lighthouse in Chrome DevTools

## 🆘 Need Help?

If you encounter issues:
1. Check the browser console for errors (F12)
2. Verify all file paths are correct
3. Ensure you're using a local server for testing
4. Clear browser cache (Ctrl+Shift+Delete)

---

**Happy Coding! 🚀**

Contact: shadygaber.dev@gmail.com

