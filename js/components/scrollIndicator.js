// Scroll Indicator - Show on scroll, hide after 2 seconds
export function initScrollIndicator() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (!scrollIndicator) return;

    let hideTimeout;
    
    // Initially hide if not at top
    if (window.scrollY > 50) {
        scrollIndicator.classList.add('hidden');
    }
    
    window.addEventListener('scroll', () => {
        // Show indicator when scrolling
        scrollIndicator.classList.remove('hidden');
        
        // Clear existing timeout
        clearTimeout(hideTimeout);
        
        // Hide after 2 seconds of scrolling
        hideTimeout = setTimeout(() => {
            scrollIndicator.classList.add('hidden');
        }, 2000);
    });

    // Click to scroll down
    scrollIndicator.addEventListener('click', () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    });
}

