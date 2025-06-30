import React from 'react'

import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Books from './Books'
import Customer from './Customer'
import Contact from './Contact'
import Footer from './Footer'
import Catagery from './Catagery'

import Other from './Other'
import Offer from './Offer'
import Upcoming from './Upcoming'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Catagery/>
      <Other/>
      <Books/>
    
      <Offer/>
      <Upcoming/>
      <Customer/>
      <Contact/>
      <Footer/>
    
    </div>
  )
}

export default App
