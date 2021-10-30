import React, { FunctionComponent } from 'react';
import { Global, css } from '@emotion/react';

const defaultStyle = css`
  @import url('<https://fonts.googleapis.com/css2?family=Nanum+Myeongjo:wght@400;700;800&display=swap>');

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font: 100%/1.625 -apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto',
      'Helvetica', 'Arial', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol';
    font-size: 16px;
  }

  html,
  body,
  #___gatsby {
    height: 100%;
  }

  a,
  a:hover {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }
`;

const GlobalStyle: FunctionComponent = function () {
  return <Global styles={defaultStyle} />;
};

export default GlobalStyle;
