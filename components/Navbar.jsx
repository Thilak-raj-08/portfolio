'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import {
  RiSunLine,
  RiMoonLine,
  RiDownloadLine,
  RiMenuLine,
  RiCloseLine,
} from 'react-icons/ri'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')

  return (
    <header className="fixed w-full z-50 transition-all duration-300 nav-blur bg-white/80 dark:bg-gray-900/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#home" className="flex items-center">
              <span className="text-gray-900 dark:text-white font-display font-bold text-xl">
                Thilak<span className="text-rose-500">raj</span>
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-800 dark:text-gray-200 hover:text-rose-500 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {mounted && (
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="p-1 rounded-full text-gray-700 dark:text-gray-200 hover:text-rose-500 focus:outline-none transition-colors"
              >
                {theme === 'dark' ? <RiSunLine className="text-xl" /> : <RiMoonLine className="text-xl" />}
              </button>
            )}

            <a
              href="/CV.pdf"
              download="Jeyarajan_Thilakraj_CV.pdf"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-rose-600 hover:bg-rose-700 transition-colors duration-200"
            >
              <RiDownloadLine className="mr-2" /> Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              className="text-gray-700 dark:text-gray-200 hover:text-rose-500 focus:outline-none"
            >
              {mobileMenuOpen ? <RiCloseLine className="text-2xl" /> : <RiMenuLine className="text-2xl" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 py-2 animate-fadeIn">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 dark:text-white hover:text-rose-500 transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}

              <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <a
                  href="/CV.pdf"
                  download="Jeyarajan_Thilakraj_CV.pdf"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-rose-600 hover:bg-rose-700 transition-colors duration-200"
                >
                  <RiDownloadLine className="mr-2" /> Resume
                </a>

                {mounted && (
                  <button
                    onClick={toggleTheme}
                    aria-label="Toggle theme"
                    className="p-1 rounded-full text-gray-700 dark:text-gray-200 hover:text-rose-500 focus:outline-none"
                  >
                    {theme === 'dark' ? <RiSunLine className="text-xl" /> : <RiMoonLine className="text-xl" />}
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}