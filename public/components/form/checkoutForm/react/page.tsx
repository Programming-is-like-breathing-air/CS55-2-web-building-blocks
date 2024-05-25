import React, { useState } from "react";
import { Button } from "../../../../../styles/components/ui/button"; 
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "../../../../../styles/components/ui/card"
import { Input } from "../../../../../styles/components/ui/input";
import { Label } from "../../../../../styles/components/ui/label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "../../../../../styles/components/ui/select";

export function CheckoutForm() {
  return (
    <div className="flex justify-center p-4">
      <Card className="flex-1 max-w-lg">
        <CardHeader>
          <CardTitle>Order Summary</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col">
          <div className="flex justify-between items-center py-2">
            <div>Nike Shoes *1</div>
            <div>$99.95</div>
          </div>
          <div className="flex justify-between items-center py-2">
            <div>Backpack *2</div>
            <div>$235.95</div>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between items-center font-bold py-2">
            <div>TOTAL</div>
            <div>$335.9</div>
          </div>
        </CardContent>
      </Card>

      <Card className="flex-1 max-w-lg ml-4">
        <CardHeader>
          <CardTitle>Payment Details</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col mt-4">
          <Label htmlFor="card-type">Card:</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select card" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="visa">Visa</SelectItem>
              <SelectItem value="mastercard">MasterCard</SelectItem>
              <SelectItem value="amex">American Express</SelectItem>
            </SelectContent>
          </Select>

          <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa Logo" className="mt-4" /> 
          <div className="mt-2">
          <Label htmlFor="card-number">Card Number</Label>
          <Input id="card-number" placeholder="1111-2222-3333-4444" />
          </div>
          <div className="mt-2">
          <Label htmlFor="card-holder">Card Holder</Label>
          <Input id="card-holder" placeholder="John More Doe" />
          </div>
          <div className="flex mt-2">
            <div className="flex-1 mr-2 mt-2">
              <Label htmlFor="expires">Expires</Label>
              <Input id="expires" placeholder="02/28" />
            </div>
            <div className="flex-1 mt-2">
              <Label htmlFor="cvc">CVC</Label>
              <Input id="cvc" placeholder="352" />
            </div>
          </div>

          <Button className="mt-4">Checkout</Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default CheckoutForm
