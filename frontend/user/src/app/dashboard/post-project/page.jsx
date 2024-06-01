"use client";
import React from "react";
import { useUserContext } from "@/context/UserContext";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { DatePicker } from "@/components/system/DatePicker";
import { Upload } from "lucide-react";

export default function page() {
  const { user } = useUserContext();
  return (
    <>
      {user.role === "client" ? (
        <div className="w-full grid md:grid-cols-2 gap-4">
          <div className="w-full space-y-8 p-10">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tighter">
                Post Your Project
              </h2>
              <p className="text-gray-500 dark:text-gray-400">
                Fill out the form below to post your project details.
              </p>
            </div>
            <form className="grid gap-6">
              <div className="grid gap-2">
                <Label htmlFor="title">Project Title</Label>
                <Input id="title" placeholder="Enter a descriptive title" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description">Project Description</Label>
                <Textarea
                  id="description"
                  placeholder="Provide a detailed description of your project"
                  rows={5}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="skills">Required Skills</Label>
                <Input
                  id="skills"
                  placeholder="List the skills needed for this project"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="budget">Budget</Label>
                  <Input id="budget" type="number" placeholder="$" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="deadline">Deadline</Label>
                  <DatePicker />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="files">Attach Files</Label>
                <div className="flex items-center justify-between bg-slate-100 border border-slate-300 rounded-md p-4">
                  <div className="flex items-center gap-2">
                    <Upload className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                    <span className="text-gray-500 dark:text-gray-400">
                      Drag and drop files or click to upload
                    </span>
                  </div>
                  <Button variant="outline" size="sm">
                    Upload
                  </Button>
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="category">Project Category</Label>
                <Select id="category">
                  <SelectTrigger>
                    <SelectValue placeholder="Select project category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="web-development">
                      Web Development
                    </SelectItem>
                    <SelectItem value="graphic-design">
                      Graphic Design
                    </SelectItem>
                    <SelectItem value="mobile-development">
                      Mobile Development
                    </SelectItem>
                    <SelectItem value="content-writing">
                      Content Writing
                    </SelectItem>
                    <SelectItem value="marketing">Marketing</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="type">Project Type</Label>
                <Select id="type">
                  <SelectTrigger>
                    <SelectValue placeholder="Select project Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="hourly">
                      Hourly
                    </SelectItem>
                    <SelectItem value="fixed">
                      Fixed
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300">
                Post Project
              </Button>
            </form>
          </div>
          <div className="w-full space-y-6 p-10">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tighter">
                Tips for Posting a Successful Project
              </h2>
              <p className="text-gray-500 dark:text-gray-400">
                Follow these tips to get better talent for your project:
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <CircleCheckIcon className="w-6 h-6 text-green-500" />
                <div>
                  <h3 className="font-semibold">
                    Provide Detailed Requirements
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    The more details you can provide about your project, the
                    better freelancers can understand what you're looking for.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CircleCheckIcon className="w-6 h-6 text-green-500" />
                <div>
                  <h3 className="font-semibold">Set a Reasonable Budget</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Offer a fair budget that reflects the scope of work and the
                    skills required. This will attract top talent.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CircleCheckIcon className="w-6 h-6 text-green-500" />
                <div>
                  <h3 className="font-semibold">Provide a Clear Deadline</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Set a realistic deadline that allows freelancers to plan
                    their work and deliver high-quality results.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CircleCheckIcon className="w-6 h-6 text-green-500" />
                <div>
                  <h3 className="font-semibold">
                    Respond to Proposals Promptly
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Review proposals quickly and communicate with interested
                    freelancers to keep the hiring process moving.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div>
            You cannot post a project as a freelancer, please switch to client
            role.
          </div>
        </>
      )}
    </>
  );
}

function CircleCheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
