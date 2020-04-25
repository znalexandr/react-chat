import React, { ReactNode, SyntheticEvent } from 'react';

import * as S from './Button.styles';

export type InputProps = {
  text: ReactNode;
  onClick: (value: SyntheticEvent) => void;
};

export function Button(props: InputProps) {
  const { text, onClick } = props;

  return <S.Button onClick={onClick}>{text}</S.Button>;
}
