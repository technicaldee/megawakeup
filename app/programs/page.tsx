import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Card, CardContent } from '@/components/ui/card'
import { Heart, Briefcase, GraduationCap, Home, Droplet, Users, Stethoscope, Package, DollarSign, Shield, BookOpen, Activity } from 'lucide-react'
import Image from 'next/image'

export default function ProgramsPage() {
  const programs = [
    {
      icon: Briefcase,
      title: 'Economic Empowerment Initiatives',
      description: 'Targeted programs designed to equip individuals and communities, particularly marginalized groups, with the skills, resources, and opportunities needed to achieve financial independence and control over their economic futures.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-CbUFPyjIKIdxRXNzEJILVOGJwmstY0.png',
      details: [
        'Access to Financial Services (Financial Inclusion) - Providing access to banking, microfinance, and financial products for underserved populations',
        'Entrepreneurship Support - Offering training, mentorship, and resources (like grants or seed capital) to help aspiring individuals start, manage, and grow their own small businesses',
        'Job Creation and Placement Programs - Connecting individuals with employment opportunities and creating pathways to sustainable livelihoods',
        'Social Safety Nets - Implementing social assistance programs like cash transfers, food stamps, and housing assistance to provide a safety net during economic hardship',
        'Mentorship and Networking - Creating platforms for peer-to-peer support and mentorship programs to foster professional growth',
      ],
    },
    {
      icon: Users,
      title: 'Community & Social Welfare Initiatives',
      description: 'Targeted programs and services designed to support individuals and families, reduce poverty and inequality, and promote overall community well-being.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-yWOcf6eDNiVWsdL9Uzn5ztlrlMlZhF.png',
      details: [
        'Disability Services - Advocating for the rights and inclusion of persons with disabilities, providing assistive devices, support services, and employment opportunities',
        'Community Development - Fostering local leadership and citizen participation in projects like building community centres, libraries, and recreational facilities',
        'Crisis Intervention and Relief - Offering emergency assistance, disaster relief, and support for victims of abuse, violence, or other crises',
        'Elderly Care and Support - Providing social support and care services for elderly community members',
        'Food Security Initiatives - Implementing programs such as food stamps (SNAP), food banks, and nutrition assistance for vulnerable populations, including women, infants, and children (WIC)',
        'Social Issues Advocacy - Addressing gender-based violence (GBV) prevention, maternal and child health, and general community development initiatives',
      ],
    },
    {
      icon: GraduationCap,
      title: 'Educational/Skill Acquisition Initiatives',
      description: 'Focused programs and strategies designed to provide individuals with practical knowledge, specific technical expertise, and soft skills needed to enhance their employability, improve career progression, or start their own businesses.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MRRFGtuqCM94ocrKTTKsiCM3yoyR9o.png',
      details: [
        'Vocational and Technical Training (VET) - Programs offering practical, hands-on training in specific trades and technical fields such as construction, mechanics, culinary arts, healthcare support, and IT support',
        'Entrepreneurship Training - Providing business skills necessary to start and manage successful enterprises, including financial literacy, marketing, business plan development, and legal compliance',
        'Industry-Specific Certification Programs - Training focused on obtaining specific professional certifications (e.g., project management, cybersecurity credentials) required for specialized job roles and career advancement',
        'Educational Support - Providing learning materials, offering training for educators, and supporting formal and informal learning opportunities for children and youth',
      ],
    },
    {
      icon: Stethoscope,
      title: 'Public Healthcare Services',
      description: 'Addressing public health issues, fundamentally on HIV/AIDS, tuberculosis, and malaria, with emphasis on case identification, treatment, and prevention services. We work in partnership with government and community stakeholders to build local capacity and ensure long-term sustainability.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TSgZ5VNH3eC8Ch4jbWx7usKt6XWut4.png',
      details: [
        'Disease Control - Managing infectious diseases with focus on HIV/AIDS prevention and control, malaria, and tuberculosis through case identification, treatment, and prevention services',
        'Primary Care Services - Providing immunizations, family planning, maternal/child health services, and basic care at local clinics',
        'Health Education - Teaching healthy behaviours, nutrition advice, and disease prevention strategies to communities',
        'Environmental Health - Addressing food safety, water quality, and workplace safety issues',
        'Emergency Preparedness - Responding to outbreaks, natural disasters, and chemical emergencies',
        'Data & Research - Collecting health data/surveillance, identifying trends, and conducting research to inform policy and improve health outcomes',
        'Health Systems Strengthening - Working in partnership with government and community stakeholders to build local capacity, integrate services into existing national frameworks, and ensure long-term sustainability',
      ],
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
                Four comprehensive focus areas designed to create positive sustainable change in the lives of Nigeria's most vulnerable populations
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
                            <h4 className="font-semibold mb-3">Key Initiatives:</h4>
                            <ul className="space-y-2">
                              {program.details.map((item, i) => (
                                <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                                  <span>{item}</span>
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
