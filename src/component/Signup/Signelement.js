import styled from "styled-components";
import{FaFacebook , FaGooglePlus  } from 'react-icons/fa'
import {AiFillTwitterCircle} from 'react-icons/ai'
export const Signcontainer = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
   max-width: 450px;
  height: 65%;
	margin: 0 auto;
	padding: 1rem 2rem;
  margin-top: 80px;
  background: white;
  
  @media screen and (max-width:480px){
    max-width: 280px;
  }
`
export const Signtitle = styled.h1`
padding-bottom: 20px;
 text-align: center;
`
export const Signform = styled.div `
 text-align: left;
`
export const Signlabel = styled.label`
 color:#42413f;
 
`
export const Signinput = styled.input `
border-top-style: hidden;
 border-right-style: hidden;
border-left-style: hidden;
 outline: none;
 width:100%;
  padding:5px  ;
  margin-bottom: 10px;
  border-bottom:2px solid #999999;
  color: #242424;
`
export const Signp = styled.p`
 color:#42413f;
 align-self: flex-end;
 margin-bottom:2rem;
`
export const Signbtn = styled.a`
  text-decoration: none;
  display:inline-block;
  width: 100%;
  padding: 10px 20px;
  text-align:center;
  color: white;
  background-image: linear-gradient(to top, #ff0844 0%, #ffb199 100%);
  border: none;
  border-radius:18px;
`
export const Signsection =  styled.section `
 background:linear-gradient(to top, #ff0844 0%, #ffb199 100%);
 width: 100%;
 height: 100vh;
 display: flex;
 justify-content: center;
 align-items: center;
`
export const Signsocialdiv = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
 padding: 1rem 0.5rem;
`
export const Socialface = styled(FaFacebook)`
 color: blue;
 margin-right: 10px;
 
`
export const Socialgoo = styled(FaGooglePlus)`
 color: orange;
 margin-right: 10px;
`
export const Socialtwit = styled(AiFillTwitterCircle)`
 color: skyblue;
`
export const Signup = styled.p `
color: #42413f;
font-weight:bold;
text-align: center;

`
