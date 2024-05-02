/*
  JSX

  JSX is a XML-based syntax extension to JavaScript. JSX is not HTML~
  We use 'className' instead of 'class', for example
  JSX is converted to vanilla JavaScript. This is called 'transpilation'

  <h1>Hello React</h1> -> return React.createElement('h1', {}, 'Hello React')

  Conventions
    - All elements must be closed
    - Empty elements (br, hr, img, etc.) must be closed with a slash ( / )
    - JSX uses camelCase style (onClick, tableIndex, etc.)
    - Use curly braces to include literal JavaScript
    - Use double curly braces with objects
*/


import { useState } from 'react';
import './css/index.css';

// Creating an interactive greetings message
function App() {
  // Setting a variable and a function to manage the input
  // Spoiler: useState() is a hook
  const [userName, setUserName] = useState('');

  const handleInput = event => {
    setUserName(event.target.value);
  }

  const heading = <h2>Welcome to React, <span>{userName}</span></h2>

  return (
    <main>
      <div>
        {/* This is a comment in JSX */}
        {heading}
        <br />
        <input
          type='text'
          className='input'
          onChange={handleInput}
          placeholder='Your name'
        />
      </div>
    </main>
  );
}

export default App;