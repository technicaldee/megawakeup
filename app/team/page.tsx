import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { leadership, teamMembers, boardOfTrustees, truncateText } from '@/lib/team-data'
import { ORGANOGRAM_DATA } from '@/lib/organogram-data'
import {
  Shield,
  Award,
  Users,
  Briefcase,
  Layers,
  MapPin,
  ExternalLink,
  CheckCircle2,
  HeartHandshake,
  ArrowRight,
} from 'lucide-react'

export default function TeamPage() {
  // Separate director leadership from other team members
  const directorSlugs = ['prof-sunday-o-awofisayo', 'udeme-wilson-ekpo', 'chief-henry-akpan-obot']
  const directors = teamMembers.filter((m) => directorSlugs.includes(m.slug))
  const operationalTeam = teamMembers.filter((m) => !directorSlugs.includes(m.slug) && m.name && m.name.trim())

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
                Leadership & Governance Structure
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4 text-balance">Our Team</h1>
              <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
                Meet the dedicated leadership, directors, and professionals driving evidence-based development across Nigeria
              </p>
              <div className="mt-6 flex justify-center gap-3">
                <Button variant="outline" size="sm" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                  <a href="#organogram">View Organogram</a>
                </Button>
                <Button variant="secondary" size="sm" asChild>
                  <a href="#directors">Directorate Leadership</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Executive Leadership (Founder & CEO) */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-2">Executive Office</Badge>
              <h2 className="text-3xl font-bold mb-4">Founder & Chief Executive Officer</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Visionary leadership committed to making a measurable, lasting impact
              </p>
            </div>
            <div className="max-w-3xl mx-auto">
              {leadership.filter(member => member.name && member.name.trim()).map((member) => (
                <Card key={member.name} className="overflow-hidden border-primary/20 shadow-md">
                  <div className="md:flex">
                    <div className="relative md:w-2/5 h-72 md:h-auto">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="md:w-3/5 p-8 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="secondary" className="text-xs">Executive Leadership</Badge>
                        </div>
                        <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                        <p className="text-primary font-semibold mb-4">{member.role}</p>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                          {truncateText(member.bio, 260)}
                        </p>
                      </div>
                      <div>
                        <Button asChild size="sm">
                          <Link href={`/team/${member.slug}`}>
                            Read Full Profile <ArrowRight className="ml-1.5 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Directorate Leadership */}
        <section id="directors" className="py-20 bg-muted/30 border-y scroll-mt-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-2">Executive Directors</Badge>
              <h2 className="text-3xl font-bold mb-4">Directorate Leadership</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Heads of key operational and governance directorates driving nationwide execution
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {directors.map((director) => (
                <Card key={director.name} className="flex flex-col overflow-hidden hover:shadow-lg transition-shadow border-primary/20">
                  <div className="relative h-64 w-full bg-muted">
                    {director.image ? (
                      <Image
                        src={director.image}
                        alt={director.name}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-primary/10">
                        <span className="text-3xl font-bold text-primary">
                          {director.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                        </span>
                      </div>
                    )}
                  </div>
                  <CardContent className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-xl mb-1 text-foreground">{director.name}</h3>
                      <p className="text-sm font-semibold text-primary mb-3 leading-snug">{director.role}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {truncateText(director.bio, 140)}
                      </p>
                    </div>
                    <Button asChild variant="outline" size="sm" className="w-full justify-between">
                      <Link href={`/team/${director.slug}`}>
                        <span>Full Biography</span>
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ORGANOGRAM SECTION */}
        <section id="organogram" className="py-20 scroll-mt-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge className="mb-2 bg-primary text-primary-foreground">Institutional Governance</Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                {ORGANOGRAM_DATA.title}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {ORGANOGRAM_DATA.subtitle}
              </p>
            </div>

            {/* Organogram Image Display */}
            <div className="mb-16 bg-card border rounded-2xl overflow-hidden shadow-sm">
              <div className="p-4 bg-muted/40 border-b flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Layers className="h-5 w-5 text-primary" />
                  <span className="font-semibold text-sm">Official Organizational Chart</span>
                </div>
                <Button variant="outline" size="sm" asChild>
                  <a href={ORGANOGRAM_DATA.image} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs">
                    <span>Open Full Size</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </Button>
              </div>
              <div className="relative w-full bg-white p-4 flex items-center justify-center min-h-[400px]">
                <div className="relative w-full max-w-5xl h-[340px] sm:h-[480px] md:h-[620px]">
                  <Image
                    src={ORGANOGRAM_DATA.image}
                    alt="MEWI Official Organogram Chart"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
              <div className="p-4 bg-muted/20 border-t text-xs text-muted-foreground text-center">
                Organogram depicting the Board of Trustees, Executive Management, Six Directorates, and 36 States + FCT National Spread.
              </div>
            </div>

            {/* Six Directorates & Supporting Units Breakdown */}
            <div className="mb-16">
              <div className="text-center max-w-2xl mx-auto mb-10">
                <h3 className="text-2xl font-bold">Six Operational & Governance Directorates</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Structured supporting units driving programmatic execution, compliance, and community impact
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {ORGANOGRAM_DATA.directorates.map((directorate) => (
                  <Card key={directorate.id} className="flex flex-col border-primary/20 hover:border-primary/50 transition-colors shadow-xs">
                    <CardHeader className="pb-3 border-b bg-muted/20">
                      <div className="flex items-center justify-between mb-1">
                        <Badge variant="secondary" className="text-[11px] font-semibold">
                          Directorate
                        </Badge>
                        {directorate.lead && (
                          <span className="text-[11px] text-primary font-medium">
                            {directorate.lead.name.split(' ')[0]} {directorate.lead.name.split(' ').slice(-1)[0]}
                          </span>
                        )}
                      </div>
                      <CardTitle className="text-lg leading-snug">{directorate.name}</CardTitle>
                      {directorate.lead && (
                        <p className="text-xs text-muted-foreground">
                          Led by <strong className="text-foreground">{directorate.lead.name}</strong> ({directorate.lead.role})
                        </p>
                      )}
                    </CardHeader>
                    <CardContent className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
                          Supporting Units:
                        </h4>
                        <ul className="space-y-2">
                          {directorate.supportingUnits.map((unit, uIdx) => {
                            const isNewUnit = unit === 'Health, Nutrition & WASH'
                            return (
                              <li
                                key={uIdx}
                                className={`text-xs flex items-start gap-2 leading-relaxed p-1.5 rounded-md ${
                                  isNewUnit
                                    ? 'bg-primary/10 text-primary font-semibold border border-primary/20'
                                    : 'text-muted-foreground'
                                }`}
                              >
                                <span className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${isNewUnit ? 'bg-primary' : 'bg-primary/60'}`} />
                                <span>{unit}</span>
                                {isNewUnit && (
                                  <Badge className="ml-auto text-[9px] py-0 px-1 bg-primary text-primary-foreground">
                                    Featured Unit
                                  </Badge>
                                )}
                              </li>
                            )
                          })}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* National Spread Banner */}
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 shadow-xs">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">{ORGANOGRAM_DATA.nationalSpread.title}</h3>
                  <p className="text-xs text-muted-foreground">{ORGANOGRAM_DATA.nationalSpread.description}</p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {ORGANOGRAM_DATA.nationalSpread.zones.map((zone) => (
                  <div key={zone.zone} className="bg-background rounded-xl p-4 border text-xs shadow-2xs">
                    <div className="font-bold text-primary mb-1">{zone.zone}</div>
                    <div className="text-muted-foreground">{zone.states}</div>
                    <div className="mt-2 text-[10px] text-muted-foreground/80 border-t pt-1">
                      State Offices / Field Units • Community Volunteers
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center mt-6 text-xs text-muted-foreground font-medium">
                Communities • Beneficiaries • A Stronger Nigeria
              </div>
            </div>
          </div>
        </section>

        {/* Board of Trustees */}
        <section className="py-20 bg-muted/30 border-y">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-2">Oversight & Fiduciary</Badge>
              <h2 className="text-3xl font-bold mb-4">Board of Trustees</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Providing strategic governance and guidance with wisdom and dedication
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {boardOfTrustees.filter(trustee => trustee.name && trustee.name.trim()).map((trustee) => (
                <Card key={trustee.name}>
                  <CardContent className="p-6 text-center">
                    <div className="w-20 h-20 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                      <span className="text-xl font-bold text-primary">
                        {trustee.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                      </span>
                    </div>
                    <h3 className="font-semibold text-base mb-1">{trustee.name}</h3>
                    <p className="text-xs text-primary">{trustee.role}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Management & Operational Officers */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-2">Operational Team</Badge>
              <h2 className="text-3xl font-bold mb-4">Management & Departmental Heads</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Experienced professionals managing technical programs, compliance, healthcare, and administration
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {operationalTeam.map((member) => (
                <Card key={member.name} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6 text-center flex flex-col justify-between h-full">
                    <div>
                      {member.image ? (
                        <div className="relative w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden border">
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
                            {member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                          </span>
                        </div>
                      )}
                      <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                      <p className="text-xs text-primary font-medium mb-3">{member.role}</p>
                      <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                        {truncateText(member.bio, 120)}
                      </p>
                    </div>
                    <Button asChild variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                      <Link href={`/team/${member.slug}`}>
                        Read Profile →
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Photos */}
        <section className="py-20 bg-muted/30 border-t">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Team in Action</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Working together across states to transform communities and deliver sustainable outcomes
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-yWOcf6eDNiVWsdL9Uzn5ztlrlMlZhF.png',
                'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-mMyq0GZiJezuKufiaKZxkxnsSw1rxO.png',
                'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image.png-0wt2eX5EoEjxjkkflqLvhqCjLhbsxF.jpeg',
                'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-CbUFPyjIKIdxRXNzEJILVOGJwmstY0.png',
              ].map((image, index) => (
                <div key={index} className="relative h-80 rounded-xl overflow-hidden border shadow-xs">
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
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Growing Team</h2>
            <p className="text-lg mb-8 leading-relaxed text-primary-foreground/90">
              We are constantly seeking dedicated professionals, field volunteers, and strategic partners to advance our 2037 strategic goals.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/volunteer">Become a Volunteer</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <Link href="/contact">Contact Our Office</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
