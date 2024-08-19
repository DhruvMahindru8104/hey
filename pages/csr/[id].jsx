import React from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'
import Head from 'next/head'
import ContentCsr from '../../components/blogcsr/contentcsr'
import { useEffect,useState } from 'react'
import { useRouter } from 'next/router'
function BlogUseEffect() {
    const router = useRouter();
    const { id } = router.query; // Access the dynamic route parameter
    console.log(typeof(id))
    console.log(id)

    const [todo, settodo] = useState([])
    useEffect(() => {
        if (id) { // Check if id is available
          const fetchTodos = async () => {
            try {
              const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
              const data = await response.json();
              settodo(data); // Set the fetched data
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          };
    
          fetchTodos();
        }
      }, [id]); // Add id as a dependency
  return (
    <>
    <Head>
        <title>
        dynamic page with client side rendering

        </title>
    </Head>
    <Header/>
    ismein pehle html dikhegi fir useeffect fetch krega data ko 
    <ContentCsr todo={todo}/>
    <Footer/>
    </>
  )
}

export default BlogUseEffect