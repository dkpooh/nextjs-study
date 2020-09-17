import {css, Global } from '@emotion/core'

export const globalStyles = (
  <Global
     styles={css`
       html,
       body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
        Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        line-height: 1.6;
        font-size: 18px;
       }
    `}
  />
)