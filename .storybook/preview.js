import React from 'react';
import styled from '@emotion/styled';
import { addDecorator } from '@storybook/react';

import { StylesProvider } from '@/layouts';

const Body = styled.div`
  padding: 1rem;
`;

addDecorator(storyFn => (
  <StylesProvider>
    <Body>{storyFn()}</Body>
  </StylesProvider>
));
