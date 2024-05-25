
"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useToast } from "@/components/ui/toast/use-toast"
import { Toaster } from "@/components/ui/toast/toaster";


const FormSchema = z.object({
    type: z.enum(["all", "mentions", "none"], {
        required_error: "You need to select a notification type.",
    }),
})

export function RadioGroupForm() {
    const { toast } = useToast();
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {
        console.log("Submit function called with data:", data);
        toast({
            title: "You submitted the following values:",
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-black">{JSON.stringify(data, null, 2)}</code>
                </pre>
            ),
        })
        console.log("Successfully Submit");
    }

    return (
        <>
            <Toaster />

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-3">
                    <FormField
                        control={form.control}
                        name="type"
                        render={({ field }) => (
                            <FormItem className="space-y-0">
                                <FormLabel >Notify me about...</FormLabel>
                                <FormControl>
                                    <RadioGroup
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                        className="flex flex-col space-y-1"
                                    >
                                        <FormItem className="flex items-center space-x-3 space-y-0" style={{ marginTop: '5px'}}>
                                            <FormControl style={{ marginRight: '2px'}}>
                                                <RadioGroupItem value="all" />
                                            </FormControl>
                                            <FormLabel className="font-normal">
                                                All new messages
                                            </FormLabel>
                                        </FormItem>
                                        <FormItem className="flex items-center space-x-3 space-y-0">
                                            <FormControl style={{ marginRight: '2px'}}>
                                                <RadioGroupItem value="mentions" />
                                            </FormControl>
                                            <FormLabel className="font-normal">
                                                Direct messages and mentions
                                            </FormLabel>
                                        </FormItem>
                                        <FormItem className="flex items-center space-x-3 space-y-0">
                                            <FormControl style={{ marginRight: '2px'}}>
                                                <RadioGroupItem value="none" />
                                            </FormControl>
                                            <FormLabel className="font-normal">Nothing</FormLabel>
                                        </FormItem >
                                    </RadioGroup>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button variant="outline" style={{ marginTop: '15px', color: 'black' }}>Submit</Button>
                </form>
            </Form>
        </>

    )
}

export default RadioGroupForm;