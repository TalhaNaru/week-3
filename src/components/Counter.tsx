import { useState } from 'react';

export function Counter() {
  const [count, setcount] = useState(0);
  return (
    <div>
      <p>Count : {count}</p>
      <button onClick={() => setcount(count + 1)}>Add One</button>
    </div>
  );
}
