import React, { useState } from 'react';

const App = () => {
  const [resource, setResource] = useState("posts"); //the first variable 'resource' could be named anything, second "setResource"is a function call to update state

  return (
    <div>
      <div>
        <button onClick={() => setResource("posts")}>Posts</button>
        <button onClick={() => setResource("to-dos")}>To-Dos</button>
      </div>
      {resource}
    </div>
  );
}

export default App;
