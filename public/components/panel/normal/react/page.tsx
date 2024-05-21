import * as React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../../../styles/components/ui/card";

import { Button } from "../../../../../styles/components/ui/button";
import { Label } from "../../../../../styles/components/ui/label";
import { Avatar, AvatarImage } from '../../../../../styles/components/ui/avatar';


export function SuccessPanel() {
  return (
    // <Card style={{ width: '350px', backgroundColor: 'white' }}>
    //   <CardHeader className="bg-gray-100 p-4">
    //     <CardTitle className="text-center font-semibold">Application Complete</CardTitle>
    //   </CardHeader>
    //   <CardContent className="p-4">
    //     <CardDescription className="text-center mb-4">
    //     Your Reference Number: KDU3957KF
    //     </CardDescription>
    //   </CardContent>
    // </Card>

    <div className="container flex flex-col items-center border border-gray-300 p-4 rounded-lg" >
    
      <div className="flex items-center justify-between w-full border-b border-gray-300 pb-2 mb-4">
        <Label className="text-5xl font-bold tracking-tight">Yuqing Wu</Label>
        <div className="flex space-x-4 ml-auto">
          <Button variant="link" className="text-black">About Us</Button>
          <Button variant="link" className="text-black">Experience</Button>
          <Button variant="link" className="text-black">Project</Button>
          <Button variant="link" className="text-black">Contact</Button>
        </div>
      </div >
      <div className="mt-4" style={{ marginTop: '20px' }}>
        <Avatar style={{marginRight: '10px', width: '100px', height: '100px' }}>
          <AvatarImage src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
        </Avatar>
      </div>
    </div>




  )
}
export default SuccessPanel;