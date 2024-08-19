import React from 'react'
import Head from 'next/head'
import Contentssr from '../../components/blogssr/contentssr'
import Header from '../../components/header'
import Footer from '../../components/footer'

function ContentSSRPAGE({todos}) {
  return (
    <>
        <Head>
        <title>dynamic page with getServerSideProps </title>
    </Head>
    <Header/>
    ismein html and data thoda time leke show hoga because server se data and html hr request pr bnkr aayegi. as a result pehle blank show hoga page and then html and data ikthe user ko show hoga
    <Contentssr todo={todos}/>
    <Footer/>
    </>
  )
}

export default ContentSSRPAGE

export async function getServerSideProps({params}) {
    // Fetch data from the API
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.id}`);
    const todos = await res.json();
  
    // Return the data as props
    return {
      props: {
        todos,
      },
    };
  }