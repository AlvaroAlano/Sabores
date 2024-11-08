import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  padding: 20px;
`;

function TestimonialsPage() {
  return (
    <PageContainer>
      <h1>Depoimentos</h1>
      <p>Veja o que nossos clientes estão dizendo sobre nós.</p>
      {/* Adicione a lista de depoimentos aqui */}
    </PageContainer>
  );
}

export default TestimonialsPage;
