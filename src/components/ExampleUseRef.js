import React, { useRef, useEffect } from 'react';
import { StyledRow, StyledButton, StyledInput } from './Example.styles';

const ExampleUseRef = () => {
  // first example - accessing the DOM node
  const inputEl = useRef(null);

  const handleButtonClick = () => {
    inputEl.current.focus();
  };

  // second example - timer
  const intervalRef = useRef();

  useEffect(() => {
    const id = setInterval(() => {
      console.log('A second has passed');
    }, 1000);
    intervalRef.current = id;
    return () => clearInterval(intervalRef.current);
  });

  const handleCancelClick = () => clearInterval(intervalRef.current);

  return (
    <main>
      <StyledRow>
        <StyledInput placeholder="example" ref={inputEl} type="text" />
      </StyledRow>
      <StyledRow>
        <StyledButton onClick={handleButtonClick}>Focus the input</StyledButton>
      </StyledRow>

      <StyledRow>
        <StyledButton onClick={handleCancelClick}>
          Cancel the interval
        </StyledButton>
      </StyledRow>
    </main>
  );
};

export default ExampleUseRef;
