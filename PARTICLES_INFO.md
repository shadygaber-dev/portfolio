# Particles.js Integration 🌟

تم إضافة مكتبة Particles.js لإنشاء خلفية تفاعلية جميلة في صفحة الـ Hero.

## ✨ الميزات

- ✅ خلفية particles متحركة وتفاعلية **في كل الموقع**
- ✅ Fixed position - تبقى ثابتة مع السكرول
- ✅ دعم كامل للـ Dark/Light Theme
- ✅ تفاعل مع الماوس (Hover & Click)
- ✅ تحميل تلقائي من CDN (بدون تثبيت)
- ✅ تحسين الأداء مع Retina Displays
- ✅ تعمل في كل الصفحات (index, about, projects, skills, contact)

## 🎨 كيف يعمل

### 1. الملفات المضافة

```
portfolio/
├── js/
│   └── components/
│       └── particles.js          # مدير الـ particles
├── particlesjs-config.json       # ملف الإعدادات (للمرجع فقط)
└── PARTICLES_INFO.md            # هذا الملف
```

### 2. التكامل

الـ particles يتم تحميله تلقائياً في:
- ✅ `js/main.js` - يتم استدعاء ParticlesManager
- ✅ `styles/main.css` - CSS للـ container (fixed position)
- ✅ يظهر في **كل الصفحات** كخلفية ثابتة

### 3. تغيير الثيم التلقائي

عند تغيير الثيم من Light → Dark:
- 🌙 **Dark Theme**: Particles بيضاء مع خطوط بيضاء
- ☀️ **Light Theme**: Particles بنفسجية (#4f46e5) مع خطوط بنفسجية

## ⚙️ التخصيص

### تغيير عدد الـ Particles

افتح `js/components/particles.js` وغير:

```javascript
"number": {
  "value": 80,  // غير العدد هنا (افتراضي: 80)
  ...
}
```

### تغيير السرعة

```javascript
"move": {
  "speed": 2,  // غير السرعة (افتراضي: 2)
  ...
}
```

### تغيير المسافة بين الخطوط

```javascript
"line_linked": {
  "distance": 150,  // المسافة (افتراضي: 150)
  ...
}
```

### تغيير الألوان

```javascript
"color": {
  "value": isDark ? "#ffffff" : "#4f46e5"  // غير الألوان هنا
}
```

### تغيير تفاعل الماوس

```javascript
"onhover": {
  "enable": true,
  "mode": "grab"  // يمكن تغييره إلى: repulse, bubble, grab
}
```

## 🚀 التحكم في التفعيل

### إيقاف Particles مؤقتاً

في `js/main.js`:

```javascript
// احذف أو علق على هذا الكود:
this.particles = new ParticlesManager();
```

### التحكم في الشفافية

في `styles/main.css`:

```css
#particles-js {
  opacity: 0.8;  /* غيّر القيمة (0.5 لأخف، 1 لأوضح) */
}
```

### تخصيص لصفحات معينة فقط

في `js/main.js`:

```javascript
// مثال: تفعيل فقط في الصفحة الرئيسية
if (window.location.pathname === '/index.html' || window.location.pathname === '/') {
    this.particles = new ParticlesManager();
}
```

## 📊 الأداء

- ⚡ يتم تحميل المكتبة من CDN (بدون زيادة حجم المشروع)
- ⚡ Canvas rendering محسّن
- ⚡ Retina detection تلقائي
- ⚡ Pointer events محسّنة

## 🎮 التفاعلات المتاحة

| التفاعل | الوصف |
|---------|-------|
| **Hover** | عند تحريك الماوس، الـ particles تنجذب للماوس |
| **Click** | عند الضغط، يضاف 4 particles جديدة |
| **Resize** | يتكيف تلقائياً مع تغيير حجم الشاشة |

## 🔧 استكشاف الأخطاء

### Particles لا تظهر؟

1. تأكد من وجود `.hero` section في الصفحة
2. افتح Console وتأكد من رسالة: `✨ Particles.js initialized successfully!`
3. تأكد من الاتصال بالإنترنت (المكتبة تتحمل من CDN)

### Particles بطيئة؟

قلل عدد الـ particles:
```javascript
"value": 50,  // بدلاً من 80
```

## 📚 الموارد

- [Particles.js GitHub](https://github.com/VincentGarreau/particles.js/)
- [Particles.js Configuration](https://vincentgarreau.com/particles.js/)

---

**تم التطوير بواسطة:** Shady Gaber  
**التاريخ:** 2025  
**النسخة:** 1.0

