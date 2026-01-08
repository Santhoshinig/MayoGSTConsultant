import PageLayout from "@/components/PageLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
    CheckCircle2,
    Target,
    ShieldCheck,
    Zap,
    Users,
    Globe,
    ArrowRight,
    TrendingUp,
    Cloud,
    Lock,
    MousePointer2,
    UserCheck
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

// Helper component for animated numbers
const AnimatedNumber = ({ value, suffix = "", duration = 2000, prefix = "" }: { value: number, suffix?: string, duration?: number, prefix?: string }) => {
    const [count, setCount] = useState(0);
    const countRef = useRef<HTMLSpanElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) setIsVisible(true);
        }, { threshold: 0.1 });

        if (countRef.current) observer.observe(countRef.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        let startTime: number | null = null;
        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            setCount(Math.round(progress * value));
            if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
    }, [isVisible, value, duration]);

    return <span ref={countRef}>{prefix}{count.toLocaleString('en-IN')}{suffix}</span>;
};

const About = () => {
    return (
        <PageLayout title="">
            <div className="flex flex-col gap-0 overflow-hidden">

                {/* Animated Background Elements */}
                <div className="fixed inset-0 pointer-events-none -z-10">
                    <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-[100px] animate-pulse" />
                    <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-600/5 rounded-full blur-[100px] animate-pulse delay-700" />
                </div>

                {/* Section 1: Hero & Introduction */}
                <section className="relative pt-6 pb-20 lg:pt-10 lg:pb-32 overflow-hidden">
                    <div className="container mx-auto px-4">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div className="space-y-8 fade-in-up">
                                <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-sm font-bold border border-blue-100">
                                    <Target className="w-4 h-4" />
                                    <span>Our Mission</span>
                                </div>
                                <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-blue-700 via-primary to-indigo-600 drop-shadow-sm leading-tight pb-2">
                                    Simplifying <br /> Compliance for <br /> Every Indian.
                                </h1>
                                <p className="text-xl font-medium text-slate-700 leading-relaxed max-w-xl">
                                    Technology-first tax and finance platform built to make complex processes like GST & ITR easier, faster, and more accurate.
                                </p>
                                <div className="flex flex-wrap gap-4 pt-4">
                                    <Button size="lg" className="rounded-full px-10 h-14 text-lg shadow-xl bg-gradient-to-r from-blue-600 to-indigo-700 hover:scale-105 transition-all group" asChild>
                                        <Link to="/signup">Start Journey <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" /></Link>
                                    </Button>
                                </div>
                            </div>
                            <div className="relative fade-in-up delay-200 lg:scale-110">
                                <div className="absolute -inset-10 bg-gradient-to-tr from-primary/20 via-blue-400/10 to-transparent rounded-full blur-[80px] animate-pulse" />
                                <img
                                    src="/about_hero_vision.png"
                                    alt="MyTaxMate Innovation"
                                    className="relative rounded-3xl shadow-2xl border border-white/20 object-cover w-full h-[500px] ring-1 ring-black/5"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 2: Core Values (Grid with stagger) */}
                <section className="py-24 bg-white/50 backdrop-blur-sm relative border-y border-border/40">
                    <div className="container mx-auto px-4">
                        <div className="text-center max-w-3xl mx-auto mb-20 fade-in-up">
                            <Badge variant="outline" className="mb-6 px-4 py-1 text-primary border-primary/20 bg-primary/5">Core Values</Badge>
                            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-slate-900 mb-6 font-primary">
                                What Drives Us
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Empowering everyone from freelancers to large enterprises with intelligent, reliable, and affordable tax solutions.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                { icon: Cloud, title: "Cloud-native Tools", desc: "GST & Income Tax filing built for the modern era." },
                                { icon: Zap, title: "Automated Logic", desc: "Instant estimation of tax liabilities with precision AI." },
                                { icon: UserCheck, title: "Expert Support", desc: "Step-by-step guidance from qualified professionals." },
                                { icon: ShieldCheck, title: "Bank-Grade Security", desc: "End-to-end encryption for total data privacy." }
                            ].map((item, i) => (
                                <Card key={i} className={`group hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 border-border/40 fade-in-up`} style={{ animationDelay: `${i * 150}ms` }}>
                                    <CardContent className="p-10 text-center space-y-6">
                                        <div className="w-20 h-20 rounded-3xl bg-primary/5 text-primary flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                                            <item.icon className="w-10 h-10" />
                                        </div>
                                        <div className="space-y-3">
                                            <h3 className="text-2xl font-bold text-slate-900">{item.title}</h3>
                                            <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Section 3: Trusted by Thousands (Animated Numbers) */}
                <section className="py-32 relative overflow-hidden bg-slate-900 text-white group">
                    <div className="absolute inset-0 opacity-40 grayscale group-hover:grayscale-0 transition-all duration-1000">
                        <img src="/about_community_trust.png" alt="Trusted Community" className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-[20s]" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/80 to-slate-900" />

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="grid md:grid-cols-3 gap-16 lg:gap-24 text-center">

                            <div className="space-y-6 fade-in-up">
                                <div className="inline-block p-4 rounded-full bg-blue-500/10 mb-2">
                                    <TrendingUp className="w-8 h-8 text-blue-400" />
                                </div>
                                <div className="text-6xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-blue-600 drop-shadow-[0_10px_30px_rgba(59,130,246,0.3)]">
                                    <AnimatedNumber value={100} prefix="₹" suffix=" Cr+" />
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-xl font-bold uppercase tracking-widest text-white/90">Taxes Optimized</h4>
                                    <p className="text-blue-100/60 font-medium font-primary">Through our smart advisory tools</p>
                                </div>
                            </div>

                            <div className="space-y-6 fade-in-up delay-200">
                                <div className="inline-block p-4 rounded-full bg-purple-500/10 mb-2">
                                    <Users className="w-8 h-8 text-purple-400" />
                                </div>
                                <div className="text-6xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-purple-400 to-purple-600 drop-shadow-[0_10px_30px_rgba(168,85,247,0.3)]">
                                    <AnimatedNumber value={5} suffix="M+" />
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-xl font-bold uppercase tracking-widest text-white/90">Returns Filed</h4>
                                    <p className="text-purple-100/60 font-medium font-primary">Across the nation every year</p>
                                </div>
                            </div>

                            <div className="space-y-6 fade-in-up delay-400">
                                <div className="inline-block p-4 rounded-full bg-green-500/10 mb-2">
                                    <Globe className="w-8 h-8 text-green-400" />
                                </div>
                                <div className="text-6xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-green-400 to-green-600 drop-shadow-[0_10px_30px_rgba(34,197,94,0.3)]">
                                    <AnimatedNumber value={25} suffix="K+" />
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-xl font-bold uppercase tracking-widest text-white/90">Business Entities</h4>
                                    <p className="text-green-100/60 font-medium font-primary">Empowered to scale with confidence</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* Section 4: Technology & Expertise */}
                <section className="py-24 bg-background overflow-hidden">
                    <div className="container mx-auto px-4">
                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            <div className="relative fade-in-up order-2 lg:order-1 perspective-1000">
                                <div className="absolute -inset-10 bg-primary/10 rounded-full blur-[100px] animate-pulse" />
                                <img
                                    src="/about_cloud_security.png"
                                    alt="Secure Technology"
                                    className="relative rounded-3xl shadow-elevated border border-white/40 ring-1 ring-black/5 hover:rotate-2 transition-transform duration-700 h-[400px] w-full object-cover"
                                />
                                <div className="absolute bottom-10 -right-10 bg-white p-6 rounded-2xl shadow-2xl border border-border/50 animate-float hidden md:block">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                                            <ShieldCheck className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-900">100% Secure</p>
                                            <p className="text-xs text-muted-foreground">Bank-grade Encryption</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-12 order-1 lg:order-2">
                                <div className="space-y-6 fade-in-up">
                                    <Badge className="bg-primary/10 text-primary border-none px-4 py-1 text-xs font-bold uppercase tracking-widest">
                                        Infrastructure
                                    </Badge>
                                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900 leading-[1.1]">
                                        Built for Scale. <br /><span className="text-primary">Reliable First.</span>
                                    </h2>
                                </div>

                                <div className="grid sm:grid-cols-1 gap-10">
                                    {[
                                        { icon: Globe, title: "Global Cloud-Native Architecture", desc: "Designed for 99.9% uptime, ensuring your tax records are accessible anytime, anywhere." },
                                        { icon: Lock, title: "End-to-End Data Encryption", desc: "Your sensitive financial data is protected by industry-leading security protocols." },
                                        { icon: MousePointer2, title: "Precision-Engineered UX", desc: "A user interface designed to minimize human error and maximize filing speed." }
                                    ].map((feat, idx) => (
                                        <div key={idx} className="flex gap-6 fade-in-up group" style={{ animationDelay: `${idx * 200}ms` }}>
                                            <div className="shrink-0 w-14 h-14 rounded-2xl bg-white shadow-lg border border-border/50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                                <feat.icon className="w-6 h-6" />
                                            </div>
                                            <div className="space-y-2">
                                                <h4 className="font-extrabold text-xl text-slate-900">{feat.title}</h4>
                                                <p className="text-muted-foreground leading-relaxed font-primary">{feat.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 5: Final CTA */}
                <section className="py-24 relative overflow-hidden bg-gradient-to-br from-blue-700 to-indigo-900 text-white">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
                    <div className="container mx-auto px-4 text-center max-w-4xl relative z-10">
                        <div className="space-y-12 fade-in-up">
                            <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight font-primary">
                                Ready to Experience <br /> the Future of Tax?
                            </h2>
                            <p className="text-xl text-blue-100/80 leading-relaxed max-w-2xl mx-auto">
                                Join our growing community of happy Indian taxpayers and experience the speed, accuracy, and expert support you deserve.
                            </p>

                            <div className="flex flex-col sm:flex-row justify-center gap-6 pt-6">
                                <Button size="lg" variant="secondary" className="rounded-full px-12 h-16 text-xl font-bold bg-white text-blue-700 hover:bg-blue-50 shadow-2xl transition-all hover:scale-105 active:scale-95" asChild>
                                    <Link to="/signup">Register Now</Link>
                                </Button>
                                <Button size="lg" className="rounded-full px-12 h-16 text-xl font-bold border-2 border-white bg-transparent text-white hover:bg-white hover:text-blue-700 transition-all shadow-xl" asChild>
                                    <Link to="/pricing">View Plans</Link>
                                </Button>
                            </div>

                            <div className="pt-16 flex flex-wrap justify-center items-center gap-8 opacity-60">
                                <div className="flex items-center gap-2 font-bold"><CheckCircle2 className="w-5 h-5 text-green-400" /> FREE CRM for Members</div>
                                <div className="flex items-center gap-2 font-bold"><CheckCircle2 className="w-5 h-5 text-green-400" /> Start at ₹199*</div>
                                <div className="flex items-center gap-2 font-bold"><CheckCircle2 className="w-5 h-5 text-green-400" /> Expert CA Support</div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="py-12 bg-slate-900 border-t border-white/5 text-center">
                    <p className="text-sm font-bold text-slate-500 tracking-[0.3em] uppercase">
                        MyTaxMate © 2024 — Smart. Secure. Simplified.
                    </p>
                </div>

            </div>
        </PageLayout>
    );
};

export default About;
