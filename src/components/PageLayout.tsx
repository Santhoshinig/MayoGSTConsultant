import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

interface PageProps {
    title: string;
    children: React.ReactNode;
}

const PageLayout = ({ title, children }: PageProps) => {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Navbar />
            <main className="flex-grow pt-16">
                {title && (
                    <div className="container mx-auto px-4 mb-6">
                        <h1 className="text-3xl font-bold text-foreground">{title}</h1>
                    </div>
                )}
                <div className="prose max-w-none">
                    {children}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default PageLayout;
