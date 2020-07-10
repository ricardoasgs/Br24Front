import React, { useState, useEffect } from "react";
import AppContainer from "../components/AppContainer";
import ListCompanies from "../components/ListCompanies";

export default function ListCompaniesScreen() {
  return (
    <AppContainer>
      <ListCompanies />
    </AppContainer>
  );
}
