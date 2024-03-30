/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

const LoadingStyles = styled.div`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  border: ${(props) => props.borderSize} solid white;
  border-top: ${(props) => props.borderSize} solid transparent;
  border-bottom: ${(props) => props.borderSize} solid transparent;
  border-radius: 100%;
  animation: spinner 1s infinite linear;
  @keyframes spinner {
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Loading = ({ size = "40px", borderSize = "5px", ...props }) => {
  return (
    <LoadingStyles
      size={size}
      borderSize={borderSize}
      {...props}
    ></LoadingStyles>
  );
};

export default Loading;
