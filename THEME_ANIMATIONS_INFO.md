# Theme-Specific Animations 🌓✨

تم إضافة أنيميشنات مختلفة للـ Tech Stack Logo Loop حسب الثيم (Dark/Light Mode)!

## 🎭 الأنيميشنات المختلفة

### ☀️ Light Mode
```css
Animation: scrollLogosLight
Duration: 30s (normal speed)
Hover Effect: pulse (scale bounce)
Shadow: Dark subtle shadow
```

**الخصائص:**
- 🐌 **سرعة عادية**: 30 ثانية لكل دورة
- ⚫ **Shadow داكن**: `drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1))`
- 💫 **Pulse animation**: تكبير بسيط عند الـ hover
- 🎯 **Focus على الألوان**: الألوان الأصلية واضحة

### 🌙 Dark Mode
```css
Animation: scrollLogosDark
Duration: 25s (faster)
Hover Effect: glowPulse (glow + scale)
Shadow: White glow + cyan accent
```

**الخصائص:**
- ⚡ **أسرع**: 25 ثانية لكل دورة (20% أسرع)
- ✨ **Glow effect**: `drop-shadow` أبيض مع لمعة سماوية
- 🌟 **Enhanced glow**: عند الـ hover يضيء أكثر
- 🔷 **Cyan accent**: لمعة سماوية (#61DAFB)

## 📱 Mobile Responsive

### على الموبايل (360px):
- ☀️ **Light Mode**: 20s
- 🌙 **Dark Mode**: 18s (أسرع)

## 🎨 التفاصيل التقنية

### 1. Scroll Animation

**Light Mode:**
```css
@keyframes scrollLogosLight {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
```

**Dark Mode:**
```css
@keyframes scrollLogosDark {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
/* Same movement, different duration */
```

### 2. Hover Effects

**Light Mode (Pulse):**
```css
@keyframes pulse {
  0%, 100% { transform: scale(1.1); }
  50% { transform: scale(1.15); }
}
```

**Dark Mode (Glow Pulse):**
```css
@keyframes glowPulse {
  0%, 100% {
    transform: scale(1.1);
    filter: drop-shadow(0 8px 24px rgba(255, 255, 255, 0.2)) 
            drop-shadow(0 0 40px rgba(97, 218, 251, 0.3));
  }
  50% {
    transform: scale(1.15);
    filter: drop-shadow(0 12px 32px rgba(255, 255, 255, 0.3)) 
            drop-shadow(0 0 60px rgba(97, 218, 251, 0.5));
  }
}
```

### 3. Icon Styling

**Light Mode:**
```css
.tech-icon {
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
}

.tech-logo:hover .tech-icon {
  filter: drop-shadow(0 8px 16px rgba(0, 0, 0, 0.15));
  animation: pulse 1s ease-in-out;
}
```

**Dark Mode:**
```css
[data-theme="dark"] .tech-icon {
  filter: drop-shadow(0 4px 12px rgba(255, 255, 255, 0.1));
}

[data-theme="dark"] .tech-logo:hover .tech-icon {
  filter: drop-shadow(0 8px 24px rgba(255, 255, 255, 0.2)) 
          drop-shadow(0 0 40px rgba(97, 218, 251, 0.3));
  animation: glowPulse 1s ease-in-out;
}
```

## 🔄 كيف يعمل التبديل

1. **تغيير الثيم** يحدث عبر `data-theme` attribute على `<html>`
2. **CSS Selectors** تكتشف التغيير تلقائياً:
   ```css
   [data-theme="dark"] .tech-stack-track { ... }
   ```
3. **Animation يتغير** فوراً بدون reload

## ⚙️ التخصيص

### تغيير السرعة

في `styles/main.css`:

```css
/* Light Mode */
.tech-stack-track {
  animation: scrollLogosLight 30s linear infinite;
  /* غير 30s حسب الرغبة */
}

/* Dark Mode */
[data-theme="dark"] .tech-stack-track {
  animation: scrollLogosDark 25s linear infinite;
  /* غير 25s حسب الرغبة */
}
```

### تغيير الـ Glow Color

```css
[data-theme="dark"] .tech-logo:hover .tech-icon {
  filter: drop-shadow(0 8px 24px rgba(255, 255, 255, 0.2)) 
          drop-shadow(0 0 40px rgba(97, 218, 251, 0.3));
  /* غيّر اللون الثاني للـ glow */
  /* مثلاً: rgba(255, 0, 255, 0.3) للبنفسجي */
}
```

### إضافة أنيميشن مختلف تماماً

```css
/* مثال: اجعل Dark Mode يتحرك من اليمين لليسار */
@keyframes scrollLogosDark {
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0); }
}
```

## 🎯 الفرق الواضح

| الميزة | Light Mode ☀️ | Dark Mode 🌙 |
|--------|---------------|--------------|
| **السرعة** | 30s (عادي) | 25s (أسرع) |
| **Shadow** | أسود خفيف | أبيض مضيء |
| **Hover** | Pulse بسيط | Glow مع Pulse |
| **Accent** | - | Cyan glow |
| **Intensity** | Subtle | Enhanced |

## 💡 نصائح

### للحصول على أفضل تجربة:

1. **جرب التبديل** بين الثيمات لرؤية الفرق
2. **على الموبايل** التأثير أسرع للأداء
3. **Hover** على اللوجوهات في Dark Mode لرؤية الـ glow
4. **الألوان الأصلية** تظهر بوضوح في الثيمين

### Performance Tips:

- ✅ استخدمنا `transform` بدل `position` للسرعة
- ✅ `filter: drop-shadow` أخف من `box-shadow`
- ✅ Animation duration محسّن للأداء
- ✅ `will-change` يمكن إضافته للتحسين:
  ```css
  .tech-stack-track {
    will-change: transform;
  }
  ```

## 🐛 استكشاف الأخطاء

### الأنيميشن مش بيتغير؟

1. تأكد إن `data-theme` attribute موجود على `<html>`
2. افتح DevTools وشوف الـ theme
3. جرب Refresh الصفحة

### الـ Glow مش ظاهر في Dark Mode؟

```css
/* تأكد من الـ selector */
[data-theme="dark"] .tech-logo:hover .tech-icon {
  /* ... */
}
```

### عايز تعطل أنيميشن معين؟

```css
/* مثلاً: عطل الـ hover animation */
[data-theme="dark"] .tech-logo:hover .tech-icon {
  animation: none;
}
```

## 📚 الملفات المعدّلة

1. ✅ `styles/main.css` - الأنيميشنات الرئيسية
2. ✅ `styles/responsive.css` - Mobile animations
3. ✅ `THEME_ANIMATIONS_INFO.md` - هذا الملف

---

**تم التطوير بواسطة:** Shady Gaber  
**التاريخ:** 2025  
**النسخة:** 1.0  
**الثيمات المدعومة:** Light & Dark 🌓

