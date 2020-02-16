import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans');
  body {
    font-family: "Open Sans", sans-serif;
    margin: 0;
    padding: 0;
    zoom: 1;
  } 
`;

export const StyledContainer = styled.div`
  background: white;
  color: black;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
`;

export const StyledActionsWrapper = styled.div`
  padding: 10px 50px 20px;
`