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
      </Helmet>
    <main>
      <section className="error-page">
        <h1>404</h1>
        <p>Error Page</p>
      </section>
    </main>
    </>
    
  )
}

export default Error