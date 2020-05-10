import React from 'react';

import { List } from '../List';

import { Icon } from './Icon';
import { IconName } from './Icon.types';
import * as icons from './icons';

export default {
  title: 'Atoms/Icons',
};

export function Icons() {
  return (
    <>
      <h2>Icons list</h2>
      <List gap="16px" width="300px">
        {Object.keys(icons).map((name: IconName) => (
          <List type="column" gap="8px" key={name}>
            <div>{name}</div>
            <Icon icon={name} width="18px" />
          </List>
        ))}
      </List>
    </>
  );
}
