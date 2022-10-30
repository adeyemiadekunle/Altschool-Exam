
// ErrorFallback
export const Fallback = ({error, resetErrorBoundary}) => {
    return (
      <div role="alert" className='error_message'>
        <p>Something Went Wrong !!!</p>
        <pre>{error.message}</pre> 
        <button onClick={resetErrorBoundary}>Try again</button>
      </div>
    );
  };