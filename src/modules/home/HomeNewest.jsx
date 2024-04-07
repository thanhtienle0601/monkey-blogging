/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import Heading from "../../components/heading/Heading";
import PostNewestItemLarge from "../posts/PostNewestItemLarge";
import PostNewestItem from "../posts/PostNewestItem";
import PostItem from "../posts/PostItem";

const HomeNewestStyles = styled.div`
  margin-bottom: 40px;
  .newest-right {
    background-color: ${(props) => props.theme.pinkLight};
    border-radius: 16px;
    padding: 20px;
  }
`;

const HomeNewest = () => {
  return (
    <HomeNewestStyles>
      <div className="container">
        <Heading>Newest</Heading>
        <div className="grid-layout-2">
          <div className="newest-left">
            <PostNewestItemLarge></PostNewestItemLarge>
          </div>
          <div className="newest-right">
            <PostNewestItem></PostNewestItem>
            <PostNewestItem></PostNewestItem>
            <PostNewestItem></PostNewestItem>
          </div>
        </div>
        <div className="grid-layout-4">
          <PostItem></PostItem>
          <PostItem></PostItem>
          <PostItem></PostItem>
          <PostItem></PostItem>
        </div>
      </div>
    </HomeNewestStyles>
  );
};

export default HomeNewest;
