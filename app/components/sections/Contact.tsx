'use client'

import ScrollReveal from '@/app/components/animations/ScrollReveal'
import { Mail, Phone, MapPin, Facebook, Instagram } from 'lucide-react'
import { SITE_INFO, SOCIAL_LINKS } from '@/app/lib/constants'

export default function Contact() {
  const contactMethods = [
    {
      icon: Phone,
      label: 'Phone',
      value: SITE_INFO.phone,
      href: SOCIAL_LINKS.phone,
      color: 'text-purple-primary',
    },
    {
      icon: Mail,
      label: 'Email',
      value: SITE_INFO.email,
      href: SOCIAL_LINKS.email,
      color: 'text-violet-primary',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: SITE_INFO.location,
      href: null,
      color: 'text-pink-primary',
    },
  ]

  const socialLinks = [
    { icon: Facebook, href: SOCIAL_LINKS.facebook, label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/whoisjoshg', label: 'Instagram' },
  ]

  return (
    <section id="contact" className="section bg-bg-primary">
      <div className="container">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let&apos;s <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Whether you&apos;re looking to achieve homeownership or explore how technology can
              amplify your business, I&apos;m here to help translate complexity into opportunity.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contactMethods.map((method, index) => {
            const Icon = method.icon
            return (
              <ScrollReveal key={method.label} delay={0.2 + index * 0.1}>
                <div className="glass rounded-xl p-8 text-center hover:scale-105 transition-transform">
                  <Icon className={`${method.color} w-12 h-12 mx-auto mb-4`} />
                  <h3 className="text-xl font-bold mb-2">{method.label}</h3>
                  {method.href ? (
                    <a
                      href={method.href}
                      className="text-text-secondary hover:text-purple-primary transition-colors"
                    >
                      {method.value}
                    </a>
                  ) : (
                    <p className="text-text-secondary">{method.value}</p>
                  )}
                </div>
              </ScrollReveal>
            )
          })}
        </div>

        <ScrollReveal delay={0.4}>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-purple-primary/10 to-violet-primary/10 rounded-xl p-8 border border-purple-primary/20">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4">For Homebuyers</h3>
                  <p className="text-text-secondary mb-4">
                    Ready to turn rent into equity and build generational wealth? Let&apos;s talk about
                    your homeownership journey.
                  </p>
                  <p className="text-sm text-text-tertiary mb-4">
                    NMLS# {SITE_INFO.nmls}<br />
                    {SITE_INFO.company}<br />
                    NMLS# {SITE_INFO.companyNMLS}
                  </p>
                  <a
                    href={SOCIAL_LINKS.phone}
                    className="inline-block px-6 py-3 bg-purple-primary hover:bg-purple-hover text-white rounded-lg transition-colors"
                  >
                    Schedule a Call
                  </a>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4">For Business Owners</h3>
                  <p className="text-text-secondary mb-6">
                    Curious about how ClearForge AI can unlock enterprise capabilities for your
                    business? Let&apos;s explore what&apos;s possible.
                  </p>
                  <a
                    href={SOCIAL_LINKS.email}
                    className="inline-block px-6 py-3 bg-violet-primary hover:bg-violet-hover text-white rounded-lg transition-colors"
                  >
                    Get in Touch
                  </a>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.6}>
          <div className="mt-12 text-center">
            <div className="flex justify-center space-x-6 mb-8">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass hover:bg-white/10 p-4 rounded-lg transition-all hover:scale-110"
                    aria-label={social.label}
                  >
                    <Icon className="w-6 h-6 text-purple-primary" />
                  </a>
                )
              })}
            </div>

            <div className="glass rounded-lg p-6 max-w-2xl mx-auto">
              <p className="text-text-secondary text-sm">
                &quot;Everyone has all the same products and services, but there is only one of you.
                Define who you are, develop who you are, control who you are, and watch the growth
                and positive impact you have on others.&quot;
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
