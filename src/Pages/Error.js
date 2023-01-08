import React from 'react'
import { Helmet } from 'react-helmet-async';

const Error = () => {
  return (
    <>
 <Helmet>
        <title> Error page | AltSchool Examination by Adeyemi Adekunle</title>
        <meta
      name="description"
      content="This is error page and it is not found"
    />
        <link rel='canonical' href='https://altschool-examination.firebaseapp.com/error' />
      </Helmet>
    <main>
      <section className="error-page">
        <h1>404</h1>
        <p> Page Not Found</p>
        <button className='back_home_btn'>
          <a href="/">Back Home</a>
        </button>
      </section>
    </main>
    </>
    
  )
}

export default Error