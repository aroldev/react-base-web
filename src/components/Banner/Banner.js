import React, { Component } from "react";
import styled from "styled-components";

const BannerSection = styled.section`
    width: 100%;
    height:65vh;
    margin-bottom: 4rem;
    padding: 8rem 3rem;
    background: linear-gradient(113.58893008880955deg, rgba(86, 216, 228,1) 4.927083333333334%,rgba(159, 1, 234,1) 97.84374999999999%);
        h1 {
            font-size:4.5rem;
            color: #fff;
        }
        p {
            font-size:1.7rem;
            line-height:2rem;
            color: #fff;
        }
`;

class BannerTitle extends Component {
    render() {
        return <h1>{this.props.title}</h1>;
    }
}

class BannerText extends Component {
    render() {
        return <p>{this.props.text}</p>;
    }
}

class Banner extends Component {
    render() {
        return (
            <BannerSection>
                <BannerTitle title="Welcome tho the Base Site"/>
                <BannerText text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua."/>
            </BannerSection>
        )
    }
}

export default Banner;