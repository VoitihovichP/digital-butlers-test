import React, { FC } from 'react';
import * as S from './styled';

type StepBoardProps = {
  stepNum: number;
};

const StepBoard: FC<StepBoardProps> = ({ stepNum }) => {
  return (
    <S.StepBoardBlock>
      <S.StepText>Шаг №{stepNum}</S.StepText>
    </S.StepBoardBlock>
  );
};

export default StepBoard;
