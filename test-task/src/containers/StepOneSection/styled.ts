import styled from 'styled-components';

import SliderBg from '../../assets/images/photo-slider.jpg';

export const StepOneBlock = styled.section`
  padding-top: 104px;
  min-height: 801px;
`;

export const StepOneTitle = styled.h3`
  margin-bottom: 36px;
  font-family: 'Bebas Neue';
  font-weight: 700;
  font-size: 80px;
  text-align: center;
  letter-spacing: 5px;
  background: linear-gradient(180deg, #60b6ff 0%, rgba(0, 78, 134, 0.8) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

export const StepOneSubtitle = styled.p`
  margin: 0 auto;
  max-width: 503px;
  font-family: 'Gilroy';
  font-weight: 700;
  font-size: 20px;
  text-align: center;
  color: #505050;
`;

export const MainInfo = styled.div`
  display: flex;
  margin-top: 100px;
  height: 441px;
`;

export const StepSlider = styled.div`
  width: 50%;
  height: 100%;
  background: url(${SliderBg}) center center/cover no-repeat;
`;

export const StepDescrWrapper = styled.div`
  padding: 80px 0 80px 70px;
  width: 50%;
  height: 100%;
  background: #f5f5f5;
`;

export const StepDescrHead = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const StepDescrTitle = styled.h4`
  font-family: 'Proxima Nova';
  font-weight: 700;
  font-size: 24px;
  letter-spacing: -0.5px;
  color: #151515;
`;

export const StepDescrText = styled.p`
  margin-top: 18px;
  max-width: 460px;
  font-family: 'Proxima Nova';
  font-weight: 600;
  font-size: 18px;
  letter-spacing: -0.5px;
  color: #333333;
  opacity: 0.7;
`;

export const CommentWrapper = styled.div`
  display: flex;
  gap: 37px;
  margin-top: 32px;
`;

export const CommentText = styled.p`
  max-width: 380px;
  font-family: 'Proxima Nova';
  font-weight: 400;
  font-size: 16px;
  letter-spacing: -0.5px;
  color: #505050;
  opacity: 0.7;
`;

export const AvatarBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  background-color: #ffffff;
  border-radius: 50%;
  box-shadow: 0px 15px 40px rgba(0, 0, 0, 0.2);
`;

export const UserAvatar = styled.img`
  width: 56px;
  height: 56px;
`;

export const UserName = styled.p`
  margin-top: 21px;
  font-family: 'Proxima Nova';
  font-weight: 700;
  font-size: 16px;
  letter-spacing: -0.5px;
  text-transform: uppercase;
  color: #151515;
  opacity: 0.7;
`;
