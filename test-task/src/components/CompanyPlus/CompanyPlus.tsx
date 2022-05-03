import React, { FC } from 'react';
import * as S from './styled';

type CompanyPlusProps = {
  icon: string;
  descr: string;
};

const CompanyPlus: FC<CompanyPlusProps> = ({ icon, descr }) => {
  return (
    <S.PlusCardWrapper>
      <img src={icon} alt="" />
      <S.PlusCardDescr>{descr}</S.PlusCardDescr>
    </S.PlusCardWrapper>
  );
};

export default CompanyPlus;
