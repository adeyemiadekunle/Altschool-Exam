import React, { useState } from 'react';
import useFetch from '../Component/useFetch';
import { Helmet } from 'react-helmet-async';
import UserCard from '../Component/UserCard';

const Users = () => {
  const [page, setpage] = useState(1);

  const { loading, error, data } = useFetch(
    `https://randomuser.me/api/?page=${page}&results=4&seed=abc`
  );

  console.log({ loading, error, data });
  // const total = data?.results?.length;
  const pages = 20;

  if (loading) {
    return (
      <>
        <div className="loader_container">
          <p className="loader_container_inner">Loading...</p>
        </div>
      </>
    );
  }

  if (!loading && error) {
    return (
      <div
        style={{
          width: '100%',
          maxWidth: '90%',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingTop: '200px',
          textAlign: 'center',
        }}
      >
        Error
      </div>
    );
  }

  return (
    <>
     <Helmet>
        <title> Users | AltSchool Examination by Adeyemi Adekunle</title>
        <meta
      name="description"
      content="Users, it display list of users from randomuser.me api"
    />   <link rel='canonical' href='https://altschool-examination.firebaseapp.com/pagination' />
   
      </Helmet>
      <main className="user">
        <section className="user_container">
          <div>
            <div>
              <h2>List of User details</h2>
            </div>
            <div className="text-container">
              <div className='user_card_container'>
                {data?.results.map((each, index) => {
                  return (
                    <div key={index}>
                      <UserCard
                      ImgUrl={each.picture.large}
                      firstName={each.name.first}
                      lastName={each.name.last}
                      country={each.location.country}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="bottom-container">
            <p className="pageofpage">
              Pages: {page} of {pages}
            </p>

            <div className="prevandnext">
              <div>
                {
                  <button
                    disabled={page <= 1}
                    onClick={() => setpage((prev) => prev - 1)}
                    className="prev"
                  >
                    prev
                  </button>
                }
              </div>

              <div>
                {
                  <button
                    disabled={page >= pages}
                    aria-disabled={page >= pages}
                    onClick={() => setpage((prev) => prev + 1)}
                    className="next"
                  >
                    next
                  </button>
                }
              </div>
            </div>

            <div className="page_container">
              {Array.from(
                { length: pages },
                (value, index) => index + 1
              ).map((each) => (
                <button
                  onClick={() => setpage(each)}
                  className="page"
                >
                  {each}
                </button>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Users;
