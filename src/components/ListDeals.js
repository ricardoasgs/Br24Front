import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import Loading from "./Loading";
import TableComponent from "./TableComponent";
import { getDealById } from "../actions/dealAction";
import { FaTrash } from "react-icons/fa";
import history from "../config/helper";
import { deleteDeal } from "../actions/dealAction";

export default function ListDeals(props) {
  //   const [search, setSearch] = useState("");
  //   const [dealFiltered, setDealFiltered] = useState([]);
  const dispatch = useDispatch();
  const dealState = useSelector((state) => state.dealReducer);
  const { deals, loading } = dealState;

  useEffect(() => {
    if (props.company) {
      console.log(props);
      dispatch(getDealById(props.company.ID));
    } else {
      history.push("/companies");
    }
  }, [dispatch, props]);

  const renderRows = () => {
    return deals.map((deal) => (
      <Rows key={deal.ID}>
        <Cell>{deal.TITLE}</Cell>
        <Cell>{deal.OPPORTUNITY}</Cell>
        <ActionsCell>
          <FaTrash
            onClick={() => {
              dispatch(deleteDeal(deal.ID));
            }}
          />
        </ActionsCell>
      </Rows>
    ));
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <TableComponent
          title={"Negocios"}
          back={true}
          model={"Negocio"}
          pathname={"/createDeal"}
          state={{ company: props.company }}
        >
          <TableHeader>
            <ThItem>Titulo</ThItem>
            <ThItem>Valor</ThItem>
            <ThItem>Opçoes</ThItem>
          </TableHeader>
          {renderRows()}
        </TableComponent>
      )}
    </>
  );
}

const TableHeader = styled.div`
  padding: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
`;

const ThItem = styled.div`
  color: #363636;
  font-weight: bold;
  display: flex;
  width: 25%;
  max-width: 300px;
`;

const Rows = styled.div`
  font-size: 16px;
  padding: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid rgba(68, 68, 68, 0.1);
  text-decoration: none;
  &:hover {
  }
`;

const Cell = styled.div`
  color: #6c757d;
  display: flex;
  width: 25%;
  max-width: 300px;
`;

const ActionsCell = styled.div`
  justify-content: flex-start;
  color: #6c757d;
  display: flex;
  width: 25%;
  max-width: 300px;
  a {
    text-decoration: none;
    color: #6c757d;
  }
`;

const Trash = styled(FaTrash)`
  cursor: pointer;
`;
