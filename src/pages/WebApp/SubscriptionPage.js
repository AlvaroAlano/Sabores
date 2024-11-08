import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  padding: 20px;
`;

function SubscriptionPage() {
  return (
    <PageContainer>
      <h1>Assinaturas</h1>
      <p>Explore nossos planos de assinatura para entregas regulares.</p>
      {/* Adicione as opções de assinatura aqui */}
    </PageContainer>
  );
}

export default SubscriptionPage;
