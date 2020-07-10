import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavBar = (props) => (
  <Nav>
    <Link to={"/"}>
      <Logo>Br24</Logo>
    </Link>
    {/* <MainNav>
      <NavItem>1</NavItem>
      <NavItem>2</NavItem>
      <NavItem>3</NavItem>
    </MainNav> */}
  </Nav>
);

const Nav = styled.nav`
  display: flex;
  color: white;
  flex-direction: row;
  background-color: #343a40;
  box-shadow: rgba(31, 53, 78, 0.11) 0 1px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 60px;
  a {
    text-decoration: none !important;
  }
  a:visited {
    text-decoration: none !important;
  }
`;

const Logo = styled.h1`
  margin: 0;
  font-size: 1.45em;
  padding: 10px 30px;
  text-transform: uppercase;
  text-align: center;
  display: block;
  a:visited {
    text-decoration: none;
  }
`;

const MainNav = styled.ul`
  display: flex;
  flex-direction: row;
  margin-top: 5px;
  list-style: none;
  color: white;
  font-size: 0.99em;
  padding: 10px 30px;
  text-transform: uppercase;
  text-align: center;
`;

const NavItem = styled.li`
  margin: 0;
  font-size: 1.25em;
  padding: 10px 30px;
  text-transform: uppercase;
  text-align: center;
  display: block;
`;

export default NavBar;
