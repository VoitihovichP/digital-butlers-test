import styled from 'styled-components';

import Logo from '../../assets/icons/main-logo.svg';
import HeaderBg from '../../assets/images/header-bg.jpg';

export const HeaderWrapper = styled.header`
  padding: 17px 250px;
  display: flex;
  gap: 642px;
  width: 100vw;
  min-height: 80px;
  background: url(${HeaderBg}) center center/cover no-repeat;
`;

export const MenuAndLogo = styled.div`
  padding: 8px 0px 6px 0px;
  display: flex;
  align-items: center;
  gap: 80px;
`;

export const LogoLink = styled.a`
  width: 197px;
  height: 30px;
  background: url(${Logo}) center center/cover no-repeat;
`;

export const ContactsWrapper = styled.div`
  display: flex;
  gap: 141px;
`;

export const MailDescr = styled.p`
  margin-bottom: 6px;
  font-family: 'Proxima Nova';
  font-weight: 600;
  font-size: 12px;
  letter-spacing: -0.5px;
  color: #ffffff;
  opacity: 0.5;
`;

export const MailLink = styled.a`
  font-family: 'Proxima Nova';
  font-weight: 600;
  font-size: 14px;
  text-decoration: none;
  letter-spacing: -0.5px;
  color: #fee040;
  transition: 0.3s all;
  :hover {
    color: #c0ab39;
  }
`;

export const MailIcon = styled.img`
  margin-right: 10px;
`;
export const PhoneWrapper = styled.div`
  position: relative;
`;

export const PhoneIcon = styled.img`
  position: absolute;
  left: 24%;
  opacity: 0.5;
`;

export const PhoneDescr = styled.p`
  margin-bottom: 7px;
  font-family: 'Proxima Nova';
  font-weight: 600;
  font-size: 12px;
  text-align: right;
  letter-spacing: -0.5px;
  color: #ffffff;
  opacity: 0.5;
`;

export const PhoneLink = styled.a`
  font-family: 'Proxima Nova';
  font-weight: 700;
  font-size: 20px;
  text-align: right;
  text-decoration: none;
  color: #ffffff;
  transition: 0.3s all;
  :hover {
    color: #bab9b9;
  }
`;
