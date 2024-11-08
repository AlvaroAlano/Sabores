import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  color: #1e90ff;
`;

function HomePage() {
  return (
    <HomeContainer>
      <Title>Frutos do Mar Delivery</Title>
      <p>Explore nossa seleção de frutos do mar frescos!</p>
      {/* Adicione componentes como CategoryScroll e ProductList aqui */}
    </HomeContainer>
  );
}

export default HomePage;
