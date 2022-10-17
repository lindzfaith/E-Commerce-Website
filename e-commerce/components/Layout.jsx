import React from 'react'
// gets meta data about website
import Head from 'next/head';
import Footer from './Footer';
import NavigationBar from './NavigationBar';

const Layout = ( {children} ) => {
  return (
    <div className="layout">
      <Head>
        <title> Super Smash Bros Shop </title>
      </Head>
      <header>
        <NavigationBar/>
      </header>
      <main className="main-container">
        { children }
      </main>
      <footer>
        <Footer/>
      </footer>

    </div>
  )
}

export default Layout