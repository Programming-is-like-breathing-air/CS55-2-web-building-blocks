import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../../../styles/components/ui/dropdown-menu";

export function DropdownMenuSelect() {
  const [selectedOptions, setSelectedOptions] = React.useState(["s28", "t29"]);
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleOption = (option) => {
    setSelectedOptions((prev) =>
      prev.includes(option) ? prev.filter((item) => item !== option) : [...prev, option]
    );
  };

  const removeOption = (option, event) => {
    event.stopPropagation(); // Prevent dropdown from toggling when removing an item
    setSelectedOptions((prev) => prev.filter((item) => item !== option));
  };

  return (
    <div>
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" onClick={() => setIsOpen(!isOpen)} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', alignItems: 'center' }}>
              {selectedOptions.length > 0 ? selectedOptions.map((option) => (
                <span key={option} style={{ padding: '3px 5px', display: 'flex', alignItems: 'center', background: '#E0E0E0', borderRadius: '4px' }}>
                  {option}
                  <span onClick={(event) => removeOption(option, event)} style={{ marginLeft: '5px', cursor: 'pointer', color: 'red' }}>
                  </span>
                </span>
              )) : "Please select"}
            </div>
            <span style={{ marginLeft: 'auto' }}>▼</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent style={{ maxHeight: '200px', overflowY: 'auto' }}>
          <DropdownMenuSeparator />
          {['a10', 'b11', 'c12', 'd13', 'e14', 'f15', 'g16', 'h17', 's28', 't29', 'u30', 'v31', 'w32', 'x33', 'y34', 'z35'].map((option) => (
            <DropdownMenuCheckboxItem
              key={option}
              checked={selectedOptions.includes(option)}
              onCheckedChange={() => toggleOption(option)}
            >
              {option}
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default DropdownMenuSelect;
