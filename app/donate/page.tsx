import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Heart, Users, Gift, Building2 } from 'lucide-react'

export default function DonatePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-primary text-primary-foreground py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-accent/30" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4 text-balance">Make a Difference Today</h1>
              <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
                Your generous donation helps us provide emergency relief and empower communities across Nigeria
              </p>
            </div>
          </div>
        </section>

        {/* Ways to Give */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Ways to Give</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Choose how you'd like to support our mission
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Heart,
                  title: 'One-Time Donation',
                  description: 'Make a single donation to support our ongoing programs',
                },
                {
                  icon: Users,
                  title: 'Monthly Giving',
                  description: 'Join our community of monthly donors for sustained impact',
                },
                {
                  icon: Gift,
                  title: 'In-Kind Donations',
                  description: 'Donate goods, supplies, or services to our programs',
                },
                {
                  icon: Building2,
                  title: 'Corporate Partnership',
                  description: 'Partner with us through corporate social responsibility',
                },
              ].map((option) => (
                <Card key={option.title} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <option.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{option.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{option.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Impact of Donations */}
        <section className="py-20 bg-muted/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Your Impact</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                See how your donation makes a real difference
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  amount: '₦5,000',
                  impact: 'Provides emergency food supplies for a family of 5 for one week',
                },
                {
                  amount: '₦20,000',
                  impact: 'Supports skills training for one beneficiary to start a new livelihood',
                },
                {
                  amount: '₦50,000',
                  impact: 'Funds a complete COVID-19 relief package for 10 households',
                },
              ].map((item) => (
                <Card key={item.amount}>
                  <CardContent className="p-6">
                    <div className="text-2xl font-bold text-primary mb-3">{item.amount}</div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.impact}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Donation Information */}
        <section className="py-20">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-center">How to Donate</h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Bank Transfer</h3>
                    <p className="text-sm">
                      Please contact us for our bank account details to make a direct transfer. Email us at lmembassy25@gmail.com or call 08171656054.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">In-Person Donation</h3>
                    <p className="text-sm">
                      Visit our office at Suite A11 Maigari Plaza, Life Camp, Opp. Kado Fish Market, Abuja during office hours (Monday - Friday: 9:00 AM - 5:00 PM).
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">In-Kind Donations</h3>
                    <p className="text-sm">
                      If you'd like to donate goods or supplies, please contact us to arrange delivery or pickup. We accept food items, clothing, educational materials, and other essential supplies.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Corporate Partnerships</h3>
                    <p className="text-sm">
                      For corporate donations or partnership inquiries, please reach out to our team to discuss how your organization can make an impact.
                    </p>
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <Button size="lg" asChild>
                    <a href="/contact">Contact Us to Donate</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Tax Information */}
        <section className="py-20 bg-accent text-accent-foreground">
          <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Transparency & Accountability</h2>
            <p className="leading-relaxed mb-6">
              Mega Wake Up International is committed to the highest standards of financial transparency. All donations are used directly for our programs and administrative costs are kept minimal.
            </p>
            <p className="text-sm">
              For inquiries about financial reports or how donations are used, please contact us at lmembassy25@gmail.com.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
