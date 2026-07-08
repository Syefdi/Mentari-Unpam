/**
 * API Key Validator Patch - AGGRESSIVE MODE
 * This script forcefully overrides ALL validation to accept new format (AQ....)
 * Injected into mentari.unpam.ac.id pages BEFORE other scripts
 */

(function() {
  'use strict';

  console.log('[Mentari Mod] AGGRESSIVE API Key Validator Patch loaded');

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
      console.log('[Mentari Mod] Valid API key: Old format (AIzaSy...)');
      return true;
    }

    // New format: AQ.... (starts with AQ. followed by base64-like characters)
    if (/^AQ\.[A-Za-z0-9_-]{20,}$/.test(trimmedKey)) {
      console.log('[Mentari Mod] Valid API key: New format (AQ....)');
      return true;
    }

    console.warn('[Mentari Mod] Invalid API key format:', trimmedKey.substring(0, 10) + '...');
    return false;
  }

  /**
   * AGGRESSIVELY override window.validateApiKey - make it a constant
   */
  Object.defineProperty(window, 'validateApiKey', {
    value: safeValidateGeminiApiKey,
    writable: false,
    configurable: false
  });
  console.log('[Mentari Mod] LOCKED window.validateApiKey function');

  /**
   * Store original regex test to avoid recursion
   */
  const originalRegExpTest = RegExp.prototype.test;
  const safeRegexTest = function(regex, str) {
    return originalRegExpTest.call(regex, str);
  };

  /**
   * Safe validator that uses original regex test
   */
  function safeValidateGeminiApiKey(apiKey) {
    if (!apiKey || typeof apiKey !== 'string') {
      return false;
    }

    const trimmedKey = apiKey.trim();

    if (trimmedKey.length === 0) {
      return false;
    }

    // Old format: AIzaSy... (use original regex test to avoid recursion)
    if (safeRegexTest(/^AIzaSy[A-Za-z0-9_-]{33,}$/, trimmedKey)) {
      console.log('[Mentari Mod] Valid API key: Old format (AIzaSy...)');
      return true;
    }

    // New format: AQ.... (use original regex test to avoid recursion)
    if (safeRegexTest(/^AQ\.[A-Za-z0-9_-]{20,}$/, trimmedKey)) {
      console.log('[Mentari Mod] Valid API key: New format (AQ....)');
      return true;
    }

    console.warn('[Mentari Mod] Invalid API key format:', trimmedKey.substring(0, 10) + '...');
    return false;
  }

  /**
   * Override RegExp.prototype.test to intercept AIzaSy validation
   */
  RegExp.prototype.test = function(str) {
    // Check if this is the old API key validation regex
    const source = this.source;
    if (source && (source.includes('AIza') || source.includes('AIzaSy'))) {
      console.log('[Mentari Mod] Intercepted old regex validation, using new validator');
      return safeValidateGeminiApiKey(str);
    }
    return originalRegExpTest.call(this, str);
  };
  console.log('[Mentari Mod] Overridden RegExp.prototype.test');

  /**
   * Override localStorage.setItem to allow any API key format
   */
  const originalSetItem = Storage.prototype.setItem;
  Storage.prototype.setItem = function(key, value) {
    if (key === 'geminiApiKey') {
      console.log('[Mentari Mod] Intercepted geminiApiKey save:', value.substring(0, 10) + '...');
      // Always allow saving if it's a reasonable length
      if (value && value.length > 20) {
        console.log('[Mentari Mod] Allowing API key save (bypassed validation)');
      }
    }
    return originalSetItem.call(this, key, value);
  };
  console.log('[Mentari Mod] Overridden localStorage.setItem');

  /**
   * Patch any input validation that might be happening
   */
  function patchInputValidation() {
    // Find Gemini API key input fields
    const apiKeyInputs = document.querySelectorAll('input[type="text"][placeholder*="API"], input[type="text"][placeholder*="key"], input[id*="gemini"], input[name*="apikey"], input[id*="apiKey"]');
    
    apiKeyInputs.forEach(input => {
      console.log('[Mentari Mod] Found API key input:', input.id || input.name);
      
      // Remove existing validation attributes
      input.removeAttribute('pattern');
      input.removeAttribute('minlength');
      input.removeAttribute('maxlength');
      
      // Override the input's validation
      input.addEventListener('input', function(e) {
        const value = this.value.trim();
        if (value.length > 0 && (value.startsWith('AQ.') || value.startsWith('AIzaSy'))) {
          // Mark as valid
          this.setCustomValidity('');
        }
      }, true);

      // Add blur validation
      input.addEventListener('blur', function(e) {
        const value = this.value.trim();
        if (value.length > 0) {
          const isValid = safeValidateGeminiApiKey(value);
          
          // Override any error messages
          const errorElements = document.querySelectorAll('[id*="validation"], [id*="error"], [class*="error"], [class*="validation"]');
          errorElements.forEach(el => {
            if (el.textContent.includes('AIza') || el.textContent.includes('Format')) {
              if (isValid) {
                el.textContent = '';
                el.style.display = 'none';
              } else {
                el.textContent = 'Format API key tidak valid. Harus diawali "AIzaSy" atau "AQ."';
                el.style.display = 'block';
              }
            }
          });
          
          // Visual feedback
          if (isValid) {
            this.style.borderColor = '#4CAF50';
            this.style.background = 'rgba(76, 175, 80, 0.1)';
          } else {
            this.style.borderColor = '#f44336';
            this.style.background = 'rgba(244, 67, 54, 0.1)';
          }
        }
      }, true);
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
      console.log('[Mentari Mod] Gemini API request detected, allowing through');
    }
    
    return originalFetch.apply(this, args);
  };
  console.log('[Mentari Mod] Overridden window.fetch');

  // Run immediately
  patchInputValidation();

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', patchInputValidation);
  }

  // Watch for dynamic content
  const observer = new MutationObserver((mutations) => {
    patchInputValidation();
  });

  if (document.body) {
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }

  console.log('[Mentari Mod] AGGRESSIVE API Key Validator Patch initialized and ready');
})();
