import { useState } from 'react';

function MyButton() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  return (
    <div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <h4>Clicked {count} times</h4>
    </div>
  );
}

export default MyButton;
