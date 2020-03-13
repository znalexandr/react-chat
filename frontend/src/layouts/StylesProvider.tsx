import React from 'react';
import { css, Global } from '@emotion/core';

const styles = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  ul,
  ol {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  html {
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
  }

  body {
    min-height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    padding: 0;
    margin: 0;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.85);
  }

  img {
    display: block;
    max-width: 100%;
  }

  body,
  div,
  dl,
  dt,
  dd,
  ul,
  ol,
  li,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  pre,
  code,
  form,
  fieldset,
  legend,
  input,
  textarea,
  p,
  blockquote,
  th,
  td,
  hr,
  button,
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    margin: 0;
    padding: 0;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  a {
    text-decoration: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 0;
    margin-bottom: 0.5em;
    font-weight: 500;
  }
  p {
    margin-top: 0;
    margin-bottom: 1em;
  }

  [hidden] {
    display: none !important;
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
