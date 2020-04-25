import styled from '@emotion/styled';

import { colors } from '@/ui';

export const MessagerPage = styled.div`
  display: grid;
  grid-template-columns: 320px 1fr;
  height: 100vh;
  background: ${colors.white};
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.04);
`;
