import React from "react";
import AppContainer from "../components/AppContainer";
import FormDeals from "../components/FormDeals";

export default function FormContactScreen(props) {
  console.log(props.location.state);
  return (
    <AppContainer>
      <FormDeals company={props.location.state.company} />
    </AppContainer>
  );
}
