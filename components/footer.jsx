import React from 'react'
import Link from 'next/link'

function Footer () {
  return (
    <>
    <footer className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="  flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      <svg
        className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
      <span className="ml-3 text-xl">
        Dhruv Mahindru
      </span>
    </a>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
      @
      <Link
        className="text-gray-600 ml-1"
        href="/blogs"
        
        
      >
        Dhruv Mahindru
      </Link>
    </p>
   
  </div>
</footer>
    </>
  )
}

export default Footer