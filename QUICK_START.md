# ⚡ Quick Start Guide

Get your portfolio up and running in 5 minutes!

## 🚀 Option 1: Instant Preview (30 seconds)

### Windows
1. Open `portfolio` folder
2. Double-click `index.html`
3. Done! (Some features may not work without a server)

### Mac/Linux
1. Open Terminal
2. Navigate to portfolio folder
3. Run: `open index.html` (Mac) or `xdg-open index.html` (Linux)

---

## 🌐 Option 2: With Local Server (Recommended - 2 minutes)

### Using Python (Most Common)

**If you have Python installed:**

```bash
# Navigate to portfolio folder
cd portfolio

# Python 3.x (recommended)
python -m http.server 8000

# Python 2.x
python -m SimpleHTTPServer 8000
```

**Then open**: http://localhost:8000

### Using VS Code (Easiest)

1. Install "Live Server" extension
2. Right-click `index.html`
3. Select "Open with Live Server"
4. Done! ✨

### Using Node.js

```bash
npx http-server portfolio
```

---

## 📝 Quick Customization (5 minutes)

### 1. Update Your Info

**Find and replace in ALL HTML files:**

| What to Replace | Replace With |
|----------------|--------------|
| `shadygaber.dev@gmail.com` | Your email |
| `+1 (234) 567-890` | Your phone |
| `Your City, Your Country` | Your location |

**Update social links in footer:**
- GitHub link
- LinkedIn link
- Twitter link

### 2. Change Colors (Optional)

Edit `styles/main.css` line 7-10:

```css
--primary-color: #6366f1;    /* Your brand color */
--accent-color: #ec4899;     /* Your accent color */
```

### 3. Add Your Photo (Optional)

Create an `images` folder and add your photos, then replace SVG placeholders:

```html
<!-- Replace: -->
<div class="image-placeholder">
    <svg>...</svg>
</div>

<!-- With: -->
<img src="images/profile.jpg" alt="Your Name">
```

---

## 🎯 What's Included?

✅ **5 Complete Pages**
- Home
- About  
- Projects
- Skills
- Contact

✅ **Features**
- Dark/Light Mode
- Responsive Design
- Smooth Animations
- Mobile Menu
- Contact Form
- Project Filtering

✅ **Modern Tech**
- HTML5
- CSS3 (Grid, Flexbox, Variables)
- Vanilla JavaScript (ES6+)

---

## 🛠️ Common Issues

### JavaScript not working?
→ Use a local server (see Option 2 above)

### Styles look broken?
→ Check that all CSS files are in `styles/` folder

### Dark mode not switching?
→ Check browser console (F12) for errors

### Mobile menu not opening?
→ Ensure JavaScript files are loading correctly

---

## 📱 Test Responsiveness

Press `F12` in browser → Click mobile icon (📱) → Test different devices

**Key breakpoints:**
- Mobile: 375px
- Tablet: 768px
- Desktop: 1024px+

---

## 🎨 Quick Tips

1. **Backup First**: Make a copy before major changes
2. **Test Often**: Check changes in browser frequently
3. **Use DevTools**: F12 is your friend!
4. **Mobile First**: Always test mobile view
5. **Clear Cache**: Ctrl+Shift+Delete if changes don't show

---

## 📚 Next Steps

For detailed customization:
→ Read [INSTALLATION.md](INSTALLATION.md)

For deployment:
→ Check README.md "Deployment" section

For structure understanding:
→ See [PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md)

---

## 🆘 Need Help?

**Check Console**: Press F12 → Go to "Console" tab → Look for errors

**Common fixes:**
- Clear browser cache
- Use incognito mode
- Try different browser
- Restart local server

---

## 🎉 You're Ready!

Your portfolio is now ready to customize and deploy!

**Email**: shadygaber.dev@gmail.com

---

### Quick Command Reference

```bash
# Start Python server
python -m http.server 8000

# Start with Node.js
npx http-server

# Start with PHP
php -S localhost:8000

# Open in browser (Mac)
open http://localhost:8000

# Open in browser (Linux)
xdg-open http://localhost:8000
```

**Happy coding! 🚀**

