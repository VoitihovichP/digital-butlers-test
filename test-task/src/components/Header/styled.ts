import styled from 'styled-components';

import Logo from '../../assets/icons/main-logo.svg';

export const HeaderWrapper = styled.header`
  padding: 17px 250px;
  display: flex;
  justify-content: space-between;
  min-height: 80px;
  @media (max-width: 1770px) {
    padding: 15px 180px;
  }
  @media (max-width: 1440px) {
    padding: 15px 140px;
  }
  @media (max-width: 1300px) {
    padding: 15px 60px;
  }
  @media (max-width: 1200px) {
    padding: 10px 24px;
  }
  @media (max-width: 1023px) {
    padding: 8px 10px;
    min-height: 52px;
  }
`;

export const MenuAndLogo = styled.div`
  padding: 8px 0px 6px 0px;
  display: flex;
  align-items: center;
  gap: 80px;
  @media (max-width: 1200px) {
    padding: 0;
  }
  @media (max-width: 1023px) {
    gap: 30px;
    align-items: flex-start;
  }
  @media (max-width: 767px) {
    gap: 15px;
  }
  @media (max-width: 575px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

export const LogoLink = styled.a`
  width: 197px;
  height: 30px;
  background: url(${Logo}) center center/cover no-repeat;
  @media (max-width: 767px) {
    width: 145px;
    height: 22px;
  }
`;

export const ContactsWrapper = styled.div`
  display: flex;
  gap: 141px;
  @media (max-width: 1023px) {
    gap: 40px;
  }
  @media (max-width: 767px) {
    gap: 20px;
  }
  @media (max-width: 575px) {
    flex-direction: column;
  }
`;

export const MailDescr = styled.p`
  margin-bottom: 6px;
  font-family: 'Proxima Nova';
  font-weight: 600;
  font-size: 12px;
  letter-spacing: -0.5px;
  color: #ffffff;
  opacity: 0.5;
  @media (max-width: 1023px) {
    margin-bottom: 1px;
  }
  @media (max-width: 767px) {
    margin-bottom: 0;
  }
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
  @media (max-width: 1023px) {
    left: 13%;
  }
  @media (max-width: 767px) {
    left: -4%;
  }
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
  @media (max-width: 1023px) {
    margin-bottom: 1px;
  }
  @media (max-width: 767px) {
    margin-bottom: 0;
  }
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
  @media (max-width: 1023px) {
    font-size: 17px;
  }
  @media (max-width: 767px) {
    font-size: 14px;
  }
`;
