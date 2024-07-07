"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FcGoogle } from "react-icons/fc";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { auth, googleProvider } from "@/firebase/config";
import { signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";

export function ClientAuthForm({ className, ...props }) {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedRole, setSelectedRole] = useState("client");
  const router = useRouter();

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const fullName = event.target.fullName.value;
      const email = event.target.email.value;
      const password = event.target.password.value;

      if (!fullName || !email || !password) {
        toast.error("Please Fill Out All Fields", {
          duration: 4000,
          position: "bottom-center",
        });
        setIsLoading(false);
      } else {
        // Send signup request to your backend
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_BASEURL}/auth/register`,
          {
            displayName: fullName,
            email,
            role: selectedRole,
            password,
          }
        );
        toast.success(`Signup successful - ${response?.data?.message}`, {
          duration: 4000,
          position: "bottom-center",
        });
        setIsLoading(false);
      }
    } catch (error) {
      // Handle signup errors
      console.error("Signup error:", error);
      toast.error(`Signup unsuccessful - ${error.message}`, {
        duration: 4000,
        position: "bottom-center",
      });
      // Reset loading state after a brief delay (for demo purposes)
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    }
  };

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      // Send signup request to your backend
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASEURL}/auth/register`,
        {
          name: result.user.displayName,
          email: result.user.email,
          role: selectedRole,
          password: result.user.uid,
          profilePicture: result.user.photoURL,
        }
      );
      toast.success(`Google Sign-In successful - ${response.data.message}`, {
        duration: 4000,
        position: "bottom-center",
      });
      setIsLoading(false);
      router.push("/auth/verify-email");
    } catch (error) {
      console.error("Google Sign-In error:", error);
      toast.error(`Google Sign-In unsuccessful - ${error.message} > ${error.response.data.message || null}`, {
        duration: 4000,
        position: "bottom-center",
      });
      setIsLoading(false);
    }
  };

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <Toaster />
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="fullName">
              Full Name
            </Label>
            <Input
              id="fullName"
              placeholder="John Deo"
              type="text"
              autoCapitalize="none"
              autoComplete="text"
              autoCorrect="off"
              disabled={isLoading}
            />
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
            />
            <Label className="sr-only" htmlFor="password">
              Password
            </Label>
            <Input
              id="password"
              placeholder="Password"
              type="password"
              autoCapitalize="none"
              autoComplete="password"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <Button disabled={isLoading}>
            {isLoading && (
              <svg
                className="animate-spin h-4 w-4 mr-2 text-red-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            )}
            Sign Up with Email
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-white dark:bg-slate-950 rounded-full px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <Button
        variant="outline"
        type="button"
        disabled={isLoading}
        onClick={handleGoogleSignIn}
      >
        {isLoading && (
          <svg
            className="animate-spin h-4 w-4 mr-2 text-red-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        )}
        <FcGoogle className="mr-2 h-4 w-4" />
        Google
      </Button>
    </div>
  );
}