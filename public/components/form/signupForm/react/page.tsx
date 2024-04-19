import React, { useState } from "react";
import { Button } from "../../../../../styles/components/ui/button"; 
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "../../../../../styles/components/ui/card"
import { Input } from "../../../../../styles/components/ui/input";
import { Label } from "../../../../../styles/components/ui/label";

export function SignUpForm() {
    const [showSignUp, setShowSignUp] = useState(false);

    const handleSignUpSubmit = (event) => {
      event.preventDefault();
    };

    const handleSignIn = () => {
      setShowSignUp(false);
    };

    const handleShowSignUp = () => {
      setShowSignUp(true);
    };

    return (
      <Card className="w-[350px] mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <CardHeader>
          <CardTitle>{showSignUp ? "Create your account" : "Login to your account"}</CardTitle>
        </CardHeader>
        {!showSignUp ? (
          <CardContent className="text-center">
            <Button variant="default" onClick={handleShowSignUp}>
              Sign Up
            </Button>
          </CardContent>
        ) : (
          <CardContent>
            <form onSubmit={handleSignUpSubmit}>
              <div className="flex flex-col gap-4">
                <Label htmlFor="email">Your email</Label>
                <Input id="email" type="email" placeholder="name@company.com" required />
  
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" required />
                
                <Label htmlFor="confirm-password">Confirm password</Label>
                <Input id="confirm-password" type="password" required />
                
                <div className="flex items-center mt-4">
                  <input type="checkbox" id="terms" className="mr-2" />
                  <Label htmlFor="terms">I accept the Terms and Conditions</Label>
                </div>
                
                <Button variant="default" className="mt-4">Create your account</Button>
              </div>
            </form>
          </CardContent>
        )}
        <CardFooter className="text-center mt-4">
          <span className="text-sm">{showSignUp ? 
            <>Already have an account? <Button asChild variant="link"><a href="#" className="text-sm">Login here</a></Button></> : 
            <>Don’t have an account yet? <Button asChild variant="link"><a href="#" className="text-sm">Sign up</a></Button></>
          }</span>
          {showSignUp && <Button type="button" variant="outline" className="mt-2" onClick={handleSignIn}>Back</Button>}
        </CardFooter>
      </Card>
    );
  }

export default SignUpForm
