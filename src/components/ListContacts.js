import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import Loading from "./Loading";
import TableComponent from "./TableComponent";
import { getContactById, deleteContact } from "../actions/contactAction";
import { FaTrash, FaPencilAlt } from "react-icons/fa";
import history from "../config/helper";

export default function ListContacts(props) {
  const dispatch = useDispatch();
  const contactState = useSelector((state) => state.contactReducer);
  const { contacts, loading, delet } = contactState;

  useEffect(() => {
    if (props?.company) {
      console.log(props);
      dispatch(getContactById(props.company.ID));
    } else {
      history.push("/companies");
    }
  }, []);

  useEffect(() => {
    dispatch(getContactById(props.company.ID));
  }, [delet]);

  const renderRows = () => {
    return contacts.map((contact) => (
      <Rows key={contact.ID}>
        <Cell>{contact.NAME}</Cell>
        <Cell>{contact.PHONE[0].VALUE}</Cell>
        <Cell>{contact.EMAIL[0].VALUE}</Cell>
        <ActionsCell>
          <Trash
            onClick={() => {
              dispatch(deleteContact(contact.ID));
            }}
          />

          <Link
            to={{
              pathname: `/createContact`,
              state: { company: props.company, contact: contact },
            }}
          >
            <FaPencilAlt />
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
          title={"Contatos"}
          back={true}
          model={"Contato"}
          pathname={"/createContact"}
          state={{ company: props.company }}
        >
          <TableHeader>
            <ThItem>Nome</ThItem>
            <ThItem>E-mail</ThItem>
            <ThItem>Telefone</ThItem>
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
