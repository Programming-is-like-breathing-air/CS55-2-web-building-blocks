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
        <div className="w-full px-24 py-4">
            <Stepper
                activeStep={activeStep}
                isLastStep={(value) => setIsLastStep(value)}
                isFirstStep={(value) => setIsFirstStep(value)}
            >
                <Step onClick={() => setActiveStep(0)}>
                    <UserIcon className="h-5 w-5" />
                    <div className="absolute -bottom-[4.5rem] w-max text-center">
                        <h1
                            color={activeStep === 0 ? "blue-gray" : "gray"}
                        >
                            Step 1
                        </h1>
                        <p
                            color={activeStep === 0 ? "blue-gray" : "gray"}
                            className="font-normal"
                        >
                            Details about yout account.
                        </p>
                    </div>
                </Step>
                <Step onClick={() => setActiveStep(1)}>
                    <CogIcon className="h-5 w-5" />
                    <div className="absolute -bottom-[4.5rem] w-max text-center">
                        <h1
                            color={activeStep === 1 ? "blue-gray" : "gray"}
                        >
                            Step 2
                        </h1>
                        <p
                            color={activeStep === 1 ? "blue-gray" : "gray"}
                            className="font-normal"
                        >
                            Details about yout account.
                        </p>
                    </div>
                </Step>
                <Step onClick={() => setActiveStep(2)}>
                    <BuildingLibraryIcon className="h-5 w-5" />
                    <div className="absolute -bottom-[4.5rem] w-max text-center">
                        <h1
                            color={activeStep === 2 ? "blue-gray" : "gray"}
                        >
                            Step 3
                        </h1>
                        <p
                            color={activeStep === 2 ? "blue-gray" : "gray"}
                            className="font-normal"
                        >
                            Details about yout account.
                        </p>
                    </div>
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