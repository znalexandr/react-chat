import React from 'react';

import { Time } from '@/services';

import * as S from './Message.styles';

export type MessageProps = {
  user: {
    id: string;
    name: string;
    avatar?: string;
  };
  date: Date;
  text?: string;
  audioUrl?: string;
  isReaded?: boolean;
  isOwner?: boolean;
};

export function Message(props: MessageProps) {
  const {
    text,
    user = {
      id: 'unknow_id',
      name: 'Unknow'
    },
    date
  } = props;

  const time = Time.getDistanceInWordsNow(date);

  return (
    <S.Message>
      <S.MessageBox>
        <S.Avatar id={user.id} name={user.name} size="s" />
        <div>
          <S.Babel>{text}</S.Babel>
          <S.Time>{time}</S.Time>
        </div>
      </S.MessageBox>
    </S.Message>
  );
}
