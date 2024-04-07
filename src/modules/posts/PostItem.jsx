/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

const PostItemStyles = styled.div`
  .post-img {
    display: block;
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 16px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 8px;
    }
  }
  .post-category {
    display: inline-block;
    padding: 8px 12px;
    border-radius: 8px;
    color: ${(props) => props.theme.grayMedium};
    background-color: #f3f3f3;
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 16px;
  }
  .post-title {
    font-weight: bold;
    font-size: 18px;
    display: block;
    line-height: 1.5;
    margin-bottom: 16px;
  }
  .post-info {
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 600;
    font-size: 14px;
    color: ${(props) => props.theme.grayMedium};
  }
  .post-dot {
    width: 5px;
    height: 5px;
    background-color: currentColor;
    display: inline-block;
    border-radius: 100%;
  }
`;

const PostItem = () => {
  return (
    <PostItemStyles>
      <div className="post-img">
        <img
          src="https://images.unsplash.com/photo-1510125964506-dc5a14f3ef4e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
      <span className="post-category">Kiến thức</span>
      <h3 className="post-title">
        Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
      </h3>
      <div className="post-info">
        <span className="post-time">Mar 23</span>
        <span className="post-dot"></span>
        <span className="post-author">Andiez Le</span>
      </div>
    </PostItemStyles>
  );
};

export default PostItem;
