import styled from 'styled-components';

import WelocomeBg from '../../assets/images/welcome-bg.jpg';
import VideoBtnBg from '../../assets/images/video-btn-bg.png';

export const WelocmeBlock = styled.section`
  min-height: 768px;
  background: url(${WelocomeBg}) center center/cover no-repeat;
`;

export const WelcomeWrapper = styled.div`
  padding: 128px 250px 60px 250px;
`;

export const MainContent = styled.div`
  padding: 0 120px;
  display: flex;
  gap: 260px;
`;

export const WelocmeTextWrapper = styled.div`
  max-width: 580px;
`;

export const WelcomeTitle = styled.h1`
  font-family: 'Gilroy';
  font-weight: 800;
  font-size: 42px;
  color: #ffffff;
`;

export const WelcomeDecr = styled.p`
  margin-top: 38px;
  max-width: 363px;
  font-family: 'Proxima Nova';
  font-weight: 600;
  font-size: 20px;
  color: #ffffff;
  opacity: 0.7;
`;

export const ConectionDescr = styled.p`
  margin-top: 40px;
  max-width: 340px;
  font-family: 'Proxima Nova';
  font-weight: 400;
  font-size: 15px;
  color: #ffffff;
`;

export const ConectionWrapper = styled.div`
  padding-top: 12px;
`;

export const PlusWrapper = styled.div`
  display: flex;
  gap: 100px;
`;

export const AdditionalInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 63px;
`;

export const VideoBtn = styled.a`
  width: 220px;
  height: 220px;
  background: url(${VideoBtnBg}) center center/cover no-repeat;
  transition: 0.3s all;
  :hover {
    transform: scale(1.1);
  }
`;
