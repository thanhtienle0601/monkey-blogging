/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Label } from "../components/label";
import Input from "../components/input/Input";
import { useForm } from "react-hook-form";
import { IconEyeClose, IconEyeOpen } from "../icons";
import { Field } from "../components/field";
import { Button } from "../components/button";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../fireBase/firebase-config";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { NavLink, useNavigate } from "react-router-dom";
import AuthenticationPage from "./AuthenticationPage";
import { InputPasswordToggle } from "../components/input";
import slugify from "slugify";

const schema = yup.object({
  fullname: yup.string().required("Please enter your fullname"),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Please enter your email"),
  password: yup
    .string()
    .min(8, "The password must have as least 8 characters or greater")
    .required("Please enter your password"),
});

const SignUpPage = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    watch,
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
  const handleSignUp = async (values) => {
    console.log(values);
    if (!isValid) return;
    // return new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve();
    //   }, 5000);
    // });
    const user = await createUserWithEmailAndPassword(
      auth,
      values.email,
      values.password
    );
    await updateProfile(auth.currentUser, {
      displayName: values.fullname,
    });
    const colRef = collection(db, "users");
    await setDoc(doc(db, "users", auth.currentUser.uid), {
      fullname: values.fullname,
      email: values.email,
      password: values.password,
      username: slugify(values.fullname, { lower: true }),
    });
    // await addDoc(colRef, {
    //   fullname: values.fullname,
    //   email: values.email,
    //   password: values.password,
    // });
    toast.success("Register Successfully !!!");
    navigate("/");
  };

  return (
    <AuthenticationPage>
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
          <InputPasswordToggle control={control}></InputPasswordToggle>
        </Field>
        <div className="have-account">
          you already have an account ? <NavLink to={"/sign-in"}>Login</NavLink>
        </div>
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
    </AuthenticationPage>
  );
};

export default SignUpPage;
