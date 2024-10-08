import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import Cart from './pages/Cart'
import About_us from './pages/About_us'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Place_order from './pages/Place_order'
import Product from './pages/Product'
import Order from './pages/Order'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Navbar/>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Collection' element={<Collection/>} />
          <Route path='/Cart' element={<Cart/>} />
          <Route path='/About_us' element={<About_us/>} />
          <Route path='/Contact' element={<Contact/>} />
          <Route path='/Login' element={<Login/>} />
          <Route path='/Place_order' element={<Place_order/>} />
          <Route path='/Product/:productId' element={<Product/>} />
          <Route path='/Order' element={<Order/>} />
      </Routes>
    </div>
  )
}

export default App