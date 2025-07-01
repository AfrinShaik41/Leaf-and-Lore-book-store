import React from 'react'
import Bookdetails from './Bookdetails'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Books from './Books'
import Customer from './Customer'
import Contact from './Contact'
import Footer from './Footer'
import Catagery from './Catagery'
import {Routes,Route}from 'react-router-dom'
import Other from './Other'
import Offer from './Offer'
import Upcoming from './Upcoming'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/' element={<Navbar/>}></Route>

        <Route path='/About' element={<About/>}></Route>
        <Route path='/Catagery' element={<Catagery/>}></Route>
        <Route path='/Other' element={<Other/>}></Route>
        <Route path='/Books' element={<Books/>}></Route>
        <Route path='/Book/:id' element={<Bookdetails/>}></Route>
        <Route path='/Upcoming' element={<Upcoming/>}></Route>
        <Route path='/Offer' element={<Offer/>}></Route>
        <Route path='/Customer' element={<Customer/>}></Route>
         <Route path='/Contact' element={<Contact/>}></Route>

        

    </Routes>
      <Footer className='absolute bottom-0.5'/>
      
    </div>
  )
}

export default App
