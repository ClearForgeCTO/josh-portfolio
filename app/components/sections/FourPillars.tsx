'use client'

import ScrollReveal from '@/app/components/animations/ScrollReveal'
import Card from '@/app/components/ui/Card'
import { DollarSign, MessageCircle, BookOpen, Smartphone } from 'lucide-react'
import { FOUR_PILLARS } from '@/app/lib/constants'

export default function FourPillars() {
  const icons = {
    'wealth': DollarSign,
    'communication': MessageCircle,
    'knowledge': BookOpen,
    'technology': Smartphone,
  }

  return (
    <section id="pillars" className="section bg-bg-primary">
      <div className="container">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The <span className="gradient-text">Four Pillars</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              The foundation Josh built his practice on—principles that would later become
              the blueprint for our partnership
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {FOUR_PILLARS.map((pillar, index) => {
            const Icon = icons[pillar.id as keyof typeof icons]
            return (
              <ScrollReveal key={pillar.id} delay={0.2 + index * 0.1}>
                <Card className="h-full">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="glass rounded-lg p-4">
                      <Icon className={`w-8 h-8 text-${pillar.color}`} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-text-primary mb-2">
                        {pillar.name}
                      </h3>
                      <p className="text-purple-light italic">
                        {pillar.description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {pillar.principles.map((principle, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-primary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-text-secondary">{principle}</p>
                      </div>
                    ))}
                  </div>
                </Card>
              </ScrollReveal>
            )
          })}
        </div>

        <ScrollReveal delay={0.6}>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-purple-primary/10 to-violet-primary/10 rounded-xl p-8 border border-purple-primary/20 text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                That Last Pillar Set Josh Apart
              </h3>
              <p className="text-lg text-text-secondary leading-relaxed mb-4">
                While most loan officers saw technology as a necessary evil or a way to cut costs,
                Josh saw it as a way to amplify his ability to serve people.
              </p>
              <p className="text-xl text-text-primary font-medium">
                He didn&apos;t have a traditional tech background, but he had something more valuable:
                the technical aptitude to understand complex systems and the rare gift of
                translating them into language anyone could understand.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.8}>
          <div className="mt-12 text-center">
            <div className="glass rounded-xl p-8 max-w-3xl mx-auto">
              <p className="text-2xl text-text-primary font-bold mb-4">
                &quot;Everyone has all the same products and services, but there is only one of you.&quot;
              </p>
              <p className="text-lg text-text-secondary">
                Define who you are, develop who you are, control who you are, and watch the
                growth and positive impact you have on others.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
