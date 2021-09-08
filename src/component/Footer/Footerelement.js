import styled from "styled-components";

export const Footcontainer =  styled.div`
    max-width: 1180px;
	text-align: center;
	margin: 0 auto;
	padding: 2rem 3rem;

    
`
export const Footerstart = styled.footer`
 background: #262525;
 
`
export const Footcol = styled.div `
    display: grid;
	grid-gap: 40px;
	grid-template-columns: repeat(4,1fr);
	padding: 2rem;
	font-size: 14px;
	text-align: left;
    @media screen and (max-width:780px){
     grid-template-columns: repeat(2,1fr)
    }
     @media screen and (max-width:480px){
     grid-template-columns: repeat(1,1fr)
    }
`
export const Footlist = styled.ul `
 list-style: none;
 
`
export const Footlisttitle = styled.li`
    color: white;
    font-size: 1.2rem;
	padding-bottom: 0.5rem;
	border-bottom: #444 solid 1px;
	margin-bottom: 1rem;

`
export const Footlistitem = styled.li `
 text-align: left;
 padding-top: 1rem;
`
export const Footlisthref = styled.a `
    text-decoration: none;
	color: #8a8a8a;
`
export const Footerbottom = styled.div`
  padding: 1rem;
	background-color: #333;
    color: white;
    text-align: center;
`