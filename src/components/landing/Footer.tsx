import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const services = [
    { name: "Income Tax Filing", href: "/services/itr" },
    { name: "GST Filing", href: "/services/gst" },
    { name: "Expert Assisted", href: "/services/expert" },
    { name: "Mayo CRM", href: "/crm" },
  ];

  const tools = [
    { name: "Tax Calculator", href: "/tools/tax-calculator" },
    { name: "HRA Calculator", href: "/tools/hra-calculator" },
    { name: "Regime Comparison", href: "/tools/regime-comparison" },
    { name: "EMI Calculator", href: "/tools/emi-calculator" },
  ];

  const company = [
    { name: "About Us", href: "/about" },
    { name: "Pricing", href: "/pricing" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const legal = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Refund Policy", href: "/refund" },
  ];

  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-xl">
                M
              </div>
              <div>
                <span className="text-xl font-bold text-background">The Mayo</span>
                <span className="text-xl font-medium text-primary"> Consultant</span>
              </div>
            </Link>
            <p className="text-background/70 mb-6 max-w-sm">
              Your trusted partner for tax filing and financial compliance. Making taxes simple, secure, and affordable.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a href="tel:9150166247" className="flex items-center gap-3 text-background/80 hover:text-primary transition-colors">
                <Phone className="h-5 w-5" />
                <span className="font-medium">9150166247</span>
              </a>
              <a href="mailto:info@mayoconsultant.com" className="flex items-center gap-3 text-background/80 hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
                <span>info@mayoconsultant.com</span>
              </a>
              <div className="flex items-start gap-3 text-background/80">
                <MapPin className="h-5 w-5 mt-1" />
                <span>Chennai, Tamil Nadu, India</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-background mb-4">Services</h4>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-background/70 hover:text-primary transition-colors text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h4 className="font-semibold text-background mb-4">Tools</h4>
            <ul className="space-y-3">
              {tools.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-background/70 hover:text-primary transition-colors text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-background mb-4">Company</h4>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-background/70 hover:text-primary transition-colors text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-background mb-4">Legal</h4>
            <ul className="space-y-3">
              {legal.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-background/70 hover:text-primary transition-colors text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/60">
              © {new Date().getFullYear()} The Mayo Consultant. All rights reserved.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a href="#" className="text-background/60 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/60 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/60 hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/60 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
