// Letter by letter animation for hero title
export function initLetterAnimation() {
    const heroTitle = document.querySelector('.hero-title');
    if (!heroTitle) return;

    const lines = heroTitle.querySelectorAll('.line');
    
    lines.forEach((line, lineIndex) => {
        const text = line.textContent;
        line.textContent = '';
        
        // Split text into individual characters
        const chars = text.split('');
        
        chars.forEach((char, charIndex) => {
            const span = document.createElement('span');
            span.textContent = char === ' ' ? '\u00A0' : char; // Use non-breaking space
            span.style.animationDelay = `${(lineIndex * 0.3) + (charIndex * 0.03)}s`;
            line.appendChild(span);
        });
    });
}

