import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { AuthModal } from "@/components/AuthModal";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
    CheckCircle2,
    LayoutDashboard,
    Users,
    TrendingUp,
    Bell,
    ShieldCheck,
    Smartphone,
    Star,
    ArrowRight,
    Gift,
    Briefcase
} from "lucide-react";

const CRM = () => {
    return (
        <PageLayout title="">
            <div className="container mx-auto px-4 py-8 max-w-7xl">

                {/* Header Section */}
                <div className="mb-12 fade-in-up transition-all hover:scale-[1.01] duration-500">
                    <div className="flex flex-col md:flex-row gap-4 md:items-end justify-between mb-4">
                        <div>
                            <Badge variant="outline" className="mb-3 border-primary/20 text-primary bg-primary/5 px-3 py-1 text-sm">Business Growth Tool</Badge>
                            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-primary to-purple-600 drop-shadow-sm pb-2">MAYON CRM</h1>
                        </div>
                        <div className="flex flex-col items-end pb-3">
                            <div className="text-sm text-muted-foreground font-medium mb-1">For Registered Users</div>
                            <div className="text-4xl font-bold text-green-600 flex items-center gap-2">
                                FREE<span className="text-lg text-muted-foreground font-normal">*</span></div>
                        </div>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">

                    {/* Left Column - Main Content (2/3 width) */}
                    <div className="lg:col-span-2 space-y-8 fade-in-up delay-100">

                        {/* Overview Card */}
                        <Card className="border-border/50 shadow-sm relative overflow-hidden card-hover group">
                            {/* Background decoration */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full group-hover:scale-110 transition-transform duration-700" />

                            <CardContent className="p-6">
                                <h2 className="text-xl font-bold mb-4">Smart & Easy Business Management</h2>
                                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                                    MAYON CRM is designed to help businesses manage leads, customers, follow-ups, and sales in one place.
                                    Everything you need to streamline your operations and grow your business, available exclusively for MyTaxMate users.
                                </p>

                                <div className="grid sm:grid-cols-2 gap-4">
                                    {[
                                        "No Setup Cost",
                                        "No Subscription Fee",
                                        "Role-Based Access",
                                        "Secure Cloud Storage"
                                    ].map((feature, i) => (
                                        <div key={i} className="flex items-center gap-3 bg-secondary/30 p-3 rounded-lg">
                                            <Gift className="w-5 h-5 text-purple-500" />
                                            <span className="font-medium text-sm">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Detailed Features Grid */}
                        <div>
                            <h3 className="text-xl font-bold mb-4">Key Features of MAYON CRM</h3>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {[
                                    { title: "Lead Management", desc: "Centralized tracking for all your potential clients.", icon: Users },
                                    { title: "Client History", desc: "Track interactions, notes & history in one dashboard.", icon: LayoutDashboard },
                                    { title: "Sales Pipeline", desc: "Visualize your sales process and status tracking.", icon: TrendingUp },
                                    { title: "Task Reminders", desc: "Automated follow-ups so you never miss a deal.", icon: Bell },
                                    { title: "Secure Access", desc: "Cloud-based access with enterprise-grade security.", icon: ShieldCheck },
                                    { title: "User Friendly", desc: "Simple interface designed for non-tech users.", icon: Smartphone }
                                ].map((item, i) => (
                                    <Card key={i} className="border-border/50 hover:border-primary/30 transition-all card-hover">
                                        <CardContent className="p-4">
                                            <div className="flex items-start gap-3">
                                                <div className="bg-primary/10 p-2 rounded-md mt-1">
                                                    <item.icon className="w-5 h-5 text-primary" />
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

                        {/* Steps Section */}
                        <div className="bg-secondary/20 rounded-2xl p-6 border border-border/60">
                            <h3 className="text-lg font-bold mb-6 text-center">How to Get Free Access?</h3>
                            <div className="grid sm:grid-cols-4 gap-4 relative">
                                <div className="hidden sm:block absolute top-4 left-0 w-full h-0.5 bg-border/50 -z-10" />
                                {[
                                    "Register on MyTaxMate",
                                    "Complete Profile",
                                    "Get FREE Access",
                                    "Start Managing"
                                ].map((step, i) => (
                                    <div key={i} className="text-center bg-background p-4 rounded-xl shadow-sm border border-border/50">
                                        <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold mx-auto mb-3">
                                            {i + 1}
                                        </div>
                                        <p className="text-sm font-medium">{step}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Who Can Use */}
                        <div>
                            <h3 className="text-xl font-bold mb-4">Who Is This For?</h3>
                            <div className="flex flex-wrap gap-2">
                                {[
                                    "Small Business Owners",
                                    "Freelancers",
                                    "Service Providers",
                                    "Consultants",
                                    "Startups"
                                ].map((tag, i) => (
                                    <span key={i} className="flex items-center gap-2 bg-background px-4 py-2 rounded-full text-sm font-medium border border-border shadow-sm">
                                        <Briefcase className="w-4 h-4 text-muted-foreground" />
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* Right Column - Sticky Sidebar (1/3 width) */}
                    <div className="lg:col-span-1 fade-in-up delay-200">
                        <div className="sticky top-24 space-y-6">

                            {/* Action Card */}
                            <Card className="border-primary shadow-lg relative overflow-hidden animate-float hover:shadow-2xl transition-shadow duration-500">
                                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-green-500 to-primary" />
                                <CardContent className="p-6">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="bg-green-100 p-2 rounded-lg">
                                            <Gift className="w-6 h-6 text-green-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg">Claim Offer</h3>
                                            <Badge variant="secondary" className="bg-green-100 text-green-700 hover:bg-green-200">Free Access</Badge>
                                        </div>
                                    </div>

                                    <p className="text-sm text-muted-foreground mb-6">
                                        Manage leads, track customers, and grow your business with one smart solution.
                                    </p>

                                    <div className="space-y-4 mb-6">
                                        <div className="flex items-center justify-between text-sm">
                                            <span className="text-muted-foreground">Setup Cost</span>
                                            <span className="font-medium text-green-600">₹0</span>
                                        </div>
                                        <Separator />
                                        <div className="flex items-center justify-between text-sm">
                                            <span className="text-muted-foreground">Monthly Fee</span>
                                            <span className="font-bold text-green-600">FREE FOREVER*</span>
                                        </div>
                                    </div>

                                    <AuthModal defaultTab="signup">
                                        <Button className="w-full h-12 text-base font-bold shadow-md hover:shadow-xl transition-all mb-3 group bg-primary">
                                            Get Started Now
                                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                        </Button>
                                    </AuthModal>

                                    <p className="text-xs text-center text-muted-foreground">
                                        *For registered MyTaxMate users.
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
                                        <div className="font-bold text-lg">Trusted Tool</div>
                                        <div className="text-xs text-muted-foreground">Used by thousands of businesses</div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Support Info */}
                            <div className="rounded-xl border border-dashed border-border p-5 text-center">
                                <p className="text-sm font-medium mb-3">Questions?</p>
                                <div className="flex items-center justify-center gap-2 text-primary font-bold text-sm">
                                    <Smartphone className="w-4 h-4" />
                                    crmsupport@mytaxmate.in
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </PageLayout>
    );
};

export default CRM;
