# Images Directory

This directory contains all images used in the portfolio website.

## Directory Structure

```
images/
├── profile/          # Personal photos and profile images
├── projects/         # Project screenshots and mockups
├── backgrounds/      # Background images and patterns
├── icons/           # Icons and small graphics
└── README.md        # This file
```

## Image Guidelines

### Profile Images
- **File format**: JPG or PNG
- **Recommended size**: 400x400px minimum
- **Aspect ratio**: 1:1 (square)
- **File naming**: `profile-main.jpg`, `profile-about.jpg`, etc.

### Project Images
- **File format**: JPG or PNG
- **Recommended size**: 800x600px minimum
- **Aspect ratio**: 4:3 or 16:9
- **File naming**: `project-[name]-[type].jpg` (e.g., `project-ecommerce-desktop.jpg`)

### Background Images
- **File format**: JPG or PNG
- **Recommended size**: 1920x1080px minimum
- **Aspect ratio**: 16:9
- **File naming**: `bg-[description].jpg` (e.g., `bg-hero-pattern.jpg`)

### Icons
- **File format**: SVG or PNG
- **Recommended size**: 24x24px, 32x32px, 48x48px
- **File naming**: `icon-[name].svg` (e.g., `icon-github.svg`)

## Usage in HTML

### Profile Image Example
```html
<img src="images/profile/profile-main.jpg" alt="Profile Photo" class="profile-image">
```

### Project Image Example
```html
<img src="images/projects/project-ecommerce-desktop.jpg" alt="E-Commerce Project" class="project-image">
```

### Background Image Example
```html
<div class="hero-section" style="background-image: url('images/backgrounds/bg-hero-pattern.jpg');">
```

## Optimization Tips

1. **Compress images** before adding them to reduce file size
2. **Use WebP format** for better compression (with JPG fallback)
3. **Provide multiple sizes** for responsive design
4. **Add alt text** for accessibility
5. **Use lazy loading** for better performance

## Recommended Tools

- **Image compression**: TinyPNG, ImageOptim
- **Image editing**: Photoshop, GIMP, Canva
- **Format conversion**: Online converters or command line tools
