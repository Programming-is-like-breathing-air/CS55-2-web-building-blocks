import React, { useState, useEffect, useRef } from 'react';
import { Input } from "../../../../../styles/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../../../../../styles/components/ui/dropdown-menu";

export function InputMention() {
  const [inputValue, setInputValue] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    const triggerChar = inputValue[inputValue.length - 1];
    if (triggerChar === '@') {
      setSuggestions(["qq.com", "icloud.com", "gmail.com"]);
      setShowDropdown(true);
    } else if (triggerChar === '#') {
      setSuggestions(["1.0", "2.0", "3.0"]);
      setShowDropdown(true);
    } else if (!inputValue.includes('@') && !inputValue.includes('#')) {
      setShowDropdown(false);
    }
  }, [inputValue]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSelect = (suggestion) => {

    const lastAt = inputValue.lastIndexOf('@');
    const lastHash = inputValue.lastIndexOf('#');
    const lastIndex = Math.max(lastAt, lastHash);
    if (lastIndex !== -1) {
      setInputValue(inputValue.substring(0, lastIndex + 1) + suggestion + ' ');
      setShowDropdown(false);
    }
    setTimeout(() => {
      inputRef.current.focus();
    }, 0);
  };

  return (
    <>
      <Input
        ref={inputRef}
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type here and use '@' or '#' to trigger the menu"
        style={{ width: '500px' }}
      />
      <DropdownMenu open={showDropdown}>
        <DropdownMenuTrigger asChild>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          {suggestions.map((suggestion, index) => (
            <DropdownMenuCheckboxItem key={index} onClick={() => handleSelect(suggestion)}>
              {suggestion}
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </>


  );
}

export default InputMention;
