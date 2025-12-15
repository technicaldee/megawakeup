import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Card, CardContent } from '@/components/ui/card'
import { Heart, Briefcase, GraduationCap, Home, Droplet, Users, Stethoscope, Package } from 'lucide-react'
import Image from 'next/image'

export default function ProgramsPage() {
  const programs = [
    {
      icon: Heart,
      title: 'Emergency Relief & Disaster Response',
      description: 'Rapid deployment of essential supplies and support to communities affected by natural disasters, conflicts, and emergencies. We provide food, water, shelter, medical aid, and psychosocial support.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TSgZ5VNH3eC8Ch4jbWx7usKt6XWut4.png',
      impact: ['10,000+ people reached', 'COVID-19 relief packages distributed', '24/7 emergency response'],
    },
    {
      icon: Briefcase,
      title: 'Economic Empowerment & Skills Training',
      description: 'Comprehensive vocational training programs that equip individuals with marketable skills for sustainable livelihoods. Includes business management, entrepreneurship, and financial literacy.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-CbUFPyjIKIdxRXNzEJILVOGJwmstY0.png',
      impact: ['500+ trained beneficiaries', 'Entrepreneurship workshops', 'Microfinance support'],
    },
    {
      icon: Users,
      title: 'Women & Youth Empowerment',
      description: 'Targeted programs for women and youth focusing on leadership development, skills acquisition, and economic independence. Special emphasis on gender equality and youth participation.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-yWOcf6eDNiVWsdL9Uzn5ztlrlMlZhF.png',
      impact: ['200+ women empowered', 'Youth leadership training', 'Gender equality advocacy'],
    },
    {
      icon: GraduationCap,
      title: 'Education & Literacy Programs',
      description: 'Supporting access to quality education through scholarships, school supplies, and adult literacy programs. We believe education is the foundation for sustainable development.',
      impact: ['Educational materials provided', 'Adult literacy classes', 'Scholarship programs'],
    },
    {
      icon: Stethoscope,
      title: 'Healthcare & Nutrition',
      description: 'Community health initiatives including medical outreach, nutrition programs, health education, and disease prevention campaigns to improve overall wellbeing.',
      impact: ['Health outreach programs', 'Nutrition support', 'Health education'],
    },
    {
      icon: Home,
      title: 'Community Development',
      description: 'Infrastructure projects and community-driven development initiatives that create lasting improvements in living conditions and community facilities.',
      impact: ['Community infrastructure', 'Capacity building', 'Sustainable projects'],
    },
    {
      icon: Droplet,
      title: 'Water, Sanitation & Hygiene',
      description: 'Ensuring access to clean water, proper sanitation facilities, and hygiene education to prevent waterborne diseases and improve public health.',
      impact: ['Clean water access', 'Sanitation facilities', 'Hygiene campaigns'],
    },
    {
      icon: Package,
      title: 'Food Security & Agriculture',
      description: 'Programs to combat hunger and promote food security through agricultural training, food distribution, and support for small-scale farmers.',
      impact: ['Food distribution', 'Agricultural training', 'Farmer support'],
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-primary text-primary-foreground py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-accent/30" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4 text-balance">Our Programs</h1>
              <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
                Comprehensive interventions addressing immediate needs while building long-term resilience
              </p>
            </div>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="space-y-16">
              {programs.map((program, index) => (
                <Card key={program.title} className="overflow-hidden">
                  <div className={`md:flex ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                    {program.image && (
                      <div className="relative md:w-2/5 h-64 md:h-auto">
                        <Image
                          src={program.image || "/placeholder.svg"}
                          alt={program.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <CardContent className={`${program.image ? 'md:w-3/5' : 'w-full'} p-8`}>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                          <program.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold mb-3">{program.title}</h3>
                          <p className="text-muted-foreground leading-relaxed mb-6">{program.description}</p>
                          <div>
                            <h4 className="font-semibold mb-2">Impact & Reach:</h4>
                            <ul className="space-y-1">
                              {program.impact.map((item, i) => (
                                <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* TELEPECON Partnership */}
        <section className="py-20 bg-muted/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image.png-0wt2eX5EoEjxjkkflqLvhqCjLhbsxF.jpeg"
                  alt="TELEPECON Conference"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">TELEPECON Partnership</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    As a proud member of The Less Privilege Empowerment Coordinators Networking (TELEPECON), MEWI collaborates with fellow organizations to maximize impact and reach.
                  </p>
                  <p>
                    This partnership enables us to participate in large-scale interventions, share resources and best practices, and advocate collectively for policy changes that benefit marginalized communities.
                  </p>
                  <p>
                    Through TELEPECON, we've been able to expand our reach, enhance our capacity, and contribute to national and international development dialogues.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Support Our Programs</h2>
            <p className="text-lg mb-8 leading-relaxed text-primary-foreground/90">
              Your contribution helps us expand these life-changing programs and reach more communities in need.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="/donate" className="inline-flex items-center justify-center rounded-md bg-secondary text-secondary-foreground px-8 py-3 text-sm font-medium hover:bg-secondary/90 transition-colors">
                Make a Donation
              </a>
              <a href="/contact" className="inline-flex items-center justify-center rounded-md border border-primary-foreground px-8 py-3 text-sm font-medium hover:bg-primary-foreground/10 transition-colors">
                Partner With Us
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
