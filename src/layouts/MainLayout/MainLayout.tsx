import React, { ReactNode } from 'react';

import { version } from '../../../package.json';

import * as S from './MainLayout.styles';

type MainLayoutProps = {
  children: ReactNode;
};

export function MainLayout(props: MainLayoutProps) {
  const { children } = props;

  return (
    <S.MainLayout>
      <main>
        <S.Container>{children}</S.Container>
      </main>
      <S.Footer>
        <S.Version>Version: {version}</S.Version>
      </S.Footer>
    </S.MainLayout>
  );
}
