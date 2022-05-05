import styled from 'styled-components';
import ServicesBg from '../../assets/images/services-bg.jpg';

type ScrollProgressProps = {
  progress: number;
};

export const ServicesBlcok = styled.section`
  padding-top: 100px;
  min-height: 753px;
  background: url(${ServicesBg}) center center/cover no-repeat;
  @media (max-width: 1770px) {
    padding-top: 70px;
  }
  @media (max-width: 1300px) {
    padding-top: 28px;
    min-height: 685px;
  }
`;

export const ServicesTitle = styled.h3`
  font-family: 'Bebas Neue';
  font-weight: 700;
  font-size: 20px;
  letter-spacing: 20px;
  text-align: center;
  text-transform: uppercase;
  color: #fee040;
`;

export const ServicesSubTitle = styled.p`
  margin-top: 20px;
  font-family: 'Gilroy';
  font-weight: 800;
  font-size: 32px;
  text-align: center;
  color: #ffffff;
  @media (max-width: 1300px) {
    font-size: 28px;
  }
  @media (max-width: 1200px) {
    font-size: 24px;
  }
  @media (max-width: 767px) {
    font-size: 22px;
  }
  @media (max-width: 575px) {
    font-size: 19px;
  }
`;

export const Scroll = styled.div`
  margin-top: 49px;
  width: 100%;
  @media (max-width: 1200px) {
    margin-top: 0;
  }
`;

export const ScrollTrack = styled.div`
  position: relative;
  display: flex;
  gap: 80px;
  overflow: hidden;
  scroll-behavior: smooth;
  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ScrollEmptyDiv = styled.div`
  min-width: 175px;
`;

export const ScrollProgress = styled.div<ScrollProgressProps>`
  margin-top: 56px;
  width: ${(props) => props.progress}%;
  height: 4px;
  background: linear-gradient(-2deg, #fee040, transparent);
`;
