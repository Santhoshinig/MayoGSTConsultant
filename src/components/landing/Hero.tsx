import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, TrendingUp, ShieldCheck } from "lucide-react";
import { AuthModal } from "@/components/AuthModal";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-secondary/50 via-background to-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgwLDAsMCwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50" />

      <div className="container mx-auto px-4 pt-24 md:pt-32 pb-24 md:pb-32 relative min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8 text-center lg:text-left z-10 order-2 lg:order-1 animate-fade-in">
            <Badge variant="secondary" className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium border-primary/20 bg-primary/10 text-primary-foreground animate-scale-in">
              <span className="relative flex h-2 w-2">
                <span className="inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              ₹1766.69 Cr Refund processed this year
            </Badge>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight animate-slide-in-right">
                Get Maximum <span className="text-primary">Tax Refund</span> Without the Stress
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 animate-fade-in delay-100">
                Trusted by thousands of professionals for accurate, timely, and secure tax filing. We handle everything from GST to Income Tax Returns, so you can focus on growing your business.
              </p>

              <div className="flex flex-wrap gap-3 justify-center lg:justify-start animate-fade-in delay-200">
                <div className="flex items-center gap-2 text-sm text-foreground/80 bg-background/50 px-3 py-1 rounded-full border border-border">
                  <ShieldCheck className="w-4 h-4 text-primary" /> 100% Secure
                </div>
                <div className="flex items-center gap-2 text-sm text-foreground/80 bg-background/50 px-3 py-1 rounded-full border border-border">
                  <TrendingUp className="w-4 h-4 text-primary" /> Tax Optimized
                </div>
              </div>
            </div>

            {/* CTA Boxes */}
            <div className="grid md:grid-cols-2 gap-4 md:gap-6 mt-8">
              {/* Box 1: GST Filing */}
              <div className="bg-card rounded-2xl p-6 shadow-lg border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-left group animate-scale-in delay-300">
                <div className="mb-4">
                  <img src="https://cdn-icons-png.flaticon.com/512/2910/2910791.png" alt="GST" className="w-12 h-12 mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-bold text-foreground mb-1">GST filing</h3>
                  <p className="text-muted-foreground text-sm">start @199*</p>
                </div>
                <AuthModal defaultTab="signup">
                  <Button className="w-full text-base font-semibold bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:scale-[1.02]">
                    File Now
                  </Button>
                </AuthModal>
              </div>

              {/* Box 2: CRM */}
              <div className="bg-card rounded-2xl p-6 shadow-lg border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-left group animate-scale-in delay-400">
                <div className="mb-4">
                  <img src="https://cdn-icons-png.flaticon.com/512/3135/3135679.png" alt="CRM" className="w-12 h-12 mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-bold text-foreground mb-1">Free Mayo CRM</h3>
                  <p className="text-muted-foreground text-sm">for the registered users</p>
                </div>
                <AuthModal defaultTab="signup">
                  <Button className="w-full text-base font-semibold bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:scale-[1.02]">
                    Book Now
                  </Button>
                </AuthModal>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative flex justify-center lg:justify-end order-1 lg:order-2 mb-8 lg:mb-0 animate-fade-in delay-200">
            {/* Main Image */}
            <div className="relative z-10 w-full max-w-[300px] md:max-w-[400px] lg:max-w-full">
              <img
                src="/hero-girl.jpg"
                alt="Happy Customer"
                className="object-cover w-full h-auto rounded-b-full rounded-t-full shadow-2xl border-4 border-white/50 transition-transform duration-500 hover:scale-[1.01]"
              />

              {/* Floating Refund Card */}
              <div className="absolute top-1/4 -left-4 md:-left-10 bg-white/90 backdrop-blur-md p-3 md:p-4 rounded-xl shadow-xl border border-white/20 hidden sm:block animate-scale-in delay-500 hover:scale-105 transition-transform duration-300">
                <div className="text-center">
                  <p className="text-xs md:text-sm text-muted-foreground mb-1">Total Refund</p>
                  <p className="text-xl md:text-2xl font-bold text-primary">₹88,906</p>
                  <div className="flex items-center gap-2 mt-2 text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full w-fit mx-auto">
                    <CheckCircle2 className="w-3 h-3" />
                    Auto applying deductions
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
