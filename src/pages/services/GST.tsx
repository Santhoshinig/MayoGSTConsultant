import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { AuthModal } from "@/components/AuthModal";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
    CheckCircle2,
    Zap,
    ShieldCheck,
    Smartphone,
    Star,
    ArrowRight
} from "lucide-react";

const GST = () => {
    return (
        <PageLayout title="">
            <div className="container mx-auto px-4 py-8 max-w-7xl">

                {/* Header Section */}
                <div className="mb-12 fade-in-up transition-all hover:scale-[1.01] duration-500">
                    <div className="flex flex-col md:flex-row gap-4 md:items-end justify-between mb-4">
                        <div>
                            <Badge variant="outline" className="mb-3 border-primary/20 text-primary bg-primary/5 px-3 py-1 text-sm">GST Compliance Suite</Badge>
                            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-primary to-purple-600 drop-shadow-sm pb-2">
                                MyTaxMate GST
                            </h1>
                        </div>
                        <div className="flex flex-col items-end pb-3">
                            <div className="text-sm text-muted-foreground font-medium mb-1">Starting at ONLY</div>
                            <div className="text-4xl font-bold text-primary flex items-center gap-2">
                                ₹199
                                <span className="text-lg text-muted-foreground font-normal">/mo*</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">

                    {/* Left Column - Main Content (2/3 width) */}
                    <div className="lg:col-span-2 space-y-8 fade-in-up delay-100">

                        {/* Overview Card */}
                        <Card className="border-border/50 shadow-sm">
                            <CardContent className="p-6">
                                <h2 className="text-xl font-bold mb-4">Smart & Affordable GST Filing</h2>
                                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                                    MyTaxMate GST is a comprehensive cloud-based compliance platform designed for businesses and professionals.
                                    We automate your GST return filing (GSTR-1 to GSTR-9C), provide AI-enabled reconciliation, and ensure 100% accurate compliance.
                                </p>

                                <div className="grid sm:grid-cols-2 gap-4">
                                    {[
                                        "3x Faster Return Filing",
                                        "200+ Smart Error Validations",
                                        "AI-Powered Invoice Matching",
                                        "Cloud-Based Secure Platform"
                                    ].map((feature, i) => (
                                        <div key={i} className="flex items-center gap-3 bg-secondary/30 p-3 rounded-lg">
                                            <Zap className="w-5 h-5 text-yellow-500 fill-yellow-500/20" />
                                            <span className="font-medium text-sm">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Detailed Features Grid */}
                        <div>
                            <h3 className="text-xl font-bold mb-4">Everything you need for GST</h3>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {[
                                    { title: "One-Stop Solution", desc: "File GSTR-1, 3B, 9 & 9C from a single dashboard." },
                                    { title: "Smart Reconciliation", desc: "Auto-match invoices & detect discrepancies instantly." },
                                    { title: "Data Import", desc: "One-click import from Excel, Tally or ERP systems." },
                                    { title: "Vendor Compliance", desc: "Track non-compliant vendors & save input credit." },
                                    { title: "Advanced Reporting", desc: "Get GSTR-2B vs Books & multi-month reports." },
                                    { title: "Expert Support", desc: "Dedicated CA support for complex tax queries." }
                                ].map((item, i) => (
                                    <Card key={i} className="border-border/50 hover:border-primary/30 transition-all card-hover">
                                        <CardContent className="p-4">
                                            <div className="flex items-start gap-3">
                                                <div className="mt-1">
                                                    <CheckCircle2 className="w-5 h-5 text-primary" />
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-foreground text-sm mb-1">{item.title}</h4>
                                                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>

                        {/* Audience Section */}
                        <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
                            <h3 className="text-lg font-bold mb-4">Who is this for?</h3>
                            <div className="flex flex-wrap gap-2">
                                {[
                                    "Small Businesses",
                                    "Freelancers",
                                    "Startups",
                                    "Shop Owners",
                                    "Chartered Accountants",
                                    "E-commerce Sellers"
                                ].map((tag, i) => (
                                    <span key={i} className="bg-white px-3 py-1.5 rounded-full text-sm font-medium shadow-sm border border-border text-foreground/80">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* Right Column - Sticky Sidebar (1/3 width) */}
                    <div className="lg:col-span-1 fade-in-up delay-300">
                        <div className="sticky top-24 space-y-6">

                            {/* Action Card */}
                            <Card className="border-primary shadow-lg relative overflow-hidden animate-float">
                                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary to-primary/60" />
                                <CardContent className="p-6">
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="font-bold text-lg">Get Started</h3>
                                        <Badge>Most Popular</Badge>
                                    </div>

                                    <div className="space-y-4 mb-6">
                                        <div className="flex items-center justify-between text-sm">
                                            <span className="text-muted-foreground">Consultation</span>
                                            <span className="font-medium text-green-600">FREE</span>
                                        </div>
                                        <Separator />
                                        <div className="flex items-center justify-between text-sm">
                                            <span className="text-muted-foreground">GST Filing</span>
                                            <span className="font-bold">₹199*</span>
                                        </div>
                                    </div>

                                    <AuthModal defaultTab="signup">
                                        <Button className="w-full h-11 text-base font-bold shadow-md hover:shadow-xl transition-all mb-3 group">
                                            File Now
                                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                        </Button>
                                    </AuthModal>

                                    <p className="text-xs text-center text-muted-foreground">
                                        *Terms & conditions apply.
                                    </p>
                                </CardContent>
                            </Card>

                            {/* Trust Rating Card */}
                            <Card className="bg-secondary/20">
                                <CardContent className="p-5 flex items-center gap-4">
                                    <div className="bg-background rounded-full p-3 shadow-sm">
                                        <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-lg">4.5 / 5.0</div>
                                        <div className="text-xs text-muted-foreground">Based on 15,000+ ratings</div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Support Info */}
                            <div className="rounded-xl border border-dashed border-border p-5 text-center">
                                <p className="text-sm font-medium mb-3">Need help deciding?</p>
                                <div className="flex items-center justify-center gap-2 text-primary font-bold">
                                    <Smartphone className="w-4 h-4" />
                                    gstsupport@mytaxmate.in
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </PageLayout>
    );
};

export default GST;
