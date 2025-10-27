// ============================================
// PROJECTS PAGE - Filter & Display
// ============================================

class ProjectsManager {
    constructor() {
        this.filterButtons = document.querySelectorAll('.filter-btn');
        this.projects = document.querySelectorAll('.project-card-full');
        this.trainingProjects = document.querySelectorAll('.training-card');
        
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
        // Filter professional projects
        this.projects.forEach(project => {
            const categories = project.getAttribute('data-category');
            
            if (filter === 'all') {
                this.showProject(project);
            } else if (filter === 'professional' && categories && categories.includes('professional')) {
                this.showProject(project);
            } else if (filter === 'training') {
                this.hideProject(project);
            } else if (categories && categories.includes(filter)) {
                this.showProject(project);
            } else {
                this.hideProject(project);
            }
        });

        // Filter training projects
        this.trainingProjects.forEach(project => {
            const categories = project.getAttribute('data-category');
            
            if (filter === 'all') {
                this.showTrainingProject(project);
            } else if (filter === 'training' && categories && categories.includes('training')) {
                this.showTrainingProject(project);
            } else if (filter === 'professional') {
                this.hideTrainingProject(project);
            } else if (categories && categories.includes(filter)) {
                this.showTrainingProject(project);
            } else {
                this.hideTrainingProject(project);
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

    showTrainingProject(project) {
        project.style.display = 'block';
        setTimeout(() => {
            project.style.opacity = '1';
            project.style.transform = 'translateY(0)';
        }, 10);
    }

    hideTrainingProject(project) {
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

