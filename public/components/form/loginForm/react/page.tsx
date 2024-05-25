import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/toast/use-toast"; 
import { Toaster } from "@/components/ui/toast/toaster"; 

export function LoginForm() {
    const [formMode, setFormMode] = useState("login"); 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const { toast } = useToast(); 

    const handleSubmit = (event) => {
      event.preventDefault();
      if (formMode === "login") {
        toast({
          title: "Login Attempt",
          description: `Logged in with Email: ${email}`,
        });
      } else {
        toast({
          title: "Signup Attempt",
          description: `Signed up with Email: ${email}`,
        });
      }
    };

    const switchToSignUp = () => {
      setFormMode("signup");
    };

    const switchToSignIn = () => {
      setFormMode("login");
    };

    return (
      <>
        <Toaster />  
        <Card className="w-[350px] mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <CardHeader>
            <CardTitle>{formMode === "signup" ? "Create your account" : "Login to your account"}</CardTitle>
          </CardHeader>
          <CardContent>
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-4">
                  <Label htmlFor="email">Your email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="name@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />

                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />

                  {formMode === "signup" && (
                    <>
                      <Label htmlFor="confirm-password">Confirm password</Label>
                      <Input
                        id="confirm-password"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                      />

                      <div className="flex items-center mt-4">
                        <input type="checkbox" id="terms" className="mr-2" />
                        <Label htmlFor="terms">I accept the Terms and Conditions</Label>
                      </div>
                    </>
                  )}

                  <Button variant="default" className="mt-4">{formMode === "signup" ? "Create your account" : "Login"}</Button>
                </div>
              </form>
          </CardContent>
          <CardFooter className="text-center mt-4">
            {formMode === "login" ? (
              <span className="text-sm">Don’t have an account yet?{' '}
                <Button asChild variant="link" onClick={switchToSignUp}>
                  <a className="text-sm">Sign up</a>
                </Button>
              </span>
            ) : (
              <span className="text-sm">
                Already have an account?{' '}
                <Button asChild variant="link" onClick={switchToSignIn}>
                  <a className="text-sm">Login here</a>
                </Button>
              </span>
            )}
          </CardFooter>
        </Card>
      </>
    );
}

export default LoginForm;
