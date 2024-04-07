/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

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
  .post-img {
    display: block;
    border-radius: 16px;
    overflow: hidden;
    width: 180px;
    height: 130px;
    margin-bottom: 12px;
    flex-shrink: 0;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 12px;
    }
  }
  .post-category {
    display: inline-block;
    padding: 8px 12px;
    border-radius: 8px;
    color: #6b6b6b;
    font-size: 14px;
    font-weight: 600;
    background-color: #f3f3f3;
    white-space: nowrap;
    max-width: 100px;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 8px;
  }
  .post-info {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 14px;
    font-weight: 600;
    margin-left: auto;
    color: ${(props) => props.theme.grayMedium};
  }
  .post-dot {
    display: inline-block;
    width: 5px;
    height: 5px;
    background-color: currentColor;
    border-radius: 100%;
  }
  .post-title {
    font-weight: bold;
    line-height: 1.5;
    display: block;
    font-size: 16px;
    margin-bottom: 8px;
  }
`;

const PostNewestItem = () => {
  return (
    <PostNewestItemStyles>
      <div className="post-img">
        <img
          src="https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=2884&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="img"
        />
      </div>
      <div className="post-content">
        <span className="post-category">Kiến thức</span>
        <h3 className="post-title">
          Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
        </h3>
        <div className="post-info">
          <span className="post-time">Mar 23</span>
          <span className="post-dot"></span>
          <span className="post-author">Andiez Le</span>
        </div>
      </div>
    </PostNewestItemStyles>
  );
};

export default PostNewestItem;
