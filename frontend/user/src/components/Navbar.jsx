"use client";
import { useState } from "react";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { authToken, logout } = useAuth();
    return (
        <>
            <header
                className="sticky top-0 w-full bg-[rgba(225,225,225,0.1)] backdrop-blur-2xl border-b border-b-slate-300" style={{ zIndex: "9999999" }}>
                <div className="container mx-auto flex flex-row flex-wrap p-2 md:justify-normal justify-between items-center">
                    <Link
                        href="/"
                        className="flex title-font font-medium items-center text-slate-700 dark:text-slate-200 mr-4 border-r-none md:border-r border-slate-300 pr-4 md:mb-0"
                    >
                        <img
                            src="/logo.png"
                            alt="Spinflame Logo"
                            className="w-auto h-8"
                        />
                        <span className="ml-3 text-xl md:block hidden">
                            Miragelancer
                        </span>
                    </Link>
                    <nav
                        className={`lg:flex lg:flex-row flex-col flex-grow md:relative absolute md:w-auto w-full left-0 right-0 md:top-auto top-16 z-50 text-sm items-center ${isMenuOpen ? "grid grid-cols-2 bg-white dark:bg-slate-900 p-4" : " hidden"
                            }`}
                    >
                        <Link
                            href="/"
                            className="lg:inline-flex lg:w-auto px-3 py-2 rounded text-slate-700 dark:text-slate-300 items-center justify-center hover:bg-slate-100 dark:hover:bg-[rgba(225,225,225,0.1)]"
                        >
                            Home
                        </Link>
                        <Link
                            href="/find-jobs"
                            className="lg:inline-flex lg:w-auto px-3 py-2 rounded text-slate-700 dark:text-slate-300 items-center justify-center hover:bg-slate-100 dark:hover:bg-[rgba(225,225,225,0.1)]"
                        >
                            Find Jobs
                        </Link>
                        <Link
                            href="/find-freelancers"
                            className="lg:inline-flex lg:w-auto px-3 py-2 rounded text-slate-700 dark:text-slate-300 items-center justify-center hover:bg-slate-100 dark:hover:bg-[rgba(225,225,225,0.1)]"
                        >
                            Find Freelancers
                        </Link>
                        <Link
                            href="/blogs"
                            className="lg:inline-flex lg:w-auto px-3 py-2 rounded dark:text-slate-300 text-slate-700 items-center justify-center hover:bg-slate-100 dark:hover:bg-[rgba(225,225,225,0.1)]"
                        >
                            Blogs
                        </Link>
                        <Link
                            href="/support"
                            className="lg:inline-flex lg:w-auto px-3 py-2 rounded dark:text-slate-300 text-slate-700 items-center justify-center hover:bg-slate-100 dark:hover:bg-[rgba(225,225,225,0.1)]"
                        >
                            Support
                        </Link>
                    </nav>
                    <div className="flex justify-end items-center gap-1">
                        {(authToken ? (
                            <>
                                <DropdownMenu>
                                    <DropdownMenuTrigger>
                                        <Avatar className="w-10 h-10 rounded-xl cursor-pointer backdrop-blur-3xl hover:bg-[rgba(0,0,0,0.04)] flex justify-center items-center">
                                            <AvatarImage src="https://www.aapda.in/male.png" alt="@authToken" />
                                            <AvatarFallback>US</AvatarFallback>
                                        </Avatar>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end" className="mb-5">
                                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem><Link href="/dashboard" className="w-full">Dashboard</Link></DropdownMenuItem>
                                        <DropdownMenuItem><Link href="/dashboard/payments" className="w-full">Payments</Link></DropdownMenuItem>
                                        <DropdownMenuItem><Link href="/dashboard/plans" className="w-full">Membership</Link></DropdownMenuItem>
                                        <DropdownMenuItem><Link href="/dashboard/settings" className="w-full">Settings</Link></DropdownMenuItem>
                                        <DropdownMenuItem className="bg-red-50 text-red-400 cursor-pointer" onClick={logout}>Logout</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </>
                        ) : (
                            <>
                                <Button variant="outline" className="text-sm ml-1" asChild>
                                    <Link href="/auth">Login</Link>
                                </Button>
                            </>
                        ))}
                        <button
                            className="inline-flex w-10 h-10 justify-center items-center hover:bg-slate-100 dark:hover:bg-[rgba(225,225,225,0.1)] rounded lg:hidden"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-4 h-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 9h16.5m-16.5 6.75h16.5"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </header>
        </>
    );
}