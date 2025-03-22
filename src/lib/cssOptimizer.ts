// src/lib/cssOptimizer.ts

/**
 * Utility functions for CSS optimization
 */

/**
 * Generate critical CSS for above-the-fold content
 * This function identifies and extracts CSS rules that apply to elements visible in the initial viewport
 * @param html - HTML content of the page
 * @param css - Full CSS content
 * @returns Critical CSS rules as a string
 */
export function extractCriticalCSS(html: string, css: string): string {
  // In a real implementation, this would use a library like critical or critters
  // For this example, we'll simulate the functionality
  
  // Extract all class names from the HTML
  const classRegex = /class="([^"]*)"/g;
  const classMatches = [...html.matchAll(classRegex)];
  const classNames = new Set<string>();
  
  classMatches.forEach(match => {
    if (match[1]) {
      match[1].split(/\s+/).forEach(className => {
        if (className) classNames.add(className);
      });
    }
  });
  
  // Extract CSS rules that match these classes
  const cssRules = css.split('}');
  const criticalRules: string[] = [];
  
  cssRules.forEach(rule => {
    if (!rule.trim()) return;
    
    // Check if the rule contains any of our critical class names
    const isCritical = Array.from(classNames).some(className => {
      return rule.includes(`.${className}`);
    });
    
    if (isCritical) {
      criticalRules.push(rule + '}');
    }
  });
  
  return criticalRules.join('\n');
}

/**
 * Minify CSS by removing whitespace, comments, and unnecessary characters
 * @param css - CSS content to minify
 * @returns Minified CSS
 */
export function minifyCSS(css: string): string {
  return css
    // Remove comments
    .replace(/\/\*[\s\S]*?\*\//g, '')
    // Remove whitespace
    .replace(/\s+/g, ' ')
    .replace(/\s*({|}|;|,|:)\s*/g, '$1')
    .replace(/;\s*}/g, '}')
    .trim();
}

/**
 * Purge unused CSS by removing rules that don't match any selectors in the HTML
 * @param html - HTML content of the page
 * @param css - CSS content to purge
 * @returns Purged CSS with only used rules
 */
export function purgeUnusedCSS(html: string, css: string): string {
  // In a real implementation, this would use a library like PurgeCSS
  // For this example, we'll simulate the functionality
  
  // Extract all IDs and class names from the HTML
  const idRegex = /id="([^"]*)"/g;
  const classRegex = /class="([^"]*)"/g;
  
  const idMatches = [...html.matchAll(idRegex)];
  const classMatches = [...html.matchAll(classRegex)];
  
  const ids = new Set<string>();
  const classes = new Set<string>();
  
  idMatches.forEach(match => {
    if (match[1]) ids.add(match[1]);
  });
  
  classMatches.forEach(match => {
    if (match[1]) {
      match[1].split(/\s+/).forEach(className => {
        if (className) classes.add(className);
      });
    }
  });
  
  // Extract CSS rules that match these selectors
  const cssRules = css.split('}');
  const usedRules: string[] = [];
  
  cssRules.forEach(rule => {
    if (!rule.trim()) return;
    
    // Check if the rule contains any of our used IDs or classes
    const isUsed = 
      Array.from(ids).some(id => rule.includes(`#${id}`)) ||
      Array.from(classes).some(className => rule.includes(`.${className}`)) ||
      // Keep global styles and element selectors
      /^[\s]*([a-z]+|html|body|:root)[\s{]/.test(rule);
    
    if (isUsed) {
      usedRules.push(rule + '}');
    }
  });
  
  return usedRules.join('\n');
}
