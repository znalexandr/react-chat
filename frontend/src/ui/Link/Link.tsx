import React, { ReactNode } from 'react';

import * as S from './Link.styles';

type Props = {
  to?: string;
  href?: string;
  className?: string;
  children: ReactNode;
};

export function Link(props: Props) {
  const { to, children, className, href } = props;

  return href ? (
    <S.ExternalLink href={href} className={className}>
      {children}
    </S.ExternalLink>
  ) : (
    <S.RouterLink to={to} className={className}>
      {children}
    </S.RouterLink>
  );
}
