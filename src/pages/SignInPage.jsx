/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import AuthenticationPage from "./AuthenticationPage";
import { useForm } from "react-hook-form";
import { Field } from "../components/field";
import { Label } from "../components/label";
import Input from "../components/input/Input";
import { Button } from "../components/button";
import { IconEyeClose, IconEyeOpen } from "../icons";
import { useAuth } from "../contexts/auth-context";
import { NavLink, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../fireBase/firebase-config";
import { InputPasswordToggle } from "../components/input";

const schema = yup.object({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Please enter your email"),
  password: yup
    .string()
    .min(8, "The password must have as least 8 characters or greater")
    .required("Please enter your password"),
});

const SignInPage = () => {
  const navigate = useNavigate();
  const { userInfo } = useAuth();
  useEffect(() => {
    document.title = "Login Page";
    if (userInfo?.email) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const {
    control,
    handleSubmit,
    formState: { isValid, isSubmitting, errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  useEffect(() => {
    let arrErrors = Object.values(errors);
    if (arrErrors.length > 0) {
      // for (let i = 0; i <= arrErrors.length; i++) {
      //   toast.error(arrErrors[i]?.message);
      // }
      toast.error(arrErrors[0]?.message);
    }
  }, [errors]);
  const handleSignIn = async (values) => {
    await signInWithEmailAndPassword(auth, values.email, values.password);
    navigate("/");
  };
  return (
    <AuthenticationPage>
      <form className="form" onSubmit={handleSubmit(handleSignIn)}>
        <Field>
          <Label htmlFor="email">Email address</Label>
          <Input
            type="email"
            name="email"
            control={control}
            placeholder="Enter your email address"
          ></Input>
        </Field>
        <Field>
          <Label htmlFor="password">Password</Label>
        </Field>
        <InputPasswordToggle control={control}></InputPasswordToggle>
        <div className="have-account">
          you have not have an account ?{" "}
          <NavLink to={"/sign-up"}>Register</NavLink>
        </div>
        <Button
          title="sign-in-button"
          type="submit"
          maxWidth="300px"
          isLoading={isSubmitting}
          disabled={isSubmitting}
        >
          Sign In
        </Button>
      </form>
    </AuthenticationPage>
  );
};

export default SignInPage;
