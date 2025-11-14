// ============================================
// CONTACT PAGE - Form Handling
// ============================================

class ContactManager {
  constructor() {
    this.form = document.getElementById("contactForm");
    this.formMessage = document.getElementById("formMessage");

    // EmailJS Configuration
    this.emailConfig = {
      serviceID: "service_lvxsfue",
      templateID: "template_72grn2i",
      publicKey: "VszWzsIXTU6ZOK5OV",
    };

    this.init();
  }

  init() {
    if (!this.form) return;

    // Initialize EmailJS
    if (typeof emailjs !== "undefined") {
      emailjs.init(this.emailConfig.publicKey);
    }

    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      this.handleSubmit();
    });

    // Add input validation
    const inputs = this.form.querySelectorAll(".form-input, .form-textarea");
    inputs.forEach((input) => {
      input.addEventListener("blur", () => this.validateField(input));
      input.addEventListener("input", () => this.clearFieldError(input));
    });
  }

  async handleSubmit() {
    // Get form data
    const formData = new FormData(this.form);
    const data = Object.fromEntries(formData);

    // Validate all fields
    if (!this.validateForm()) {
      this.showMessage(
        "Please fill in all required fields correctly.",
        "error"
      );
      return;
    }

    // Show loading state
    const submitButton = this.form.querySelector('button[type="submit"]');
    const originalText = submitButton.innerHTML;
    const originalHeight = submitButton.offsetHeight;
    const originalWidth = submitButton.offsetWidth;

    submitButton.disabled = true;
    submitButton.style.minHeight = originalHeight + "px";
    submitButton.style.height = originalHeight + "px";
    submitButton.style.width = originalWidth + "px";
    submitButton.innerHTML = "Sending...";

    try {
      // Send email via EmailJS
      await this.sendEmail(data);

      // Success
      this.showMessage(
        "Thank you! Your message has been sent successfully.",
        "success"
      );
      this.form.reset();
    } catch (error) {
      // Error
      this.showMessage(
        "Oops! Something went wrong. Please try again later.",
        "error"
      );
      console.error("Form submission error:", error);
    } finally {
      // Reset button
      submitButton.disabled = false;
      submitButton.innerHTML = originalText;
      submitButton.style.minHeight = "";
      submitButton.style.height = "";
      submitButton.style.width = "";
    }
  }

  async sendEmail(data) {
    // Check if EmailJS is loaded
    if (typeof emailjs === "undefined") {
      throw new Error("EmailJS is not loaded");
    }

    // Prepare template parameters
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      reply_to: data.email,
      to_email: "shadygaber.dev@gmail.com",
      subject: data.subject,
      message: data.message,
      to_name: "Shady",
    };

    try {
      // Send email using EmailJS
      const response = await emailjs.send(
        this.emailConfig.serviceID,
        this.emailConfig.templateID,
        templateParams
      );

      return response;
    } catch (error) {
      console.error("EmailJS Error:", error);
      throw error;
    }
  }

  validateForm() {
    const inputs = this.form.querySelectorAll(
      ".form-input[required], .form-textarea[required]"
    );
    let isValid = true;

    inputs.forEach((input) => {
      if (!this.validateField(input)) {
        isValid = false;
      }
    });

    return isValid;
  }

  validateField(field) {
    const value = field.value.trim();
    const type = field.type;
    let isValid = true;
    let errorMessage = "";

    // Check if empty
    if (field.hasAttribute("required") && !value) {
      isValid = false;
      errorMessage = "This field is required";
    }
    // Validate email
    else if (type === "email" && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        isValid = false;
        errorMessage = "Please enter a valid email address";
      }
    }
    // Validate minimum length
    else if (field.hasAttribute("minlength")) {
      const minLength = parseInt(field.getAttribute("minlength"));
      if (value.length < minLength) {
        isValid = false;
        errorMessage = `Minimum ${minLength} characters required`;
      }
    }

    // Update field styling
    if (!isValid) {
      this.showFieldError(field, errorMessage);
    } else {
      this.clearFieldError(field);
    }

    return isValid;
  }

  showFieldError(field, message) {
    field.style.borderColor = "#ef4444";

    // Remove existing error message
    const existingError = field.parentElement.querySelector(".field-error");
    if (existingError) {
      existingError.remove();
    }

    // Add error message
    const errorElement = document.createElement("span");
    errorElement.className = "field-error";
    errorElement.style.color = "#ef4444";
    errorElement.style.fontSize = "0.875rem";
    errorElement.style.marginTop = "0.25rem";
    errorElement.style.display = "block";
    errorElement.textContent = message;
    field.parentElement.appendChild(errorElement);
  }

  clearFieldError(field) {
    field.style.borderColor = "";
    const errorElement = field.parentElement.querySelector(".field-error");
    if (errorElement) {
      errorElement.remove();
    }
  }

  showMessage(message, type) {
    if (!this.formMessage) return;

    this.formMessage.textContent = message;
    this.formMessage.className = `form-message ${type}`;

    // Auto hide after 5 seconds
    setTimeout(() => {
      this.formMessage.className = "form-message";
    }, 5000);
  }
}

// Initialize contact manager
document.addEventListener("DOMContentLoaded", () => {
  new ContactManager();
});
