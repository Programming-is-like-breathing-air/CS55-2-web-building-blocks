import * as React from "react";
import { startOfWeek, addWeeks, format, getISOWeeksInYear } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "../../../../../styles/components/ui/button";
import { Calendar } from "../../../../../styles/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../../../../styles/components/ui/popover";

function getWeeksInYear(year) {
  return getISOWeeksInYear(new Date(year, 11, 31));
}

export function WeekPicker({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  const currentYear = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = React.useState(currentYear);
  const [selectedWeek, setSelectedWeek] = React.useState(1);

  const handleYearChange = (event) => {
    const year = parseInt(event.target.value);
    setSelectedYear(year);
  };

  const handleWeekChange = (event) => {
    const week = parseInt(event.target.value);
    setSelectedWeek(week);
  };

  const weeksInYear = getWeeksInYear(selectedYear);

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "w-[300px] justify-start text-left font-semibold text-xl",
              !selectedYear && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            <span>{selectedYear && `Pick a week`}</span>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <div className="flex flex-col items-center space-y-2 p-4">
            <div className="flex items-center">
              <select value={selectedYear} onChange={handleYearChange}>
                {Array.from({ length: 10 }, (_, i) => currentYear - 5 + i).map(
                  (year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  )
                )}
              </select>
              <span className="mx-2">Year</span>
            </div>
            <div className="flex items-center">
              <select value={selectedWeek} onChange={handleWeekChange}>
                {Array.from({ length: weeksInYear }, (_, i) => i + 1).map(
                  (week) => (
                    <option key={week} value={week}>
                      {week}
                    </option>
                  )
                )}
              </select>
              <span className="mx-2">Week</span>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default WeekPicker;
