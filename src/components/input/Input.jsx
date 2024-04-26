/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useController } from "react-hook-form";
import styled from "styled-components";
import IconEyeOpen from "../../icons/IconEyeOpen";

const InputStyles = styled.div`
  position: relative;
  width: 100%;
  input {
    width: 100%;
    padding: ${(props) => (props.hasIcon ? "20px 60px 20px 20px" : "20px")};
    border-radius: 8px;
    outline: none;
    border: 1px solid ${(props) => props.theme.grayf1};
    background-color: transparent;
    font-weight: 500;
    transition: all 0.25s linear;
    color: ${(props) => props.theme.black};
  }
  input::-webkit-input-placeholder {
    color: #b2b3bd;
  }
  input::-moz-input-placeholder {
    color: #b2b3bd;
  }

  input:focus {
    border-color: ${(props) => props.theme.primary};
    background-color: white;
  }

  /* input::-webkit-input-placeholder {
    color: ${(props) => props.theme.grayLight};
  }
  input::-moz-input-placeholder {
    color: ${(props) => props.theme.grayLight};
  } */

  .icon-input {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }
`;

const Input = ({ name = "", type = "text", children, control, ...props }) => {
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <InputStyles hasIcon={children ? true : false}>
      <input id={name} type={type} {...field} {...props} />
      {children}
    </InputStyles>
  );
};

export default Input;
