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

export default function Page() {
  return (
    <>
      <main className="flex-1 p-4 md:p-6">
        <div className="w-full">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold">Orders</h1>
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
                <TableRow>
                  <TableHead>Order</TableHead>
                  <TableHead>Client</TableHead>
                  <TableHead>Project</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Payment</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {orders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell>
                      <Link className="font-medium" href="#">
                        #{order.id}
                      </Link>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Avatar className="w-8 h-8">
                          <AvatarImage alt="Client" src={order.clientImage} />
                          <AvatarFallback>{order.clientInitials}</AvatarFallback>
                        </Avatar>
                        <span>{order.clientName}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col">
                        <span className="font-medium">{order.projectTitle}</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {order.projectDescription}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant={statusVariant[order.status]}>
                        {order.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col">
                        <span className="font-medium">{order.payment}</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {order.paymentDate}
                        </span>
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
                            <Link href={`/dashboard/orders/${order.id}`} className="w-full h-full">View Order</Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem>Leave Feedback</DropdownMenuItem>
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