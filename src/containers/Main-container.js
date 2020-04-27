import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { GlobalStyle } from './../styles-default/layout';
import Header from './../components/header';
import Banner from './../components/Banner/Banner';
import Footer from './../components/Footer';
import Home from './Home';
import About from './About';
import Contact from './Contact'


class MainContainer extends Component {
    render() {
        return (
            <Router>
                <GlobalStyle/>
                <Header/>
                <Switch>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/">
                        <Banner/>
                        <Home />
                    </Route>
                </Switch>
                <Footer/>
            </Router>
        )
    }
}

export default MainContainer;