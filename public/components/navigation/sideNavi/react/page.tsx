import React from 'react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../../styles/components/ui/navigation-menu";

export function SideNaviDemo() {
  return (
    <NavigationMenu style={{ width: '250px', height: '100vh', position: 'fixed', top: 0, right: 0, padding: '20px 10px', boxSizing: 'border-box' }}>
      <NavigationMenuList style={{ listStyle: 'none', padding: 0 }}>
        {/* Each NavigationMenuItem is now arranged horizontally */}
        <NavigationMenuItem>
          <NavigationMenuLink style={{ display: 'block', padding: '10px 0', textDecoration: 'none', color: 'black' }} href="https://www.sydney.edu.au/">Home</NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink style={{ display: 'block', padding: '10px 0', textDecoration: 'none', color: 'black' }} href="https://www.sydney.edu.au/about-us.html">About Us</NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink style={{ display: 'block', padding: '10px 0', textDecoration: 'none', color: 'black' }} href="https://www.sydney.edu.au/contact-us.html">Contact</NavigationMenuLink>
        </NavigationMenuItem>
        {/* add NavigationMenuItem rule */}
      </NavigationMenuList>
    </NavigationMenu>
  );
}



export default SideNaviDemo;