import React from 'react';
import { action } from '@storybook/addon-actions';

import { Button } from './Button';

export default {
  title: 'Molecules/Button',
};

export function Base() {
  return <Button text="Click me!" onClick={action('click')} />;
}
