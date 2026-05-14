'use client'

import { useState } from 'react'
import {
  RiMailLine,
  RiPhoneLine,
  RiMapPin2Line,
  RiGithubFill,
  RiLinkedinBoxFill,
  RiSendPlaneFill,
  RiCheckLine,
  RiErrorWarningLine,
} from 'react-icons/ri'

// ⚠️ IMPORTANT: Formspree create panni unga endpoint URL idhula podunga
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xzdoqkpn'

// Contact info cards data
const contactInfo = [
  {
    icon: RiMailLine,
    label: 'Email',
    value: 'jeyarajanthilakraj@gmail.com',
    href: 'mailto:jeyarajanthilakraj@gmail.com',
  },
  {
    icon: RiPhoneLine,
    label: 'Phone',
    value: '+94 70 185 6212',
    href: 'tel:+94701856212',
  },
  {
    icon: RiMapPin2Line,
    label: 'Location',
    value: 'Point Pedro, Jaffna, Sri Lanka',
    href: 'https://maps.google.com/?q=Point+Pedro+Jaffna',
  },
]

// Social media links
const socials = [
  {
    icon: RiGithubFill,
    label: 'GitHub',
    href: 'https://github.com/',
    color: 'hover:bg-gray-900',
  },
  {
    icon: RiLinkedinBoxFill,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/',
    color: 'hover:bg-blue-600',
  },
  {
    icon: RiMailLine,
    label: 'Email',
    href: 'mailto:jeyarajanthilakraj@gmail.com',
    color: 'hover:bg-rose-500',
  },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  // status: 'idle' | 'submitting' | 'success' | 'error'
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
        // Reset to idle after 5 seconds
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 5000)
      }
    } catch (error) {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-rose-500/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-rose-500/5 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-rose-500 font-medium mb-2 text-sm uppercase tracking-widest">
            Get In Touch
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gray-900 dark:text-white mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <div className="w-20 h-1 bg-rose-500 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or just want to say hi? Drop me a message — I'd love to hear from you!
          </p>
        </div>

        {/* Main Grid: Info (Left) + Form (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left: Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-2">
                Contact <span className="text-rose-500">Information</span>
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">
                Feel free to reach out through any of these channels.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <a
                    key={index}
                    href={info.href}
                    target={info.label === 'Location' ? '_blank' : undefined}
                    rel={info.label === 'Location' ? 'noopener noreferrer' : undefined}
                    className="group flex items-start gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-rose-500/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-rose-50 dark:bg-rose-500/10 flex items-center justify-center group-hover:bg-rose-500 transition-colors duration-300">
                      <Icon className="text-rose-500 text-xl group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-gray-500 dark:text-gray-400 mb-1 uppercase tracking-wide">
                        {info.label}
                      </p>
                      <p className="text-sm font-medium text-gray-900 dark:text-white break-words">
                        {info.value}
                      </p>
                    </div>
                  </a>
                )
              })}
            </div>

            {/* Social Links */}
            <div className="pt-4">
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                Follow me on:
              </p>
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
                      className={`w-12 h-12 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 ${social.color} hover:text-white border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
                    >
                      <Icon className="text-xl" />
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Availability badge */}
            <div className="bg-gradient-to-br from-rose-500 to-rose-700 rounded-xl p-5 text-white">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></span>
                <span className="font-semibold text-sm">Currently Available</span>
              </div>
              <p className="text-sm text-white/90 leading-relaxed">
                Open to internship and full-time opportunities. Let's build something great together!
              </p>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-2">
                Send a <span className="text-rose-500">Message</span>
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                Fill out the form and I'll get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name + Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Your Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Job opportunity / Project inquiry / etc."
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Tell me about your project or just say hi!"
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 bg-rose-600 hover:bg-rose-700 disabled:bg-rose-400 disabled:cursor-not-allowed text-white font-medium rounded-lg transition-all duration-200 shadow-lg shadow-rose-500/30 hover:-translate-y-0.5"
                >
                  {status === 'submitting' ? (
                    <>
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                      Sending...
                    </>
                  ) : (
                    <>
                      <RiSendPlaneFill className="text-lg" />
                      Send Message
                    </>
                  )}
                </button>

                {/* Success Message */}
                {status === 'success' && (
                  <div className="flex items-start gap-3 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-lg animate-fadeIn">
                    <RiCheckLine className="text-green-500 text-xl flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-green-800 dark:text-green-300">
                        Message sent successfully!
                      </p>
                      <p className="text-sm text-green-700 dark:text-green-400 mt-1">
                        Thanks for reaching out. I'll get back to you soon!
                      </p>
                    </div>
                  </div>
                )}

                {/* Error Message */}
                {status === 'error' && (
                  <div className="flex items-start gap-3 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 rounded-lg animate-fadeIn">
                    <RiErrorWarningLine className="text-red-500 text-xl flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-red-800 dark:text-red-300">
                        Something went wrong.
                      </p>
                      <p className="text-sm text-red-700 dark:text-red-400 mt-1">
                        Please try again or email me directly at jeyarajanthilakraj@gmail.com
                      </p>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}