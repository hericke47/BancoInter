import React from 'react';

import { useTheme } from 'styled-components';

import { User } from '../Header';
import { Container } from './styles';

const removeHashFromColor = (color: string): string => color.slice(1);

type AccountDropDownProps = {
  user: User;
};

const AccountDropdown: React.FC<AccountDropDownProps> = ({ user }) => {
  const { lightGrey, secondary } = useTheme().colors;

  return (
    <Container>
      <img
        // api do ui avatars
        src={`https://ui-avatars.com/api/?rounded=true&format=svg&background=${removeHashFromColor(
          lightGrey,
        )}&color=${removeHashFromColor(secondary)}&name=${user.name}`}
        alt="user"
      />
    </Container>
  );
};

export default AccountDropdown;
