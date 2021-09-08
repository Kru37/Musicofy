import styled from "styled-components";
import {FaChevronRight} from 'react-icons/fa'
export const Giftsection = styled.section `
    padding-top:80px;
    padding-bottom: 25px;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
  
`

export const Giftcontainer = styled.div `
    max-width: 1180px;
	margin: 0 auto;
	padding: 0 3rem;

`
export const Giftcardcom = styled.div `
 	display: grid;
	grid-gap: 20px;
	grid-template-columns: 1fr 1fr;
	text-align: left;
    @media screen and (max-width:780px){
        grid-template-columns: 1fr;
    }
`
export const Giftcardimg = styled.img `
 width: 100%;
`
export const Buttongift = styled.a`
 color: #103063;
`
export const Iconright = styled(FaChevronRight)`
 color: #103063;
 padding-top:4px;
 
`