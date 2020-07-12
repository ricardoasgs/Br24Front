import * as React from "react";
import ReactLoading from "react-loading";
import styled from "styled-components";

const Loading = () => {
  return (
    <LoadingContainer>
      <ReactLoading type={"spin"} color="#fff" height={300} width={300} />
    </LoadingContainer>
  );
};

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  heigth: 100%;
`;

export default Loading;
