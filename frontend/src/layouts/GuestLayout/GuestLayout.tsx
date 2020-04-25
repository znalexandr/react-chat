import React, { ReactNode } from 'react';

import { version } from '../../../package.json';

import * as S from './styles';

type GuestLayoutProps = {
  children: ReactNode;
};

export function GuestLayout(props: GuestLayoutProps) {
  const { children } = props;

  return (
    <S.GuestLayout>
      <S.Main>
        <S.Container>{children}</S.Container>
      </S.Main>
      <S.Footer>
        <S.Version>RMessager version: {version}</S.Version>
      </S.Footer>
    </S.GuestLayout>
  );
}
