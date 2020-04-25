import styled from '@emotion/styled';

import { colors } from '@/ui';

export const MainLayout = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-top: 30px;
  min-height: 100vh;
`;

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;
  max-width: 520px;
  min-width: 320px;
`;

export const Footer = styled.footer`
  margin-top: auto;
  padding: 16px 0;
`;
export const Version = styled.div`
  text-align: center;
  color: ${colors.gray500};
`;
