import React from 'react';
import { Helmet } from 'react-helmet-async';


const Home = () => {
  return (
    <>
      <Helmet>
        <title> Home | AltSchool Examination by Adeyemi Adekunle</title>
        <meta
      name="description"
      content="This is Second Semester Examination for AltSchool"
    />
       <link rel='canonical' href='https://altschool-examination.firebaseapp.com' />
      </Helmet>
     
    
      <main className="home">
        <section className="home_container">
          <h1 className="heading1">Welcome to AltSchool Africa</h1>
          <p className="text"> Second Semester Examination</p>
          {/* <p className="text">Question 4</p> */}
        </section>
      </main>
    </>
  );
};

export default Home;
