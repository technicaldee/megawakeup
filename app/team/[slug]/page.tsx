import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import Link from 'next/link'
import { getTeamMemberBySlug, getAllTeamMembers } from '@/lib/team-data'
import { notFound } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import type { Metadata } from 'next'

export async function generateStaticParams() {
  const members = getAllTeamMembers()
  return members.map((member) => ({
    slug: member.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const member = getTeamMemberBySlug(slug)
  if (!member) {
    return {
      title: 'Profile Not Found | Mega Wake-Up International',
    }
  }
  return {
    title: `${member.name} - Profile | Mega Wake-Up International`,
    description: member.bio.slice(0, 160).trim() + '...',
  }
}

export default async function TeamMemberBioPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const member = getTeamMemberBySlug(slug)

  if (!member) {
    notFound()
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-primary text-primary-foreground py-14">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-accent/30" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <Button
                variant="outline"
                size="sm"
                className="mb-6 bg-background/10 border-background/20 text-background hover:bg-background/20"
                asChild
              >
                <Link href="/team">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back to Team & Governance
                </Link>
              </Button>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-2 text-balance">{member.name}</h1>
              <p className="text-base sm:text-lg text-primary-foreground/90 font-medium">{member.role}</p>
            </div>
          </div>
        </section>

        {/* Bio Section */}
        <section className="py-14 bg-muted/20">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <Card className="border-primary/20 shadow-md overflow-hidden">
              <CardContent className="p-6 sm:p-10">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  {member.image ? (
                    <div className="relative w-full sm:w-72 md:w-80 h-80 sm:h-96 md:h-[430px] flex-shrink-0 mx-auto md:mx-0 rounded-xl overflow-hidden border border-primary/20 shadow-xs">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                  ) : (
                    <div className="w-full sm:w-72 md:w-80 h-80 sm:h-96 md:h-[430px] flex-shrink-0 mx-auto md:mx-0 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <span className="text-4xl font-bold text-primary">
                        {member.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                      </span>
                    </div>
                  )}
                  <div className="flex-1 w-full">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="secondary" className="text-xs">
                        Profile & Biography
                      </Badge>
                    </div>
                    <h2 className="text-2xl font-bold mb-4 text-foreground">About {member.name}</h2>
                    <div className="prose prose-sm max-w-none">
                      <p className="text-muted-foreground leading-relaxed whitespace-pre-line text-sm sm:text-base">
                        {member.bio}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

