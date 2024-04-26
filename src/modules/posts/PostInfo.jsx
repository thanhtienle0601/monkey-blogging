/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const PostInfoStyles = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  font-weight: 600;
  color: inherit;
  .post {
    &-time {
    }
    &-dot {
      display: inline-block;
      width: 5px;
      height: 5px;
      background-color: currentColor;
      border-radius: 100%;
    }
    &-author {
    }
  }
`;

const PostInfo = ({ time = "Mar 23", authorName = "Andiez Le", to = "/" }) => {
  return (
    <PostInfoStyles>
      <span className="post-time">{time}</span>
      <span className="post-dot"></span>
      <NavLink to={to}>
        <span className="post-author">{authorName}</span>
      </NavLink>
    </PostInfoStyles>
  );
};

export default PostInfo;
