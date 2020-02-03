import { ReactNode } from 'react';
import styled from '@emotion/styled';

type Props = {
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around';
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  children: ReactNode;
};

export const Flex = styled.div<Props>`
  display: flex;
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
`;
