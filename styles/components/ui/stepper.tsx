import React from 'react';

interface StepProps {
    isActive?: boolean;
    isCompleted?: boolean;
    onClick: () => void;
    className?: string; // Optional className for steps with children
    children?: React.ReactNode; // Optional children to allow for icons or numbers
}

const Step: React.FC<StepProps> = ({ isActive, isCompleted, onClick, className, children }) => {
    // Determine style for active, completed, and default states
    const activeStyle = 'bg-black text-white';
    const completedStyle = 'bg-gray-900 text-white';
    const defaultStyle = 'bg-white border-gray-400';

    // Default sizes for dot and icon representations
    const defaultDotSize = 'h-4 w-4'; // Small dot size when no children
    const defaultIconSize = 'w-10 h-10'; // Default icon size when children are present

    // Choose style based on whether the step is active, completed, or neither
    const stepStyle = `flex items-center justify-center rounded-full cursor-pointer border-2 ${
        isActive ? activeStyle : isCompleted ? completedStyle : defaultStyle
    }`;

    return (
        <div className={`flex items-center justify-center ${!children && 'flex-col'} mt-2 mb-2`} onClick={onClick}>
            <div className={`${stepStyle} ${children ? className || defaultIconSize : defaultDotSize}`}>
                {children}
            </div>
        </div>
    );
};

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
        <div className="flex items-center justify-center py-4">
            {steps.map((step, index) => (
                <React.Fragment key={index}>
                    {React.cloneElement(step as React.ReactElement, {
                        isActive: index === activeStep,
                        isCompleted: index < activeStep,
                    })}
                    {index < totalSteps - 1 && (
                        <div className={`flex-auto border-t-2 transition duration-500 ease-in-out ${
                            index < activeStep ? 'border-black' : 'border-gray-300'
                        } mx-2`} />
                    )}
                </React.Fragment>
            ))}
        </div>
    );
};

export { Stepper, Step };
