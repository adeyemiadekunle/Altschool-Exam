import { useState } from 'react';
import { useErrorHandler } from 'react-error-boundary';

// Hook Counter
const Counter = () => {
  const MAX_COUNT_ALLOWED = 5;
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  const handleError = useErrorHandler();

  const inCountHandler = () => {
    // try and catch to get eventandler error
    try {
      if (count === MAX_COUNT_ALLOWED) {
        throw new Error('Count Limit Exceeded!');
      } else {
        setCount((prevcount) => prevcount + 1);
      }
    } catch (e) {
      handleError(e);
    }
  };

  const deCountHandler = () => {
    if (count <= 0) {
      setCount(initialCount);
    } else setCount((prevcount) => prevcount - 1);
  };

  const resetCountHandler = () => {
    setCount(initialCount);
  };

  return (
    <>
      <section className="counter">
          <div className='counter_container'>
            <h1>Increment the count more than 5</h1>
            <p>Count:  {count}</p>
            <button onClick={deCountHandler}>Decrement</button>
            <button onClick={inCountHandler}>Increment</button>
            <button onClick={resetCountHandler}>Reset</button>
          </div>
      </section>
    </>
  );
};

export default Counter;
