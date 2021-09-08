import React from 'react'
import Video from '../../videos/video.mp4'
import { Herocontainer , Herobg , Videobg, Herotext , Heroheader , Heroinfo , Herosubheader, Herobtnwrapper , Button , ArrowForward , Arrowright } from './Heroelement'
const Hero = ({hover ,hoverenter , hoverleave}) => {
    return (
        <Herocontainer id = 'overview'>
            <Herobg>
                <Videobg autoPlay loop muted src = {Video} type = 'video/mp4' />
            </Herobg>
            <Herotext>
                <Heroheader>Musicofy.</Heroheader>
                <Herosubheader>Your music, movies, and TV shows take center stage.</Herosubheader>
                <Heroinfo>Musicofy is the best way to organize and enjoy the music, movies, and TV shows you already have — and shop for the ones you
        want. Enjoy all the entertainment Musicofy has to offer on your Mac and PC.</Heroinfo>
                <Herobtnwrapper>
                    <Button to = './sign-in' onMouseEnter ={hoverenter} onMouseLeave = {hoverleave}>
                        Get Musicofy {hover? <ArrowForward/> : <Arrowright/>}
                    </Button>
                </Herobtnwrapper>
            </Herotext>

        </Herocontainer>
    )
}

export default Hero
