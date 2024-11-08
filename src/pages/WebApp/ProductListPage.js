import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  padding: 20px;
`;

function ProductListPage() {
  return (
    <PageContainer>
      <h1>Lista de Produtos</h1>
      <p>Aqui você encontrará todos os nossos produtos disponíveis.</p>
      {/* Adicione a lista de produtos aqui */}
    </PageContainer>
  );
}

export default ProductListPage;
