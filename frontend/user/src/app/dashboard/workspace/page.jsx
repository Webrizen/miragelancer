import React from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { PaperclipIcon, Settings, SmileIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function page() {
  return (
    <>
      <div className="flex flex-col h-full">
        <header className="bg-gray-900 text-white py-1 px-5 flex items-center justify-between rounded-t-xl">
          <div className="flex items-center p-2 rounded-md">
            <Avatar className="mr-3">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h2 className="text-md font-semibold">Alice</h2>
              <p className="text-slate-300 text-xs">
                Active 5min ago
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <button className="hover:bg-gray-800 p-2 rounded-full">
              <SearchIcon className="h-5 w-5" />
            </button>
            <button className="hover:bg-gray-800 p-2 rounded-full">
              <FlipVerticalIcon className="h-5 w-5" />
            </button>
            <button className="hover:bg-gray-800 p-2 rounded-full">
              <Settings className="h-5 w-5" />
            </button>
          </div>
        </header>
        <div className="flex-1 overflow-auto p-6">
          <div className="w-full mx-auto grid gap-4">
            <div className="flex items-start gap-4">
              <Avatar className="border w-8 h-8">
                <AvatarImage
                  alt="Freelancer Avatar"
                  src="https://cdn.pixabay.com/photo/2018/02/24/20/40/fashion-3179178_640.jpg"
                />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg max-w-[75%]">
                <p className="text-sm">
                  Hi there! I'm interested in your project and would love to
                  discuss how I can help. When would be a good time to chat?
                </p>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-2 flex flex-row justify-between items-center w-full">
                  <span>10:30 AM</span>
                  <DoubleTick className="h-5 w-5" />
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4 justify-end">
              <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-lg max-w-[75%]">
                <p className="text-sm text-blue-900 dark:text-blue-100">
                  Great, how about we hop on a call tomorrow at 2pm? I can give
                  you more details about the project then.
                </p>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-2 flex flex-row justify-between items-center w-full">
                  <span>10:30 AM</span>
                  <DoubleTick className="h-5 w-5 text-blue-500" />
                </div>
              </div>
              <Avatar className="border w-8 h-8">
                <AvatarImage alt="Client Avatar" src="https://cdn.pixabay.com/photo/2018/02/24/20/40/fashion-3179178_640.jpg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
            <div className="flex items-start gap-4">
              <Avatar className="border w-8 h-8">
                <AvatarImage
                  alt="Freelancer Avatar"
                  src="https://cdn.pixabay.com/photo/2018/02/24/20/40/fashion-3179178_640.jpg"
                />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg max-w-[75%]">
                <p className="text-sm">
                  Sounds good, I'll block that time off. Looking forward to
                  discussing the project in more detail.
                </p>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-2 flex flex-row justify-between items-center w-full">
                  <span>10:30 AM</span>
                  <DoubleTick className="h-5 w-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 flex items-center gap-4">
          <div className="flex-1 relative">
            <Textarea
              className="w-full rounded-lg px-4 py-4 bg-white dark:bg-gray-950 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              placeholder="Type your message..."
              rows={1}
            />
            <div className="absolute top-1/2 right-4 -translate-y-1/2 flex items-center gap-2">
              <Button
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                size="icon"
                variant="ghost"
              >
                <PaperclipIcon className="h-4 w-4" />
                <span className="sr-only">Attach file</span>
              </Button>
              <Button
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                size="icon"
                variant="ghost"
              >
                <SmileIcon className="h-4 w-4" />
                <span className="sr-only">Add emoji</span>
              </Button>
              <Button className="rounded-lg px-4 py-2" variant="primary">
                Send
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function FlipVerticalIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
      />
    </svg>
  );
}

function DoubleTick(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path xmlns="http://www.w3.org/2000/svg" d="M5.03033 11.4697C4.73744 11.1768 4.26256 11.1768 3.96967 11.4697C3.67678 11.7626 3.67678 12.2374 3.96967 12.5303L5.03033 11.4697ZM8.5 16L7.96967 16.5303C8.26256 16.8232 8.73744 16.8232 9.03033 16.5303L8.5 16ZM17.0303 8.53033C17.3232 8.23744 17.3232 7.76256 17.0303 7.46967C16.7374 7.17678 16.2626 7.17678 15.9697 7.46967L17.0303 8.53033ZM9.03033 11.4697C8.73744 11.1768 8.26256 11.1768 7.96967 11.4697C7.67678 11.7626 7.67678 12.2374 7.96967 12.5303L9.03033 11.4697ZM12.5 16L11.9697 16.5303C12.2626 16.8232 12.7374 16.8232 13.0303 16.5303L12.5 16ZM21.0303 8.53033C21.3232 8.23744 21.3232 7.76256 21.0303 7.46967C20.7374 7.17678 20.2626 7.17678 19.9697 7.46967L21.0303 8.53033ZM3.96967 12.5303L7.96967 16.5303L9.03033 15.4697L5.03033 11.4697L3.96967 12.5303ZM9.03033 16.5303L17.0303 8.53033L15.9697 7.46967L7.96967 15.4697L9.03033 16.5303ZM7.96967 12.5303L11.9697 16.5303L13.0303 15.4697L9.03033 11.4697L7.96967 12.5303ZM13.0303 16.5303L21.0303 8.53033L19.9697 7.46967L11.9697 15.4697L13.0303 16.5303Z" fill="#000000"/>
    </svg>
  );
}

function SearchIcon(props) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
