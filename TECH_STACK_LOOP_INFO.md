# Tech Stack Logo Loop 🚀

تم إضافة قسم احترافي لعرض شعارات التقنيات بألوانها الأصلية بشكل متحرك وتفاعلي (بدون أسماء - أيقونات فقط).

## ✨ الميزات

- ✅ Infinite scroll animation - حركة مستمرة وسلسة
- ✅ Hover effects - تأثيرات تفاعلية عند الـ hover
- ✅ دعم كامل للـ Dark/Light Theme
- ✅ Responsive على كل الأجهزة
- ✅ Fade effect على الجوانب
- ✅ يتوقف الـ scroll عند الـ hover
- ✅ تحريكات سلسة وجميلة

## 🎨 التقنيات المعروضة (بألوانها الأصلية)

1. **HTML5** - 🟧 برتقالي (#E34F26)
2. **CSS3** - 🔵 أزرق (#1572B6 & #33A9DC)
3. **JavaScript** - 🟨 أصفر (#F0DB4F)
4. **React** - 🔷 سماوي (#61DAFB)
5. **Tailwind CSS** - 💠 أزرق فاتح (#38BDF8)
6. **TypeScript** - 🔷 أزرق (#007ACC)
7. **Node.js** - 🟩 أخضر (#83CD29)
8. **GitHub** - ⚫⚪ أبيض/أسود (theme-aware)

## 📁 الملفات المُضافة/المُعدلة

### 1️⃣ `index.html`
```html
<!-- Tech Stack Logo Loop -->
<section class="tech-stack-loop" id="techStackLoop">
    <!-- SVG logos مع الأسماء -->
</section>
```

### 2️⃣ `styles/main.css`
- `.tech-stack-loop` - Container الرئيسي
- `.tech-stack-wrapper` - Wrapper مع fade effect
- `.tech-stack-track` - Track للحركة
- `.tech-logo` - كل logo
- `@keyframes scrollLogos` - Animation

### 3️⃣ `styles/responsive.css`
- Responsive للـ Tablets (768px)
- Responsive للـ Mobile (360px)
- تعديل الحجم والسرعة

## 🎮 التفاعلات

| التفاعل | التأثير |
|---------|---------|
| **Scroll** | الـ logos تتحرك تلقائياً يمين → شمال |
| **Hover على Section** | توقف الحركة |
| **Hover على Logo** | يكبر + يدور + يوضح |
| **Theme Change** | الألوان تتغير تلقائياً |

## ⚙️ التخصيص

### تغيير السرعة

في `styles/main.css`:

```css
.tech-stack-track {
  animation: scrollLogos 30s linear infinite;
  /* غيّر 30s إلى أسرع (20s) أو أبطأ (40s) */
}
```

### تغيير المسافة بين اللوجوهات

```css
.tech-stack-track {
  gap: 60px; /* زود أو قلل المسافة */
}
```

### تغيير حجم اللوجوهات

```css
.tech-icon {
  width: 60px;  /* الحجم الأصلي */
  height: 60px;
}
```

### إضافة تقنية جديدة

1. افتح `index.html`
2. انسخ أي `<div class="tech-logo">...</div>`
3. غيّر الـ SVG والاسم
4. ضعه **مرتين** (في الـ set الأول والتاني) عشان الـ loop

مثال:

```html
<div class="tech-logo">
    <svg viewBox="0 0 128 128" class="tech-icon">
        <!-- SVG path للتقنية الجديدة -->
    </svg>
    <span class="tech-name">TypeScript</span>
</div>
```

### حذف تقنية

1. احذف الـ `<div class="tech-logo">` من الـ set الأول
2. احذفها كمان من الـ set التاني (المكرر)

## 🎨 الألوان والثيم

الـ logos تستخدم `currentColor` وبتاخد اللون من CSS Variables:

```css
.tech-icon {
  color: var(--text-secondary);  /* اللون العادي */
}

.tech-logo:hover .tech-icon {
  color: var(--text-primary);    /* لون الـ hover */
}
```

**تلقائياً:**
- 🌙 Dark Mode: الـ icons بيضاء/فاتحة
- ☀️ Light Mode: الـ icons سودا/غامقة

## 📱 Responsive Breakpoints

| الشاشة | حجم الـ Icon | المسافة | السرعة |
|--------|-------------|---------|--------|
| **Desktop** | 60px | 60px | 30s |
| **Tablet (768px)** | 50px | 40px | 30s |
| **Mobile (360px)** | 40px | 30px | 20s |

## 🎯 الموقع

القسم موجود:
- ✅ تحت الـ Hero Section مباشرة
- ✅ فوق الـ About Preview
- ✅ في الصفحة الرئيسية (index.html)

## 💡 نصائح

### للحصول على SVG جديدة:

1. **Simple Icons** - https://simpleicons.org/
2. **DevIcon** - https://devicon.dev/
3. **Font Awesome** - https://fontawesome.com/

### لتحويل SVG colored إلى currentColor:

```html
<!-- قبل -->
<path fill="#FF0000" d="..."/>

<!-- بعد -->
<path fill="currentColor" d="..."/>
```

### لتغيير اتجاه الحركة (من اليسار لليمين):

```css
@keyframes scrollLogos {
  0% {
    transform: translateX(-50%); /* عكس القيم */
  }
  100% {
    transform: translateX(0);
  }
}
```

## 🚀 الأداء

- ✅ CSS Animation محسّنة
- ✅ `will-change` للـ performance
- ✅ `transform` بدل `position` للحركة
- ✅ مافيش JavaScript إضافي
- ✅ SVG inline (سريعة)

## 🐛 استكشاف الأخطاء

### الحركة متقطعة؟

```css
.tech-stack-track {
  will-change: transform; /* أضف هذا */
}
```

### اللوجوهات مقطوعة على الجوانب؟

```css
.tech-stack-wrapper {
  /* تأكد من وجود الـ mask */
  mask-image: linear-gradient(
    to right,
    transparent,
    black 10%,
    black 90%,
    transparent
  );
}
```

### الحركة سريعة جداً على الموبايل؟

في `styles/responsive.css`:

```css
@media (max-width: 360px) {
  .tech-stack-track {
    animation: scrollLogos 25s linear infinite; /* زود الوقت */
  }
}
```

## 📚 الموارد

- [CSS Animations Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations)
- [SVG Tutorial](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial)
- [DevIcons Collection](https://devicon.dev/)

---

**تم التطوير بواسطة:** Shady Gaber  
**التاريخ:** 2025  
**النسخة:** 1.0

