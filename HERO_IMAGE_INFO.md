# Hero Image with Theme Support 🖼️🌓

تم إضافة صور في الـ Hero Section تتغير تلقائياً حسب الثيم (Dark/Light Mode)!

## ✨ الميزات

- 🌓 **صورتين مختلفتين**: واحدة للـ Light Mode وواحدة للـ Dark Mode
- 🎨 **بدون خلفية**: تم إزالة جميع الخلفيات والـ gradients
- 📱 **Responsive**: تتكيف مع جميع أحجام الشاشات
- ⚡ **Auto Switch**: تتبدل الصور تلقائياً عند تغيير الثيم
- 🎯 **Grid Layout**: النص على اليسار، الصورة على اليمين

## 📁 الصور المستخدمة

### ☀️ Light Mode
```
images/For White mode.svg
```
- تظهر فقط في الـ Light Mode
- مصممة لخلفية بيضاء/فاتحة

### 🌙 Dark Mode
```
images/for Dark mode.svg
```
- تظهر فقط في الـ Dark Mode
- مصممة لخلفية داكنة

## 🎨 التصميم

### Desktop (> 768px)
```
┌────────────────────────────────────┐
│                                    │
│  Hero Content    │    Hero Image   │
│  (Text Left)     │    (Img Right)  │
│                                    │
└────────────────────────────────────┘
```

### Mobile (< 768px)
```
┌──────────────────┐
│   Hero Image     │
│   (Top/Center)   │
├──────────────────┤
│   Hero Content   │
│   (Text Center)  │
└──────────────────┘
```

## 🔧 كيف يعمل

### 1. HTML Structure

```html
<div class="hero-grid">
    <!-- Content -->
    <div class="hero-content">
        <!-- Text content -->
    </div>
    
    <!-- Images -->
    <div class="hero-image-wrapper">
        <!-- Light Mode Image -->
        <img src="images/For White mode.svg" 
             class="hero-image light-mode-image">
        
        <!-- Dark Mode Image -->
        <img src="images/for Dark mode.svg" 
             class="hero-image dark-mode-image">
    </div>
</div>
```

### 2. CSS Logic

```css
/* Default: Show light mode image */
.light-mode-image {
    display: block;
}

.dark-mode-image {
    display: none;
}

/* Dark Mode: Hide light, show dark */
[data-theme="dark"] .light-mode-image {
    display: none;
}

[data-theme="dark"] .dark-mode-image {
    display: block;
}
```

### 3. Grid Layout

```css
.hero-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
}
```

## 📱 Responsive Breakpoints

| الشاشة | Layout | حجم الصورة |
|--------|--------|-----------|
| **Desktop (>1024px)** | 2 Columns | 500px max |
| **Tablet (768-1024px)** | 2 Columns | 400px max |
| **Mobile (<768px)** | 1 Column (stacked) | 350px max |
| **Small Mobile (<360px)** | 1 Column | 280px max |

## ⚙️ التخصيص

### تغيير الصور

استبدل الصور في مجلد `images/`:
```bash
images/For White mode.svg  # صورة الـ Light Mode
images/for Dark mode.svg   # صورة الـ Dark Mode
```

### تغيير حجم الصورة

في `styles/main.css`:
```css
.hero-image-wrapper {
    max-width: 500px;  /* غيّر الحجم */
}
```

### تغيير Layout (عكس الترتيب)

```css
.hero-grid {
    grid-template-columns: 1fr 1fr;
    direction: rtl;  /* الصورة على اليسار */
}
```

### إضافة Animation للصورة

```css
.hero-image {
    animation: fadeInUp 1s ease;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
```

## 🎯 الخلفيات المُزالة

تم إزالة:
- ✅ `.hero-background` - removed
- ✅ `.hero-gradient` - removed  
- ✅ `::before` و `::after` pseudo-elements - removed
- ✅ أي gradients أو patterns - removed

الخلفية الآن:
```css
.hero {
    background: transparent;
}
```

## 💡 نصائح

### للحصول على أفضل نتيجة:

1. **استخدم SVG**: أفضل جودة في جميع الأحجام
2. **Optimize الصور**: استخدم SVGO لتصغير حجم الـ SVG
3. **Same Dimensions**: اجعل الصورتين بنفس الأبعاد
4. **Transparent Background**: تأكد إن خلفية الصور شفافة

### Performance:

```html
<!-- استخدم loading="eager" للصورة الأولى -->
<img loading="eager" src="...">

<!-- استخدم loading="lazy" للصور الأخرى -->
<img loading="lazy" src="...">
```

## 🐛 استكشاف الأخطاء

### الصورة مش بتظهر؟

1. تأكد من المسار:
   ```html
   src="images/For White mode.svg"
   ```

2. تحقق من اسم الملف (case-sensitive):
   ```
   ✅ For White mode.svg
   ❌ for white mode.svg
   ```

### الصورة مش بتتبدل مع الثيم؟

```css
/* تأكد من الـ selector */
[data-theme="dark"] .light-mode-image {
    display: none !important;
}
```

### الصورة كبيرة جداً على الموبايل؟

```css
@media (max-width: 768px) {
    .hero-image-wrapper {
        max-width: 300px;  /* قلل الحجم */
    }
}
```

## 📚 الملفات المعدّلة

1. ✅ `index.html` - Hero structure with images
2. ✅ `styles/main.css` - Grid layout + theme switching
3. ✅ `styles/responsive.css` - Mobile responsive
4. ✅ `HERO_IMAGE_INFO.md` - هذا الملف

## 🎨 الألوان والثيمات

الصور تتكامل مع:
- ✅ Particles.js background
- ✅ Tech Stack Logo Loop
- ✅ Dark/Light theme toggle
- ✅ Overall color scheme

---

**تم التطوير بواسطة:** Shady Gaber  
**التاريخ:** 2025  
**النسخة:** 1.0  
**الثيمات المدعومة:** Light & Dark 🌓


