import React from 'react';

import { Time } from '@/services';

import { AttachmentsItem, Babel, Voice, Icon } from '..';

import * as S from './Message.styles';

export type MessageProps = {
  user: {
    id: string;
    name: string;
    avatar?: string;
  };
  date: Date;
  text?: string;
  voiceSrc?: string;
  isRead?: boolean;
  isOwner?: boolean;
  attachment?: AttachmentsItem[];
};

export function Message(props: MessageProps) {
  const {
    text,
    user = {
      id: 'unknow_id',
      name: 'Unknow',
    },
    date,
    attachment,
    isRead,
    isOwner,
    voiceSrc,
  } = props;

  const time = Time.getDistanceInWordsNow(date);

  return (
    <S.Message>
      <S.MessageBox isOwner={isOwner}>
        <S.Avatar id={user.id} name={user.name} size="s" />
        <S.MessageContent>
          {(text || voiceSrc) && (
            <Babel isOwner={isOwner}>
              {!voiceSrc && text}
              {voiceSrc && <Voice src={voiceSrc} isOwner={isOwner} />}
            </Babel>
          )}
          {attachment && <S.Attachments data={attachment} />}
          <S.Time>{time}</S.Time>
          {isOwner && (
            <S.IconWrapper>
              {isRead ? (
                <Icon icon="read" width="15px" height="10px" />
              ) : (
                <Icon icon="send" width="11px" height="9px" />
              )}
            </S.IconWrapper>
          )}
        </S.MessageContent>
      </S.MessageBox>
    </S.Message>
  );
}
