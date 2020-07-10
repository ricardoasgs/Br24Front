import * as React from "react";
import ReactLoading from "react-loading";
import styled from "styled-components";

const Loading = () => {
  return (
    <LoadingContainer>
      <ReactLoading type={"bars"} color="#black" height={100} width={100} />
    </LoadingContainer>
  );
};

const LoadingContainer = styled.div`
  display: flex
  justify-content: center
  align-items: center
  flex: 1
`;

export default Loading;
