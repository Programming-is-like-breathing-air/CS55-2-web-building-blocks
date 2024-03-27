import React, { useState } from 'react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';

const DropdownMenuComponent = () => {
  const [selectedOption, setSelectedOption] = useState('');

  // 内联样式
  const styles = {
    fontFamily: 'Inter, sans-serif',
    dropdownTrigger: {
      padding: '10px',
      border: '1px solid #F1F1F1',
      backgroundColor: '#F1F1F1',
      color: '#2F3031',
      borderRadius: '8px',
      fontWeight: 600,
      cursor: 'pointer',
    },
    dropdownContent: {
      marginTop: '5px',
      borderRadius: '8px',
      border: '1px solid #F1F1F1',
      backgroundColor: 'white',
    },
    dropdownItem: {
      padding: '10px',
      borderRadius: '8px',
      fontWeight: 600,
      cursor: 'pointer',
      ':hover': {
        backgroundColor: '#e64626',
        color: 'white',
      },
    },
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <DropdownMenuPrimitive.Root>
        <DropdownMenuPrimitive.Trigger style={styles.dropdownTrigger}>
          {selectedOption || 'Option'}
        </DropdownMenuPrimitive.Trigger>
        <DropdownMenuPrimitive.Content style={styles.dropdownContent}>
          <DropdownMenuPrimitive.Label style={styles.dropdownItem}>
            Option
          </DropdownMenuPrimitive.Label>
          <DropdownMenuPrimitive.Separator />
          <DropdownMenuPrimitive.Item
            style={styles.dropdownItem}
            onSelect={() => setSelectedOption('Account Settings')}
          >
            Account Settings
          </DropdownMenuPrimitive.Item>
          <DropdownMenuPrimitive.Item
            style={styles.dropdownItem}
            onSelect={() => setSelectedOption('Support')}
          >
            Support
          </DropdownMenuPrimitive.Item>
          <DropdownMenuPrimitive.Item
            style={styles.dropdownItem}
            onSelect={() => setSelectedOption('License')}
          >
            License
          </DropdownMenuPrimitive.Item>
        </DropdownMenuPrimitive.Content>
      </DropdownMenuPrimitive.Root>
    </div>
  );
};

export default DropdownMenuComponent;
