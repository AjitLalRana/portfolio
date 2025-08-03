import { useState } from 'react'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Page1 from './components/page1'
import Marquee from './components/Marquee'
import About from './components/About'
import Eye from './components/Eye'
import LocomotiveScroll from 'locomotive-scroll'
import "./index.css"

function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div
    
    className=" w-full min-h-screen  overflow-x-hidden  bg-[url(https://plus.unsplash.com/premium_photo-1746420146061-0256c1335fe4?q=80&w=734&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-no-bg-no-repeat  overflow-x-hidden bg-fixed bg-cover" >
      <Navbar />
      <Landing />
      <Marquee />
      <About />
      <Eye />
      <Page1 />

    </div>
  )
}

export default App
