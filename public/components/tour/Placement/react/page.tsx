import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/button";

const PlacementTour = () => {
  const ref = useRef(null);
  const [tourStep, setTourStep] = useState(0);
  const [tourStarted, setTourStarted] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });

  const steps = [
    {
      title: "Center",
      description: "Displayed in the center of screen.",
      placement: "center",
      target: null,
    },
    {
      title: "Right",
      description: "On the right of target.",
      placement: "right",
      target: () => ref.current,
    },
    {
      title: "Top",
      description: "On the top of target.",
      placement: "top",
      target: () => ref.current,
    },
  ];

  const handleNext = () => {
    if (tourStep < steps.length - 1) {
      setTourStep((prevStep) => prevStep + 1);
    }
  };

  const handleBeginTour = () => {
    setTourStarted(true);
    setTourStep(1);
  };

  const calculateTooltipPosition = () => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      let top = 0;
      let left = 0;

      switch (steps[tourStep].placement) {
        case "right":
          left = rect.right + 8;
          top = rect.top + (rect.height - 250) / 2;
          break;
        case "top":
          left = rect.left + (rect.width - 200) / 2;
          top = rect.top - 250 - 8;
          break;
        default:
          // Center placement
          left = window.innerWidth / 2 - 100;
          top = window.innerHeight / 2 - 125;
          break;
      }

      setTooltipPosition({ top, left });
    }
  };

  React.useEffect(() => {
    calculateTooltipPosition();
  }, [tourStep]);

  return (
    <div style={{ position: "relative" }}>
      <Button onClick={handleBeginTour} ref={ref}>
        Begin Tour
      </Button>
      {tourStarted && tourStep < steps.length && (
        <div
          style={{
            position: "absolute",
            top: tooltipPosition.top,
            left: tooltipPosition.left,
          }}
        >
          <div
            style={{
              width: "200px",
              padding: "12px",
              border: "1px solid #ccc",
              borderRadius: "6px",
              backgroundColor: "#fff",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}
          >
            <h3 style={{ marginBottom: "8px" }}>
              {steps[tourStep].title}
            </h3>
            <p style={{ marginBottom: "16px" }}>
              {steps[tourStep].description}
            </p>
            <div style={{ textAlign: "right" }}>
              <Button onClick={handleNext}>
                {tourStep < steps.length - 1 ? "Next" : "Finish"}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlacementTour;
