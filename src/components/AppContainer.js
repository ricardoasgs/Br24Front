import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import NavBar from "./NavBar";

const AppContainer = (props) => {
  return (
    <Container>
      <NavBar />
      {props.children}
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  height: 100%;
`;

export default AppContainer;
