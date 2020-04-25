import React, { useState } from 'react';

import { Input } from './Input';

export default {
  title: 'Molecules/Input',
};

export function Base() {
  const [value, setValue] = useState<string>();

  return (
    <Input value={value} onChange={setValue} placeholder="Print text..." />
  );
}
