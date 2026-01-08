import React from "react";
import PageLayout from "@/components/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
    FileText,
    CheckCircle2,
    AlertTriangle,
    CreditCard,
    ShieldCheck,
    Scale,
    RefreshCcw,
    HelpCircle,
    Gavel,
    Clock,
    Briefcase
} from "lucide-react";

const Terms = () => {
    const lastUpdated = "January 8, 2024";

    const sections = [
        {
            id: "acceptance",
            title: "Acceptance of Terms",
            icon: CheckCircle2,
            content: "By accessing or using MyTaxMate, you agree to comply with these Terms & Conditions. These terms govern your use of our platform, including our website, mobile application, and any other services provided by us. If you do not agree to these terms, please do not use our services."
        },
        {
            id: "eligibility",
            title: "Eligibility",
            icon: ShieldCheck,
            content: "You must be at least 18 years of age and possess the legal authority to enter into these terms. By using MyTaxMate, you represent and warrant that you meet these eligibility requirements and that all information you provide is accurate."
        },
        {
            id: "services",
            title: "Services Offered",
            icon: Briefcase,
            items: [
                "Income Tax Filing (ITR) for individuals and businesses.",
                "GST Filing & Compliance management.",
                "Financial Calculators & Decision-making tools.",
                "Expert-Assisted Services and Tax Advisory.",
                "Free MAYON CRM (subject to registration and active account status)."
            ]
        },
        {
            id: "responsibilities",
            title: "User Responsibilities",
            icon: FileText,
            items: [
                "Provide accurate, complete, and truthful information at all times.",
                "Submit all required documents within the prescribed timelines to avoid penalties.",
                "Review and ensure the correctness of all data and forms before final submission.",
                "Maintain the confidentiality of your account credentials."
            ]
        },
        {
            id: "payment",
            title: "Payment and Subscriptions",
            icon: CreditCard,
            content: "Fees for our services are clearly displayed on our Pricing page. All payments are processed securely. Subscriptions for recurring services like GST filing or CRM access will be billed according to the selected plan. Failure to pay may result in suspension of services."
        },
        {
            id: "liability",
            title: "Limitation of Liability",
            icon: AlertTriangle,
            content: "MyTaxMate and its affiliates shall not be held responsible for:",
            items: [
                "Any penalties, interest, or legal consequences arising from incorrect or delayed information provided by the user.",
                "Government portal downtime, technical glitches, or processing delays by tax authorities.",
                "Decisions taken or financial outcomes based on estimates provided by our calculators.",
                "Loss of data due to circumstances beyond our reasonable control."
            ]
        },
        {
            id: "property",
            title: "Intellectual Property",
            icon: Scale,
            content: "All content, logos, trademarks, and software on MyTaxMate are the exclusive property of MyTaxMate or its licensors. You are granted a limited, non-exclusive license to use the platform for its intended purpose. Unauthorized reproduction or distribution is strictly prohibited."
        },
        {
            id: "governing-law",
            title: "Governing Law",
            icon: Gavel,
            content: "These Terms & Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts located in [Your City/State], India."
        },
        {
            id: "changes",
            title: "Changes to Terms",
            icon: RefreshCcw,
            content: "MyTaxMate reserves the right to update or modify these Terms & Conditions at any time without prior notice. Continued use of the platform after such changes constitutes your acceptance of the new terms. We recommend reviewing this page periodically."
        },
        {
            id: "contact",
            title: "Contact Information",
            icon: HelpCircle,
            content: "If you have any questions or concerns regarding these Terms & Conditions, please reach out to our legal team at legal@mytaxmate.com or through our support portal."
        }
    ];

    return (
        <PageLayout title="">
            <div className="container mx-auto px-4 py-8 mb-20 max-w-5xl">
                {/* Header */}
                <div className="text-center mb-16 fade-in-up">
                    <Badge variant="outline" className="mb-4 border-primary/20 text-primary bg-primary/5 px-4 py-1">
                        Legal Policy
                    </Badge>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-primary to-purple-600 pb-2 mb-4 leading-tight">
                        Terms & Conditions
                    </h1>
                    <div className="flex items-center justify-center gap-2 text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span>Last Updated: {lastUpdated}</span>
                    </div>
                </div>

                {/* Content Sections */}
                <div className="space-y-12">
                    {sections.map((section, index) => (
                        <div key={section.id} className="fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                            <div className="flex gap-4 items-start mb-6">
                                <div className="p-3 bg-primary/10 rounded-xl text-primary shrink-0">
                                    <section.icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-slate-900 mb-4">{section.title}</h2>
                                    {section.content && (
                                        <p className="text-lg text-slate-600 leading-relaxed mb-4">
                                            {section.content}
                                        </p>
                                    )}
                                    {section.items && (
                                        <ul className="space-y-4">
                                            {section.items.map((item, i) => (
                                                <li key={i} className="flex gap-3 items-start group">
                                                    <div className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                                                    <span className="text-slate-600 leading-relaxed">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>
                            {index !== sections.length - 1 && (
                                <div className="h-px bg-slate-200 w-full mt-12" />
                            )}
                        </div>
                    ))}
                </div>

                {/* Acceptance Footer */}
                <Card className="mt-20 border-primary/20 bg-primary/5 shadow-none fade-in-up">
                    <CardContent className="p-8 text-center space-y-4">
                        <p className="text-slate-700 font-medium italic">
                            "By continuing to use MyTaxMate, you acknowledge that you have read, understood, and agreed to be bound by these Terms and Conditions."
                        </p>
                    </CardContent>
                </Card>
            </div>
        </PageLayout>
    );
};

export default Terms;
