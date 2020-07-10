import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { getCompany, deleteCompany } from "../actions/companyAction";
import {
  FaTrash,
  FaPencilAlt,
  FaMoneyBill,
  FaAddressBook,
} from "react-icons/fa";
import { history } from "../config/helper";

export default function ListCompanies() {
  const [search, setSearch] = useState("");
  const [companyFiltered, setCompanyFiltered] = useState([]);
  const dispatch = useDispatch();
  const companyState = useSelector((state) => state.companyReducer);
  const { loading, companies } = companyState;

  useEffect(() => {
    dispatch(getCompany());
  }, [dispatch]);

  useEffect(() => {
    const companiesFiltered = companies.filter((company) =>
      company.TITLE.toLowerCase().includes(search.toLowerCase())
    );
    setCompanyFiltered(companiesFiltered);
  }, [search, companies]);

  return (
    <div>
      {loading ? (
        <h1>CARREGANDO...</h1>
      ) : (
        <Container>
          <>
            <Table>
              <Header>
                <SearchContainer>
                  <SearchInput
                    type="text"
                    placeholder="Pesquisar"
                    value={search}
                    onChange={(e) => {
                      setSearch(e.target.value);
                    }}
                  />
                </SearchContainer>
              </Header>

              <TableHeader>
                <ThItem>Empresa</ThItem>
                <ThItem>Proprietário</ThItem>
                <ThItem>Cpf/Cnpj</ThItem>
                <ThItem>E-mail</ThItem>
                <ThItem>Opções</ThItem>
              </TableHeader>

              {companyFiltered.map((company) => (
                <Rows key={company.ID}>
                  <Cell>{company.TITLE}</Cell>
                  <Cell>{company.UF_CRM_1594236296415}</Cell>
                  <Cell>{company.UF_CRM_1594236337871}</Cell>
                  <Cell>{company.EMAIL[0].VALUE}</Cell>
                  <Cell>
                    <FaTrash
                      onClick={() => {
                        dispatch(deleteCompany(company.ID));
                      }}
                    />

                    <Link to={{ pathname: `/company`, state: company }}>
                      <FaPencilAlt />
                    </Link>
                    <Link to={{ pathname: `/contact`, state: company }}>
                      <FaAddressBook />
                    </Link>
                    <Link to={{ pathname: `/`, state: company }}>
                      <FaMoneyBill />
                    </Link>
                  </Cell>
                </Rows>
              ))}
              <BtnContainer>
                <Link to={"/company"}>
                  <Btn>Criar empresa</Btn>
                </Link>
              </BtnContainer>
            </Table>
          </>
        </Container>
      )}
    </div>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 0px;
  border: 0;
  flex-direction: column;
  margin-top: 50px;
  margin-bottom: 80px;
`;

const Table = styled.div`
  display: flex;
  width: 100%;
  max-width: 90%;
  margin: 50px auto;
  padding: 25px;
  background: #fff;
  border: 0;
  border-radius: 4px;
  flex-direction: column;
  box-shadow: 2px 2px rgba(68, 68, 68, 0.1);
`;

const Header = styled.div`
  padding: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  a {
    text-decoration: none;
  }
`;

const Btn = styled.button`
  display: flex;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  margin-top: 25px;
  max-width: 300px;
  background: #343a40;
  color: white;
  font-weight: bolder;
  align-items: center;
  color: #fff;
`;

const SearchContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  max-width: 300px;
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 8px;
  font-size: 18px;
  border: 10px;
  background: #fff;
  border-radius: 4px;
  &::placeholder {
    text-align: center;
    color: black;
  }
`;

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
  width: 100%;
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
  width: 100%;
  max-width: 300px;
`;
