// TourComponent.jsx
import { useState } from "react";
import { Button, Card, CardContent, CardFooter, CardHeader, CardTitle } from "../../../../styles/components/ui/card";

export function TourComponent() {
  const [step, setStep] = useState(0);

  const steps = [
    {
      title: "Begin Tour",
      content: "Start your journey!",
      buttonText: "Next"
    },
    {
      title: "Upload",
      content: "Upload your files here.",
      buttonText: "Next"
    },
    {
      title: "Save",
      content: "Save your changes.",
      buttonText: "Finish"
    },
  ];

  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    }
  };

  const handlePrevious = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  return (
    <Card className="max-w-md p-4">
      <CardHeader>
        <CardTitle>{steps[step].title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{steps[step].content}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        {step > 0 && (
          <Button variant="outline" onClick={handlePrevious}>
            Previous
          </Button>
        )}
        <Button onClick={handleNext}>{steps[step].buttonText}</Button>
      </CardFooter>
    </Card>
  );
}

export default TourComponent;
