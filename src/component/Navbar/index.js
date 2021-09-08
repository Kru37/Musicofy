import React, { useState , useEffect } from 'react'
import { Nav, NavbarContainer,Navlogo,MobileIcon,NavMenu,NavItems,Navlinks,NavBtn,NavBtnLink } from './Navbarelement'
import {FaBars} from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'
const  Navbar= ({changeState}) => {
    const [scrollnav,setscrollnav] = useState(false)
    const changeNav = ()=>{
        if(window.scrollY >= 80){
            setscrollnav(true)
        }else{
            setscrollnav(false)
        }
    }
    useEffect(() => {
       window.addEventListener('scroll',changeNav)
    }, [])
    const toggleHome = ()=>{
        scroll.scrollToTop()
    }
    return (
        <>
         <Nav scrollnav ={scrollnav}>
              <NavbarContainer>
                  <Navlogo to ='/' onClick = {toggleHome}>
                      Musicofy
                  </Navlogo>
                  <MobileIcon onClick = {changeState}>
                      <FaBars/>
                  </MobileIcon>
                  <NavMenu>
                      <NavItems>
                          
                          <Navlinks to ='overview' smooth={true} duration = {500} spy ={true} exact='true' offset ={-80} >
                              Overview
                          </Navlinks>
                      </NavItems>
                      
                      <NavItems>
                          <Navlinks to ='video' smooth={true} duration = {500} spy ={true} exact = "true" offset={-74}>
                              Video 
                          </Navlinks>
                      </NavItems>
                      <NavItems>
                          
                          <Navlinks to ='music' smooth={true} duration = {500} spy ={true} exact = "true" offset={-73}>
                              Music 
                          </Navlinks>
                      </NavItems>
                      <NavItems>
                          <Navlinks to ='giftcard' smooth={true} duration = {500} spy ={true} exact = "true" offset={-70}>
                              Gift cards
                          </Navlinks>
                      </NavItems>
                  </NavMenu>
                  <NavBtn>
                      <NavBtnLink to ='./sign-in'>
                          Sign In
                      </NavBtnLink>
                  </NavBtn>
              </NavbarContainer>
          </Nav>  
        </>
    )
}

export default Navbar
