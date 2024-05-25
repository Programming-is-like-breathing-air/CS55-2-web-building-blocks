import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/lib/utils"

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => {
  // Add a state to track the slider's value
  const [value, setValue] = React.useState(props.defaultValue || [0]);

  // Handle events when slider value changes
  const handleValueChange = (value) => {
    console.log("Current Slider Value:", value[0]); // Output the current slider value to the console
    setValue(value); // update status
  };

  // Handle the event when the slider drag ends
  const handleDragEnd = () => {
    console.log("Final Slider Value:", value[0]); // When dragging ends, output the final slider value to the console
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <SliderPrimitive.Root
        ref={ref}
        className={cn(
          "relative flex touch-none select-none items-center",
          className
        )}
        style={{ width: '500px' }} // Set the width of the slider to 50% of the parent container
        onValueChange={handleValueChange} // Set value change event handler function
        onMouseUp={handleDragEnd} // Set the mouse release event handler function
        onTouchEnd={handleDragEnd} // Set the touch end event handler function
        {...props}
      >
        <SliderPrimitive.Track className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-gray-300">
          <SliderPrimitive.Range className="absolute h-full bg-primary" />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb className="block h-4 w-4 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" />
      </SliderPrimitive.Root>
    </div>
  );
})
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
