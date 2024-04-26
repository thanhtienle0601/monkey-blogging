/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import PostCategory from "./PostCategory";
import PostTitle from "./PostTitle";
import PostInfo from "./PostInfo";
import PostImage from "./PostImage";

const PostNewestItemStyles = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 28px;
  padding-bottom: 28px;
  border-bottom: 1px solid #ccc;
  &:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
    border-bottom: 0;
  }
  .post-image {
    display: block;
    border-radius: 8px;
    overflow: hidden;
    width: 180px;
    height: 130px;
    margin-bottom: 12px;
    flex-shrink: 0;
  }
  .post-category {
    margin-bottom: 8px;
  }
  .post-title {
    margin-bottom: 8px;
  }
`;

const PostNewestItem = () => {
  return (
    <PostNewestItemStyles>
      <PostImage
        to={"/"}
        url="https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=2884&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="img"
      ></PostImage>
      <div className="post-content">
        <PostCategory type="secondary">Kiến thức</PostCategory>
        <PostTitle>
          Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
        </PostTitle>
        <PostInfo></PostInfo>
      </div>
    </PostNewestItemStyles>
  );
};

export default PostNewestItem;
