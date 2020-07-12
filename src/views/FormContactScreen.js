import React, { useState, useEffect } from "react";
import AppContainer from "../components/AppContainer";
import FormContacts from "../components/FormContacts";

export default function FormContactScreen(props) {
  console.log(props.location.state);
  return (
    <AppContainer>
      <FormContacts
        contact={props.location.state.contact}
        company={props.location.state.company}
      />
    </AppContainer>
  );
}
