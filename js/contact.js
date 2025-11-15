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
      templateID: "template_eyca4ek", // Replace with your EmailJS Template ID
      publicKey: "VszWzsIXTU6ZOK5OV", // Replace with your EmailJS Public Key
    };

    this.init();
  }

  init() {
    if (!this.form) return;

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

    // Validate all fields` 
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
    
    submitButton.disabled = true;
    submitButton.style.minHeight = originalHeight + "px";
    submitButton.style.height = originalHeight + "px";
    submitButton.style.width = originalWidth + "px";
    submitButton.textContent = "Sending...";

    try {
      // Send form via Web3Forms
      await this.submitForm(data);

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
    }
  }

  async submitForm(data) {
    // Get access key from hidden input
    const accessKeyInput = this.form.querySelector('input[name="access_key"]');
    if (!accessKeyInput || !accessKeyInput.value) {
      throw new Error("Web3Forms access key is missing");
    }

    // Prepare form data for Web3Forms (using only required and standard fields)
    const formData = new FormData();
    formData.append("access_key", accessKeyInput.value);
    formData.append("name", data.name || "");
    formData.append("email", data.email || "");
    formData.append("subject", data.subject || "");
    formData.append("message", data.message || "");

    try {
      // Send email using EmailJS
      const response = await emailjs.send(
        this.emailConfig.serviceID,
        this.emailConfig.templateID,
        templateParams
      );

      console.log("Email sent successfully:", response);
      return response;
    } catch (error) {
      console.error("Web3Forms Error:", error);
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
