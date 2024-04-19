import * as React from "react"

export interface TimePickerProps {
  value: Date | undefined
  onChange: (value: Date) => void
}

const TimePicker: React.FC<TimePickerProps> = ({ value, onChange }) => {
  const [hours, setHours] = React.useState<number>(0)
  const [minutes, setMinutes] = React.useState<number>(0)

 
  React.useEffect(() => {
    if (value) {
      setHours(value.getHours())
      setMinutes(value.getMinutes())
    }
  }, [value])


  const handleHoursChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newHours = parseInt(event.target.value, 10)
    setHours(newHours)
    onChange(new Date(value ? value.setHours(newHours) : 0))
  }

  
  const handleMinutesChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newMinutes = parseInt(event.target.value, 10)
    setMinutes(newMinutes)
    onChange(new Date(value ? value.setMinutes(newMinutes) : 0))
  }


  const renderHourOptions = () => {
    const options = []
    for (let i = 0; i < 24; i++) {
      options.push(
        <option key={i} value={i}>
          {i.toString().padStart(2, "0")}
        </option>
      )
    }
    return options
  }


  const renderMinuteOptions = () => {
    const options = []
    for (let i = 0; i < 60; i += 5) {
      options.push(
        <option key={i} value={i}>
          {i.toString().padStart(2, "0")}
        </option>
      )
    }
    return options
  }

  return (
    <div className="flex items-center">
      <select value={hours} onChange={handleHoursChange} className="mr-2">
        {renderHourOptions()}
      </select>
      <span className="mr-2">:</span>
      <select value={minutes} onChange={handleMinutesChange}>
        {renderMinuteOptions()}
      </select>
    </div>
  )
}

export default TimePicker
