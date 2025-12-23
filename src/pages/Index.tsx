import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import ServiceCards from "@/components/landing/ServiceCards";
import Features from "@/components/landing/Features";
import Testimonials from "@/components/landing/Testimonials";
import FAQ from "@/components/landing/FAQ";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <ServiceCards />
        <Features />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
