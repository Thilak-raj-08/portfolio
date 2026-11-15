'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  RiGithubFill,
  RiExternalLinkLine,
  RiShoppingCartLine,
  RiRestaurantLine,
  RiTaxiLine,
  RiCpuLine,
  RiGraduationCapLine,
  RiStackLine,
  RiCheckboxCircleFill,
  RiCloseLine,
  RiSparklingFill,
  RiArrowRightUpLine,
} from 'react-icons/ri'

const projects = [
  {
    id: 1,
    title: 'Veritas Campus ERP',
    subtitle: 'Multi-Page University Student Management, Attendance & Transcript System',
    description:
      'A 5-page institutional student information system engineered for BSc (Hons) and Pearson BTEC HND faculties—featuring a live Scholar Directory & Matriculation CRUD engine, Accredited Degree Modules Catalog, Daily Lecture Attendance Roll-Call Register, and an Interactive Senate Examination Gradebook with printable official transcripts.',
    icon: RiGraduationCapLine,
    tech: ['Next.js 16', 'React 19', 'Tailwind CSS', 'Framer Motion', 'Academic ERP State'],
    category: 'Full Stack',
    gradient: 'from-slate-900 via-blue-950 to-red-900',
    domain: 'veritas-student-erp.vercel.app',
    github: 'https://github.com/Thilak-raj-08/veritas-student-erp',
    demo: 'https://veritas-student-erp.vercel.app',
    badge: '🎓 New Institutional ERP',
    highlights: [
      '5 institutional routes: Registry Overview (/), Student Directory (/students), Accredited Modules (/courses), Attendance Roll-Call (/attendance) & Exam Transcripts (/grades)',
      'Interactive Scholar Matriculation CRUD & Dossier inspector with automatic student ID generation and Honours classification',
      'Live Lecture Roll-Call Attendance Sheet (Present, Late, Excused, Absent) with instant batch marking and eligibility alerts',
      'Real-time Examination Gradebook with live marks sliders, auto-recalculated GPA/Honours class, and printable Senate Transcript',
    ],
    metrics: {
      architecture: 'Multi-Page Institutional ERP',
      focus: 'Student Records, Roll-Call & GPA Engine',
      deployment: 'Vercel Edge Network',
    },
  },
  {
    id: 2,
    title: 'Forno Rosso Pizzeria',
    subtitle: 'Artisanal Wood-Fired Pizza Ordering & Custom Builder',
    description:
      'A 5-page editorial Neapolitan pizzeria and online ordering platform featuring a 4-step Custom Pizza Laboratory, 12-item filterable menu, persistent slide-over Kitchen Order Ticket, and live 485°C brick-oven baking tracker.',
    icon: RiRestaurantLine,
    tech: ['Next.js 16', 'React 19', 'Tailwind CSS', 'Framer Motion', 'Context State'],
    category: 'Full Stack',
    gradient: 'from-red-700 via-orange-600 to-amber-600',
    domain: 'forno-rosso-pizza.vercel.app',
    github: 'https://github.com/Thilak-raj-08/forno-rosso-pizza',
    demo: 'https://forno-rosso-pizza.vercel.app',
    badge: '🔥 New Multi-Page Pizzeria',
    highlights: [
      '5 bespoke routes: Home (/), Wood-Fired Menu (/menu), Custom Pizza Builder (/craft-your-own), 72h Dough Story (/story) & Table Reservations (/reservations)',
      'Interactive 4-step Pizza Configurator (Dough fermentation, DOP Sauce, Campanian Cheese & Salumi Toppings) with live visual preview',
      'Persistent Slide-Over Kitchen Order Ticket (#FR-408) with promo code (NAPOLI15) and real-time 4-stage brick oven tracker',
      'Handcrafted Italian editorial aesthetic with custom high-resolution food & copper brick-oven photography',
    ],
    metrics: {
      architecture: 'Multi-Page E-Commerce & Booking',
      focus: 'Custom Configurator & Cart',
      deployment: 'Vercel Edge Network',
    },
  },
  {
    id: 3,
    title: 'NexaFlow AI',
    subtitle: 'Multi-Page AI Developer Cloud & Agile SaaS Platform',
    description:
      'A full-featured 5-page SaaS platform combining an interactive AI Code & SQL Auditor, a 4-stage Agile Kanban Sprint Workspace, Cloud FinOps Telemetry Analytics, and dynamic Pricing tiers.',
    icon: RiCpuLine,
    tech: ['Next.js 16', 'React 19', 'Tailwind CSS', 'Framer Motion', 'Multi-Page SaaS'],
    category: 'Full Stack',
    gradient: 'from-rose-500 via-fuchsia-600 to-indigo-600',
    domain: 'nexaflow-ai-seven.vercel.app',
    github: 'https://github.com/Thilak-raj-08/nexaflow-ai',
    demo: 'https://nexaflow-ai-seven.vercel.app',
    badge: '★ Flagship Multi-Page App',
    highlights: [
      '5 dedicated routes: Home (/), AI Code Studio (/studio), Agile Kanban (/kanban), FinOps Analytics (/analytics) & Pricing (/pricing)',
      'Interactive AST Code & SQL Security Auditor with real-time refactoring patches',
      'Full 4-stage Agile Sprint Kanban board with story point velocity calculator',
      'Cloud FinOps telemetry dashboard & interactive Monthly/Annual pricing calculator',
    ],
    metrics: {
      architecture: 'Multi-Page Next.js App Router',
      focus: 'AI DevTools & Agile SaaS',
      deployment: 'Vercel Edge Network',
    },
  },
  {
    id: 4,
    title: 'Fresh-Market',
    subtitle: 'Modern E-Commerce Web Application (Frontend)',
    description:
      'A high-performance e-commerce frontend platform engineered with Nuxt.js and Tailwind CSS, featuring a responsive product catalog, category filtering, and an intuitive shopping cart experience.',
    icon: RiShoppingCartLine,
    tech: ['Nuxt.js', 'Vue.js', 'Tailwind CSS', 'JavaScript', 'HTML5'],
    category: 'Frontend',
    gradient: 'from-emerald-500 via-teal-500 to-cyan-600',
    domain: 'fresh-market-2026.vercel.app',
    github: 'https://github.com/Thilak-raj-08/fresh-market-2026',
    demo: 'https://fresh-market-2026.vercel.app',
    highlights: [
      'Component-driven Nuxt.js architecture with fast client-side routing',
      'Dynamic product catalog with instant category & search filtering',
      'Mobile-first Tailwind CSS layout optimized for conversion and accessibility',
      'Interactive cart state management and smooth micro-interactions',
    ],
    metrics: {
      architecture: 'SPA / SSR Hybrid (Nuxt)',
      focus: 'UX & Conversion Speed',
      deployment: 'Vercel Edge Network',
    },
  },
  {
    id: 5,
    title: 'Royal Food Corner',
    subtitle: 'Full-Stack Restaurant & Order Management System',
    description:
      'A comprehensive full-stack restaurant platform featuring dynamic menu management, an interactive online ordering workflow, and a dedicated admin control panel for orders and inventory.',
    icon: RiRestaurantLine,
    tech: ['Laravel', 'PHP', 'MySQL', 'Tailwind CSS', 'Alpine.js', 'Bootstrap'],
    category: 'Full Stack',
    gradient: 'from-amber-500 via-orange-500 to-rose-600',
    domain: 'royal-food-corner.vercel.app',
    github: 'https://github.com/Thilak-raj-08/royal-food-corner',
    demo: 'https://royal-food-corner.vercel.app',
    highlights: [
      'Full-stack MVC architecture with relational MySQL database design',
      'Complete customer ordering flow with real-time cart & checkout',
      'Role-based Admin Panel for managing menu items, pricing, and inventory',
      'Responsive UI crafted with Tailwind CSS, Bootstrap, and Alpine.js interactivity',
    ],
    metrics: {
      architecture: 'Full-Stack MVC + SQL',
      focus: 'Order & Inventory Engine',
      deployment: 'Vercel / Cloud Ready',
    },
  },
  {
    id: 6,
    title: 'SwiftCabs',
    subtitle: 'Real-Time Cab Booking Full-Stack Platform',
    description:
      'An end-to-end cab booking web application offering real-time ride scheduling, secure user authentication, live trip tracking workflows, and a database-driven dispatch backend.',
    icon: RiTaxiLine,
    tech: ['Next.js', 'React', 'Tailwind CSS', 'Java', 'MySQL', 'JavaScript'],
    category: 'Full Stack',
    gradient: 'from-blue-500 via-indigo-500 to-purple-600',
    domain: 'swiftcabs.vercel.app',
    github: 'https://github.com/Thilak-raj-08/swiftcabs',
    demo: 'https://swiftcabs.vercel.app',
    highlights: [
      'Real-time ride booking engine with pickup/drop-off fare estimation',
      'Multi-role authentication system for passengers, drivers, and administrators',
      'Ride status tracking and booking history persisted in relational database',
      'Modern Next.js & React frontend paired with robust backend logic',
    ],
    metrics: {
      architecture: 'Full-Stack Web Platform',
      focus: 'Real-Time Booking & Auth',
      deployment: 'Vercel Edge Network',
    },
  },
]

const categories = ['All', 'Full Stack', 'Frontend']

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-500 text-xs font-mono uppercase tracking-widest mb-3">
            <RiSparklingFill /> Production Case Studies
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-gray-900 dark:text-white mb-4">
            Featured <span className="text-gradient">Engineering Work</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
            Standalone production web applications architected from database schema to multi-page reactive interfaces.
          </p>
        </motion.div>

        {/* Animated Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-14">
          {categories.map((category) => {
            const isActive = activeCategory === category
            const count =
              category === 'All'
                ? projects.length
                : projects.filter((p) => p.category === category).length
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? 'text-white'
                    : 'glass-card text-gray-700 dark:text-gray-300 hover:text-rose-500'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="projectCategoryPill"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-rose-500 to-rose-600 shadow-lg shadow-rose-500/30 z-0"
                  />
                )}
                <span className="relative z-10">
                  {category} ({count})
                </span>
              </button>
            )
          })}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const Icon = project.icon
              return (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, y: 28, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className="group glass-card rounded-2xl overflow-hidden flex flex-col justify-between hover:border-rose-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-rose-500/10"
                >
                  <div>
                    {/* Browser Mockup Header & Gradient Showcase */}
                    <div
                      className={`relative h-56 bg-gradient-to-br ${project.gradient} p-4 flex flex-col justify-between overflow-hidden`}
                    >
                      <div className="absolute -top-12 -right-12 w-44 h-44 bg-white/15 rounded-full blur-xl group-hover:scale-125 transition-transform duration-700" />
                      <div className="absolute -bottom-14 -left-14 w-44 h-44 bg-black/15 rounded-full blur-xl" />

                      {/* Simulated Browser Top Bar */}
                      <div className="relative z-10 flex items-center justify-between px-3 py-1.5 rounded-xl bg-gray-950/40 backdrop-blur-md border border-white/15 text-white">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-300" />
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                        </div>
                        <span className="text-[11px] font-mono text-white/90 truncate max-w-[180px]">
                          https://{project.domain}
                        </span>
                        <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/20">
                          {project.category}
                        </span>
                      </div>

                      {/* Center Floating Project Icon */}
                      <div className="relative z-10 flex flex-col items-center justify-center my-auto">
                        <div className="w-18 h-18 rounded-2xl bg-white/15 backdrop-blur-md border border-white/25 flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                          <Icon className="text-white text-4xl drop-shadow" />
                        </div>
                        {project.badge && (
                          <span className="mt-2 px-3 py-0.5 rounded-full bg-gray-950/60 backdrop-blur-md border border-white/20 text-[10px] font-mono font-bold text-amber-300">
                            {project.badge}
                          </span>
                        )}
                      </div>

                      {/* Bottom Architecture Quick Tag */}
                      <div className="relative z-10 flex items-center justify-between text-xs text-white/90 font-mono">
                        <span>{project.metrics.architecture}</span>
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="px-2.5 py-1 rounded-lg bg-black/35 hover:bg-black/55 backdrop-blur-md border border-white/20 text-white text-[11px] transition-colors"
                        >
                          + System Specs
                        </button>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white group-hover:text-rose-500 transition-colors">
                          {project.title}
                        </h3>
                      </div>
                      <p className="text-xs font-mono uppercase tracking-wider text-rose-500 font-semibold mb-3">
                        {project.subtitle}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-5 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Key Feature Preview Bullet */}
                      <div className="space-y-1.5 mb-5">
                        {project.highlights.slice(0, 2).map((point, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-300"
                          >
                            <RiCheckboxCircleFill className="text-rose-500 mt-0.5 flex-shrink-0" />
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 text-xs font-mono font-medium bg-gray-100 dark:bg-gray-800/90 text-gray-700 dark:text-gray-300 border border-gray-200/70 dark:border-white/5 rounded-lg"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer Actions */}
                  <div className="px-6 pb-6 pt-3 border-t border-gray-200/70 dark:border-gray-800/80 flex items-center gap-2.5">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="px-3.5 py-2.5 text-xs font-semibold rounded-xl bg-rose-500/10 text-rose-500 hover:bg-rose-500 hover:text-white transition-all duration-200 flex items-center gap-1.5"
                    >
                      <RiStackLine className="text-sm" />
                      Specs
                    </button>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 text-xs font-semibold text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-xl transition-colors"
                    >
                      <RiGithubFill className="text-base" />
                      Code
                    </a>

                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 rounded-xl shadow-md shadow-rose-500/20 transition-all"
                    >
                      <span>Live Demo</span>
                      <RiArrowRightUpLine className="text-base" />
                    </a>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>

        {/* GitHub CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a
            href="https://github.com/Thilak-raj-08"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-7 py-4 rounded-2xl glass-card hover:border-rose-500/50 text-gray-900 dark:text-white font-semibold hover:-translate-y-0.5 transition-all shadow-lg"
          >
            <RiGithubFill className="text-2xl text-rose-500" />
            <span>Explore All Repositories on GitHub (@Thilak-raj-08)</span>
            <RiExternalLinkLine className="text-gray-400" />
          </a>
        </motion.div>
      </div>

      {/* Interactive Project Architecture Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[95] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-gray-950/75 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              className="relative w-full max-w-2xl rounded-3xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-white/10 shadow-2xl overflow-hidden z-10"
            >
              <div
                className={`p-6 sm:p-8 bg-gradient-to-r ${selectedProject.gradient} text-white relative`}
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  aria-label="Close modal"
                  className="absolute top-5 right-5 w-9 h-9 rounded-full bg-black/30 hover:bg-black/50 flex items-center justify-center text-white transition-colors"
                >
                  <RiCloseLine className="text-xl" />
                </button>
                <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-mono uppercase tracking-wider mb-3">
                  {selectedProject.category} Architecture
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-bold">
                  {selectedProject.title}
                </h3>
                <p className="text-white/90 text-sm mt-1">
                  {selectedProject.subtitle}
                </p>
              </div>

              <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3.5 rounded-xl bg-gray-50 dark:bg-gray-800/80 border border-gray-200/70 dark:border-white/5">
                    <p className="text-[11px] font-mono uppercase text-gray-500 dark:text-gray-400">
                      System Pattern
                    </p>
                    <p className="text-sm font-bold text-gray-900 dark:text-white mt-0.5">
                      {selectedProject.metrics.architecture}
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-gray-50 dark:bg-gray-800/80 border border-gray-200/70 dark:border-white/5">
                    <p className="text-[11px] font-mono uppercase text-gray-500 dark:text-gray-400">
                      Engineering Focus
                    </p>
                    <p className="text-sm font-bold text-gray-900 dark:text-white mt-0.5">
                      {selectedProject.metrics.focus}
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-gray-50 dark:bg-gray-800/80 border border-gray-200/70 dark:border-white/5">
                    <p className="text-[11px] font-mono uppercase text-gray-500 dark:text-gray-400">
                      Infrastructure
                    </p>
                    <p className="text-sm font-bold text-gray-900 dark:text-white mt-0.5">
                      {selectedProject.metrics.deployment}
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-mono uppercase tracking-wider text-rose-500 font-semibold mb-2">
                    Overview
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-mono uppercase tracking-wider text-rose-500 font-semibold mb-3">
                    Key Engineering Highlights
                  </h4>
                  <div className="space-y-2.5">
                    {selectedProject.highlights.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2.5 text-sm text-gray-700 dark:text-gray-300"
                      >
                        <RiCheckboxCircleFill className="text-rose-500 text-lg flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-mono uppercase tracking-wider text-rose-500 font-semibold mb-2.5">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1.5 rounded-lg text-xs font-mono font-semibold bg-rose-500/10 text-rose-500 border border-rose-500/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200 dark:border-gray-800 flex flex-wrap gap-3">
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 shadow-lg shadow-rose-500/25"
                  >
                    <RiExternalLinkLine className="text-lg" /> Launch Live Application
                  </a>
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-gray-800 dark:text-white bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
                  >
                    <RiGithubFill className="text-lg" /> View GitHub Repository
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
