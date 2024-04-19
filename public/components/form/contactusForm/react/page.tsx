import React, { useState } from "react";
import { Button } from "../../../../../styles/components/ui/button"; 
import { Input } from "../../../../../styles/components/ui/input";
import { Label } from "../../../../../styles/components/ui/label";
import { Textarea } from "../../../../../styles/components/ui/textarea"

export function ContactUsForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [country, setCountry] = useState('');
  const [subject, setSubject] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ firstName, lastName, country, subject });
  };

  return (
    <div className="container mx-auto p-4 max-w-xl bg-white shadow-md rounded flex">
      <div className="flex-none w-48 relative"> 
        <img 
          src="http://teanabroad.org/wp-content/uploads/2013/06/Image-24.jpg" 
          alt="University Building" 
          className="absolute inset-0 w-full h-full object-cover rounded-l" // 根据需要添加 rounded-l 来为左侧图片添加圆角
        />
      </div>
      <div className="flex-grow p-5">
        <div className="text-center font-bold text-xl mb-4">Contact Us</div>
        <form onSubmit={handleSubmit}>
        <div className="px-2 mb-4">
          <Label htmlFor="first-name">First Name</Label>
          <Input id="first-name" type="text" placeholder="Your first name.." value={firstName} onChange={e => setFirstName(e.target.value)} required />
        </div>
        <div className="px-2 mb-4">
          <Label htmlFor="last-name">Last Name</Label>
          <Input id="last-name" type="text" placeholder="Your last name.." value={lastName} onChange={e => setLastName(e.target.value)} required />
        </div>
        <div className="px-2 mb-4">
          <Label htmlFor="country">Country</Label>
          <Input id="country" type="text" placeholder="Country" value={country} onChange={e => setCountry(e.target.value)} required />
        </div>
        <div className="px-2 mb-6">
          <Label htmlFor="subject">Subject</Label>
          <Textarea id="subject" placeholder="Write something.." value={subject} onChange={e => setSubject(e.target.value)} required />
        </div>
        <div className="px-2 mt-2">
        <Button>
          Submit
        </Button>
        </div>
      </form>
      </div>
    </div>
  );
}

export default ContactUsForm
