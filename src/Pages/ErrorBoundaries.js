import React from 'react';
import Counter from '../Component/Counter';
import { Helmet } from 'react-helmet-async';

const ErrorBoundaries = () => {
 

  return (
    <>
  <Helmet>
        <title> ErrorBoundary | AltSchool Examination by Adeyemi Adekunle</title>
        <meta
      name="description"
      content="Error Boundary was used to catch error"
    />
       <link rel='canonical' href='https://altschool-examination.firebaseapp.com/errorboundary' />
      </Helmet>
      <main className="error_boundary">
        <h1 className='title'>Error Boundary</h1>

        <div>
            <Counter />     
        </div>
      </main>
    </>
  );
};

export default ErrorBoundaries;
