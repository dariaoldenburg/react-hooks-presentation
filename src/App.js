import React from 'react';
import './App.css';
import { ThemeContext, themes } from './ThemeContext/ThemeContext';

// import Example from './components/ExampleClass';
// import Example from './components/ExampleHooks';
// import Example from './components/ExampleUseContext';
// import Example from './components/ExampleUseReducer';
// import Example from './components/ExampleUseMemoUseCallback';
// import Example from './components/ExampleUseMemo';
import Example from './components/ExampleUseRef';

function App() {
  return (
    <ThemeContext.Provider value={themes.dark}>
      <div className="App">
        <Example />
        {/* useReducer */}
        {/* <Example initialCount={2} /> */}
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
