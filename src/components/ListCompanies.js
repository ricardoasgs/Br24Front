import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import Loading from "./Loading";
import TableComponent from "./TableComponent";
import { getCompany, deleteCompany } from "../actions/companyAction";
import {
  FaTrash,
  FaPencilAlt,
  FaMoneyBill,
  FaAddressBook,
} from "react-icons/fa";

export default function ListCompanies(props) {
  const dispatch = useDispatch();
  const companyState = useSelector((state) => state.companyReducer);
  const { loading, companies, delet } = companyState;

  useEffect(() => {
    dispatch(getCompany());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getCompany());
  }, [dispatch, delet]);

  const renderRows = () => {
    return companies.map((company) => (
      <Rows key={company?.ID}>
        <Cell>{company?.TITLE}</Cell>
        <Cell>{company?.UF_CRM_1594236296415}</Cell>
        <Cell>{company?.UF_CRM_1594236337871}</Cell>
        <Cell>{company?.EMAIL[0].VALUE}</Cell>
        <ActionsCell>
          <Trash
            onClick={() => {
              dispatch(deleteCompany(company?.ID));
            }}
          />

          <Link to={{ pathname: `/createCompany`, state: company }}>
            <FaPencilAlt />
          </Link>
          <Link to={{ pathname: `/contacts`, state: company }}>
            <FaAddressBook />
          </Link>
          <Link to={{ pathname: `/deals`, state: company }}>
            <FaMoneyBill />
          </Link>
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
          title={"Empresas"}
          back={false}
          model={"Empresa"}
          pathname={"/createCompany"}
        >
          <TableHeader>
            <ThItem>Empresa</ThItem>
            <ThItem>Proprietário</ThItem>
            <ThItem>Cpf/Cnpj</ThItem>
            <ThItem>E-mail</ThItem>
            <ThItem>Opções</ThItem>
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
  justify-content: space-between;
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
