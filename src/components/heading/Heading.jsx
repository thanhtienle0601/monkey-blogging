/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

const HeadingStyles = styled.div`
  .post-heading {
    color: ${(props) => props.theme.violetDark};
    font-size: 36px;
    margin-bottom: 40px;
  }
  .border-top {
    width: 50px;
    height: 5px;
    background-color: ${(props) => props.theme.blueLight};
  }
`;

const Heading = ({ children }) => {
  return (
    <HeadingStyles>
      <div className="border-top"></div>
      <h1 className="post-heading">{children}</h1>
    </HeadingStyles>
  );
};

export default Heading;
