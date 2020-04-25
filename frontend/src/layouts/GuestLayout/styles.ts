import styled from '@emotion/styled';

import { colors } from '@/ui';

export const GuestLayout = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: 1fr 60px;
  min-height: 100vh;
`;

export const Main = styled.main`
  min-height: 100%;
`;

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;
  height: 100%;
  max-width: 980px;
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
