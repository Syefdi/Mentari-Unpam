/**
 * API Key Validator Patch
 * This script patches the API key validation to accept new format (AQ....)
 * Injected into mentari.unpam.ac.id pages
 */

(function() {
  'use strict';

  console.log('[Mentari Mod] API Key Validator Patch loaded');

  /**
   * Improved API Key Validator that supports both formats
   */
  function validateGeminiApiKey(apiKey) {
    if (!apiKey || typeof apiKey !== 'string') {
      return false;
    }

    const trimmedKey = apiKey.trim();

    if (trimmedKey.length === 0) {
      return false;
    }

    // Old format: AIzaSy... (typically 39 characters)
    if (/^AIzaSy[A-Za-z0-9_-]{33,}$/.test(trimmedKey)) {
      console.log('[Mentari Mod] Valid API key detected: Old format (AIzaSy...)');
      return true;
    }

    // New format: AQ.... (starts with AQ. followed by base64-like characters)
    if (/^AQ\.[A-Za-z0-9_-]{30,}$/.test(trimmedKey)) {
      console.log('[Mentari Mod] Valid API key detected: New format (AQ....)');
      return true;
    }

    console.warn('[Mentari Mod] Invalid API key format:', trimmedKey.substring(0, 10) + '...');
    return false;
  }

  /**
   * Override window validation if exists
   */
  if (typeof window.validateApiKey === 'function') {
    const originalValidate = window.validateApiKey;
    window.validateApiKey = function(apiKey) {
      const result = validateGeminiApiKey(apiKey);
      console.log('[Mentari Mod] API Key validation override:', result);
      return result;
    };
    console.log('[Mentari Mod] Overridden existing validateApiKey function');
  } else {
    // Create new validation function
    window.validateApiKey = validateGeminiApiKey;
    console.log('[Mentari Mod] Created new validateApiKey function');
  }

  /**
   * Patch any input validation that might be happening
   */
  function patchInputValidation() {
    // Find Gemini API key input fields
    const apiKeyInputs = document.querySelectorAll('input[type="text"][placeholder*="API"], input[type="text"][placeholder*="key"], input[id*="gemini"], input[name*="apikey"]');
    
    apiKeyInputs.forEach(input => {
      console.log('[Mentari Mod] Found API key input:', input);
      
      // Remove existing validation
      input.removeAttribute('pattern');
      input.removeAttribute('minlength');
      input.removeAttribute('maxlength');
      
      // Add custom validation on blur/change
      input.addEventListener('blur', function() {
        const value = this.value.trim();
        if (value.length > 0) {
          const isValid = validateGeminiApiKey(value);
          
          // Find error message element (usually next sibling or nearby)
          let errorElement = this.nextElementSibling;
          if (errorElement && errorElement.classList.contains('error')) {
            if (isValid) {
              errorElement.textContent = '';
              errorElement.style.display = 'none';
              this.style.borderColor = '#4CAF50';
            } else {
              errorElement.textContent = 'Format API key tidak valid. Harus diawali "AIzaSy" atau "AQ."';
              errorElement.style.display = 'block';
              this.style.borderColor = '#f44336';
            }
          } else {
            // Change border color as visual feedback
            if (isValid) {
              this.style.borderColor = '#4CAF50';
            } else {
              this.style.borderColor = '#f44336';
            }
          }
        }
      });
    });
  }

  /**
   * Override fetch to intercept API key validation
   */
  const originalFetch = window.fetch;
  window.fetch = function(...args) {
    const [url, options] = args;
    
    // Check if this is a Gemini API request
    if (typeof url === 'string' && url.includes('generativelanguage.googleapis.com')) {
      console.log('[Mentari Mod] Gemini API request detected');
      
      // Extract API key from URL or headers
      if (url.includes('key=')) {
        const apiKey = new URL(url).searchParams.get('key');
        if (apiKey && validateGeminiApiKey(apiKey)) {
          console.log('[Mentari Mod] API key in request is valid');
        }
      }
    }
    
    return originalFetch.apply(this, args);
  };

  // Run patch on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', patchInputValidation);
  } else {
    patchInputValidation();
  }

  // Also run on dynamic content changes
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.addedNodes.length > 0) {
        patchInputValidation();
      }
    });
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });

  console.log('[Mentari Mod] API Key Validator Patch initialized');
})();
