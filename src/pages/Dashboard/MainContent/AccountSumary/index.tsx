import React, { useState } from 'react';

import { FiCreditCard, FiFileText, FiEye, FiEyeOff } from 'react-icons/fi';

import {
  Container,
  Card,
  Header,
  DataWrapper,
  LeftData,
  RightData,
  DataValue,
} from './styles';
import { PlataformaPaiIcon } from '../../../../assets/images/icons';
import CreditCardIllustration from '../../../../assets/images/illustrations/card-illustration.png';
import Button from '../../../../components/Button';

const AccountSumary: React.FC = () => {
  const [displayStatement, setDisplayStatement] = useState(true);
  const [displayInvestiments, setDisplayInvestiments] = useState(true);

  return (
    <Container>
      <Card>
        <Header iconStroke>
          <FiFileText />
          <h3>Extrato</h3>
          <Button
            onClick={() => setDisplayStatement((prevstate) => !prevstate)}
            variant="transparent"
          >
            {displayStatement ? <FiEyeOff /> : <FiEye />}
          </Button>
        </Header>
        <DataWrapper>
          <LeftData>Grafico</LeftData>
          <RightData>
            <span>Receita</span>
            <DataValue income>
              {displayStatement ? 'R$ 8.552,22' : '---'}
            </DataValue>
            <span>Dispesas</span>
            <DataValue outcome>
              {displayStatement ? 'R$ 7.948,55' : '---'}
            </DataValue>
          </RightData>
        </DataWrapper>
      </Card>

      <Card>
        <Header iconStroke>
          <FiCreditCard />
          <h3>Mastercard 8430</h3>
        </Header>
        <DataWrapper>
          <LeftData>
            <img
              src={CreditCardIllustration}
              alt="Cartão de credito sem anuidade"
            />
          </LeftData>
          <RightData>
            <span>Seu cartão é Mastercard e sem anuidade!</span>
          </RightData>
        </DataWrapper>
      </Card>

      <Card>
        <Header iconStroke={false}>
          <PlataformaPaiIcon />
          <h3>Plataforma Aberta Inter</h3>
          <Button
            onClick={() => setDisplayInvestiments((prevstate) => !prevstate)}
            variant="transparent"
          >
            {displayInvestiments ? <FiEyeOff /> : <FiEye />}
          </Button>
        </Header>

        <DataWrapper>
          <LeftData>Grafico</LeftData>
          <RightData>
            <span>Tota investido</span>
            <DataValue>{displayInvestiments ? 'R$ 5.750,00' : '---'}</DataValue>
            <span>Evolução no Mês</span>
            <DataValue>{displayInvestiments ? '20%' : '---'}</DataValue>
          </RightData>
        </DataWrapper>
      </Card>
    </Container>
  );
};

export default AccountSumary;
