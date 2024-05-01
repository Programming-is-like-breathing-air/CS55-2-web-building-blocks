import React, { useState, useEffect } from 'react';
import { Input } from "../../../../../styles/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../../../../../styles/components/ui/dropdown-menu";

export function InputMention() {
  const [inputValue, setInputValue] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [cursorPosition, setCursorPosition] = useState(null);
  const [suggestions, setSuggestions] = useState(['afc163', 'zombieJ', 'yesmeck']); // 初始化建议列表

  useEffect(() => {
    const atIndex = inputValue.lastIndexOf("@");
    if (atIndex !== -1) {
      const nextChar = inputValue[atIndex + 1];
      if (!nextChar || nextChar.trim() === '') {  // 确保 "@" 后面是空白或无字符
        setShowDropdown(true);
        setCursorPosition(atIndex + 1);
      } else {
        setShowDropdown(false);
      }
    } else {
      setShowDropdown(false);
    }
  }, [inputValue]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSelect = (suggestion) => {
    const prefix = inputValue.substring(0, cursorPosition);
    const suffix = inputValue.substring(cursorPosition);
    const newInputValue = `${prefix}${suggestion}${suffix}`;
    setInputValue(newInputValue);
    setShowDropdown(false);
  };

  return (
    <DropdownMenu open={showDropdown}>
      <DropdownMenuTrigger asChild>
        <Input
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Type here and use '@' to trigger the menu"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        {suggestions.map(suggestion => (
          <DropdownMenuCheckboxItem key={suggestion} onClick={() => handleSelect(suggestion)}>
            {suggestion}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default InputMention;
