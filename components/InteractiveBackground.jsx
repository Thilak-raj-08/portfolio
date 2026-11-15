'use client'

import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

export default function InteractiveBackground() {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 })
  const [mounted, setMounted] = useState(false)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  })

  useEffect(() => {
    setMounted(true)
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <>
      {/* Top Scroll Progress Bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-500 via-fuchsia-500 to-amber-500 origin-left z-[100] shadow-[0_0_12px_rgba(244,63,94,0.8)]"
      />

      {/* Ambient Grid & Cursor Spotlight */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {/* Subtle Architectural Grid */}
        <div className="absolute inset-0 bg-grid-pattern opacity-60 dark:opacity-100 [mask-image:radial-gradient(ellipse_80%_70%_at_50%_30%,#000_55%,transparent_100%)]" />

        {/* Dynamic Cursor Spotlight */}
        {mounted && (
          <div
            className="hidden lg:block absolute w-[650px] h-[650px] rounded-full transition-transform duration-75 ease-out"
            style={{
              transform: `translate(${mousePos.x - 325}px, ${mousePos.y - 325}px)`,
              background:
                'radial-gradient(circle, rgba(244, 63, 94, 0.09) 0%, rgba(168, 85, 247, 0.04) 40%, transparent 70%)',
            }}
          />
        )}

        {/* Ambient Aurora Blobs */}
        <div className="absolute -top-36 -left-36 w-96 h-96 bg-rose-500/10 dark:bg-rose-500/15 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute top-1/3 -right-36 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/12 rounded-full blur-[130px] animate-pulse-glow" />
        <div className="absolute -bottom-36 left-1/3 w-96 h-96 bg-rose-600/10 dark:bg-rose-600/12 rounded-full blur-[130px] animate-pulse-glow" />
      </div>
    </>
  )
}
