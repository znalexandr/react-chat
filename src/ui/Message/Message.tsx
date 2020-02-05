import React from 'react';

import { Time } from '@/services';

import { AttachmentsItem } from '..';

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
  attachment?: AttachmentsItem[];
};

export function Message(props: MessageProps) {
  const {
    text,
    user = {
      id: 'unknow_id',
      name: 'Unknow'
    },
    date,
    attachment
  } = props;

  const time = Time.getDistanceInWordsNow(date);

  return (
    <S.Message>
      <S.MessageBox>
        <S.Avatar id={user.id} name={user.name} size="s" />
        <div>
          <S.Babel>{text}</S.Babel>
          {attachment && <S.Attachments data={attachment} />}
          <S.Time>{time}</S.Time>
        </div>
      </S.MessageBox>
    </S.Message>
  );
}
