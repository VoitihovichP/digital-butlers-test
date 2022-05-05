import React, { FC } from 'react';
import MainButton from '../../components/MainButton/MainButton';
import * as S from './styled';
import Header from '../../components/Header/Header';

import DownloadIcon from '../../assets/icons/download-icon.svg';
import FirstPlusIcon from '../../assets/icons/firstNumIcon.svg';
import SecondPlusIcon from '../../assets/icons/secondNumIcon.svg';
import TherdPlusIcon from '../../assets/icons/therdNumIcon.svg';

import { WelcomeText } from '../../types/enums';
import CompanyPlus from '../../components/CompanyPlus/CompanyPlus';

const WelcomeSection: FC = () => {
  return (
    <S.WelocmeBlock>
      <Header />
      <S.WelcomeWrapper>
        <S.MainContent>
          <S.WelocmeTextWrapper>
            <S.WelcomeTitle>{WelcomeText.TITLE}</S.WelcomeTitle>
            <S.WelcomeDecr>{WelcomeText.MAIN_DESCR}</S.WelcomeDecr>
          </S.WelocmeTextWrapper>
          <S.ConectionWrapper>
            <MainButton img={DownloadIcon} text={WelcomeText.CONECTION_BTN_TEXT} />
            <S.ConectionDescr>{WelcomeText.CONECTION_DESCR}</S.ConectionDescr>
          </S.ConectionWrapper>
        </S.MainContent>
        <S.AdditionalInfo>
          <S.PlusWrapper>
            <CompanyPlus icon={FirstPlusIcon} descr={WelcomeText.FIRST_PLUS} />
            <CompanyPlus icon={SecondPlusIcon} descr={WelcomeText.SECOND_PLUS} />
            <CompanyPlus icon={TherdPlusIcon} descr={WelcomeText.THERD_PLUS} />
          </S.PlusWrapper>
          <S.VideoBtn href="#"></S.VideoBtn>
        </S.AdditionalInfo>
      </S.WelcomeWrapper>
    </S.WelocmeBlock>
  );
};

export default WelcomeSection;
