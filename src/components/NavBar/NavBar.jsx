import React, { useState } from 'react';

import {
    Nav,
    NavbarContainer,
    Logo,
    MenuIcon,
    NavMenu,
    NavItem,
    NavLink
  } from './NavBar.styles';

function NavBar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    }
    return(
        <Nav>
      <NavbarContainer>
        <Logo to="/"> Wisdom Book Finder</Logo>

        <MenuIcon onClick={toggleMobileMenu}>
          <i className={isMobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'} />
        </MenuIcon>

        <NavMenu open={isMobileMenuOpen}>
          <NavItem>
            <NavLink to="/" onClick={toggleMobileMenu}>
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/about" onClick={toggleMobileMenu}>
              About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/contact" onClick={toggleMobileMenu}>
              Contact
            </NavLink>
          </NavItem>
        </NavMenu>
      </NavbarContainer>
    </Nav>
    )
}

export default NavBar;