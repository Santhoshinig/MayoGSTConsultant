import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AuthModal } from "@/components/AuthModal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const services = [
    { name: "Income Tax Filing", href: "/services/itr" },
    { name: "GST Filing", href: "/services/gst" },
    { name: "Expert Assisted", href: "/services/expert" },
    { name: "Mayo CRM", href: "/crm" },
  ];

  const tools = [
    { name: "Tax Calculator", href: "/tools/tax-calculator" },
    { name: "HRA Calculator", href: "/tools/hra-calculator" },
    { name: "Old vs New Regime", href: "/tools/regime-comparison" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-lg">
              M
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-extrabold text-foreground tracking-tight">Mayon</span>
              <span className="text-xl font-medium text-primary ml-1">Consulting</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="gap-1">
                  Services <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48">
                {services.map((service) => (
                  <DropdownMenuItem key={service.name} asChild>
                    <Link to={service.href}>{service.name}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="gap-1">
                  Tools <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48">
                {tools.map((tool) => (
                  <DropdownMenuItem key={tool.name} asChild>
                    <Link to={tool.href}>{tool.name}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="ghost" asChild>
              <Link to="/pricing">Pricing</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/about">About</Link>
            </Button>
          </div>

          {/* CTA + Contact */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:9150166247"
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>9150166247</span>
            </a>
            <AuthModal defaultTab="login">
              <Button variant="outline">Login</Button>
            </AuthModal>
            <AuthModal defaultTab="signup">
              <Button>Get Started</Button>
            </AuthModal>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-border py-4 animate-fade-in">
            <div className="flex flex-col gap-2">
              <p className="px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Services</p>
              {services.map((service) => (
                <Link
                  key={service.name}
                  to={service.href}
                  className="px-4 py-2 text-sm hover:bg-muted rounded-md transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {service.name}
                </Link>
              ))}

              <p className="px-4 pt-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Tools</p>
              {tools.map((tool) => (
                <Link
                  key={tool.name}
                  to={tool.href}
                  className="px-4 py-2 text-sm hover:bg-muted rounded-md transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {tool.name}
                </Link>
              ))}

              <div className="border-t border-border mt-4 pt-4 px-4 flex flex-col gap-2">
                <a
                  href="tel:9150166247"
                  className="flex items-center gap-2 text-sm font-medium text-primary"
                >
                  <Phone className="h-4 w-4" />
                  <span>9150166247</span>
                </a>
                <div className="flex gap-2 mt-2">
                  <AuthModal defaultTab="login">
                    <Button variant="outline" className="flex-1 w-full">Login</Button>
                  </AuthModal>
                  <AuthModal defaultTab="signup">
                    <Button className="flex-1 w-full">Get Started</Button>
                  </AuthModal>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
