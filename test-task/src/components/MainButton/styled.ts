import styled from 'styled-components';

type MainBtnProps = {
  img: string;
  isBig: boolean;
};

export const Button = styled.button<MainBtnProps>`
  padding: ${(props) => (props.isBig ? '29px 50px 26px 76px' : '29px 57px 26px 82px')};
  min-width: 340px;
  background-color: #fee040;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-position: 58px;
  border: none;
  border-radius: 2px;
  font-family: 'Gilroy';
  font-weight: 800;
  font-size: 12px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #000000;
  cursor: pointer;
  transition: 0.3s all;
  :hover {
    transform: scale(1.1);
    background-color: #c0ab39;
  }
`;
