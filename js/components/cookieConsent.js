/**
 * Cookie Consent Component
 * Handles cookie consent popup and user preferences
 */

const COOKIE_CONSENT_KEY = 'cookieConsent';
const COOKIE_CONSENT_EXPIRY = 365; // days

export class CookieConsent {
  constructor() {
    this.consentGiven = this.getConsentStatus();
    this.popup = null;
    this.init();
  }

  /**
   * Initialize the cookie consent component
   */
  init() {
    // Only show popup if user hasn't made a choice
    if (this.consentGiven === null) {
      this.createPopup();
      this.showPopup();
    }
  }

  /**
   * Get the current consent status from localStorage
   * @returns {boolean|null} true for accepted, false for rejected, null if not set
   */
  getConsentStatus() {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (consent === null) return null;
    return consent === 'accepted';
  }

  /**
   * Save consent preference
   * @param {boolean} accepted - true for accept, false for reject
   */
  saveConsent(accepted) {
    const value = accepted ? 'accepted' : 'rejected';
    localStorage.setItem(COOKIE_CONSENT_KEY, value);
    
    // Also set a cookie for COOKIE_CONSENT_EXPIRY days
    const expires = new Date();
    expires.setTime(expires.getTime() + (COOKIE_CONSENT_EXPIRY * 24 * 60 * 60 * 1000));
    document.cookie = `${COOKIE_CONSENT_KEY}=${value};expires=${expires.toUTCString()};path=/;SameSite=Strict`;
    
    this.consentGiven = accepted;
  }

  /**
   * Create the popup element
   */
  createPopup() {
    const popup = document.createElement('div');
    popup.className = 'cookie-consent-popup';
    popup.setAttribute('role', 'dialog');
    popup.setAttribute('aria-labelledby', 'cookie-consent-title');
    popup.setAttribute('aria-describedby', 'cookie-consent-description');

    popup.innerHTML = `
      <div class="cookie-consent-container">
        <div class="cookie-consent-content">
          <div class="cookie-consent-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"></circle>
              <circle cx="12" cy="12" r="3"></circle>
              <circle cx="12" cy="6" r="1"></circle>
              <circle cx="6" cy="9" r="1"></circle>
              <circle cx="18" cy="9" r="1"></circle>
              <circle cx="9" cy="16" r="1"></circle>
              <circle cx="15" cy="16" r="1"></circle>
            </svg>
          </div>
          <div class="cookie-consent-text">
            <h3 id="cookie-consent-title" class="cookie-consent-title">We Use Cookies</h3>
            <p id="cookie-consent-description" class="cookie-consent-description">
              We use cookies to enhance your browsing experience, remember your preferences, and analyze site traffic. 
              By clicking "Accept All", you consent to our use of cookies.
            </p>
          </div>
        </div>
        <div class="cookie-consent-actions">
          <button id="cookieAcceptAll" class="cookie-btn cookie-btn-primary" aria-label="Accept all cookies">
            Accept All
          </button>
          <button id="cookieRejectNonEssential" class="cookie-btn cookie-btn-secondary" aria-label="Reject non-essential cookies">
            Reject Non-Essential
          </button>
          <a href="cookies-policy.html" class="cookie-btn cookie-btn-link" aria-label="Learn more about our cookies policy">
            Learn More
          </a>
        </div>
      </div>
    `;

    document.body.appendChild(popup);
    this.popup = popup;

    // Add event listeners
    this.attachEventListeners();
  }

  /**
   * Attach event listeners to buttons
   */
  attachEventListeners() {
    const acceptBtn = document.getElementById('cookieAcceptAll');
    const rejectBtn = document.getElementById('cookieRejectNonEssential');

    if (acceptBtn) {
      acceptBtn.addEventListener('click', () => this.handleAccept());
    }

    if (rejectBtn) {
      rejectBtn.addEventListener('click', () => this.handleReject());
    }
  }

  /**
   * Handle accept all cookies
   */
  handleAccept() {
    this.saveConsent(true);
    this.hidePopup();
    this.enableAnalytics();
  }

  /**
   * Handle reject non-essential cookies
   */
  handleReject() {
    this.saveConsent(false);
    this.hidePopup();
    this.disableAnalytics();
  }

  /**
   * Show the popup
   */
  showPopup() {
    if (this.popup) {
      // Small delay to allow CSS animation
      setTimeout(() => {
        this.popup.classList.add('cookie-consent-show');
      }, 100);
    }
  }

  /**
   * Hide the popup
   */
  hidePopup() {
    if (this.popup) {
      this.popup.classList.remove('cookie-consent-show');
      
      // Remove from DOM after animation completes
      setTimeout(() => {
        if (this.popup && this.popup.parentNode) {
          this.popup.parentNode.removeChild(this.popup);
        }
      }, 300);
    }
  }

  /**
   * Enable analytics and tracking (placeholder)
   */
  enableAnalytics() {
    // Placeholder for future analytics integration
    // Example: Google Analytics, custom tracking, etc.
  }

  /**
   * Disable analytics and tracking
   */
  disableAnalytics() {
    // Placeholder for disabling analytics
  }

  /**
   * Check if user has consented to cookies
   * @returns {boolean} true if consent given
   */
  hasConsent() {
    return this.consentGiven === true;
  }
}

