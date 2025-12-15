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
                Learn more about Mega Wake Up International and our commitment to serving communities in need
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
                    Mega Wake Up International (MEWI) is a registered Non-Governmental Organization with the Nigerian Corporate Affairs Commission (CAC/IT/NO85950). We are charged with creating real and positive sustainable change in the lives of the less privileged, women, and youths in Nigeria.
                  </p>
                  <p>
                    Our team holds a combined wealth of experience in local and international development initiatives such as Skill Acquisition Programs, vocational training, capacity building, economic development, financial empowerment activities, providing medical assistance, and promoting ethical healthcare practices.
                  </p>
                  <p>
                    We are proud members of The Less Privilege Empowerment Coordinators Networking (TELEPECON), working alongside other organizations to maximize our collective impact. We provide medical humanitarian assistance to people affected by conflict, epidemics, disasters, or exclusion from healthcare, and are known for our rapid response to crises and our commitment to providing aid based solely on need.
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
                    To create an independent organization that focuses on providing emergency relief quickly, effectively, and without impartiality through poverty alleviation and community empowerment.
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
            <h2 className="text-3xl font-bold text-center mb-12">What We Do</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Emergency Relief & Medical Assistance',
                  description: 'Rapid response to natural disasters, conflicts, epidemics, and other emergencies with essential supplies including food, water, shelter, and medical humanitarian assistance to people affected by exclusion from healthcare.',
                  image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MRRFGtuqCM94ocrKTTKsiCM3yoyR9o.png',
                },
                {
                  title: 'Skills Acquisition & Vocational Training',
                  description: 'Comprehensive skills training, vocational education, and economic empowerment initiatives that help individuals build sustainable livelihoods and achieve self-sufficiency.',
                  image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-CbUFPyjIKIdxRXNzEJILVOGJwmstY0.png',
                },
                {
                  title: 'Capacity Building & Entrepreneurship',
                  description: 'Long-term projects focused on capacity building, entrepreneurship development, empowerment and poverty alleviation, helping women and youths define and address their economic and financial challenges.',
                  image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-yWOcf6eDNiVWsdL9Uzn5ztlrlMlZhF.png',
                },
                {
                  title: 'Partnership & Advocacy',
                  description: 'Collaborating with government, NGOs, and international organizations through TELEPECON to amplify our impact and advocate for policy change that benefits the less privileged.',
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
