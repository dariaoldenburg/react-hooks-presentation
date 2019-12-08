import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { StyledRow, StyledButton } from './Example.styles';

// useMemo(() => doSomething(a, b), [a, b]);

// useCallback(() => {
//   doSomething(a, b);
// }, [a, b]);

// useCallback(fn, deps) is equivalent to useMemo(() => fn, deps)

const ExampleUseMemoUseCallback = () => {
  const [callbackCount, setCallbackCount] = useState(0);
  const [memoCount, setMemoCount] = useState(0);

  const callbackFunction = useCallback(() => {
    console.log(callbackCount, 'callback function');
    return callbackCount;
  }, [callbackCount]);

  // or
  // useMemo(() => console.log(memoCount, 'memo called'), [memoCount]);

  const memoFunction = () => {
    console.log(memoCount, 'memo function');
  };
  useMemo(memoFunction, [memoCount]);

  return (
    <main>
      <StyledRow>
        <ChildComponent action={callbackFunction} />
      </StyledRow>
      <StyledRow>
        <StyledButton onClick={() => setCallbackCount(callbackCount + 1)}>
          Callback count
        </StyledButton>
      </StyledRow>

      <StyledRow>
        <StyledButton onClick={() => setMemoCount(memoCount + 1)}>
          Memo count
        </StyledButton>
      </StyledRow>
    </main>
  );
};

const ChildComponent = ({ action }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let val = action();
    setValue(val);
  }, [action]);

  return <div>Child: {value}</div>;
};

export default ExampleUseMemoUseCallback;
