// src/styles/theme.ts
// Central configuration file for theme variables

export const theme = {
  // Colors
  colors: {
    primary: '#3b82f6', // Blue color from the original site
    primaryHover: '#2563eb',
    secondary: '#f3f4f6',
    secondaryHover: '#e5e7eb',
    text: {
      primary: '#111827',
      secondary: '#4b5563',
      light: '#9ca3af',
    },
    background: {
      main: '#ffffff',
      alt: '#f9fafb',
    },
    border: '#e5e7eb',
  },
  
  // Typography
  fonts: {
    body: '"Kanit", sans-serif',
    heading: '"Kanit", sans-serif',
    monospace: 'monospace',
  },
  
  // Border radius
  borderRadius: {
    sm: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    full: '9999px',
  },
  
  // Spacing
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
  },
  
  // Shadows
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  },
  
  // Breakpoints
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  
  // Transitions
  transitions: {
    default: '0.3s ease',
    fast: '0.15s ease',
    slow: '0.5s ease',
  },
};

// Export specific values for easy access
export const primaryColor = theme.colors.primary;
export const borderRadius = theme.borderRadius.lg; // Default border radius for containers
