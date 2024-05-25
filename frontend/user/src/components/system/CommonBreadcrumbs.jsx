"use client";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function CommonBreadcrumbs() {
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);
  const constructPath = (index) => {
    return "/" + pathNames.slice(0, index + 1).join("/");
  };

  return (
    <Breadcrumb className="md:block hidden">
    <BreadcrumbList>
      {pathNames.map((path, index) => (
        <React.Fragment key={index}>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href={constructPath(index)} className="capitalize">{path}</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          {index < pathNames.length - 1 && (
            <BreadcrumbSeparator />
          )}
        </React.Fragment>
      ))}
    </BreadcrumbList>
  </Breadcrumb>
  );
}
