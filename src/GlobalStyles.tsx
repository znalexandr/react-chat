import React from 'react';
import { css, Global } from '@emotion/core';

const styles = css`
  body {
    margin: 0;
  }
`;

function GlobalStyles() {
  return (
    <>
      <Global styles={styles} />
    </>
  );
}

export default GlobalStyles;
