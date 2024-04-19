import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon, Clock as ClockIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "../../../../../styles/components/ui/button"
import { Calendar } from "../../../../../styles/components/ui/calendar"
import TimePicker from "../../../../../styles/components/ui/timepicker" 
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../../../../styles/components/ui/popover"

export function DateTimeInput() {
  const [dateTime, setDateTime] = React.useState<Date>()

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[300px] justify-start text-left font-semibold text-xl",
            !dateTime && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-5 w-5" />
          {dateTime ? (
            format(dateTime, "PPP")
          ) : (
            <span>&nbsp;&nbsp;Pick a date&nbsp;&nbsp;&nbsp;</span>
          )}
          <ClockIcon className="ml-auto mr-2 h-5 w-5" />
          {dateTime ? (
            format(dateTime, "p")
          ) : (
            <span>&nbsp;&nbsp;Pick a time</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <div className="flex justify-between items-center p-4">
          <Calendar
            mode="single"
            selected={dateTime}
            onSelect={(date) => setDateTime(date)}
            initialFocus
          />
          <TimePicker
            value={dateTime}
            onChange={(time) => setDateTime(time)}
          />
        </div>
      </PopoverContent>
    </Popover>
  )
}
export default DateTimeInput;
