import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [message, setMessage] = useState('');

  const handleClick = () => {
    setMessage('Hello World');
  };

  return ( 
    <div className="App">
      <header className="App-header">
        <h1>{message || 'Click the button to see the message'}</h1>
        <button onClick={handleClick}>Click here</button>
      </header>
    </div>
  );
}

export default App;

