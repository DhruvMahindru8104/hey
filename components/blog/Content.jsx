import Link from 'next/link'
import React from 'react'

function Content({todos}) {
  return (
    <>
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">      
    {todos.map((todo) => (
      <div key={todo.id} className="p-4 lg:w-1/3">
      <Link href={`/static/${todo.id}`}>
          <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              {todo.userId}
            </h2>
            <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
              {todo.id} {todo.completed}
            </h1> 
            <p className="leading-relaxed mb-3">
              {todo.title}
            </p>
            <a className="text-indigo-500 inline-flex items-center">
              Learn More
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </a>
         
          </div>
        </Link>
        </div>
        ))}
    </div>
  </div>
</section>
    </>
  )
}

export default Content


