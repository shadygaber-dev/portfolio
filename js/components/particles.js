// ============================================
// PARTICLES MANAGER - Background Particles Effect
// ============================================

export class ParticlesManager {
    constructor() {
        this.particlesContainer = null;
        this.currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
        this.init();
    }

    init() {
        // Create particles container
        this.createContainer();
        
        // Load particles.js library and initialize
        this.loadParticlesJS();

        // Listen for theme changes
        this.setupThemeListener();
    }

    createContainer() {
        // Check if container already exists
        if (document.getElementById('particles-js')) {
            this.particlesContainer = document.getElementById('particles-js');
            return;
        }

        // Create container
        this.particlesContainer = document.createElement('div');
        this.particlesContainer.id = 'particles-js';
        
        // Insert it at the beginning of body (fixed background for entire site)
        document.body.insertBefore(this.particlesContainer, document.body.firstChild);
    }

    loadParticlesJS() {
        // Check if particles.js is already loaded
        if (typeof particlesJS !== 'undefined') {
            this.initializeParticles();
            return;
        }

        // Load particles.js from CDN
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
        script.onload = () => {
            this.initializeParticles();
        };
        document.head.appendChild(script);
    }

    initializeParticles() {
        const config = this.getConfig();
        
        if (typeof particlesJS !== 'undefined') {
            particlesJS('particles-js', config);
            console.log('✨ Particles.js initialized successfully!');
        }
    }

    getConfig() {
        // Get theme-aware configuration
        const isDark = this.currentTheme === 'dark';
        
        return {
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": isDark ? "#ffffff" : "#4f46e5" // White for dark, primary color for light
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": isDark ? "#ffffff" : "#4f46e5"
                    }
                },
                "opacity": {
                    "value": isDark ? 0.3 : 0.2,
                    "random": false,
                    "anim": {
                        "enable": true,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": isDark ? "#ffffff" : "#4f46e5",
                    "opacity": isDark ? 0.3 : 0.2,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 2,
                    "direction": "none",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 140,
                        "line_linked": {
                            "opacity": 0.5
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        };
    }

    setupThemeListener() {
        // Listen for theme changes from ThemeManager
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'data-theme') {
                    this.currentTheme = document.documentElement.getAttribute('data-theme');
                    this.updateParticles();
                }
            });
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['data-theme']
        });
    }

    updateParticles() {
        // Reinitialize particles with new theme
        if (this.particlesContainer && typeof particlesJS !== 'undefined') {
            // Clear existing particles
            this.particlesContainer.innerHTML = '';
            // Reinitialize with new config
            this.initializeParticles();
        }
    }

    destroy() {
        if (this.particlesContainer) {
            this.particlesContainer.remove();
        }
    }
}

