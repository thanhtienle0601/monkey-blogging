/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import { Label } from "../components";

const SignUpPageStyles = styled.div`
  min-height: 100vh;
  padding: 40px;
  .logo {
    margin: 0 auto 20px;
  }
  .heading {
    text-align: center;
    color: ${(props) => props.theme.primary};
    font-weight: bold;
    font-size: 40px;
    margin-bottom: 60px;
  }

  .form {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
  }

  .field {
    display: flex;
    flex-direction: column;
    row-gap: 16px;
  }

  .label {
    cursor: pointer;
  }

  .input {
    padding: 20px;
    border-radius: 8px;
    outline: none;
    border: 1px solid transparent;
    background-color: #e7ecf3;
    font-weight: 500;
    transition: all 0.25s linear;
  }

  .input:focus {
    border-color: ${(props) => props.theme.primary};
    background-color: white;
  }

  .input::-webkit-input-placeholder {
    color: ${(props) => props.theme.grayLight};
  }
  .input::-moz-input-placeholder {
    color: ${(props) => props.theme.grayLight};
  }
`;

const SignUp = () => {
  return (
    <SignUpPageStyles>
      <div className="container">
        <img srcSet="/monkey1.png 2x" alt="logo" className="logo" />
        <h1 className="heading">Monkey Blogging</h1>
        <form className="form">
          <div className="field">
            <Label className="label" htmlFor="fullname">
              Fullname
            </Label>
            <input
              className="input"
              type="text"
              placeholder="Please enter your fullname"
              id="fullname"
            />
          </div>
        </form>
      </div>
    </SignUpPageStyles>
  );
};

export default SignUp;
