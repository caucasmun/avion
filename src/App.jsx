import { useState } from "react"
import Header from "./components/header/Header"
import Nav from './components/nav/Nav'
import First from './components/first/First'
import Second from './components/second/Second'
import Third from './components/third/Third'
import Fourth from './components/fourth/Fourth'
import Fifth from './components/fifth/Fifth'

function App() {    
  return (
    <> 
      <Header></Header>
      <Nav></Nav>
      <First></First> 
      <Second></Second>
      <Third></Third>
      <Fourth></Fourth>
      <Fifth></Fifth>
    </>
  )
}

export default App