import React from 'react';

import { DialogCardProps } from '@/ui';

import { Chat } from './Chat';
import { Dialogs } from './Dialogs';
import * as S from './MessagerPage.styles';

export default function MessagerPage() {
  return (
    <S.MessagerPage>
      <Dialogs list={[]} />
      <Chat />
    </S.MessagerPage>
  );
}
