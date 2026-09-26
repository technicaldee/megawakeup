import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Users,
  ArrowRight,
  GraduationCap,
  Sprout,
  Briefcase,
  HeartPulse,
  Award,
  ShieldCheck,
  Trees,
  Target,
  Eye,
  Sparkles,
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { STRATEGY_DATA } from '@/lib/strategy-data'

const goalIcons: Record<string, any> = {
  GraduationCap,
  Sprout,
  Briefcase,
  HeartPulse,
  Award,
  ShieldCheck,
  Trees,
}

export default function HomePage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'NGO',
    name: 'Mega Wake Up International',
    alternateName: 'MEWI',
    url: 'https://megawakeupinternational.ng',
    logo: 'https://megawakeupinternational.ng/images/logo.png',
    description: STRATEGY_DATA.mission,
    foundingDate: '2020',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'NG',
      addressLocality: 'Nigeria',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      availableLanguage: ['English'],
    },
    sameAs: ['https://twitter.com/megawake_up'],
    areaServed: {
      '@type': 'Country',
      name: 'Nigeria',
    },
    knowsAbout: [
      'Education and Skills Development',
      'Sustainable Agriculture and Food Security',
      'Economic Empowerment and Livelihoods',
      'Healthcare and Public Health',
      'Capacity Building and Leadership',
      'Social Inclusion and Safeguarding',
      'Environmental Sustainability and Climate Resilience',
      'HIV/AIDS and Disease Prevention',
      'Poverty Alleviation',
      'Youth and Women Empowerment',
    ],
  }

  return (
    <div className="flex min-h-screen flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-primary text-primary-foreground overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-accent/30" />
          <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Badge variant="secondary" className="text-xs font-semibold uppercase tracking-wider">
                  2027–2037 Strategic Horizon
                </Badge>
                <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-balance">
                  Empowering Communities. Transforming Lives.
                </h1>
                <p className="text-lg leading-relaxed text-primary-foreground/90">
                  Mega Wake Up International Outreach (MEWI) is an indigenous Nigerian non-profit organization dedicated to fostering an inclusive, resilient, and prosperous Nigeria where girls, women, young people, and vulnerable populations thrive.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <Button size="lg" variant="secondary" asChild>
                    <Link href="/donate">Donate Now</Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                    asChild
                  >
                    <Link href="/programs">Our 7 Strategic Goals</Link>
                  </Button>
                </div>
              </div>
              <div className="relative h-[400px] lg:h-[500px]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ows6olFq8UrcG1JR94HSVmIrqg9yl5.png"
                  alt="Mega Wake Up International banner"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 2037 Impact Ambition Stats Banner */}
        <section className="py-16 bg-muted/40 border-b">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <Badge variant="outline" className="mb-2">Strategic Ambition Targets</Badge>
              <h2 className="text-2xl sm:text-3xl font-bold">Targeting 20 Million+ Lives by 2037</h2>
              <p className="text-sm text-muted-foreground mt-2">
                Delivering sustainable, measurable development outcomes across Nigeria
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { label: 'People Reached', value: '20M+', sub: 'Direct beneficiaries' },
                { label: 'Female Target', value: '60%+', sub: 'Women & girls' },
                { label: 'Youth Target', value: '70%+', sub: 'Ages 15–35 years' },
                { label: 'Coverage', value: '36 + FCT', sub: 'All Nigerian states' },
                { label: 'Communities', value: '10,000+', sub: 'Targeted localities' },
                { label: 'Resources', value: '₦200B+', sub: 'Mobilization target' },
              ].map((stat) => (
                <Card key={stat.label} className="text-center hover:border-primary/50 transition-colors">
                  <CardContent className="p-5">
                    <div className="text-2xl lg:text-3xl font-extrabold text-primary mb-1">{stat.value}</div>
                    <div className="text-xs font-semibold text-foreground">{stat.label}</div>
                    <div className="text-[10px] text-muted-foreground mt-0.5">{stat.sub}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Mission & Vision</h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Anchored on evidence-based programs, strategic partnerships, and innovation for long-term community transformation.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Mission Card */}
              <Card className="border-primary/20 hover:shadow-md transition-shadow">
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                    {STRATEGY_DATA.mission}
                  </p>
                </CardContent>
              </Card>

              {/* Vision Card */}
              <Card className="border-primary/20 hover:shadow-md transition-shadow">
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Eye className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                    {STRATEGY_DATA.vision}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Strategic Goals / Focus Areas */}
        <section className="py-20 bg-muted/30 border-y">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge variant="outline" className="mb-2">Key Programmatic Pillars</Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                Eight Strategic Goals in Action
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Explore our core strategic pillars driving measurable development outcomes across Nigeria.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {STRATEGY_DATA.strategicGoals.map((goal) => {
                const IconComponent = goalIcons[goal.icon] || Target
                return (
                  <Card key={goal.id} className="hover:shadow-lg transition-all hover:border-primary/50 flex flex-col justify-between">
                    <CardContent className="p-6 space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                          <IconComponent className="h-6 w-6 text-primary" />
                        </div>
                        <Badge variant="secondary" className="text-xs">Goal {goal.number}</Badge>
                      </div>
                      <h3 className="font-semibold text-lg leading-snug">{goal.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                        {goal.goal}
                      </p>
                      <div className="pt-2">
                        <Button variant="ghost" size="sm" className="p-0 text-primary hover:text-primary/80 hover:bg-transparent" asChild>
                          <Link href={`/programs#${goal.id}`}>
                            <span>View Targets & KPIs</span>
                            <ArrowRight className="h-4 w-4 ml-1" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
            <div className="text-center mt-12">
              <Button asChild size="lg">
                <Link href="/programs">
                  View Full 2037 Targets & KPIs <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Recent Work Showcase */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Work in Action</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                See how we're making a tangible difference in communities across Nigeria
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TSgZ5VNH3eC8Ch4jbWx7usKt6XWut4.png',
                  title: 'Community Medical Outreaches',
                  description: 'Delivering healthcare screenings, medical supplies, and preventive services in underserved communities',
                },
                {
                  image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-yWOcf6eDNiVWsdL9Uzn5ztlrlMlZhF.png',
                  title: 'Women & Youth Empowerment',
                  description: 'Equipping women and youth with technical skills, financial literacy, and livelihood resources',
                },
                {
                  image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image.png-0wt2eX5EoEjxjkkflqLvhqCjLhbsxF.jpeg',
                  title: 'TELEPECON Strategic Collaboration',
                  description: 'Partnering across national networks to scale impact and advance humanitarian advocacy',
                },
              ].map((project) => (
                <Card key={project.title} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src={project.image || '/placeholder.svg'}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button asChild variant="outline" size="lg">
                <Link href="/gallery">
                  View Full Gallery <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Leadership Preview */}
        <section className="py-20 bg-muted/30 border-t">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Leadership</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Meet the dedicated team driving evidence-based development and community transformation
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-8">
              {[
                {
                  name: 'Dr. (Mrs.) Inemesit Bassey',
                  role: 'Founder & CEO',
                  image: '/images/ceo1.png',
                },
                {
                  name: 'Prof. Sunday O. Awofisayo',
                  role: 'Director, Programs & Humanitarian',
                  image: '/images/sunday.png',
                },
                {
                  name: 'Udeme Wilson Ekpo',
                  role: 'Director, Finance & Operations',
                  image: '/images/udeme.png',
                },
                {
                  name: 'Chief Henry Akpan Obot',
                  role: 'Director, Governance, Compliance, Audit, Risk & Legal',
                  image: '/images/henry.png',
                },
              ].map((member) => (
                <Card key={member.name}>
                  <CardContent className="p-6 text-center">
                    {member.image ? (
                      <div className="relative w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <div className="w-24 h-24 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                        <span className="text-2xl font-bold text-primary">
                          {member.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                        </span>
                      </div>
                    )}
                    <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                    <p className="text-sm text-primary">{member.role}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center">
              <Button asChild variant="outline" size="lg">
                <Link href="/team">
                  Meet the Entire Team <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Join Us in Making a Difference</h2>
            <p className="text-lg mb-8 leading-relaxed text-primary-foreground/90">
              Your support helps us reach 20 million lives and empower communities across Nigeria. Together, we create lasting sustainable impact.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/donate">Make a Donation</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                asChild
              >
                <Link href="/contact">Partner With Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
