import React from 'react';

import * as S from './Avatar.styles';
import * as H from './Avatar.helpers';
import * as T from './Avatar.types';

export function Avatar(props: T.AvatarProps) {
  const { id, name, imageSrc, size, className } = props;

  if (!id || !name) {
    return <>Invalid data</>;
  }

  const { color, colorLighten } = H.getAvatarColors(id);
  const firstChar = name[0].toUpperCase();

  return (
    <S.Avatar
      className={className}
      color={color}
      colorLighten={colorLighten}
      size={size}
    >
      {imageSrc && <img src={imageSrc} alt={name} />}
      {!imageSrc && <S.Name>{firstChar}</S.Name>}
    </S.Avatar>
  );
}
