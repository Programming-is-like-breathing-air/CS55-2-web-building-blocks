import * as React from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';

export function DropdownMenuwithHeader() {
  const userEmail = 'abcd1234@uni.sydney.edu.au';

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Option</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Signed in as</DropdownMenuLabel>
        <div className="email">{userEmail}</div>
        <DropdownMenuItem>
          Account setting
        </DropdownMenuItem>
        <DropdownMenuItem>
          Support
        </DropdownMenuItem>
        <DropdownMenuItem>
          License
        </DropdownMenuItem>
        <DropdownMenuItem>
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default DropdownMenuwithHeader
