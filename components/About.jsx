'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  RiGraduationCapLine,
  RiAwardLine,
  RiCodeBoxLine,
  RiTeamLine,
  RiLightbulbLine,
  RiRocketLine,
  RiMapPinLine,
  RiTimeLine,
  RiVerifiedBadgeFill,
  RiSparklingFill,
  RiArrowRightLine,
} from 'react-icons/ri'

const education = [
  {
    degree: 'BSc (Hons) Software Engineering',
    grade: 'Second Class, Division One',
    institution: 'International College of Business and Technology (ICBT)',
    location: 'Campus Jaffna, Sri Lanka',
    period: 'Dec 2024 – Nov 2025',
    icon: RiGraduationCapLine,
    color: 'from-rose-500 to-pink-600',
    highlights: [
      'Advanced full-stack software engineering, architecture & design patterns',
      'Database management systems, software quality assurance & agile delivery',
    ],
  },
  {
    degree: 'Higher National Diploma (HND) in Computing',
    grade: 'Distinction',
    institution: 'British College of Applied Studies (BCAS) Campus Jaffna',
    location: 'Pearson BTEC Level 5',
    period: 'Sep 2022 – May 2024',
    icon: RiAwardLine,
    color: 'from-amber-500 to-orange-600',
    highlights: [
      'Graduated with highest academic honor (Distinction)',
      'Strong foundation in programming, data structures, networking & web systems',
    ],
  },
]

const highlights = [
  {
    icon: RiCodeBoxLine,
    title: 'Full-Stack Versatility',
    tag: 'React • Next.js • Nuxt • Laravel',
    description:
      'Seamlessly bridging modern reactive frontends with structured relational databases and server-side APIs.',
  },
  {
    icon: RiLightbulbLine,
    title: 'Analytical Problem Solver',
    tag: 'Clean Code & Edge Cases',
    description:
      'Methodical debugging, strong attention to UI/UX detail, and commitment to maintainable codebases.',
  },
  {
    icon: RiTeamLine,
    title: 'Collaborative Communicator',
    tag: 'Git • Bitbucket • Agile',
    description:
      'Thrives in team environments with clear documentation, Git workflows, and proactive communication.',
  },
  {
    icon: RiRocketLine,
    title: 'Relentless Learner',
    tag: 'Continuous Improvement',
    description:
      'Self-motivated engineer constantly mastering the newest web standards, frameworks, and UI patterns.',
  },
]

const storyTabs = {
  journey: {
    label: 'My Journey',
    title: 'From HND Distinction to BSc (Hons) Software Engineering',
    paragraphs: [
      "Hi! I'm Jeyarajan Thilakraj, a passionate Software Engineering graduate from Point Pedro, Jaffna, Sri Lanka. I completed my BSc (Hons) in Software Engineering at ICBT Campus Jaffna with Second Class, Division One honors.",
      'My academic journey began with a Higher National Diploma (HND) in Computing (Pearson BTEC Level 5) at BCAS Campus Jaffna, where I graduated with a Distinction. Along the way, I have engineered production-ready applications across e-commerce, restaurant management, and real-time cab booking domains.',
      "Today, I specialize in building fast, intuitive web applications using React, Next.js, Vue.js, Nuxt.js, Laravel, PHP, and MySQL — always focusing on clean code and memorable user experiences.",
    ],
  },
  objective: {
    label: 'Career Objective',
    title: 'Ready to Deliver Impact in a Development Team',
    paragraphs: [
      'As a motivated Software Engineering graduate, I am actively seeking a Software Developer or Full-Stack Developer Internship / Junior Engineer role where I can apply my strong foundation in web development, relational databases, and modern frameworks.',
      'I am eager to collaborate with experienced engineering mentors, contribute to real-world client and product codebases from day one, and continuously elevate my technical craft.',
    ],
  },
  philosophy: {
    label: 'Engineering Values',
    title: 'How I Approach Software Craftsmanship',
    paragraphs: [
      '1. User-First Interfaces: Every millisecond of latency and every micro-interaction matters. I build responsive layouts that feel effortless on both mobile and desktop.',
      '2. Clean & Scalable Architecture: Whether writing React/Next.js components or Laravel/SQL backends, I structure code so future developers can read and extend it easily.',
      '3. Ownership & Curiosity: I embrace code reviews, test edge cases thoroughly, and stay updated with modern web engineering standards.',
    ],
  },
}

export default function About() {
  const [activeStoryTab, setActiveStoryTab] = useState('journey')
  const [lkTime, setLkTime] = useState('')

  useEffect(() => {
    const updateClock = () => {
      try {
        const formatter = new Intl.DateTimeFormat('en-US', {
          timeZone: 'Asia/Colombo',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        })
        setLkTime(formatter.format(new Date()))
      } catch {
        setLkTime('UTC+05:30')
      }
    }
    updateClock()
    const timer = setInterval(updateClock, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section
      id="about"
      className="py-24 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-500 text-xs font-mono uppercase tracking-widest mb-3">
            <RiSparklingFill /> Background & Credentials
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-gray-900 dark:text-white mb-4">
            About <span className="text-gradient">Jeyarajan Thilakraj</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
            Combining strong academic honors in Software Engineering with hands-on full-stack product execution.
          </p>
        </motion.div>

        {/* Main Grid: Interactive Story Card (Left) + Education Timeline (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20">
          {/* Left: Interactive Story & Location Bento (6 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col justify-between space-y-6"
          >
            <div className="glass-card rounded-3xl p-6 sm:p-8">
              {/* Interactive Story Tabs */}
              <div className="flex flex-wrap gap-2 mb-6 p-1.5 rounded-2xl bg-gray-100/90 dark:bg-gray-900/90 border border-gray-200/60 dark:border-white/5">
                {Object.entries(storyTabs).map(([key, tab]) => {
                  const isActive = activeStoryTab === key
                  return (
                    <button
                      key={key}
                      onClick={() => setActiveStoryTab(key)}
                      className={`flex-1 py-2 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                        isActive
                          ? 'bg-rose-500 text-white shadow-md shadow-rose-500/25'
                          : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                      }`}
                    >
                      {tab.label}
                    </button>
                  )
                })}
              </div>

              {/* Tab Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStoryTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                >
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">
                    {storyTabs[activeStoryTab].title}
                  </h3>
                  <div className="space-y-4 text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
                    {storyTabs[activeStoryTab].paragraphs.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Live Location & Timezone Bento Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass-card p-5 rounded-2xl flex items-center gap-4 hover:border-rose-500/40 transition-all">
                <div className="w-12 h-12 rounded-xl bg-rose-500/15 text-rose-500 flex items-center justify-center flex-shrink-0">
                  <RiMapPinLine className="text-2xl" />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-gray-500 dark:text-gray-400">
                    Base Location
                  </p>
                  <p className="text-sm font-bold text-gray-900 dark:text-white">
                    Point Pedro, Jaffna, SL
                  </p>
                </div>
              </div>

              <div className="glass-card p-5 rounded-2xl flex items-center gap-4 hover:border-rose-500/40 transition-all">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/15 text-emerald-500 flex items-center justify-center flex-shrink-0">
                  <RiTimeLine className="text-2xl" />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-gray-500 dark:text-gray-400">
                    Local Time (IST)
                  </p>
                  <p className="text-sm font-mono font-bold text-gray-900 dark:text-white">
                    {lkTime || 'UTC+05:30'}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Academic Qualifications Timeline (6 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6"
          >
            <div className="glass-card rounded-3xl p-6 sm:p-8 h-full">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white">
                    Academic <span className="text-gradient">Qualifications</span>
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    Verified Higher Education & Honours Degrees
                  </p>
                </div>
                <span className="px-3 py-1 rounded-full bg-rose-500/10 text-rose-500 text-xs font-mono font-semibold">
                  2022 – 2025
                </span>
              </div>

              <div className="space-y-8 relative">
                {/* Vertical glowing timeline spine */}
                <div className="absolute left-6 top-3 bottom-3 w-0.5 bg-gradient-to-b from-rose-500 via-amber-500 to-transparent" />

                {education.map((edu, index) => {
                  const Icon = edu.icon
                  return (
                    <div key={index} className="relative pl-16 group">
                      {/* Timeline Node */}
                      <div
                        className={`absolute left-0 top-0 w-12 h-12 rounded-2xl bg-gradient-to-br ${edu.color} flex items-center justify-center shadow-lg z-10 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className="text-white text-xl" />
                      </div>

                      {/* Card */}
                      <div className="p-5 rounded-2xl bg-gray-50/90 dark:bg-gray-900/70 border border-gray-200/70 dark:border-white/5 hover:border-rose-500/40 transition-all duration-300">
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                          <span className="px-2.5 py-0.5 text-xs font-mono font-medium bg-rose-500/10 text-rose-500 rounded-md">
                            {edu.period}
                          </span>
                          <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-500">
                            <RiVerifiedBadgeFill /> {edu.grade}
                          </span>
                        </div>

                        <h4 className="text-lg font-display font-bold text-gray-900 dark:text-white mb-1">
                          {edu.degree}
                        </h4>
                        <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {edu.institution}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
                          {edu.location}
                        </p>

                        <ul className="space-y-1.5 border-t border-gray-200/70 dark:border-gray-800 pt-3">
                          {edu.highlights.map((h, i) => (
                            <li
                              key={i}
                              className="text-xs text-gray-600 dark:text-gray-400 flex items-start gap-2"
                            >
                              <RiArrowRightLine className="text-rose-500 mt-0.5 flex-shrink-0" />
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bento Grid: What Makes Me Different */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-gray-900 dark:text-white text-center mb-10">
            Why Engineering Teams <span className="text-gradient">Work With Me</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="group glass-card p-6 rounded-2xl hover:border-rose-500/50 hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="w-13 h-13 mb-5 rounded-2xl bg-rose-500/10 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-rose-500 group-hover:to-pink-600 transition-all duration-300 shadow-sm">
                    <Icon className="text-rose-500 text-2xl group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-rose-500 font-semibold">
                    {item.tag}
                  </span>
                  <h4 className="text-lg font-display font-bold text-gray-900 dark:text-white mt-1 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
