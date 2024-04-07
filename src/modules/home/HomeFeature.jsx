/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import PostFeatureItem from "../posts/PostFeatureItem";
import Heading from "../../components/heading/Heading";

const HomeFeatureStyles = styled.div`
  margin-bottom: 40px;
`;

const HomeFeature = () => {
  return (
    <HomeFeatureStyles>
      <div className="container">
        <Heading>Features</Heading>
        <div className="grid-layout-3">
          <PostFeatureItem></PostFeatureItem>
          <PostFeatureItem></PostFeatureItem>
          <PostFeatureItem></PostFeatureItem>
        </div>
      </div>
    </HomeFeatureStyles>
  );
};

export default HomeFeature;
