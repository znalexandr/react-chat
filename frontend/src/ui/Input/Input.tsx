import React, { ChangeEvent } from 'react';

import * as S from './Input.styles';

export type InputProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

export function Input(props: InputProps) {
  const { value, onChange, placeholder } = props;

  function changeHandler(event: ChangeEvent<HTMLInputElement>) {
    onChange(event.target.value);
  }

  return (
    <S.Input value={value} onChange={changeHandler} placeholder={placeholder} />
  );
}
