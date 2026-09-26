import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { leadership, teamMembers, boardOfTrustees, truncateText, getAllTeamMembers } from '@/lib/team-data'
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
  FileText,
  UserCheck,
} from 'lucide-react'

export default function TeamPage() {
  // Separate director leadership from other team members
  const directorSlugs = ['prof-sunday-o-awofisayo', 'udeme-wilson-ekpo', 'chief-henry-akpan-obot']
  const directors = teamMembers.filter((m) => directorSlugs.includes(m.slug))
  const unitHeads = teamMembers.filter((m) => !directorSlugs.includes(m.slug) && m.name && m.name.trim())
  const allMembers = getAllTeamMembers()

  // Helper to match trustee with photo if available
  const getTrusteePhoto = (trusteeName: string) => {
    const normalized = trusteeName.toLowerCase()
    if (normalized.includes('inemesit')) return '/images/ceo1.png'
    if (normalized.includes('udeme')) return '/images/udeme.png'
    if (normalized.includes('awofisayo')) return '/images/sunday.png'
    return null
  }

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
                Organizational Hierarchy & Governance
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4 text-balance">Our Team & Governance</h1>
              <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
                Structured leadership tiers driving accountability, high-impact humanitarian action, and sustainable community empowerment across Nigeria
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-2.5">
                <Button variant="outline" size="sm" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                  <a href="#bot">1. BOT</a>
                </Button>
                <Button variant="outline" size="sm" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                  <a href="#executive">2. Executive Management</a>
                </Button>
                <Button variant="outline" size="sm" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                  <a href="#directorates">3. Six Directorates</a>
                </Button>
                <Button variant="outline" size="sm" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                  <a href="#unit-heads">4. Unit Heads</a>
                </Button>
                <Button variant="secondary" size="sm" asChild>
                  <a href="#organogram">View Organogram</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 1) BOARD OF TRUSTEES (BOT) */}
        <section id="bot" className="py-20 scroll-mt-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-2">Tier 1: Governance & Oversight</Badge>
              <h2 className="text-3xl font-bold mb-4">1. Board of Trustees (BOT)</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Provides strategic direction, policy governance, and fiduciary oversight to ensure the highest institutional integrity and sustainable impact.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
              {boardOfTrustees.filter(trustee => trustee.name && trustee.name.trim()).map((trustee) => {
                const photo = getTrusteePhoto(trustee.name)
                return (
                  <Card key={trustee.name} className="border-primary/20 hover:border-primary/50 transition-all hover:shadow-md flex flex-col justify-between">
                    <CardContent className="p-6 text-center flex flex-col items-center justify-between h-full">
                      <div>
                        {photo ? (
                          <div className="relative w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden border-2 border-primary/20 shadow-xs">
                            <Image
                              src={photo}
                              alt={trustee.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                        ) : (
                          <div className="w-24 h-24 rounded-full bg-primary/10 border-2 border-primary/20 mx-auto mb-4 flex items-center justify-center">
                            <span className="text-2xl font-bold text-primary">
                              {trustee.name.split(' ').filter(n => !n.includes('.') && n.length > 1).map(n => n[0]).join('').slice(0, 2) || trustee.name.slice(0, 2)}
                            </span>
                          </div>
                        )}
                        <h3 className="font-semibold text-base mb-1 text-foreground leading-snug">{trustee.name}</h3>
                        <Badge variant="secondary" className="text-[11px] font-medium text-primary mt-1">
                          {trustee.role}
                        </Badge>
                      </div>
                      <div className="mt-4 pt-3 border-t w-full text-center">
                        <span className="text-[11px] text-muted-foreground">Board Member</span>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* 2) EXECUTIVE MANAGEMENT */}
        <section id="executive" className="py-20 bg-muted/30 border-y scroll-mt-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-2">Tier 2: Executive Leadership</Badge>
              <h2 className="text-3xl font-bold mb-4">2. Executive Management</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Overall organizational leadership, strategy formulation, administrative support, and day-to-day operational execution.
              </p>
            </div>

            {/* CEO / MD Primary Card */}
            <div className="max-w-4xl mx-auto mb-10">
              {leadership.filter(member => member.name && member.name.trim()).map((member) => (
                <Card key={member.name} className="overflow-hidden border-primary/30 shadow-md">
                  <div className="md:flex">
                    <div className="relative md:w-2/5 h-80 md:h-auto bg-muted">
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
                          <span className="text-xs font-semibold text-primary">Chief Executive</span>
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-bold mb-1 text-foreground">{member.name}</h3>
                        <p className="text-primary font-semibold text-base mb-4">Chief Executive Officer / Managing Director (CEO/MD)</p>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                          {truncateText(member.bio, 260)}
                        </p>
                      </div>
                      <div className="pt-2">
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

            {/* Secretary & DMD Grid */}
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Card className="border-primary/20 bg-background hover:border-primary/50 transition-colors shadow-xs">
                <CardHeader className="pb-3 border-b bg-primary/5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      <FileText className="h-5 w-5" />
                    </div>
                    <div>
                      <Badge variant="secondary" className="text-[11px] mb-1">Executive Support</Badge>
                      <CardTitle className="text-lg">Office of the Secretary to the NGO</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-sm text-foreground font-medium mb-2">
                    Executive Secretarial & Administrative Support
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Provides official secretarial and administrative support directly to the MD/CEO. Coordinates board communications, statutory compliance records, institutional correspondence, and executive meeting governance.
                  </p>
                  <div className="mt-4 pt-3 border-t text-[11px] text-primary font-semibold flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    Directly reporting to the MD/CEO
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20 bg-background hover:border-primary/50 transition-colors shadow-xs">
                <CardHeader className="pb-3 border-b bg-primary/5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      <Users className="h-5 w-5" />
                    </div>
                    <div>
                      <Badge variant="secondary" className="text-[11px] mb-1">Operations Oversight</Badge>
                      <CardTitle className="text-lg">Deputy Managing Director (DMD)</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-sm text-foreground font-medium mb-2">
                    Operational Co-ordination & Day-to-Day Operations
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Supports the CEO/MD and directly oversees day-to-day operations across all six directorates, ensuring cross-functional alignment, field team efficiency, and swift program implementation.
                  </p>
                  <div className="mt-4 pt-3 border-t text-[11px] text-primary font-semibold flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    Supervising Directorate Operations
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* 3) SIX DIRECTORATES */}
        <section id="directorates" className="py-20 scroll-mt-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-2">Tier 3: Strategic & Technical Directorate Leadership</Badge>
              <h2 className="text-3xl font-bold mb-4">3. Six Directorates</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Core operational and governance directorates driving nationwide programmatic execution, financial accountability, and community impact.
              </p>
            </div>

            {/* Directorate Leadership Profiles */}
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
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

            {/* ORGANOGRAM SECTION EMBEDDED UNDER DIRECTORATES */}
            <div id="organogram" className="scroll-mt-20">
              {/* Organogram Image Display */}
              <div className="mb-16 bg-card border rounded-2xl overflow-hidden shadow-sm">
                <div className="p-4 bg-muted/40 border-b flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <Layers className="h-5 w-5 text-primary" />
                    <span className="font-semibold text-sm">Official MEWI Organogram Chart (with Office of the Secretary)</span>
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
                  Hierarchical Organogram depicting the Board of Trustees, Executive Management (with Secretary to the NGO & DMD), Six Directorates, and 36 States + FCT National Spread.
                </div>
              </div>

              {/* Six Directorates & Supporting Units Breakdown Cards */}
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
                            {directorate.supportingUnits.map((unit, uIdx) => (
                              <li
                                key={uIdx}
                                className="text-xs flex items-start gap-2 leading-relaxed p-1.5 rounded-md text-muted-foreground"
                              >
                                <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 bg-primary/70" />
                                <span>{unit}</span>
                              </li>
                            ))}
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
                        State Office / Field Units • Community Volunteers
                      </div>
                    </div>
                  ))}
                </div>
                <div className="text-center mt-6 text-xs text-muted-foreground font-medium">
                  Communities • Beneficiaries • A Stronger Nigeria
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4) UNIT HEADS */}
        <section id="unit-heads" className="py-20 bg-muted/30 border-y scroll-mt-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-2">Tier 4: Supporting Units</Badge>
              <h2 className="text-3xl font-bold mb-4">4. Unit Heads & Management</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Experienced professionals and unit leads driving technical operations across emergency preparedness, human resources, compliance, diagnostics, and general administration.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {unitHeads.map((member) => (
                <Card key={member.name} className="hover:shadow-md transition-shadow border-primary/20">
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
                      <h3 className="font-semibold text-lg mb-1 text-foreground">{member.name}</h3>
                      <p className="text-xs text-primary font-semibold mb-3">{member.role}</p>
                      <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                        {truncateText(member.bio, 130)}
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
        <section className="py-20 border-t">
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
