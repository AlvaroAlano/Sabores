import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const PageContainer = styled.div`
  padding: 20px;
`;

function ProductDetailPage() {
  const { id } = useParams();

  return (
    <PageContainer>
      <h1>Detalhes do Produto</h1>
      <p>Detalhes do produto com ID: {id}</p>
      {/* Adicione os detalhes do produto aqui */}
    </PageContainer>
  );
}

export default ProductDetailPage;
