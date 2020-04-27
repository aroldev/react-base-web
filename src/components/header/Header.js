import React, { Component } from 'react';
import styled from "styled-components";
import Logo from './Logo';
import Navigation from "../navigation/Nav";
// (Use this to import styles) import { Testeo } from './../../styles-default/colors';

const HeaderWrapper = styled.header`
    padding-top: .5em;
    padding-bottom: .5em;
    border: 1px solid #a2a2a2;
    box-shadow: 0px 0px 14px 0px rgba(0,0,0,0.5);
    display:flex;
`;

class Header extends Component {
    render() {
        return (
            <HeaderWrapper>
                <Logo/>
                <Navigation/>
            </HeaderWrapper>
        );
    }
}

export default Header;