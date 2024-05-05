"use client";
import React from 'react';
import Link from "next/link";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { ResponsiveLine } from "@nivo/line";
import { PinContainer } from '@/components/system/3d-pin';
import { Meteors } from '@/components/system/meteors';

function LineChart(props) {
  return (
    <div {...props}>
      <ResponsiveLine
        data={[
          {
            id: "C",
            data: [
              {
                x: 1,
                y: 283,
              },
              {
                x: 2,
                y: 250,
              },
              {
                x: 3,
                y: 152,
              },
              {
                x: 4,
                y: 294,
              },
              {
                x: 5,
                y: 211,
              },
              {
                x: 6,
                y: 172,
              },
              {
                x: 7,
                y: 24,
              },
              {
                x: 8,
                y: 25,
              },
              {
                x: 9,
                y: 76,
              },
              {
                x: 10,
                y: 5,
              },
            ],
          },
          {
            id: "B",
            data: [
              {
                x: 1,
                y: 43,
              },
              {
                x: 2,
                y: 237,
              },
              {
                x: 3,
                y: 21,
              },
              {
                x: 4,
                y: 35,
              },
              {
                x: 5,
                y: 26,
              },
              {
                x: 6,
                y: 154,
              },
              {
                x: 7,
                y: 181,
              },
              {
                x: 8,
                y: 65,
              },
              {
                x: 9,
                y: 261,
              },
              {
                x: 10,
                y: 199,
              },
            ],
          },
          {
            id: "A",
            data: [
              {
                x: 1,
                y: 240,
              },
              {
                x: 2,
                y: 228,
              },
              {
                x: 3,
                y: 77,
              },
              {
                x: 4,
                y: 178,
              },
              {
                x: 5,
                y: 196,
              },
              {
                x: 6,
                y: 204,
              },
              {
                x: 7,
                y: 153,
              },
              {
                x: 8,
                y: 289,
              },
              {
                x: 9,
                y: 250,
              },
              {
                x: 10,
                y: 274,
              },
            ],
          },
        ]}
        enableCrosshair={false}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: 0,
          max: "auto",
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "X",
          legendOffset: 45,
          legendPosition: "middle",
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Y",
          legendOffset: -45,
          legendPosition: "middle",
        }}
        colors={{ scheme: "paired" }}
        pointSize={5}
        pointColor={{
          from: "color",
          modifiers: [["darker", 0.2]],
        }}
        pointBorderWidth={2}
        pointBorderColor={{
          from: "color",
          modifiers: [["darker", 0.2]],
        }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            symbolSize: 14,
            symbolShape: "circle",
          },
        ]}
        theme={{
          tooltip: {
            container: {
              fontSize: "12px",
            },
          },
        }}
        role="application"
      />
    </div>
  )
}

export default function page() {
  return (
    <>
      <div className="container w-full mx-auto flex items-center gap-4">
        <form className="flex-1">
          <Input className="bg-white dark:bg-gray-950" placeholder="Search projects..." />
          <Button className="sr-only" type="submit">
            Submit
          </Button>
        </form>
        <Button>Add New</Button>
      </div>
      <div className="container grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full mx-auto">
        <div className="relative bg-slate-950 text-slate-100 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-center items-start">
          <div className="absolute top-2 right-2 flex items-center justify-center opacity-25">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-96 h-96">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
            </svg>
          </div>

          <h1 className="font-bold text-6xl text-white mb-4 relative z-50">
            ₹12,05,600
          </h1>

          <p className="font-normal text-base text-slate-300 mb-4 relative z-50">
            Last 12 months earning.
          </p>
          <Meteors number={40} />
        </div>
        <div className="relative bg-slate-950 text-slate-100 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-center items-start">
          <div className="absolute top-2 right-2 flex items-center justify-center opacity-25">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-96 h-96">
              <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
            </svg>
          </div>

          <h1 className="font-bold text-6xl text-white mb-4 relative z-50">
            28
          </h1>

          <p className="font-normal text-base text-slate-300 mb-4 relative z-50">
            Active Projects.
          </p>
          <Meteors number={40} />
        </div>
        <div className="relative bg-slate-950 text-slate-100 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-center items-start">
          <div className="absolute top-2 right-2 flex items-center justify-center opacity-25">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-96 h-96">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>

          </div>

          <h1 className="font-bold text-6xl text-white mb-4 relative z-50">
            56,679+
          </h1>

          <p className="font-normal text-base text-slate-300 mb-4 relative z-50">
            Views on your profile in last 24 hours.
          </p>
          <Meteors number={40} />
        </div>
      </div>
      <div className="container grid gap-6 grid-cols-1 mx-auto">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Your Growth</CardTitle>
          </CardHeader>
          <CardContent>
            <LineChart className="w-full aspect-[3/1]" />
          </CardContent>
        </Card>
      </div>
    </>
  )
}
