import styled from 'styled-components';

export const BurgerWrapper = styled.div`
  position: relative;
  width: 40px;
  height: 22px;
  cursor: pointer;
  transition: 0.5s all;
  span {
    width: 100%;
    height: 2px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #ffffff;
    :first-child {
      top: calc(50% - 8px);
    }
    :last-child {
      top: calc(50% + 9px);
    }
  }
  :hover {
    transform: scale(1.1);
  }
`;

export const SecondLineWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 2px;
  span {
    width: 40%;
    height: 2px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    background-color: #fee040;
    transition: 0.5s all;
    :first-child {
      left: calc(50% - 12px);
      top: 50%;
    }
    :last-child {
      left: calc(50% + 12px);
      top: 50%;
    }
  }
`;
