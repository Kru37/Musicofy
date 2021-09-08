import React, { useState } from 'react'
import { Route } from 'react-router'
import Footer from '../component/Footer'
import Gift from '../component/Giftcard'
import Hero from '../component/Hero'
import Musi from '../component/Music'
import Navbar from '../component/Navbar'
import Sidebar from '../component/Sidebar'
import Sign from '../component/Signup'

import Video from '../component/Video'
const Home = () => {
    const [isOpen , setisOpen] = useState(false)
    const [hover , sethover] = useState(false)
    const [readmore,setreadmore] = useState(false)
    const changeState = ()=>{
        setisOpen(!isOpen)
    }
    const hoverenter = ()=>{
        sethover(true)
    }
    const hoverleave = ()=>{
        sethover(false)
    }
    const changeread = ()=>{
        setreadmore(!readmore)
    }
    return (
        <>
        <Navbar changeState = {changeState} />
      
            <Sidebar isOpen = {isOpen} changeState = {changeState} />
            <Hero hover = {hover} hoverenter ={hoverenter} hoverleave ={hoverleave}/>
        
            <Video readmore ={readmore} changeread = {changeread}/>
            <Musi/>
            <Gift/>
       
       
         <Footer/>
        </>
    )
}

export default Home
