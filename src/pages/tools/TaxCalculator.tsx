import PageLayout from "@/components/PageLayout";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

const TaxCalculator = () => {
    const [income, setIncome] = useState<string>("");
    const [deductions, setDeductions] = useState<string>("0");
    const [tax, setTax] = useState<number | null>(null);

    const calculateTax = () => {
        const totalIncome = parseFloat(income);
        const totalDeductions = parseFloat(deductions);

        if (isNaN(totalIncome)) {
            alert("Please enter a valid income");
            return;
        }

        const taxableIncome = Math.max(0, totalIncome - totalDeductions);
        let calculatedTax = 0;

        // Simplified New Regime Slabs (FY 2023-24 onwards)
        if (taxableIncome <= 300000) {
            calculatedTax = 0;
        } else if (taxableIncome <= 600000) {
            calculatedTax = (taxableIncome - 300000) * 0.05;
        } else if (taxableIncome <= 900000) {
            calculatedTax = 15000 + (taxableIncome - 600000) * 0.10;
        } else if (taxableIncome <= 1200000) {
            calculatedTax = 45000 + (taxableIncome - 900000) * 0.15;
        } else if (taxableIncome <= 1500000) {
            calculatedTax = 90000 + (taxableIncome - 1200000) * 0.20;
        } else {
            calculatedTax = 150000 + (taxableIncome - 1500000) * 0.30;
        }

        // Rebate u/s 87A for income up to 7 Lakhs in New Regime
        if (taxableIncome <= 700000) {
            calculatedTax = 0;
        }

        // Cess (4%)
        const cess = calculatedTax * 0.04;
        setTax(calculatedTax + cess);
    };

    return (
        <PageLayout>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-6 text-center">Income Tax Calculator</h1>
                <div className="max-w-xl mx-auto">
                    <Card>
                        <CardHeader>
                            <CardTitle>Calculate Your Taxes (New Regime)</CardTitle>
                            <CardDescription>Enter your annual income to get an estimate.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="income">Annual Income (₹)</Label>
                                <Input
                                    id="income"
                                    type="number"
                                    placeholder="e.g. 12,00,000"
                                    value={income}
                                    onChange={(e) => setIncome(e.target.value)}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="deductions">Calculated Deductions (₹)</Label>
                                <Input
                                    id="deductions"
                                    type="number"
                                    placeholder="0"
                                    value={deductions}
                                    onChange={(e) => setDeductions(e.target.value)}
                                />
                            </div>
                            <Button onClick={calculateTax} className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                                Calculate Tax
                            </Button>

                            {tax !== null && (
                                <div className="mt-6 p-4 bg-muted rounded-lg text-center animate-fade-in">
                                    <p className="text-lg font-medium text-muted-foreground">Estimated Tax Liability</p>
                                    <p className="text-3xl font-bold text-primary">₹ {tax.toLocaleString('en-IN')}</p>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </PageLayout>
    );
};

export default TaxCalculator;
