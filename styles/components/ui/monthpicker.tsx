import * as React from "react"
import { startOfYear, addMonths } from "date-fns"

export interface MonthPickerProps {
  value: Date | undefined
  onChange: (value: Date) => void
}

const MonthPicker: React.FC<MonthPickerProps> = ({ value, onChange }) => {
  const [selectedMonth, setSelectedMonth] = React.useState<Date | undefined>(
    value || startOfYear(new Date())
  )

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = new Date(event.target.value)
    setSelectedMonth(selectedValue)
    onChange(selectedValue)
  }

  const renderMonthOptions = () => {
    const options = []
    for (let i = 0; i < 12; i++) {
      const monthDate = addMonths(startOfYear(new Date()), i)
      const monthLabel = monthDate.toLocaleString('en-US', { month: 'long' }) 
      const year = monthDate.getFullYear()
      options.push(
        <option key={i} value={monthDate.toISOString()}>
          {`${monthLabel} ${year}`}
        </option>
      )
    }
    return options
  }

  return (
    <select value={selectedMonth?.toISOString()} onChange={handleChange}>
      {renderMonthOptions()}
    </select>
  )
}

export default MonthPicker
