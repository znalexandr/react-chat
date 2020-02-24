import React, { ReactNode } from 'react';
import { Portal } from 'react-portal';

import * as S from './LightBox.styles';

export type LightBoxProps = {
  children?: ReactNode;
  onClose?: () => void;
};

export function LightBox(props: LightBoxProps) {
  const { children, onClose } = props;

  return (
    <Portal>
      <S.LightBox>
        <S.Overlay onClick={onClose} />
        <S.Container>{children}</S.Container>
      </S.LightBox>
    </Portal>
  );
}
