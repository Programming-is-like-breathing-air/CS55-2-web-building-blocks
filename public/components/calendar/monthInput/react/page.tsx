import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import MonthPicker from "@/components/ui/monthpicker"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { useToast } from "@/components/ui/toast/use-toast"
import { ToastAction } from "@/components/ui/toast/toast"

export function MonthPickerDemo() {
  const [selectedMonth, setSelectedMonth] = React.useState<Date | undefined>()
  const formattedMonth = selectedMonth ? format(selectedMonth, "MMMM yyyy") : ""
  const { toast } = useToast();

  const handleMonthChange = (newMonth: Date) => {
    setSelectedMonth(newMonth);
    if (newMonth) {
      toast({
        description: `Selected Month: ${format(newMonth, "MMMM yyyy")}`,
        action: (
          <ToastAction altText="Undo">Undo</ToastAction>
        ),
      });
    }
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
