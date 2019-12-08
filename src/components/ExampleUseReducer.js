import React, { useReducer } from 'react';

import { StyledRow, StyledButton } from './Example.styles';

function init(initialCount) {
  return { count: initialCount };
}

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'reset':
      return init(action.payload);
    default:
      throw new Error();
  }
}

const ExampleUseReducer = ({ initialCount }) => {
  const [state, dispatch] = useReducer(reducer, initialCount, init);

  return (
    <main>
      <StyledRow>
        <StyledButton onClick={() => dispatch({ type: 'increment' })}>
          Click me ({state.count})
        </StyledButton>
      </StyledRow>

      <StyledRow>
        <StyledButton
          onClick={() => dispatch({ type: 'reset', payload: initialCount })}
        >
          Reset
        </StyledButton>
      </StyledRow>
    </main>
  );
};

export default ExampleUseReducer;
