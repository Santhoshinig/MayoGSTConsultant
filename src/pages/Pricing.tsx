import PageLayout from "@/components/PageLayout";

const Pricing = () => (
    <PageLayout title="Pricing Plans">
        <div className="grid md:grid-cols-3 gap-6">
            <div className="border p-6 rounded-lg text-center">
                <h3 className="font-bold text-xl mb-2">Self Filing</h3>
                <p className="text-3xl font-bold text-primary mb-4">₹199</p>
                <p className="mb-4">For salaried individuals with single Form 16</p>
                <button className="w-full bg-primary text-primary-foreground py-2 rounded">Choose</button>
            </div>
            <div className="border p-6 rounded-lg text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-secondary text-secondary-foreground text-xs px-2 py-1">Popular</div>
                <h3 className="font-bold text-xl mb-2">Pro</h3>
                <p className="text-3xl font-bold text-primary mb-4">₹499</p>
                <p className="mb-4">For individuals with multiple income sources</p>
                <button className="w-full bg-primary text-primary-foreground py-2 rounded">Choose</button>
            </div>
            <div className="border p-6 rounded-lg text-center">
                <h3 className="font-bold text-xl mb-2">Expert Assisted</h3>
                <p className="text-3xl font-bold text-primary mb-4">₹1,499</p>
                <p className="mb-4">CA assisted filing for complex returns</p>
                <button className="w-full bg-secondary text-secondary-foreground py-2 rounded">Contact Us</button>
            </div>
        </div>
    </PageLayout>
);

export default Pricing;
