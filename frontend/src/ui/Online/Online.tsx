import styled from '@emotion/styled';

import { colors } from '../styles';

type OnlineProps = {
  isOnline?: boolean;
};

export const Online = styled.div<OnlineProps>`
  display: block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${(p) => (p.isOnline ? colors.green : colors.gray400)};
`;
