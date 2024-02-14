import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  background-color: #333;
  color: #fff;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
`;

export const Logo = styled(Link)`
  color: #fff;
  font-size: 1.5rem;
  text-decoration: none;
`;

export const MenuIcon = styled.div`
  display: none;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: ${({ open }) => (open ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 80px;
    left: 0;
    width: 100%;
    background-color: #333;
    padding: 1rem 0;
  }
`;

export const NavItem = styled.li`
  margin-right: 1rem;

  @media screen and (max-width: 768px) {
    margin: 0;
  }
`;

export const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  padding: 0.5rem 1rem;

  &:hover {
    background-color: #555;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    text-align: center;
    padding: 1rem 0;
  }
`;
