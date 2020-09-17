import React from 'react';
import { LayoutStyled } from './layoutStyled'

const Layout = ({ children }) => {
  return (
    <LayoutStyled>
      {children}
    </LayoutStyled>
  );
};

export default Layout;