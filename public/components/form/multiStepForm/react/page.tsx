import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { useToast } from "@/components/ui/toast/use-toast";
import { Toaster } from "@/components/ui/toast/toaster";
import { Card, CardContent, CardHeader, CardFooter, CardTitle } from "@/components/ui/card";

function MultiStepForm() {
    const { toast } = useToast();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        birthday: undefined,
        username: '',
        password: '',
    });

    const isValidStep = () => {
        switch (step) {
            case 1:
                return formData.firstName && formData.lastName;
            case 2:
                return formData.email && formData.phoneNumber;
            case 3:
                return formData.birthday;
            case 4:
                return formData.username && formData.password;
            default:
                return false;
        }
    };

    const handleNextStep = () => {
        if (isValidStep()) {
            setStep(step + 1);
        } else {
            toast({ title: 'Error', description: 'Please fill out all required fields.' });
        }
    };

    const handlePreviousStep = () => {
        if (step > 1) setStep(step - 1);
    };

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleBirthdayChange = (date) => {
        setFormData({ ...formData, birthday: date });
    };

    const handleSubmit = () => {
        toast({
            title: 'Registration Complete',
            description: `Welcome ${formData.username}! Your registration is complete.`,
        });
    };

    return (
        <Card className="mx-auto bg-white rounded-lg shadow-md overflow-hidden" style={{ width: '400px' }}>
            <CardHeader>
                <CardTitle>Multi-Step Form</CardTitle>
            </CardHeader>
            <CardContent>
                <Toaster />
                <div className='form-container'>
                    {step === 1 && (
                        <div className="space-y-4">
                            <CardTitle>Personal Information</CardTitle>
                            <Input name='firstName' value={formData.firstName} onChange={handleInputChange} placeholder='First name' required />
                            <Input name='lastName' value={formData.lastName} onChange={handleInputChange} placeholder='Last name' required />
                            <div className="mt-4 flex justify-between">
                                <Button onClick={handleNextStep}>Next</Button>
                            </div>
                        </div>
                    )}
                    {step === 2 && (
                        <div className="space-y-4">
                            <CardTitle>Contact Information</CardTitle>
                            <Input name='email' value={formData.email} onChange={handleInputChange} placeholder='Email' required />
                            <Input name='phoneNumber' value={formData.phoneNumber} onChange={handleInputChange} placeholder='Phone number' required />
                            <div className="mt-4 flex justify-between">
                                <Button onClick={handlePreviousStep}>Previous</Button>
                                <Button onClick={handleNextStep}>Next</Button>
                            </div>
                        </div>
                    )}
                    {step === 3 && (
                        <div className="space-y-4">
                            <CardTitle>Date of Birth</CardTitle>
                            <Calendar selected={formData.birthday} onDayClick={handleBirthdayChange} />
                            <div className="mt-4 flex justify-between">
                                <Button onClick={handlePreviousStep}>Previous</Button>
                                <Button onClick={handleNextStep}>Next</Button>
                            </div>
                        </div>
                    )}

                    {step === 4 && (
                        <div className="space-y-4">
                            <CardTitle>Account Information</CardTitle>
                            <Input name='username' value={formData.username} onChange={handleInputChange} placeholder='Username' required />
                            <Input name='password' value={formData.password} onChange={handleInputChange} placeholder='Password' required />
                            <div className="mt-4 flex justify-between">
                                <Button onClick={handlePreviousStep}>Previous</Button>
                                <Button onClick={handleSubmit}>Submit</Button>
                            </div>
                        </div>
                    )}

                </div>
            </CardContent>
            <CardFooter>
                <span>Step {step} of 4</span>
            </CardFooter>
        </Card>
    );
}

export default MultiStepForm;
