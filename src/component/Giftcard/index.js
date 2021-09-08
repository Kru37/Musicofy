import React from 'react'
import image from '../../images/giftmock.jpg'
import { Giftsection,Giftcontainer, Giftcardcom , Giftcardimg , Buttongift , Iconright } from './Giftcardelement'
const Gift = () => {
    return (
     <>
      <Giftsection id = 'giftcard'>
           <Giftcontainer>
               <Giftcardcom>
			   <div>
					<Giftcardimg src ={image}/>
			   </div> 
               <div>
		    <h2>Gift Cards</h2>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat.</p>
         <p>Already have a Musicofy Music Gift Card?</p>
		
		
        <hr />
        <Buttongift><Iconright/>Redeem</Buttongift>
		</div>
            </Giftcardcom>
           </Giftcontainer>
       </Giftsection>
    </>
    )
}

export default Gift
