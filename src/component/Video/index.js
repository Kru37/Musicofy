import React from 'react'
import image from '../../images/mock4.jpg'
import { Videobasic,Videosection , Videocontainer , Videoimage , Videoinfo, Buttonread } from './Videoelement'
const Video = ({readmore,changeread}) => {
    return (
        <Videosection id = 'video'>
           <Videocontainer>
               
		        <Videobasic>The movie and TV collection you always wished for. Granted.</Videobasic>
		        <Videoinfo>{readmore?'With over 100,000 movies and TV shows to choose from, there’s always something great to watch on Musicofy and if you watch on Orange TV 4K, you’ll be able to enjoy a tremendous selection of your favorite content in 4K HDR. So get ready to enjoy episodes of your favorite TV shows or hit movies you’ve been waiting to see — anytime, anywhere. Just tap to play, or even download if you’re going somewhere you won’t have Wi-Fi.':'With over 100,000 movies and TV shows to choose from, there’s always something great to watch on Musicofy and if you watch on Orange TV 4K, you’ll be able to enjoy a tremendous selection of your favorite content in 4K HDR.'}</Videoinfo>
		
		        <Buttonread onClick ={changeread} readmore ={readmore}>{readmore?'Read Less':'Read More'}</Buttonread>
		        <Videoimage src={image}></Videoimage>
           </Videocontainer>
       </Videosection>
    )
}

export default Video
