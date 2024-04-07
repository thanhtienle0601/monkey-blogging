/* eslint-disable no-unused-vars */
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NotFoundPageStyles = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .logo {
    margin-bottom: 20px;
  }
  .heading {
    font-size: 60px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  .back {
    padding: 15px;
    color: white;
    background-color: ${(props) => props.theme.primary};
    border-radius: 8px;
  }
`;

const NotFoundPage = () => {
  return (
    <NotFoundPageStyles>
      <img srcSet="/monkey1.png 2x" alt="monkey-blogging" className="logo" />
      <h1 className="heading">404! Page not found !!!</h1>
      <NavLink to={"/"} className="back">
        Back to home
      </NavLink>
    </NotFoundPageStyles>
  );
};

export default NotFoundPage;
