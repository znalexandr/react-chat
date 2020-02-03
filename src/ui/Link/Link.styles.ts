import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { css } from '@emotion/core';

import { colors } from '@/ui';

const linkStyles = css`
  color: ${colors.primary};
  text-decoration: none;
`;

export const RouterLink = styled(NavLink)`
  ${linkStyles};
`;
export const ExternalLink = styled.a`
  ${linkStyles};
`;
