import React from 'react';

import { HeaderPanel } from './HeaderPanel';
import { Messages } from './Messages';
import { ControlPanel } from './ControlPanel';
import * as M from './Chat.mocks';
import * as S from './Chat.styles';

export function Chat() {
  return (
    <S.Chat>
      <HeaderPanel />
      <Messages messages={M.messages} />
      <ControlPanel />
    </S.Chat>
  );
}
