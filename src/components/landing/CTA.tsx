import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-10 md:py-14 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Ready to File Your Taxes?
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8">
            Join 50,000+ happy customers and experience hassle-free tax filing today.
            Get started in less than 5 minutes!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              variant="secondary"
              className="text-base px-8 gap-2 bg-background text-primary hover:bg-background/90"
              asChild
            >
              <Link to="/signup">
                Start Filing Now
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <a
              href="tel:9150166247"
              className="flex items-center gap-2 text-primary-foreground hover:text-primary-foreground/80 transition-colors"
            >
              <Phone className="h-5 w-5" />
              <span className="font-medium">Call us: 9150166247</span>
            </a>
          </div>

          <p className="mt-8 text-sm text-primary-foreground/70">
            No credit card required • Free tax summary • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
