import React from 'react'
import Link from 'next/link'
function Content({todos}) {
  return (
    <>
        <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">      
    {todos.map((todo) => (
          <div key={todo.id} className="p-4 lg:w-1/3">
            <Link href={`/ssr/${todo.id}`}>
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