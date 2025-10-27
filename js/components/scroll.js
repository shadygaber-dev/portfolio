// ============================================
// SCROLL MANAGER - Progress Bar & Back to Top
// ============================================

export class ScrollManager {
    constructor() {
        this.scrollProgress = document.getElementById('scrollProgress');
        this.backToTop = document.getElementById('backToTop');
        this.header = document.getElementById('header');
        
        this.lastScroll = 0;
        this.ticking = false;
        
        this.init();
    }

    init() {
        // Add scroll event listener with throttling
        window.addEventListener('scroll', () => this.handleScroll(), { passive: true });

        // Back to top button
        if (this.backToTop) {
            this.backToTop.addEventListener('click', () => this.scrollToTop());
        }

        // Smooth scroll for anchor links
        this.initSmoothScroll();

        // Initialize reveal animations
        this.initScrollReveal();
    }

    handleScroll() {
        this.lastScroll = window.pageYOffset;

        if (!this.ticking) {
            window.requestAnimationFrame(() => {
                this.updateScrollProgress();
                this.updateHeader();
                this.updateBackToTop();
                this.ticking = false;
            });

            this.ticking = true;
        }
    }

    updateScrollProgress() {
        if (!this.scrollProgress) return;

        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (this.lastScroll / windowHeight) * 100;
        
        this.scrollProgress.style.width = `${scrolled}%`;
    }

    updateHeader() {
        if (!this.header) return;

        if (this.lastScroll > 100) {
            this.header.classList.add('scrolled');
        } else {
            this.header.classList.remove('scrolled');
        }
    }

    updateBackToTop() {
        if (!this.backToTop) return;

        if (this.lastScroll > 300) {
            this.backToTop.classList.add('visible');
        } else {
            this.backToTop.classList.remove('visible');
        }
    }

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                const href = anchor.getAttribute('href');
                
                // Skip if it's just "#"
                if (href === '#') return;

                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    
                    const headerHeight = this.header ? this.header.offsetHeight : 0;
                    const targetPosition = target.offsetTop - headerHeight - 20;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });

                    // Update URL without jumping
                    history.pushState(null, null, href);
                }
            });
        });
    }

    initScrollReveal() {
        const reveals = document.querySelectorAll('.reveal');
        
        if (reveals.length === 0) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        });

        reveals.forEach(reveal => observer.observe(reveal));
    }

    // Parallax effect
    addParallax(element, speed = 0.5) {
        if (!element) return;

        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallax = scrolled * speed;
            element.style.transform = `translateY(${parallax}px)`;
        }, { passive: true });
    }
}

