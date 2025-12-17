import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Card, CardContent } from '@/components/ui/card'
import { Target, Eye, Award, Users } from 'lucide-react'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-primary text-primary-foreground py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-accent/30" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4 text-balance">About Us</h1>
              <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
                An indigenous Nigerian non-profit organization dedicated to improving access to qualitative healthcare, education, and economic strengthening services
              </p>
            </div>
          </div>
        </section>

        {/* Who We Are */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Mega Wake Up International Outreach (MEWI) is an indigenous Nigerian non-profit organization dedicated to improving access to qualitative healthcare, education, and economic strengthening services for the country's most vulnerable populations.
                  </p>
                  <p>
                    As a registered Non-Governmental Organization with the Nigerian Corporate Affairs Commission (CAC/IT/NO85950), MEWI is committed to creating positive sustainable change in the lives of the less privileged, women, and adolescents/youths across Nigeria.
                  </p>
                  <p>
                    Our organization focuses on four key areas: Economic Empowerment Initiatives, Community and Social Welfare Initiatives, Educational/Skill Acquisition/Capacity Building Initiatives, and Public Healthcare Services. We work in partnership with government and community stakeholders to build local capacity, integrate services into existing national frameworks, and ensure long-term sustainability.
                  </p>
                  <p>
                    We are proud members of The Less Privilege Empowerment Coordinators Networking (TELEPECON), working alongside other organizations to maximize our collective impact and advocate for policies that benefit marginalized communities.
                  </p>
                </div>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-mMyq0GZiJezuKufiaKZxkxnsSw1rxO.png"
                  alt="MEWI team members"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-20 bg-muted/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To create positive sustainable change in the lives of the less privileged, women, and adolescents/youths in Nigeria in the areas of educational/vocational training, skills acquisition, capacity building, economic development initiatives, mental health, and healthcare services.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Eye className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Our Vision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    A world where every individual has access to basic necessities, opportunities for growth, and the dignity they deserve regardless of their circumstances.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Our Shared Values</h3>
                  <ul className="text-muted-foreground space-y-2 leading-relaxed">
                    <li>• Mentoring</li>
                    <li>• Excellence</li>
                    <li>• Working Hard</li>
                    <li>• Ingenuity & Innovation</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Our Focus Areas</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Economic Empowerment Initiatives',
                  description: 'Targeted programs designed to equip individuals and communities, particularly marginalized groups, with the skills, resources, and opportunities needed to achieve financial independence. This includes access to financial services (financial inclusion), entrepreneurship support with training and mentorship, job creation and placement programs, social safety nets, and mentorship and networking platforms.',
                  image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-CbUFPyjIKIdxRXNzEJILVOGJwmstY0.png',
                },
                {
                  title: 'Community & Social Welfare Initiatives',
                  description: 'Programs and services designed to support individuals and families, reduce poverty and inequality, and promote overall community well-being. Key initiatives include disability services and advocacy, community development projects, crisis intervention and relief, elderly care and support, food security programs, and addressing social issues such as gender-based violence prevention, maternal and child health, and general community development.',
                  image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-yWOcf6eDNiVWsdL9Uzn5ztlrlMlZhF.png',
                },
                {
                  title: 'Educational/Skill Acquisition Initiatives',
                  description: 'Focused programs providing individuals with practical knowledge, technical expertise, and soft skills needed to enhance employability and career progression. This includes vocational and technical training (VET) programs, entrepreneurship training initiatives, industry-specific certification programs, and providing learning materials and training for educators to support formal and informal learning opportunities for children and youth.',
                  image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MRRFGtuqCM94ocrKTTKsiCM3yoyR9o.png',
                },
                {
                  title: 'Public Healthcare Services',
                  description: 'Addressing public health issues, fundamentally on HIV/AIDS, tuberculosis, and malaria, with emphasis on case identification, treatment, and prevention services. We focus on strengthening health systems, primary care (immunizations, family planning, maternal/child health), disease control, health education, environmental health, emergency preparedness, and data & research to inform policy.',
                  image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image.png-0wt2eX5EoEjxjkkflqLvhqCjLhbsxF.jpeg',
                },
              ].map((program) => (
                <Card key={program.title} className="overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={program.image || "/placeholder.svg"}
                      alt={program.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{program.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{program.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Partnerships */}
        <section className="py-20 bg-muted/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">Our Partnerships</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                MEWI is a proud member of The Less Privilege Empowerment Coordinators Networking (TELEPECON), working alongside other organizations to maximize our collective impact.
              </p>
            </div>
            <Card className="max-w-3xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4">TELEPECON Member</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  As a member of TELEPECON, we collaborate with fellow organizations dedicated to empowering underprivileged communities. This network enables us to:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Share best practices and resources</li>
                  <li>• Coordinate large-scale interventions</li>
                  <li>• Amplify our advocacy efforts</li>
                  <li>• Access training and capacity building opportunities</li>
                  <li>• Participate in national and international forums</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
