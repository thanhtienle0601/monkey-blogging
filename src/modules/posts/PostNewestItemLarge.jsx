/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import PostCategory from "./PostCategory";
import PostTitle from "./PostTitle";
import PostInfo from "./PostInfo";
import PostImage from "./PostImage";

const PostNewestItemLargeStyles = styled.div`
  .post-image {
    display: block;
    border-radius: 16px;
    overflow: hidden;
    height: 400px;
    margin-bottom: 16px;
  }
  .post-category {
    margin-bottom: 16px;
  }
  .post-title {
    margin-bottom: 12px;
  }
`;

const PostNewestItemLarge = () => {
  return (
    <PostNewestItemLargeStyles>
      <PostImage
        url="https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=2884&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="img"
      ></PostImage>
      <PostCategory>Kiến thức</PostCategory>
      <PostTitle size="large">
        Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
      </PostTitle>
      <PostInfo></PostInfo>
    </PostNewestItemLargeStyles>
  );
};

export default PostNewestItemLarge;
