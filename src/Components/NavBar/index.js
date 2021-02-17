import React from 'react'
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink
        } from './NavbarElements'

import {FaBars} from 'react-icons/fa'

const Navbar = () => {
  return (
    <>
      <Nav>
          <NavbarContainer>
              <NavLogo to = '/'>Dolla</NavLogo>
              <MobileIcon>
                <FaBars />
              </MobileIcon>
              <NavMenu>
                <NavItem>
                  <NavLinks to = 'about'>About</NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks to = 'contact'>Cryptos</NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks to = 'discover'>Discover</NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks to = 'signup'>Sign Up</NavLinks>
                </NavItem>
              </NavMenu>
              <NavBtn>
                <NavBtnLink to='/signin'>Sign In </NavBtnLink>
              </NavBtn>
          </NavbarContainer>
      </Nav>
    </>
  );
};



{/*<Nav>
  <NavLink to = '/'>
    <h1>Logo</h1>
  </NavLink>
  <Bars/>
  <NavMenu>
    <NavLink to= '/about' activeStyle>
      Analytics
    </NavLink>
    <NavLink to= '/contact' activeStyle>
      Find a Cyrpto
    </NavLink>
    <NavLink to= '/settings' activeStyle>
      Settings
    </NavLink>
    <NavLink to= '/information' activeStyle>
      Information
    </NavLink>
  </NavMenu>
  <NavBtn>
    <NavBtnLink to= '/signin'>Sign In</NavBtnLink>
  </NavBtn>
</Nav>*/}


export default Navbar
