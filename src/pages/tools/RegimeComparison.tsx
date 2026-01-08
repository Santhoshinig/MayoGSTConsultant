import PageLayout from "@/components/PageLayout";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Calculator, CheckCircle2, Info, Users, IndianRupee, ArrowRight, TrendingDown, Scale, Plus, Minus, AlertCircle, Target } from "lucide-react";

// Helper component for animated numbers
const AnimatedNumber = ({ value, prefix = "₹", suffix = "" }: { value: number, prefix?: string, suffix?: string }) => {
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        let start = 0;
        const end = value;
        if (start === end) return;

        let duration = 1000;
        let startTime: number | null = null;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            setDisplayValue(Math.floor(progress * (end - start) + start));
            if (progress < 1) requestAnimationFrame(animate);
        };

        requestAnimationFrame(animate);
    }, [value]);

    return <span>{prefix}{displayValue.toLocaleString('en-IN')}{suffix}</span>;
};

const RegimeComparison = () => {
    const [income, setIncome] = useState<string>("");
    const [deductions, setDeductions] = useState<string>("");
    const [results, setResults] = useState<{ oldTax: number, newTax: number } | null>(null);

    const calculateTaxes = () => {
        const annualIncome = parseFloat(income) || 0;
        const totalDeductions = parseFloat(deductions) || 0;

        // --- Old Regime Logic ---
        const standardDeductionOld = 50000;
        const taxableIncomeOld = Math.max(0, annualIncome - totalDeductions - standardDeductionOld);
        let taxOld = 0;

        if (taxableIncomeOld <= 250000) taxOld = 0;
        else if (taxableIncomeOld <= 500000) taxOld = (taxableIncomeOld - 250000) * 0.05;
        else if (taxableIncomeOld <= 1000000) taxOld = 12500 + (taxableIncomeOld - 500000) * 0.20;
        else taxOld = 112500 + (taxableIncomeOld - 1000000) * 0.30;

        // Rebate u/s 87A (Old)
        if (taxableIncomeOld <= 500000) taxOld = 0;

        // Cess (4%)
        taxOld *= 1.04;

        // --- New Regime Logic (FY 24-25) ---
        const standardDeductionNew = 75000;
        const taxableIncomeNew = Math.max(0, annualIncome - standardDeductionNew);
        let taxNew = 0;

        if (taxableIncomeNew <= 300000) taxNew = 0;
        else if (taxableIncomeNew <= 700000) taxNew = (taxableIncomeNew - 300000) * 0.05;
        else if (taxableIncomeNew <= 1000000) taxNew = 20000 + (taxableIncomeNew - 700000) * 0.10;
        else if (taxableIncomeNew <= 1200000) taxNew = 50000 + (taxableIncomeNew - 1000000) * 0.15;
        else if (taxableIncomeNew <= 1500000) taxNew = 80000 + (taxableIncomeNew - 1200000) * 0.20;
        else taxNew = 140000 + (taxableIncomeNew - 1500000) * 0.30;

        // Rebate u/s 87A (New - FY 24-25)
        if (taxableIncomeNew <= 700000) taxNew = 0;

        // Cess (4%)
        taxNew *= 1.04;

        setResults({ oldTax: Math.round(taxOld), newTax: Math.round(taxNew) });
    };

    return (
        <PageLayout title="">
            <div className="container mx-auto px-4 py-4 max-w-7xl">

                {/* Header Section */}
                <div className="text-center mb-12 fade-in-up">
                    <Badge variant="outline" className="mb-4 border-primary/20 text-primary bg-primary/5 px-4 py-1">
                        Tax Planning FY 2024-25
                    </Badge>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-primary to-purple-600 pb-2 mb-4 leading-tight">
                        Old vs New Tax Regime
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Compare your tax liability under both regimes and choose the option that maximizes your savings.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start mb-20 animate-fade-in">

                    {/* Input Section */}
                    <Card className="border-border/50 shadow-2xl overflow-hidden relative fade-in-up">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-600" />
                        <CardHeader className="bg-muted/30 border-b border-border/50 p-8">
                            <CardTitle className="text-2xl flex items-center gap-3">
                                <Calculator className="w-8 h-8 text-primary" />
                                Calculator Inputs
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-8 space-y-8">
                            <div className="space-y-6">
                                <div className="space-y-3">
                                    <Label htmlFor="income" className="text-lg font-semibold flex items-center gap-2">
                                        <IndianRupee className="w-5 h-5 text-primary" />
                                        Total Annual Income (Salaried)
                                    </Label>
                                    <Input
                                        id="income"
                                        type="number"
                                        placeholder="e.g. 12,00,000"
                                        value={income}
                                        onChange={(e) => setIncome(e.target.value)}
                                        className="h-14 text-xl font-bold bg-muted/20"
                                    />
                                    <p className="text-sm text-muted-foreground">*Standard deduction (₹75k for New, ₹50k for Old) will be added automatically.</p>
                                </div>

                                <div className="space-y-3">
                                    <Label htmlFor="deductions" className="text-lg font-semibold flex items-center gap-2">
                                        <Scale className="w-5 h-5 text-indigo-500" />
                                        Total Deductions (Old Regime)
                                    </Label>
                                    <Input
                                        id="deductions"
                                        type="number"
                                        placeholder="e.g. 1,50,000 (80C, 80D, etc.)"
                                        value={deductions}
                                        onChange={(e) => setDeductions(e.target.value)}
                                        className="h-14 text-xl font-bold bg-muted/20"
                                    />
                                    <ul className="text-xs text-muted-foreground space-y-1 pl-1">
                                        <li>• 80C (LIC, PF, ELSS) - Limit ₹1.5L</li>
                                        <li>• 80D (Health Insurance) - Limit ₹25k-50k</li>
                                        <li>• House Rent Allowance (HRA)</li>
                                    </ul>
                                </div>
                            </div>

                            <Button onClick={calculateTaxes} size="lg" className="w-full text-xl h-16 shadow-xl hover:shadow-2xl transition-all bg-gradient-to-r from-blue-600 to-indigo-700 hover:scale-[1.02] transform">
                                Compare Regimes <ArrowRight className="ml-2 w-6 h-6" />
                            </Button>
                        </CardContent>
                    </Card>

                    {/* Result Section */}
                    <div className="space-y-6">
                        {results ? (
                            <div className="space-y-6 animate-fade-in">
                                <div className="grid grid-cols-2 gap-6">
                                    <Card className={`overflow-hidden border-2 transition-all duration-500 ${results.oldTax < results.newTax ? 'border-green-500 bg-green-50 shadow-green-100' : 'border-slate-200 bg-slate-50'}`}>
                                        <CardContent className="p-8 text-center space-y-4">
                                            <p className="text-sm font-bold uppercase tracking-widest text-slate-500">Old Regime</p>
                                            <div className="text-3xl md:text-4xl font-black text-slate-900">
                                                <AnimatedNumber value={results.oldTax} />
                                            </div>
                                            {results.oldTax < results.newTax && (
                                                <Badge className="bg-green-600 text-white animate-bounce-subtle">Lower Tax</Badge>
                                            )}
                                        </CardContent>
                                    </Card>

                                    <Card className={`overflow-hidden border-2 transition-all duration-500 ${results.newTax < results.oldTax ? 'border-green-500 bg-green-50 shadow-green-100' : 'border-slate-200 bg-slate-50'}`}>
                                        <CardContent className="p-8 text-center space-y-4">
                                            <p className="text-sm font-bold uppercase tracking-widest text-slate-500">New Regime</p>
                                            <div className="text-3xl md:text-4xl font-black text-slate-900">
                                                <AnimatedNumber value={results.newTax} />
                                            </div>
                                            {results.newTax < results.oldTax && (
                                                <Badge className="bg-green-600 text-white animate-bounce-subtle">Lower Tax</Badge>
                                            )}
                                        </CardContent>
                                    </Card>
                                </div>

                                <Card className="bg-primary text-white p-8 overflow-hidden relative group">
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-900 opacity-90" />
                                    <div className="absolute top-0 right-0 p-4 opacity-20 transform translate-x-4 -translate-y-4">
                                        <TrendingDown className="w-32 h-32" />
                                    </div>
                                    <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
                                        <div className="space-y-2">
                                            <h3 className="text-2xl font-bold">Our Recommendation</h3>
                                            <p className="text-blue-100 italic">
                                                You save <span className="font-black text-white px-2 py-0.5 bg-white/20 rounded">₹{Math.abs(results.oldTax - results.newTax).toLocaleString('en-IN')}</span> per year
                                            </p>
                                        </div>
                                        <div className="text-center md:text-right">
                                            <p className="text-xs font-bold uppercase tracking-widest text-blue-200 mb-1">Choose the</p>
                                            <div className="text-3xl font-black bg-white text-blue-700 px-6 py-2 rounded-xl shadow-lg">
                                                {results.oldTax < results.newTax ? 'OLD REGIME' : 'NEW REGIME'}
                                            </div>
                                        </div>
                                    </div>
                                </Card>

                                <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl flex gap-3 text-amber-800">
                                    <AlertCircle className="w-5 h-5 shrink-0" />
                                    <p className="text-sm leading-relaxed">
                                        <strong>Disclaimer:</strong> This calculator provides an estimate based on the information entered. Actual tax liability may vary. For accurate filing, we recommend expert-assisted tax filing.
                                    </p>
                                </div>
                            </div>
                        ) : (
                            <div className="h-full flex flex-col items-center justify-center p-12 bg-muted/20 border border-dashed border-border rounded-3xl space-y-6">
                                <div className="w-20 h-20 bg-background rounded-full flex items-center justify-center shadow-inner">
                                    <TrendingDown className="w-10 h-10 text-muted-foreground/30" />
                                </div>
                                <div className="text-center space-y-2">
                                    <p className="text-xl font-bold text-slate-500">Calculate to see Comparison</p>
                                    <p className="text-muted-foreground">Enter your income details to see the best regime for you.</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Information Sections */}
                <div className="grid md:grid-cols-2 gap-12 mb-20">
                    <div className="space-y-8 fade-in-up delay-100">
                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold flex items-center gap-3">
                                <Info className="w-6 h-6 text-primary" />
                                About This Tool
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                The Old vs New Tax Regime Calculator helps you compare your income tax liability under both regimes and choose the option that results in lower tax payable.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                This tool simplifies decision-making by clearly showing tax under both regimes and recommending the better option based on your potential savings.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold flex items-center gap-3">
                                <Target className="w-6 h-6 text-indigo-500" />
                                How the Tool Works
                            </h2>
                            <ul className="space-y-4">
                                {[
                                    "Enter your annual income (incl. salary, rental, etc.)",
                                    "Add eligible deductions applicable for Old Regime",
                                    "Calculator computes tax under both regimes instantly",
                                    "Visual side-by-side comparison for easy review",
                                    "Get a clear suggestion on the better option"
                                ].map((step, i) => (
                                    <li key={i} className="flex gap-4 items-center bg-white p-4 rounded-xl border border-border/50 shadow-sm transition-all hover:shadow-md">
                                        <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm shrink-0">
                                            {i + 1}
                                        </div>
                                        <span className="font-medium text-slate-700">{step}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="space-y-8 fade-in-up delay-200">
                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold flex items-center gap-3">
                                <Scale className="w-6 h-6 text-orange-500" />
                                Key Differences
                            </h2>
                            <div className="grid gap-6">
                                <div className="p-6 bg-blue-50/50 border border-blue-100 rounded-3xl space-y-4">
                                    <div className="flex items-center gap-2 text-blue-700 font-bold text-lg">
                                        <Plus className="w-6 h-6" /> Old Tax Regime
                                    </div>
                                    <ul className="text-sm text-slate-600 space-y-3">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                                            <span>Allows deductions under Section 80C, 80D, 80G, etc.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                                            <span>Exemptions like HRA, LTA, and Professional Tax apply.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                                            <span>Suitable for those with home loans and insurance premiums.</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="p-6 bg-purple-50/50 border border-purple-100 rounded-3xl space-y-4">
                                    <div className="flex items-center gap-2 text-purple-700 font-bold text-lg">
                                        <Minus className="w-6 h-6" /> New Tax Regime
                                    </div>
                                    <ul className="text-sm text-slate-600 space-y-3">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-purple-500 mt-0.5 shrink-0" />
                                            <span>Lower slab rates with Nil tax up to ₹7 Lakh income.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-purple-500 mt-0.5 shrink-0" />
                                            <span>No major deductions or exemptions permitted.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-purple-500 mt-0.5 shrink-0" />
                                            <span>Simplified tax structure with minimal paperwork.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold flex items-center gap-3">
                                <Users className="w-6 h-6 text-green-500" />
                                Who Should Use This?
                            </h2>
                            <div className="flex flex-wrap gap-3">
                                {[
                                    "Salaried Employees",
                                    "Freelancers",
                                    "Professionals",
                                    "First-time Taxpayers",
                                    "Senior Citizens"
                                ].map(tag => (
                                    <Badge key={tag} className="px-4 py-2 rounded-full bg-slate-100 text-slate-700 hover:bg-primary hover:text-white transition-colors cursor-default">
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Final CTA Section */}
                <section className="bg-slate-900 rounded-[3rem] p-12 text-center text-white relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -mr-32 -mt-32" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[100px] -ml-32 -mb-32" />
                    <div className="relative z-10 space-y-8">
                        <h2 className="text-3xl md:text-5xl font-black tracking-tighter">Still Confused? Take Expert Help.</h2>
                        <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                            Our team of certified CAs can help you optimize your tax planning and ensure you never pay a rupee more than required.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-6 pt-4">
                            <Button size="lg" className="rounded-full px-10 h-16 text-lg font-bold shadow-2xl bg-white text-slate-900 hover:bg-slate-100 hover:scale-105 transition-all">
                                Book Assisted Filing
                            </Button>
                            <Button size="lg" variant="outline" className="rounded-full px-10 h-16 text-lg font-bold border-white/20 hover:bg-white/10 transition-all">
                                Chat With Us
                            </Button>
                        </div>
                    </div>
                </section>

            </div>
        </PageLayout>
    );
};

export default RegimeComparison;
