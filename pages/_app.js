import React from 'react';
import '../styles/global';
import {CacheProvider} from '@emotion/core'
import {cache} from "emotion";
import {globalStyles} from '../styles/global'

const App = ({ Component, pageProps }) => {
  return (
    <CacheProvider value={cache}>
      {globalStyles}
      <Component {...pageProps} />
    </CacheProvider>
  );
};

export default App;