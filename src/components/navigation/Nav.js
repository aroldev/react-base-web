import React, { Component } from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

const Nav = styled.nav`
width:100%;
flex-basis:calc(100% - 120px);
`;
const NavList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display:flex;
  flex-direction:column;
  width:100%;
  padding-left:2rem;
  @media (min-width:768px) {
    flex-direction:row;
    margin-right:0;
    margin-left:auto;
  }
  li {
  text-transform:uppercase;
  font-size:1rem;
  }
`;
const StyledNavLink = styled(Link)`
  color:#444;
  text-decoration:none;
  padding: 12px 20px;
  text-align: center;
  display: block;
  &:hover {color:#D97D0D;}
 
`;

class Navigation extends (Component){
    render() {
        return (
            <Nav>
                <NavList>
                    <li>
                        <StyledNavLink to="/">Home</StyledNavLink>
                    </li>
                    <li>
                        <StyledNavLink to="/about">About</StyledNavLink>
                    </li>
                    <li>
                        <StyledNavLink to="/contact">Contact</StyledNavLink>
                    </li>
                </NavList>
            </Nav>
        )
    }
}

export default Navigation;