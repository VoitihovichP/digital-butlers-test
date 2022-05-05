import React, { FC } from 'react';
import StepBoard from '../../components/StepBoard/StepBoard';
import * as S from './styled';
import CommentAvatar from '../../assets/images/step-one-comment-img.png';

const StepOneSection: FC = () => {
  return (
    <S.StepOneBlock>
      <S.StepOneTitle>Мы работаем в комплексе</S.StepOneTitle>
      <S.StepOneSubtitle>
        чтобы Вы не тратили время на поиск и организацию множества подрядчиков
      </S.StepOneSubtitle>
      <S.MainInfo>
        <S.StepSlider></S.StepSlider>
        <S.StepDescrWrapper>
          <S.StepDescrHead>
            <StepBoard stepNum={1} />
            <S.StepDescrTitle>Подготовительные работы</S.StepDescrTitle>
          </S.StepDescrHead>
          <S.StepDescrText>
            Мы осматриваем здание, делаем замеры и проверяем наличие визуально заметных дефектов:
            трещин, коррозии, повреждения фундамента и т.д.
          </S.StepDescrText>
          <S.CommentWrapper>
            <S.AvatarBox>
              <S.UserAvatar src={CommentAvatar} alt="user-photo" />
            </S.AvatarBox>
            <div>
              <S.CommentText>
                “Задача этого этапа получить максимально полное представление о конструкции здания,
                условиях его эксплуатации и возможных слабых местах“
              </S.CommentText>
              <S.UserName>Алексей, обследователь и главный инженер проектов</S.UserName>
            </div>
          </S.CommentWrapper>
        </S.StepDescrWrapper>
      </S.MainInfo>
    </S.StepOneBlock>
  );
};

export default StepOneSection;
