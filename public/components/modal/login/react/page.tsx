import { useState } from 'react';
import { Button } from "../../../../../styles/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogFooter,
    DialogDescription,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../../../../../styles/components/ui/dialog"
import { Input } from "../../../../../styles/components/ui/input"
import { Label } from "../../../../../styles/components/ui/label"
import { useToast } from "../../../../../styles/components/ui/toast/use-toast"
import { Toaster } from "../../../../../styles/components/ui/toast/toaster";

export function LoginModal() {
    const [Username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { toast } = useToast();

    const handleLogin = () => {
        toast({
            description:
                <div className="w-[340px] rounded-md bg-slate-950 p-4 text-black">
                    Username is: {Username}
                </div>
        });
    };


    return (
        <>
            <Toaster />
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="default">Login</Button>
                </DialogTrigger>
                <DialogContent style={{ backgroundColor: 'white' }} className="p-6 rounded-md">
                    <DialogHeader className="mb-4">
                        <DialogTitle className="text-xl font-bold">Login to Your Student Account</DialogTitle>
                    </DialogHeader>
                    <div className="flex flex-col gap-4">
                        <Label htmlFor="username">Username (UniKey)</Label>
                        <Input id="username" placeholder="Your UniKey" value={Username} onChange={(e) => setUsername(e.target.value)} />

                        <Label htmlFor="password">Password</Label>
                        <Input id="password" type="password" placeholder="Your Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <a href="#" className="text-sm text-orange-600 hover:text-orange-700">Forgot your password?</a>
                    </div>
                    <DialogFooter className="flex justify-center mt-6">
                        <Button variant="destructive" onClick={handleLogin}>Login</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default LoginModal;