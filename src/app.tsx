import * as React from 'react';
import styled from 'styled-components';
export const App = () => {
  return <Title>Memory Game</Title>;
};

const Title = styled.h1`
  color: var(--color-blue-100);
  font-weight: var(--weight-bold);
`;
