import React, { ReactNode } from 'react';

import * as S from './styles';

type MainLayoutProps = {
  children: ReactNode;
};

export function MainLayout(props: MainLayoutProps) {
  const { children } = props;

  return (
    <S.MainLayout>
      <S.Container>{children}</S.Container>
    </S.MainLayout>
  );
}
