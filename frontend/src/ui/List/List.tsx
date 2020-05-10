import styled from '@emotion/styled';

type Props = {
  type?: 'row' | 'column';
  gap?: string;
  width?: string;
};

export const List = styled.div<Props>`
  display: grid;
  grid-auto-flow: ${(p) => p.type || 'row'};
  grid-gap: ${(p) => p.gap || '16px;'};
  width: ${(p) => p.width};
`;
