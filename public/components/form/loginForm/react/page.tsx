import React, { useState } from "react";
import { Button } from "../../../../../styles/components/ui/button"; 
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "../../../../../styles/components/ui/card"
import { Input } from "../../../../../styles/components/ui/input";
import { Label } from "../../../../../styles/components/ui/label";

export function LoginForm() {
    const [showForm, setShowForm] = useState(false);
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // 这里放置登录表单提交后的逻辑
    };
  
    const handleBack = () => {
      setShowForm(false);
    };
  
    return (
      <Card className="w-[350px] mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
        </CardHeader>
        {!showForm ? (
          <CardContent className="text-center">
            <Button variant="default" onClick={() => setShowForm(true)}>
              Login
            </Button>
          </CardContent>
        ) : (
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-4">
                <Label htmlFor="email">Your email</Label>
                <Input id="email" type="email" placeholder="name@company.com" required />
  
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" required />
  
                <div className="flex justify-between items-center mt-4">
                  <div className="flex items-center">
                    <input type="checkbox" id="remember-me" className="mr-2" />
                    <Label htmlFor="remember-me">Remember me</Label>
                  </div>
                  <Button asChild variant="link">
                    <a href="#" className="text-sm">Forgot password?</a>
                  </Button>
                </div>
                
                <Button variant="default" className="mt-4">Login</Button>
                <Button type="button" variant="outline" className="mt-2" onClick={handleBack}>Back</Button>
              </div>
            </form>
          </CardContent>
        )}
        <CardFooter className="text-center mt-4">
          <span className="text-sm">Don’t have an account yet?{' '}
            <Button asChild variant="link">
              <a href="#" className="text-sm">Sign up</a>
            </Button>
          </span>
        </CardFooter>
      </Card>
    );
  }

export default LoginForm
