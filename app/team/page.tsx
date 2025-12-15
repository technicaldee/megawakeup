import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'

export default function TeamPage() {
  const leadership = [
    {
      name: 'Dr. (Mrs.) Inemesit Bassey',
      role: 'Founder & CEO',
      image: '/images/ceo1.png',
      bio: 'Visionary Founder and Chief Executive Officer of Mega Wake Up International Outreach. As Zonal Coordinator for North Central Agro Allied, Dr. Bassey leads the organization\'s mission to provide emergency relief quickly, effectively, and without impartiality to communities affected by poverty. Her compassionate leadership and unwavering commitment to humanitarian service have transformed countless lives across Nigeria.',
    },
  ]

  const teamMembers = [
    {
      name: 'Prof. Sunday Awofisayo',
      role: 'Program Director',
      image: '/images/sunday.png',
      bio: 'Program Director--Prof. Sunday Awofisayo, PhD, MBA, MSc, BSc'
    },
    {
      name: 'Mr. Udeme Ekpo',
      role: 'Director Finance/Operations',
      image: '/images/udeme.png',
      bio: 'Director Finance/Operations--Mr. Udeme Ekpo, ACA, ACIFC'
    },
    {
      name: 'Dr. Edidiong Ibup',
      role: 'Chief Health Officer',
      bio: 'Leading health initiatives and medical programs for MEWI\'s community outreach efforts.',
    },
    {
      name: 'Mrs. Rejoice Chinwe',
      role: 'Head of Human Resources',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ALKaCTekF21TW8dhHIrDqwevRPQobZ.png',
      bio: 'Results-driven Business Administration graduate with over 17 years of experience in business management, leadership, data analysis, procurement, HR, and administrative excellence.',
    },
    {
      name: 'Mr. David Adekunle',
      role: 'Head of Compliance',
      bio: 'Energetic self-starter with extensive experience in compliance and regulatory affairs. Ensures adherence to organizational policies and standards. Holds an honours degree focused on Communications.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-QwTeFKYWzq9rBeFEOQ8maZm3MQ7eVr.png',
    },
    {
      name: 'Chief Henry Obot',
      role: 'Head of Internal Audit',
      bio: 'Oversees internal audit functions to ensure transparency, accountability, and efficient use of organizational resources.',
      image: '/images/henry.png',
    },
    {
      name: 'Dr. Olayemi Joshua',
      role: 'Head of Procurement/Logistics',
      bio: 'Manages procurement processes and logistics operations to ensure efficient delivery of programs and services. Brings expertise in supply chain management and operational excellence.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-FFLFMvqrNK2lrmcuVsSlS0TFimiWMc.png',
    },
    {
      name: 'Mrs. Ime Jessica Awofisayo',
      role: 'Head of Diagnostics/Analysis',
      bio: 'Leads data analysis and diagnostic initiatives to measure program impact and inform strategic decision-making.',
    },
    {
      name: 'Mr. Peter Okon Peter',
      role: 'Administrative Officer',
      bio: 'Manages day-to-day administrative operations and supports organizational efficiency.',
    },
  ]

  const boardOfTrustees = [
    { name: 'Dr. Inemesit Aniefiok Bassey', role: 'Trustee' },
    { name: 'Mr. Mkpa Aniefiok Bassey', role: 'Trustee' },
    { name: 'Ime Donald', role: 'Trustee' },
    { name: 'Alice Agbo', role: 'Trustee' },
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
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4 text-balance">Our Team</h1>
              <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
                Meet the dedicated individuals driving positive change in communities across Nigeria
              </p>
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Leadership</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Visionary leadership committed to making a lasting impact
              </p>
            </div>
            <div className="max-w-2xl mx-auto">
              {leadership.map((member) => (
                <Card key={member.name} className="overflow-hidden">
                  <div className="md:flex">
                    <div className="relative md:w-2/5 h-64 md:h-auto">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="md:w-3/5 p-8">
                      <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                      <p className="text-primary font-medium mb-4">{member.role}</p>
                      <p className="text-muted-foreground leading-relaxed">{member.bio}</p>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Board of Trustees */}
        <section className="py-20 bg-muted/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Board of Trustees</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Guiding our mission with wisdom and dedication
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {boardOfTrustees.map((trustee) => (
                <Card key={trustee.name}>
                  <CardContent className="p-6 text-center">
                    <div className="w-24 h-24 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">
                        {trustee.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                      </span>
                    </div>
                    <h3 className="font-semibold text-lg mb-1">{trustee.name}</h3>
                    <p className="text-sm text-primary">{trustee.role}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Core Team */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Management Team</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Experienced professionals dedicated to our mission
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member) => (
                <Card key={member.name}>
                  <CardContent className="p-6 text-center">
                    {member.image ? (
                      <div className="relative w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden">
                        <Image
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <div className="w-24 h-24 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                        <span className="text-2xl font-bold text-primary">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    )}
                    <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                    <p className="text-sm text-primary mb-3">{member.role}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Photos */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Team in Action</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Working together to make a difference in communities
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-yWOcf6eDNiVWsdL9Uzn5ztlrlMlZhF.png',
                'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-mMyq0GZiJezuKufiaKZxkxnsSw1rxO.png',
                'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image.png-0wt2eX5EoEjxjkkflqLvhqCjLhbsxF.jpeg',
                'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-CbUFPyjIKIdxRXNzEJILVOGJwmstY0.png',
              ].map((image, index) => (
                <div key={index} className="relative h-80 rounded-lg overflow-hidden">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`Team photo ${index + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Volunteers Section */}
        <section className="py-20 bg-accent text-accent-foreground">
          <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
            <p className="text-lg mb-8 leading-relaxed">
              We're always looking for passionate individuals to join our mission. Whether as a volunteer, partner, or team member, there's a place for you at MEWI.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="/volunteer" className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-8 py-3 text-sm font-medium hover:bg-primary/90 transition-colors">
                Become a Volunteer
              </a>
              <a href="/contact" className="inline-flex items-center justify-center rounded-md border border-accent-foreground px-8 py-3 text-sm font-medium hover:bg-accent-foreground/10 transition-colors">
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
