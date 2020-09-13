import React, { memo } from 'react';

import { Container, Wrapper, LeftNav, RightNav } from './styles';
import { BancoInter } from '../../assets/images';
import Button from '../Button';
import AccountDropDown from './AccountDropdown';
import { User } from './Header';

const Header: React.FC = () => {
  const user: User = { name: 'Herick Exterkoetter' };

  return (
    <Container>
      <Wrapper>
        <LeftNav>
          <BancoInter />
          Internet Banking
        </LeftNav>
        <RightNav>
          <Button variant="secondary">Simulador Renda Fixa</Button>
          <AccountDropDown user={user} />
        </RightNav>
      </Wrapper>
    </Container>
  );
};

// impede quando outros componentes da pagina carregatem estea carregar denovo
export default memo(Header);
