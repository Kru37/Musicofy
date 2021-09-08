import React from 'react'
import { Sidebarcontainer, Icon , Closeicon, SidebarBtn, SidebarLink, Sidebarmenu, Sidebarwrapper, SidebtnLink } from './Sidebarelement'
const Sidebar = ({isOpen , changeState}) => {
    return (
        <Sidebarcontainer onClick = {changeState} isOpen = {isOpen}>
            <Icon onClick = {changeState}>
                <Closeicon/>
            </Icon>
            <Sidebarwrapper>
                      <Sidebarmenu>
                          <SidebarLink onClick={changeState} to ='music'>  Overview </SidebarLink>
                          <SidebarLink onClick={changeState} to ='music'>  Music </SidebarLink>
                          <SidebarLink onClick={changeState} to ='video'> Video </SidebarLink>
                          <SidebarLink  onClick={changeState} to ='giftcard'>Gift cards</SidebarLink>
                      </Sidebarmenu>
                      <SidebarBtn>
                        <SidebtnLink to ='./sign-in'>Sign In</SidebtnLink>
                     </SidebarBtn>
             </Sidebarwrapper>
                   
        </Sidebarcontainer>
    )
}

export default Sidebar
