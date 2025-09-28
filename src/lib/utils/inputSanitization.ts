/**
 * Input sanitization utilities for form security
 */

// Basic HTML entity encoding to prevent XSS
export function sanitizeHtml(input: string): string {
  if (typeof input !== 'string') return '';

  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
}

// Sanitize text input by removing dangerous characters
export function sanitizeText(input: string): string {
  if (typeof input !== 'string') return '';

  // Remove null bytes and control characters except newlines and tabs
  // eslint-disable-next-line no-control-regex
  return input
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '')
    .trim()
    .slice(0, 1000); // Limit length to prevent buffer overflow
}

// Sanitize email with basic validation
export function sanitizeEmail(email: string): string {
  if (typeof email !== 'string') return '';

  const sanitized = sanitizeText(email.toLowerCase());

  // Basic email regex validation
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  return emailRegex.test(sanitized) ? sanitized : '';
}

// Sanitize phone number
export function sanitizePhone(phone: string): string {
  if (typeof phone !== 'string') return '';

  // Allow only digits, spaces, dashes, parentheses, and plus sign
  return phone
    .replace(/[^0-9\s\-()+ ]/g, '')
    .trim()
    .slice(0, 20); // Reasonable phone number length limit
}

// Sanitize URL
export function sanitizeUrl(url: string): string {
  if (typeof url !== 'string') return '';

  try {
    const parsed = new URL(url);
    // Only allow http and https protocols
    if (parsed.protocol === 'http:' || parsed.protocol === 'https:') {
      return parsed.toString();
    }
  } catch {
    // Invalid URL
  }

  return '';
}

// Sanitize form data object
export function sanitizeFormData(data: Record<string, any>): Record<string, string> {
  const sanitized: Record<string, string> = {};

  for (const [key, value] of Object.entries(data)) {
    if (typeof value === 'string') {
      switch (key) {
        case 'email':
          sanitized[key] = sanitizeEmail(value);
          break;
        case 'phone':
          sanitized[key] = sanitizePhone(value);
          break;
        case 'website':
        case 'url':
          sanitized[key] = sanitizeUrl(value);
          break;
        default:
          sanitized[key] = sanitizeText(value);
      }
    } else {
      sanitized[key] = '';
    }
  }

  return sanitized;
}

// Validate required fields
export function validateRequiredFields(data: Record<string, string>, requiredFields: string[]): string[] {
  const errors: string[] = [];

  for (const field of requiredFields) {
    if (!data[field] || data[field].trim().length === 0) {
      errors.push(`${field} is required`);
    }
  }

  return errors;
}

// Additional validation for specific fields
export function validateFormFields(data: Record<string, string>): string[] {
  const errors: string[] = [];

  // Email validation
  if (data.email && !sanitizeEmail(data.email)) {
    errors.push('Please enter a valid email address');
  }

  // Phone validation (if provided)
  if (data.phone && data.phone.length > 0) {
    const phoneRegex = /^[+]?[\d\s\-()]{8,20}$/;
    if (!phoneRegex.test(data.phone)) {
      errors.push('Please enter a valid phone number');
    }
  }

  // Name validation (prevent numeric-only names)
  if (data.name && /^\d+$/.test(data.name.trim())) {
    errors.push('Please enter a valid name');
  }

  // Message length validation
  if (data.message && data.message.length < 10) {
    errors.push('Please provide more details about your project (minimum 10 characters)');
  }

  return errors;
}