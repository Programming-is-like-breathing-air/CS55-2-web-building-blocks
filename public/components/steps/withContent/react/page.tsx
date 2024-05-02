import React from "react";
import { Stepper, Step } from "../../../../../styles/components/ui/stepper";
import { Button } from "../../../../../styles/components/ui/button";

import {
    CogIcon,
    UserIcon,
    BuildingLibraryIcon,
} from "@heroicons/react/24/outline";

export function StepperWithContent() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [isLastStep, setIsLastStep] = React.useState(false);
    const [isFirstStep, setIsFirstStep] = React.useState(false);


    const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
    const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

    return (
        <div className="w-full px-48 py-4">
            <Stepper
                activeStep={activeStep}
                isLastStep={(value) => setIsLastStep(value)}
                isFirstStep={(value) => setIsFirstStep(value)}
            >
                <Step
                    onClick={() => setActiveStep(0)}
                    title="Step 1"
                    subtitle={"1. this is description of step 1"}
                    isActive={activeStep === 0}
                    isCompleted={activeStep > 0}
                >
                    <UserIcon className="h-5 w-5" />
                </Step>
                <Step
                    onClick={() => setActiveStep(1)}
                    title="Step 2"
                    subtitle={"2. this is description of step 2"}
                    isActive={activeStep === 1}
                    isCompleted={activeStep > 1}
                >
                    <CogIcon className="h-5 w-5" />
                </Step>
                <Step
                    onClick={() => setActiveStep(2)}
                    title="Step 3"
                    subtitle={"3. this is description of step 3"}
                    isActive={activeStep === 2}
                    isCompleted={activeStep > 2}
                >
                    <BuildingLibraryIcon className="h-5 w-5k"  />
                </Step>
            </Stepper>
            <div className="mt-32 flex justify-between">
                <Button onClick={handlePrev} disabled={isFirstStep}>
                    Prev
                </Button>
                <Button onClick={handleNext} disabled={isLastStep}>
                    Next
                </Button>
            </div>
        </div>
    );
}

export default StepperWithContent;