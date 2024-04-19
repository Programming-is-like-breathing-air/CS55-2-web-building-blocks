import * as React from "react"
import { format } from "date-fns"
import { Clock as ClockIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "../../../../../styles/components/ui/button"
import TimePicker from "../../../../../styles/components/ui/timepicker" 
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../../../../styles/components/ui/popover"

export function TimePickerDemo() {
  const [time, setTime] = React.useState<Date>()

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
          onChange={setTime}
        />
      </PopoverContent>
    </Popover>
  )
}
export default TimePickerDemo;
