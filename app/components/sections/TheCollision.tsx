'use client'

import ScrollReveal from '@/app/components/animations/ScrollReveal'
import Card from '@/app/components/ui/Card'
import { Coffee, Lightbulb, Users, Rocket, Heart } from 'lucide-react'

export default function TheCollision() {
  const collisionStory = [
    {
      icon: Coffee,
      title: 'The Thank You Coffee',
      description: "Shawn won a raffle prize at a Port St. Lucie Business Club event. The prize came from me—a guy he'd never met. He reached out to thank me. I suggested coffee.",
      quote: "Sometimes the universe puts the right people in the same room at exactly the right time.",
    },
    {
      icon: Lightbulb,
      title: 'The Ten-Minute Realization',
      description: "Within ten minutes, I realized I was talking to someone who understood what I'd been trying to do—not because he came from mortgages, but because he'd been fighting the same battle from a completely different angle.",
      quote: "He had the anger; I had the calm. He's the introvert who wants to tear down systems; I'm the extrovert who wants to lift people up.",
    },
    {
      icon: Users,
      title: 'The Yin and Yang',
      description: "Shawn speaks in architecture and infrastructure. I speak in relationships and impact. But we both spoke the same language where it mattered: transparency, accessibility, and the belief that complexity is a choice, not a requirement.",
      quote: "We were translators from different worlds, discovering we'd been translating the same message.",
    },
    {
      icon: Rocket,
      title: 'The Marathon Lunch Sessions',
      description: "What started as a thank-you coffee turned into a series of marathon lunch sessions. Shawn would explain what enterprises pay millions for. I'd translate it to my world: 'So for my mortgage business, or my buddy's roofing company, we could get 80% of that capability for a fraction of the cost?' Exactly.",
      quote: "I saw the technical opportunity. Shawn saw the thousands of people like me—business owners with the drive and vision but without access to the tools.",
    },
  ]

  return (
    <section id="partnership" className="section bg-surface-l1">
      <div className="container">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The <span className="gradient-text">Collision</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              How a raffle prize led to a partnership that would change everything
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-8 max-w-5xl mx-auto mb-16">
          {collisionStory.map((chapter, index) => {
            const Icon = chapter.icon
            return (
              <ScrollReveal key={chapter.title} delay={0.2 + index * 0.1}>
                <Card className="border-l-4 border-purple-primary">
                  <div className="flex items-start space-x-4">
                    <Icon className="w-12 h-12 text-purple-primary flex-shrink-0 mt-1" />
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-text-primary mb-3">
                        {chapter.title}
                      </h3>
                      <p className="text-text-secondary leading-relaxed mb-4">
                        {chapter.description}
                      </p>
                      <div className="bg-purple-primary/10 border-l-4 border-purple-primary p-4 rounded">
                        <p className="text-purple-light italic">
                          {chapter.quote}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </ScrollReveal>
            )
          })}
        </div>

        <ScrollReveal delay={0.6}>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-purple-primary/10 to-violet-primary/10 rounded-xl p-12 border border-purple-primary/20">
              <div className="text-center mb-8">
                <Heart className="w-16 h-16 text-pink-primary mx-auto mb-6" />
                <h3 className="text-3xl font-bold mb-6">
                  Then We Started Digging Into the Fundamental Problem
                </h3>
              </div>

              <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
                <p>
                  The one that makes everything else possible or impossible.
                </p>

                <p className="text-text-primary font-medium">
                  Small businesses generate intelligence 24/7 but have no idea what to do with it.
                </p>

                <p>
                  Their website analytics sit in Google Analytics. Sales data sits in QuickBooks.
                  The POS system tracks every transaction. Customer interactions happen across email,
                  social media, phone calls. Reviews pile up on Google, Yelp, Facebook.
                </p>

                <p className="text-text-primary font-medium">
                  Nobody ever connected the dots.
                </p>

                <p>
                  Meanwhile, enterprises blend ALL this data together and see things small businesses
                  can&apos;t even imagine: which customers are most profitable, what marketing actually drives
                  revenue, when to launch products based on patterns, which employees need support before
                  they burn out.
                </p>

                <p className="text-xl text-purple-light font-bold text-center pt-6">
                  That&apos;s when ClearForge AI was born.
                </p>

                <p className="text-center">
                  Not to sell AI. Not to replace human expertise. But to tear down the walls keeping
                  43% of US GDP locked out of the capabilities that could transform their businesses.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.8}>
          <div className="mt-12 text-center">
            <div className="glass rounded-xl p-8 max-w-3xl mx-auto">
              <p className="text-2xl text-text-primary font-bold mb-4">
                Two Translators. One Mission.
              </p>
              <p className="text-lg text-text-secondary mb-4">
                Shawn translates enterprise technology into accessible reality.
              </p>
              <p className="text-lg text-text-secondary mb-6">
                Josh translates complex concepts into human language and builds the relationships
                that turn capability into impact.
              </p>
              <p className="text-xl text-purple-primary font-medium">
                Together, we&apos;re unlocking the 90% who&apos;ve been locked out by complexity.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
