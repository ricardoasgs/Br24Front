import React, { useState, useEffect } from "react";
import AppContainer from "../components/AppContainer";
import FormCompany from "../components/FormCompany";

export default function FormCompanyScreen(props) {
  // console.log(props.location.state);
  return (
    <AppContainer>
      <FormCompany company={props.location.state} />
    </AppContainer>
  );
}
