// ============================================
// LOADING SPLASH SCREEN MANAGER
// ============================================

export class VideoSplashManager {
    constructor() {
        this.loadingSplash = document.getElementById('loadingSplash');
        this.mainContent = document.getElementById('mainContent');
        
        this.init();
    }

    init() {
        // Check if splash elements exist
        if (!this.loadingSplash) {
            // Show main content immediately
            if (this.mainContent) {
                this.mainContent.classList.add('visible');
            }
            return;
        }

        if (!this.mainContent) {
            return;
        }

        // Prevent scrolling while splash is showing
        document.body.style.overflow = 'hidden';
        
        // Hide splash after 3 seconds
        setTimeout(() => {
            this.hideSplash();
        }, 1500);
    }

    hideSplash() {
        // Hide splash with fade out
        this.loadingSplash.classList.add('hidden');
        
        // Show main content with fade in
        setTimeout(() => {
            this.mainContent.classList.add('visible');
            // Re-enable scrolling
            document.body.style.overflow = '';
            // Scroll to top
            window.scrollTo({
                top: 0,
                behavior: 'instant'
            });
        }, 150);

        // Remove splash from DOM after transition
        setTimeout(() => {
            if (this.loadingSplash && this.loadingSplash.parentNode) {
                this.loadingSplash.remove();
            }
        }, 1000);
    }
}

