import styled from 'styled-components';
import ServicesBg from '../../assets/images/services-bg.jpg';

type ScrollProgressProps = {
  progress: number;
};

export const ServicesBlcok = styled.section`
  padding-top: 100px;
  min-height: 753px;
  background: url(${ServicesBg}) center center/cover no-repeat;
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
  /* letter-spacing: -0.5px; */
  text-align: center;
  color: #ffffff;
`;

export const Scroll = styled.div`
  margin-top: 49px;
  width: 100%;
`;

export const ScrollTrack = styled.div`
  position: relative;
  display: flex;
  gap: 80px;
  overflow: hidden;
  scroll-behavior: smooth;
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
