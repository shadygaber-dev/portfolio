// ============================================
// MAIN JAVASCRIPT - Portfolio Website
// ============================================

// Import Components
import { ThemeManager } from './components/theme.js';
import { ScrollManager } from './components/scroll.js';
import { NavigationManager } from './components/navigation.js';
import { AnimationManager } from './components/animations.js';
import { initLetterAnimation } from './components/letterAnimation.js';
import { initScrollIndicator } from './components/scrollIndicator.js';

// Initialize Application
class App {
    constructor() {
        this.init();
    }

    init() {
        // Wait for DOM to be fully loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.start());
        } else {
            this.start();
        }
    }

    start() {
        // Initialize all managers
        this.theme = new ThemeManager();
        this.scroll = new ScrollManager();
        this.navigation = new NavigationManager();
        this.animation = new AnimationManager();

        // Initialize letter animation for hero title
        initLetterAnimation();

        // Initialize scroll indicator
        initScrollIndicator();

        // Initialize counter animations on homepage
        if (document.querySelector('.stat-number')) {
            this.initCounters();
        }

        console.log('✨ Portfolio website initialized successfully!');
    }

    // Counter Animation for Stats
    initCounters() {
        const counters = document.querySelectorAll('.stat-number');
        const speed = 200; // Animation speed

        const animateCounter = (counter) => {
            const target = +counter.getAttribute('data-count');
            const increment = target / speed;
            let count = 0;

            const updateCount = () => {
                count += increment;
                if (count < target) {
                    counter.textContent = Math.ceil(count);
                    requestAnimationFrame(updateCount);
                } else {
                    counter.textContent = target + '+';
                }
            };

            updateCount();
        };

        // Intersection Observer for counters
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(counter => observer.observe(counter));
    }
}

// Start the application
new App();

