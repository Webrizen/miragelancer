import Link from "next/link";
import {
  Home,
  Package2,
  PanelLeft,
  Settings,
  ShoppingCart,
  WalletCards,
  Workflow,
  Briefcase,
} from "lucide-react";
import { Button } from "@/components/ui/button";

import RouteGuard from "@/components/providers/RouteGuard";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Tooltip,
  TooltipProvider,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import CommonBreadcrumbs from "@/components/system/CommonBreadcrumbs";

export default function DashboardLayout({ children }) {
  const navItems = [
    {
      href: "/dashboard",
      icon: <Home className="h-5 w-5" />,
      label: "Dashboard",
      tooltip: "Dashboard",
    },
    {
      href: "/dashboard/orders",
      icon: <ShoppingCart className="h-5 w-5" />,
      label: "Orders",
      tooltip: "Orders",
      className: "bg-accent text-accent-foreground",
    },
    {
      href: "/dashboard/workspace",
      icon: <Workflow className="h-5 w-5" />,
      label: "Workspace",
      tooltip: "Workspace",
    },
    {
      href: "/dashboard/services",
      icon: <Briefcase className="h-5 w-5" />,
      label: "Services",
      tooltip: "Services",
    },
    {
      href: "/dashboard/proposals",
      icon: <WalletCards className="h-5 w-5" />,
      label: "Proposals",
      tooltip: "Proposals",
    },
  ];

  function getGreeting() {
    const now = new Date();
    const hour = now.getHours();

    if (hour < 12) {
      return "Good Morning";
    } else if (hour < 18) {
      return "Good Afternoon";
    } else if (hour < 21) {
      return "Good Evening";
    } else {
      return "Good Night";
    }
  }

  return (
    <RouteGuard>
      <div className="flex min-h-screen w-full flex-col bg-muted/40">
        <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex bg-white">
          <TooltipProvider>
            <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
              <Link
                href="#"
                className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
              >
                <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
                <span className="sr-only">Miragelancer</span>
              </Link>
              {navItems.map(({ href, icon, tooltip, className = "" }) => (
                <Tooltip key={tooltip}>
                  <TooltipTrigger asChild>
                    <Link
                      href={href}
                      className={`flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8 ${className}`}
                    >
                      {icon}
                      <span className="sr-only">{tooltip}</span>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="right">{tooltip}</TooltipContent>
                </Tooltip>
              ))}
            </nav>
            <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="#"
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                  >
                    <Settings className="h-5 w-5" />
                    <span className="sr-only">Settings</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">Settings</TooltipContent>
              </Tooltip>
            </nav>
          </TooltipProvider>
        </aside>
        <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
          <header className="sticky top-0 z-30 flex md:justify-normal justify-between h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
            <Sheet>
              <SheetTrigger asChild>
                <Button size="icon" variant="outline" className="sm:hidden">
                  <PanelLeft className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="sm:max-w-xs">
                <nav className="grid gap-6 text-lg font-medium">
                  <Link
                    href="#"
                    className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                  >
                    <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
                    <span className="sr-only">Miragelancer</span>
                  </Link>
                  {navItems.map(({ href, icon, label, className = "" }) => (
                    <Link
                      key={label}
                      href={href}
                      className={`flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground ${className}`}
                    >
                      {icon}
                      {label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
            <CommonBreadcrumbs />
            <div className="relative ml-auto md:flex hidden justify-end gap-2 items-center whitespace-nowrap">
              <span>
                {getGreeting()},{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-600">
                  Arshahdul Ahmed
                </span>
              </span>
              <span>•</span>
              <span className="text-slate-500">
                {new Date().toLocaleString()}
              </span>
            </div>
          </header>
          <main className="flex flex-col px-4 py-2 w-full">{children}</main>
        </div>
      </div>
    </RouteGuard>
  );
}
