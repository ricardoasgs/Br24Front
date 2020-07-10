import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import Loading from "./Loading";
import { getContactById } from "../actions/companyAction";
import { FaTrash, FaPencilAlt } from "react-icons/fa";
import { history } from "../config/helper";

export default function ListContacts(props) {
  const [search, setSearch] = useState("");
  const [contactFiltered, setContactFiltered] = useState([]);
  const dispatch = useDispatch();
  const companyState = useSelector((state) => state.companyReducer);
  const { contacts, loading } = companyState;

  useEffect(() => {
    if (props.company) {
      console.log(props);
      dispatch(getContactById(props.company.ID));
    } else {
      history.push("/companies");
    }
  }, [dispatch, props]);

  useEffect(() => {
    const contactsFiltered = contacts.filter((contact) =>
      contact.NAME.toLowerCase().includes(search.toLowerCase())
    );
    setContactFiltered(contactsFiltered);
  }, [search, contacts]);

  return (
    <div>
      {loading ? (
        <Container>
          <Loading />
        </Container>
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
                <ThItem>Nome</ThItem>
                <ThItem>E-mail</ThItem>
                <ThItem>Telefone</ThItem>
                <ThItem>Opções</ThItem>
              </TableHeader>

              {contactFiltered.map((contact) => (
                <Rows key={contact.ID}>
                  <Cell>{contact.NAME}</Cell>
                  <Cell>{contact.PHONE[0].VALUE}</Cell>
                  <Cell>{contact.EMAIL[0].VALUE}</Cell>
                  <Cell>
                    <FaTrash
                    // onClick={() => {
                    //   dispatch(deleteCompany(company.ID));
                    // }}
                    />

                    <Link to={{ pathname: `/createContact`, state: contact }}>
                      <FaPencilAlt />
                    </Link>
                  </Cell>
                </Rows>
              ))}
              <BtnContainer>
                <Link to={"/createContact"}>
                  <Btn>Criar contato</Btn>
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
