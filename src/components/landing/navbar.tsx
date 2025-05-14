import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from '@/src/components/Button'; // Assuming Button is in src/components
import { cn } from '@/src/lib/utils';

export const Navbar = () => {
  // TODO: Implement mobile menu toggle functionality
  // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-sm">
      <div className="container-custom flex h-20 items-center justify-between"> {/* Increased height slightly for better spacing (h-16 to h-20 -> 80px) */}
        <Link
          href="/"
          className="text-2xl font-semibold text-foreground transition-colors hover:text-primary" // Primary accent for hover
          aria-label="QuickFlow Home"
        >
          QuickFlow
        </Link>
        <div className="hidden items-center space-x-8 md:flex"> {/* Increased spacing for clarity (space-x-6 to space-x-8) */}
          <Link
            href="#features"
            className="text-base font-normal text-muted-foreground transition-colors hover:text-primary"
          >
            Features
          </Link>
          <Link
            href="#pricing"
            className="text-base font-normal text-muted-foreground transition-colors hover:text-primary"
          >
            Pricing
          </Link>
          <Link
            href="/blog" // Assuming a blog page
            className="text-base font-normal text-muted-foreground transition-colors hover:text-primary"
          >
            Blog
          </Link>
          <Button variant="default" size="default" asChild> {/* Default size is often better for nav CTA */}
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label="Toggle menu"
          // onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </Button>
      </div>
      {/* Mobile Menu Placeholder - to be implemented */}
      {/* {isMobileMenuOpen && (
        <div className="md:hidden border-t border-border/40 bg-background/95">
          <div className="container-custom flex flex-col space-y-4 py-4">
            <Link href="#features" className="text-base font-normal text-muted-foreground transition-colors hover:text-primary block">Features</Link>
            <Link href="#pricing" className="text-base font-normal text-muted-foreground transition-colors hover:text-primary block">Pricing</Link>
            <Link href="/blog" className="text-base font-normal text-muted-foreground transition-colors hover:text-primary block">Blog</Link>
            <Button variant="default" size="default" asChild className="w-full">
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>
        </div>
      )} */}
    </nav>
  );
}; 