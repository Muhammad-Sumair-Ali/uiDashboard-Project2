import { useState } from 'react'



export default function HeroLand() {

  return (
    <div className="bg-primary text-primary-foreground mt-5">
    

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
           
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py- lg:py-0 pt-0 pb-0 mt-0 mb-0">
          <div className="hidden sm:mb-2 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Introducing charts 
              <b  className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </b>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Build your component library
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Beautifully designed components that you can copy and paste into your apps. this is a clone of shadcn/ui Creater | <b>
              Muhammad Sumair 
              </b> 
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <b
                
                className="rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 bg-primary text-primary-foreground"
              >
                Get started
              </b>
              <b  className="p-2 font-semibold rounded-md bg-gray-200 text-gray-900">
               GitHub<span aria-hidden="true"></span>
              </b>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
           
          />
        </div>
      </div>
    </div>
  )
}
