import styled from 'styled-components';

export const BenefitsBlock = styled.section`
  padding: 32px 250px 12px 250px;
  display: flex;
  align-items: center;
  gap: 58px;
  min-height: 449px;
  background: #f5f5f5;
  @media (max-width: 1770px) {
    padding: 21px 180px 12px 180px;
    gap: 40px;
  }
  @media (max-width: 1440px) {
    padding: 21px 140px 12px 140px;
    gap: 30px;
  }
  @media (max-width: 1300px) {
    padding: 12px 60px;
    gap: 30px;
    min-height: 395px;
  }
  @media (max-width: 1200px) {
    padding: 12px 24px;
    flex-direction: column;
  }
  @media (max-width: 767px) {
    gap: 20px;
  }
`;

export const BenefitsWrapper = styled.div`
  max-width: 460px;
  @media (max-width: 1770px) {
    max-width: 430px;
  }
  @media (max-width: 1440px) {
    max-width: 390px;
  }
  @media (max-width: 1200px) {
    max-width: 500px;
    text-align: center;
  }
`;

export const BenefitsTitle = styled.h2`
  font-family: 'Gilroy';
  font-weight: 800;
  font-size: 32px;
  line-height: 42px;
  letter-spacing: -0.5px;
  color: #151515;
  @media (max-width: 1770px) {
    font-size: 30px;
  }
  @media (max-width: 1440px) {
    font-size: 28px;
  }
  @media (max-width: 767px) {
    font-size: 26px;
  }
  @media (max-width: 575px) {
    font-size: 18px;
  }
`;

export const BenefitsDescr = styled.p`
  margin-top: 50px;
  font-family: 'Proxima Nova';
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: -0.5px;
  color: #707070;
  opacity: 0.7;
  @media (max-width: 1770px) {
    margin-top: 30px;
  }
  @media (max-width: 1440px) {
    margin-top: 23px;
  }
  @media (max-width: 1300px) {
    margin-top: 18px;
    font-size: 16px;
  }
  @media (max-width: 767px) {
    margin-top: 5px;
    font-size: 15px;
  }
`;

export const BenefitsImage = styled.img`
  width: 384px;
  height: 365px;
  @media (max-width: 1440px) {
    width: 345px;
    height: 356px;
  }
  @media (max-width: 1300px) {
    width: 291px;
    height: 300px;
  }
  @media (max-width: 575px) {
    width: 231px;
    height: 240px;
  }
`;

export const GuaranteesTitle = styled.h3`
  margin-bottom: 28px;
  font-family: 'Proxima Nova';
  font-weight: 700;
  font-size: 24px;
  letter-spacing: -0.5px;
  color: #151515;
  @media (max-width: 1300px) {
    margin-bottom: 15px;
  }
  @media (max-width: 575px) {
    margin-bottom: 15px;
    font-size: 21px;
  }
`;
