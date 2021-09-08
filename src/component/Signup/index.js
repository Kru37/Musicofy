import React from 'react'
import { Signcontainer ,Signsection , Signtitle , Signform , Signbtn , Signinput ,Signlabel , Signp , Signsocialdiv , Socialface , Socialgoo , Socialtwit , Signup } from './Signelement'
import { Navlogo , Nav ,NavbarContainer } from '../Navbar/Navbarelement'
import Footer from '../Footer'
import Scrolltotop from '../Scrolltotop'
const Sign = () => {
    return (
        <>
        <Scrolltotop/>
        <Nav>
            <NavbarContainer>
                <Navlogo to ='/'>
                    Musicofy
                </Navlogo>
            </NavbarContainer>
        </Nav>
        <Signsection>
          <Signcontainer>
              <Signtitle>Login</Signtitle>
              <Signform>
                  <Signlabel htmlFor ='name'>username</Signlabel>
                  <Signinput placeholder = 'Enter your name' id = 'name' name = 'name' type ='text'></Signinput>
                  <Signlabel htmlFor ='password'>Password</Signlabel>
                  <Signinput placeholder = 'Enter your name'id = 'password' name = 'password' type ='text'></Signinput>
              </Signform>
              <Signp>Forgot password?</Signp>
              <Signbtn>Login</Signbtn>
              <Signsocialdiv>
                  <Socialface size ={30}></Socialface>
                  <Socialgoo size ={30}></Socialgoo>
                  <Socialtwit size ={33}></Socialtwit>
              </Signsocialdiv>
              <p>----or----</p>
              <Signup>SIGN UP</Signup>
              
          </Signcontainer> 
        </Signsection>
        <Footer/>
        </>
    )
}

export default Sign
