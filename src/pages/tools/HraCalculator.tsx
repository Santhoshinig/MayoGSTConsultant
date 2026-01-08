import PageLayout from "@/components/PageLayout";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calculator, CheckCircle2, Home, Info, Users, IndianRupee } from "lucide-react";

const HraCalculator = () => {
    const [basic, setBasic] = useState<string>("");
    const [hraReceived, setHraReceived] = useState<string>("");
    const [rentPaid, setRentPaid] = useState<string>("");
    const [cityType, setCityType] = useState<"metro" | "non-metro">("non-metro");
    const [result, setResult] = useState<{ exempt: number; taxable: number } | null>(null);

    const calculateHRA = () => {
        const basicSalary = parseFloat(basic) || 0;
        const actualHra = parseFloat(hraReceived) || 0;
        const actualRent = parseFloat(rentPaid) || 0;
        const isMetro = cityType === "metro";

        // Logic
        // 1. Actual HRA received
        const option1 = actualHra;
        // 2. Rent Paid – 10% of Basic Salary
        const option2 = Math.max(0, actualRent - (basicSalary * 0.10));
        // 3. 50% of Basic (Metro) OR 40% (Non-Metro)
        const option3 = basicSalary * (isMetro ? 0.50 : 0.40);

        const exemptAmount = Math.min(option1, option2, option3);
        const taxableHra = Math.max(0, actualHra - exemptAmount);

        setResult({ exempt: exemptAmount, taxable: taxableHra });
    };

    return (
        <PageLayout title="">
            <div className="container mx-auto px-4 py-4 max-w-7xl">

                {/* Header Section */}
                <div className="text-center mb-12 fade-in-up">
                    <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-4 border border-blue-100">
                        <Home className="w-4 h-4" />
                        <span>Section 10(13A) Exemption</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-primary to-purple-600 drop-shadow-sm pb-2 mb-4">
                        HRA Calculator
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Calculate your House Rent Allowance (HRA) exemption and maximize your tax savings
                        based on the Income Tax Act rules.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">

                    {/* Calculator Card */}
                    <Card className="border-border/50 shadow-xl overflow-hidden fade-in-up delay-100 relative">
                        <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-600" />
                        <CardHeader className="bg-muted/30 pb-6 border-b border-border/50">
                            <CardTitle className="text-2xl flex items-center gap-2">
                                <Calculator className="w-6 h-6 text-primary" />
                                HRA Exemption Tool
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-6 md:p-8 space-y-6">

                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="basic" className="text-base flex items-center gap-2">
                                        <IndianRupee className="w-4 h-4 text-muted-foreground" />
                                        Annual Basic Salary + DA (₹)
                                    </Label>
                                    <Input
                                        id="basic"
                                        type="number"
                                        placeholder="e.g. 5,00,000"
                                        value={basic}
                                        onChange={(e) => setBasic(e.target.value)}
                                        className="h-12 text-lg"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="hra" className="text-base">Annual HRA Received (₹)</Label>
                                    <Input
                                        id="hra"
                                        type="number"
                                        placeholder="e.g. 2,00,000"
                                        value={hraReceived}
                                        onChange={(e) => setHraReceived(e.target.value)}
                                        className="h-12 text-lg"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="rent" className="text-base">Annual Rent Paid (₹)</Label>
                                    <Input
                                        id="rent"
                                        type="number"
                                        placeholder="e.g. 1,80,000"
                                        value={rentPaid}
                                        onChange={(e) => setRentPaid(e.target.value)}
                                        className="h-12 text-lg"
                                    />
                                </div>

                                <div className="space-y-3 pt-2">
                                    <Label className="text-base">City Type</Label>
                                    <Tabs value={cityType} onValueChange={(v) => setCityType(v as "metro" | "non-metro")} className="w-full">
                                        <TabsList className="grid w-full grid-cols-2 h-12">
                                            <TabsTrigger value="metro" className="text-base">Metro (50%)</TabsTrigger>
                                            <TabsTrigger value="non-metro" className="text-base">Non-Metro (40%)</TabsTrigger>
                                        </TabsList>
                                    </Tabs>
                                    <p className="text-[10px] text-muted-foreground italic">
                                        *Metro: Mumbai, Delhi, Kolkata, Chennai.
                                    </p>
                                </div>
                            </div>

                            <Button onClick={calculateHRA} size="lg" className="w-full text-lg h-12 shadow-lg hover:shadow-xl transition-all bg-gradient-to-r from-blue-600 to-indigo-700">
                                Calculate Exemption
                            </Button>

                            {/* Result Area */}
                            {result && (
                                <div className="mt-8 pt-6 border-t border-dashed animate-fade-in space-y-4">
                                    <div className="bg-green-50 p-5 rounded-xl border border-green-100 flex justify-between items-center group hover:bg-green-100/50 transition-colors">
                                        <div>
                                            <p className="text-sm font-medium text-green-700">Exempt HRA Amount</p>
                                            <p className="text-2xl font-extrabold text-green-800">₹ {result.exempt.toLocaleString('en-IN')}</p>
                                        </div>
                                        <div className="bg-green-200 p-2 rounded-lg text-green-700 group-hover:scale-110 transition-transform">
                                            <CheckCircle2 className="w-6 h-6" />
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center p-4 bg-orange-50/50 rounded-xl border border-orange-100">
                                        <span className="text-sm font-medium text-orange-700">Taxable HRA Amount</span>
                                        <span className="font-bold text-lg text-orange-800">₹ {result.taxable.toLocaleString('en-IN')}</span>
                                    </div>
                                </div>
                            )}
                        </CardContent>
                    </Card>

                    {/* Information Section */}
                    <div className="space-y-8 fade-in-up delay-200">

                        <div className="space-y-4">
                            <h3 className="text-xl font-bold flex items-center gap-2">
                                <Info className="w-5 h-5 text-primary" />
                                About HRA Calculator
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                House Rent Allowance (HRA) is a crucial part of a salaried individual's salary structure.
                                Our tool helps you accurately determine the portion of HRA that is non-taxable,
                                helping you plan your tax declarations better.
                            </p>
                            <ul className="grid md:grid-cols-2 gap-3">
                                {[
                                    "Save on Income Tax",
                                    "Plan your Rent Budget",
                                    "Instant Calculations",
                                    "FY 2024-25 Ready"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-2 bg-white p-3 rounded-lg border border-border/50 shadow-sm">
                                        <CheckCircle2 className="w-4 h-4 text-blue-500" />
                                        <span className="text-sm font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-xl font-bold flex items-center gap-2">
                                <Home className="w-5 h-5 text-primary" />
                                How it's Calculated
                            </h3>
                            <div className="bg-muted/50 p-5 rounded-xl border border-border/50 space-y-4">
                                <p className="text-sm font-semibold">Exemption is the LEAST of these three:</p>
                                <ol className="space-y-3 text-sm">
                                    <li className="flex gap-3">
                                        <span className="bg-primary/10 text-primary w-6 h-6 rounded-full flex items-center justify-center shrink-0 font-bold">1</span>
                                        <span>Actual HRA received from employer</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="bg-primary/10 text-primary w-6 h-6 rounded-full flex items-center justify-center shrink-0 font-bold">2</span>
                                        <span>Rent paid minus 10% of basic salary</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="bg-primary/10 text-primary w-6 h-6 rounded-full flex items-center justify-center shrink-0 font-bold">3</span>
                                        <span>50% of basic (Metro cities) or 40% (Non-Metro)</span>
                                    </li>
                                </ol>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-xl font-bold flex items-center gap-2 text-foreground/90">
                                <Users className="w-5 h-5 text-primary" />
                                Who benefits from this?
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {["Salaried Employees", "Tenants", "Taxpayers", "Financial Planners"].map((tag) => (
                                    <Badge key={tag} variant="outline" className="px-3 py-1.5 text-sm">
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </PageLayout>
    );
};

export default HraCalculator;
