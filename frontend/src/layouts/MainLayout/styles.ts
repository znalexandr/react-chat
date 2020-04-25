import styled from '@emotion/styled';

import { colors } from '@/ui';

export const MainLayout = styled.div`
  position: relative;
  min-height: 100vh;
  background-color: ${colors.whiteMain};
`;

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 20px;
  max-width: 1140px;
  min-width: 300px;
  width: 100%;
  height: 100%;
`;
