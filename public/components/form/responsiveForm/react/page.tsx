import React, { useState } from "react";
import { Button } from "../../../../../styles/components/ui/button"; 
import { Input } from "../../../../../styles/components/ui/input";
import { Label } from "../../../../../styles/components/ui/label";
import { Select, SelectItem, SelectContent, SelectTrigger} from "../../../../../styles/components/ui/select";
import { Textarea } from "../../../../../styles/components/ui/textarea"

export function ResponsiveForm() {

    const [country, setCountry] = useState("");
    const handleSubmit = (event) => {
      event.preventDefault();
    };
    const handleCountryChange = (event) => {
    setCountry(event.target.value); 
    };
  
    return (
      <div className="container mx-auto p-4">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="block text-gray-700 text-xl font-bold mb-6">Responsive form</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <Label htmlFor="first-name">First Name</Label>
              <Input id="first-name" type="text" placeholder="Your first name.." required />
            </div>
  
            <div className="mb-4">
              <Label htmlFor="last-name">Last Name</Label>
              <Input id="last-name" type="text" placeholder="Your last name.." required />
            </div>
  
            <div className="mb-4">
              <Label htmlFor="country">Country</Label>
              <Select name="country" value={country} required>  
              <SelectTrigger>
                {country || "Select a country"}  
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="australia">Australia</SelectItem>
                  <SelectItem value="America">America</SelectItem>
                  <SelectItem value="German">German</SelectItem>
                  <SelectItem value="China">China</SelectItem>
                </SelectContent>
              </Select>
            </div>
  
            <div className="mb-6">
              <Label htmlFor="subject">Subject</Label>
              <Textarea id="subject" placeholder="Write something.." required />
            </div>
            <div className="mt-2">
            <Button className="">
              Submit
            </Button>
            </div>
          </form>
        </div>
      </div>
    );
  }
  

export default ResponsiveForm
