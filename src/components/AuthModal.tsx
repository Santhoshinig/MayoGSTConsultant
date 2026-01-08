import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface AuthModalProps {
    defaultTab?: "login" | "signup";
    children: React.ReactNode;
}

export function AuthModal({ defaultTab = "login", children }: AuthModalProps) {
    const [activeTab, setActiveTab] = useState<string>(defaultTab);

    return (
        <Dialog>
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-center text-primary">
                        Welcome to MyTaxMate
                    </DialogTitle>
                    <DialogDescription className="text-center">
                        Manage your taxes efficiently with our expert tools.
                    </DialogDescription>
                </DialogHeader>
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full mt-4">
                    <TabsList className="grid w-full grid-cols-2 mb-4">
                        <TabsTrigger value="login">Login</TabsTrigger>
                        <TabsTrigger value="signup">Sign Up</TabsTrigger>
                    </TabsList>

                    <TabsContent value="login" className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="m@example.com" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" type="password" />
                        </div>
                        <Button className="w-full">Login</Button>
                        <p className="text-xs text-center text-muted-foreground mt-2">
                            Don't have an account? <span className="text-primary cursor-pointer hover:underline" onClick={() => setActiveTab("signup")}>Sign up</span>
                        </p>
                    </TabsContent>

                    <TabsContent value="signup" className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">Full Name</Label>
                            <Input id="name" placeholder="John Doe" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="signup-email">Email</Label>
                            <Input id="signup-email" type="email" placeholder="m@example.com" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="signup-password">Password</Label>
                            <Input id="signup-password" type="password" />
                        </div>
                        <Button className="w-full">Create Account</Button>
                        <p className="text-xs text-center text-muted-foreground mt-2">
                            Already have an account? <span className="text-primary cursor-pointer hover:underline" onClick={() => setActiveTab("login")}>Login</span>
                        </p>
                    </TabsContent>
                </Tabs>
            </DialogContent>
        </Dialog>
    );
}
