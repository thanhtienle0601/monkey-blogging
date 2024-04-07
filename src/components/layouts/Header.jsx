/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import Button from "../button/Button";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../contexts/auth-context";
const menuLinks = [
  {
    url: "/",
    title: "Home",
  },
  {
    url: "/blog",
    title: "Blog",
  },
  {
    url: "/contact",
    title: "Contact",
  },
];

const HeaderStyles = styled.header`
  padding: 15px 0;
  .header-main {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .header-right {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  .header-left {
    /* max-width: 400px; */
    /* width: 100%; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
  }
  .search {
    /* width: 400px; */
    display: flex;
    align-items: center;
    position: relative;
  }
  .search-input {
    width: 300px;
    padding: 10px 40px 10px 10px;
    border-radius: 8px;
    border: 1px solid #ccc;
  }
  .search-icon {
    position: absolute;
    right: 15px;
  }
  .logo {
    width: 40px;
  }
  .menu-links {
    display: flex;
    align-items: center;
    gap: 15px;
    font-weight: 500;
  }
  .header-auth {
    max-width: 300px;
    width: 100%;
    strong {
      color: ${(props) => props.theme.primary};
    }
  }
`;

function getLastName(name) {
  if (!name) return "";
  const length = name.split(" ").length;
  return name.split(" ")[length - 2] + " " + name.split(" ")[length - 1];
}
const Header = () => {
  const { userInfo } = useAuth();
  return (
    <HeaderStyles>
      <div className="container header-main">
        <div className="header-right">
          <NavLink to={"/"}>
            <img srcSet="/monkey1.png 2x" alt="logo" className="logo" />
          </NavLink>
          <ul className="menu-links">
            {menuLinks.map((link) => (
              <li key={link.title}>
                <NavLink to={link.url}>{link.title}</NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="header-left">
          <div className="search">
            <input
              type="text"
              className="search-input"
              placeholder="Search posts ..."
            />
            <span className="search-icon">
              <svg
                width="18"
                height="17"
                viewBox="0 0 18 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <ellipse
                  cx="7.66669"
                  cy="7.05161"
                  rx="6.66669"
                  ry="6.05161"
                  stroke="#999999"
                  strokeWidth="1.5"
                />
                <path
                  d="M17.0001 15.5237L15.2223 13.9099L14.3334 13.103L12.5557 11.4893"
                  stroke="#999999"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M11.6665 12.2964C12.9671 12.1544 13.3706 11.8067 13.4443 10.6826"
                  stroke="#999999"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </div>
          {!userInfo ? (
            <Button type="button" to="/sign-in" maxWidth="150px" height="50px">
              Sign In
            </Button>
          ) : (
            <div className="header-auth">
              <span>Welcome, </span>
              <strong>{getLastName(userInfo?.displayName)}</strong>
            </div>
          )}
        </div>
      </div>
    </HeaderStyles>
  );
};

export default Header;
