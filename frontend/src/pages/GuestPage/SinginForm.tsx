import React from 'react';
import { Form } from 'react-final-form';

import { FormInput, Button, List } from '@/ui';

import * as S from './GuestPage.styles';

type Props = {
  goToSingup: () => void;
};

type FormValue = {
  login: string;
  password: string;
};

type FormErrors = Partial<FormValue>;

export function SinginForm(props: Props) {
  const { goToSingup } = props;

  return (
    <S.ContentCentered>
      <S.Header>Войти в аккаунт</S.Header>
      <S.Description>Пожалуйста войдите в свой аккаунт</S.Description>
      <S.FormWrapper>
        <Form
          onSubmit={(values: FormValue) => {}}
          validate={(values: FormValue) => {
            const errors: FormErrors = {};

            if (!values.login) {
              errors.login = 'Обязательное поле';
            }

            if (!values.password) {
              errors.password = 'Обязательное поле';
            }

            return errors;
          }}
          render={({ handleSubmit }) => {
            return (
              <form onSubmit={handleSubmit}>
                <List>
                  <FormInput name="login" placeholder="Логин" />
                  <FormInput
                    name="password"
                    placeholder="Пароль"
                    type="password"
                  />
                  <Button text="Войти" fullWidth />
                  <S.Link onClick={goToSingup}>Зарегистрироваться</S.Link>
                </List>
              </form>
            );
          }}
        />
      </S.FormWrapper>
    </S.ContentCentered>
  );
}
