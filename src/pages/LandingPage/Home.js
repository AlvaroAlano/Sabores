import React from 'react';
import styled from 'styled-components';

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 20px;
`;

function LandingHome() {
  return (
    <>
      <VideoContainer>
        <Video autoPlay muted loop>
          <source src="/videos/1107(1).mp4" type="video/mp4" />
          Seu navegador não suporta o elemento de vídeo.
        </Video>
      </VideoContainer>
      <Content>
        <h1>Frutos do Mar para Restaurantes e CNPJ</h1>
        <p>Bem-vindo à nossa página dedicada a parceiros comerciais.</p>
        {/* Adicione mais conteúdo aqui */}
      </Content>
      <Content>
        <h1>Frutos do Mar para Restaurantes e CNPJ</h1>
        <p>Bem-vindo à nossa página dedicada a parceiros comerciais.</p>
        <p>Bem-vindo à nossa página dedicada a parceiros comerciais.</p>
        <p>Bem-vindo à nossa página dedicada a parceiros comerciais.</p>
        <p>Bem-vindo à nossa página dedicada a parceiros comerciais.</p>
        <p>Bem-vindo à nossa página dedicada a parceiros comerciais.</p>
        <p>Bem-vindo à nossa página dedicada a parceiros comerciais.</p>
        <p>Bem-vindo à nossa página dedicada a parceiros comerciais.</p>
        <p>Bem-vindo à nossa página dedicada a parceiros comerciais.</p>
        <p>Bem-vindo à nossa página dedicada a parceiros comerciais.</p>
        <p>Bem-vindo à nossa página dedicada a parceiros comerciais.</p>
        <p>Bem-vindo à nossa página dedicada a parceiros comerciais.</p>
        <p>Bem-vindo à nossa página dedicada a parceiros comerciais.</p>
        <p>Bem-vindo à nossa página dedicada a parceiros comerciais.</p>
        <p>Bem-vindo à nossa página dedicada a parceiros comerciais.</p>
        <p>Bem-vindo à ossa página dedicada a parceiros comerciais.</p>
        <p>Bem-vindo à nossa página dedicada a parceiros comerciais.</p>
        <p>Bem-vindo à nossa página dedicada a parceiros comerciais.</p>
        <p>Bem-vindo à nossa página dedicada a parceiros comerciais.</p>
        <p>Bem-vindo à nossa página dedicada a parceiros comerciais.</p>
        <p>Bem-vindo à nossa página dedicada a parceiros comerciais.</p>
        <p>Bem-vindo à nossa página dedicada a parceiros comerciais.</p>
        <p>Bem-vindo à nossa página dedicada a parceiros comerciais.</p>
        <p>Bem-vindo à nossa página dedicada a parceiros comerciais.</p>
        <p>Bem-vindo à nossa página dedicada a parceiros comerciais.</p>
        <p>Bem-vindo à nossa página dedicada a parceiros comerciais.</p>
        {/* Adicione mais conteúdo aqui */}
      </Content>
    </>
  );
}

export default LandingHome;
