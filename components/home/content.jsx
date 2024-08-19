import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Content() {
  return (
    <>
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -mx-4 -mb-10 text-center">
      <div className="sm:w-1/2 mb-10 px-4">
        <div className="rounded-lg h-64 overflow-hidden">
          <Image
            width={1202}
            height={502}
            alt="content"
            className="object-cover object-center h-full w-full"
            src="/images/paris.jpg"
          />
        </div>
        <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
          Paris
        </h2>
        <p className="leading-relaxed text-base">
          Williamsburg occupy sustainable snackwave gochujang. Pinterest cornhole brunch, slow-carb neutra irony.
        </p>
        <Link href={'/images/paris.jpg'} className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
          Get This Pic
        </Link>
      </div>
      <div className="sm:w-1/2 mb-10 px-4">
        <div className="rounded-lg h-64 overflow-hidden">
          <Image
            width={1202}
            height={502}
            className="object-cover object-center h-full w-full"
            src="/images/madrid.jpg"
          />
        </div>
        <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
          Madrid
        </h2>
        <p className="leading-relaxed text-base">
          Williamsburg occupy sustainable snackwave gochujang. Pinterest cornhole brunch, slow-carb neutra irony.
        </p>
        <Link href={'/images/madrid.jpg'} className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
          Get this pic
        </Link>
      </div>
    </div>
  </div>
</section>
    </>
  )
}
