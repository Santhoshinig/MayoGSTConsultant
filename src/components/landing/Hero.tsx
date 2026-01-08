import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, TrendingUp, ShieldCheck } from "lucide-react";
import { AuthModal } from "@/components/AuthModal";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 pt-20 md:pt-32 pb-10 relative min-h-[90vh] flex flex-col justify-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:order-1 fade-in-up z-10">

            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm text-sm font-semibold text-foreground border border-border">
              <span className="text-green-600 font-bold">₹1766.69 Cr</span> Refund processed this year
            </div>

            <div className="space-y-2 fade-in-up delay-100">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground leading-[1.1] tracking-tight">
                Hire a <span className="text-foreground">Tax Expert</span>
              </h1>

            </div>

            {/* CTA Boxes */}
            <div className="grid sm:grid-cols-2 gap-6 mt-6 max-w-2xl fade-in-up delay-200">
              {/* Box 1: GST Filing */}
              <div className="bg-white rounded-3xl p-6 shadow-card border border-transparent hover:border-primary/20 transition-all duration-300 hover:shadow-lg text-left h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4 animate-float">
                    <img src="https://cdn-icons-png.flaticon.com/512/2910/2910791.png" alt="GST" className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-1">GST Filing</h3>
                  <p className="text-muted-foreground font-medium">Starts @ ₹199*</p>
                </div>
                <AuthModal defaultTab="signup">
                  <Button className="w-full mt-6 bg-primary hover:bg-primary/90 text-white font-bold h-12 rounded-xl text-base">
                    Hire Now
                  </Button>
                </AuthModal>
              </div>

              {/* Box 2: CRM */}
              <div className="bg-white rounded-3xl p-6 shadow-card border border-transparent hover:border-primary/20 transition-all duration-300 hover:shadow-lg text-left h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 animate-float delay-500">
                    <img src="https://cdn-icons-png.flaticon.com/512/3135/3135679.png" alt="CRM" className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-1">Free Mayo CRM</h3>
                  <p className="text-muted-foreground font-medium">For registered users</p>
                </div>
                <AuthModal defaultTab="signup">
                  <Button className="w-full mt-6 bg-primary hover:bg-primary/90 text-white font-bold h-12 rounded-xl text-base">
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
                className="object-cover w-full h-auto rounded-3xl shadow-2xl transition-transform duration-500 hover:scale-[1.01]"
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
        {/* Trust Bar / Stats Footer */}
        <div className="mt-16 md:mt-20 border-t border-border pt-8 animate-fade-in delay-300">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center text-center md:text-left">

            {/* Live Filing Status */}
            <div className="md:col-span-1 space-y-2">
              <p className="text-sm text-muted-foreground font-medium">We are now live for ITR filing on</p>
              <div className="flex justify-center md:justify-start gap-4 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                <img src="https://cdn-icons-png.flaticon.com/512/906/906377.png" alt="Teams" className="h-6 w-6" />
                <img src="https://cdn-icons-png.flaticon.com/512/3670/3670051.png" alt="WhatsApp" className="h-6 w-6" />
                <img src="https://cdn-icons-png.flaticon.com/512/2111/2111615.png" alt="Slack" className="h-6 w-6" />
              </div>
            </div>

            {/* Stat 1 */}
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center gap-1">
                <span className="text-2xl font-bold text-foreground">★ 4.9/5</span>
              </div>
              <p className="text-sm text-muted-foreground">45K+ Reviews</p>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center md:items-start">
              <span className="text-2xl font-bold text-foreground">₹1,050 Cr+</span>
              <p className="text-sm text-muted-foreground">Refunds delivered last year</p>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center md:items-start">
              <span className="text-2xl font-bold text-foreground">7.5 M+</span>
              <p className="text-sm text-muted-foreground">Users Trust Us</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
