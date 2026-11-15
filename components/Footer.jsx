'use client'

import {
  RiGithubFill,
  RiLinkedinBoxFill,
  RiMailFill,
  RiHeartFill,
  RiCodeSSlashLine,
  RiCommandLine,
  RiDownloadLine,
} from 'react-icons/ri'

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
]

const services = [
  'Frontend Architecture (React / Next.js)',
  'Vue.js & Nuxt.js Applications',
  'Full-Stack Laravel & PHP Systems',
  'Relational Database Design (MySQL / PostgreSQL)',
  'Responsive UI/UX Engineering',
]

const socials = [
  {
    icon: RiGithubFill,
    label: 'GitHub',
    href: 'https://github.com/Thilak-raj-08',
  },
  {
    icon: RiLinkedinBoxFill,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/jeyarajan-thilakraj-46b510404',
  },
  {
    icon: RiMailFill,
    label: 'Email',
    href: 'mailto:jeyarajanthilakraj@gmail.com',
  },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-950 text-gray-300 relative overflow-hidden border-t border-white/10">
      {/* Top Shimmer Line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-rose-500 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#home" className="inline-flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-rose-500 to-rose-700 flex items-center justify-center text-white shadow-lg shadow-rose-500/30">
                <RiCodeSSlashLine className="text-lg" />
              </div>
              <span className="text-white font-display font-bold text-xl">
                Thilak<span className="text-rose-500">raj</span>.dev
              </span>
            </a>
            <p className="text-sm text-gray-400 leading-relaxed mb-5">
              BSc (Hons) Software Engineering Graduate & Full-Stack Developer based in Jaffna, Sri Lanka. Crafting high-performance web applications.
            </p>
            <div className="flex gap-2.5">
              {socials.map((social, index) => {
                const Icon = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-900 border border-white/10 text-gray-400 hover:bg-rose-500 hover:text-white hover:border-rose-500 transition-all duration-300 hover:-translate-y-1"
                  >
                    <Icon className="text-lg" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-display font-bold mb-4 text-sm uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-rose-400 transition-colors inline-flex items-center gap-2"
                  >
                    <span className="text-rose-500">→</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Engineering Capabilities */}
          <div>
            <h3 className="text-white font-display font-bold mb-4 text-sm uppercase tracking-wider">
              Capabilities
            </h3>
            <ul className="space-y-2.5">
              {services.map((service, index) => (
                <li
                  key={index}
                  className="text-sm text-gray-400 flex items-start gap-2"
                >
                  <RiCodeSSlashLine className="text-rose-500 flex-shrink-0 mt-1" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact & Resume */}
          <div>
            <h3 className="text-white font-display font-bold mb-4 text-sm uppercase tracking-wider">
              Quick Access
            </h3>
            <div className="space-y-3 text-sm text-gray-400 mb-5">
              <p className="break-all">
                <span className="block text-xs font-mono text-gray-500 uppercase">
                  Email
                </span>
                <a
                  href="mailto:jeyarajanthilakraj@gmail.com"
                  className="hover:text-rose-400 transition-colors"
                >
                  jeyarajanthilakraj@gmail.com
                </a>
              </p>
              <p>
                <span className="block text-xs font-mono text-gray-500 uppercase">
                  Phone
                </span>
                <a
                  href="tel:+94701856212"
                  className="hover:text-rose-400 transition-colors"
                >
                  +94 70 185 6212
                </a>
              </p>
            </div>

            <a
              href="/CV.pdf"
              download="Jeyarajan_Thilakraj_CV.pdf"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-rose-500/15 hover:bg-rose-500 text-rose-400 hover:text-white border border-rose-500/30 text-xs font-semibold transition-all"
            >
              <RiDownloadLine /> Download Resume (PDF)
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>
            © {currentYear}{' '}
            <span className="text-white font-semibold">Jeyarajan Thilakraj</span>.
            All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <button
              onClick={() =>
                window.dispatchEvent(new CustomEvent('open-command-palette'))
              }
              className="inline-flex items-center gap-1.5 text-gray-400 hover:text-rose-400 font-mono transition-colors"
            >
              <RiCommandLine className="text-rose-500" /> Press ⌘K / Ctrl+K
            </button>
            <span className="hidden sm:inline text-gray-700">|</span>
            <p className="flex items-center gap-1">
              Engineered with <RiHeartFill className="text-rose-500" /> in{' '}
              <span className="text-white font-medium">Next.js 16 & Framer Motion</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
