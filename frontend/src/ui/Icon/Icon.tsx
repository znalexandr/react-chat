import React from 'react';
import styled from '@emotion/styled';

import * as icons from './icons';
import * as T from './Icon.types';

const StyledIcon = styled.span<T.StyleProps>`
  fill: ${(p) => p.color || 'currentColor'};
  fill-rule: nonzero;
  display: inline-block;
  line-height: 0;
  cursor: ${(p) => (p.pointer || p.hoverColor ? 'pointer' : 'inherit')};

  ${(p) => p.hoverColor && ` &:hover { fill: ${p.hoverColor}; } `};
`;

export function Icon(props: T.Props) {
  const { icon, width, height, ...other } = props;

  const size = width || height;
  const localWidth = typeof width === 'number' ? `${width || size}px` : width;
  const localHeight =
    typeof width === 'number' ? `${height || size}px` : height;
  const CurrentIcon = typeof icon === 'string' ? icons[icon] : icon;

  return (
    <StyledIcon {...other}>
      <CurrentIcon width={localWidth} height={localHeight} />
    </StyledIcon>
  );
}
