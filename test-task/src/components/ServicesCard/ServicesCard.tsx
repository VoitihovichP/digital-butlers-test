import React, { FC } from 'react';
import * as S from './styled';

type ServicesCardProps = {
  img: string;
  title: string;
  descr: string;
};

const ServicesCard: FC<ServicesCardProps> = ({ img, title, descr }) => {
  return (
    <S.CardWrapper>
      <img src={img} alt="service-icon" />
      <S.CardTitle>{title}</S.CardTitle>
      <S.CardDescr>{descr}</S.CardDescr>
      <S.CardBtn>Подробнее</S.CardBtn>
    </S.CardWrapper>
  );
};
export default ServicesCard;
