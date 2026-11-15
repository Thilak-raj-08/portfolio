'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { motion, AnimatePresence } from 'framer-motion'
import {
  RiSunLine,
  RiMoonLine,
  RiDownloadLine,
  RiMenu4Line,
  RiCloseLine,
  RiCommandLine,
  RiCodeSSlashLine,
} from 'react-icons/ri'
import CommandPalette from './CommandPalette'

const navLinks = [
  { name: 'Home', href: '#home', id: 'home' },
  { name: 'Projects', href: '#projects', id: 'projects' },
  { name: 'Skills', href: '#skills', id: 'skills' },
  { name: 'About', href: '#about', id: 'about' },
  { name: 'Contact', href: '#contact', id: 'contact' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [commandOpen, setCommandOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      setScrolled(window.scrollY > 24)
    }

    const handleOpenCommand = () => setCommandOpen(true)

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('open-command-palette', handleOpenCommand)

    // Scroll-spy for active section
    const sections = navLinks.map((l) => document.getElementById(l.id)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-35% 0px -55% 0px' }
    )

    sections.forEach((sec) => observer.observe(sec))

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('open-command-palette', handleOpenCommand)
      observer.disconnect()
    }
  }, [])

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`flex justify-between items-center rounded-2xl px-4 sm:px-6 h-16 transition-all duration-500 nav-blur ${
              scrolled
                ? 'bg-white/95 dark:bg-gray-900/90 shadow-xl shadow-black/5 dark:shadow-black/40 border border-gray-200 dark:border-white/10'
                : 'bg-white/90 dark:bg-gray-900/75 shadow-md shadow-black/5 border border-gray-200/80 dark:border-white/10'
            }`}
          >
            {/* Brand Logo */}
            <a
              href="#home"
              className="group flex items-center gap-2.5 focus:outline-none"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-rose-500 to-rose-700 flex items-center justify-center text-white shadow-lg shadow-rose-500/30 group-hover:scale-105 group-hover:rotate-3 transition-transform duration-300">
                <RiCodeSSlashLine className="text-lg" />
              </div>
              <div className="flex flex-col">
                <span className="text-gray-900 dark:text-white font-display font-bold text-lg tracking-tight leading-none">
                  Thilak<span className="text-gradient">raj</span>
                  <span className="text-rose-500">.dev</span>
                </span>
                <span className="text-[10px] font-mono text-gray-500 dark:text-gray-400 tracking-wider uppercase mt-0.5">
                  Software Engineer
                </span>
              </div>
            </a>

            {/* Desktop Floating Pill Navigation */}
            <nav className="hidden md:flex items-center gap-1 p-1.5 rounded-full bg-gray-100 dark:bg-gray-800/90 border border-gray-200/80 dark:border-white/10">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setActiveSection(link.id)}
                    className={`relative px-4 py-1.5 text-sm font-semibold rounded-full transition-colors duration-300 ${
                      isActive
                        ? 'text-white'
                        : 'text-gray-700 dark:text-gray-300 hover:text-rose-600 dark:hover:text-rose-400'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeNavPill"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-rose-500 to-rose-600 shadow-md shadow-rose-500/30 z-0"
                      />
                    )}
                    <span className="relative z-10">{link.name}</span>
                  </a>
                )
              })}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-2.5">
              {/* Command Palette Trigger */}
              <button
                onClick={() => setCommandOpen(true)}
                aria-label="Open Command Palette"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-medium text-gray-600 dark:text-gray-300 bg-gray-100/90 dark:bg-gray-800/80 hover:border-rose-500/40 border border-gray-200/80 dark:border-gray-700/80 transition-all hover:text-rose-500"
              >
                <RiCommandLine className="text-sm text-rose-500" />
                <span>Quick Action</span>
                <kbd className="px-1.5 py-0.5 text-[10px] font-mono bg-white dark:bg-gray-900 rounded border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400">
                  ⌘K
                </kbd>
              </button>

              {/* Theme Toggle */}
              {mounted && (
                <button
                  onClick={toggleTheme}
                  aria-label="Toggle theme"
                  className="w-9 h-9 rounded-xl flex items-center justify-center bg-gray-100/90 dark:bg-gray-800/80 text-gray-700 dark:text-gray-200 hover:text-rose-500 border border-gray-200/80 dark:border-gray-700/80 hover:border-rose-500/40 transition-all"
                >
                  {theme === 'dark' ? (
                    <RiSunLine className="text-lg text-amber-400" />
                  ) : (
                    <RiMoonLine className="text-lg" />
                  )}
                </button>
              )}

              {/* Resume Download CTA */}
              <a
                href="/CV.pdf"
                download="Jeyarajan_Thilakraj_CV.pdf"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-xl text-white bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 shadow-lg shadow-rose-500/25 hover:shadow-rose-500/40 hover:-translate-y-0.5 transition-all duration-200"
              >
                <RiDownloadLine className="text-base" />
                <span>Resume</span>
              </a>
            </div>

            {/* Mobile Controls */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={() => setCommandOpen(true)}
                aria-label="Open Command Palette"
                className="w-9 h-9 rounded-xl flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-rose-500 border border-gray-200 dark:border-gray-700"
              >
                <RiCommandLine className="text-lg" />
              </button>

              {mounted && (
                <button
                  onClick={toggleTheme}
                  aria-label="Toggle theme"
                  className="w-9 h-9 rounded-xl flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-700"
                >
                  {theme === 'dark' ? (
                    <RiSunLine className="text-lg text-amber-400" />
                  ) : (
                    <RiMoonLine className="text-lg" />
                  )}
                </button>
              )}

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
                className="w-9 h-9 rounded-xl flex items-center justify-center bg-rose-500/10 text-rose-500 border border-rose-500/20"
              >
                {mobileMenuOpen ? (
                  <RiCloseLine className="text-xl" />
                ) : (
                  <RiMenu4Line className="text-xl" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Drawer */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -12, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -12, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="md:hidden mt-2 rounded-2xl nav-blur bg-white/95 dark:bg-gray-900/95 border border-gray-200 dark:border-white/10 shadow-2xl p-4"
              >
                <div className="flex flex-col space-y-1">
                  {navLinks.map((link) => {
                    const isActive = activeSection === link.id
                    return (
                      <a
                        key={link.name}
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                          isActive
                            ? 'bg-rose-500 text-white shadow-md shadow-rose-500/25'
                            : 'text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800'
                        }`}
                      >
                        {link.name}
                      </a>
                    )
                  })}
                </div>

                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between gap-3">
                  <a
                    href="/CV.pdf"
                    download="Jeyarajan_Thilakraj_CV.pdf"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium rounded-xl text-white bg-gradient-to-r from-rose-500 to-rose-600 shadow-lg shadow-rose-500/25"
                  >
                    <RiDownloadLine className="text-lg" /> Download Official CV
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      <CommandPalette isOpen={commandOpen} onClose={() => setCommandOpen(false)} />
    </>
  )
}
