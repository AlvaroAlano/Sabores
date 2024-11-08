import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  padding: 20px;
`;

function CartPage() {
  return (
    <PageContainer>
      <h1>Seu Carrinho</h1>
      <p>Os itens do seu carrinho aparecerão aqui.</p>
      {/* Adicione a lista de itens do carrinho aqui */}
    </PageContainer>
  );
}

export default CartPage;
