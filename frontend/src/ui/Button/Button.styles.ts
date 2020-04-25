import styled from '@emotion/styled';
import { rgba } from 'polished';

import { colors } from '@/ui';

type ButtonProps = {
  fullWidth?: boolean;
};

export const Button = styled.button<ButtonProps>`
  display: inline-block;
  width: ${(p) => p.fullWidth && '100%'};
  height: 56px;
  padding: 0 18px;
  border: none;
  border-radius: 4px;
  background: ${colors.primary};

  text-align: center;
  font-size: 16px;
  color: ${colors.white};
  cursor: pointer;

  &:hover {
    background-color: ${colors.primaryHover};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${rgba(colors.primaryHover, 0.5)};
  }
`;
