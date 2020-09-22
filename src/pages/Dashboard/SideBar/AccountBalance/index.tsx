import React, { useState } from 'react';

import { FiEye, FiEyeOff } from 'react-icons/fi';

import Button from '../../../../components/Button';
import { Container, Balance } from './styles';

const AccountBalance: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <Container>
      <Balance>
        <span>Saldo em Conta:</span>
        {isVisible ? (
          <>
            R$ <strong>765,59</strong>
          </>
        ) : (
          <span />
        )}
      </Balance>

      <Button
        variant="transparent"
        onClick={() => setIsVisible((prevState) => !prevState)}
      >
        {isVisible ? <FiEyeOff /> : <FiEye />}
      </Button>
    </Container>
  );
};

export default AccountBalance;
