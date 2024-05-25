import * as React from "react";
import { Calendar } from "@/components/ui/calendar";
import { useToast } from "@/components/ui/toast/use-toast";
import { Toaster } from "@/components/ui/toast/toaster";
import { Button } from "@/components/ui/button";
import { ToastAction } from "@/components/ui/toast/toast";

export function CalendarDemo() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const { toast } = useToast();

  const handleDateSelect = (selectedDate: Date | undefined) => {
    setDate(selectedDate);
    if (selectedDate) {
      // Trigger toast when a date is selected
      toast({
        description: `You selected: ${selectedDate.toDateString()}`,
        action: (
          <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
        ),
      });
    }
  };

  return (
    <>
      <Toaster />
      <Calendar
        mode="single"
        selected={date}
        onSelect={handleDateSelect}
        className="rounded-md border"
      />
    </>
  );
}

export default CalendarDemo;
