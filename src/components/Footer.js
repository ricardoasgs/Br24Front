import React from "react";
import styled from "styled-components";

const Footer = (props) => (
  <FooterContainer>
    <FooterText>
      © 2020 Copyright
      <FooterTextLink href="https://github.com/ricardoasgs">
        Ricardo Garcia
      </FooterTextLink>
    </FooterText>
  </FooterContainer>
);

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #343a40;
  bottom: 0;
  width: 100vw;
  height: 50px;
  a {
    text-decoration: none;
  }
`;

const FooterText = styled.strong`
  font-size: 1em;
  font-family: "Ubuntu Condensed", sans-serif;
  padding: 10px 15px;
  text-transform: uppercase;
  color: white;
  text-decoration: none;
`;

const FooterTextLink = styled.a`
  font-size: 0.9em;
  padding: 10px 15px;
  text-transform: uppercase;
  color: white;
  text-decoration: none;
`;

export default Footer;
