/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import { Loading } from "../loading";

const ButtonStyles = styled.button`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 20px;
  color: white;
  width: 100%;
  max-width: ${(props) => props.maxWidth || "auto"};
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 20px;
  height: ${(props) => props.height || "66px"};
  background-image: linear-gradient(
    to right bottom,
    ${(props) => props.theme.primary},
    ${(props) => props.theme.secondary}
  );
  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`;

const Button = ({
  title,
  isDisabled = false,
  isLoading = false,
  children,
  type = "button",
  onClick = () => {},
  ...props
}) => {
  return (
    <ButtonStyles title={title} type={type} onClick={onClick} {...props}>
      {isLoading ? <Loading></Loading> : children}
    </ButtonStyles>
  );
};

export default Button;
