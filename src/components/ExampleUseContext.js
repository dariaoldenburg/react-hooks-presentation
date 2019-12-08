import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext/ThemeContext';

const ExampleUseContext = () => {
  const theme = useContext(ThemeContext);

  return (
    <div
      style={{
        background: theme.primaryColor,
        color: theme.secondaryColor,
        padding: '15px 30px',
        fontSize: 14
      }}
    >
      Hello
    </div>
  );
};

export default ExampleUseContext;
