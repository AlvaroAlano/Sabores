import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  padding: 20px;
`;

function OrderHistoryPage() {
  return (
    <PageContainer>
      <h1>Histórico de Pedidos</h1>
      <p>Aqui você pode ver todos os seus pedidos anteriores.</p>
      {/* Adicione a lista de pedidos aqui */}
    </PageContainer>
  );
}

export default OrderHistoryPage;
