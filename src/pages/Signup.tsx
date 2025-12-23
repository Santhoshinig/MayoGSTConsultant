import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";

const Signup = () => (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
            <h1 className="text-2xl font-bold mb-6 text-center">Create an Account</h1>
            <form className="space-y-4">
                <div>
                    <label className="block text-sm font-medium mb-1">Full Name</label>
                    <input type="text" className="w-full p-2 border rounded" placeholder="John Doe" />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input type="email" className="w-full p-2 border rounded" placeholder="you@example.com" />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">Password</label>
                    <input type="password" className="w-full p-2 border rounded" placeholder="********" />
                </div>
                <Button className="w-full">Sign Up</Button>
            </form>
            <p className="mt-4 text-center text-sm">Already have an account? <a href="/login" className="text-primary hover:underline">Login</a></p>
        </div>
    </div>
);

export default Signup;
