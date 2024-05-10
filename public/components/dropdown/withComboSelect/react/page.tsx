import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../../../../styles/components/ui/dropdown-menu";

export function DropdownMenuSelect() {
  const [selectedOptions, setSelectedOptions] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const toggleOption = (option) => {
    setSelectedOptions((prev) =>
      prev.includes(option) ? prev.filter((item) => item !== option) : [...prev, option]
    );
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const handleTriggerClick = () => {
    setOpen((prev) => !prev);
  };

  const removeOption = (option) => {
    setSelectedOptions((prev) => prev.filter((item) => item !== option));
  };

  const options = ["Account Settings", "Support", "License", "Signout"];
  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchTerm)
  );

  const tagStyle = {
    marginRight: "10px",
    marginBottom: "10px",
    backgroundColor: "#f0f0f0",
    borderRadius: "12px",
    padding: "4px 8px",
    display: "flex",
    alignItems: "center",
    cursor: "default"
  };
  const inputStyle = {
    padding: "8px",
    margin: "8px",
    width: "calc(100% - 16px)",
    border: "1px solid #ccc"
  };

  const dropdownItemStyle = {
    padding: "20px",
    width: "100%",
    cursor: "pointer"
  };

  return (
    <DropdownMenu open={open}>
      <DropdownMenuTrigger asChild>
        <div style={{ border: '1px solid #ccc', padding: '2px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
            {selectedOptions.map((option) => (
              <div key={option} style={tagStyle}>
                {option}
              </div>
            ))}
          </div>
          <Button onClick={handleTriggerClick}>▼</Button>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
          style={inputStyle}
          onFocus={(e) => e.target.style.borderColor = '#007bff'}
          onBlur={(e) => e.target.style.borderColor = '#ccc'}
        />
        <DropdownMenuSeparator />
        {filteredOptions.map((option) => (
          <DropdownMenuCheckboxItem
            key={option}
            checked={selectedOptions.includes(option)}
            onCheckedChange={() => toggleOption(option)}
            style={dropdownItemStyle}
          >
            {option}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default DropdownMenuSelect;
