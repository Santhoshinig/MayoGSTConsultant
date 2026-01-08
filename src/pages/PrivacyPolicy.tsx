import React from "react";
import PageLayout from "@/components/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
    ShieldCheck,
    Lock,
    Eye,
    Database,
    Users,
    Cookie,
    Clock,
    FileText,
    UserCheck,
    Server,
    HelpCircle
} from "lucide-react";

const PrivacyPolicy = () => {
    const lastUpdated = "January 8, 2024";

    const sections = [
        {
            id: "collection",
            title: "Information We Collect",
            icon: Database,
            content: "We collect various types of information to provide and improve our tax and compliance services to you:",
            items: [
                "Personal Identification: Name, Email, Phone Number, and PAN details.",
                "Financial Data: Income details, investment proofs, bank statements, and GST records.",
                "Tax Documents: Form 16, salary slips, and other supporting documentation for filing.",
                "Usage Data: Browser type, IP address, and interaction with our web tools.",
                "Authentication: Login credentials for your MyTaxMate account."
            ]
        },
        {
            id: "usage",
            title: "How We Use Your Data",
            icon: Eye,
            content: "Your data is used strictly for legitimate financial and operational purposes:",
            items: [
                "To process and file your Income Tax Returns (ITR) and GST compliance.",
                "To generate accurate estimates using our calculators and tools.",
                "To provide expert-assisted advisory and support services.",
                "To communicate updates regarding your filing status or regulatory changes.",
                "To maintain and improve the security and performance of our platform."
            ]
        },
        {
            id: "security",
            title: "Data Security & Protection",
            icon: ShieldCheck,
            content: "Security is our top priority. We implement bank-grade security measures to safeguard your sensitive information:",
            items: [
                "End-to-End Encryption: Data is encrypted both at rest and during transmission (SSL/TLS).",
                "Strict Access Controls: Access is restricted to authorized personnel only on a need-to-know basis.",
                "Regular Audits: We perform periodic security assessments and vulnerability scans.",
                "Secure Infrastructure: Hosted on world-class, compliant cloud servers (AWS/Azure)."
            ]
        },
        {
            id: "sharing",
            title: "Third-Party Sharing",
            icon: Users,
            content: "We never sell your personal or financial data. We share information only under these conditions:",
            items: [
                "With Government Authorities (Income Tax Dept, GSTN) for the purpose of filing.",
                "With verified Third-Party Service Providers who assist in platform operations.",
                "When required by law to comply with legal processes or regulatory audits.",
                "With your explicit consent for specific integrated services."
            ]
        },
        {
            id: "cookies",
            title: "Cookies & Tracking",
            icon: Cookie,
            content: "We use cookies to enhance your experience, remember your preferences, and analyze site traffic. You can manage cookie settings through your browser, although some features may not function correctly without them."
        },
        {
            id: "retention",
            title: "Data Retention",
            icon: Server,
            content: "We retain your information only as long as necessary to fulfill the purposes for which it was collected, or as required by Indian tax laws and regulations (typically up to 8 years for tax records)."
        },
        {
            id: "rights",
            title: "Your Privacy Rights",
            icon: UserCheck,
            content: "As a user, you have the following rights regarding your personal data:",
            items: [
                "Right to Access: Request a copy of the data we hold about you.",
                "Right to Correction: Ask us to update or fix any inaccurate information.",
                "Right to Deletion: Request deletion of your account (subject to regulatory retention requirements).",
                "Right to Withdraw Consent: Opt-out of marketing communications at any time."
            ]
        },
        {
            id: "contact",
            title: "Privacy Queries",
            icon: HelpCircle,
            content: "If you have any questions regarding this Privacy Policy or how your data is handled, please contact our Data Protection Officer at privacy@mytaxmate.in."
        }
    ];

    return (
        <PageLayout title="">
            <div className="container mx-auto px-4 py-8 mb-20 max-w-5xl">
                {/* Header */}
                <div className="text-center mb-16 fade-in-up">
                    <Badge variant="outline" className="mb-4 border-primary/20 text-primary bg-primary/5 px-4 py-1">
                        Privacy Policy
                    </Badge>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-primary to-purple-600 pb-2 mb-4 leading-tight">
                        Your Data. Your Privacy.
                    </h1>
                    <div className="flex items-center justify-center gap-2 text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span>Last Updated: {lastUpdated}</span>
                    </div>
                    <p className="mt-8 text-lg text-slate-600 max-w-2xl mx-auto">
                        At MyTaxMate, we are committed to protecting your personal and financial information through transparent data practices and robust security.
                    </p>
                </div>

                {/* Content Sections */}
                <div className="space-y-12">
                    {sections.map((section, index) => (
                        <div key={section.id} className="fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                            <div className="flex gap-4 items-start mb-6">
                                <div className="p-3 bg-primary/10 rounded-xl text-primary shrink-0">
                                    <section.icon className="w-6 h-6" />
                                </div>
                                <div className="flex-1">
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
                                                    <span className="text-slate-600 leading-relaxed font-medium">{item}</span>
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

                {/* Security Guarantee */}
                <Card className="mt-20 border-green-200 bg-green-50 shadow-none fade-in-up">
                    <CardContent className="p-8 flex flex-col md:flex-row items-center gap-6">
                        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-green-600 shadow-sm shrink-0">
                            <Lock className="w-8 h-8" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-green-900 mb-1">Bank-Grade Security Guarantee</h3>
                            <p className="text-green-800/80 leading-relaxed">
                                We use the same level of encryption as major banks to ensure your sensitive tax data remains private and secure from unauthorized access.
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </PageLayout>
    );
};

export default PrivacyPolicy;
