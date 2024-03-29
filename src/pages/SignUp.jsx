/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import { Label } from "../components/label";
import Input from "../components/input/Input";
import { useForm } from "react-hook-form";
import { IconEyeClose } from "../icons";

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
`;

const SignUp = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    watch,
  } = useForm();
  const handleSignUp = (values) => {
    console.log(values);
  };
  return (
    <SignUpPageStyles>
      <div className="container">
        <img srcSet="/monkey1.png 2x" alt="logo" className="logo" />
        <h1 className="heading">Monkey Blogging</h1>
        <form className="form" onSubmit={handleSubmit(handleSignUp)}>
          <div className="field">
            <Label className="label" htmlFor="fullname">
              Fullname
            </Label>
            <Input
              type="text"
              placeholder="Please enter your fullname"
              id="fullname"
              name="fullname"
              control={control}
            ></Input>
          </div>
        </form>
      </div>
    </SignUpPageStyles>
  );
};

export default SignUp;
