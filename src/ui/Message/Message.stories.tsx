import React from 'react';

import { Message, MessageProps } from './Message';

export default {
  title: 'Design System/Molecules/Message'
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

export const Basic = () => (
  <>
    <h2>Base usage</h2>
    <Message {...example} />
  </>
);
