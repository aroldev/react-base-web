import React, { Component } from "react";
import styled from "styled-components";
const LogoBase = styled.div`
    color: #323E40;
    font-weight:900;
    text-transform:uppercase;
    text-align:left;
    padding: .5rem;
    font-size:1.2rem;
    width:100%;
    flex-basis:120px;
`;

class Logo extends Component {
    render() {
        return (
            <LogoBase>
                Basic Site
            </LogoBase>
        )
    }
}

export default Logo;