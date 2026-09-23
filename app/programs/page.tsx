import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  GraduationCap,
  Sprout,
  Briefcase,
  HeartPulse,
  Award,
  ShieldCheck,
  Trees,
  Target,
  BarChart3,
  CheckCircle2,
  Database,
  Sparkles,
  Users,
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

export default function ProgramsPage() {
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
                Strategic Goals 2027–2037
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4 text-balance">
                Our Programs & Strategic Goals
              </h1>
              <p className="text-lg text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
                Delivering sustainable, evidence-based development outcomes across Nigeria through eight strategic goals, each anchored by rigorous 2037 targets and measurable performance indicators.
              </p>
            </div>
          </div>
        </section>

        {/* Strategic Ambition Overview Banner */}
        <section className="py-12 bg-muted/40 border-b">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-6 items-center">
              <div className="md:col-span-2 space-y-2">
                <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                  <Sparkles className="h-4 w-4" />
                  <span>2037 Strategic Impact Ambition</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  By 2037, MEWI will have directly reached and supported at least <strong className="text-foreground">20 million people</strong> across all 36 States + FCT, prioritizing girls, women, adolescents, youth, and vulnerable populations.
                </p>
              </div>
              <div className="flex justify-start md:justify-end gap-3">
                <Button variant="outline" size="sm" asChild>
                  <Link href="/about">View 10-Yr Roadmap</Link>
                </Button>
                <Button size="sm" asChild>
                  <Link href="/donate">Support Programs</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Goals Navigation Shortcuts */}
        <section className="py-8 bg-card border-b sticky top-[73px] z-40 shadow-xs backdrop-blur bg-background/95">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              <span className="text-xs font-semibold text-muted-foreground shrink-0 mr-2 uppercase tracking-wide">
                Jump to Goal:
              </span>
              {STRATEGY_DATA.strategicGoals.map((goal) => (
                <a
                  key={goal.id}
                  href={`#${goal.id}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border bg-secondary/50 hover:bg-primary hover:text-primary-foreground transition-colors shrink-0"
                >
                  <span>Goal {goal.number}:</span>
                  <span className="truncate max-w-[140px]">{goal.shortTitle}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Strategic Goals List */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-16">
            {STRATEGY_DATA.strategicGoals.map((goal, index) => {
              const IconComponent = goalIcons[goal.icon] || Target
              const isEven = index % 2 === 1

              return (
                <div
                  key={goal.id}
                  id={goal.id}
                  className="scroll-mt-36 rounded-2xl border bg-card overflow-hidden shadow-xs hover:shadow-md transition-shadow"
                >
                  {/* Goal Header */}
                  <div className="bg-primary/5 p-6 md:p-8 border-b">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                          <IconComponent className="h-7 w-7 text-primary" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <Badge className="bg-primary text-primary-foreground font-bold">
                              Strategic Goal {goal.number}
                            </Badge>
                            <span className="text-xs text-muted-foreground font-medium">Horizon: 2027–2037</span>
                          </div>
                          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                            {goal.title}
                          </h2>
                        </div>
                      </div>
                    </div>
                    {/* Goal Statement */}
                    <div className="mt-4 pt-4 border-t border-primary/10">
                      <p className="text-base sm:text-lg font-medium text-foreground/90 leading-relaxed">
                        <strong className="text-primary">Objective: </strong>
                        {goal.goal}
                      </p>
                    </div>
                  </div>

                  {/* Goal Body: Targets & KPIs */}
                  <div className="p-6 md:p-8">
                    <div className={`grid lg:grid-cols-12 gap-8 items-start`}>
                      {/* Image Preview (if present) */}
                      {goal.image && (
                        <div className="lg:col-span-4 relative h-64 lg:h-full min-h-[260px] rounded-xl overflow-hidden border">
                          <Image
                            src={goal.image}
                            alt={goal.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      )}

                      {/* Content Grid */}
                      <div className={`${goal.image ? 'lg:col-span-8' : 'lg:col-span-12'} grid md:grid-cols-2 gap-8`}>
                        {/* 2037 Targets */}
                        <div className="space-y-4">
                          <div className="flex items-center gap-2 pb-2 border-b">
                            <Target className="h-5 w-5 text-primary" />
                            <h3 className="font-bold text-lg text-foreground">2037 Targets</h3>
                          </div>
                          <ul className="space-y-3">
                            {goal.targets2037.map((target, tIdx) => (
                              <li key={tIdx} className="text-sm text-muted-foreground flex items-start gap-2.5 leading-relaxed">
                                <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                                <span>{target}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Key Performance Indicators */}
                        <div className="space-y-4">
                          <div className="flex items-center gap-2 pb-2 border-b">
                            <BarChart3 className="h-5 w-5 text-primary" />
                            <h3 className="font-bold text-lg text-foreground">Key Performance Indicators (KPIs)</h3>
                          </div>
                          <ul className="space-y-2.5">
                            {goal.kpis.map((kpi, kIdx) => (
                              <li key={kIdx} className="text-sm text-muted-foreground flex items-start gap-2 leading-relaxed bg-muted/30 p-2.5 rounded-lg border border-border/50">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                                <span className="font-medium text-foreground/90">{kpi}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* Measurement Principle Callout */}
        <section className="py-12 bg-muted/30 border-y">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <Card className="border-primary/30 shadow-xs">
              <CardContent className="p-8 flex flex-col sm:flex-row items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Database className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-foreground">
                    Measurement Principle & Beneficiary Tracking
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {STRATEGY_DATA.measurementPrinciple}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* TELEPECON Partnership */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[380px] rounded-2xl overflow-hidden border shadow-sm">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image.png-0wt2eX5EoEjxjkkflqLvhqCjLhbsxF.jpeg"
                  alt="TELEPECON Conference"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-6">
                <Badge variant="outline">Network & Collaborative Impact</Badge>
                <h2 className="text-3xl font-bold">TELEPECON Strategic Partnership</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    As an active member of <strong className="text-foreground">The Less Privilege Empowerment Coordinators Networking (TELEPECON)</strong>, MEWI collaborates with partner organizations across Nigeria to maximize reach and program effectiveness.
                  </p>
                  <p>
                    Through TELEPECON, we coordinate multi-state interventions, mobilize shared resources, advance national policy advocacy for vulnerable populations, and strengthen community-level implementation.
                  </p>
                </div>
                <div className="pt-2">
                  <Button asChild variant="outline">
                    <Link href="/about">Learn More About Our Network</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Support Our 2037 Strategic Goals</h2>
            <p className="text-lg mb-8 leading-relaxed text-primary-foreground/90">
              Your partnership accelerates high-impact programs in education, climate resilience, health, and economic empowerment across Nigeria.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/donate">Make a Donation</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
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
