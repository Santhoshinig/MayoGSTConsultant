import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { CheckCircle2, FileText, Briefcase, ShieldCheck, Crown } from "lucide-react";
import { AuthModal } from "@/components/AuthModal";
import { Badge } from "@/components/ui/badge";

const Pricing = () => (
    <PageLayout title="">
        <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="text-center mb-12 space-y-4 animate-fade-in-up">
                <Badge variant="outline" className="mb-3 border-primary/20 text-primary bg-primary/5 px-3 py-1 text-sm">Transparent Pricing</Badge>
                <h1 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-primary to-purple-600 drop-shadow-sm pb-2">
                    Plans based on your Selection
                </h1>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    Affordable GST filing plans for every business size. Choose the one that fits your needs.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

                {/* 1. Monthly Plan */}
                <div className="group bg-card border border-border/50 rounded-2xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 relative overflow-hidden flex flex-col">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="mb-6">
                        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 text-blue-600 shadow-inner group-hover:scale-110 transition-transform duration-300">
                            <FileText className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-foreground">Monthly GST</h3>
                        <div className="mb-2">
                            <span className="text-3xl font-extrabold text-blue-600">₹199*</span>
                            <span className="text-sm text-muted-foreground ml-1">/ Month</span>
                        </div>
                        <p className="text-xs text-muted-foreground font-medium mb-6 uppercase tracking-wide">Per GSTIN</p>

                        <div className="space-y-3">
                            {[
                                "GSTR-1 Filing",
                                "GSTR-3B Filing",
                                "Basic Compliance",
                                "Email Reminders"
                            ].map((feature, i) => (
                                <div key={i} className="flex items-start gap-2.5 group-hover:translate-x-1 transition-transform duration-300" style={{ transitionDelay: `${i * 50}ms` }}>
                                    <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                                    <span className="text-sm font-medium text-foreground/80">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="mt-auto pt-6">
                        <AuthModal defaultTab="signup">
                            <Button className="w-full bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white border border-blue-200 transition-all duration-300 shadow-sm font-semibold">
                                Activate Now
                            </Button>
                        </AuthModal>
                        <p className="text-[10px] text-center text-muted-foreground mt-3">Best for: Small businesses</p>
                    </div>
                </div>

                {/* 2. Quarterly Plan (Recommended) */}
                <div className="group bg-card border-2 border-primary/20 rounded-2xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 relative overflow-hidden flex flex-col transform md:scale-105 z-10 bg-gradient-to-b from-card to-primary/5">
                    <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary to-purple-600" />
                    <div className="absolute top-4 right-0 bg-gradient-to-l from-primary to-purple-600 text-white text-[10px] px-3 py-1 rounded-l-full font-bold shadow-md transform translate-x-1 group-hover:translate-x-0 transition-transform">
                        RECOMMENDED
                    </div>
                    <div className="mb-6">
                        <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mb-4 text-primary shadow-inner group-hover:scale-110 transition-transform duration-300">
                            <Crown className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-foreground">Quarterly GST</h3>
                        <div className="mb-2">
                            <span className="text-3xl font-extrabold text-primary">₹499*</span>
                            <span className="text-sm text-muted-foreground ml-1">/ Quarter</span>
                        </div>
                        <p className="text-xs text-muted-foreground font-medium mb-6 uppercase tracking-wide">Most Popular</p>

                        <div className="space-y-3">
                            {[
                                "GSTR-1 & 3B Filings",
                                "Dedicated Expert",
                                "Error Checks",
                                "Quarterly Mgmt"
                            ].map((feature, i) => (
                                <div key={i} className="flex items-start gap-2.5 group-hover:translate-x-1 transition-transform duration-300" style={{ transitionDelay: `${i * 50}ms` }}>
                                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                    <span className="text-sm font-medium text-foreground/80">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="mt-auto pt-6">
                        <AuthModal defaultTab="signup">
                            <Button className="w-full bg-primary text-white hover:bg-purple-700 transition-all duration-300 shadow-md hover:shadow-lg font-bold">
                                Activate Now
                            </Button>
                        </AuthModal>
                        <p className="text-[10px] text-center text-muted-foreground mt-3">Best for: Composition Dealers</p>
                    </div>
                </div>

                {/* 3. 6-Month Plan */}
                <div className="group bg-card border border-border/50 rounded-2xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 relative overflow-hidden flex flex-col">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="mb-6">
                        <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-4 text-orange-600 shadow-inner group-hover:scale-110 transition-transform duration-300">
                            <Briefcase className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-foreground">6-Month GST</h3>
                        <div className="mb-2">
                            <span className="text-3xl font-extrabold text-orange-600">₹999*</span>
                            <span className="text-sm text-muted-foreground ml-1">/ 6 Mo</span>
                        </div>
                        <p className="text-xs text-muted-foreground font-medium mb-6 uppercase tracking-wide">Growth Plan</p>

                        <div className="space-y-3">
                            {[
                                "Invoice Reconciliation",
                                "Notice Prevention",
                                "Priority Support",
                                "6 Months Filing"
                            ].map((feature, i) => (
                                <div key={i} className="flex items-start gap-2.5 group-hover:translate-x-1 transition-transform duration-300" style={{ transitionDelay: `${i * 50}ms` }}>
                                    <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                                    <span className="text-sm font-medium text-foreground/80">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="mt-auto pt-6">
                        <AuthModal defaultTab="signup">
                            <Button className="w-full bg-orange-50 text-orange-600 hover:bg-orange-600 hover:text-white border border-orange-200 transition-all duration-300 shadow-sm font-semibold">
                                Activate Now
                            </Button>
                        </AuthModal>
                        <p className="text-[10px] text-center text-muted-foreground mt-3">Best for: Growing Business</p>
                    </div>
                </div>

                {/* 4. Annual Plan */}
                <div className="group bg-card border border-border/50 rounded-2xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 relative overflow-hidden flex flex-col">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="mb-6">
                        <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-4 text-green-600 shadow-inner group-hover:scale-110 transition-transform duration-300">
                            <ShieldCheck className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-foreground">Annual GST</h3>
                        <div className="mb-2">
                            <span className="text-3xl font-extrabold text-green-600">₹1,999*</span>
                            <span className="text-sm text-muted-foreground ml-1">/ Year</span>
                        </div>
                        <p className="text-xs text-muted-foreground font-medium mb-6 uppercase tracking-wide">Best Value</p>

                        <div className="space-y-3">
                            {[
                                "Complete Compliance",
                                "GSTR-9 Support",
                                "Highest Savings",
                                "Dedicated Expert"
                            ].map((feature, i) => (
                                <div key={i} className="flex items-start gap-2.5 group-hover:translate-x-1 transition-transform duration-300" style={{ transitionDelay: `${i * 50}ms` }}>
                                    <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                                    <span className="text-sm font-medium text-foreground/80">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="mt-auto pt-6">
                        <AuthModal defaultTab="signup">
                            <Button className="w-full bg-green-50 text-green-600 hover:bg-green-600 hover:text-white border border-green-200 transition-all duration-300 shadow-sm font-semibold">
                                Activate Now
                            </Button>
                        </AuthModal>
                        <p className="text-[10px] text-center text-muted-foreground mt-3">Best for: Full Compliance</p>
                    </div>
                </div>

            </div>

            {/* Bonus Banner */}
            <div className="mt-12 bg-gradient-to-r from-primary/10 via-purple-100/50 to-primary/10 rounded-2xl p-6 md:p-8 border border-primary/20 text-center animate-fade-in-up delay-200">
                <Badge className="mb-3 bg-green-600 hover:bg-green-700">Limited Time Bonus</Badge>
                <h2 className="text-2xl md:text-3xl font-bold mb-2">FREE MAYON CRM for Registered Users*</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
                    Get Cloud-based Lead & Client Management tool absolutely FREE when you sign up for any GST plan.
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-foreground/80">
                    <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-600" /> Lead Management</span>
                    <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-600" /> Follow-up Tracking</span>
                    <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-600" /> Cloud Access</span>
                </div>
            </div>

            <p className="text-center text-xs text-muted-foreground mt-8 max-w-3xl mx-auto">
                *Prices are exclusive of taxes. Charges applicable per GSTIN. Filing depends on timely document submission. Government fees/penalties not included.
            </p>

        </div>
    </PageLayout>
);

export default Pricing;
