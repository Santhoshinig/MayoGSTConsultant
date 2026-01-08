import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { AuthModal } from "@/components/AuthModal";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
    CheckCircle2,
    ShieldCheck,
    Smartphone,
    Star,
    ArrowRight,
    TrendingUp,
    FileCheck,
    Lock
} from "lucide-react";

const ITR = () => {
    return (
        <PageLayout title="">
            <div className="container mx-auto px-4 py-8 max-w-7xl">

                {/* Header Section */}
                <div className="mb-12 fade-in-up transition-all hover:scale-[1.01] duration-500">
                    <div className="flex flex-col md:flex-row gap-4 md:items-end justify-between mb-4">
                        <div>
                            <Badge variant="outline" className="mb-3 border-primary/20 text-primary bg-primary/5 px-3 py-1 text-sm">Income Tax Filing</Badge>
                            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-primary to-purple-600 drop-shadow-sm pb-2">
                                MyTaxMate ITR
                            </h1>
                        </div>
                        <div className="flex flex-col items-end pb-3">
                            <div className="text-sm text-muted-foreground font-medium mb-1">Starting at ONLY</div>
                            <div className="text-4xl font-bold text-primary flex items-center gap-2">
                                ₹499
                                <span className="text-lg text-muted-foreground font-normal">*</span>
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
                                <h2 className="text-xl font-bold mb-4">Simple, Fast & Affordable</h2>
                                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                                    MyTaxMate Income Tax Filing Services help individuals, professionals, and businesses file their income tax returns accurately and on time with expert assistance.
                                    Our platform simplifies tax filing, maximizes deductions, and ensures full compliance with Income Tax Department rules.
                                </p>

                                <div className="grid sm:grid-cols-2 gap-4">
                                    {[
                                        "Accurate Computation & Verification",
                                        "Maximize Eligible Deductions",
                                        "Expert Guided Filing",
                                        "Suitable for Salaried & Business"
                                    ].map((feature, i) => (
                                        <div key={i} className="flex items-center gap-3 bg-secondary/30 p-3 rounded-lg">
                                            <CheckCircle2 className="w-5 h-5 text-green-600" />
                                            <span className="font-medium text-sm">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Types of Returns Grid */}
                        <div>
                            <h3 className="text-xl font-bold mb-4">Types of Income Tax Returns We File</h3>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {[
                                    { title: "ITR-1", desc: "Salaried Individuals" },
                                    { title: "ITR-2", desc: "Individuals with Multiple Income Sources" },
                                    { title: "ITR-3", desc: "Professionals & Business Owners" },
                                    { title: "ITR-4", desc: "Presumptive Income (44AD / 44ADA)" },
                                    { title: "ITR-5 / ITR-6", desc: "Firms & Companies" },
                                    { title: "Other Services", desc: "Form 16/16A Assistance" }
                                ].map((item, i) => (
                                    <Card key={i} className="border-border/50 hover:border-primary/30 transition-all card-hover">
                                        <CardContent className="p-4">
                                            <div className="flex items-center gap-3">
                                                <div className="bg-primary/10 p-2 rounded-md">
                                                    <FileCheck className="w-5 h-5 text-primary" />
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-foreground text-sm mb-0.5">{item.title}</h4>
                                                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>

                        {/* Why Choose Us */}
                        <div>
                            <h3 className="text-xl font-bold mb-4">Why Choose MyTaxMate?</h3>
                            <div className="grid sm:grid-cols-3 gap-6">
                                <div className="p-4 bg-card border border-border rounded-xl text-center hover:shadow-md transition-all">
                                    <TrendingUp className="w-8 h-8 text-primary mx-auto mb-3" />
                                    <h4 className="font-bold text-sm mb-2">Max Tax Savings</h4>
                                    <p className="text-xs text-muted-foreground">Identify all eligible deductions & exemptions to optimize liability.</p>
                                </div>
                                <div className="p-4 bg-card border border-border rounded-xl text-center hover:shadow-md transition-all">
                                    <Lock className="w-8 h-8 text-primary mx-auto mb-3" />
                                    <h4 className="font-bold text-sm mb-2">Secure & Confidential</h4>
                                    <p className="text-xs text-muted-foreground">Enterprise-grade security and SSL encryption for your data.</p>
                                </div>
                                <div className="p-4 bg-card border border-border rounded-xl text-center hover:shadow-md transition-all">
                                    <ArrowRight className="w-8 h-8 text-primary mx-auto mb-3" />
                                    <h4 className="font-bold text-sm mb-2">Hassle-Free</h4>
                                    <p className="text-xs text-muted-foreground">Simple document upload and expert support from home.</p>
                                </div>
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
                                        <h3 className="font-bold text-lg">File ITR Now</h3>
                                        <Badge variant="secondary">Fast & Secure</Badge>
                                    </div>

                                    <div className="space-y-4 mb-6">
                                        <div className="flex items-center justify-between text-sm">
                                            <span className="text-muted-foreground">Expert Consultation</span>
                                            <span className="font-medium text-green-600">INCLUDED</span>
                                        </div>
                                        <Separator />
                                        <div className="flex items-center justify-between text-sm">
                                            <span className="text-muted-foreground">Filing Fee</span>
                                            <div className="text-right">
                                                <span className="text-xs line-through text-muted-foreground block">₹999</span>
                                                <span className="font-bold text-lg">₹499*</span>
                                            </div>
                                        </div>
                                    </div>

                                    <AuthModal defaultTab="signup">
                                        <Button className="w-full h-11 text-base font-bold shadow-md hover:shadow-xl transition-all mb-3 group">
                                            Start Filing
                                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                        </Button>
                                    </AuthModal>

                                    <p className="text-xs text-center text-muted-foreground">
                                        *Price may vary based on complexity.
                                    </p>
                                </CardContent>
                            </Card>

                            {/* Trust Rating Card */}
                            <Card className="bg-secondary/20 border-none">
                                <CardContent className="p-5 flex items-center gap-4">
                                    <div className="bg-background rounded-full p-3 shadow-sm">
                                        <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-lg">4.5 / 5.0</div>
                                        <div className="text-xs text-muted-foreground">Thousands of successful filings</div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Support Info */}
                            <div className="rounded-xl border border-dashed border-border p-5 text-center">
                                <p className="text-sm font-medium mb-3">Questions?</p>
                                <div className="flex items-center justify-center gap-2 text-primary font-bold text-sm">
                                    <Smartphone className="w-4 h-4" />
                                    incometax@mytaxmate.in
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </PageLayout>
    );
};

export default ITR;
