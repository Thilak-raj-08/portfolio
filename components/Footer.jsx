'use client'

import {
  RiGithubFill,
  RiLinkedinBoxFill,
  RiMailFill,
  RiHeartFill,
  RiCodeSSlashLine,
} from 'react-icons/ri'

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
]

const services = [
  'Frontend Development',
  'Full-Stack Development',
  'Responsive Web Design',
  'Database Design',
  'UI/UX Implementation',
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
    <footer className="bg-gray-900 text-gray-300 relative overflow-hidden">
      {/* Decorative top border */}
      <div className="h-1 bg-gradient-to-r from-rose-500 via-rose-600 to-rose-500"></div>

      {/* Decorative background blur */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-rose-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#home" className="inline-block mb-4">
              <span className="text-white font-display font-bold text-2xl">
                Thilak<span className="text-rose-500">raj</span>
              </span>
            </a>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Software Engineering Graduate & Full-Stack Developer based in
              Jaffna, Sri Lanka. Building modern web applications with passion.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              {socials.map((social, index) => {
                const Icon = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-gray-400 hover:bg-rose-500 hover:text-white transition-all duration-300 hover:-translate-y-1"
                  >
                    <Icon className="text-lg" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-display font-bold mb-4 flex items-center gap-2">
              <span className="w-1 h-5 bg-rose-500 rounded-full"></span>
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-rose-500 transition-colors duration-200 inline-flex items-center gap-2 hover:translate-x-1 transform"
                  >
                    <span className="text-rose-500">→</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-display font-bold mb-4 flex items-center gap-2">
              <span className="w-1 h-5 bg-rose-500 rounded-full"></span>
              What I Do
            </h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li
                  key={index}
                  className="text-sm text-gray-400 inline-flex items-start gap-2"
                >
                  <RiCodeSSlashLine className="text-rose-500 flex-shrink-0 mt-0.5" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Get In Touch */}
          <div>
            <h3 className="text-white font-display font-bold mb-4 flex items-center gap-2">
              <span className="w-1 h-5 bg-rose-500 rounded-full"></span>
              Get In Touch
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">
                  Email
                </p>
                <a
                  href="mailto:jeyarajanthilakraj@gmail.com"
                  className="hover:text-rose-500 transition-colors break-all"
                >
                  jeyarajanthilakraj@gmail.com
                </a>
              </li>
              <li>
                <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">
                  Phone
                </p>
                <a
                  href="tel:+94701856212"
                  className="hover:text-rose-500 transition-colors"
                >
                  +94 70 185 6212
                </a>
              </li>
              <li>
                <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">
                  Location
                </p>
                <span>Point Pedro, Jaffna, Sri Lanka</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
            <p className="text-gray-400 text-center sm:text-left">
              © {currentYear} <span className="text-white font-medium">Jeyarajan Thilakraj</span>.
              All rights reserved.
            </p>
            <p className="text-gray-400 flex items-center gap-1.5">
              Made with <RiHeartFill className="text-rose-500 animate-pulse" /> using
              <span className="text-rose-500 font-medium">Next.js</span> &
              <span className="text-rose-500 font-medium">Tailwind CSS</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}