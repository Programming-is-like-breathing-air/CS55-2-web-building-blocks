import * as React from "react"
import { format } from "date-fns"
import { Clock as ClockIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import TimePicker from "@/components/ui/timepicker" 
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { useToast } from "@/components/ui/toast/use-toast"
import { ToastAction } from "@/components/ui/toast/toast"

export function TimePickerDemo() {
  const [time, setTime] = React.useState<Date>()
  const { toast } = useToast();

  const handleTimeChange = (selectedTime: Date | undefined) => {
    setTime(selectedTime);
    if (selectedTime) {
      toast({
        description: `Selected Time: ${format(selectedTime, "p")}`,
        action: (
          <ToastAction altText="Undo">Undo</ToastAction>
        ),
      });
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[300px] justify-start text-left font-semibold text-xl",
            !time && "text-muted-foreground"
          )}
        >
          <ClockIcon className="mr-2 h-5 w-5" />
          {time ? format(time, "p") : <span>&nbsp;&nbsp;Pick a time</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <TimePicker
          value={time}
          onChange={handleTimeChange}
        />
      </PopoverContent>
    </Popover>
  )
}
export default TimePickerDemo;
