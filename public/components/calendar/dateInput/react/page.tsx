import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useToast } from "@/components/ui/toast/use-toast";
import { ToastAction } from "@/components/ui/toast/toast";

export function DatePickerDemo() {
  const [date, setDate] = React.useState<Date>();
  const { toast } = useToast();

  const handleDateSelect = (selectedDate: Date | undefined) => {
    setDate(selectedDate);
    if (selectedDate) {
      // Trigger toast when a date is selected
      toast({
        description: `You selected: ${format(selectedDate, "PPP")}`,
        action: (
          <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
        ),
      });

      // Display additional toast with the selected date
      toast({
        description: `Selected Date: ${format(selectedDate, "PPPP")}`,
      });
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[300px] justify-start text-left ffont-semibold text-xl",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-5 w-5" />
          {date ? format(date, "PPP") : <span>&nbsp;&nbsp;Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={handleDateSelect}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}

export default DatePickerDemo;
