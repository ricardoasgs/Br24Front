import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function ListCompanies() {
  return (
    <div>
      {/* {loading ? (
        <h1>CARREGANDO...</h1>
      ) : ( */}
      <Container>
        <>
          <Table>
            <Header>
              <Link to={{ pathname: "create", createCompany: true, id: null }}>
                <Btn>Criar empresa</Btn>
              </Link>

              <SearchContainer>
                <SearchInput
                  type="text"
                  placeholder="Pesquisar"
                  // value={searchTerm}
                  // onChange={handleSearch}
                />
              </SearchContainer>
            </Header>

            <TableHeader>
              <ThItem>Empresa</ThItem>
              <ThItem>Proprietário</ThItem>
              <ThItem>Telefone</ThItem>
              <ThItem>E-mail</ThItem>
              <ThItem>Opções</ThItem>
            </TableHeader>

            {/* {searchResults.map((c) => (
                <Link
                  to={{ pathname: "create", createCompany: false, id: c.ID }}
                >
                  <Rows key={c.ID}>
                    <Cell>{c.TITLE}</Cell>
                    <Cell>{c.UF_CRM_1588901076}</Cell>
                    <Cell>{c.EMAIL[0].VALUE}</Cell>
                  </Rows>
                </Link>
              ))} */}
          </Table>
        </>
      </Container>
      {/* )} */}
    </div>
  );
}

export const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 0px;
  border: 0;
  flex-direction: column;
  margin-top: 50px;
  margin-bottom: 80px;
`;

export const Table = styled.div`
  display: flex;
  width: 100%;
  max-width: 90%;
  margin: 50px auto;
  padding: 0px;
  background: #fff;
  border: 0;
  border-radius: 4px;
  flex-direction: column;
  box-shadow: 2px 2px rgba(68, 68, 68, 0.1);
`;

export const Header = styled.div`
  padding: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  a {
    text-decoration: none;
  }
`;

export const Btn = styled.button`
  display: flex;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  max-width: 300px;
  background: #343a40;
  color: white;
  font-weight: bolder;
  align-items: center;
  color: #fff;
`;

const SearchContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 300px;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 8px;
  font-size: 18px;
  border: none;
  background: #6c757d;
  border-radius: 4px;
  &::placeholder {
    text-align: center;
    color: #fff;
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
  border-bottom: 1px solid rgba(68, 68, 68, 0.1);
  text-decoration: none;
  &:hover {
    background: #f0ddee;
    font-weight: bolder;
    border: none;
    box-shadow: 0 3px rgba(68, 68, 68, 0.1);
  }
`;

const Cell = styled.div`
  color: #363636;
  display: flex;
  width: 100%;
  max-width: 300px;
`;
