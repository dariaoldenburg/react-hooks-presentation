import React, { useState, useEffect } from 'react';

import { StyledRow, StyledButton } from './Example.styles';

const ExampleHooks = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You click ${count} times`;
  }, [count]);

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleButtonClick = () => setCount(count => count + 1);

  return (
    <main>
      <StyledRow>
        <StyledButton onClick={handleButtonClick}>
          Click me ({count})
        </StyledButton>
      </StyledRow>
      <StyledRow>Width: {width}</StyledRow>
    </main>
  );
};

export default ExampleHooks;
