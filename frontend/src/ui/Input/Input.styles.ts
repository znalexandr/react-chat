import styled from '@emotion/styled';
import { rgba } from 'polished';

import { colors } from '@/ui';

export const Input = styled.input`
  width: 100%;
  height: 56px;
  padding: 0 18px;
  border: 1px solid ${colors.gray300};
  border-radius: 4px;
  background: ${colors.whiteMain};

  font-size: 16px;
  line-height: 19px;
  color: ${colors.blackMain};

  &:hover {
    border-color: ${colors.primaryHover};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${rgba(colors.primaryHover, 0.5)};
    border-color: ${rgba(colors.primaryHover, 0.5)};
  }
`;
