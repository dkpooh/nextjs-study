import React from 'react';
import { AlertStyled } from './alertStyled'

const Alert = ({ children, type }) => {
  return (
    <AlertStyled type={type}>
      {children}
    </AlertStyled>
  );
};

export default Alert;