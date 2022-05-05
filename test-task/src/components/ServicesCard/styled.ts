import styled from 'styled-components';

import Arrow from '../../assets/icons/services-arrow-icon.svg';

export const CardWrapper = styled.div`
  max-width: 400px;
  @media (max-width: 575px) {
    max-width: 300px;
    img {
      width: 100%;
    }
  }
`;

export const CardTitle = styled.h4`
  margin-top: 20px;
  font-family: 'Proxima Nova';
  font-weight: 800;
  font-size: 24px;
  color: #ffffff;
`;

export const CardDescr = styled.p`
  margin-top: 20px;
  font-family: 'Proxima Nova';
  font-weight: 600;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: -0.4px;
  color: #ffffff;
  opacity: 0.7;
  @media (max-width: 1200px) {
    letter-spacing: 0;
  }
`;

export const CardBtn = styled.button`
  margin-top: 29px;
  width: 165px;
  background: url(${Arrow}) no-repeat;
  background-position-x: 100%;
  background-position-y: 40%;
  text-align: left;
  border: none;
  font-family: 'Bebas Neue';
  font-weight: 700;
  font-size: 20px;
  letter-spacing: 7px;
  color: #fee040;
  cursor: pointer;
  transition: 0.3s all;
  :hover {
    color: #c0ab39;
  }
  @media (max-width: 1200px) {
    :hover {
      transform: scale(1.1);
    }
  }
`;
