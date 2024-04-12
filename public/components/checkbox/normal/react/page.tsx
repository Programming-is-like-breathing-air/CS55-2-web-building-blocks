import { Checkbox } from "../../../../../styles/components/ui/checkbox"

export function CheckboxDemo() {
  // Function to show an alert when a checkbox is clicked
  function handleCheckboxClick() {
    alert("Checkbox was clicked!");
  }

  return (
    <div className="flex flex-col space-y-4"> 
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" onClick={handleCheckboxClick} />
        <label
          htmlFor="terms"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Default checkbox
        </label>
      </div>
      
      <div className="flex items-center space-x-2">
        <Checkbox id="newsletter" onClick={handleCheckboxClick} /> 
        <label
          htmlFor="newsletter"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Checked State
        </label>
      </div>
    </div>
  )
}

export default CheckboxDemo;
