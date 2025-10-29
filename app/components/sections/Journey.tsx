'use client'

import Image from 'next/image'
import ScrollReveal from '@/app/components/animations/ScrollReveal'
import Card from '@/app/components/ui/Card'
import { Martini, Building2, Users, Lightbulb, Award } from 'lucide-react'

export default function Journey() {
  const journey = [
    {
      icon: Martini,
      title: 'The Best Bartender',
      description: "Born and raised in Philadelphia, Josh didn't start in mortgages. He was the bartender everyone loved—the one who remembered your story, your drink, and what mattered to you.",
      highlight: 'Many of his regular customers were in the mortgage business. He felt their excitement, their energy, and the satisfaction that came from helping people achieve dreams.',
    },
    {
      icon: Building2,
      title: 'The Wake-Up Call',
      description: 'When Josh entered the mortgage industry, he discovered something that would define his career: the industry was drowning people in jargon, burying them in paperwork, and making them feel stupid for not understanding.',
      highlight: 'Getting married, buying a home, and having a baby are the biggest life events adults experience. Why was the industry making it so complicated?',
    },
    {
      icon: Users,
      title: 'The Translation Mission',
      description: 'Josh became a translator—not of languages, but of complexity into clarity. He never saw people as numbers in a pipeline. He saw families making life-changing decisions who deserved understanding, not confusion.',
      highlight: '20+ years across Pennsylvania, New Jersey, Florida, and Georgia. Thousands of families helped. Not transactions—relationships.',
    },
    {
      icon: Lightbulb,
      title: 'The Philosophy',
      description: '"At the end of the day, everyone has all the same products and services, but there is only one of you."',
      highlight: 'Define who you are. Develop who you are. Control who you are. And watch the growth and positive impact you have on others.',
    },
    {
      icon: Award,
      title: 'The Community Builder',
      description: 'Josh didn\'t just close loans. He hosted Hype Local, highlighting local businesses. He served as a Community Connector with the Port St. Lucie Business Club. He built charitable relationships with animal shelters.',
      highlight: 'Success isn\'t about transactions—it\'s about impact.',
    },
  ]

  return (
    <section id="journey" className="section bg-surface-l1">
      <div className="container">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Meet Josh: <span className="gradient-text">The Other Translator</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Josh wasn&apos;t supposed to be in mortgages either. But sometimes the best
              solutions come from people who see the problem differently.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 items-start mb-20">
          <ScrollReveal delay={0.2}>
            <div className="relative">
              <div className="aspect-square relative rounded-2xl overflow-hidden glass">
                <Image
                  src="/images/josh.jpg"
                  alt="Josh Giddings"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-primary/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-violet-primary/20 rounded-full blur-3xl"></div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="space-y-6">
              <div className="glass rounded-lg p-6">
                <h3 className="text-2xl font-bold mb-4">The Foundation</h3>
                <p className="text-text-secondary leading-relaxed mb-4">
                  Born and raised in Philadelphia, Josh spent over 20 years helping families
                  achieve homeownership across Pennsylvania, New Jersey, Florida, and Georgia.
                </p>
                <p className="text-text-secondary leading-relaxed">
                  But if you asked him what he really does, he wouldn&apos;t say &quot;sell mortgages.&quot;
                  He&apos;d tell you he builds relationships and creates generational wealth through
                  homeownership.
                </p>
              </div>

              <div className="glass rounded-lg p-6">
                <h3 className="text-2xl font-bold mb-4">The Problem He Saw</h3>
                <p className="text-text-secondary leading-relaxed mb-4">
                  The mortgage industry had the same problem enterprise technology had: it was
                  built for insiders, not for the people it was supposed to serve.
                </p>
                <p className="text-text-primary font-medium">
                  So Josh became a translator.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <div className="space-y-8 max-w-5xl mx-auto">
          {journey.map((step, index) => {
            const Icon = step.icon
            return (
              <ScrollReveal key={step.title} delay={0.4 + index * 0.1}>
                <Card className="border-l-4 border-purple-primary">
                  <div className="flex items-start space-x-4">
                    <Icon className="w-12 h-12 text-purple-primary flex-shrink-0 mt-1" />
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-text-primary mb-3">
                        {step.title}
                      </h3>
                      <p className="text-text-secondary leading-relaxed mb-4">
                        {step.description}
                      </p>
                      <div className="bg-purple-primary/10 border-l-4 border-purple-primary p-4 rounded">
                        <p className="text-purple-light italic">
                          {step.highlight}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
