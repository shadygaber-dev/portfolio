// ============================================
// NAVIGATION MANAGER - Mobile Menu & Active Links
// ============================================

export class NavigationManager {
  constructor() {
    this.navToggle = document.getElementById("navToggle");
    this.navMenu = document.getElementById("navMenu");
    this.navLinks = document.querySelectorAll(".nav-link");
    this.navClose = document.querySelector(".nav-close");
    this.body = document.body;

    this.isOpen = false;

    this.init();
  }

  init() {
    // Mobile menu toggle
    if (this.navToggle) {
      this.navToggle.addEventListener("click", () => this.toggleMenu());
    }

    // Close menu when clicking on links
    this.navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        if (this.isOpen) {
          this.closeMenu();
        }
      });
    });

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
      if (
        this.isOpen &&
        !this.navMenu.contains(e.target) &&
        !this.navToggle.contains(e.target)
      ) {
        this.closeMenu();
      }
    });

    // Handle escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && this.isOpen) {
        this.closeMenu();
      }
    });

    // Update active link on scroll
    this.updateActiveLink();
    window.addEventListener("scroll", () => this.updateActiveLink(), {
      passive: true,
    });
  }

  toggleMenu() {
    if (this.isOpen) {
      this.closeMenu();
    } else {
      this.openMenu();
    }
  }

  openMenu() {
    this.isOpen = true;
    this.navMenu.classList.add("active");
    this.navToggle.classList.add("active");
    this.body.style.overflow = "hidden";

    // Add aria attributes for accessibility
    this.navToggle.setAttribute("aria-expanded", "true");
    this.navMenu.setAttribute("aria-hidden", "false");
    this.navClose.style.display = "block";
  }

  closeMenu() {
    this.isOpen = false;
    this.navMenu.classList.remove("active");
    this.navToggle.classList.remove("active");
    this.body.style.overflow = "";
    this.navClose.style.display = "none";

    // Update aria attributes
    this.navToggle.setAttribute("aria-expanded", "false");
    this.navMenu.setAttribute("aria-hidden", "true");
  }

  updateActiveLink() {
    // Don't update if we're on internal pages (not home)
    if (
      !window.location.pathname.endsWith("index.html") &&
      window.location.pathname !== "/"
    ) {
      return;
    }

    const sections = document.querySelectorAll("section[id]");
    const scrollPosition = window.scrollY + 200;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute("id");

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        this.navLinks.forEach((link) => {
          link.classList.remove("active");

          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }

  // Highlight current page in navigation
  highlightCurrentPage() {
    const currentPage =
      window.location.pathname.split("/").pop() || "index.html";

    this.navLinks.forEach((link) => {
      const linkPage = link.getAttribute("href");
      if (linkPage === currentPage) {
        link.classList.add("active");
      }
    });
  }
}
