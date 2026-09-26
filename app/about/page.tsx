import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Target,
  Eye,
  Award,
  Users,
  CheckCircle2,
  TrendingUp,
  MapPin,
  Calendar,
  Layers,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  GraduationCap,
  Sprout,
  Briefcase,
  HeartPulse,
  Trees,
  Database,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
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
              <Badge variant="secondary" className="mb-4 text-xs font-semibold uppercase tracking-wider">
                Strategic Horizon 2027–2037
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4 text-balance">About Us</h1>
              <p className="text-lg text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
                An indigenous Nigerian non-profit organization dedicated to fostering inclusive, resilient, and prosperous communities through evidence-based interventions in education, healthcare, sustainable agriculture, economic empowerment, and climate resilience.
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
                    <strong className="text-foreground">Mega Wake Up International Outreach (MEWI)</strong> is an indigenous Nigerian non-profit organization dedicated to improving access to qualitative healthcare, education, sustainable livelihoods, and economic strengthening services for Nigeria's most vulnerable populations.
                  </p>
                  <p>
                    As a registered Non-Governmental Organization with the Nigerian Corporate Affairs Commission (CAC/IT/NO85950), MEWI is committed to creating positive, measurable, and sustainable change in the lives of girls, women, young people, and marginalized communities nationwide.
                  </p>
                  <p>
                    Our comprehensive strategy is delivered across eight strategic goals, encompassing education and human capital development, climate-smart agriculture and food security, economic empowerment and job creation, public health and mental well-being, community leadership, social protection, safeguarding, and environmental sustainability.
                  </p>
                  <p>
                    We work collaboratively with government institutions, community leadership, development partners, and civil society networks—including <strong className="text-foreground">The Less Privilege Empowerment Coordinators Networking (TELEPECON)</strong>—to deliver high-impact interventions that integrate into national frameworks.
                  </p>
                </div>
              </div>
              <div className="relative h-[420px] rounded-2xl overflow-hidden shadow-lg border">
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
        <section className="py-20 bg-muted/30 border-y">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <Badge variant="outline" className="mb-2">Our Purpose</Badge>
              <h2 className="text-3xl font-bold">Guiding Principles & Foundation</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Mission */}
              <Card className="flex flex-col border-primary/20 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Our Mission</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-muted-foreground leading-relaxed">
                    {STRATEGY_DATA.mission}
                  </p>
                </CardContent>
              </Card>

              {/* Vision */}
              <Card className="flex flex-col border-primary/20 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                    <Eye className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Our Vision</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-muted-foreground leading-relaxed">
                    {STRATEGY_DATA.vision}
                  </p>
                </CardContent>
              </Card>

              {/* Shared Values */}
              <Card className="flex flex-col border-primary/20 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Our Shared Values</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    {STRATEGY_DATA.sharedValues.map((val) => (
                      <li key={val.title} className="text-sm">
                        <span className="font-semibold text-foreground flex items-center gap-1.5 mb-0.5">
                          <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                          {val.title}
                        </span>
                        <span className="text-muted-foreground pl-5 block text-xs leading-relaxed">
                          {val.description}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* 2037 Strategic Impact Ambition */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge className="mb-3 bg-primary text-primary-foreground">2037 Impact Ambition</Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                {STRATEGY_DATA.impactAmbition2037.title}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Setting a transformative benchmark for national social impact and sustainable community resilience over the decade.
              </p>
            </div>

            {/* Ambition Narrative Card */}
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 md:p-10 mb-12 shadow-sm">
              <div className="grid lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-2 space-y-4">
                  <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
                    <Sparkles className="h-6 w-6 text-primary" />
                    Reaching 20 Million+ Lives Across Nigeria
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {STRATEGY_DATA.impactAmbition2037.statement}
                  </p>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {STRATEGY_DATA.impactAmbition2037.partnershipStatement}
                  </p>
                </div>
                <div className="bg-background rounded-xl p-6 border shadow-sm flex flex-col justify-center items-center text-center">
                  <span className="text-5xl font-extrabold text-primary mb-1">20M+</span>
                  <span className="font-semibold text-foreground text-sm mb-2">Direct Beneficiaries Target</span>
                  <p className="text-xs text-muted-foreground">Focus on girls, women, youth, and vulnerable populations</p>
                </div>
              </div>
            </div>

            {/* Overall 2037 Targets Grid */}
            <div className="mb-12">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold">Overall 2037 Targets</h3>
                  <p className="text-sm text-muted-foreground">Key strategic indicators and 10-year organizational benchmarks</p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {STRATEGY_DATA.overallTargets2037.map((target, idx) => (
                  <Card key={idx} className="hover:border-primary/50 transition-colors">
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <span className="text-sm font-bold text-primary">{target.highlight}</span>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-foreground mb-1">{target.target}</div>
                        <div className="text-sm text-muted-foreground leading-snug">{target.indicator}</div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Measurement Principle Callout */}
            <div className="rounded-xl border border-primary/30 bg-card p-6 md:p-8 flex items-start gap-4 shadow-sm">
              <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
                <Database className="h-6 w-6" />
              </div>
              <div className="space-y-1">
                <h4 className="text-base font-semibold text-foreground">Measurement Principle & Data Integrity</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {STRATEGY_DATA.measurementPrinciple}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Strategic Implementation Framework */}
        <section className="py-20 bg-muted/30 border-y">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge variant="outline" className="mb-3">Strategic Implementation Framework</Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                Three Phases of Delivery (2027–2037)
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A structured, phased roadmap designed to ensure institutional resilience, national scaling, and long-term sustainability.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {STRATEGY_DATA.implementationFramework.map((phase, idx) => (
                <Card key={phase.phase} className="relative flex flex-col border-t-4 border-t-primary shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="font-semibold">{phase.phase}</Badge>
                      <span className="text-xs font-medium text-muted-foreground flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {phase.period}
                      </span>
                    </div>
                    <CardTitle className="text-xl leading-snug">{phase.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <ul className="space-y-2.5">
                      {phase.points.map((pt, pIdx) => (
                        <li key={pIdx} className="text-xs text-muted-foreground flex items-start gap-2 leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* 7 Strategic Goals / Focus Areas */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge variant="secondary" className="mb-3">Our Core Pillars</Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                Eight Strategic Goals in Action
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Each strategic goal delivers measurable development outcomes through dedicated 2037 targets and robust key performance indicators.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {STRATEGY_DATA.strategicGoals.map((goal) => {
                const IconComponent = goalIcons[goal.icon] || Target
                return (
                  <Card key={goal.id} className="flex flex-col hover:border-primary transition-colors">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between mb-2">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <IconComponent className="h-5 w-5 text-primary" />
                        </div>
                        <Badge variant="outline" className="text-xs">Goal {goal.number}</Badge>
                      </div>
                      <CardTitle className="text-lg leading-snug">{goal.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col justify-between">
                      <p className="text-sm text-muted-foreground line-clamp-3 mb-4 leading-relaxed">
                        {goal.goal}
                      </p>
                      <Button variant="ghost" size="sm" className="w-full justify-between p-0 hover:bg-transparent text-primary hover:text-primary/80" asChild>
                        <Link href={`/programs#${goal.id}`}>
                          <span>View Targets & KPIs</span>
                          <ArrowRight className="h-4 w-4 ml-1" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            <div className="text-center">
              <Button asChild size="lg">
                <Link href="/programs">
                  Explore All Strategic Goals & Performance Indicators <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Organizational Structure & Organogram */}
        <section id="organogram" className="py-20 bg-muted/30 border-t scroll-mt-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge className="mb-2 bg-primary text-primary-foreground">Institutional Governance</Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                Organizational Structure & Organogram
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Clear governance tiers from the Board of Trustees and Executive Leadership through six functional directorates, supporting units, and nationwide community presence.
              </p>
            </div>

            {/* Organogram Chart Card */}
            <div className="bg-card border rounded-2xl overflow-hidden shadow-sm mb-12">
              <div className="p-4 bg-muted/40 border-b flex items-center justify-between">
                <span className="font-semibold text-sm">Official MEWI Organogram Chart</span>
                <Button variant="outline" size="sm" asChild>
                  <a href="/images/organogram.png" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs">
                    <span>View High-Res Image</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </Button>
              </div>
              <div className="relative w-full bg-white p-4 flex items-center justify-center min-h-[350px]">
                <div className="relative w-full max-w-4xl h-[320px] sm:h-[460px] md:h-[560px]">
                  <Image
                    src="/images/organogram.png"
                    alt="MEWI Organogram"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Six Directorates Summary with Health, Nutrition & WASH */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              <Card className="border-primary/20 hover:border-primary/50 transition-colors">
                <CardHeader className="pb-2">
                  <Badge variant="secondary" className="w-fit text-[11px] mb-1">Directorate 1</Badge>
                  <CardTitle className="text-base font-bold">Programs & Humanitarian Services</CardTitle>
                  <p className="text-xs text-primary font-medium">Director: Prof. Sunday O. Awofisayo</p>
                </CardHeader>
                <CardContent className="pt-2">
                  <p className="text-xs text-muted-foreground mb-2">Key Supporting Units:</p>
                  <ul className="text-xs space-y-1 text-muted-foreground">
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      Programme Planning, Implementation & Quality Assurance
                    </li>
                    <li className="font-semibold text-primary flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      Humanitarian Response & Emergency Preparedness
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/60" />
                      Livelihoods, Agriculture & Agribusiness
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/60" />
                      Environmental Sustainability & Biodiversity Conservation
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/60" />
                      Community Development & Social Inclusion
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-primary/20 hover:border-primary/50 transition-colors">
                <CardHeader className="pb-2">
                  <Badge variant="secondary" className="w-fit text-[11px] mb-1">Directorate 2</Badge>
                  <CardTitle className="text-base font-bold">Finance & Operations</CardTitle>
                  <p className="text-xs text-primary font-medium">Director: Udeme Wilson Ekpo</p>
                </CardHeader>
                <CardContent className="pt-2">
                  <p className="text-xs text-muted-foreground mb-2">Key Supporting Units:</p>
                  <ul className="text-xs space-y-1 text-muted-foreground">
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/60" />
                      Financial Management & Reporting
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/60" />
                      Procurement & Supply Chain
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/60" />
                      Human Resources & Administration
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/60" />
                      ICT & Digital Services
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-primary/20 hover:border-primary/50 transition-colors">
                <CardHeader className="pb-2">
                  <Badge variant="secondary" className="w-fit text-[11px] mb-1">Directorate 3</Badge>
                  <CardTitle className="text-base font-bold">Governance, Compliance, Audit & Legal</CardTitle>
                  <p className="text-xs text-primary font-medium">Director: Chief Henry Akpan Obot</p>
                </CardHeader>
                <CardContent className="pt-2">
                  <p className="text-xs text-muted-foreground mb-2">Key Supporting Units:</p>
                  <ul className="text-xs space-y-1 text-muted-foreground">
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/60" />
                      Board Support & Corporate Governance
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/60" />
                      Compliance & Ethics
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/60" />
                      Internal Audit & Risk Management
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/60" />
                      Safeguarding & Child Protection
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Button asChild variant="outline">
                <Link href="/team#organogram">
                  <span>View All 6 Directorates & Complete Governance Details</span>
                  <ArrowRight className="ml-1.5 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Partnerships */}
        <section className="py-20 bg-card border-t">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">Our Partnerships</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                MEWI is a proud member of The Less Privilege Empowerment Coordinators Networking (TELEPECON), working alongside organizations across Nigeria to maximize our collective impact.
              </p>
            </div>
            <Card className="max-w-3xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4">TELEPECON Strategic Member</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  As an active member of TELEPECON, we collaborate with fellow non-profit organizations dedicated to empowering underprivileged communities. This network enables us to:
                </p>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span>Share best practices, research, and intervention resources</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span>Coordinate large-scale, multi-state humanitarian and development interventions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span>Amplify national policy advocacy for girls, youth, and persons with disabilities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span>Access continuous institutional capacity development and training</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span>Participate in national and international development forums</span>
                  </li>
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
