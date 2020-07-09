import * as React from "react";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  html {
    height: 100vh
    width: 100vw
  }
`;

export default (props) => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Container>{props.children}</Container>
    </React.Fragment>
  );
};

const Container = styled.div`
  background-color: #6c757d;
  background-attachment: fixed;
  min-height: 100vh;
  margin: 0;
`;
