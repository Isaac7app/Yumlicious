import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter } from "react-router-dom";
import Search from "./components/Search";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi";
import { useState, createContext } from "react";

function App() {
  const UserContext = createContext();
  return (
    <div>
      <BrowserRouter>
        <Nav>
          <GiKnifeFork />
          <Logo to={"/"}>YumYum</Logo>
        </Nav>
        <Search />
        <Category />
        <UserContext.Provider value={user}>
          <Pages />
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: "Lobster Two", cursive;
`;

const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg {
    font-size: 2rem;
  }
`;

export default App;
