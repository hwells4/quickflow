import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { cn } from '@/src/lib/utils'; // cn might be useful for conditional classes in footer

export const Footer = () => {
  return (
    <footer className="border-t border-border/70 bg-background dark:bg-slate-900/50 dark:border-slate-700/80">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="md:col-span-1">
            <Link href="/" className="text-2xl font-semibold text-foreground transition-colors hover:text-primary" aria-label="QuickFlow Home">
              QuickFlow
            </Link>
            <p className="mt-3 text-base text-muted-foreground leading-relaxed">
              Effortless Expertise, Reliable Results.
            </p>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold text-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-base">
              <li><Link href="#features" className="text-muted-foreground hover:text-primary transition-colors">Features</Link></li>
              <li><Link href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">Pricing</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold text-foreground mb-4">
              Connect With Us
            </h4>
            <div className="flex justify-center md:justify-start space-x-5">
              <Link href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-12 md:mt-16 border-t border-border/70 dark:border-slate-700/80 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} QuickFlow. All rights reserved. Powered by Innovation.
          </p>
        </div>
      </div>
    </footer>
  );
}; 