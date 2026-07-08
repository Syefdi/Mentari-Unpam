/**
 * API Key Validator for Gemini API
 * Supports both old (AIzaSy...) and new (AQ....) formats
 */

const ApiKeyValidator = {
  /**
   * Validate Gemini API Key format
   * @param {string} apiKey - The API key to validate
   * @returns {boolean} - True if valid, false otherwise
   */
  isValid(apiKey) {
    if (!apiKey || typeof apiKey !== 'string') {
      return false;
    }

    // Trim whitespace
    const trimmedKey = apiKey.trim();

    // Check if empty
    if (trimmedKey.length === 0) {
      return false;
    }

    // Old format: AIzaSy... (39 characters typically)
    const oldFormatRegex = /^AIzaSy[A-Za-z0-9_-]{33}$/;
    
    // New format: AQ.... (starts with AQ. followed by base64-like characters)
    const newFormatRegex = /^AQ\.[A-Za-z0-9_-]{30,}$/;

    return oldFormatRegex.test(trimmedKey) || newFormatRegex.test(trimmedKey);
  },

  /**
   * Get error message for invalid API key
   * @param {string} apiKey - The API key that was invalid
   * @returns {string} - Error message
   */
  getErrorMessage(apiKey) {
    if (!apiKey || apiKey.trim().length === 0) {
      return 'API key tidak boleh kosong';
    }

    if (apiKey.length < 30) {
      return 'API key terlalu pendek. Pastikan Anda copy seluruh API key';
    }

    return 'Format API key tidak valid. API key harus diawali dengan "AIzaSy" atau "AQ."';
  },

  /**
   * Detect API key format
   * @param {string} apiKey - The API key to check
   * @returns {string} - 'old', 'new', or 'invalid'
   */
  detectFormat(apiKey) {
    if (!apiKey) return 'invalid';
    
    const trimmedKey = apiKey.trim();
    
    if (trimmedKey.startsWith('AIzaSy')) {
      return 'old';
    } else if (trimmedKey.startsWith('AQ.')) {
      return 'new';
    }
    
    return 'invalid';
  }
};

// Export for use in popup script
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ApiKeyValidator;
}
