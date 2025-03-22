// src/lib/imageOptimizer.ts

/**
 * Utility functions for image optimization
 */

import fs from 'fs';
import path from 'path';

/**
 * Optimize an image file and save it in multiple formats
 * @param inputPath - Path to the original image
 * @param outputDir - Directory to save optimized images
 * @param options - Optimization options
 */
export async function optimizeImage(
  inputPath: string,
  outputDir: string,
  options: {
    quality?: number;
    width?: number;
    height?: number;
    formats?: ('webp' | 'avif' | 'png' | 'jpeg')[];
  } = {}
): Promise<string[]> {
  const {
    formats = ['webp', 'avif']
  } = options;

  // Ensure output directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // In a real implementation, we would use sharp for image processing
  // For this example, we'll simulate the functionality
  const outputPaths: string[] = [];
  const filename = path.basename(inputPath, path.extname(inputPath));

  // Simulate generating images in different formats
  for (const format of formats) {
    const outputPath = path.join(outputDir, `${filename}.${format}`);
    
    // Simulate file creation
    fs.copyFileSync(inputPath, outputPath);
    
    outputPaths.push(outputPath);
  }

  return outputPaths;
}

/**
 * Generate responsive image variants at different sizes
 * @param inputPath - Path to the original image
 * @param outputDir - Directory to save responsive images
 * @param widths - Array of widths for responsive variants
 * @param format - Output format
 */
export async function generateResponsiveImages(
  inputPath: string,
  outputDir: string,
  widths: number[] = [320, 640, 960, 1280, 1920],
  format: 'webp' | 'avif' | 'png' | 'jpeg' = 'webp'
): Promise<string[]> {
  // Ensure output directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const outputPaths: string[] = [];
  const filename = path.basename(inputPath, path.extname(inputPath));

  // Simulate generating responsive images
  for (const width of widths) {
    const outputPath = path.join(outputDir, `${filename}-${width}.${format}`);
    
    // Simulate file creation
    fs.copyFileSync(inputPath, outputPath);
    
    outputPaths.push(outputPath);
  }

  return outputPaths;
}

/**
 * Calculate the srcset attribute for responsive images
 * @param basePath - Base path for the image
 * @param filename - Image filename without extension
 * @param widths - Array of widths for responsive variants
 * @param format - Image format
 */
export function generateSrcSet(
  basePath: string,
  filename: string,
  widths: number[] = [320, 640, 960, 1280, 1920],
  format: string = 'webp'
): string {
  return widths
    .map(width => `${basePath}/${filename}-${width}.${format} ${width}w`)
    .join(', ');
}
