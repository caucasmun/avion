import { useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./pages/Layout"
import Home from "./pages/Home"
import ProductList from "./pages/ProductList"
import About from "./pages/About"
import Shopping from "./pages/Shopping"
import AllProducts from "./pages/AllProducts"



function App() {    
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/avion" element={<Layout />} >
          <Route index element={<Home />}></Route>
          <Route path="/avion/product-list" element={<ProductList />}></Route>
          <Route path="/avion/about" element={<About />}></Route>
          <Route path="/avion/shopping" element={<Shopping />}></Route>
          <Route path="/avion/all-products" element={<AllProducts />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App