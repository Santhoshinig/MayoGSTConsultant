import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { AuthModal } from "@/components/AuthModal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    CheckCircle2,
    UserCheck,
    ShieldCheck,
    Clock,
    Smartphone,
    Star,
    ArrowRight,
    Briefcase,
    FileText
} from "lucide-react";

const Expert = () => {
    return (
        <PageLayout title="">
            <div className="container mx-auto px-4 py-8 max-w-7xl">

                {/* Header Section */}
                <div className="mb-12 fade-in-up transition-all hover:scale-[1.01] duration-500">
                    <div className="flex flex-col md:flex-row gap-4 md:items-end justify-between mb-4">
                        <div>
                            <Badge variant="outline" className="mb-3 border-primary/20 text-primary bg-primary/5 px-3 py-1 text-sm">Premium Service</Badge>
                            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-primary to-purple-600 drop-shadow-sm pb-2">
                                Book a Tax Expert
                            </h1>
                            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mt-4">
                                Get your Introduction Tax Return (ITR) or GST Returns filed by experienced Chartered Accountants.
                                Accurate, Secure, and Stress-free.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">

                    {/* Left Column - Main Content (2/3 width) */}
                    <div className="lg:col-span-2 space-y-10 fade-in-up delay-100">

                        <Tabs defaultValue="itr" className="w-full">
                            <TabsList className="grid w-full grid-cols-2 mb-8 p-1 bg-muted/50 rounded-xl">
                                <TabsTrigger value="itr" className="text-lg py-2 rounded-lg data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm">Income Tax Expert</TabsTrigger>
                                <TabsTrigger value="gst" className="text-lg py-2 rounded-lg data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm">GST Expert</TabsTrigger>
                            </TabsList>

                            {/* ITR Content */}
                            <TabsContent value="itr" className="space-y-8 animate-fade-in">
                                <Card className="border-border/50 shadow-sm overflow-hidden">
                                    <div className="bg-primary/5 p-6 border-b border-primary/10">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h2 className="text-2xl font-bold mb-2">Expert-Assisted ITR Filing</h2>
                                                <p className="text-muted-foreground">For Salaried, Freelancers, & Business Owners</p>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-sm text-muted-foreground font-medium">Starts @</p>
                                                <p className="text-3xl font-bold text-primary">₹499*</p>
                                            </div>
                                        </div>
                                    </div>
                                    <CardContent className="p-6">
                                        <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                                            <UserCheck className="w-5 h-5 text-primary" />
                                            What Our Expert Does For You
                                        </h3>
                                        <div className="grid sm:grid-cols-2 gap-4 mb-8">
                                            {[
                                                "Reviews your income & documents",
                                                "Identifies eligible deductions (80C, etc.)",
                                                "Selects correct ITR Form (1/2/3/4)",
                                                "Computes accurate tax liability",
                                                "Files returns (Old vs New Regime)",
                                                "Assists with E-verification"
                                            ].map((item, i) => (
                                                <div key={i} className="flex items-start gap-3">
                                                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                                                    <span className="text-sm font-medium text-foreground/80">{item}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                                            <Briefcase className="w-5 h-5 text-primary" />
                                            Who Should Book?
                                        </h3>
                                        <div className="flex flex-wrap gap-2">
                                            {["Salaried Individuals", "Freelancers", "Business Owners", "First-time Filers", "Stock Traders"].map((tag, i) => (
                                                <span key={i} className="bg-secondary/50 px-3 py-1 rounded-full text-xs font-medium border border-border">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </TabsContent>

                            {/* GST Content */}
                            <TabsContent value="gst" className="space-y-8 animate-fade-in">
                                <Card className="border-border/50 shadow-sm overflow-hidden">
                                    <div className="bg-blue-50/50 p-6 border-b border-blue-100/50">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h2 className="text-2xl font-bold mb-2">Expert-Assisted GST Filing</h2>
                                                <p className="text-muted-foreground">Monthly/Quarterly Returns & Reconciliation</p>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-sm text-muted-foreground font-medium">Starts @</p>
                                                <p className="text-3xl font-bold text-primary">₹199*</p>
                                            </div>
                                        </div>
                                    </div>
                                    <CardContent className="p-6">
                                        <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                                            <UserCheck className="w-5 h-5 text-primary" />
                                            Comprehensive GST Support
                                        </h3>
                                        <div className="grid sm:grid-cols-2 gap-4 mb-8">
                                            {[
                                                "GSTR-1 & GSTR-3B Filing",
                                                "Invoice Matching & Reconciliation",
                                                "Input Tax Credit (ITC) Optimization",
                                                "E-Way Bill Generation Support",
                                                "Annual Return (GSTR-9) Assistance",
                                                "Notice Management"
                                            ].map((item, i) => (
                                                <div key={i} className="flex items-start gap-3">
                                                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                                                    <span className="text-sm font-medium text-foreground/80">{item}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                                            <Briefcase className="w-5 h-5 text-primary" />
                                            Ideal For
                                        </h3>
                                        <div className="flex flex-wrap gap-2">
                                            {["SMEs & Startups", "E-commerce Sellers", "Service Providers", "Traders", "Exporters"].map((tag, i) => (
                                                <span key={i} className="bg-blue-50 px-3 py-1 rounded-full text-xs font-medium border border-blue-100 text-blue-700">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </TabsContent>
                        </Tabs>

                        {/* Why Choose Us - Common */}
                        <div className="grid sm:grid-cols-3 gap-6">
                            <div className="p-5 bg-card border border-border rounded-2xl hover:shadow-lg transition-all card-hover text-center group">
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                    <ShieldCheck className="w-6 h-6 text-green-600" />
                                </div>
                                <h4 className="font-bold mb-2">100% Accurate</h4>
                                <p className="text-sm text-muted-foreground">Zero errors guaranteed. Expert verification avoids notices.</p>
                            </div>
                            <div className="p-5 bg-card border border-border rounded-2xl hover:shadow-lg transition-all card-hover text-center group">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                    <Clock className="w-6 h-6 text-blue-600" />
                                </div>
                                <h4 className="font-bold mb-2">Save Time</h4>
                                <p className="text-sm text-muted-foreground">Expert handles everything. No complex forms for you.</p>
                            </div>
                            <div className="p-5 bg-card border border-border rounded-2xl hover:shadow-lg transition-all card-hover text-center group">
                                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                    <FileText className="w-6 h-6 text-purple-600" />
                                </div>
                                <h4 className="font-bold mb-2">Max Savings</h4>
                                <p className="text-sm text-muted-foreground">Smart planning to legally minimize your tax liability.</p>
                            </div>
                        </div>

                    </div>

                    {/* Right Column - Sticky Sidebar */}
                    <div className="lg:col-span-1 fade-in-up delay-200">
                        <div className="sticky top-24 space-y-6">

                            {/* Booking Card */}
                            <Card className="border-primary shadow-xl relative overflow-hidden animate-float">
                                <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-primary to-purple-600" />
                                <CardContent className="p-6">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="relative">
                                            <div className="w-12 h-12 bg-gray-100 rounded-full overflow-hidden border-2 border-white shadow-sm">
                                                <UserCheck className="w-full h-full p-2 text-gray-500" />
                                            </div>
                                            <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-white"></div>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg leading-tight">Book an Expert</h3>
                                            <p className="text-xs text-muted-foreground">Available Now</p>
                                        </div>
                                    </div>

                                    <div className="space-y-4 mb-6">
                                        <div className="bg-secondary/30 p-3 rounded-lg flex items-center gap-3">
                                            <ShieldCheck className="w-5 h-5 text-primary" />
                                            <span className="text-sm font-medium">Certified CA Support</span>
                                        </div>
                                        <div className="bg-secondary/30 p-3 rounded-lg flex items-center gap-3">
                                            <Clock className="w-5 h-5 text-primary" />
                                            <span className="text-sm font-medium">Filing within 24 Hours</span>
                                        </div>
                                    </div>

                                    <AuthModal defaultTab="signup">
                                        <Button className="w-full h-12 text-base font-bold shadow-md hover:shadow-xl transition-all mb-3 group bg-gradient-to-r from-primary to-primary/80">
                                            Book Appointment
                                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                        </Button>
                                    </AuthModal>

                                    <p className="text-xs text-center text-muted-foreground">
                                        100% Confidential & Secure
                                    </p>
                                </CardContent>
                            </Card>

                            {/* Trust Badge */}
                            <div className="bg-white/50 backdrop-blur-sm border border-white/20 rounded-xl p-4 flex items-center justify-center gap-2 shadow-sm">
                                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                                <span className="font-bold text-foreground">4.5/5</span>
                                <span className="text-sm text-muted-foreground">from 15k+ users</span>
                            </div>

                            {/* Support Info */}
                            <div className="rounded-xl border border-dashed border-border p-5 text-center bg-muted/20">
                                <p className="text-sm font-medium mb-3">Questions?</p>
                                <div className="flex items-center justify-center gap-2 text-primary font-bold text-sm">
                                    <Smartphone className="w-4 h-4" />
                                    support@mytaxmate.in
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </PageLayout>
    );
};

export default Expert;
