import React, { Component } from 'react';
import CardsHome from './../components/Cards/Cards';
import { MainStyle } from './../styles-default/layout';
import {cardsdata} from './../data/cardsData';

class Home extends (Component) {
    render() {
        return (
            <MainStyle>
                <h1>Our services</h1>
                <CardsHome cards={cardsdata}/>
            </MainStyle>
        )
    }
}

export default Home;