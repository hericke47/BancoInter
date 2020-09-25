import React from 'react';

import AccountSumary from './AccountSumary';
import NavigationCards from './NavigationCards';
import { Container } from './styles';

const MainContent: React.FC = () => {
  return (
    <Container>
      <NavigationCards />
      <AccountSumary />
    </Container>
  );
};

export default MainContent;
