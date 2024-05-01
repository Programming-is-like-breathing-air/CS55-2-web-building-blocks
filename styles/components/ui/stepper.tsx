import React from "react";

interface StepProps {
    label: string;
    isActive: boolean;
    isCompleted: boolean;
    onClick: () => void;
}

const Step: React.FC<StepProps> = ({ label, isActive, isCompleted, onClick }) => (
    <div className={`flex flex-col items-center ${isActive || isCompleted ? 'text-black' : 'text-gray-400'}`} onClick={onClick}>
        {/* Added mt-4 and mb-4 for top and bottom margin */}
        <div className={`w-10 h-10 flex items-center justify-center rounded-full border-2 ${isActive || isCompleted ? 'bg-gray-900 text-white' : 'bg-white border-gray-400'} mt-4 mb-4`}>
            {label}
        </div>
        {/* Optional: If you want the lines to also have some vertical space from the steps, you can add margins to the line as well */}
    </div>
);

interface StepperProps {
    activeStep: number;
    children: React.ReactElement[];
    isLastStep: (isLast: boolean) => void;
    isFirstStep: (isFirst: boolean) => void;
}

const Stepper: React.FC<StepperProps> = ({ activeStep, children, isLastStep, isFirstStep }) => {
    const steps = React.Children.toArray(children);
    const totalSteps = steps.length;

    React.useEffect(() => {
        isLastStep(activeStep === totalSteps - 1);
        isFirstStep(activeStep === 0);
    }, [activeStep, totalSteps, isLastStep, isFirstStep]);

    return (
        <div className="flex items-center justify-center">
            {steps.map((step, index) => (
                <React.Fragment key={index}>
                    {/* Step component */}
                    {React.cloneElement(step as React.ReactElement, {
                        label: (index + 1).toString(),
                        isActive: index === activeStep,
                        isCompleted: index < activeStep,
                        onClick: () => { (step as React.ReactElement).props.onClick(); },
                    })}
                    {/* Line between steps */}
                    {index < totalSteps - 1 && (
                        // Optional: Add margin to the line if needed
                        <div className={`flex-auto border-t-2 transition duration-500 ease-in-out ${index < activeStep ? 'border-black' : 'border-gray-300'}`}></div>
                    )}
                </React.Fragment>
            ))}
        </div>
    );
};

export { Stepper, Step };
