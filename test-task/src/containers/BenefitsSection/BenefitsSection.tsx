import React, { FC } from 'react';
import * as S from './styled';
import BenefitsImg from '../../assets/images/benefits-image.png';
import List from '../../components/List/List';
import { GuaranteesArr } from '../../constants/arrays';

const BenefitsSection: FC = () => {
  return (
    <S.BenefitsBlock>
      <S.BenefitsWrapper>
        <S.BenefitsTitle>
          Мы работаем быстро и наши отчеты проходят согласование с первого раза
        </S.BenefitsTitle>
        <S.BenefitsDescr>
          Над вашим объектом работает целая команда: 3 ГИПа (главных инженеров проектов) с опытом
          работы от 6 лет и 2 штатных сотрудника для камеральных работ
        </S.BenefitsDescr>
      </S.BenefitsWrapper>
      <S.BenefitsImage src={BenefitsImg} alt="" />
      <div>
        <S.GuaranteesTitle>Вы и Ваши архитекторы получаете:</S.GuaranteesTitle>
        <List items={GuaranteesArr} />
      </div>
    </S.BenefitsBlock>
  );
};

export default BenefitsSection;
