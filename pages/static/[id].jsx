import React from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'
import Head from 'next/head'
import Contstatic from '../../components/blog/Contstatic'

function Staticblog({todo}) {
    console.log(todo)
  return (
    <>
    <Head>
        <title>dynamic page with get static paths </title>
    </Head>
    <Header/>
    dekho yha pe html and jo data api se fetch hoke aa rha vo jldi jldi load ho jayega kyuki npm run build krke html and data ikthe build hogya ab request maroge to quickly aapko html and data show hogya. And getstatic paths se hr ek api k paths built hai 
    <Contstatic todo={todo}/>
    <Footer/>
    
    </>
  )
}

export default Staticblog

export async function getStaticPaths() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    const todos = await res.json();
  
    // Paths generate karenge, jaise: /todos/1, /todos/2, ...
    const paths = todos.map((todo) => ({
      params: { id: todo.id.toString() }, // ID ko string mein convert karenge . jo params hai vo sb post ki id ka array bna deta .like [1,2,3,4....100]
    }));
  
    return { paths, fallback: false };
  }

  export async function getStaticProps({ params }) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.id}`);
    const todo = await res.json();
  
    return { props: { todo } };
  }