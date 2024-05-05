"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function page() {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { toast } = useToast();
  const { login } = useAuth();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const handleSignup = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`https://miragelancer-backend.onrender.com/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          username,
          email,
          password,
        }),
      });

      const data = await response.json();
      if (response.status === 201) {
        toast({
          title: "Successfully Completed Signup!",
          description: `at ${new Date().toLocaleDateString()}, ${
            data.message
          } - please login to your account now.`,
        });
        setIsLoading(false);
      } else {
        toast({
          title: "Something Went Wrong During Signup!",
          description: `at ${new Date().toLocaleDateString()}, ${
            data.message
          } please Try Again Later.`,
        });
        setIsLoading(false);
      }
    } catch (error) {
      toast({
        title: "An Error Occured During Signup!",
        description: `at ${new Date().toLocaleDateString()}, ${
          error.message
        } please Try Again Later.`,
      });
      setIsLoading(true);
    }
  };

  const handleLogin = async () => {
    setIsLoggingIn(true);
    try {
      const response = await fetch(`https://miragelancer-backend.onrender.com/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: loginUsername,
          password: loginPassword,
        }),
      });

      const data = await response.json();
      setIsLoggingIn(false);

      if (response.status === 200) {
        toast({
          title: "Login Successful!",
          description: "You are now logged in.",
        });
        login(data.token);
        router.push("/dashboard");
        localStorage.setItem("token", data.token);
      } else {
        toast({
          title: "Login Failed!",
          description: data.message,
        });
      }
    } catch (error) {
      setIsLoggingIn(false);
      toast({
        title: "An Error Occurred!",
        description: error.message,
      });
    }
  };

  return (
    <>
      <section className="min-h-screen w-full flex justify-center items-center flex-col">
        <div className="container mx-auto flex justify-center items-center flex-col p-4">
          <Tabs defaultValue="Signup" className="w-[400px]">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="Signup">Signup</TabsTrigger>
              <TabsTrigger value="Login">Login</TabsTrigger>
            </TabsList>
            <TabsContent value="Signup">
              <Card>
                <CardHeader>
                  <CardTitle>Signup</CardTitle>
                  <CardDescription>
                    Create your freelancer profile to get started and explore
                    new freelance job oppurtunity.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="username">Username</Label>
                    <Input
                      id="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button onClick={handleSignup}>
                    {isLoading ? <Loader2 className="animate-spin" /> : "Sign Up"}
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="Login">
              <Card>
                <CardHeader>
                  <CardTitle>Login</CardTitle>
                  <CardDescription>
                    Login to your freelancer profile to view testimonails &
                    explore new freelance job oppurtunity.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label htmlFor="login-username">Username</Label>
                    <Input
                      id="login-username"
                      type="text"
                      value={loginUsername}
                      onChange={(e) => setLoginUsername(e.target.value)}
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="login-password">Password</Label>
                    <Input
                      id="login-password"
                      type="password"
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button onClick={handleLogin}>{isLoggingIn ? <Loader2 className="animate-spin" /> : "Login"}</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  );
}
