'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import {
  RiGithubFill,
  RiLinkedinBoxFill,
  RiMailFill,
  RiDownloadLine,
  RiArrowDownLine,
} from 'react-icons/ri'

// Roles cycle ku - typewriter effect la maathi maathi varum
const roles = [
  'Full-Stack Developer',
  'Software Engineer',
  'Frontend Developer',
  'Problem Solver',
]

export default function Hero() {
  const [text, setText] = useState('')
  const [roleIndex, setRoleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  // Typewriter effect
  useEffect(() => {
    const currentRole = roles[roleIndex]
    const typingSpeed = isDeleting ? 50 : 100
    const pauseTime = isDeleting ? 500 : 1500

    const timeout = setTimeout(() => {
      if (!isDeleting && text === currentRole) {
        // Full role typed - pause then start deleting
        setTimeout(() => setIsDeleting(true), pauseTime)
      } else if (isDeleting && text === '') {
        // Fully deleted - move to next role
        setIsDeleting(false)
        setRoleIndex((prev) => (prev + 1) % roles.length)
      } else {
        // Type or delete one character
        setText((prev) =>
          isDeleting
            ? currentRole.substring(0, prev.length - 1)
            : currentRole.substring(0, prev.length + 1)
        )
      }
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [text, isDeleting, roleIndex])

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 pb-12 relative overflow-hidden"
    >
      {/* Background decorative blur */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-rose-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-rose-500/10 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="order-2 lg:order-1 animate-fadeIn">
            <p className="text-rose-500 font-medium mb-3 text-lg">
              👋 Hello, I'm
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-gray-900 dark:text-white mb-4">
              Jeyarajan <span className="text-gradient">Thilakraj</span>
            </h1>

            {/* Typewriter role */}
            <div className="text-2xl sm:text-3xl font-display font-semibold text-gray-700 dark:text-gray-300 mb-6 h-10">
              <span>I'm a </span>
              <span className="text-rose-500">{text}</span>
              <span className="cursor"></span>
            </div>

            <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg mb-8 max-w-xl leading-relaxed">
              Motivated Software Engineering graduate from Jaffna, Sri Lanka.
              I build modern web applications with React, Next.js, and Laravel.
              Currently seeking internship opportunities to apply my skills and
              contribute to real-world projects.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-sm font-medium rounded-md text-white bg-rose-600 hover:bg-rose-700 transition-all duration-200 shadow-lg shadow-rose-500/30 hover:shadow-rose-500/50 hover:-translate-y-0.5"
              >
                Hire Me
              </a>
              <a
                href="/CV.pdf"
                download="Jeyarajan_Thilakraj_CV.pdf"
                className="inline-flex items-center px-6 py-3 border-2 border-rose-500 text-sm font-medium rounded-md text-rose-500 hover:bg-rose-500 hover:text-white transition-all duration-200 hover:-translate-y-0.5"
              >
                <RiDownloadLine className="mr-2 text-lg" /> Download CV
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-gray-500 dark:text-gray-400 text-sm">
                Find me on:
              </span>
              <div className="flex gap-3">
                <a
                  href="https://github.com/Thilak-raj-08"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-rose-500 hover:text-white transition-all duration-200 hover:-translate-y-1"
                >
                  <RiGithubFill className="text-xl" />
                </a>
                <a
                  href="www.linkedin.com/in/jeyarajan-thilakraj-46b510404"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-rose-500 hover:text-white transition-all duration-200 hover:-translate-y-1"
                >
                  <RiLinkedinBoxFill className="text-xl" />
                </a>
                <a
                  href="mailto:jeyarajanthilakraj@gmail.com"
                  aria-label="Email"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-rose-500 hover:text-white transition-all duration-200 hover:-translate-y-1"
                >
                  <RiMailFill className="text-xl" />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fadeIn">
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-rose-500 to-rose-700 blur-2xl opacity-30 scale-110"></div>

              {/* Profile photo container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 animate-float">
                {/* Rose gradient border */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-rose-500 to-rose-700 p-1.5">
                  <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 p-2">
                    <div className="relative w-full h-full rounded-full overflow-hidden">
                      <Image
                        src="/profile.png"
                        alt="Jeyarajan Thilakraj"
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-xl flex items-center gap-2 border border-gray-200 dark:border-gray-700">
                <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  Open to work
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="hidden lg:flex justify-center mt-16">
          <a
            href="#projects"
            aria-label="Scroll to projects"
            className="flex flex-col items-center text-gray-500 dark:text-gray-400 hover:text-rose-500 transition-colors animate-float"
          >
            <span className="text-xs uppercase tracking-widest mb-2">
              Scroll Down
            </span>
            <RiArrowDownLine className="text-2xl" />
          </a>
        </div>
      </div>
    </section>
  )
}