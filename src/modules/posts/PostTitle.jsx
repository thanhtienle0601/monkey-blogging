/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

const PostTitleStyles = styled.h3`
  font-weight: 600;
  ${(props) =>
    props.size === "normal" &&
    css`
      font-size: 18px;
      line-height: 24px;
    `};
  ${(props) =>
    props.size === "large" &&
    css`
      font-size: 22px;
      line-height: 28px;
    `};
`;

const PostTitle = ({ children, className = "", size = "normal", to = "/" }) => {
  return (
    <PostTitleStyles size={size} className={`post-title ${className}`}>
      <NavLink to={to}>{children}</NavLink>
    </PostTitleStyles>
  );
};

export default PostTitle;
