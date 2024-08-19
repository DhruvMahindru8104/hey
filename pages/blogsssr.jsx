import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import Head from 'next/head'
import Content from '../components/blogssr/content'
function blogsssr({todos}) {
  return (
    <>
    <Head>
        <title>
        blog fetching with ssr

        </title>
    </Head>
    <Header/>
    ismein html and data thoda time leke show hoga because server se data and html hr request pr bnkr aayegi. as a result pehle blank show hoga page and then html and data ikthe user ko show hoga
    <Content todos={todos}/>
    <Footer/>
    </>
  )
}

export default blogsssr

export async function getServerSideProps() {
  // Fetch data from the API
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const todos = await res.json();

  // Return the data as props
  return {
    props: {
      todos,
    },
  };
}