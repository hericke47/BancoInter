import React from 'react';

import { FiBarChart2 } from 'react-icons/fi';

import { Wrapper, Container, AmountInvested } from './styles';
import { sideBarNavigation } from '../../../resources';
import Dropdown from './Dropdown';
import AccountBalance from './AccountBalance';
import HelpDesk from './HelpDesk';

const SideBar: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <AccountBalance />
        <AmountInvested>
          Ver Total Investido <FiBarChart2 size="1.6rem" />
        </AmountInvested>
        {Object.entries(sideBarNavigation).map(([key, value]) => (
          <Dropdown key={key} icon={value.icon} sectionName={key} />
        ))}
      </Container>
      <HelpDesk />
    </Wrapper>
  );
};

export default SideBar;
