import React from 'react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../../styles/components/ui/navigation-menu";

export function TopNavigationBar() {
  // Directly render the top navigation bar without state management
  return (
    <NavigationMenu style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '8px 0' }}>
      <NavigationMenuList style={{ display: 'flex', listStyle: 'none', padding: 0 }}>
        {/* Each NavigationMenuItem is now arranged horizontally */}
        <NavigationMenuItem>
          <NavigationMenuLink style={{ display: 'block', padding: '8px 16px', textDecoration: 'none', color: 'black' }} href="https://www.sydney.edu.au/">Home</NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink style={{ display: 'block', padding: '8px 16px', textDecoration: 'none', color: 'black' }} href="https://www.sydney.edu.au/about-us.html">About Us</NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink style={{ display: 'block', padding: '8px 16px', textDecoration: 'none', color: 'black' }} href="https://www.sydney.edu.au/contact-us.html">Contact</NavigationMenuLink>
        </NavigationMenuItem>
        {/* add NavigationMenuItem rule */}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default TopNavigationBar;
