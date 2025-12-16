import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'
import { getTeamMemberBySlug, getAllTeamMembers } from '@/lib/team-data'
import { notFound } from 'next/navigation'
import { Button } from '@/components/ui/button'

export async function generateStaticParams() {
  const members = getAllTeamMembers()
  return members.map((member) => ({
    slug: member.slug,
  }))
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
        <section className="relative bg-primary text-primary-foreground py-12">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-accent/30" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center">
              <Link href="/team">
                <Button variant="outline" className="mb-6 bg-background/10 border-background/20 text-background hover:bg-background/20">
                  ← Back to Team
                </Button>
              </Link>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-2">{member.name}</h1>
              <p className="text-lg text-primary-foreground/90">{member.role}</p>
            </div>
          </div>
        </section>

        {/* Bio Section */}
        <section className="py-12">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <Card>
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-8">
                  {member.image && (
                    <div className="relative w-full md:w-64 h-64 md:h-auto flex-shrink-0">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                  )}
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-4">Biography</h2>
                    <div className="prose prose-sm max-w-none">
                      <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
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
