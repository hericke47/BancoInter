import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.background};
`;

export const Wrapper = styled.div`
  height: 10.4rem;
  max-width: 100rem;
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const LeftNav = styled.div`
  display: flex;
  align-items: center;

  > svg {
    max-width: 11.2rem;
    height: auto;
    margin: 0 2.4rem 1.1rem 0;
  }

  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: 700;
`;

export const RightNav = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
`;
