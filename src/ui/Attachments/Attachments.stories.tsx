import React from 'react';

import { Attachments, AttachmentsItem } from '.';

export default {
  title: 'Design System/Molecules/Attachments'
};

const data: AttachmentsItem[] = [
  {
    type: 'img',
    url: 'https://picsum.photos/id/870/536/354?grayscale&blur=2'
  },
  {
    type: 'img',
    url: 'https://picsum.photos/id/870/536/354?grayscale&blur=2'
  },
  {
    type: 'file',
    exp: 'jpg',
    url: 'https://picsum.photos/id/870/536/354?grayscale&blur=2'
  },
  {
    type: 'file',
    exp: 'jpg',
    url: 'https://picsum.photos/id/870/536/354?grayscale&blur=2'
  }
];

export const Basic = () => <Attachments data={data} />;
