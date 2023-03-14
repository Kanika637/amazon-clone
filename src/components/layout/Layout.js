import React from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import Navbar from '../navbar/Navbar'

const Layout = ({children}) => {
  return (
    <div>
        <Header/>
        <Navbar/>
        {children}
        <Footer/>
    </div>
  )
}

export default Layout