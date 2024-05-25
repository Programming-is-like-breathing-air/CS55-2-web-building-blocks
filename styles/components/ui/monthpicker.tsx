import * as React from "react";
import { startOfYear, addMonths } from "date-fns";

export interface MonthPickerProps {
  value: Date | undefined;
  onChange: (value: Date) => void;
  yearRange?: number[]; // Specify the range of years to display
}

const MonthPicker: React.FC<MonthPickerProps> = ({
  value,
  onChange,
  yearRange,
}) => {
  const [selectedMonth, setSelectedMonth] = React.useState<number>(
    value ? value.getMonth() : new Date().getMonth()
  );
  const [selectedYear, setSelectedYear] = React.useState<number>(
    value ? value.getFullYear() : new Date().getFullYear()
  );

  const handleChangeMonth = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMonth(parseInt(event.target.value));
    onChange(new Date(selectedYear, parseInt(event.target.value)));
  };

  const handleChangeYear = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(parseInt(event.target.value));
    onChange(new Date(parseInt(event.target.value), selectedMonth));
  };

  const renderMonthOptions = () => {
    const options = [];
    for (let month = 0; month < 12; month++) {
      const monthDate = addMonths(startOfYear(new Date(selectedYear)), month);
      const monthLabel = monthDate.toLocaleString("en-US", { month: "long" });
      options.push(
        <option key={month} value={month}>
          {monthLabel}
        </option>
      );
    }
    return options;
  };

  const renderYearOptions = () => {
    const options = [];
    const currentYear = new Date().getFullYear();
    const startYear = yearRange && yearRange[0] ? yearRange[0] : currentYear - 5;
    const endYear = yearRange && yearRange[1] ? yearRange[1] : currentYear + 5;

    for (let year = startYear; year <= endYear; year++) {
      options.push(
        <option key={year} value={year}>
          {year}
        </option>
      );
    }
    return options;
  };

  return (
    <div>
      <select value={selectedMonth} onChange={handleChangeMonth}>
        {renderMonthOptions()}
      </select>
      <select value={selectedYear} onChange={handleChangeYear}>
        {renderYearOptions()}
      </select>
    </div>
  );
};

export default MonthPicker;
