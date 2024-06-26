/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const PostImageStyles = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
  }
`;

const PostImage = ({ url = "", alt = "", className = "", to = null }) => {
  if (to) {
    return (
      <NavLink to={to} style={{ display: "block" }}>
        <PostImageStyles className={`post-image ${className}`}>
          <img src={url} alt={alt} />
        </PostImageStyles>
      </NavLink>
    );
  }
  return (
    <PostImageStyles className={`post-image ${className}`}>
      <img src={url} alt={alt} />
    </PostImageStyles>
  );
};

export default PostImage;
