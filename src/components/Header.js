import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #096F8C;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  color: white;
  margin: 0;
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <Nav>
        <NavLink to="/webapp">Home</NavLink>
        <NavLink to="/webapp/products">Produtos</NavLink>
        <NavLink to="/webapp/cart">Carrinho</NavLink>
        <NavLink to="/webapp/account">Conta</NavLink>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;
