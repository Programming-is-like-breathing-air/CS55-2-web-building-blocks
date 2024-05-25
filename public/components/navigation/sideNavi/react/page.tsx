import React from 'react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export function SideNaviDemo() {
  // Directly render the top navigation bar without state management
  return (
    <NavigationMenu style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '8px 0' }}>
      <NavigationMenuList style={{ display: 'flex', flexDirection: 'column', listStyle: 'none', padding: 0, margin: 0 }}>
        {/* Each NavigationMenuItem is now arranged vertically */}
        <NavigationMenuItem>
          <NavigationMenuLink style={{ display: 'block', padding: '8px 16px', textDecoration: 'none', color: 'black', backgroundColor: 'transparent', transition: 'background-color 0.3s' }} href="https://www.sydney.edu.au/"
           onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#FFE0D9'}
           onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
            Home
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink style={{ display: 'block', padding: '8px 16px', textDecoration: 'none', color: 'black', backgroundColor: 'transparent', transition: 'background-color 0.3s' }} href="https://www.sydney.edu.au/about-us.html"
           onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#FFE0D9'}
           onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
            About Us
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink style={{ display: 'block', padding: '8px 16px', textDecoration: 'none', color: 'black', backgroundColor: 'transparent', transition: 'background-color 0.3s' }} href="https://www.sydney.edu.au/contact-us.html"
           onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#FFE0D9'}
           onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
            Contact
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default SideNaviDemo;