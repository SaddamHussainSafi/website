// src/lib/jsOptimizer.ts

/**
 * Utility functions for JavaScript optimization
 */

/**
 * Split JavaScript code into critical and non-critical chunks
 * @param jsCode - Full JavaScript code
 * @returns Object containing critical and non-critical code
 */
export function splitJsChunks(jsCode: string): { critical: string; nonCritical: string } {
  // In a real implementation, this would use more sophisticated analysis
  // For this example, we'll use a simple approach based on function names and comments
  
  const lines = jsCode.split('\n');
  const critical: string[] = [];
  const nonCritical: string[] = [];
  
  let inCriticalBlock = false;
  let inNonCriticalBlock = false;
  
  lines.forEach(line => {
    // Check for markers in comments
    if (line.includes('/* CRITICAL */') || line.includes('// CRITICAL')) {
      inCriticalBlock = true;
      inNonCriticalBlock = false;
    } else if (line.includes('/* NON-CRITICAL */') || line.includes('// NON-CRITICAL')) {
      inCriticalBlock = false;
      inNonCriticalBlock = true;
    }
    
    // Check for critical function patterns
    if (
      line.includes('function init') || 
      line.includes('document.addEventListener(\'DOMContentLoaded\'') ||
      line.includes('window.addEventListener(\'load\'') ||
      inCriticalBlock
    ) {
      critical.push(line);
    } 
    // Check for non-critical function patterns
    else if (
      line.includes('function lazy') || 
      line.includes('setTimeout(') ||
      line.includes('registerServiceWorker') ||
      inNonCriticalBlock
    ) {
      nonCritical.push(line);
    }
    // Default behavior for unmarked code
    else {
      // If we can't determine, assume it's critical
      critical.push(line);
    }
  });
  
  return {
    critical: critical.join('\n'),
    nonCritical: nonCritical.join('\n')
  };
}

/**
 * Create a script for deferred loading of non-critical JavaScript
 * @param nonCriticalJs - Non-critical JavaScript code
 * @returns Script element as a string that loads the non-critical JS after page load
 */
export function createDeferredLoadingScript(nonCriticalJs: string): string {
  // Escape the JavaScript code for inclusion in a string
  const escapedJs = nonCriticalJs
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "\\'")
    .replace(/\n/g, '\\n');
  
  return `
<script>
  // Defer non-critical JavaScript execution
  window.addEventListener('load', function() {
    setTimeout(function() {
      const script = document.createElement('script');
      script.textContent = '${escapedJs}';
      document.body.appendChild(script);
    }, 100); // Small delay after load event
  });
</script>
  `.trim();
}

/**
 * Minify JavaScript by removing whitespace, comments, and unnecessary characters
 * @param js - JavaScript content to minify
 * @returns Minified JavaScript
 */
export function minifyJS(js: string): string {
  // In a real implementation, this would use a library like Terser
  // For this example, we'll do some basic minification
  
  return js
    // Remove multi-line comments
    .replace(/\/\*[\s\S]*?\*\//g, '')
    // Remove single-line comments
    .replace(/\/\/[^\n]*/g, '')
    // Remove whitespace at the beginning and end of lines
    .replace(/^\s+|\s+$/gm, '')
    // Collapse multiple spaces to a single space
    .replace(/\s{2,}/g, ' ')
    // Remove spaces around operators
    .replace(/\s*([=+\-*/%<>!&|:?;,()])\s*/g, '$1')
    // Remove unnecessary semicolons
    .replace(/;;+/g, ';')
    .trim();
}
