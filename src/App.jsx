import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Products from './Pages/Products';
import ProductList from './Pages/ProductList';
import CartPage from './Pages/CartPage';
function App() {









  return (
    <>
  
   <Router>
   <Navbar></Navbar>
   <Routes>
          <Route exact  path="/"  element={<Home />} />
          <Route exact  path='/products' element={<Products></Products>}></Route>
          <Route exact  path='/products-details' element={<ProductList></ProductList>}></Route>
          <Route exact path='/view-cart' element={<CartPage></CartPage>}></Route>
          
          {/* <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} /> */}
        </Routes>
        </Router>
    </>
  )
}

export default App
