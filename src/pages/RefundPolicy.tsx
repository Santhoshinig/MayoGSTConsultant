import React from "react";
import PageLayout from "@/components/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
    Undo2,
    CheckCircle2,
    XCircle,
    Clock,
    Mail,
    AlertCircle,
    CreditCard,
    History,
    HelpCircle,
    FileWarning
} from "lucide-react";

const RefundPolicy = () => {
    const lastUpdated = "January 8, 2024";

    const sections = [
        {
            id: "eligibility",
            title: "Refund Eligibility",
            icon: CheckCircle2,
            content: "Refunds may be considered only under the following specific circumstances:",
            items: [
                "Payment was successfully made but the intended service was not initiated by our team.",
                "Duplicate or excess payment was made due to technical glitches or double-clicking.",
                "Proven technical errors occurred from our side that prevented service delivery.",
                "Cancellation request is made within 24 hours of payment and before any document verification."
            ]
        },
        {
            id: "non-refundable",
            title: "Non-Refundable Cases",
            icon: XCircle,
            content: "No refunds will be provided in the following scenarios:",
            items: [
                "The filing process or document review has already been started by our tax experts.",
                "Services are completed or partially completed (pro-rata refunds are not available).",
                "Delays or rejections caused by late document submission or incorrect data provided by the user.",
                "Government fees, challans, or taxes already paid to authorities on your behalf.",
                "Change of mind after the work allocation has been done to a professional."
            ]
        },
        {
            id: "timeline",
            title: "Refund Timeline",
            icon: Clock,
            content: "We value your money and aim for transparency in our financial processes.",
            items: [
                "Approved refund requests will be processed within 7–10 working days.",
                "Refunds will be credited strictly to the original payment method (Bank A/c, Card, or Wallet).",
                "Confirmation will be sent via email once the refund is initiated from our end."
            ]
        },
        {
            id: "cancellation",
            title: "Cancellation Process",
            icon: Undo2,
            content: "To cancel a service, users must raise a ticket through the dashboard or email us immediately. The timestamp of the email will be used to determine eligibility. Once a 'Work in Progress' status is assigned, cancellation is no longer possible."
        },
        {
            id: "disclaimer",
            title: "Important Disclaimer",
            icon: FileWarning,
            content: "MyTaxMate acts as an intermediary for tax filing. We do not have control over government processing times or potential rejections by the Income Tax Department or GSTN. Such rejections do not qualify for a refund of our professional service fees."
        },
        {
            id: "contact",
            title: "Contact for Refunds",
            icon: Mail,
            content: "For all refund-related queries and requests, please reach out to our dedicated billing team:",
            contact: {
                email: "support@mytaxmate.in",
                subject: "Refund Request - [Your Order ID]"
            }
        }
    ];

    return (
        <PageLayout title="">
            <div className="container mx-auto px-4 py-8 mb-20 max-w-5xl">
                {/* Header */}
                <div className="text-center mb-16 fade-in-up">
                    <Badge variant="outline" className="mb-4 border-primary/20 text-primary bg-primary/5 px-4 py-1">
                        Billing Policy
                    </Badge>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-primary to-purple-600 pb-2 mb-4 leading-tight">
                        Refund Policy
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
                                    {section.contact && (
                                        <Card className="mt-4 bg-muted/30 border-dashed border-primary/20">
                                            <CardContent className="p-6">
                                                <div className="flex items-center gap-3 text-primary font-bold text-xl">
                                                    <Mail className="w-6 h-6" />
                                                    <a href={`mailto:${section.contact.email}`} className="hover:underline">{section.contact.email}</a>
                                                </div>
                                                <p className="text-sm text-muted-foreground mt-2">Please include your order ID in the subject line for faster processing.</p>
                                            </CardContent>
                                        </Card>
                                    )}
                                </div>
                            </div>
                            {index !== sections.length - 1 && (
                                <div className="h-px bg-slate-200 w-full mt-12" />
                            )}
                        </div>
                    ))}
                </div>

                {/* Note Footer */}
                <div className="mt-20 p-8 rounded-3xl bg-amber-50 border border-amber-200 flex gap-4 fade-in-up">
                    <AlertCircle className="w-6 h-6 text-amber-600 shrink-0" />
                    <div>
                        <h4 className="font-bold text-amber-900 mb-1">Processing Note</h4>
                        <p className="text-amber-800/80 text-sm leading-relaxed">
                            Refunds are subject to verification of the service status. Our decision on refund eligibility based on work progress shall be final and binding.
                        </p>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
};

export default RefundPolicy;
