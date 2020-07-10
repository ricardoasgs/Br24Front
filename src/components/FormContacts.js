import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { createContact } from "../actions/companyAction";
import styled from "styled-components";

export default function FormContact(props) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const dispatch = useDispatch();
  const companyState = useSelector((state) => state.companyReducer);
  const { loading } = companyState;

  useEffect(() => {
    console.log(props.company);
    if (props.company) {
      setNome(props.company.NAME);
      setTelefone(props.company.PHONE[0].VALUE);
      setEmail(props.company.EMAIL[0].VALUE);
    }
  }, []);

  const submit = () => {
    const id = props.company.ID;
    dispatch(createContact({ id, nome, telefone, email }));
  };

  return (
    <Container>
      <Header>
        <Link to={"/contacts"}>{"<-"}</Link>

        <Title>Formulário Contatos</Title>
      </Header>
      <Container>
        <Article>
          <InputName>Nome</InputName>
          <Name>
            <TitleInput
              type="text"
              name="nome"
              id="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </Name>
          <InputName>E-mail</InputName>
          <Name>
            <TitleInput
              type="text"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Name>
          <InputName>Telefone</InputName>
          <Name>
            <TitleInput
              type="text"
              name="telefone"
              id="telefone"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
            />
          </Name>
          <BtnContainer>
            <Btn type="button" onClick={submit}>
              Salvar
            </Btn>
          </BtnContainer>
        </Article>
      </Container>
    </Container>
  );
}

const Container = styled.section`
  width: 100%;
  max-width: 700px;
  margin: 30px auto 0;
  margin-bottom: 25px;
  padding: 0px;
  background: #fff;
  border: 0;
  border-radius: 4px;
  flex-direction: column;
`;

const Header = styled.header`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.span`
  font-size: 2rem;
  margin-top: 0.3rem;
  font-weight: bold;
`;

const Article = styled.article`
  background: #fff;
  border: 1px solid #ddd;
  margin-top: 30px;
  border: none;
  border-radius: 4px;
`;

const Name = styled.header`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const InputName = styled.span`
  display: flex;
  align-items: flex-start;
  margin-left: 110px;
  font-size: 18px;
`;

const TitleInput = styled.input`
  font-size: 18px;
  margin-top: 3px;
  background: rgba(0, 0, 0, 0.05);
  border: 0;
  border-radius: 4px;
  height: 44px;
  width: 70%;
  padding: 0 15px;
  color: #000;
  margin: 0 0 10px;
  &::placeholder {
    color: rgba(0, 0, 0, 0.1);
  }
`;

const Btn = styled.button`
  padding: 10px 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  border: 0;
  height: 40px;
  width: 40%;
  background: #343a40;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
`;

const BtnContainer = styled.header`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 100px;
`;
