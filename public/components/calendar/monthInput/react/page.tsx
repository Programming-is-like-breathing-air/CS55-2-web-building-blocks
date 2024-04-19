import * as React from "react"
import { format, startOfYear } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "../../../../../styles/components/ui/button"

import MonthPicker from "../../../../../styles/components/ui/monthpicker"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../../../../styles/components/ui/popover"

export function MonthPickerDemo() {
  const [selectedMonth, setSelectedMonth] = React.useState<Date | undefined>()
  const formattedMonth = selectedMonth ? format(selectedMonth, "MMMM yyyy") : ""

  const handleMonthChange = (newMonth: Date) => {
    setSelectedMonth(newMonth)
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[300px] justify-start text-left font-semibold text-xl",
            !selectedMonth && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-5 w-5" />
          <span>&nbsp;&nbsp;{formattedMonth || "Pick a month"}</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <MonthPicker
          value={selectedMonth}
          onChange={handleMonthChange}
        />
      </PopoverContent>
    </Popover>
  )
}
export default MonthPickerDemo;
