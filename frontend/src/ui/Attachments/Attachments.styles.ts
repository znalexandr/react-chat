import styled from '@emotion/styled';

import { colors } from '..';

export const Attachments = styled.div`
  position: relative;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: max-content;
  grid-gap: 14px;
`;

export const AttachItem = styled.div`
  position: relative;
  width: 64px;
  height: 64px;
  border-radius: 4px;
  background-color: ${colors.gray400};
  overflow: hidden;
`;

export const ImageThumb = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

export const ImageFull = styled.img`
  display: block;
`;

export const FileDownloader = styled.a`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 5px;
  font-size: 12px;
  font-weight: bold;
  color: ${colors.gray700};
`;
