import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Heart, Users, Globe, Handshake, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function HomePage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'NGO',
    name: 'Mega Wake Up International',
    alternateName: 'MEWI',
    url: 'https://megawakeupinternational.ng',
    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-fxsuM1giKTqf5k7NM2nQAWoZZvKAy6.png',
    description: 'Mega Wake Up International (MEWI) is a registered NGO providing emergency relief, empowerment programs, and poverty alleviation to communities across Nigeria.',
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
    sameAs: [
      'https://twitter.com/megawake_up',
    ],
    areaServed: {
      '@type': 'Country',
      name: 'Nigeria',
    },
    knowsAbout: [
      'Emergency Relief',
      'Poverty Alleviation',
      'Community Empowerment',
      'Skills Acquisition',
      'Vocational Training',
      'Medical Assistance',
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
                <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-balance">
                  Reaching Out. Making a Difference.
                </h1>
                <p className="text-lg leading-relaxed text-primary-foreground/90">
                  Mega Wake Up International is dedicated to providing emergency relief, empowerment programs, and poverty alleviation to communities in need. Together, we create lasting change.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" variant="secondary" asChild>
                    <Link href="/donate">Donate Now</Link>
                  </Button>
                  <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                    <Link href="/programs">Our Programs</Link>
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

        {/* Impact Stats */}
        <section className="py-16 bg-muted/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: 'Communities Served', value: '50+' },
                { label: 'Lives Impacted', value: '10,000+' },
                { label: 'Active Programs', value: '15+' },
                { label: 'Volunteers', value: '200+' },
              ].map((stat) => (
                <Card key={stat.label} className="text-center">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Mission</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Creating an independent organization that focuses on providing emergency relief quickly, effectively, and without impartiality through poverty alleviation.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Heart,
                  title: 'Emergency Relief',
                  description: 'Rapid response to communities affected by disasters and emergencies',
                },
                {
                  icon: Users,
                  title: 'Empowerment Programs',
                  description: 'Skills training and economic empowerment for sustainable livelihoods',
                },
                {
                  icon: Globe,
                  title: 'Community Development',
                  description: 'Building resilient communities through education and infrastructure',
                },
                {
                  icon: Handshake,
                  title: 'Partnership Network',
                  description: 'Collaborating with TELEPECON and other partners for greater impact',
                },
              ].map((item) => (
                <Card key={item.title} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Work Showcase */}
        <section className="py-20 bg-muted/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Work in Action</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                See how we're making a difference in communities across Nigeria
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TSgZ5VNH3eC8Ch4jbWx7usKt6XWut4.png',
                  title: 'COVID-19 Relief Distribution',
                  description: 'Providing essential supplies to vulnerable communities during the pandemic',
                },
                {
                  image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-yWOcf6eDNiVWsdL9Uzn5ztlrlMlZhF.png',
                  title: 'Community Empowerment',
                  description: 'Training and empowering women through skills development programs',
                },
                {
                  image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image.png-0wt2eX5EoEjxjkkflqLvhqCjLhbsxF.jpeg',
                  title: 'TELEPECON Conference',
                  description: 'Participating in the Less Privilege Empowerment Coordinators Network',
                },
              ].map((project) => (
                <Card key={project.title} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src={project.image || "/placeholder.svg"}
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

        {/* Call to Action */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Join Us in Making a Difference</h2>
            <p className="text-lg mb-8 leading-relaxed text-primary-foreground/90">
              Your support helps us reach more communities and transform lives. Together, we can create lasting change.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/donate">Make a Donation</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <Link href="/volunteer">Become a Volunteer</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
