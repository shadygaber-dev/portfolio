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
        // Add ripple effect to buttons (except submit buttons in forms)
        const buttons = document.querySelectorAll('.btn');
        
        buttons.forEach(button => {
            // Skip submit buttons in forms
            if (button.type === 'submit' && button.closest('form')) {
                return;
            }
            
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

}

