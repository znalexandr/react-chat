import { MessageProps } from './Message';

export const example: MessageProps = {
  user: {
    id: 'w2kmsko31wdsa',
    name: 'Sam'
  },
  text:
    'Каждый работает сам по себе, и когда надо отправляет данные другому. Отправил — и пошел дальше, ничего ждать не надо',
  date: new Date('02.02.2020 20:00')
};

export const example2: MessageProps = {
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

export const voice: MessageProps = {
  ...example,
  text: undefined,
  voiceSrc:
    'https://ru.kachevo.org/get/music/20180512/musicbossorg_Joji_-_Yeah_Right_55933099.mp3'
};
