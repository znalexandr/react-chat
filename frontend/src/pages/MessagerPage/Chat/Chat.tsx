import React from 'react';

import { List, Message } from '@/ui';
import { messages } from './Chat.mocks';
import * as S from './Chat.styles';

type ChatProps = {};

export function Chat(props: ChatProps) {
  return (
    <S.Chat>
      <S.Header>Header</S.Header>
      <S.Main>
        <List gap="40px">
          {messages.map((item) => (
            <Message key={item.date.toDateString()} {...item} />
          ))}
        </List>
      </S.Main>
      <S.Footer>Footer</S.Footer>
    </S.Chat>
  );
}
