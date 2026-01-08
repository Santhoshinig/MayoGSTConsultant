import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ITR from "./pages/services/ITR";
import GST from "./pages/services/GST";
import Expert from "./pages/services/Expert";
import CRM from "./pages/CRM";
import TaxCalculator from "./pages/tools/TaxCalculator";
import HraCalculator from "./pages/tools/HraCalculator";
import RegimeComparison from "./pages/tools/RegimeComparison";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import RefundPolicy from "./pages/RefundPolicy";

const queryClient = new QueryClient();

import ScrollToTop from "./components/ScrollToTop";

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services/itr" element={<ITR />} />
          <Route path="/services/gst" element={<GST />} />
          <Route path="/services/expert" element={<Expert />} />
          <Route path="/crm" element={<CRM />} />
          <Route path="/tools/tax-calculator" element={<TaxCalculator />} />
          <Route path="/tools/hra-calculator" element={<HraCalculator />} />
          <Route path="/tools/regime-comparison" element={<RegimeComparison />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/refund" element={<RefundPolicy />} />

          {/* Redirect Login/Signup to Home so they open the Modal instead of 404 */}
          <Route path="/login" element={<Navigate to="/" replace />} />
          <Route path="/signup" element={<Navigate to="/" replace />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
