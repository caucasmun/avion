import { useState } from "react"
import Nav from '../components/nav/Nav'
import First from '../components/first/First'
import Second from '../components/second/Second'
import Third from '../components/third/Third'
import Fourth from '../components/fourth/Fourth'
import Fifth from '../components/fifth/Fifth'
import Sixth from '../components/sixth/Sixth'

function Home() {    
  return (
    <> 
      <Nav></Nav>
      <First></First> 
      <Second></Second>
      <Third></Third>
      <Fourth></Fourth>
      <Fifth></Fifth>
      <Sixth></Sixth>
    </>
  )
}

export default Home