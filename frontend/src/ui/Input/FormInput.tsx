import React from 'react';
import { Field } from 'react-final-form';

import { Input, InputProps, FormErrorText } from '@/ui';

import * as S from './Input.styles';

type Props = {
  name: string;
} & InputProps;

export function FormInput(props: Props) {
  const { name, ...inputProps } = props;
  return (
    <Field name={name}>
      {({ input, meta: { error, submitError, touched } }) => {
        const isValid = !(touched && error) && !submitError;
        const errorText = isValid ? null : submitError || error;

        return (
          <S.InputWrapper>
            <Input {...input} {...inputProps} isValid={isValid} />
            {errorText && <FormErrorText>{errorText}</FormErrorText>}
          </S.InputWrapper>
        );
      }}
    </Field>
  );
}
