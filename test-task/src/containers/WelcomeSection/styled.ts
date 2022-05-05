import styled from 'styled-components';

import WelocomeBg from '../../assets/images/welcome-bg.jpg';
import VideoBtnBg from '../../assets/images/video-btn-bg.png';

export const WelocmeBlock = styled.section`
  min-height: 768px;
  background: url(${WelocomeBg}) center center/cover no-repeat;
  @media (max-width: 1440px) {
    min-height: 700px;
  }
  @media (max-width: 1300px) {
    min-height: 635px;
  }
  @media (max-width: 1200px) {
    min-height: 490px;
  }
`;

export const WelcomeWrapper = styled.div`
  padding: 128px 250px 60px 250px;
  @media (max-width: 1770px) {
    padding: 128px 180px 60px 180px;
  }
  @media (max-width: 1440px) {
    padding: 115px 140px 60px 140px;
  }
  @media (max-width: 1300px) {
    padding: 60px;
  }
  @media (max-width: 1200px) {
    padding: 24px;
  }
  @media (max-width: 1023px) {
    padding: 20px 10px;
  }
`;

export const MainContent = styled.div`
  padding: 0 120px;
  display: flex;
  gap: 260px;
  @media (max-width: 1770px) {
    padding: 0px 50px;
  }
  @media (max-width: 1300px) {
    gap: 210px;
  }
  @media (max-width: 1200px) {
    padding: 0px;
    gap: 165px;
  }
  @media (max-width: 1023px) {
    flex-direction: column;
    align-items: center;
    gap: 50px;
  }
`;

export const WelocmeTextWrapper = styled.div`
  max-width: 580px;
  @media (max-width: 1023px) {
    max-width: 100%;
    text-align: center;
  }
`;

export const WelcomeTitle = styled.h1`
  font-family: 'Gilroy';
  font-weight: 800;
  font-size: 42px;
  color: #ffffff;
  @media (max-width: 1440px) {
    font-size: 39px;
  }
  @media (max-width: 1300px) {
    font-size: 35px;
  }
  @media (max-width: 1200px) {
    font-size: 30px;
  }
  @media (max-width: 767px) {
    font-size: 27px;
  }
`;

export const WelcomeDecr = styled.p`
  margin-top: 38px;
  max-width: 363px;
  font-family: 'Proxima Nova';
  font-weight: 600;
  font-size: 20px;
  color: #ffffff;
  opacity: 0.7;
  @media (max-width: 1770px) {
    margin-top: 20px;
  }
  @media (max-width: 1300px) {
    font-size: 18px;
  }
  @media (max-width: 1023px) {
    max-width: 100%;
    margin-top: 7px;
  }
  @media (max-width: 767px) {
    font-size: 15px;
  }
`;

export const ConectionDescr = styled.p`
  margin-top: 40px;
  max-width: 340px;
  font-family: 'Proxima Nova';
  font-weight: 400;
  font-size: 15px;
  color: #ffffff;
  @media (max-width: 1200px) {
    margin-top: 22px;
  }
  @media (max-width: 1023px) {
    margin-top: 0;
  }
  @media (max-width: 767px) {
    margin-top: 20px;
  }
  @media (max-width: 575px) {
    text-align: center;
  }
`;

export const ConectionWrapper = styled.div`
  padding-top: 12px;
  @media (max-width: 1023px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  @media (max-width: 767px) {
    flex-direction: column;
    max-width: 320px;
  }
  @media (max-width: 575) {
    max-width: 300px;
  }
`;

export const PlusWrapper = styled.div`
  display: flex;
  gap: 100px;
  @media (max-width: 1770px) {
    gap: 50px;
  }
  @media (max-width: 1300px) {
    gap: 20px;
  }
  @media (max-width: 1200px) {
    gap: 10px;
  }
  @media (max-width: 1023px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const AdditionalInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 63px;
  @media (max-width: 575px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;

export const VideoBtn = styled.a`
  width: 220px;
  height: 220px;
  background: url(${VideoBtnBg}) center center/cover no-repeat;
  transition: 0.3s all;
  :hover {
    transform: scale(1.1);
  }
  @media (max-width: 1770px) {
    width: 163px;
    height: 160px;
  }
  @media (max-width: 1200px) {
    width: 158px;
    height: 143px;
  }
  @media (max-width: 1023px) {
    width: 144px;
  }
`;
