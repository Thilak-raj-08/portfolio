'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  RiMailLine,
  RiPhoneLine,
  RiMapPin2Line,
  RiGithubFill,
  RiLinkedinBoxFill,
  RiSendPlaneFill,
  RiCheckLine,
  RiErrorWarningLine,
  RiFileCopyLine,
  RiSparklingFill,
  RiFlashlightFill,
} from 'react-icons/ri'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xzdoqkpn'

const contactInfo = [
  {
    id: 'email',
    icon: RiMailLine,
    label: 'Email Address',
    value: 'jeyarajanthilakraj@gmail.com',
    href: 'mailto:jeyarajanthilakraj@gmail.com',
    copyable: true,
  },
  {
    id: 'phone',
    icon: RiPhoneLine,
    label: 'Direct Phone / WhatsApp',
    value: '+94 70 185 6212',
    href: 'tel:+94701856212',
    copyable: true,
  },
  {
    id: 'location',
    icon: RiMapPin2Line,
    label: 'Location',
    value: 'Point Pedro, Jaffna, Sri Lanka',
    href: 'https://maps.google.com/?q=Point+Pedro+Jaffna',
    copyable: false,
  },
]

const quickTemplates = [
  {
    label: '🎓 Internship Opportunity',
    subject: 'Software Engineering Internship Opportunity',
    message:
      'Hi Thilakraj, we reviewed your portfolio and projects (Fresh-Market, Royal Food Corner, SwiftCabs) and would love to discuss a Software Engineering Internship opportunity with our team.',
  },
  {
    label: '💼 Junior Developer Role',
    subject: 'Full-Stack / Frontend Developer Role Inquiry',
    message:
      'Hi Thilakraj, we are looking for a Junior Full-Stack Developer skilled in Next.js, React, and Laravel. Let us schedule a quick introductory call!',
  },
  {
    label: '🚀 Project Collaboration',
    subject: 'Web Application Project Collaboration',
    message:
      'Hi Thilakraj, I have a web application project in mind and would love to collaborate with you on building it.',
  },
]

const socials = [
  {
    icon: RiGithubFill,
    label: 'GitHub',
    href: 'https://github.com/Thilak-raj-08',
    color: 'hover:bg-gray-900 dark:hover:bg-white dark:hover:text-gray-900',
  },
  {
    icon: RiLinkedinBoxFill,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/jeyarajan-thilakraj-46b510404',
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
  const [status, setStatus] = useState('idle')
  const [copiedId, setCopiedId] = useState(null)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const applyTemplate = (tpl) => {
    setFormData((prev) => ({
      ...prev,
      subject: tpl.subject,
      message: tpl.message,
    }))
  }

  const handleCopy = (e, id, text) => {
    e.preventDefault()
    e.stopPropagation()
    navigator.clipboard.writeText(text)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
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
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 5000)
      }
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
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
            <RiSparklingFill /> Let&apos;s Build Together
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-gray-900 dark:text-white mb-4">
            Start a <span className="text-gradient">Conversation</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
            Whether you&apos;re hiring for a Software Developer Internship, Junior Full-Stack Engineer role, or planning a web project — I respond within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Channels & Availability (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-5"
          >
            <div className="glass-card rounded-3xl p-6 sm:p-8 space-y-6">
              <div>
                <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-1">
                  Direct <span className="text-gradient">Channels</span>
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Click any channel to connect or copy details directly.
                </p>
              </div>

              <div className="space-y-3.5">
                {contactInfo.map((info) => {
                  const Icon = info.icon
                  const isCopied = copiedId === info.id
                  return (
                    <div
                      key={info.id}
                      className="group flex items-center justify-between gap-3 p-4 rounded-2xl bg-gray-50/90 dark:bg-gray-900/70 border border-gray-200/70 dark:border-white/5 hover:border-rose-500/40 transition-all duration-300"
                    >
                      <a
                        href={info.href}
                        target={info.id === 'location' ? '_blank' : undefined}
                        rel={info.id === 'location' ? 'noopener noreferrer' : undefined}
                        className="flex items-center gap-3.5 min-w-0 flex-1"
                      >
                        <div className="w-11 h-11 rounded-xl bg-rose-500/10 text-rose-500 flex items-center justify-center flex-shrink-0 group-hover:bg-rose-500 group-hover:text-white transition-colors">
                          <Icon className="text-xl" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-[11px] font-mono uppercase tracking-wider text-gray-500 dark:text-gray-400">
                            {info.label}
                          </p>
                          <p className="text-sm font-semibold text-gray-900 dark:text-white truncate">
                            {info.value}
                          </p>
                        </div>
                      </a>

                      {info.copyable && (
                        <button
                          onClick={(e) => handleCopy(e, info.id, info.value)}
                          className="px-2.5 py-1.5 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-xs font-mono text-gray-600 dark:text-gray-300 hover:text-rose-500 hover:border-rose-500/40 transition-all flex items-center gap-1 flex-shrink-0"
                          title="Copy to clipboard"
                        >
                          {isCopied ? (
                            <>
                              <RiCheckLine className="text-emerald-500" />
                              <span className="text-emerald-500">Copied</span>
                            </>
                          ) : (
                            <>
                              <RiFileCopyLine />
                              <span>Copy</span>
                            </>
                          )}
                        </button>
                      )}
                    </div>
                  )
                })}
              </div>

              {/* Social Profiles */}
              <div className="pt-2">
                <p className="text-xs font-mono uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">
                  Social Profiles
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
                        className={`w-11 h-11 flex items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 ${social.color} hover:text-white border border-gray-200/70 dark:border-white/5 transition-all duration-300 hover:-translate-y-1 shadow-sm`}
                      >
                        <Icon className="text-xl" />
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Availability Spotlight Card */}
            <div className="rounded-3xl p-6 bg-gradient-to-br from-rose-500 via-rose-600 to-pink-700 text-white shadow-xl shadow-rose-500/20">
              <div className="flex items-center gap-2.5 mb-2">
                <span className="w-3 h-3 rounded-full bg-emerald-300 animate-ping" />
                <span className="font-mono text-xs uppercase tracking-wider font-semibold">
                  Immediate Availability
                </span>
              </div>
              <h4 className="text-lg font-display font-bold mb-1">
                Open for Internships & Full-Time Roles
              </h4>
              <p className="text-sm text-white/90 leading-relaxed">
                Available for on-site roles in Sri Lanka, hybrid teams, or remote global internships.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Interactive Contact Form with Quick Templates (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="glass-card rounded-3xl p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
                <div>
                  <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white">
                    Send a <span className="text-gradient">Direct Message</span>
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Use a 1-click quick template below or write your own message.
                  </p>
                </div>
              </div>

              {/* 1-Click Recruiter Quick Fill Pills */}
              <div className="mb-6">
                <p className="text-xs font-mono uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2 flex items-center gap-1.5">
                  <RiFlashlightFill className="text-amber-500" /> Quick-Fill Templates:
                </p>
                <div className="flex flex-wrap gap-2">
                  {quickTemplates.map((tpl, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => applyTemplate(tpl)}
                      className="px-3 py-1.5 rounded-xl text-xs font-medium bg-rose-500/10 hover:bg-rose-500 text-rose-500 hover:text-white border border-rose-500/20 transition-all duration-200"
                    >
                      {tpl.label}
                    </button>
                  ))}
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-mono uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3 bg-gray-50/90 dark:bg-gray-900/90 border border-gray-200 dark:border-gray-700/80 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-mono uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Your Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="jane@company.com"
                      className="w-full px-4 py-3 bg-gray-50/90 dark:bg-gray-900/90 border border-gray-200 dark:border-gray-700/80 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-mono uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Subject <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Software Engineering Internship / Project Inquiry"
                    className="w-full px-4 py-3 bg-gray-50/90 dark:bg-gray-900/90 border border-gray-200 dark:border-gray-700/80 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all text-sm"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-mono uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Your Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Tell me about the role, team, or project..."
                    className="w-full px-4 py-3 bg-gray-50/90 dark:bg-gray-900/90 border border-gray-200 dark:border-gray-700/80 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all resize-none text-sm"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 disabled:opacity-60 text-white font-semibold rounded-xl transition-all duration-200 shadow-xl shadow-rose-500/30 hover:-translate-y-0.5 text-sm"
                >
                  {status === 'submitting' ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <RiSendPlaneFill className="text-lg" />
                      Send Message
                    </>
                  )}
                </button>

                {status === 'success' && (
                  <div className="flex items-start gap-3 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl">
                    <RiCheckLine className="text-emerald-500 text-xl flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-emerald-600 dark:text-emerald-400 text-sm">
                        Message delivered!
                      </p>
                      <p className="text-xs text-emerald-600/80 dark:text-emerald-400/80 mt-0.5">
                        Thank you for reaching out — I will reply shortly.
                      </p>
                    </div>
                  </div>
                )}

                {status === 'error' && (
                  <div className="flex items-start gap-3 p-4 bg-rose-500/10 border border-rose-500/30 rounded-xl">
                    <RiErrorWarningLine className="text-rose-500 text-xl flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-rose-600 dark:text-rose-400 text-sm">
                        Could not send via form right now.
                      </p>
                      <p className="text-xs text-rose-600/80 dark:text-rose-400/80 mt-0.5">
                        Please email me directly at jeyarajanthilakraj@gmail.com
                      </p>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
