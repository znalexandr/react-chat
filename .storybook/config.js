import React from 'react';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import GlobalStyles from '../src/GlobalStyles';

const WithGlobalStyles = story => (
  <div id="app">
    <div style={{ padding: '10px' }}>
      <GlobalStyles />
      {story()}
    </div>
  </div>
);

addDecorator(WithGlobalStyles);
addParameters({ viewport: { viewports: INITIAL_VIEWPORTS } });

const req = require.context('../src/ui', true, /\.stories\.tsx$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
