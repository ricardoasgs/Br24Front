import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { createDeal } from "../actions/dealAction";
import styled from "styled-components";
import { FaArrowLeft } from "react-icons/fa";
import history from "../config/helper";

export default function FormContact(props) {
  const [titulo, setTitulo] = useState("");
  const [valor, setValor] = useState("");
  const dispatch = useDispatch();

  const submit = () => {
    console.log(props.company);
    const idEmpresa = props.company.ID;
    dispatch(
      createDeal({ idEmpresa, titulo, valor }, () => {
        history.push("/contacts");
      })
    );
  };

  return (
    <Container>
      <Header>
        <Link to={"/deals"}>
          <FaArrowLeft />
        </Link>

        <Title>Formulário Negocios</Title>
        <div />
      </Header>
      <Container>
        <Article>
          <InputName>Titulo</InputName>
          <Name>
            <TitleInput
              type="text"
              name="nome"
              id="nome"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
            />
          </Name>
          <InputName>Valor</InputName>
          <Name>
            <TitleInput
              type="text"
              name="valor"
              id="valor"
              value={valor}
              onChange={(e) => setValor(e.target.value)}
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
