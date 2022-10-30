import React from 'react';
import Counter from '../Component/Counter';
import { ErrorBoundary } from 'react-error-boundary';
import { Fallback } from '../Component/Fallback';

const ErrorBoundaries = () => {
  const errorHandler = (error, errorInfo) => {
    console.log('Logging', error, errorInfo);
  };

  return (
    <>
      <main className="error_boundary">
        <h1 className='title'>Error Boundary</h1>

        <div>
          <ErrorBoundary
            FallbackComponent={Fallback}
            onError={errorHandler}
          >
            <Counter />
          </ErrorBoundary>
        </div>
      </main>
    </>
  );
};

export default ErrorBoundaries;
