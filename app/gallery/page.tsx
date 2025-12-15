import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import Image from 'next/image'

export default function GalleryPage() {
  const galleryImages = [
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ows6olFq8UrcG1JR94HSVmIrqg9yl5.png',
      title: 'MEWI Programs Overview',
      category: 'General',
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MRRFGtuqCM94ocrKTTKsiCM3yoyR9o.png',
      title: 'COVID-19 Relief Distribution',
      category: 'Emergency Relief',
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TSgZ5VNH3eC8Ch4jbWx7usKt6XWut4.png',
      title: 'Palliative Support Program',
      category: 'Emergency Relief',
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-yWOcf6eDNiVWsdL9Uzn5ztlrlMlZhF.png',
      title: 'Team at Community Event',
      category: 'Community Outreach',
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-mMyq0GZiJezuKufiaKZxkxnsSw1rxO.png',
      title: 'Team Group Photo',
      category: 'Team',
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image.png-0wt2eX5EoEjxjkkflqLvhqCjLhbsxF.jpeg',
      title: 'TELEPECON Conference',
      category: 'Partnerships',
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-CbUFPyjIKIdxRXNzEJILVOGJwmstY0.png',
      title: 'Universal Collateral Event',
      category: 'Programs',
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-fxsuM1giKTqf5k7NM2nQAWoZZvKAy6.png',
      title: 'MEWI Logo',
      category: 'Branding',
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Rhsb2grF3V5yuUctBKDBAIp3iIIrLG.png',
      title: 'Executive Director',
      category: 'Leadership',
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
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4 text-balance">Gallery</h1>
              <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
                Witness the impact of our work through photos from the field
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="group relative aspect-square overflow-hidden rounded-lg bg-muted"
                >
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <p className="text-xs font-medium text-white/80 mb-1">{image.category}</p>
                      <h3 className="text-sm font-semibold">{image.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-muted/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">What People Say</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Hear from the communities and individuals we've had the privilege to serve
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  quote: "MEWI's support during the COVID-19 pandemic was a lifeline for our community. The relief packages provided essential supplies when we needed them most.",
                  name: "Community Leader",
                  location: "Abuja",
                },
                {
                  quote: "The skills training program changed my life. I now have a sustainable business that supports my family. Thank you MEWI!",
                  name: "Program Beneficiary",
                  location: "Life Camp",
                },
                {
                  quote: "Working with MEWI through TELEPECON has amplified our collective impact. Their dedication and professionalism are exemplary.",
                  name: "Partner Organization",
                  location: "Nigeria",
                },
              ].map((testimonial, index) => (
                <div key={index} className="bg-card p-6 rounded-lg">
                  <p className="text-muted-foreground mb-4 leading-relaxed italic">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
