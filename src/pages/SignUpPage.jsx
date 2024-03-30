/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import styled from "styled-components";
import { Label } from "../components/label";
import Input from "../components/input/Input";
import { useForm } from "react-hook-form";
import { IconEyeClose, IconEyeOpen } from "../icons";
import { Field } from "../components/field";
import { Button } from "../components/button";

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
`;

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    watch,
  } = useForm();
  const handleSignUp = (values) => {
    console.log(values);
    if (!isValid) return;
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 5000);
    });
  };
  return (
    <SignUpPageStyles>
      <div className="container">
        <img srcSet="/monkey1.png 2x" alt="logo" className="logo" />
        <h1 className="heading">Monkey Blogging</h1>
        <form className="form" onSubmit={handleSubmit(handleSignUp)}>
          <Field>
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
          </Field>
          <Field>
            <Label className="label" htmlFor="email">
              Email
            </Label>
            <Input
              type="email"
              placeholder="Please enter your email"
              id="email"
              name="email"
              control={control}
            ></Input>
          </Field>
          <Field>
            <Label className="label" htmlFor="password">
              Password
            </Label>
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Please enter your password"
              id="password"
              name="password"
              control={control}
            >
              {showPassword ? (
                <IconEyeOpen
                  className="icon-input"
                  onClick={() => setShowPassword(false)}
                ></IconEyeOpen>
              ) : (
                <IconEyeClose
                  className="icon-input"
                  onClick={() => setShowPassword(true)}
                ></IconEyeClose>
              )}
            </Input>
          </Field>
          <Button
            title="sign-up-button"
            type="submit"
            maxWidth="300px"
            isLoading={isSubmitting}
            disabled={isSubmitting}
          >
            Sign Up
          </Button>
        </form>
      </div>
    </SignUpPageStyles>
  );
};

export default SignUpPage;
