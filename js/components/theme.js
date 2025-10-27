// ============================================
// THEME MANAGER - Dark/Light Mode
// ============================================

export class ThemeManager {
    constructor() {
        this.themeToggle = document.getElementById('themeToggle');
        this.currentTheme = this.getStoredTheme() || 'light';
        
        this.init();
    }

    init() {
        // Set initial theme
        this.setTheme(this.currentTheme, false);

        // Add event listener
        if (this.themeToggle) {
            this.themeToggle.addEventListener('click', () => this.toggleTheme());
        }

        // Listen for system theme changes
        this.watchSystemTheme();
    }

    toggleTheme() {
        const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.setTheme(newTheme, true);
    }

    setTheme(theme, animate = true) {
        this.currentTheme = theme;
        document.documentElement.setAttribute('data-theme', theme);
        
        // Store preference
        localStorage.setItem('theme', theme);

        // Add animation class
        if (animate) {
            document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
            setTimeout(() => {
                document.body.style.transition = '';
            }, 300);
        }

        // Dispatch custom event
        window.dispatchEvent(new CustomEvent('themechange', { detail: { theme } }));
    }

    getStoredTheme() {
        return localStorage.getItem('theme');
    }

    watchSystemTheme() {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        
        mediaQuery.addEventListener('change', (e) => {
            // Only apply system theme if user hasn't set a preference
            if (!this.getStoredTheme()) {
                this.setTheme(e.matches ? 'dark' : 'light', true);
            }
        });
    }

    getTheme() {
        return this.currentTheme;
    }
}

