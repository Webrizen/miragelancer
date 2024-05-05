import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function DashboardLayout({ children }) {
  return (
    <ProtectedRoute>
      <div className="flex flex-col w-full min-h-screen">
        <header className="container flex items-center h-16 px-4 border-b border-l border-r shrink-0 md:px-6 bg-white backdrop-blur-2xl rounded-b-2xl sticky top-0">
          <Link
            className="flex items-center gap-2 text-lg font-semibold sm:text-base mr-4"
            href="#"
          >
            <FrameIcon className="w-6 h-6" />
            <span className="sr-only">Freelancer Inc</span>
          </Link>
          <nav className="hidden font-medium sm:flex flex-row items-center gap-5 text-sm lg:gap-6">
            <Link className="font-bold" href="/">
              Miragelancer
            </Link>
            <Link
              className="text-gray-500 dark:text-gray-400 whitespace-nowrap"
              href="#"
            >
              Find Jobs
            </Link>
            <Link className="text-gray-500 dark:text-gray-400" href="#">
              Projects
            </Link>
            <Link className="text-gray-500 dark:text-gray-400" href="#">
              Proposals
            </Link>
            <Link className="text-gray-500 dark:text-gray-400" href="#">
              Messages
            </Link>
            <Link className="text-gray-500 dark:text-gray-400" href="#">
              Settings
            </Link>
          </nav>
          <div className="flex items-center w-full gap-4 md:ml-auto md:gap-2 lg:gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger className="ml-auto">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Payments</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>
        <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] bg-gray-100/40 flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6 dark:bg-gray-800/40">
          {children}
        </main>
      </div>
    </ProtectedRoute>
  );
}

function FrameIcon(props) {
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
      <line x1="22" x2="2" y1="6" y2="6" />
      <line x1="22" x2="2" y1="18" y2="18" />
      <line x1="6" x2="6" y1="2" y2="22" />
      <line x1="18" x2="18" y1="2" y2="22" />
    </svg>
  );
}
