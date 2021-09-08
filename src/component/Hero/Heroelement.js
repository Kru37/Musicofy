import styled from "styled-components";
import { MdArrowForward } from "react-icons/md"
import {MdKeyboardArrowRight} from 'react-icons/md'
import { Link as LinkR } from "react-router-dom";

export const Herocontainer = styled.div `
 background: #0c0c0c;
 display: flex;
 justify-content: center;
 align-items: center;
 position: relative;
 padding: 0 30px;
 height: 750px;
 position: relative;
 z-index: 1;
 ::before{
     content: '';
     position: absolute;
     top: 0;
     bottom: 0;
     left: 0;
     right: 0;
     background: linear-gradient(180deg,rgba(0,0,0,0.2) 0%,rgba(0,0,0,0.6) 100%),linear-gradient(180deg , rgba(0,0,0,0.2) 0% , transparent 100%);
     z-index: 2;
 }
`

export const Herobg = styled.div `
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 width: 100%;
 height: 100%;
 overflow: hidden;

`

export const Videobg = styled.video `
 width: 100%;
 height: 100%;
 -o-object-fit:cover;
 object-fit:cover;
 background: #232a34;
`

export const Herotext = styled.div`
position: absolute;
 text-align: center;
 height: 100%;
 max-width:1100px;
 color: white;
 margin-top: 50vh;
 z-index:10;
 display: flex;
 flex-direction: column;
 align-items: center;
 padding:8px 24px;
   @media screen and (max-width:768px){
      
      margin-top: 55vh;
  }
  @media screen and (max-width:480px){
      
     margin-top: 65vh;
  }

`
export const Heroheader = styled.h1`
    font-size: 4rem;
	margin-bottom: 0;
    padding: 10px 12px;
    @media screen and (max-width:480px){
      
      font-size: 32px;
  }
   @media screen and (max-width:768px){
      
      font-size: 40px;
  }
    
`
export const Herosubheader = styled.h2`
 font-size: 2rem;
 max-width:100% ;
 padding: 0 12px;
 padding-bottom:14px;
  @media screen and (max-width:480px){
      font-size: 1.1rem;
  }

`
export const Heroinfo = styled.p `
  font-size: 1.5rem;
   max-width:100%;
  color:#c9c9c9;
  padding-bottom:8px;

  @media screen and (max-width:768px){
      display: none;
  }
`
export const Herobtnwrapper = styled.div`
 display: flex;
 flex-direction: column;
 align-items:center;


`
export const ArrowForward = styled(MdArrowForward)`
 margin-left: 8px;
 font-size: 22px;
`
export const Arrowright = styled(MdKeyboardArrowRight)`
 margin-left: 8px;
 font-size: 22px;



`
export const Button = styled(LinkR)`
 border-radius:50px;
 background:transparent;
 white-space:nowrap;
 padding:14px 48px;
 color:#fff;
 border: #fff 2px solid;
 font-size:20px;
 text-align:center;
 
 outline: none;
 
 cursor: pointer;
 transition: all 0.2s ease-in-out;
 display: flex;
 justify-content:center;
 align-items: center;
 text-decoration:none;


 &:hover{
     transition: all 0.2s ease-in-out;
     border: none;
     background:#b90415;
     color:#fff;
 }
  @media screen and (max-width:480px){
      padding:7px 24px;
      font-size:15px;
  }

`