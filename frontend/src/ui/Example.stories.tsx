import React from 'react';

import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';

export default {
  title: 'Atoms/ExampleStories',
  component: Button,
};

export function Text() {
  return <Button onClick={action('clicked')}>Hello Button</Button>;
}

export function Emoji() {
  return (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  );
}

Emoji.story = {
  name: 'with emoji',
};
