import React, { useState } from 'react';

import { LightBox } from '..';

import * as S from './Attachments.styles';
import * as T from './Attachments.types';

export function Attachments(props: T.AttachmentsProps) {
  const { className, data } = props;

  const [imageFullSrc, setImageFullSrc] = useState('');

  const hiddenImageFull = () => setImageFullSrc('');

  return (
    <>
      <S.Attachments className={className}>
        {data.map(item => {
          const isImage = item.type === 'img';
          const isFile = item.type === 'file';
          const handleImageClick = () => setImageFullSrc(item.url);

          return (
            <S.AttachItem key={item.url}>
              {isImage && item?.url && (
                <S.ImageThumb src={item.url} onClick={handleImageClick} />
              )}
              {isFile && item?.url && (
                <S.FileDownloader href={item.url} target="_blank" download>
                  {item.exp}
                </S.FileDownloader>
              )}
            </S.AttachItem>
          );
        })}
      </S.Attachments>
      {imageFullSrc && (
        <LightBox onClose={hiddenImageFull}>
          <S.ImageFull src={imageFullSrc} />
        </LightBox>
      )}
    </>
  );
}
