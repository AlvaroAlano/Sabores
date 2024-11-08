import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  padding: 20px;
`;

function CheckoutPage() {
  return (
    <PageContainer>
      <h1>Finalizar Compra</h1>
      <p>Complete suas informações para finalizar a compra.</p>
      {/* Adicione o formulário de checkout aqui */}
    </PageContainer>
  );
}

export default CheckoutPage;
