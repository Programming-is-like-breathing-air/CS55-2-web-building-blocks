
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { useToast } from "@/components/ui/toast/use-toast"
import { Toaster } from "@/components/ui/toast/toaster";

export function ConfirmModal() {
    const { toast } = useToast();

    return (
        <>
            <Toaster />
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="outline">Submit Application</Button>
                </DialogTrigger>
                <DialogContent style={{ backgroundColor: 'white' }} className="p-6 rounded-md">
                    <DialogHeader>
                        <DialogTitle>Submit Application</DialogTitle>
                    </DialogHeader>
                    <DialogDescription>
                        Are you sure you want to submit your application? You will not be able to make changes after that.
                    </DialogDescription>
                    <DialogFooter className="flex justify-center space-x-4 mt-4">
                        <Button variant="default" onClick={() => { toast({ description: "Message has been sent.", }); }}>Confirm</Button>
                        <DialogClose asChild>
                            <Button variant="secondary">Cancel</Button>
                        </DialogClose>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

        </>

    )
}

export default ConfirmModal;