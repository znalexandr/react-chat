import styled from '@emotion/styled';
import { rgba } from 'polished';

import { colors } from '@/ui';

export const Header = styled.h2`
  margin-bottom: 8px;
`;

export const Description = styled.h4`
  margin-bottom: 32px;
  color: ${colors.gray600};
`;

export const FormWrapper = styled.div`
  padding: 42px;
  border-radius: 3px;
  background-color: ${colors.whiteMain};
  box-shadow: 0 0 25px ${rgba(colors.black, 0.04)};
`;

export const ContentCentered = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  max-width: 480px;
  height: 100%;
  text-align: center;
`;

export const Link = styled.a`
  color: ${colors.gray600};
  cursor: pointer;

  &:hover {
    color: ${colors.primaryHover};
  }
`;
