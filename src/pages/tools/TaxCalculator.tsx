import PageLayout from "@/components/PageLayout";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calculator, CheckCircle2, ChevronRight, Info, Users } from "lucide-react";

const TaxCalculator = () => {
    const [income, setIncome] = useState<string>("");
    const [deductions, setDeductions] = useState<string>("");
    const [regime, setRegime] = useState<"old" | "new">("new");
    const [result, setResult] = useState<{ taxable: number; tax: number } | null>(null);

    const calculate = () => {
        const annualIncome = parseFloat(income) || 0;
        const totalDeductions = parseFloat(deductions) || 0;

        // Taxable logic: New regime often disallows common deductions, but for flexibility 
        // we'll follow the prompt logic: "Taxable = Income - Deductions" for Old, and just Income for New?
        // Prompt logic says: let taxable = regime === "old" ? income - deductions : income;

        let taxable = regime === "old" ? annualIncome - totalDeductions : annualIncome;
        // Basic check to ensure non-negative
        if (taxable < 0) taxable = 0;

        let tax = 0;

        if (regime === "old") {
            // Old Regime Slabs
            // 0 - 2.5L -> 0%
            // 2.5 - 5L -> 5%
            // 5 - 10L -> 20%
            // > 10L -> 30%

            if (taxable > 1000000) tax += (taxable - 1000000) * 0.30;
            if (taxable > 500000) tax += (Math.min(taxable, 1000000) - 500000) * 0.20;
            if (taxable > 250000) tax += (Math.min(taxable, 500000) - 250000) * 0.05;

        } else {
            // New Regime Slabs (FY 2024-25)
            // 0 - 3L -> 0%
            // 3 - 6L -> 5%
            // 6 - 9L -> 10%
            // 9 - 12L -> 15%
            // 12 - 15L -> 20%
            // > 15L -> 30%

            if (taxable > 1500000) tax += (taxable - 1500000) * 0.30;
            if (taxable > 1200000) tax += (Math.min(taxable, 1500000) - 1200000) * 0.20;
            if (taxable > 900000) tax += (Math.min(taxable, 1200000) - 900000) * 0.15;
            if (taxable > 600000) tax += (Math.min(taxable, 900000) - 600000) * 0.10;
            if (taxable > 300000) tax += (Math.min(taxable, 600000) - 300000) * 0.05;
        }

        setResult({ taxable, tax });
    };

    return (
        <PageLayout title="">
            <div className="container mx-auto px-4 py-4 max-w-7xl">

                {/* Header */}
                <div className="text-center mb-12 fade-in-up">
                    <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4 border border-primary/20">
                        <Calculator className="w-4 h-4" />
                        <span>Effective for FY 2024-25</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-primary to-purple-600 drop-shadow-sm pb-2 mb-4">
                        Income Tax Calculator
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Estimate your tax liability instantly based on your income and deductions.
                        Supports both Old and New Tax Regimes.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">

                    {/* Calculator Section */}
                    <Card className="border-border/50 shadow-xl overflow-hidden fade-in-up delay-100 relative">
                        <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-primary to-purple-500" />
                        <CardHeader className="bg-muted/30 pb-6 border-b border-border/50">
                            <CardTitle className="text-2xl flex items-center gap-2">
                                <Calculator className="w-6 h-6 text-primary" />
                                Calculate Your Tax
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-6 md:p-8 space-y-6">

                            {/* Inputs */}
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="income" className="text-base">Annual Income (₹)</Label>
                                    <Input
                                        id="income"
                                        type="number"
                                        placeholder="e.g. 1200000"
                                        value={income}
                                        onChange={(e) => setIncome(e.target.value)}
                                        className="h-12 text-lg"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="deductions" className="text-base flex items-center justify-between">
                                        <span>Total Deductions (80C, 80D, etc.)</span>
                                        {regime === "new" && <span className="text-xs text-orange-500 font-normal">(Ignored in New Regime)</span>}
                                    </Label>
                                    <Input
                                        id="deductions"
                                        type="number"
                                        placeholder="e.g. 150000"
                                        value={deductions}
                                        onChange={(e) => setDeductions(e.target.value)}
                                        className="h-12 text-lg"
                                        disabled={regime === "new"}
                                    />
                                </div>

                                <div className="space-y-3 pt-2">
                                    <Label className="text-base">Select Tax Regime</Label>
                                    <Tabs value={regime} onValueChange={(v) => setRegime(v as "old" | "new")} className="w-full">
                                        <TabsList className="grid w-full grid-cols-2 h-12">
                                            <TabsTrigger value="new" className="text-base">New Regime</TabsTrigger>
                                            <TabsTrigger value="old" className="text-base">Old Regime</TabsTrigger>
                                        </TabsList>
                                    </Tabs>
                                </div>
                            </div>

                            <Button onClick={calculate} size="lg" className="w-full text-lg h-12 shadow-lg hover:shadow-xl transition-all bg-gradient-to-r from-primary to-purple-600">
                                Calculate Tax
                            </Button>

                            {/* Result Display */}
                            {result && (
                                <div className="mt-8 pt-6 border-t border-dashed animate-fade-in space-y-4">
                                    <div className="flex justify-between items-center text-sm text-muted-foreground">
                                        <span>Taxable Income</span>
                                        <span className="font-medium">₹ {result.taxable.toLocaleString('en-IN')}</span>
                                    </div>
                                    <div className="bg-primary/5 p-4 rounded-xl border border-primary/10 flex justify-between items-center">
                                        <span className="font-bold text-lg text-foreground">Total Tax Payable</span>
                                        <span className="font-extrabold text-2xl text-primary">₹ {result.tax.toLocaleString('en-IN')}</span>
                                    </div>
                                    <p className="text-xs text-center text-muted-foreground">
                                        * Cess and Surcharge may apply additionally based on total liability.
                                    </p>
                                </div>
                            )}
                        </CardContent>
                    </Card>

                    {/* Information Section */}
                    <div className="space-y-8 fade-in-up delay-200">

                        {/* What It Does */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold flex items-center gap-2">
                                <Info className="w-5 h-5 text-primary" />
                                What This Tool Does
                            </h3>
                            <ul className="space-y-3">
                                {[
                                    "Calculates taxable income instantly",
                                    "Computes tax as per latest slab rates",
                                    "Shows total tax payable clearly",
                                    "Helps in better financial planning"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 bg-white p-3 rounded-lg border border-border/50 shadow-sm">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                                        <span className="text-sm font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Who Should Use It */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold flex items-center gap-2">
                                <Users className="w-5 h-5 text-primary" />
                                Who Should Use It?
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {["Salaried Individuals", "Freelancers", "Professionals", "Business Owners"].map((tag, i) => (
                                    <Badge key={i} variant="secondary" className="px-3 py-1.5 text-sm">
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                        </div>

                        {/* Slab Rates Logic Display */}
                        <div className="bg-muted/50 p-6 rounded-xl border border-border/50 text-sm">
                            <h4 className="font-bold mb-4 text-base">Tax Calculation Logic (FY 2024–25)</h4>

                            <div className="grid grid-cols-2 gap-8">
                                <div>
                                    <p className="font-semibold text-primary mb-2">New Regime</p>
                                    <ul className="space-y-1 text-muted-foreground text-xs leading-5">
                                        <li className="flex justify-between"><span>0 – 3L</span> <span>0%</span></li>
                                        <li className="flex justify-between"><span>3 – 6L</span> <span>5%</span></li>
                                        <li className="flex justify-between"><span>6 – 9L</span> <span>10%</span></li>
                                        <li className="flex justify-between"><span>9 – 12L</span> <span>15%</span></li>
                                        <li className="flex justify-between"><span>12 – 15L</span> <span>20%</span></li>
                                        <li className="flex justify-between"><span>Above 15L</span> <span>30%</span></li>
                                    </ul>
                                </div>
                                <div>
                                    <p className="font-semibold text-primary mb-2">Old Regime</p>
                                    <ul className="space-y-1 text-muted-foreground text-xs leading-5">
                                        <li className="flex justify-between"><span>0 – 2.5L</span> <span>0%</span></li>
                                        <li className="flex justify-between"><span>2.5 – 5L</span> <span>5%</span></li>
                                        <li className="flex justify-between"><span>5 – 10L</span> <span>20%</span></li>
                                        <li className="flex justify-between"><span>Above 10L</span> <span>30%</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </PageLayout>
    );
};

export default TaxCalculator;
