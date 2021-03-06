import React, { useState } from 'react';
import ResourceList from './ResourceList';
import UserList from './UserList';

const App = () => {
  const [resource, setResource] = useState("posts"); //the first variable 'resource' could be named anything, second "setResource"is a function call to update state

  return (
    <div>
      <UserList />
      <div>
        <button onClick={() => setResource("posts")}>Posts</button>
        <button onClick={() => setResource("todos")}>To-Dos</button>
      </div>
      <ResourceList resource={resource} />
    </div>
  );
}

export default App;
