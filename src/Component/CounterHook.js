// import { useState } from 'react';
import { useReducer } from 'react';
import { useErrorHandler } from 'react-error-boundary';

function reducer(state, action) {
  
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };

    case 'reset':
      return { count: 0 };

    default:
      throw new Error();
  }
}
// useCounter custom hook
 function useCounter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const handleError = useErrorHandler();

  function increment() {
    try {
      if (state.count >= 5) {
        throw new Error('Count Limit Exceeded 5');
      } else {
        dispatch({ type: 'increment' });
      }
    } catch (e) {
      handleError(e);
    }
  }

  function decrement() {
    dispatch({ type: 'decrement' });
  }

  function reset() {
    dispatch({ type: 'reset' });
  }

  return { count: state.count, increment, decrement, reset };

}


export default  function Counter() {
  const { count, increment, decrement, reset } = useCounter();

  return (
    <>
      <section className="counter_hook">
        <div className="counter_container">
          <h1>Increment the count more than 5</h1>
          <p>Count: {count}</p>
          <button onClick={decrement}>
            Decrement
          </button>
          <button onClick={increment}>
            Increment
          </button>
          <button onClick={reset}>
            Reset
          </button>
        </div>
      </section>
    </>
  );
};




// // Hook Counter
// const CounterHook = () => {
//   const MAX_COUNT_ALLOWED = 5;
//   const initialCount = 0;
//   const [count, setCount] = useState(initialCount);

//   const handleError = useErrorHandler();

//   const inCountHandler = () => {
//     // try and catch to get eventandler error
//     try {
//       if (count === MAX_COUNT_ALLOWED) {
//         throw new Error('Count Limit Exceeded!');
//       } else {
//         setCount((prevcount) => prevcount + 1);
//       }
//     } catch (e) {
//       handleError(e);
//     }
//   };

//   const deCountHandler = () => {
//     if (count <= 0) {
//       setCount(initialCount);
//     } else setCount((prevcount) => prevcount - 1);
//   };

//   const resetCountHandler = () => {
//     setCount(initialCount);
//   };

//   return (
//     <>
//       <section className="counter_hook">
//           <div className='counter_container'>
//             <h1>Increment the count more than 5</h1>
//             <p>Count:  {count}</p>
//             <button onClick={deCountHandler}>Decrement</button>
//             <button onClick={inCountHandler}>Increment</button>
//             <button onClick={resetCountHandler}>Reset</button>
//           </div>
//       </section>
//     </>
//   );
// };

// export default CounterHook;
