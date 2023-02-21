
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Main = styled.main`
  display: flex;
  flex: 1;
  padding: 1rem;
  background-color: #ddd;

  @media (max-width: 320px) {
    flex-direction: column;
  }
`;

export const Dashboard = () => {
  return (
    <Container>
      <Main>
        Contenido Principal
      </Main>
    </Container>
  )
}