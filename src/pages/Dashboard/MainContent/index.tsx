import React from 'react';

import AccountSumary from './AccountSumary';
import BankProducts from './BankProducts';
import NavigationCards from './NavigationCards';
import { Container } from './styles';

const MainContent: React.FC = () => {
  return (
    <Container>
      <NavigationCards />
      <AccountSumary />
      <BankProducts />
    </Container>
  );
};

export default MainContent;
