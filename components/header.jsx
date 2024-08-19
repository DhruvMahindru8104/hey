import React from 'react'
import Link from 'next/link'

function Header() {
  return (
    <>
    <div>
  <header className="text-gray-600 body-font">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
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
      <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <Link href={'/'} className="mr-5 hover:text-gray-900"> home </Link>
          
        <a href='https://collegeadmissions.gndu.ac.in/studentArea/GNDUEXAMRESULT.aspx' className="mr-5 hover:text-gray-900">
          check results 
        </a>
        <Link href={'/blogs'} className="mr-5 hover:text-gray-900">
          blogs
        </Link>
        <Link href={'/blogsssr'} className="mr-5 hover:text-gray-900">
          blogs with ssr
        </Link>
        <Link href={'/blogsuseeffect'} className="mr-5 hover:text-gray-900">
          blogs with csr
        </Link>

      </nav>
    
    </div>
  </header>
  
</div>
    </>
  )
}

export default Header