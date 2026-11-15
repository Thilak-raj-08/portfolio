'use client'

import { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from 'next-themes'
import {
  RiSearchLine,
  RiHome4Line,
  RiFolderLine,
  RiCodeSSlashLine,
  RiUser3Line,
  RiMailSendLine,
  RiDownload2Line,
  RiSunLine,
  RiMoonLine,
  RiGithubFill,
  RiLinkedinBoxFill,
  RiFileCopyLine,
  RiCheckLine,
  RiExternalLinkLine,
  RiCommandLine,
} from 'react-icons/ri'

export default function CommandPalette({ isOpen, onClose }) {
  const [query, setQuery] = useState('')
  const [copied, setCopied] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const { theme, setTheme } = useTheme()

  // Global keyboard shortcut: Ctrl+K or Cmd+K
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        if (isOpen) {
          onClose()
        } else {
          window.dispatchEvent(new CustomEvent('open-command-palette'))
        }
      } else if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  const actions = useMemo(
    () => [
      {
        id: 'nav-home',
        category: 'Navigation',
        title: 'Go to Home & Hero',
        subtitle: 'Introduction, 3D profile card & interactive terminal',
        icon: RiHome4Line,
        shortcut: 'G H',
        perform: () => {
          document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' })
          onClose()
        },
      },
      {
        id: 'nav-projects',
        category: 'Navigation',
        title: 'Explore Featured Projects',
        subtitle: 'Fresh-Market, Royal Food Corner & SwiftCabs case studies',
        icon: RiFolderLine,
        shortcut: 'G P',
        perform: () => {
          document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
          onClose()
        },
      },
      {
        id: 'nav-skills',
        category: 'Navigation',
        title: 'Inspect Technical Skills',
        subtitle: 'Frontend, Backend, Databases & UI/UX Engineering tools',
        icon: RiCodeSSlashLine,
        shortcut: 'G S',
        perform: () => {
          document.querySelector('#skills')?.scrollIntoView({ behavior: 'smooth' })
          onClose()
        },
      },
      {
        id: 'nav-about',
        category: 'Navigation',
        title: 'Read About & Education',
        subtitle: 'BSc (Hons) Software Engineering & HND in Computing',
        icon: RiUser3Line,
        shortcut: 'G A',
        perform: () => {
          document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
          onClose()
        },
      },
      {
        id: 'nav-contact',
        category: 'Navigation',
        title: 'Send a Direct Message',
        subtitle: 'Hire me or collaborate on a project',
        icon: RiMailSendLine,
        shortcut: 'G C',
        perform: () => {
          document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
          onClose()
        },
      },
      {
        id: 'act-cv',
        category: 'Quick Actions',
        title: 'Download Official Resume (CV.pdf)',
        subtitle: 'Jeyarajan Thilakraj — Software Engineering Graduate',
        icon: RiDownload2Line,
        shortcut: 'CV',
        perform: () => {
          const link = document.createElement('a')
          link.href = '/CV.pdf'
          link.download = 'Jeyarajan_Thilakraj_CV.pdf'
          link.click()
          onClose()
        },
      },
      {
        id: 'act-copy-email',
        category: 'Quick Actions',
        title: copied ? 'Email Copied to Clipboard!' : 'Copy Email Address',
        subtitle: 'jeyarajanthilakraj@gmail.com',
        icon: copied ? RiCheckLine : RiFileCopyLine,
        shortcut: '⌘ C',
        perform: () => {
          navigator.clipboard.writeText('jeyarajanthilakraj@gmail.com')
          setCopied(true)
          setTimeout(() => {
            setCopied(false)
            onClose()
          }, 900)
        },
      },
      {
        id: 'act-theme',
        category: 'Quick Actions',
        title: `Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`,
        subtitle: 'Toggle portfolio visual appearance',
        icon: theme === 'dark' ? RiSunLine : RiMoonLine,
        shortcut: 'T',
        perform: () => {
          setTheme(theme === 'dark' ? 'light' : 'dark')
          onClose()
        },
      },
      {
        id: 'ext-github',
        category: 'External Links',
        title: 'Open GitHub Profile',
        subtitle: 'github.com/Thilak-raj-08',
        icon: RiGithubFill,
        shortcut: '↗',
        perform: () => {
          window.open('https://github.com/Thilak-raj-08', '_blank', 'noopener,noreferrer')
          onClose()
        },
      },
      {
        id: 'ext-linkedin',
        category: 'External Links',
        title: 'Connect on LinkedIn',
        subtitle: 'linkedin.com/in/jeyarajan-thilakraj-46b510404',
        icon: RiLinkedinBoxFill,
        shortcut: '↗',
        perform: () => {
          window.open(
            'https://www.linkedin.com/in/jeyarajan-thilakraj-46b510404',
            '_blank',
            'noopener,noreferrer'
          )
          onClose()
        },
      },
    ],
    [copied, onClose, setTheme, theme]
  )

  const filteredActions = useMemo(() => {
    if (!query.trim()) return actions
    const q = query.toLowerCase()
    return actions.filter(
      (a) =>
        a.title.toLowerCase().includes(q) ||
        a.subtitle.toLowerCase().includes(q) ||
        a.category.toLowerCase().includes(q)
    )
  }, [actions, query])

  useEffect(() => {
    setSelectedIndex(0)
  }, [query, isOpen])

  useEffect(() => {
    if (!isOpen) return
    const handleArrowKeys = (e) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault()
        setSelectedIndex((prev) =>
          filteredActions.length ? (prev + 1) % filteredActions.length : 0
        )
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        setSelectedIndex((prev) =>
          filteredActions.length
            ? (prev - 1 + filteredActions.length) % filteredActions.length
            : 0
        )
      } else if (e.key === 'Enter' && filteredActions[selectedIndex]) {
        e.preventDefault()
        filteredActions[selectedIndex].perform()
      }
    }
    window.addEventListener('keydown', handleArrowKeys)
    return () => window.removeEventListener('keydown', handleArrowKeys)
  }, [isOpen, filteredActions, selectedIndex])

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[90] flex items-start justify-center pt-20 sm:pt-28 px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-gray-950/70 backdrop-blur-md"
          />

          {/* Command Palette Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="relative w-full max-w-xl rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-white/10 shadow-2xl overflow-hidden z-10"
          >
            {/* Top Search Bar */}
            <div className="flex items-center px-4 py-3.5 border-b border-gray-200 dark:border-gray-800">
              <RiSearchLine className="text-rose-500 text-xl mr-3 flex-shrink-0" />
              <input
                type="text"
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type a command or search sections (e.g., Projects, CV, Email)..."
                className="w-full bg-transparent text-gray-900 dark:text-white placeholder-gray-400 text-sm focus:outline-none"
              />
              <button
                onClick={onClose}
                className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 font-mono"
              >
                ESC
              </button>
            </div>

            {/* Action List */}
            <div className="max-h-80 overflow-y-auto p-2 space-y-1">
              {filteredActions.length === 0 ? (
                <div className="py-10 text-center text-sm text-gray-500 dark:text-gray-400">
                  No matching commands found for &ldquo;{query}&rdquo;
                </div>
              ) : (
                filteredActions.map((item, idx) => {
                  const Icon = item.icon
                  const isSelected = idx === selectedIndex
                  return (
                    <button
                      key={item.id}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      onClick={item.perform}
                      className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left transition-all ${
                        isSelected
                          ? 'bg-rose-500 text-white shadow-lg shadow-rose-500/25'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800/60'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div
                          className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${
                            isSelected
                              ? 'bg-white/20 text-white'
                              : 'bg-rose-500/10 text-rose-500'
                          }`}
                        >
                          <Icon className="text-lg" />
                        </div>
                        <div className="truncate">
                          <p
                            className={`text-sm font-medium truncate ${
                              isSelected ? 'text-white' : 'text-gray-900 dark:text-white'
                            }`}
                          >
                            {item.title}
                          </p>
                          <p
                            className={`text-xs truncate ${
                              isSelected
                                ? 'text-rose-100'
                                : 'text-gray-500 dark:text-gray-400'
                            }`}
                          >
                            {item.subtitle}
                          </p>
                        </div>
                      </div>

                      <span
                        className={`ml-3 text-[11px] font-mono px-2 py-0.5 rounded ${
                          isSelected
                            ? 'bg-white/20 text-white'
                            : 'bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400'
                        }`}
                      >
                        {item.shortcut}
                      </span>
                    </button>
                  )
                })
              )}
            </div>

            {/* Footer */}
            <div className="px-4 py-2.5 bg-gray-50 dark:bg-gray-950/70 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between text-[11px] text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-3">
                <span>
                  <kbd className="px-1.5 py-0.5 rounded bg-gray-200 dark:bg-gray-800 font-mono">
                    ↑↓
                  </kbd>{' '}
                  Navigate
                </span>
                <span>
                  <kbd className="px-1.5 py-0.5 rounded bg-gray-200 dark:bg-gray-800 font-mono">
                    ↵
                  </kbd>{' '}
                  Execute
                </span>
              </div>
              <span className="flex items-center gap-1 text-rose-500 font-medium">
                <RiCommandLine /> Thilakraj OS v2.6
              </span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
