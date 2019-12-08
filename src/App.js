import React from 'react';
import './App.css';
import { ThemeContext, themes } from './ThemeContext/ThemeContext';

// import Example from './components/ExampleClass';
// import Example from './components/ExampleHooks';
import Example from './components/ExampleUseContext';

function App() {
  return (
    <ThemeContext.Provider value={themes.dark}>
      <div className="App">
        <Example />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
