import React from 'react';
import CounterHook from '../Component/CounterHook';
import { Helmet } from 'react-helmet-async';

const Counter = () => {
 

  return (
    <>
  <Helmet>
        <title> Counter | AltSchool Examination by Adeyemi Adekunle</title>
        <meta
      name="description"
      content="Error Boundary was used to catch error"
    />
       <link rel='canonical' href='https://altschool-examination.firebaseapp.com/errorboundary' />
      </Helmet>
      <main className="counter">
        <h1 className='title'>Counter</h1>

        <div>
            <CounterHook />     
        </div>
      </main>
    </>
  );
};

export default Counter;
