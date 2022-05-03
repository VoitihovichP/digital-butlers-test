import React, { FC } from 'react';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

import MailIcon from '../../assets/icons/mail-icon.svg';
import PhoneIcon from '../../assets/icons/phone-icon.svg';

import * as S from './styled';

const Header: FC = () => {
  return (
    <S.HeaderWrapper>
      <S.MenuAndLogo>
        <BurgerMenu />
        <S.LogoLink href="#" />
      </S.MenuAndLogo>
      <S.ContactsWrapper>
        <div>
          <S.MailDescr>Пишите нам на email</S.MailDescr>
          <S.MailIcon src={MailIcon} alt="mail-icom" />
          <S.MailLink href="mailto:info@diagnistics.by">info@diagnistics.by</S.MailLink>
        </div>
        <S.PhoneWrapper>
          <S.PhoneIcon src={PhoneIcon} alt="phone-icon" />
          <S.PhoneDescr>Есть вопросы? Звоните!</S.PhoneDescr>
          <S.PhoneLink href="tel:+375294564545">+375 (29) 456-45-45</S.PhoneLink>
        </S.PhoneWrapper>
      </S.ContactsWrapper>
    </S.HeaderWrapper>
  );
};
export default Header;
