import styled from 'styled-components';

export const PlusCardWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 31px;
  max-width: 290px;
  @media (max-width: 1200px) {
    gap: 15px;
  }
`;

export const PlusCardDescr = styled.p`
  font-family: 'Proxima Nova';
  font-weight: 700;
  font-size: 20px;
  letter-spacing: -0.5px;
  color: #ffffff;
  @media (max-width: 1200px) {
    font-size: 18px;
  }
`;
