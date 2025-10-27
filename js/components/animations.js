// ============================================
// ANIMATION MANAGER - Scroll Animations & Effects
// ============================================

export class AnimationManager {
    constructor() {
        this.animatedElements = [];
        this.init();
    }

    init() {
        // Initialize fade-in animations
        this.initFadeInAnimations();
        
        // Initialize stagger animations
        this.initStaggerAnimations();
        
        // Add hover effects
        this.addHoverEffects();
    }

    initFadeInAnimations() {
        const fadeElements = document.querySelectorAll(
            '.fade-in, .fade-in-up, .fade-in-down, .fade-in-left, .fade-in-right'
        );

        if (fadeElements.length === 0) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translate(0, 0)';
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        });

        fadeElements.forEach(element => {
            // Set initial state
            element.style.opacity = '0';
            
            if (element.classList.contains('fade-in-up')) {
                element.style.transform = 'translateY(30px)';
            } else if (element.classList.contains('fade-in-down')) {
                element.style.transform = 'translateY(-30px)';
            } else if (element.classList.contains('fade-in-left')) {
                element.style.transform = 'translateX(-30px)';
            } else if (element.classList.contains('fade-in-right')) {
                element.style.transform = 'translateX(30px)';
            }
            
            element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
            
            observer.observe(element);
            this.animatedElements.push(element);
        });
    }

    initStaggerAnimations() {
        const staggerGroups = document.querySelectorAll('[data-stagger]');

        staggerGroups.forEach(group => {
            const items = group.children;
            const delay = parseInt(group.getAttribute('data-stagger-delay')) || 100;

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        Array.from(items).forEach((item, index) => {
                            setTimeout(() => {
                                item.classList.add('stagger-item', 'animate');
                            }, index * delay);
                        });
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.2 });

            observer.observe(group);
        });
    }

    addHoverEffects() {
        // Add ripple effect to buttons
        const buttons = document.querySelectorAll('.btn');
        
        buttons.forEach(button => {
            button.addEventListener('click', function(e) {
                const ripple = document.createElement('span');
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.width = ripple.style.height = size + 'px';
                ripple.style.left = x + 'px';
                ripple.style.top = y + 'px';
                ripple.classList.add('ripple-effect');
                
                this.appendChild(ripple);
                
                setTimeout(() => ripple.remove(), 600);
            });
        });
    }

    // Add custom animation to element
    animate(element, animationClass, duration = 1000) {
        return new Promise((resolve) => {
            element.classList.add(animationClass);
            
            setTimeout(() => {
                element.classList.remove(animationClass);
                resolve();
            }, duration);
        });
    }

    // Parallax effect for elements
    addParallax(selector, speed = 0.5) {
        const elements = document.querySelectorAll(selector);
        
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            
            elements.forEach(element => {
                const elementTop = element.offsetTop;
                const distance = scrolled - elementTop;
                const translate = distance * speed;
                
                element.style.transform = `translateY(${translate}px)`;
            });
        }, { passive: true });
    }

    // Typing effect
    typeWriter(element, text, speed = 100) {
        let i = 0;
        element.textContent = '';
        
        return new Promise((resolve) => {
            const type = () => {
                if (i < text.length) {
                    element.textContent += text.charAt(i);
                    i++;
                    setTimeout(type, speed);
                } else {
                    resolve();
                }
            };
            type();
        });
    }

    // Counter animation
    animateCounter(element, target, duration = 2000) {
        const start = 0;
        const increment = target / (duration / 16);
        let current = start;
        
        const updateCounter = () => {
            current += increment;
            
            if (current < target) {
                element.textContent = Math.ceil(current);
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target;
            }
        };
        
        updateCounter();
    }

    // Slide in element
    slideIn(element, direction = 'left', duration = 500) {
        const distances = {
            left: 'translateX(-100%)',
            right: 'translateX(100%)',
            top: 'translateY(-100%)',
            bottom: 'translateY(100%)'
        };
        
        element.style.transform = distances[direction];
        element.style.transition = `transform ${duration}ms ease-out`;
        
        requestAnimationFrame(() => {
            element.style.transform = 'translate(0, 0)';
        });
    }

    // Fade toggle
    fadeToggle(element, duration = 300) {
        if (element.style.opacity === '0' || !element.style.opacity) {
            this.fadeIn(element, duration);
        } else {
            this.fadeOut(element, duration);
        }
    }

    fadeIn(element, duration = 300) {
        element.style.opacity = '0';
        element.style.display = 'block';
        element.style.transition = `opacity ${duration}ms ease-in`;
        
        requestAnimationFrame(() => {
            element.style.opacity = '1';
        });
    }

    fadeOut(element, duration = 300) {
        element.style.transition = `opacity ${duration}ms ease-out`;
        element.style.opacity = '0';
        
        setTimeout(() => {
            element.style.display = 'none';
        }, duration);
    }
}

