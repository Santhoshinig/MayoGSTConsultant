import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2, FileText, TrendingUp, ShieldCheck } from "lucide-react";
import { AuthModal } from "@/components/AuthModal";

const GST = () => {
    return (
        <PageLayout>
            <div className="container mx-auto px-4 py-12">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h1 className="text-4xl font-bold mb-4">GST Filing Services</h1>
                    <p className="text-xl text-muted-foreground">Seamless, accurate, and timely GST compliance for your business.</p>
                </div>

                {/* Pricing/Hero Card */}
                <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 mb-16 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div>
                        <h2 className="text-2xl font-bold mb-2">Professional GST Filing</h2>
                        <p className="text-muted-foreground mb-4">Starting at just <span className="text-primary font-bold text-xl">₹199*</span> / month</p>
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-green-600" />
                                <span>GSTR-1 & GSTR-3B Filing</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-green-600" />
                                <span>Input Tax Credit Reconciliation</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-green-600" />
                                <span>Expert Support</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 w-full md:w-auto">
                        <Button size="lg" className="w-full md:w-48 text-lg font-semibold" asChild>
                            <a href="https://wa.me/919150166247" target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
                        </Button>
                        <AuthModal defaultTab="login">
                            <Button variant="outline" size="lg" className="w-full md:w-48">
                                File Yourself
                            </Button>
                        </AuthModal>
                    </div>
                </div>

                {/* Why Choose Us */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    <div className="p-6 bg-card rounded-xl shadow-sm border border-border text-center">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                            <ShieldCheck className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">100% Compliance</h3>
                        <p className="text-muted-foreground">Avoid penalties and notices depending on our accurate filing process.</p>
                    </div>
                    <div className="p-6 bg-card rounded-xl shadow-sm border border-border text-center">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                            <TrendingUp className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Max Input Credit</h3>
                        <p className="text-muted-foreground">We ensure you claim every bit of Input Tax Credit (ITC) available to you.</p>
                    </div>
                    <div className="p-6 bg-card rounded-xl shadow-sm border border-border text-center">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                            <FileText className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Dedicated Expert</h3>
                        <p className="text-muted-foreground">Get a dedicated CA/Tax Expert to handle your business queries.</p>
                    </div>
                </div>

                {/* Documents Section */}
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-6 text-center">Documents Required</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="border border-border p-4 rounded-lg flex items-center gap-3">
                            <div className="h-2 w-2 bg-primary rounded-full" />
                            <span>Purchase & Sales Invoices</span>
                        </div>
                        <div className="border border-border p-4 rounded-lg flex items-center gap-3">
                            <div className="h-2 w-2 bg-primary rounded-full" />
                            <span>Bank Statements</span>
                        </div>
                        <div className="border border-border p-4 rounded-lg flex items-center gap-3">
                            <div className="h-2 w-2 bg-primary rounded-full" />
                            <span>Expense Bills</span>
                        </div>
                        <div className="border border-border p-4 rounded-lg flex items-center gap-3">
                            <div className="h-2 w-2 bg-primary rounded-full" />
                            <span>Previous Return Copy (if any)</span>
                        </div>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
};

export default GST;
