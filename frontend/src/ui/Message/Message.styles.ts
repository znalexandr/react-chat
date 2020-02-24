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

      ${Attachments} {
        justify-content: flex-end;
      }
    `};
`;
