/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

const LabelStyles = styled.label`
  color: ${(props) => props.theme.grayDark};
  font-weight: 600;
`;

const Label = ({ htmlFor = "", children, ...props }) => {
  return (
    <LabelStyles>
      <label htmlFor={htmlFor} {...props}>
        {children}
      </label>
    </LabelStyles>
  );
};

export default Label;
