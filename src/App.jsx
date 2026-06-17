import { useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./pages/Layout"
import Home from "./pages/Home"
import ProductList from "./pages/ProductList"
import Test from "./pages/Test"



function App() {    
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/avion" element={<Layout />} >
          <Route index element={<Home />}></Route>
          <Route path="/avion/product-list" element={<ProductList />}></Route>
          <Route path="/avion/test" element={<Test />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App