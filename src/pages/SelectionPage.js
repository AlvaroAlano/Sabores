import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const SelectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f8ff;
`;

const Title = styled.h1`
  color: #1e90ff;
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const SelectionButton = styled.button`
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
  background-color: #1e90ff;
  color: white;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #4169e1;
  }
`;

function SelectionPage() {
  const navigate = useNavigate();

  return (
    <SelectionContainer>
      <Title>Bem-vindo ao Frutos do Mar Delivery</Title>
      <ButtonContainer>
        <SelectionButton onClick={() => navigate('/webapp')}>
          Consumidor Final
        </SelectionButton>
        <SelectionButton onClick={() => navigate('/landing')}>
          Restaurante ou CNPJ
        </SelectionButton>
      </ButtonContainer>
    </SelectionContainer>
  );
}

export default SelectionPage;
