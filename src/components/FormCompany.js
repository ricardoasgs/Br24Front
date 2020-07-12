import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { createCompany } from "../actions/companyAction";
import { FaArrowLeft } from "react-icons/fa";
import history from "../config/helper";

export default function FormCompany(props) {
  const [empresa, setEmpresa] = useState("");
  const [proprietario, setProprietario] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [cnpj, setCnpj] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(props.company);
    if (props?.company) {
      setEmpresa(props.company.TITLE);
      setProprietario(props.company.UF_CRM_1594236296415);
      setTelefone(props.company.PHONE[0].VALUE);
      setEmail(props.company.EMAIL[0].VALUE);
      setCnpj(props.company.UF_CRM_1594236337871);
    }
  }, [props, dispatch]);

  const submit = () => {
    dispatch(
      createCompany({ empresa, proprietario, cnpj, telefone, email }, () => {
        history.push("/companies");
      })
    );
  };

  return (
    <Container>
      <Header>
        <ArrowLeft
          onClick={() => {
            history.goBack();
          }}
        />

        <Title>Formulário Empresa</Title>
        <div />
      </Header>
      <Container>
        <Article>
          <InputName>Empresa</InputName>
          <Name>
            <TitleInput
              type="text"
              name="empresa"
              id="empresa"
              value={empresa}
              onChange={(e) => setEmpresa(e.target.value)}
            />
          </Name>
          <InputName>Nome do Proprietario</InputName>
          <Name>
            <TitleInput
              type="text"
              name="proprietario"
              id="proprietario"
              value={proprietario}
              onChange={(e) => setProprietario(e.target.value)}
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
          <InputName>CPF/CNPJ</InputName>
          <Name>
            <TitleInput
              type="text"
              name="cnpj"
              id="cnpj"
              value={cnpj}
              onChange={(e) => setCnpj(e.target.value)}
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
  justify-content: space-between;
  padding: 20px 100px;
  a {
    text-decoration: none;
    color: #6c757d;
  }
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

const BtnContainer = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ArrowLeft = styled(FaArrowLeft)`
  cursor: pointer;
`;
