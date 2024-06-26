/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
const PostCategoryStyles = styled.div`
  display: inline-block;
  padding: 8px 12px;
  border-radius: 8px;
  color: ${(props) => props.theme.grayMedium};
  font-size: 14px;
  font-weight: 600;
  a {
    display: block;
  }
  ${(props) =>
    props.type === "primary" &&
    css`
      background-color: ${(props) => props.theme.pinkLight};
    `};
  ${(props) =>
    props.type === "secondary" &&
    css`
      background-color: white;
    `};
`;

const PostCategory = ({
  children,
  type = "primary",
  className = "",
  to = "/",
}) => {
  return (
    <PostCategoryStyles type={type} className={`post-category ${className}`}>
      <NavLink to={to}>{children}</NavLink>
    </PostCategoryStyles>
  );
};

export default PostCategory;
