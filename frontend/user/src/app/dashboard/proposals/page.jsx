import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";

const orders = [
  {
    id: 123,
    clientName: "John Doe",
    clientImage: "/placeholder-user.jpg",
    clientInitials: "JD",
    projectTitle: "Website Design",
    projectDescription: "Design and develop a modern website",
    status: "Completed",
    payment: "$2,500",
    paymentDate: "2023-04-15",
  },
  {
    id: 124,
    clientName: "Sarah Anderson",
    clientImage: "/placeholder-user.jpg",
    clientInitials: "SA",
    projectTitle: "Logo Design",
    projectDescription: "Design a modern logo for a new startup",
    status: "In Progress",
    payment: "$500",
    paymentDate: "Partial payment received",
  },
  {
    id: 125,
    clientName: "Michael Johnson",
    clientImage: "/placeholder-user.jpg",
    clientInitials: "MJ",
    projectTitle: "Mobile App Development",
    projectDescription: "Develop a mobile app for a new product",
    status: "Cancelled",
    payment: "$1,000",
    paymentDate: "Refunded on 2023-03-20",
  },
  {
    id: 126,
    clientName: "Emily Wilson",
    clientImage: "/placeholder-user.jpg",
    clientInitials: "EW",
    projectTitle: "Branding and Marketing",
    projectDescription: "Create a brand identity and marketing materials",
    status: "Completed",
    payment: "$3,000",
    paymentDate: "Paid on 2023-05-01",
  },
];

const statusVariant = {
  Completed: "success",
  "In Progress": "warning",
  Cancelled: "danger",
};

const proposals = [
    {
      id: 1,
      projectTitle: "Website Redesign",
      projectDescription: "Redesigning the client's existing website for a more modern look and improved user experience.",
      projectStatus: "Ongoing",
      proposalStatus: "Accepted",
      submittedAt: "2023-05-01",
      budget: "$1500",
      clientName: "John Doe",
      clientImage: "https://placehold.co/500x500"
    },
    {
      id: 2,
      projectTitle: "E-commerce Platform Development",
      projectDescription: "Building a comprehensive e-commerce platform with payment integration and user management.",
      projectStatus: "Completed",
      proposalStatus: "Rejected",
      submittedAt: "2023-04-20",
      budget: "$3000",
      clientName: "Jane Smith",
      clientImage: "https://placehold.co/500x500"
    },
    {
      id: 3,
      projectTitle: "Mobile App for Fitness Tracking",
      projectDescription: "Developing a cross-platform mobile application for tracking workouts and nutrition.",
      projectStatus: "Ongoing",
      proposalStatus: "Under Review",
      submittedAt: "2023-05-10",
      budget: "$2000",
      clientName: "Mike Johnson",
      clientImage: "https://placehold.co/500x500"
    },
    {
      id: 4,
      projectTitle: "SEO Optimization for Online Store",
      projectDescription: "Optimizing the client's online store to improve search engine rankings and drive more traffic.",
      projectStatus: "Pending",
      proposalStatus: "Pending",
      submittedAt: "2023-05-15",
      budget: "$800",
      clientName: "Emily Davis",
      clientImage: "https://placehold.co/500x500"
    },
    {
      id: 5,
      projectTitle: "Social Media Marketing Campaign",
      projectDescription: "Creating and managing a social media marketing campaign to increase brand awareness and engagement.",
      projectStatus: "Completed",
      proposalStatus: "Accepted",
      submittedAt: "2023-04-30",
      budget: "$1200",
      clientName: "David Lee",
      clientImage: "https://placehold.co/500x500"
    },
  ];
  

export default function page() {
  return (
    <>
      <main className="flex-1 p-4 md:p-6">
        <div className="w-full mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold">Proposals</h1>
            <div className="flex items-center gap-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="flex items-center gap-2" variant="outline">
                    <FilterIcon className="h-4 w-4" />
                    <span>Filter</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-64">
                  <DropdownMenuLabel>Filter Orders</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <div className="w-full flex items-center justify-between">
                      <span>All</span>
                      <Badge>12</Badge>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <div className="w-full flex items-center justify-between">
                      <span>Pending</span>
                      <Badge>3</Badge>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <div className="w-full flex items-center justify-between">
                      <span>In Progress</span>
                      <Badge>5</Badge>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <div className="w-full flex items-center justify-between">
                      <span>Completed</span>
                      <Badge>4</Badge>
                    </div>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="flex items-center gap-2" variant="outline">
                    <ListOrderedIcon className="h-4 w-4" />
                    <span>Sort</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-64">
                  <DropdownMenuLabel>Sort Orders</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <div className="flex items-center justify-between">
                      <span>Newest</span>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <div className="flex items-center justify-between">
                      <span>Oldest</span>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <div className="flex items-center justify-between">
                      <span>Highest Paid</span>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <div className="flex items-center justify-between">
                      <span>Lowest Paid</span>
                    </div>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <Card>
            <Table>
              <TableHeader>
                <TableRow className="whitespace-nowrap">
                  <TableHead>Proposals</TableHead>
                  <TableHead>Client</TableHead>
                  <TableHead>Project Info</TableHead>
                  <TableHead>Project Status</TableHead>
                  <TableHead>Proposal Status</TableHead>
                  <TableHead>Budget</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {proposals.map((proposal) => (
                  <TableRow key={proposal.id}>
                    <TableCell>
                      <span className="font-medium">
                        #{proposal.id}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Avatar className="w-8 h-8">
                          <AvatarImage alt="Client" src={proposal.clientImage} />
                          <AvatarFallback>
                            N/A
                          </AvatarFallback>
                        </Avatar>
                        <span>{proposal.clientName}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col">
                        <span className="font-medium">
                          {proposal.projectTitle}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {proposal.projectDescription}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className="whitespace-nowrap">
                        {proposal.projectStatus}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge className="whitespace-nowrap">
                        {proposal.proposalStatus}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col">
                        <span className="font-medium">{proposal.budget}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col whitespace-nowrap">
                        <span className="font-medium">{proposal.submittedAt}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button size="icon" variant="ghost">
                            <MoveHorizontalIcon className="h-6 w-6" />
                            <span className="sr-only">Order actions</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Link
                              href={`/dashboard/proposals/${proposal.id}`}
                              className="w-full h-full"
                            >
                              View Proposal
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem>Withdraw</DropdownMenuItem>
                          <DropdownMenuItem>Contact Client</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </div>
      </main>
    </>
  );
}

function FilterIcon(props) {
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
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  );
}

function ListOrderedIcon(props) {
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
        d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
      />
    </svg>
  );
}

function MoveHorizontalIcon(props) {
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
        d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
      />
    </svg>
  );
}
