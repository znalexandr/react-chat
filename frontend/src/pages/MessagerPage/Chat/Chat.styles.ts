import styled from '@emotion/styled';

import { colors } from '@/ui';

export const Chat = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: 60px 1fr 60px;
  width: 100%;
  height: 100vh;
`;

export const Header = styled.div`
  border-bottom: 1px solid ${colors.gray300};
`;

export const Main = styled.div`
  overflow-x: hidden;
  overflow-y: scroll;
  padding: 16px;
`;

export const Footer = styled.div`
  border-top: 1px solid ${colors.gray300};
`;
