import React from 'react';

import { Input, Button } from '@/ui';

import { List } from './List';

export default {
  title: 'Atoms/List',
};

export function Base() {
  return (
    <List>
      <Input placeholder="Login" />
      <Input placeholder="Password" type="password" />
      <Button text="Submit" />
    </List>
  );
}

export function Type() {
  return (
    <List gap="32px">
      <section>
        <h2>Row</h2>
        <List type="row">
          <Input placeholder="Login" />
          <Input placeholder="Password" type="password" />
          <Button text="Submit" />
        </List>
      </section>
      <section>
        <h2>Column</h2>
        <List type="column">
          <Input placeholder="Login" />
          <Input placeholder="Password" type="password" />
          <Button text="Submit" />
        </List>
      </section>
    </List>
  );
}

export function Gap() {
  return (
    <List gap="40px">
      <Input placeholder="Login" />
      <Input placeholder="Password" type="password" />
      <Button text="Submit" />
    </List>
  );
}
