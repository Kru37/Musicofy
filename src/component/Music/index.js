import React from 'react'
import image from '../../images/mock2.jpg'
import { Musicsection, Musiccontainer , Musicicon , Musichead,Musicavail, Musicbasic , Musicimage , Musicinfo } from './Musicelement'
const Musi = () => {
    return (
       <Musicsection id = 'music'>
           <Musiccontainer>
               <Musichead>
			<Musicicon></Musicicon>  Music</Musichead>
		    <Musicbasic>45 million songs. Zero ads.</Musicbasic>
		<Musicinfo>Stream over 45 million songs, ad-free. Or download albums and tracks to listen to offline. All the music in your personal myTunes library — no matter where it came from — lives right alongside the Orange Music catalog. Start your free three-month trial with no commitment, and cancel anytime.</Musicinfo>
		
		<Musicavail>Orange Music is available in myTunes, and for iOS and Android devices.</Musicavail>
		<Musicimage src={image}></Musicimage>
           </Musiccontainer>
       </Musicsection>
    )
}

export default Musi