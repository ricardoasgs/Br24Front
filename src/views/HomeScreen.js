import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import AppContainer from "../components/AppContainer";
import FormCompany from "../components/FormCompany";
import FormContacts from "../components/FormContacts";
import ListCompanies from "../components/ListCompanies";

export default function HomeScreen() {
  return (
    <AppContainer>
      {/* <FormCompany /> */}
      {/* <FormContacts /> */}
      <ListCompanies />
    </AppContainer>
  );
}
