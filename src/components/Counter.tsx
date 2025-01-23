import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="my-4 flex items-center gap-4 p-4 border rounded-lg bg-slate-50 dark:bg-slate-800">
      <button
        onClick={() => {
          console.log('decrement');
          setCount((prevCount) => prevCount - 1);
        }}
        className="px-3 py-1 border rounded hover:bg-slate-200 dark:hover:bg-slate-700"
      >
        -
      </button>
      <span>计数: {count}</span>
      <button
        onClick={() => setCount((prevCount) => prevCount + 1)}
        className="px-3 py-1 border rounded hover:bg-slate-200 dark:hover:bg-slate-700"
      >
        +
      </button>
    </div>
  );
}
