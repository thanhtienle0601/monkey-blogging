/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import styled, { css } from "styled-components";
import { Loading } from "../loading";
import PropTypes from "prop-types";
import { NavLink, useNavigate } from "react-router-dom";

const ButtonStyles = styled.button`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 20px;
  width: 100%;
  max-width: ${(props) => props.maxWidth || "auto"};
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 20px;
  height: ${(props) => props.height || "66px"};
  ${(props) =>
    props.kind === "primary" &&
    css`
      color: white;
      background-image: linear-gradient(
        to right bottom,
        ${(props) => props.theme.primary},
        ${(props) => props.theme.secondary}
      );
    `};
  ${(props) =>
    props.kind === "secondary" &&
    css`
      color: ${(props) => props.theme.primary};
      background-color: white;
    `};
  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`;

const Button = ({
  title,
  isLoading = false,
  children,
  type = "button",
  kind = "primary",
  onClick = () => {},
  ...props
}) => {
  const navigate = useNavigate();
  const { to } = props;
  if (to !== "" && typeof to === "string") {
    return (
      <ButtonStyles
        style={{
          width: "auto",
          margin: "0",
        }}
        title={title}
        type={type}
        kind={kind}
        onClick={() => navigate(to)}
        {...props}
      >
        {isLoading ? <Loading></Loading> : children}
      </ButtonStyles>
    );
  }
  return (
    <ButtonStyles
      title={title}
      type={type}
      kind={kind}
      onClick={onClick}
      {...props}
    >
      {isLoading ? <Loading></Loading> : children}
    </ButtonStyles>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(["submit", "button"]).isRequired,
  isLoading: PropTypes.bool,
};
export default Button;
