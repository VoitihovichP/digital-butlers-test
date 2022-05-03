import React, { FC } from 'react';
import * as S from './styled';

type ListProps = {
  items: Array<string>;
};

const List: FC<ListProps> = ({ items }) => {
  return (
    <S.ListWrap>
      {items.map((item: string, index: number) => (
        <S.ListItem key={`${index}${index++}`}>{item}</S.ListItem>
      ))}
    </S.ListWrap>
  );
};

export default List;
