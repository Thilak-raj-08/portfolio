'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  RiCodeSSlashLine,
  RiServerLine,
  RiDatabase2Line,
  RiPaletteLine,
  RiHtml5Fill,
  RiCss3Fill,
  RiJavascriptFill,
  RiVuejsFill,
  RiReactjsFill,
  RiBootstrapFill,
  RiTailwindCssFill,
  RiGithubFill,
  RiGitBranchLine,
  RiFigmaFill,
  RiRocket2Fill,
  RiCpuLine,
} from 'react-icons/ri'

const skillCategories = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    icon: RiCodeSSlashLine,
    description: 'Responsive, accessible, component-driven web interfaces',
    color: 'from-rose-500 to-pink-600',
    skills: [
      { name: 'HTML5', icon: RiHtml5Fill, color: 'text-orange-500', level: 95, tag: 'Semantic UI' },
      { name: 'CSS3', icon: RiCss3Fill, color: 'text-blue-500', level: 92, tag: 'Animations' },
      { name: 'JavaScript', icon: RiJavascriptFill, color: 'text-yellow-400', level: 90, tag: 'ES6+ Logic' },
      { name: 'TypeScript', label: 'TS', color: 'text-blue-500', bg: 'bg-blue-500/15', level: 82, tag: 'Type Safety' },
      { name: 'React', icon: RiReactjsFill, color: 'text-cyan-400', level: 88, tag: 'Hooks & SPA' },
      { name: 'Next.js', label: 'Nx', color: 'text-gray-900 dark:text-white', bg: 'bg-gray-500/15', level: 86, tag: 'App Router' },
      { name: 'Vue.js', icon: RiVuejsFill, color: 'text-emerald-500', level: 88, tag: 'Reactive UI' },
      { name: 'Nuxt.js', label: 'Nu', color: 'text-emerald-400', bg: 'bg-emerald-500/15', level: 86, tag: 'SSR / SPA' },
      { name: 'Tailwind CSS', icon: RiTailwindCssFill, color: 'text-teal-400', level: 95, tag: 'Design Systems' },
      { name: 'Bootstrap', icon: RiBootstrapFill, color: 'text-purple-500', level: 90, tag: 'Grid Layouts' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend Development',
    icon: RiServerLine,
    description: 'Server-side architecture, REST APIs & business logic',
    color: 'from-blue-500 to-indigo-600',
    skills: [
      { name: 'PHP', label: 'PHP', color: 'text-indigo-400', bg: 'bg-indigo-500/15', level: 88, tag: 'Server Logic' },
      { name: 'Laravel', label: 'Lv', color: 'text-rose-500', bg: 'bg-rose-500/15', level: 84, tag: 'MVC Framework' },
      { name: 'Java', label: 'JV', color: 'text-red-500', bg: 'bg-red-500/15', level: 82, tag: 'OOP Systems' },
      { name: 'Python', label: 'PY', color: 'text-amber-400', bg: 'bg-amber-500/15', level: 80, tag: 'Scripting & AI' },
      { name: 'C#', label: 'C#', color: 'text-purple-400', bg: 'bg-purple-500/15', level: 78, tag: '.NET Core' },
    ],
  },
  {
    id: 'database',
    title: 'Database Management',
    icon: RiDatabase2Line,
    description: 'Relational data modeling, queries & optimization',
    color: 'from-emerald-500 to-teal-600',
    skills: [
      { name: 'MySQL', icon: RiDatabase2Line, color: 'text-sky-500', level: 90, tag: 'Relational DB' },
      { name: 'PostgreSQL', icon: RiDatabase2Line, color: 'text-indigo-400', level: 84, tag: 'Advanced SQL' },
    ],
  },
  {
    id: 'tools',
    title: 'Design & Engineering Tools',
    icon: RiPaletteLine,
    description: 'UI/UX prototyping, version control & team workflows',
    color: 'from-amber-500 to-orange-600',
    skills: [
      { name: 'Figma', icon: RiFigmaFill, color: 'text-purple-500', level: 88, tag: 'UI Prototyping' },
      { name: 'Adobe XD', label: 'Xd', color: 'text-pink-500', bg: 'bg-pink-500/15', level: 85, tag: 'Wireframing' },
      { name: 'Canva', label: 'Cv', color: 'text-cyan-400', bg: 'bg-cyan-500/15', level: 92, tag: 'Visual Assets' },
      { name: 'Git', icon: RiGitBranchLine, color: 'text-orange-500', level: 90, tag: 'Version Control' },
      { name: 'GitHub', icon: RiGithubFill, color: 'text-gray-900 dark:text-white', level: 92, tag: 'CI / Repos' },
      { name: 'Bitbucket', label: 'Bb', color: 'text-blue-500', bg: 'bg-blue-500/15', level: 82, tag: 'Team Git' },
    ],
  },
]

const marqueeItems = [
  'React 19',
  'Next.js',
  'TypeScript',
  'Nuxt.js',
  'Vue.js',
  'Laravel',
  'PHP',
  'Tailwind CSS',
  'MySQL',
  'PostgreSQL',
  'Java',
  'Python',
  'C#',
  'Figma',
  'Git & GitHub',
]

function SkillIcon({ skill }) {
  if (skill.icon) {
    const Icon = skill.icon
    return (
      <div className="w-11 h-11 rounded-xl bg-gray-100 dark:bg-gray-800/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        <Icon className={`text-2xl ${skill.color}`} />
      </div>
    )
  }
  return (
    <div
      className={`w-11 h-11 rounded-xl ${skill.bg} flex items-center justify-center font-mono font-bold text-sm ${skill.color} group-hover:scale-110 transition-transform duration-300`}
    >
      {skill.label}
    </div>
  )
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all')

  const displayedCategories =
    activeTab === 'all'
      ? skillCategories
      : skillCategories.filter((c) => c.id === activeTab)

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-500 text-xs font-mono uppercase tracking-widest mb-3">
            <RiCpuLine /> Technical Arsenal
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-gray-900 dark:text-white mb-4">
            Skills & <span className="text-gradient">Tech Ecosystem</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
            A full-spectrum engineering toolkit combining modern reactive frontend frameworks with battle-tested backend languages and relational databases.
          </p>
        </motion.div>

        {/* Infinite Tech Marquee Ribbon */}
        <div className="relative w-full overflow-hidden py-4 mb-12 rounded-2xl glass-card">
          <div className="flex w-max animate-marquee gap-6 items-center">
            {[...marqueeItems, ...marqueeItems].map((item, idx) => (
              <div
                key={idx}
                className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-gray-100/80 dark:bg-gray-800/80 border border-gray-200/60 dark:border-white/5 text-xs font-mono font-semibold text-gray-800 dark:text-gray-200"
              >
                <span className="w-2 h-2 rounded-full bg-rose-500" />
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Domain Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {[
            { id: 'all', label: 'All Domains (23)' },
            { id: 'frontend', label: 'Frontend (10)' },
            { id: 'backend', label: 'Backend (5)' },
            { id: 'database', label: 'Database (2)' },
            { id: 'tools', label: 'Design & Tools (6)' },
          ].map((tab) => {
            const isActive = activeTab === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? 'text-white'
                    : 'glass-card text-gray-700 dark:text-gray-300 hover:text-rose-500'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="skillTabPill"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-rose-500 to-rose-600 shadow-lg shadow-rose-500/30 z-0"
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            )
          })}
        </div>

        {/* Categories Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {displayedCategories.map((category) => {
              const CategoryIcon = category.icon
              return (
                <motion.div
                  layout
                  key={category.id}
                  initial={{ opacity: 0, y: 24, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="glass-card rounded-2xl p-6 sm:p-7 hover:border-rose-500/40 transition-all duration-500"
                >
                  {/* Category Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div
                      className={`flex-shrink-0 w-13 h-13 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg`}
                    >
                      <CategoryIcon className="text-white text-2xl" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white">
                          {category.title}
                        </h3>
                        <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-rose-500/10 text-rose-500 font-semibold">
                          {category.skills.length} skills
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills Cards Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="group p-3.5 rounded-xl bg-gray-50/90 dark:bg-gray-900/60 border border-gray-200/60 dark:border-white/5 hover:border-rose-500/40 transition-all duration-300"
                      >
                        <div className="flex items-center gap-3 mb-2.5">
                          <SkillIcon skill={skill} />
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <h4 className="text-sm font-bold text-gray-900 dark:text-white truncate">
                                {skill.name}
                              </h4>
                              <span className="text-[11px] font-mono text-rose-500 font-semibold">
                                {skill.level}%
                              </span>
                            </div>
                            <p className="text-[11px] text-gray-500 dark:text-gray-400 truncate">
                              {skill.tag}
                            </p>
                          </div>
                        </div>

                        {/* Animated Proficiency Bar */}
                        <div className="w-full h-1.5 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: 'easeOut' }}
                            className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>

        {/* Currently Expanding Spotlight Banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 relative rounded-3xl overflow-hidden p-8 sm:p-10 bg-gradient-to-r from-rose-600 via-pink-600 to-purple-700 text-white shadow-2xl shadow-rose-500/20"
        >
          <div className="absolute -right-12 -top-12 w-64 h-64 rounded-full bg-white/10 blur-2xl pointer-events-none" />
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
              <div className="w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-md border border-white/25 flex items-center justify-center flex-shrink-0 shadow-xl">
                <RiRocket2Fill className="text-3xl text-white" />
              </div>
              <div>
                <span className="inline-block px-3 py-0.5 rounded-full bg-white/20 text-xs font-mono uppercase tracking-wider mb-2">
                  Continuous Growth Mindset
                </span>
                <h3 className="text-2xl font-display font-bold mb-2">
                  Deepening Expertise in React, Next.js & Laravel
                </h3>
                <p className="text-white/90 text-sm sm:text-base max-w-2xl leading-relaxed">
                  Currently engineering scalable full-stack web applications with Next.js App Router, React 19, and Laravel RESTful backends — ready to make an immediate impact in a Software Developer internship or junior role.
                </p>
              </div>
            </div>

            <a
              href="#contact"
              className="flex-shrink-0 px-6 py-3.5 rounded-xl bg-white text-rose-600 font-display font-bold text-sm hover:bg-gray-100 shadow-xl transition-all hover:-translate-y-0.5"
            >
              Hire Me for Your Team →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
