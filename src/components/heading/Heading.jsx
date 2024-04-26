/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

const HeadingStyles = styled.h2`
  color: ${(props) => props.theme.violetDark};
  font-size: 28px;
  margin-bottom: 30px;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    background-color: ${(props) => props.theme.blueLight};
    width: 50px;
    height: 4px;
    top: 0;
    left: 0;
    transform: translateY(-150%);
  }
`;

const Heading = ({ className = "", children }) => {
  return <HeadingStyles className={className}>{children}</HeadingStyles>;
};

export default Heading;
