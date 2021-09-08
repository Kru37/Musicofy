import styled from "styled-components";

export const Videosection = styled.section `
  padding-top:80px;
  
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
  

`
export const Videocontainer = styled.div `
    max-width: 1180px;
	text-align: center;
	margin: 0 auto;
	padding: 0 3rem;
  
`
export const Videobasic = styled.h3 `
  font-size: 2rem;
 padding-bottom:1rem;
  
`
export const Videoinfo =  styled.p`
 font-size: 1.3rem;
 padding-bottom:1rem;

 @media screen and (max-width:480px){
    display:none;
 }

`
export const Videoimage = styled.img`
 width: 100%;
 padding-bottom:2rem;


`

export const Buttonread = styled.a`
   padding: 1rem 2rem;
	display: inline-block;
	color: #fff;
    background: ${({readmore}) => (readmore?'#103063':'#b90415')};
    margin-bottom: 1rem;
   border-radius: 30px;
   &:hover{
     background: ${({readmore}) => (readmore?'#143f85':'#d3071b')};  
   }
    @media screen and (max-width:480px){
     display:none;
 }

`
