import React from 'react';

import { FiBarChart2 } from 'react-icons/fi';

import Dropdown from './Dropdown';
import { sideBarNavigation } from '../../../resources';
import { Container, AmountInvested } from './styles';
import AccountBalance from './AccountBalance';

const SideBar: React.FC = () => {
  return (
    <Container>
      <AccountBalance />
      <AmountInvested>
        Ver total investido <FiBarChart2 size="1.6rem" />
      </AmountInvested>
      {/* o entries ele pega as 'enradas' do objeto e transforma em um array */}
      {Object.entries(sideBarNavigation).map(([key, value]) => (
        <Dropdown key={key} icon={value.icon} sectionName={key} />
      ))}
    </Container>
  );
};

export default SideBar;
