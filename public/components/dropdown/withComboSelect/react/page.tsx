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
  const dropdownRef = React.useRef(null); // Ref for the dropdown menu

  const toggleOption = (option) => {
    setSelectedOptions((prev) =>
      prev.includes(option) ? prev.filter((item) => item !== option) : [...prev, option]
    );
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const toggleDropdown = () => {
    setOpen((prev) => !prev);
  };

  // This function checks if the clicked area is outside of the dropdown
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  // Add event listener when component mounts and remove on unmount
  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
    <div ref={dropdownRef}> {/* Attach the ref to the dropdown root */}
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
            <Button onClick={toggleDropdown}>{open ? "Close" : "Open"}</Button>
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
    </div>
  );
}

export default DropdownMenuSelect;
