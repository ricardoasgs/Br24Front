import React, { useState, useEffect } from "react";
import AppContainer from "../components/AppContainer";
import ListContacts from "../components/ListContacts";

export default function ListContactsScreen(props) {
  return (
    <AppContainer>
      <ListContacts company={props.location.state} />
    </AppContainer>
  );
}
