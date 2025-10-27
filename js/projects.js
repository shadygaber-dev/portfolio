// ============================================
// PROJECTS PAGE - Filter & Display
// ============================================

class ProjectsManager {
    constructor() {
        this.filterButtons = document.querySelectorAll('.filter-btn');
        this.projects = document.querySelectorAll('.project-card-full');
        
        this.init();
    }

    init() {
        if (this.filterButtons.length === 0) return;

        // Add click listeners to filter buttons
        this.filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                const filter = button.getAttribute('data-filter');
                this.filterProjects(filter);
                this.updateActiveButton(button);
            });
        });
    }

    filterProjects(filter) {
        this.projects.forEach(project => {
            const categories = project.getAttribute('data-category');
            
            if (filter === 'all') {
                this.showProject(project);
            } else if (categories && categories.includes(filter)) {
                this.showProject(project);
            } else {
                this.hideProject(project);
            }
        });
    }

    showProject(project) {
        project.style.display = 'block';
        setTimeout(() => {
            project.style.opacity = '1';
            project.style.transform = 'translateY(0)';
        }, 10);
    }

    hideProject(project) {
        project.style.opacity = '0';
        project.style.transform = 'translateY(20px)';
        setTimeout(() => {
            project.style.display = 'none';
        }, 300);
    }

    updateActiveButton(activeButton) {
        this.filterButtons.forEach(button => {
            button.classList.remove('active');
        });
        activeButton.classList.add('active');
    }
}

// Initialize projects manager
document.addEventListener('DOMContentLoaded', () => {
    new ProjectsManager();
});

