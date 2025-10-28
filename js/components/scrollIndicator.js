// Scroll Indicator - Show on scroll, hide after 5 seconds
export function initScrollIndicator() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (!scrollIndicator) return;

    let hideTimeout;
    
    // Initially show for 5 seconds then hide
    hideTimeout = setTimeout(() => {
        scrollIndicator.classList.add('hidden');
    }, 5000);
    
    window.addEventListener('scroll', () => {
        // Check if there's more content to scroll
        const scrollTop = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        
        // If reached bottom, hide permanently
        if (scrollTop + windowHeight >= documentHeight - 50) {
            scrollIndicator.classList.add('hidden');
            clearTimeout(hideTimeout);
            return;
        }
        
        // Show indicator when scrolling
        scrollIndicator.classList.remove('hidden');
        
        // Clear existing timeout
        clearTimeout(hideTimeout);
        
        // Hide after 5 seconds of scrolling
        hideTimeout = setTimeout(() => {
            scrollIndicator.classList.add('hidden');
        }, 5000);
    });

    // Click to scroll down
    scrollIndicator.addEventListener('click', () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    });
}

