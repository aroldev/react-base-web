import React, { Component } from 'react';
import { Row, Column } from '../../styles-default/layout';
import styled from "styled-components";
const InnerCard = styled.div`
        background:#fff;
        padding: 1em;
        margin-bottom: 1em;
         box-shadow:  0px 0px 10px 5px rgba(0,0,0,0.16), 0 3px 6px rgba(251, 251, 251, 0.23);
`;

class CardsHome extends Component {
    render() {
        return (
                <Row>
                    {this.props.cards.map((cards) =>
                        <Column>
                            <InnerCard>
                                <h3>{cards.titleCards}</h3>
                                <p>{cards.textCards}</p>
                            </InnerCard>
                        </Column>

                    )}
                </Row>
        );
    }
}

export default CardsHome;