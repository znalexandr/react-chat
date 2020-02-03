import React from 'react';
import { css, Global } from '@emotion/core';

import 'antd/dist/antd.css';

const styles = css`
  body {
    margin: 0;
  }
`;

export function StylesProvider({ children }) {
  return (
    <>
      <Global styles={styles} />
      {children}
    </>
  );
}
