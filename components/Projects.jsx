'use client'

import { useState } from 'react'
import {
  RiGithubFill,
  RiExternalLinkLine,
  RiShoppingCartLine,
  RiRestaurantLine,
  RiTaxiLine,
} from 'react-icons/ri'

// Project data - CV based
const projects = [
  {
    id: 1,
    title: 'Fresh-Market',
    subtitle: 'E-Commerce Website (Frontend)',
    description:
      'A modern e-commerce frontend application featuring responsive design, product catalog, and intuitive user interface for an online shopping experience.',
    icon: RiShoppingCartLine,
    tech: ['Nuxt.js', 'HTML', 'Tailwind CSS', 'JavaScript'],
    category: 'Frontend',
    // Gradient colors for card header (image fallback)
    gradient: 'from-emerald-500 to-teal-600',
    github: 'https://github.com/Thilak-raj-08/fresh-market-2026',
    demo: 'https://fresh-market-2026.vercel.app',
  },
  {
    id: 2,
    title: 'Royal Food Corner',
    subtitle: 'Restaurant Website (Full Stack)',
    description:
      'A complete full-stack restaurant website with menu management, online ordering system, and admin panel for managing orders and inventory.',
    icon: RiRestaurantLine,
    tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'PHP', 'MySQL'],
    category: 'Full Stack',
    gradient: 'from-amber-500 to-orange-600',
    github: 'https://github.com/',
    demo: '#',
  },
  {
    id: 3,
    title: 'Cab Booking System',
    subtitle: 'Full Stack Web Application',
    description:
      'A comprehensive cab booking platform with real-time booking functionality, user authentication, ride tracking, and database-driven backend system.',
    icon: RiTaxiLine,
    tech: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'Java', 'MySQL'],
    category: 'Full Stack',
    gradient: 'from-blue-500 to-indigo-600',
    github: 'https://github.com/',
    demo: '#',
  },
]

// Filter categories
const categories = ['All', 'Frontend', 'Full Stack']

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <section
      id="projects"
      className="py-20 bg-gray-50 dark:bg-gray-800/50 relative overflow-hidden"
    >
      {/* Decorative background blur */}
      <div className="absolute top-40 left-0 w-96 h-96 bg-rose-500/5 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-rose-500 font-medium mb-2 text-sm uppercase tracking-widest">
            My Work
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gray-900 dark:text-white mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-rose-500 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of the projects I've built during my studies and learning journey
          </p>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-rose-500 text-white shadow-lg shadow-rose-500/30'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-rose-100 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const Icon = project.icon
            return (
              <div
                key={project.id}
                className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
              >
                {/* Card Header - Gradient with icon */}
                <div
                  className={`relative h-48 bg-gradient-to-br ${project.gradient} overflow-hidden`}
                >
                  {/* Decorative circles */}
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full"></div>
                  <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-white/10 rounded-full"></div>

                  {/* Center icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon className="text-white text-7xl drop-shadow-lg group-hover:scale-110 transition-transform duration-500" />
                  </div>

                  {/* Category badge */}
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-medium">
                    {project.category}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white mb-1 group-hover:text-rose-500 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-rose-500 font-medium mb-3">
                    {project.subtitle}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech badges */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-medium bg-rose-50 dark:bg-rose-500/10 text-rose-600 dark:text-rose-400 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md transition-colors duration-200"
                    >
                      <RiGithubFill className="text-lg" />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white bg-rose-600 hover:bg-rose-700 rounded-md transition-colors duration-200"
                    >
                      <RiExternalLinkLine className="text-lg" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* "More projects" footer */}
        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Want to see more of my work?
          </p>
          <a
            href="https://github.com/Thilak-raj-08"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-rose-500 text-rose-500 hover:bg-rose-500 hover:text-white rounded-md font-medium transition-all duration-200 hover:-translate-y-0.5"
          >
            <RiGithubFill className="text-xl" />
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}