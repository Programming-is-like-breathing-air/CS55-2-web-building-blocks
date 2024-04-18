import React from 'react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../../styles/components/ui/navigation-menu";

export function SideNaviDemo() {
  // Define the style for the navigation menu container using React's CSSProperties
  // to ensure type correctness.
  const menuStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column', // TypeScript recognizes 'column' as a literal type for flexDirection.
    justifyContent: 'center',
    alignItems: 'center',
    padding: '8px 0',
    background: 'white', // The background is set to white.
    width: '100%', // The menu occupies the full width of its container.
  };

  // Define the style for the list that holds the navigation items.
  const menuListStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column', // Items are arranged in a column.
    listStyle: 'none', // Removes default list styling.
    padding: 0,
    margin: 0,
  };

  // Style for each navigation item, possibly with a bottom border for separation.
  const menuItemStyle: React.CSSProperties = {
    borderBottom: '1px solid #ccc',
  };

  // Common link style for all navigation links.
  const linkStyle: React.CSSProperties = {
    display: 'block',
    padding: '8px 16px',
    textDecoration: 'none', // Removes underline from links.
    color: 'black',
    backgroundColor: 'transparent', // Background is transparent by default.
    transition: 'background-color 0.3s', // Smooth transition for background color change on hover.
  };

  // Style for the active navigation link, using a light pink background.
  const activeLinkStyle: React.CSSProperties = {
    ...linkStyle, // Spread the common link style.
    backgroundColor: '#FFE0D9', // Set the background color for the active link.
  };

  return (
    <NavigationMenu style={menuStyle}>
      <NavigationMenuList style={menuListStyle}>
        {/* The "Home" link is active, hence the activeLinkStyle is applied. */}
        <NavigationMenuItem style={menuItemStyle}>
          <NavigationMenuLink style={activeLinkStyle} href="https://www.sydney.edu.au/">
            Home
          </NavigationMenuLink>
        </NavigationMenuItem>
        {/* Other links use the common link style and have hover effects. */}
        <NavigationMenuItem style={menuItemStyle}>
          <NavigationMenuLink style={linkStyle} href="https://www.sydney.edu.au/about-us.html"
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#FFE0D9'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
            About Us
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem style={menuItemStyle}>
          <NavigationMenuLink style={linkStyle} href="https://www.sydney.edu.au/contact-us.html"
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
