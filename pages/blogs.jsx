import React from 'react'
import Header from '../components/header'
import Head from 'next/head'
import Footer from '../components/footer'
import Content from '../components/blog/Content'

function blogs({todos}) {
  return (
    <>
   <Head>
    <title>blogs static</title>
   </Head>
   <Header/>
   dekho yha pe html and jo data api se fetch hoke aa rha vo jldi jldi load ho jayega kyuki npm run build krke html and data ikthe build hogya ab request maroge to quickly aapko html and data show hogya
   <Content  todos={todos}/>
   <Footer/>
    </>
    
  )
}

export default blogs

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const todos = await res.json();

  return {
    props: {
      todos,
    },
  };
}