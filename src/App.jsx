import { useState } from "react"
import { HashRouter, Route, Routes } from "react-router-dom"
import Layout from "./pages/Layout"
import Home from "./pages/Home"
import ProductList from "./pages/ProductList"
import About from "./pages/About"
import Shopping from "./pages/Shopping"
import AllProducts from "./pages/AllProducts"

function App() {
  return (
    <HashRouter> 
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />}></Route>
          <Route path="/product-list" element={<ProductList />}></Route>
          <Route path="/product/:id" element={<ProductList />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/shopping" element={<Shopping />}></Route>
          <Route path="/all-products" element={<AllProducts />}></Route>
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App;
