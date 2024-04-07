/* eslint-disable no-unused-vars */
import { signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../fireBase/firebase-config";
import { useNavigate } from "react-router-dom";
import Header from "../components/layouts/Header";
import styled from "styled-components";
import Layout from "../components/layouts/Layout";
import HomeBanner from "../modules/home/HomeBanner";
import HomeFeature from "../modules/home/HomeFeature";
import HomeNewest from "../modules/home/HomeNewest";

const HomePageStyles = styled.div``;

const HomePage = () => {
  // const navigate = useNavigate();
  // const handleSignOut = () => {
  //   signOut(auth);
  //   navigate("/sign-in");
  // };
  return (
    <HomePageStyles>
      <Layout>
        <HomeBanner></HomeBanner>
        <HomeFeature></HomeFeature>
        <HomeNewest></HomeNewest>
      </Layout>
    </HomePageStyles>
  );
};

export default HomePage;
