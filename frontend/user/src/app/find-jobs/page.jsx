import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'

export default function page() {
  return (
    <>
     <section className="bg-gray-100 py-12 md:py-24 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Find Your Dream Job</h1>
            <p className="text-gray-500 md:text-xl dark:text-gray-400">
              Explore a wide range of job opportunities and find the perfect fit for your skills and career goals.
            </p>
            <form className="flex items-center gap-2">
              <Input className="flex-1" placeholder="Job title, keywords or company" type="search" />
              <Button>Search</Button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
