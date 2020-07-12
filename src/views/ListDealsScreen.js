import React from "react";
import AppContainer from "../components/AppContainer";
import ListDeals from "../components/ListDeals";

export default function ListDealsScreen(props) {
  return (
    <AppContainer>
      <ListDeals company={props.location.state} />
    </AppContainer>
  );
}
