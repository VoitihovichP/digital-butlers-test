import styled from 'styled-components';

import Check from '../../assets/icons/check-icon.svg';

export const ListWrap = styled.ul`
  list-style-type: none;
`;

export const ListItem = styled.li`
  position: relative;
  padding-left: 50px;
  margin-bottom: 17px;
  height: 30px;
  font-family: 'Proxima Nova';
  font-weight: 600;
  font-size: 18px;
  letter-spacing: -0.5px;
  color: #333333;
  opacity: 0.7;
  :before {
    content: ' ';
    position: absolute;
    top: -12%;
    left: 0;
    width: 30px;
    height: 30px;
    background: url(${Check}) center center no-repeat;
    background-size: 14px;
    background-color: #fee040;
    border-radius: 50%;
    opacity: 1;
  }
`;
