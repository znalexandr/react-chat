import React from 'react';

import { Chat } from './Chat';
import { Dialogs } from './Dialogs';
import * as S from './MessagerPage.styles';

export default function MessagerPage() {
  return (
    <S.MessagerPage>
      <Dialogs />
      <Chat />
    </S.MessagerPage>
  );
}
