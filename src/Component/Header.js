import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header className='header'>
        <nav className='navbar'>
          <Link to="/" end='true' className='link'>
            Home
          </Link>
          <Link to="/errorboundary" className='link'>ErrorBoundary</Link>
          <Link to="/pagination" className='link'>Pagination</Link>
        </nav>
      </header>
    </>
  );
};

export default Header;
