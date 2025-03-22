import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ProjectsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Link href="/" className="text-primary hover:text-primary/80">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-600">Projects</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">My Projects</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore my portfolio of web development projects showcasing my skills and expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center mb-12 gap-2">
            <button className="px-6 py-2 bg-primary text-white rounded hover:bg-opacity-90">
              All
            </button>
            <button className="px-6 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
              Web Design
            </button>
            <button className="px-6 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
              E-Commerce
            </button>
            <button className="px-6 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
              WordPress
            </button>
            <button className="px-6 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
              UI/UX
            </button>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-gray-50 rounded overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-64 bg-gray-200">
                <Image 
                  src="/images/project1.jpg" 
                  alt="E-Commerce Website" 
                  className="object-cover"
                  fill
                />
                <div className="absolute inset-0 bg-primary bg-opacity-20 opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity">
                  <Link href="#" className="px-6 py-2 bg-white text-primary rounded font-medium">
                    View Project
                  </Link>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">E-Commerce Website</h3>
                <p className="text-gray-600 mb-4">
                  A fully responsive e-commerce website built with WordPress and WooCommerce.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">WordPress</span>
                  <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">WooCommerce</span>
                  <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">E-Commerce</span>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-gray-50 rounded overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-64 bg-gray-200">
                <Image 
                  src="/images/project2.jpg" 
                  alt="Corporate Website" 
                  className="object-cover"
                  fill
                />
                <div className="absolute inset-0 bg-primary bg-opacity-20 opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity">
                  <Link href="#" className="px-6 py-2 bg-white text-primary rounded font-medium">
                    View Project
                  </Link>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Corporate Website</h3>
                <p className="text-gray-600 mb-4">
                  A professional corporate website with custom design and content management.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">WordPress</span>
                  <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">Elementor</span>
                  <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">Web Design</span>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-gray-50 rounded overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-64 bg-gray-200">
                <Image 
                  src="/images/project3.jpg" 
                  alt="Restaurant Website" 
                  className="object-cover"
                  fill
                />
                <div className="absolute inset-0 bg-primary bg-opacity-20 opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity">
                  <Link href="#" className="px-6 py-2 bg-white text-primary rounded font-medium">
                    View Project
                  </Link>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Restaurant Website</h3>
                <p className="text-gray-600 mb-4">
                  A visually appealing restaurant website with online ordering functionality.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">WordPress</span>
                  <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">UI/UX</span>
                  <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">E-Commerce</span>
                </div>
              </div>
            </div>

            {/* Project 4 */}
            <div className="bg-gray-50 rounded overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-64 bg-gray-200">
                <Image 
                  src="/images/project4.jpg" 
                  alt="Portfolio Website" 
                  className="object-cover"
                  fill
                />
                <div className="absolute inset-0 bg-primary bg-opacity-20 opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity">
                  <Link href="#" className="px-6 py-2 bg-white text-primary rounded font-medium">
                    View Project
                  </Link>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Portfolio Website</h3>
                <p className="text-gray-600 mb-4">
                  A creative portfolio website for a photographer with gallery functionality.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">WordPress</span>
                  <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">UI/UX</span>
                  <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">Web Design</span>
                </div>
              </div>
            </div>

            {/* Project 5 */}
            <div className="bg-gray-50 rounded overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-64 bg-gray-200">
                <Image 
                  src="/images/project5.jpg" 
                  alt="Blog Website" 
                  className="object-cover"
                  fill
                />
                <div className="absolute inset-0 bg-primary bg-opacity-20 opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity">
                  <Link href="#" className="px-6 py-2 bg-white text-primary rounded font-medium">
                    View Project
                  </Link>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Blog Website</h3>
                <p className="text-gray-600 mb-4">
                  A content-focused blog website with custom categories and search functionality.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">WordPress</span>
                  <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">SEO</span>
                  <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">Content</span>
                </div>
              </div>
            </div>

            {/* Project 6 */}
            <div className="bg-gray-50 rounded overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-64 bg-gray-200">
                <Image 
                  src="/images/project6.jpg" 
                  alt="Real Estate Website" 
                  className="object-cover"
                  fill
                />
                <div className="absolute inset-0 bg-primary bg-opacity-20 opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity">
                  <Link href="#" className="px-6 py-2 bg-white text-primary rounded font-medium">
                    View Project
                  </Link>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Real Estate Website</h3>
                <p className="text-gray-600 mb-4">
                  A property listing website with advanced search and filtering options.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">WordPress</span>
                  <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">Custom Plugin</span>
                  <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">Web Design</span>
                </div>
              </div>
            </div>
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-primary text-white rounded hover:bg-opacity-90 font-medium">
              Load More Projects
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let&apos;s Work Together!</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Ready to bring your digital vision to life? Contact me today to discuss your project.
          </p>
          <Link href="/contact-us" className="inline-block bg-white text-primary px-8 py-3 rounded font-medium hover:bg-gray-100 transition-colors">
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
