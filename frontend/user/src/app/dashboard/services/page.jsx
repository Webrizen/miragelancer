import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import Link from "next/link";
import React from "react";

const services = [
  {
    id: 1,
    title: "Web Design",
    description:
      "Crafting visually stunning and user-friendly websites tailored to your brand, like strategic opening moves on the digital chessboard.",
    timeAgo: "3min ago",
    sold: 12,
    rating: 4.7,
  },
  {
    id: 2,
    title: "Web Development",
    description:
      "Building robust and scalable web applications with cutting-edge technologies, akin to carefully planning mid-game strategies.",
    timeAgo: "5min ago",
    sold: 8,
    rating: 4.6,
  },
  {
    id: 3,
    title: "E-commerce Solutions",
    description:
      "Creating seamless online shopping experiences that drive conversions, much like executing tactical maneuvers in the heat of battle.",
    timeAgo: "10min ago",
    sold: 15,
    rating: 4.8,
  },
  {
    id: 4,
    title: "SEO Optimization",
    description:
      "Strategically positioning your website to dominate search engine results, playing the long game with calculated precision.",
    timeAgo: "20min ago",
    sold: 20,
    rating: 4.9,
  },
  {
    id: 5,
    title: "Mobile App Development",
    description:
      "Crafting mobile applications that move fluidly, much like a skilled player navigating the board with grace.",
    timeAgo: "30min ago",
    sold: 5,
    rating: 4.5,
  },
  {
    id: 6,
    title: "Digital Marketing",
    description:
      "Executing targeted campaigns that capture audience attention like a masterful checkmate, ensuring your brand emerges victorious.",
    timeAgo: "1hr ago",
    sold: 25,
    rating: 4.9,
  },
];

export default function page() {
  return (
    <>
      <section>
        <div className="container flex justify-center flex-col mx-auto">
          <h2 className="text-xl md:text-3xl font-bold text-left text-gray-900 dark:text-white mb-4">
            Your Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                className="bg-white card rounded-lg overflow-hidden relative border dark:border-rgba(225,225,225,0.1) border-[rgba(0,0,0,0.1)]"
                key={index}
              >
                <div className="absolute w-56 h-48 bg-orange-300 blur-[100px] -left-1/2 -bottom-1/2"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                    {service.title}
                  </h3>
                  <div className="flex justify-start flex-wrap gap-2 whitespace-nowrap my-2 items-center text-gray-500 dark:text-gray-400 text-xs">
                    <span>{service.timeAgo}</span>
                    <span>•</span>
                    <span className="underline">{service.sold} sold</span>
                    <span>•</span>
                    <span className="flex items-center">
                      <Star className="h-4 w-4 mr-1" />
                      {service.rating}
                    </span>
                  </div>
                  <p className="text-gray-700 text-sm">{service.description}</p>
                </div>
                <div
                  className="absolute top-0 right-0 p-2 cursor-pointer bg-red-50 hover:bg-red-100 text-red-500 rounded-bl-xl z-50"
                  title="Delete"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
                </div>
                <Link
                  href={`/dashboard/edit-products/${service.id}`}
                  className="absolute top-[48px] right-0 p-2 cursor-pointer bg-blue-50 hover:bg-blue-100 text-blue-500 rounded-bl-xl rounded-tl-xl z-50"
                  title="Edit"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                    />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
          <Button className="mx-auto mt-8">Add New Service</Button>
        </div>
      </section>
    </>
  );
}
