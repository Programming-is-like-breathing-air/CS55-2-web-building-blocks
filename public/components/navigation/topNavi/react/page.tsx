import React from 'react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '../../../../../styles/components/ui/navigation-menu';

export function TopNavigationBar() {
  // Assume an `isActive` function is defined to determine the active navigation item
  // This function should be implemented based on your routing logic
  const isActive = (href) => {
    // The logic to determine the active page goes here, returning false for demonstration
    return false;
  };

  // Inline styles for the logo to align with your current structure
  const logoStyle = {
    marginRight: '20px', // Space between logo and navigation items
  };

  // Inline style for the current navigation item
  const activeStyle = {
    backgroundColor: '#C60000', // Background color for the active item
    color: 'white', // Text color for the active item
  };

  return (
    <NavigationMenu style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '8px 0' }}>
      {/* University logo */}
      <img src="../assets/usyd_logo.3d05bd1c.svg" alt="University of Sydney Logo" style={logoStyle} />
      {/* Navigation items */}
      <NavigationMenuList style={{ display: 'flex', listStyle: 'none', padding: 0 }}>
        {/* Home - Navigation item */}
        <NavigationMenuItem>
          <NavigationMenuLink
            style={isActive('https://www.sydney.edu.au/') ? activeStyle : null}
            href="https://www.sydney.edu.au/"
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#FFE0D9'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = isActive('https://www.sydney.edu.au/') ? '#C60000' : 'transparent'}
          >
            Home
          </NavigationMenuLink>
        </NavigationMenuItem>
        {/* About Us - Navigation item */}
        <NavigationMenuItem>
          <NavigationMenuLink
            style={isActive('https://www.sydney.edu.au/about-us.html') ? activeStyle : null}
            href="https://www.sydney.edu.au/about-us.html"
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#FFE0D9'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = isActive('https://www.sydney.edu.au/about-us.html') ? '#C60000' : 'transparent'}
          >
            About Us
          </NavigationMenuLink>
        </NavigationMenuItem>
        {/* Contact - Navigation item */}
        <NavigationMenuItem>
          <NavigationMenuLink
            style={isActive('https://www.sydney.edu.au/contact-us.html') ? activeStyle : null}
            href="https://www.sydney.edu.au/contact-us.html"
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#FFE0D9'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = isActive('https://www.sydney.edu.au/contact-us.html') ? '#C60000' : 'transparent'}
          >
            Contact
          </NavigationMenuLink>
        </NavigationMenuItem>
        {/* Additional navigation items can be added here */}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default TopNavigationBar;
