import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  padding: 20px;
`;

function AccountPage() {
  return (
    <PageContainer>
      <h1>Sua Conta</h1>
      <p>Gerencie suas informações de conta aqui.</p>
      {/* Adicione as opções de conta aqui */}
    </PageContainer>
  );
}

export default AccountPage;
