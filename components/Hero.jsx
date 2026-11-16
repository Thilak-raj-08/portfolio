'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import {
  RiGithubFill,
  RiLinkedinBoxFill,
  RiMailFill,
  RiDownloadLine,
  RiArrowRightUpLine,
  RiTerminalBoxLine,
  RiUserSmileLine,
  RiSparkling2Fill,
  RiAwardFill,
  RiGraduationCapFill,
  RiReactjsLine,
  RiVuejsFill,
  RiCodeSSlashLine,
  RiCheckLine,
  RiFileCopyLine,
} from 'react-icons/ri'

const roles = [
  'Full-Stack Software Engineer',
  'Next.js & React Architect',
  'Laravel & PHP Developer',
  'Vue.js & Nuxt.js Specialist',
  'UI/UX-Focused Problem Solver',
]

const terminalCommands = {
  whoami: [
    '→ Name: Jeyarajan Thilakraj',
    '→ Role: Software Engineering Graduate | Full-Stack Developer',
    '→ Location: Point Pedro, Jaffna, Sri Lanka 🇱🇰',
    '→ Status: Open for Software Developer / Full-Stack Internships & Junior Roles',
  ],
  education: [
    '🎓 BSc (Hons) Software Engineering — Second Class, Division One',
    '   ICBT Campus Jaffna (Dec 2024 – Nov 2025)',
    '🏆 HND in Computing — Grade: Distinction (Pearson BTEC Level 5)',
    '   BCAS Campus Jaffna (Sep 2022 – May 2024)',
  ],
  skills: [
    '⚡ Frontend : React, Next.js, Vue.js, Nuxt.js, TypeScript, Tailwind CSS, HTML5/CSS3',
    '🛠 Backend  : Laravel, PHP, Java, Python, C#',
    '🗄 Database : MySQL, PostgreSQL',
    '🎨 Design   : Figma, Adobe XD, Git/GitHub, Bitbucket',
  ],
  projects: [
    '1. Aetheris Command  → 5-Page Global Treasury, Fleet Logistics & Cloud SLA Dashboard',
    '2. Veritas Campus ERP → 5-Page University Student Management, Roll-Call & Transcript ERP',
    '3. Forno Rosso Pizza  → 5-Page Artisanal Wood-Fired Pizza Ordering & Custom Builder',
    '4. NexaFlow AI        → 5-Page AI DevTools, Agile Kanban & FinOps SaaS Platform',
    '5. Fresh-Market       → Nuxt.js + Tailwind E-Commerce Platform (Live on Vercel)',
    '6. Royal Food Corner  → Laravel + Alpine.js Full-Stack Restaurant & Order System',
    '7. SwiftCabs          → Next.js + React Real-Time Cab Booking Platform',
  ],
  contact: [
    '📧 Email    : jeyarajanthilakraj@gmail.com',
    '📱 Phone    : +94 70 185 6212',
    '🔗 GitHub   : github.com/Thilak-raj-08',
    '💼 LinkedIn : linkedin.com/in/jeyarajan-thilakraj-46b510404',
  ],
}

export default function Hero() {
  const [text, setText] = useState('')
  const [roleIndex, setRoleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [viewMode, setViewMode] = useState('portrait') // 'portrait' | 'terminal'
  const [copiedEmail, setCopiedEmail] = useState(false)

  // 3D Tilt state for profile card
  const cardRef = useRef(null)
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 })

  // Interactive Terminal state
  const [history, setHistory] = useState([
    {
      cmd: 'whoami',
      output: terminalCommands.whoami,
    },
    {
      cmd: 'education',
      output: terminalCommands.education,
    },
  ])
  const [cmdInput, setCmdInput] = useState('')

  // Typewriter effect
  useEffect(() => {
    const currentRole = roles[roleIndex]
    const typingSpeed = isDeleting ? 35 : 75
    const pauseTime = isDeleting ? 300 : 1800

    const timeout = setTimeout(() => {
      if (!isDeleting && text === currentRole) {
        setTimeout(() => setIsDeleting(true), pauseTime)
      } else if (isDeleting && text === '') {
        setIsDeleting(false)
        setRoleIndex((prev) => (prev + 1) % roles.length)
      } else {
        setText((prev) =>
          isDeleting
            ? currentRole.substring(0, prev.length - 1)
            : currentRole.substring(0, prev.length + 1)
        )
      }
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [text, isDeleting, roleIndex])

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = ((y - centerY) / centerY) * -10
    const rotateY = ((x - centerX) / centerX) * 10
    setTilt({ rotateX, rotateY })
  }

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 })
  }

  const runCommand = (rawCmd) => {
    const clean = rawCmd.trim().toLowerCase()
    if (!clean) return
    if (clean === 'clear') {
      setHistory([])
      setCmdInput('')
      return
    }
    if (clean === 'help') {
      setHistory((prev) => [
        ...prev,
        {
          cmd: clean,
          output: [
            'Available commands: whoami | education | skills | projects | contact | clear',
          ],
        },
      ])
      setCmdInput('')
      return
    }
    const result = terminalCommands[clean] || [
      `Command not found: "${clean}". Try: whoami, education, skills, projects, contact, clear`,
    ]
    setHistory((prev) => [...prev, { cmd: clean, output: result }])
    setCmdInput('')
  }

  const copyEmail = () => {
    navigator.clipboard.writeText('jeyarajanthilakraj@gmail.com')
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2000)
  }

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center pt-28 pb-16 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: High-Impact Typography & Actions (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 order-2 lg:order-1"
          >
            {/* Availability Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-rose-500/10 dark:bg-rose-500/15 border border-rose-500/25 mb-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs sm:text-sm font-medium text-gray-800 dark:text-gray-200">
                Available for Internships & Junior Software Engineer Roles
              </span>
              <span className="hidden sm:inline-block text-xs px-2 py-0.5 rounded-full bg-rose-500 text-white font-semibold">
                Jaffna, LK
              </span>
            </div>

            {/* Main Display Heading */}
            <h1 className="text-4xl sm:text-6xl lg:text-[64px] font-display font-bold text-gray-900 dark:text-white tracking-tight leading-[1.08] mb-4">
              Architecting{' '}
              <span className="text-gradient">Modern Web</span> Experiences.
            </h1>

            {/* Subtitle with Name & Typewriter */}
            <div className="text-xl sm:text-2xl lg:text-3xl font-display font-semibold text-gray-700 dark:text-gray-200 mb-5 min-h-[2.5rem] flex flex-wrap items-center gap-x-2">
              <span>Hi, I&apos;m Jeyarajan Thilakraj —</span>
              <span className="text-rose-500 font-bold">
                {text}
                <span className="cursor"></span>
              </span>
            </div>

            {/* Bio Paragraph */}
            <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg mb-8 max-w-2xl leading-relaxed">
              A <strong className="text-gray-900 dark:text-white font-semibold">BSc (Hons) Software Engineering</strong> graduate
              (Second Class, Division One) and <strong className="text-gray-900 dark:text-white font-semibold">HND Computing Distinction</strong> holder
              from Jaffna, Sri Lanka. I craft fast, accessible, full-stack applications with{' '}
              <span className="text-gray-900 dark:text-gray-200 font-medium underline decoration-rose-500/50 underline-offset-4">
                Next.js, React, Nuxt.js, and Laravel
              </span>
              .
            </p>

            {/* Primary CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-8">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-xl text-white bg-gradient-to-r from-rose-500 via-rose-600 to-pink-600 hover:from-rose-600 hover:to-pink-700 shadow-xl shadow-rose-500/30 hover:shadow-rose-500/50 hover:-translate-y-0.5 transition-all duration-300"
              >
                <span>Explore My Work</span>
                <RiArrowRightUpLine className="text-lg group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href="/CV.pdf"
                download="Jeyarajan_Thilakraj_CV.pdf"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-xl text-gray-900 dark:text-white glass-card hover:border-rose-500/50 hover:text-rose-500 dark:hover:text-rose-400 hover:-translate-y-0.5 transition-all duration-300"
              >
                <RiDownloadLine className="text-lg text-rose-500" />
                <span>Download CV</span>
              </a>

              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-2 px-4 py-3.5 text-xs sm:text-sm font-mono rounded-xl bg-gray-100/90 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 hover:text-rose-500 border border-gray-200/80 dark:border-gray-700/80 transition-all"
                title="Copy email address"
              >
                {copiedEmail ? (
                  <>
                    <RiCheckLine className="text-emerald-500 text-base" />
                    <span className="text-emerald-500 font-sans font-medium">Copied!</span>
                  </>
                ) : (
                  <>
                    <RiFileCopyLine className="text-rose-500 text-base" />
                    <span className="hidden sm:inline">jeyarajanthilakraj@gmail.com</span>
                    <span className="sm:hidden">Copy Email</span>
                  </>
                )}
              </button>
            </div>

            {/* Social Bar & Interactive Mode Toggle Hint */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-gray-200/80 dark:border-gray-800/80 max-w-xl">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  Connect
                </span>
                <div className="flex gap-2.5">
                  <a
                    href="https://github.com/Thilak-raj-08"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-800/90 text-gray-700 dark:text-gray-300 hover:bg-rose-500 hover:text-white border border-gray-200/60 dark:border-white/5 transition-all duration-300 hover:-translate-y-1 shadow-sm"
                  >
                    <RiGithubFill className="text-xl" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/jeyarajan-thilakraj-46b510404"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-800/90 text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white border border-gray-200/60 dark:border-white/5 transition-all duration-300 hover:-translate-y-1 shadow-sm"
                  >
                    <RiLinkedinBoxFill className="text-xl" />
                  </a>
                  <a
                    href="mailto:jeyarajanthilakraj@gmail.com"
                    aria-label="Email"
                    className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-800/90 text-gray-700 dark:text-gray-300 hover:bg-rose-500 hover:text-white border border-gray-200/60 dark:border-white/5 transition-all duration-300 hover:-translate-y-1 shadow-sm"
                  >
                    <RiMailFill className="text-xl" />
                  </a>
                </div>
              </div>

              {/* Switcher between 3D Portrait & Live Dev Terminal */}
              <div className="inline-flex items-center p-1 rounded-xl bg-gray-100 dark:bg-gray-800/90 border border-gray-200 dark:border-gray-700">
                <button
                  onClick={() => setViewMode('portrait')}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    viewMode === 'portrait'
                      ? 'bg-rose-500 text-white shadow'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  <RiUserSmileLine /> 3D Portrait
                </button>
                <button
                  onClick={() => setViewMode('terminal')}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    viewMode === 'terminal'
                      ? 'bg-rose-500 text-white shadow'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  <RiTerminalBoxLine /> Dev Terminal
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive 3D Portrait OR Live Dev Terminal (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 order-1 lg:order-2 flex justify-center"
          >
            <AnimatePresence mode="wait">
              {viewMode === 'portrait' ? (
                <motion.div
                  key="portrait-card"
                  initial={{ opacity: 0, rotateY: -15, scale: 0.95 }}
                  animate={{ opacity: 1, rotateY: 0, scale: 1 }}
                  exit={{ opacity: 0, rotateY: 15, scale: 0.95 }}
                  transition={{ duration: 0.45 }}
                  ref={cardRef}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  style={{
                    transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
                    transformStyle: 'preserve-3d',
                  }}
                  className="relative w-72 h-72 sm:w-88 sm:h-88 lg:w-[390px] lg:h-[390px] transition-transform duration-150 ease-out cursor-pointer"
                >
                  {/* Ambient Glow Behind Portrait */}
                  <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-rose-500 via-purple-500 to-amber-500 opacity-30 dark:opacity-40 blur-3xl animate-pulse-glow" />

                  {/* Outer Rotating Dashed Tech Ring */}
                  <div className="absolute -inset-3 rounded-full border border-dashed border-rose-500/40 dark:border-rose-400/30 animate-spin-slow" />
                  <div className="absolute -inset-7 rounded-full border border-dotted border-purple-500/30 dark:border-purple-400/20 animate-reverse-spin" />

                  {/* Main Circular Frame */}
                  <div className="relative w-full h-full rounded-full p-2 bg-gradient-to-br from-rose-500 via-pink-500 to-purple-600 shadow-2xl shadow-rose-500/25">
                    <div className="w-full h-full rounded-full bg-white dark:bg-gray-950 p-2">
                      <div className="relative w-full h-full rounded-full overflow-hidden group">
                        <Image
                          src="/profile.jpeg"
                          alt="Jeyarajan Thilakraj"
                          fill
                          sizes="(max-width: 768px) 288px, 390px"
                          className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                          priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                          <span className="text-xs font-mono text-white px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20">
                            Click &ldquo;Dev Terminal&rdquo; to inspect CLI →
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Badge 1: BSc (Hons) Degree */}
                  <div
                    style={{ transform: 'translateZ(40px)' }}
                    className="absolute -top-3 -left-4 sm:-left-6 glass-card px-3.5 py-2.5 rounded-2xl shadow-xl flex items-center gap-2.5 animate-float"
                  >
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center text-white shadow-md">
                      <RiGraduationCapFill className="text-lg" />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono uppercase tracking-wider text-rose-500 font-semibold">
                        BSc (Hons) SE
                      </p>
                      <p className="text-xs font-bold text-gray-900 dark:text-white">
                        2nd Class Upper
                      </p>
                    </div>
                  </div>

                  {/* Floating Badge 2: HND Distinction */}
                  <div
                    style={{ transform: 'translateZ(50px)' }}
                    className="absolute top-8 -right-4 sm:-right-8 glass-card px-3.5 py-2.5 rounded-2xl shadow-xl flex items-center gap-2.5 animate-float-delayed"
                  >
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white shadow-md">
                      <RiAwardFill className="text-lg" />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono uppercase tracking-wider text-amber-500 font-semibold">
                        HND Computing
                      </p>
                      <p className="text-xs font-bold text-gray-900 dark:text-white">
                        Distinction
                      </p>
                    </div>
                  </div>

                  {/* Floating Badge 3: Core Tech Stack */}
                  <div
                    style={{ transform: 'translateZ(45px)' }}
                    className="absolute -bottom-4 left-1/2 -translate-x-1/2 glass-card px-4 py-2 rounded-full shadow-xl flex items-center gap-3 whitespace-nowrap"
                  >
                    <span className="flex items-center gap-1 text-xs font-semibold text-gray-900 dark:text-white">
                      <RiReactjsLine className="text-cyan-400 text-base animate-spin-slow" />
                      React & Next.js
                    </span>
                    <span className="text-gray-300 dark:text-gray-700">•</span>
                    <span className="flex items-center gap-1 text-xs font-semibold text-gray-900 dark:text-white">
                      <RiVuejsFill className="text-emerald-500 text-base" />
                      Nuxt & Laravel
                    </span>
                  </div>
                </motion.div>
              ) : (
                /* Interactive Developer Terminal Mode */
                <motion.div
                  key="terminal-card"
                  initial={{ opacity: 0, rotateY: 15, scale: 0.95 }}
                  animate={{ opacity: 1, rotateY: 0, scale: 1 }}
                  exit={{ opacity: 0, rotateY: -15, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="w-full max-w-lg rounded-2xl overflow-hidden bg-gray-950 border border-white/15 shadow-2xl shadow-rose-500/15 text-left"
                >
                  {/* Terminal Window Header */}
                  <div className="flex items-center justify-between px-4 py-3 bg-gray-900 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-rose-500" />
                      <span className="w-3 h-3 rounded-full bg-amber-400" />
                      <span className="w-3 h-3 rounded-full bg-emerald-500" />
                      <span className="ml-2 text-xs font-mono text-gray-400">
                        thilakraj@portfolio:~ (zsh)
                      </span>
                    </div>
                    <button
                      onClick={() => setViewMode('portrait')}
                      className="text-[11px] font-mono text-rose-400 hover:underline"
                    >
                      [Switch to 3D Photo]
                    </button>
                  </div>

                  {/* Quick Command Buttons */}
                  <div className="px-4 py-2 bg-gray-900/60 border-b border-white/5 flex flex-wrap items-center gap-1.5">
                    <span className="text-[10px] font-mono text-gray-400 mr-1">
                      Click to run:
                    </span>
                    {['whoami', 'education', 'skills', 'projects', 'contact', 'clear'].map(
                      (cmd) => (
                        <button
                          key={cmd}
                          onClick={() => runCommand(cmd)}
                          className="px-2 py-0.5 text-[11px] font-mono rounded bg-rose-500/15 text-rose-400 hover:bg-rose-500 hover:text-white transition-colors"
                        >
                          {cmd}
                        </button>
                      )
                    )}
                  </div>

                  {/* Terminal Output Body */}
                  <div className="p-4 h-72 overflow-y-auto font-mono text-xs space-y-3 bg-gray-950/95">
                    {history.map((item, index) => (
                      <div key={index} className="space-y-1">
                        <div className="flex items-center gap-2 text-emerald-400">
                          <span>➜</span>
                          <span className="text-cyan-400">~</span>
                          <span className="text-white font-semibold">{item.cmd}</span>
                        </div>
                        <div className="pl-4 space-y-1 text-gray-300">
                          {item.output.map((line, i) => (
                            <p key={i} className="leading-relaxed">
                              {line}
                            </p>
                          ))}
                        </div>
                      </div>
                    ))}

                    {/* Command Input Line */}
                    <form
                      onSubmit={(e) => {
                        e.preventDefault()
                        runCommand(cmdInput)
                      }}
                      className="flex items-center gap-2 pt-1"
                    >
                      <span className="text-emerald-400">➜</span>
                      <span className="text-cyan-400">~</span>
                      <input
                        type="text"
                        value={cmdInput}
                        onChange={(e) => setCmdInput(e.target.value)}
                        placeholder="type 'skills', 'projects', or 'help'..."
                        className="flex-1 bg-transparent text-white placeholder-gray-600 focus:outline-none"
                      />
                    </form>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Bottom Architectural Metrics Bar */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {[
            {
              value: 'BSc (Hons)',
              label: 'Software Engineering',
              detail: 'Second Class, Division One (ICBT)',
            },
            {
              value: 'Distinction',
              label: 'HND in Computing',
              detail: 'Pearson BTEC Level 5 (BCAS)',
            },
            {
              value: '7+ Systems',
              label: 'Production Web Apps',
              detail: 'FinOps Dashboard, University ERP, Hospitality & SaaS',
            },
            {
              value: '20+ Tools',
              label: 'Modern Tech Ecosystem',
              detail: 'Frontend, Backend, SQL & UI/UX',
            },
          ].map((stat, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl p-4 sm:p-5 hover:border-rose-500/40 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-xl sm:text-2xl font-display font-bold text-gradient">
                  {stat.value}
                </span>
                <RiSparkling2Fill className="text-rose-500/40 group-hover:text-rose-500 transition-colors" />
              </div>
              <p className="text-sm font-semibold text-gray-900 dark:text-white">
                {stat.label}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                {stat.detail}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
