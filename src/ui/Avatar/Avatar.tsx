import React from 'react';

import * as S from './Avatar.styles';
import * as H from './Avatar.helpers';

export type AvatarProps = {
  id: string;
  name: string;
  imageSrc?: string;
};

export function Avatar(props: AvatarProps) {
  const { id, name, imageSrc } = props;

  if (!id || !name) {
    return <>Invalid data</>;
  }

  const { color, colorLighten } = H.getAvatarColors(id);
  const firstChar = name[0].toUpperCase();

  return (
    <S.Avatar color={color} colorLighten={colorLighten}>
      {imageSrc && <img src={imageSrc} alt={name} />}
      {!imageSrc && <S.Name>{firstChar}</S.Name>}
    </S.Avatar>
  );
}
