import React from 'react';
import { Form } from 'react-final-form';

import * as S from './ControlPanel.styles';

type Props = {};

export function ControlPanel(props: Props) {
  return (
    <S.ControlPanel>
      <Form
        onSubmit={() => {}}
        subscription={{ pristine: true }}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <S.GroupControl name="groupControl">
              <S.Input name="message" placeholder="Напишите сообщение..." />
              <S.Button text="Отправить" />
            </S.GroupControl>
          </form>
        )}
      />
    </S.ControlPanel>
  );
}
