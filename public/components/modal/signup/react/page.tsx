
import { useState } from 'react';
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogFooter,
    DialogDescription,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/toast/use-toast"

export function SignupModal() {
    const [email, setEmail] = useState('');
    const { toast } = useToast();

    const handleSignUp = () => {
        toast({
            title: "Signed up with email: ",
            description:
                <div className="mt-2 w-[340px] rounded-md bg-slate-950 p-4 text-black">
                    {email}
                </div>
        });
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">Sign Up</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Create your student account</DialogTitle>
                    <DialogDescription>
                        E-mail
                    </DialogDescription>
                </DialogHeader>
                <div className="flex items-center space-x-2">
                    <div className="grid flex-1 gap-2">
                        <Label htmlFor="email" className="sr-only">
                            E-mail
                        </Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="Your student e-mail..."
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                </div>
                <DialogFooter className="flex justify-center mt-6">
                    <Button variant="destructive" onClick={handleSignUp}>Sign Up</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default SignupModal;