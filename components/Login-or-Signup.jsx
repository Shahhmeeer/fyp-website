"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const apiKey = "AIzaSyBbNrOdILln0q3s0_OVoqnmPIgo7JMYDuM";

export default function LoginOrSignup() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const signUserUp = async () => {
    try {
      setLoading(true);
      console.log("Sign User Up");
      const email = document.querySelector("#email").value;
      const password = document.querySelector("#password").value;
      console.log("email and password: ", email, password);

      const userDetails = {
        email: email,
        password: password,
        returnSecureToken: true,
      };
      const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`, {
        method: "POST",
        body: JSON.stringify(userDetails),
        headers: { "Content-Type": "application/json" },
      });

      const res = response.json;
      console.log("res: ", JSON.stringify(res));
      router.push("/home");
    } catch (error) {
      console.log("there was an error: ", error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  const logUserIn = async () => {
    try {
      setLoading(true);
      console.log("Log User In");
      const email = document.querySelector("#email").value;
      const password = document.querySelector("#password").value;
      console.log("email and password: ", email, password);

      const userDetails = {
        email: email,
        password: password,
        returnSecureToken: true,
      };
      const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`, { method: "POST", body: JSON.stringify(userDetails) });
      console.log("response: ", response.status);
      router.push("/home");
    } catch (error) {
      console.log("there was an error: ", error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Tabs defaultValue="login" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2 bg-primary text-secondary">
        <TabsTrigger value="login">Log in</TabsTrigger>
        <TabsTrigger value="sign-up">Sign up</TabsTrigger>
      </TabsList>
      <TabsContent value="login">
        <Card>
          <CardContent className="space-y-2 p-6">
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="abc@gmail.com" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="password">Password</Label>
              <Input type="password" id="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={logUserIn} disabled={loading}>
              {loading ? "Logging In..." : "Log In"}
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="sign-up">
        <Card>
          <CardContent className="space-y-2 p-6">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" type="text" placeholder="John Doe" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="abc@gmail.com" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input id="confirm-password" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={signUserUp} disabled={loading}>
              {loading ? "Signing Up..." : "Sign Up"}
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
