import styled from "styled-components";
import {FaMusic} from 'react-icons/fa'

export const Musicsection = styled.section`

   padding-top:80px;
   background: #131413;
   color: white;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
  
  


`
export const Musiccontainer = styled.div`
    max-width: 1180px;
	text-align: center;
	margin: 0 auto;
	padding: 0 3rem;

`

export const Musichead = styled.h2`
  	font-size: 2.5rem;
	margin: 0;
    color: #fff;
    padding-bottom:1rem;

`
export const Musicicon = styled(FaMusic)`
 color: white;
`
export const Musicbasic = styled.h3`
 font-size: 2rem;
 padding-bottom:1rem;
`
export const Musicinfo = styled.p`
 font-size: 1.3rem;
 padding-bottom:1rem;

 @media screen and (max-width:480px){
    display:none;
 }

`
export const Musicavail = styled.p`
  color: #f4f4f4;

`
export const Musicimage = styled.img`
 width: 100%;
`