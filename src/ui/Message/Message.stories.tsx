import React from 'react';
import styled from '@emotion/styled';

import { Message, MessageProps } from './Message';

const Messages = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-row-gap: 20px;
`;

export default {
  title: 'Molecules/Message'
};

const example: MessageProps = {
  user: {
    id: 'w2kmsko31wdsa',
    name: 'Sam'
  },
  text:
    'Каждый работает сам по себе, и когда надо отправляет данные другому. Отправил — и пошел дальше, ничего ждать не надо',
  date: new Date('02.02.2020 20:00')
};

const example2: MessageProps = {
  ...example,
  attachment: [
    {
      type: 'img',
      url: 'https://picsum.photos/id/1060/536/354?blur=2'
    },
    {
      type: 'img',
      url: 'https://picsum.photos/id/1084/536/354?grayscale'
    },
    {
      type: 'file',
      exp: 'jpg',
      url: 'https://picsum.photos/id/1084/536/354?grayscale'
    },
    {
      type: 'file',
      exp: 'jpg',
      url: 'https://picsum.photos/id/1084/536/354?grayscale'
    }
  ]
};

export const Basic = () => (
  <>
    <h2>Base usage</h2>
    <Message {...example} />
  </>
);
export const Attachment = () => (
  <>
    <h2>Example text with images</h2>
    <Message {...example2} />
  </>
);

Attachment.story = {
  name: 'Text with images'
};

export const Read = () => (
  <>
    <h2>Message is read</h2>
    <Messages>
      <Message {...example} isRead />
      <Message {...example} />
    </Messages>
  </>
);

Read.story = {
  name: 'isRead'
};

export const Owner = () => (
  <>
    <h2>Message is owner</h2>
    <Messages>
      <Message {...example} isRead />
      <Message {...example} isRead isOwner />
      <Message {...example2} isRead />
      <Message {...example2} isOwner isRead />
      <Message {...example} isOwner />
    </Messages>
  </>
);

Owner.story = {
  name: 'isOwner'
};
