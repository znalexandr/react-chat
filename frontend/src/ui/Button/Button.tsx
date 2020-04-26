import React, { ReactNode, SyntheticEvent } from 'react';

import * as S from './Button.styles';

type Props = {
  text: ReactNode;
  onClick?: (value: SyntheticEvent) => void;
  type?: 'button' | 'reset' | 'submit';
  fullWidth?: boolean;
  className?: string;
};

export function Button(props: Props) {
  const { text, onClick, type, fullWidth, className } = props;

  return (
    <S.Button
      onClick={onClick}
      type={type}
      fullWidth={fullWidth}
      className={className}
    >
      {text}
    </S.Button>
  );
}
