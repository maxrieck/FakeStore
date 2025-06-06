// import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import ProductList from './components/ProductList'
import ProductDetails from './components/ProductDetails'
import AddProduct from './components/AddProdcut'
import EditProduct from './components/EditProduct'


function App() {
 

  return (
    <>
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products" element={<ProductList />}></Route>
          <Route path="/products/:id" element={<ProductDetails />}></Route>
          <Route path="/addproduct" element={<AddProduct />}></Route>
          <Route path="/editproduct/:id" element={<EditProduct />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
