import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Receipt, Users, LayoutDashboard, ArrowRight, Sparkles } from "lucide-react";

const ServiceCards = () => {
  const services = [
    {
      icon: Receipt,
      title: "GST Filing",
      description: "Complete GST return filing made simple. GSTR-1, GSTR-3B & more.",
      price: "₹199",
      priceLabel: "Starting at",
      badge: "Most Popular",
      badgeVariant: "default" as const,
      href: "/services/gst",
      features: ["GSTR-1 Filing", "GSTR-3B Filing", "Expert Support", "Same Day Processing"],
    },
    {
      icon: LayoutDashboard,
      title: "Mayo CRM",
      description: "Free client management system for CA firms and tax consultants.",
      price: "FREE",
      priceLabel: "",
      badge: "Free Forever",
      badgeVariant: "secondary" as const,
      href: "/crm",
      features: ["Unlimited Clients", "Document Storage", "Filing Reminders", "Team Collaboration"],
      highlight: true,
    },
    {
      icon: FileText,
      title: "Income Tax Filing",
      description: "Self-file your ITR with our easy step-by-step process.",
      price: "₹499",
      priceLabel: "Starting at",
      badge: null,
      badgeVariant: "default" as const,
      href: "/services/itr",
      features: ["All ITR Forms", "Auto Tax Calculation", "Regime Comparison", "PDF Download"],
    },
    {
      icon: Users,
      title: "Expert Assisted",
      description: "Get personalized help from our certified tax experts.",
      price: "₹999",
      priceLabel: "Starting at",
      badge: "Premium",
      badgeVariant: "outline" as const,
      href: "/services/expert",
      features: ["Dedicated CA", "Priority Support", "Tax Planning", "Audit Support"],
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="outline" className="mb-4">Our Services</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Everything You Need for{" "}
            <span className="text-primary">Tax Compliance</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From GST filing to complete tax planning, we've got you covered with affordable and reliable services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                service.highlight 
                  ? "border-primary bg-gradient-to-br from-primary/5 to-primary/10" 
                  : "border-border"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {service.badge && (
                <div className="absolute top-4 right-4">
                  <Badge variant={service.badgeVariant} className={service.highlight ? "bg-primary text-primary-foreground" : ""}>
                    {service.highlight && <Sparkles className="h-3 w-3 mr-1" />}
                    {service.badge}
                  </Badge>
                </div>
              )}

              <CardHeader className="pb-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                  service.highlight 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-primary/10 text-primary"
                }`}>
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-sm">{service.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex items-baseline gap-1">
                  {service.priceLabel && (
                    <span className="text-sm text-muted-foreground">{service.priceLabel}</span>
                  )}
                  <span className={`text-3xl font-bold ${service.highlight ? "text-primary" : "text-foreground"}`}>
                    {service.price}
                  </span>
                  {service.price !== "FREE" && <span className="text-muted-foreground">*</span>}
                </div>

                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button 
                  className="w-full mt-4 gap-2" 
                  variant={service.highlight ? "default" : "outline"}
                  asChild
                >
                  <Link to={service.href}>
                    {service.highlight ? "Get Started Free" : "Learn More"}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          * Prices are exclusive of taxes. Final price may vary based on complexity.
        </p>
      </div>
    </section>
  );
};

export default ServiceCards;
