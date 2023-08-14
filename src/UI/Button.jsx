import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

export const Button = () => {
  const goBackNavigate = useNavigate();
  const back = () => {
    goBackNavigate(-1);
  };

  const goNextNavigate = useNavigate();
  const next = () => {
    goBackNavigate(+1);
  };
  return (
    <>
      <Container onClick={back}>goBack</Container>
      <Container onClick={next}>Next</Container>
    </>
  );
};

const Container = styled.button`
  background-color: #127f75;
  width: 100px;
  height: 40px;
  border-radius: 10px;
  margin-left: 2rem;
  margin-top: 2rem;
  cursor: pointer;
`;
