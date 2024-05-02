import { useState, useRef } from "react";
import { Card, CardContent, CardHeader, CardFooter, CardTitle } from "../../../../../styles/components/ui/card";
import { Button } from "../../../../../styles/components/ui/button";

const TourComponent = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const [tourStep, setTourStep] = useState(0);

  const steps = [
    {
      title: "Upload File",
      description: "Put your files here.",
      target: ref1,
    },
    {
      title: "Save",
      description: "Save your changes.",
      target: ref2,
    },
    {
      title: "Other Actions",
      description: "Click to see other actions.",
      target: ref3,
    },
  ];

  const handleNext = () =>
    setTourStep((prev) => (prev < steps.length ? prev + 1 : 0));

  const handlePrevious = () =>
    setTourStep((prev) => (prev > 0 ? prev - 1 : 0));

  const handleFinish = () => setTourStep(0);

  return (
    <div className="p-4">
      <Card className="w p-4">
        <CardHeader>
          <CardTitle>Tour component</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div className="flex">
            <Button
              onClick={() => setTourStep(1)}
              className="w-2/3"
            >
              Begin Tour
            </Button>
          </div>
          <div className="flex gap-2">
            <Button
              ref={ref1}
              style={tourStep === 1 ? { backgroundColor: "#E2573E" } : {}}
            >
              Upload
            </Button>
            <Button
              ref={ref2}
              style={tourStep === 2 ? { backgroundColor: "#E2573E" } : {}}
            >
              Save
            </Button>
            <Button
              ref={ref3}
              style={tourStep === 3 ? { backgroundColor: "#E2573E" } : {}}
            >
              ...
            </Button>
          </div>
        </CardContent>
      </Card>

      {tourStep > 0 && (
        <div
          className="absolute p-4 border bg-white rounded shadow-lg mt-2"
          style={{
            top:
              steps[tourStep - 1].target.current.getBoundingClientRect()
                .bottom + window.scrollY + 8,
            left:
              steps[tourStep - 1].target.current.getBoundingClientRect()
                .left + window.scrollX,
          }}
        >
          <Card className="text-center">
            <CardHeader>
              <CardTitle>{steps[tourStep - 1].title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{steps[tourStep - 1].description}</p>
            </CardContent>
            <CardFooter className="flex justify-between p-4">
              {tourStep > 1 && (
                <Button onClick={handlePrevious}>Previous</Button>
              )}
              {tourStep < steps.length && (
                <Button onClick={handleNext}>Next</Button>
              )}
              {tourStep === steps.length && (
                <Button onClick={handleFinish}>Finish</Button>
              )}
            </CardFooter>
          </Card>
        </div>
      )}
    </div>
  );
};

export default TourComponent;
