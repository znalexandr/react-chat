import React from 'react';
import { Form } from 'react-final-form';

import { FormInput, Button, List } from '@/ui';

import * as S from './GuestPage.styles';

type Props = {
  goToSingin: () => void;
};

type FormValue = {
  login: string;
  password: string;
  passwordverify: string;
};

type FormErrors = Partial<FormValue>;

export function SingupForm(props: Props) {
  const { goToSingin } = props;

  return (
    <S.ContentCentered>
      <S.Header>Регистрация</S.Header>
      <S.Description>
        Для того чтобы войти, вам нужно зарегистрироваться
      </S.Description>
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

            if (!values.passwordverify) {
              errors.passwordverify = 'Обязательное поле';
            }

            if (values.password !== values.passwordverify) {
              errors.passwordverify = 'Пароли должны совпадать';
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
                  <FormInput
                    name="passwordverify"
                    placeholder="Подтвердите пароль"
                    type="password"
                  />
                  <Button text="Зарегистрироваться" fullWidth />
                  <S.Link onClick={goToSingin}>Авторизоваться</S.Link>
                </List>
              </form>
            );
          }}
        />
      </S.FormWrapper>
    </S.ContentCentered>
  );
}
