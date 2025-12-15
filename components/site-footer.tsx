import Link from 'next/link'
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from 'lucide-react'
import Image from 'next/image'

export function SiteFooter() {
  return (
    <footer className="border-t bg-card">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-fxsuM1giKTqf5k7NM2nQAWoZZvKAy6.png"
              alt="MEWI Logo"
              width={80}
              height={80}
              className="h-20 w-auto"
            />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Creating an independent organization that focuses on providing emergency relief quickly, effectively, and without impartiality through poverty alleviation.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/programs" className="text-muted-foreground hover:text-primary transition-colors">Our Programs</Link></li>
              <li><Link href="/team" className="text-muted-foreground hover:text-primary transition-colors">Our Team</Link></li>
              <li><Link href="/gallery" className="text-muted-foreground hover:text-primary transition-colors">Gallery</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Get Involved</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/donate" className="text-muted-foreground hover:text-primary transition-colors">Donate</Link></li>
              <li><Link href="/volunteer" className="text-muted-foreground hover:text-primary transition-colors">Volunteer</Link></li>
              <li><Link href="/partner" className="text-muted-foreground hover:text-primary transition-colors">Partner With Us</Link></li>
              <li><Link href="/events" className="text-muted-foreground hover:text-primary transition-colors">Events</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 shrink-0 mt-0.5" />
                <span>Suite A11 Maigari Plaza, Life Camp, Opp. Kado Fish Market, Abuja</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 shrink-0" />
                <span>+234 (0) 8033780633, +234 (0) 8077827838</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 shrink-0" />
                <span>info@megawakeupinternational.org.ng</span>
              </li>
            </ul>
            <div className="flex gap-4 mt-4">
              <Link href="https://x.com/megawake_up" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="https://www.instagram.com/megawakeup/" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Mega Wake Up International (MEWI). All rights reserved. Member of TELEPECON.</p>
        </div>
      </div>
    </footer>
  )
}
