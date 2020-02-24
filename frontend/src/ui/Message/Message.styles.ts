import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { Avatar as AvatarUI, colors, Attachments as AttachmentsUI } from '..';

export const Message = styled.div`
  position: relative;
  display: flex;
`;

export const Avatar = styled(AvatarUI)`
  flex-shrink: 0;
  margin: auto 14px 22px 0;
`;

export const Time = styled.div`
  margin-top: 8px;
  font-size: 12px;
  line-height: 14px;
  color: ${colors.gray400};
`;

export const Babel = styled.div`
  display: inline-block;
  max-width: 400px;
  padding: 14px;
  border-radius: 12px 12px 12px 0;
  background: #3674ff;
  box-shadow: 0 5px 5px rgba(54, 116, 255, 0.19);
  color: #fff;
`;

export const Attachments = styled(AttachmentsUI)`
  margin-top: 14px;
`;

export const IconWrapper = styled.div`
  position: absolute;
  right: 0;
  bottom: -2px;
`;

export const MessageContent = styled.div`
  position: relative;
`;

type MessageBoxProps = {
  isOwner: boolean;
};

export const MessageBox = styled.div<MessageBoxProps>`
  position: relative;
  display: inline-flex;
  flex-direction: ${p => p.isOwner && 'row-reverse'};
  margin-left: ${p => p.isOwner && 'auto'};

  ${p =>
    p.isOwner &&
    css`
      ${Avatar} {
        margin-left: 14px;
        margin-right: 0;
      }

      ${Time} {
        margin-right: 24px;
        text-align: right;
      }

      ${Babel} {
        border: 1px solid #ececec;
        border-radius: 12px 12px 0 12px;
        background: #fff;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.02);
        color: #202020;
      }

      ${Attachments} {
        justify-content: flex-end;
      }
    `};
`;
