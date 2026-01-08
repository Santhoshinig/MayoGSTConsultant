import { Badge } from "@/components/ui/badge";
import {
  Shield,
  Zap,
  Clock,
  HeadphonesIcon,
  Calculator,
  FileCheck,
  TrendingUp,
  Lock
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "100% Secure & Safe",
      description: "Your data is encrypted and protected with bank-grade security measures.",
    },
    {
      icon: Zap,
      title: "Quick Processing",
      description: "File your returns in minutes with our streamlined digital process.",
    },
    {
      icon: Calculator,
      title: "Accurate Calculations",
      description: "AI-powered tax calculations ensure you get maximum deductions.",
    },
    {
      icon: HeadphonesIcon,
      title: "Expert Support",
      description: "Get help from certified CAs whenever you need assistance.",
    },
    {
      icon: Clock,
      title: "Real-time Tracking",
      description: "Track your filing status and refund in real-time.",
    },
    {
      icon: FileCheck,
      title: "All Forms Supported",
      description: "From ITR-1 to ITR-7, we support all income tax return forms.",
    },
    {
      icon: TrendingUp,
      title: "Tax Optimization",
      description: "Smart suggestions to help you save more on taxes legally.",
    },
    {
      icon: Lock,
      title: "Government Compliant",
      description: "Fully compliant with Income Tax Department regulations.",
    },
  ];

  return (
    <section className="pt-4 pb-14 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="outline" className="mb-4 border-primary/20 text-primary bg-primary/5 px-4 py-1">Why Choose Us</Badge>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-primary to-purple-600 drop-shadow-sm pb-2 mb-4">
            The Smart Way to File Taxes
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Join thousands of satisfied customers who trust MyTaxMate for their tax needs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
