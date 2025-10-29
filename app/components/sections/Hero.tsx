'use client'

import { useEffect, useRef } from 'react'
import { ChevronDown } from 'lucide-react'
import { SITE_INFO } from '@/app/lib/constants'
import Button from '@/app/components/ui/Button'

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Particle system
    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
    }> = []

    const particleCount = 50

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
      })
    }

    function animate() {
      if (!ctx || !canvas) return

      ctx.fillStyle = 'rgba(10, 10, 11, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw particles
      particles.forEach((particle, i) => {
        particle.x += particle.vx
        particle.y += particle.vy

        // Wrap around screen
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        // Draw particle
        ctx.fillStyle = 'rgba(139, 92, 246, 0.3)'
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()

        // Draw connections
        particles.slice(i + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            ctx.strokeStyle = `rgba(139, 92, 246, ${0.2 * (1 - distance / 150)})`
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.stroke()
          }
        })
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about')
    if (aboutSection) {
      const offset = 80
      const elementPosition = aboutSection.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ background: 'linear-gradient(135deg, #0A0A0B 0%, #141416 100%)' }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg-primary z-10"></div>

      <div className="container relative z-20 text-center px-6">
        <div className="opacity-0 translate-y-5 animate-[fadeInUp_0.8s_ease-out_0.2s_forwards]">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            The <span className="gradient-text">Community</span> Translator
          </h1>
        </div>

        <div className="opacity-0 translate-y-5 animate-[fadeInUp_0.8s_ease-out_0.4s_forwards]">
          <p className="text-xl md:text-2xl text-text-secondary max-w-4xl mx-auto mb-12 leading-relaxed">
            {SITE_INFO.tagline}
          </p>
        </div>

        <div className="opacity-0 translate-y-5 animate-[fadeInUp_0.8s_ease-out_0.6s_forwards]">
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto mb-12">
            20+ years in mortgages. Thousands of families helped achieve homeownership.
            Now partnering with technology to unlock capability for everyone.
          </p>
        </div>

        <div className="opacity-0 translate-y-5 animate-[fadeInUp_0.8s_ease-out_0.8s_forwards]">
          <Button
            size="lg"
            onClick={scrollToAbout}
            className="group"
          >
            Discover the Journey
            <ChevronDown className="inline-block ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </Button>
        </div>
      </div>

      <div className="opacity-0 animate-[fadeInUp_0.8s_ease-out_1s_forwards]">
        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce focus:outline-none focus:ring-2 focus:ring-purple-primary rounded-full p-2"
          aria-label="Scroll to next section"
        >
          <ChevronDown className="w-8 h-8 text-text-secondary" />
        </button>
      </div>
    </section>
  )
}
