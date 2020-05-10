import React from 'react';

import { Time } from '@/services';

import { Avatar, Online, Icon } from '..';

import * as S from './DialogCard.styles';

export type DialogCardProps = {
  message: string;
  countMessages?: number;
  lastMessageDate: string;
  isRead?: boolean;
  isOwner?: boolean;
  user: {
    id: string;
    name: string;
    isOnline: boolean;
  };
};

export function DialogCard(props: DialogCardProps) {
  const {
    user,
    message,
    lastMessageDate,
    isOwner,
    isRead,
    countMessages,
  } = props;

  const readIcon = isRead ? (
    <Icon icon="read" width="15px" height="10px" />
  ) : (
    <Icon icon="send" width="11px" height="9px" />
  );
  const renderDate = Time.getDialogsTime(new Date(lastMessageDate));
  const renderMessage = isOwner ? `Вы: ${message}` : message;
  const renderStatus = isOwner ? readIcon : <S.Count>{countMessages}</S.Count>;

  const isShowStatus = isOwner || !!countMessages;

  return (
    <S.DialogCard>
      <S.AvatarWrapper>
        <Avatar id={user.id} name={user.name} />
        {user.isOnline && <Online isOnline />}
      </S.AvatarWrapper>
      <div>
        <S.Header>
          <S.Username>{user.name}</S.Username>
          <S.Date>{renderDate}</S.Date>
        </S.Header>
        <S.Main>
          <S.Message title={message}>{renderMessage}</S.Message>
          {isShowStatus && <S.Status>{renderStatus}</S.Status>}
        </S.Main>
      </div>
    </S.DialogCard>
  );
}
