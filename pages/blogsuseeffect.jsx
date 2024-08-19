import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import Head from 'next/head'
import Cont from '../components/blogcsr/Cont'
function blogsuseeffect() {
  return (
    <>
    <Head>
        <title>
        blog fetching with use effect (csr)

        </title>
    </Head>
    <Header/>
    ismein pehle html dikhegi fir useeffect fetch krega data ko 
    <Cont/>
    <Footer/>
    </>
  )
}

export default blogsuseeffect