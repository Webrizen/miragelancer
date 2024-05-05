import React from "react";
import Link from "next/link";

export default function page() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8">
        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
          Miragelancer Onboarding
        </h1>
        <div className="w-full max-w-md md:max-w-3xl mx-auto grid md:grid-cols-2 grid-cols-1 gap-6">
          {/* Card for Clients */}
          <div className="rounded-md overflow-hidden shadow-lg bg-white p-4 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Client</div>
              <p className="text-gray-700 text-base">
                Sign in to view and leave reviews for freelancers.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <Link href="/auth/client">
                <span className="inline-block w-full bg-blue-500 hover:bg-blue-700 text-center text-white font-bold py-2 px-4 rounded">
                  Client Sign In
                </span>
              </Link>
            </div>
          </div>
          {/* Card for Freelancers */}
          <div className="rounded-md overflow-hidden shadow-lg bg-white p-4 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Freelancer</div>
              <p className="text-gray-700 text-base">
                Create a profile and manage your reviews.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <Link href="/auth/freelancer">
                <span className="inline-block w-full bg-green-500 hover:bg-green-700 text-center text-white font-bold py-2 px-4 rounded">
                  Freelancer Sign In
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
