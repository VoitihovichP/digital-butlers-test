import React, { FC } from 'react';
import * as S from './styled';

const BurgerMenu: FC = () => {
  return (
    <S.BurgerWrapper>
      <span></span>
      <S.SecondLineWrapper>
        <span></span>
        <span></span>
      </S.SecondLineWrapper>
      <span></span>
    </S.BurgerWrapper>
  );
};

export default BurgerMenu;
