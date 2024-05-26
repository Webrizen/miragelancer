import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const workspaces = [
    {
      id: 1,
      name: "Alice",
      description: "JavaScript Developer for multiple PDF Merging and Sizing Project",
      avatar: "https://github.com/shadcn.png",
      badgeCount: 12,
    },
    {
      id: 2,
      name: "Bob",
      description: "React Developer for e-commerce application",
      avatar: "https://via.placeholder.com/150",
      badgeCount: 8,
    },
    {
      id: 3,
      name: "Charlie",
      description: "Full Stack Developer for healthcare platform",
      avatar: "https://via.placeholder.com/150",
      badgeCount: 5,
    },
    {
      id: 4,
      name: "David",
      description: "Backend Developer for financial services",
      avatar: "https://via.placeholder.com/150",
      badgeCount: 3,
    },
    {
      id: 5,
      name: "Eva",
      description: "UI/UX Designer for mobile app project",
      avatar: "https://via.placeholder.com/150",
      badgeCount: 10,
    },
    {
      id: 6,
      name: "Frank",
      description: "DevOps Engineer for cloud infrastructure setup",
      avatar: "https://via.placeholder.com/150",
      badgeCount: 6,
    },
    {
      id: 7,
      name: "Grace",
      description: "Project Manager for agile teams",
      avatar: "https://via.placeholder.com/150",
      badgeCount: 9,
    },
    {
      id: 8,
      name: "Hank",
      description: "Data Scientist for predictive analytics",
      avatar: "https://via.placeholder.com/150",
      badgeCount: 4,
    },
    {
      id: 9,
      name: "Ivy",
      description: "Marketing Specialist for social media campaigns",
      avatar: "https://via.placeholder.com/150",
      badgeCount: 11,
    },
    {
      id: 10,
      name: "Jack",
      description: "Quality Assurance Engineer for software testing",
      avatar: "https://via.placeholder.com/150",
      badgeCount: 7,
    },
  ];

export default function WorkspaceLayout({ children }) {
  return (
    <div className="grid md:grid-cols-[.3fr_1fr] gap-4 h-[80vh]">
      <div className="w-full bg-white border-r border-gray-300 rounded-xl">
        <header className="bg-gray-900 text-white py-4 px-6 flex items-center justify-between rounded-t-xl">
          <h1 className="text-lg font-medium">Workspace</h1>
          <div className="flex items-center gap-1">
            <DropdownMenu dir="ltr">
              <DropdownMenuTrigger>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 hover:opacity-80"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
                  />
                </svg>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Active Workspace</DropdownMenuItem>
                <DropdownMenuItem>On Going Workspace</DropdownMenuItem>
                <DropdownMenuItem>Completed Workspace</DropdownMenuItem>
                <DropdownMenuItem>Workspace with disputes</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        <div className="overflow-y-auto h-[70vh] p-3">
          {workspaces.map((workspace) => (
            <div
              key={workspace.id}
              className="flex items-center mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded-md relative"
            >
              <Avatar className="mr-3">
                <AvatarImage src={workspace.avatar} />
                <AvatarFallback>{workspace.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h2 className="text-md font-semibold">{workspace.name}</h2>
                <p className="text-gray-600 text-xs">{workspace.description}</p>
              </div>
              <Badge className="absolute top-2 right-2 rounded-full">
                {workspace.badgeCount}
              </Badge>
            </div>
          ))}
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}
