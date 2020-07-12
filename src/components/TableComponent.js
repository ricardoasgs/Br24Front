import React from "react";
import styled from "styled-components";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function TableComponent(props) {
  const { pathname, state } = props;
  console.log(props);
  return (
    <Container>
      <Table>
        <Header>
          {props.back ? (
            <Link to={"/companies"}>
              <FaArrowLeft />
            </Link>
          ) : (
            <div></div>
          )}
          <ListTitle>{props.title}</ListTitle>
          <div />
        </Header>
        {props.children}
        <TableFooter>
          <div />
          <div />
          <BtnContainer>
            <Link
              to={{
                pathname,
                state,
              }}
            >
              Criar {props.model}
            </Link>
          </BtnContainer>
        </TableFooter>
      </Table>
    </Container>
  );
}

const Container = styled.div`
display: flex;
justify-content: center
align-items: center
width: 100%;
padding: 0 30px 0 0;
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
  a {
    text-decoration: none;
  }
`;

const Header = styled.div`
  padding: 0 25px 25px 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  border-bottom: 1px solid #363636;
  a {
    color: #363636;
    text-decoration: none;
  }
`;

const ListTitle = styled.span`
  font-size: 38px;
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  max-width: 200px;
  a {
    width: 100%;
    padding: 8px;
    font-size: 18px;
    background: #343a40;
    color: #fff;
    border-radius: 4px;
    padding: 10px 20px;
    text-align: center;
  }
`;

const TableFooter = styled.div`
  padding: 25px 25px 0 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  border-top: 1px solid #363636;
`;
