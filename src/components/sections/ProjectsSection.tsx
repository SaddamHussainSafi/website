'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Project = {
  id: string;
  title: string;
  category: string;
  image: string;
  date: string;
  description: string;
  link: string;
};

export default function ProjectsSection() {
  const projects: Project[] = [
    {
      id: 'alex-web-designer',
      title: 'Alex Web Designer',
      category: 'Company',
      image: '/images/projects/alex-web-designer.jpg',
      date: 'March 9, 2025',
      description: 'Alex Web Designer specializes in innovative web design solutions for your digital success.',
      link: '/projects/alex-web-designer'
    },
    {
      id: 'deep-jyoti-water-tank',
      title: 'Deep Jyoti Water Tank',
      category: 'Company',
      image: '/images/projects/deep-jyoti.jpg',
      date: 'March 9, 2025',
      description: 'Deep Jyoti stands tall as a leading provider of water tank solutions for Nepal homes & businesses.',
      link: '/projects/deep-jyoti-water-tank'
    },
    {
      id: 'al-hira-nepal',
      title: 'Al-Hira Nepal',
      category: 'Education',
      image: '/images/projects/al-hira.jpg',
      date: 'March 9, 2025',
      description: 'Al Hira Nepal is a non-profit Islamic educational society promoting education in Nepal.',
      link: '/projects/al-hira-nepal'
    },
    {
      id: 'ecommerce-project',
      title: 'Fashion Store',
      category: 'E-commerce',
      image: '/images/projects/ecommerce.jpg',
      date: 'February 15, 2025',
      description: 'A modern e-commerce platform with seamless shopping experience and secure payment processing.',
      link: '/projects/fashion-store'
    },
    {
      id: 'medical-clinic',
      title: 'Health Plus Clinic',
      category: 'Medical',
      image: '/images/projects/medical.jpg',
      date: 'January 20, 2025',
      description: 'A comprehensive medical clinic website with appointment scheduling and patient portal.',
      link: '/projects/health-plus-clinic'
    },
    {
      id: 'nonprofit-org',
      title: 'Hope Foundation',
      category: 'Non-Profit',
      image: '/images/projects/nonprofit.jpg',
      date: 'December 5, 2024',
      description: 'A non-profit organization website with donation capabilities and event management.',
      link: '/projects/hope-foundation'
    }
  ];

  const categories = ['All', 'Company', 'E-commerce', 'Education', 'Logo Design', 'Medical', 'Non-Profit', 'Portfolio', 'Sports'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore my portfolio of successful projects across various industries.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="relative h-48 md:h-56">
                <Image
                  src={project.image || '/images/project-placeholder.jpg'}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-primary text-white text-xs px-2 py-1 rounded">
                  {project.category}
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-500 text-sm mb-2">{project.date}</p>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <Link href={project.link} className="text-primary font-medium hover:underline">
                  View Project →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/projects" className="btn btn-primary px-8 py-3 rounded-md">
            All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
