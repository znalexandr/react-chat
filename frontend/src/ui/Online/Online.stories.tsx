import React from 'react';

import { Flex } from '../Flex';

import { Online } from './Online';

export default {
  title: 'Atoms/Online'
};

export const Basic = () => (
  <Flex>
    <Online isOnline />
    <Online />
  </Flex>
);
