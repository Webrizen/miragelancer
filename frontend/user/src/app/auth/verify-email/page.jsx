"use client";
import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function Verify() {
  const [isLoading, setIsLoading] = useState(true);
  const searchParams = useSearchParams();
  const initialToken = searchParams.get("token");
  const [token, setToken] = useState(initialToken);
  const [verificationStatus, setVerificationStatus] = useState(null);
  const router = useRouter();

  // Function to handle email verification
  const verifyEmail = (token) => {
    setIsLoading(true);
    axios
      .get(`${process.env.NEXT_PUBLIC_BASEURL}/auth/verify-email/${token}`)
      .then((response) => {
        setVerificationStatus("success");
        toast.success(`Signup successful - ${response?.data?.message}`, {
          duration: 4000,
          position: "bottom-center",
        });
      })
      .catch((error) => {
        setVerificationStatus("error");
        toast.error(
          `Failed to verify email. Please try again. - ${error.message}`,
          {
            duration: 4000,
            position: "bottom-center",
          }
        );
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    if (token) {
      verifyEmail(token);
    } else {
      setIsLoading(false);
    }
  }, [token]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (token) {
      verifyEmail(token);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Toaster />
      {isLoading ? (
        <p className="flex flex-row items-center text-center text-xl">
          <svg
            className="animate-spin h-10 w-10 mr-4 text-orange-500"
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
          verifying...
        </p>
      ) : (
        <div className="text-center w-full">
          {verificationStatus === "success" ? (
            <h1 className="md:text-4xl font-bold text-green-500">✅ Email verified successfully!</h1>
          ) : verificationStatus === "error" ? (
            <h1 className="md:text-4xl font-bold text-red-500">
              🔴 Failed to verify email. Please try again.
            </h1>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-center max-w-2xl mx-auto"
            >
              <div className="flex items-center justify-center mb-8 w-full">
                <Input
                  className="flex-1 mr-4 dark:bg-gray-700 dark:text-gray-200"
                  value={token || ""}
                  onChange={(e) => setToken(e.target.value)}
                  placeholder="Enter verification token"
                  requiorange
                />
                <Button>
                  {isLoading ? (
                    <svg
                      className="animate-spin h-10 w-10 mr-4 text-orange-500"
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
                  ) : (
                    "Verify Email"
                  )}
                </Button>
              </div>
            </form>
          )}
        </div>
      )}
    </div>
  );
}

export default function Page() {
  return (
    <Suspense>
      <Verify />
    </Suspense>
  );
}
