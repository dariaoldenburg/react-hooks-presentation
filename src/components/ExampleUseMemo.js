import React, { useState, useMemo, useEffect } from 'react';
import { StyledRow, StyledButton } from './Example.styles';

// useMemo(() => doSomething(a, b), [a, b]);

// useCallback(() => {
//   doSomething(a, b);
// }, [a, b]);

// useCallback(fn, deps) is equivalent to useMemo(() => fn, deps)

const ExampleUseMemo = () => {
  const [clickCount, setClickCount] = useState(0);
  const [memoCount, setMemoCount] = useState(0);

  const memoFunction = () => {
    console.log(memoCount, 'memo called');
  };

  useMemo(memoFunction, [memoCount]);

  // or
  // useMemo(() => console.log(memoCount, 'memo called'), [memoCount]);

  const handleButtonClick = () => {
    if (clickCount % 2 !== 0) {
      setMemoCount(memoCount + 1);
    }
    setClickCount(clickCount + 1);
  };

  useEffect(() => {
    console.log(clickCount, 'click');
  }, [clickCount]);

  return (
    <main>
      <StyledRow>
        <StyledButton onClick={() => handleButtonClick()}>
          Memo count
        </StyledButton>
      </StyledRow>
    </main>
  );
};

export default ExampleUseMemo;
