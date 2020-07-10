import React, { useState, useEffect } from "react";
import AppContainer from "../components/AppContainer";
import FormContacts from "../components/FormContacts";

export default function FormContactScreen(props) {
  return (
    <AppContainer>
      <FormContacts company={props.location.state} />
    </AppContainer>
  );
}
