import * as React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarImage } from '@/components/ui/avatar';


export function SuccessPanel() {
  return (
    <Card style={{ width: '350px', backgroundColor: 'white' }}>
      <CardHeader className="bg-gray-100 p-4">
        <CardTitle className="text-center font-semibold">Application Complete</CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <CardDescription className="text-center mb-4">
        Your Reference Number: KDU3957KF
        </CardDescription>
      </CardContent>
    </Card>

  )
}
export default SuccessPanel;