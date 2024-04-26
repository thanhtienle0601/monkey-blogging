/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import PostCategory from "./PostCategory";
import PostTitle from "./PostTitle";
import PostInfo from "./PostInfo";
import PostImage from "./PostImage";

const PostItemStyles = styled.div`
  .post-image {
    border-radius: 8px;
    margin-bottom: 16px;
  }
  .post-category {
    margin-bottom: 16px;
  }
  .post-title {
    margin-bottom: 12px;
  }
`;

const PostItem = () => {
  return (
    <PostItemStyles>
      <PostImage
        to={"/"}
        url="https://images.unsplash.com/photo-1510125964506-dc5a14f3ef4e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      ></PostImage>
      <PostCategory>Kiến thức</PostCategory>
      <PostTitle>
        Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
      </PostTitle>
      <PostInfo></PostInfo>
    </PostItemStyles>
  );
};

export default PostItem;
