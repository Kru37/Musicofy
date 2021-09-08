import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Sidebarcontainer = styled.aside`
 position: fixed;
 z-index: 999;
 width: 100%;
 height: 100%;
 background: #0d0d0d;
 display: grid;
 align-items: center;
 left: 0;
 transition: 0.3s ease-in-out;
 opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
 top: ${({isOpen}) => (isOpen? '0' : '-100%')};

`
export const Closeicon = styled(FaTimes)`
 color: white;
`

export const Icon = styled.div`
 position: absolute;
 top: 1.2rem;
 right: 1.5rem;
 background: transparent;
 font-size: 2rem;
 cursor: pointer;
 outline: none;
  @media screen and (max-width:480px){
     font-size:1.5rem;
     top:1rem;
     right:1.2rem;
 }
`
export const Sidebarwrapper = styled.div`
 color: white;
`
export const Sidebarmenu = styled.ul `
 display: grid;
 grid-template-columns: 1fr;
 grid-template-rows: repeat(6,80px);
 text-align:center;
 margin-right:5%;
 @media screen and (max-width:480px){
     grid-template-rows: repeat(6,60px);
 }
`

export const SidebarLink = styled(LinkS)`
 display:flex;
 align-items:center;
 justify-content:center;
 font-size: 1.5rem;
 text-decoration: none;
 list-style: none;
 transition: 0.2s ease-in-out;
 color: white;
 cursor: pointer;

 &:hover{
     color: #01bf71;
     transition: 0.2s ease-in-out;

 }

`
export const SidebarBtn = styled.div `
 display: flex;
 justify-content:center;
 margin-left:3%;
 


`

export const SidebtnLink = styled(LinkR)`
 border-radius:50px;
 background:#b90415;
 white-space:nowrap;
 padding:16px 64px;
 color:#fff;
 font-size:20px;

 outline: none;
 border: none;
 cursor: pointer;
 transition: all 0.2s ease-in-out;
 text-decoration:none;


 &:hover{
     transition: all 0.2s ease-in-out;
     background:#fff;
     color:#b90415;
 }

`
