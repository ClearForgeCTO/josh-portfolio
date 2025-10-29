'use client'

import ScrollReveal from '@/app/components/animations/ScrollReveal'
import Card from '@/app/components/ui/Card'
import Button from '@/app/components/ui/Button'
import { Briefcase, Users, Target, Code, TrendingUp, Heart } from 'lucide-react'
import Link from 'next/link'

export default function TheVision() {
  return (
    <section id="vision" className="section bg-bg-primary">
      <div className="container">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The <span className="gradient-text">Vision Forward</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Building the future while staying true to what got us here
            </p>
          </div>
        </ScrollReveal>

        {/* Balancing Both Worlds */}
        <ScrollReveal delay={0.2}>
          <div className="max-w-4xl mx-auto mb-20">
            <div className="bg-gradient-to-br from-purple-primary/10 to-violet-primary/10 rounded-xl p-8 border border-purple-primary/20">
              <div className="flex items-start space-x-4 mb-6">
                <Heart className="w-12 h-12 text-pink-primary flex-shrink-0" />
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    The Sweet Spot: Technology That Amplifies Humanity
                  </h3>
                  <p className="text-lg text-text-secondary leading-relaxed mb-4">
                    For 20+ years, I've built my mortgage practice on a simple truth: relationships matter more than
                    transactions. My clients don't just get loans—they get someone who answers at midnight, who
                    remembers their kids' names, who treats their dream like it's my own.
                  </p>
                  <p className="text-lg text-text-secondary leading-relaxed mb-4">
                    When Shawn and I started ClearForge AI, people asked: "Aren't you afraid technology will replace that?"
                  </p>
                  <p className="text-xl text-text-primary font-medium mb-4">
                    That's backwards. I'm building technology to protect it.
                  </p>
                  <p className="text-lg text-text-secondary leading-relaxed mb-4">
                    Imagine if I could automate document processing, compliance tracking, appointment scheduling, and
                    follow-up sequences. Not to serve fewer people—to serve <span className="text-text-primary font-medium">more</span> people
                    with the same personal touch my never-ending list of happy clients will attest to.
                  </p>
                  <p className="text-lg text-text-secondary leading-relaxed">
                    That's the balance: using technology to handle the busywork so I can spend more time doing what
                    actually matters—being present for families making life-changing decisions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* CEO/CTO Roles */}
        <ScrollReveal delay={0.4}>
          <div className="mb-20">
            <h3 className="text-3xl font-bold mb-8 text-center">
              Two Translators, <span className="gradient-text">One Mission</span>
            </h3>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card>
                <div className="flex items-start space-x-4 mb-6">
                  <div className="glass rounded-lg p-4">
                    <Briefcase className="w-8 h-8 text-purple-primary" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-text-primary mb-2">Josh - CEO</h4>
                    <p className="text-purple-light italic">The Community Translator</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Users className="w-5 h-5 text-purple-primary flex-shrink-0 mt-1" />
                    <p className="text-text-secondary">
                      <span className="text-text-primary font-medium">Business Operations:</span> Making sure
                      technology serves people, not replaces them
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Target className="w-5 h-5 text-purple-primary flex-shrink-0 mt-1" />
                    <p className="text-text-secondary">
                      <span className="text-text-primary font-medium">Strategy & Market:</span> Understanding
                      what businesses actually need, not what tech companies think they need
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Heart className="w-5 h-5 text-purple-primary flex-shrink-0 mt-1" />
                    <p className="text-text-secondary">
                      <span className="text-text-primary font-medium">Relationship Building:</span> Connecting
                      the community we serve with the capability they deserve
                    </p>
                  </div>
                </div>
              </Card>

              <Card>
                <div className="flex items-start space-x-4 mb-6">
                  <div className="glass rounded-lg p-4">
                    <Code className="w-8 h-8 text-violet-primary" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-text-primary mb-2">Shawn - CTO</h4>
                    <p className="text-purple-light italic">The AI Translator</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Code className="w-5 h-5 text-violet-primary flex-shrink-0 mt-1" />
                    <p className="text-text-secondary">
                      <span className="text-text-primary font-medium">Technology Strategy:</span> Building
                      enterprise capability at SMB economics
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <TrendingUp className="w-5 h-5 text-violet-primary flex-shrink-0 mt-1" />
                    <p className="text-text-secondary">
                      <span className="text-text-primary font-medium">Product Vision:</span> Architecting
                      platforms that amplify human intelligence, not replace it
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Briefcase className="w-5 h-5 text-violet-primary flex-shrink-0 mt-1" />
                    <p className="text-text-secondary">
                      <span className="text-text-primary font-medium">Infrastructure:</span> 20+ years
                      enterprise experience tearing down the walls of complexity
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </ScrollReveal>

        {/* CTA to Shawn's Page */}
        <ScrollReveal delay={0.6}>
          <div className="max-w-3xl mx-auto text-center">
            <div className="glass rounded-xl p-12">
              <h3 className="text-3xl font-bold mb-6">
                Ready to See What We're Building?
              </h3>
              <p className="text-xl text-text-secondary mb-8">
                Discover how we're making enterprise AI accessible to everyone
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="http://localhost:3000" target="_blank">
                  <Button variant="primary" size="lg">
                    Meet My Co-Founder
                  </Button>
                </Link>
                <Link href="http://localhost:3000/#work" target="_blank">
                  <Button variant="secondary" size="lg">
                    See What We're Building
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
