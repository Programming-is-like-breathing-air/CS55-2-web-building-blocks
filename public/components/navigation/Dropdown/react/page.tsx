import React, { useState } from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "../../../../../styles/components/ui/navigation-menu";

export function NavigationMenuDemo() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the display state of the drop-down menu
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Stop event bubbling to prevent the menu from closing when the drop-down content is clicked
  const handleDropdownClick = (e) => {
    e.stopPropagation();
  };
//Dropdown menus will be at least 200px wide, if the content requires more space the width will automatically increase to accommodate the content
  return (
    <NavigationMenu onClick={toggleDropdown}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Menu</NavigationMenuTrigger>
          {isOpen && (
            <NavigationMenuContent onClick={handleDropdownClick} style={{ minWidth: '200px', width: 'auto', padding: '8px 0' }}>
    
              {/*link */}
              <NavigationMenuLink style={{ display: 'block', padding: '8px 0', textDecoration: 'none', color: 'black' }} href="https://www.sydney.edu.au/">University</NavigationMenuLink>
              <NavigationMenuLink style={{ display: 'block', padding: '8px 0', textDecoration: 'none', color: 'black' }} href="https://www.sydney.edu.au/">of</NavigationMenuLink>
              <NavigationMenuLink style={{ display: 'block', padding: '8px 0', textDecoration: 'none', color: 'black' }} href="https://www.sydney.edu.au/">Sydney</NavigationMenuLink>
            </NavigationMenuContent>
          )}
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

//link to tsx
  export default NavigationMenuDemo;