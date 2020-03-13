import styled from '@emotion/styled';

export type BabelProps = {
  isOwner?: boolean;
};

export const Babel = styled.div<BabelProps>`
  position: relative;
  display: inline-flex;
  max-width: 440px;
  padding: 14px;
  border-radius: ${p => (p.isOwner ? '12px 12px 0 12px' : '12px 12px 12px 0')};
  border: ${p => p.isOwner && '1px solid #ececec'};
  background: ${p => (p.isOwner ? '#FFF' : '#3674ff')};
  box-shadow: ${p =>
    p.isOwner
      ? '0 4px 4px rgba(0, 0, 0, 0.02)'
      : '0 5px 5px rgba(54, 116, 255, 0.19)'};
  color: ${p => (p.isOwner ? '#202020' : '#fff')};
  overflow: hidden;
`;
