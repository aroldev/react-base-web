import { createGlobalStyle } from 'styled-components'
import styled from "styled-components";


export const GlobalStyle = createGlobalStyle`
    *, ::after, ::before {
        box-sizing: border-box;
    }
  body {
    color: ${props => (props.whiteColor ? 'white' : 'black')};
  }
`;

export  const MainStyle = styled.main`
    width:100%;
    margin-right: auto;
    margin-left: auto;
    padding-left: 10px;
    padding-right: 10px;
    .InnerContainer {border: 20px solid blue}
    @media (min-width:768px){
        max-width:991px;
    }
 `;

export const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-right: -10px;
    margin-left: -10px; 
`;
export const Column = styled.div`
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
    padding-right: 10px;
    padding-left: 10px;
`;