import React from 'react';
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute
     } from './SidebarElements';

const Sidebar = () => {
  return (
    <SidebarContainer>
    <Icon>
        <CloseIcon />
    </Icon>
    <SidebarWrapper>
      <SidebarMenu>
          <SidebarLink to='about'>Analytics</SidebarLink>
          <SidebarLink to='contact'>Find a Crypto</SidebarLink>
          <SidebarLink to='settings'>Settings</SidebarLink>
          <SidebarLink to='information'>Information</SidebarLink>
      </SidebarMenu>
      <SideBtnWrap>
        <SidebarRoute to='/signin'> Sign In</SidebarRoute>
      </SideBtnWrap>
    </SidebarWrapper>
  </SidebarContainer>
  );
};

export default Sidebar;
