import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #096F8C;
  color: white;
  padding: 20px;
  text-align: center;
`;

function LandingFooter() {
  return (
    <FooterContainer>
      <p>&copy; 2024 Frutos do Mar Delivery. Todos os direitos reservados.</p>
    </FooterContainer>
  );
}

export default LandingFooter;
