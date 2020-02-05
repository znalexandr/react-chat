import React from 'react';

import * as S from './Attachments.styles';
import * as T from './Attachments.types';

export function Attachments(props: T.AttachmentsProps) {
  const { className, data } = props;

  return (
    <S.Attachments className={className}>
      {data.map(item => (
        <S.AttachItem key={item.url}>
          {item.type === 'img' && item?.url && <S.Image src={item.url} />}
        </S.AttachItem>
      ))}
    </S.Attachments>
  );
}
