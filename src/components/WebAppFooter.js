import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #1e90ff;
  padding: 10px 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const FooterButton = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Icon = styled.span`
  font-size: 24px;
  margin-bottom: 4px;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterButton to="/webapp">
        <Icon>🏠</Icon>
        Inicio
      </FooterButton>
      <FooterButton to="/webapp/account">
        <Icon>👤</Icon>
        Conta
      </FooterButton>
      <FooterButton to="/webapp/cart">
        <Icon>🛒</Icon>
        Carrinho
      </FooterButton>
      <FooterButton to="/webapp/testimonials">
        <Icon>💬</Icon>
        Depoimentos
      </FooterButton>
      <FooterButton to="/webapp/subscription">
        <Icon>📅</Icon>
        Assinatura
      </FooterButton>
    </FooterContainer>
  );
}

export default Footer;
