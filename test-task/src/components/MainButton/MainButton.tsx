import React, { FC } from 'react';
import { WelcomeText } from '../../types/enums';
import * as S from './styled';

type MainButtonProps = {
  img: string;
  text: string;
};

const MainButton: FC<MainButtonProps> = ({ img, text }) => {
  const isBigBtn = (): boolean => {
    let isBig: boolean;

    if (text === WelcomeText.CONECTION_BTN_TEXT) {
      isBig = false;
    } else {
      isBig = true;
    }
    return isBig;
  };

  return (
    <S.Button img={img} isBig={isBigBtn()}>
      {text}
    </S.Button>
  );
};

export default MainButton;
