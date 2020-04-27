import React, { Component } from 'react';
import styled from "styled-components";
// import Logo from './Logo';

const FooterStyle = styled.footer`
    background: #30384e;
    padding: 1rem;
    margin-top: 3em;
    p {color:#fafafa;}
`;
class Footer extends Component {
    render() {
        return (
            <FooterStyle>
                <p>This is the footer</p>
            </FooterStyle>
        )
    }
}

export default Footer;