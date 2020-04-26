import React, { useRef, useEffect } from 'react';

import { List, Message, MessageProps } from '@/ui';

import * as S from './Messages.styles';

type Props = {
  messages: MessageProps[];
};

export function Messages(props: Props) {
  const { messages } = props;

  const messagesContainerEl = useRef<HTMLDivElement>();
  const scrollContainerEl = useRef<HTMLDivElement>();

  useEffect(() => {
    if (!messagesContainerEl.current || !scrollContainerEl.current) return;

    const height = messagesContainerEl.current.clientHeight;

    scrollContainerEl.current.scrollTo(0, height);
    console.log(height);
  }, []);

  return (
    <S.Messages ref={scrollContainerEl}>
      <List gap="40px" ref={messagesContainerEl}>
        {messages.map((item, i) => (
          <Message key={item.date.toDateString() + i} {...item} />
        ))}
      </List>
    </S.Messages>
  );
}
